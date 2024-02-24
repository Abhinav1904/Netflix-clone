import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MoviesCard = ({ posterPath }) => {
  return (
    <div className="w-40 pr-2">
      <img alt="poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MoviesCard;
