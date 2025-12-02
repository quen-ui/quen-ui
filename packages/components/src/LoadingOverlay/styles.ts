import styled, { keyframes, css } from "styled-components";

export const LoadingOverlayWrapper = styled.div`
  position: relative;
`;

const fadeIn = keyframes`
from { opacity: 0; }
to { opacity: 1; }
`;

export const LoadingOverlayStyled = styled.div<{
  backdrop?: boolean;
  zIndex: number;
}>`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: all;
  animation: ${fadeIn} 0.2s ease;

  ${({ backdrop, theme }) =>
    backdrop &&
    css`
      background: ${theme.components.LoadingOverlay.background};
      backdrop-filter: ${theme.components.LoadingOverlay.blur};
    `}
`;
