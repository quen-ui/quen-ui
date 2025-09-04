import{j as n}from"./index-jR0FLVqU.js";import{T as r,B as s}from"./styles-B8Yckata.js";import{C as i}from"./Card-CVkW4UvR.js";import{A as a}from"./avatar2-U2IOHYoY.js";import{u as l}from"./index-BOxoqHcG.js";import"./Title-DYSXEtp2.js";const m={package:"@quen-ui/components",title:"Card",order:1,group:"components",description:"The Card component provides a flexible container for displaying content with optional header, cover image, and action footer. It follows Material Design principles with clean spacing and automatic dividers.",import:"import { Card } from '@quen-ui/components';",source:"/packages/components/src/Card/Card.tsx"};function c(t){const e={code:"code",div:"div",h4:"h4",h6:"h6",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h4,{children:"Basic usage"}),`
`,n.jsx(e.p,{children:"A standard card with a header (title) and main content area."}),`
`,n.jsx(i,{title:"Basic Card",children:n.jsx(r,{children:"This is a simple card component with title and content"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Card, Text } from "@quen-ui/components";

function BasicCard() {
  return (
    <Card title="Basic Card">
      <Text>This is a simple card component with title and content</Text>
    </Card>
  );
}
`})}),`
`,n.jsx(e.h4,{children:"Card without title"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"title"})," prop is optional. You can render a simple container-like card with only body content."]}),`
`,n.jsx(i,{children:n.jsx(r,{children:"This card has no title, just content"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Card>
  <Text>This card has no title, just content</Text>
</Card>
`})}),`
`,n.jsx(e.h4,{children:"Card with Cover Image"}),`
`,n.jsxs(e.p,{children:["Cards can display a ",n.jsx(e.code,{children:"cover"})," element (usually an image) at the top."]}),`
`,n.jsx(i,{title:"Vacation Photo",cover:n.jsx(e.img,{src:a,alt:"Beach vacation",width:350}),children:n.jsx(r,{children:"Our team retreat in Hawaii"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Card
  title="Vacation Photo"
  cover={<img src="/vacation.jpg" alt="Beach vacation" style={350} />}>
  <Text>Our team retreat in Hawaii</Text>
</Card>
`})}),`
`,n.jsx(e.h4,{children:"Card with actions"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.code,{children:"actionContent"})," prop for footer actions (typically Save/Cancel buttons)."]}),`
`,n.jsx(i,{title:"Settings",actionContent:n.jsxs(e.div,{style:{display:"flex",gap:8},children:[n.jsx(s,{size:"s",children:"Save"}),n.jsx(s,{size:"s",view:"ghost",children:"Cancel"})]}),children:n.jsx(r,{children:"Configure your preferences"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Card
  title="Settings"
  actionContent={
    <div style={{ display: "flex", gap: 8 }}>
      <Button size="s">Save</Button>
      <Button size="s" view="ghost">
        Cancel
      </Button>
    </div>
  }>
  <Text>Configure your preferences</Text>
</Card>
`})}),`
`,n.jsx(e.h4,{children:"Card with Header Extra"}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"extra"})," for additional controls in the header (e.g., links or secondary actions)."]}),`
`,n.jsx(i,{title:"Notifications",extra:n.jsx(s,{view:"link",size:"s",children:"Mark all read"}),children:n.jsx(r,{children:"You have 3 new notifications"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Card
  title="Notifications"
  extra={
    <Button view="link" size="s">
      Mark all read
    </Button>
  }>
  <Text>You have 3 new notifications</Text>
</Card>
`})}),`
`,n.jsx(e.h4,{children:"Card with Left Content in Header"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"leftContent"})," prop allows placing an avatar, icon, or any element to the left of the title."]}),`
`,n.jsx(i,{title:"Profile",leftContent:n.jsx(e.img,{src:a,alt:"Avatar",width:32,height:32}),children:n.jsx(r,{children:"John Doe – Software Engineer"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Card
  title="Profile"
  leftContent={
    <img
      src="/vacation.jpg"
      alt="Beach vacation"
      alt="Avatar"
      width={32}
      height={32}
    />
  }
>
  <Text>John Doe – Software Engineer</Text>
</Card>
`})}),`
`,n.jsx(e.h4,{children:"Size variants"}),`
`,n.jsxs(e.p,{children:["Cards support four sizes (",n.jsx(e.code,{children:"xs"}),", ",n.jsx(e.code,{children:"s"}),", ",n.jsx(e.code,{children:"m"}),", ",n.jsx(e.code,{children:"l"}),"). Size affects paddings, font sizes, and spacing."]}),`
`,n.jsxs("div",{style:{display:"flex",gap:16},children:[n.jsx(i,{size:"xs",title:"Mini",children:n.jsx(e.p,{children:"Mini content"})}),n.jsx(i,{size:"s",title:"Small",children:n.jsx(e.p,{children:"Compact content"})}),n.jsx(i,{size:"m",title:"Medium",children:n.jsx(e.p,{children:"Default size"})}),n.jsx(i,{size:"l",title:"Large",children:n.jsx(e.p,{children:"More spacious"})})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div style={{ display: "flex", gap: 16 }}>
  <Card size="xs" title="Mini">
    Mini content
  </Card>
  <Card size="s" title="Small">
    Compact content
  </Card>
  <Card size="m" title="Medium">
    Default size
  </Card>
  <Card size="l" title="Large">
    More spacious
  </Card>
</div>
`})}),`
`,n.jsx(e.h4,{children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Semantic HTML structure"}),`
`,n.jsx(e.li,{children:"Proper heading hierarchy"}),`
`,n.jsx(e.li,{children:"Keyboard-navigable interactive elements"}),`
`,n.jsx(e.li,{children:"ARIA attributes for actionable items"}),`
`]}),`
`,n.jsx(e.h4,{children:"Best Practices"}),`
`,n.jsx(e.h6,{children:"1. Content Organization:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use for discrete chunks of content"}),`
`,n.jsx(e.li,{children:"Group related information together"}),`
`,n.jsx(e.li,{children:"Avoid nesting cards more than 2 levels deep"}),`
`]}),`
`,n.jsx(e.h6,{children:"2. Actions Placement:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Primary actions in footer (",n.jsx(e.code,{children:"actionContent"}),")"]}),`
`,n.jsxs(e.li,{children:["Secondary actions in header (",n.jsx(e.code,{children:"extra"}),")"]}),`
`,n.jsx(e.li,{children:"Important actions should be buttons"}),`
`]}),`
`,n.jsx(e.h6,{children:"3. Performance:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Optimize cover images"}),`
`,n.jsx(e.li,{children:"Avoid complex computations in render"}),`
`,n.jsx(e.li,{children:"Consider lazy-loading offscreen cards"}),`
`]})]})}function u(t={}){const{wrapper:e}={...l(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{u as default,m as frontmatter};
