import styled, { css } from "styled-components";
import { TQuenSize } from "../types/size";

const getSizing = (size: TQuenSize) => {
  switch (size) {
    case "xs":
      return css`
        padding: 0.25rem;
        gap: 0.75rem;
      `;
    case "s":
      return css`
        padding: 0.5rem;
        gap: 1rem;
      `;
    case "l":
      return css`
        padding: 1.5rem;
        gap: 2rem;
      `;
    case "m":
    default:
      return css`
        padding: 1rem;
        gap: 1.5rem
      `;
  }
}

export const CardStyled = styled.div.withConfig({
  shouldForwardProp: prop => !["shadow"].includes(prop)
}).attrs({ className: "quen-ui__card" })<{ shadow?: boolean; }>`
  border-radius: ${({ theme }) => theme.components.Card.radius};
  border: 1px solid ${({ theme }) => theme.components.Card.borderColor};
  width: 350px;
  
  ${({ shadow, theme }) => shadow && css`
    box-shadow: ${theme.components.Card.shadow};
  `};
`;

export const CardHeaderStyled = styled.div<{ size: TQuenSize}>`
  ${({ size }) => getSizing(size)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardContentStyled = styled.div<{ size: TQuenSize }>`
  ${({ size }) => getSizing(size)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardActionsStyled = styled.div<{ size: TQuenSize }>`
  ${({ size }) => getSizing(size)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
