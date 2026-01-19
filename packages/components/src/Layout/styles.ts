import { css, styled } from "styled-components";
import { Menu } from "../Menu";

export const HeaderStyled = styled.header.withConfig({
  shouldForwardProp: (prop: string) => prop !== "height"
})<{ height?: string }>`
  grid-area: header;
  padding-inline: ${({ theme }) => theme.space.m};
  padding-top: ${({ theme }) => theme.space.xs};
  padding-bottom: ${({ theme }) => theme.space.xs};
  svg {
    color: ${({ theme }) => theme.components.Layout.iconColor};
  }
  position: sticky;
  top: 0;
  z-index: 100;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  background: ${({ theme }) => theme.components.Layout.headerBackground};

  border-bottom: ${({ theme }) => theme.control.borderWidth} solid
    ${({ theme }) => theme.components.Layout.borderColor};

  ${({ height }) => `height: ${height};`};
  
  .quen-ui__layout-header__content__menu-items {
    flex-wrap: wrap;
  }
`;

export const FooterStyled = styled.footer<{ height?: string }>`
  grid-area: footer;
`;

export const SidebarStyled = styled.aside.withConfig({
  shouldForwardProp: (prop) =>
    !["isMobile", "isOpen", "isCollapsed", "collapsedWidth"].includes(prop)
})<{
  mobile?: boolean;
  open?: boolean;
  collapsible?: boolean;
  collapsed?: boolean;
  collapsedWidth?: number;
  isFooter: boolean;
}>`
  grid-area: slider;
  min-width: ${({ collapsible, collapsed, collapsedWidth }) =>
    collapsible && collapsed ? collapsedWidth : "250px"};
  background: ${({ theme }) => theme.components.Layout.sidebarBackground};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: auto;
  padding: ${({ theme }) => theme.space.xs};
  flex-direction: column;
  display: flex;
  height: calc(100vh - ${({ isFooter }) => isFooter ? 87 : 53}px);

  ${({ mobile }) =>
      mobile &&
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

  ${({ mobile, open }) =>
    mobile &&
    open &&
    css`
      transform: translateX(0);
    `}
`;

export const ContentStyled = styled.main`
  grid-area: content;
  overflow: auto;
  height: 100vh;
`;

export const LayoutStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["breakpoint"].includes(prop)
})<{ breakpoint: number, isFooter: boolean }>`
  display: grid;
  min-height: 100vh;
  grid-template-areas: "header header" "slider content" "slider footer";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;

  @media (max-width: ${({ breakpoint }) => `${breakpoint}px`}) {
    grid-template-areas: "header" "content" "footer";
    grid-template-columns: 1fr;

    ${SidebarStyled} {
      display: none;
    }
  }

  &:has(${HeaderStyled}) {
    ${ContentStyled} {
      height: calc(100vh - ${({ isFooter }) => isFooter ? 71 : 56}px);
    }
  }
`;

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.components.Layout.sidebarBackground};
  z-index: 100;
  opacity: 1;
  pointer-events: all;
  transition: opacity 0.3s ease;
`;


export const SidebarMenuStyled = styled(Menu)`
  gap: 0;
`;
