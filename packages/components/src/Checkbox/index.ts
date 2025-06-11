import CheckboxComponent from "./Checkbox";
import CheckboxGroupComponent from "./CheckboxGroup";

type TCheckbox = typeof CheckboxComponent & {
  Group: typeof CheckboxGroupComponent;
};

const Checkbox = CheckboxComponent as TCheckbox;
Checkbox.Group = CheckboxGroupComponent;

export { Checkbox };
export type {
  ICheckboxGroupProps,
  ICheckboxProps,
  TCheckboxGroupPropGetItemKey,
  ICheckboxGroupDefaultItem,
  TCheckboxGroupPropGetItemDisabled,
  TCheckboxGroupPropGetItemLabel,
  TCheckboxGroupPropGetItemValue
} from "./types";
