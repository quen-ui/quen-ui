import type {
  ReactElement,
  ReactNode,
  DOMAttributes,
  FormEvent,
  ElementType
} from "react";
import { type TKeyObjectType, TValueObjectType } from "@quen-ui/helpers";
import { defaultValidateMessages } from ".//defaultValidateMessages";
import { IFlexProps } from "../Flex";

type DeepPartial<T> = T extends any[]
  ? T
  : T extends Record<string, any>
    ? {
        [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

export interface IFormInstance<T extends Record<string, any>> {
  /** Set value of a specific field */
  setFieldValue: (name: TKeyObjectType<T>, value: T[keyof T]) => void;
  /** Get current value of a specific field */
  getFieldValue: (
    name: TKeyObjectType<T>
  ) => TValueObjectType<T, TKeyObjectType<T>>;
  /** Get all field values */
  getFieldsValue: (names?: TKeyObjectType<T>[]) => Partial<T> | T;
  /**  */
  registerField: (name: TKeyObjectType<T>, config: IFormConfigField<T>) => void;
  /**  */
  unregisterField: (name: TKeyObjectType<T>) => void;
  /** Reset all fields to their initial values */
  resetFields: () => void;
  /**  */
  fields: Record<TKeyObjectType<T>, IFormConfigField<T>>;
  /** Set validation errors manually */
  setErrors: (
    errors:
      | IFormFieldError<T>[]
      | ((prev: IFormFieldError<T>[]) => IFormFieldError<T>[])
  ) => void;
  /**  */
  arrayHelpers: (name: TKeyObjectType<T>) => IFormFieldArrayHelpers<T>;
  /**  */
  registerSubscribe: (
    name: TKeyObjectType<T>,
    callback: TFormFieldSubscribe<T>
  ) => void;
  /**  */
  unregisterSubscribe: (name: TKeyObjectType<T>) => void;
  /** Trigger validation manually */
  triggerValidation: (
    name: TKeyObjectType<T>,
    value: TValueObjectType<T, TKeyObjectType<T>>,
    values: T
  ) => void;
  /**  */
  setFieldsValue: (values: Record<TKeyObjectType<T>, any>) => void;
  /** Validate all fields and return a Promise */
  onValidateFields: () => Promise<boolean>;
  /** Get all field errors */
  getFieldsError: (names?: TKeyObjectType<T>[]) => IFormFieldError<T>[];
  /** Get errors for a specific field */
  getFieldError: (name: TKeyObjectType<T>) => string[];
  /** Programmatically submit the form */
  submit: () => void;
  /**  */
  setSubmitCallback: (callback: () => (e?: FormEvent) => Promise<void>) => void;
}

export interface IFormContext<T extends Record<string, any>>
  extends IFormInstance<T> {
  validateMessages: typeof defaultValidateMessages;
  validateTrigger: TFieldTrigger | TFieldTrigger[];
  trigger: TFieldTrigger | TFieldTrigger[];
}

export type TFormFieldValidate<T> = (
  value: any,
  values: T
) => Promise<string | undefined> | string | undefined;

export interface IFormFieldArrayHelpers<
  T extends Record<string, any> = Record<string, any>
> {
  /** Add a new item */
  add: (value?: any) => void;
  /** Remove item by index */
  remove: (index: number) => void;
  /** Move item between positions */
  insert: (
    index: number,
    value: TValueObjectType<T, TKeyObjectType<T>>[0]
  ) => void;
}

export interface IFormProps<T extends Record<string, any> = Record<string, any>>
  extends IFlexProps {
  /** Form instance returned by useForm */
  form: IFormInstance<T>;
  /** Form fields and UI elements */
  children: ReactNode;
  /** Called when validation passes and form is submitted */
  onFinish?: (values: T) => void | Promise<void>;
  /** Called when validation fails */
  onFinishFailed?: (
    values: T,
    errors: IFormFieldError<T>[]
  ) => void | Promise<void>;
  /** Custom validation messages */
  validateMessages?: DeepPartial<typeof defaultValidateMessages>;
  /** When validation should be triggered (onChange, onBlur, etc) */
  validateTrigger?: TFieldTrigger | TFieldTrigger[];
  /** Event to trigger field value updates */
  trigger?: TFieldTrigger | TFieldTrigger[];
  /** Optional name of the form */
  name?: string;
  as?: ElementType;
  [key: string]: any;
}

export type TFieldTrigger =
  | "onChange"
  | "onBlur"
  | "onFocus"
  | keyof DOMAttributes<any>;

export interface IFormFieldProps<T> {
  /** Field name (supports nested paths) */
  name: TKeyObjectType<T>;
  /** Form control (e.g., TextField, Checkbox) */
  children: ReactElement;
  /** Default field value */
  defaultValue?: any;
  /** Custom validation logic */
  validate?: TFormFieldValidate<T>;
  /** Name of the prop that represents the value */
  valuePropName?: string;
  /** Built-in validation rules (min, max, pattern, etc) */
  rules?: IFormValidationRule[];
  /** Triggers for validation. */
  validateTrigger?: TFieldTrigger | TFieldTrigger[];
  /** Triggers for value update */
  trigger?: TFieldTrigger | TFieldTrigger[];
  /** Other fields that affect validation */
  dependencies?: TKeyObjectType<T>[];
}

export interface IFormFieldArrayProps<
  T extends Record<string, any> = Record<string, any>
> {
  /** Field array name */
  name: string;
  /** Render function that returns the UI for the array fields */
  children: (
    helpers: IFormFieldArrayHelpers<T>,
    fields: IFormConfigFieldArrayItem<T>[]
  ) => ReactNode;
}

export interface IFormValidationRule {
  /** Minimum number of characters */
  minLength?: number;
  /** Maximum number of characters*/
  maxLength?: number;
  /** Must match a regular expression */
  pattern?: RegExp;
  /** Checks value type */
  type?: "email" | "url" | "number";
  /** Custom validation message */
  message?: string;
  /** Field is required */
  required?: boolean;
}

export interface IFormConfigField<T> {
  validate?: (
    value: TValueObjectType<T, TKeyObjectType<T>>,
    values: T
  ) => Promise<string[]> | string[];
  rules?: IFormValidationRule[];
  defaultValue?: TValueObjectType<T, TKeyObjectType<T>>;
  dependencies?: TKeyObjectType<T>[];
}

export interface IFormConfigFieldArrayItem<
  T extends Record<string, any> = Record<string, any>
> {
  value: TValueObjectType<T, TKeyObjectType<T>>[0];
}

export interface IUseFormOptions<T = Record<string, any>> {
  /** Initial field values */
  initialValues?: Partial<T>;
  /** Callback when any field value changes */
  onValueChange?: TFormOnValueChange<T>;
}

export type TFormFieldSubscribe<T = Record<string, any>> = (
  newValue: TValueObjectType<T, TKeyObjectType<T>>
) => void;

export interface IFormFieldSubscribe<T> {
  name: TKeyObjectType<T>;
  func: TFormFieldSubscribe<T>;
}

export type TFormOnValueChange<T> = (
  changedValues: Partial<T>,
  values: T
) => void;

export interface IFormFieldError<T> {
  name: TKeyObjectType<T>;
  errors: string[];
  warnings: string[];
}
