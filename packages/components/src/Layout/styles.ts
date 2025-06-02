import { css, styled } from "styled-components";

export const HeaderStyled = styled.header<{ height?: string }>`
  grid-area: header;
  padding-inline: ${({ theme }) => theme.space.m};
  padding-top: ${({ theme }) => theme.space.xs};
  padding-bottom: ${({ theme }) => theme.space.xs};
  svg {
    color: ${({ theme }) => theme.colors.grayViolet["9"]};
  }
  position: sticky;
  top: 0;
  z-index: 100;

  display: flex;

  background: ${({ theme }) => theme.colors.grayViolet["1"]};

  border-bottom: ${({ theme }) => theme.control.borderWidth} solid
    ${({ theme }) => theme.colors.gray["2"]};
`;

export const LayoutMenuItem = styled.button.withConfig({
  shouldForwardProp: (prop) => !["isDisabled", "isActive"].includes(prop)
})<{ isDisabled?: boolean; isActive?: boolean; isCollapsed?: boolean }>`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s ease;
  background: transparent;
  justify-content: ${({ isCollapsed }) =>
    isCollapsed ? "center" : "flex-start"};

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background: ${({ theme, isDisabled, isActive }) =>
      !isDisabled && !isActive && theme.colors.grayViolet["9"]};
  }

  ${({ theme, isDisabled, isActive }) =>
    isActive &&
    !isDisabled &&
    css`
      background-color: ${theme.colors.violet["2"]};
    `}
`;

export const FooterStyled = styled.footer<{ height?: string }>`
  grid-area: footer;
`;

export const SliderStyled = styled.aside.withConfig({
  shouldForwardProp: (prop) =>
    !["isMobile", "isOpen", "isCollapsed", "collapsedWidth"].includes(prop)
})<{
  isMobile?: boolean;
  isOpen?: boolean;
  isCollapsible?: boolean;
  isCollapsed?: boolean;
  collapsedWidth?: number;
}>`
  grid-area: slider;
  min-width: ${({ isCollapsible, isCollapsed, collapsedWidth }) =>
    isCollapsible && isCollapsed ? collapsedWidth : "250px"};
  background: ${({ theme }) => theme.colors.grayViolet["2"]};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: auto;
  padding: ${({ theme }) => theme.space.xs};
  flex-direction: column;
  display: flex;
  height: calc(100vh - 87px);

  ${({ isMobile }) =>
    isMobile &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 80%;
      max-width: 300px;
      z-index: 95;
      transform: translateX(-100%);
    `};

  ${({ isMobile, isOpen }) =>
    isMobile &&
    isOpen &&
    css`
      transform: translateX(0);
    `}
`;

export const LayoutStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["breakpoint"].includes(prop)
})<{ breakpoint: number }>`
  display: grid;
  min-height: 100vh;
  grid-template-areas: "header header" "slider content" "slider footer";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;

  @media (max-width: ${({ breakpoint }) => `${breakpoint}px`}) {
    grid-template-areas: "header" "content" "footer";
    grid-template-columns: 1fr;

    ${SliderStyled} {
      display: none;
    }
  }
`;

export const ContentStyled = styled.main`
  grid-area: content;
  overflow: auto;
  height: calc(100vh - 87px);
`;

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.grayViolet["2"]};
  z-index: 100;
  opacity: 1;
  pointer-events: all;
  transition: opacity 0.3s ease;
`;
