import styled from "styled-components";
import { Layout } from "@quen-ui/components";

export const HeaderStyled = styled(Layout.Header)`
  background: ${({ theme }) => theme.colors.violet[8]};

  .quen-ui__layout-header__content {
    width: 100%;
  }
  
`;

export const ContentStyled = styled(Layout.Content)`
  background: ${({ theme }) => theme.colors.grayViolet[1]};

  .p-remove-margin {
    .quen-ui__text {
      margin-bottom: 0!important;
    }
  }

`;
