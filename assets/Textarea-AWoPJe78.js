import{j as e}from"./index-jR0FLVqU.js";import{F as o}from"./styles-B8Yckata.js";import{T as s}from"./Textarea-CsBSIAeU.js";import{u as t}from"./index-BOxoqHcG.js";import{I as i}from"./IconLock-UVTLDYla.js";import"./createReactComponent-R_WhpXRX.js";const m={package:"@quen-ui/components",title:"Textarea",order:1,group:"components",description:"The Textarea component provides a multi-line text input field with adaptive height, validation states, and customizable adornments. Features include auto-resizing, clearable input, and accessibility compliance. Ideal for forms, comments, and long-form content.",import:"import { Textarea } from '@quen-ui/components';",source:"/packages/components/src/Textarea/Textarea.tsx",demo:!0,excludeDemoProps:["classNameTextarea","error"]};function a(r){const n={code:"code",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Basic Textarea"}),`
`,e.jsx(n.p,{children:"A simple textarea with placeholder and label. Use this as the default configuration for most form inputs."}),`
`,e.jsx(s,{placeholder:"Enter description",label:"Project details"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Textarea placeholder="Enter description" label="Project details" />
`})}),`
`,e.jsx(n.h5,{children:"Auto-resizing with limits"}),`
`,e.jsxs(n.p,{children:["Enable ",e.jsx(n.code,{children:"autosize"})," to make the field grow dynamically as the user types. Use ",e.jsx(n.code,{children:"minRows"})," and ",e.jsx(n.code,{children:"maxRows"})," to define vertical expansion boundaries."]}),`
`,e.jsx(s,{autosize:!0,minRows:3,maxRows:8,placeholder:"Content grows as you type..."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Textarea
  autosize
  minRows={3}
  maxRows={8}
  placeholder="Content grows as you type..."
/>
`})}),`
`,e.jsx(n.h5,{children:"Validation state"}),`
`,e.jsxs(n.p,{children:["Display validation errors by passing a boolean or string to the ",e.jsx(n.code,{children:"error"})," prop. Use ",e.jsx(n.code,{children:"isRequired"})," to mark the field as mandatory."]}),`
`,e.jsx(s,{label:"Bio",isRequired:!0,error:"Required field"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Textarea label="Bio" isRequired error={"Required field"} />
`})}),`
`,e.jsx(n.h5,{children:"Adornments + clearable"}),`
`,e.jsx(n.p,{children:"You can add left or right content (icons, buttons) and enable a clear button. This is useful for filters, searches, or fields with quick reset functionality."}),`
`,e.jsx(s,{leftContent:e.jsx(i,{}),isClearable:!0,placeholder:"Search descriptions..."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Textarea
  leftContent={<IconLock />}
  isClearable
  placeholder="Search descriptions..."
/>
`})}),`
`,e.jsx(n.h4,{children:"Disabled state"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"isDisabled"})," to make the textarea non-editable. This is useful when the content is read-only or locked."]}),`
`,e.jsx(s,{label:"Locked notes",placeholder:"Content not editable",isDisabled:!0}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Textarea label="Locked notes" placeholder="Content not editable" isDisabled />
`})}),`
`,e.jsx(n.h4,{children:"Size variants"}),`
`,e.jsxs(n.p,{children:["Textarea supports multiple sizes through the ",e.jsx(n.code,{children:"size"})," prop. Use consistent sizing across forms for a better user experience."]}),`
`,e.jsxs(o,{direction:"column",gap:"l",children:[e.jsx(s,{size:"xs",placeholder:"Mini"}),e.jsx(s,{size:"s",placeholder:"Small"}),e.jsx(s,{size:"m",placeholder:"Medium"}),e.jsx(s,{size:"l",placeholder:"Large"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex direction="column" gap="l">
  <Textarea size="xs" placeholder="Mini" />
  <Textarea size="s" placeholder="Small" />
  <Textarea size="m" placeholder="Medium" />
  <Textarea size="l" placeholder="Large" />
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Controlled usage"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"onChange"})," for controlled forms. This allows you to fully manage the state of the textarea."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [bio, setBio] = useState("");

<Textarea label="Controlled bio" value={bio} onChange={(val) => setBio(val)} />;
`})}),`
`,e.jsx(n.h4,{children:"With right adornment"}),`
`,e.jsxs(n.p,{children:["You can also add ",e.jsx(n.code,{children:"rightContent"})," for actions such as counters or icons."]}),`
`,e.jsx(s,{placeholder:"Type something...",rightContent:e.jsx(n.span,{children:"0/200"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Textarea placeholder="Type something..." rightContent={<span>0/200</span>} />
`})}),`
`,e.jsx(n.h4,{children:"Character counter"}),`
`,e.jsxs(n.p,{children:["Combine ",e.jsx(n.code,{children:"maxLength"})," with ",e.jsx(n.code,{children:"rightContent"})," to show a live counter. This is useful for bios, messages, or any input with a limit."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [text, setText] = useState("");
<Textarea
  label="Bio"
  value={text}
  onChange={(val) => setText(val)}
  maxLength={200}
  rightContent={<span>{text.length}/200</span>}
/>;
`})}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsx(n.h6,{children:"1. Auto-resizing configuration"}),`
`,e.jsxs(n.p,{children:["Use small ranges (",e.jsx(n.code,{children:"minRows={2}"}),"–",e.jsx(n.code,{children:"maxRows={6}"}),") for short inputs like comments. - Use larger ranges (",e.jsx(n.code,{children:"minRows={4}"}),"–",e.jsx(n.code,{children:"maxRows={12}"}),") for long inputs like documentation."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Good for comments
<Textarea autosize minRows={2} maxRows={6} />

// Good for long content
<Textarea autosize minRows={4} maxRows={12} />
`})}),`
`,e.jsx(n.h6,{children:"2. Validation patterns"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"error"})," as a boolean for generic invalid state. - Use ",e.jsx(n.code,{children:"error"})," as a string to display specific error messages."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Simple error display
<Textarea error />

// // Text error display
<Textarea error={errorMessage} />
`})}),`
`,e.jsx(n.h6,{children:"3. Content Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"minRows"})," to hint expected length of input."]}),`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:"maxRows"})," to prevent excessive vertical scrolling."]}),`
`,e.jsxs(n.li,{children:["Combine with ",e.jsx(n.code,{children:"isClearable"})," for user-generated content (search, notes)."]}),`
`,e.jsxs(n.li,{children:["Add counters with ",e.jsx(n.code,{children:"rightContent"})," for length-restricted inputs."]}),`
`]})]})}function u(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{u as default,m as frontmatter};
