import type { ReactElement, ReactNode, DOMAttributes, FormEvent } from "react";
import { type TKeyObjectType, TValueObjectType } from "@quen-ui/helpers";
import { defaultValidateMessages } from ".//defaultValidateMessages";

export interface IFormInstance<T extends Record<string, any>> {
  setFieldValue: (name: TKeyObjectType<T>, value: T[keyof T]) => void;
  getFieldValue: (
    name: TKeyObjectType<T>
  ) => TValueObjectType<T, TKeyObjectType<T>>;
  getFieldsValue: (names?: TKeyObjectType<T>[]) => Partial<T> | T;
  registerField: (name: TKeyObjectType<T>, config: IFormConfigField<T>) => void;
  unregisterField: (name: TKeyObjectType<T>) => void;
  resetFields: () => void;
  fields: Record<TKeyObjectType<T>, IFormConfigField<T>>;
  setErrors: (
    errors:
      | IFormFieldError<T>[]
      | ((prev: IFormFieldError<T>[]) => IFormFieldError<T>[])
  ) => void;
  arrayHelpers: (name: TKeyObjectType<T>) => IFormFieldArrayHelpers<T>;
  registerSubscribe: (
    name: TKeyObjectType<T>,
    callback: TFormFieldSubscribe<T>
  ) => void;
  unregisterSubscribe: (name: TKeyObjectType<T>) => void;
  triggerValidation: (
    name: TKeyObjectType<T>,
    value: TValueObjectType<T, TKeyObjectType<T>>,
    values: T
  ) => void;
  setFieldsValue: (values: Record<TKeyObjectType<T>, any>) => void;
  onValidateFields: () => Promise<boolean>;
  getFieldsError: (names?: TKeyObjectType<T>[]) => IFormFieldError<T>[];
  getFieldError: (name: TKeyObjectType<T>) => string[];
  submit: () => void;
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

export interface IFormFieldArrayHelpers<T extends Record<string, any>> {
  add: (value?: TValueObjectType<T, TKeyObjectType<T>>[0]) => void;
  remove: (index: number) => void;
  insert: (
    index: number,
    value: TValueObjectType<T, TKeyObjectType<T>>[0]
  ) => void;
}

export interface IFormProps<T extends Record<string, any>> {
  form: IFormInstance<T>;
  children: ReactNode;
  onFinish?: (values: T) => void | Promise<void>;
  onFinishFailed?: (
    values: T,
    errors: IFormFieldError<T>[]
  ) => void | Promise<void>;
  validateMessages?: Partial<typeof defaultValidateMessages>;
  validateTrigger?: TFieldTrigger | TFieldTrigger[];
  trigger?: TFieldTrigger | TFieldTrigger[];
  name?: string;
  [key: string]: any;
}

export type TFieldTrigger =
  | "onChange"
  | "onBlur"
  | "onFocus"
  | keyof DOMAttributes<any>;

export interface IFormFieldProps<T> {
  name: TKeyObjectType<T>;
  children: ReactElement;
  defaultValue?: any;
  validate?: TFormFieldValidate<T>;
  valuePropName?: string;
  rules?: IFormValidationRule[];
  validateTrigger?: TFieldTrigger | TFieldTrigger[];
  trigger?: TFieldTrigger | TFieldTrigger[];
  dependencies?: TKeyObjectType<T>[];
}

export interface IFormFieldArrayProps<T extends Record<string, any>> {
  name: string;
  children: (
    helpers: IFormFieldArrayHelpers<T>,
    fields: TValueObjectType<T, TKeyObjectType<T>>[]
  ) => ReactNode;
}

export interface IFormValidationRule {
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  type?: "email" | "url" | "number";
  message?: string;
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

export interface IUseFormOptions<T = Record<string, any>> {
  initialValues?: Partial<T>;
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
