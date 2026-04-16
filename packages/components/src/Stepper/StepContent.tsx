import type { ReactNode } from "react";
import { StepContentContainerStyled } from "./styles";
import { useStepperContext } from "./StepperContext";

export const StepContent = ({ children }: { children?: ReactNode }) => {
  const context = useStepperContext();
  return (
    <StepContentContainerStyled orientation={context.orientation}>
      {children}
    </StepContentContainerStyled>
  );
};
