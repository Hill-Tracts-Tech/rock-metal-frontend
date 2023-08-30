import * as React from "react";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import Cart from "../pages/Cart";
import OrderDetails from "./OrderDetails";
import styled from "styled-components";
import { mobile } from "../responsive";

const steps = ["Shopping Cart", "Checkout", "Order Complete"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            // if (isStepSkipped(index)) {
            //   stepProps.completed = false;
            // }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Order successfully completed
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {activeStep === 0 ? (
                <Button disabled>Back</Button>
              ) : (
                <Button1 color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button1>
              )}

              <Box sx={{ flex: "1 1 auto" }} />

              <Button1 onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button1>
            </Box>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            {activeStep === 0 && <Cart handleNext={handleNext} />}
            {activeStep === 1 && <OrderDetails handleNext={handleNext} />}
            {activeStep === 2 && <p>Payment Method</p>}
          </React.Fragment>
        )}
      </Box>
    </Container>
  );
}
const Container = styled.div`
  padding: 20px;
  width: 90%;
  margin: 0 auto;
  ${mobile({ padding: "10px" })}
`;
const Button1 = styled.button`
  width: 10%;
  padding: 10px;
  margin: 20px auto;
  background-color: teal;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  border: 1.5px solid teal;
  transition: ease 0.5s;
  &:hover {
    background-color: transparent;
    color: teal;
  }
`;
