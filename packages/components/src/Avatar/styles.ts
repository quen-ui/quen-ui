import styled, { css } from "styled-components";
import { IAvatarProps } from "./types";
import { TDefaultQuenUIColors } from "@quen-ui/theme";

export const AvatarWrapper = styled.div<{ size: IAvatarProps["size"] }>`
  display: flex;
  gap: ${({ theme, size }) => theme.space[size ?? "m"]};
  align-items: center;

  .quen-ui__title,
  .quen-ui__text {
    color: ${({ theme }) => theme.components.Avatar.color};
  }
`;

export const AvatarStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size", "color", "status"].includes(prop)
})<{
  size: IAvatarProps["size"];
  color: string;
  status: IAvatarProps["status"];
}>`
  width: ${({ size, theme }) => theme.control.height[size ?? "m"]};
  height: ${({ size, theme }) => theme.control.height[size ?? "m"]};
  border-radius: ${({ theme }) => theme.components.Avatar.radius};
  background: ${({ theme, color }) =>
    color in theme.colors
      ? theme.colors[color as TDefaultQuenUIColors]["3"]
      : color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.components.Avatar.color};
    ${({ theme, status }) =>
      status &&
      css`
        border: ${theme.components.Avatar.borderWidth} solid
          ${status === "online"
            ? theme.components.Avatar.borderColorOnline
            : theme.components.Avatar.borderColorDefault};
      `}
    .quen-ui__avatar__icon {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.components.Avatar.radius};
  }
`;
