import React, { Children, useState } from "react";
import upperarrow from "../assets/Chevron_up_large.png";
import "./PopupTab.css";

function PopupTab({ name, children }) {
  const [active, setActive] = useState(true);
  function handleClick() {
    setActive(!active);
  }
  return (
    <div className="flex flex-col justify-evenly">
      <div className="header flex justify-between w-[300px]">
        <b>{name}</b>
        <button onClick={() => handleClick()}>
          <img src={upperarrow}></img>
        </button>
      </div>
      {active && <>{children}</>}
    </div>
  );
}

export default PopupTab;
