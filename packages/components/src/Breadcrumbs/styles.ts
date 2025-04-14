import styled, {css} from "styled-components";

export const BreadcrumbItemStyled = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "isLastItem"
})<{ isLastItem: boolean }>`
  cursor: pointer;
  user-select: none;
  
  span {
    display: flex;
    align-items: center;
  }
  
  ${({ isLastItem }) => isLastItem && css`
    color: ${({ theme}) => theme.colors.violet.violet9};
    span {
      color: ${({ theme}) => theme.colors.violet.violet9};
    }
  `};
  
  &:hover {
    color: ${({ theme}) => theme.colors.grayViolet.grayViolet6};
    span {
      color: ${({ theme}) => theme.colors.grayViolet.grayViolet6};
    }
  }
`;

export const BreadcrumbsStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`;
