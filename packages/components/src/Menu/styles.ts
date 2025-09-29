import styled, { css } from "styled-components";

export const MenuItemStyled = styled.button
  .withConfig({
    shouldForwardProp: (prop) => !["disabled", "active"].includes(prop)
  })
  .attrs<{ active?: boolean }>((props) => ({
    className: props.active
      ? "quen-ui__layout-menu-item--active"
      : "quen-ui__layout-menu-item"
  }))<{
  disabled?: boolean;
  active?: boolean;
  collapsed?: boolean;
}>`
  outline: none;
  border: none;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  border-radius: 4px;
  transition: background 0.2s ease;
  background: transparent;
  justify-content: ${({ collapsed }) =>
  collapsed ? "center" : "flex-start"};

  color: ${({ theme, disabled  }) => disabled ? theme.colors.grayViolet[7] : theme.textColor};

  * {
    color: ${({ theme, disabled  }) => disabled ? theme.colors.grayViolet[7] : theme.textColor};
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
    display: flex;
    width: 100%;
  }

  .menu-label {
    width: 100%;
  }

  &:hover {
    background: ${({ theme, disabled, active }) =>
  !disabled && !active && theme.colors.grayViolet["5"]};
  }

  ${({ theme, disabled, active }) =>
  active &&
  !disabled &&
  css`
      background-color: ${theme.colors.violet["5"]};
    `}
`;
