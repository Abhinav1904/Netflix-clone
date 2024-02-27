import openai from "../utils/openAi";
import React, { useRef } from "react";
import { API_OPTIONS, BG_IMG_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { addSearchMovieResult } from "../utils/searchSlice";

const SearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearchClick = async () => {
    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". only give me names of 5 movies, coma separated like the example result given ahead. Example Result: Gadar,Hera pheri,Golmaal,Bhootnath,Krrish";

    const searchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = searchResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addSearchMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div>
      <img className="fixed -z-10" alt="bg-img" src={BG_IMG_URL} />
      <div className="pt-[10%] flex justify-center">
        <form
          className="w-1/2 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="col-span-9 p-4 m-4 rounded-lg"
            ref={searchText}
            type="text"
            placeholder={lang[langKey].placeholder}
          />
          <button
            className="py-2 px-4 m-4 col-span-3 text-white bg-red-700 rounded-lg "
            onClick={handleSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
