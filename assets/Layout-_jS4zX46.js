import{j as e}from"./index-jR0FLVqU.js";import{L as o}from"./styles-B8Yckata.js";import{u as i}from"./index-BOxoqHcG.js";const u={package:"@quen-ui/components",title:"Layout",order:1,group:"components",description:"The Layout components provide a responsive application skeleton with configurable header, collapsible sidebar, and mobile-friendly interactions. Designed for complex application structures, they handle responsive breakpoints, accessibility, and state management out-of-the-box.",import:"import { Layout } from '@quen-ui/components';",source:"/packages/components/src/Layout",demo:!1,props:["Layout","Content","Header","Footer","Sidebar"]};function r(t){const n={code:"code",h4:"h4",p:"p",pre:"pre",...i(),...t.components};return o||a("Layout",!1),o.Content||a("Layout.Content",!0),o.Footer||a("Layout.Footer",!0),o.Header||a("Layout.Header",!0),o.Sidebar||a("Layout.Sidebar",!0),e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Component structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Layout breakpoint={1024}>
  <Layout.Header logo={Logo} />
  <Layout.Sidebar menuItems={items} />
  <Layout.Content>{content}</Layout.Content>
  <Layout.Footer>Copyright 2025</Layout.Footer>
</Layout>
`})}),`
`,e.jsx(n.h4,{children:"Root layout (Layout)"}),`
`,e.jsx(n.p,{children:"The foundational wrapper component that manages responsive layout structure, breakpoints, and global context. Handles adaptive rendering between mobile/desktop modes and coordinates nested layout sections."}),`
`,e.jsx(n.h4,{children:"Header (Layout.Header)"}),`
`,e.jsx(n.p,{children:"Fixed/sticky top navigation bar for branding and primary navigation. Supports responsive height adjustments and dynamic menu rendering."}),`
`,e.jsx(n.h4,{children:"Sidebar (Layout.Sidebar)"}),`
`,e.jsx(n.p,{children:"Collapsible vertical navigation panel with responsive breakpoints. Supports custom widths, gutter spacing, and configurable collapse behavior."}),`
`,e.jsx(n.h4,{children:"Main content (Layout.Content)"}),`
`,e.jsx(n.p,{children:"Primary content container with automatic padding adjustments based on header/footer visibility. Handles scroll management and responsive spacing."}),`
`,e.jsx(n.h4,{children:"Footer (Layout.Footer)"}),`
`,e.jsx(n.p,{children:"Bottom section container for auxiliary information, copyright notices, and secondary navigation. Supports fixed or static positioning."}),`
`,e.jsx(n.h4,{children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Layout breakpoint={1024}>
  <Layout.Header
    height="64px"
    menuItems={[
      { key: "home", label: "Home", }
    ]}
  />

<Layout.Sidebar
  collapsedWidth={60}
  menuItems={[{ key: "home", label: "Home" }]}
/>

<Layout.Content>Main</Layout.Content>

  <Layout.Footer>
    © 2025 QuenUI
  </Layout.Footer>
</Layout>
`})}),`
`,e.jsxs(o,{breakpoint:1024,children:[e.jsx(o.Header,{height:"64px",menuItems:[{key:"home",label:"Home"}]}),e.jsx(o.Sidebar,{collapsedWidth:60,menuItems:[{key:"home",label:"Home"}]}),e.jsx(o.Content,{children:"Main"}),e.jsx(o.Footer,{children:e.jsx(n.p,{children:"© 2025 QuenUI"})})]})]})}function p(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}function a(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{p as default,u as frontmatter};
