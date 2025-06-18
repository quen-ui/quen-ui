import styled, { RuleSet, css } from "styled-components";
import { rgba } from "polished";
import { TransitionStatus } from "react-transition-state";
import { IDrawerProps } from "./types";

export const DrawerWrapper = styled.div<{ zIndex?: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ zIndex }) => zIndex || 1000};
  background: ${({ theme }) =>
    rgba(theme.colors.grayViolet[5], 0.7)};
`;

export const sizes = {
  xs: "240px",
  s: "320px",
  m: "360px",
  l: "500px",
  full: "100%"
};

const getPosition = (
  position: IDrawerProps["position"],
  size: Required<IDrawerProps>["size"]
): RuleSet | null => {
  switch (position) {
    case "left":
      return css`
        bottom: 0;
        top: 0;
        left: 0;
        width: ${sizes[size]};
      `;
    case "right":
      return css`
        bottom: 0;
        top: 0;
        right: 0;
        width: ${sizes[size]};
      `;
    case "top":
      return css`
        top: 0;
        left: 0;
        right: 0;
        height: ${sizes[size]};
      `;
    case "bottom":
      return css`
        bottom: 0;
        left: 0;
        right: 0;
        height: ${sizes[size]};
      `;
    default:
      return null;
  }
};

export const DrawerStyled = styled.div<{
  size: Required<IDrawerProps>["size"];
  position: IDrawerProps["position"];
  status: TransitionStatus;
}>`
  ${({ size, position }) => getPosition(position, size)};
  max-width: 100%;
  max-height: 100vh;
  position: fixed;
  outline: 0;
  background: ${({ theme }) =>
    theme.colors.grayViolet[7]};

  ${({ status }) =>
    (status === "preEnter" || status === "exiting") &&
    ` opacity: 0;
      transform: scale(0.5);
    `};
  
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  
  .quen-ui-drawer--content {
    padding: 0.5rem;
  }
`;

export const DrawerTitleWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
