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
`;
