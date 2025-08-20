import React, { useState } from "react";
import { Button, Tooltip } from "@quen-ui/components";

export const TooltipControlledVisibility = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <Tooltip
      text="Custom controlled tooltip"
      isOpen={showTooltip}
      position="top">
      <Button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}>
        Hover me
      </Button>
    </Tooltip>
  );
};
