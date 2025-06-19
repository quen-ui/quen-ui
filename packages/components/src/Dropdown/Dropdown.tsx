import React, {
  useLayoutEffect,
  useEffect,
  useState
} from "react";
import { createPortal } from "react-dom";
import { useTransitionState } from "react-transition-state";
import { IDropdownProps } from "./types";
import { DropdownWrapper } from "./styles";
import DropdownPortal from "./DropdownPortal";
import { DEFAULT_RECT_ELEMENT, calculateRectElement } from "./helpers";

const Dropdown = <ITEM,>({
  isDisabled,
  isOpen,
  direction = "bottom",
  width,
  anchorRef,
  ...props
}: IDropdownProps<ITEM>): React.ReactNode => {
  const [anchorRect, setAnchorRect] = useState(DEFAULT_RECT_ELEMENT);
  const [containerDropdown, setContainerDropdown] =
    useState<HTMLBodyElement | null>(null);
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

  useEffect(() => {
    toggle(isOpen)
  }, [isOpen]);

  useLayoutEffect(() => {
    calculateAnchorRect();
  }, [state]);

  useEffect(() => {
    const container = document.getElementsByTagName("body").item(0);
    setContainerDropdown(container);
  }, []);


  if (isDisabled) {
    return null;
  }

  console.log(props.height)

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
          />,
          containerDropdown
        )}
    </DropdownWrapper>
  );
};

export default Dropdown;
