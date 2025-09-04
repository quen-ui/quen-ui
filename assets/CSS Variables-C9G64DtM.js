import{j as e,g as o,a as t}from"./index-jR0FLVqU.js";import{u as a}from"./index-BOxoqHcG.js";const h={title:"CSS variables",group:"theming",order:5};function l(r){const n={code:"code",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"QuenUI automatically generates a comprehensive set of CSS variables from your theme configuration, providing consistent, theme-aware styling across your entire application. These variables are available globally and update dynamically when the theme changes."}),`
`,e.jsx(n.h4,{children:"What are CSS variables?"}),`
`,e.jsx(n.p,{children:"CSS variables (--name) allow values defined once to be used throughout the application - with the ability to dynamically change the theme and be overridden locally."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --quen-ui-color-primary: #6246ea;
}
.button {
  background-color: var(--quen-ui-color-primary);
}
`})}),`
`,e.jsx(n.h4,{children:"Core variable groups"}),`
`,e.jsx(n.h5,{children:"Color variables"}),`
`,e.jsxs(n.p,{children:["Generated from your ",e.jsx(n.code,{children:"theme.colors"})," configuration:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  /* ...through 9 */

  /* All color families */
  --quen-ui-color-violet-1: #edeafc;
  --quen-ui-color-violet-9: #6246ea;
  --quen-ui-color-gray-1: #fffffe;
  --quen-ui-color-gray-9: #1c1c1c;
  /* ...other color families */

  /* Semantic colors */
  --quen-ui-color-text: var(--color-gray-9);
  --quen-ui-color-border: var(--color-grayViolet-4);
}
`})}),`
`,e.jsx(n.h5,{children:"Typography variables"}),`
`,e.jsxs(n.p,{children:["Generated from ",e.jsx(n.code,{children:"theme.fonts"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  /* Header variables */
  --quen-ui-font-header-size-2xl: 2.25rem;
  --quen-ui-font-header-lineheight-2xl: 2.5rem;
  --quen-ui-font-header-weight: 700;

  /* Text variables */
  --quen-ui-font-text-size-m: 1rem;
  --quen-ui-font-text-lineheight-m: 1.5rem;
  --quen-ui-font-text-weight: 400;
}
`})}),`
`,e.jsx(n.h5,{children:"Spacing variables"}),`
`,e.jsxs(n.p,{children:["Generated from ",e.jsx(n.code,{children:"theme.space"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --quen-ui-space-xs: 0.25rem;
  --quen-ui-space-s: 0.5rem;
  --quen-ui-space-m: 1rem;
  --quen-ui-space-l: 1.5rem;
  --quen-ui-space-xl: 2rem;
}
`})}),`
`,e.jsx(n.h4,{children:"Using CSS variables"}),`
`,e.jsx(n.h5,{children:"Directly in stylesheets"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.custom-element {
  background-color: var(--quen-ui-color-body);
  color: var(--quen-ui-color-text);
  padding: var(--quen-ui-space-m);
  font-size: var(--quen-ui-font-text-size-m);
  line-height: var(--quen-ui-font-text-lineheight-m);
}
`})}),`
`,e.jsx(n.h5,{children:"Styled components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const StyledDiv = styled.div\`
  background: var(--quen-ui-color-body);
  border: 1px solid var(--quen-ui-color-border);
  padding: var(--quen-ui-space-l);

  h2 {
    font-size: var(--quen-ui-font-header-size-m);
    color: var(--quen-ui-color-violet-9);
  }
\`;
`})}),`
`,e.jsx(n.h5,{children:"Inline styles"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function ThemedComponent() {
  return (
    <div style={{
      backgroundColor: 'var(--quen-ui-color-background)',
      color: 'var(--quen-ui-color-text)',
      padding: 'var(--quen-ui-space-xl)'
    }}>
      Content
    </div>
  );
}
`})}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Variable Usage Guidelines"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Prefer variables over hardcoded values: Always use CSS variables for theme-dependent values"}),`
`,e.jsx(n.li,{children:"Semantic naming: Use --color-text rather than --color-gray-9 for maintainability"}),`
`,e.jsx(n.li,{children:"Fallback values: Provide fallbacks for critical properties"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`color: var(--color-text, #1a1a1a);
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Performance Optimization"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Limit custom properties: Avoid excessive unique variables"}),`
`,e.jsx(n.li,{children:"Use native variables: For non-theme values, use native CSS rather than variables"}),`
`,e.jsx(n.li,{children:"Scope appropriately: Prefer root-level variables for theme values"}),`
`]}),`
`,e.jsx(n.h4,{children:"Variables list"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Default value"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:o(t).map(([s,i])=>e.jsxs("tr",{children:[e.jsx("td",{children:s}),e.jsx("td",{children:i}),e.jsx("td",{children:i[0]==="#"&&e.jsx("div",{style:{width:50,height:"30px",background:i}})})]}))})]})]})}function u(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{u as default,h as frontmatter};
