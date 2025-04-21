import styled, { DefaultTheme, createGlobalStyle } from "styled-components";
import { TQuenSize } from "../types/size";

const getHeight = (size: TQuenSize, theme: DefaultTheme): string => {
  switch (size) {
    case "l":
      return theme.control.heightL;
    case "s":
      return theme.control.heightS;
    case "xs":
      return theme.control.heightXs;
    case "m":
    default:
      return theme.control.heightM;
  }
};

export const SelectWrapper = styled.div<{ size: TQuenSize }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .text-field__required {
    color: ${({ theme }) => theme.colors.text.colors.red};
  }

  .text-field__error-message {
    color: ${({ theme }) => theme.colors.text.colors.red};
  }
  
  .rc-select {
    display: inline-block;
    font-size: 12px;
    width: 100px;
    position: relative;
  }

  .rc-select-focused .rc-select-selector {
    border-bottom: 2px solid   ${({ theme }) =>
      theme.colors.component.primary.default.violet}!important;;
  }
  
  .rc-select-selector {
    width: 100%;
    border-radius:${({ theme }) => theme.control.radius};
    border: 1px solid ${({ theme }) => theme.colors.gray.gray3};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray5};
    height: ${({ size, theme }) => getHeight(size, theme)};
    align-items: center;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray8};
    }
  }
  
  .rc-select-selection-search-input {
    height: 100%;
    background-color: transparent;
    border: none;
    width: 100%;
  }

  .rc-select-single .rc-select-selector .rc-select-selection-item,
  .rc-select-single .rc-select-selector .rc-select-selection-placeholder {
    position: absolute;
    left: 3px;
    pointer-events: none;
    font-weight: normal;
    top: ${({size}) => {
      if (size === "l") {
        return "10px";
      } else if (size === "m") {
        return "8px";
      } else if (size === "s") {
        return "7px";
      } else if (size === "xs") {
        return "2px";
      }
    }};
  }

  .rc-select-single .rc-select-selector {
    display: flex;
    position: relative;
  }

  .rc-select-single .rc-select-selector .rc-select-selection-search {
    width: 100%;
    position: relative;
  }
  .rc-select-single .rc-select-selector .rc-select-selection-search-input {
    width: 100%;
  }

  .rc-select-single .rc-select-selector .rc-select-selection-wrap {
    width: 100%;
    position: relative;
    height: 100%;
  }

  .rc-select-single:not(.rc-select-customize-input) .rc-select-selector .rc-select-selection-search-input {
    border: none;
    outline: none;
    width: 100%;
  }

  .rc-select-multiple .rc-select-selector .rc-select-selection-search {
    position: relative;
    max-width: 100%;
  }
  .rc-select-multiple .rc-select-selector .rc-select-selection-search-input,
  .rc-select-multiple .rc-select-selector .rc-select-selection-search-mirror {
    padding: 1px;
    font-family: system-ui;
  }

  .rc-select-allow-clear .rc-select-clear {
    cursor: pointer;
    position: absolute;
    right: 0.625rem;
    top: ${({size}) => {
      if (size === "l") {
        return "0.625rem";
      } else if (size === "m") {
        return "0.5rem";
      } else if (size === "s") {
        return "0.4375rem";
      } else if (size === "xs") {
        return "0.1875rem";
      }
    }};
  }
  
  .rc-select-clear-icon {
    font-size: ${({size}) => {
      if (size === "l") {
        return "1.5rem";
      } else if (size === "m") {
        return "1.25rem";
      } else if (size === "s") {
        return "1rem";
      } else if (size === "xs") {
        return "0.875rem";
      }
    }};
  }
  
`;

export const SelectDropDownStyles = createGlobalStyle`
  .rc-select-dropdown {
    min-height: 100px;
    position: absolute;
    background: ${({ theme }) => theme.colors.component.secondary.default.grayViolet};
    border: 1px solid ${({ theme }) => theme.colors.component.primary.default.grayViolet};
    border-radius: ${({ theme }) => theme.control.radius};
  }

  .rc-select-dropdown-hidden {
    display: none;
  }

  .rc-select-dropdown-slide-up-enter,
  .rc-select-dropdown-slide-up-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
    animation-play-state: paused;
  }
  .rc-select-dropdown-slide-up-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    opacity: 1;
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
    animation-play-state: paused;
  }

  .rc-select-dropdown-slide-up-enter.rc-select-dropdown-slide-up-enter-active.rc-select-dropdown-placement-bottomLeft,
  .rc-select-dropdown-slide-up-appear.rc-select-dropdown-slide-up-appear-active.rc-select-dropdown-placement-bottomLeft,
  .rc-select-dropdown-slide-up-enter.rc-select-dropdown-slide-up-enter-active.rc-select-dropdown-placement-bottomRight,
  .rc-select-dropdown-slide-up-appear.rc-select-dropdown-slide-up-appear-active.rc-select-dropdown-placement-bottomRight {
    animation-name: rcSelectDropdownSlideUpIn;
    animation-play-state: running;
  }
  .rc-select-dropdown-slide-up-leave.rc-select-dropdown-slide-up-leave-active.rc-select-dropdown-placement-bottomLeft,
  .rc-select-dropdown-slide-up-leave.rc-select-dropdown-slide-up-leave-active.rc-select-dropdown-placement-bottomRight {
    animation-name: rcSelectDropdownSlideUpOut;
    animation-play-state: running;
  }
  .rc-select-dropdown-slide-up-enter.rc-select-dropdown-slide-up-enter-active.rc-select-dropdown-placement-topLeft,
  .rc-select-dropdown-slide-up-appear.rc-select-dropdown-slide-up-appear-active.rc-select-dropdown-placement-topLeft,
  .rc-select-dropdown-slide-up-enter.rc-select-dropdown-slide-up-enter-active.rc-select-dropdown-placement-topRight,
  .rc-select-dropdown-slide-up-appear.rc-select-dropdown-slide-up-appear-active.rc-select-dropdown-placement-topRight {
    animation-name: rcSelectDropdownSlideDownIn;
    animation-play-state: running;
  }
  .rc-select-dropdown-slide-up-leave.rc-select-dropdown-slide-up-leave-active.rc-select-dropdown-placement-topLeft,
  .rc-select-dropdown-slide-up-leave.rc-select-dropdown-slide-up-leave-active.rc-select-dropdown-placement-topRight {
    animation-name: rcSelectDropdownSlideDownOut;
    animation-play-state: running;
  }

  @keyframes rcSelectDropdownSlideUpIn {
    0% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
  }
  @keyframes rcSelectDropdownSlideUpOut {
    0% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(0);
    }
  }
  @keyframes rcSelectDropdownSlideDownIn {
    0% {
      transform: scaleY(0);
      transform-origin: 100% 100%;
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 100% 100%;
      opacity: 1;
    }
  }
  @keyframes rcSelectDropdownSlideDownOut {
    0% {
      transform: scaleY(1);
      transform-origin: 100% 100%;
      opacity: 1;
    }
    100% {
      transform: scaleY(0);
      transform-origin: 100% 100%;
      opacity: 0;
    }
  }

  .rc-select-item {
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    padding: 4px 16px;
  }
  
  .rc-select-item-option {
    position: relative;
  }
  
  .rc-select-item-option .rc-select-item-option-state {
    position: absolute;
    right: 0;
    top: 4px;
    pointer-events: none;
  }
  .rc-select-item-option-active {
    background: ${({ theme }) => theme.colors.component.secondary.default.gray};
    border-left: 2px solid
    ${({ theme }) => theme.colors.component.primary.hover.violet};
    //padding-left: calc(0.25rem - 2px);
  }
  .rc-select-item-option-disabled {
    background: ${({ theme }) => theme.colors.component.primary.disabled.grayViolet};
    cursor: not-allowed;
    .quen-ui__select-option {
      color: ${({ theme }) => theme.colors.text.disabled};
    }
  }
  .rc-select-item-empty {
    text-align: center;
    color: ${({ theme }) => theme.colors.text.default};
  }
  
  .rc-select-item-option-selected {
    background: ${({ theme }) => theme.colors.component.secondary.hover.gray};
    border-left: 2px solid
    ${({ theme }) => theme.colors.component.primary.hover.violet};
  }
`;
