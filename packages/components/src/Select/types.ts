import { TQuenSize } from "../types/size";
import React, { CSSProperties } from "react";

export interface ISelectDefaultItem {
  label: string;
  value: string;
  groupId?: string | number;
  isDisabled?: boolean;
  icon?: React.ReactNode;
}

export type TSelectSingleValue = string;

export type TSingleSelectItemOnChange<ITEM> = (value: ITEM | null) => void;
export type TSingleSelectValueOnChange = (
  value: TSelectSingleValue | null
) => void;

export type TMultiSelectItemOnChange<ITEM> = (value: ITEM[] | null) => void;

export type TMultiSelectValueOnChange = (
  value: TSelectSingleValue[] | null
) => void;

type TSingleSelectOnChange<ITEM = ISelectDefaultItem> =
  | {
      /**	Selection change handler */
      onChange?: TSingleSelectItemOnChange<ITEM>;
      /** Return format for onChange */
      onChangeReturnValue: "item";
      /** Current selection (controlled) */
      value?: ITEM | null;
    }
  | {
      /**	Selection change handler */
      onChange?: TSingleSelectValueOnChange;
      /** Return format for onChange */
      onChangeReturnValue?: "value";
      /** Current selection (controlled) */
      value?: TSelectSingleValue | null;
    };

/**	Selection change handler */
type TMultiSelectOnChange<ITEM = ISelectDefaultItem> =
  | {
      /**	Selection change handler */ onChange?: TMultiSelectItemOnChange<ITEM>;
      /** Return format for onChange */
      onChangeReturnValue?: "item";
      /** Current selection (controlled) */
      value?: ITEM[];
    }
  | {
      /**	Selection change handler */ onChange?: TMultiSelectValueOnChange;
      /** Return format for onChange */
      onChangeReturnValue?: "value";
      /** Current selection (controlled) */
      value?: TSelectSingleValue[];
    };

export type TSelectGetItemDisabled<ITEM> = (item: ITEM) => boolean | undefined;
export type TSelectGetItemValue<ITEM> = (
  item: ITEM | null
) => TSelectSingleValue | null;
export type TSelectGetItemLabel<ITEM> = (item: ITEM) => string;
export type TSelectGetItemIcon<ITEM> = (item: ITEM) => React.ReactNode;

export type TSingleSelectProps<ITEM> = TSingleSelectOnChange<ITEM> & {
  /** Enables multi-selection */
  isMulti?: undefined | false;
};

export type TMultiSelectProps<ITEM> = TMultiSelectOnChange<ITEM> & {
  /** Enables multi-selection */
  isMulti: true;
};

export type TSelectProps<
  ITEM = ISelectDefaultItem
> = (TSingleSelectProps<ITEM> | TMultiSelectProps<ITEM>) &
  TSelectBaseProps<ITEM>;

type TSelectBaseProps<ITEM> = {
  /** Input size */
  size?: TQuenSize;
  /** Disables interaction */
  isDisabled?: boolean;
  /** Field label */
  label?: string;
  /** Marks as required */
  isRequired?: boolean;
  /** Error state/message */
  error?: string | boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Left-side adornment */
  leftContent?: React.ReactNode;
  /** Right-side adornment */
  rightContent?: React.ReactNode;
  /** Name select  */
  name?: string;
  /** Container class */
  className?: string;
  /** Data source for options  */
  items: ITEM[];
  /** Called when blur */
  onBlur?: React.FocusEventHandler;
  /** Called when focus */
  onFocus?: React.FocusEventHandler;
  /** Called when clear */
  onClear?: () => void;
  /** Shows clear button */
  isClearable?: boolean;
  /** Determines disabled state */
  getItemDisabled?: TSelectGetItemDisabled<ITEM>;
  /** Extracts option value */
  getItemValue?: TSelectGetItemValue<ITEM>;
  /** Extracts display text */
  getItemLabel?: TSelectGetItemLabel<ITEM>;
  /** Extracts display icon */
  getItemIcon?: TSelectGetItemIcon<ITEM>;
  /** Inline styles */
  style?: CSSProperties;
  /** Default empty message */
  messageNoData?: string;
  /** Custom "no options" UI */
  notFoundContent?: React.ReactNode;
  /** Initial open state */
  defaultOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Shows loading indicator */
  isLoading?: boolean;
  /** Get focus by default */
  isAutoFocus?: boolean;
  id?: string;
  /** Whether show search input in single mode */
  showSearch?: boolean;
  zIndex?: number;
};
