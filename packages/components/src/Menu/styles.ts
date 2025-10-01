import styled, { css } from "styled-components";
import { Flex } from "../Flex";

export const MenuItemStyled = styled.button
  .withConfig({
    shouldForwardProp: (prop) => !["disabled", "active", "hover"].includes(prop)
  })
  .attrs<{ active?: boolean }>((props) => ({
    className: props.active
      ? "quen-ui__layout-menu-item--active"
      : "quen-ui__layout-menu-item"
  }))<{
  disabled?: boolean;
  active?: boolean;
  hover?: boolean;
}>`
  outline: none;
  border: none;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 4px;
  transition: background 0.2s ease;
  background: transparent;
  justify-content: flex-start;

  color: ${({ theme, disabled }) => (disabled ? theme.colors.grayViolet[7] : theme.textColor)};

  * {
    color: ${({ theme, disabled }) => (disabled ? theme.colors.grayViolet[7] : theme.textColor)};
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
    display: flex;
    width: 100%;
  }
  
  .quen-ui--menu__item_group {
    font-weight: bold;
  }

  .quen-ui--menu__item_icon-arrow {
    transform: rotateZ(270deg);
    margin-left: auto;
    margin-right: 0;
  }

  &:hover {
    background: ${({ theme, active, hover }) =>
      hover && !active && theme.colors.grayViolet["5"]};
  }

  ${({ theme, disabled, active }) =>
    active &&
    !disabled &&
    css`
      background-color: ${theme.colors.violet["5"]};
    `}

  &:hover > .quen-ui--submenu {
    display: flex;
  }
`;

export const SubMenuHorizontalStyled = styled.div.withConfig({
  shouldForwardProp: prop => !["left", "top", "visible"].includes(prop)
})<{ left: number; top: number; visible: boolean}>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  z-index: 1000;
  width: max-content;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
      visible ? "translateY(0)" : "translateY(-5px)"};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  transition: opacity 0.2s ease, transform 0.2s ease;
`;

export const SubMenuVerticalStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["level"].includes(prop)
})<{ level: number }>`
  display: flex;
  flex-direction: column;
  z-index: 1000;
  ${MenuItemStyled} {
    padding-left: calc(16px + (${({ level }) => level} * 8px));
  }

  & .quen-ui--menu__submenu {
    top: 0;
    left: 100%;
  }
`;

export const MenuStyled = styled(Flex)`
  position: relative;
`;
