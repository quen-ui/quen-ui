import styled from "styled-components";
import { Title, Text } from "@quen-ui/components";

export const TitleStyled = styled(Title)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const MdxPageStyled = styled.div`
  background: ${({ theme }) => theme.colors.grayViolet[1]};
  height: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.colorBody};
  }

  th {
    padding: ${({ theme }) => theme.space.m} ${({ theme }) => theme.space.l};
    border: ${({ theme }) => theme.control.borderWidth} solid
      ${({ theme }) => theme.colors.gray[2]};
    text-align: left;
    background-color: ${({ theme }) => theme.colors.grayViolet[2]};
    color: ${({ theme }) => theme.textColor};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fonts.header.size.xs};
  }

  td {
    padding: ${({ theme }) => theme.space.m} ${({ theme }) => theme.space.l};
    border: ${({ theme }) => theme.control.borderWidth} solid
      ${({ theme }) => theme.colors.gray[2]};
    font-size: ${({ theme }) => theme.fonts?.text?.size.m ?? "14px"};
  }

  tr {
    &:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.grayViolet[1]};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.grayViolet[3]};
    }
  }
`;

export const MdxPageHeaderStyled = styled.div`
  position: relative;
  z-index: 4;
  padding: ${({ theme }) => theme.space.l};
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  border-bottom: ${({ theme }) => theme.control.borderWidth} solid
    ${({ theme }) => theme.colors.grayViolet[5]};
`;

export const MdxTitleLinkStyled = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const MdxCodeStyled = styled(Text)`
  background: ${({ theme }) => theme.colors.grayViolet[3]};
  border-radius: ${({ theme }) => theme.control.radius};
  padding: 2px;
`;

export const CodeStyled = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.violet[2]};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  margin-top: 16px;
  button {
    margin: auto 0 0 auto;
  }

  .code {
    box-sizing: border-box;
    position: relative;
    overflow-x: auto;
    border-radius: ${({ theme }) => theme.control.radius};
    padding: ${({ theme }) => theme.space.m};
  }
`;

export const PropsTableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  line-height: 1.55;
  margin-top: 16px;

  thead > tr > th {
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayViolet[9]};
    padding-bottom: ${({ theme }) => theme.space.s};
    padding-left: ${({ theme }) => theme.space.xs};
  }

  tbody > tr > td {
    padding-top: ${({ theme }) => theme.space.s};
    padding-bottom: ${({ theme }) => theme.space.s};
    padding-left: ${({ theme }) => theme.space.xs};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayViolet[9]};
  }
`;
