import React from "react";

function CatergoryCheckbox({ name }) {
  return (
    <div>
      <input type="checkbox" id={name} />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default CatergoryCheckbox;
