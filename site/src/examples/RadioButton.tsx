import React from "react";
import { RadioButton, Flex } from "@quen-ui/components";
import { IconFlag } from "@tabler/icons-react";

const complexOptions = [
  { code: "en", title: "English", icon: <IconFlag /> },
  { code: "fr", title: "French", disabled: true }
];

export const LanguageSelect = () => {
  return (
    <RadioButton.Group
      options={complexOptions}
      direction="horizontal"
      getItemValue={(item) => item.code}
      getItemLabel={(item) => (
        <Flex align="center">
          {item.icon}
          <span>{item.title}</span>
        </Flex>
      )}
      getItemDisabled={(item) => item.disabled}
    />
  );
}
