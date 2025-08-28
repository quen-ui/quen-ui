import RadioButtonComponent from "./RadioButton";
import RadioButtonGroupComponent from "./RadioButtonGroup";
export type {
  IRadioButtonProps,
  IRadioGroupProps,
  IRadioGroupDefaultItem,
  TRadioGroupPropGetItemValue,
  TRadioGroupPropGetItemKey,
  TRadioGroupPropGetItemDisabled,
  TRadioGroupPropGetItemLabel
} from "./types";

type TRadioButton = typeof RadioButtonComponent & {
  Group: typeof RadioButtonGroupComponent;
};

const RadioButton = RadioButtonComponent as TRadioButton;
RadioButton.Group = RadioButtonGroupComponent;

export { RadioButton };
