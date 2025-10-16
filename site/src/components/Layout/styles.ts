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
  
`;

export const ContentStyled = styled(Layout.Content)`
  background: ${({ theme }) => theme.colors.grayViolet[1]};

  .p-remove-margin {
    .quen-ui__text {
      margin-bottom: 0!important;
    }
  }

`;
