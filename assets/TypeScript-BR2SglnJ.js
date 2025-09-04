import{j as e}from"./index-jR0FLVqU.js";import{u as r}from"./index-BOxoqHcG.js";const c={title:"Usage with TypeScript",description:"QuenUI is built with full TypeScript support, providing enhanced type safety, autocompletion, and a smoother development experience. This guide will help you integrate QuenUI into your TypeScript project effectively.",group:"guides",order:2};function s(t){const n={code:"code",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Installation with TypeScript"}),`
`,e.jsx(n.p,{children:"First, ensure you have TypeScript installed in your project:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install typescript --save-dev
`})}),`
`,e.jsx(n.p,{children:"Then, install QuenUI:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @quen-ui/components @quen-ui/theme
`})}),`
`,e.jsx(n.h4,{children:"TypeScript Configuration"}),`
`,e.jsx(n.p,{children:"QuenUI works seamlessly with TypeScript out of the box. No additional configuration is required, but we recommend:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Using strict mode ",e.jsx(n.code,{children:'("strict": true'})," in ",e.jsx(n.code,{children:"tsconfig.json)"})," for best type safety."]}),`
`,e.jsxs(n.li,{children:["Ensuring your React version is properly typed (",e.jsx(n.code,{children:"@types/react"})," installed if needed)."]}),`
`]}),`
`,e.jsx(n.p,{children:"Example tsconfig.json:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",
    "module": "esnext",
    "target": "es6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "skipLibCheck": true,
    "esModuleInterop": true
  }
}
`})}),`
`,e.jsx(n.h4,{children:"Using Components with TypeScript"}),`
`,e.jsx(n.p,{children:"All QuenUI components are fully typed. Props, event handlers, and refs will be automatically inferred."}),`
`,e.jsx(n.h5,{children:"Example: Typed Button Component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const MyComponent = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked!', event.currentTarget);
  };

  return (
    <Button
      view="primary"
      size="m"
      onClick={handleClick}
    >
      Click Me
    </Button>
  );
};
`})}),`
`,e.jsx(n.h5,{children:"Example: Extending Component Props"}),`
`,e.jsx(n.p,{children:"You can extend QuenUI component props to add custom attributes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, IButtonProps } from "@quen-ui/components";

interface CustomButtonProps extends IButtonProps {
  customProp?: string;
}

const CustomButton = ({ customProp, ...rest }: CustomButtonProps) => {
  return (
    <Button {...rest}>
      {customProp || 'Default Text'}
    </Button>
  );
};
`})}),`
`,e.jsx(n.h4,{children:"Handling Custom Themes with TypeScript"}),`
`,e.jsx(n.p,{children:"QuenUI's theming system is fully typed. You can define a custom theme type for better autocompletion:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { QuenUIProvider, IQuenUITheme } from "@quen-ui/theme";

interface CustomTheme extends IQuenUITheme {
  colors: {
    primary: string;
    secondary: string;
    customAccent?: string;
  };
}

const theme: CustomTheme = {
  colors: {
    primary: '#4F46E5',
    secondary: '#10B981',
    customAccent: '#FF6B6B',
  },
};

const App = () => {
  return (
    <QuenUIProvider theme={theme}>
      <YourApp />
    </QuenUIProvider>
  );
};
`})}),`
`,e.jsx(n.h4,{children:"Type-Safe Utility Hooks"}),`
`,e.jsx(n.p,{children:"QuenUI includes utility hooks with proper TypeScript typings:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useTheme } from "@quen-ui/theme";

const ThemedComponent = () => {
  const theme = useTheme(); // Inferred as DefaultTheme or your custom type
  return (
    <div style={{ color: theme.colors.primary }}>
      This text uses the theme's primary color.
    </div>
  );
};
`})}),`
`,e.jsx(n.h4,{children:"Troubleshooting"}),`
`,e.jsx(n.h5,{children:"Common Issues & Fixes"}),`
`,e.jsx(n.h6,{children:'1. "Module not found" errors'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ensure ",e.jsx(n.code,{children:"@types/reac"}),"t and ",e.jsx(n.code,{children:"@types/react-dom"})," are installed."]}),`
`,e.jsx(n.li,{children:"Check that your TypeScript version is ≥4.5."}),`
`]}),`
`,e.jsx(n.h6,{children:"2. Missing types for QuenUI"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"QuenUI includes built-in types—no need install types"}),`
`,e.jsx(n.li,{children:"If types aren't detected, restart your IDE."}),`
`]}),`
`,e.jsx(n.h6,{children:"3. Custom theme type conflicts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Extend IQuenUITheme instead of redeclaring it."}),`
`]}),`
`,e.jsx(n.h4,{children:"Next Steps"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"📖 Explore the full documentation to discover all available components and features."}),`
`,e.jsx(n.li,{children:"💡 Check out our examples for inspiration and best practices."}),`
`,e.jsx(n.li,{children:"🐞 Report an issue or request a feature – we’d love your feedback!"}),`
`]})]})}function l(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{l as default,c as frontmatter};
