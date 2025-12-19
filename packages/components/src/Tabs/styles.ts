import styled, { css, DefaultTheme, RuleSet } from "styled-components";
import { Text } from "../typography/Text";
import { ITabsListProps } from "./types";

const getTabStyled = (
  theme: DefaultTheme,
  selected: boolean,
  outline?: boolean
): RuleSet => {
  if (outline) {
    return css`
      border-style: solid;
      border-width: 1px;
      border-top-left-radius: ${theme.components.Tabs.radius};
      border-top-right-radius: ${theme.components.Tabs.radius};
      border-color: transparent;
      background: transparent;
      color: ${theme.components.Tabs.color};
      
      ${selected ? css`
        border-top-color: ${theme.components.Tabs.hoverColor};
        border-left-color: ${theme.components.Tabs.hoverColor};
        border-right-color: ${theme.components.Tabs.hoverColor};
        border-bottom-color: var(--tab-background, white);
        
        &::after {
          content: "";
          position: absolute;
          left: -1px;
          right: -1px;
          bottom: calc(-1 * (${theme.components.Tabs.borderWidth}));
          height: ${theme.components.Tabs.borderWidth};
          background: transparent;
        }
      ` : css`
        border-top-color: transparent;
        border-left-color: transparent;
        border-right-color: transparent;
      `};

      &:hover:not(:disabled) {
        color: ${theme.components.Tabs.hoverColor};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${theme.components.Tabs.disabledColor};
      }
    `;
  }

  return css`
    border-radius: ${`${theme.components.Tabs.radius} ${theme.components.Tabs.radius} 0 0`};
    border-width: 0 0 0.125rem 0;
    border-style: solid;
    border-color: transparent;
    background: transparent;
    color: ${theme.components.Tabs.color};

    ${selected &&
    css`
      border-color: ${theme.components.Tabs.activeColor};
    `}

    &:disabled {
      cursor: not-allowed;
      color: ${theme.components.Tabs.disabledColor};
    }

    &:hover:not(:disabled) {
      color: ${theme.components.Tabs.hoverColor};
      border-color: ${theme.components.Tabs.hoverBorderColor};
      * {
        color: ${theme.components.Tabs.hoverColor};
      }
    }
  `;
};

export const TabStyled = styled(Text)
  .attrs({ as: "button" })
  .withConfig({
    shouldForwardProp: (prop: string) => !["selected", "outline"].includes(prop)
  })<{ selected: boolean; outline?: boolean }>`

  position: relative;
  padding: 0.625rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: unset;
  justify-content: center;
  cursor: pointer;
  gap: 8px;
  
  ${({ theme, selected, outline }) => getTabStyled(theme, selected, outline)};

`;

const getTabsListStyled = (theme: DefaultTheme, outline?: boolean) => {
  if (outline) {
    return css`
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: ${theme.components.Tabs.borderWidth};
        background: ${theme.components.Tabs.hoverColor};
      }
    `;
  }
  if (!outline) {
    return css`
      &:before {
        content: "";
        position: absolute;
        border-color: ${theme.components.Tabs.hoverColor};
        border-width: ${theme.components.Tabs.borderWidth};
        border-style: solid;
        bottom: 0;
        inset-inline-start: 0;
        inset-inline-end: 0;
        top: unset;
      }
    `;
  }

};

export const TabsListStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["justify", "isGrow", "outline"].includes(prop)
})<{ justify: ITabsListProps["justify"]; isGrow?: boolean; outline?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify};
  gap: unset;
  position: relative;
  width: 100%;

  ${({ isGrow }) =>
    isGrow &&
    css`
      ${TabStyled} {
        flex-grow: 1;
      }
    `};

  ${({ theme, outline }) => getTabsListStyled(theme, outline)}
`;

export const TabPanelStyled = styled.div`
  padding-top: 0.625rem;
`;
