import styled, { css } from "styled-components";
import { math } from "polished";
import { IAvatarProps } from "./types";
import { TDefaultQuenUIColors } from "@quen-ui/theme";

export const AvatarWrapper = styled.div<{ size: IAvatarProps["size"] }>`
  display: flex;
  gap: ${({ theme, size }) => theme.space[size ?? "m"]};
  align-items: center;
`;

export const AvatarStyled = styled.div<{
  size: IAvatarProps["size"];
  color: string;
  status: IAvatarProps["status"];
}>`
  width: ${({ size, theme }) => theme.control.height[size ?? "m"]};
  height: ${({ size, theme }) => theme.control.height[size ?? "m"]};
  border-radius: ${({ theme }) => math(`${theme.control.radius} * 4`)};
  background: ${({ theme, color }) =>
    color in theme.colors
      ? theme.colors[color as TDefaultQuenUIColors]["3"]
      : color};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, status }) =>
    status &&
    css`
      border: ${math(`${theme.control.borderWidth} * 2`)} solid
        ${status === "online"
          ? theme.colors.green["5"]
          : theme.colors.grayViolet["5"]};
    `}

  .quen-ui__avatar__icon {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => math(`${theme.control.radius} * 4`)};
  }
`;
