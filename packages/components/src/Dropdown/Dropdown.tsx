import React, {
  useLayoutEffect,
  useEffect,
  useRef,
  useState
} from "react";
import { createPortal } from "react-dom";
import { useTransitionState } from "react-transition-state";
import { IDropdownProps } from "./types";
import { DropdownWrapper } from "./styles";
import DropdownPortal from "./DropdownPortal";
import { DEFAULT_RECT_ELEMENT, calculateRectElement } from "./helpers";

const Dropdown = <ITEM,>({
  children,
  isDisabled,
  isOpen,
  onClickClose,
  isNotCloseOutside,
  onClickOutside,
  direction = "bottom",
  width,
  ...props
}: IDropdownProps<ITEM>): React.ReactElement => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [anchorRect, setAnchorRect] = useState(DEFAULT_RECT_ELEMENT);
  const [containerDropdown, setContainerDropdown] =
    useState<HTMLBodyElement | null>(null);
  const refChildren = useRef<HTMLDivElement>(null);
  const [state, toggle] = useTransitionState({
    timeout: 500,
    unmountOnExit: true,
    initialEntered: isOpen
  });

  const calculateAnchorRect = (): void => {
    setAnchorRect(calculateRectElement(anchorRef.current));
  };

  useEffect(() => {
    window.addEventListener("resize", calculateAnchorRect);
    return () => window.removeEventListener("resize", calculateAnchorRect);
  }, []);

  useLayoutEffect(() => {
    calculateAnchorRect();
  }, [state]);

  useEffect(() => {
    const container = document.getElementsByTagName("body").item(0);
    setContainerDropdown(container);
  }, []);

  const handleClick = (): void => {
    if (!isDisabled) {
      toggle(!state.isEnter);
      if (state.isEnter) {
        onClickClose?.();
      }
    }
  };

  const handleClickOutsideClose = (): void => {
    if (!isNotCloseOutside) {
      toggle(false);
      if (state.isEnter) {
        onClickOutside?.();
        onClickClose?.();
      }
    }
  };

  return (
    <DropdownWrapper ref={anchorRef}>
      <div onClick={handleClick} ref={refChildren}>
        {children}
      </div>
      {state.isEnter &&
        containerDropdown &&
        createPortal(
          <DropdownPortal
            {...props}
            direction={direction}
            transitionStatus={state.status}
            anchorRef={anchorRef}
            anchorRect={anchorRect}
            width={width || refChildren.current?.getBoundingClientRect().width + "px"}
            onClickOutsideClose={handleClickOutsideClose}
          />,
          containerDropdown
        )}
      {children}
    </DropdownWrapper>
  );
};

export default Dropdown;
