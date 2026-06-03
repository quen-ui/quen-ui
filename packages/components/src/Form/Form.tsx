import {
  createContext,
  useContext,
  type FormEvent,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { Flex } from "../Flex";
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
  as = "form",
  direction = "column",
  ...props
}: IFormProps<T>) => {
  const messages = useMemo(() => {
    return deepMerge(defaultValidateMessages, validateMessages ?? {});
  }, [validateMessages]);

  const contextValue = useMemo(
    () => ({
      ...form,
      validateMessages: messages,
      validateTrigger,
      trigger
    }),
    [form, messages, validateTrigger, trigger]
  );

  useEffect(() => {
    form.setValidateMessages(messages);
  }, [form, messages]);

  const handleSubmit = useCallback(async (e?: FormEvent) => {
    e?.preventDefault();
    const isValid = await form.onValidateFields();
    if (isValid) {
      await onFinish?.(form.getFieldsValue() as T);
    } else {
      onFinishFailed?.(form.getFieldsValue() as T, form.getFieldsError());
    }
  }, [form, onFinishFailed, onFinish]);

  useEffect(() => {
    form.setSubmitCallback(() => handleSubmit);
  }, [form.getFieldsValue, form.getFieldsError]);

  return (
    <FormContext.Provider value={contextValue as any}>
      <Flex
        as={as}
        id={name}
        role="form"
        onSubmit={handleSubmit}
        direction={direction}
        {...props}>
        {children}
      </Flex>
    </FormContext.Provider>
  );
};
