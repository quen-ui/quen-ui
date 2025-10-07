import styled, { css, RuleSet } from "styled-components";
import { darken, desaturate } from "polished";
import { IButtonProps, TButtonView } from "./types";
import { IQuenUITheme } from "@quen-ui/theme";
import { TQuenSize } from "../types/size";

type TButtonStyledProps = Omit<IButtonProps, "view"> & {
  viewButton?: TButtonView;
  isDisabled?: boolean;
};

const getBackground = (
  theme: IQuenUITheme,
  view: TButtonView = "primary",
  isDisabled?: boolean
): RuleSet => {
  switch (view) {
    case "secondary":
      return css`
        background: ${theme.components.Button.secondaryBackground};
        color: ${theme.components.Button.color};

        &:hover {
          background: ${desaturate(0.2, theme.components.Button.secondaryBackground)};
        }

        &:active {
          background: ${darken(0.2, theme.components.Button.secondaryBackground)};
        }
      `;
    case "danger":
      return css`
        background: ${theme.components.Button.dangerBackground};
        color: ${theme.components.Button.color};

        &:hover {
          background: ${desaturate(0.2, theme.components.Button.dangerBackground)};
        }

        &:active {
          background: ${darken(0.2, theme.components.Button.dangerBackground)};
        }
      `;
    case "ghost":
      return css`
        background: transparent;
        color: ${theme.components.Button.ghostColor};

        &:hover {
          color:${desaturate(0.2, theme.components.Button.ghostColor)};
        }

        &:active {
          color: ${darken(0.2, theme.components.Button.ghostColor)};
        }
      `;
    case "success":
      return css`
      background: ${theme.components.Button.successBackground};
        color: ${theme.components.Button.color};

        &:hover {
          background: ${desaturate(0.2, theme.components.Button.successBackground)};
        }

        &:active {
          background: ${darken(0.2, theme.components.Button.successBackground)};
        }
      `;
    case "warning":
      return css`
        background: ${theme.components.Button.warningBackground};
        color: ${theme.components.Button.color};

        &:hover {
          background: ${desaturate(0.2, theme.components.Button.warningBackground)};
        }

        &:active {
          background:  ${darken(0.2, theme.components.Button.warningBackground)};
        }
      `;
    case "link":
      return css`
        background: transparent;
        color: ${theme.colors[theme.primaryColor][9]};

        .quen-ui__text {
          color: unset;
        }

        &:hover {
          color: ${desaturate(0.2, theme.colors[theme.primaryColor][9])};
        }

        &:active {
          color:  ${darken(0.2, theme.colors[theme.primaryColor][9])};
        }

        &:disabled {
          color: ${theme.components.Button.disabledColor};
        }
      `;
    case "icon":
      return css`
        background: transparent;
        color: ${theme.colors.gray["9"]};

        &:hover {
          color: ${!isDisabled && desaturate(0.2, theme.colors[theme.primaryColor][9])};
          fill: ${!isDisabled && desaturate(0.2, theme.colors[theme.primaryColor][9])};
        }

        &:active {
          color: ${!isDisabled && desaturate(0.2, theme.colors[theme.primaryColor][9])};
          fill: ${!isDisabled && darken(0.2, theme.colors[theme.primaryColor][9])};
        }
      `;
    case "primary":
    default:
      return css`
        background: ${theme.colors[theme.primaryColor][9]};
        color: ${theme.components.Button.color};
        
        .quen-ui__text {
          color: ${theme.components.Button.color};;
        }

        &:hover {
          background: ${desaturate(0.2, theme.colors[theme.primaryColor][9])};
        }

        &:active {
          background: ${darken(0.2, theme.colors[theme.primaryColor][9])};
        }
      `;
  }
};

export const ButtonStyled = styled.button.withConfig({
  shouldForwardProp: (prop) => !["viewButton", "isDisabled", "fullWidth"].includes(prop)
})<TButtonStyledProps>`
  border: none;
  background: none;
  outline: none;
  ${({ theme, size = "m", viewButton }) => css`
    height: ${theme.control.height[size as TQuenSize]};
    ${viewButton === "icon" && `width: ${theme.control.height[size as TQuenSize]}`}
  `};
  
  cursor: pointer;
  padding-left: ${({ viewButton }) =>
    viewButton === "icon" ? "0.25" : "0.75"}rem;
  padding-right: ${({ viewButton }) =>
    viewButton === "icon" ? "0.25" : "0.75"}rem;
  border-radius: ${({ theme }) => theme.components.Button.radius};
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  text-decoration: none;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  ${({ theme, viewButton, isDisabled }) =>
    getBackground(theme, viewButton, isDisabled)};

  &:disabled {
    background: ${({ theme }) => theme.components.Button.disabledBackground};
    color: ${({ theme }) => theme.components.Button.disabledColor};
    cursor: not-allowed;
  }
`;
