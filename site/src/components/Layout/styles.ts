import styled from "styled-components";
import { Layout } from "@quen-ui/components";

export const HeaderStyled = styled(Layout.Header)`
  background: ${({ theme }) => theme.colors.violet[8]};
  gap: 24px;

  .quen-ui__layout-header__content {
    width: calc(100% - 165px);
  }

  .select {
    width: max-content;
  }

  @media (max-width: 768px) {
    .quen-ui__layout-header__logo-wrapper {
      width: 100%;
    }

    .logo-wrapper {
      width: 100%;
    }
    .theme-switch {
      margin-left: auto;
      margin-right: 0;
    }
  }
  
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

export const SidebarStyled = styled(Layout.Sidebar)`
  height: calc(100vh - 83px);
  
  .quen-ui--menu__item_group {
    text-align: left;
  }
`;

export const ContentStyled = styled(Layout.Content)`
  background: ${({ theme }) => theme.colors.grayViolet[1]};
  
  height: calc(100vh - 67px)!important;
  .p-remove-margin {
    .quen-ui__text {
      margin-bottom: 0 !important;
    }
  }
`;
