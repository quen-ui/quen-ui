import styled from "styled-components";
import { rgba } from "polished";

export const BarsLoaderStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "height"
})<{ height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height}rem;
  width: max-content;

  .bar {
    width: 10px;
    height: 30px;
    background-color: ${({ theme }) => theme.components.Loader.color};
    margin: 0 5px;
    animation: bar-animation 1.4s infinite ease-in-out;
  }

  .bar:nth-child(2) {
    animation-delay: -1.1s;
  }

  .bar:nth-child(3) {
    animation-delay: -0.9s;
  }

  @keyframes bar-animation {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
    }
  }
`;

export const OvalLoaderStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "height"
})<{ height: number }>`
  width: ${({ height }) => height}rem;
  height: ${({ height }) => height}rem;
  border: 5px solid ${({ theme }) => rgba(theme.components.Loader.color, 0.3)};
  border-top: 5px solid ${({ theme }) => theme.components.Loader.color};
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const DotsLoaderStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "height"
})<{ height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height}rem;
  width: max-content;

  .dot {
    width: ${({ height }) => height / 2}rem;
    height: ${({ height }) => height / 2}rem;
    background-color: ${({ theme }) => theme.components.Loader.color};
    border-radius: 50%;
    margin: 0 5px;
    animation: dot-animation 1.4s infinite ease-in-out;
  }

  .dot:nth-child(2) {
    animation-delay: -0.7s;
  }

  .dot:nth-child(3) {
    animation-delay: -0.3s;
  }

  @keyframes dot-animation {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
`;
