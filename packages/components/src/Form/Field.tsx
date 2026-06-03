import { useEffect, cloneElement, useCallback, useMemo, useState } from "react";
import {getValueObject} from "@quen-ui/helpers";
import { useDebounce } from "@quen-ui/hooks";
import type {
  IFormFieldProps,
  TFieldTrigger,
  IFieldRenderProps
} from "./types";
import { useFormContext } from "./Form";
import { validateFieldValue } from "./validation";

const Field = <T extends Record<string, any>>({
  name,
  defaultValue,
  validate,
  children,
  valuePropName = "value",
  rules = [],
  validateTrigger = "onChange",
  trigger = "onChange",
  dependencies,
  validateDebounce = 0
}: IFormFieldProps<T>) => {
  const {
    setFieldValue,
    registerField,
    unregisterField,
    setErrors,
    validateMessages,
    validateTrigger: formValidateTrigger,
    trigger: formTrigger,
    getFieldError,
    getFieldsValue,
    getFieldValue,
    isFieldTouched,
    isFieldDirty,
    touchField
  } = useFormContext();

  const [localValue, setLocalValue] = useState<any>(
    getValueObject(getFieldsValue(), name, defaultValue)
  );

  const runValidation = useCallback(async () => {
    const value = getFieldValue(name);
    const values = getFieldsValue();
    const fieldError = await validateFieldValue(
      value, values, name as string,
      { validate, rules }, validateMessages
    );
    setErrors((prev) => {
      const next = prev.filter((e) => e.name !== name);
      if (fieldError.errors.length > 0) next.push(fieldError);
      return next;
    });
  }, [name, validate, rules, validateMessages, getFieldValue, getFieldsValue, setErrors]);

  useEffect(() => {
    const formValue = getFieldValue(name);
    if (formValue !== localValue) {
      setLocalValue(formValue ?? "");
    }
  }, [name, getFieldValue, localValue]);

  const debouncedValidate = useDebounce(runValidation, validateDebounce);

  useEffect(() => {
    registerField(name, {
      defaultValue,
      rules,
      dependencies,
      validate
    });
    return () => unregisterField(name);
  }, [name]);

  const effectiveTrigger = useMemo(() => {
    const t = trigger !== undefined ? trigger : formTrigger;
    return Array.isArray(t) ? t : [t];
  }, [trigger, formTrigger]);

  const effectiveValidateTrigger = useMemo(() => {
    const vt =
      validateTrigger !== undefined ? validateTrigger : formValidateTrigger;
    return Array.isArray(vt) ? vt : [vt];
  }, [validateTrigger, formValidateTrigger]);


  const error = getFieldError(name);
  const touched = isFieldTouched(name);
  const dirty = isFieldDirty(name);

  const extractValue = useCallback(
    (e: any) => {
      return e?.target && valuePropName in e.target
        ? e.target[valuePropName]
        : (e?.target?.value ?? e);
    },
    [valuePropName]
  );

  const handleLocalChange = useCallback(
    (e: any) => {
      setLocalValue(extractValue(e));
    },
    [extractValue]
  );

  const handleStoreUpdate = useCallback(
    (e: any) => {
      setFieldValue(name, extractValue(e));
      touchField(name);
    },
    [name, setFieldValue, extractValue]
  );

  const handleValidate = useCallback(
    () => {
      touchField(name);
      if (validateDebounce > 0) {
        debouncedValidate();
      } else {
        runValidation();
      }
    },
    [name, touchField, runValidation]
  );

  const buildHandlers = useCallback(
    (changeTriggers: TFieldTrigger[], validateTriggers: TFieldTrigger[]) => {
      const handlers: Record<string, any> = {};
      const allTriggers = new Set([
        "onChange",
        ...changeTriggers,
        ...validateTriggers
      ]);

      allTriggers.forEach((eventName) => {
        const shouldStoreUpdate = Array.isArray(changeTriggers)
          ? changeTriggers.includes(eventName as TFieldTrigger)
          : changeTriggers === eventName;

        const shouldValidate = Array.isArray(validateTriggers)
          ? validateTriggers.includes(eventName as TFieldTrigger)
          : validateTriggers === eventName;

        handlers[eventName] = (e: any) => {
          if (eventName === "onChange") handleLocalChange(e);
          if (shouldStoreUpdate) handleStoreUpdate(e);
          if (shouldValidate) handleValidate();
        };
      });

      return handlers;
    },
    [handleLocalChange, handleStoreUpdate, handleValidate]
  );

  const handlers = useMemo(
    () => buildHandlers(effectiveTrigger, effectiveValidateTrigger),
    [
      effectiveTrigger.join("|"),
      effectiveValidateTrigger.join("|"),
      buildHandlers
    ]
  );

  const fieldProps: IFieldRenderProps<T> = {
    value: localValue,
    onChange: handleStoreUpdate,
    onBlur: handleValidate,
    error: error.length ? error[0] : undefined,
    required: rules?.some((rule) => rule.required === true),
    name,
    touched,
    dirty
  };

  if (typeof children === "function") {
    return children(fieldProps);
  }

  if (children) {
    return cloneElement(children, {
      ...fieldProps,
      ...handlers,
      [valuePropName]: localValue
    } as any);
  }
  return null;
};

export default Field;
