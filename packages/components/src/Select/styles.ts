import styled, { createGlobalStyle, css } from "styled-components";
import { InputBase } from "../InputBase";

export const SelectWrapper = styled(InputBase).withConfig({
  shouldForwardProp: (prop) => !["zIndex"].includes(prop)
})<{ zIndex?: number }>`
  .quen-ui__input-base__container {
    padding-left: 0;
  }

  .rc-select {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    min-width: 100px;
    position: relative;
    cursor: pointer;
  }

  .icon-arrow {
    color: ${({ theme }) => theme.components.Input.iconColor};
  }

  .rc-select-open {
    .icon-arrow {
      transform: rotateX(180deg);
      transition: all 0.2s ease-in-out;
    }
  }

  .rc-select-disabled > .rc-select-selector {
    background: ${({ theme }) => theme.components.Input.disabledBackground};
    cursor: not-allowed;

    input {
      cursor: not-allowed;
    }
  }

  .rc-select-selector {
    padding-left: 0.75rem;
    width: 100%;
    flex: 0 0 100%;
    min-height: ${({ size = "m", theme  }) => theme.control.height[size]};
    align-items: center;
  }

  .rc-select-arrow {
    position: relative;
    z-index: 10;
    right: 22px;
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
    top: ${({ size }) => {
      if (size === "l") {
        return "-3px";
      } else if (size === "m") {
        return "-2px";
      } else if (size === "s") {
        return "0px";
      } else if (size === "xs") {
        return "1px";
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
    width: calc(100% - 10px);
    position: relative;
    height: 100%;
  }

  .rc-select-single:not(.rc-select-customize-input)
    .rc-select-selector
    .rc-select-selection-search-input {
    border: none;
    outline: none;
    width: 100%;
  }

  .rc-select .rc-select-selection-search-input {
    appearance: none;
  }
  .rc-select .rc-select-selection-search-input::-webkit-search-cancel-button {
    display: none;
    appearance: none;
  }

  .rc-select-allow-clear .rc-select-clear {
    color: ${({ theme }) => theme.components.Input.iconColor};
    cursor: pointer;
    position: absolute;
    right: 2.625rem;
  }

  .rc-select-clear-icon {
    width: ${({ size }) => {
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

  .rc-select-selection-search-input {
    font-size: ${({ theme, size = "m" }) => theme.fonts.text.size[size]};
    font-weight: ${({ theme }) => theme.fonts.text.weight};
    line-height: ${({ theme, size= "m" }) => theme.fonts.text.lineHeight[size]};
  }

  .rc-select-multiple .rc-select-selector {
    display: flex;
    padding: 1px;
  }

  .rc-select-selection-item {
    svg {
      width: 16px;
      height: 16px;
    }

    .quen-ui__text {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  .rc-select-multiple .rc-select-selector .rc-select-selection-item {
    flex: none;
    border-radius: 4px;
    margin-right: 2px;
    padding: 0 8px;
  }

  .rc-select-multiple .rc-select-selector .rc-select-selection-item-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .rc-select-multiple .rc-select-selector .rc-select-selection-overflow {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .rc-select-multiple .rc-select-selector .rc-select-selection-overflow-item {
    flex: none;
    max-width: 100%;
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

  .rc-select-multiple .rc-select-selector .rc-select-selection-search-mirror {
    position: absolute;
    z-index: 999;
    white-space: nowrap;
    left: 0;
    top: 0;
    visibility: hidden;
  }

  .rc-select-multiple .rc-select-selector .rc-select-selection-search-input {
    border: none;
    outline: none;
    width: 100%;
  }
  .rc-select-allow-clear.rc-select-multiple .rc-select-selector {
    padding-right: 20px;
  }

  .rc-select-multiple .rc-select-selector .rc-select-selection-placeholder {
    position: absolute;
    left: 3px;
    pointer-events: none;
    font-weight: normal;
    top: ${({ size }) => {
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
`;

export const SelectDropDownStyles = createGlobalStyle<{ zIndex?: number }>`
  .rc-select-dropdown {
    min-height: 100px;
    position: absolute;
    background: ${({ theme }) => theme.components.Dropdown.background};
    border: 1px solid ${({ theme }) => theme.components.Dropdown.borderColor};
    border-radius: ${({ theme }) => theme.components.Dropdown.radius};

    ${({ zIndex }) =>
      zIndex &&
      css`
        z-index: ${zIndex};
      `}
  }
  
  .rc-select-item-option-content {
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.components.Input.color};
    svg {
      width: 16px;
      height: 16px;
    }
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
    background: ${({ theme }) => theme.components.Dropdown.hoverBackground};
    border-left: 2px solid
    ${({ theme }) => theme.components.Dropdown.borderLeftColor};
  }
  .rc-select-item-option-disabled {
    background: ${({ theme }) => theme.components.Dropdown.disabledBackground};
    cursor: not-allowed;
    .quen-ui__select-option {
      color: ${({ theme }) => theme.components.Dropdown.disabledColor};
    }
  }
  .rc-select-item-empty {
    text-align: center;
    color: ${({ theme }) => theme.components.Input.color};
  }
  
  .rc-select-item-option-selected {
    border-left: 2px solid
    ${({ theme }) => theme.components.Dropdown.borderLeftColor};
  }
`;
