import styled, { css, RuleSet } from "styled-components";
import { PropsWithChildren } from "react";
import type { IDividerProps } from "./types";

const getDirectionStyles = ({
  direction,
  height,
  width
}: IDividerProps): RuleSet => {
  if (direction === "horizontal") {
    return css`
      width: ${width ? width : "100%"};
      flex-direction: row;

      &:before,
      &:after {
        height: 1px;
      }

      &::after {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &::before {
        border-radius: 0.25rem 0 0 0.25rem;
      }
    `;
  }
  return css`
    height: ${height ? height : "100%"};
    flex-direction: column;

    &:before,
    &:after {
      width: 1px;
    }

    &::after {
      border-radius: 0 0 0.25rem 0.25rem;
    }
    &::before {
      border-radius: 0.25rem 0.25rem 0 0;
    }
  `;
};

const getAlignStyles = ({ align, direction }: IDividerProps): RuleSet => {
  if (align === "left") {
    return css`
      &::before {
        ${direction === "horizontal" ? "width: 0.5rem" : "height: 0.5rem"};
      }

      &::after {
        flex-grow: 1;
      }
    `;
  } else if (align === "right") {
    return css`
      &::before {
        flex-grow: 1;
      }

      &::after {
        ${direction === "horizontal" ? "width: 0.5rem" : "height: 0.5rem"};
      }
    `;
  }
  return css`
    &::before,
    &::after {
      flex-grow: 1;
    }
  `;
};

const getBackground = ({
  view,
  }: IDividerProps): RuleSet => {
  return css`
    &::before,
    &::after {
      content: "";
      ${({ theme }) => {
        switch (view) {
          case "disabled":
            return css`
              background-color: ${theme.colors.component.primary.disabled.gray};
            `;
          case "danger":
            return css`
              background-color: ${theme.colors.component.primary.default.red};
            `;
          case "success":
            return css`
              background-color: ${theme.colors.component.primary.default.green};
            `;
          case "warning":
            return css`
              background-color: ${theme.colors.component.primary.default.orange};
            `;
          case "primary":
          default:
            return css`
              background-color: ${theme.colors.component.primary.default.grayViolet};
            `;
        }
      }};
    }
  `;
};

export const DividerStyled = styled.div<PropsWithChildren<IDividerProps>>`
  display: flex;
  align-items: center;
  ${({ children }) => Boolean(children) && "gap: 0.5rem"};
  ${getDirectionStyles};
  ${getBackground};
  ${getAlignStyles};
  & > * {
    width: max-content;
    color: ${({ theme }) => theme.colors.text.default};
  }
`;
