import React, { useState } from "react";
import { Modal, Button, Flex, TextField, TQuenSize } from "@quen-ui/components";

const ModalContent = ({
  size = "m"
}: {
  size?: TQuenSize;
}): React.ReactElement => (
  <Flex direction="column" gap="m">
    <TextField size={size} label="First Name" isRequired />
    <TextField size={size} label="Last Name" isRequired />
    <TextField size={size} label="Email" isRequired />
  </Flex>
);

export const ModalBase = (): React.ReactElement => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Modal open</Button>
      <Modal
        isOpen={modalOpen}
        onClickClose={() => setModalOpen(false)}
        title="Confirmation"
        description="Are you sure you want to proceed?"
        footer={
          <Flex gap="m" justify="center" style={{ width: "100%" }}>
            <Button onClick={() => setModalOpen(false)}>Yes</Button>
            <Button view="secondary" onClick={() => setModalOpen(false)}>
              No
            </Button>
          </Flex>
        }
      />
    </>
  );
};

export const ModalSizing = (): React.ReactElement => {
  const [modalSize, setModalSize] = useState<string | null>(null);
  return (
    <>
      <Flex gap="m">
        <Button onClick={() => setModalSize("xs")}>xs</Button>
        <Button onClick={() => setModalSize("s")}>s</Button>
        <Button onClick={() => setModalSize("m")}>m</Button>
        <Button onClick={() => setModalSize("l")}>l</Button>
      </Flex>
      <Modal
        size="xs"
        isOpen={modalSize === "xs"}
        isCloseButton
        onClickClose={() => setModalSize(null)}
        title="Mini Modal">
        <ModalContent size="xs" />
      </Modal>
      <Modal
        size="s"
        isOpen={modalSize === "s"}
        isCloseButton
        onClickClose={() => setModalSize(null)}
        title="Small Modal">
        <ModalContent size="s" />
      </Modal>
      <Modal
        size="m"
        isOpen={modalSize === "m"}
        isCloseButton
        onClickClose={() => setModalSize(null)}
        title="Default Modal">
        <ModalContent size="m" />
      </Modal>
      <Modal
        size="l"
        isOpen={modalSize === "l"}
        isCloseButton
        onClickClose={() => setModalSize(null)}
        title="Large Modal">
        <ModalContent size="l" />
      </Modal>
    </>
  );
};

export const ModalFullScreen = (): React.ReactElement => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Modal open</Button>
      <Modal
        footer={
          <Flex gap="m" justify="flex-end" style={{ width: "100%" }}>
            <Button onClick={() => setModalOpen(false)}>Save</Button>
            <Button view="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
          </Flex>
        }
        onEsc={() => setModalOpen(false)}
        isCloseButton
        isOpen={modalOpen}
        isFullScreen
        title="Full Screen Modal"
        description="It takes the entire screen and does not not have overlay and border-radius, you can use it small screens to save up some space."
        onClickClose={() => setModalOpen(false)}>
        <Flex direction="column" gap="m">
          <Flex gap="m">
            <TextField label="First Name" isRequired />
            <TextField label="Last Name" isRequired />
          </Flex>
          <TextField label="Email" isRequired type="email" />
          <TextField label="Password" isRequired type="password" />
        </Flex>
      </Modal>
    </>
  );
};
