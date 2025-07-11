import React, { useState } from "react";
import { Modal, Button, Flex, TextField } from "@quen-ui/components";

const ModalContent = (): React.ReactElement => (
  <Flex direction="column" gap="m">
    <TextField label="First Name" isRequired />
    <TextField label="Last Name" isRequired />
    <TextField label="Email" isRequired />
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
        footer={<Button onClick={() => setModalOpen(false)}>Yes</Button>}
      />
    </>
  );
};

export const ModalSizing = (): React.ReactElement => {
  const [modalSize, setModalSize] = useState<string | null>(null);
  console.log(modalSize);
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
        <ModalContent />
      </Modal>
      <Modal
        size="s"
        isOpen={modalSize === "s"}
        isCloseButton
        onClickClose={() => setModalSize(null)}
        title="Small Modal">
        <ModalContent />
      </Modal>
      <Modal
        size="m"
        isOpen={modalSize === "m"}
        isCloseButton
        onClickClose={() => setModalSize(null)}
        title="Default Modal">
        <ModalContent />
      </Modal>
      <Modal
        size="l"
        isOpen={modalSize === "l"}
        isCloseButton
        onClickClose={() => setModalSize(null)}
        title="Large Modal">
        <ModalContent />
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
        onEsc={() => setModalOpen(false)}
        isCloseButton
        isOpen={modalOpen}
        isFullScreen
        title="Full Screen Modal"
        onClickClose={() => setModalOpen(false)}>
        <p>Content that spans the entire viewport height and width.</p>
      </Modal>
    </>
  );
};
