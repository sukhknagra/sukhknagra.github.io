import React, { useState } from "react";

import "../styles/BmiCalc.css";
export default function BmiCalc() {
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height) ** 2;
    setBmi(bmi);
  };

  return (
    <div className="wrapper">
        <b>BMI Calculator</b> 
      <form onSubmit={calculate}>
        <div><br/>
          <label>Height in Meters: </label>
          <input value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div> <br/>
          <label>Weight in Kg: </label>
          <input value={mass} onChange={(e) => setMass(e.target.value)} />
        </div>

        <button type="submit">Calculate</button>
      </form>
      <p>BMI: {bmi}</p>
    </div>
  );
}