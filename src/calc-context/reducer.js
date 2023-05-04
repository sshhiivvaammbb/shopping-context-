const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE_1":
      return {
        ...state,
        value1: action.payload,
      };

    case "SET_VALUE_2":
      return {
        ...state,
        value2: action.payload,
      };

    case "SET_OPRATION":
      return {
        ...state,
        opration: action.payload,
      };

    case "SET_RESULT":
      const res = calc(state);
      return {
        ...state,
        result: res,
      };

    default:
      return state;
  }
};

function calc(state) {
  const num1 = Number(state.value1);
  const num2 = Number(state.value2);
  const operation = state.opration;

  if (operation === "+") return num1 + num2;
  if (operation === "/") return num1 / num2;
  if (operation === "*") return num1 * num2;
  if (operation === "-") return num1 - num2;
  if (operation === "%") {
    if (num1 % num2 === 0) return 0;
    else return 1;
  } else {
    return "Enter a Valid Operation";
  }
}

export default reducer;
