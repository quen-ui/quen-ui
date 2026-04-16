import { useMemo, isValidElement, Children, cloneElement, type ReactElement } from "react";
import type { IStepperProps, IStepperContextValue, TStepperOrientation, IStepProps } from "./types";
import { StepperContainerStyled, DefaultConnectorLineStyled } from "./styles";
import { StepperContext } from "./StepperContext";
import { Step } from "./Step";

const DefaultConnector = ({ orientation, completed, active }: {
  orientation: TStepperOrientation;
  completed?: boolean;
  active?: boolean;
}) => (
  <DefaultConnectorLineStyled
    orientation={orientation}
    completed={completed}
    active={active}
  />
);


export const Stepper = ({
  children,
  activeStep = 0,
  orientation = "horizontal",
  connector = <DefaultConnector orientation={orientation} />,
  className,
  style,
}: IStepperProps) => {
  const steps = useMemo(() => {
    return Children.toArray(children).filter(
      (child) => isValidElement(child) && child.type === Step
    ) as ReactElement<IStepperProps>[];
  }, [children]);

  const contextValue: IStepperContextValue = useMemo(
    () => ({
      activeStep,
      orientation,
      connector,
    }),
    [activeStep, orientation, connector]
  );

  return (
    <StepperContext.Provider value={contextValue}>
      <StepperContainerStyled
        className={className}
        style={style}
        orientation={orientation}>
        {steps.map((step, index) => {
          const additionalProps: Partial<IStepProps> = {
            index,
            last: index === steps.length - 1,
            active: activeStep === index
          };
          return cloneElement(step, additionalProps);
        })}
      </StepperContainerStyled>
    </StepperContext.Provider>
  );
};
