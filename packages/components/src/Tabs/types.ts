import React from "react";

export interface ITabProps {
  children?: React.ReactNode;
  value: string;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode
  className?: string;
}

export interface ITabsProps {
  children: React.ReactNode;
  defaultValue?: string;
  keepMounted?: boolean;
  onChange?: (value: string) => void;
}

export interface ITabsListProps {
  children: React.ReactNode;
  className?: string;
  isGrow?: boolean;
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
}

export interface ITabsContext {
  value: string | undefined;
  keepMounted?: boolean;
  onChange: (value: string) => void;
}

export interface ITabPanelProps {
  children: React.ReactNode;
  value: string;
}
