import{j as e}from"./index-jR0FLVqU.js";import{F as r}from"./styles-B8Yckata.js";import{B as s}from"./Badge-wDsJ4EGH.js";import{u as o}from"./index-BOxoqHcG.js";import{I as l}from"./IconBell-sdGRtalo.js";import{c as a}from"./createReactComponent-R_WhpXRX.js";import{I as t}from"./IconLock-UVTLDYla.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M3 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M9 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M13 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]],h=a("outline","lock-open-2","LockOpen2",d),B={package:"@quen-ui/components",title:"Badge",order:1,group:"components",description:"The Badge component is a compact visual indicator used to highlight status, categories, or metadata. It supports icons, custom colors, and multiple size variants.",import:"import { Badge } from '@quen-ui/components';",source:"/packages/components/src/Badge/Badge.tsx"};function i(c){const n={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Multiple size variants (",e.jsx(n.code,{children:"xs"}),", ",e.jsx(n.code,{children:"s"}),", ",e.jsx(n.code,{children:"m"}),", ",e.jsx(n.code,{children:"l"}),")"]}),`
`,e.jsxs(n.li,{children:["Predefined semantic colors (",e.jsx(n.code,{children:"success"}),", ",e.jsx(n.code,{children:"warning"}),", ",e.jsx(n.code,{children:"danger"}),", ",e.jsx(n.code,{children:"secondary"}),")"]}),`
`,e.jsxs(n.li,{children:["Custom color support via ",e.jsx(n.code,{children:"color"})," prop"]}),`
`,e.jsxs(n.li,{children:["Optional left and right icons (",e.jsx(n.code,{children:"leftContent"}),", ",e.jsx(n.code,{children:"rightContent"}),")"]}),`
`,e.jsx(n.li,{children:"Works with text, numbers, or custom content"}),`
`,e.jsx(n.li,{children:"Accessible and responsive by default"}),`
`]}),`
`,e.jsx(n.h4,{children:"Basic usage"}),`
`,e.jsx(n.p,{children:"Use a badge to display a simple count or highlight. This is the most common form, often used for notification counters or tags."}),`
`,e.jsx(s,{children:"3"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Badge>3</Badge>
`})}),`
`,e.jsx(n.h4,{children:"Status badges"}),`
`,e.jsxs(n.p,{children:["Status badges communicate the current state of an item. Use semantic colors (",e.jsx(n.code,{children:"success"}),", ",e.jsx(n.code,{children:"warning"}),", ",e.jsx(n.code,{children:"danger"}),", ",e.jsx(n.code,{children:"secondary"}),") to ensure consistent meaning across the application."]}),`
`,e.jsxs(r,{gap:8,children:[e.jsx(s,{color:"secondary",children:"Draft"}),e.jsx(s,{color:"success",children:"Active"}),e.jsx(s,{color:"warning",children:"Pending"}),e.jsx(s,{color:"danger",children:"Expired"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex gap={8}>
  <Badge color="secondary">Draft</Badge>
  <Badge color="success">Active</Badge>
  <Badge color="warning">Pending</Badge>
  <Badge color="danger">Expired</Badge>
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"With icons"}),`
`,e.jsx(n.p,{children:"You can enhance clarity by pairing badges with icons. This works well for categories, alerts, or interactive UI elements."}),`
`,e.jsx(s,{leftContent:e.jsx(l,{size:14}),color:"danger",children:e.jsx(n.p,{children:"Alerts"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Badge leftContent={<IconBell size={14} />} color="danger">
  Alerts
</Badge>
`})}),`
`,e.jsx(n.h4,{children:"Notification counter"}),`
`,e.jsx(n.p,{children:"A badge can also be used as a compact numeric indicator, usually placed next to icons or navigation items."}),`
`,e.jsx(s,{color:"danger",children:"5"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Badge color="danger">5</Badge>
`})}),`
`,e.jsx(n.h4,{children:"Custom colors"}),`
`,e.jsx(n.p,{children:"In addition to semantic variants, you can apply custom colors. This is useful for branding or special tags."}),`
`,e.jsx(s,{color:"#6C5CE7",children:"Premium"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Badge color="#6C5CE7">Premium</Badge>
`})}),`
`,e.jsx(n.h4,{children:"Size variants"}),`
`,e.jsx(n.p,{children:"Badges come in four sizes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"xs"})," → ultra-compact, for dense UI (tables, lists)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"s"})," → small, for labels or secondary info"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"m"})," → medium (default), for general use"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"l"})," → large, for prominent tags or labels"]}),`
`]}),`
`,e.jsxs(r,{gap:8,align:"center",children:[e.jsx(s,{size:"xs",children:"xs"}),e.jsx(s,{size:"s",children:"s"}),e.jsx(s,{size:"m",children:"m"}),e.jsx(s,{size:"l",children:"l"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex gap={8} align="center">
  <Badge size="xs">xs</Badge>
  <Badge size="s">s</Badge>
  <Badge size="m">m</Badge>
  <Badge size="l">l</Badge>
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Complex content"}),`
`,e.jsx(n.p,{children:"Badges are flexible and can contain icons on both sides of the text, making them suitable for rich labels or access control indicators."}),`
`,e.jsx(s,{leftContent:e.jsx(t,{size:12}),rightContent:e.jsx(h,{size:12}),children:e.jsx(n.p,{children:"Private"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Badge
  leftContent={<IconLock size={12} />}
  rightContent={<IconLockOpen2 size={12} />}>
  Private
</Badge>
`})}),`
`,e.jsx(n.h4,{children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Automatic ARIA role="status" for dynamic badges'}),`
`,e.jsx(n.li,{children:"Color contrast meets WCAG 2.1 AA standards"}),`
`,e.jsx(n.li,{children:"Properly scales with browser text size changes"}),`
`]}),`
`,e.jsx(n.h4,{children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for short labels (1-3 words)"}),`
`,e.jsxs(n.li,{children:["Reserve red (",e.jsx(n.code,{children:"danger"}),") for urgent statuses"]}),`
`,e.jsx(n.li,{children:"Pair icons with text for clarity"}),`
`,e.jsx(n.li,{children:"Maintain consistent badge usage across application"}),`
`]})]})}function b(c={}){const{wrapper:n}={...o(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(i,{...c})}):i(c)}export{b as default,B as frontmatter};
