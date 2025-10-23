import React from "react";

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
  rightContent?: React.ReactNode
  /** Custom classname */
  className?: string;
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
}

export interface ITabsListProps {
  /** <Tab> components */
  children: React.ReactNode;
  /** Custom classname */
  className?: string;
  /** Distributes tabs evenly */
  grow?: boolean;
  /** CSS justify-content value */
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
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
}

export interface ITabPanelProps {
  /** Panel content */
  children: React.ReactNode;
  /** Matches corresponding tab */
  value: string;
}
