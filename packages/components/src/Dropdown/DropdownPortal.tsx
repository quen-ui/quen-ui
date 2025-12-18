import React, {
  useState,
  useMemo,
  useLayoutEffect,
  forwardRef,
  type ForwardedRef,
  type ReactElement,
  type RefAttributes,
  type RefObject
} from "react";
import { TDropdownPortalProps } from "./types";
import {
  DEFAULT_RECT_ELEMENT,
  getDirection,
  calculateRectElement
} from "./helpers";
import { DropdownListStyled } from "./styles";

const DropdownPortal = <ITEM,>(
  {
    direction,
    anchorRect,
    height,
    transitionStatus,
    ...props
  }: TDropdownPortalProps<ITEM>,
  ref: ForwardedRef<HTMLDivElement>
): ReactElement => {
  const [dropdownRect, setDropdownRect] = useState(DEFAULT_RECT_ELEMENT);
  const maxHeight = useMemo(
    () =>
      document.documentElement.scrollHeight -
      anchorRect.height -
      anchorRect.y -
      8,
    [anchorRect]
  );

  const portalDirection = useMemo(
    () => getDirection({ anchorRect, direction, dropdownRect, offset: 8 }),
    [dropdownRect, direction]
  );

  useLayoutEffect(() => {
    setDropdownRect(calculateRectElement((ref as RefObject<HTMLDivElement>).current));
  }, []);

  return (
    <DropdownListStyled
      transitionStatus={transitionStatus}
      direction={portalDirection}
      anchorRect={anchorRect}
      dropdownRect={dropdownRect}
      maxHeight={maxHeight}
      ref={ref}
      height={height}
      minWidth={anchorRect.width}
      isContent={Boolean(props.content)}
      {...props}
    />
  );
};

export default forwardRef<HTMLDivElement, TDropdownPortalProps<any>>(
  DropdownPortal
) as { <T>(props: TDropdownPortalProps<T> & RefAttributes<HTMLDivElement>): ReactElement};
