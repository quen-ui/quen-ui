import{r as l,j as e}from"./index-jR0FLVqU.js";import{F as o}from"./styles-B8Yckata.js";import{I as t}from"./InputNumber-DNqvj-IM.js";import{c as i}from"./createReactComponent-R_WhpXRX.js";import{u as c}from"./index-BOxoqHcG.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2",key:"svg-0"}],["path",{d:"M12 3v3m0 12v3",key:"svg-1"}]],d=i("outline","currency-dollar","CurrencyDollar",u);/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5",key:"svg-0"}],["path",{d:"M10 9l4 0",key:"svg-1"}]],m=i("outline","temperature","Temperature",p),h=()=>{const[a,n]=l.useState(0);return e.jsx(t,{label:"Discount Rate",min:0,max:105,step:5,onChange:r=>n(Number(r)),isAllowNegative:!1,rightContent:"%",placeholder:"0-100",error:a>100?"Cannot exceed 100%":void 0})},x=()=>{const[a,n]=l.useState(null);return e.jsx(t,{label:"Product Price",value:a,onChange:r=>n(r?Number(r):null),isClearable:!0,isRequired:!0,error:a===null&&"Price is required",leftContent:e.jsx(d,{})})},y={package:"@quen-ui/components",title:"InputNumber",order:1,group:"components",description:"The InputNumber component provides a specialized input field for numeric values with advanced features like value formatting, step controls, input adornments, and comprehensive validation. Ideal for currency inputs, quantity selectors, and any numeric data entry scenarios.",import:"import { InputNumber } from '@quen-ui/components';",source:"/packages/components/src/InputNumber/InputNumber.tsx"};function s(a){const n={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Basic number input"}),`
`,e.jsx(n.p,{children:"A simple quantity selector with minimum and maximum constraints. Users can adjust the value with keyboard arrows or stepper buttons."}),`
`,e.jsx(t,{label:"Quantity",min:1,max:10,defaultValue:1}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { InputNumber } from "@quen-ui/components";

function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  return (
    <InputNumber
      label="Quantity"
      value={quantity}
      onChange={setQuantity}
      min={1}
      max={10}
    />
  );
}
`})}),`
`,e.jsx(n.h4,{children:"Currency input with formatting"}),`
`,e.jsxs(n.p,{children:[`Handles numeric values as formatted currency strings.
The `,e.jsx(n.code,{children:"formatter"})," controls how the number is displayed (e.g. ",e.jsx(n.code,{children:"$1,000.00"}),"), while the ",e.jsx(n.code,{children:"parser"})," ensures that only raw numeric values are stored."]}),`
`,e.jsx(t,{label:"Price",defaultValue:25.99,formatter:r=>`$ ${r}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:r=>parseFloat(r==null?void 0:r.replace(/\$\s?|(,*)/g,"")),decimalSeparator:".",step:.01}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputNumber
  label="Price"
  defaultValue={25.99}
  formatter={(value) => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",")}
  parser={(value) => parseFloat(value?.replace(/\\$\\s?|(,*)/g, ""))}
  decimalSeparator="."
  step={0.01}
/>
`})}),`
`,e.jsx(n.h4,{children:"Percentage input with constraints"}),`
`,e.jsxs(n.p,{children:["Accepts only values between ",e.jsx(n.code,{children:"0–100"}),". The ",e.jsx(n.code,{children:"rightContent"})," adds a percentage symbol, while validation shows an error if the limit is exceeded."]}),`
`,e.jsx(h,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputNumber
  label="Discount Rate"
  min={0}
  max={105}
  step={5}
  isAllowNegative={false}
  rightContent="%"
  placeholder="0-100"
  error={value > 100 ? "Cannot exceed 100%" : undefined}
/>
`})}),`
`,e.jsx(n.h4,{children:"Temperature input with negative values"}),`
`,e.jsxs(n.p,{children:["Demonstrates support for negative numbers. Custom step size (",e.jsx(n.code,{children:"0.5"}),") and an icon as adornment improve clarity."]}),`
`,e.jsx(t,{label:"Temperature (°C)",min:-273.15,step:.5,isAllowNegative:!0,rightContent:e.jsx(m,{}),decimalSeparator:"."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputNumber
  label="Temperature (°C)"
  min={-273.15}
  step={0.5}
  isAllowNegative={true}
  rightContent={<IconTemperature />}
  decimalSeparator="."
/>
`})}),`
`,e.jsx(n.h4,{children:"Clearable input with validation"}),`
`,e.jsx(n.p,{children:"Required input with clear button support. Displays an error when the field is empty and provides a currency icon prefix."}),`
`,e.jsx(x,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const PriceInput = () => {
  const [price, setPrice] = useState<number | null>(null);

  return (
    <InputNumber
      label="Product Price"
      value={price}
      onChange={(value) => setPrice(value ? Number(value) : null)}
      isClearable
      isRequired
      error={price === null && "Price is required"}
      leftContent={<IconCurrencyDollar />}
    />
  );
};
`})}),`
`,e.jsx(n.h4,{children:"Custom decimal formatting"}),`
`,e.jsxs(n.p,{children:["European-style formatting using a comma ",e.jsx(n.code,{children:'(",")'})," as decimal separator. The ",e.jsx(n.code,{children:"formatter"}),"/",e.jsx(n.code,{children:"parser"})," pair ensures correct conversion between user input and stored value."]}),`
`,e.jsx(t,{label:"European Format",decimalSeparator:",",formatter:r=>(r==null?void 0:r.toString().replace(".",","))||"",parser:r=>parseFloat(r==null?void 0:r.replace(",",".")),placeholder:"0,00"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputNumber
  label="European Format"
  decimalSeparator=","
  formatter={(value) => value?.toString().replace(".", ",") || ""}
  parser={(value) => parseFloat(value?.replace(",", "."))}
  placeholder="0,00"
/>
`})}),`
`,e.jsx(n.h4,{children:"Disabled state"}),`
`,e.jsx(n.p,{children:"Prevents user interaction when the field is not editable. Useful for read-only states, locked configuration, or when data is loading."}),`
`,e.jsx(t,{label:"Disabled value",defaultValue:42,isDisabled:!0}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<InputNumber
  label="Read-only Value"
  defaultValue={42}
  isDisabled
/>
`})}),`
`,e.jsx(n.h4,{children:"Size variants"}),`
`,e.jsx(n.p,{children:"Demonstrates all available size options. The size affects padding, font size, and icon alignment."}),`
`,e.jsxs(o,{direction:"column",gap:"s",children:[e.jsx(t,{size:"xs",label:"Small"}),e.jsx(t,{size:"s",label:"Small"}),e.jsx(t,{size:"m",label:"Medium"}),e.jsx(t,{size:"l",label:"Large"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Flex direction="column" gap="s">
  <InputNumber size="xs" label="Small" />
  <InputNumber size="s" label="Small" />
  <InputNumber size="m" label="Medium" />
  <InputNumber size="l" label="Large" />
</Flex>
`})}),`
`,e.jsx(n.h4,{children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"↑/↓: Increment/decrement by step"}),`
`,e.jsx(n.li,{children:"Shift + ↑ / ↓: Adjust by 10 × step"}),`
`,e.jsx(n.li,{children:"Page Up / Page Down: Large step adjustments"}),`
`,e.jsx(n.li,{children:"Screen readers: Announce value changes and validation errors"}),`
`,e.jsx(n.li,{children:"Buttons: Properly labeled increment/decrement controls"}),`
`,e.jsxs(n.li,{children:["Forms: Works with ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"name"}),", and required states"]}),`
`,e.jsx(n.li,{children:"Clear button: Keyboard and screen reader accessible"}),`
`]}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Currency amounts"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:"  formatter: value => `$${value.toFixed(2)}`\n"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Percentages:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:"  formatter: value => `${value}%`\n"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Large Numbers:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  formatter: value => value.toLocaleString()
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Negative Values:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:"  formatter: value => value < 0 ? `-$${Math.abs(value)}` : `$${value}`\n"})}),`
`,e.jsx(n.p,{children:"Use cases include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Product quantities"}),`
`,e.jsx(n.li,{children:"Prices and currency amounts"}),`
`,e.jsx(n.li,{children:"Discounts and percentages"}),`
`,e.jsx(n.li,{children:"Scientific values (temperature, measurements)"}),`
`,e.jsx(n.li,{children:"Configuration values (settings, limits)"}),`
`]})]})}function N(a={}){const{wrapper:n}={...c(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{N as default,y as frontmatter};
