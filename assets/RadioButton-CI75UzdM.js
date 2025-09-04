import{j as e}from"./index-jR0FLVqU.js";import{R as s,F as o}from"./styles-B8Yckata.js";import{I as r}from"./IconFlag-BtobbGQc.js";import{u as a}from"./index-BOxoqHcG.js";import"./createReactComponent-R_WhpXRX.js";const c=[{code:"en",title:"English",icon:e.jsx(r,{})},{code:"fr",title:"French",disabled:!0}],d=()=>e.jsx(s.Group,{options:c,direction:"horizontal",getItemValue:i=>i.code,getItemLabel:i=>e.jsxs(o,{align:"center",children:[i.icon,e.jsx("span",{children:i.title})]}),getItemDisabled:i=>i.disabled}),j={package:"@quen-ui/components",title:"RadioButton",order:1,group:"components",description:"A single selectable radio button with label support. Used for exclusive selection in forms and interfaces.",import:"import { RadioButton, RadioButtonGroup } from '@quen-ui/components';",source:"/packages/components/src/RadioButton",excludeDemoProps:["value"],props:["RadioButton","RadioButtonGroup"]};function l(i){const n={code:"code",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...i.components};return s||t("RadioButton",!1),s.Group||t("RadioButton.Group",!0),e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Basic usage"}),`
`,e.jsx(n.h5,{children:"Single RadioButton"}),`
`,e.jsxs(n.p,{children:["A standalone ",e.jsx(n.code,{children:"RadioButton"})," can be used for binary choices (e.g., accept/decline)."]}),`
`,e.jsx(s,{label:"Accept terms",name:"agreement",value:"accept"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function Demo() {
  return <RadioButton label="Accept terms" name="agreement" value="accept" />;
}
`})}),`
`,e.jsx(n.h5,{children:"Basic RadioButton.Group"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"RadioButton.Group"})," is the preferred way to render a set of related options."]}),`
`,e.jsx(s.Group,{label:"Notification method",options:[{label:"Email",value:"email"},{label:"SMS",value:"sms"},{label:"Push",value:"push",isDisabled:!0}],direction:"horizontal"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const options = [
  { label: "Email", value: "email" },
  { label: "SMS", value: "sms" },
  { label: "Push", value: "push", isDisabled: true }
];

function Demo() {
  return (
    <RadioButton.Group
      label="Notification method"
      options={options}
      direction="horizontal"
    />
  );
}
`})}),`
`,e.jsx(n.h4,{children:"States demonstration"}),`
`,e.jsx(n.p,{children:"Showcases all available states:"}),`
`,e.jsxs(o,{gap:8,children:[e.jsx(s,{label:"Unchecked"}),e.jsx(s,{isChecked:!0,label:"Checked"}),e.jsx(s,{isDisabled:!0,label:"Disabled"}),e.jsx(s,{isDisabled:!0,isChecked:!0,label:"Disabled checked"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex gap={8}>
  <RadioButton label="Unchecked" />
  <RadioButton isChecked label="Checked" />
  <RadioButton isDisabled label="Disabled" />
  <RadioButton isDisabled isChecked label="Disabled checked" />
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Size variants"}),`
`,e.jsxs(n.p,{children:["Supports QuenUI sizing tokens (",e.jsx(n.code,{children:"xs"}),", ",e.jsx(n.code,{children:"s"}),", ",e.jsx(n.code,{children:"m"}),", ",e.jsx(n.code,{children:"l"}),")."]}),`
`,e.jsxs(o,{gap:8,direction:"column",children:[e.jsx(s,{label:"XS",size:"xs"}),e.jsx(s,{label:"S",size:"s"}),e.jsx(s,{label:"M",size:"m"}),e.jsx(s,{label:"L",size:"l"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex gap={8} direction="column">
  <RadioButton label="XS" size="xs" />
  <RadioButton label="S" size="s" />
  <RadioButton label="M" size="m" />
  <RadioButton label="L" size="l" />
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Advanced example"}),`
`,e.jsx(n.p,{children:"Custom rendering with icons, disabled states, and horizontal layout."}),`
`,e.jsx(d,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const complexOptions = [
  { code: "en", title: "English", icon: <IconFlag /> },
  { code: "fr", title: "French", disabled: true }
];

export const LanguageSelect = () => {
  return (
    <RadioButton.Group
      options={complexOptions}
      direction="horizontal"
      getItemValue={(item) => item.code}
      getItemLabel={(item) => (
       <Flex align="center">
          {item.icon}
          <span>{item.title}</span>
        </Flex>
      )}
      getItemDisabled={(item) => item.disabled}
    />
  );
}
`})}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsx(n.h5,{children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Single choice from a set — when only one option is valid"}),`
`,e.jsx(n.li,{children:"Binary choices — e.g., agree/disagree, yes/no"}),`
`,e.jsx(n.li,{children:"Grouped preferences — lists of 3–7 options with clear labels"}),`
`]}),`
`,e.jsx(n.h5,{children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Avoid for multi-select scenarios (use Checkbox instead)"}),`
`,e.jsx(n.li,{children:"Avoid long lists (prefer Select dropdown)"}),`
`,e.jsx(n.li,{children:"Avoid ambiguous labels (always explain what each choice means)"}),`
`]}),`
`,e.jsx(n.h4,{children:"Design & UX guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use horizontal layout for up to 3 options, vertical layout for longer lists"}),`
`,e.jsx(n.li,{children:"Keep labels short and descriptive"}),`
`,e.jsx(n.li,{children:"Provide disabled states for unavailable options"}),`
`,e.jsx(n.li,{children:"Ensure groups have a clear label describing the decision"}),`
`]})]})}function b(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}function t(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{b as default,j as frontmatter};
