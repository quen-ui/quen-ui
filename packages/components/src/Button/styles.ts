import styled, { css, RuleSet } from "styled-components";
import { darken, desaturate } from "polished";
import { IButtonProps, TButtonSize, TButtonView } from "./types";
import { IQuenUITheme } from "@quen-ui/theme";

type TButtonStyledProps = Omit<IButtonProps, "view"> & {
  viewButton?: TButtonView;
};

const getSizing = (view: TButtonView, size?: TButtonSize): RuleSet => {
  switch (size) {
    case "l":
      return css`
        height: 3rem; // 48px
        ${view === "icon" && "width: 3rem"};
      `;
    case "s":
      return css`
        height: 2rem; // 32px
        ${view === "icon" && "width: 2rem"};
      `;
    case "xs":
      return css`
        height: 1.5rem; // 24px
        ${view === "icon" && "width: 1.5rem"};
      `;
    case "m":
    default:
      return css`
        height: 2.5rem; // 40px
        ${view === "icon" && "width: 2.5rem"};
      `;
  }
};

const getBackground = (
  theme: IQuenUITheme,
  view: TButtonView = "primary",
  isDisabled?: boolean
): RuleSet => {
  switch (view) {
    case "secondary":
      return css`
        background: ${theme.colors.gray["5"]};
        color: ${theme.colors.gray["1"]};

        &:hover {
          background: ${theme.colors.gray["4"]};
        }

        &:active {
          background: ${theme.colors.gray["6"]};
        }
      `;
    case "danger":
      return css`
        background: ${theme.colors.red["7"]};
        color: ${theme.colors.gray["1"]};

        &:hover {
          background: ${theme.colors.red["6"]};
        }

        &:active {
          background: ${theme.colors.red["8"]};
        }
      `;
    case "ghost":
      return css`
        background: transparent;
        color: ${theme.textColor};

        &:hover {
          color: ${theme.colors.gray["7"]};
        }

        &:active {
          color: ${theme.colors.gray["9"]};
        }
      `;
    case "success":
      return css`
        background: ${theme.colors.green["7"]};
        color: ${theme.colors.gray["1"]};

        &:hover {
          background: ${theme.colors.green["6"]};
        }

        &:active {
          background: ${theme.colors.green["8"]};
        }
      `;
    case "warning":
      return css`
        background: ${theme.colors.orange[7]};
        color: ${theme.colors.gray["1"]};

        &:hover {
          background: ${theme.colors.orange[6]};
        }

        &:active {
          background: ${theme.colors.orange[8]};
        }
      `;
    case "link":
      return css`
        background: transparent;
        color: ${theme.colors.violet[8]};

        &:hover {
          color: ${theme.colors.violet[6]};
        }

        &:active {
          color: ${theme.colors.violet[9]};
        }

        &:disabled {
          color: ${theme.colors.violet[1]};
        }
      `;
    case "icon":
      return css`
        background: transparent;

        &:hover {
          fill: ${!isDisabled && desaturate(0.2, theme.primaryColor)};
        }

        &:active {
          fill: ${!isDisabled && darken(0.2, theme.primaryColor)};
        }
      `;
    case "primary":
    default:
      return css`
        background: ${theme.primaryColor};
        color: ${theme.colors.gray["1"]};

        &:hover {
          background: ${desaturate(0.2, theme.primaryColor)};
        }

        &:active {
          background: ${darken(0.2, theme.primaryColor)};
        }
      `;
  }
};

export const ButtonStyled = styled.button<TButtonStyledProps>`
  border: none;
  background: none;
  outline: none;
  ${({ size, viewButton }) => getSizing(viewButton || "primary", size)}
  cursor: pointer;
  padding-left: ${({ viewButton }) =>
    viewButton === "icon" ? "0.25" : "0.75"}rem;
  padding-right: ${({ viewButton }) =>
    viewButton === "icon" ? "0.25" : "0.75"}rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  text-decoration: none;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};
  ${({ theme, viewButton, isDisabled }) =>
    getBackground(theme, viewButton, isDisabled)};

  &:disabled {
    background: ${({ theme }) => theme.colors.gray["2"]};
    cursor: not-allowed;
  }
`;
