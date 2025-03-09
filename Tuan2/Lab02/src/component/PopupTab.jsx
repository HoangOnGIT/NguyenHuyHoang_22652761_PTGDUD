import React, { Children, useState } from "react";
import upperarrow from "../assets/Chevron_up_large.png";
import "./PopupTab.css";

function PopupTab({ name, children }) {
  const [active, setActive] = useState(true);
  function handleClick() {
    setActive(!active);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "390px",
        }}
      >
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
