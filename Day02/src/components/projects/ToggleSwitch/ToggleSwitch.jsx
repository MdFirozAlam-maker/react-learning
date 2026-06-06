import React, { useState } from "react";
import "./ToggleSwitch.css";
import { MdLegendToggle } from "react-icons/md";

const ToggleSwitch = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1
        className={`title ${toggle ? "active" : ""}`}
        onClick={() => setToggle(prev => !prev)}
      >
        Toggle Switch <MdLegendToggle className="icon" />
      </h1>

      <div className="outer-layer">
        <div
          className={`switch ${toggle ? "on" : "off"}`}
          onClick={() => setToggle(prev => !prev)}
        >
          <div className="thumb">{toggle ? "ON" : "OFF"}</div>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;