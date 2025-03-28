import React, { useState, useMemo, useRef, useLayoutEffect } from "react";
import { useOnClickOutside } from "@quen-ui/hooks";
import { TDropdownPortalProps } from "./types";
import {
  DEFAULT_RECT_ELEMENT,
  getDirection,
  calculateRectElement
} from "./helpers";
import { DropdownListStyled } from "./styles";

const DropdownPortal = <ITEM,>({
  direction,
  anchorRect,
  onClickOutsideClose,
  anchorRef,
  height,
  transitionStatus,
  ...props
}: TDropdownPortalProps<ITEM>): React.ReactElement => {
  const [dropdownRect, setDropdownRect] = useState(DEFAULT_RECT_ELEMENT);
  const maxHeight = useMemo(
    () =>
      document.documentElement.scrollHeight -
      anchorRect.height -
      anchorRect.y -
      8,
    [anchorRect]
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const portalDirection = useMemo(
    () => getDirection({ anchorRect, direction, dropdownRect, offset: 8 }),
    [dropdownRect, direction]
  );

  useLayoutEffect(() => {
    setDropdownRect(calculateRectElement(dropdownRef.current));
  }, []);

  useOnClickOutside([dropdownRef, anchorRef], onClickOutsideClose);

  return (
    <DropdownListStyled
      transitionStatus={transitionStatus}
      direction={portalDirection}
      anchorRect={anchorRect}
      dropdownRect={dropdownRect}
      maxHeight={maxHeight}
      ref={dropdownRef}
      height={height}
      {...props}
    />
  );
};

export default DropdownPortal;
