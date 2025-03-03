import React from "react";

function StarRating({ index, src }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <input type="checkbox" id={index} />
      <label htmlFor={index}>
        <img src={src}></img>
      </label>
    </div>
  );
}

export default StarRating;
