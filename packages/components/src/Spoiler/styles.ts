import styled, { css } from "styled-components";

export const SpoilerStyles = styled.div
  .withConfig({
    shouldForwardProp: (props) => !["isOpen", "maxHeight"].includes(props)
  })
  .attrs({ className: "quen-ui__spoiler__content" })<{
  isOpen: boolean;
  maxHeight: number;
}>`
  overflow: hidden;
  transition: height 0.3s ease;
  position: relative;

  ${({ isOpen, maxHeight }) =>
    !isOpen &&
    css`
      mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
    `}
`;
