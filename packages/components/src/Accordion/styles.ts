import styled, { css, keyframes } from "styled-components";
import { Flex } from "../Flex";
import { TQuenSize } from "../types/size";
import { TAccordionVariants } from "./types";

export const AccordionContainer = styled(Flex)<{
  variant?: TAccordionVariants;
}>`
  border-radius: ${({ theme }) => theme.components.Accordion.radius};
  ${({ variant, theme }) => css`
    ${variant === "bordered" &&
    `border: 1px solid ${theme.components.Accordion.borderColor}`};
  `};
`;

export const AccordionItemStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["open", "variant", "lastItem"].includes(prop)
})<{
  open?: boolean;
  lastItem?: boolean;
  variant?: TAccordionVariants;
}>`
  ${({ open, theme, lastItem, variant }) =>
    open &&
    !lastItem &&
    variant !== "ghost" &&
    css`
      border-bottom: 1px solid ${theme.components.Accordion.borderColor};
    `};
`;

const itemContentOpenAnimation = keyframes`
  from {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(0);
  }

  to {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
  }
`;

const itemContentCloseAnimation = keyframes`
  from {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
  }

  to {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(0);
  }
`;

export const AccordionItemHeader = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["open", "size", "lastItem", "disabled", "variant"].includes(prop)
})<{
  disabled?: boolean;
  size: TQuenSize;
  lastItem?: boolean;
  open?: boolean;
  variant?: TAccordionVariants;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: ${({ theme, size }) => theme.components.Accordion.padding[size]};

  &:hover {
    background: ${({ theme, disabled, variant }) =>
      !disabled &&
      variant !== "ghost" &&
      theme.components.Accordion.hoverHeaderBackground};
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      &,
      .quen-ui__title {
        color: ${theme.components.Accordion.disabledColor};
      }
      cursor: not-allowed;
    `};
  ${({ lastItem, theme, open }) =>
    !lastItem &&
    !open &&
    css`
      border-bottom: 1px solid ${theme.components.Accordion.borderColor};
    `};
  
  .quen-ui__accordion--arrow-icon {
    color: ${({ theme }) => theme.textColor};
  }

  ${({ open }) =>
    open &&
    css`
      .quen-ui__accordion--arrow-icon {
        transform: rotate(180deg);
        transition: all 0.2s ease-in-out;
      }
    `};
`;

export const AccordionItemRightContentStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  margin-right: 0;
`;

export const AccordionItemContent = styled.div<{
  size: TQuenSize;
  hidden?: boolean;
  open?: boolean;
}>`
  animation: ${({ open }) =>
      open ? itemContentOpenAnimation : itemContentCloseAnimation}
    0.2s ease-in-out;
  padding: ${({ theme, size }) => theme.components.Accordion.padding[size]};
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `};
`;
