import styled, { css, RuleSet } from "styled-components";
import { TransitionStatus } from "react-transition-state";
import {
  TDropdownDirection,
  IDropdownProps,
  TDropdownListProps
} from "./types";
import DropdownList from "./DropdownList";
import { TQuenSize } from "../types/size";
import { Control } from "../typography/Control";

type IDropdownItemStyledProps = {
  size: TQuenSize;
  isDisabled?: boolean;
};

type TDropdownListStyledProps<ITEM> = TDropdownListProps<ITEM> & {
  direction: TDropdownDirection;
  anchorRect: DOMRect;
  dropdownRect: DOMRect;
  maxHeight: number;
  height?: string;
  transitionStatus: TransitionStatus;
};

type TDropdownStyledProps = Required<Pick<IDropdownProps, "direction">> & {
  top?: number;
  left?: number;
  width?: string;
};

const MARGIN = 8;

const getDirectionStyles = <ITEM>({
  direction,
  anchorRect,
  dropdownRect
}: TDropdownListStyledProps<ITEM>): RuleSet => {
  switch (direction) {
    case "top":
      return css`
        left: ${anchorRect.left +
        anchorRect.width / 2 -
        dropdownRect.width / 2}px;
        top: ${anchorRect.top - MARGIN - dropdownRect.height}px;
      `;
    case "bottom":
      return css`
        top: ${anchorRect.bottom + MARGIN}px;
        left: ${anchorRect.left +
        anchorRect.width / 2 -
        dropdownRect.width / 2}px;
      `;
    case "bottomRight":
      return css`
        top: ${anchorRect.bottom + MARGIN}px;
        left: ${anchorRect.right - dropdownRect.width}px;
      `;
    case "bottomLeft":
      return css`
        top: ${anchorRect.bottom + MARGIN}px;
        left: ${anchorRect.left}px;
      `;
    case "topLeft":
      return css`
        top: ${anchorRect.top - MARGIN - dropdownRect.height}px;
        left: ${anchorRect.left}px;
      `;
    case "topRight":
      return css`
        top: ${anchorRect.top - MARGIN - dropdownRect.height}px;
        left: ${anchorRect.right - dropdownRect.width}px;
      `;
    case "right":
      return css`
        top: ${anchorRect.height / 2 -
        dropdownRect.height / 2 +
        anchorRect.top}px;
        left: ${anchorRect.left + MARGIN + anchorRect.width}px;
      `;
    case "left":
      return css`
        left: ${anchorRect.left - MARGIN - dropdownRect.width}px;
        top: ${anchorRect.height / 2 -
        dropdownRect.height / 2 +
        anchorRect.top}px;
      `;
    default:
      return css``;
  }
};

const getBorderRadius = (direction: TDropdownDirection): string => {
  switch (direction) {
    case "bottomLeft":
      return "0 0.5rem 0.5rem 0.5rem";
    case "bottomRight":
      return "0.5rem 0 0.5rem 0.5rem";
    case "topLeft":
      return "0.5rem 0.5rem 0.5rem 0";
    case "topRight":
      return "0.5rem 0.5rem 0 0.5rem";
    default:
      return "0.5rem";
  }
};

export const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
  height: max-content;
`;

export const DropdownListWrapper = styled.div<TDropdownStyledProps>`
  ${({ theme, direction }) => css`
    background: ${theme.colors.component.secondary.default.grayViolet};
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: ${getBorderRadius(direction)};
    border: 1px solid ${theme.colors.component.primary.default.grayViolet};
  `};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};

  ${({ top, left }) =>
    top &&
    left &&
    css`
      left: ${left}px;
      top: ${top}px;
      position: absolute;
      z-index: 1000;
    `};
`;

export const DropdownListStyled = styled(DropdownList)<
  TDropdownListStyledProps<any>
>`
  position: absolute;
  overflow-y: auto;
  max-height: ${({ maxHeight }) => maxHeight}px;
  height: ${({ height }) => height || "max-content"};

  ${({ transitionStatus }) =>
    (transitionStatus === "preEnter" || transitionStatus === "exiting") &&
    css`
      opacity: 0;
      transform: scale(0.9);
    `};

  z-index: 1000;
  ${getDirectionStyles};
`;

export const DropdownItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DropdownItemStyled = styled(Control)<IDropdownItemStyledProps>`
  justify-content: flex-start;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allow" : "pointer")};
  padding: 0.25rem;
  display: flex;
  gap: 0.25rem;

  &:hover {
    padding-left: calc(0.25rem - 2px);
    background: ${({ theme }) => theme.colors.component.secondary.default.gray};
    border-left: 2px solid ${({ theme }) => theme.colors.component.primary.hover.violet};
  }
`;
