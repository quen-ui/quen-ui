import React, { useState } from "react";
import { Checkbox } from "@quen-ui/components";
import { IconFlag } from "@tabler/icons-react";

export const BaseUsageGroup = () => {
  const [selected, setSelected] = useState([1]);
  const options = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" }
  ];

  const handleChange = (values: number[]): void => {
    console.log(values);
    setSelected(values);
  }

  return (
    <Checkbox.Group
      options={options}
      value={selected}
      onChange={handleChange}
      getItemValue={(item) => item.id}
      getItemLabel={(item) => item.name}
      label="Select preferences"
    />
  );
};

export const AdvancedGroup = () => {
  const complexOptions = [
    { code: 'en', title: 'English', icon: <IconFlag width={16} height={16}/> },
    { code: 'fr', title: 'French', disabled: true }
  ];

  return (
    <Checkbox.Group
      options={complexOptions}
      direction="horizontal"
      getItemValue={item => item.code}
      getItemLabel={item => (
        <div className="language-option">
          {item.icon}
          <span>{item.title}</span>
        </div>
      )}
      getItemDisabled={item => item.disabled}
    />
  )
}

export const SelectAllPattern = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const items = ['A', 'B', 'C'];

  const allSelected = selected.length === items.length;
  const someSelected = selected.length > 0 && !allSelected;

  return (
    <div>
      <Checkbox
        isChecked={allSelected}
        isIntermediate={someSelected}
        onChange={(checked) => {
          setSelected(checked ? [...items] : []);
        }}
        label="Select all"
      />

      <Checkbox.Group
        options={items}
        getItemLabel={(item) => item}
        getItemValue={(item) => item}
        value={selected}
        onChange={setSelected}
        direction="vertical"
      />
    </div>
  );
}
