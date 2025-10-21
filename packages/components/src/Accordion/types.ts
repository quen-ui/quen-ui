import { ReactNode, CSSProperties } from "react";

import type { TQuenSize } from "../types/size";

export const ACCORDION_VARIANTS = ["bordered", "ghost"] as const;

export type TAccordionVariants = (typeof ACCORDION_VARIANTS)[number];

export interface IAccordionDefaultItem {
  /** The unique identifier of the panel */
  key: string;
  /** Additional className */
  className?: string;
  /** Icon displayed before label */
  leftContent?: ReactNode;
  /** Icon displayed after label */
  rightContent?: ReactNode;
  /** Title of the panel */
  label: ReactNode;
  /** Body area content */
  children: ReactNode;
  /** If false, panel will not show arrow icon. If false, collapsible can't be set as icon */
  showArrow?: boolean;
  /** Inline panel styles */
  style?: CSSProperties;
  /** Disables interaction */
  disabled?: boolean;
}

export type TAccordionGetItemKey<Item> = (item: Item) => string;
export type TAccordionGetItemClassName<Item> = (
  item: Item
) => string | undefined;
export type TAccordionGetItemLeftContent<Item> = (item: Item) => ReactNode;
export type TAccordionGetItemRightContent<Item> = (item: Item) => ReactNode;
export type TAccordionGetItemLabel<Item> = (item: Item) => ReactNode;
export type TAccordionGetItemChildren<Item> = (item: Item) => ReactNode;
export type TAccordionGetItemShowArrow<Item> = (
  item: Item
) => boolean | undefined;
export type TAccordionGetItemStyle<Item> = (
  item: Item
) => CSSProperties | undefined;
export type TAccordionGetItemDisabled<Item> = (
  item: Item
) => boolean | undefined;

export interface IAccordionProps<Item = IAccordionDefaultItem> {
  /** Set the size of accordion */
  size?: TQuenSize;
  /** Callback function executed when active panel is changed */
  onChange?: (keys: (string | number)[]) => void;
  /** Key of the active panel */
  activeKeys?: (string | number)[];
  /** Key of the initial active panel */
  defaultActiveKeys?: (string | number)[];
  /** Accordion items content */
  items: Item[];
  /** Visual design option */
  variant?: TAccordionVariants;
  /** Additional className */
  className?: string;
  /** Additional style */
  style?: CSSProperties;
  /** Unique key extractor */
  getItemKey?: TAccordionGetItemKey<Item>;
  /** Label text extractor */
  getItemClassName?: TAccordionGetItemClassName<Item>;
  /** Extracts content shown before the label */
  getItemLeftContent?: TAccordionGetItemLeftContent<Item>;
  /** Extracts content shown after the label */
  getItemRightContent?: TAccordionGetItemRightContent<Item>;
  /** Extracts the section header */
  getItemLabel?: TAccordionGetItemLabel<Item>;
  /** Retrieves the contents of the section */
  getItemChildren?: TAccordionGetItemChildren<Item>;
  /** Determines whether to display the disclosure arrow */
  getItemShowArrow?: TAccordionGetItemShowArrow<Item>;
  /** Returns inline styles for a specific element */
  getItemStyle?: TAccordionGetItemStyle<Item>;
  /** Disabled state extractor */
  getItemDisabled?: TAccordionGetItemDisabled<Item>;
  /** The callback that is called when the accordion element is clicked */
  onClickItem?: (item: Item) => void;
  /** If true, the contents of the hidden panels will be deleted from the DOM */
  destroyOnHidden?: boolean;
  /** Allows simultaneous opening of multiple panels */
  multiple?: boolean;
  /** Custom rendering of the panel title. Allows you to completely redefine its appearance. */
  renderItemHeader?: (
    item: Item,
    open: boolean,
    toggle: () => void
  ) => ReactNode;
  /** Custom icon for the disclosure arrow */
  chevronIcon?: ReactNode;
  [key: string]: any;
}

export interface IAccordionItemProps {
  /** Header label of the accordion item */
  label: ReactNode;
  /** Defines the size of the item */
  size?: TQuenSize;
  /** Additional CSS class for the accordion item */
  className?: string;
  /** Inline styles applied to the item container */
  style?: CSSProperties;
  /** Content of the accordion section (shown when expanded) */
  children: ReactNode;
  /** Determines whether the toggle arrow icon is visible */
  showArrow?: boolean;
  /** Optional content displayed before the label (e.g., an icon) */
  leftContent?: ReactNode;
  /** Optional content displayed after the label (e.g., status indicator) */
  rightContent?: ReactNode;
  /** Disables user interaction for the item */
  disabled?: boolean;
  /** Triggered when the accordion header is clicked */
  onClick: () => void;
  /** Indicates whether the item is currently expanded */
  open?: boolean;
  /** If true, the content will be removed from the DOM when the item is collapsed */
  destroyOnHidden?: boolean;
  /** Marks the item as the last in the group (useful for styling) */
  lastItem?: boolean;
  /** Defines the visual variant: "bordered" or "ghost" */
  variant?: TAccordionVariants;
  /** Unique identifier for the item */
  id: string;
  /** Custom renderer for the header section */
  renderHeader?: () => ReactNode;
  /** Custom icon for the expand/collapse chevron */
  chevronIcon?: ReactNode;
}

export interface IAccordionGroupProps {
  /** Accordion item elements contained within the group */
  children: ReactNode;
  /** Controlled list of active (expanded) item keys */
  activeKeys?: (string | number)[];
  /** Uncontrolled initial list of active item keys */
  defaultActiveKeys?: (string | number)[];
  /** Called whenever the open items change */
  onChange?: (keys: (string | number)[]) => void;
  /** If true, multiple accordion items can be expanded at once */
  multiple?: boolean;
  /** Inline styles for the accordion group container */
  style?: CSSProperties;
  /** Additional CSS class for the accordion group */
  className?: string;
}

export interface IAccordionGroupApi {
  /** Opens all accordion items */
  openAll: () => void;
  /** Collapses all accordion items */
  closeAll: () => void;
  /** Returns a list of currently opened item keys */
  getOpenedKeys: () => (string | number)[];
  /** Manually sets the currently opened items by keys */
  setOpenedKeys: (keys: (string | number)[]) => void;
}
