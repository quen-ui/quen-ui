import{j as e}from"./index-jR0FLVqU.js";import{F as o}from"./styles-B8Yckata.js";import{S as i}from"./Switch-BthiyXrm.js";import{u as l}from"./index-BOxoqHcG.js";const h={package:"@quen-ui/components",title:"Switch",order:1,group:"components",description:"The Switch component is a toggle element for enabling/disabling states. Features include label positioning, size variants, and accessibility compliance. Ideal for settings toggles, feature flags, and binary options.",import:"import { Switch } from '@quen-ui/components';",source:"/packages/components/src/Switch/Switch.tsx",excludeDemoProps:["defaultChecked"]};function t(s){const n={code:"code",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Basic usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Switch"}),` is used to toggle a single setting on or off.
It supports both controlled (via `,e.jsx(n.code,{children:"value"}),") and uncontrolled (via ",e.jsx(n.code,{children:"defaultChecked"}),") usage."]}),`
`,e.jsx(i,{defaultChecked:!0,label:"Email notifications",size:"l"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function Demo() {
  const [notifications, setNotifications] = useState(true);
  return (
    <Switch
      value={notifications}
      onChange={(checked) => setNotifications(checked)}
      label="Email notifications"
      size="l"
      defaultChecked
    />
  );
}
`})}),`
`,e.jsx(n.h4,{children:"Label positioning"}),`
`,e.jsx(n.p,{children:"You can display the label before or after the switch. By default, the label is rendered after the toggle."}),`
`,e.jsx(i,{label:"Dark Mode"}),`
`,e.jsx("br",{}),`
`,e.jsx(i,{label:"Dark Mode",labelPosition:"after"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Label before switch
<Switch label="Dark Mode" />

// Label after switch (default)
<Switch label="Dark Mode" labelPosition="after" />
`})}),`
`,e.jsx(n.h4,{children:"Disabled state"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"isDisabled"})," to make the switch non-interactive. This is useful in read-only forms or when an option is not currently available."]}),`
`,e.jsx(i,{label:"Advanced mode",isDisabled:!0,size:"s"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Switch label="Advanced mode" isDisabled size="s" />
`})}),`
`,e.jsx(n.h4,{children:"Size variants"}),`
`,e.jsxs(n.p,{children:["Switch supports multiple sizes (",e.jsx(n.code,{children:"xs"}),", ",e.jsx(n.code,{children:"s"}),", ",e.jsx(n.code,{children:"m"}),", ",e.jsx(n.code,{children:"l"}),"). Use larger sizes for touch devices or when accessibility is a concern."]}),`
`,e.jsxs(o,{direction:"column",gap:16,children:[e.jsx(i,{label:"Size L",size:"l"}),e.jsx(i,{label:"Size M(default)",size:"m"}),e.jsx(i,{label:"Size S",size:"s"}),e.jsx(i,{label:"Size XS",size:"xs"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Switch
  label="Size L"
  size="l"
/>
<Switch
  label="Size M(default)"
  size="m"
/>
<Switch
  label="Size S"
  size="s"
/>
<Switch
  label="Size XS"
  size="xs"
/>
`})}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsx(n.h5,{children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For binary on/off settings"}),`
`,e.jsx(n.li,{children:"For immediate actions (e.g. toggling dark mode, notifications)"}),`
`,e.jsx(n.li,{children:"Inside forms when a boolean value is needed"}),`
`]}),`
`,e.jsx(n.h5,{children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For multi-choice selections — use radio buttons or checkboxes instead"}),`
`,e.jsx(n.li,{children:"For actions that require confirmation — use a button or dialog"}),`
`,e.jsx(n.li,{children:"Without context — always provide a label or surrounding description"}),`
`]})]})}function u(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{u as default,h as frontmatter};
