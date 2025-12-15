import { useState } from "react";
import { QuenUIProvider } from "@quen-ui/theme";
import type { IRichTextEditorColorPickerProps } from "./types";
import { ColorPicker } from "../ColorPicker";
import { Dropdown } from "../Dropdown";

const RichTextEditorColorControl = ({
  ref,
  onChange,
  onClose,
  color,
  theme
}: IRichTextEditorColorPickerProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <QuenUIProvider theme={theme}>
      <Dropdown
        anchorRef={ref}
        open={open}
        onClickOutside={handleClose}
        content={
          <ColorPicker
            size="s"
            format="hex"
            hideInputs
            onChangeComplete={onChange}
            value={color}
          />
        }
      />
    </QuenUIProvider>
  );
};

export default RichTextEditorColorControl;
