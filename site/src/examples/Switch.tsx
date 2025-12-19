import { useState } from "react";
import { Switch } from "@quen-ui/components";
import { IconSun, IconMoon } from "@tabler/icons-react";

export const ThumbSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      value={checked}
      onChange={setChecked}
      thumbIcon={checked ? <IconMoon /> : <IconSun />}
    />
  );
}
