import{j as n}from"./index-jR0FLVqU.js";import{u as s}from"./index-BOxoqHcG.js";const l={title:"QuenUIProvider",group:"theming",order:2};function r(t){const e={code:"code",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"The QuenUIProvider is the foundation for customizing and theming your QuenUI application. This context provider delivers your theme configuration to all QuenUI components, ensuring visual consistency and centralized styling across your application."}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Theme Propagation: Distributes theme settings to all child components"}),`
`,n.jsx(e.li,{children:"Customization Hub: Centralized control over colors, spacing, typography, and components"}),`
`,n.jsx(e.li,{children:"Type Safety: Full TypeScript support for theme structure"}),`
`,n.jsx(e.li,{children:"Styled Components Integration: Built on styled-components theming API"}),`
`,n.jsx(e.li,{children:"Component Overrides: Customize individual component styles"}),`
`]}),`
`,n.jsx(e.h4,{children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i @quen-ui/theme
`})}),`
`,n.jsx(e.h4,{children:"Basic usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { QuenUIProvider, createTheme } from "@quen-ui/theme";
import { Button } from "@quen-ui/components";

function App() {
  const customTheme = createTheme({
   /** Your theme override here */
  });
  return (
    <QuenUIProvider theme={customTheme}>
      <Button>Styled Button</Button>
    </QuenUIProvider>
  );
}
`})}),`
`,n.jsx(e.h4,{children:"Theme structure (IQuenUITheme)"}),`
`,n.jsx(e.p,{children:"The theme object follows this structure:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`interface IQuenUITheme {
  /** Color palette */
  colors: TQuenUIColors;

  /** Primary brand color */
  primaryColor: string;

  /** Body background color */
  colorBody: string;

  /** Default text color */
  textColor: string;

  /** Base font family */
  fontFamily: string;

  /** Control styles (radius, height) */
  control: IQuenUIThemeControl;

  /** Spacing system */
  space: IQuenUIThemeSpace;

  /** Typography system */
  fonts: IQuenUIFont;

  /** Component-specific overrides */
  components: Record<string, any>;
}
`})}),`
`,n.jsx(e.h5,{children:"Detailed theme properties"}),`
`,n.jsx(e.h6,{children:"1. Colors (TQuenUIColors)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`export const QUENUI_COlORS_PALETTE= ["violet", "gray", "grayViolet", "red", "yellow", "green", "orange"] as const;

export interface IQuenUIColor {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
}

export type TDefaultQuenUIColors = typeof QUENUI_COlORS_PALETTE[number];

export type TQuenUIColors = Record<TDefaultQuenUIColors, IQuenUIColor>;

`})}),`
`,n.jsx(e.h6,{children:"2. Control styles (IQuenUIThemeControl)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`export interface IQuenUIThemeControl {
  radius: string;
  borderWidth: string;
  height: {
    l: string;
    m: string;
    s: string;
    xs: string
  };
}
`})}),`
`,n.jsx(e.h6,{children:"3. Spacing system (IQuenUIThemeSpace)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`export interface IQuenUIThemeSpace {
  xs: string;
  s: string;
  m: string;
  l: string;
}
`})}),`
`,n.jsx(e.h6,{children:"4. Typography (IQuenUIFont)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`export interface IQuenUIFont {
  header: {
    size: {
      "2xl": string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    lineHeight: {
      "2xl": string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    weight: number;
  };
  text: {
    size: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    lineHeight: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    weight: number;
  };
}
`})}),`
`,n.jsx(e.h4,{children:"Best practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Consistent Naming: Use the same token names across components"}),`
`,n.jsx(e.li,{children:"Spacing Scale: Use multiples of 4px or 8px for spacing"}),`
`]}),`
`,n.jsx(e.h4,{children:"Advanced techniques"}),`
`,n.jsx(e.h5,{children:"Theme variants"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type ThemeVariant = 'default' | 'compact' | 'luxury';

function createTheme(variant: ThemeVariant): IQuenUITheme {
  switch(variant) {
    case 'compact':
      return { ...baseTheme, space: compactSpacing };
    case 'luxury':
      return { ...baseTheme, colors: premiumColors };
    default:
      return baseTheme;
  }
}
`})}),`
`,n.jsx(e.h5,{children:"Runtime theme updates"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function ThemeSwitcher() {
  const [theme, setTheme] = useState(QuenUILightTheme);

  const toggleTheme = () => {
    setTheme(current => current === QuenUILightTheme ? QuenUIDarkTheme : QuenUILightTheme);
  };

  return (
    <QuenUIProvider theme={theme}>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <AppContent />
    </QuenUIProvider>
  );
}
`})}),`
`,n.jsx(e.h4,{children:"useTheme"}),`
`,n.jsx(e.p,{children:"Hook to access theme object in components:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useTheme } from '@quen-ui/theme';

function ThemedComponent() {
  const theme = useTheme();
  return <div style={{ color: theme.primaryColor }} />;
}
`})})]})}function c(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{c as default,l as frontmatter};
