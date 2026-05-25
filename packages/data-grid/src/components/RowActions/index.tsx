import { Button, Flex, type TQuenSize } from "@quen-ui/components";
import { IconCheck, IconX } from "@tabler/icons-react";

interface RowActionsProps {
  isEditing: boolean;
  isSaving: boolean;
  hasErrors: boolean;
  onSave: () => void;
  onCancel: () => void;
  size?: TQuenSize;
}

export function RowActions({
  isEditing,
  isSaving,
  hasErrors,
  onSave,
  onCancel,
  size = "m"
}: RowActionsProps) {
  if (!isEditing) return null;

  return (
    <Flex gap="xs" align="center">
      <Button
        size={size}
        view="primary"
        onClick={onSave}
        disabled={isSaving}
        style={{
          background: hasErrors ? "#fca5a5" : undefined,
          borderColor: hasErrors ? "#ef4444" : undefined
        }}>
        {isSaving ? (
          "Saving..."
        ) : (
          <>
            <IconCheck size={14} /> Save
          </>
        )}
      </Button>
      <Button size={size} view="secondary" onClick={onCancel} disabled={isSaving}>
        <IconX size={14} /> Cancel
      </Button>
    </Flex>
  );
}
