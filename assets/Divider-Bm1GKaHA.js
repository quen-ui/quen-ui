import{j as i}from"./index-jR0FLVqU.js";import{D as e}from"./styles-B8Yckata.js";import{u as t}from"./index-BOxoqHcG.js";const c={package:"@quen-ui/components",title:"Divider",order:1,group:"components",description:"The Divider component creates a visual separation between content sections with flexible styling options. It serves as a clear visual indicator to organize content and improve readability in your UI.",import:"import { Divider } from '@quen-ui/components';",source:"/packages/components/src/Divider"};function s(r){const n={code:"code",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...r.components};return i.jsxs(i.Fragment,{children:[i.jsx(n.h4,{children:"Basic horizontal divider"}),`
`,i.jsxs(n.p,{children:["A horizontal line separating content sections. By default, spans 100% width, aligned to center, and uses the ",i.jsx(n.code,{children:"primary"})," style."]}),`
`,i.jsxs("div",{children:[i.jsx("h2",{children:"Section 1"}),i.jsx(e,{direction:"horizontal"}),i.jsx("h2",{children:"Section 2"})]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`import { Divider } from "@quen-ui/components";

const SectionSeparator = () => {
  return (
    <div>
      <h2>Section 1</h2>
      <Divider direction="horizontal" />
      <h2>Section 2</h2>
    </div>
  );
};
`})}),`
`,i.jsx(n.h4,{children:"Semantic color variants"}),`
`,i.jsx(n.p,{children:"Use semantic view props to reflect meaning."}),`
`,i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[i.jsx(e,{direction:"horizontal",view:"primary"}),i.jsx(e,{direction:"horizontal",view:"success"}),i.jsx(e,{direction:"horizontal",view:"warning"}),i.jsx(e,{direction:"horizontal",view:"danger"}),i.jsx(e,{direction:"horizontal",view:"disabled"})]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
  <Divider direction="horizontal" view="primary" />
  <Divider direction="horizontal" view="success" />
  <Divider direction="horizontal" view="warning" />
  <Divider direction="horizontal" view="danger" />
  <Divider direction="horizontal" view="disabled" />
</div>
`})}),`
`,i.jsx(n.p,{children:"Usage context:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"primary"})," → Neutral separation"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"success"})," → Positive context (e.g. completed tasks)"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"warning"})," → Important notices"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"danger"})," → Critical / destructive context"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"disabled"})," → Muted or inactive content"]}),`
`]}),`
`,i.jsx(n.h4,{children:"Vertical divider"}),`
`,i.jsx(n.p,{children:"Creates a vertical separation between inline or flex items."}),`
`,i.jsxs("div",{style:{display:"flex",height:100,gap:"8px"},children:[i.jsx("div",{children:"Left Content"}),i.jsx(e,{direction:"vertical",height:"80%"}),i.jsx("div",{children:"Right Content"})]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<div style={{ display: "flex", height: 100, gap: "8px" }}>
  <div>Left Content</div>
  <Divider direction="vertical" height="80%" />
  <div>Right Content</div>
</div>
`})}),`
`,i.jsx(n.p,{children:"Notes:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Default height is 100%"}),`
`,i.jsx(n.li,{children:"Width controls thickness"}),`
`,i.jsx(n.li,{children:"Useful for sidebars, toolbars, and multi-column layouts"}),`
`]}),`
`,i.jsx(n.h4,{children:"Custom alignment (horizontal only)"}),`
`,i.jsx(n.p,{children:"Control horizontal divider positioning relative to its container."}),`
`,i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[i.jsx(e,{direction:"horizontal",align:"left",width:"50%",children:i.jsx(n.p,{children:"Left"})}),i.jsx(e,{direction:"horizontal",align:"center",width:"75%",children:i.jsx(n.p,{children:"Center"})}),i.jsx(e,{direction:"horizontal",align:"right",width:"50%",children:i.jsx(n.p,{children:"Right"})})]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
  <Divider direction="horizontal" align="left" width="50%">
    Left
  </Divider>
  <Divider direction="horizontal" align="center" width="75%">
    Center
  </Divider>
  <Divider direction="horizontal" align="right" width="50%">
    Right
  </Divider>
</div>
`})}),`
`,i.jsx(n.p,{children:"Alignment does not apply to vertical dividers."}),`
`,i.jsx(n.h4,{children:"Custom dimensions"}),`
`,i.jsx(n.p,{children:"Change width and thickness for finer control."}),`
`,i.jsx(e,{direction:"horizontal",width:"200px",height:"2px",view:"warning"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<Divider direction="horizontal" width="200px" height="2px" view="warning" />
`})}),`
`,i.jsx(n.p,{children:"Overrides default dimensions with custom values. For horizontal dividers:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"width"})," controls length"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"height"})," controls thickness"]}),`
`]}),`
`,i.jsx(n.p,{children:"For vertical dividers:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"width"})," controls thickness"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"height"})," controls length"]}),`
`]}),`
`,i.jsx(n.h4,{children:"In lists and cards"}),`
`,i.jsx(n.p,{children:"Use dividers to visually separate list items, card sections, or form parts."}),`
`,i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Team Members"}),i.jsx(e,{direction:"horizontal"}),i.jsxs("ul",{children:[i.jsx("li",{children:"John Doe"}),i.jsx(e,{direction:"horizontal"}),i.jsx("li",{children:"Jane Smith"}),i.jsx(e,{direction:"horizontal",view:"success"}),i.jsx("li",{children:"Mike Johnson"})]})]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<div className="card">
  <h3>Team Members</h3>
  <Divider direction="horizontal" />

  <ul>
    <li>John Doe</li>
    <Divider direction="horizontal" />
    <li>Jane Smith</li>
    <Divider direction="horizontal" view="success" />
    <li>Mike Johnson</li>
  </ul>
</div>
`})}),`
`,i.jsx(n.p,{children:"Practical usage in content containers. Use dividers to separate:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Headers from content"}),`
`,i.jsx(n.li,{children:"List items"}),`
`,i.jsx(n.li,{children:"Form sections"}),`
`,i.jsx(n.li,{children:"Card elements"}),`
`]}),`
`,i.jsx(n.h4,{children:"Accessibility"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Decorative only, has no semantic meaning"}),`
`,i.jsxs(n.li,{children:["Use ",i.jsx(n.code,{children:'role="separator"'})," if semantic announcement is needed"]}),`
`,i.jsx(n.li,{children:"Ensure color contrast ≥ 3:1"}),`
`,i.jsx(n.li,{children:"Do not rely on color alone to convey meaning"}),`
`]}),`
`,i.jsx(n.h4,{children:"Best practices"}),`
`,i.jsx(n.h5,{children:"When to use"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Between distinct sections"}),`
`,i.jsx(n.li,{children:"To separate dense list items"}),`
`,i.jsx(n.li,{children:"Inside cards and panels"}),`
`,i.jsx(n.li,{children:"In forms to group related fields"}),`
`,i.jsx(n.li,{children:"In toolbars and sidebars"}),`
`]}),`
`,i.jsx(n.h5,{children:"When to avoid"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Between tightly coupled elements"}),`
`,i.jsx(n.li,{children:"As a replacement for proper spacing"}),`
`,i.jsx(n.li,{children:"More than 2–3 consecutive dividers"}),`
`,i.jsx(n.li,{children:"Without clear visual purpose"}),`
`]})]})}function h(r={}){const{wrapper:n}={...t(),...r.components};return n?i.jsx(n,{...r,children:i.jsx(s,{...r})}):s(r)}export{h as default,c as frontmatter};
