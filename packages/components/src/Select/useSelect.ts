import { useState, useMemo } from "react";
import {
  TSelectProps,
  TSelectGetItemValue,
  TSelectSingleValue,
  TMultiSelectProps,
  TSingleSelectProps,
  TMultiSelectItemOnChange,
  TSingleSelectItemOnChange,
  TSingleSelectValueOnChange
} from "./types";

function getDefaultCurrentValue<ITEM>(
  getItemValue: TSelectGetItemValue<ITEM>,
  value?: ITEM | TSelectSingleValue | null | ITEM[] | TSelectSingleValue[]
): string  | (string )[] | null {
  if (typeof value === "undefined") {
    return null;
  }
  if (typeof value === "string") {
    return value || null;
  }
  if (value === null) {
    return null;
  }
  if (Array.isArray(value)) {
    return value.map((v) => {
      if (typeof v === "string" || typeof value === "number") {
        return v as string;
      }
      return getItemValue(v as ITEM) as string;
    });
  }
  return getItemValue(value);
}

export function useSelect<ITEM>(
  props: TSelectProps<ITEM> & Required<Pick<TSelectProps<ITEM>, "getItemValue">>
) {
  const [searchValue, setSearchValue] = useState("");
  const [currentValue, setCurrentValue] = useState<
    TSelectSingleValue | TSelectSingleValue[] | null
  >(getDefaultCurrentValue(props.getItemValue, props.value));
  const items = useMemo(() => {
    return props.items?.filter((item) => {
      return props
        .getItemLabel?.(item)
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    }) ?? [];
  }, [props.items, searchValue]);

  function handleChange(
    value: TSelectSingleValue | TSelectSingleValue[] | null
  ): void {
    if (props.multi && Array.isArray(value)) {
      const multiProps = props as TMultiSelectProps<ITEM>;
      if (props.onChangeReturnValue === "value") {
        props.onChange?.(value);
      }
      if (props.onChangeReturnValue === "item") {
        const items = value.map(
          (v) => props.items.find((i) => props.getItemValue(i) === v) as ITEM
        );
        (multiProps.onChange as TMultiSelectItemOnChange<ITEM>)?.(items);
      }
      setCurrentValue(value || null);
    } else {
      const singleProps = props as TSingleSelectProps<ITEM>;
      const item =
        props.items.find((i) => props.getItemValue?.(i) === value) ?? null;

      if (props.onChangeReturnValue === "item") {
        (singleProps.onChange as TSingleSelectItemOnChange<ITEM>)?.(item || null);
      } else {
        (singleProps.onChange as TSingleSelectValueOnChange)?.(value as TSelectSingleValue);
      }
      setCurrentValue(value || null);
    }
    setSearchValue("");
  }

  return {
    ...props,
    items,
    handleChange,
    searchValue,
    currentValue,
    size: props.size || "m"
  };
}
