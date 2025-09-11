import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTransitionState } from "react-transition-state";
import { IModalProps } from "./types";
import {
  ModalContainer,
  ModalHeaderStyled,
  ModalStyled,
  ModalFooterStyled
} from "./styles";
import { Title } from "../typography/Title";
import { Text } from "../typography/Text";
import { Button } from "../Button";
import IconClose from "../assets/icon-close.svg?react";

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
  className
}: IModalProps): React.ReactNode => {
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
  if (state.isEnter && container) {
    return createPortal(
      <ModalContainer status={state.status} zIndex={zIndex}>
        <ModalStyled fullScreen={fullScreen} className={className} size={size}>
          <ModalHeaderStyled>
            {title && <Title size={size}>{title}</Title>}
            {closeButton && (
              <Button view="icon" size={size} onClick={onClickClose}>
                <IconClose width={16} height={16} />
              </Button>
            )}
          </ModalHeaderStyled>
          {description && <Text size={size}>{description}</Text>}
          {children}
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
