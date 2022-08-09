import React, { useState, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../store/index";
import { bindActionCreators } from "redux";
import { TextField, Button, Grid, Slider, Box } from "@mui/material";

const amt = [
  { value: 0, label: "0" },
  { value: 2500000, label: "25L" },
  { value: 5000000, label: "50L" },
  { value: 7500000, label: "75L" },
  { value: 10000000, label: "100L" },
  { value: 12500000, label: "125L" },
  { value: 15000000, label: "150L" },
  { value: 17500000, label: "175L" },
  { value: 20000000, label: "200L" },
];

const FormUse = () => {
  const lmtRef = useRef(null);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { Calculate } = bindActionCreators(actionCreators, dispatch);
  const [loanP, setLoanP] = useState(0);

  function valuetext(value) {
    return `${value * 2}L`;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });

  const onSubmit = async (data) => {
    console.log(data);
    Calculate(data);
    reset({ loanamt: "", interestrate: "", loantenure: "" });
  };

  const handleSlider = useCallback((event, value) => {
    console.log(lmtRef);
    setLoanP(value);
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            ref={lmtRef}
            InputLabelProps={{ shrink: true }}
            type="number"
            fullWidth
            variant="outlined"
            id="loanamt"
            label="Loan amount"
            {...register("loanamt", {
              required: "Please enter loan amount.",
            })}
          />
          <Box sx={{ width: "100%" }}>
            <Slider
              aria-label="Always visible"
              defaultValue={amt[1].value}
              valueLabelDisplay="on"
              getAriaValueText={valuetext}
              step={1}
              marks={amt}
              onChange={(e, v) => handleSlider(e, v)}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            fullWidth
            variant="outlined"
            id="interestrate"
            label="Interest Rate"
            {...register("interestrate", { required: true })}
          />
          {errors.interestrate && <p>Interest rate is required.</p>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            fullWidth
            variant="outlined"
            id="loantenure"
            label="Loan Tenure"
            {...register("loantenure", { required: true })}
          />
          {errors.loantenure && <p>Interest rate is required.</p>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button type="submit" variant="outlined" fullWidth sx={{ p: 1.5 }}>
            Calculate
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormUse;
