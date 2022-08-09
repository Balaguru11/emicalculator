import React from "react";
import {
  Box,
  Container,
  Typography,
  FormControl,
  FormGroup,
  TextField,
  Button,
  Divider,
  InputLabel,
  Slider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useForm } from "react-hook-form";
import LoanForm from "../component/Form";
import FormUse from "../component/FormUse";
import { useSelector } from "react-redux";

const amt = [
  {
    value: 0,
    lable: 0,
  },
  {
    value: 12.5,
    lable: "25L",
  },
  {
    value: 25,
    lable: "50L",
  },
  {
    value: 37.5,
    lable: "75L",
  },
  {
    value: 50,
    lable: "100L",
  },
  {
    value: 62.5,
    lable: "125L",
  },
  {
    value: 75,
    lable: "150L",
  },
  {
    value: 82.5,
    lable: "175L",
  },
  {
    value: 100,
    lable: "200L",
  },
];

const Calculator = () => {
  const state = useSelector((state) => state);

  console.log(state);
  return (
    <>
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            padding: 2,
            margin: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" component="h5">
            EMI Calculator
          </Typography>
          <Divider></Divider>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 3,
          }}
        >
          {/* <LoanForm /> */}
          <FormUse />
          <Box
            sx={{
              backgroudColor: "papayaWhip",
              borderRadius: 5,
              p: 2,
              m: 2,
              boxShadow: 3,
            }}
          >
            <List>
              <ListItem>
                <ListItemText
                  primary={state?.calc.emiAmount}
                  secondary="EMI Payable (in INR)"
                />
              </ListItem>
              <Divider></Divider>
              <ListItem>
                <ListItemText
                  primary={state?.calc.interestPayable}
                  secondary=" Interest Payable (in INR)"
                />
              </ListItem>
              <Divider></Divider>

              <ListItem>
                <ListItemText
                  primary={state?.calc.totalPayable}
                  secondary="Total amount Payable (in INR)"
                />
              </ListItem>
            </List>
            {/* <Typography variant="h5" component="h5">
              EMI Payable: Rs. {state?.calc.emiAmount}
            </Typography>
            <Typography variant="h5" component="h5">
              Interest Payable: Rs. {state?.calc.interestPayable}
            </Typography>
            <Typography variant="h5" component="h5">
              Total amount Payable: Rs. {state?.calc.totalPayable}
            </Typography> */}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Calculator;
