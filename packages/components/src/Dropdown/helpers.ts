import {
  IDropdownDefaultItem,
  TDropdownListProps,
  TDropdownGetItemKey,
  TDropdownGetItemLeftContent,
  TDropdownGetItemLabel,
  TDropdownGetItemDisabled,
  TDropdownGetItemOnClick,
  TDropdownGetItemGroupId,
  TDropdownDirection
} from "./types";

export const DEFAULT_RECT_ELEMENT: DOMRect = {
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  x: 0,
  y: 0,
  toJSON: (): void => {
    /* */
  }
};

const defaultGetItemKey: TDropdownGetItemKey<IDropdownDefaultItem> = (item) =>
  item.key || (item.label as string);

const defaultGetItemLeadContent: TDropdownGetItemLeftContent<
  IDropdownDefaultItem
> = (item) => item.leftContent;

const defaultGetItemDisabled: TDropdownGetItemDisabled<IDropdownDefaultItem> = (
  item
) => item.disabled;

const defaultGetItemLabel: TDropdownGetItemLabel<IDropdownDefaultItem> = (
  item
) => item.label;

const defaultGetItemOnClick: TDropdownGetItemOnClick<IDropdownDefaultItem> = (
  item
) => item.onClick;

const defaultGetItemGroupId: TDropdownGetItemGroupId<IDropdownDefaultItem> = (
  item
) => item?.groupId;

export function withDefaultGetters<Item = IDropdownDefaultItem>(
  props: TDropdownListProps<Item>
) {
  return {
    ...props,
    getItemKey:
      (props.getItemKey as TDropdownGetItemKey<Item>) || defaultGetItemKey,
    getItemLabel:
      (props.getItemLabel as TDropdownGetItemLabel<Item>) ||
      defaultGetItemLabel,
    getItemLeftContent:
      (props.getItemLeftContent as TDropdownGetItemLeftContent<Item>) ||
      defaultGetItemLeadContent,
    getItemDisabled:
      (props.getItemDisabled as TDropdownGetItemDisabled<Item>) ||
      defaultGetItemDisabled,
    getItemOnClick:
      (props.getItemOnClick as TDropdownGetItemOnClick<Item>) ||
      defaultGetItemOnClick,
    getItemGroupId:
      (props.getItemGroupId as TDropdownGetItemGroupId<Item>) ||
      defaultGetItemGroupId
  };
}

interface IGetDirectionParams {
  anchorRect: DOMRect;
  dropdownRect: DOMRect;
  direction: TDropdownDirection;
  offset: number;
}

export const getDirection = ({
  anchorRect,
  direction,
  dropdownRect,
  offset
}: IGetDirectionParams): TDropdownDirection => {
  const viewerSize = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  };

  const isTop = anchorRect.y - dropdownRect.height - offset >= 0;
  const isBottom =
    anchorRect.y + anchorRect.height + dropdownRect.height + offset <=
    viewerSize.height;
  const isRight =
    anchorRect.right + anchorRect.width + dropdownRect.width + offset <=
    viewerSize.width;
  const isLeft = anchorRect.x - dropdownRect.width - offset >= 0;

  switch (direction) {
    case "left":
      if (isLeft) {
        return "left";
      }
      return "right";
    case "right":
      if (isRight) {
        return "right";
      }
      return "left";
    case "top":
      if (isTop) {
        return "top";
      }
      return "bottom";
    case "topRight":
      if (isTop) {
        return "topRight";
      }
      return "bottomRight";
    case "topLeft":
      if (isTop) {
        return "topLeft";
      }
      return "bottomLeft";
    case "bottom":
      if (isBottom) {
        return "bottom";
      }
      return "top";
    case "bottomLeft":
      if (isBottom) {
        return "bottomLeft";
      }
      return "topLeft";
    case "bottomRight":
      if (isBottom) {
        return "bottomRight";
      }
      return "topRight";
    default:
      return direction;
  }
};

export const calculateRectElement = (el: Element | null): DOMRect => {
  if (el) {
    const { width, height, top, left, bottom, right, x, y } =
      el.getBoundingClientRect();
    return {
      width,
      height,
      top,
      left,
      bottom,
      right,
      x,
      y,
      toJSON(): void {
        /* */
      }
    };
  }

  return DEFAULT_RECT_ELEMENT;
};
