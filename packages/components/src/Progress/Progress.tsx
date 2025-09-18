import React from "react";
import { IProgressProps } from "./types";
import {
  ProgressWrapper,
  ProgressStyled,
  ProgressBarStyled,
  ProgressLabelStyled
} from "./styles";
import { Text } from "../typography/Text";
import { Flex } from "../Flex";

const Progress = ({
  value,
  size = "m",
  label,
  showInfo,
  color = "violet",
  className,
  style,
  ...props
}: IProgressProps): React.ReactNode => {
  return (
    <ProgressWrapper
      className={className}
      style={style}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}>
      <Flex gap={8} align="center">
        <ProgressStyled size={size} color={color}>
          <ProgressBarStyled
            role="progressbar"
            color={color}
            style={{ width: `${value}%` }}
          />
        </ProgressStyled>
        {showInfo && <Text size={size}>{`${value}%`}</Text>}
      </Flex>
      {label && (
        <ProgressLabelStyled size={size} color={color}>
          {label}
        </ProgressLabelStyled>
      )}
    </ProgressWrapper>
  );
};

export default Progress;
