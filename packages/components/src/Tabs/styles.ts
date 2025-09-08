import styled, { css } from "styled-components";
import { Text } from "../typography/Text";
import { ITabsListProps } from "./types";

export const TabStyled = styled(Text)
  .attrs({ as: "button" })
  .withConfig({
    shouldForwardProp: (prop: string) => prop !== "isSelected"
  })<{ isSelected: boolean }>`
  border-radius: 0.25rem 0.25rem 0 0;
  border-width:  0 0 0.125rem 0;
  border-style: solid;
  border-color: transparent;
  background: transparent;
  position: relative;
  padding: 0.625rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: unset;
  justify-content: center;
  cursor: pointer;
  gap: 8px;
  color: ${({ theme }) => theme.textColor};
  
  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      border-color: ${theme.primaryColor};
    `}
  
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.gray[1]};
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.grayViolet[2]};
  }
`;

export const TabsListStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["justify", "isGrow"].includes(prop)
})<{ justify: ITabsListProps["justify"]; isGrow?: boolean }>`
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

  &:before {
    content: "";
    position: absolute;
    border-color: ${({ theme }) =>
      theme.colors.grayViolet[9]};
    border-width: 0.0625rem;
    border-style: solid;
    bottom: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;
    top: unset;
  }
`;

export const TabPanelStyled = styled.div`
  padding-top: 0.625rem;
`;
