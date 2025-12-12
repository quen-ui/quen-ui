import {
  useLayoutEffect,
  useEffect,
  useState,
  useRef,
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
    useState<HTMLBodyElement | null>(null);
  const [state, toggle] = useTransitionState({
    timeout: 500,
    unmountOnExit: true,
    initialEntered: open
  });

  useOnClickOutside(
    anchorRef,
    () => {
      if (typeof open === "undefined") {
        toggle(false);
        onClickClose?.();
      }
    },
    {
      excludeRef: dropdownRef
    }
  );

  const calculateAnchorRect = (): void => {
    if (anchorRef && anchorRef.current) {
      setAnchorRect(calculateRectElement(anchorRef.current));
    }
  };

  const handleClickAnchorRef: EventListener = (event) => {
    toggle();
  };

  useEffect(() => {
    window.addEventListener("resize", calculateAnchorRect);
    window.addEventListener("scroll", calculateAnchorRect, true);
    return () => {
      window.removeEventListener("resize", calculateAnchorRect);
      window.addEventListener("scroll", calculateAnchorRect, true);
    };
  }, [anchorRect]);

  useEffect(() => {
    if (typeof open === "undefined") {
      anchorRef.current?.addEventListener("click", handleClickAnchorRef);
    }

    return () => {
      anchorRef.current?.removeEventListener("click", handleClickAnchorRef);
    };
  }, [anchorRef]);

  useEffect(() => {
    if (typeof open !== "undefined") {
      toggle(open);
    }
  }, [open]);

  useLayoutEffect(() => {
    calculateAnchorRect();
  }, [state]);

  useEffect(() => {
    const container = document.getElementsByTagName("body").item(0);
    setContainerDropdown(container);
  }, []);

  if (disabled) {
    return null;
  }

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
