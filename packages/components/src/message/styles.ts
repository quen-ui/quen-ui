import styled, { css, DefaultTheme, keyframes } from "styled-components";
import type { TMessagePosition, TMessageStatus } from "./types";

const fadeInTop = keyframes`
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOutTop = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-16px); }
`;

const fadeInBottom = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOutBottom = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(16px); }
`;

export const MessageContainerStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "placement"
})<{
  placement?: TMessagePosition;
}>`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  pointer-events: none;
  top: ${({ placement }) => (placement === "bottom" ? "auto" : "24px")};
  bottom: ${({ placement }) => (placement === "bottom" ? "24px" : "auto")};
`;

export const MessageStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["leaving", "placement"].includes(prop)
})<{
  leaving?: boolean;
  placement?: "top" | "bottom";
}>`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.components.Message.background};
  border-radius: ${({ theme }) => theme.components.Message.radius};
  padding: ${({ theme }) => theme.components.Message.padding};
  pointer-events: all;
  animation: ${({ leaving, placement }) => {
    if (placement === "bottom") {
      return leaving
        ? css`
            ${fadeOutBottom} 0.3s ease forwards
          `
        : css`
            ${fadeInBottom} 0.3s ease forwards
          `;
    }
    return leaving
      ? css`
          ${fadeOutTop} 0.3s ease forwards
        `
      : css`
          ${fadeInTop} 0.3s ease forwards
        `;
  }};
`;

const getColorIcon = (theme: DefaultTheme, status?: TMessageStatus) => {
  switch (status) {
    case "error":
      return theme.components.Message.iconErrorColor;
    case "warning":
      return theme.components.Message.iconWarningColor;
    case "success":
      return theme.components.Message.iconSuccessColor;
    default:
      return theme.components.Message.iconInfoColor;
  }
};

export const MessageIconWrapper = styled.div<{ status?: TMessageStatus }>`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  color: ${({ theme, status }) => getColorIcon(theme, type)};
`;
