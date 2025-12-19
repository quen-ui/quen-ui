import { useState, useRef, useEffect, useCallback } from "react";
import type { ISpoilerProps } from "./types";
import { Flex } from "../Flex";
import { Button } from "../Button";
import { SpoilerStyles } from "./styles";

const Spoiler = ({
  maxHeight = 100,
  initiallyOpen = false,
  children,
  style,
  className,
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
    <Flex direction="column" gap="xs" style={style} className={className}>
      <SpoilerStyles
        role="region"
        aria-hidden={!isOpen}
        aria-expanded={isOpen}
        maxHeight={maxHeight}
        isOpen={isOpen}
        style={{
          height: contentHeight === "auto" ? "auto" : `${contentHeight}px`
        }}>
        <div ref={innerRef}>
        {children}
        </div>
      </SpoilerStyles>
      <Button view="link" onClick={toggle}>
        {isOpen ? hideLabel : showLabel}
      </Button>
    </Flex>
  );
};

export default Spoiler;
