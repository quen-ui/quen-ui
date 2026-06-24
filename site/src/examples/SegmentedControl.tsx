import { useState } from "react";
import { SegmentedControl, Flex } from "@quen-ui/components";
import { IconList, IconMap, IconGridDots } from "@tabler/icons-react";

export const BasicDemo = () => {
  const [value, setValue] = useState("day");

  const options = [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
    { value: "year", label: "Year" }
  ];

  return (
    <SegmentedControl options={options} value={value} onChange={setValue} />
  );
};

export const SizeDemo = () => {
  return (
    <Flex direction="column" gap="m" align="flex-start">
      <SegmentedControl
        size="xs"
        options={[
          { value: "1", label: "XS 1" },
          { value: "2", label: "XS 2" }
        ]}
        value="1"
        onChange={() => {}}
      />
      <SegmentedControl
        size="s"
        options={[
          { value: "1", label: "S 1" },
          { value: "2", label: "S 2" }
        ]}
        value="1"
        onChange={() => {}}
      />
      <SegmentedControl
        size="m"
        options={[
          { value: "1", label: "M 1" },
          { value: "2", label: "M 2" }
        ]}
        value="1"
        onChange={() => {}}
      />
      <SegmentedControl
        size="l"
        options={[
          { value: "1", label: "L 1" },
          { value: "2", label: "L 2" }
        ]}
        value="1"
        onChange={() => {}}
      />
    </Flex>
  );
};

export const IconDemo = () => {
  const [value, setValue] = useState("list");
  const options = [
    { value: "list", label: "List", icon: <IconList size={16} /> },
    { value: "grid", label: "Grid", icon: <IconGridDots size={16} /> },
    { value: "map", label: "Map", icon: <IconMap size={16} /> }
  ];
  return (
    <SegmentedControl options={options} value={value} onChange={setValue} />
  );
};

export const DisabledDemo = () => {
  const [value, setValue] = useState("active");
  const options = [
    { value: "active", label: "Active" },
    { value: "disabled", label: "Disabled Item", disabled: true },
    { value: "another", label: "Another Active" }
  ];
  return (
    <Flex direction="column" gap="m">
      <SegmentedControl options={options} value={value} onChange={setValue} />
      <SegmentedControl
        options={options}
        value={value}
        onChange={setValue}
        disabled
      />
    </Flex>
  );
}
