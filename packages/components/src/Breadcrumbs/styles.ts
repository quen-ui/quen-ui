import styled, {css} from "styled-components";

export const BreadcrumbItemStyled = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "lastItem"
})<{ lastItem: boolean }>`
  cursor: pointer;
  user-select: none;
  
  text-decoration: none;
  
  span {
    display: flex;
    align-items: center;
  }
  
  ${({ lastItem }) => lastItem && css`
    color: ${({ theme}) => theme.components.Breadcrumbs.primaryColor};
    span {
      color: ${({ theme}) => theme.components.Breadcrumbs.primaryColor};
    }
  `};
  
  &:hover {
    color: ${({ theme}) => theme.components.Breadcrumbs.hoverColor};
    span {
      color: ${({ theme}) => theme.components.Breadcrumbs.hoverColor};
    }
  }

  .quen-ui__breadcrumb--icon {
    svg {
      color: ${({ theme }) => theme.components.Breadcrumbs.color};
    }
  }
  
  svg {
    color: currentColor;
  }
`;

export const BreadcrumbsStyled = styled.nav`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
  
  color: ${({ theme }) => theme.components.Breadcrumbs.color};
`;
