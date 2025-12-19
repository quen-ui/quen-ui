import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTransitionState } from "react-transition-state";
import { IModalProps } from "./types";
import {
  ModalContainer,
  ModalHeaderStyled,
  ModalStyled,
  ModalFooterStyled,
  ModalContentStyled
} from "./styles";
import { Title } from "../typography/Title";
import { Text } from "../typography/Text";
import { Button } from "../Button";
import IconClose from "../assets/icon-close.svg";

const Modal = ({
  open,
  title,
  size = "m",
  closeButton,
  onClickClose,
  onEsc,
  zIndex = 1000,
  description,
  children,
  footer,
  fullScreen,
  classNameFooter,
  className,
  width,
  ...props
}: IModalProps): React.ReactNode => {
  console.log(open)
  const [state, toggle] = useTransitionState({
    timeout: 500,
    unmountOnExit: true,
    initialEntered: open
  });

  useEffect(() => {
    toggle(open);
  }, [open]);

  const [container, setContainer] = useState<HTMLBodyElement | null>(null);

  const handleEscapeDown = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      onEsc?.();
    }
  };

  useEffect(() => {
    const container = document.getElementsByTagName("body").item(0);
    if (container) {
      container.addEventListener("keydown", handleEscapeDown);
    }
    setContainer(container);

    return () => {
      container?.removeEventListener("keydown", handleEscapeDown);
    };
  }, []);

  useEffect(() => {
    if (state.isEnter) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [state]);

  if (state.isEnter && container) {
    return createPortal(
      <ModalContainer status={state.status} zIndex={zIndex} {...props}>
        <ModalStyled fullScreen={fullScreen} className={className} size={size} width={width}>
          <ModalHeaderStyled>
            {title && <Title size={size}>{title}</Title>}
            {closeButton && (
              <Button view="icon" size={size} onClick={onClickClose} aria-label="Close">
                <IconClose width={16} height={16} />
              </Button>
            )}
          </ModalHeaderStyled>
          {description && <Text size={size}>{description}</Text>}
          <ModalContentStyled scrollable={!fullScreen}>
            {children}
          </ModalContentStyled>
          {footer && (
            <ModalFooterStyled className={classNameFooter}>
              {footer}
            </ModalFooterStyled>
          )}
        </ModalStyled>
      </ModalContainer>,
      container
    );
  }
  return null;
};

export default Modal;
