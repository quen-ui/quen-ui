import{r as i,j as n}from"./index-jR0FLVqU.js";import{B as a}from"./styles-B8Yckata.js";import{D as l}from"./Dropdown-D1-BEjKu.js";import{c as d}from"./createReactComponent-R_WhpXRX.js";import{u}from"./index-BOxoqHcG.js";import"./useTransitionState-DSLsPxYc.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",key:"svg-0"}],["path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",key:"svg-1"}],["path",{d:"M16 5l3 3",key:"svg-2"}]],g=d("outline","edit","Edit",h);/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-1"}],["path",{d:"M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-2"}],["path",{d:"M8.7 10.7l6.6 -3.4",key:"svg-3"}],["path",{d:"M8.7 13.3l6.6 3.4",key:"svg-4"}]],I=d("outline","share","Share",f);/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]],j=d("outline","trash","Trash",x),b=()=>{const t=i.useRef(null),[e,s]=i.useState(!1),r=[{id:1,label:"Edit",icon:n.jsx(g,{})},{id:2,label:"Delete",icon:n.jsx(j,{})},{id:3,label:"Share",icon:n.jsx(I,{})}];return console.log(11111,t),n.jsxs(n.Fragment,{children:[n.jsx(a,{ref:t,onClick:()=>s(!0),children:"Actions"}),n.jsx(l,{anchorRef:t,isOpen:e,items:r,onItemClick:c=>{console.log("Selected:",c.label),s(!1)},onClickOutside:()=>s(!1)})]})},w=()=>{const t=i.useRef(null),[e,s]=i.useState(!1),r=[{id:1,name:"English",group:"Popular"},{id:2,name:"Spanish",group:"Popular"},{id:3,name:"Japanese",group:"Asian"},{id:4,name:"Arabic",group:"Middle East"}],c=o=>{alert(o.name),s(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(a,{ref:t,onClick:()=>s(!0),children:"Language"}),n.jsx(l,{isOpen:e,anchorRef:t,items:r,getItemKey:o=>o.id,getItemLabel:o=>n.jsx("div",{className:"language-option",children:n.jsx("span",{children:o.name})}),getItemGroupId:o=>o.group,sortGroup:(o,m)=>o.localeCompare(m),onItemClick:c})]})},D=()=>{const t=i.useRef(null),[e,s]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(a,{ref:t,onClick:()=>s(!0),children:"Open"}),n.jsx(l,{onClickOutside:()=>s(!1),isOpen:e,anchorRef:t,direction:"top",width:"320px",content:n.jsxs("div",{className:"notification-panel",children:[n.jsxs("div",{className:"header",children:[n.jsx("h4",{children:"Notifications"}),n.jsx(a,{size:"s",children:"Mark all read"})]}),n.jsx("div",{className:"footer",children:n.jsx(a,{view:"ghost",children:"View all"})})]})})]})},k=()=>{const t=i.useRef(null),[e,s]=i.useState(!1),r=[{id:1,label:"Enabled action"},{id:2,label:"Disabled action",isDisabled:!0}];return n.jsxs(n.Fragment,{children:[n.jsx(a,{ref:t,onClick:()=>s(!0),children:"Open"}),n.jsx(l,{anchorRef:t,isOpen:e,items:r,onClickOutside:()=>s(!1)})]})},T={package:"@quen-ui/components",title:"Dropdown",order:1,group:"components",description:"The Dropdown component creates a contextual overlay menu that appears near an anchor element. It provides a flexible solution for displaying actions, options, or content in a space-efficient manner, ideal for navigation menus, action lists, and context menus.",import:"import { Dropdown } from '@quen-ui/components';",source:"/packages/components/src/Dropdown/Dropdown.tsx"};function p(t){const e={code:"code",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...u(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h4,{children:"Basic action menu"}),`
`,n.jsx(e.p,{children:`A basic contextual menu with icon-based actions.
Closes automatically when an item is selected or when clicking outside.
Best used for inline action menus such as row-level operations in tables.`}),`
`,n.jsx(b,{}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const ActionMenu = () => {
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
}
`})}),`
`,n.jsx(e.h4,{children:"Grouped options with sorting"}),`
`,n.jsx(e.p,{children:`A dropdown with grouped items and alphabetical sorting of groups.
This pattern improves usability for lists of categorized options such as languages, filters, or categories.`}),`
`,n.jsx(w,{}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const LanguageSelector = () => {
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
`})}),`
`,n.jsx(e.h4,{children:"Custom content dropdown"}),`
`,n.jsx(e.p,{children:`Replaces the default item list with custom JSX content.
Ideal for complex panels such as notifications, search results, or user profiles.
Supports full width/height customization for layout control.`}),`
`,n.jsx(D,{}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const NotificationDropdown = () => {
  const anchorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button ref={anchorRef} onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Dropdown
        isOpen={isOpen}
        anchorRef={anchorRef}
        direction="top"
        width="320px"
        height="400px"
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
`})}),`
`,n.jsx(e.h4,{children:"Disabled states"}),`
`,n.jsxs(e.p,{children:["Supports both item-level disabling and global disabling (",n.jsx(e.code,{children:"isDisabled"}),`).
Disabled items are visually distinct, inaccessible via keyboard, and cannot be clicked.`]}),`
`,n.jsx(k,{}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const Disabled = () => {
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
`})}),`
`,n.jsx(e.h4,{children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Keyboard navigation:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"↑/↓ arrows: move between items"}),`
`,n.jsxs(e.li,{children:[n.jsx("kbd",{children:"Enter"})," / ",n.jsx("kbd",{children:"Space"}),": select item"]}),`
`,n.jsxs(e.li,{children:[n.jsx("kbd",{children:"Esc"}),": close dropdown"]}),`
`,n.jsxs(e.li,{children:[n.jsx("kbd",{children:"Tab"}),": move focus through interactive elements"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Focus management:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Focus moves to the first item when opened"}),`
`,n.jsx(e.li,{children:"Focus returns to anchor when closed"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{children:"Best practices"}),`
`,n.jsx(e.h5,{children:"When to use"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Contextual action menus (edit, delete, share)"}),`
`,n.jsx(e.li,{children:"Filter or sorting options in lists/tables"}),`
`,n.jsx(e.li,{children:"Navigation submenus"}),`
`,n.jsx(e.li,{children:"Complex panels like notifications, search, quick actions"}),`
`,n.jsx(e.li,{children:"Form selection controls where inline dropdowns are appropriate"}),`
`]}),`
`,n.jsx(e.h5,{children:"When to avoid"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Primary navigation (use Sidebar or Tabs)"}),`
`,n.jsx(e.li,{children:"Critical actions (use Modal for confirmation)"}),`
`,n.jsx(e.li,{children:"Large content areas (use Drawer)"}),`
`,n.jsx(e.li,{children:"Mobile-first flows (prefer native menus for better UX)"}),`
`]}),`
`,n.jsx(e.h4,{children:"API"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const direction = [
  "bottomLeft",
  "bottomRight",
  "topLeft",
  "topRight",
  "bottom",
  "top",
  "left",
  "right"
] as const;

type TDropdownDirection = (typeof direction)[number];

type TDropdownOnClick<Item> = (item: Item, event: React.MouseEvent) => void;

type TDropdownSortGroup = (
  a: string,
  b: string
) => number;

interface IDropdownDefaultItem {
  key?: string | number;
  label: React.ReactNode;
  leftContent?: React.ReactNode;
  isDisabled?: boolean;
  onClick?: TDropdownOnClick<IDropdownDefaultItem>;
  groupId?: string;
}

interface IDropdownMappersItem<ITEM> {
  /** Label renderer */
  getItemLabel?: TDropdownGetItemLabel<ITEM>;
  /** Unique key extractor */
  getItemKey?: TDropdownGetItemKey<ITEM>;
  /** Disable state checker */
  getItemDisabled?: TDropdownGetItemDisabled<ITEM>;
  getItemLeftContent?: TDropdownGetItemLeftContent<ITEM>;
  /** Group identifier */
  getItemGroupId?: TDropdownGetItemGroupId<ITEM>;
  getItemOnClick?: TDropdownGetItemOnClick<ITEM>;
}

type TDropdownGetItemLabel<Item> = (item: Item) => React.ReactNode;

type TDropdownGetItemKey<Item> = (
  item: Item
) => string | number | undefined;

type TDropdownGetItemDisabled<Item> = (
  item: Item
) => boolean | undefined;

type TDropdownGetItemLeftContent<Item> = (
  item: Item
) => React.ReactNode | undefined;

type TDropdownGetItemGroupId<Item> = (
  item: Item
) => string | undefined;

type TDropdownGetItemOnClick<Item> = (
  item: Item
) => TDropdownOnClick<Item> | undefined;

type TDropdownItemProps<ITEM> = Omit<
  IDropdownMappersItem<ITEM>,
  "getItemKey" | "getItemGroupId"
> &
  Required<Pick<IDropdownMappersItem<ITEM>, "getItemLabel">> & {
  item: ITEM;
  onItemClick?: TDropdownOnClick<ITEM>;
  size: TQuenSize;
};

`})})]})}function S(t={}){const{wrapper:e}={...u(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(p,{...t})}):p(t)}export{S as default,T as frontmatter};
