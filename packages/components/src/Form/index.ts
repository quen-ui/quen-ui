import { Form as FormComponent } from "./Form";
import Field from "./Field";
import FieldArray from "./FieldArray";
import { useForm } from "./useForm";
import { useWatch } from "./useWatch";

type TForm = typeof FormComponent & {
  useForm: typeof useForm;
  useWatch: typeof useWatch;
  Field: typeof Field;
  FieldArray: typeof FieldArray;
};

const Form = FormComponent as TForm;
Form.Field = Field;
Form.FieldArray = FieldArray;
Form.useWatch = useWatch;
Form.useForm = useForm;

export type {
  IFormInstance,
  IFormFieldProps,
  IFormFieldArrayProps,
  TFormOnValueChange,
  TFormFieldValidate,
  IFormFieldError,
  IFormValidationRule,
  IUseFormOptions,
  IFormProps
} from "./types";
export { Form };
