import React, { useMemo, forwardRef, ForwardedRef, RefObject } from "react";
import { useOnClickOutside } from "@quen-ui/hooks";
import { Divider } from "../Divider";
import { DropdownListWrapper, DropdownItemsWrapper } from "./styles";
import { TDropdownListProps, TDropdownGetItemGroupId } from "./types";
import { withDefaultGetters } from "./helpers";
import DropdownItem from "./DropdownItem";

const DropdownList = <ITEM,>(
  props: TDropdownListProps<ITEM>,
  ref: ForwardedRef<HTMLDivElement>
): React.ReactNode => {
  const {
    items = [],
    sortGroup,
    content,
    getItemGroupId,
    direction = "bottom",
    className,
    width,
    size = "m",
    getItemLabel,
    getItemDisabled,
    getItemKey,
    getItemLeftContent,
    getItemOnClick,
    ...otherProps
  } = withDefaultGetters(props);

  useOnClickOutside(ref as RefObject<HTMLDivElement>, otherProps.onClickOutside);

  const groups = useMemo((): ITEM[][] => {
    const _groups = items.reduce<ITEM[][]>(
      (result, x) => {
        if ((getItemGroupId as TDropdownGetItemGroupId<ITEM>)(x)) {
          const index =
            result.length &&
            result[0].length &&
            result.findIndex(
              (r) =>
                (getItemGroupId as TDropdownGetItemGroupId<ITEM>)(r[0]) ===
                (getItemGroupId as TDropdownGetItemGroupId<ITEM>)(x)
            );
          if (index !== -1) {
            result[index].push(x);
          } else {
            result.push([]);
            result[result.length - 1].push(x);
          }
        } else {
          result[0].push(x);
        }
        return result;
      },
      [[]]
    );
    return sortGroup
      ? _groups.sort((items1, items2) =>
          sortGroup(
            (getItemGroupId as TDropdownGetItemGroupId<ITEM>)(items1[0]) || "1",
            (getItemGroupId as TDropdownGetItemGroupId<ITEM>)(items2[0]) || "-1"
          )
        )
      : _groups;
  }, [items]);

  if (items.length === 0 && !content) {
    return null;
  }

  return (
    <DropdownListWrapper
      ref={ref}
      direction={direction}
      className={className}
      width={width}
      isContent={Boolean(content)}
      {...otherProps}>
      {content
        ? content
        : groups.map((groupItems, index) => (
            <React.Fragment key={getItemGroupId?.(groupItems[0]) as string}>
              <DropdownItemsWrapper>
                {groupItems.map((item) => (
                  <DropdownItem
                    key={getItemKey?.(item)}
                    item={item}
                    size={size}
                    getItemLabel={getItemLabel}
                    getItemDisabled={getItemDisabled}
                    getItemLeftContent={getItemLeftContent}
                    getItemOnClick={getItemOnClick}
                    onItemClick={otherProps.onItemClick}
                  />
                ))}
              </DropdownItemsWrapper>
              {index !== groups.length - 1 && (
                <Divider direction={"horizontal"} />
              )}
            </React.Fragment>
          ))}
    </DropdownListWrapper>
  );
};

export default forwardRef(DropdownList);
