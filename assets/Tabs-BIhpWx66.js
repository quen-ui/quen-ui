import{j as e}from"./index-jR0FLVqU.js";import{T as i}from"./Title-DYSXEtp2.js";import{c as s}from"./styles-B8Yckata.js";import{B as l}from"./Badge-wDsJ4EGH.js";import{u as d}from"./index-BOxoqHcG.js";import{I as r}from"./IconBell-sdGRtalo.js";import{c as b}from"./createReactComponent-R_WhpXRX.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]],o=b("outline","mail","Mail",h),f={package:"@quen-ui/components",title:"Tabs",order:1,group:"components",description:"The Tabs component family provides a tabbed interface for content organization. Features include keyboard navigation, customizable tab headers, and efficient rendering with lazy-load support. Ideal for dashboards, settings panels, and content sections.",import:"import { Tabs } from '@quen-ui/components';",source:"/packages/components/src/Tabs",demo:!1};function c(a){const n={code:"code",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...a.components};return s||t("Tabs",!1),s.Tab||t("Tabs.Tab",!0),s.TabPanel||t("Tabs.TabPanel",!0),s.TabsList||t("Tabs.TabsList",!0),e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Usage examples"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"Tabs"})," to organize related content into multiple sections. Each ",e.jsx(n.code,{children:"Tab"})," is linked with a ",e.jsx(n.code,{children:"TabPanel"})," through the ",e.jsx(n.code,{children:"value"})," prop."]}),`
`,e.jsxs(s,{defaultValue:"dashboard",children:[e.jsxs(s.TabsList,{className:"p-remove-margin",children:[e.jsx(s.Tab,{value:"dashboard",children:"Dashboard"}),e.jsx(s.Tab,{value:"analytics",children:"Analytics"})]}),e.jsx(s.TabPanel,{value:"dashboard",children:e.jsx(i,{size:"m",children:"Dashboard"})}),e.jsx(s.TabPanel,{value:"analytics",children:e.jsx(i,{size:"m",children:"Analytics"})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tabs defaultValue="dashboard">
  <Tabs.TabsList>
    <Tabs.Tab value="dashboard">Dashboard</Tabs.Tab>
    <Tabs.Tab value="analytics">Analytics</Tabs.Tab>
  </Tabs.TabsList>

  <Tabs.TabPanel value="dashboard">
    <Title size="m">Dashboard</Title>
  </Tabs.TabPanel>

  <Tabs.TabPanel value="analytics">
    <Title size="m">Analytics</Title>
  </Tabs.TabPanel>
</Tabs>
`})}),`
`,e.jsx(n.h5,{children:"Styled tabs with icons and badges"}),`
`,e.jsxs(n.p,{children:["Tabs can include icons or additional content (e.g. counters, badges). Use ",e.jsx(n.code,{children:"leftContent"})," and ",e.jsx(n.code,{children:"rightContent"})," props to decorate tab labels."]}),`
`,e.jsxs(s.TabsList,{justify:"space-between",className:"p-remove-margin",children:[e.jsx(s.Tab,{value:"notifications",leftContent:e.jsx(r,{}),children:e.jsx(n.p,{children:"Alerts"})}),e.jsx(s.Tab,{value:"messages",leftContent:e.jsx(o,{}),rightContent:e.jsx(l,{children:"3"}),children:e.jsx(n.p,{children:"Messages"})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tabs.TabsList justify="space-between">
  <Tabs.Tab value="notifications" leftContent={<IconBell />}>
    Alerts
  </Tabs.Tab>

  <Tabs.Tab
    value="messages"
    leftContent={<IconMail />}
    rightContent={<Badge>3</Badge>}>
    Messages
  </Tabs.Tab>
</Tabs.TabsList>
`})}),`
`,e.jsx(n.h5,{children:"Disabled tab"}),`
`,e.jsxs(n.p,{children:["Disable a tab with ",e.jsx(n.code,{children:"isDisabled"})," to prevent interaction. Disabled tabs remain visible but cannot be selected."]}),`
`,e.jsxs(s.TabsList,{justify:"space-between",className:"p-remove-margin",children:[e.jsx(s.Tab,{value:"notifications",leftContent:e.jsx(r,{}),children:e.jsx(n.p,{children:"Alerts"})}),e.jsx(s.Tab,{isDisabled:!0,value:"messages",leftContent:e.jsx(o,{}),rightContent:e.jsx(l,{children:"3"}),children:e.jsx(n.p,{children:"Messages"})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tabs.TabsList justify="space-between">
  <Tabs.Tab value="notifications" leftContent={<IconBell />}>
    Alerts
  </Tabs.Tab>

  <Tabs.Tab
    isDisabled
    value="messages"
    leftContent={<IconMail />}
    rightContent={<Badge>3</Badge>}>
    Messages
  </Tabs.Tab>
</Tabs.TabsList>
`})}),`
`,e.jsx(n.h4,{children:"Keep mounted content"}),`
`,e.jsxs(n.p,{children:["By default, hidden ",e.jsx(n.code,{children:"TabPanels"})," are unmounted from the DOM. Use ",e.jsx(n.code,{children:"keepMounted"})," to preserve their state when switching tabs."]}),`
`,e.jsxs(s,{defaultValue:"profile",keepMounted:!0,children:[e.jsxs(s.TabsList,{children:[e.jsx(s.Tab,{value:"profile",children:"Profile"}),e.jsx(s.Tab,{value:"settings",children:"Settings"})]}),e.jsx(s.TabPanel,{value:"profile",children:e.jsx(n.p,{children:"Profile"})}),e.jsx(s.TabPanel,{value:"settings",children:e.jsx(n.p,{children:"Settings"})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tabs defaultValue="profile" keepMounted>
  <Tabs.TabsList>
    <Tabs.Tab value="profile">Profile</Tabs.Tab>
    <Tabs.Tab value="settings">Settings</Tabs.Tab>
  </Tabs.TabsList>

  <Tabs.TabPanel value="profile">Profile</Tabs.TabPanel>
  <Tabs.TabPanel value="settings">Settings</Tabs.TabPanel>
</Tabs>
`})}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsx(n.h5,{children:"1. Tab naming conventions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use short, descriptive labels (1–2 words)"}),`
`,e.jsxs(n.li,{children:["Match the ",e.jsx(n.code,{children:"value"})," prop exactly between ",e.jsx(n.code,{children:"<Tab>"})," and ",e.jsx(n.code,{children:"<TabPanel>"})]}),`
`,e.jsxs(n.li,{children:["Avoid using spaces or special characters in ",e.jsx(n.code,{children:"value"})]}),`
`]}),`
`,e.jsx(n.h5,{children:"2. Performance optimization"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Prefer lazy loading heavy tab content to improve initial render time"}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"keepMounted"})," only when tab state must be preserved"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Good - lazy loads heavy content
<Tabs.TabPanel value="reports">
  {activeTab === "reports" && <ReportGenerator />}
</Tabs.TabPanel>

// Better - use keepMounted strategically
<Tabs keepMounted={shouldPreserveState}>
`})}),`
`,e.jsx(n.h5,{children:"3. When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Organizing related content that is mutually exclusive"}),`
`,e.jsx(n.li,{children:"Switching between dashboards, reports, or content sections"}),`
`,e.jsx(n.li,{children:"Small to medium sets of options (2–6 tabs)"}),`
`]}),`
`,e.jsx(n.h5,{children:"4. When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Too many tabs (>6) — use navigation or accordion instead"}),`
`,e.jsx(n.li,{children:"Sequential steps — use a Stepper component instead"}),`
`,e.jsx(n.li,{children:"Independent settings — use Checkboxes or Switches instead"}),`
`]})]})}function v(a={}){const{wrapper:n}={...d(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(c,{...a})}):c(a)}function t(a,n){throw new Error("Expected "+(n?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{v as default,f as frontmatter};
