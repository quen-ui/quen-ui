import{j as e}from"./index-jR0FLVqU.js";import{B as r,F as o}from"./styles-B8Yckata.js";import{A as n}from"./Alert-CWsO4jdW.js";import{u as l}from"./index-BOxoqHcG.js";import{c}from"./createReactComponent-R_WhpXRX.js";import"./Title-DYSXEtp2.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=[["path",{d:"M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]],d=c("outline","rosette-discount-check","RosetteDiscountCheck",a),g={package:"@quen-ui/components",title:"Alert",order:1,group:"components",description:"The Alert component displays prominent messages to users with flexible content, multiple visual styles, and interactive controls. Supports status notifications, success confirmations, warnings, and error messages.",import:"import { Alert } from '@quen-ui/components';",source:"/packages/components/src/Alert/Alert.tsx"};function t(i){const s={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h4,{children:"Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Four alert types: ",e.jsx(s.code,{children:"success"}),", ",e.jsx(s.code,{children:"warning"}),", ",e.jsx(s.code,{children:"danger"}),", ",e.jsx(s.code,{children:"info"})]}),`
`,e.jsxs(s.li,{children:["Optional ",e.jsx(s.code,{children:"title"}),", ",e.jsx(s.code,{children:"description"}),", and ",e.jsx(s.code,{children:"icon"})]}),`
`,e.jsx(s.li,{children:"Action area for custom buttons or links"}),`
`,e.jsx(s.li,{children:"Closable via a built-in close button"}),`
`,e.jsxs(s.li,{children:["Fully customizable via ",e.jsx(s.code,{children:"className"})," and ",e.jsx(s.code,{children:"style"})]}),`
`]}),`
`,e.jsx(s.h4,{children:"Basic info Alert"}),`
`,e.jsx(s.p,{children:"Use an info alert when you want to highlight a neutral, helpful message that doesn’t require user action. It works best for general notifications."}),`
`,e.jsx(n,{title:"Heads up!",description:"This is an informational message.",type:"info"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Alert
  title="Heads up!"
  description="This is an informational message."
  type="info"
/>
`})}),`
`,e.jsx(s.h4,{children:"Success Alert with Icon"}),`
`,e.jsx(s.p,{children:"Success alerts confirm positive outcomes, such as saving changes or completing an action. Adding an icon helps users quickly recognize the status."}),`
`,e.jsx(n,{title:"Success!",description:"Your changes have been saved.",type:"success",icon:e.jsx(d,{})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { IconRosetteDiscountCheck } from "@tabler/icons-react";

<Alert
  title="Success!"
  description="Your changes have been saved."
  type="success"
  icon={<IconRosetteDiscountCheck />}
/>
`})}),`
`,e.jsx(s.h4,{children:"Warning Alert with Action"}),`
`,e.jsxs(s.p,{children:[`Warnings notify users about potential problems or limitations.
Adding an `,e.jsx(s.code,{children:"action"})," (e.g., “Upgrade Plan”) helps guide the user toward solving the issue."]}),`
`,e.jsx(n,{title:"Storage almost full",description:"You are using 95% of your storage capacity.",type:"warning",isClosable:!0,action:e.jsx(r,{size:"s",children:"Upgrade Plan"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Alert
  title="Storage almost full"
  description="You are using 95% of your storage capacity."
  type="warning"
  isClosable
  action={<Button size="s">Upgrade Plan</Button>}
/>
`})}),`
`,e.jsx(s.h4,{children:"Closable Alert"}),`
`,e.jsx(s.p,{children:"Use closable alerts when the message is temporary or dismissible. This gives users control and reduces interface clutter once they have acknowledged the message."}),`
`,e.jsx(n,{title:"Session expired",description:"Please log in again to continue.",type:"danger",isClosable:!0,onClose:()=>alert("Alert closed")}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Alert
  title="Session expired"
  description="Please log in again to continue."
  type="danger"
  isClosable
  onClose={() => console.log("Alert closed")}
/>
`})}),`
`,e.jsx(s.h4,{children:"Sized variants"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"size"})," prop adjusts the density of the alert."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"s"})," works best for compact layouts or inline usage"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"m"})," is the default and most commonly used"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"l"})," is more prominent and ideal for critical or system-wide notifications"]}),`
`]}),`
`,e.jsxs(o,{gap:12,direction:"column",children:[e.jsx(n,{size:"s",title:"Compact",description:"Small alert"}),e.jsx(n,{size:"m",title:"Default",description:"Medium alert"}),e.jsx(n,{size:"l",title:"Large",description:"Prominent alert"})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Flex gap={12} direction="column">
  <Alert size="s" title="Compact" description="Small alert" />
  <Alert size="m" title="Default" description="Medium alert" />
  <Alert size="l" title="Large" description="Prominent alert" />
</Flex>
`})}),`
`,e.jsx(s.h4,{children:"Custom styling"}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"className"})," and ",e.jsx(s.code,{children:"style"})," for custom design needs, such as adding a brand accent or highlighting a special alert. Avoid overusing custom styles to keep alerts consistent across the product."]}),`
`,e.jsx(n,{style:{borderLeft:"4px solid purple"},className:"custom-alert",title:"Default",description:"Medium alert"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Alert
  style={{ borderLeft: '4px solid purple' }}
  className="custom-alert"
 title="Default" description="Medium alert"
/>
`})}),`
`,e.jsx(s.h4,{children:"Accessibility"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["ARIA ",e.jsx(s.code,{children:'role="alert"'})," for important messages"]}),`
`,e.jsx(s.li,{children:"Color contrast meets WCAG 2.1 AA"}),`
`,e.jsx(s.li,{children:"Close button is fully keyboard accessible"}),`
`]}),`
`,e.jsx(s.h4,{children:"Best Practices"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Prioritize clarity: Always provide a clear ",e.jsx(s.code,{children:"title"})," for important messages."]}),`
`,e.jsxs(s.li,{children:["Keep it concise: Limit ",e.jsx(s.code,{children:"description"})," text to 1–2 short sentences."]}),`
`,e.jsxs(s.li,{children:["Use severity wisely: Reserve ",e.jsx(s.code,{children:'type="danger"'})," for errors or blocking issues; use warning for cautionary notices."]}),`
`,e.jsxs(s.li,{children:["Don’t overload actions: Add an ",e.jsx(s.code,{children:"action"})," button only when immediate user response is required."]}),`
`,e.jsx(s.li,{children:"Be consistent with icons: Use icons that clearly represent the message type and keep them at a consistent size (16–20px recommended)."}),`
`]}),`
`,e.jsx(s.h4,{children:"Troubleshooting"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Alert not closing: Make sure ",e.jsx(s.code,{children:"isClosable"})," is set and ",e.jsx(s.code,{children:"onClose"})," is handled properly."]}),`
`,e.jsxs(s.li,{children:["Missing styles: Verify your app is wrapped with ",e.jsx(s.code,{children:"QuenUIProvider"}),"."]}),`
`,e.jsx(s.li,{children:"Icon alignment issues: Use icons with square dimensions to maintain vertical alignment."}),`
`]})]})}function f(i={}){const{wrapper:s}={...l(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(t,{...i})}):t(i)}export{f as default,g as frontmatter};
