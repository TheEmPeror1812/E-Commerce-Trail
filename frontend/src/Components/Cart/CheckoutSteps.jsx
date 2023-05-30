import React from "react";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import "./CheckoutSteps.css";

function CheckoutSteps({ activeStep }) {
  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      icon: <LocalShippingIcon />,
    },
    { 
      label: <Typography>Confirm Orders</Typography>,
      icon: <LibraryAddCheckIcon />,
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <AccountBalanceIcon />,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
    backgroundColor: "rgb(28,28,28)",

  };
  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step key={index} active={activeStep === index ? true : false} completed={activeStep >= index ? true : false} >
            <StepLabel  style={{ color: activeStep >= index ? "#da00c0" : "white" }} icon={item.icon}>{item.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
}

export default CheckoutSteps;
