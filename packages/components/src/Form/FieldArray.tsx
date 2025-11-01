import { useEffect } from "react";
import { getValueObject } from "@quen-ui/helpers";
import { useFormContext } from "./Form";
import { IFormFieldArrayHelpers, IFormFieldArrayProps } from "./types";

const FieldArray = <T extends Record<string, any>>({
  name,
  children
}: IFormFieldArrayProps<T>) => {
  const { getFieldsValue, arrayHelpers, registerField, unregisterField } =
    useFormContext();
  const helpers = arrayHelpers(name) as unknown as IFormFieldArrayHelpers<T>;
  const items = getValueObject(getFieldsValue(), name, []);

  useEffect(() => {
    registerField(name, { defaultValue: [] });

    return () => {
      unregisterField(name);
    };
  }, []);

  return <>{children(helpers, items)}</>;
};

export default FieldArray;
