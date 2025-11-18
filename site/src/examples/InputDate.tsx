import { InputDate } from "@quen-ui/components";
import { useState } from "react";

export const InputDateValueFormatter = () => {
  const [value, setValue] = useState<string[]>([]);

  const formatter = (date: string) => {
    if (value.length === 0) {
      return date;
    }
    return `${value.length} dates selected`;
  };

  return (
    <InputDate
      valueFormatter={formatter}
      onChange={(v) => v && setValue((prev) => [...prev, v])}
      getDayProps={(date) => {
        return {
          isSelected: value.includes(date.toLocaleDateString("en-CA"))
        };
      }}
    />
  );
};
