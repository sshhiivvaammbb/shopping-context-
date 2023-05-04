import { createContext, useReducer } from "react";
import { initialState } from "./initialState";
import reducer from "./reducer";

const CalcContext = createContext();

const CalcProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <CalcContext.Provider value={value}>{props.children}</CalcContext.Provider>
  );
};

export { CalcProvider, CalcContext };
