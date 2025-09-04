import{r,j as e}from"./index-jR0FLVqU.js";import{B as l,F as c}from"./styles-B8Yckata.js";import{T as t}from"./TextField-BRqdTVP1.js";import{M as o}from"./Modal-BYpqlKU8.js";import{u as d}from"./index-BOxoqHcG.js";import"./Title-DYSXEtp2.js";import"./useTransitionState-DSLsPxYc.js";const i=()=>e.jsxs(c,{direction:"column",gap:"m",children:[e.jsx(t,{label:"First Name",isRequired:!0}),e.jsx(t,{label:"Last Name",isRequired:!0}),e.jsx(t,{label:"Email",isRequired:!0})]}),p=()=>{const[n,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>s(!0),children:"Modal open"}),e.jsx(o,{isOpen:n,onClickClose:()=>s(!1),title:"Confirmation",description:"Are you sure you want to proceed?",footer:e.jsx(l,{onClick:()=>s(!1),children:"Yes"})})]})},u=()=>{const[n,s]=r.useState(null);return console.log(n),e.jsxs(e.Fragment,{children:[e.jsxs(c,{gap:"m",children:[e.jsx(l,{onClick:()=>s("xs"),children:"xs"}),e.jsx(l,{onClick:()=>s("s"),children:"s"}),e.jsx(l,{onClick:()=>s("m"),children:"m"}),e.jsx(l,{onClick:()=>s("l"),children:"l"})]}),e.jsx(o,{size:"xs",isOpen:n==="xs",isCloseButton:!0,onClickClose:()=>s(null),title:"Mini Modal",children:e.jsx(i,{})}),e.jsx(o,{size:"s",isOpen:n==="s",isCloseButton:!0,onClickClose:()=>s(null),title:"Small Modal",children:e.jsx(i,{})}),e.jsx(o,{size:"m",isOpen:n==="m",isCloseButton:!0,onClickClose:()=>s(null),title:"Default Modal",children:e.jsx(i,{})}),e.jsx(o,{size:"l",isOpen:n==="l",isCloseButton:!0,onClickClose:()=>s(null),title:"Large Modal",children:e.jsx(i,{})})]})},x=()=>{const[n,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>s(!0),children:"Modal open"}),e.jsx(o,{onEsc:()=>s(!1),isCloseButton:!0,isOpen:n,isFullScreen:!0,title:"Full Screen Modal",onClickClose:()=>s(!1),children:e.jsx("p",{children:"Content that spans the entire viewport height and width."})})]})},y={package:"@quen-ui/components",title:"Modal",order:1,group:"components",description:"The Loader component displays a configurable loading indicator for asynchronous operations or content fetching. It supports multiple visual styles and granular size control.",import:"import { Modal } from '@quen-ui/components';",source:"/packages/components/src/Modal/Modal.tsx",demo:!1};function a(n){const s={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h4,{children:"Basic usage"}),`
`,e.jsx(s.p,{children:"A modal is typically used for confirmations, alerts, or contextual actions. This example shows a confirmation dialog with a title, description, and footer action button."}),`
`,e.jsx(p,{}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Modal
  isOpen={modalOpen}
  onClickClose={() => setModalOpen(false)}
  title="Confirmation"
  description="Are you sure you want to proceed?"
  footer={<Button onClick={() => setModalOpen(false)}>Yes</Button>}
/>
`})}),`
`,e.jsx(s.h4,{children:"Size variants"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"size"})," prop controls the width of the modal content. Use predefined sizes (",e.jsx(s.code,{children:"xs"}),", ",e.jsx(s.code,{children:"s"}),", ",e.jsx(s.code,{children:"m"}),", ",e.jsx(s.code,{children:"l"}),") for consistency across the design system."]}),`
`,e.jsx(u,{}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`  <Modal isOpen title="Mini Modal" size="xs" />
  <Modal isOpen title="Small Modal" size="s" />
  <Modal isOpen title="Default Modal" size="m" />
  <Modal isOpen title="Large Modal" size="l" />
`})}),`
`,e.jsx(s.h4,{children:"Full‑screen modal"}),`
`,e.jsx(s.p,{children:"Fullscreen mode is useful for immersive flows, mobile devices, or complex forms. It expands to cover the entire viewport, while still providing standard close actions."}),`
`,e.jsx(x,{}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Modal
  onEsc={() => setModalOpen(false)}
  isCloseButton
  isOpen={modalOpen}
  isFullScreen
  title="Full Screen Modal"
  onClickClose={() => setModalOpen(false)}>
  <p>Content that spans the entire viewport height and width.</p>
</Modal>
`})}),`
`,e.jsx(s.h4,{children:"Best practices"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Always include a title — provides context and improves accessibility."}),`
`,e.jsx(s.li,{children:"Use description sparingly — only when additional clarity is required."}),`
`,e.jsx(s.li,{children:"Place actions in the footer — primary/secondary buttons like Save, Cancel, Confirm."}),`
`,e.jsx(s.li,{children:"Enable close button and Esc support — users expect consistent exit patterns."}),`
`,e.jsx(s.li,{children:"Use fullscreen wisely — for mobile or immersive tasks, not for simple prompts."}),`
`,e.jsx(s.li,{children:"Stick to design-system sizes — ensures consistent layout across the app."}),`
`,e.jsx(s.li,{children:"Hide all exit options — avoid trapping the user."}),`
`,e.jsx(s.li,{children:"Overuse fullscreen modals — can feel overwhelming for small tasks."}),`
`,e.jsx(s.li,{children:"Apply excessive custom CSS — prefer theme tokens and provided props."}),`
`,e.jsx(s.li,{children:"Overlap too many modals — stacking creates confusion; avoid unless necessary."}),`
`]})]})}function k(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{k as default,y as frontmatter};
