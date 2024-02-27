import React from "react";
import SearchBar from "./SearchBar";
import SearchMovieSuggestions from "./SearchMovieSuggestions";

const SearchPage = () => {
  return (
    <div>
      <SearchBar />
      <SearchMovieSuggestions />
    </div>
  );
};

export default SearchPage;
