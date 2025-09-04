import{j as e}from"./index-jR0FLVqU.js";import{F as t}from"./styles-B8Yckata.js";import{A as s}from"./Avatar-Ck9eAlGw.js";import{A as l}from"./avatar2-U2IOHYoY.js";import{u as r}from"./index-BOxoqHcG.js";import{c as o}from"./createReactComponent-R_WhpXRX.js";import"./Title-DYSXEtp2.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]],d=o("outline","user","User",c),h="/assets/icon-CRJJgMwt.png",v={package:"@quen-ui/components",title:"Avatar",order:1,group:"components",description:"The Avatar component displays user profile pictures, initials, or icons with optional status indicators and text labels. It gracefully handles image loading errors by falling back to customizable alternatives.",import:"import { Avatar } from '@quen-ui/components';",source:"/packages/components/src/Avatar/Avatar.tsx"};function a(i){const n={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Multiple size variants"}),`
`,e.jsx(n.li,{children:"Automatic initials generation when no image is provided"}),`
`,e.jsx(n.li,{children:"Customizable fallback content"}),`
`,e.jsxs(n.li,{children:["Status indicators (",e.jsx(n.code,{children:"online"}),"/",e.jsx(n.code,{children:"offline"}),")"]}),`
`,e.jsx(n.li,{children:"Optional text label with description"}),`
`,e.jsx(n.li,{children:"Responsive and accessible by default"}),`
`]}),`
`,e.jsx(n.h4,{children:"Basic usage"}),`
`,e.jsxs(n.p,{children:["Use an avatar with a profile picture and name for clear user identification. The ",e.jsx(n.code,{children:"name"})," prop is important for accessibility and fallback initials."]}),`
`,e.jsx(s,{src:h,name:"Jane Smith",size:"l"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Avatar
  src="/path/to/image.jpg"
  name="Jane Smith"
  size="l"
/>
`})}),`
`,e.jsx(n.h4,{children:"With status indicator"}),`
`,e.jsx(n.p,{children:"Add a status indicator to show presence information (e.g., online, offline). This is useful in chat apps, dashboards, or collaboration tools."}),`
`,e.jsx(s,{src:l,name:"Jon Connor",status:"online"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Avatar
  src="/user.jpg"
  name="Jon Connor"
  status="online"
/>
`})}),`
`,e.jsx(n.h4,{children:"Initials fallback"}),`
`,e.jsxs(n.p,{children:["If no image is provided, the avatar will automatically generate initials from the ",e.jsx(n.code,{children:"name"}),". This ensures consistent visual representation even without profile pictures."]}),`
`,e.jsx(s,{name:"Alan Turing"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Avatar name="Alan Turing" />
`})}),`
`,e.jsx(n.h4,{children:"Custom initials colors"}),`
`,e.jsx(n.p,{children:"By default, initials have an auto-generated background color. You can customize the palette by passing an array of allowed colors. This is helpful for aligning avatars with brand colors."}),`
`,e.jsx(s,{name:"Grace Hopper",allowedInitialsColors:["#FF6B6B","#6C5CE7"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Avatar
  name="Grace Hopper"
  allowedInitialsColors={["#FF6B6B", "#6C5CE7"]}
/>
`})}),`
`,e.jsx(n.h4,{children:"With label"}),`
`,e.jsxs(n.p,{children:["Avatars can include a ",e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"description"}),", making them useful in user directories, member lists, or team overviews."]}),`
`,e.jsx(s,{name:"Tim Berners-Lee",isLabel:!0,description:"Inventor of the Web"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Avatar
  name="Tim Berners-Lee"
  isLabel
  description="Inventor of the Web"
/>
`})}),`
`,e.jsx(n.h4,{children:"Custom fallback content"}),`
`,e.jsx(n.p,{children:"Instead of initials, you can provide custom fallback content such as an icon. This is useful for representing system users, bots, or anonymous accounts."}),`
`,e.jsx(s,{children:e.jsx(d,{width:24,height:24})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Avatar>
  <IconUser width={24} height={24} />
</Avatar>
`})}),`
`,e.jsx(n.h4,{children:"Different sizes"}),`
`,e.jsxs(n.p,{children:["The avatar supports multiple size variants (",e.jsx(n.code,{children:"xs"}),", ",e.jsx(n.code,{children:"s"}),", ",e.jsx(n.code,{children:"m"}),", ",e.jsx(n.code,{children:"l"}),"). Use smaller sizes in compact layouts (e.g., tables) and larger ones for user profiles or detail views."]}),`
`,e.jsxs(t,{gap:16,align:"center",children:[e.jsx(s,{size:"xs",name:"XS"}),e.jsx(s,{size:"s",name:"S"}),e.jsx(s,{size:"m",name:"M"}),e.jsx(s,{size:"l",name:"L"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex gap={16} align="center">
  <Avatar size="xs" name="XS" />
  <Avatar size="s" name="S" />
  <Avatar size="m" name="M" />
  <Avatar size="l" name="L" />
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Automatic ARIA labels based on the ",e.jsx(n.code,{children:"name"})," prop"]}),`
`,e.jsx(n.li,{children:"Keyboard-navigable when interactive"}),`
`,e.jsx(n.li,{children:"Ensures text and background color contrast meets WCAG 2.1 AA"}),`
`,e.jsxs(n.li,{children:["Proper ",e.jsx(n.code,{children:"alt"})," handling for user images"]}),`
`]}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always provide ",e.jsx(n.code,{children:"name"}),": It improves accessibility and ensures a fallback (initials)."]}),`
`,e.jsx(n.li,{children:"Use status indicators sparingly: Only show presence information when it’s meaningful in context."}),`
`,e.jsxs(n.li,{children:["Keep labels short: Limit ",e.jsx(n.code,{children:"description"})," to a short phrase or role."]}),`
`,e.jsx(n.li,{children:"Prefer initials over blank avatars: They maintain consistency in lists and directories."}),`
`,e.jsx(n.li,{children:"Use consistent sizing: Match avatar size to the density of the UI (e.g., small for tables, large for profile pages)."}),`
`]}),`
`,e.jsx(n.h4,{children:"Troubleshooting"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Broken images: Ensure ",e.jsx(n.code,{children:"src"})," paths are correct or provide a fallback."]}),`
`,e.jsx(n.li,{children:"Random initials colors: Pass allowedInitialsColors for predictable brand-aligned colors."}),`
`,e.jsx(n.li,{children:"Misaligned avatars: Wrap multiple avatars with Flex or another layout container."}),`
`,e.jsx(n.li,{children:"Performance issues: Preload important avatars and use optimized formats like WebP."}),`
`]})]})}function b(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{b as default,v as frontmatter};
