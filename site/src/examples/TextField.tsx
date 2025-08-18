import React, { useState } from "react";
import { TextField, Button } from "@quen-ui/components";
import { IconEyeOff, IconEye } from "@tabler/icons-react";

export const TextFieldPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      label="Password"
      type={showPassword ? "text" : "password"}
      rightContent={
        <Button view="icon" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <IconEyeOff /> : <IconEye />}
        </Button>
      }
    />
  );
};
