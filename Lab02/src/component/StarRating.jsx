import React from "react";

function StarRating({ index, src }) {
  return (
    <div className="flex justify-evenly">
      <input
        type="checkbox"
        id={index}
        className="accent-pink-400 w-[15px] h-[15px]"
      />
      <label htmlFor={index}>
        <img src={src}></img>
      </label>
    </div>
  );
}

export default StarRating;
