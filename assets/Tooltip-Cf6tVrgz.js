import{r as p,j as t}from"./index-jR0FLVqU.js";import{B as n,F as s}from"./styles-B8Yckata.js";import{T as i}from"./Tooltip-CVlovHG0.js";import{u as r}from"./index-BOxoqHcG.js";import{c}from"./createReactComponent-R_WhpXRX.js";import"./useTransitionState-DSLsPxYc.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 17l0 .01",key:"svg-1"}],["path",{d:"M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4",key:"svg-2"}]],d=c("outline","help","Help",h),x=()=>{const[e,o]=p.useState(!0);return t.jsx(i,{text:"Custom controlled tooltip",isOpen:e,position:"top",children:t.jsx(n,{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:"Hover me"})})},f={package:"@quen-ui/components",title:"Tooltip",order:1,group:"components",description:"The Tooltip component displays contextual information when users hover over, focus on, or tap an element. Features multiple positioning options, customizable styling, and controlled visibility. Ideal for providing additional explanations, metadata, or functionality hints.",import:"import { Tooltip } from '@quen-ui/components';",source:"/packages/components/src/Tooltip/Tooltip.tsx",demo:!1};function l(e){const o={code:"code",div:"div",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(o.h4,{children:"Basic Tooltip"}),`
`,t.jsxs(o.p,{children:["Use ",t.jsx(o.code,{children:"Tooltip"})," to provide extra context when hovering over an element."]}),`
`,t.jsx(s,{justify:"center",children:t.jsx(i,{text:"Delete permanently",children:t.jsx(n,{children:"Hover me"})})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`<Tooltip text="Delete permanently">
  <Button>Hover me</Button>
</Tooltip>
`})}),`
`,t.jsx(o.h4,{children:"Custom position"}),`
`,t.jsx(o.p,{children:"Tooltips can appear on any side of the trigger element."}),`
`,t.jsxs(s,{gap:16,wrap:"wrap",justify:"center",children:[t.jsx(i,{text:"Position right",position:"right",children:t.jsx(n,{children:"Right"})}),t.jsx(i,{text:"Position bottom",position:"bottom",children:t.jsx(n,{children:"Bottom"})}),t.jsx(i,{text:"Position left",position:"left",children:t.jsx(n,{children:"Left"})}),t.jsx(i,{text:"Position top",position:"top",children:t.jsx(n,{children:"Top"})}),t.jsx(i,{text:"Position topLeft",position:"topLeft",children:t.jsx(n,{children:"topLeft"})}),t.jsx(i,{text:"Position topRight",position:"topRight",children:t.jsx(n,{children:"topRight"})}),t.jsx(i,{text:"Position bottomLeft",position:"bottomLeft",children:t.jsx(n,{children:"bottomLeft"})}),t.jsx(i,{text:"Position bottomRight",position:"bottomRight",children:t.jsx(n,{children:"bottomRight"})}),t.jsx(i,{text:"Position leftTop",position:"leftTop",children:t.jsx(n,{children:"leftTop"})}),t.jsx(i,{text:"Position leftBottom",position:"leftBottom",children:t.jsx(n,{children:"leftBottom"})}),t.jsx(i,{text:"Position rightBottom",position:"rightBottom",children:t.jsx(n,{children:"rightBottom"})}),t.jsx(i,{text:"Position rightTop",position:"rightTop",children:t.jsx(n,{children:"rightTop"})})]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`<Flex gap={16}>
  <Tooltip text="Position right" position="right">
    <Button>Right</Button>
  </Tooltip>
  <Tooltip text="Position bottom" position="bottom">
    <Button>Bottom</Button>
  </Tooltip>
  <Tooltip text="Position left" position="left">
    <Button>Left</Button>
  </Tooltip>
  <Tooltip text="Position top" position="top">
    <Button>Top</Button>
  </Tooltip>
  <Tooltip text="Position topLeft" position="topLeft">
    <Button>topLeft</Button>
  </Tooltip>
  <Tooltip text="Position topRight" position="topRight">
    <Button>topRight</Button>
  </Tooltip>
  <Tooltip text="Position bottomLeft" position="bottomLeft">
    <Button>bottomLeft</Button>
  </Tooltip>
  <Tooltip text="Position bottomRight" position="bottomRight">
    <Button>bottomRight</Button>
  </Tooltip>
  <Tooltip text="Position leftTop" position="leftTop">
    <Button>leftTop</Button>
  </Tooltip>
  <Tooltip text="Position leftBottom" position="leftBottom">
    <Button>leftBottom</Button>
  </Tooltip>
  <Tooltip text="Position rightBottom" position="rightBottom">
    <Button>rightBottom</Button>
  </Tooltip>
  <Tooltip text="Position rightTop" position="rightTop">
    <Button>rightTop</Button>
  </Tooltip>
</Flex>
`})}),`
`,t.jsx(o.h4,{children:"Controlled visibility"}),`
`,t.jsxs(o.p,{children:["Tooltip visibility can be managed externally with the ",t.jsx(o.code,{children:"isOpen"})," prop."]}),`
`,t.jsx(s,{justify:"center",children:t.jsx(x,{})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`const [showTooltip, setShowTooltip] = useState(true);

return (
  <Tooltip text="Custom controlled tooltip" isOpen={showTooltip} position="top">
    <Button
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}>
      Hover me
    </Button>
  </Tooltip>
);
`})}),`
`,t.jsx(o.h4,{children:"Rich content"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"text"})," prop supports any React node."]}),`
`,t.jsx(s,{justify:"center",children:t.jsx(i,{text:t.jsxs(o.div,{children:[t.jsx(o.strong,{children:"Keyboard Shortcut"}),t.jsx(o.div,{children:"Ctrl + Shift + P"})]}),width:150,children:t.jsx(n,{view:"icon",children:t.jsx(d,{})})})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`<Tooltip
  text={
    <div>
      <strong>Keyboard Shortcut</strong>
      <div>Ctrl + Shift + P</div>
    </div>
  }
  width={150}>
  <Button view="icon">
    <IconHelp />
  </Button>
</Tooltip>
`})}),`
`,t.jsx(o.h4,{children:"Background color"}),`
`,t.jsxs(o.p,{children:["Use the ",t.jsx(o.code,{children:"color"})," prop to highlight tooltips."]}),`
`,t.jsxs(s,{gap:16,justify:"center",children:[t.jsx(i,{text:"Red",position:"top",color:"red",children:t.jsx(n,{children:"Red"})}),t.jsx(i,{text:"Violet",color:"violet",children:t.jsx(n,{children:"Violet"})}),t.jsx(i,{text:"Orange",color:"orange",children:t.jsx(n,{children:"Orange"})}),t.jsx(i,{text:"#547894",color:"#547894",children:t.jsx(n,{children:"#547894"})})]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`<Flex gap={16} justify="center">
  <Tooltip text="Red" position="top" color="red">
    <Button>Red</Button>
  </Tooltip>
  <Tooltip text="Violet" color="violet">
    <Button>Violet</Button>
  </Tooltip>
  <Tooltip text="Orange" color="orange">
    <Button>Orange</Button>
  </Tooltip>
  <Tooltip text="#547894" color="#547894">
    <Button>#547894</Button>
  </Tooltip>
</Flex>
`})}),`
`,t.jsx(o.h4,{children:"Always visible tooltip"}),`
`,t.jsxs(o.p,{children:["Use ",t.jsx(o.code,{children:"isShow=false"})," to hide display a tooltip."]}),`
`,t.jsx(s,{justify:"center",children:t.jsx(i,{text:"Always hide tooltip",isShow:!1,position:"top",children:t.jsx(n,{children:"Hide tooltip"})})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`<Tooltip text="Always hide tooltip" isShow={false} position="top">
  <Button>Hide tooltip</Button>
</Tooltip>
`})}),`
`,t.jsx(o.h4,{children:"Custom width"}),`
`,t.jsxs(o.p,{children:["Set a maximum width for long content with the ",t.jsx(o.code,{children:"width"})," prop."]}),`
`,t.jsx(s,{justify:"center",children:t.jsx(i,{text:"This is a tooltip with a custom max width. It prevents overly long content from breaking layout.",width:200,position:"bottom",children:t.jsx(n,{children:"Long text"})})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`<Tooltip
  text="This is a tooltip with a custom max width. It prevents overly long content from breaking layout."
  width={200}
  position="bottom">
  <Button>Long text</Button>
</Tooltip>
`})}),`
`,t.jsx(o.h4,{children:"Best practices"}),`
`,t.jsx(o.h5,{children:"1. Content Guidelines"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsx(o.li,{children:"Keep tooltip text short (1–2 lines)."}),`
`,t.jsx(o.li,{children:"Use for supplementary information, not primary."}),`
`,t.jsx(o.li,{children:"Avoid critical content inside tooltips."}),`
`]}),`
`,t.jsx(o.h5,{children:"2. Positioning strategy"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`// Default for most cases
<Tooltip position="top" />

// When space constrained
<Tooltip position={isMobile ? "bottom" : "right"} />

// For edge-aligned elements
<Tooltip position="bottomRight" />
`})}),`
`,t.jsx(o.h6,{children:"3. Performance optimization"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsxs(o.li,{children:["Use ",t.jsx(o.code,{children:"isOpen"})," for controlled tooltips (e.g., form validation)."]}),`
`,t.jsxs(o.li,{children:["Avoid passing heavy React trees into ",t.jsx(o.code,{children:"text"}),"."]}),`
`,t.jsx(o.li,{children:"Memoize complex content to reduce re-renders."}),`
`]})]})}function B(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(l,{...e})}):l(e)}export{B as default,f as frontmatter};
