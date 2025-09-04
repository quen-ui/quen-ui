import{j as n}from"./index-jR0FLVqU.js";import{B as s,F as t}from"./styles-B8Yckata.js";import{u as r}from"./index-BOxoqHcG.js";import{c}from"./createReactComponent-R_WhpXRX.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54",key:"svg-0"}],["path",{d:"M10 16v-8h4",key:"svg-1"}],["path",{d:"M10 12l3 0",key:"svg-2"}],["path",{d:"M17 16v-6a2 2 0 0 1 4 0v6",key:"svg-3"}],["path",{d:"M17 13l4 0",key:"svg-4"}]],a=c("outline","auth-2fa","Auth2fa",d);/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]],o=c("outline","download","Download",h),p={package:"@quen-ui/components",title:"Button",order:1,group:"components",description:"The Button component is a versatile interactive element that handles user actions with multiple visual styles, states, and configurations. It includes built-in accessibility features and TypeScript support.",import:"import { Button } from '@quen-ui/components';",source:"/packages/components/src/Button/Button.tsx"};function l(i){const e={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Multiple visual styles (",n.jsx(e.code,{children:"primary"}),", ",n.jsx(e.code,{children:"secondary"}),", ",n.jsx(e.code,{children:"success"}),", ",n.jsx(e.code,{children:"warning"}),", ",n.jsx(e.code,{children:"danger"}),", ",n.jsx(e.code,{children:"link"}),", ",n.jsx(e.code,{children:"ghost"}),", ",n.jsx(e.code,{children:"icon"}),")"]}),`
`,n.jsxs(e.li,{children:["Three size variants (",n.jsx(e.code,{children:"s"}),", ",n.jsx(e.code,{children:"m"}),", ",n.jsx(e.code,{children:"l"}),")"]}),`
`,n.jsx(e.li,{children:"Supports icons on the left or right side"}),`
`,n.jsx(e.li,{children:"Loading state with customizable loader"}),`
`,n.jsx(e.li,{children:"Disabled state for non-interactive buttons"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fullWidth"})," option for responsive layouts"]}),`
`,n.jsxs(e.li,{children:["Can render as different elements via ",n.jsx(e.code,{children:"as"})," prop (",n.jsx(e.code,{children:"button"}),", ",n.jsx(e.code,{children:"a"}),", ",n.jsx(e.code,{children:"div"}),", custom component)"]}),`
`,n.jsx(e.li,{children:"Accessible: keyboard navigation, ARIA attributes, focus states"}),`
`]}),`
`,n.jsx(e.h4,{children:"Basic Usage"}),`
`,n.jsxs(e.p,{children:["A standard button with medium size (",n.jsx(e.code,{children:'size="m"'}),") and primary style (",n.jsx(e.code,{children:'view="primary"'}),")."]}),`
`,n.jsx(s,{onClick:()=>console.log("Clicked!"),children:n.jsx("span",{children:"Click Me"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button onClick={() => console.log("Clicked!")}>Click Me</Button>
`})}),`
`,n.jsx(e.h4,{children:"Disabled state"}),`
`,n.jsxs(e.p,{children:["When ",n.jsx(e.code,{children:"disabled={true}"}),", the button becomes non-interactive and visually muted."]}),`
`,n.jsx(s,{disabled:!0,onClick:()=>console.log("This will not trigger"),children:n.jsx("span",{children:"Disabled Button"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button disabled onClick={() => console.log("This will not trigger")}>
  Disabled Button
</Button>
`})}),`
`,n.jsx(e.h4,{children:"Style variations"}),`
`,n.jsx(e.p,{children:"Use view prop to adjust button style depending on context."}),`
`,n.jsxs(t,{gap:"s",children:[n.jsx(s,{view:"primary",children:"Primary"}),n.jsx(s,{view:"secondary",children:"Secondary"}),n.jsx(s,{view:"success",children:"Success"}),n.jsx(s,{view:"warning",children:"Warning"}),n.jsx(s,{view:"danger",children:"Danger"}),n.jsx(s,{view:"icon",children:n.jsx(a,{})}),n.jsx(s,{view:"link",children:"Link"}),n.jsx(s,{view:"ghost",children:"Ghost"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Flex gap="s">
  <Button view="primary">Primary</Button>
  <Button view="secondary">Secondary</Button>
  <Button view="success">Success</Button>
  <Button view="warning">Warning</Button>
  <Button view="danger">Danger</Button>
  <Button view="icon">
    <Icon2fa />
  </Button>
  <Button view="link">Link</Button>
  <Button view="ghost">Ghost</Button>
</Flex>
`})}),`
`,n.jsx(e.h4,{children:"Size variants"}),`
`,n.jsx(e.p,{children:"Buttons come in four sizes:"}),`
`,n.jsxs(t,{align:"center",gap:"s",children:[n.jsx(s,{size:"xs",children:"Mini small"}),n.jsx(s,{size:"s",children:"Small"}),n.jsx(s,{size:"m",children:"Medium"}),n.jsx(s,{size:"l",children:"Large"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Flex align="center" gap="s">
  <Button size="s">Small</Button>
  <Button size="m">Medium</Button>
  <Button size="l">Large</Button>
</Flex>
`})}),`
`,n.jsx(e.h4,{children:"Icons integration"}),`
`,n.jsxs(e.p,{children:["You can place icons before or after the text using ",n.jsx(e.code,{children:"leftContent"})," and ",n.jsx(e.code,{children:"rightContent"}),"."]}),`
`,n.jsx(s,{leftContent:n.jsx(o,{size:16}),rightContent:n.jsx(o,{size:16}),children:n.jsx("span",{children:"Download File"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button
  leftContent={<IconDownload size={16} />}
  rightContent={<IconDownload size={16} />}
>
  Download File
</Button>
`})}),`
`,n.jsx(e.h4,{children:"Loading state"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"loading"})," prop shows a spinner and prevents user interaction."]}),`
`,n.jsx(s,{loading:!0,children:n.jsx("span",{children:"Processing..."})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function SubmitButton() {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Button loading={isLoading} onClick={handleClick}>
      {isLoading ? "Processing..." : "Submit"}
    </Button>
  );
}
`})}),`
`,n.jsx(e.h4,{children:"Custom loader"}),`
`,n.jsxs(e.p,{children:["Customize the spinner with ",n.jsx(e.code,{children:"loaderProps"})," (type, size, color)."]}),`
`,n.jsx(s,{loading:!0,loaderProps:{view:"dots",color:"white",size:"xs"},children:n.jsx("span",{children:"Saving Changes"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button
  loading
  loaderProps={{
    view: "dots", // Loader type
    color: "white", // Spinner color
    size: "xs"
  }}>
  Saving Changes
</Button>
`})}),`
`,n.jsx(e.h4,{children:"Full width"}),`
`,n.jsx(e.p,{children:"Use fullWidth to make the button expand to the container width."}),`
`,n.jsx(s,{fullWidth:!0,children:"Continue"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button fullWidth>Continue</Button>
`})}),`
`,n.jsx(e.h4,{children:"Rendering as Link or custom element"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"as"})," prop allows rendering as a different HTML element (e.g., ",n.jsx(e.code,{children:"<a>"})," for links)."]}),`
`,n.jsx(s,{as:"a",href:"/download",view:"link",children:n.jsx(e.p,{children:"Download as Link"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button as="a" href="/download" view="link">
  Download as Link
</Button>
`})}),`
`,n.jsx(e.h4,{children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keyboard navigation: Triggered via Enter or Space"}),`
`,n.jsx(e.li,{children:"Focus styles: Clear outlines for keyboard users"}),`
`,n.jsxs(e.li,{children:["ARIA attributes:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"aria-disabled when disabled"}),`
`,n.jsx(e.li,{children:"aria-busy when loading"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Semantic rendering: Defaults to ",n.jsx(e.code,{children:"<button>"})," but can be customized via as"]}),`
`]}),`
`,n.jsx(e.h4,{children:"Best practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"primary"})," only for the main action on a page"]}),`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"secondary/ghost"})," for less prominent actions"]}),`
`,n.jsxs(e.li,{children:["Prefer ",n.jsx(e.code,{children:"danger"})," only for destructive actions"]}),`
`,n.jsx(e.li,{children:"Add icons only when they improve clarity"}),`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"fullWidth"})," in forms or narrow layouts"]}),`
`]}),`
`,n.jsx(e.h4,{children:"Troubleshooting"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Click handler not firing: Ensure button is not ",n.jsx(e.code,{children:"disabled"})," or ",n.jsx(e.code,{children:"loading"})]}),`
`,n.jsxs(e.li,{children:["Loader not visible: Check ",n.jsx(e.code,{children:"loaderProps.size"})," and color contrast"]}),`
`,n.jsxs(e.li,{children:["Accessibility issues: Avoid using only ",n.jsx(e.code,{children:"icon"})," view without ",n.jsx(e.code,{children:"aria-label"})]}),`
`,n.jsxs(e.li,{children:["Wrong element rendered: Confirm ",n.jsx(e.code,{children:"as"})," matches valid HTML element or component"]}),`
`]})]})}function m(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{m as default,p as frontmatter};
