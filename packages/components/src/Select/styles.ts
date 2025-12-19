import styled, { createGlobalStyle, css } from "styled-components";
import { InputBase } from "../InputBase";

export const SelectWrapper = styled(InputBase).withConfig({
  shouldForwardProp: (prop) => !["zIndex"].includes(prop)
})<{ zIndex?: number }>`
  .quen-ui__input-base__container {
    padding-left: 0;
  }

  .quen-ui__select {
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

  .quen-ui__select-open {
    .icon-arrow {
      transform: rotateX(180deg);
      transition: all 0.2s ease-in-out;
    }
  }

  .quen-ui__select-disabled > .quen-ui__select-selector {
    background: ${({ theme }) => theme.components.Input.disabledBackground};
    cursor: not-allowed;

    input {
      cursor: not-allowed;
    }
  }

  .quen-ui__select-selector {
    padding-left: 0.75rem;
    width: 100%;
    //flex: 0 0 100%;
    min-height: ${({ size = "m", theme  }) => theme.control.height[size]};
    align-items: center;
  }

  .quen-ui__select-arrow {
    position: relative;
    z-index: 10;
    right: 0.75rem;
  }

  .quen-ui__select-selection-search-input {
    height: 100%;
    background-color: transparent;
    border: none;
    width: 100%;
  }

  .quen-ui__select-single .quen-ui__select-selector .quen-ui__select-selection-item,
  .quen-ui__select-single .quen-ui__select-selector .quen-ui__select-selection-placeholder {
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

  .quen-ui__select-single .quen-ui__select-selector {
    display: flex;
    position: relative;
  }

  .quen-ui__select-single .quen-ui__select-selector .quen-ui__select-selection-search {
    width: 100%;
    position: relative;
  }
  .quen-ui__select-single .quen-ui__select-selector .quen-ui__select-selection-search-input {
    width: 100%;
  }

  .quen-ui__select-single .quen-ui__select-selector .quen-ui__select-selection-wrap {
    width: calc(100% - 10px);
    position: relative;
    height: 100%;
  }

  .quen-ui__select-single:not(.quen-ui__select-customize-input)
    .quen-ui__select-selector
    .quen-ui__select-selection-search-input {
    border: none;
    outline: none;
    width: 100%;
  }

  .quen-ui__select .quen-ui__select-selection-search-input {
    appearance: none;
  }
  .quen-ui__select .quen-ui__select-selection-search-input::-webkit-search-cancel-button {
    display: none;
    appearance: none;
  }

  .quen-ui__select-allow-clear .quen-ui__select-clear {
    color: ${({ theme }) => theme.components.Input.iconColor};
    cursor: pointer;
    position: absolute;
    right: 2.625rem;
  }

  .quen-ui__select-clear-icon {
    width: ${({ size }) => {
      if (size === "l") {
        return "1.25rem";
      } else if (size === "m") {
        return "1rem";
      } else if (size === "s") {
        return "1rem";
      } else if (size === "xs") {
        return "0.875rem";
      }
    }};
  }

  .quen-ui__select-selection-search-input {
    font-size: ${({ theme, size = "m" }) => theme.fonts.text.size[size]};
    font-weight: ${({ theme }) => theme.fonts.text.weight};
    line-height: ${({ theme, size= "m" }) => theme.fonts.text.lineHeight[size]};
  }

  .quen-ui__select-multiple .quen-ui__select-selector {
    display: flex;
    padding: 1px;
  }

  .quen-ui__select-selection-item {
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

  .quen-ui__select-multiple .quen-ui__select-selector .quen-ui__select-selection-item {
    flex: none;
    border-radius: 4px;
    margin-right: 2px;
    padding: 0 8px;
  }

  .quen-ui__select-multiple .quen-ui__select-selector .quen-ui__select-selection-item-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .quen-ui__select-multiple .quen-ui__select-selector .quen-ui__select-selection-overflow {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .quen-ui__select-multiple .quen-ui__select-selector .quen-ui__select-selection-overflow-item {
    flex: none;
    max-width: 100%;
  }
  .quen-ui__select-multiple .quen-ui__select-selector .quen-ui__select-selection-search {
    position: relative;
    max-width: 100%;
  }
  .quen-ui__select-multiple .quen-ui__select-selector .quen-ui__select-selection-search-input,
  .quen-ui__select-multiple .quen-ui__select-selector .quen-ui__select-selection-search-mirror {
    padding: 1px;
    font-family: system-ui;
  }

  .quen-ui__select-multiple .quen-ui__select-selector .quen-ui__select-selection-search-mirror {
    position: absolute;
    z-index: 999;
    white-space: nowrap;
    left: 0;
    top: 0;
    visibility: hidden;
  }

  .quen-ui__select-multiple .quen-ui__select-selector .quen-ui__select-selection-search-input {
    border: none;
    outline: none;
    width: 100%;
  }
  .quen-ui__select-allow-clear.quen-ui__select-multiple .quen-ui__select-selector {
    padding-right: 20px;
  }

  .quen-ui__select-multiple .quen-ui__select-selector .quen-ui__select-selection-placeholder {
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
  .quen-ui__select-dropdown {
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
  
  .quen-ui__select-item-option-content {
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.components.Input.color};
    svg {
      width: 16px;
      height: 16px;
    }
  }

  .quen-ui__select-dropdown-hidden {
    display: none;
  }

  .quen-ui__select-dropdown-slide-up-enter,
  .quen-ui__select-dropdown-slide-up-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
    animation-play-state: paused;
  }
  .quen-ui__select-dropdown-slide-up-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    opacity: 1;
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
    animation-play-state: paused;
  }

  .quen-ui__select-dropdown-slide-up-enter.quen-ui__select-dropdown-slide-up-enter-active.quen-ui__select-dropdown-placement-bottomLeft,
  .quen-ui__select-dropdown-slide-up-appear.quen-ui__select-dropdown-slide-up-appear-active.quen-ui__select-dropdown-placement-bottomLeft,
  .quen-ui__select-dropdown-slide-up-enter.quen-ui__select-dropdown-slide-up-enter-active.quen-ui__select-dropdown-placement-bottomRight,
  .quen-ui__select-dropdown-slide-up-appear.quen-ui__select-dropdown-slide-up-appear-active.quen-ui__select-dropdown-placement-bottomRight {
    animation-name: rcSelectDropdownSlideUpIn;
    animation-play-state: running;
  }
  .quen-ui__select-dropdown-slide-up-leave.quen-ui__select-dropdown-slide-up-leave-active.quen-ui__select-dropdown-placement-bottomLeft,
  .quen-ui__select-dropdown-slide-up-leave.quen-ui__select-dropdown-slide-up-leave-active.quen-ui__select-dropdown-placement-bottomRight {
    animation-name: rcSelectDropdownSlideUpOut;
    animation-play-state: running;
  }
  .quen-ui__select-dropdown-slide-up-enter.quen-ui__select-dropdown-slide-up-enter-active.quen-ui__select-dropdown-placement-topLeft,
  .quen-ui__select-dropdown-slide-up-appear.quen-ui__select-dropdown-slide-up-appear-active.quen-ui__select-dropdown-placement-topLeft,
  .quen-ui__select-dropdown-slide-up-enter.quen-ui__select-dropdown-slide-up-enter-active.quen-ui__select-dropdown-placement-topRight,
  .quen-ui__select-dropdown-slide-up-appear.quen-ui__select-dropdown-slide-up-appear-active.quen-ui__select-dropdown-placement-topRight {
    animation-name: rcSelectDropdownSlideDownIn;
    animation-play-state: running;
  }
  .quen-ui__select-dropdown-slide-up-leave.quen-ui__select-dropdown-slide-up-leave-active.quen-ui__select-dropdown-placement-topLeft,
  .quen-ui__select-dropdown-slide-up-leave.quen-ui__select-dropdown-slide-up-leave-active.quen-ui__select-dropdown-placement-topRight {
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

  .quen-ui__select-item {
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    padding: 4px 16px;
  }
  
  .quen-ui__select-item-option {
    position: relative;
  }
  
  .quen-ui__select-item-option .quen-ui__select-item-option-state {
    position: absolute;
    right: 0;
    top: 4px;
    pointer-events: none;
  }
  .quen-ui__select-item-option-active {
    background: ${({ theme }) => theme.components.Dropdown.hoverBackground};
    border-left: 2px solid
    ${({ theme }) => theme.components.Dropdown.borderLeftColor};
  }
  .quen-ui__select-item-option-disabled {
    background: ${({ theme }) => theme.components.Dropdown.disabledBackground};
    cursor: not-allowed;
    .quen-ui__select-option {
      color: ${({ theme }) => theme.components.Dropdown.disabledColor};
    }
  }
  .quen-ui__select-item-empty {
    text-align: center;
    color: ${({ theme }) => theme.components.Input.color};
  }
  
  .quen-ui__select-item-option-selected {
    border-left: 2px solid
    ${({ theme }) => theme.components.Dropdown.borderLeftColor};
  }
`;
