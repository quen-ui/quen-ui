import {
  useState,
  useMemo,
  SyntheticEvent,
  ChangeEvent,
  RefObject
} from "react";
import { TSelectProps, TSelectGetItemValue } from "./types";

function getDefaultCurrentValue<ITEM>(
  getItemValue?: TSelectGetItemValue<ITEM>,
  value?: ITEM | string | null | number
): string | number | null {
  if (typeof value === "undefined") {
    return null;
  }
  if (typeof value === "string" || typeof value === "number") {
    return value;
  }
  if (value === null) {
    return null;
  }
  return getItemValue?.(value) ||  null;
}

export function useSelect<ITEM>(
  props: TSelectProps<ITEM>,
  inputRef: RefObject<HTMLInputElement | null>
) {
  const [isFocus, setIsFocus] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [currentValue, setCurrentValue] = useState<string | number | null>(
    getDefaultCurrentValue(props.getItemValue, props.value)
  );
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const items = useMemo(() => {
    return props.items.filter((item) => {
      return props
        .getItemLabel?.(item)
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
  }, [props.items, searchValue]);

  const handleBlur = (): void => {
    setIsFocus(false);
    inputRef.current?.blur();
    setIsOpenDropDown(false);
  };

  const handleChange = (item: ITEM | null, event: SyntheticEvent): void => {
    if (props.onChangeReturnValue === "item") {
      props.onChange?.(item, event);
    }
    if (props.onChangeReturnValue === "value") {
      props.onChange?.(props.getItemValue?.(item) || null, event);
    }
    setCurrentValue(props.getItemValue?.(item) || null);
    handleBlur()
    setSearchValue("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!props.isDisabled) {
      setSearchValue(event.target.value);
    }
  };

  const handleInputClick = (): void => {
    if (!props.isDisabled) {
      setIsFocus(true);
      inputRef.current?.focus();
      setIsOpenDropDown(!isOpenDropDown);
    }
  };

  return {
    ...props,
    items,
    isFocus,
    handleChange,
    searchValue,
    handleInputChange,
    handleInputClick,
    handleBlur,
    currentValue,
    isOpenDropDown,
    size: props.size || "m"
  };
}
