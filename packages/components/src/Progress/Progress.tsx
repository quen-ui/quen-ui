import React from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
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
  classNames,
  styles,
  ...props
}: IProgressProps): React.ReactNode => {
  return (
    <ProgressWrapper
      data-semantic="root"
      aria-label="progress-bar"
      className={cnMerge(className, classNames?.root)}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}>
      <Flex
        gap={8}
        align="center"
        data-semantic="body"
        className={classNames?.body}
        style={styles?.body}>
        <ProgressStyled
          size={size}
          color={color}
          data-semantic="rail"
          className={classNames?.rail}
          style={styles?.rail}>
          <ProgressBarStyled
            className={classNames?.track}
            data-semantic="track"
            color={color}
            style={deepMerge({ width: `${value}%` }, styles?.track ?? {})}
          />
        </ProgressStyled>
        {showInfo && (
          <Text
            size={size}
            data-semantic="info"
            className={classNames?.info}
            style={styles?.info}>{`${value}%`}</Text>
        )}
      </Flex>
      {label && (
        <ProgressLabelStyled
          size={size}
          color={color}
          data-semantic="label"
          className={classNames?.label}
          style={styles?.label}>
          {label}
        </ProgressLabelStyled>
      )}
    </ProgressWrapper>
  );
};

export default Progress;
