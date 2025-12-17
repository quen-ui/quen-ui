import styled, { css } from "styled-components";
import { math } from "polished";
import { TransitionStatus } from "react-transition-state";
import { TQuenSize } from "../types/size";

interface IModalContainerProps {
  status: TransitionStatus;
  zIndex: number;
}

export const ModalContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["status", "zIndex"].includes(prop)
})<IModalContainerProps>`
  ${({ status }) =>
    (status === "preEnter" || status === "exiting") &&
    css`
      opacity: 0;
      transform: scale(0.9);
    `};
  position: fixed;
  opacity: 1;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.components.Modal.overlayBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: ${({ zIndex }) => zIndex};
  overflow-y: auto;
  padding: 20px;
  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const ModalStyled = styled.div.withConfig({
  shouldForwardProp: (props) => !["fullScreen", "size", "width"].includes(props)
})<{ fullScreen?: boolean; size: TQuenSize; width?: number }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: ${({ theme, size }) => math(`${theme.space[size]} * 2`)};
  background-color: ${({ theme }) => theme.components.Modal.backgroundColor};
  border-radius: 0.5rem;
  max-height: calc(100vh - 40px);
  ${({ fullScreen, width }) =>
    fullScreen
      ? css`
          width: 100%;
          height: 100%;
          max-height: 100vh;
        `
      : css`
          max-width: 90vw;
          width: ${width}px;
          margin: auto;

          @media (max-width: 768px) {
            width: 90vw;
            max-height: 90vh;
          }

          @media (max-width: 480px) {
            width: 100vw;
            max-height: 100vh;
            border-radius: 0;
            margin: 0;
          }
        `};
`;

export const ModalContentStyled = styled.div<{ scrollable?: boolean }>`
  ${({ scrollable }) =>
    scrollable &&
    css`
      overflow-y: auto;
      max-height: 60vh;
    `};
`;

export const ModalHeaderStyled = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const ModalFooterStyled = styled.div`
  display: flex;
  flex: 0 0 auto;
  gap: 1rem;
`;
