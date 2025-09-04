import{j as e}from"./index-jR0FLVqU.js";import{F as s,B as t}from"./styles-B8Yckata.js";import{T as l}from"./TextField-BRqdTVP1.js";import{u as o}from"./index-BOxoqHcG.js";const h={package:"@quen-ui/components",title:"Flex",order:1,group:"components",description:"The Flex component is a powerful layout primitive that provides a flexible, responsive container for arranging child elements. Built on CSS Flexbox, it simplifies complex layouts while ensuring consistent spacing and alignment across your application.",import:"import { Flex } from '@quen-ui/components';",source:"/packages/components/src/Flex/Flex.tsx",demo:!1};function r(i){const n={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Basic centered layout"}),`
`,e.jsxs(n.p,{children:["Creates a horizontally centered row of buttons with equal spacing (",e.jsx(n.code,{children:'gap="m"'}),") from the theme spacing scale."]}),`
`,e.jsxs(s,{align:"center",justify:"center",gap:"m",children:[e.jsx(t,{children:"Button"}),e.jsx(t,{size:"l",children:"Button"}),e.jsx(t,{children:"Button"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex align="center" justify="center" gap="m">
  <Button>Button</Button>
  <Button size="l">Button</Button>
  <Button>Button</Button>
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Form layout with consistent spacing"}),`
`,e.jsxs(n.p,{children:["Builds a vertical form layout with consistent row spacing ",e.jsx(n.code,{children:'(rowGap="l")'})," and right-aligned action buttons in the footer."]}),`
`,e.jsxs(s,{direction:"column",rowGap:"l",children:[e.jsx(l,{label:"Name"}),e.jsx(l,{label:"Email"}),e.jsxs(s,{gap:"m",justify:"flex-end",children:[e.jsx(t,{view:"ghost",children:"Cancel"}),e.jsx(t,{children:"Submit"})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex direction="column" rowGap="l">
  <TextField label="Name" />
  <TextField label="Email" />
  <Flex gap="m" justify="flex-end">
    <Button view="ghost">Cancel</Button>
    <Button>Submit</Button>
  </Flex>
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Responsive wrapping layout"}),`
`,e.jsx(n.p,{children:"Demonstrates wrapping behavior for responsive layouts. Items automatically wrap to the next line when space is limited."}),`
`,e.jsxs(s,{gap:"m",wrap:"wrap",children:[e.jsx(t,{children:"Tag 1"}),e.jsx(t,{children:"Tag 2"}),e.jsx(t,{children:"Tag 3"}),e.jsx(t,{children:"Tag 4"}),e.jsx(t,{children:"Tag 5"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex gap="m" wrap="wrap">
  <Button>Tag 1</Button>
  <Button>Tag 2</Button>
  <Button>Tag 3</Button>
  <Button>Tag 4</Button>
  <Button>Tag 5</Button>
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Alignments example"}),`
`,e.jsxs(n.p,{children:["Demonstrates vertical alignment options (",e.jsx(n.code,{children:"flex-start"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"flex-end"}),") inside a flex container."]}),`
`,e.jsxs(s,{direction:"column",gap:"s",children:[e.jsxs(s,{align:"flex-start",gap:"s",children:[e.jsx(t,{children:"Left"}),e.jsx(t,{children:"Aligned"})]}),e.jsxs(s,{align:"center",gap:"s",children:[e.jsx(t,{children:"Center"}),e.jsx(t,{children:"Aligned"})]}),e.jsxs(s,{align:"flex-end",gap:"s",children:[e.jsx(t,{children:"Right"}),e.jsx(t,{children:"Aligned"})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex direction="column" gap="s">
  <Flex align="flex-start" gap="s">
    <Button>Left</Button>
    <Button>Aligned</Button>
  </Flex>
  <Flex align="center" gap="s">
    <Button>Center</Button>
    <Button>Aligned</Button>
  </Flex>
  <Flex align="flex-end" gap="s">
    <Button>Right</Button>
    <Button>Aligned</Button>
  </Flex>
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use semantic HTML via the ",e.jsx(n.code,{children:"as"})," prop (e.g., render as ",e.jsx(n.code,{children:"nav"}),", ",e.jsx(n.code,{children:"section"}),", ",e.jsx(n.code,{children:"header"})," for proper landmarks)."]}),`
`,e.jsx(n.li,{children:"Maintain logical tab order by preserving DOM order."}),`
`,e.jsx(n.li,{children:"Ensure sufficient color contrast for nested interactive elements."}),`
`,e.jsx(n.li,{children:"Test layouts with keyboard navigation and screen readers."}),`
`]}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Consistent Gutters: Always use theme spacing tokens (",e.jsx(n.code,{children:'gap="m"'}),", ",e.jsx(n.code,{children:'rowGap="l"'}),") for consistent layout rhythm across the app."]}),`
`,e.jsxs(n.li,{children:["Vertical Rhythm: Prefer ",e.jsx(n.code,{children:"rowGap"})," in vertical (",e.jsx(n.code,{children:"column"}),") layouts to create consistent vertical spacing."]}),`
`,e.jsx(n.li,{children:"Nested Spacing: Use smaller gaps in nested containers to avoid excessive whitespace."}),`
`,e.jsxs(n.li,{children:["Responsive Adjustments: Apply wrapping (",e.jsx(n.code,{children:'wrap="wrap"'}),") or reduce gaps on smaller screens to keep layouts compact."]}),`
`]})]})}function p(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{p as default,h as frontmatter};
