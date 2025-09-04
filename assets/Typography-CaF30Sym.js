import{j as e}from"./index-jR0FLVqU.js";import{T as i}from"./Title-DYSXEtp2.js";import{F as r,T as s}from"./styles-B8Yckata.js";import{u as l}from"./index-BOxoqHcG.js";const j={title:"Typography",group:"theming",order:4};function h(t){const n={code:"code",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"QuenUI's typography system provides a comprehensive set of text styles with consistent sizing, line heights, and weights for both headers and body text. The system is fully customizable through your theme configuration while maintaining perfect vertical rhythm and readability."}),`
`,e.jsx(n.h4,{children:"Font configuration structure"}),`
`,e.jsx(n.h5,{children:"Core interface"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`interface IQuenUIFont {
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
`,e.jsx(n.h5,{children:"Default values"}),`
`,e.jsx(n.h6,{children:"Header typography"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Font size"}),e.jsx("th",{children:"Line height"}),e.jsx("th",{children:"Weight"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"2xl"}),e.jsx("td",{children:"56"}),e.jsx("td",{children:"64"}),e.jsx("td",{children:"700"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"xl"}),e.jsx("td",{children:"40"}),e.jsx("td",{children:"48"}),e.jsx("td",{children:"700"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"l"}),e.jsx("td",{children:"32"}),e.jsx("td",{children:"40"}),e.jsx("td",{children:"700"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"m"}),e.jsx("td",{children:"28"}),e.jsx("td",{children:"32"}),e.jsx("td",{children:"700"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"s"}),e.jsx("td",{children:"24"}),e.jsx("td",{children:"24"}),e.jsx("td",{children:"700"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"xs"}),e.jsx("td",{children:"16"}),e.jsx("td",{children:"16"}),e.jsx("td",{children:"700"})]})]})]}),`
`,e.jsx(n.h6,{children:"Text typography"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Font size"}),e.jsx("th",{children:"Line height"}),e.jsx("th",{children:"Weight"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"xl"}),e.jsx("td",{children:"24"}),e.jsx("td",{children:"32"}),e.jsx("td",{children:"400"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"l"}),e.jsx("td",{children:"20"}),e.jsx("td",{children:"28"}),e.jsx("td",{children:"400"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"m"}),e.jsx("td",{children:"16"}),e.jsx("td",{children:"24"}),e.jsx("td",{children:"400"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"s"}),e.jsx("td",{children:"14"}),e.jsx("td",{children:"20"}),e.jsx("td",{children:"400"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"xs"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"16"}),e.jsx("td",{children:"400"})]})]})]}),`
`,e.jsx(n.h4,{children:"Applying typography in your theme"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { QuenUIProvider } from "@quen-ui/theme";
import { Title, Button } from "@quen-ui/components";

const theme = {
  fonts: {
    header: {
      size: {
        "2xl": "2.25rem", // 36px
        xl: "1.875rem" // 30px
        // ...other sizes
      },
      lineHeight: {
        "2xl": "2.5rem", // 40px
        xl: "2.25rem" // 36px
        // ...other line heights
      },
      weight: 700
    },
    text: {
      size: {
        xl: "1.25rem", // 20px
        l: "1.125rem" // 18px
        // ...other sizes
      },
      lineHeight: {
        xl: "1.75rem", // 28px
        l: "1.625rem" // 26px
        // ...other line heights
      },
      weight: 400
    }
  }
};

function App() {
  return (
    <QuenUIProvider theme={theme}>
      <Title size="2xl">Title</Title>
      <Button>Button</Button>
    </QuenUIProvider>
  );
}
`})}),`
`,e.jsx(n.h4,{children:"Using typography in components"}),`
`,e.jsx(n.h5,{children:"With theme hook"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useTheme } from "@quen-ui/theme";

function Heading() {
  const theme = useTheme();

  return (
    <h1
      style={{
        fontSize: theme.fonts.header.size.xl,
        lineHeight: theme.fonts.header.lineHeight.xl,
        fontWeight: theme.fonts.header.weight
      }}>
      Page Title
    </h1>
  );
}
`})}),`
`,e.jsx(n.h5,{children:"Styled components integration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import styled from "styled-components";

const Paragraph = styled.p\`
  font-size: \${({ theme }) => theme.fonts.text.size.m};
  line-height: \${({ theme }) => theme.fonts.text.lineHeight.m};
  font-weight: \${({ theme }) => theme.fonts.text.weight};
  margin-bottom: \${({ theme }) => theme.space.m};
\`;

// Usage
<Paragraph>This text uses the theme's body text configuration.</Paragraph>;
`})}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsx(n.h5,{children:"Hierarchy guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Page Titles: ",e.jsx(n.code,{children:"header.2xl"})," or ",e.jsx(n.code,{children:"header.xl"})]}),`
`,e.jsxs(n.li,{children:["Section Headers: ",e.jsx(n.code,{children:"header.l"})," or ",e.jsx(n.code,{children:"header.m"})]}),`
`,e.jsxs(n.li,{children:["Card Titles: ",e.jsx(n.code,{children:"header.m"})," or ",e.jsx(n.code,{children:"header.s"})]}),`
`,e.jsxs(n.li,{children:["Body Text: ",e.jsx(n.code,{children:"text.l"})," or ",e.jsx(n.code,{children:"text.m"})]}),`
`,e.jsxs(n.li,{children:["Captions/Small Text: ",e.jsx(n.code,{children:"text.s"})," or ",e.jsx(n.code,{children:"text.xs"})]}),`
`]}),`
`,e.jsx(n.h5,{children:"Accessibility tips"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Maintain minimum 4.5:1 contrast ratio for text"}),`
`,e.jsx(n.li,{children:"Use relative units (rem) for font sizes"}),`
`,e.jsx(n.li,{children:"Ensure line height is at least 1.5× font size"}),`
`,e.jsx(n.li,{children:"Limit header weights to 600-700 for readability"}),`
`,e.jsx(n.li,{children:"Avoid using font sizes smaller than 12px"}),`
`]}),`
`,e.jsx(n.h4,{children:"Typography scale visualizer"}),`
`,e.jsx(n.h5,{children:"Title"}),`
`,e.jsxs(r,{direction:"column",children:[e.jsx(i,{size:"2xl",children:"Title 2xl"}),e.jsx(i,{size:"xl",children:"Title xl"}),e.jsx(i,{size:"l",children:"Title l"}),e.jsx(i,{size:"m",children:"Title m"}),e.jsx(i,{size:"s",children:"Title s"}),e.jsx(i,{size:"xs",children:"Title xs"})]}),`
`,e.jsx(n.h5,{children:"Text"}),`
`,e.jsxs(r,{direction:"column",children:[e.jsx(s,{size:"xl",children:"Text xl"}),e.jsx(s,{size:"l",children:"Text l"}),e.jsx(s,{size:"m",children:"Text m"}),e.jsx(s,{size:"s",children:"Text s"}),e.jsx(s,{size:"xs",children:"Text xs"})]})]})}function a(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(h,{...t})}):h(t)}export{a as default,j as frontmatter};
