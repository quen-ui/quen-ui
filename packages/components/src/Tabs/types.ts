import React, { type CSSProperties } from "react";

type TTabsSemantic = "list" | "item" | "itemLeftContent" | "itemRightContent" | "panel";

export interface ITabProps {
  /** Tab label */
  children?: React.ReactNode;
  /** Unique identifier */
  value: string;
  /** Disables interaction */
  disabled?: boolean;
  /** Custom click handler */
  onClick?: React.MouseEventHandler;
  /** Left icon/adornment */
  leftContent?: React.ReactNode;
  /** 	Right icon/adornment */
  rightContent?: React.ReactNode;
  /** Custom classname */
  className?: string;
  /** Additional style */
  style?: CSSProperties;
}

export interface ITabsProps {
  /** Tab components */
  children: React.ReactNode;
  /** Initial active tab value */
  defaultValue?: string;
  /** Keeps hidden tabs in DOM */
  keepMounted?: boolean;
  /** Tab change handler */
  onChange?: (value: string) => void;
  /** Adds an outline border to the active tab instead of a filled background */
  outline?: boolean;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TTabsSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TTabsSemantic, CSSProperties>>;
}

export interface ITabsListProps {
  /** <Tab> components */
  children: React.ReactNode;
  /** Custom classname */
  className?: string;
  /** Distributes tabs evenly */
  grow?: boolean;
  /** CSS justify-content value */
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  /** Additional style */
  style?: CSSProperties;
}

export interface ITabsContext {
  /** Active tab value */
  value: string | undefined;
  /** Keeps hidden tabs in DOM */
  keepMounted?: boolean;
  /** Tab change handler */
  onChange: (value: string) => void;
  /** Adds an outline border to the active tab instead of a filled background */
  outline?: boolean;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TTabsSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TTabsSemantic, CSSProperties>>;
}

export interface ITabPanelProps {
  /** Panel content */
  children: React.ReactNode;
  /** Matches corresponding tab */
  value: string;
  /** Additional style */
  style?: CSSProperties;
  /** Custom classname */
  className?: string;
}
