import styled from "styled-components";
import MdxPreComponent from "../MdxPage/MdxPreComponent";

export const ExampleCodeBlockWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.commonColorTokens.borderColor};
  border-radius: ${({ theme }) => theme.control.radius};
`;

export const ExampleCodeBlockPreview = styled.div`
  padding: ${({ theme }) => theme.space.s}
`;

export const CodeBlockStyled = styled(MdxPreComponent)`
  margin-bottom: 0;
  margin-top: 0;
  border-radius: 0;
`
