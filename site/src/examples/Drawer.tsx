import React, { useState } from "react";
import { Drawer, Button, Alert, Flex, IDrawerProps } from "@quen-ui/components";
import { IconXboxX, IconArrowLeft } from "@tabler/icons-react";
import CheckboxGroup from "@quen-ui/components/src/Checkbox/CheckboxGroup";

export const SettingsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Settings</Button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        size="m"
        title="User Settings">
        Settings Form
      </Drawer>
    </>
  );
};

export const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setMenuOpen(true)}>Open Navigation</Button>
      <Drawer
        isOpen={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        position="bottom"
        size="full"
        title="Navigation"
        closeIcon={<IconXboxX />}>
        MobileNavigation
      </Drawer>
    </>
  );
};

export const LeftAlign = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setNavOpen(true)}>Open Navigation</Button>
      <Drawer
        isOpen={isNavOpen}
        onClose={() => setNavOpen(false)}
        position="left"
        size="s"
        title={
          <div className="logo-header">
            <span>Navigation</span>
          </div>
        }
        noCloseOnClickOutside>
        Menu
      </Drawer>
    </>
  );
};

export const TopNotifications = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Notifications</Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        position="top"
        size="s"
        zIndex={200}>
        <Flex gap={8} direction="column">
          <Alert
            title="Heads up!"
            description="This is an informational message."
            type="info"
          />
          <Alert
            title="Storage almost full"
            description="You are using 95% of your storage capacity."
            type="warning"
            isClosable
            action={<Button size="s">Upgrade Plan</Button>}
          />
        </Flex>
      </Drawer>
    </>
  );
};

export const CustomClose = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Navigation</Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        position="left"
        size="s"
        closeIcon={
          <Button view="ghost" size="s">
            <IconArrowLeft />
            Continue Shopping
          </Button>
        }
        noCloseOnClickOutside>
        <CheckboxGroup
          options={[
            { label: "option 1", value: "1" },
            { label: "option 2", value: "2" }
          ]}
        />
      </Drawer>
    </>
  );
};

export const Sizing = () => {
  const [currentSize, setSize] = useState<IDrawerProps["size"]>();

  return (
    <div>
      <Flex gap={16}>
        <Button onClick={() => setSize("xs")}>XS</Button>
        <Button onClick={() => setSize("s")}>S</Button>
        <Button onClick={() => setSize("m")}>M</Button>
        <Button onClick={() => setSize("l")}>L</Button>
      </Flex>

      <Drawer
        isOpen={!!currentSize}
        onClose={() => setSize(undefined)}
        size={currentSize}
        title={`${currentSize} Drawer`}>
        <p>Current size: {currentSize}</p>
      </Drawer>
    </div>
  );
};
