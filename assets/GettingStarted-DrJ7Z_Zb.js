import{j as n}from"./index-jR0FLVqU.js";import{u as o}from"./index-BOxoqHcG.js";const l={title:"Getting started",group:"guides",order:1};function r(t){const e={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{children:"Getting Started with QuenUI"}),`
`,n.jsx(e.p,{children:"QuenUI provides a collection of beautifully crafted, accessible, and highly customizable React components to help you build stunning interfaces faster. Whether you're prototyping a new idea or building a production-ready application, QuenUI has everything you need to get started in minutes."}),`
`,n.jsx(e.h4,{children:"Installation"}),`
`,n.jsx(e.p,{children:"Get QuenUI up and running in your project with just one command:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`  npm install @quen-ui/components @quen-ui/theme
`})}),`
`,n.jsx(e.h4,{children:"Basic Setup"}),`
`,n.jsx(e.p,{children:"Wrap your application with the QuenUIProvider to enable theming and global styles:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { QuenUIProvider } from "@quen-ui/theme";

function App() {
  return (
    <QuenUIProvider theme="light">
      <YourApp />
    </QuenUIProvider>
  );
}
`})}),`
`,n.jsx(e.h4,{children:"Using Your First Component"}),`
`,n.jsx(e.p,{children:"Import and use QuenUI components just like any other React component:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from "@quen-ui/components";

function MyComponent() {
  return (
    <Button variant="primary" onClick={() => alert('Hello, QuenUI!')}>
      Click Me
    </Button>
  );
}
`})}),`
`,n.jsx(e.h4,{children:"Customization & Theming"}),`
`,n.jsx(e.p,{children:"QuenUI is designed for flexibility. Override default styles or create your own theme effortlessly:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<QuenUIProvider
  theme={{
    colors: {
      primary: '#4F46E5',
      secondary: '#10B981',
    },
    fonts: {
      body: 'Inter, sans-serif',
    },
  }}
>
  <YourApp />
</QuenUIProvider>
`})}),`
`,n.jsx(e.h4,{children:"Next Steps"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"📖 Explore the full documentation to discover all available components and features."}),`
`,n.jsx(e.li,{children:"💡 Check out our examples for inspiration and best practices."}),`
`,n.jsx(e.li,{children:"🐞 Report an issue or request a feature – we’d love your feedback!"}),`
`]})]})}function a(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{a as default,l as frontmatter};
