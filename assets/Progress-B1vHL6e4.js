import{j as e}from"./index-jR0FLVqU.js";import{F as o,b as a}from"./styles-B8Yckata.js";import{P as n}from"./Progress-Di6u_ZOZ.js";import{u as i}from"./index-BOxoqHcG.js";const u={package:"@quen-ui/components",title:"Progress",order:1,group:"components",description:"The Progress component displays a visual indicator of task completion percentage. Supports customizable colors, size variants, and optional value labels. Ideal for file uploads, form completions, and system processes.",import:"import { Progress } from '@quen-ui/components';",source:"/packages/components/src/Progress/Progress.tsx"};function l(r){const s={code:"code",div:"div",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h4,{children:"Basic usage"}),`
`,e.jsxs(s.p,{children:["The Progress component visualizes task completion as a horizontal bar. Provide a ",e.jsx(s.code,{children:"value"})," between 0–100 to indicate percentage."]}),`
`,e.jsx(n,{value:65,color:"green"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`function Demo() {
  return <Progress value={65} color="green" />;
}
`})}),`
`,e.jsx(s.h4,{children:"Size variants"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"size"})," prop to adjust bar height. Available sizes: ",e.jsx(s.code,{children:"xs"}),", ",e.jsx(s.code,{children:"s"}),", ",e.jsx(s.code,{children:"m"}),", ",e.jsx(s.code,{children:"l"}),"."]}),`
`,e.jsxs(o,{gap:"m",direction:"column",children:[e.jsx(n,{size:"xs",value:30}),e.jsx(n,{size:"s",value:50}),e.jsx(n,{size:"m",value:70}),e.jsx(n,{size:"l",value:100})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Flex gap="m" direction="column">
  <Progress size="xs" value={30} />
  <Progress size="s" value={50} />
  <Progress size="m" value={70} />
  <Progress size="l" value={100} />
</Flex>
`})}),`
`,e.jsx(s.h4,{children:"With numeric value"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"isShowInfo"})," prop overlays the percentage text inside the bar. You can also customize the color with predefined tokens."]}),`
`,e.jsx(n,{value:50,isShowInfo:!0,size:"l",color:"red"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Progress value={50} isShowInfo={true} size="l" color="red" />
`})}),`
`,e.jsx(s.h4,{children:"Custom label"}),`
`,e.jsxs(s.p,{children:["Instead of showing numeric percentage, use the ",e.jsx(s.code,{children:"label"})," prop to pass any React node. This allows richer content like loaders, icons, or descriptive text."]}),`
`,e.jsx(n,{value:75,label:e.jsxs(s.div,{className:"custom-label",children:[e.jsx(s.span,{children:"Processing..."}),e.jsx(a,{size:"xs"})]})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Progress
  value={75}
  label={
    <div className="custom-label">
      <span>Processing...</span>
      <Loader size="xs" />
    </div>
  }
/>
`})}),`
`,e.jsx(s.h4,{children:"Colors"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"color"})," prop controls the progress fill. Available tokens:"]}),`
`,e.jsx(s.p,{children:"Each color should be used to communicate intent:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"green → success, completion"}),`
`,e.jsx(s.li,{children:"yellow/orange → warnings, partial progress"}),`
`,e.jsx(s.li,{children:"red → errors, failed tasks"}),`
`,e.jsx(s.li,{children:"violet/grayViolet → neutral or secondary states"}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`export const COLOR_PROGRESS = [
  "violet",
  "grayViolet",
  "red",
  "yellow",
  "green",
  "orange"
] as const;

export type TProgressColor = (typeof COLOR_PROGRESS)[number];
`})}),`
`,e.jsxs(o,{gap:"m",direction:"column",children:[e.jsx(n,{color:"violet",value:50}),e.jsx(n,{color:"grayViolet",value:50}),e.jsx(n,{color:"red",value:50}),e.jsx(n,{color:"yellow",value:50}),e.jsx(n,{color:"green",value:50}),e.jsx(n,{color:"orange",value:50})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Flex gap="m" direction="column">
  <Progress color="violet" value={50} />
  <Progress color="grayViolet" value={50} />
  <Progress color="red" value={50} />
  <Progress color="yellow" value={50} />
  <Progress color="green" value={50} />
  <Progress color="orange" value={50} />
</Flex>
`})}),`
`,e.jsx(s.h4,{children:"Best practice"}),`
`,e.jsx(s.h5,{children:"When to use"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Task tracking — Show upload, download, or background job progress."}),`
`,e.jsx(s.li,{children:"Form submissions — Indicate long-running form validations or multi-step workflows."}),`
`,e.jsx(s.li,{children:"Content loading — Use when actual progress (0–100%) can be measured."}),`
`,e.jsx(s.li,{children:"User feedback — Provide reassurance that the system is working, especially for tasks longer than 1s."}),`
`]}),`
`,e.jsx(s.h5,{children:"When not to use"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Unknown duration — Prefer a ",e.jsx(s.code,{children:"Loader"})," when progress cannot be quantified."]}),`
`,e.jsx(s.li,{children:"Instant operations — Do not use for actions that complete under 300ms."}),`
`,e.jsx(s.li,{children:"As decoration — Avoid showing a progress bar when no actual process is running."}),`
`]}),`
`,e.jsx(s.h5,{children:"Additional guidelines"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Keep labels clear — either numeric (75%) or descriptive (Processing...)."}),`
`,e.jsx(s.li,{children:"Use consistent colors — green for success, red for failure, yellow/orange for caution."}),`
`,e.jsx(s.li,{children:"Do not animate excessively — animations should aid perception, not distract."}),`
`]})]})}function x(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(l,{...r})}):l(r)}export{x as default,u as frontmatter};
