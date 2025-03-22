import React from "react";

function CatergoryCheckbox({ name }) {
  return (
    <div>
      <input
        type="checkbox"
        className="accent-pink-400 w-[15px] h-[15px]"
        id={name}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default CatergoryCheckbox;
