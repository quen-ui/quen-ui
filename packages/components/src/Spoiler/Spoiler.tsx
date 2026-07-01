import { useState, useRef, useEffect, useCallback } from "react";
import type { ISpoilerProps } from "./types";
import { Flex } from "../Flex";
import { Button } from "../Button";
import { SpoilerStyles } from "./styles";
import { cnMerge, deepMerge } from "@quen-ui/helpers";

const Spoiler = ({
  maxHeight = 100,
  initiallyOpen = false,
  children,
  style,
  className,
  classNames,
  styles,
  hideLabel = "Hide",
  showLabel = "Show more",
  transitionDuration = 100,
  open,
  onOpenChange
}: ISpoilerProps) => {
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initiallyOpen);
  const isOpen = isControlled ? open! : uncontrolledOpen;

  const [contentHeight, setContentHeight] = useState<number | "auto">(0);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (innerRef.current) {
      const scrollHeight = innerRef.current.scrollHeight;

      if (isOpen) {
        setContentHeight(scrollHeight);
        setTimeout(() => setContentHeight("auto"), transitionDuration);
      } else {
        setContentHeight(scrollHeight);
        setTimeout(() => setContentHeight(maxHeight), transitionDuration);
      }
    }
  }, [isOpen, maxHeight, children]);

  const toggle = useCallback(() => {
    const next = !isOpen;

    if (isControlled) {
      onOpenChange?.(next);
    } else {
      setUncontrolledOpen(next);
    }
  }, [isOpen, isControlled, onOpenChange]);

  return (
    <Flex
      direction="column"
      gap="xs"
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      className={cnMerge(className, classNames?.root)}
      data-semantic="root">
      <SpoilerStyles
        data-semantic="content"
        role="region"
        aria-hidden={!isOpen}
        aria-expanded={isOpen}
        maxHeight={maxHeight}
        isOpen={isOpen}
        className={classNames?.content}
        style={deepMerge(
          {
            height: contentHeight === "auto" ? "auto" : `${contentHeight}px`
          },
          styles?.content ?? {}
        )}>
        <div ref={innerRef}>{children}</div>
      </SpoilerStyles>
      <Button
        view="link"
        onClick={toggle}
        data-semantic="toggle"
        styles={{ root: styles?.toggle }}
        classNames={{ root: classNames?.toggle }}>
        {isOpen ? hideLabel : showLabel}
      </Button>
    </Flex>
  );
};

export default Spoiler;
