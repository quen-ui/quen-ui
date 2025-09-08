import styled from "styled-components";
import { Layout } from "@quen-ui/components";

export const HeaderStyled = styled(Layout.Header)`
  background: ${({ theme }) => theme.colors.violet[9]};

  .quen-ui__layout-menu-item {
    color: ${({ theme }) => theme.colors.gray[1]};

    &:hover {
      color: ${({ theme }) => theme.colors.gray[9]};
    }
  }

  .quen-ui__layout-header__content {
    width: 100%;
  }

  .quen-ui__select-option {
    color: white;
  }
`;

export const ContentStyled = styled(Layout.Content)`
  background: ${({ theme }) => theme.colors.grayViolet[1]};
`;
