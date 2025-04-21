import { useState, useMemo } from "react";
import { TSelectProps, TSelectGetItemValue } from "./types";

function getDefaultCurrentValue<ITEM>(
  items: ITEM[],
  getItemValue?: TSelectGetItemValue<ITEM>,
  value?: ITEM | string | null | number
): ITEM | null {
  if (typeof value === "undefined") {
    return null;
  }
  if (typeof value === "string" || typeof value === "number") {
    return items.find((item) => getItemValue?.(item) === value) || null;
  }
  if (value === null) {
    return null;
  }
  return value;
}

export function useSelect<ITEM>(props: TSelectProps<ITEM>) {
  const [searchValue, setSearchValue] = useState("");
  const [currentValue, setCurrentValue] = useState<ITEM | null>(
    getDefaultCurrentValue(props.items, props.getItemValue, props.value)
  );
  const items = useMemo(() => {
    return props.items.filter((item) => {
      return props
        .getItemLabel?.(item)
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
  }, [props.items, searchValue]);

  const handleChange = (value: string | number | null): void => {
    const item = props.items.find((item) => props.getItemValue?.(item) === value);
    if (props.onChangeReturnValue === "item") {
      props.onChange?.(item || null);
    }
    if (props.onChangeReturnValue === "value") {
      props.onChange?.(value);
    }
    setCurrentValue(item || null);
    setSearchValue("");
  };

  return {
    ...props,
    items,
    handleChange,
    searchValue,
    currentValue,
    size: props.size || "m"
  };
}
