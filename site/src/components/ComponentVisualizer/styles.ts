import styled from "styled-components";

export const ComponentVisualizerStyled = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grayViolet[9]};
  border-radius: 8px;
  margin-bottom: 2rem;
  overflow: auto;

  .preview-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .component-wrapper {
    padding: 2rem;
    border: 1px dashed ${({ theme }) => theme.colors.grayViolet[9]};
    border-radius: 4px;
    background: transparent;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .controls-panel {
    min-width: 300px;
    border-left: 1px solid ${({ theme }) => theme.colors.grayViolet[9]};
    padding-left: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: auto;
  }

  .controls-grid {
    display: grid;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
`;
