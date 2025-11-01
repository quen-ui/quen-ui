import { createContext, useContext, type FormEvent, useMemo, useEffect } from "react";
import type { IFormContext, IFormProps } from "./types";
import { deepMerge } from "@quen-ui/helpers";
import { defaultValidateMessages } from "./defaultValidateMessages";

const FormContext = createContext<IFormContext<any> | null>(null);

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) {
    throw new Error("useFormContext must be used inside <FormProvider>");
  }
  return ctx;
};

export const Form = <T extends Record<string, any>>({
  onFinish,
  children,
  form,
  onFinishFailed,
  validateMessages,
  validateTrigger = "onChange",
  trigger = "onChange",
  name,
  ...props
}: IFormProps<T>) => {

  const messages = useMemo(() => {
    return deepMerge(defaultValidateMessages, validateMessages ?? {});
  }, [validateMessages]);

  const handleSubmit = async (e?: FormEvent) => {
    e?.preventDefault();
    const isValid = await form.onValidateFields();
    if (isValid) {
      await onFinish?.(form.getFieldsValue() as T);
    } else {
      onFinishFailed?.(form.getFieldsValue() as T, form.getFieldsError());
    }
  };

  useEffect(() => {
    form.setSubmitCallback(() => handleSubmit)
  }, []);

  return (
    <FormContext.Provider
      value={
        {
          ...form,
          validateMessages: messages,
          validateTrigger,
          trigger
        } as any
      }>
      <form id={name} role="form" onSubmit={handleSubmit} {...props}>{children}</form>
    </FormContext.Provider>
  );
};
