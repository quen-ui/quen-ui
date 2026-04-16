import {
  useMemo,
  cloneElement,
  Children,
  isValidElement,
  type MouseEvent,
  type ReactNode
} from "react";
import { useStepperContext, StepperContext } from "./StepperContext";
import type { IStepProps, IStepIconProps, TStepperOrientation } from "./types";
import {
  StepContainerStyled,
  StepIconWrapper,
  StepMiddleBlock,
  ConnectorContainerStyled,
  LeftColumnStyled
} from "./styles";
import { StepContent } from "./StepContent";

interface IConnectorElementProps {
  orientation: TStepperOrientation;
  completed?: boolean;
  active?: boolean;
  children?: ReactNode;
}

const DefaultStepIcon = ({ index, completed, error, icon }: IStepIconProps) => {
  if (icon) return <>{icon}</>;
  if (completed) return <span>✓</span>;
  if (error) return <span>!</span>;
  return <span>{index}</span>;
};

export const Step = (props: IStepProps) => {
  const context = useStepperContext();
  const index = props.index ?? 0;
  const isActive = context.activeStep === index;
  const isCompleted =
    props.completed ?? ( context.activeStep > index);
  const isLast = props.last ?? false;

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (props.disabled) return;
    if (!isActive) {
      props.onClick?.(event);
      context.onStepClick?.(index);
    }
  };

  const iconProps: IStepIconProps = {
    index: index + 1,
    active: isActive,
    completed: isCompleted,
    error: props.error,
    icon: props.icon
  };

  const connectorElement = useMemo(() => {
    if (isLast || !isValidElement<IConnectorElementProps>(context.connector))
      return null;

    return cloneElement(context.connector, {
      orientation: context.orientation,
      completed: isCompleted,
      active: isActive
    });
  }, [context.connector, context.orientation, isCompleted, isActive, isLast]);
  const extendedContext = {
    ...context,
    __stepActive: isActive,
    __stepCompleted: isCompleted
  };

  const childrenArray = Children.toArray(props.children);
  const contentChildren = childrenArray.filter(
    (child) => isValidElement(child) && child.type === StepContent
  );
  const headerChildren = childrenArray.filter(
    (child) => !isValidElement(child) || child.type !== StepContent
  );

  const renderMiddleBlock = () => (
    <StepMiddleBlock orientation={context.orientation}>
      {Children.map(headerChildren, (child, i) =>
        isValidElement(child) ? cloneElement(child, { key: i }) : child
      )}
      {contentChildren.length > 0 && (
        <div>
          {Children.map(contentChildren, (child, i) =>
            isValidElement(child) ? cloneElement(child, { key: i }) : child
          )}
        </div>
      )}
    </StepMiddleBlock>
  );

  const renderConnector = () =>
    connectorElement && (
      <ConnectorContainerStyled
        orientation={context.orientation}>
        {connectorElement}
      </ConnectorContainerStyled>
    );

  return (
    <StepContainerStyled
      className={props.className}
      orientation={context.orientation}
      active={isActive}
      completed={isCompleted}
      disabled={props.disabled}
      clickable={!!props.onClick}
      onClick={handleClick}>
      <StepperContext.Provider value={extendedContext}>
        {context.orientation === "horizontal" ? (
          <>
            <StepIconWrapper
              className="step-icon-wrapper"
              active={isActive}
              completed={isCompleted}
              error={props.error}>
              <DefaultStepIcon {...iconProps} />
            </StepIconWrapper>
            {renderMiddleBlock()}
            {renderConnector()}
          </>
        ) : (
          <>
            <LeftColumnStyled>
              <StepIconWrapper
                className="step-icon-wrapper"
                active={isActive}
                completed={isCompleted}
                error={props.error}>
                <DefaultStepIcon {...iconProps} />
              </StepIconWrapper>
              {renderConnector()}
            </LeftColumnStyled>
            {renderMiddleBlock()}
          </>
        )}
      </StepperContext.Provider>
    </StepContainerStyled>
  );
};
