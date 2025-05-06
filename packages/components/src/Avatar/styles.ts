import styled, { css } from "styled-components";
import { math, rem } from "polished";
import { IAvatarProps } from "./types";
import { TDefaultQuenUIColors } from "@quen-ui/theme";

export const AvatarWrapper = styled.div<{ size: IAvatarProps["size"]}>`
  display: flex;
  gap: ${({ theme, size }) => theme.space[size ?? "m"]};
  align-items: center;
`;

export const AvatarStyled = styled.div<{size: IAvatarProps["size"], color: string, status: IAvatarProps["status"] }>`
  width: ${({ size, theme }) => theme.control.height[size ?? "m"]};
  height: ${({ size, theme }) => theme.control.height[size ?? "m"]};
  border-radius: ${({ theme }) => math(`${theme.control.radius} * 4`)};
  background: ${({ theme, color }) => color in theme.colors ? theme.colors[color as TDefaultQuenUIColors]["3"] : color};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, status }) => status && css`
    border: ${theme.control.borderWidth} solid ${status === "online" ? theme.colors.green["5"] : theme.colors.grayViolet["5"]};
  `}
  
  .quen-ui-avatar__icon {
    width: ${({ size, theme }) =>  math(`${theme.control.height[size ?? "m"]} - ${rem(6)}`)};
    height: ${({ size, theme }) => math(`${theme.control.height[size ?? "m"]} - ${rem(6)}`)};
  }
`;
