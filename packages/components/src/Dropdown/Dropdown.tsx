import {
  useCallback,
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  type ReactNode
} from "react";
import { createPortal } from "react-dom";
import { useTransitionState } from "react-transition-state";
import { useOnClickOutside } from "@quen-ui/hooks";
import { IDropdownProps } from "./types";
import { DropdownWrapper } from "./styles";
import DropdownPortal from "./DropdownPortal";
import { DEFAULT_RECT_ELEMENT, calculateRectElement } from "./helpers";

const Dropdown = <ITEM,>({
  disabled,
  open,
  direction = "bottom",
  width,
  anchorRef,
  onClickClose,
  onClickOutside,
  notCloseOutside,
  ...props
}: IDropdownProps<ITEM>): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const isControlled = typeof open !== "undefined";
  const openState = isControlled ? open : isOpen;

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [containerDropdown, setContainerDropdown] =
    useState<HTMLElement | null>(null);
  const [anchorRect, setAnchorRect] = useState(DEFAULT_RECT_ELEMENT);

  const lastInternalMousedownRef = useRef(0);

  const [state, toggle] = useTransitionState({
    timeout: 500,
    unmountOnExit: true,
    initialEntered: openState
  });

  useEffect(() => {
    if (isControlled) toggle(open);
  }, [open, isControlled, toggle]);

  const calculateAnchorRect = useCallback((): void => {
    if (anchorRef.current) {
      setAnchorRect(calculateRectElement(anchorRef.current));
    }
  }, [anchorRef]);

  const handleInternalMouseDown = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      lastInternalMousedownRef.current = e.timeStamp || Date.now();
    },
    []
  );

  useOnClickOutside(
    [anchorRef, dropdownRef],
    (e) => {
      if (e.timeStamp - lastInternalMousedownRef.current < 2100) return;

      onClickOutside?.();
      onClickClose?.();
      if (!isControlled) setIsOpen(false);
    },
    { isActive: !notCloseOutside && openState }
  );

  useEffect(() => {
    if (isControlled || !anchorRef.current) return;
    const el = anchorRef.current;
    const handleClick = () => {
      toggle();
      setIsOpen((prev) => !prev);
    };
    el.addEventListener("click", handleClick);
    return () => el.removeEventListener("click", handleClick);
  }, [anchorRef, toggle, isControlled]);

  useLayoutEffect(() => {
    calculateAnchorRect();
  }, [state, calculateAnchorRect]);

  useEffect(() => {
    window.addEventListener("resize", calculateAnchorRect);
    window.addEventListener("scroll", calculateAnchorRect, true);
    return () => {
      window.removeEventListener("resize", calculateAnchorRect);
      window.removeEventListener("scroll", calculateAnchorRect, true);
    };
  }, [calculateAnchorRect]);

  useEffect(() => {
    if (typeof document !== "undefined") setContainerDropdown(document.body);
  }, []);

  if (disabled) return null;

  return (
    <DropdownWrapper onMouseDown={handleInternalMouseDown}>
      {state.isEnter &&
        containerDropdown &&
        createPortal(
          <DropdownPortal
            {...props}
            direction={direction}
            transitionStatus={state.status}
            anchorRef={anchorRef}
            anchorRect={anchorRect}
            width={width || "max-content"}
            ref={dropdownRef}
          />,
          containerDropdown
        )}
    </DropdownWrapper>
  );
};

export default Dropdown;
