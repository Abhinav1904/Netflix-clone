import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import SearchPage from "./SearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const showSearch = useSelector((store) => store.search?.showSearch);
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {showSearch ? (
        <SearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
