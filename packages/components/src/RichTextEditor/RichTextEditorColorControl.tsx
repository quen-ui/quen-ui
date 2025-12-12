import { useState } from "react";
import type { IRichTextEditorColorPickerProps } from "./types";
import { ColorPicker } from "../ColorPicker";
import { Dropdown } from "../Dropdown";

const RichTextEditorColorControl = ({
  ref,
  onChange,
  onClose,
  color
}: IRichTextEditorColorPickerProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  }

  return (
    <Dropdown
      anchorRef={ref}
      open={open}
      onClickOutside={handleClose}
      content={<ColorPicker size="s" format="hex" hideInputs onChangeComplete={onChange} value={color} />}
    />
  );
};

export default RichTextEditorColorControl;
