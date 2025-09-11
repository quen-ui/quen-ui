import styled, { css, RuleSet } from "styled-components";
import { TransitionStatus } from "react-transition-state";
import {
  TDropdownDirection,
  IDropdownProps,
  TDropdownListProps
} from "./types";
import DropdownList from "./DropdownList";
import { TQuenSize } from "../types/size";
import { Text } from "../typography/Text";

type IDropdownItemStyledProps = {
  size: TQuenSize;
  disabled?: boolean;
};

type TDropdownListStyledProps<ITEM> = TDropdownListProps<ITEM> & {
  direction: TDropdownDirection;
  anchorRect: DOMRect;
  dropdownRect: DOMRect;
  maxHeight: number;
  height?: string;
  transitionStatus: TransitionStatus;
  minWidth: number;
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

export const DropdownListWrapper = styled.div.withConfig({
  shouldForwardProp: prop => !["anchorRef", "width", "height", "direction"].includes(prop),
})<TDropdownStyledProps>`
  ${({ theme, direction }) => css`
    background: ${theme.colors.grayViolet[5]};
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: ${getBorderRadius(direction)};
    border: 1px solid ${theme.colors.grayViolet[9]};
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

export const DropdownListStyled = styled(DropdownList).withConfig({
  shouldForwardProp: (prop) =>
    ![
      "direction",
      "transitionStatus",
      "anchorRect",
      "dropdownRect",
      "maxHeight",
      "minWidth"
    ].includes(prop)
})<TDropdownListStyledProps<any>>`
  position: absolute;
  overflow-y: auto;
  max-height: ${({ maxHeight }) => maxHeight}px;
  height: ${({ height }) => height || "max-content"};
  width: ${({ width }) => width || "max-content"};
  min-width: ${({ minWidth }) => `${minWidth}px`};

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

export const DropdownItemStyled = styled(Text)<IDropdownItemStyledProps>`
  justify-content: flex-start;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  padding: 0.25rem;
  display: flex;
  gap: 0.25rem;
  
  ${({ disabled }) => disabled ? css`
    background: ${({ theme }) => theme.colors.gray[3]};
    color:  ${({ theme }) => theme.colors.grayViolet[1]};
  ` : css`
    &:hover {
      padding-left: calc(0.25rem - 2px);
      background: ${({ theme }) => theme.colors.gray[3]};
      border-left: 2px solid
      ${({ theme }) => theme.colors.violet[3]};
    }
  `}
`;
