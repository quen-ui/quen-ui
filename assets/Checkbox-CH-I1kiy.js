import{r as h,j as e}from"./index-jR0FLVqU.js";import{C as t,F as a}from"./styles-B8Yckata.js";import{I as p}from"./IconFlag-BtobbGQc.js";import{A as x}from"./avatar2-U2IOHYoY.js";import{u as m}from"./index-BOxoqHcG.js";import"./createReactComponent-R_WhpXRX.js";const u=()=>{const[s,n]=h.useState([1]),i=[{id:1,name:"Option 1"},{id:2,name:"Option 2"}],c=l=>{console.log(l),n(l)};return e.jsx(t.Group,{options:i,value:s,onChange:c,getItemValue:l=>l.id,getItemLabel:l=>l.name,label:"Select preferences"})},b=()=>{const s=[{code:"en",title:"English",icon:e.jsx(p,{width:16,height:16})},{code:"fr",title:"French",disabled:!0}];return e.jsx(t.Group,{getItemKey:n=>n.code,options:s,direction:"horizontal",getItemValue:n=>n.code,getItemLabel:n=>e.jsxs("div",{className:"language-option",children:[n.icon,e.jsx("span",{children:n.title})]}),getItemDisabled:n=>n.disabled})},g=()=>{const[s,n]=h.useState([]),i=["A","B","C"],c=s.length===i.length,l=s.length>0&&!c;return e.jsxs("div",{children:[e.jsx(t,{isChecked:c,isIntermediate:l,onChange:o=>{n(o?[...i]:[])},label:"Select all"}),e.jsx(t.Group,{options:i,getItemLabel:o=>o,getItemValue:o=>o,value:s,onChange:n,direction:"vertical"})]})},v={package:"@quen-ui/components",title:"Checkbox",order:1,group:"components",description:"Checkbox components provide interactive selection controls with support for single and multiple selection scenarios.",import:"import { Checkbox } from '@quen-ui/components';",source:"/packages/components/src/Checkbox",props:["Checkbox","CheckboxGroup"]};function r(s){const n={code:"code",div:"div",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...m(),...s.components};return t||d("Checkbox",!1),t.Group||d("Checkbox.Group",!0),e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Basic usage"}),`
`,e.jsx(n.p,{children:"Use Checkbox for binary selections, controlled via isChecked and onChange."}),`
`,e.jsx(t,{label:"I agree to terms"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Checkbox } from "@quen-ui/components";

function Agreement() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      isChecked={checked}
      onChange={setChecked}
      label="I agree to terms"
    />
  );
}
`})}),`
`,e.jsx(n.h4,{children:"States demonstration"}),`
`,e.jsx(n.p,{children:"Demonstrates supported states: default, checked, indeterminate, and disabled."}),`
`,e.jsxs(a,{gap:8,children:[e.jsx(t,{label:"Unchecked"}),e.jsx(t,{isChecked:!0,label:"Checked"}),e.jsx(t,{isIntermediate:!0,label:"Indeterminate"}),e.jsx(t,{isDisabled:!0,label:"Disabled"}),e.jsx(t,{isDisabled:!0,isChecked:!0,label:"Disabled checked"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex gap={8}>
  <Checkbox label="Unchecked" />
  <Checkbox isChecked label="Checked" />
  <Checkbox isIntermediate label="Indeterminate" />
  <Checkbox isDisabled label="Disabled" />
  <Checkbox isDisabled isChecked label="Disabled checked" />
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Size variants"}),`
`,e.jsx(n.p,{children:"Checkboxes can be rendered in different sizes for better UI density."}),`
`,e.jsxs(a,{gap:8,direction:"column",children:[e.jsx(t,{label:"XS",size:"xs"}),e.jsx(t,{label:"S",size:"s"}),e.jsx(t,{label:"M",size:"m"}),e.jsx(t,{label:"L",size:"l"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex gap={8} direction="column">
  <Checkbox label="XS" size="xs" />
  <Checkbox label="S" size="s" />
  <Checkbox label="M" size="m" />
  <Checkbox label="L" size="l" />
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Custom label content"}),`
`,e.jsx(n.p,{children:"The label prop supports any ReactNode, so you can include icons, avatars, or styled text."}),`
`,e.jsx(t,{isChecked:!0,label:e.jsxs(n.div,{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(n.img,{src:x,width:20,height:20,alt:"User"}),e.jsx(n.span,{children:"Subscribe as John Doe"})]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Checkbox
  isChecked
  label={
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <img src="/avatar.png" width={20} height={20} alt="User" />
      <span>Subscribe as John Doe</span>
    </div>
  }
/>
`})}),`
`,e.jsx(n.h4,{children:"Base usage groups"}),`
`,e.jsx(n.p,{children:"Groups allow managing multiple related checkboxes with a single value state."}),`
`,e.jsx(u,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Checkbox } from "@quen-ui/components";

const options = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" }
];

function Preferences() {
  const [selected, setSelected] = useState([1]);

  return (
    <Checkbox.Group
      options={options}
      value={selected}
      onChange={setSelected}
      getItemValue={(item) => item.id}
      getItemLabel={(item) => item.name}
      label="Select preferences"
    />
  );
}
`})}),`
`,e.jsx(n.h4,{children:"Advanced Example with custom labels"}),`
`,e.jsx(n.p,{children:"Customize labels with icons, disable specific options, and render horizontally."}),`
`,e.jsx(b,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const complexOptions = [
  { code: "en", title: "English", icon: <Flag /> },
  { code: "fr", title: "French", disabled: true }
];

function LanguageSelect() {
  return (
    <Checkbox.Group
      options={complexOptions}
      direction="horizontal"
      getItemValue={(item) => item.code}
      getItemKey={(item) => item.code}
      getItemLabel={(item) => (
        <div className="language-option">
          {item.icon}
          <span>{item.title}</span>
        </div>
      )}
      getItemDisabled={(item) => item.disabled}
    />
  );
}
`})}),`
`,e.jsx(n.h4,{children:'Combined "Select All" pattern'}),`
`,e.jsx(n.p,{children:"Demonstrates a common pattern where a parent checkbox controls a group."}),`
`,e.jsx(g,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function SelectAllPattern() {
  const [selected, setSelected] = useState<string[]>([]);
  const items = ["A", "B", "C"];

  const allSelected = selected.length === items.length;
  const someSelected = selected.length > 0 && !allSelected;

  return (
    <div>
      <Checkbox
        isChecked={allSelected}
        isIntermediate={someSelected}
        onChange={(checked) => {
          setSelected(checked ? [...items] : []);
        }}
        label="Select all"
      />

      <Checkbox.Group
        options={items}
        getItemLabel={(item) => item}
        getItemValue={(item) => item}
        value={selected}
        onChange={setSelected}
        direction="vertical"
      />
    </div>
  );
}
`})}),`
`,e.jsx(n.h4,{children:"Required & Error state"}),`
`,e.jsx(n.p,{children:"Validation states are supported for forms: mark as required and display error messages."}),`
`,e.jsx(t.Group,{options:["A","B","C"],value:[],onChange:()=>{},label:"Pick at least one",isRequired:!0,error:"At least one option must be selected",getItemLabel:i=>i}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Checkbox.Group
  options={["A", "B", "C"]}
  value={[]}
  onChange={() => {}}
  label="Pick at least one"
  isRequired
  error="At least one option must be selected"
  getItemLabel={(item) => item}
/>
`})}),`
`,e.jsx(n.h4,{children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Proper ARIA attributes"}),`
`,e.jsx(n.li,{children:"Keyboard navigation support"}),`
`,e.jsx(n.li,{children:"Screen reader announcements"}),`
`,e.jsx(n.li,{children:"Focus management"}),`
`,e.jsx(n.li,{children:"Required state indication"}),`
`,e.jsx(n.li,{children:"Error state handling"}),`
`]}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Checkbox"})," for binary choices"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Checkbox.Group"})," for multiple selections"]}),`
`,e.jsx(n.li,{children:"Always provide clear labels"}),`
`,e.jsx(n.li,{children:"Group related options visually"}),`
`,e.jsx(n.li,{children:"Use intermediate state only for partial selections"}),`
`,e.jsx(n.li,{children:"Choose sizes based on layout density"}),`
`]}),`
`,e.jsx(n.h4,{children:"API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`interface ICheckboxGroupDefaultItem {
  key?: string | number;
  label: string;
  isDisabled?: boolean;
  value: string | number;
}

type TCheckboxGroupPropGetItemKey<TItem> = (
  item: TItem
) => string | number | undefined;

type TCheckboxGroupPropGetItemLabel<TItem> = (item: TItem) => React.ReactNode;
type TCheckboxGroupPropGetItemDisabled<TItem> = (
  item: TItem
) => boolean | undefined;
type TCheckboxGroupPropGetItemValue<
  TItem,
  VALUE extends string | number = string | number
> = (item: TItem) => VALUE;
`})})]})}function y(s={}){const{wrapper:n}={...m(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}function d(s,n){throw new Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{y as default,v as frontmatter};
