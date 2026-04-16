import type { IStepLabelProps } from "./types";
import { StepLabelContainerStyled } from "./styles";
import { useStepperContext } from "./StepperContext";
import { Text } from "../typography/Text";

export const StepLabel = ({
  children,
  optional,
  error,
  className
}: IStepLabelProps) => {
  const context = useStepperContext();
  return (
    <StepLabelContainerStyled
      className={className}
      orientation={context.orientation}
      active={(context as any).__stepActive}
      completed={(context as any).__stepCompleted}
      >
      <Text size="l" className="step-label-text" type={error ? "danger" : undefined}>
        {children}
      </Text>
      {optional && (
        <Text size="s" type="secondary">
          {optional}
        </Text>
      )}
    </StepLabelContainerStyled>
  );
};
