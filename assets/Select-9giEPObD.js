import{j as e,r as o}from"./index-jR0FLVqU.js";import{F as d}from"./styles-B8Yckata.js";import{S as l}from"./Select-BOzytCSG.js";import{u as r}from"./index-BOxoqHcG.js";import"./Tag-B41aw-kE.js";const i=({isMulti:s})=>{const n=[{label:"France",value:"fr"},{label:"Germany",value:"de"}];return e.jsx(l,{isMulti:s,label:"Country",items:n,onChange:t=>console.log(t),placeholder:"Choose country"})},h=()=>{const s=[{id:1,name:"Alex",department:"Engineering"},{id:2,name:"Taylor",department:"Design"}];return e.jsx(l,{items:s,getItemValue:n=>n==null?void 0:n.id,getItemLabel:n=>n==null?void 0:n.name,getItemDisabled:n=>n.department==="Design",onChangeReturnValue:"item",notFoundContent:e.jsx("div",{children:"No users"})})},u=()=>{const[s]=o.useState([]),[n,t]=o.useState(!0),c=()=>{t(!1)};return e.jsx(l,{items:s,isLoading:n,messageNoData:"Loading options...",onFocus:c})},b={package:"@quen-ui/components",title:"Select",order:1,group:"components",description:"The Select component provides a customizable dropdown selector with support for single/multi-selection, grouping, async loading, and advanced data mapping. Features include clearable options, custom rendering, and full accessibility compliance.",import:"import { Select } from '@quen-ui/components';",source:"/packages/components/src/Select/Select.tsx"};function a(s){const n={code:"code",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Basic usage"}),`
`,e.jsxs(n.p,{children:["The most common usage of ",e.jsx(n.code,{children:"Select"})," is for choosing a single or multiple values from a predefined list."]}),`
`,e.jsx(n.h5,{children:"Single select"}),`
`,e.jsxs(n.p,{children:["Use when the user should choose ",e.jsx(n.strong,{children:"only one option"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function Demo() {
  const countries = [
    { label: "France", value: "fr" },
    { label: "Germany", value: "de" }
  ];
  return (
    <Select
      label="Country"
      items={countries}
      onChange={(selected) => console.log(selected)}
      placeholder="Choose country"
    />
  );
}
`})}),`
`,e.jsx(i,{}),`
`,e.jsx(n.h5,{children:"Multi select"}),`
`,e.jsx(n.p,{children:"Enable isMulti when the user should be able to select multiple values."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function Demo() {
  const countries = [
    { label: "France", value: "fr" },
    { label: "Germany", value: "de" }
  ];
  return (
    <Select
      label="Country"
      items={countries}
      onChange={(selected) => console.log(selected)}
      placeholder="Choose country"
      isMulti
    />
  );
}
`})}),`
`,e.jsx(i,{isMulti:!0}),`
`,e.jsx(n.h4,{children:"Custom data structure"}),`
`,e.jsxs(n.p,{children:["When your data does not follow the default  ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"value"})," format, you can provide custom accessors:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItemValue"})," — determines the value field"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItemLabel"})," — determines the label text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItemDisabled"})," — determines whether an item is selectable"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const users = [
  { id: 1, name: "Alex", department: "Engineering" },
  { id: 2, name: "Taylor", department: "Design" }
];

<Select
  items={users}
  getItemValue={(item) => item.id}
  getItemLabel={(item) => item.name}
  getItemDisabled={(item) => item.department === "Design"}
  onChangeReturnValue="item"
  notFoundContent={<div>No users</div>}
/>;
`})}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h4,{children:"Controlled with async loading"}),`
`,e.jsx(n.p,{children:"For dynamic data, use isLoading and messageNoData to provide feedback. This example fetches data when the select gains focus."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function Demo() {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOptions = () => {
    setLoading(false);
  };

  return (
    <Select
      items={options}
      isLoading={loading}
      messageNoData="Loading options..."
      onFocus={fetchOptions}
    />
  );
}
`})}),`
`,e.jsx(u,{}),`
`,e.jsx(n.h4,{children:"Disabled state"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"isDisabled"})," to make the field non-interactive. Helpful for read-only forms or when an action is temporarily unavailable."]}),`
`,e.jsx(l,{label:"Disabled select",items:[{label:"One",value:1},{label:"Two",value:2}],isDisabled:!0}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Select
  label="Disabled select"
  items={[{ label: "One", value: 1 }, { label: "Two", value: 2 }]}
  isDisabled
/>
`})}),`
`,e.jsx(n.h4,{children:"Size variants"}),`
`,e.jsxs(n.p,{children:["Control the visual size of the select with the ",e.jsx(n.code,{children:"size"})," prop. Use smaller sizes for dense layouts and larger ones for forms or mobile screens."]}),`
`,e.jsxs(d,{gap:12,direction:"column",children:[e.jsx(l,{label:"XS",size:"xs",items:[{label:"One",value:1}]}),e.jsx(l,{label:"S",size:"s",items:[{label:"One",value:1}]}),e.jsx(l,{label:"M",size:"m",items:[{label:"One",value:1}]}),e.jsx(l,{label:"L",size:"l",items:[{label:"One",value:1}]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex gap={12} direction="column">
  <Select label="XS" size="xs" items={[{ label: "One", value: 1 }]} />
  <Select label="S" size="s" items={[{ label: "One", value: 1 }]} />
  <Select label="M" size="m" items={[{ label: "One", value: 1 }]} />
  <Select label="L" size="l" items={[{ label: "One", value: 1 }]} />
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Clearable select"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"isClearable"})," to allow users to reset the selection quickly."]}),`
`,e.jsx(l,{label:"With clear",items:[{label:"One",value:1},{label:"Two",value:2}],isClearable:!0}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Select
  label="With clear"
  items={[{ label: "One", value: 1 }, { label: "Two", value: 2 }]}
  isClearable
/>
`})}),`
`,e.jsx(n.h4,{children:"Error state"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"error"})," prop to highlight validation issues. The error can be a boolean or a string message."]}),`
`,e.jsx(l,{label:"With error",items:[{label:"Option",value:1}],error:"This field is required"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Select
  label="With error"
  items={[{ label: "Option", value: 1 }]}
  error="This field is required"
/>
`})}),`
`,e.jsx(n.h4,{children:"Advanced patterns"}),`
`,e.jsx(n.h5,{children:"Value vs Item returns"}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.code,{children:"onChange"})," returns the ",e.jsx(n.code,{children:"value"}),". If you need the full object, set ",e.jsx(n.code,{children:'onChangeReturnValue="item"'}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Returns value only
<Select onChange={(value) => console.log(value)} />

// Returns full items
<Select
  onChangeReturnValue="item"
  onChange={(item) => console.log(item)}
/>
`})}),`
`,e.jsx(n.h5,{children:"Custom renderers"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"leftContent"}),", ",e.jsx(n.code,{children:"rightContent"}),", or ",e.jsx(n.code,{children:"notFoundContent"})," for custom UI. This allows icons, loaders, or empty state placeholders."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Select
  items={cities}
  leftContent={<GlobeIcon />}
  notFoundContent={
    <div className="custom-empty">
      <SearchOffIcon />
      <span>No matches found</span>
    </div>
  }
/>
`})}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsx(n.h5,{children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For choosing one or multiple options from a predefined list"}),`
`,e.jsx(n.li,{children:"When the list is long and radio buttons/checkboxes are not practical"}),`
`,e.jsx(n.li,{children:"With async loading when options are dynamic or remote"}),`
`]}),`
`,e.jsx(n.h5,{children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For very small sets (2–3 options) — prefer radio buttons/checkboxes"}),`
`,e.jsx(n.li,{children:"For free text input — use an Input or Autocomplete instead"}),`
`,e.jsx(n.li,{children:"As a decorative element without meaningful user interaction"}),`
`]}),`
`,e.jsx(n.h5,{children:"Additional guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Always provide labels or placeholders for clarity"}),`
`,e.jsx(n.li,{children:"Use isClearable when users may need to reset their choice"}),`
`,e.jsx(n.li,{children:"Avoid very long lists — consider grouping or lazy loading"}),`
`,e.jsx(n.li,{children:"Disable invalid options instead of silently removing them"}),`
`,e.jsx(n.li,{children:"Ensure color contrast and error states are accessible"}),`
`]})]})}function f(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{f as default,b as frontmatter};
