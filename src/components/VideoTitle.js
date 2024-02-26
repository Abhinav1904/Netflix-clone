import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black aspect-video w-full">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/3 ">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 rounded-lg hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="text-white bg-gray-500 mx-2 p-4 px-12 rounded-lg hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
