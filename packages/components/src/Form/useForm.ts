import { useState, useCallback } from "react";
import {
  type TValueObjectType,
  type TKeyObjectType,
  setValueObject,
  getValueObject,
  deleteValueObject
} from "@quen-ui/helpers";
import type {
  IFormInstance,
  IUseFormOptions,
  IFormFieldArrayHelpers,
  IFormConfigField,
  TFormFieldSubscribe,
  IFormFieldSubscribe,
  IFormFieldError
} from "./types";

export const useForm = <T extends Record<string, any>>(
  options?: IUseFormOptions<T>
): IFormInstance<T> => {
  const [values, setValues] = useState<T>((options?.initialValues as T) ?? {});
  const [fields, setFields] = useState<
    Record<TKeyObjectType<T>, IFormConfigField<T>>
  >({} as any);
  const [errors, setErrors] = useState<IFormFieldError<T>[]>([]);
  const [subscribes, setSubscribes] = useState<IFormFieldSubscribe<T>[]>([]);
  const [submitCallback, setSubmitCallback] = useState<() => void>();

  const registerField = useCallback<IFormInstance<T>["registerField"]>(
    (
      name: TKeyObjectType<T>,
      { defaultValue, rules, validate, dependencies }
    ) => {
      const value =
        defaultValue ??
        getValueObject((options?.initialValues ?? {}) as T, name);
      setValues((prev) => setValueObject(prev, name, value));
      setFields((prev) => ({
        ...prev,
        [name]: { validate, rules, defaultValue, dependencies }
      }));
    },
    []
  );

  const unregisterField = useCallback((name: TKeyObjectType<T>) => {
    setValues((prevState) => {
      return deleteValueObject(prevState, name);
    });
    setErrors((prevState) => {
      return prevState.filter((error) => error.name !== name);
    });
    setFields((prevState) => {
      const copy = { ...prevState };
      delete copy[name];
      return copy;
    });
  }, []);

  const registerSubscribe = useCallback(
    (name: TKeyObjectType<T>, callback: TFormFieldSubscribe<T>) => {
      setSubscribes((prev) => [...prev, { name, func: callback }]);
    },
    []
  );

  const unregisterSubscribe = useCallback((name: TKeyObjectType<T>) => {
    setSubscribes((prev) => prev.filter((s) => s.name !== name));
  }, []);

  const triggerValidation = useCallback(
    (
      name: TKeyObjectType<T>,
      value: TValueObjectType<T, TKeyObjectType<T>>,
      _values: T
    ) => {
      const field = fields[name];
      if (field?.validate) {
        field.validate(value, _values);
      }
    },
    [fields]
  );

  const notifyWatchValueField = useCallback(
    (updates: Record<TKeyObjectType<T>, any>) => {
      subscribes.forEach((subscribe) => {
        if (Object.keys(updates).includes(subscribe.name)) {
          subscribe.func(updates[subscribe.name]);
        }
      });
    },
    [subscribes, values]
  );

  const updateValues = useCallback(
    (updates: Record<TKeyObjectType<T>, any>) => {
      let changedValues: Partial<T> = {};
      let nextValues: T = {} as T;

      setValues((prev) => {
        nextValues = { ...prev } as T;
        for (const [name, value] of Object.entries(updates)) {
          nextValues = setValueObject(
            nextValues,
            name as TKeyObjectType<T>,
            value
          );
          changedValues = setValueObject(
            changedValues,
            name as TKeyObjectType<Partial<T>>,
            value
          );
        }
        return nextValues;
      });

      setErrors((prev) => {
        return prev.filter(
          (error) => !Object.keys(updates).includes(error.name)
        );
      });

      Object.entries(fields).forEach(([fieldName, field]) => {
        const deps = (field as IFormConfigField<T>).dependencies ?? [];
        if (deps.some((dep) => dep in updates)) {
          const depValue = getValueObject(
            nextValues,
            fieldName as TKeyObjectType<T>,
            ""
          );
          triggerValidation(
            fieldName as TKeyObjectType<T>,
            depValue as TValueObjectType<T, TKeyObjectType<T>>,
            nextValues
          );
        }
      });

      notifyWatchValueField(updates);
      options?.onValueChange?.(changedValues, nextValues);
    },
    [fields, triggerValidation, options, notifyWatchValueField]
  );

  const setFieldValue = useCallback(
    (
      name: TKeyObjectType<T>,
      value: TValueObjectType<T, TKeyObjectType<T>>
    ) => {
      updateValues({ [name]: value } as Record<TKeyObjectType<T>, any>);
    },
    [updateValues]
  );

  const arrayHelpers = (
    name: TKeyObjectType<T>
  ): IFormFieldArrayHelpers<T> => ({
    add: (value) => {
      setValues((prev) => {
        const currentValue = getValueObject(prev, name, []) as Array<any>;
        return setValueObject(
          prev,
          `${name}[${currentValue.length}]` as TKeyObjectType<T>,
          value
        );
      });
    },
    remove: (index: number) => {
      setValues((prev) => {
        const current = getValueObject(prev, name, []);
        const newArr = (current as Array<any>).filter((_, i) => i !== index);
        return setValueObject(prev, name, newArr);
      });
    },
    insert: (index, value) => {
      setValues((prev) => {
        const current = getValueObject(prev, name, []) as Array<any>;
        const newArr = [
          ...current.slice(0, index),
          value,
          ...current.slice(index)
        ];
        return setValueObject(prev, name, newArr);
      });
    }
  });

  const onValidateFields = useCallback(async () => {
    const results = await Promise.all(
      Object.entries(fields).map(async ([fieldName, config]) => {
        const { validate } = config as IFormConfigField<T>;
        if (!validate) return null;

        return validate(getFieldValue(fieldName as TKeyObjectType<T>), values);
      })
    );

    return results.flat().filter(Boolean).length === 0;
  }, [fields, values]);

  const resetFields = useCallback(() => {
    setValues((options?.initialValues ?? {}) as T);
    setErrors([]);
  }, [options?.initialValues]);

  const setFieldsValue = useCallback(
    (_values: Record<TKeyObjectType<T>, any>) => {
      updateValues(_values);
    },
    [updateValues]
  );

  const getFieldError = useCallback(
    (name: TKeyObjectType<T>) => {
      return errors.filter((error) => error.name === name)?.[0]?.errors ?? [];
    },
    [errors]
  );

  const getFieldsError = useCallback(
    (names?: TKeyObjectType<T>[]) => {
      if (!names) {
        return errors;
      }
      return errors.filter((error) => names.includes(error.name));
    },
    [errors]
  );

  const getFieldValue = useCallback(
    (name: TKeyObjectType<T>) => {
      return getValueObject(values, name);
    },
    [values]
  );

  const getFieldsValue = useCallback(
    (names?: TKeyObjectType<T>[]) => {
      if (names) {
        let fieldsValue: Partial<T> = {} as Partial<T>;
        names.forEach((name) => {
          const value = getValueObject(values, name);
          fieldsValue = {
            fieldsValue,
            ...setValueObject(
              fieldsValue,
              name as TKeyObjectType<Partial<T>>,
              value
            )
          };
        });
        return fieldsValue;
      }
      return values;
    },
    [values]
  );

  const submit = () => {
    submitCallback?.();
  };

  return {
    getFieldValue,
    getFieldsValue,
    registerField,
    resetFields,
    setFieldValue,
    setErrors,
    fields,
    unregisterField,
    arrayHelpers,
    registerSubscribe,
    unregisterSubscribe,
    triggerValidation,
    setFieldsValue,
    onValidateFields,
    getFieldError,
    getFieldsError,
    submit,
    setSubmitCallback
  };
};
