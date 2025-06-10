import React from "react";
import { Breadcrumbs, Flex } from "@quen-ui/components";
import { IconHome, IconSettings } from "@tabler/icons-react";

export const BaseUsage = () => {
  const items = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Products", href: "/products" },
    { id: 3, label: "Current Page" }
  ];

  return <Breadcrumbs items={items} />;
};

export const CustomItems = () => {
  const items = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Blog", path: "/blog" },
    { id: 3, name: "Post" }
  ];

  return (
    <Breadcrumbs
      items={items}
      getItemLabel={(item) => item.name}
      getItemHref={(item) => item.path}
    />
  );
};

export const CustomSeparator = () => {
  const items = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Blog", path: "/blog" },
    { id: 3, name: "Post" }
  ];

  return (
    <Breadcrumbs
      items={items}
      getItemLabel={(item) => item.name}
      separator={"→"}
    />
  );
};

export const WithIcons = () => {
  const items = [
    { id: 1, label: "Home", icon: <IconHome width={16} /> },
    { id: 2, label: "Settings", icon: <IconSettings width={16} /> }
  ];

  return <Breadcrumbs items={items} isOnlyIconRoot />;
};

export const Sizes = () => {
  const items = [
    { id: 1, label: "Home", icon: <IconHome width={16} /> },
    { id: 2, label: "Settings", icon: <IconSettings width={16} /> }
  ];

  return (
    <Flex gap={8} direction="column">
      <Breadcrumbs size="xs" items={items} isOnlyIconRoot />
      <Breadcrumbs size="s" items={items} isOnlyIconRoot />
      <Breadcrumbs size="m" items={items} isOnlyIconRoot />
      <Breadcrumbs size="l" items={items} isOnlyIconRoot />
    </Flex>
  );
};
