import React from "react";
import { useContext } from "react";
import { colorContext } from "../context/context";

export default function Main() {
  const { setColor, color } = useContext(colorContext);
  return (
    <div className="card w-30 is-center">
      <header className="card-header">
        <p className="card-header-title">Main</p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          <div
            className="square m-auto"
            style={{ backgroundColor: color }}
          ></div>
        </div>
        <p>{color}</p>
      </div>
    </div>
  );
}
