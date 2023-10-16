import React, { useState } from "react";
import Layout from "../Layout";

function UseStateHook() {
  const [color, setColor] = useState("RED");
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  const updateState = () => {
    setCar((previousState) => {
      return {
        ...previousState,
        model: "2022",
      };
    });
  };
  return (
    <>
      <Layout />
      <div>
        <h1>{color}</h1>
        <span>{car.model}</span>
        <select onChange={(e) => setColor(e.target.value)}>
          <option value="RED">RED</option>
          <option value="GREEN">GREEN</option>
          <option value="BLUE">BLUE</option>
        </select>
        <button onClick={updateState}>click</button>
      </div>
    </>
  );
}

export default UseStateHook;
