import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useTransitionState } from "react-transition-state";
import { cnMerge } from "@quen-ui/helpers";
import { useOnClickOutside } from "@quen-ui/hooks";
import { IDrawerProps } from "./types";
import { DrawerWrapper, DrawerStyled, DrawerTitleWrapper } from "./styles";
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
  closeIcon,
  classNames,
  styles
}: IDrawerProps): React.ReactNode => {
  const [container, setContainer] = useState<HTMLBodyElement | null>(null);
  const [state, toggle] = useTransitionState({
    timeout: 500,
    unmountOnExit: true,
    initialEntered: open
  });
  const refWrapper = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(refWrapper, () => {
    if (open && !noCloseOnClickOutside) {
      onClose?.();
    }
  });

  useEffect(() => {
    toggle(open);
  }, [open]);

  useEffect(() => {
    const container = document.getElementsByTagName("body").item(0);
    setContainer(container);
  }, []);

  if (state.isEnter && container) {
    return createPortal(
      <DrawerWrapper
        zIndex={zIndex}
        data-semantic="root"
        className={classNames?.root}
        style={styles?.root}>
        <DrawerStyled
          data-semantic="dialog"
          role="dialog"
          size={size}
          position={position}
          ref={refWrapper}
          status={state.status}
          className={cnMerge(className, classNames?.dialog)}
          style={styles?.dialog}>
          {title && (
            <>
              <DrawerTitleWrapper
                data-semantic="header"
                className={classNames?.header}
                style={styles?.header}>
                <Title
                  size="s"
                  data-semantic="title"
                  className={classNames?.title}
                  style={styles?.title}>
                  {title}
                </Title>
                <Button
                  data-semantic="close"
                  view="icon"
                  size="xs"
                  onClick={onClose}
                  classNames={{ root: classNames?.close }}
                  styles={{ root: styles?.close }}>
                  {closeIcon || <CloseIcon />}
                </Button>
              </DrawerTitleWrapper>
              <Divider direction="horizontal" />
            </>
          )}
          <div
            className={cnMerge("quen-ui-drawer--content", classNames?.content)}
            data-semantic="content"
            style={styles?.content}>
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
