import TabsComponent from "./Tabs";
import TabsList from "./TabsList";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

type TTabs = typeof TabsComponent & {
  Tab: typeof Tab;
  TabsList: typeof TabsList;
  TabPanel: typeof TabPanel;
};

const Tabs = TabsComponent as TTabs;
Tabs.TabPanel = TabPanel;
Tabs.TabsList = TabsList;
Tabs.Tab = Tab;

export type { ITabPanelProps, ITabsListProps, ITabsProps, ITabProps } from "./types";

export default Tabs;
