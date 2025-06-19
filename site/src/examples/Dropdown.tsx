import React, { useState, useRef } from "react";
import { Button, Dropdown } from "@quen-ui/components";
import { IconEdit, IconTrash, IconShare } from "@tabler/icons-react";

export const ActionMenu = () => {
  const anchorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const actions = [
    { id: 1, label: "Edit", icon: <IconEdit /> },
    { id: 2, label: "Delete", icon: <IconTrash /> },
    { id: 3, label: "Share", icon: <IconShare /> }
  ];

  return (
    <>
      <Button ref={anchorRef} onClick={() => setIsOpen(true)}>
        Actions
      </Button>

      <Dropdown
        anchorRef={anchorRef}
        isOpen={isOpen}
        items={actions}
        onItemClick={(item) => {
          console.log("Selected:", item.label);
          setIsOpen(false);
        }}
        onClickOutside={() => setIsOpen(false)}
      />
    </>
  );
};

export const LanguageSelector = () => {
  const anchorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const languages = [
    { id: 1, name: "English", group: "Popular" },
    { id: 2, name: "Spanish", group: "Popular" },
    { id: 3, name: "Japanese", group: "Asian" },
    { id: 4, name: "Arabic", group: "Middle East" }
  ];

  const handleLanguageSelect = (item: { name: string }): void => {
    alert(item.name);
    setIsOpen(false);
  };

  return (
    <>
      <Button ref={anchorRef} onClick={() => setIsOpen(true)}>
        Language
      </Button>
      <Dropdown
        isOpen={isOpen}
        anchorRef={anchorRef}
        items={languages}
        getItemKey={(item) => item.id}
        getItemLabel={(item) => (
          <div className="language-option">
            <span>{item.name}</span>
          </div>
        )}
        getItemGroupId={(item) => item.group}
        sortGroup={(a, b) => a.localeCompare(b)}
        onItemClick={handleLanguageSelect}
      />
    </>
  );
};

export const NotificationDropdown = () => {
  const anchorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button ref={anchorRef} onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Dropdown
        onClickOutside={() => setIsOpen(false)}
        isOpen={isOpen}
        anchorRef={anchorRef}
        direction="top"
        width="320px"
        content={
          <div className="notification-panel">
            <div className="header">
              <h4>Notifications</h4>
              <Button size="s">Mark all read</Button>
            </div>
            <div className="footer">
              <Button view="ghost">View all</Button>
            </div>
          </div>
        }
      />
    </>
  );
};


export const Disabled = () => {
  const anchorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { id: 1, label: "Enabled action" },
    { id: 2, label: "Disabled action", isDisabled: true }
  ];

  return (
    <>
      <Button ref={anchorRef} onClick={() => setIsOpen(true)}>
        Open
      </Button>

      <Dropdown
        anchorRef={anchorRef}
        isOpen={isOpen}
        items={items}
        onClickOutside={() => setIsOpen(false)}
      />
    </>
  );
};
