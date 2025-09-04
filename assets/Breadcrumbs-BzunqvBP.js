import{j as e}from"./index-jR0FLVqU.js";import{F as l}from"./styles-B8Yckata.js";import{B as t}from"./Breadcrumbs-CXrVmp7V.js";import{c as r}from"./createReactComponent-R_WhpXRX.js";import{u as o}from"./index-BOxoqHcG.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6",key:"svg-2"}]],c=r("outline","home","Home",d);/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]],a=r("outline","settings","Settings",m),h=()=>{const s=[{id:1,label:"Home",href:"/"},{id:2,label:"Products",href:"/products"},{id:3,label:"Current Page"}];return e.jsx(t,{items:s})},u=()=>{const s=[{id:1,name:"Home",path:"/"},{id:2,name:"Blog",path:"/blog"},{id:3,name:"Post"}];return e.jsx(t,{items:s,getItemLabel:n=>n.name,getItemHref:n=>n.path})},p=()=>{const s=[{id:1,name:"Home",path:"/"},{id:2,name:"Blog",path:"/blog"},{id:3,name:"Post"}];return e.jsx(t,{items:s,getItemLabel:n=>n.name,separator:"→"})},x=()=>{const s=[{id:1,label:"Home",icon:e.jsx(c,{width:16})},{id:2,label:"Settings",icon:e.jsx(a,{width:16})}];return e.jsx(t,{items:s,isOnlyIconRoot:!0})},j=()=>{const s=[{id:1,label:"Home",icon:e.jsx(c,{width:16})},{id:2,label:"Settings",icon:e.jsx(a,{width:16})}];return e.jsxs(l,{gap:8,direction:"column",children:[e.jsx(t,{size:"xs",items:s,isOnlyIconRoot:!0}),e.jsx(t,{size:"s",items:s,isOnlyIconRoot:!0}),e.jsx(t,{size:"m",items:s,isOnlyIconRoot:!0}),e.jsx(t,{size:"l",items:s,isOnlyIconRoot:!0})]})},v={package:"@quen-ui/components",title:"Breadcrumbs",order:1,group:"components",description:"The Breadcrumbs component displays a navigation trail showing the user's location in a hierarchical structure. It supports customizable items, interactive elements, and responsive design.",import:"import { Breadcrumbs } from '@quen-ui/components';",source:"/packages/components/src/Breadcrumbs/Breadcrumbs.tsx"};function i(s){const n={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displays navigation path with clickable items"}),`
`,e.jsxs(n.li,{children:["Configurable item properties: ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"href"}),", ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"onClick"})]}),`
`,e.jsx(n.li,{children:"Supports custom data structures with mapping functions"}),`
`,e.jsxs(n.li,{children:["Adjustable separator (default: ",e.jsx(n.code,{children:"/"}),")"]}),`
`,e.jsxs(n.li,{children:["Multiple size variants (",e.jsx(n.code,{children:"xs"}),", ",e.jsx(n.code,{children:"s"}),", ",e.jsx(n.code,{children:"m"}),", ",e.jsx(n.code,{children:"l"}),")"]}),`
`,e.jsx(n.li,{children:"Optional icon-only root element"}),`
`,e.jsx(n.li,{children:"Fully accessible with ARIA support and keyboard navigation"}),`
`]}),`
`,e.jsx(n.h4,{children:"Basic Usage"}),`
`,e.jsx(n.p,{children:"Breadcrumbs are collected from page names and links to them. You can add an icon from the icon library to any page."}),`
`,e.jsxs(n.p,{children:["All this can be described in the items array of the ",e.jsx(n.code,{children:"IBreadcrumbItemDefault"})," type, it consists of:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"label — page title,"}),`
`,e.jsx(n.li,{children:"icon — icon from [icon library],"}),`
`,e.jsx(n.li,{children:"href — page link,"}),`
`,e.jsx(n.li,{children:"onClick — click event,"}),`
`,e.jsx(n.li,{children:"className - additional classname"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export interface IBreadcrumbItemDefault {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}

export type TBreadcrumbPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type TBreadcrumbPropGetItemHref<ITEM> = (
  item: ITEM
) => string | undefined;
export type TBreadcrumbPropGetItemIcon<ITEM> = (item: ITEM) => React.ReactNode;
export type TBreadcrumbPropGetItemOnClick<ITEM> = (
  item: ITEM
) => React.MouseEventHandler | undefined;
export type TBreadcrumbsPropOnItemClick<ITEM = IBreadcrumbItemDefault> = (
  item: ITEM,
  e: React.MouseEvent
) => void;
export type TBreadcrumbsPropGetItemClassname<ITEM> = (
  item: ITEM
) => string | undefined;
`})}),`
`,e.jsx(h,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function PageNavigation() {
  const items = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Products", href: "/products" },
    { id: 3, label: "Current Page" }
  ];

  return <Breadcrumbs items={items} />;
}
`})}),`
`,e.jsx(n.h4,{children:"Custom items"}),`
`,e.jsxs(n.p,{children:["Breadcrumbs can adapt to custom data structures by using ",e.jsx(n.code,{children:"getItemLabel"}),", ",e.jsx(n.code,{children:"getItemHref"}),", and other mapping props. This is helpful when integrating with APIs or existing data models."]}),`
`,e.jsx(u,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const items = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Blog', path: '/blog' },
  { id: 3, name: 'Post' }
];

<Breadcrumbs
  items={items}
  getItemLabel={(item) => item.name}
  getItemHref={(item) => item.path}
/>
`})}),`
`,e.jsx(n.h4,{children:"With custom separator"}),`
`,e.jsx(n.p,{children:"By default, breadcrumbs use / as a separator. You can replace it with any string or component (e.g., →, >)."}),`
`,e.jsx(p,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const items = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Blog', path: '/blog' },
  { id: 3, name: 'Post' }
];

<Breadcrumbs
  items={items}
  getItemLabel={(item) => item.name}
  separator={"→"}
/>
`})}),`
`,e.jsx(n.h4,{children:"With icons"}),`
`,e.jsxs(n.p,{children:["Items can include icons for better recognition. You can also set ",e.jsx(n.code,{children:"isOnlyIconRoot"}),' to show only an icon for the root element (commonly "Home").']}),`
`,e.jsx(x,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:` const items = [
    { id: 1, label: 'Home', icon: <IconHome /> },
    { id: 2, label: 'Settings', icon: <IconSettings /> }
  ];

  return (
    <Breadcrumbs
      items={items}
      isOnlyIconRoot
    />
  );
`})}),`
`,e.jsx(n.h4,{children:"Size variants"}),`
`,e.jsxs(n.p,{children:["Breadcrumbs support multiple sizes (",e.jsx(n.code,{children:"xs"}),", ",e.jsx(n.code,{children:"s"}),", ",e.jsx(n.code,{children:"m"}),", ",e.jsx(n.code,{children:"l"}),"). Smaller sizes fit compact UIs like toolbars, while larger ones are suitable for spacious layouts."]}),`
`,e.jsx(j,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const items = [
    { id: 1, label: "Home", icon: <IconHome width={16} /> },
    { id: 2, label: "Settings", icon: <IconSettings width={16} /> }
  ];

 <Flex gap={8} direction="column">
  <Breadcrumbs size="xs" items={items} isOnlyIconRoot />
  <Breadcrumbs size="s" items={items} isOnlyIconRoot />
  <Breadcrumbs size="m" items={items} isOnlyIconRoot />
  <Breadcrumbs size="l" items={items} isOnlyIconRoot />
 </Flex>
`})}),`
`,e.jsx(n.h4,{children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Semantic HTML structure with ",e.jsx(n.code,{children:"<nav>"})," and ARIA labels"]}),`
`,e.jsx(n.li,{children:"Keyboard navigable: users can tab through breadcrumb links"}),`
`,e.jsx(n.li,{children:"Focus styles for interactive elements"}),`
`,e.jsx(n.li,{children:"Screen reader support for current page indicator"}),`
`]}),`
`,e.jsx(n.h4,{children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep trails short: Limit breadcrumbs to 2–5 items for readability."}),`
`,e.jsx(n.li,{children:"Make only the last item inactive: All previous items should be clickable."}),`
`,e.jsx(n.li,{children:"Use clear labels: Avoid abbreviations unless they are universally understood."}),`
`,e.jsx(n.li,{children:"Mobile responsiveness: Consider truncating long breadcrumb trails on smaller screens."}),`
`,e.jsx(n.li,{children:"Use icons sparingly: Icons should add clarity, not noise."}),`
`]}),`
`,e.jsx(n.h4,{children:"Troubleshooting"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Links not working: Ensure getItemHref returns a valid URL or href is set."}),`
`,e.jsx(n.li,{children:"Custom data not rendering: Double-check getItemLabel and mapping functions."}),`
`,e.jsx(n.li,{children:"Separator not showing: Pass a valid string or React node to separator."}),`
`,e.jsx(n.li,{children:"Accessibility warnings: Make sure label is always provided, even when using icons."}),`
`]})]})}function B(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{B as default,v as frontmatter};
