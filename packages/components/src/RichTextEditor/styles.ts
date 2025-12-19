import styled from "styled-components";
import { Button } from "../Button";

export const RichTextEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.components.RichTextEditor.radius};
  border: 1px solid
    ${({ theme }) => theme.components.RichTextEditor.borderColor};
  width: 100%;
  height: 100%;
`;

export const RichTextEditorContentStyled = styled.div`
  padding: ${({ theme }) => theme.components.RichTextEditor.padding};
  outline: none;
  color: ${({ theme }) => theme.textColor};
  overflow: auto;

  table,
  th,
  td {
    border: 1px solid black;
  }

  blockquote {
    background: ${({ theme }) => theme.colors.grayViolet[3]};
    font-size: ${({ theme }) => theme.fonts.text.size.l};
    padding: 1rem;
    margin: 1rem 0;
  }
`;

export const TableSizePickerWrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const TableSizePickerCellStyled = styled.div<{ active: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: ${({ theme }) => theme.components.RichTextEditor.borderRadius};
  border: 1px solid
    ${({ theme }) => theme.components.RichTextEditor.borderColor};
  background: ${({ active, theme }) =>
    active ? theme.components.RichTextEditor.borderColor : "transparent"};
  transition: background 0.1s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.components.RichTextEditor.borderColor};
  }
`;

export const ToolbarButtonStyled = styled(Button)`
  padding-right: 0.25rem;
  padding-left: 0.25rem;
`;
