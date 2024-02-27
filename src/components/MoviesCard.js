import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MoviesCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-40 mr-4">
      <img alt="poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MoviesCard;
