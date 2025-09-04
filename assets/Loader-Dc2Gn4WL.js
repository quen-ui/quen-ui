import{j as e}from"./index-jR0FLVqU.js";import{F as i,b as s}from"./styles-B8Yckata.js";import{u as t}from"./index-BOxoqHcG.js";const d={package:"@quen-ui/components",title:"Loader",order:1,group:"components",description:"The Loader component displays a configurable loading indicator for asynchronous operations or content fetching. It supports multiple visual styles and granular size control.",import:"import { Loader } from '@quen-ui/components';",source:"/packages/components/src/Loader/Loader.tsx"};function r(o){const n={code:"code",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Basic usage"}),`
`,e.jsx(n.p,{children:"Default loader without customization. Useful for simple cases where a generic loading state is needed."}),`
`,e.jsxs(i,{gap:"m",direction:"column",children:[e.jsx(s,{}),e.jsx(s,{view:"bars",size:"l"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function Demo() {
  return (
    <Flex gap="m" direction="column">
      <Loader />
      <Loader view="bars" size="l" />
    </Flex>
  );
}
`})}),`
`,e.jsx(n.h4,{children:"Visual styles"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"view"})," prop defines the loader’s animation style. Choose between ",e.jsx(n.code,{children:"oval"}),", ",e.jsx(n.code,{children:"bars"}),", and ",e.jsx(n.code,{children:"dots"})," depending on the context."]}),`
`,e.jsxs(i,{gap:"m",direction:"column",children:[e.jsx(s,{view:"oval"}),e.jsx(s,{view:"bars"}),e.jsx(s,{view:"dots"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex gap="m" direction="column">
  <Loader view="oval" />
  <Loader view="bars" />
  <Loader view="dots" />
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Sizing options"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"size"})," prop accepts both design tokens (",e.jsx(n.code,{children:"xs"}),", ",e.jsx(n.code,{children:"s"}),", ",e.jsx(n.code,{children:"m"}),", ",e.jsx(n.code,{children:"l"}),") and custom numeric values. Use tokens for consistency with the design system, and numbers for precise control."]}),`
`,e.jsxs(i,{gap:"m",direction:"column",children:[e.jsx(s,{size:"xs"}),e.jsx(s,{size:"s"}),e.jsx(s,{size:"m"}),e.jsx(s,{size:"l"}),e.jsx(s,{size:60})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex gap="m" direction="column">
  <Loader size="xs" />
  <Loader size="s" />
  <Loader size="m" />
  <Loader size="l" />
  <Loader size={60} />
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsx(n.h5,{children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Initial page load — during app bootstrap"}),`
`,e.jsx(n.li,{children:"Data fetching — indicate async operations (API calls, DB queries)"}),`
`,e.jsx(n.li,{children:"Form submissions — show processing state after user action"}),`
`,e.jsx(n.li,{children:"Content transitions — route changes, tab switching"}),`
`,e.jsx(n.li,{children:"Background processes — long-running tasks (exports, calculations)"}),`
`]}),`
`,e.jsx(n.h5,{children:"When to not use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Instant actions — avoid loaders for operations under 300 ms"}),`
`,e.jsx(n.li,{children:"As decoration — loaders should always represent actual activity"}),`
`,e.jsx(n.li,{children:"Static content — don’t display loaders permanently without state"}),`
`]})]})}function h(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{h as default,d as frontmatter};
