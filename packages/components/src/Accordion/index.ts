import { default as AccordionComponent } from "./Accordion";
import { AccordionGroup } from "./AccordionGroup";

type TAccordion = typeof AccordionComponent & {
  Group: typeof AccordionGroup;
};

const Accordion = AccordionComponent as TAccordion;
Accordion.Group = AccordionGroup;

export { Accordion };
export type {
  IAccordionProps,
  IAccordionGroupProps,
  IAccordionGroupApi,
  TAccordionGetItemDisabled,
  TAccordionGetItemStyle,
  IAccordionDefaultItem,
  TAccordionGetItemChildren,
  TAccordionGetItemKey,
  TAccordionGetItemShowArrow,
  TAccordionVariants,
  TAccordionGetItemClassName,
  TAccordionGetItemLabel,
  TAccordionGetItemLeftContent,
  TAccordionGetItemRightContent
} from "./types";
