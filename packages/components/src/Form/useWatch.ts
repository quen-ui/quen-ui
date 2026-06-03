import { useState, useEffect } from "react";
import { type TKeyObjectType, type TValueObjectType } from "@quen-ui/helpers";
import type { IFormInstance, TFormFieldSubscribe } from "./types";

export const useWatch = <
  T extends Record<string, any>,
  P extends TKeyObjectType<T>
>(name: P, form: IFormInstance<T>) => {
  const [value, setValue] = useState(form.getFieldValue(name));

  useEffect(() => {
    const callback: TFormFieldSubscribe<T> = (newValue) => {
      setValue(newValue);
    };

    form.registerSubscribe(name, callback);

    return () => {
      form.unregisterSubscribe(name, callback);
    };
  }, []);

  return value as TValueObjectType<T, P>;
};
