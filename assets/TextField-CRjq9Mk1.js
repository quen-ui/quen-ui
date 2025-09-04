import{r as t,j as e}from"./index-jR0FLVqU.js";import{B as o,F as d}from"./styles-B8Yckata.js";import{T as l}from"./TextField-BRqdTVP1.js";import{c as i}from"./createReactComponent-R_WhpXRX.js";import{u as a}from"./index-BOxoqHcG.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M10.585 10.587a2 2 0 0 0 2.829 2.828",key:"svg-0"}],["path",{d:"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",key:"svg-1"}],["path",{d:"M3 3l18 18",key:"svg-2"}]],h=i("outline","eye-off","EyeOff",c);/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]],u=i("outline","eye","Eye",x);/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]],m=i("outline","search","Search",p),j=()=>{const[s,n]=t.useState(!1);return e.jsx(l,{label:"Password",type:s?"text":"password",rightContent:e.jsx(o,{view:"icon",onClick:()=>n(!s),children:s?e.jsx(h,{}):e.jsx(u,{})})})},w={package:"@quen-ui/components",title:"TextField",order:1,group:"components",description:"The TextField component provides a versatile single-line text input with validation states, adornments, and clearable functionality. Features include size variants, accessibility compliance, and flexible content integration. Ideal for forms, search fields, and data entry scenarios.",import:"import { TextField  } from '@quen-ui/components';",source:"/packages/components/src/TextField /TextField .tsx"};function r(s){const n={code:"code",h4:"h4",h6:"h6",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Basic Text field"}),`
`,e.jsx(n.p,{children:"A simple text input with a label and placeholder. This is the default configuration for most text inputs."}),`
`,e.jsx(l,{placeholder:"Enter your name",label:"Full Name"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TextField placeholder="Enter your name" label="Full Name" />
`})}),`
`,e.jsx(n.h4,{children:"With icons and clear button"}),`
`,e.jsxs(n.p,{children:["Add adornments for context and enable ",e.jsx(n.code,{children:"isClearable"})," to let users reset input quickly. This pattern is especially useful for search bars or filters."]}),`
`,e.jsx(l,{leftContent:e.jsx(m,{}),isClearable:!0,placeholder:"Search..."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TextField
  leftContent={<IconSearch />}
  isClearable
  placeholder="Search..."
  onChange={(value) => setQuery(value)}
  value={query}
/>
`})}),`
`,e.jsx(n.h4,{children:"Validation state"}),`
`,e.jsxs(n.p,{children:["Mark inputs as required with ",e.jsx(n.code,{children:"isRequired"})," and provide inline error feedback using ",e.jsx(n.code,{children:"error"}),". The error can be a boolean (invalid state only) or a string (message)."]}),`
`,e.jsx(l,{label:"Email",isRequired:!0,error:"Invalid email",placeholder:"user@example.com"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TextField
  label="Email"
  isRequired
  error={errors.email ? "Invalid email" : undefined}
  value={email}
  onChange={(val) => setEmail(val)}
  placeholder="user@example.com"
/>
`})}),`
`,e.jsx(n.h4,{children:"Password field"}),`
`,e.jsxs(n.p,{children:["For passwords, you can toggle visibility using a button in ",e.jsx(n.code,{children:"rightContent"}),". This improves usability without compromising security."]}),`
`,e.jsx(j,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [showPassword, setShowPassword] = useState(false);

<TextField
  label="Password"
  type={showPassword ? "text" : "password"}
  rightContent={
    <Button
      icon={showPassword ? <EyeOffIcon /> : <EyeIcon />}
      onClick={() => setShowPassword(!showPassword)}
    />
  }
/>;
`})}),`
`,e.jsx(n.h4,{children:"Disabled state"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"isDisabled"})," when the field should be visible but not editable. This is common in read-only forms or when the value is prefilled and locked."]}),`
`,e.jsx(l,{label:"Locked field",value:"Prefilled value",isDisabled:!0}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TextField label="Locked field" value="Prefilled value" isDisabled />
`})}),`
`,e.jsx(n.h4,{children:"Size variants"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"size"})," prop defines the visual height and spacing of the field. Use consistent sizing across your UI for better readability."]}),`
`,e.jsxs(d,{direction:"column",gap:"l",children:[e.jsx(l,{size:"xs",placeholder:"Mini"}),e.jsx(l,{size:"s",placeholder:"Small"}),e.jsx(l,{size:"m",placeholder:"Medium"}),e.jsx(l,{size:"l",placeholder:"Large"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex direction="column" gap="l">
  <TextField size="xs" placeholder="Mini" />
  <TextField size="s" placeholder="Small" />
  <TextField size="m" placeholder="Medium" />
  <TextField size="l" placeholder="Large" />
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Controlled usage"}),`
`,e.jsxs(n.p,{children:["For form handling, use ",e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"onChange"})," to make the field controlled. This ensures synchronization with your state management."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [name, setName] = useState("");

<TextField
  label="Controlled"
  value={name}
  onChange={(val) => setName(val)}
  placeholder="Enter text"
/>
`})}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsx(n.h6,{children:"1. Validation patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use error as a boolean to only show invalid styling."}),`
`,e.jsx(n.li,{children:"Use error as a string when a message should be displayed."}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Simple error display
<TextField error />

// // Text error display
<TextField error={errorMessage} />
`})}),`
`,e.jsx(n.h6,{children:"2. Clearable Fields"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Best for search inputs or fields with temporary content."}),`
`,e.jsxs(n.li,{children:["Combine ",e.jsx(n.code,{children:"isClearable"})," with ",e.jsx(n.code,{children:"onClear"})," to reset state programmatically."]}),`
`]}),`
`,e.jsx(n.h6,{children:"3. Adornment Usage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use leftContent for contextual icons (search, country code)."}),`
`,e.jsx(n.li,{children:"Use rightContent for actions (password toggle, units, counters)."}),`
`,e.jsx(n.li,{children:"Keep adornments simple to avoid clutter."}),`
`]})]})}function F(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{F as default,w as frontmatter};
