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
        return theme.colors.grayViolet.grayViolet5;
      case "green":
        return theme.colors.green.green5;
      case "orange":
        return theme.colors.orange.orange5;
      case "yellow":
        return theme.colors.yellow.yellow5;
      case "red":
        return theme.colors.red.red5;
      case "violet":
        return theme.colors.violet.violet5;
    }
  }
  return theme.colors.violet.violet5
};

const getBackgroundWrapper = (
  theme: DefaultTheme,
  color: IProgressProps["color"]
) => {
  if (color && color in theme.colors) {
    switch (color) {
      case "grayViolet":
        return theme.colors.grayViolet.grayViolet9;
      case "green":
        return theme.colors.green.green9;
      case "orange":
        return theme.colors.orange.orange9;
      case "yellow":
        return theme.colors.yellow.yellow9;
      case "red":
        return theme.colors.red.red9;
      case "violet":
        return theme.colors.violet.violet9;
    }
  }
  return theme.colors.violet.violet9;
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
      return theme.control.boxSizeXs;
    case "s":
      return theme.control.boxSizeS;
    case "l":
      return theme.control.boxSizeL;
    case "m":
    default:
      return theme.control.boxSizeM;
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
