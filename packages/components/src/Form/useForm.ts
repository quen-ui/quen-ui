import { useState, useCallback, useRef } from "react";
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
  IFormFieldError
} from "./types";
import { validateFieldValue } from "./validation";
import { defaultValidateMessages } from "./defaultValidateMessages";
import { defaultCompareValues } from "./helpers";

export const useForm = <T extends Record<string, any>>(
  options?: IUseFormOptions<T>
): IFormInstance<T> => {
  const initialValues = (options?.initialValues as T) ?? {};

  const [values, setValues] = useState<T>(initialValues);
  const compareValues = options?.compareValues ?? defaultCompareValues;

  const [fields, setFields] = useState<
    Record<TKeyObjectType<T>, IFormConfigField<T>>
  >({} as any);
  const [errors, setErrors] = useState<IFormFieldError<T>[]>([]);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  const subscribesRef = useRef<Map<string, Set<TFormFieldSubscribe<T>>>>(
    new Map()
  );
  const submitCallbackRef = useRef<() => any>(() => {});
  const validateMessagesRef = useRef<typeof defaultValidateMessages>(
    defaultValidateMessages
  );

  const setValidateMessages = useCallback(
    (messages: typeof defaultValidateMessages) => {
      validateMessagesRef.current = messages;
    },
    []
  );

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
      const fieldName = name as string;
      if (!subscribesRef.current.has(fieldName)) {
        subscribesRef.current.set(fieldName, new Set());
      }
      subscribesRef.current.get(fieldName)!.add(callback);
    },
    []
  );

  const unregisterSubscribe = useCallback(
    (name: TKeyObjectType<T>, callback?: TFormFieldSubscribe<T>) => {
      const fieldName = name as string;
      const callbacks = subscribesRef.current.get(fieldName);

      if (callbacks) {
        if (callback) {
          callbacks.delete(callback);
          if (callbacks.size === 0) {
            subscribesRef.current.delete(fieldName);
          }
        } else {
          subscribesRef.current.delete(fieldName);
        }
      }
    },
    []
  );
  const triggerValidation = useCallback(
    async (
      names: TKeyObjectType<T> | TKeyObjectType<T>[],
      overrideValues?: T
    ): Promise<boolean> => {
      const fieldNames = Array.isArray(names) ? names : [names];
      const currentValues = overrideValues ?? values;
      const currentMessages = validateMessagesRef.current;
      const newFieldErrors: IFormFieldError<T>[] = [];

      await Promise.all(
        fieldNames.map(async (fieldName) => {
          const config = fields[fieldName as TKeyObjectType<T>];
          if (!config) return;

          const value = getValueObject(currentValues, fieldName);
          const fieldError = await validateFieldValue(
            value,
            currentValues,
            fieldName as string,
            config,
            currentMessages
          );

          if (fieldError.errors.length > 0) {
            newFieldErrors.push(fieldError);
          }
        })
      );

      setErrors((prev) => {
        const validatedNames = new Set(fieldNames.map((n) => n as string));
        const kept = prev.filter((e) => !validatedNames.has(e.name as string));
        return [...kept, ...newFieldErrors];
      });

      return newFieldErrors.length === 0;
    },
    [fields, values]
  );


  const notifyWatchValueField = useCallback(
    (updates: Record<TKeyObjectType<T>, any>, nextValues: T) => {
      const currentMap = subscribesRef.current;
      const subscribedKeys = Array.from(currentMap.keys());

      // If no one is watching, we leave immediately
      if (subscribedKeys.length === 0) return;

      // Set to prevent duplicate notifications if multiple nested fields (e.g., "user.name" and "user.age") are received in a single update
      const notifiedKeys = new Set<string>();

      for (const updatedFieldName of Object.keys(updates)) {
        for (const subscribedKey of subscribedKeys) {
          if (notifiedKeys.has(subscribedKey)) continue;

          // Bidirectional prefix check:
          // 1. Exact match: "user" === "user"
          // 2. The updated field is a child: updated="user.name", subscribed="user"
          // 3. The subscribed field is a child: updated="user", subscribed="user.name" (parent overwritten)
          const isExactMatch = subscribedKey === updatedFieldName;
          const isUpdatedChild =
            updatedFieldName.startsWith(subscribedKey + ".") ||
            updatedFieldName.startsWith(subscribedKey + "[");
          const isSubscribedChild =
            subscribedKey.startsWith(updatedFieldName + ".") ||
            subscribedKey.startsWith(updatedFieldName + "[");
          const isRootWatch = subscribedKey === "" || updatedFieldName === "";

          if (
            isExactMatch ||
            isUpdatedChild ||
            isSubscribedChild ||
            isRootWatch
          ) {
            const callbacks = currentMap.get(subscribedKey);
            if (callbacks) {
              // We pass the current full value of its key from nextValues to the observer
              const valueToPass = getValueObject(
                nextValues,
                subscribedKey as TKeyObjectType<T>
              );
              callbacks.forEach((cb) => cb(valueToPass));
              notifiedKeys.add(subscribedKey);
            }
          }
        }
      }
    },
    []
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
          triggerValidation(
            fieldName as TKeyObjectType<T>,
            nextValues,
          );
        }
      });

      notifyWatchValueField(updates, nextValues);
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

  const resetFields = useCallback(
    (names?: TKeyObjectType<T>[]) => {
      if (!names || names.length === 0) {
        setValues(initialValues);
        setErrors([]);
        setTouchedFields(new Set());
      } else {
        setValues((prev) => {
          let next = { ...prev } as T;
          for (const name of names) {
            const initialValue = getValueObject(initialValues, name);
            next = setValueObject(next, name, initialValue);
          }
          return next;
        });
        setErrors((prev) =>
          prev.filter((error) => !names.some((n) => error.name === n))
        );
        setTouchedFields((prev) => {
          const next = new Set(prev);
          for (const n of names) next.delete(n as string);
          return next;
        });
      }
    },
    [options?.initialValues]
  );

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
          fieldsValue = setValueObject(
            fieldsValue,
            name as TKeyObjectType<Partial<T>>,
            value
          );
        });
        return fieldsValue;
      }
      return values;
    },
    [values]
  );

  const submit = useCallback(async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      await submitCallbackRef.current?.();
    } finally {
      setIsSubmitting(false);
    }
  }, [isSubmitting]);

  const touchField = useCallback((name: TKeyObjectType<T>) => {
    const fieldName = name as string;
    setTouchedFields((prev) => {
      if (prev.has(fieldName)) return prev;
      const next = new Set(prev);
      next.add(fieldName);
      return next;
    });
  }, []);

  const touchFields = useCallback((names: TKeyObjectType<T>[]) => {
    setTouchedFields((prev) => {
      const next = new Set(prev);
      let changed = false;
      for (const n of names) {
        const key = n as string;
        if (!next.has(key)) {
          next.add(key);
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, []);

  const isFieldTouched = useCallback(
    (name: TKeyObjectType<T>) => touchedFields.has(name as string),
    [touchedFields]
  );

  const isFieldsTouched = useCallback(
    (names?: TKeyObjectType<T>[]) => {
      if (!names) return touchedFields.size > 0;
      return names.some((n) => touchedFields.has(n as string));
    },
    [touchedFields]
  );

  const getTouchedFields = useCallback(
    () => Array.from(touchedFields) as TKeyObjectType<T>[],
    [touchedFields]
  );

  const isFieldDirty = useCallback(
    (name: TKeyObjectType<T>) => {
      const current = getValueObject(values, name);
      const initial = getValueObject(initialValues, name);
      return !compareValues(current, initial);
    },
    [values, initialValues, compareValues]
  );

  const isFieldsDirty = useCallback(
    (names?: TKeyObjectType<T>[]) => {
      const fieldNames = names ?? (Object.keys(fields) as TKeyObjectType<T>[]);
      return fieldNames.some((n) => {
        const current = getValueObject(values, n);
        const initial = getValueObject(initialValues, n);
        return !compareValues(current, initial);
      });
    },
    [values, initialValues, fields, compareValues]
  );

  const getDirtyFields = useCallback((): TKeyObjectType<T>[] => {
    const result: TKeyObjectType<T>[] = [];
    for (const key of Object.keys(fields)) {
      const name = key as TKeyObjectType<T>;
      const current = getValueObject(values, name);
      const initial = getValueObject(initialValues, name);
      if (!compareValues(current, initial)) result.push(name);
    }
    return result;
  }, [values, initialValues, fields, compareValues]);

  const setSubmitCallback = useCallback((cb: () => any) => {
    submitCallbackRef.current = cb;
  }, []);

  const onValidateFields = useCallback(async (): Promise<boolean> => {
    setIsValidating(true);
    try {
      const allFieldNames = Object.keys(fields) as TKeyObjectType<T>[];

      const isValid = await triggerValidation(allFieldNames);

      if (!isValid) {
        touchFields(allFieldNames);
      }

      return isValid;
    } finally {
      setIsValidating(false);
    }
  }, [fields, triggerValidation, touchFields]);

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
    setSubmitCallback,
    setValidateMessages,
    isFieldDirty,
    isFieldsDirty,
    isFieldsTouched,
    isFieldTouched,
    isSubmitting,
    isValidating,
    getDirtyFields,
    getTouchedFields,
    touchField,
    touchFields
  };
};
