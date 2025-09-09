import styled, { DefaultTheme } from "styled-components";
import { rgba } from "polished";
import { TQuenSize } from "../types/size";
import { IProgressProps } from "./types";
import { Text } from "../typography/Text";

const getBackgroundBar = (
  theme: DefaultTheme,
  color: IProgressProps["color"]
) => {
  if (color && color in theme.colors) {
    switch (color) {
      case "grayViolet":
        return theme.colors.grayViolet[7];
      case "green":
        return theme.colors.green[7];
      case "orange":
        return theme.colors.orange[7];
      case "yellow":
        return theme.colors.yellow[7];
      case "red":
        return theme.colors.red[7];
      case "violet":
        return theme.colors.violet[7];
    }
  }
  return theme.colors.violet[7]
};

const getBackgroundWrapper = (
  theme: DefaultTheme,
  color: IProgressProps["color"]
) => {
  if (color && color in theme.colors) {
    switch (color) {
      case "grayViolet":
        return theme.colors.grayViolet[9];
      case "green":
        return theme.colors.green[9];
      case "orange":
        return theme.colors.orange[9];
      case "yellow":
        return theme.colors.yellow[9];
      case "red":
        return theme.colors.red[9];
      case "violet":
        return theme.colors.violet[9];
    }
  }
  return theme.colors.violet[9];
};

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  width: 100%;
`;

const getHeight = (size: TQuenSize, theme: DefaultTheme) => {
  switch (size) {
    case "xs":
      return theme.control.height.xs;
    case "s":
      return theme.control.height.s;
    case "l":
      return theme.control.height.l;
    case "m":
    default:
      return theme.control.height.m;
  }
};

export const ProgressStyled = styled.div<{
  size: TQuenSize;
  color: Required<IProgressProps>["color"];
}>`
  display: flex;
  border-radius: ${({ theme }) => theme.control.radius};
  overflow: hidden;
  width: 100%;
  height: ${({ theme, size }) => getHeight(size, theme)};
  background: ${({ theme, color }) =>
    rgba(getBackgroundWrapper(theme, color), 0.3)};
`;

export const ProgressBarStyled = styled.div<{
  color: Required<IProgressProps>["color"];
}>`
  height: 100%;
  background: ${({ theme, color }) => getBackgroundBar(theme, color)};
  border-radius: ${({ theme }) => theme.control.radius};
`;

export const ProgressLabelStyled = styled(Text)<{
  color: Required<IProgressProps>["color"];
}>`
  color: ${({ theme, color }) => getBackgroundBar(theme, color)};
`;
