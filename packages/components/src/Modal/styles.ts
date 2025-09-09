import styled, { css } from "styled-components";
import { rgba, math } from "polished";
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
  position: absolute;
  opacity: 1;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => rgba(theme.colors.grayViolet[2], 0.7)};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: ${({ zIndex }) => zIndex};
`;

export const ModalStyled = styled.div.withConfig({
  shouldForwardProp: (props) => !["isFullScreen", "size"].includes(props)
})<{ isFullScreen?: boolean; size: TQuenSize }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: ${({ theme, size }) => math(`${theme.space[size]} * 2`)};
  background-color: ${({ theme }) => theme.colors.grayViolet[2]};
  border-radius: 0.5rem;
  ${({ isFullScreen }) =>
    isFullScreen &&
    css`
      width: 100%;
      height: 100%;
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
