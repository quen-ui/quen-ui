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
  ...props
}: IDropdownProps<ITEM>): ReactNode => {
  const [anchorRect, setAnchorRect] = useState(DEFAULT_RECT_ELEMENT);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [containerDropdown, setContainerDropdown] =
    useState<HTMLElement | null>(null);

  const [state, toggle] = useTransitionState({
    timeout: 500,
    unmountOnExit: true,
    initialEntered: open
  });

  const calculateAnchorRect = useCallback((): void => {
    if (anchorRef.current) {
      setAnchorRect(calculateRectElement(anchorRef.current));
    }
  }, [anchorRef]);

  useOnClickOutside([anchorRef, dropdownRef], () => {
    if (typeof open === "undefined") {
      toggle(false);
      onClickClose?.();
    }
  });

  useEffect(() => {
    if (typeof open !== "undefined" || !anchorRef.current) return;

    const el = anchorRef.current;
    const handleClick = () => toggle();
    el.addEventListener("click", handleClick);

    return () => el.removeEventListener("click", handleClick);
  }, [anchorRef, toggle, open]);

  useEffect(() => {
    if (typeof open !== "undefined") {
      toggle(open);
    }
  }, [open, toggle]);

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
    if (typeof document !== "undefined") {
      setContainerDropdown(document.body);
    }
  }, []);

  if (disabled) return null;

  return (
    <DropdownWrapper>
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
