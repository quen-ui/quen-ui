import { Menu } from "@quen-ui/components";

export const DynamicItemsMenu = () => {
  const dynamicItems = [
    { id: 1, name: "First", locked: false },
    { id: 2, name: "Second", locked: true }
  ];

  return (
    <Menu
      items={dynamicItems}
      getItemKey={(item) => String(item.id)}
      getItemLabel={(item) => item.name}
      getItemDisabled={(item) => item.locked}
    />
  );
};
