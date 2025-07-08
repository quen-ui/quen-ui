import React, { useState } from "react";
import {IconCurrencyDollar } from "@tabler/icons-react";
import { InputNumber } from "@quen-ui/components";

export const InoutNumberWithRightContent = () => {
  const [value, setValue] = useState<number>(0);
  return (
    <InputNumber
      label="Discount Rate"
      min={0}
      max={105}
      step={5}
      onChange={(value) => setValue(Number(value))}
      isAllowNegative={false}
      rightContent="%"
      placeholder="0-100"
      error={value > 100 ? "Cannot exceed 100%" : undefined}
    />
  )
}

export const PriceInput = () => {
  const [price, setPrice] = useState<number | null>(null);

  return (
    <InputNumber
      label="Product Price"
      value={price}
      onChange={(value) => setPrice(value ? Number(value) : null)}
      isClearable
      isRequired
      error={price === null && "Price is required"}
      leftContent={<IconCurrencyDollar />}
    />
  );
}
