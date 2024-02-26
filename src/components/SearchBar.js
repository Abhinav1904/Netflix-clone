import React from "react";
import { BG_IMG_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const SearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);

  return (
    <div>
      <img className="absolute -z-10" alt="bg-img" src={BG_IMG_URL} />
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 grid grid-cols-12">
          <input
            className="col-span-9 p-4 m-4 rounded-lg"
            type="text"
            placeholder={lang[langKey].placeholder}
          />
          <button className="py-2 px-4 m-4 col-span-3 text-white bg-red-700 rounded-lg ">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
