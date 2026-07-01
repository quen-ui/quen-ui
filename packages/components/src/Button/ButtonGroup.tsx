import React, {
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";
import { IButtonGroupProps } from "./types";
import { ButtonGroupStyled } from "./styles";

export const ButtonGroup = ({
  children,
  size,
  view,
  orientation = "horizontal",
  fullWidth = false,
  className,
  style,
  role = "group",
  "aria-label": ariaLabel,
  ...props
}: IButtonGroupProps) => {
  const processedChildren = React.Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }

    const childElement = child as ReactElement<any>;

    const mergedProps = {
      ...childElement.props,
      size:
        childElement.props.size !== undefined ? childElement.props.size : size,
      view:
        childElement.props.view !== undefined ? childElement.props.view : view
    };

    return cloneElement(childElement, mergedProps);
  });

  return (
    <ButtonGroupStyled
      data-semantic="group"
      role={role}
      aria-label={ariaLabel}
      orientation={orientation}
      fullWidth={fullWidth}
      className={className}
      style={style}
      {...props}>
      {processedChildren}
    </ButtonGroupStyled>
  );
};

export default ButtonGroup;
