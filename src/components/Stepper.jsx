import * as React from "react";
import { Box, Button, Step, StepLabel, Stepper } from "@material-ui/core";
import { Circles } from "react-loader-spinner";
import { useState } from "react";
import Cart from "../pages/Cart";
import OrderDetails from "./OrderDetails";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom/cjs/react-router-dom";

const steps = ["Shopping Cart", "Checkout", "Order Complete"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                  <Size>{label}</Size>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <SubContainer>
              <DetailsInfo>
                <Svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                  ></path>
                </Svg>
                <Info>
                  <Title>Order successful</Title>

                  <p
                    style={{
                      fontSize: "20px",
                      margin: "20px auto",
                    }}
                  >
                    Thank you for completing your Order
                  </p>
                  <Bottom>
                    <Div>
                      <Link to="/orders">
                        <Button2>Order Tracking</Button2>
                      </Link>
                    </Div>
                  </Bottom>
                </Info>
              </DetailsInfo>
            </SubContainer>
            {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box> */}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {activeStep === 0 ? (
                <Button disabled>Back</Button>
              ) : (
                <Button1 color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button1>
              )}

              <Box sx={{ flex: "1 1 auto" }} />

              <Button1 onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finest" : " Next"}
              </Button1>
            </Box> */}
            {isLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Circles
                  height="80"
                  width="80"
                  color="#008080"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              <div>
                {activeStep === 0 && (
                  <Cart handleNext={handleNext} setIsLoading={setIsLoading} />
                )}
                {activeStep === 1 && (
                  <OrderDetails
                    handleNext={handleNext}
                    setIsLoading={setIsLoading}
                  />
                )}
              </div>
            )}
            {activeStep === 2 && handleNext()}
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
const Size = styled.p`
  ${mobile({ fontSize: "12px" })}
`;

const SubContainer = styled.div`
  width: 50%;
  margin: 40px auto;
  margin-bottom: 20px;
  ${mobile({ margin: "0px 10px 0px 0px", width: "100%" })}
`;
const DetailsInfo = styled.div`
  padding: 36px;
  border: 1.3px solid #ccc8c8;
  border-radius: 0.75rem;
  text-align: center;
  background: #ffffffa7;
`;

const Info = styled.div`
  text-align: center;
`;
const Title = styled.div`
  color: teal;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 10px;
`;

const Bottom = styled.div`
  padding: 40px auto;
  text-align: center;
`;
const Div = styled.div``;
const Svg = styled.svg`
  width: 40px;
  height: 40px;
  color: teal;
  margin: auto 24px;
`;
const Button2 = styled.button`
  padding: 0.5rem 1rem;
  background-color: teal;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  border: 1.3px solid teal;
  margin: 10px 10px;
  transition: ease-in-out 0.5s;
  &:hover {
    background-color: #fffefe;
    color: teal;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
