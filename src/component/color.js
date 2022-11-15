import React from "react";
import { useContext } from "react";
import { colorContext } from "../context/context";

export default function Color() {
  //appeller le context où on souhaite l'utiliser (besoin d'entourer app de contextProvider dans index.js)
  const { setColor, color } = useContext(colorContext);
  const generateColor = () => {
    let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    randomColor = "#" + randomColor;
    //set la nouvelle couleur dans le context
    setColor(randomColor);
    console.log(randomColor);
  };
  return (
    <div className="card w-30 is-center">
      <header className="card-header">
        <p className="card-header-title">Color</p>
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
      <footer className="card-footer">
        <button className="button is-link w-100" onClick={generateColor}>
          Generate
        </button>
      </footer>
    </div>
  );
}
