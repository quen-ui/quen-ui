import { useEffect, cloneElement, useCallback, useMemo, useState } from "react";
import {
  formatString,
  getValueObject,
  type TKeyObjectType,
  type TValueObjectType
} from "@quen-ui/helpers";
import type { IFormFieldProps, TFieldTrigger, IFormFieldError } from "./types";
import { useFormContext } from "./Form";
import { ruleValidators } from "./helpers";

const Field = <T extends Record<string, any>>({
  name,
  defaultValue,
  validate,
  children,
  valuePropName = "value",
  rules = [],
  validateTrigger = "onChange",
  trigger = "onChange",
  dependencies
}: IFormFieldProps<T>) => {
  const {
    setFieldValue,
    registerField,
    unregisterField,
    triggerValidation,
    setErrors,
    validateMessages,
    validateTrigger: formValidateTrigger,
    trigger: formTrigger,
    getFieldError,
    getFieldsValue,
    getFieldValue
  } = useFormContext();

  const [localValue, setLocalValue] = useState<any>(
    getValueObject(getFieldsValue(), name, defaultValue)
  );

  useEffect(() => {
    const formValue = getFieldValue(name);
    if (formValue !== localValue) {
      setLocalValue(formValue ?? "");
    }
  }, [getFieldValue]);

  useEffect(() => {
    registerField(name, {
      defaultValue,
      rules,
      dependencies,
      validate: validateField
    });
    return () => unregisterField(name);
  }, []);

  const error = getFieldError(name);

  const validateField = async (
    value: TValueObjectType<T, TKeyObjectType<T>>,
    values: T
  ) => {
    const error: IFormFieldError<T> = {
      name: name,
      errors: [],
      warnings: []
    };

    if (validate) {
      const errorValidate = (await validate(value || "", values)) || "";
      if (errorValidate) {
        error.errors.push(errorValidate);
      }
    }

    rules.map((rule) => {
      if (rule.required && (value === "" || value == null)) {
        error.errors.push(
          formatString(rule.message ?? validateMessages.required, {
            name
          })
        );
      }
      if (rule.type) {
        const validator = ruleValidators[rule.type];
        if (validator && !validator(value)) {
          error.errors.push(formatString(
            rule.message ?? validateMessages.types[rule.type],
            {
              name,
              type: rule.type
            }
          ));
        }
      }
      if (rule.minLength && String(value).length < rule.minLength) {
        error.errors.push(formatString(rule.message ?? validateMessages.string.min, {
          name,
          min: rule.minLength
        }));
      }
      if (rule.maxLength && String(value).length > rule.maxLength) {
        error.errors.push(formatString(rule.message ?? validateMessages.string.max, {
          name,
          max: rule.maxLength
        }));
      }
      if (rule.pattern && !rule.pattern.test(String(value))) {
        error.errors.push(formatString(
          rule.message ?? validateMessages.pattern.mismatch,
          {
            name,
            pattern: rule.pattern
          }
        ));
      }
    });
    setErrors((prevErrors) => {
      const newErrors = prevErrors.filter((e) => e.name !== name);
      newErrors.push(error);
      return newErrors;
    });
    return error.errors;
  };

  const handleLocalChange = useCallback(
    (e: any) => {
      const val =
        e?.target && valuePropName in e.target
          ? e.target[valuePropName]
          : (e?.target?.value ?? e);
      setLocalValue(val);
    },
    [valuePropName]
  );

  const handleStoreUpdate = useCallback(
    (e: any) => {
      const val =
        e?.target && valuePropName in e.target
          ? e.target[valuePropName]
          : (e?.target?.value ?? e);
      setFieldValue(name, val);
    },
    [name, setFieldValue, valuePropName]
  );

  const handleValidate = useCallback(
    (e: any) => {
      const val =
        e?.target && valuePropName in e.target
          ? e.target[valuePropName]
          : (e?.target?.value ?? e);
      triggerValidation(name, val, getFieldsValue());
    },
    [name, valuePropName, getFieldsValue()]
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
          if (shouldValidate) handleValidate(e);
        };
      });

      return handlers;
    },
    [handleLocalChange, handleStoreUpdate, handleValidate]
  );

  const handlers = useMemo(
    () =>
      buildHandlers(
        [
          ...(Array.isArray(trigger) ? trigger : [trigger]),
          ...(Array.isArray(formTrigger) ? formTrigger : [formTrigger])
        ],
        [
          ...(Array.isArray(validateTrigger)
            ? validateTrigger
            : [validateTrigger]),
          ...(Array.isArray(formValidateTrigger)
            ? formValidateTrigger
            : [formValidateTrigger])
        ]
      ),
    [trigger, validateTrigger, buildHandlers, formTrigger, formValidateTrigger]
  );

  if (children) {
    return cloneElement(children, {
      [valuePropName]: localValue,
      error: error.length ? error[0] : undefined,
      required: rules?.some((rule) => rule.required === true),
      ...handlers
    } as any);
  }
  return null;
};

export default Field;
