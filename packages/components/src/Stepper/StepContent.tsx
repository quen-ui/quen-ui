import type { ReactNode } from "react";
import { StepContentContainerStyled } from "./styles";
import { useStepperContext } from "./StepperContext";

export const StepContent = ({ children }: { children?: ReactNode }) => {
  const context = useStepperContext();
  return (
    <StepContentContainerStyled
      orientation={context.orientation}
      data-semantic="content"
      className={context.classNames?.content}
      style={context.styles?.content}>
      {children}
    </StepContentContainerStyled>
  );
};
