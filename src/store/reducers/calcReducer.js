const calcReducer = (
  state = { emiAmount: 0, totalPayable: 0, interestPayable: 0 },
  action
) => {
  switch (action.type) {
    case "Calculate":
      let P = action.value.loanamt;
      let r = action.value.interestrate / 1200;
      let n = action.value.loantenure;
      let E = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
      let totalPayable = E * n;
      let interestPayable = totalPayable - P;

      console.log(+E, totalPayable, interestPayable);
      state = {
        ...state,
        emiAmount: E.toFixed(2),
        interestPayable: interestPayable.toFixed(2),
        totalPayable: totalPayable.toFixed(2),
      };
      return state;
    default:
      return state;
  }
};

export default calcReducer;
