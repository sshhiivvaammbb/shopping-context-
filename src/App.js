import React, { useContext } from "react";
import "./App.css";
import { CalcContext } from "./calc-context/calcContext";
const App = () => {
  const data = useContext(CalcContext);
  const { state, dispatch } = data;

  const setValue1 = (e) => {
    dispatch({ type: "SET_VALUE_1", payload: e.target.value });
  };

  const setOpration = (e) => {
    dispatch({ type: "SET_OPRATION", payload: e.target.value });
  };

  const setValue2 = (e) => {
    dispatch({ type: "SET_VALUE_2", payload: e.target.value });
  };

  const setResult = (e) => {
    dispatch({ type: "SET_RESULT" });
  };

  return (
    <div className="container">
      <h1>calculator</h1>
      <div className="inputs">
        <input
          type="number"
          placeholder="enter first value"
          onChange={setValue1}
        />
        <input
          type="text"
          placeholder="enter  the opration"
          onChange={setOpration}
        />
        <input
          type="number"
          placeholder="enter 2nd value"
          onChange={setValue2}
        ></input>
      </div>
      <button className="btn" onClick={setResult}>
        check result
      </button>
      <div>
        <h1> result = {state.result}</h1>
      </div>
    </div>
  );
};

export default App;
