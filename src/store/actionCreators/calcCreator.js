export const Calculate = (value) => {
  return (dispatch) => {
    dispatch({
      type: "Calculate",
      value: value,
    });
  };
};
