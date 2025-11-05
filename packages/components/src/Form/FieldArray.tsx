import { useEffect } from "react";
import { getValueObject, TKeyObjectType, TValueObjectType } from "@quen-ui/helpers";
import { useFormContext } from "./Form";
import { IFormFieldArrayProps } from "./types";

const FieldArray = <T extends Record<string, any> = Record<string, any>>({
  name,
  children
}: IFormFieldArrayProps<T>) => {
  const { getFieldsValue, arrayHelpers, registerField, unregisterField } =
    useFormContext();
  const helpers = arrayHelpers(name) as any;
  const items = getValueObject(getFieldsValue(), name, []) as TValueObjectType<T, TKeyObjectType<T>>[];

  useEffect(() => {
    registerField(name, { defaultValue: [] });

    return () => {
      unregisterField(name);
    };
  }, []);

  return <>{children(helpers, items)}</>;
};

export default FieldArray;
