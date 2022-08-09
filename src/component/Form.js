import React from "react";
import { Formik, Form, ErrorMessage, FormikHelper, Field } from "formik";
import { object, string, number } from "yup";
import { TextField, Button } from "@mui/material";

const initial = {};

const validation = object({
  loanamt: number().required("Loan amount is required"),
  interestrate: number().required("Interest rate is required"),
  loantenure: number().required("Tenure is required"),
});
const LoanForm = () => {
  return (
    <>
      <Formik
        initialValues={initial}
        validationSchema={validation}
        onSubmit={(values, formikHelper) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <Field
              name="loanamt"
              id="loanamt"
              placeholder="Loan Amount"
              as={TextField}
              variant="outlined"
            />
            <Field
              name="interestrate"
              id="interestrate"
              placeholder="Interest Rate"
              as={TextField}
              variant="outlined"
            />
            <Field
              name="loantenure"
              id="loantenure"
              placeholder="Loan tenure"
              as={TextField}
              variant="outlined"
            />
            <Button type="submit" variant="contained">
              Calculate
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoanForm;
