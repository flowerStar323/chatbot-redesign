import React from "react";
import { StepperContainer, NumberContainer, TitleContainer } from "./style";
export default function BotStepper({ isCompleted, title, number }) {
  return (
    <StepperContainer
      style={{
        background: isCompleted
          ? "linear-gradient(270deg,#FFFFFF00 0%,#9fabd1 100%) "
          : "transparent",
        width: "100%"
      }}
    >
      <NumberContainer>{number}</NumberContainer>
      <TitleContainer
        style={{
          color: isCompleted ? "black" : "#9FABD1",
        }}
      >
        {title}
      </TitleContainer>
    </StepperContainer>
  );
}
