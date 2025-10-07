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
    return theme.colors[color][7]
  }
  return theme.colors.violet[7]
};

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  width: 100%;
`;

export const ProgressStyled = styled.div<{
  size: TQuenSize;
  color: Required<IProgressProps>["color"];
}>`
  display: flex;
  border-radius: ${({ theme }) => theme.components.Progress.radius};
  overflow: hidden;
  width: 100%;
  height: ${({ theme, size }) => theme.control.height[size]};
  background: ${({ theme, color }) =>
    rgba(getBackgroundBar(theme, color), 0.2)};
`;

export const ProgressBarStyled = styled.div<{
  color: Required<IProgressProps>["color"];
}>`
  height: 100%;
  background: ${({ theme, color }) => getBackgroundBar(theme, color)};
  border-radius: ${({ theme }) => theme.components.Progress.radius};
`;

export const ProgressLabelStyled = styled(Text)<{
  color: Required<IProgressProps>["color"];
}>`
  color: ${({ theme, color }) => getBackgroundBar(theme, color)};
`;
