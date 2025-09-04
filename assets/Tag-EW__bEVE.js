import{r as h,j as e}from"./index-jR0FLVqU.js";import{F as g}from"./styles-B8Yckata.js";import{T as l}from"./Tag-B41aw-kE.js";import{u as o}from"./index-BOxoqHcG.js";import{I as a}from"./IconLock-UVTLDYla.js";import"./createReactComponent-R_WhpXRX.js";const x=()=>{const[n,s]=h.useState(["urgent","bug"]),c=i=>{s(r=>r.filter(d=>d!==i))};return e.jsx(g,{gap:8,children:n.map(i=>e.jsx(l,{className:"p-remove-margin",isClosable:!0,onClickClose:()=>c(i),children:i},i))})},k={package:"@quen-ui/components",title:"Tag",order:1,group:"components",description:"The Tag component displays compact labeled elements for categorization, selection, or status indication. Supports icons, interactive states, and dismissible functionality. Ideal for filters, labels, and token displays.",import:"import { Tag } from '@quen-ui/components';",source:"/packages/components/src/Tag/Tag.tsx",demo:!0,excludeDemoProps:["onClickClose","children"],defaultDemoProps:{children:"Tag"}};function t(n){const s={code:"code",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h4,{children:"Usage examples"}),`
`,e.jsx(s.p,{children:"Tags are small visual elements used for labeling, categorization, or quick actions. The simplest usage is a plain tag with text content."}),`
`,e.jsx(l,{children:"New Feature"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Tag>New Feature</Tag>
`})}),`
`,e.jsx(s.h4,{children:"Interactive tag with icon"}),`
`,e.jsxs(s.p,{children:[`Tags can include icons for better context.
Combine the `,e.jsx(s.code,{children:"icon"})," prop with ",e.jsx(s.code,{children:"onClick"})," to make tags interactive."]}),`
`,e.jsx(l,{className:"p-remove-margin",icon:e.jsx(a,{}),onClick:()=>alert("secured"),children:e.jsx(s.p,{children:"Secured"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Tag icon={<IconLock />} onClick={() => alert("secured")}>
  Secured
</Tag>
`})}),`
`,e.jsx(s.h4,{children:"Dismissible tag"}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"isClosable"})," and ",e.jsx(s.code,{children:"onClickClose"})," to make tags removable. This is useful for filters, categories, or editable tag lists."]}),`
`,e.jsx(x,{}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`const [tags, setTags] = useState(["urgent", "bug"]);

{
  tags.map((tag) => (
    <Tag key={tag} isClosable onClickClose={() => removeTag(tag)}>
      {tag}
    </Tag>
  ));
}
`})}),`
`,e.jsx(s.h4,{children:"Disabled tag"}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"isDisabled"})," to prevent interaction while keeping the tag visible. This is useful for locked or unavailable states."]}),`
`,e.jsx(l,{isDisabled:!0,icon:e.jsx(a,{}),className:"p-remove-margin",children:e.jsx(s.p,{children:"Locked"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Tag isDisabled icon={<IconLock />}>
  Locked
</Tag>
`})}),`
`,e.jsx(s.h4,{children:"Clickable + closable"}),`
`,e.jsxs(s.p,{children:["Tags can be both clickable and dismissible at the same time. Clicking the body triggers ",e.jsx(s.code,{children:"onClick"}),", while the close icon triggers ",e.jsx(s.code,{children:"onClickClose"}),"."]}),`
`,e.jsx(l,{className:"p-remove-margin",onClick:()=>alert("Tag clicked"),isClosable:!0,onClickClose:()=>alert("Tag closed"),children:e.jsx(s.p,{children:"Interactive"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Tag
  onClick={() => alert("Tag clicked")}
  isClosable
  onClickClose={() => alert("Tag closed")}
>
  Interactive
</Tag>
`})}),`
`,e.jsx(s.h4,{children:"Best practices"}),`
`,e.jsx(s.h5,{children:"1. Usage recommendations"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Use tags for categorization, status labels, or removable filters"}),`
`,e.jsx(s.li,{children:"Keep text short (1–2 words)"}),`
`,e.jsx(s.li,{children:"Use icons only when they add meaning"}),`
`]}),`
`,e.jsx(s.h5,{children:"2. Interactive states"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Use onClick for selectable tags (e.g., filters)"}),`
`,e.jsx(s.li,{children:"Use isClosable + onClickClose for removable tags"}),`
`,e.jsx(s.li,{children:"Combine with isDisabled for locked states"}),`
`]}),`
`,e.jsx(s.h5,{children:"3. When not to use"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"For navigation — use Buttons or Tabs instead"}),`
`,e.jsx(s.li,{children:"For long text — use Badges or plain labels"}),`
`,e.jsx(s.li,{children:"For multi-line content — use Cards"}),`
`]})]})}function T(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{T as default,k as frontmatter};
