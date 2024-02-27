import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SearchMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.search);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black bg-opacity-80">
      <div>
        {movieNames.map((movieName, index) => (
          <MoviesList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchMovieSuggestions;
