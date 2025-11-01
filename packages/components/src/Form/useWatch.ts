import { useState, useEffect } from "react";
import { type TKeyObjectType, type TValueObjectType } from "@quen-ui/helpers";
import type { IFormInstance } from "./types";

export const useWatch = <
  T extends Record<string, any>,
  P extends TKeyObjectType<T>
>(name: P, form: IFormInstance<T>) => {
  const [value, setValue] = useState(form.getFieldValue(name));

  useEffect(() => {
    form.registerSubscribe(name, setValue);

    return () => {
      form.unregisterSubscribe(name);
    }
  }, []);

  return value as TValueObjectType<T, P>;
};
