import styled, {css} from "styled-components";

export const BreadcrumbItemStyled = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "isLastItem"
})<{ isLastItem: boolean }>`
  cursor: pointer;
  user-select: none;
  
  text-decoration: none;
  
  span {
    display: flex;
    align-items: center;
  }
  
  ${({ isLastItem }) => isLastItem && css`
    color: ${({ theme}) => theme.colors.violet[9]};
    span {
      color: ${({ theme}) => theme.colors.violet[9]};
    }
  `};
  
  &:hover {
    color: ${({ theme}) => theme.colors.grayViolet[6]};
    span {
      color: ${({ theme}) => theme.colors.grayViolet[6]};
    }
  }

  .quen-ui__breadcrumb--icon {
    svg {
      color: ${({ theme }) => theme.textColor};
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
  
  color: ${({ theme }) => theme.textColor};
`;
