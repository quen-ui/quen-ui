import styled, { css, RuleSet } from "styled-components";
import { HTMLProps } from "react";
import { Control } from "../typography/Control";
import { IButtonProps, TButtonSize, TButtonView } from "./types";
import { ITheme } from "@quen-ui/theme";

type TButtonStyledProps = Omit<IButtonProps, "view"> & HTMLProps<HTMLButtonElement> & {
  viewButton?: TButtonView;
}

const getHeight = (size?: TButtonSize): number => {
  switch (size) {
    case "l":
      return 3; //48px
    case "s":
      return 2; //32px
    case "xs":
      return 1.5; // 24px
    case "m":
    default:
      return 2.5; //40px
  }
};

const getBackground = (theme: ITheme, view?: TButtonView): RuleSet => {
  switch (view) {
    case "secondary":
      return css`
        background: ${theme.colors.component.secondary.default.gray};
        color: ${theme.colors.text.button};
        
        &:hover {
          background: ${theme.colors.component.secondary.hover.gray};
        }
        
        &:active {
          background: ${theme.colors.component.secondary.pressed.gray};
        }
      `;
    case "danger":
      return css`
        background: ${theme.colors.component.primary.default.red};
        color: ${theme.colors.text.button};

        &:hover {
          background: ${theme.colors.component.primary.hover.red};
        }

        &:active {
          background: ${theme.colors.component.primary.pressed.red};
        }
      `;
    case "ghost":
      return css`
        background: transparent;
        color: ${theme.colors.text.default};
        
        &:hover {
          color: ${theme.colors.text.hover};
        }

        &:active {
          color: ${theme.colors.text.pressed};
        }
      `;
    case "success":
      return css`
        background: ${theme.colors.component.primary.default.green};
        color: ${theme.colors.text.button};

        &:hover {
          background: ${theme.colors.component.primary.hover.green};
        }

        &:active {
          background: ${theme.colors.component.primary.pressed.green};
        }
      `;
    case "warning":
      return css`
        background: ${theme.colors.component.primary.default.orange};
        color: ${theme.colors.text.button};

        &:hover {
          background: ${theme.colors.component.primary.hover.orange};
        }

        &:active {
          background: ${theme.colors.component.primary.pressed.orange};
        }
      `;
    case "link":
      return css`
        background: transparent;
        color: ${theme.colors.text.colors.violet};
        
        &:hover {
          color: ${theme.colors.text.hover};
        }
        
        &:active {
          color: ${theme.colors.text.pressed};
        }
        
        &:disabled {
          color: ${theme.colors.text.disabled};
        }
      `;
    case "primary":
    default:
      return css`
        background: ${theme.colors.component.primary.default.violet};
        color: ${theme.colors.text.button};

        &:hover {
          background: ${theme.colors.component.primary.hover.violet};
        }

        &:active {
          background: ${theme.colors.component.primary.pressed.violet};
        }
      `;
  }
};

export const ButtonStyled = styled(Control)<TButtonStyledProps>`
  border: none;
  background: none;
  outline: none;
  height: ${({ size }) => getHeight(size)}rem;
  cursor: pointer;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  ${({ fullWidth }) => fullWidth && css`width: 100%;`};
  ${({ theme, viewButton }) => getBackground(theme, viewButton)};

  &:disabled {
    background: ${({ theme }) =>
      theme.colors.component.primary.disabled.gray};
    cursor: not-allowed;
  }
`;
