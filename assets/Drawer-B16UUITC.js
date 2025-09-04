import{r as i,j as n}from"./index-jR0FLVqU.js";import{B as t,F as a,C as p}from"./styles-B8Yckata.js";import{A as r}from"./Alert-CWsO4jdW.js";import{D as o}from"./Drawer-BUo8lMrn.js";import{c}from"./createReactComponent-R_WhpXRX.js";import{u as d}from"./index-BOxoqHcG.js";import"./Title-DYSXEtp2.js";import"./useTransitionState-DSLsPxYc.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]],h=c("outline","arrow-left","ArrowLeft",u);/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z",key:"svg-0"}],["path",{d:"M9 8l6 8",key:"svg-1"}],["path",{d:"M15 8l-6 8",key:"svg-2"}]],j=c("outline","xbox-x","XboxX",x),g=()=>{const[s,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:()=>e(!0),children:"Open Settings"}),n.jsx(o,{isOpen:s,onClose:()=>e(!1),position:"right",size:"m",title:"User Settings",children:"Settings Form"})]})},m=()=>{const[s,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:()=>e(!0),children:"Open Navigation"}),n.jsx(o,{isOpen:s,onClose:()=>e(!1),position:"bottom",size:"full",title:"Navigation",closeIcon:n.jsx(j,{}),children:"MobileNavigation"})]})},f=()=>{const[s,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:()=>e(!0),children:"Open Navigation"}),n.jsx(o,{isOpen:s,onClose:()=>e(!1),position:"left",size:"s",title:n.jsx("div",{className:"logo-header",children:n.jsx("span",{children:"Navigation"})}),noCloseOnClickOutside:!0,children:"Menu"})]})},O=()=>{const[s,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:()=>e(!0),children:"Open Notifications"}),n.jsx(o,{isOpen:s,onClose:()=>e(!1),position:"top",size:"s",zIndex:200,children:n.jsxs(a,{gap:8,direction:"column",children:[n.jsx(r,{title:"Heads up!",description:"This is an informational message.",type:"info"}),n.jsx(r,{title:"Storage almost full",description:"You are using 95% of your storage capacity.",type:"warning",isClosable:!0,action:n.jsx(t,{size:"s",children:"Upgrade Plan"})})]})})]})},C=()=>{const[s,e]=i.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:()=>e(!0),children:"Open Navigation"}),n.jsx(o,{isOpen:s,onClose:()=>e(!1),position:"left",size:"s",closeIcon:n.jsxs(t,{view:"ghost",size:"s",children:[n.jsx(h,{}),"Continue Shopping"]}),noCloseOnClickOutside:!0,children:n.jsx(p.Group,{options:[{label:"option 1",value:"1"},{label:"option 2",value:"2"}]})})]})},w=()=>{const[s,e]=i.useState();return n.jsxs("div",{children:[n.jsxs(a,{gap:16,children:[n.jsx(t,{onClick:()=>e("xs"),children:"XS"}),n.jsx(t,{onClick:()=>e("s"),children:"S"}),n.jsx(t,{onClick:()=>e("m"),children:"M"}),n.jsx(t,{onClick:()=>e("l"),children:"L"})]}),n.jsx(o,{isOpen:!!s,onClose:()=>e(void 0),size:s,title:`${s} Drawer`,children:n.jsxs("p",{children:["Current size: ",s]})})]})},B={package:"@quen-ui/components",title:"Drawer",order:1,group:"components",description:"The Drawer component creates a slide-in panel that overlays the main content of your application. It's ideal for displaying contextual information, forms, settings, or supplementary content without navigating away from the current view.",import:"import { Drawer } from '@quen-ui/components';",source:"/packages/components/src/Drawer/Drawer.tsx",demo:!1};function l(s){const e={code:"code",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h4,{children:"Basic settings drawer"}),`
`,n.jsxs(e.p,{children:["A standard right-side drawer. Controlled by the isOpen state and closed via backdrop click, close button, or the ",n.jsx(e.code,{children:"Escape"}),` key.
Best suited for user settings or contextual panels.`]}),`
`,n.jsx(g,{}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const SettingsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Settings</Button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        size="m"
        title="User Settings">
        Settings Form
      </Drawer>
    </>
  );
};
`})}),`
`,n.jsx(e.h4,{children:"Mobile bottom drawer"}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.code,{children:"full-screen drawer"}),` that slides up from the bottom.
Optimized for mobile UIs and commonly used for navigation menus. Dismissal with a swipe-down gesture is recommended.`]}),`
`,n.jsx(m,{}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setMenuOpen(true)}>Open Navigation</Button>
      <Drawer
        isOpen={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        position="bottom"
        size="full"
        title="Navigation"
        closeIcon={<IconXboxX />}>
        MobileNavigation
      </Drawer>
    </>
  );
};
`})}),`
`,n.jsx(e.h4,{children:"Left-aligned navigation"}),`
`,n.jsxs(e.p,{children:[`A left-side navigation drawer.
The `,n.jsx(e.code,{children:"noCloseOnClickOutside"})," prop prevents accidental closure, making it suitable for persistent navigation menus in desktop layout"]}),`
`,n.jsx(f,{}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const LeftAlign = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setNavOpen(true)}>Open Navigation</Button>
      <Drawer
        isOpen={isNavOpen}
        onClose={() => setNavOpen(false)}
        position="left"
        size="s"
        title={
          <div className="logo-header">
            <span>Navigation</span>
          </div>
        }
        noCloseOnClickOutside>
        Menu
      </Drawer>
    </>
  );
};
`})}),`
`,n.jsx(e.h4,{children:"Top notification panel"}),`
`,n.jsxs(e.p,{children:[`A temporary notification drawer sliding down from the top.
The increased `,n.jsx(e.code,{children:"zIndex"})," ensures visibility above modals. Useful for alerts and notification centers."]}),`
`,n.jsx(O,{}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const TopNotifications = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Notifications</Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        position="top"
        size="s"
        zIndex={200}>
        <Flex gap={8} direction="column">
          <Alert
            title="Heads up!"
            description="This is an informational message."
            type="info"
          />
          <Alert
            title="Storage almost full"
            description="You are using 95% of your storage capacity."
            type="warning"
            isClosable
            action={<Button size="s">Upgrade Plan</Button>}
          />
        </Flex>
      </Drawer>
    </>
  );
};
`})}),`
`,n.jsx(e.h4,{children:"Custom close handling"}),`
`,n.jsx(e.p,{children:`A drawer with a custom close control.
Instead of an icon, a button with text and an arrow is used. Ideal for shopping carts or flows where closing should be more intentional.`}),`
`,n.jsx(C,{}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const CustomClose = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Navigation</Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        position="left"
        size="s"
        closeIcon={
          <Button view="ghost" size="s">
            <IconArrowLeft />
            Continue Shopping
          </Button>
        }
        noCloseOnClickOutside>
        <CheckboxGroup
          options={[
            { label: "option 1", value: "1" },
            { label: "option 2", value: "2" }
          ]}
        />
      </Drawer>
    </>
  );
};
`})}),`
`,n.jsx(e.h4,{children:"Sizing comparison"}),`
`,n.jsxs(e.p,{children:["Drawers support predefined sizes: mini(",n.jsx(e.code,{children:"xs"}),") small (",n.jsx(e.code,{children:"s"}),"), medium (",n.jsx(e.code,{children:"m"}),"), large (",n.jsx(e.code,{children:"l"}),`), and full-screen (full).
Size affects width for horizontal drawers and height for vertical drawers.`]}),`
`,n.jsx(w,{}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const Sizing = () => {
  const [currentSize, setSize] = useState<IDrawerProps["size"]>();

  return (
    <div>
      <Flex gap={16}>
        <Button onClick={() => setSize("xs")}>XS</Button>
        <Button onClick={() => setSize("s")}>S</Button>
        <Button onClick={() => setSize("m")}>M</Button>
        <Button onClick={() => setSize("l")}>L</Button>
      </Flex>
      <Drawer
        isOpen={!!currentSize}
        onClose={() => setSize(undefined)}
        size={currentSize}
        title={\`\${currentSize} Drawer\`}
      >
        <p>Current size: {currentSize}</p>
      </Drawer>
    </div>
  );
};
`})}),`
`,n.jsx(e.h4,{children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Focus management: traps focus inside the drawer"}),`
`,n.jsxs(e.li,{children:["Keyboard navigation:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Esc"})," closes drawer"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Tab"})," cycles through focusable elements"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["ARIA Attributes:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:'role="dialog"'})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:'aria-modal="true"'})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-labelledby"})," for title"]}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"Screen reader support: announces open/close state"}),`
`,n.jsx(e.li,{children:"Backdrop: dims background content to indicate modal state"}),`
`]}),`
`,n.jsx(e.h4,{children:"Best Practices"}),`
`,n.jsx(e.h5,{children:"When to use"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Secondary navigation menus"}),`
`,n.jsx(e.li,{children:"Contextual settings panels"}),`
`,n.jsx(e.li,{children:"Mobile-first interfaces"}),`
`,n.jsx(e.li,{children:"Multi-step forms"}),`
`,n.jsx(e.li,{children:"Detail views for list items"}),`
`,n.jsx(e.li,{children:"Notification centers"}),`
`]}),`
`,n.jsx(e.h5,{children:"When to avoid"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Critical alerts (use Modal instead)"}),`
`,n.jsx(e.li,{children:"Primary navigation on desktop"}),`
`,n.jsx(e.li,{children:"Simple tooltips"}),`
`,n.jsx(e.li,{children:"Actions requiring immediate attention"}),`
`]})]})}function D(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{D as default,B as frontmatter};
