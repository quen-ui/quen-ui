import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useTransitionState } from "react-transition-state";
import { useOnClickOutside } from "@quen-ui/hooks";
import { IDrawerProps } from "./types";
import { DrawerWrapper, DrawerStyled, DrawerTitleWrapper } from "./styles.ts";
import { Divider } from "../Divider";
import { Title } from "../typography/Title";
import { Button } from "../Button";
import CloseIcon from "../assets/icon-close.svg";

const Drawer = ({
  open,
  children,
  position = "left",
  size = "m",
  zIndex,
  noCloseOnClickOutside = false,
  onClose,
  title,
  className,
  closeIcon
}: IDrawerProps): React.ReactNode => {
  const [container, setContainer] = useState<HTMLBodyElement | null>(null);
  const [state, toggle] = useTransitionState({
    timeout: 500,
    unmountOnExit: true,
    initialEntered: open
  });
  const refWrapper = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(refWrapper, () => !noCloseOnClickOutside && onClose?.());

  useEffect(() => {
    toggle(open);
  }, [open]);

  useEffect(() => {
    const container = document.getElementsByTagName("body").item(0);
    setContainer(container);
  }, []);

  if (state.isEnter && container) {
    return createPortal(
      <DrawerWrapper zIndex={zIndex} >
        <DrawerStyled
          role="dialog"
          size={size}
          position={position}
          ref={refWrapper}
          status={state.status}
          className={className}>
          {title && (
            <>
              <DrawerTitleWrapper>
                <Title size="s">{title}</Title>
                <Button view="icon" size="xs" onClick={onClose}>
                  {closeIcon || <CloseIcon/>}
                </Button>
              </DrawerTitleWrapper>
              <Divider direction="horizontal" />
            </>
          )}
          <div className="quen-ui-drawer--content">
            {children}
          </div>
        </DrawerStyled>
      </DrawerWrapper>,
      container
    );
  }
  return null;
};

export default Drawer;
