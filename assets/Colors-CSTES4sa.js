import{j as e,b as d,c as h}from"./index-jR0FLVqU.js";import{u as c}from"./index-BOxoqHcG.js";const x={title:"Colors",group:"theming",order:3};function l(t){const n={code:"code",h4:"h4",h5:"h5",h6:"h6",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"QuenUI provides a comprehensive color system with two built-in palettes optimized for light and dark themes. Each palette includes 7 core colors with 9 distinct shades, allowing for consistent, accessible designs across your application."}),`
`,e.jsx(n.h4,{children:"Core color palettes"}),`
`,e.jsxs(n.h5,{children:["Light theme palette (",e.jsx(n.code,{children:"QUEN_UI_LIGHT_COLORS"}),")"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Color"}),e.jsx("th",{children:"HEX value"})]})}),e.jsx("tbody",{children:Object.entries(d).map(([i,s])=>Object.keys(s).map(r=>e.jsxs("tr",{children:[e.jsx("th",{children:i+r}),e.jsx("td",{children:e.jsx("div",{style:{width:100,height:"30px",background:s[r]}})}),e.jsx("td",{children:s[r]})]},i+r)))})]}),`
`,e.jsxs(n.h5,{children:["Dark theme palette (",e.jsx(n.code,{children:"QUEN_UI_DARK_COLORS"}),")"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Color"}),e.jsx("th",{children:"HEX value"})]})}),e.jsx("tbody",{children:Object.entries(h).map(([i,s])=>Object.keys(s).map(r=>e.jsxs("tr",{children:[e.jsx("th",{children:i+r}),e.jsx("td",{children:e.jsx("div",{style:{width:100,height:"30px",background:s[r]}})}),e.jsx("td",{children:s[r]})]},i+r)))})]}),`
`,e.jsx(n.h4,{children:"Color usage guide"}),`
`,e.jsx(n.h5,{children:"Semantic application"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Color"}),e.jsx("th",{children:"Light Theme"}),e.jsx("th",{children:"Dark Theme"}),e.jsx("th",{children:"Usage Examples"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Violet"})}),e.jsx("td",{children:"9 (#6246ea)"}),e.jsx("td",{children:"9 (#6246ea)"}),e.jsx("td",{children:"Primary buttons, key actions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Gray"})}),e.jsx("td",{children:"9 (#1c1c1c)"}),e.jsx("td",{children:"9 (#fffffe)"}),e.jsx("td",{children:"Primary text, headings"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Red"})}),e.jsx("td",{children:"9 (#e45858)"}),e.jsx("td",{children:"9 (#e45858)"}),e.jsx("td",{children:"Error states, destructive actions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Green"})}),e.jsx("td",{children:"9 (#00a780)"}),e.jsx("td",{children:"9 (#00a780)"}),e.jsx("td",{children:"Success states, positive actions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Yellow"})}),e.jsx("td",{children:"9 (#f9f871)"}),e.jsx("td",{children:"9 (#f9f871)"}),e.jsx("td",{children:"Warnings, attention needed"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Orange"})}),e.jsx("td",{children:"9 (#ffc24d)"}),e.jsx("td",{children:"9 (#ffc24d)"}),e.jsx("td",{children:"Highlights, secondary actions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GrayViolet"})}),e.jsx("td",{children:"5 (#e5e5f2)"}),e.jsx("td",{children:"5 (#747481)"}),e.jsx("td",{children:"Backgrounds, subtle borders"})]})]})]}),`
`,e.jsx(n.h5,{children:"Accessibility"}),`
`,e.jsx(n.p,{children:"All colors meet WCAG 2.1 contrast requirements:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Text colors have 4.5:1+ contrast on backgrounds"}),`
`,e.jsx(n.li,{children:"UI components have 3:1+ contrast against adjacent colors"}),`
`,e.jsx(n.li,{children:"Primary violet maintains AAA contrast on light/dark backgrounds"}),`
`]}),`
`,e.jsx(n.h4,{children:"Applying colors in your theme"}),`
`,e.jsx(n.p,{children:"The color system integrates directly with QuenUI's theming architecture. Apply color palettes globally to ensure visual consistency across your application."}),`
`,e.jsx(n.h6,{children:"Implementation Steps"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Import Palette: Select either light or dark color set"}),`
`,e.jsx(n.li,{children:"Assign to Theme: Pass palette to colors property"}),`
`,e.jsx(n.li,{children:"Set Semantic Values: Define primary/text/background colors"}),`
`]}),`
`,e.jsx(n.h5,{children:"Basic setup"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { QuenUIProvider, QUEN_UI_LIGHT_COLORS, createTheme  } from "@quen-ui/theme";

const theme = createTheme({
  colors: QUEN_UI_LIGHT_COLORS,
  primaryColor: QUEN_UI_LIGHT_COLORS.violet[5],
  textColor: QUEN_UI_LIGHT_COLORS.gray[7]
});

function App() {
  return (
    <QuenUIProvider theme={theme}>
      {/* Your application */}
    </QuenUIProvider>
  );
}
`})}),`
`,e.jsx(n.h5,{children:"Using colors in components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import styled from "styled-components";
import { useTheme } from '@quen-ui/theme';

const AlertBox = styled.div\`
  background-color: \${({ theme }) => theme.colors.red[1]};
  border: 1px solid \${({ theme }) => theme.colors.red[3]};
  color: \${({ theme }) => theme.colors.red[9]};
  padding: \${({ theme }) => theme.space.m};
\`;

function ErrorMessage() {
  const theme = useTheme();

  return (
    <AlertBox>
      <span style={{ color: theme.colors.red[9] }}>
        Critical error occurred
      </span>
    </AlertBox>
  );
}
`})}),`
`,e.jsx(n.h4,{children:"Customizing colors"}),`
`,e.jsx(n.h5,{children:"Extending the palette"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { TQuenUIColors, QUEN_UI_LIGHT_COLORS } from "@quen-ui/theme";

const customColors: TQuenUIColors = {
  ...QUEN_UI_LIGHT_COLORS,
  brandBlue: {
    1: '#e6f0ff',
    2: '#cce0ff',
    3: '#b3d1ff',
    4: '#99c2ff',
    5: '#80b3ff',
    6: '#66a3ff',
    7: '#4d94ff',
    8: '#3385ff',
    9: '#1a75ff'
  }
};

const theme = {
  colors: customColors,
  primaryColor: 'brandBlue'
};
`})}),`
`,e.jsx(n.h5,{children:"Modifying existing colors"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const modifiedTheme = {
  colors: {
    ...QUEN_UI_LIGHT_COLORS,
    violet: {
      ...QUEN_UI_LIGHT_COLORS.violet,
      9: '#7e3ff2' // Deeper violet
    }
  }
};
`})}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsx(n.h5,{children:"Color Selection Guidelines"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Primary Actions: Use violet.9 consistently"}),`
`,e.jsx(n.li,{children:"Text & Background:"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Light: gray.9 on gray.1"}),`
`,e.jsx(n.li,{children:"Dark: gray.9 (light) on gray.1 (dark)"}),`
`]}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Status Indicators:"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Success: green.7-9"}),`
`,e.jsx(n.li,{children:"Warning: yellow.7-9"}),`
`,e.jsx(n.li,{children:"Error: red.7-9"}),`
`]}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsx(n.li,{children:"Surfaces & Depth:"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Cards: grayViolet.1-3"}),`
`,e.jsx(n.li,{children:"Dividers: grayViolet.4-5"}),`
`]})]})}function j(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{j as default,x as frontmatter};
