import{d as D,l as x,r as a,j as re,m as io,n as lo,o as Lr,p as hn,q as Yt,s as so,i as bt,t as di,v as Je,w as uo,x as fi,y as $n,z as vi,A as co,k as Yr,B as mi,C as gi}from"./index-jR0FLVqU.js";const hi=(e,t)=>{switch(e){case"2xl":return x`
        font-size: ${t.fonts.header.size["2xl"]};
        line-height: ${t.fonts.header.lineHeight["2xl"]};
        font-weight: ${t.fonts.header.weight};
      `;case"xl":return x`
        font-size: ${t.fonts.header.size.xl};
        line-height: ${t.fonts.header.lineHeight.xl};
        font-weight: ${t.fonts.header.weight};
      `;case"l":return x`
        font-size: ${t.fonts.header.size.l};
        line-height: ${t.fonts.header.lineHeight.l};
        font-weight: ${t.fonts.header.weight};
      `;case"m":return x`
        font-size: ${t.fonts.header.size.m};
        line-height: ${t.fonts.header.lineHeight.m};
        font-weight: ${t.fonts.header.weight};
      `;case"s":return x`
        font-size: ${t.fonts.header.size.s};
        line-height: ${t.fonts.header.lineHeight.s};
        font-weight: ${t.fonts.header.weight};
      `;case"xs":return x`
        font-size: ${t.fonts.header.size.xs};
        line-height: ${t.fonts.header.lineHeight.xs};
        font-weight: ${t.fonts.header.weight};
      `}},pi=({type:e,color:t,theme:r})=>{if(t)return t;switch(e){case"secondary":return r.colors.grayViolet[6];case"success":return r.colors.green[6];case"warning":return r.colors.orange[6];case"danger":return r.colors.red[6];case"disabled":return r.colors.gray[3];default:return r.textColor}},Nd=D.span.attrs({className:"quen-ui__title"})`
  margin: 0;
  ${({theme:e,size:t})=>hi(t,e)};
  color: ${({color:e,type:t,theme:r})=>pi({color:e,theme:r,type:t})};
`,bi=(e,t)=>{switch(e){case"xl":return x`
        font-size: ${t.fonts.text.size.xl};
        line-height: ${t.fonts.text.lineHeight.xl};
        font-weight: ${t.fonts.text.weight};
      `;case"l":return x`
        font-size: ${t.fonts.text.size.l};
        line-height: ${t.fonts.text.lineHeight.l};
        font-weight: ${t.fonts.text.weight};
      `;case"m":return x`
        font-size: ${t.fonts.text.size.m};
        line-height: ${t.fonts.text.lineHeight.m};
        font-weight: ${t.fonts.text.weight};
      `;case"s":return x`
        font-size: ${t.fonts.text.size.s};
        line-height: ${t.fonts.text.lineHeight.s};
        font-weight: ${t.fonts.text.weight};
      `;case"xs":return x`
        font-size: ${t.fonts.text.size.xs};
        line-height: ${t.fonts.text.lineHeight.xs};
        font-weight: ${t.fonts.text.weight};
      `}},yi=({type:e,color:t,theme:r})=>{if(t)return t;switch(e){case"secondary":return r.colors.gray[5];case"success":return r.colors.green[6];case"warning":return r.colors.orange[6];case"danger":return r.colors.red[6];case"disabled":return r.colors.gray[3];default:return r.textColor}},wi=D.span.attrs({className:"quen-ui__text"})`
  margin: 0;
  ${({theme:e,size:t="m"})=>bi(t,e)};
  color: ${({color:e,type:t,theme:r})=>yi({color:e,theme:r,type:t})};
`,Si=({children:e,size:t="m",color:r,onClick:n,type:o,as:i,className:l,styles:s,...u},c)=>re.jsx(wi,{ref:c,size:t,color:r,onClick:n,type:o,as:i,styles:s,className:l,...u,children:e}),At=a.forwardRef(Si),xi=(e,t)=>{switch(t){case"l":return x`
        height: 3rem; // 48px
        ${e==="icon"&&"width: 3rem"};
      `;case"s":return x`
        height: 2rem; // 32px
        ${e==="icon"&&"width: 2rem"};
      `;case"xs":return x`
        height: 1.5rem; // 24px
        ${e==="icon"&&"width: 1.5rem"};
      `;case"m":default:return x`
        height: 2.5rem; // 40px
        ${e==="icon"&&"width: 2.5rem"};
      `}},Ei=(e,t="primary",r)=>{switch(t){case"secondary":return x`
        background: ${e.colors.gray[5]};
        color: ${e.colors.gray[1]};

        &:hover {
          background: ${e.colors.gray[4]};
        }

        &:active {
          background: ${e.colors.gray[6]};
        }
      `;case"danger":return x`
        background: ${e.colors.red[7]};
        color: ${e.colors.gray[1]};

        &:hover {
          background: ${e.colors.red[6]};
        }

        &:active {
          background: ${e.colors.red[8]};
        }
      `;case"ghost":return x`
        background: transparent;
        color: ${e.textColor};

        &:hover {
          color: ${e.colors.gray[7]};
        }

        &:active {
          color: ${e.colors.gray[9]};
        }
      `;case"success":return x`
        background: ${e.colors.green[7]};
        color: ${e.colors.gray[1]};

        &:hover {
          background: ${e.colors.green[6]};
        }

        &:active {
          background: ${e.colors.green[8]};
        }
      `;case"warning":return x`
        background: ${e.colors.orange[7]};
        color: ${e.colors.gray[1]};

        &:hover {
          background: ${e.colors.orange[6]};
        }

        &:active {
          background: ${e.colors.orange[8]};
        }
      `;case"link":return x`
        background: transparent;
        color: ${e.colors.violet[8]};

        .quen-ui__text {
          color: unset;
        }

        &:hover {
          color: ${e.colors.violet[6]};
        }

        &:active {
          color: ${e.colors.violet[9]};
        }

        &:disabled {
          color: ${e.colors.violet[1]};
        }
      `;case"icon":return x`
        background: transparent;

        &:hover {
          fill: ${!r&&io(.2,e.primaryColor)};
        }

        &:active {
          fill: ${!r&&lo(.2,e.primaryColor)};
        }
      `;case"primary":default:return x`
        background: ${e.primaryColor};
        color: ${e.colors.gray[1]};
        .quen-ui__text {
          color: ${e.colors.gray[1]};
        }

        &:hover {
          background: ${io(.2,e.primaryColor)};
        }

        &:active {
          background: ${lo(.2,e.primaryColor)};
        }
      `}},$i=D.button.withConfig({shouldForwardProp:e=>!["viewButton","isDisabled","fullWidth"].includes(e)})`
  border: none;
  background: none;
  outline: none;
  ${({size:e,viewButton:t})=>xi(t||"primary",e)}
  cursor: pointer;
  padding-left: ${({viewButton:e})=>e==="icon"?"0.25":"0.75"}rem;
  padding-right: ${({viewButton:e})=>e==="icon"?"0.25":"0.75"}rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  text-decoration: none;
  width: ${({fullWidth:e})=>e?"100%":"max-content"};
  ${({theme:e,viewButton:t,isDisabled:r})=>Ei(e,t,r)};

  &:disabled {
    background: ${({theme:e})=>e.colors.gray[2]};
    cursor: not-allowed;
  }
`,Ci=D.div.withConfig({shouldForwardProp:e=>e!=="height"})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({height:e})=>e}rem;
  width: max-content;

  .bar {
    width: 10px;
    height: 30px;
    background-color: ${({theme:e})=>e.colors.violet[2]};
    margin: 0 5px;
    animation: bar-animation 1.4s infinite ease-in-out;
  }

  .bar:nth-child(2) {
    animation-delay: -1.1s;
  }

  .bar:nth-child(3) {
    animation-delay: -0.9s;
  }

  @keyframes bar-animation {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
    }
  }
`,Ri=D.div.withConfig({shouldForwardProp:e=>e!=="height"})`
  width: ${({height:e})=>e}rem;
  height: ${({height:e})=>e}rem;
  border: 5px solid ${({theme:e})=>e.colors.grayViolet[2]};
  border-top: 5px solid ${({theme:e})=>e.colors.violet[2]};
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Ii=D.div.withConfig({shouldForwardProp:e=>e!=="height"})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({height:e})=>e}rem;
  width: max-content;

  .dot {
    width: ${({height:e})=>e/2}rem;
    height: ${({height:e})=>e/2}rem;
    background-color: ${({theme:e})=>e.colors.violet[2]};
    border-radius: 50%;
    margin: 0 5px;
    animation: dot-animation 1.4s infinite ease-in-out;
  }

  .dot:nth-child(2) {
    animation-delay: -0.7s;
  }

  .dot:nth-child(3) {
    animation-delay: -0.3s;
  }

  @keyframes dot-animation {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
`,Mi=({height:e})=>re.jsxs(Ci,{height:e,children:[re.jsx("span",{className:"bar"}),re.jsx("span",{className:"bar"}),re.jsx("span",{className:"bar"})]}),Ni=({height:e})=>re.jsx(Ri,{height:e}),ki=({height:e})=>re.jsxs(Ii,{height:e,children:[re.jsx("span",{className:"dot"}),re.jsx("span",{className:"dot"}),re.jsx("span",{className:"dot"})]}),_i=({view:e="dots",size:t="s"})=>{const r=a.useMemo(()=>{if(typeof t=="number")return t/Number(window.getComputedStyle(document.getElementsByTagName("body")[0]).fontSize.replace("px",""));switch(t){case"xs":return .75;case"m":return 1.5;case"l":return 2;case"s":default:return 1}},[t]);return e==="bars"?re.jsx(Mi,{height:r}):e==="oval"?re.jsx(Ni,{height:r}):re.jsx(ki,{height:r})},Di=({size:e="m",children:t,disabled:r,view:n,fullWidth:o,leftContent:i,rightContent:l,loading:s,loaderProps:u,onClick:c,onKeyPress:d,onKeyUp:v,style:g,...f},p)=>{const h=b=>{!s&&!r&&(c==null||c(b))},m=b=>{!r&&!s&&(d==null||d(b))},w=b=>{s?b.preventDefault():v==null||v(b)};return re.jsxs($i,{ref:p,"aria-busy":s,"aria-disabled":r,isDisabled:r,fullWidth:o,viewButton:n,size:e,forwardedAs:"button",disabled:r,onClick:h,onKeyPress:m,onKeyUp:w,style:g,...f,children:[i,s&&re.jsx(_i,{view:"oval",...u}),t,l]})},na=a.forwardRef(Di),Hn=e=>{switch(e){case"xs":return x`
        padding: 0.25rem;
        gap: 0.75rem;
      `;case"s":return x`
        padding: 0.5rem;
        gap: 1rem;
      `;case"l":return x`
        padding: 1.5rem;
        gap: 2rem;
      `;case"m":default:return x`
        padding: 1rem;
        gap: 1.5rem
      `}},kd=D.div.attrs({className:"quen-ui__card"})`
  border-radius: 0.25rem;
  border: 1px solid ${({theme:e})=>e.colors.grayViolet[5]};
  max-width: 350px;
`,_d=D.div`
  ${({size:e})=>Hn(e)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Dd=D.div`
  ${({size:e})=>Hn(e)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Pd=D.div`
  ${({size:e})=>Hn(e)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Pi=({direction:e,height:t,width:r})=>e==="horizontal"?x`
      width: ${r||"100%"};
      flex-direction: row;

      &:before,
      &:after {
        height: 1px;
      }

      &::after {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &::before {
        border-radius: 0.25rem 0 0 0.25rem;
      }
    `:x`
    height: ${t||"100%"};
    flex-direction: column;

    &:before,
    &:after {
      width: 1px;
    }

    &::after {
      border-radius: 0 0 0.25rem 0.25rem;
    }
    &::before {
      border-radius: 0.25rem 0.25rem 0 0;
    }
  `,Ti=({align:e,direction:t})=>e==="left"?x`
      &::before {
        ${t==="horizontal"?"width: 0.5rem":"height: 0.5rem"};
      }

      &::after {
        flex-grow: 1;
      }
    `:e==="right"?x`
      &::before {
        flex-grow: 1;
      }

      &::after {
        ${t==="horizontal"?"width: 0.5rem":"height: 0.5rem"};
      }
    `:x`
    &::before,
    &::after {
      flex-grow: 1;
    }
  `,Li=({view:e})=>x`
    &::before,
    &::after {
      content: "";
      ${({theme:t})=>{switch(e){case"disabled":return x`
              background-color: ${t.colors.gray[9]};
            `;case"danger":return x`
              background-color: ${t.colors.red[9]};
            `;case"success":return x`
              background-color: ${t.colors.green[9]};
            `;case"warning":return x`
              background-color: ${t.colors.orange[9]};
            `;case"primary":default:return x`
              background-color: ${t.colors.grayViolet[9]};
            `}}};
    }
  `,Ai=D.div`
  display: flex;
  align-items: center;
  ${({children:e})=>!!e&&"gap: 0.5rem"};
  ${Pi};
  ${Li};
  ${Ti};
  & > * {
    width: max-content;
    color: ${({theme:e})=>e.textColor};
  }
`,Oi=({height:e,width:t,children:r,align:n="center",view:o="primary",direction:i,className:l})=>re.jsx(Ai,{role:"separator",height:e,width:t,align:n,view:o,direction:i,className:l,children:r}),pn=(e,t)=>{if(typeof t=="number")return`${t}px`;if(t)return e.space[t]},Vi=D.div.withConfig({shouldForwardProp:e=>!["direction","gap","align","columnGap","rowGap","justify","wrap"].includes(e)}).attrs({className:"quen-ui__flex"})`
  display: flex;
  flex-direction: ${({direction:e})=>e||"row"};
  gap: ${({gap:e,theme:t})=>pn(t,e)};
  align-items: ${({align:e})=>e};
  column-gap: ${({columnGap:e,theme:t})=>pn(t,e)};
  row-gap: ${({rowGap:e,theme:t})=>pn(t,e)};
  justify-content: ${({justify:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
`,Gr=a.forwardRef(({children:e,...t},r)=>re.jsx(Vi,{ref:r,...t,children:e})),oa=D.header.withConfig({shouldForwardProp:e=>e!=="height"})`
  grid-area: header;
  padding-inline: ${({theme:e})=>e.space.m};
  padding-top: ${({theme:e})=>e.space.xs};
  padding-bottom: ${({theme:e})=>e.space.xs};
  svg {
    color: ${({theme:e})=>e.colors.grayViolet[9]};
  }
  position: sticky;
  top: 0;
  z-index: 100;

  display: flex;

  background: ${({theme:e})=>e.colors.grayViolet[1]};

  border-bottom: ${({theme:e})=>e.control.borderWidth} solid
    ${({theme:e})=>e.colors.gray[2]};

  ${({height:e})=>`height: ${e};`};
`,Cn=D.button.withConfig({shouldForwardProp:e=>!["isDisabled","isActive"].includes(e)}).attrs(e=>({className:e.isActive?"quen-ui__layout-menu-item--active":"quen-ui__layout-menu-item"}))`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s ease;
  background: transparent;
  justify-content: ${({isCollapsed:e})=>e?"center":"flex-start"};

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    width: 100%;
  }

  .menu-label {
    width: 100%;
  }

  &:hover {
    background: ${({theme:e,isDisabled:t,isActive:r})=>!t&&!r&&e.colors.grayViolet[9]};
  }

  ${({theme:e,isDisabled:t,isActive:r})=>r&&!t&&x`
      background-color: ${e.colors.violet[2]};
    `}
`,Fi=D.footer`
  grid-area: footer;
`,aa=D.aside.withConfig({shouldForwardProp:e=>!["isMobile","isOpen","isCollapsed","collapsedWidth"].includes(e)})`
  grid-area: slider;
  min-width: ${({isCollapsible:e,isCollapsed:t,collapsedWidth:r})=>e&&t?r:"250px"};
  background: ${({theme:e})=>e.colors.grayViolet[2]};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: auto;
  padding: ${({theme:e})=>e.space.xs};
  flex-direction: column;
  display: flex;
  height: calc(100vh - 87px);

  ${({isMobile:e})=>e&&x`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 80%;
      max-width: 300px;
      z-index: 95;
      transform: translateX(-100%);
    `};

  ${({isMobile:e,isOpen:t})=>e&&t&&x`
      transform: translateX(0);
    `}
`,ia=D.main`
  grid-area: content;
  overflow: auto;
  height: 100vh;
`,zi=D.div.withConfig({shouldForwardProp:e=>!["breakpoint"].includes(e)})`
  display: grid;
  min-height: 100vh;
  grid-template-areas: "header header" "slider content" "slider footer";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;

  @media (max-width: ${({breakpoint:e})=>`${e}px`}) {
    grid-template-areas: "header" "content" "footer";
    grid-template-columns: 1fr;

    ${aa} {
      display: none;
    }
  }

  &:has(${oa}) {
    ${ia} {
      height: calc(100vh - 71px);
    }
  }
`,ji=D.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>e.colors.grayViolet[2]};
  z-index: 100;
  opacity: 1;
  pointer-events: all;
  transition: opacity 0.3s ease;
`,la=a.createContext(null),Wi=({children:e,breakpoint:t=768})=>{const[r,n]=a.useState(!1),[o,i]=a.useState(!1),[l,s]=a.useState(!1);a.useEffect(()=>{const d=()=>{n(window.innerWidth<=t),window.innerWidth>t&&i(!1)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[t]);const u=()=>i(!o),c=()=>s(!l);return re.jsx(la.Provider,{value:{isMobile:r,sidebarOpen:o,sliderCollapsed:l,toggleSidebar:u,toggleSliderCollapse:c},children:re.jsxs(zi,{breakpoint:t,children:[e,r&&o&&re.jsx(ji,{onClick:u})]})})},Bi=()=>{const e=a.useContext(la);if(!e)throw new Error("useLayout must be used within a LayoutProvider");return e},Hi=e=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("rect",{x:3,y:6,width:18,height:2,fill:"currentColor"}),a.createElement("rect",{x:3,y:11,width:18,height:2,fill:"currentColor"}),a.createElement("rect",{x:3,y:16,width:18,height:2,fill:"currentColor"})),Ki=e=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("line",{x1:4.5,y1:4.5,x2:19.5,y2:19.5,stroke:"currentColor",strokeWidth:2}),a.createElement("line",{x1:4.5,y1:19.5,x2:19.5,y2:4.5,stroke:"currentColor",strokeWidth:2})),Ui=({children:e,className:t,style:r,height:n,menuItems:o,renderMenuItem:i,logo:l,classNameMenuItem:s})=>{const{isMobile:u,toggleSidebar:c,sidebarOpen:d}=Bi(),v=g=>re.jsxs(Cn,{className:s,onClick:g.onClick,isActive:g.isActive,isDisabled:g.isDisabled,children:[g.icon,g.label]},g.key);return re.jsxs(oa,{className:t,style:r,height:n,children:[re.jsxs(Gr,{gap:"s",align:"center",children:[u&&re.jsx(na,{onClick:c,children:d?re.jsx(Ki,{}):re.jsx(Hi,{})}),l]}),re.jsxs(Gr,{align:"center",justify:"space-between",children:[e,o&&re.jsx(Gr,{gap:"xs",children:o.map(g=>i?re.jsx(Cn,{className:s,children:i(g)},g.key):v(g))})]})]})},Gi=({children:e})=>re.jsx(ia,{children:e}),qi=({children:e})=>re.jsx(Fi,{children:e}),Qi=({children:e,isCollapsed:t,menuItems:r,renderMenuItem:n,isCollapsible:o,collapsedWidth:i,className:l})=>{const s=u=>re.jsxs(Cn,{onClick:u.onClick,isActive:u.isActive,isCollapsed:t,isDisabled:u.isDisabled,children:[u.icon,!t&&re.jsx(At,{size:"xs",className:"menu-label",children:u.label})]},u.key);return re.jsxs(aa,{isCollapsed:t,isCollapsible:o,className:l,collapsedWidth:i,children:[e,r&&re.jsx(Gr,{direction:"column",children:r.map(u=>n?n(u):s(u))})]})},rn=Wi;rn.Header=Ui;rn.Content=Gi;rn.Footer=qi;rn.Sidebar=Qi;const sa=a.createContext(null),Yi=({children:e,defaultValue:t,keepMounted:r,onChange:n})=>{const[o,i]=a.useState(t),l=u=>{i(u),n==null||n(u)},s=a.useMemo(()=>({onChange:l,value:o,keepMounted:r}),[o]);return re.jsx(sa.Provider,{value:s,children:e})},ua=()=>a.useContext(sa),ca=D(At).attrs({as:"button"}).withConfig({shouldForwardProp:e=>e!=="isSelected"})`
  border-radius: 0.25rem 0.25rem 0 0;
  border-width:  0 0 0.125rem 0;
  border-style: solid;
  border-color: transparent;
  background: transparent;
  position: relative;
  padding: 0.625rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: unset;
  justify-content: center;
  cursor: pointer;
  gap: 8px;
  
  ${({isSelected:e,theme:t})=>e&&x`
      border-color: ${t.primaryColor};
    `}
  
  &:disabled {
    cursor: not-allowed;
    color: ${({theme:e})=>e.colors.gray[1]};
  }

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.grayViolet[2]};
  }
`,Xi=D.div.withConfig({shouldForwardProp:e=>!["justify","isGrow"].includes(e)})`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({justify:e})=>e};
  gap: unset;
  position: relative;
  width: 100%;

  ${({isGrow:e})=>e&&x`
      ${ca} {
        flex-grow: 1;
      }
    `};

  &:before {
    content: "";
    position: absolute;
    border-color: ${({theme:e})=>e.colors.grayViolet[9]};
    border-width: 0.0625rem;
    border-style: solid;
    bottom: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;
    top: unset;
  }
`,fo=D.div`
  padding-top: 0.625rem;
`,Ji=({children:e,className:t,justify:r="flex-start",isGrow:n})=>re.jsx(Xi,{className:t,justify:r,isGrow:n,children:e}),Zi=({children:e,value:t,onClick:r,leftContent:n,rightContent:o,isDisabled:i,className:l})=>{const s=ua(),[u,c]=a.useState((s==null?void 0:s.value)===t);a.useEffect(()=>{c((s==null?void 0:s.value)===t)},[s==null?void 0:s.value]);const d=v=>{r==null||r(v),s==null||s.onChange(t)};return re.jsxs(ca,{className:l,size:"m",isSelected:u,onClick:d,disabled:i,children:[n,e,o]})},el=({children:e,value:t})=>{const r=ua();return(r==null?void 0:r.keepMounted)===!1&&r.value===t?re.jsx(fo,{children:e}):(r==null?void 0:r.keepMounted)===!1?null:re.jsx(fo,{style:(r==null?void 0:r.value)!==t?{display:"none"}:{},children:e})},Kn=Yi;Kn.TabPanel=el;Kn.TabsList=Ji;Kn.Tab=Zi;const tl=(e,t)=>{switch(t){case"success":return x`
        ${hn({colorStops:[e.colors.green[1],e.colors.green[4]],toDirection:"to right"})};
      `;case"danger":return x`
        ${hn({colorStops:[e.colors.red[1],e.colors.red[4]],toDirection:"to right"})};
      `;case"warning":return x`
        ${hn({colorStops:[e.colors.orange[1],e.colors.orange[4]],toDirection:"to right"})};
      `;case"info":default:return x`
        background: ${Lr(e.colors.grayViolet[9],.3)};
      `}},rl=(e,t)=>{switch(t){case"success":return e.colors.green[9];case"warning":return e.colors.orange[9];case"danger":return e.colors.red[9];case"info":default:return e.colors.grayViolet[9]}},Td=D.div.withConfig({shouldForwardProp:e=>!["size","type"].includes(e)})`
  border-radius: ${({theme:e})=>e.control.radius};
  padding: ${({size:e,theme:t})=>t.space[e]};
  display: flex;
  gap: ${({size:e,theme:t})=>t.space[e]};
  justify-content: space-between;
  ${({theme:e,type:t})=>tl(e,t)};

  .quen-ui__alert-content {
    width: 100%;
  }
`,Ld=D.div`
  border-radius: ${({theme:e})=>e.control.radius};
  background: ${({theme:e,type:t})=>rl(e,t)};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.grayViolet[1]};
  min-width: 32px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Ad=D.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    width: 100%;
  }
`,Od=D.div`
  display: flex;
  gap: ${({theme:e,size:t})=>e.space[t??"m"]};
  align-items: center;
`,Vd=D.div`
  width: ${({size:e,theme:t})=>t.control.height[e??"m"]};
  height: ${({size:e,theme:t})=>t.control.height[e??"m"]};
  border-radius: ${({theme:e})=>Yt(`${e.control.radius} * 4`)};
  background: ${({theme:e,color:t})=>t in e.colors?e.colors[t][3]:t};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({theme:e,status:t})=>t&&x`
    border: ${Yt(`${e.control.borderWidth} * 2`)} solid ${t==="online"?e.colors.green[5]:e.colors.grayViolet[5]};
  `}
  
  .quen-ui-avatar__icon {
    width: ${({size:e,theme:t})=>Yt(`${t.control.height[e??"m"]} - ${so(6)}`)};
    height: ${({size:e,theme:t})=>Yt(`${t.control.height[e??"m"]} - ${so(6)}`)};
  }
`,nl=["secondary","success","warning","danger","disabled"],ol={xs:"1rem",s:"1.125rem",m:"1.5rem",l:"2rem"},al=(e,t)=>{if(t){if(nl.includes(t))switch(t){case"success":return e.colors.green[9];case"warning":return e.colors.orange[9];case"danger":return e.colors.red[9];case"secondary":return e.colors.grayViolet[9];case"disabled":return e.colors.gray[5]}return t}return e.colors.violet[9]},Fd=D.div.withConfig({shouldForwardProp:e=>!["size","color"].includes(e)})`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  height: ${({size:e})=>ol[e]};
  border-radius: ${({theme:e})=>e.control.radius};
  padding-left:  ${({theme:e})=>e.space.xs};
  padding-right:  ${({theme:e})=>e.space.xs};
  background-color: ${({theme:e,color:t})=>al(e,t)};
  
  * {
    color: ${({theme:e})=>e.colors.gray[1]};
  }
`,zd=D.div.withConfig({shouldForwardProp:e=>e!=="isLastItem"})`
  cursor: pointer;
  user-select: none;
  
  text-decoration: none;
  
  span {
    display: flex;
    align-items: center;
  }
  
  ${({isLastItem:e})=>e&&x`
    color: ${({theme:t})=>t.colors.violet[9]};
    span {
      color: ${({theme:t})=>t.colors.violet[9]};
    }
  `};
  
  &:hover {
    color: ${({theme:e})=>e.colors.grayViolet[6]};
    span {
      color: ${({theme:e})=>e.colors.grayViolet[6]};
    }
  }
`,jd=D.nav`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,ar=e=>{switch(e){case"l":return"1.5rem";case"s":return"1rem";case"xs":return"0.875rem";case"m":default:return"1.25rem"}},il=D.label.withConfig({shouldForwardProp:e=>!["isDisabled"].includes(e)})`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${({isDisabled:e})=>e?"not-allowed":"pointer"};
  user-select: none;
`,ll=D.input.withConfig({shouldForwardProp:e=>!["size","isIntermediate"].includes(e)})`
  width: ${({size:e})=>ar(e)};
  height: ${({size:e})=>ar(e)};
  border: 1px solid ${({theme:e})=>e.colors.grayViolet[9]};
  transition:
    border-color 0.15s,
    background-color 0.15s;
  box-sizing: border-box;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  -webkit-appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: calc(calc(${({size:e})=>ar(e)} - 1px) / 2);
    left: calc(calc(${({size:e})=>ar(e)} - 6px) / 5);
    box-sizing: border-box;
    width: calc(${({size:e})=>ar(e)} * 0.6);
    height: calc(${({size:e})=>ar(e)} * 0.35);
    background-color: ${({theme:e})=>e.colors.violet[9]};
    border-left: 1px solid ${({theme:e})=>e.colors.grayViolet[9]};
    border-bottom: 1px solid ${({theme:e})=>e.colors.grayViolet[9]};
    opacity: 0;
    transition:
      opacity 0.15s,
      transform 0.15s,
      background-color 0.08s;
    transform: rotate(-50deg) scale(0, 1);
    transform-origin: 0 0;
  }

  &:disabled {
    background-color: ${({theme:e})=>e.colors.gray[2]};
    border: 1px solid ${({theme:e})=>e.colors.grayViolet[5]};
    cursor: not-allowed;
  }

  &:disabled:checked {
    background-color: ${({theme:e})=>e.colors.gray[2]};
    border: 1px solid ${({theme:e})=>e.colors.violet[3]};
    cursor: not-allowed;

    &:before {
      background-color: ${({theme:e})=>e.colors.gray[2]};
    }
  }
  &:checked {
    background-color: ${({theme:e})=>e.colors.violet[9]};
    border-color: ${({theme:e})=>e.colors.violet[5]};

    &::before {
      opacity: 1;
      transform: rotate(-50deg) scale(1, 1);
    }
  }

  &:hover:not(:disabled) {
    border: 1px solid ${({theme:e})=>e.colors.violet[5]};
  }

  &:hover:checked:not(:disabled) {
    border-color: ${({theme:e})=>e.colors.violet[9]};
    background-color: ${({theme:e})=>e.colors.violet[9]};

    &:before {
      background-color: ${({theme:e})=>e.colors.violet[9]};
    }
  }

  ${({isIntermediate:e,size:t,theme:r})=>e&&x`
      &,
      &:hover,
      &:checked {
        background-color: ${({theme:n})=>n.colors.violet[9]};
        border-color: ${({theme:n})=>n.colors.violet[7]};
        &::before {
          top: calc(calc(${ar(t)} - 0.125rem) / 2);
          left: 0.125rem;
          width: calc(${ar(t)} - 0.125rem * 2 - 0.125rem);
          height: 0.125rem;
          background-color: ${r.colors.grayViolet[7]};
          border: none;
          opacity: 1;
          transition:
            opacity 0.15s,
            transform 0.15s,
            background-color 0.08s 0.04s;
          transform: rotate(0) translate(0, -50%);
        }
      }
    `};
`,sl=D.div.withConfig({shouldForwardProp:e=>!["direction","isError"].includes(e)})`
  display: flex;
  gap: 0.5rem;
  flex-direction: ${({direction:e})=>e==="horizontal"?"row":"column"};

  .checkbox-group__required {
    color: ${({theme:e})=>e.colors.red[7]};
  }

  .checkbox-group__error-message {
    color: ${({theme:e})=>e.colors.red[7]};
  }

  ${({isError:e,theme:t})=>e&&x`
      border-left: 2px solid ${t.colors.red[9]};
      padding-left: 0.5rem;
    `};
`,da=({isDisabled:e,label:t,size:r="m",name:n,id:o,onChange:i,isChecked:l,value:s,className:u,isIntermediate:c})=>{const d=v=>{i==null||i(v.target.checked,v)};return re.jsxs(il,{id:o,isDisabled:e,className:u,children:[re.jsx(ll,{isIntermediate:c,checked:l,type:"checkbox",name:n,onChange:d,size:r,disabled:e,value:s}),t&&re.jsx(At,{size:r,children:t})]})},ul=e=>e.key,cl=e=>e.label,dl=e=>e.isDisabled,fl=e=>e.value,vl=e=>({...e,getItemKey:e.getItemKey||ul,getItemLabel:e.getItemLabel||cl,getItemDisabled:e.getItemDisabled||dl,getItemValue:e.getItemValue||fl}),ml=({...e})=>{const{name:t,className:r,size:n="m",getItemKey:o,getItemLabel:i,direction:l,options:s,isDisabled:u,getItemDisabled:c,getItemValue:d,value:v=[],onChange:g,label:f,isRequired:p,error:h,...m}=vl(e),w=y=>v.includes(d(y)),b=(y,E)=>{let R=[];y.isChecked?(R=[...v],R.push(y.value)):R=v.filter(S=>S!==y.value),g==null||g(R,E)};return re.jsxs(sl,{...m,direction:l,className:r,isError:!!h,children:[f&&re.jsxs(At,{as:"label",size:n,children:[f,p&&re.jsx("span",{className:"checkbox-group__required",children:"*"})]}),s.map(y=>{var E;return re.jsx(da,{size:n,label:i(y),name:t,isChecked:w(y),isDisabled:u??c(y),value:d(y),onChange:(R,S)=>b({isChecked:R,value:d(y)},S)},o(y)??((E=i(y))==null?void 0:E.toString()))}),")",typeof h=="string"&&re.jsx(At,{className:"checkbox-group__error-message",size:"xs",children:h})]})},gl=da;gl.Group=ml;function hl(e,t,r){const{isActive:n=!0,ignoreScrollbar:o=!1}={},i=a.useCallback(l=>{var c;if(!t)return;const s=l.target;!s||!o&&l instanceof MouseEvent&&window.innerWidth-l.clientX<20&&((c=window.scrollbars)!=null&&c.visible)||(Array.isArray(e)?e:[e]).some(d=>{var v;return(v=d==null?void 0:d.current)==null?void 0:v.contains(s)})||t()},[t,e,o,r==null?void 0:r.excludeRef]);a.useEffect(()=>{if(!(!n||typeof document>"u"))return document.addEventListener("mousedown",i),document.addEventListener("touchstart",i),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("touchstart",i)}},[i,n])}const Wd=D.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({zIndex:e})=>e||1e3};
  background: ${({theme:e})=>Lr(e.colors.grayViolet[5],.7)};
`,Wr={xs:"240px",s:"320px",m:"360px",l:"500px",full:"100%"},pl=(e,t)=>{switch(e){case"left":return x`
        bottom: 0;
        top: 0;
        left: 0;
        width: ${Wr[t]};
      `;case"right":return x`
        bottom: 0;
        top: 0;
        right: 0;
        width: ${Wr[t]};
      `;case"top":return x`
        top: 0;
        left: 0;
        right: 0;
        height: ${Wr[t]};
      `;case"bottom":return x`
        bottom: 0;
        left: 0;
        right: 0;
        height: ${Wr[t]};
      `;default:return null}},Bd=D.div`
  ${({size:e,position:t})=>pl(t,e)};
  max-width: 100%;
  max-height: 100vh;
  position: fixed;
  outline: 0;
  background: ${({theme:e})=>e.colors.grayViolet[7]};

  ${({status:e})=>(e==="preEnter"||e==="exiting")&&` opacity: 0;
      transform: scale(0.5);
    `};
  
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xs};
  
  .quen-ui-drawer--content {
    padding: 0.5rem;
  }
`,Hd=D.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,bl={width:0,height:0,top:0,right:0,bottom:0,left:0,x:0,y:0,toJSON:()=>{}},yl=e=>e.key||e.label,wl=e=>e.leftContent,Sl=e=>e.isDisabled,xl=e=>e.label,El=e=>e.onClick,$l=e=>e==null?void 0:e.groupId;function Cl(e){return{...e,getItemKey:e.getItemKey||yl,getItemLabel:e.getItemLabel||xl,getItemLeftContent:e.getItemLeftContent||wl,getItemDisabled:e.getItemDisabled||Sl,getItemOnClick:e.getItemOnClick||El,getItemGroupId:e.getItemGroupId||$l}}const Kd=({anchorRect:e,direction:t,dropdownRect:r,offset:n})=>{const o={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},i=e.y-r.height-n>=0,l=e.y+e.height+r.height+n<=o.height,s=e.right+e.width+r.width+n<=o.width,u=e.x-r.width-n>=0;switch(t){case"left":return u?"left":"right";case"right":return s?"right":"left";case"top":return i?"top":"bottom";case"topRight":return i?"topRight":"bottomRight";case"topLeft":return i?"topLeft":"bottomLeft";case"bottom":return l?"bottom":"top";case"bottomLeft":return l?"bottomLeft":"topLeft";case"bottomRight":return l?"bottomRight":"topRight";default:return t}},Ud=e=>{if(e){const{width:t,height:r,top:n,left:o,bottom:i,right:l,x:s,y:u}=e.getBoundingClientRect();return{width:t,height:r,top:n,left:o,bottom:i,right:l,x:s,y:u,toJSON(){}}}return bl},Rl=({getItemDisabled:e,getItemOnClick:t,getItemLabel:r,onItemClick:n,item:o,getItemLeftContent:i,size:l})=>{const s=u=>{var c;u.preventDefault(),(c=t==null?void 0:t(o))==null||c(o,u),n==null||n(o,u)};return re.jsxs(Pl,{size:l,isDisabled:e==null?void 0:e(o),onClick:s,children:[i==null?void 0:i(o),r(o)]})},Il=(e,t)=>{const{items:r=[],sortGroup:n,content:o,getItemGroupId:i,direction:l="bottom",className:s,width:u,size:c="m",getItemLabel:d,getItemDisabled:v,getItemKey:g,getItemLeftContent:f,getItemOnClick:p,...h}=Cl(e);hl(t,h.onClickOutside);const m=a.useMemo(()=>{const w=r.reduce((b,y)=>{if(i(y)){const E=b.length&&b[0].length&&b.findIndex(R=>i(R[0])===i(y));E!==-1?b[E].push(y):(b.push([]),b[b.length-1].push(y))}else b[0].push(y);return b},[[]]);return n?w.sort((b,y)=>n(i(b[0])||"1",i(y[0])||"-1")):w},[r]);return r.length===0&&!o?null:re.jsx(_l,{ref:t,direction:l,className:s,width:u,...h,children:o||m.map((w,b)=>re.jsxs(bt.Fragment,{children:[re.jsx(Dl,{children:w.map(y=>re.jsx(Rl,{item:y,size:c,getItemLabel:d,getItemDisabled:v,getItemLeftContent:f,getItemOnClick:p,onItemClick:h.onItemClick},g==null?void 0:g(y)))}),b!==m.length-1&&re.jsx(Oi,{direction:"horizontal"})]},i==null?void 0:i(w[0])))})},Ml=a.forwardRef(Il),ir=8,Nl=({direction:e,anchorRect:t,dropdownRect:r})=>{switch(e){case"top":return x`
        left: ${t.left+t.width/2-r.width/2}px;
        top: ${t.top-ir-r.height}px;
      `;case"bottom":return x`
        top: ${t.bottom+ir}px;
        left: ${t.left+t.width/2-r.width/2}px;
      `;case"bottomRight":return x`
        top: ${t.bottom+ir}px;
        left: ${t.right-r.width}px;
      `;case"bottomLeft":return x`
        top: ${t.bottom+ir}px;
        left: ${t.left}px;
      `;case"topLeft":return x`
        top: ${t.top-ir-r.height}px;
        left: ${t.left}px;
      `;case"topRight":return x`
        top: ${t.top-ir-r.height}px;
        left: ${t.right-r.width}px;
      `;case"right":return x`
        top: ${t.height/2-r.height/2+t.top}px;
        left: ${t.left+ir+t.width}px;
      `;case"left":return x`
        left: ${t.left-ir-r.width}px;
        top: ${t.height/2-r.height/2+t.top}px;
      `;default:return x``}},kl=e=>{switch(e){case"bottomLeft":return"0 0.5rem 0.5rem 0.5rem";case"bottomRight":return"0.5rem 0 0.5rem 0.5rem";case"topLeft":return"0.5rem 0.5rem 0.5rem 0";case"topRight":return"0.5rem 0.5rem 0 0.5rem";default:return"0.5rem"}},Gd=D.div`
  display: inline-block;
  position: relative;
  height: max-content;
`,_l=D.div.withConfig({shouldForwardProp:e=>!["anchorRef","width","height","direction"].includes(e)})`
  ${({theme:e,direction:t})=>x`
    background: ${e.colors.grayViolet[5]};
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: ${kl(t)};
    border: 1px solid ${e.colors.grayViolet[9]};
  `};
  ${({width:e})=>e&&x`
      width: ${e};
    `};

  ${({top:e,left:t})=>e&&t&&x`
      left: ${t}px;
      top: ${e}px;
      position: absolute;
      z-index: 1000;
    `};
`,qd=D(Ml).withConfig({shouldForwardProp:e=>!["direction","transitionStatus","anchorRect","dropdownRect","maxHeight","minWidth"].includes(e)})`
  position: absolute;
  overflow-y: auto;
  max-height: ${({maxHeight:e})=>e}px;
  height: ${({height:e})=>e||"max-content"};
  width: ${({width:e})=>e||"max-content"};
  min-width: ${({minWidth:e})=>`${e}px`};

  ${({transitionStatus:e})=>(e==="preEnter"||e==="exiting")&&x`
      opacity: 0;
      transform: scale(0.9);
    `};

  z-index: 1000;
  ${Nl};
`,Dl=D.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Pl=D(At)`
  justify-content: flex-start;
  cursor: ${({isDisabled:e})=>e?"not-allowed":"pointer"};
  padding: 0.25rem;
  display: flex;
  gap: 0.25rem;
  
  ${({isDisabled:e})=>e?x`
    background: ${({theme:t})=>t.colors.gray[2]};
    color:  ${({theme:t})=>t.colors.grayViolet[2]};
  `:x`
    &:hover {
      padding-left: calc(0.25rem - 2px);
      background: ${({theme:t})=>t.colors.gray[3]};
      border-left: 2px solid
      ${({theme:t})=>t.colors.violet[3]};
    }
  `}
`,Qd=D.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .text-field__required {
    color: ${({theme:e})=>e.colors.red[7]};
  }

  .text-field__error-message {
    color: ${({theme:e})=>e.colors.red[7]};
  }
`,Yd=D(At)`
  box-sizing: border-box;
  outline: none;
  border: none;
  background: transparent;
  width: 100%;
`,Xd=D.div.withConfig({shouldForwardProp:e=>!["size","isFocus","error","isDisabled"].includes(e)})`
  height: ${({size:e,theme:t})=>t.control.height[e]};
  border-radius: 0.25rem;
  border: 1px solid ${({theme:e})=>e.colors.gray[3]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[5]};
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  gap: 0.5rem;

  &:hover {
    border-bottom: 1px solid ${({theme:e})=>e.colors.gray[8]};
  }

  ${({isFocus:e})=>e&&x`
      border-bottom: 2px solid
        ${({theme:t})=>t.colors.violet[9]}!important;
    `}

  ${({error:e,theme:t})=>e&&x`
      border-bottom: 2px solid ${t.colors.red[9]}!important;
    `};

  ${({isDisabled:e,theme:t})=>e&&x`
      background: ${t.colors.gray[3]};
      border-bottom: 1px solid ${t.colors.gray[3]}!important;
      input {
        background: ${t.colors.gray[3]};
      }
    `};
`,Tl=D.div`
  position: relative;
  width: ${({width:e})=>typeof e=="number"?`${e}px`:e||"auto"};
  height: ${({height:e})=>typeof e=="number"?`${e}px`:e||"auto"};
  display: inline-block;
  cursor: ${({isPreview:e})=>e?"pointer":"default"};
`,Jd=D.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Zd=D.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`,ef=D.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.gray[1]};
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Tl}:hover & {
    opacity: 1;
  }
`,tf=D.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme:e})=>Lr(e.colors.gray[2],.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,rf=D.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`,nf=D(na)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1001;
`,of=D.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
`;function st(e){"@babel/helpers - typeof";return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},st(e)}function Ll(e,t){if(st(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(st(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fa(e){var t=Ll(e,"string");return st(t)=="symbol"?t:t+""}function L(e,t,r){return(t=fa(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function va(e){if(Array.isArray(e))return e}function Al(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,o,i,l,s=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(d){c=!0,o=d}finally{try{if(!u&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return s}}function Rn(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Un(e,t){if(e){if(typeof e=="string")return Rn(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Rn(e,t):void 0}}function ma(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(e,t){return va(e)||Al(e,t)||Un(e,t)||ma()}function Ol(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function wt(e,t){if(e==null)return{};var r,n,o=Ol(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Sr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vo(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,fa(n.key),n)}}function xr(e,t,r){return t&&vo(e.prototype,t),r&&vo(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function In(){return typeof BigInt=="function"}function ga(e){return!e&&e!==0&&!Number.isNaN(e)||!String(e).trim()}function vr(e){var t=e.trim(),r=t.startsWith("-");r&&(t=t.slice(1)),t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),t.startsWith(".")&&(t="0".concat(t));var n=t||"0",o=n.split("."),i=o[0]||"0",l=o[1]||"0";i==="0"&&l==="0"&&(r=!1);var s=r?"-":"";return{negative:r,negativeStr:s,trimStr:n,integerStr:i,decimalStr:l,fullStr:"".concat(s).concat(n)}}function Gn(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function fr(e){var t=String(e);if(Gn(e)){var r=Number(t.slice(t.indexOf("e-")+2)),n=t.match(/\.(\d+)/);return n!=null&&n[1]&&(r+=n[1].length),r}return t.includes(".")&&qn(t)?t.length-t.indexOf(".")-1:0}function nn(e){var t=String(e);if(Gn(e)){if(e>Number.MAX_SAFE_INTEGER)return String(In()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(In()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(fr(t))}return vr(t).fullStr}function qn(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}var Vl=(function(){function e(t){if(Sr(this,e),L(this,"origin",""),L(this,"negative",void 0),L(this,"integer",void 0),L(this,"decimal",void 0),L(this,"decimalLen",void 0),L(this,"empty",void 0),L(this,"nan",void 0),ga(t)){this.empty=!0;return}if(this.origin=String(t),t==="-"||Number.isNaN(t)){this.nan=!0;return}var r=t;if(Gn(r)&&(r=Number(r)),r=typeof r=="string"?r:nn(r),qn(r)){var n=vr(r);this.negative=n.negative;var o=n.trimStr.split(".");this.integer=BigInt(o[0]);var i=o[1]||"0";this.decimal=BigInt(i),this.decimalLen=i.length}else this.nan=!0}return xr(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(r){var n="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(r,"0"));return BigInt(n)}},{key:"negate",value:function(){var r=new e(this.toString());return r.negative=!r.negative,r}},{key:"cal",value:function(r,n,o){var i=Math.max(this.getDecimalStr().length,r.getDecimalStr().length),l=this.alignDecimal(i),s=r.alignDecimal(i),u=n(l,s).toString(),c=o(i),d=vr(u),v=d.negativeStr,g=d.trimStr,f="".concat(v).concat(g.padStart(c+1,"0"));return new e("".concat(f.slice(0,-c),".").concat(f.slice(-c)))}},{key:"add",value:function(r){if(this.isInvalidate())return new e(r);var n=new e(r);return n.isInvalidate()?this:this.cal(n,function(o,i){return o+i},function(o){return o})}},{key:"multi",value:function(r){var n=new e(r);return this.isInvalidate()||n.isInvalidate()?new e(NaN):this.cal(n,function(o,i){return o*i},function(o){return o*2})}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(r){return this.toString()===(r==null?void 0:r.toString())}},{key:"lessEquals",value:function(r){return this.add(r.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return r?this.isInvalidate()?"":vr("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e})(),Fl=(function(){function e(t){if(Sr(this,e),L(this,"origin",""),L(this,"number",void 0),L(this,"empty",void 0),ga(t)){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return xr(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(r){if(this.isInvalidate())return new e(r);var n=Number(r);if(Number.isNaN(n))return this;var o=this.number+n;if(o>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(o<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var i=Math.max(fr(this.number),fr(n));return new e(o.toFixed(i))}},{key:"multi",value:function(r){var n=Number(r);if(this.isInvalidate()||Number.isNaN(n))return new e(NaN);var o=this.number*n;if(o>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(o<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var i=Math.max(fr(this.number),fr(n));return new e(o.toFixed(i))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(r){return this.toNumber()===(r==null?void 0:r.toNumber())}},{key:"lessEquals",value:function(r){return this.add(r.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return r?this.isInvalidate()?"":nn(this.number):this.origin}}]),e})();function Wt(e){return In()?new Vl(e):new Fl(e)}function qr(e,t,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var o=vr(e),i=o.negativeStr,l=o.integerStr,s=o.decimalStr,u="".concat(t).concat(s),c="".concat(i).concat(l);if(r>=0){var d=Number(s[r]);if(d>=5&&!n){var v=Wt(e).add("".concat(i,"0.").concat("0".repeat(r)).concat(10-d));return qr(v.toString(),t,r,n)}return r===0?c:"".concat(c).concat(t).concat(s.padEnd(r,"0").slice(0,r))}return u===".0"?c:"".concat(c).concat(u)}var bn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var mo;function zl(){return mo||(mo=1,(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var s=arguments[l];s&&(i=o(i,n(s)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var s in i)t.call(i,s)&&i[s]&&(l=o(l,s));return l}function o(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(bn)),bn.exports}var jl=zl();const He=di(jl);function go(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?go(Object(r),!0).forEach(function(n){L(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):go(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Wl(e){return!!(e.addonBefore||e.addonAfter)}function Bl(e){return!!(e.prefix||e.suffix||e.allowClear)}function Hl(e,t){if(e){e.focus(t);var r=t||{},n=r.cursor;if(n){var o=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(o,o);break;default:e.setSelectionRange(0,o)}}}}var Kl=bt.forwardRef(function(e,t){var r,n,o,i=e.inputElement,l=e.children,s=e.prefixCls,u=e.prefix,c=e.suffix,d=e.addonBefore,v=e.addonAfter,g=e.className,f=e.style,p=e.disabled,h=e.readOnly,m=e.focused,w=e.triggerFocus,b=e.allowClear,y=e.value,E=e.handleReset,R=e.hidden,S=e.classes,$=e.classNames,P=e.dataAttrs,B=e.styles,V=e.components,O=e.onClear,Y=l??i,j=(V==null?void 0:V.affixWrapper)||"span",ue=(V==null?void 0:V.groupWrapper)||"span",ce=(V==null?void 0:V.wrapper)||"span",H=(V==null?void 0:V.groupAddon)||"span",ie=a.useRef(null),_=function(k){var z;(z=ie.current)!==null&&z!==void 0&&z.contains(k.target)&&(w==null||w())},me=Bl(e),F=a.cloneElement(Y,{value:y,className:He((r=Y.props)===null||r===void 0?void 0:r.className,!me&&($==null?void 0:$.variant))||null}),N=a.useRef(null);if(bt.useImperativeHandle(t,function(){return{nativeElement:N.current||ie.current}}),me){var K=null;if(b){var oe=!p&&!h&&y,he="".concat(s,"-clear-icon"),be=st(b)==="object"&&b!==null&&b!==void 0&&b.clearIcon?b.clearIcon:"✖";K=bt.createElement("button",{type:"button",tabIndex:-1,onClick:function(k){E==null||E(k),O==null||O()},onMouseDown:function(k){return k.preventDefault()},className:He(he,L(L({},"".concat(he,"-hidden"),!oe),"".concat(he,"-has-suffix"),!!c))},be)}var _e="".concat(s,"-affix-wrapper"),De=He(_e,L(L(L(L(L({},"".concat(s,"-disabled"),p),"".concat(_e,"-disabled"),p),"".concat(_e,"-focused"),m),"".concat(_e,"-readonly"),h),"".concat(_e,"-input-with-clear-btn"),c&&b&&y),S==null?void 0:S.affixWrapper,$==null?void 0:$.affixWrapper,$==null?void 0:$.variant),Z=(c||b)&&bt.createElement("span",{className:He("".concat(s,"-suffix"),$==null?void 0:$.suffix),style:B==null?void 0:B.suffix},K,c);F=bt.createElement(j,Je({className:De,style:B==null?void 0:B.affixWrapper,onClick:_},P==null?void 0:P.affixWrapper,{ref:ie}),u&&bt.createElement("span",{className:He("".concat(s,"-prefix"),$==null?void 0:$.prefix),style:B==null?void 0:B.prefix},u),F,Z)}if(Wl(e)){var Se="".concat(s,"-group"),Le="".concat(Se,"-addon"),A="".concat(Se,"-wrapper"),C=He("".concat(s,"-wrapper"),Se,S==null?void 0:S.wrapper,$==null?void 0:$.wrapper),T=He(A,L({},"".concat(A,"-disabled"),p),S==null?void 0:S.group,$==null?void 0:$.groupWrapper);F=bt.createElement(ue,{className:T,ref:N},bt.createElement(ce,{className:C},d&&bt.createElement(H,{className:Le},d),F,v&&bt.createElement(H,{className:Le},v)))}return bt.cloneElement(F,{className:He((n=F.props)===null||n===void 0?void 0:n.className,g)||null,style:I(I({},(o=F.props)===null||o===void 0?void 0:o.style),f),hidden:R})});function Ul(e){if(Array.isArray(e))return Rn(e)}function ha(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ct(e){return Ul(e)||ha(e)||Un(e)||Gl()}function It(e){var t=a.useRef();t.current=e;var r=a.useCallback(function(){for(var n,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(n=t.current)===null||n===void 0?void 0:n.call.apply(n,[t].concat(i))},[]);return r}function Xt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var ho=Xt()?a.useLayoutEffect:a.useEffect,lt=function(t,r){var n=a.useRef(!0);ho(function(){return t(n.current)},r),ho(function(){return n.current=!1,function(){n.current=!0}},[])},kr=function(t,r){lt(function(n){if(!n)return t()},r)};function Dr(e){var t=a.useRef(!1),r=a.useState(e),n=M(r,2),o=n[0],i=n[1];a.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function l(s,u){u&&t.current||i(s)}return[o,l]}function yn(e){return e!==void 0}function Mn(e,t){var r=t||{},n=r.defaultValue,o=r.value,i=r.onChange,l=r.postState,s=Dr(function(){return yn(o)?o:yn(n)?typeof n=="function"?n():n:typeof e=="function"?e():e}),u=M(s,2),c=u[0],d=u[1],v=o!==void 0?o:c,g=l?l(v):v,f=It(i),p=Dr([v]),h=M(p,2),m=h[0],w=h[1];kr(function(){var y=m[0];c!==y&&f(c,y)},[m]),kr(function(){yn(o)||d(o)},[o]);var b=It(function(y,E){d(y,E),w([v],E)});return[g,b]}function ql(e,t){var r=Object.assign({},e);return Array.isArray(t)&&t.forEach(function(n){delete r[n]}),r}function Ql(e,t){return typeof Proxy<"u"&&e?new Proxy(e,{get:function(n,o){if(t[o])return t[o];var i=n[o];return typeof i=="function"?i.bind(n):i}}):e}var wn={exports:{}},Ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po;function Yl(){if(po)return Ge;po=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen"),p;p=Symbol.for("react.module.reference");function h(m){if(typeof m=="object"&&m!==null){var w=m.$$typeof;switch(w){case e:switch(m=m.type,m){case r:case o:case n:case c:case d:return m;default:switch(m=m&&m.$$typeof,m){case s:case l:case u:case g:case v:case i:return m;default:return w}}case t:return w}}}return Ge.ContextConsumer=l,Ge.ContextProvider=i,Ge.Element=e,Ge.ForwardRef=u,Ge.Fragment=r,Ge.Lazy=g,Ge.Memo=v,Ge.Portal=t,Ge.Profiler=o,Ge.StrictMode=n,Ge.Suspense=c,Ge.SuspenseList=d,Ge.isAsyncMode=function(){return!1},Ge.isConcurrentMode=function(){return!1},Ge.isContextConsumer=function(m){return h(m)===l},Ge.isContextProvider=function(m){return h(m)===i},Ge.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},Ge.isForwardRef=function(m){return h(m)===u},Ge.isFragment=function(m){return h(m)===r},Ge.isLazy=function(m){return h(m)===g},Ge.isMemo=function(m){return h(m)===v},Ge.isPortal=function(m){return h(m)===t},Ge.isProfiler=function(m){return h(m)===o},Ge.isStrictMode=function(m){return h(m)===n},Ge.isSuspense=function(m){return h(m)===c},Ge.isSuspenseList=function(m){return h(m)===d},Ge.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===r||m===o||m===n||m===c||m===d||m===f||typeof m=="object"&&m!==null&&(m.$$typeof===g||m.$$typeof===v||m.$$typeof===i||m.$$typeof===l||m.$$typeof===u||m.$$typeof===p||m.getModuleId!==void 0)},Ge.typeOf=h,Ge}var bo;function Xl(){return bo||(bo=1,wn.exports=Yl()),wn.exports}var Sn=Xl();function pa(e,t,r){var n=a.useRef({});return(!("value"in n.current)||r(n.current.condition,t))&&(n.current.value=e(),n.current.condition=t),n.current.value}var Jl=Symbol.for("react.element"),Zl=Symbol.for("react.transitional.element"),es=Symbol.for("react.fragment");function ba(e){return e&&st(e)==="object"&&(e.$$typeof===Jl||e.$$typeof===Zl)&&e.type===es}var ts=Number(a.version.split(".")[0]),Qn=function(t,r){typeof t=="function"?t(r):st(t)==="object"&&t&&"current"in t&&(t.current=r)},on=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=r.filter(Boolean);return o.length<=1?o[0]:function(i){r.forEach(function(l){Qn(l,i)})}},an=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return pa(function(){return on.apply(void 0,r)},r,function(o,i){return o.length!==i.length||o.every(function(l,s){return l!==i[s]})})},ln=function(t){var r,n;if(!t)return!1;if(ya(t)&&ts>=19)return!0;var o=Sn.isMemo(t)?t.type.type:t.type;return!(typeof o=="function"&&!((r=o.prototype)!==null&&r!==void 0&&r.render)&&o.$$typeof!==Sn.ForwardRef||typeof t=="function"&&!((n=t.prototype)!==null&&n!==void 0&&n.render)&&t.$$typeof!==Sn.ForwardRef)};function ya(e){return a.isValidElement(e)&&!ba(e)}var Yn=function(t){if(t&&ya(t)){var r=t;return r.props.propertyIsEnumerable("ref")?r.props.ref:r.ref}return null},Nn={},rs=function(t){};function ns(e,t){}function os(e,t){}function as(){Nn={}}function wa(e,t,r){!t&&!Nn[r]&&(e(!1,r),Nn[r]=!0)}function Ar(e,t){wa(ns,e,t)}function is(e,t){wa(os,e,t)}Ar.preMessage=rs;Ar.resetWarned=as;Ar.noteOnce=is;function ls(e,t){var r=a.useRef(null);function n(){try{var i=e.selectionStart,l=e.selectionEnd,s=e.value,u=s.substring(0,i),c=s.substring(l);r.current={start:i,end:l,value:s,beforeTxt:u,afterTxt:c}}catch{}}function o(){if(e&&r.current&&t)try{var i=e.value,l=r.current,s=l.beforeTxt,u=l.afterTxt,c=l.start,d=i.length;if(i.startsWith(s))d=s.length;else if(i.endsWith(u))d=i.length-r.current.afterTxt.length;else{var v=s[c-1],g=i.indexOf(v,c-1);g!==-1&&(d=g+1)}e.setSelectionRange(d,d)}catch(f){Ar(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(f.message))}}return[n,o]}const Xn=(function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))});var ss=function(){var t=a.useState(!1),r=M(t,2),n=r[0],o=r[1];return lt(function(){o(Xn())},[]),n},Sa=function(t){return+setTimeout(t,16)},xa=function(t){return clearTimeout(t)};typeof window<"u"&&"requestAnimationFrame"in window&&(Sa=function(t){return window.requestAnimationFrame(t)},xa=function(t){return window.cancelAnimationFrame(t)});var yo=0,Jn=new Map;function Ea(e){Jn.delete(e)}var yt=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;yo+=1;var n=yo;function o(i){if(i===0)Ea(n),t();else{var l=Sa(function(){o(i-1)});Jn.set(n,l)}}return o(r),n};yt.cancel=function(e){var t=Jn.get(e);return Ea(e),xa(t)};var us=200,cs=600;function ds(e){var t=e.prefixCls,r=e.upNode,n=e.downNode,o=e.upDisabled,i=e.downDisabled,l=e.onStep,s=a.useRef(),u=a.useRef([]),c=a.useRef();c.current=l;var d=function(){clearTimeout(s.current)},v=function(y,E){y.preventDefault(),d(),c.current(E);function R(){c.current(E),s.current=setTimeout(R,us)}s.current=setTimeout(R,cs)};a.useEffect(function(){return function(){d(),u.current.forEach(function(b){return yt.cancel(b)})}},[]);var g=ss();if(g)return null;var f="".concat(t,"-handler"),p=He(f,"".concat(f,"-up"),L({},"".concat(f,"-up-disabled"),o)),h=He(f,"".concat(f,"-down"),L({},"".concat(f,"-down-disabled"),i)),m=function(){return u.current.push(yt(d))},w={unselectable:"on",role:"button",onMouseUp:m,onMouseLeave:m};return a.createElement("div",{className:"".concat(f,"-wrap")},a.createElement("span",Je({},w,{onMouseDown:function(y){v(y,!0)},"aria-label":"Increase Value","aria-disabled":o,className:p}),r||a.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})),a.createElement("span",Je({},w,{onMouseDown:function(y){v(y,!1)},"aria-label":"Decrease Value","aria-disabled":i,className:h}),n||a.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})))}function wo(e){var t=typeof e=="number"?nn(e):vr(e).fullStr,r=t.includes(".");return r?vr(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}const fs=(function(){var e=a.useRef(0),t=function(){yt.cancel(e.current)};return a.useEffect(function(){return t},[]),function(r){t(),e.current=yt(function(){r()})}});var vs=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","changeOnWheel","controls","classNames","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","changeOnBlur","domRef"],ms=["disabled","style","prefixCls","value","prefix","suffix","addonBefore","addonAfter","className","classNames"],So=function(t,r){return t||r.isEmpty()?r.toString():r.toNumber()},xo=function(t){var r=Wt(t);return r.isInvalidate()?null:r},gs=a.forwardRef(function(e,t){var r=e.prefixCls,n=e.className,o=e.style,i=e.min,l=e.max,s=e.step,u=s===void 0?1:s,c=e.defaultValue,d=e.value,v=e.disabled,g=e.readOnly,f=e.upHandler,p=e.downHandler,h=e.keyboard,m=e.changeOnWheel,w=m===void 0?!1:m,b=e.controls,y=b===void 0?!0:b;e.classNames;var E=e.stringMode,R=e.parser,S=e.formatter,$=e.precision,P=e.decimalSeparator,B=e.onChange,V=e.onInput,O=e.onPressEnter,Y=e.onStep,j=e.changeOnBlur,ue=j===void 0?!0:j,ce=e.domRef,H=wt(e,vs),ie="".concat(r,"-input"),_=a.useRef(null),me=a.useState(!1),F=M(me,2),N=F[0],K=F[1],oe=a.useRef(!1),he=a.useRef(!1),be=a.useRef(!1),_e=a.useState(function(){return Wt(d??c)}),De=M(_e,2),Z=De[0],Se=De[1];function Le(fe){d===void 0&&Se(fe)}var A=a.useCallback(function(fe,X){if(!X)return $>=0?$:Math.max(fr(fe),fr(u))},[$,u]),C=a.useCallback(function(fe){var X=String(fe);if(R)return R(X);var xe=X;return P&&(xe=xe.replace(P,".")),xe.replace(/[^\w.-]+/g,"")},[R,P]),T=a.useRef(""),ee=a.useCallback(function(fe,X){if(S)return S(fe,{userTyping:X,input:String(T.current)});var xe=typeof fe=="number"?nn(fe):fe;if(!X){var J=A(xe,X);if(qn(xe)&&(P||J>=0)){var Ie=P||".";xe=qr(xe,Ie,J)}}return xe},[S,A,P]),k=a.useState(function(){var fe=c??d;return Z.isInvalidate()&&["string","number"].includes(st(fe))?Number.isNaN(fe)?"":fe:ee(Z.toString(),!1)}),z=M(k,2),pe=z[0],ye=z[1];T.current=pe;function ae(fe,X){ye(ee(fe.isInvalidate()?fe.toString(!1):fe.toString(!X),X))}var Ce=a.useMemo(function(){return xo(l)},[l,$]),ge=a.useMemo(function(){return xo(i)},[i,$]),we=a.useMemo(function(){return!Ce||!Z||Z.isInvalidate()?!1:Ce.lessEquals(Z)},[Ce,Z]),Ae=a.useMemo(function(){return!ge||!Z||Z.isInvalidate()?!1:Z.lessEquals(ge)},[ge,Z]),te=ls(_.current,N),qe=M(te,2),Pe=qe[0],je=qe[1],We=function(X){return Ce&&!X.lessEquals(Ce)?Ce:ge&&!ge.lessEquals(X)?ge:null},Re=function(X){return!We(X)},Be=function(X,xe){var J=X,Ie=Re(J)||J.isEmpty();if(!J.isEmpty()&&!xe&&(J=We(J)||J,Ie=!0),!g&&!v&&Ie){var le=J.toString(),ve=A(le,xe);return ve>=0&&(J=Wt(qr(le,".",ve)),Re(J)||(J=Wt(qr(le,".",ve,!0)))),J.equals(Z)||(Le(J),B==null||B(J.isEmpty()?null:So(E,J)),d===void 0&&ae(J,xe)),J}return Z},Qe=fs(),tt=function fe(X){if(Pe(),T.current=X,ye(X),!he.current){var xe=C(X),J=Wt(xe);J.isNaN()||Be(J,!0)}V==null||V(X),Qe(function(){var Ie=X;R||(Ie=X.replace(/。/g,".")),Ie!==X&&fe(Ie)})},rt=function(){he.current=!0},Ue=function(){he.current=!1,tt(_.current.value)},Ve=function(X){tt(X.target.value)},gt=function(X){var xe;if(!(X&&we||!X&&Ae)){oe.current=!1;var J=Wt(be.current?wo(u):u);X||(J=J.negate());var Ie=(Z||Wt(0)).add(J.toString()),le=Be(Ie,!1);Y==null||Y(So(E,le),{offset:be.current?wo(u):u,type:X?"up":"down"}),(xe=_.current)===null||xe===void 0||xe.focus()}},Ke=function(X){var xe=Wt(C(pe)),J;xe.isNaN()?J=Be(Z,X):J=Be(xe,X),d!==void 0?ae(Z,!1):J.isNaN()||ae(J,!1)},at=function(){oe.current=!0},et=function(X){var xe=X.key,J=X.shiftKey;oe.current=!0,be.current=J,xe==="Enter"&&(he.current||(oe.current=!1),Ke(!1),O==null||O(X)),h!==!1&&!he.current&&["Up","ArrowUp","Down","ArrowDown"].includes(xe)&&(gt(xe==="Up"||xe==="ArrowUp"),X.preventDefault())},Mt=function(){oe.current=!1,be.current=!1};a.useEffect(function(){if(w&&N){var fe=function(J){gt(J.deltaY<0),J.preventDefault()},X=_.current;if(X)return X.addEventListener("wheel",fe,{passive:!1}),function(){return X.removeEventListener("wheel",fe)}}});var dt=function(){ue&&Ke(!1),K(!1),oe.current=!1};return kr(function(){Z.isInvalidate()||ae(Z,!1)},[$,S]),kr(function(){var fe=Wt(d);Se(fe);var X=Wt(C(pe));(!fe.equals(X)||!oe.current||S)&&ae(fe,oe.current)},[d]),kr(function(){S&&je()},[pe]),a.createElement("div",{ref:ce,className:He(r,n,L(L(L(L(L({},"".concat(r,"-focused"),N),"".concat(r,"-disabled"),v),"".concat(r,"-readonly"),g),"".concat(r,"-not-a-number"),Z.isNaN()),"".concat(r,"-out-of-range"),!Z.isInvalidate()&&!Re(Z))),style:o,onFocus:function(){K(!0)},onBlur:dt,onKeyDown:et,onKeyUp:Mt,onCompositionStart:rt,onCompositionEnd:Ue,onBeforeInput:at},y&&a.createElement(ds,{prefixCls:r,upNode:f,downNode:p,upDisabled:we,downDisabled:Ae,onStep:gt}),a.createElement("div",{className:"".concat(ie,"-wrap")},a.createElement("input",Je({autoComplete:"off",role:"spinbutton","aria-valuemin":i,"aria-valuemax":l,"aria-valuenow":Z.isInvalidate()?null:Z.toString(),step:u},H,{ref:on(_,t),className:ie,value:pe,onChange:Ve,disabled:v,readOnly:g}))))}),hs=a.forwardRef(function(e,t){var r=e.disabled,n=e.style,o=e.prefixCls,i=o===void 0?"rc-input-number":o,l=e.value,s=e.prefix,u=e.suffix,c=e.addonBefore,d=e.addonAfter,v=e.className,g=e.classNames,f=wt(e,ms),p=a.useRef(null),h=a.useRef(null),m=a.useRef(null),w=function(y){m.current&&Hl(m.current,y)};return a.useImperativeHandle(t,function(){return Ql(m.current,{focus:w,nativeElement:p.current.nativeElement||h.current})}),a.createElement(Kl,{className:v,triggerFocus:w,prefixCls:i,value:l,disabled:r,style:n,prefix:s,suffix:u,addonAfter:d,addonBefore:c,classNames:g,components:{affixWrapper:"div",groupWrapper:"div",wrapper:"div",groupAddon:"div"},ref:p},a.createElement(gs,Je({prefixCls:i,disabled:r,ref:m,domRef:h,className:g==null?void 0:g.input},f)))});const af=D.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: max-content;

  .quen-ui--input-number__required {
    color: ${({theme:e})=>e.colors.red[9]};
  }

  .quen-ui--input-number__error-message {
    color: ${({theme:e})=>e.colors.red[9]};
  }
`,lf=D.div.withConfig({shouldForwardProp:e=>!["size","isFocus","error","isDisabled"].includes(e)})`
  height: ${({size:e,theme:t})=>t.control.height[e]};
  border-radius: ${({theme:e})=>e.control.radius};
  border: ${({theme:e})=>`${e.control.borderWidth} solid ${e.colors.gray[3]}`};
  border-bottom: ${({theme:e})=>`${e.control.borderWidth} solid ${e.colors.gray[5]}`};
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  gap: 0.5rem;

  .rc-input-number-handler {
    height: ${({size:e,theme:t})=>Yt(`${t.control.height[e]} / 2`)};
  }

  input {
    background: transparent;
    font-size: ${({theme:e,size:t})=>e.fonts.text.size[t]};
    line-height: ${({theme:e,size:t})=>e.fonts.text.lineHeight[t]};
  }

  &:hover {
    ${({theme:e,isFocus:t})=>!t&&x`
        border-bottom: ${e.control.borderWidth} solid
          ${e.colors.gray[8]};
      `}
  }

  ${({isFocus:e})=>e&&x`
      border-bottom: ${({theme:t})=>`${Yt(`${t.control.borderWidth} * 2`)} solid ${t.primaryColor}`};
    `};

  ${({error:e,theme:t})=>e&&x`
      border-bottom: ${Yt(`${t.control.borderWidth} * 2`)} solid
        ${t.colors.red[8]};
    `};

  ${({isDisabled:e,theme:t})=>e&&x`
      background: ${t.colors.gray[2]};
      border-bottom: ${t.control.borderWidth} solid
        ${t.colors.gray[3]}!important;
      input {
        background: ${t.colors.gray[2]};
        pointer-events: none;
      }
    `};
`,sf=D(hs).withConfig({shouldForwardProp:e=>!["widthRight"].includes(e)})`
  &,
  .rc-input-number {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .rc-input-number-wrapper.rc-input-number-group:has(
      .rc-input-number-group-addon
    ) {
    display: flex;

    .rc-input-number-handler-wrap {
      position: relative;
      right: ${({widthRight:e})=>`-${e-1}px`};
    }

    .rc-input-number-group-addon {
      position: relative;
      right: 30px;
      display: flex;
      align-items: center;
    }
  }

  .rc-input-number-input {
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  .rc-input-number-handler-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: ${({theme:e})=>`${e.control.borderWidth} solid ${e.colors.gray[3]}`};
    height: 100%;
    justify-content: center;
  }

  .rc-input-number-handler {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    padding-left: 2px;
    padding-right: 2px;
  }

  .rc-input-number-handler-up {
    border-bottom: ${({theme:e})=>`${e.control.borderWidth} solid ${e.colors.gray[3]}`};
  }
`;var sn=function(t){var r=t.className,n=t.customizeIcon,o=t.customizeIconProps,i=t.children,l=t.onMouseDown,s=t.onClick,u=typeof n=="function"?n(o):n;return a.createElement("span",{className:r,onMouseDown:function(d){d.preventDefault(),l==null||l(d)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:s,"aria-hidden":!0},u!==void 0?u:a.createElement("span",{className:He(r.split(/\s+/).map(function(c){return"".concat(c,"-icon")}))},i))},ps=function(t,r,n,o,i){var l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:!1,s=arguments.length>6?arguments[6]:void 0,u=arguments.length>7?arguments[7]:void 0,c=bt.useMemo(function(){if(st(o)==="object")return o.clearIcon;if(i)return i},[o,i]),d=bt.useMemo(function(){return!!(!l&&o&&(n.length||s)&&!(u==="combobox"&&s===""))},[o,l,n.length,s,u]);return{allowClear:d,clearIcon:bt.createElement(sn,{className:"".concat(t,"-clear"),onMouseDown:r,customizeIcon:c},"×")}},$a=a.createContext(null);function bs(){return a.useContext($a)}function ys(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,t=a.useState(!1),r=M(t,2),n=r[0],o=r[1],i=a.useRef(null),l=function(){window.clearTimeout(i.current)};a.useEffect(function(){return l},[]);var s=function(c,d){l(),i.current=window.setTimeout(function(){o(c),d&&d()},e)};return[n,s,l]}function Ca(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,t=a.useRef(null),r=a.useRef(null);a.useEffect(function(){return function(){window.clearTimeout(r.current)}},[]);function n(o){(o||t.current===null)&&(t.current=o),window.clearTimeout(r.current),r.current=window.setTimeout(function(){t.current=null},e)}return[function(){return t.current},n]}function ws(e,t,r,n){var o=a.useRef(null);o.current={open:t,triggerOpen:r,customizedTrigger:n},a.useEffect(function(){function i(l){var s;if(!((s=o.current)!==null&&s!==void 0&&s.customizedTrigger)){var u=l.target;u.shadowRoot&&l.composed&&(u=l.composedPath()[0]||u),o.current.open&&e().filter(function(c){return c}).every(function(c){return!c.contains(u)&&c!==u})&&o.current.triggerOpen(!1)}}return window.addEventListener("mousedown",i),function(){return window.removeEventListener("mousedown",i)}},[])}var ke={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,CAPS_LOCK:20,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,N:78,P:80,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,SEMICOLON:186,EQUALS:187,WIN_KEY:224};function Ss(e){return e&&![ke.ESC,ke.SHIFT,ke.BACKSPACE,ke.TAB,ke.WIN_KEY,ke.ALT,ke.META,ke.WIN_KEY_RIGHT,ke.CTRL,ke.SEMICOLON,ke.EQUALS,ke.CAPS_LOCK,ke.CONTEXT_MENU,ke.F1,ke.F2,ke.F3,ke.F4,ke.F5,ke.F6,ke.F7,ke.F8,ke.F9,ke.F10,ke.F11,ke.F12].includes(e)}var xs=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,Es=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,$s="".concat(xs," ").concat(Es).split(/[\s\n]+/),Cs="aria-",Rs="data-";function Eo(e,t){return e.indexOf(t)===0}function Xr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;t===!1?r={aria:!0,data:!0,attr:!0}:t===!0?r={aria:!0}:r=I({},t);var n={};return Object.keys(e).forEach(function(o){(r.aria&&(o==="role"||Eo(o,Cs))||r.data&&Eo(o,Rs)||r.attr&&$s.includes(o))&&(n[o]=e[o])}),n}function Jr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return bt.Children.forEach(e,function(n){n==null&&!t.keepEmpty||(Array.isArray(n)?r=r.concat(Jr(n)):ba(n)&&n.props?r=r.concat(Jr(n.props.children,t)):r.push(n))}),r}function Pr(e){return e instanceof HTMLElement||e instanceof SVGElement}function Is(e){return e&&st(e)==="object"&&Pr(e.nativeElement)?e.nativeElement:Pr(e)?e:null}function Qr(e){var t=Is(e);if(t)return t;if(e instanceof bt.Component){var r;return(r=uo.findDOMNode)===null||r===void 0?void 0:r.call(uo,e)}return null}var kn=a.createContext(null);function Ms(e){var t=e.children,r=e.onBatchResize,n=a.useRef(0),o=a.useRef([]),i=a.useContext(kn),l=a.useCallback(function(s,u,c){n.current+=1;var d=n.current;o.current.push({size:s,element:u,data:c}),Promise.resolve().then(function(){d===n.current&&(r==null||r(o.current),o.current=[])}),i==null||i(s,u,c)},[r,i]);return a.createElement(kn.Provider,{value:l},t)}var Ra=(function(){if(typeof Map<"u")return Map;function e(t,r){var n=-1;return t.some(function(o,i){return o[0]===r?(n=i,!0):!1}),n}return(function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(r){var n=e(this.__entries__,r),o=this.__entries__[n];return o&&o[1]},t.prototype.set=function(r,n){var o=e(this.__entries__,r);~o?this.__entries__[o][1]=n:this.__entries__.push([r,n])},t.prototype.delete=function(r){var n=this.__entries__,o=e(n,r);~o&&n.splice(o,1)},t.prototype.has=function(r){return!!~e(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,n){n===void 0&&(n=null);for(var o=0,i=this.__entries__;o<i.length;o++){var l=i[o];r.call(n,l[1],l[0])}},t})()})(),_n=typeof window<"u"&&typeof document<"u"&&window.document===document,Zr=(function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()})(),Ns=(function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Zr):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}})(),ks=2;function _s(e,t){var r=!1,n=!1,o=0;function i(){r&&(r=!1,e()),n&&s()}function l(){Ns(i)}function s(){var u=Date.now();if(r){if(u-o<ks)return;n=!0}else r=!0,n=!1,setTimeout(l,t);o=u}return s}var Ds=20,Ps=["top","right","bottom","left","width","height","size","weight"],Ts=typeof MutationObserver<"u",Ls=(function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=_s(this.refresh.bind(this),Ds)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var r=this.observers_,n=r.indexOf(t);~n&&r.splice(n,1),!r.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return t.forEach(function(r){return r.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!_n||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Ts?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!_n||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var r=t.propertyName,n=r===void 0?"":r,o=Ps.some(function(i){return!!~n.indexOf(i)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e})(),Ia=(function(e,t){for(var r=0,n=Object.keys(t);r<n.length;r++){var o=n[r];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e}),wr=(function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Zr}),Ma=un(0,0,0,0);function en(e){return parseFloat(e)||0}function $o(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(n,o){var i=e["border-"+o+"-width"];return n+en(i)},0)}function As(e){for(var t=["top","right","bottom","left"],r={},n=0,o=t;n<o.length;n++){var i=o[n],l=e["padding-"+i];r[i]=en(l)}return r}function Os(e){var t=e.getBBox();return un(0,0,t.width,t.height)}function Vs(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return Ma;var n=wr(e).getComputedStyle(e),o=As(n),i=o.left+o.right,l=o.top+o.bottom,s=en(n.width),u=en(n.height);if(n.boxSizing==="border-box"&&(Math.round(s+i)!==t&&(s-=$o(n,"left","right")+i),Math.round(u+l)!==r&&(u-=$o(n,"top","bottom")+l)),!zs(e)){var c=Math.round(s+i)-t,d=Math.round(u+l)-r;Math.abs(c)!==1&&(s-=c),Math.abs(d)!==1&&(u-=d)}return un(o.left,o.top,s,u)}var Fs=(function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof wr(e).SVGGraphicsElement}:function(e){return e instanceof wr(e).SVGElement&&typeof e.getBBox=="function"}})();function zs(e){return e===wr(e).document.documentElement}function js(e){return _n?Fs(e)?Os(e):Vs(e):Ma}function Ws(e){var t=e.x,r=e.y,n=e.width,o=e.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(i.prototype);return Ia(l,{x:t,y:r,width:n,height:o,top:r,right:t+n,bottom:o+r,left:t}),l}function un(e,t,r,n){return{x:e,y:t,width:r,height:n}}var Bs=(function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=un(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=js(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e})(),Hs=(function(){function e(t,r){var n=Ws(r);Ia(this,{target:t,contentRect:n})}return e})(),Ks=(function(){function e(t,r,n){if(this.activeObservations_=[],this.observations_=new Ra,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=r,this.callbackCtx_=n}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof wr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)||(r.set(t,new Bs(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof wr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)&&(r.delete(t),r.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&t.activeObservations_.push(r)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,r=this.activeObservations_.map(function(n){return new Hs(n.target,n.broadcastRect())});this.callback_.call(t,r,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e})(),Na=typeof WeakMap<"u"?new WeakMap:new Ra,ka=(function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=Ls.getInstance(),n=new Ks(t,r,this);Na.set(this,n)}return e})();["observe","unobserve","disconnect"].forEach(function(e){ka.prototype[e]=function(){var t;return(t=Na.get(this))[e].apply(t,arguments)}});var Us=(function(){return typeof Zr.ResizeObserver<"u"?Zr.ResizeObserver:ka})(),ur=new Map;function Gs(e){e.forEach(function(t){var r,n=t.target;(r=ur.get(n))===null||r===void 0||r.forEach(function(o){return o(n)})})}var _a=new Us(Gs);function qs(e,t){ur.has(e)||(ur.set(e,new Set),_a.observe(e)),ur.get(e).add(t)}function Qs(e,t){ur.has(e)&&(ur.get(e).delete(t),ur.get(e).size||(_a.unobserve(e),ur.delete(e)))}function Zn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fi(e,t)}function Ys(e,t){if(t&&(st(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $n(e)}function eo(e){var t=vi();return function(){var r,n=co(e);if(t){var o=co(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Ys(this,r)}}var Xs=(function(e){Zn(r,e);var t=eo(r);function r(){return Sr(this,r),t.apply(this,arguments)}return xr(r,[{key:"render",value:function(){return this.props.children}}]),r})(a.Component);function Js(e,t){var r=e.children,n=e.disabled,o=a.useRef(null),i=a.useRef(null),l=a.useContext(kn),s=typeof r=="function",u=s?r(o):r,c=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),d=!s&&a.isValidElement(u)&&ln(u),v=d?Yn(u):null,g=an(v,o),f=function(){var w;return Qr(o.current)||(o.current&&st(o.current)==="object"?Qr((w=o.current)===null||w===void 0?void 0:w.nativeElement):null)||Qr(i.current)};a.useImperativeHandle(t,function(){return f()});var p=a.useRef(e);p.current=e;var h=a.useCallback(function(m){var w=p.current,b=w.onResize,y=w.data,E=m.getBoundingClientRect(),R=E.width,S=E.height,$=m.offsetWidth,P=m.offsetHeight,B=Math.floor(R),V=Math.floor(S);if(c.current.width!==B||c.current.height!==V||c.current.offsetWidth!==$||c.current.offsetHeight!==P){var O={width:B,height:V,offsetWidth:$,offsetHeight:P};c.current=O;var Y=$===Math.round(R)?R:$,j=P===Math.round(S)?S:P,ue=I(I({},O),{},{offsetWidth:Y,offsetHeight:j});l==null||l(ue,m,y),b&&Promise.resolve().then(function(){b(ue,m)})}},[]);return a.useEffect(function(){var m=f();return m&&!n&&qs(m,h),function(){return Qs(m,h)}},[o.current,n]),a.createElement(Xs,{ref:i},d?a.cloneElement(u,{ref:g}):u)}var Zs=a.forwardRef(Js),eu="rc-observer-key";function tu(e,t){var r=e.children,n=typeof r=="function"?[r]:Jr(r);return n.map(function(o,i){var l=(o==null?void 0:o.key)||"".concat(eu,"-").concat(i);return a.createElement(Zs,Je({},e,{key:l,ref:i===0?t:void 0}),o)})}var mr=a.forwardRef(tu);mr.Collection=Ms;var ru=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],hr=void 0;function nu(e,t){var r=e.prefixCls,n=e.invalidate,o=e.item,i=e.renderItem,l=e.responsive,s=e.responsiveDisabled,u=e.registerSize,c=e.itemKey,d=e.className,v=e.style,g=e.children,f=e.display,p=e.order,h=e.component,m=h===void 0?"div":h,w=wt(e,ru),b=l&&!f;function y(P){u(c,P)}a.useEffect(function(){return function(){y(null)}},[]);var E=i&&o!==hr?i(o,{index:p}):g,R;n||(R={opacity:b?0:1,height:b?0:hr,overflowY:b?"hidden":hr,order:l?p:hr,pointerEvents:b?"none":hr,position:b?"absolute":hr});var S={};b&&(S["aria-hidden"]=!0);var $=a.createElement(m,Je({className:He(!n&&r,d),style:I(I({},R),v)},S,w,{ref:t}),E);return l&&($=a.createElement(mr,{onResize:function(B){var V=B.offsetWidth;y(V)},disabled:s},$)),$}var _r=a.forwardRef(nu);_r.displayName="Item";function ou(e){if(typeof MessageChannel>"u")yt(e);else{var t=new MessageChannel;t.port1.onmessage=function(){return e()},t.port2.postMessage(void 0)}}function au(){var e=a.useRef(null),t=function(n){e.current||(e.current=[],ou(function(){Yr.unstable_batchedUpdates(function(){e.current.forEach(function(o){o()}),e.current=null})})),e.current.push(n)};return t}function Rr(e,t){var r=a.useState(t),n=M(r,2),o=n[0],i=n[1],l=It(function(s){e(function(){i(s)})});return[o,l]}var tn=bt.createContext(null),iu=["component"],lu=["className"],su=["className"],uu=function(t,r){var n=a.useContext(tn);if(!n){var o=t.component,i=o===void 0?"div":o,l=wt(t,iu);return a.createElement(i,Je({},l,{ref:r}))}var s=n.className,u=wt(n,lu),c=t.className,d=wt(t,su);return a.createElement(tn.Provider,{value:null},a.createElement(_r,Je({ref:r,className:He(s,c)},u,d)))},Da=a.forwardRef(uu);Da.displayName="RawItem";var cu=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],Pa="responsive",Ta="invalidate";function du(e){return"+ ".concat(e.length," ...")}function fu(e,t){var r=e.prefixCls,n=r===void 0?"rc-overflow":r,o=e.data,i=o===void 0?[]:o,l=e.renderItem,s=e.renderRawItem,u=e.itemKey,c=e.itemWidth,d=c===void 0?10:c,v=e.ssr,g=e.style,f=e.className,p=e.maxCount,h=e.renderRest,m=e.renderRawRest,w=e.suffix,b=e.component,y=b===void 0?"div":b,E=e.itemComponent,R=e.onVisibleChange,S=wt(e,cu),$=v==="full",P=au(),B=Rr(P,null),V=M(B,2),O=V[0],Y=V[1],j=O||0,ue=Rr(P,new Map),ce=M(ue,2),H=ce[0],ie=ce[1],_=Rr(P,0),me=M(_,2),F=me[0],N=me[1],K=Rr(P,0),oe=M(K,2),he=oe[0],be=oe[1],_e=Rr(P,0),De=M(_e,2),Z=De[0],Se=De[1],Le=a.useState(null),A=M(Le,2),C=A[0],T=A[1],ee=a.useState(null),k=M(ee,2),z=k[0],pe=k[1],ye=a.useMemo(function(){return z===null&&$?Number.MAX_SAFE_INTEGER:z||0},[z,O]),ae=a.useState(!1),Ce=M(ae,2),ge=Ce[0],we=Ce[1],Ae="".concat(n,"-item"),te=Math.max(F,he),qe=p===Pa,Pe=i.length&&qe,je=p===Ta,We=Pe||typeof p=="number"&&i.length>p,Re=a.useMemo(function(){var le=i;return Pe?O===null&&$?le=i:le=i.slice(0,Math.min(i.length,j/d)):typeof p=="number"&&(le=i.slice(0,p)),le},[i,d,O,p,Pe]),Be=a.useMemo(function(){return Pe?i.slice(ye+1):i.slice(Re.length)},[i,Re,Pe,ye]),Qe=a.useCallback(function(le,ve){var G;return typeof u=="function"?u(le):(G=u&&(le==null?void 0:le[u]))!==null&&G!==void 0?G:ve},[u]),tt=a.useCallback(l||function(le){return le},[l]);function rt(le,ve,G){z===le&&(ve===void 0||ve===C)||(pe(le),G||(we(le<i.length-1),R==null||R(le)),ve!==void 0&&T(ve))}function Ue(le,ve){Y(ve.clientWidth)}function Ve(le,ve){ie(function(G){var Me=new Map(G);return ve===null?Me.delete(le):Me.set(le,ve),Me})}function gt(le,ve){be(ve),N(he)}function Ke(le,ve){Se(ve)}function at(le){return H.get(Qe(Re[le],le))}lt(function(){if(j&&typeof te=="number"&&Re){var le=Z,ve=Re.length,G=ve-1;if(!ve){rt(0,null);return}for(var Me=0;Me<ve;Me+=1){var Ye=at(Me);if($&&(Ye=Ye||0),Ye===void 0){rt(Me-1,void 0,!0);break}if(le+=Ye,G===0&&le<=j||Me===G-1&&le+at(G)<=j){rt(G,null);break}else if(le+te>j){rt(Me-1,le-Ye-Z+he);break}}w&&at(0)+Z>j&&T(null)}},[j,H,he,Z,Qe,Re]);var et=ge&&!!Be.length,Mt={};C!==null&&Pe&&(Mt={position:"absolute",left:C,top:0});var dt={prefixCls:Ae,responsive:Pe,component:E,invalidate:je},fe=s?function(le,ve){var G=Qe(le,ve);return a.createElement(tn.Provider,{key:G,value:I(I({},dt),{},{order:ve,item:le,itemKey:G,registerSize:Ve,display:ve<=ye})},s(le,ve))}:function(le,ve){var G=Qe(le,ve);return a.createElement(_r,Je({},dt,{order:ve,key:G,item:le,renderItem:tt,itemKey:G,registerSize:Ve,display:ve<=ye}))},X={order:et?ye:Number.MAX_SAFE_INTEGER,className:"".concat(Ae,"-rest"),registerSize:gt,display:et},xe=h||du,J=m?a.createElement(tn.Provider,{value:I(I({},dt),X)},m(Be)):a.createElement(_r,Je({},dt,X),typeof xe=="function"?xe(Be):xe),Ie=a.createElement(y,Je({className:He(!je&&n,f),style:g,ref:t},S),Re.map(fe),We?J:null,w&&a.createElement(_r,Je({},dt,{responsive:qe,responsiveDisabled:!Pe,order:ye,className:"".concat(Ae,"-suffix"),registerSize:Ke,display:!0,style:Mt}),w));return qe?a.createElement(mr,{onResize:Ue,disabled:!Pe},Ie):Ie}var Or=a.forwardRef(fu);Or.displayName="Overflow";Or.Item=Da;Or.RESPONSIVE=Pa;Or.INVALIDATE=Ta;function vu(e,t,r){var n=I(I({},e),t);return Object.keys(t).forEach(function(o){var i=t[o];typeof i=="function"&&(n[o]=function(){for(var l,s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return i.apply(void 0,u),(l=e[o])===null||l===void 0?void 0:l.call.apply(l,[e].concat(u))})}),n}var mu=["prefixCls","id","inputElement","autoFocus","autoComplete","editable","activeDescendantId","value","open","attrs"],gu=function(t,r){var n=t.prefixCls,o=t.id,i=t.inputElement,l=t.autoFocus,s=t.autoComplete,u=t.editable,c=t.activeDescendantId,d=t.value,v=t.open,g=t.attrs,f=wt(t,mu),p=i||a.createElement("input",null),h=p,m=h.ref,w=h.props;return"maxLength"in p.props,p=a.cloneElement(p,I(I(I({type:"search"},vu(f,w)),{},{id:o,ref:on(r,m),autoComplete:s||"off",autoFocus:l,className:He("".concat(n,"-selection-search-input"),w==null?void 0:w.className),role:"combobox","aria-expanded":v||!1,"aria-haspopup":"listbox","aria-owns":"".concat(o,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(o,"_list"),"aria-activedescendant":v?c:void 0},g),{},{value:u?d:"",readOnly:!u,unselectable:u?null:"on",style:I(I({},w.style),{},{opacity:u?null:0})})),p},La=a.forwardRef(gu);function Aa(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}var hu=typeof window<"u"&&window.document&&window.document.documentElement,pu=hu;function bu(e){return e!=null}function yu(e){return!e&&e!==0}function Co(e){return["string","number"].includes(st(e))}function Oa(e){var t=void 0;return e&&(Co(e.title)?t=e.title.toString():Co(e.label)&&(t=e.label.toString())),t}function wu(e,t){pu?a.useLayoutEffect(e,t):a.useEffect(e,t)}function Su(e){var t;return(t=e.key)!==null&&t!==void 0?t:e.value}var Ro=function(t){t.preventDefault(),t.stopPropagation()},xu=function(t){var r=t.id,n=t.prefixCls,o=t.values,i=t.open,l=t.searchValue,s=t.autoClearSearchValue,u=t.inputRef,c=t.placeholder,d=t.disabled,v=t.mode,g=t.showSearch,f=t.autoFocus,p=t.autoComplete,h=t.activeDescendantId,m=t.tabIndex,w=t.removeIcon,b=t.maxTagCount,y=t.maxTagTextLength,E=t.maxTagPlaceholder,R=E===void 0?function(ee){return"+ ".concat(ee.length," ...")}:E,S=t.tagRender,$=t.onToggleOpen,P=t.onRemove,B=t.onInputChange,V=t.onInputPaste,O=t.onInputKeyDown,Y=t.onInputMouseDown,j=t.onInputCompositionStart,ue=t.onInputCompositionEnd,ce=t.onInputBlur,H=a.useRef(null),ie=a.useState(0),_=M(ie,2),me=_[0],F=_[1],N=a.useState(!1),K=M(N,2),oe=K[0],he=K[1],be="".concat(n,"-selection"),_e=i||v==="multiple"&&s===!1||v==="tags"?l:"",De=v==="tags"||v==="multiple"&&s===!1||g&&(i||oe);wu(function(){F(H.current.scrollWidth)},[_e]);var Z=function(k,z,pe,ye,ae){return a.createElement("span",{title:Oa(k),className:He("".concat(be,"-item"),L({},"".concat(be,"-item-disabled"),pe))},a.createElement("span",{className:"".concat(be,"-item-content")},z),ye&&a.createElement(sn,{className:"".concat(be,"-item-remove"),onMouseDown:Ro,onClick:ae,customizeIcon:w},"×"))},Se=function(k,z,pe,ye,ae,Ce){var ge=function(Ae){Ro(Ae),$(!i)};return a.createElement("span",{onMouseDown:ge},S({label:z,value:k,disabled:pe,closable:ye,onClose:ae,isMaxTag:!!Ce}))},Le=function(k){var z=k.disabled,pe=k.label,ye=k.value,ae=!d&&!z,Ce=pe;if(typeof y=="number"&&(typeof pe=="string"||typeof pe=="number")){var ge=String(Ce);ge.length>y&&(Ce="".concat(ge.slice(0,y),"..."))}var we=function(te){te&&te.stopPropagation(),P(k)};return typeof S=="function"?Se(ye,Ce,z,ae,we):Z(k,Ce,z,ae,we)},A=function(k){if(!o.length)return null;var z=typeof R=="function"?R(k):R;return typeof S=="function"?Se(void 0,z,!1,!1,void 0,!0):Z({title:z},z,!1)},C=a.createElement("div",{className:"".concat(be,"-search"),style:{width:me},onFocus:function(){he(!0)},onBlur:function(){he(!1)}},a.createElement(La,{ref:u,open:i,prefixCls:n,id:r,inputElement:null,disabled:d,autoFocus:f,autoComplete:p,editable:De,activeDescendantId:h,value:_e,onKeyDown:O,onMouseDown:Y,onChange:B,onPaste:V,onCompositionStart:j,onCompositionEnd:ue,onBlur:ce,tabIndex:m,attrs:Xr(t,!0)}),a.createElement("span",{ref:H,className:"".concat(be,"-search-mirror"),"aria-hidden":!0},_e," ")),T=a.createElement(Or,{prefixCls:"".concat(be,"-overflow"),data:o,renderItem:Le,renderRest:A,suffix:C,itemKey:Su,maxCount:b});return a.createElement("span",{className:"".concat(be,"-wrap")},T,!o.length&&!_e&&a.createElement("span",{className:"".concat(be,"-placeholder")},c))},Eu=function(t){var r=t.inputElement,n=t.prefixCls,o=t.id,i=t.inputRef,l=t.disabled,s=t.autoFocus,u=t.autoComplete,c=t.activeDescendantId,d=t.mode,v=t.open,g=t.values,f=t.placeholder,p=t.tabIndex,h=t.showSearch,m=t.searchValue,w=t.activeValue,b=t.maxLength,y=t.onInputKeyDown,E=t.onInputMouseDown,R=t.onInputChange,S=t.onInputPaste,$=t.onInputCompositionStart,P=t.onInputCompositionEnd,B=t.onInputBlur,V=t.title,O=a.useState(!1),Y=M(O,2),j=Y[0],ue=Y[1],ce=d==="combobox",H=ce||h,ie=g[0],_=m||"";ce&&w&&!j&&(_=w),a.useEffect(function(){ce&&ue(!1)},[ce,w]);var me=d!=="combobox"&&!v&&!h?!1:!!_,F=V===void 0?Oa(ie):V,N=a.useMemo(function(){return ie?null:a.createElement("span",{className:"".concat(n,"-selection-placeholder"),style:me?{visibility:"hidden"}:void 0},f)},[ie,me,f,n]);return a.createElement("span",{className:"".concat(n,"-selection-wrap")},a.createElement("span",{className:"".concat(n,"-selection-search")},a.createElement(La,{ref:i,prefixCls:n,id:o,open:v,inputElement:r,disabled:l,autoFocus:s,autoComplete:u,editable:H,activeDescendantId:c,value:_,onKeyDown:y,onMouseDown:E,onChange:function(oe){ue(!0),R(oe)},onPaste:S,onCompositionStart:$,onCompositionEnd:P,onBlur:B,tabIndex:p,attrs:Xr(t,!0),maxLength:ce?b:void 0})),!ce&&ie?a.createElement("span",{className:"".concat(n,"-selection-item"),title:F,style:me?{visibility:"hidden"}:void 0},ie.label):null,N)},$u=function(t,r){var n=a.useRef(null),o=a.useRef(!1),i=t.prefixCls,l=t.open,s=t.mode,u=t.showSearch,c=t.tokenWithEnter,d=t.disabled,v=t.prefix,g=t.autoClearSearchValue,f=t.onSearch,p=t.onSearchSubmit,h=t.onToggleOpen,m=t.onInputKeyDown,w=t.onInputBlur,b=t.domRef;a.useImperativeHandle(r,function(){return{focus:function(F){n.current.focus(F)},blur:function(){n.current.blur()}}});var y=Ca(0),E=M(y,2),R=E[0],S=E[1],$=function(F){var N=F.which,K=n.current instanceof HTMLTextAreaElement;!K&&l&&(N===ke.UP||N===ke.DOWN)&&F.preventDefault(),m&&m(F),N===ke.ENTER&&s==="tags"&&!o.current&&!l&&(p==null||p(F.target.value)),!(K&&!l&&~[ke.UP,ke.DOWN,ke.LEFT,ke.RIGHT].indexOf(N))&&Ss(N)&&h(!0)},P=function(){S(!0)},B=a.useRef(null),V=function(F){f(F,!0,o.current)!==!1&&h(!0)},O=function(){o.current=!0},Y=function(F){o.current=!1,s!=="combobox"&&V(F.target.value)},j=function(F){var N=F.target.value;if(c&&B.current&&/[\r\n]/.test(B.current)){var K=B.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");N=N.replace(K,B.current)}B.current=null,V(N)},ue=function(F){var N=F.clipboardData,K=N==null?void 0:N.getData("text");B.current=K||""},ce=function(F){var N=F.target;if(N!==n.current){var K=document.body.style.msTouchAction!==void 0;K?setTimeout(function(){n.current.focus()}):n.current.focus()}},H=function(F){var N=R();F.target!==n.current&&!N&&!(s==="combobox"&&d)&&F.preventDefault(),(s!=="combobox"&&(!u||!N)||!l)&&(l&&g!==!1&&f("",!0,!1),h())},ie={inputRef:n,onInputKeyDown:$,onInputMouseDown:P,onInputChange:j,onInputPaste:ue,onInputCompositionStart:O,onInputCompositionEnd:Y,onInputBlur:w},_=s==="multiple"||s==="tags"?a.createElement(xu,Je({},t,ie)):a.createElement(Eu,Je({},t,ie));return a.createElement("div",{ref:b,className:"".concat(i,"-selector"),onClick:ce,onMouseDown:H},v&&a.createElement("div",{className:"".concat(i,"-prefix")},v),_)},Cu=a.forwardRef($u),Va=a.createContext(null),Io=[];function Ru(e,t){var r=a.useState(function(){if(!Xt())return null;var p=document.createElement("div");return p}),n=M(r,1),o=n[0],i=a.useRef(!1),l=a.useContext(Va),s=a.useState(Io),u=M(s,2),c=u[0],d=u[1],v=l||(i.current?void 0:function(p){d(function(h){var m=[p].concat(Ct(h));return m})});function g(){o.parentElement||document.body.appendChild(o),i.current=!0}function f(){var p;(p=o.parentElement)===null||p===void 0||p.removeChild(o),i.current=!1}return lt(function(){return e?l?l(g):g():f(),f},[e]),lt(function(){c.length&&(c.forEach(function(p){return p()}),d(Io))},[c]),[o,v]}function Iu(e,t){if(!e)return!1;if(e.contains)return e.contains(t);for(var r=t;r;){if(r===e)return!0;r=r.parentNode}return!1}var Mo="data-rc-order",No="data-rc-priority",Mu="rc-util-key",Dn=new Map;function Fa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.mark;return t?t.startsWith("data-")?t:"data-".concat(t):Mu}function cn(e){if(e.attachTo)return e.attachTo;var t=document.querySelector("head");return t||document.body}function Nu(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function to(e){return Array.from((Dn.get(e)||e).children).filter(function(t){return t.tagName==="STYLE"})}function za(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!Xt())return null;var r=t.csp,n=t.prepend,o=t.priority,i=o===void 0?0:o,l=Nu(n),s=l==="prependQueue",u=document.createElement("style");u.setAttribute(Mo,l),s&&i&&u.setAttribute(No,"".concat(i)),r!=null&&r.nonce&&(u.nonce=r==null?void 0:r.nonce),u.innerHTML=e;var c=cn(t),d=c.firstChild;if(n){if(s){var v=(t.styles||to(c)).filter(function(g){if(!["prepend","prependQueue"].includes(g.getAttribute(Mo)))return!1;var f=Number(g.getAttribute(No)||0);return i>=f});if(v.length)return c.insertBefore(u,v[v.length-1].nextSibling),u}c.insertBefore(u,d)}else c.appendChild(u);return u}function ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=cn(t);return(t.styles||to(r)).find(function(n){return n.getAttribute(Fa(t))===e})}function Pn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=ja(e,t);if(r){var n=cn(t);n.removeChild(r)}}function ku(e,t){var r=Dn.get(e);if(!r||!Iu(document,r)){var n=za("",t),o=n.parentNode;Dn.set(e,o),e.removeChild(n)}}function Wa(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=cn(r),o=to(n),i=I(I({},r),{},{styles:o});ku(n,i);var l=ja(t,i);if(l){var s,u;if((s=i.csp)!==null&&s!==void 0&&s.nonce&&l.nonce!==((u=i.csp)===null||u===void 0?void 0:u.nonce)){var c;l.nonce=(c=i.csp)===null||c===void 0?void 0:c.nonce}return l.innerHTML!==e&&(l.innerHTML=e),l}var d=za(e,i);return d.setAttribute(Fa(i),t),d}function _u(e){var t="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),r=document.createElement("div");r.id=t;var n=r.style;n.position="absolute",n.left="0",n.top="0",n.width="100px",n.height="100px",n.overflow="scroll";var o,i;if(e){var l=getComputedStyle(e);n.scrollbarColor=l.scrollbarColor,n.scrollbarWidth=l.scrollbarWidth;var s=getComputedStyle(e,"::-webkit-scrollbar"),u=parseInt(s.width,10),c=parseInt(s.height,10);try{var d=u?"width: ".concat(s.width,";"):"",v=c?"height: ".concat(s.height,";"):"";Wa(`
#`.concat(t,`::-webkit-scrollbar {
`).concat(d,`
`).concat(v,`
}`),t)}catch(p){console.error(p),o=u,i=c}}document.body.appendChild(r);var g=e&&o&&!isNaN(o)?o:r.offsetWidth-r.clientWidth,f=e&&i&&!isNaN(i)?i:r.offsetHeight-r.clientHeight;return document.body.removeChild(r),Pn(t),{width:g,height:f}}function Du(e){return typeof document>"u"||!e||!(e instanceof Element)?{width:0,height:0}:_u(e)}function Pu(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var Tu="rc-util-locker-".concat(Date.now()),ko=0;function Lu(e){var t=!!e,r=a.useState(function(){return ko+=1,"".concat(Tu,"_").concat(ko)}),n=M(r,1),o=n[0];lt(function(){if(t){var i=Du(document.body).width,l=Pu();Wa(`
html body {
  overflow-y: hidden;
  `.concat(l?"width: calc(100% - ".concat(i,"px);"):"",`
}`),o)}else Pn(o);return function(){Pn(o)}},[t,o])}var Au=!1;function Ou(e){return Au}var _o=function(t){return t===!1?!1:!Xt()||!t?null:typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t},Ba=a.forwardRef(function(e,t){var r=e.open,n=e.autoLock,o=e.getContainer;e.debug;var i=e.autoDestroy,l=i===void 0?!0:i,s=e.children,u=a.useState(r),c=M(u,2),d=c[0],v=c[1],g=d||r;a.useEffect(function(){(l||r)&&v(r)},[r,l]);var f=a.useState(function(){return _o(o)}),p=M(f,2),h=p[0],m=p[1];a.useEffect(function(){var O=_o(o);m(O??null)});var w=Ru(g&&!h),b=M(w,2),y=b[0],E=b[1],R=h??y;Lu(n&&r&&Xt()&&(R===y||R===document.body));var S=null;if(s&&ln(s)&&t){var $=s;S=$.ref}var P=an(S,t);if(!g||!Xt()||h===void 0)return null;var B=R===!1||Ou(),V=s;return t&&(V=a.cloneElement(s,{ref:P})),a.createElement(Va.Provider,{value:E},B?V:Yr.createPortal(V,R))});function Ha(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}function Vu(e){return Ha(e)instanceof ShadowRoot}function Tn(e){return Vu(e)?Ha(e):null}function Fu(){var e=I({},mi);return e.useId}var Do=0,Po=Fu();const zu=Po?(function(t){var r=Po();return t||r}):(function(t){var r=a.useState("ssr-id"),n=M(r,2),o=n[0],i=n[1];return a.useEffect(function(){var l=Do;Do+=1,i("rc_unique_".concat(l))},[]),t||o});var ju=a.createContext({}),Wu=(function(e){Zn(r,e);var t=eo(r);function r(){return Sr(this,r),t.apply(this,arguments)}return xr(r,[{key:"render",value:function(){return this.props.children}}]),r})(a.Component);function Bu(e){return va(e)||ha(e)||Un(e)||ma()}function Hu(e){var t=a.useReducer(function(s){return s+1},0),r=M(t,2),n=r[1],o=a.useRef(e),i=It(function(){return o.current}),l=It(function(s){o.current=typeof s=="function"?s(o.current):s,n()});return[i,l]}var sr="none",Br="appear",Hr="enter",Kr="leave",To="none",Bt="prepare",br="start",yr="active",ro="end",Ka="prepared";function Lo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit".concat(e)]="webkit".concat(t),r["Moz".concat(e)]="moz".concat(t),r["ms".concat(e)]="MS".concat(t),r["O".concat(e)]="o".concat(t.toLowerCase()),r}function Ku(e,t){var r={animationend:Lo("Animation","AnimationEnd"),transitionend:Lo("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete r.animationend.animation,"TransitionEvent"in t||delete r.transitionend.transition),r}var Uu=Ku(Xt(),typeof window<"u"?window:{}),Ua={};if(Xt()){var Gu=document.createElement("div");Ua=Gu.style}var Ur={};function Ga(e){if(Ur[e])return Ur[e];var t=Uu[e];if(t)for(var r=Object.keys(t),n=r.length,o=0;o<n;o+=1){var i=r[o];if(Object.prototype.hasOwnProperty.call(t,i)&&i in Ua)return Ur[e]=t[i],Ur[e]}return""}var qa=Ga("animationend"),Qa=Ga("transitionend"),Ya=!!(qa&&Qa),Ao=qa||"animationend",Oo=Qa||"transitionend";function Vo(e,t){if(!e)return null;if(st(e)==="object"){var r=t.replace(/-\w/g,function(n){return n[1].toUpperCase()});return e[r]}return"".concat(e,"-").concat(t)}const qu=(function(e){var t=a.useRef();function r(o){o&&(o.removeEventListener(Oo,e),o.removeEventListener(Ao,e))}function n(o){t.current&&t.current!==o&&r(t.current),o&&o!==t.current&&(o.addEventListener(Oo,e),o.addEventListener(Ao,e),t.current=o)}return a.useEffect(function(){return function(){r(t.current)}},[]),[n,r]});var Xa=Xt()?a.useLayoutEffect:a.useEffect;const Qu=(function(){var e=a.useRef(null);function t(){yt.cancel(e.current)}function r(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;t();var i=yt(function(){o<=1?n({isCanceled:function(){return i!==e.current}}):r(n,o-1)});e.current=i}return a.useEffect(function(){return function(){t()}},[]),[r,t]});var Yu=[Bt,br,yr,ro],Xu=[Bt,Ka],Ja=!1,Ju=!0;function Za(e){return e===yr||e===ro}const Zu=(function(e,t,r){var n=Dr(To),o=M(n,2),i=o[0],l=o[1],s=Qu(),u=M(s,2),c=u[0],d=u[1];function v(){l(Bt,!0)}var g=t?Xu:Yu;return Xa(function(){if(i!==To&&i!==ro){var f=g.indexOf(i),p=g[f+1],h=r(i);h===Ja?l(p,!0):p&&c(function(m){function w(){m.isCanceled()||l(p,!0)}h===!0?w():Promise.resolve(h).then(w)})}},[e,i]),a.useEffect(function(){return function(){d()}},[]),[v,i]});function ec(e,t,r,n){var o=n.motionEnter,i=o===void 0?!0:o,l=n.motionAppear,s=l===void 0?!0:l,u=n.motionLeave,c=u===void 0?!0:u,d=n.motionDeadline,v=n.motionLeaveImmediately,g=n.onAppearPrepare,f=n.onEnterPrepare,p=n.onLeavePrepare,h=n.onAppearStart,m=n.onEnterStart,w=n.onLeaveStart,b=n.onAppearActive,y=n.onEnterActive,E=n.onLeaveActive,R=n.onAppearEnd,S=n.onEnterEnd,$=n.onLeaveEnd,P=n.onVisibleChanged,B=Dr(),V=M(B,2),O=V[0],Y=V[1],j=Hu(sr),ue=M(j,2),ce=ue[0],H=ue[1],ie=Dr(null),_=M(ie,2),me=_[0],F=_[1],N=ce(),K=a.useRef(!1),oe=a.useRef(null);function he(){return r()}var be=a.useRef(!1);function _e(){H(sr),F(null,!0)}var De=It(function(ge){var we=ce();if(we!==sr){var Ae=he();if(!(ge&&!ge.deadline&&ge.target!==Ae)){var te=be.current,qe;we===Br&&te?qe=R==null?void 0:R(Ae,ge):we===Hr&&te?qe=S==null?void 0:S(Ae,ge):we===Kr&&te&&(qe=$==null?void 0:$(Ae,ge)),te&&qe!==!1&&_e()}}}),Z=qu(De),Se=M(Z,1),Le=Se[0],A=function(we){switch(we){case Br:return L(L(L({},Bt,g),br,h),yr,b);case Hr:return L(L(L({},Bt,f),br,m),yr,y);case Kr:return L(L(L({},Bt,p),br,w),yr,E);default:return{}}},C=a.useMemo(function(){return A(N)},[N]),T=Zu(N,!e,function(ge){if(ge===Bt){var we=C[Bt];return we?we(he()):Ja}if(z in C){var Ae;F(((Ae=C[z])===null||Ae===void 0?void 0:Ae.call(C,he(),null))||null)}return z===yr&&N!==sr&&(Le(he()),d>0&&(clearTimeout(oe.current),oe.current=setTimeout(function(){De({deadline:!0})},d))),z===Ka&&_e(),Ju}),ee=M(T,2),k=ee[0],z=ee[1],pe=Za(z);be.current=pe;var ye=a.useRef(null);Xa(function(){if(!(K.current&&ye.current===t)){Y(t);var ge=K.current;K.current=!0;var we;!ge&&t&&s&&(we=Br),ge&&t&&i&&(we=Hr),(ge&&!t&&c||!ge&&v&&!t&&c)&&(we=Kr);var Ae=A(we);we&&(e||Ae[Bt])?(H(we),k()):H(sr),ye.current=t}},[t]),a.useEffect(function(){(N===Br&&!s||N===Hr&&!i||N===Kr&&!c)&&H(sr)},[s,i,c]),a.useEffect(function(){return function(){K.current=!1,clearTimeout(oe.current)}},[]);var ae=a.useRef(!1);a.useEffect(function(){O&&(ae.current=!0),O!==void 0&&N===sr&&((ae.current||O)&&(P==null||P(O)),ae.current=!0)},[O,N]);var Ce=me;return C[Bt]&&z===br&&(Ce=I({transition:"none"},Ce)),[N,z,Ce,O??t]}function tc(e){var t=e;st(e)==="object"&&(t=e.transitionSupport);function r(o,i){return!!(o.motionName&&t&&i!==!1)}var n=a.forwardRef(function(o,i){var l=o.visible,s=l===void 0?!0:l,u=o.removeOnLeave,c=u===void 0?!0:u,d=o.forceRender,v=o.children,g=o.motionName,f=o.leavedClassName,p=o.eventProps,h=a.useContext(ju),m=h.motion,w=r(o,m),b=a.useRef(),y=a.useRef();function E(){try{return b.current instanceof HTMLElement?b.current:Qr(y.current)}catch{return null}}var R=ec(w,s,E,o),S=M(R,4),$=S[0],P=S[1],B=S[2],V=S[3],O=a.useRef(V);V&&(O.current=!0);var Y=a.useCallback(function(_){b.current=_,Qn(i,_)},[i]),j,ue=I(I({},p),{},{visible:s});if(!v)j=null;else if($===sr)V?j=v(I({},ue),Y):!c&&O.current&&f?j=v(I(I({},ue),{},{className:f}),Y):d||!c&&!f?j=v(I(I({},ue),{},{style:{display:"none"}}),Y):j=null;else{var ce;P===Bt?ce="prepare":Za(P)?ce="active":P===br&&(ce="start");var H=Vo(g,"".concat($,"-").concat(ce));j=v(I(I({},ue),{},{className:He(Vo(g,$),L(L({},H,H&&ce),g,typeof g=="string")),style:B}),Y)}if(a.isValidElement(j)&&ln(j)){var ie=Yn(j);ie||(j=a.cloneElement(j,{ref:Y}))}return a.createElement(Wu,{ref:y},j)});return n.displayName="CSSMotion",n}const no=tc(Ya);var Ln="add",An="keep",On="remove",xn="removed";function rc(e){var t;return e&&st(e)==="object"&&"key"in e?t=e:t={key:e},I(I({},t),{},{key:String(t.key)})}function Vn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(rc)}function nc(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=[],n=0,o=t.length,i=Vn(e),l=Vn(t);i.forEach(function(c){for(var d=!1,v=n;v<o;v+=1){var g=l[v];if(g.key===c.key){n<v&&(r=r.concat(l.slice(n,v).map(function(f){return I(I({},f),{},{status:Ln})})),n=v),r.push(I(I({},g),{},{status:An})),n+=1,d=!0;break}}d||r.push(I(I({},c),{},{status:On}))}),n<o&&(r=r.concat(l.slice(n).map(function(c){return I(I({},c),{},{status:Ln})})));var s={};r.forEach(function(c){var d=c.key;s[d]=(s[d]||0)+1});var u=Object.keys(s).filter(function(c){return s[c]>1});return u.forEach(function(c){r=r.filter(function(d){var v=d.key,g=d.status;return v!==c||g!==On}),r.forEach(function(d){d.key===c&&(d.status=An)})}),r}var oc=["component","children","onVisibleChanged","onAllRemoved"],ac=["status"],ic=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function lc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:no,r=(function(n){Zn(i,n);var o=eo(i);function i(){var l;Sr(this,i);for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return l=o.call.apply(o,[this].concat(u)),L($n(l),"state",{keyEntities:[]}),L($n(l),"removeKey",function(d){l.setState(function(v){var g=v.keyEntities.map(function(f){return f.key!==d?f:I(I({},f),{},{status:xn})});return{keyEntities:g}},function(){var v=l.state.keyEntities,g=v.filter(function(f){var p=f.status;return p!==xn}).length;g===0&&l.props.onAllRemoved&&l.props.onAllRemoved()})}),l}return xr(i,[{key:"render",value:function(){var s=this,u=this.state.keyEntities,c=this.props,d=c.component,v=c.children,g=c.onVisibleChanged;c.onAllRemoved;var f=wt(c,oc),p=d||a.Fragment,h={};return ic.forEach(function(m){h[m]=f[m],delete f[m]}),delete f.keys,a.createElement(p,f,u.map(function(m,w){var b=m.status,y=wt(m,ac),E=b===Ln||b===An;return a.createElement(t,Je({},h,{key:y.key,visible:E,eventProps:y,onVisibleChanged:function(S){g==null||g(S,{key:y.key}),S||s.removeKey(y.key)}}),function(R,S){return v(I(I({},R),{},{index:w}),S)})}))}}],[{key:"getDerivedStateFromProps",value:function(s,u){var c=s.keys,d=u.keyEntities,v=Vn(c),g=nc(d,v);return{keyEntities:g.filter(function(f){var p=d.find(function(h){var m=h.key;return f.key===m});return!(p&&p.status===xn&&f.status===On)})}}}]),i})(a.Component);return L(r,"defaultProps",{component:"div"}),r}lc(Ya);function sc(e){var t=e.prefixCls,r=e.align,n=e.arrow,o=e.arrowPos,i=n||{},l=i.className,s=i.content,u=o.x,c=u===void 0?0:u,d=o.y,v=d===void 0?0:d,g=a.useRef();if(!r||!r.points)return null;var f={position:"absolute"};if(r.autoArrow!==!1){var p=r.points[0],h=r.points[1],m=p[0],w=p[1],b=h[0],y=h[1];m===b||!["t","b"].includes(m)?f.top=v:m==="t"?f.top=0:f.bottom=0,w===y||!["l","r"].includes(w)?f.left=c:w==="l"?f.left=0:f.right=0}return a.createElement("div",{ref:g,className:He("".concat(t,"-arrow"),l),style:f},s)}function uc(e){var t=e.prefixCls,r=e.open,n=e.zIndex,o=e.mask,i=e.motion;return o?a.createElement(no,Je({},i,{motionAppear:!0,visible:r,removeOnLeave:!0}),function(l){var s=l.className;return a.createElement("div",{style:{zIndex:n},className:He("".concat(t,"-mask"),s)})}):null}var cc=a.memo(function(e){var t=e.children;return t},function(e,t){return t.cache}),dc=a.forwardRef(function(e,t){var r=e.popup,n=e.className,o=e.prefixCls,i=e.style,l=e.target,s=e.onVisibleChanged,u=e.open,c=e.keepDom,d=e.fresh,v=e.onClick,g=e.mask,f=e.arrow,p=e.arrowPos,h=e.align,m=e.motion,w=e.maskMotion,b=e.forceRender,y=e.getPopupContainer,E=e.autoDestroy,R=e.portal,S=e.zIndex,$=e.onMouseEnter,P=e.onMouseLeave,B=e.onPointerEnter,V=e.onPointerDownCapture,O=e.ready,Y=e.offsetX,j=e.offsetY,ue=e.offsetR,ce=e.offsetB,H=e.onAlign,ie=e.onPrepare,_=e.stretch,me=e.targetWidth,F=e.targetHeight,N=typeof r=="function"?r():r,K=u||c,oe=(y==null?void 0:y.length)>0,he=a.useState(!y||!oe),be=M(he,2),_e=be[0],De=be[1];if(lt(function(){!_e&&oe&&l&&De(!0)},[_e,oe,l]),!_e)return null;var Z="auto",Se={left:"-1000vw",top:"-1000vh",right:Z,bottom:Z};if(O||!u){var Le,A=h.points,C=h.dynamicInset||((Le=h._experimental)===null||Le===void 0?void 0:Le.dynamicInset),T=C&&A[0][1]==="r",ee=C&&A[0][0]==="b";T?(Se.right=ue,Se.left=Z):(Se.left=Y,Se.right=Z),ee?(Se.bottom=ce,Se.top=Z):(Se.top=j,Se.bottom=Z)}var k={};return _&&(_.includes("height")&&F?k.height=F:_.includes("minHeight")&&F&&(k.minHeight=F),_.includes("width")&&me?k.width=me:_.includes("minWidth")&&me&&(k.minWidth=me)),u||(k.pointerEvents="none"),a.createElement(R,{open:b||K,getContainer:y&&function(){return y(l)},autoDestroy:E},a.createElement(uc,{prefixCls:o,open:u,zIndex:S,mask:g,motion:w}),a.createElement(mr,{onResize:H,disabled:!u},function(z){return a.createElement(no,Je({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:b,leavedClassName:"".concat(o,"-hidden")},m,{onAppearPrepare:ie,onEnterPrepare:ie,visible:u,onVisibleChanged:function(ye){var ae;m==null||(ae=m.onVisibleChanged)===null||ae===void 0||ae.call(m,ye),s(ye)}}),function(pe,ye){var ae=pe.className,Ce=pe.style,ge=He(o,ae,n);return a.createElement("div",{ref:on(z,t,ye),className:ge,style:I(I(I(I({"--arrow-x":"".concat(p.x||0,"px"),"--arrow-y":"".concat(p.y||0,"px")},Se),k),Ce),{},{boxSizing:"border-box",zIndex:S},i),onMouseEnter:$,onMouseLeave:P,onPointerEnter:B,onClick:v,onPointerDownCapture:V},f&&a.createElement(sc,{prefixCls:o,arrow:f,arrowPos:p,align:h}),a.createElement(cc,{cache:!u&&!d},N))})}))}),fc=a.forwardRef(function(e,t){var r=e.children,n=e.getTriggerDOMNode,o=ln(r),i=a.useCallback(function(s){Qn(t,n?n(s):s)},[n]),l=an(i,Yn(r));return o?a.cloneElement(r,{ref:l}):r}),Fo=a.createContext(null);function zo(e){return e?Array.isArray(e)?e:[e]:[]}function vc(e,t,r,n){return a.useMemo(function(){var o=zo(r??t),i=zo(n??t),l=new Set(o),s=new Set(i);return e&&(l.has("hover")&&(l.delete("hover"),l.add("click")),s.has("hover")&&(s.delete("hover"),s.add("click"))),[l,s]},[e,t,r,n])}const mc=(function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox(),r=t.width,n=t.height;if(r||n)return!0}if(e.getBoundingClientRect){var o=e.getBoundingClientRect(),i=o.width,l=o.height;if(i||l)return!0}}return!1});function gc(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return r?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function hc(e,t,r,n){for(var o=r.points,i=Object.keys(e),l=0;l<i.length;l+=1){var s,u=i[l];if(gc((s=e[u])===null||s===void 0?void 0:s.points,o,n))return"".concat(t,"-placement-").concat(u)}return""}function jo(e,t,r,n){return t||(r?{motionName:"".concat(e,"-").concat(r)}:n?{motionName:n}:null)}function Vr(e){return e.ownerDocument.defaultView}function Fn(e){for(var t=[],r=e==null?void 0:e.parentElement,n=["hidden","scroll","clip","auto"];r;){var o=Vr(r).getComputedStyle(r),i=o.overflowX,l=o.overflowY,s=o.overflow;[i,l,s].some(function(u){return n.includes(u)})&&t.push(r),r=r.parentElement}return t}function Tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?t:e}function Ir(e){return Tr(parseFloat(e),0)}function Wo(e,t){var r=I({},e);return(t||[]).forEach(function(n){if(!(n instanceof HTMLBodyElement||n instanceof HTMLHtmlElement)){var o=Vr(n).getComputedStyle(n),i=o.overflow,l=o.overflowClipMargin,s=o.borderTopWidth,u=o.borderBottomWidth,c=o.borderLeftWidth,d=o.borderRightWidth,v=n.getBoundingClientRect(),g=n.offsetHeight,f=n.clientHeight,p=n.offsetWidth,h=n.clientWidth,m=Ir(s),w=Ir(u),b=Ir(c),y=Ir(d),E=Tr(Math.round(v.width/p*1e3)/1e3),R=Tr(Math.round(v.height/g*1e3)/1e3),S=(p-h-b-y)*E,$=(g-f-m-w)*R,P=m*R,B=w*R,V=b*E,O=y*E,Y=0,j=0;if(i==="clip"){var ue=Ir(l);Y=ue*E,j=ue*R}var ce=v.x+V-Y,H=v.y+P-j,ie=ce+v.width+2*Y-V-O-S,_=H+v.height+2*j-P-B-$;r.left=Math.max(r.left,ce),r.top=Math.max(r.top,H),r.right=Math.min(r.right,ie),r.bottom=Math.min(r.bottom,_)}}),r}function Bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r="".concat(t),n=r.match(/^(.*)\%$/);return n?e*(parseFloat(n[1])/100):parseFloat(r)}function Ho(e,t){var r=t||[],n=M(r,2),o=n[0],i=n[1];return[Bo(e.width,o),Bo(e.height,i)]}function Ko(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function pr(e,t){var r=t[0],n=t[1],o,i;return r==="t"?i=e.y:r==="b"?i=e.y+e.height:i=e.y+e.height/2,n==="l"?o=e.x:n==="r"?o=e.x+e.width:o=e.x+e.width/2,{x:o,y:i}}function lr(e,t){var r={t:"b",b:"t",l:"r",r:"l"};return e.map(function(n,o){return o===t?r[n]||"c":n}).join("")}function pc(e,t,r,n,o,i,l){var s=a.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:o[n]||{}}),u=M(s,2),c=u[0],d=u[1],v=a.useRef(0),g=a.useMemo(function(){return t?Fn(t):[]},[t]),f=a.useRef({}),p=function(){f.current={}};e||p();var h=It(function(){if(t&&r&&e){let Ft=function($r,Zt){var or=arguments.length>2&&arguments[2]!==void 0?arguments[2]:qe,Cr=K.x+$r,Fr=K.y+Zt,fn=Cr+ee,vn=Fr+T,mn=Math.max(Cr,or.left),Q=Math.max(Fr,or.top),Ee=Math.min(fn,or.right),nt=Math.min(vn,or.bottom);return Math.max(0,(Ee-mn)*(nt-Q))},gr=function(){St=K.y+Me,Nt=St+T,Ot=K.x+G,ut=Ot+ee};var b,y,E,R,S=t,$=S.ownerDocument,P=Vr(S),B=P.getComputedStyle(S),V=B.position,O=S.style.left,Y=S.style.top,j=S.style.right,ue=S.style.bottom,ce=S.style.overflow,H=I(I({},o[n]),i),ie=$.createElement("div");(b=S.parentElement)===null||b===void 0||b.appendChild(ie),ie.style.left="".concat(S.offsetLeft,"px"),ie.style.top="".concat(S.offsetTop,"px"),ie.style.position=V,ie.style.height="".concat(S.offsetHeight,"px"),ie.style.width="".concat(S.offsetWidth,"px"),S.style.left="0",S.style.top="0",S.style.right="auto",S.style.bottom="auto",S.style.overflow="hidden";var _;if(Array.isArray(r))_={x:r[0],y:r[1],width:0,height:0};else{var me,F,N=r.getBoundingClientRect();N.x=(me=N.x)!==null&&me!==void 0?me:N.left,N.y=(F=N.y)!==null&&F!==void 0?F:N.top,_={x:N.x,y:N.y,width:N.width,height:N.height}}var K=S.getBoundingClientRect(),oe=P.getComputedStyle(S),he=oe.height,be=oe.width;K.x=(y=K.x)!==null&&y!==void 0?y:K.left,K.y=(E=K.y)!==null&&E!==void 0?E:K.top;var _e=$.documentElement,De=_e.clientWidth,Z=_e.clientHeight,Se=_e.scrollWidth,Le=_e.scrollHeight,A=_e.scrollTop,C=_e.scrollLeft,T=K.height,ee=K.width,k=_.height,z=_.width,pe={left:0,top:0,right:De,bottom:Z},ye={left:-C,top:-A,right:Se-C,bottom:Le-A},ae=H.htmlRegion,Ce="visible",ge="visibleFirst";ae!=="scroll"&&ae!==ge&&(ae=Ce);var we=ae===ge,Ae=Wo(ye,g),te=Wo(pe,g),qe=ae===Ce?te:Ae,Pe=we?te:qe;S.style.left="auto",S.style.top="auto",S.style.right="0",S.style.bottom="0";var je=S.getBoundingClientRect();S.style.left=O,S.style.top=Y,S.style.right=j,S.style.bottom=ue,S.style.overflow=ce,(R=S.parentElement)===null||R===void 0||R.removeChild(ie);var We=Tr(Math.round(ee/parseFloat(be)*1e3)/1e3),Re=Tr(Math.round(T/parseFloat(he)*1e3)/1e3);if(We===0||Re===0||Pr(r)&&!mc(r))return;var Be=H.offset,Qe=H.targetOffset,tt=Ho(K,Be),rt=M(tt,2),Ue=rt[0],Ve=rt[1],gt=Ho(_,Qe),Ke=M(gt,2),at=Ke[0],et=Ke[1];_.x-=at,_.y-=et;var Mt=H.points||[],dt=M(Mt,2),fe=dt[0],X=dt[1],xe=Ko(X),J=Ko(fe),Ie=pr(_,xe),le=pr(K,J),ve=I({},H),G=Ie.x-le.x+Ue,Me=Ie.y-le.y+Ve,Ye=Ft(G,Me),q=Ft(G,Me,te),ne=pr(_,["t","l"]),de=pr(K,["t","l"]),se=pr(_,["b","r"]),Te=pr(K,["b","r"]),Fe=H.overflow||{},Et=Fe.adjustX,ft=Fe.adjustY,ht=Fe.shiftX,Ze=Fe.shiftY,$t=function(Zt){return typeof Zt=="boolean"?Zt:Zt>=0},St,Nt,Ot,ut;gr();var xt=$t(ft),W=J[0]===xe[0];if(xt&&J[0]==="t"&&(Nt>Pe.bottom||f.current.bt)){var U=Me;W?U-=T-k:U=ne.y-Te.y-Ve;var Ne=Ft(G,U),ze=Ft(G,U,te);Ne>Ye||Ne===Ye&&(!we||ze>=q)?(f.current.bt=!0,Me=U,Ve=-Ve,ve.points=[lr(J,0),lr(xe,0)]):f.current.bt=!1}if(xt&&J[0]==="b"&&(St<Pe.top||f.current.tb)){var Xe=Me;W?Xe+=T-k:Xe=se.y-de.y-Ve;var zt=Ft(G,Xe),_t=Ft(G,Xe,te);zt>Ye||zt===Ye&&(!we||_t>=q)?(f.current.tb=!0,Me=Xe,Ve=-Ve,ve.points=[lr(J,0),lr(xe,0)]):f.current.tb=!1}var Ht=$t(Et),er=J[1]===xe[1];if(Ht&&J[1]==="l"&&(ut>Pe.right||f.current.rl)){var Dt=G;er?Dt-=ee-z:Dt=ne.x-Te.x-Ue;var Pt=Ft(Dt,Me),tr=Ft(Dt,Me,te);Pt>Ye||Pt===Ye&&(!we||tr>=q)?(f.current.rl=!0,G=Dt,Ue=-Ue,ve.points=[lr(J,1),lr(xe,1)]):f.current.rl=!1}if(Ht&&J[1]==="r"&&(Ot<Pe.left||f.current.lr)){var Kt=G;er?Kt+=ee-z:Kt=se.x-de.x-Ue;var cr=Ft(Kt,Me),Jt=Ft(Kt,Me,te);cr>Ye||cr===Ye&&(!we||Jt>=q)?(f.current.lr=!0,G=Kt,Ue=-Ue,ve.points=[lr(J,1),lr(xe,1)]):f.current.lr=!1}gr();var Tt=ht===!0?0:ht;typeof Tt=="number"&&(Ot<te.left&&(G-=Ot-te.left-Ue,_.x+z<te.left+Tt&&(G+=_.x-te.left+z-Tt)),ut>te.right&&(G-=ut-te.right-Ue,_.x>te.right-Tt&&(G+=_.x-te.right+Tt)));var Ut=Ze===!0?0:Ze;typeof Ut=="number"&&(St<te.top&&(Me-=St-te.top-Ve,_.y+k<te.top+Ut&&(Me+=_.y-te.top+k-Ut)),Nt>te.bottom&&(Me-=Nt-te.bottom-Ve,_.y>te.bottom-Ut&&(Me+=_.y-te.bottom+Ut)));var Gt=K.x+G,qt=Gt+ee,rr=K.y+Me,dr=rr+T,Oe=_.x,$e=Oe+z,vt=_.y,pt=vt+k,ot=Math.max(Gt,Oe),ct=Math.min(qt,$e),Lt=(ot+ct)/2,kt=Lt-Gt,Vt=Math.max(rr,vt),Qt=Math.min(dr,pt),jt=(Vt+Qt)/2,nr=jt-rr;l==null||l(t,ve);var Rt=je.right-K.x-(G+K.width),Er=je.bottom-K.y-(Me+K.height);We===1&&(G=Math.round(G),Rt=Math.round(Rt)),Re===1&&(Me=Math.round(Me),Er=Math.round(Er));var dn={ready:!0,offsetX:G/We,offsetY:Me/Re,offsetR:Rt/We,offsetB:Er/Re,arrowX:kt/We,arrowY:nr/Re,scaleX:We,scaleY:Re,align:ve};d(dn)}}),m=function(){v.current+=1;var y=v.current;Promise.resolve().then(function(){v.current===y&&h()})},w=function(){d(function(y){return I(I({},y),{},{ready:!1})})};return lt(w,[n]),lt(function(){e||w()},[e]),[c.ready,c.offsetX,c.offsetY,c.offsetR,c.offsetB,c.arrowX,c.arrowY,c.scaleX,c.scaleY,c.align,m]}function bc(e,t,r,n,o){lt(function(){if(e&&t&&r){let v=function(){n(),o()};var i=t,l=r,s=Fn(i),u=Fn(l),c=Vr(l),d=new Set([c].concat(Ct(s),Ct(u)));return d.forEach(function(g){g.addEventListener("scroll",v,{passive:!0})}),c.addEventListener("resize",v,{passive:!0}),n(),function(){d.forEach(function(g){g.removeEventListener("scroll",v),c.removeEventListener("resize",v)})}}},[e,t,r])}function yc(e,t,r,n,o,i,l,s){var u=a.useRef(e);u.current=e;var c=a.useRef(!1);a.useEffect(function(){if(t&&n&&(!o||i)){var v=function(){c.current=!1},g=function(m){var w;u.current&&!l(((w=m.composedPath)===null||w===void 0||(w=w.call(m))===null||w===void 0?void 0:w[0])||m.target)&&!c.current&&s(!1)},f=Vr(n);f.addEventListener("pointerdown",v,!0),f.addEventListener("mousedown",g,!0),f.addEventListener("contextmenu",g,!0);var p=Tn(r);return p&&(p.addEventListener("mousedown",g,!0),p.addEventListener("contextmenu",g,!0)),function(){f.removeEventListener("pointerdown",v,!0),f.removeEventListener("mousedown",g,!0),f.removeEventListener("contextmenu",g,!0),p&&(p.removeEventListener("mousedown",g,!0),p.removeEventListener("contextmenu",g,!0))}}},[t,r,n,o,i]);function d(){c.current=!0}return d}var wc=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function Sc(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ba,t=a.forwardRef(function(r,n){var o=r.prefixCls,i=o===void 0?"rc-trigger-popup":o,l=r.children,s=r.action,u=s===void 0?"hover":s,c=r.showAction,d=r.hideAction,v=r.popupVisible,g=r.defaultPopupVisible,f=r.onPopupVisibleChange,p=r.afterPopupVisibleChange,h=r.mouseEnterDelay,m=r.mouseLeaveDelay,w=m===void 0?.1:m,b=r.focusDelay,y=r.blurDelay,E=r.mask,R=r.maskClosable,S=R===void 0?!0:R,$=r.getPopupContainer,P=r.forceRender,B=r.autoDestroy,V=r.destroyPopupOnHide,O=r.popup,Y=r.popupClassName,j=r.popupStyle,ue=r.popupPlacement,ce=r.builtinPlacements,H=ce===void 0?{}:ce,ie=r.popupAlign,_=r.zIndex,me=r.stretch,F=r.getPopupClassNameFromAlign,N=r.fresh,K=r.alignPoint,oe=r.onPopupClick,he=r.onPopupAlign,be=r.arrow,_e=r.popupMotion,De=r.maskMotion,Z=r.popupTransitionName,Se=r.popupAnimation,Le=r.maskTransitionName,A=r.maskAnimation,C=r.className,T=r.getTriggerDOMNode,ee=wt(r,wc),k=B||V||!1,z=a.useState(!1),pe=M(z,2),ye=pe[0],ae=pe[1];lt(function(){ae(Xn())},[]);var Ce=a.useRef({}),ge=a.useContext(Fo),we=a.useMemo(function(){return{registerSubPopup:function(Ee,nt){Ce.current[Ee]=nt,ge==null||ge.registerSubPopup(Ee,nt)}}},[ge]),Ae=zu(),te=a.useState(null),qe=M(te,2),Pe=qe[0],je=qe[1],We=a.useRef(null),Re=It(function(Q){We.current=Q,Pr(Q)&&Pe!==Q&&je(Q),ge==null||ge.registerSubPopup(Ae,Q)}),Be=a.useState(null),Qe=M(Be,2),tt=Qe[0],rt=Qe[1],Ue=a.useRef(null),Ve=It(function(Q){Pr(Q)&&tt!==Q&&(rt(Q),Ue.current=Q)}),gt=a.Children.only(l),Ke=(gt==null?void 0:gt.props)||{},at={},et=It(function(Q){var Ee,nt,mt=tt;return(mt==null?void 0:mt.contains(Q))||((Ee=Tn(mt))===null||Ee===void 0?void 0:Ee.host)===Q||Q===mt||(Pe==null?void 0:Pe.contains(Q))||((nt=Tn(Pe))===null||nt===void 0?void 0:nt.host)===Q||Q===Pe||Object.values(Ce.current).some(function(it){return(it==null?void 0:it.contains(Q))||Q===it})}),Mt=jo(i,_e,Se,Z),dt=jo(i,De,A,Le),fe=a.useState(g||!1),X=M(fe,2),xe=X[0],J=X[1],Ie=v??xe,le=It(function(Q){v===void 0&&J(Q)});lt(function(){J(v||!1)},[v]);var ve=a.useRef(Ie);ve.current=Ie;var G=a.useRef([]);G.current=[];var Me=It(function(Q){var Ee;le(Q),((Ee=G.current[G.current.length-1])!==null&&Ee!==void 0?Ee:Ie)!==Q&&(G.current.push(Q),f==null||f(Q))}),Ye=a.useRef(),q=function(){clearTimeout(Ye.current)},ne=function(Ee){var nt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;q(),nt===0?Me(Ee):Ye.current=setTimeout(function(){Me(Ee)},nt*1e3)};a.useEffect(function(){return q},[]);var de=a.useState(!1),se=M(de,2),Te=se[0],Fe=se[1];lt(function(Q){(!Q||Ie)&&Fe(!0)},[Ie]);var Et=a.useState(null),ft=M(Et,2),ht=ft[0],Ze=ft[1],$t=a.useState(null),St=M($t,2),Nt=St[0],Ot=St[1],ut=function(Ee){Ot([Ee.clientX,Ee.clientY])},xt=pc(Ie,Pe,K&&Nt!==null?Nt:tt,ue,H,ie,he),W=M(xt,11),U=W[0],Ne=W[1],ze=W[2],Xe=W[3],zt=W[4],_t=W[5],Ht=W[6],er=W[7],Dt=W[8],Pt=W[9],tr=W[10],Kt=vc(ye,u,c,d),cr=M(Kt,2),Jt=cr[0],Tt=cr[1],Ut=Jt.has("click"),Gt=Tt.has("click")||Tt.has("contextMenu"),qt=It(function(){Te||tr()}),rr=function(){ve.current&&K&&Gt&&ne(!1)};bc(Ie,tt,Pe,qt,rr),lt(function(){qt()},[Nt,ue]),lt(function(){Ie&&!(H!=null&&H[ue])&&qt()},[JSON.stringify(ie)]);var dr=a.useMemo(function(){var Q=hc(H,i,Pt,K);return He(Q,F==null?void 0:F(Pt))},[Pt,F,H,i,K]);a.useImperativeHandle(n,function(){return{nativeElement:Ue.current,popupElement:We.current,forceAlign:qt}});var Oe=a.useState(0),$e=M(Oe,2),vt=$e[0],pt=$e[1],ot=a.useState(0),ct=M(ot,2),Lt=ct[0],kt=ct[1],Vt=function(){if(me&&tt){var Ee=tt.getBoundingClientRect();pt(Ee.width),kt(Ee.height)}},Qt=function(){Vt(),qt()},jt=function(Ee){Fe(!1),tr(),p==null||p(Ee)},nr=function(){return new Promise(function(Ee){Vt(),Ze(function(){return Ee})})};lt(function(){ht&&(tr(),ht(),Ze(null))},[ht]);function Rt(Q,Ee,nt,mt){at[Q]=function(it){var zr;mt==null||mt(it),ne(Ee,nt);for(var gn=arguments.length,ao=new Array(gn>1?gn-1:0),jr=1;jr<gn;jr++)ao[jr-1]=arguments[jr];(zr=Ke[Q])===null||zr===void 0||zr.call.apply(zr,[Ke,it].concat(ao))}}(Ut||Gt)&&(at.onClick=function(Q){var Ee;ve.current&&Gt?ne(!1):!ve.current&&Ut&&(ut(Q),ne(!0));for(var nt=arguments.length,mt=new Array(nt>1?nt-1:0),it=1;it<nt;it++)mt[it-1]=arguments[it];(Ee=Ke.onClick)===null||Ee===void 0||Ee.call.apply(Ee,[Ke,Q].concat(mt))});var Er=yc(Ie,Gt,tt,Pe,E,S,et,ne),dn=Jt.has("hover"),Ft=Tt.has("hover"),gr,$r;dn&&(Rt("onMouseEnter",!0,h,function(Q){ut(Q)}),Rt("onPointerEnter",!0,h,function(Q){ut(Q)}),gr=function(Ee){(Ie||Te)&&Pe!==null&&Pe!==void 0&&Pe.contains(Ee.target)&&ne(!0,h)},K&&(at.onMouseMove=function(Q){var Ee;(Ee=Ke.onMouseMove)===null||Ee===void 0||Ee.call(Ke,Q)})),Ft&&(Rt("onMouseLeave",!1,w),Rt("onPointerLeave",!1,w),$r=function(){ne(!1,w)}),Jt.has("focus")&&Rt("onFocus",!0,b),Tt.has("focus")&&Rt("onBlur",!1,y),Jt.has("contextMenu")&&(at.onContextMenu=function(Q){var Ee;ve.current&&Tt.has("contextMenu")?ne(!1):(ut(Q),ne(!0)),Q.preventDefault();for(var nt=arguments.length,mt=new Array(nt>1?nt-1:0),it=1;it<nt;it++)mt[it-1]=arguments[it];(Ee=Ke.onContextMenu)===null||Ee===void 0||Ee.call.apply(Ee,[Ke,Q].concat(mt))}),C&&(at.className=He(Ke.className,C));var Zt=a.useRef(!1);Zt.current||(Zt.current=P||Ie||Te);var or=I(I({},Ke),at),Cr={},Fr=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];Fr.forEach(function(Q){ee[Q]&&(Cr[Q]=function(){for(var Ee,nt=arguments.length,mt=new Array(nt),it=0;it<nt;it++)mt[it]=arguments[it];(Ee=or[Q])===null||Ee===void 0||Ee.call.apply(Ee,[or].concat(mt)),ee[Q].apply(ee,mt)})});var fn=a.cloneElement(gt,I(I({},or),Cr)),vn={x:_t,y:Ht},mn=be?I({},be!==!0?be:{}):null;return a.createElement(a.Fragment,null,a.createElement(mr,{disabled:!Ie,ref:Ve,onResize:Qt},a.createElement(fc,{getTriggerDOMNode:T},fn)),Zt.current&&a.createElement(Fo.Provider,{value:we},a.createElement(dc,{portal:e,ref:Re,prefixCls:i,popup:O,className:He(Y,dr),style:j,target:tt,onMouseEnter:gr,onMouseLeave:$r,onPointerEnter:gr,zIndex:_,open:Ie,keepDom:Te,fresh:N,onClick:oe,onPointerDownCapture:Er,mask:E,motion:Mt,maskMotion:dt,onVisibleChanged:jt,onPrepare:nr,forceRender:P,autoDestroy:k,getPopupContainer:$,align:Pt,arrow:mn,arrowPos:vn,ready:U,offsetX:Ne,offsetY:ze,offsetR:Xe,offsetB:zt,onAlign:qt,stretch:me,targetWidth:vt/er,targetHeight:Lt/Dt})))});return t}const xc=Sc(Ba);var Ec=["prefixCls","disabled","visible","children","popupElement","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","builtinPlacements","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],$c=function(t){var r=t===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:r,adjustY:1},htmlRegion:"scroll"},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:r,adjustY:1},htmlRegion:"scroll"},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:r,adjustY:1},htmlRegion:"scroll"},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:r,adjustY:1},htmlRegion:"scroll"}}},Cc=function(t,r){var n=t.prefixCls;t.disabled;var o=t.visible,i=t.children,l=t.popupElement,s=t.animation,u=t.transitionName,c=t.dropdownStyle,d=t.dropdownClassName,v=t.direction,g=v===void 0?"ltr":v,f=t.placement,p=t.builtinPlacements,h=t.dropdownMatchSelectWidth,m=t.dropdownRender,w=t.dropdownAlign,b=t.getPopupContainer,y=t.empty,E=t.getTriggerDOMNode,R=t.onPopupVisibleChange,S=t.onPopupMouseEnter,$=wt(t,Ec),P="".concat(n,"-dropdown"),B=l;m&&(B=m(l));var V=a.useMemo(function(){return p||$c(h)},[p,h]),O=s?"".concat(P,"-").concat(s):u,Y=typeof h=="number",j=a.useMemo(function(){return Y?null:h===!1?"minWidth":"width"},[h,Y]),ue=c;Y&&(ue=I(I({},ue),{},{width:h}));var ce=a.useRef(null);return a.useImperativeHandle(r,function(){return{getPopupElement:function(){var ie;return(ie=ce.current)===null||ie===void 0?void 0:ie.popupElement}}}),a.createElement(xc,Je({},$,{showAction:R?["click"]:[],hideAction:R?["click"]:[],popupPlacement:f||(g==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:V,prefixCls:P,popupTransitionName:O,popup:a.createElement("div",{onMouseEnter:S},B),ref:ce,stretch:j,popupAlign:w,popupVisible:o,getPopupContainer:b,popupClassName:He(d,L({},"".concat(P,"-empty"),y)),popupStyle:ue,getTriggerDOMNode:E,onPopupVisibleChange:R}),i)},Rc=a.forwardRef(Cc);function Uo(e,t){var r=e.key,n;return"value"in e&&(n=e.value),r??(n!==void 0?n:"rc-index-key-".concat(t))}function zn(e){return typeof e<"u"&&!Number.isNaN(e)}function ei(e,t){var r=e||{},n=r.label,o=r.value,i=r.options,l=r.groupLabel,s=n||(t?"children":"label");return{label:s,value:o||"value",options:i||"options",groupLabel:l||s}}function Ic(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.fieldNames,n=t.childrenAsData,o=[],i=ei(r,!1),l=i.label,s=i.value,u=i.options,c=i.groupLabel;function d(v,g){Array.isArray(v)&&v.forEach(function(f){if(g||!(u in f)){var p=f[s];o.push({key:Uo(f,o.length),groupOption:g,data:f,label:f[l],value:p})}else{var h=f[c];h===void 0&&n&&(h=f.label),o.push({key:Uo(f,o.length),group:!0,data:f,label:h}),d(f[u],!0)}})}return d(e,!1),o}function jn(e){var t=I({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return Ar(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),t}}),t}var Mc=function(t,r,n){if(!r||!r.length)return null;var o=!1,i=function s(u,c){var d=Bu(c),v=d[0],g=d.slice(1);if(!v)return[u];var f=u.split(v);return o=o||f.length>1,f.reduce(function(p,h){return[].concat(Ct(p),Ct(s(h,g)))},[]).filter(Boolean)},l=i(t,r);return o?typeof n<"u"?l.slice(0,n):l:null},oo=a.createContext(null);function Nc(e){var t=e.visible,r=e.values;if(!t)return null;var n=50;return a.createElement("span",{"aria-live":"polite",style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0}},"".concat(r.slice(0,n).map(function(o){var i=o.label,l=o.value;return["number","string"].includes(st(i))?i:l}).join(", ")),r.length>n?", ...":null)}var kc=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","prefix","suffixIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","builtinPlacements","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],_c=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"],Wn=function(t){return t==="tags"||t==="multiple"},Dc=a.forwardRef(function(e,t){var r,n=e.id,o=e.prefixCls,i=e.className,l=e.showSearch,s=e.tagRender,u=e.direction,c=e.omitDomProps,d=e.displayValues,v=e.onDisplayValuesChange,g=e.emptyOptions,f=e.notFoundContent,p=f===void 0?"Not Found":f,h=e.onClear,m=e.mode,w=e.disabled,b=e.loading,y=e.getInputElement,E=e.getRawInputElement,R=e.open,S=e.defaultOpen,$=e.onDropdownVisibleChange,P=e.activeValue,B=e.onActiveValueChange,V=e.activeDescendantId,O=e.searchValue,Y=e.autoClearSearchValue,j=e.onSearch,ue=e.onSearchSplit,ce=e.tokenSeparators,H=e.allowClear,ie=e.prefix,_=e.suffixIcon,me=e.clearIcon,F=e.OptionList,N=e.animation,K=e.transitionName,oe=e.dropdownStyle,he=e.dropdownClassName,be=e.dropdownMatchSelectWidth,_e=e.dropdownRender,De=e.dropdownAlign,Z=e.placement,Se=e.builtinPlacements,Le=e.getPopupContainer,A=e.showAction,C=A===void 0?[]:A,T=e.onFocus,ee=e.onBlur,k=e.onKeyUp,z=e.onKeyDown,pe=e.onMouseDown,ye=wt(e,kc),ae=Wn(m),Ce=(l!==void 0?l:ae)||m==="combobox",ge=I({},ye);_c.forEach(function(Oe){delete ge[Oe]}),c==null||c.forEach(function(Oe){delete ge[Oe]});var we=a.useState(!1),Ae=M(we,2),te=Ae[0],qe=Ae[1];a.useEffect(function(){qe(Xn())},[]);var Pe=a.useRef(null),je=a.useRef(null),We=a.useRef(null),Re=a.useRef(null),Be=a.useRef(null),Qe=a.useRef(!1),tt=ys(),rt=M(tt,3),Ue=rt[0],Ve=rt[1],gt=rt[2];a.useImperativeHandle(t,function(){var Oe,$e;return{focus:(Oe=Re.current)===null||Oe===void 0?void 0:Oe.focus,blur:($e=Re.current)===null||$e===void 0?void 0:$e.blur,scrollTo:function(pt){var ot;return(ot=Be.current)===null||ot===void 0?void 0:ot.scrollTo(pt)},nativeElement:Pe.current||je.current}});var Ke=a.useMemo(function(){var Oe;if(m!=="combobox")return O;var $e=(Oe=d[0])===null||Oe===void 0?void 0:Oe.value;return typeof $e=="string"||typeof $e=="number"?String($e):""},[O,m,d]),at=m==="combobox"&&typeof y=="function"&&y()||null,et=typeof E=="function"&&E(),Mt=an(je,et==null||(r=et.props)===null||r===void 0?void 0:r.ref),dt=a.useState(!1),fe=M(dt,2),X=fe[0],xe=fe[1];lt(function(){xe(!0)},[]);var J=Mn(!1,{defaultValue:S,value:R}),Ie=M(J,2),le=Ie[0],ve=Ie[1],G=X?le:!1,Me=!p&&g;(w||Me&&G&&m==="combobox")&&(G=!1);var Ye=Me?!1:G,q=a.useCallback(function(Oe){var $e=Oe!==void 0?Oe:!G;w||(ve($e),G!==$e&&($==null||$($e)))},[w,G,ve,$]),ne=a.useMemo(function(){return(ce||[]).some(function(Oe){return[`
`,`\r
`].includes(Oe)})},[ce]),de=a.useContext(oo)||{},se=de.maxCount,Te=de.rawValues,Fe=function($e,vt,pt){if(!(ae&&zn(se)&&(Te==null?void 0:Te.size)>=se)){var ot=!0,ct=$e;B==null||B(null);var Lt=Mc($e,ce,zn(se)?se-Te.size:void 0),kt=pt?null:Lt;return m!=="combobox"&&kt&&(ct="",ue==null||ue(kt),q(!1),ot=!1),j&&Ke!==ct&&j(ct,{source:vt?"typing":"effect"}),ot}},Et=function($e){!$e||!$e.trim()||j($e,{source:"submit"})};a.useEffect(function(){!G&&!ae&&m!=="combobox"&&Fe("",!1,!1)},[G]),a.useEffect(function(){le&&w&&ve(!1),w&&!Qe.current&&Ve(!1)},[w]);var ft=Ca(),ht=M(ft,2),Ze=ht[0],$t=ht[1],St=a.useRef(!1),Nt=function($e){var vt=Ze(),pt=$e.key,ot=pt==="Enter";if(ot&&(m!=="combobox"&&$e.preventDefault(),G||q(!0)),$t(!!Ke),pt==="Backspace"&&!vt&&ae&&!Ke&&d.length){for(var ct=Ct(d),Lt=null,kt=ct.length-1;kt>=0;kt-=1){var Vt=ct[kt];if(!Vt.disabled){ct.splice(kt,1),Lt=Vt;break}}Lt&&v(ct,{type:"remove",values:[Lt]})}for(var Qt=arguments.length,jt=new Array(Qt>1?Qt-1:0),nr=1;nr<Qt;nr++)jt[nr-1]=arguments[nr];if(G&&(!ot||!St.current)){var Rt;ot&&(St.current=!0),(Rt=Be.current)===null||Rt===void 0||Rt.onKeyDown.apply(Rt,[$e].concat(jt))}z==null||z.apply(void 0,[$e].concat(jt))},Ot=function($e){for(var vt=arguments.length,pt=new Array(vt>1?vt-1:0),ot=1;ot<vt;ot++)pt[ot-1]=arguments[ot];if(G){var ct;(ct=Be.current)===null||ct===void 0||ct.onKeyUp.apply(ct,[$e].concat(pt))}$e.key==="Enter"&&(St.current=!1),k==null||k.apply(void 0,[$e].concat(pt))},ut=function($e){var vt=d.filter(function(pt){return pt!==$e});v(vt,{type:"remove",values:[$e]})},xt=function(){St.current=!1},W=a.useRef(!1),U=function(){Ve(!0),w||(T&&!W.current&&T.apply(void 0,arguments),C.includes("focus")&&q(!0)),W.current=!0},Ne=function(){Qe.current=!0,Ve(!1,function(){W.current=!1,Qe.current=!1,q(!1)}),!w&&(Ke&&(m==="tags"?j(Ke,{source:"submit"}):m==="multiple"&&j("",{source:"blur"})),ee&&ee.apply(void 0,arguments))},ze=[];a.useEffect(function(){return function(){ze.forEach(function(Oe){return clearTimeout(Oe)}),ze.splice(0,ze.length)}},[]);var Xe=function($e){var vt,pt=$e.target,ot=(vt=We.current)===null||vt===void 0?void 0:vt.getPopupElement();if(ot&&ot.contains(pt)){var ct=setTimeout(function(){var Qt=ze.indexOf(ct);if(Qt!==-1&&ze.splice(Qt,1),gt(),!te&&!ot.contains(document.activeElement)){var jt;(jt=Re.current)===null||jt===void 0||jt.focus()}});ze.push(ct)}for(var Lt=arguments.length,kt=new Array(Lt>1?Lt-1:0),Vt=1;Vt<Lt;Vt++)kt[Vt-1]=arguments[Vt];pe==null||pe.apply(void 0,[$e].concat(kt))},zt=a.useState({}),_t=M(zt,2),Ht=_t[1];function er(){Ht({})}var Dt;et&&(Dt=function($e){q($e)}),ws(function(){var Oe;return[Pe.current,(Oe=We.current)===null||Oe===void 0?void 0:Oe.getPopupElement()]},Ye,q,!!et);var Pt=a.useMemo(function(){return I(I({},e),{},{notFoundContent:p,open:G,triggerOpen:Ye,id:n,showSearch:Ce,multiple:ae,toggleOpen:q})},[e,p,Ye,G,n,Ce,ae,q]),tr=!!_||b,Kt;tr&&(Kt=a.createElement(sn,{className:He("".concat(o,"-arrow"),L({},"".concat(o,"-arrow-loading"),b)),customizeIcon:_,customizeIconProps:{loading:b,searchValue:Ke,open:G,focused:Ue,showSearch:Ce}}));var cr=function(){var $e;h==null||h(),($e=Re.current)===null||$e===void 0||$e.focus(),v([],{type:"clear",values:d}),Fe("",!1,!1)},Jt=ps(o,cr,d,H,me,w,Ke,m),Tt=Jt.allowClear,Ut=Jt.clearIcon,Gt=a.createElement(F,{ref:Be}),qt=He(o,i,L(L(L(L(L(L(L(L(L(L({},"".concat(o,"-focused"),Ue),"".concat(o,"-multiple"),ae),"".concat(o,"-single"),!ae),"".concat(o,"-allow-clear"),H),"".concat(o,"-show-arrow"),tr),"".concat(o,"-disabled"),w),"".concat(o,"-loading"),b),"".concat(o,"-open"),G),"".concat(o,"-customize-input"),at),"".concat(o,"-show-search"),Ce)),rr=a.createElement(Rc,{ref:We,disabled:w,prefixCls:o,visible:Ye,popupElement:Gt,animation:N,transitionName:K,dropdownStyle:oe,dropdownClassName:he,direction:u,dropdownMatchSelectWidth:be,dropdownRender:_e,dropdownAlign:De,placement:Z,builtinPlacements:Se,getPopupContainer:Le,empty:g,getTriggerDOMNode:function($e){return je.current||$e},onPopupVisibleChange:Dt,onPopupMouseEnter:er},et?a.cloneElement(et,{ref:Mt}):a.createElement(Cu,Je({},e,{domRef:je,prefixCls:o,inputElement:at,ref:Re,id:n,prefix:ie,showSearch:Ce,autoClearSearchValue:Y,mode:m,activeDescendantId:V,tagRender:s,values:d,open:G,onToggleOpen:q,activeValue:P,searchValue:Ke,onSearch:Fe,onSearchSubmit:Et,onRemove:ut,tokenWithEnter:ne,onInputBlur:xt}))),dr;return et?dr=rr:dr=a.createElement("div",Je({className:qt},ge,{ref:Pe,onMouseDown:Xe,onKeyDown:Nt,onKeyUp:Ot,onFocus:U,onBlur:Ne}),a.createElement(Nc,{visible:Ue&&!G,values:d}),rr,Kt,Tt&&Ut),a.createElement($a.Provider,{value:Pt},dr)}),ti=function(){return null};ti.isSelectOptGroup=!0;var ri=function(){return null};ri.isSelectOption=!0;var ni=a.forwardRef(function(e,t){var r=e.height,n=e.offsetY,o=e.offsetX,i=e.children,l=e.prefixCls,s=e.onInnerResize,u=e.innerProps,c=e.rtl,d=e.extra,v={},g={display:"flex",flexDirection:"column"};return n!==void 0&&(v={height:r,position:"relative",overflow:"hidden"},g=I(I({},g),{},L(L(L(L(L({transform:"translateY(".concat(n,"px)")},c?"marginRight":"marginLeft",-o),"position","absolute"),"left",0),"right",0),"top",0))),a.createElement("div",{style:v},a.createElement(mr,{onResize:function(p){var h=p.offsetHeight;h&&s&&s()}},a.createElement("div",Je({style:g,className:He(L({},"".concat(l,"-holder-inner"),l)),ref:t},u),i,d)))});ni.displayName="Filler";function Pc(e){var t=e.children,r=e.setRef,n=a.useCallback(function(o){r(o)},[]);return a.cloneElement(t,{ref:n})}function Tc(e,t,r,n,o,i,l,s){var u=s.getKey;return e.slice(t,r+1).map(function(c,d){var v=t+d,g=l(c,v,{style:{width:n},offsetX:o}),f=u(c);return a.createElement(Pc,{key:f,setRef:function(h){return i(c,h)}},g)})}function Lc(e,t,r){var n=e.length,o=t.length,i,l;if(n===0&&o===0)return null;n<o?(i=e,l=t):(i=t,l=e);var s={__EMPTY_ITEM__:!0};function u(p){return p!==void 0?r(p):s}for(var c=null,d=Math.abs(n-o)!==1,v=0;v<l.length;v+=1){var g=u(i[v]),f=u(l[v]);if(g!==f){c=v,d=d||g!==u(l[v+1]);break}}return c===null?null:{index:c,multiple:d}}function Ac(e,t,r){var n=a.useState(e),o=M(n,2),i=o[0],l=o[1],s=a.useState(null),u=M(s,2),c=u[0],d=u[1];return a.useEffect(function(){var v=Lc(i||[],e||[],t);(v==null?void 0:v.index)!==void 0&&d(e[v.index]),l(e)},[e]),[c]}var Go=(typeof navigator>"u"?"undefined":st(navigator))==="object"&&/Firefox/i.test(navigator.userAgent);const oi=(function(e,t,r,n){var o=a.useRef(!1),i=a.useRef(null);function l(){clearTimeout(i.current),o.current=!0,i.current=setTimeout(function(){o.current=!1},50)}var s=a.useRef({top:e,bottom:t,left:r,right:n});return s.current.top=e,s.current.bottom=t,s.current.left=r,s.current.right=n,function(u,c){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,v=u?c<0&&s.current.left||c>0&&s.current.right:c<0&&s.current.top||c>0&&s.current.bottom;return d&&v?(clearTimeout(i.current),o.current=!1):(!v||o.current)&&l(),!o.current&&v}});function Oc(e,t,r,n,o,i,l){var s=a.useRef(0),u=a.useRef(null),c=a.useRef(null),d=a.useRef(!1),v=oi(t,r,n,o);function g(b,y){if(yt.cancel(u.current),!v(!1,y)){var E=b;if(!E._virtualHandled)E._virtualHandled=!0;else return;s.current+=y,c.current=y,Go||E.preventDefault(),u.current=yt(function(){var R=d.current?10:1;l(s.current*R,!1),s.current=0})}}function f(b,y){l(y,!0),Go||b.preventDefault()}var p=a.useRef(null),h=a.useRef(null);function m(b){if(e){yt.cancel(h.current),h.current=yt(function(){p.current=null},2);var y=b.deltaX,E=b.deltaY,R=b.shiftKey,S=y,$=E;(p.current==="sx"||!p.current&&R&&E&&!y)&&(S=E,$=0,p.current="sx");var P=Math.abs(S),B=Math.abs($);p.current===null&&(p.current=i&&P>B?"x":"y"),p.current==="y"?g(b,$):f(b,S)}}function w(b){e&&(d.current=b.detail===c.current)}return[m,w]}function Vc(e,t,r,n){var o=a.useMemo(function(){return[new Map,[]]},[e,r.id,n]),i=M(o,2),l=i[0],s=i[1],u=function(d){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:d,g=l.get(d),f=l.get(v);if(g===void 0||f===void 0)for(var p=e.length,h=s.length;h<p;h+=1){var m,w=e[h],b=t(w);l.set(b,h);var y=(m=r.get(b))!==null&&m!==void 0?m:n;if(s[h]=(s[h-1]||0)+y,b===d&&(g=h),b===v&&(f=h),g!==void 0&&f!==void 0)break}return{top:s[g-1]||0,bottom:s[f]}};return u}var Fc=(function(){function e(){Sr(this,e),L(this,"maps",void 0),L(this,"id",0),L(this,"diffRecords",new Map),this.maps=Object.create(null)}return xr(e,[{key:"set",value:function(r,n){this.diffRecords.set(r,this.maps[r]),this.maps[r]=n,this.id+=1}},{key:"get",value:function(r){return this.maps[r]}},{key:"resetRecord",value:function(){this.diffRecords.clear()}},{key:"getRecord",value:function(){return this.diffRecords}}]),e})();function qo(e){var t=parseFloat(e);return isNaN(t)?0:t}function zc(e,t,r){var n=a.useState(0),o=M(n,2),i=o[0],l=o[1],s=a.useRef(new Map),u=a.useRef(new Fc),c=a.useRef(0);function d(){c.current+=1}function v(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;d();var p=function(){var w=!1;s.current.forEach(function(b,y){if(b&&b.offsetParent){var E=b.offsetHeight,R=getComputedStyle(b),S=R.marginTop,$=R.marginBottom,P=qo(S),B=qo($),V=E+P+B;u.current.get(y)!==V&&(u.current.set(y,V),w=!0)}}),w&&l(function(b){return b+1})};if(f)p();else{c.current+=1;var h=c.current;Promise.resolve().then(function(){h===c.current&&p()})}}function g(f,p){var h=e(f);s.current.get(h),p?(s.current.set(h,p),v()):s.current.delete(h)}return a.useEffect(function(){return d},[]),[g,v,u.current,i]}var Qo=14/15;function jc(e,t,r){var n=a.useRef(!1),o=a.useRef(0),i=a.useRef(0),l=a.useRef(null),s=a.useRef(null),u,c=function(f){if(n.current){var p=Math.ceil(f.touches[0].pageX),h=Math.ceil(f.touches[0].pageY),m=o.current-p,w=i.current-h,b=Math.abs(m)>Math.abs(w);b?o.current=p:i.current=h;var y=r(b,b?m:w,!1,f);y&&f.preventDefault(),clearInterval(s.current),y&&(s.current=setInterval(function(){b?m*=Qo:w*=Qo;var E=Math.floor(b?m:w);(!r(b,E,!0)||Math.abs(E)<=.1)&&clearInterval(s.current)},16))}},d=function(){n.current=!1,u()},v=function(f){u(),f.touches.length===1&&!n.current&&(n.current=!0,o.current=Math.ceil(f.touches[0].pageX),i.current=Math.ceil(f.touches[0].pageY),l.current=f.target,l.current.addEventListener("touchmove",c,{passive:!1}),l.current.addEventListener("touchend",d,{passive:!0}))};u=function(){l.current&&(l.current.removeEventListener("touchmove",c),l.current.removeEventListener("touchend",d))},lt(function(){return e&&t.current.addEventListener("touchstart",v,{passive:!0}),function(){var g;(g=t.current)===null||g===void 0||g.removeEventListener("touchstart",v),u(),clearInterval(s.current)}},[e])}function Yo(e){return Math.floor(Math.pow(e,.5))}function Bn(e,t){var r="touches"in e?e.touches[0]:e;return r[t?"pageX":"pageY"]-window[t?"scrollX":"scrollY"]}function Wc(e,t,r){a.useEffect(function(){var n=t.current;if(e&&n){var o=!1,i,l,s=function(){yt.cancel(i)},u=function g(){s(),i=yt(function(){r(l),g()})},c=function(f){if(!(f.target.draggable||f.button!==0)){var p=f;p._virtualHandled||(p._virtualHandled=!0,o=!0)}},d=function(){o=!1,s()},v=function(f){if(o){var p=Bn(f,!1),h=n.getBoundingClientRect(),m=h.top,w=h.bottom;if(p<=m){var b=m-p;l=-Yo(b),u()}else if(p>=w){var y=p-w;l=Yo(y),u()}else s()}};return n.addEventListener("mousedown",c),n.ownerDocument.addEventListener("mouseup",d),n.ownerDocument.addEventListener("mousemove",v),function(){n.removeEventListener("mousedown",c),n.ownerDocument.removeEventListener("mouseup",d),n.ownerDocument.removeEventListener("mousemove",v),s()}}},[e])}var Bc=10;function Hc(e,t,r,n,o,i,l,s){var u=a.useRef(),c=a.useState(null),d=M(c,2),v=d[0],g=d[1];return lt(function(){if(v&&v.times<Bc){if(!e.current){g(function(me){return I({},me)});return}i();var f=v.targetAlign,p=v.originAlign,h=v.index,m=v.offset,w=e.current.clientHeight,b=!1,y=f,E=null;if(w){for(var R=f||p,S=0,$=0,P=0,B=Math.min(t.length-1,h),V=0;V<=B;V+=1){var O=o(t[V]);$=S;var Y=r.get(O);P=$+(Y===void 0?n:Y),S=P}for(var j=R==="top"?m:w-m,ue=B;ue>=0;ue-=1){var ce=o(t[ue]),H=r.get(ce);if(H===void 0){b=!0;break}if(j-=H,j<=0)break}switch(R){case"top":E=$-m;break;case"bottom":E=P-w+m;break;default:{var ie=e.current.scrollTop,_=ie+w;$<ie?y="top":P>_&&(y="bottom")}}E!==null&&l(E),E!==v.lastTop&&(b=!0)}b&&g(I(I({},v),{},{times:v.times+1,targetAlign:y,lastTop:E}))}},[v,e.current]),function(f){if(f==null){s();return}if(yt.cancel(u.current),typeof f=="number")l(f);else if(f&&st(f)==="object"){var p,h=f.align;"index"in f?p=f.index:p=t.findIndex(function(b){return o(b)===f.key});var m=f.offset,w=m===void 0?0:m;g({times:0,index:p,offset:w,originAlign:h})}}}var Xo=a.forwardRef(function(e,t){var r=e.prefixCls,n=e.rtl,o=e.scrollOffset,i=e.scrollRange,l=e.onStartMove,s=e.onStopMove,u=e.onScroll,c=e.horizontal,d=e.spinSize,v=e.containerSize,g=e.style,f=e.thumbStyle,p=e.showScrollBar,h=a.useState(!1),m=M(h,2),w=m[0],b=m[1],y=a.useState(null),E=M(y,2),R=E[0],S=E[1],$=a.useState(null),P=M($,2),B=P[0],V=P[1],O=!n,Y=a.useRef(),j=a.useRef(),ue=a.useState(p),ce=M(ue,2),H=ce[0],ie=ce[1],_=a.useRef(),me=function(){p===!0||p===!1||(clearTimeout(_.current),ie(!0),_.current=setTimeout(function(){ie(!1)},3e3))},F=i-v||0,N=v-d||0,K=a.useMemo(function(){if(o===0||F===0)return 0;var A=o/F;return A*N},[o,F,N]),oe=function(C){C.stopPropagation(),C.preventDefault()},he=a.useRef({top:K,dragging:w,pageY:R,startTop:B});he.current={top:K,dragging:w,pageY:R,startTop:B};var be=function(C){b(!0),S(Bn(C,c)),V(he.current.top),l(),C.stopPropagation(),C.preventDefault()};a.useEffect(function(){var A=function(k){k.preventDefault()},C=Y.current,T=j.current;return C.addEventListener("touchstart",A,{passive:!1}),T.addEventListener("touchstart",be,{passive:!1}),function(){C.removeEventListener("touchstart",A),T.removeEventListener("touchstart",be)}},[]);var _e=a.useRef();_e.current=F;var De=a.useRef();De.current=N,a.useEffect(function(){if(w){var A,C=function(k){var z=he.current,pe=z.dragging,ye=z.pageY,ae=z.startTop;yt.cancel(A);var Ce=Y.current.getBoundingClientRect(),ge=v/(c?Ce.width:Ce.height);if(pe){var we=(Bn(k,c)-ye)*ge,Ae=ae;!O&&c?Ae-=we:Ae+=we;var te=_e.current,qe=De.current,Pe=qe?Ae/qe:0,je=Math.ceil(Pe*te);je=Math.max(je,0),je=Math.min(je,te),A=yt(function(){u(je,c)})}},T=function(){b(!1),s()};return window.addEventListener("mousemove",C,{passive:!0}),window.addEventListener("touchmove",C,{passive:!0}),window.addEventListener("mouseup",T,{passive:!0}),window.addEventListener("touchend",T,{passive:!0}),function(){window.removeEventListener("mousemove",C),window.removeEventListener("touchmove",C),window.removeEventListener("mouseup",T),window.removeEventListener("touchend",T),yt.cancel(A)}}},[w]),a.useEffect(function(){return me(),function(){clearTimeout(_.current)}},[o]),a.useImperativeHandle(t,function(){return{delayHidden:me}});var Z="".concat(r,"-scrollbar"),Se={position:"absolute",visibility:H?null:"hidden"},Le={position:"absolute",borderRadius:99,background:"var(--rc-virtual-list-scrollbar-bg, rgba(0, 0, 0, 0.5))",cursor:"pointer",userSelect:"none"};return c?(Object.assign(Se,{height:8,left:0,right:0,bottom:0}),Object.assign(Le,L({height:"100%",width:d},O?"left":"right",K))):(Object.assign(Se,L({width:8,top:0,bottom:0},O?"right":"left",0)),Object.assign(Le,{width:"100%",height:d,top:K})),a.createElement("div",{ref:Y,className:He(Z,L(L(L({},"".concat(Z,"-horizontal"),c),"".concat(Z,"-vertical"),!c),"".concat(Z,"-visible"),H)),style:I(I({},Se),g),onMouseDown:oe,onMouseMove:me},a.createElement("div",{ref:j,className:He("".concat(Z,"-thumb"),L({},"".concat(Z,"-thumb-moving"),w)),style:I(I({},Le),f),onMouseDown:be}))}),Kc=20;function Jo(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=e/t*e;return isNaN(r)&&(r=0),r=Math.max(r,Kc),Math.floor(r)}var Uc=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles","showScrollBar"],Gc=[],qc={overflowY:"auto",overflowAnchor:"none"};function Qc(e,t){var r=e.prefixCls,n=r===void 0?"rc-virtual-list":r,o=e.className,i=e.height,l=e.itemHeight,s=e.fullHeight,u=s===void 0?!0:s,c=e.style,d=e.data,v=e.children,g=e.itemKey,f=e.virtual,p=e.direction,h=e.scrollWidth,m=e.component,w=m===void 0?"div":m,b=e.onScroll,y=e.onVirtualScroll,E=e.onVisibleChange,R=e.innerProps,S=e.extraRender,$=e.styles,P=e.showScrollBar,B=P===void 0?"optional":P,V=wt(e,Uc),O=a.useCallback(function(W){return typeof g=="function"?g(W):W==null?void 0:W[g]},[g]),Y=zc(O),j=M(Y,4),ue=j[0],ce=j[1],H=j[2],ie=j[3],_=!!(f!==!1&&i&&l),me=a.useMemo(function(){return Object.values(H.maps).reduce(function(W,U){return W+U},0)},[H.id,H.maps]),F=_&&d&&(Math.max(l*d.length,me)>i||!!h),N=p==="rtl",K=He(n,L({},"".concat(n,"-rtl"),N),o),oe=d||Gc,he=a.useRef(),be=a.useRef(),_e=a.useRef(),De=a.useState(0),Z=M(De,2),Se=Z[0],Le=Z[1],A=a.useState(0),C=M(A,2),T=C[0],ee=C[1],k=a.useState(!1),z=M(k,2),pe=z[0],ye=z[1],ae=function(){ye(!0)},Ce=function(){ye(!1)},ge={getKey:O};function we(W){Le(function(U){var Ne;typeof W=="function"?Ne=W(U):Ne=W;var ze=xe(Ne);return he.current.scrollTop=ze,ze})}var Ae=a.useRef({start:0,end:oe.length}),te=a.useRef(),qe=Ac(oe,O),Pe=M(qe,1),je=Pe[0];te.current=je;var We=a.useMemo(function(){if(!_)return{scrollHeight:void 0,start:0,end:oe.length-1,offset:void 0};if(!F){var W;return{scrollHeight:((W=be.current)===null||W===void 0?void 0:W.offsetHeight)||0,start:0,end:oe.length-1,offset:void 0}}for(var U=0,Ne,ze,Xe,zt=oe.length,_t=0;_t<zt;_t+=1){var Ht=oe[_t],er=O(Ht),Dt=H.get(er),Pt=U+(Dt===void 0?l:Dt);Pt>=Se&&Ne===void 0&&(Ne=_t,ze=U),Pt>Se+i&&Xe===void 0&&(Xe=_t),U=Pt}return Ne===void 0&&(Ne=0,ze=0,Xe=Math.ceil(i/l)),Xe===void 0&&(Xe=oe.length-1),Xe=Math.min(Xe+1,oe.length-1),{scrollHeight:U,start:Ne,end:Xe,offset:ze}},[F,_,Se,oe,ie,i]),Re=We.scrollHeight,Be=We.start,Qe=We.end,tt=We.offset;Ae.current.start=Be,Ae.current.end=Qe,a.useLayoutEffect(function(){var W=H.getRecord();if(W.size===1){var U=Array.from(W.keys())[0],Ne=W.get(U),ze=oe[Be];if(ze&&Ne===void 0){var Xe=O(ze);if(Xe===U){var zt=H.get(U),_t=zt-l;we(function(Ht){return Ht+_t})}}}H.resetRecord()},[Re]);var rt=a.useState({width:0,height:i}),Ue=M(rt,2),Ve=Ue[0],gt=Ue[1],Ke=function(U){gt({width:U.offsetWidth,height:U.offsetHeight})},at=a.useRef(),et=a.useRef(),Mt=a.useMemo(function(){return Jo(Ve.width,h)},[Ve.width,h]),dt=a.useMemo(function(){return Jo(Ve.height,Re)},[Ve.height,Re]),fe=Re-i,X=a.useRef(fe);X.current=fe;function xe(W){var U=W;return Number.isNaN(X.current)||(U=Math.min(U,X.current)),U=Math.max(U,0),U}var J=Se<=0,Ie=Se>=fe,le=T<=0,ve=T>=h,G=oi(J,Ie,le,ve),Me=function(){return{x:N?-T:T,y:Se}},Ye=a.useRef(Me()),q=It(function(W){if(y){var U=I(I({},Me()),W);(Ye.current.x!==U.x||Ye.current.y!==U.y)&&(y(U),Ye.current=U)}});function ne(W,U){var Ne=W;U?(Yr.flushSync(function(){ee(Ne)}),q()):we(Ne)}function de(W){var U=W.currentTarget.scrollTop;U!==Se&&we(U),b==null||b(W),q()}var se=function(U){var Ne=U,ze=h?h-Ve.width:0;return Ne=Math.max(Ne,0),Ne=Math.min(Ne,ze),Ne},Te=It(function(W,U){U?(Yr.flushSync(function(){ee(function(Ne){var ze=Ne+(N?-W:W);return se(ze)})}),q()):we(function(Ne){var ze=Ne+W;return ze})}),Fe=Oc(_,J,Ie,le,ve,!!h,Te),Et=M(Fe,2),ft=Et[0],ht=Et[1];jc(_,he,function(W,U,Ne,ze){var Xe=ze;return G(W,U,Ne)?!1:!Xe||!Xe._virtualHandled?(Xe&&(Xe._virtualHandled=!0),ft({preventDefault:function(){},deltaX:W?U:0,deltaY:W?0:U}),!0):!1}),Wc(F,he,function(W){we(function(U){return U+W})}),lt(function(){function W(Ne){var ze=J&&Ne.detail<0,Xe=Ie&&Ne.detail>0;_&&!ze&&!Xe&&Ne.preventDefault()}var U=he.current;return U.addEventListener("wheel",ft,{passive:!1}),U.addEventListener("DOMMouseScroll",ht,{passive:!0}),U.addEventListener("MozMousePixelScroll",W,{passive:!1}),function(){U.removeEventListener("wheel",ft),U.removeEventListener("DOMMouseScroll",ht),U.removeEventListener("MozMousePixelScroll",W)}},[_,J,Ie]),lt(function(){if(h){var W=se(T);ee(W),q({x:W})}},[Ve.width,h]);var Ze=function(){var U,Ne;(U=at.current)===null||U===void 0||U.delayHidden(),(Ne=et.current)===null||Ne===void 0||Ne.delayHidden()},$t=Hc(he,oe,H,l,O,function(){return ce(!0)},we,Ze);a.useImperativeHandle(t,function(){return{nativeElement:_e.current,getScrollInfo:Me,scrollTo:function(U){function Ne(ze){return ze&&st(ze)==="object"&&("left"in ze||"top"in ze)}Ne(U)?(U.left!==void 0&&ee(se(U.left)),$t(U.top)):$t(U)}}}),lt(function(){if(E){var W=oe.slice(Be,Qe+1);E(W,oe)}},[Be,Qe,oe]);var St=Vc(oe,O,H,l),Nt=S==null?void 0:S({start:Be,end:Qe,virtual:F,offsetX:T,offsetY:tt,rtl:N,getSize:St}),Ot=Tc(oe,Be,Qe,h,T,ue,v,ge),ut=null;i&&(ut=I(L({},u?"height":"maxHeight",i),qc),_&&(ut.overflowY="hidden",h&&(ut.overflowX="hidden"),pe&&(ut.pointerEvents="none")));var xt={};return N&&(xt.dir="rtl"),a.createElement("div",Je({ref:_e,style:I(I({},c),{},{position:"relative"}),className:K},xt,V),a.createElement(mr,{onResize:Ke},a.createElement(w,{className:"".concat(n,"-holder"),style:ut,ref:he,onScroll:de,onMouseEnter:Ze},a.createElement(ni,{prefixCls:n,height:Re,offsetX:T,offsetY:tt,scrollWidth:h,onInnerResize:ce,ref:be,innerProps:R,rtl:N,extra:Nt},Ot))),F&&Re>i&&a.createElement(Xo,{ref:at,prefixCls:n,scrollOffset:Se,scrollRange:Re,rtl:N,onScroll:ne,onStartMove:ae,onStopMove:Ce,spinSize:dt,containerSize:Ve.height,style:$==null?void 0:$.verticalScrollBar,thumbStyle:$==null?void 0:$.verticalScrollBarThumb,showScrollBar:B}),F&&h>Ve.width&&a.createElement(Xo,{ref:et,prefixCls:n,scrollOffset:T,scrollRange:h,rtl:N,onScroll:ne,onStartMove:ae,onStopMove:Ce,spinSize:Mt,containerSize:Ve.width,horizontal:!0,style:$==null?void 0:$.horizontalScrollBar,thumbStyle:$==null?void 0:$.horizontalScrollBarThumb,showScrollBar:B}))}var ai=a.forwardRef(Qc);ai.displayName="List";function Yc(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var Xc=["disabled","title","children","style","className"];function Zo(e){return typeof e=="string"||typeof e=="number"}var Jc=function(t,r){var n=bs(),o=n.prefixCls,i=n.id,l=n.open,s=n.multiple,u=n.mode,c=n.searchValue,d=n.toggleOpen,v=n.notFoundContent,g=n.onPopupScroll,f=a.useContext(oo),p=f.maxCount,h=f.flattenOptions,m=f.onActiveValue,w=f.defaultActiveFirstOption,b=f.onSelect,y=f.menuItemSelectedIcon,E=f.rawValues,R=f.fieldNames,S=f.virtual,$=f.direction,P=f.listHeight,B=f.listItemHeight,V=f.optionRender,O="".concat(o,"-item"),Y=pa(function(){return h},[l,h],function(A,C){return C[0]&&A[1]!==C[1]}),j=a.useRef(null),ue=a.useMemo(function(){return s&&zn(p)&&(E==null?void 0:E.size)>=p},[s,p,E==null?void 0:E.size]),ce=function(C){C.preventDefault()},H=function(C){var T;(T=j.current)===null||T===void 0||T.scrollTo(typeof C=="number"?{index:C}:C)},ie=a.useCallback(function(A){return u==="combobox"?!1:E.has(A)},[u,Ct(E).toString(),E.size]),_=function(C){for(var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,ee=Y.length,k=0;k<ee;k+=1){var z=(C+k*T+ee)%ee,pe=Y[z]||{},ye=pe.group,ae=pe.data;if(!ye&&!(ae!=null&&ae.disabled)&&(ie(ae.value)||!ue))return z}return-1},me=a.useState(function(){return _(0)}),F=M(me,2),N=F[0],K=F[1],oe=function(C){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;K(C);var ee={source:T?"keyboard":"mouse"},k=Y[C];if(!k){m(null,-1,ee);return}m(k.value,C,ee)};a.useEffect(function(){oe(w!==!1?_(0):-1)},[Y.length,c]);var he=a.useCallback(function(A){return u==="combobox"?String(A).toLowerCase()===c.toLowerCase():E.has(A)},[u,c,Ct(E).toString(),E.size]);a.useEffect(function(){var A=setTimeout(function(){if(!s&&l&&E.size===1){var T=Array.from(E)[0],ee=Y.findIndex(function(k){var z=k.data;return c?String(z.value).startsWith(c):z.value===T});ee!==-1&&(oe(ee),H(ee))}});if(l){var C;(C=j.current)===null||C===void 0||C.scrollTo(void 0)}return function(){return clearTimeout(A)}},[l,c]);var be=function(C){C!==void 0&&b(C,{selected:!E.has(C)}),s||d(!1)};if(a.useImperativeHandle(r,function(){return{onKeyDown:function(C){var T=C.which,ee=C.ctrlKey;switch(T){case ke.N:case ke.P:case ke.UP:case ke.DOWN:{var k=0;if(T===ke.UP?k=-1:T===ke.DOWN?k=1:Yc()&&ee&&(T===ke.N?k=1:T===ke.P&&(k=-1)),k!==0){var z=_(N+k,k);H(z),oe(z,!0)}break}case ke.TAB:case ke.ENTER:{var pe,ye=Y[N];ye&&!(ye!=null&&(pe=ye.data)!==null&&pe!==void 0&&pe.disabled)&&!ue?be(ye.value):be(void 0),l&&C.preventDefault();break}case ke.ESC:d(!1),l&&C.stopPropagation()}},onKeyUp:function(){},scrollTo:function(C){H(C)}}}),Y.length===0)return a.createElement("div",{role:"listbox",id:"".concat(i,"_list"),className:"".concat(O,"-empty"),onMouseDown:ce},v);var _e=Object.keys(R).map(function(A){return R[A]}),De=function(C){return C.label};function Z(A,C){var T=A.group;return{role:T?"presentation":"option",id:"".concat(i,"_list_").concat(C)}}var Se=function(C){var T=Y[C];if(!T)return null;var ee=T.data||{},k=ee.value,z=T.group,pe=Xr(ee,!0),ye=De(T);return T?a.createElement("div",Je({"aria-label":typeof ye=="string"&&!z?ye:null},pe,{key:C},Z(T,C),{"aria-selected":he(k)}),k):null},Le={role:"listbox",id:"".concat(i,"_list")};return a.createElement(a.Fragment,null,S&&a.createElement("div",Je({},Le,{style:{height:0,width:0,overflow:"hidden"}}),Se(N-1),Se(N),Se(N+1)),a.createElement(ai,{itemKey:"key",ref:j,data:Y,height:P,itemHeight:B,fullHeight:!1,onMouseDown:ce,onScroll:g,virtual:S,direction:$,innerProps:S?null:Le},function(A,C){var T=A.group,ee=A.groupOption,k=A.data,z=A.label,pe=A.value,ye=k.key;if(T){var ae,Ce=(ae=k.title)!==null&&ae!==void 0?ae:Zo(z)?z.toString():void 0;return a.createElement("div",{className:He(O,"".concat(O,"-group"),k.className),title:Ce},z!==void 0?z:ye)}var ge=k.disabled,we=k.title;k.children;var Ae=k.style,te=k.className,qe=wt(k,Xc),Pe=ql(qe,_e),je=ie(pe),We=ge||!je&&ue,Re="".concat(O,"-option"),Be=He(O,Re,te,L(L(L(L({},"".concat(Re,"-grouped"),ee),"".concat(Re,"-active"),N===C&&!We),"".concat(Re,"-disabled"),We),"".concat(Re,"-selected"),je)),Qe=De(A),tt=!y||typeof y=="function"||je,rt=typeof Qe=="number"?Qe:Qe||pe,Ue=Zo(rt)?rt.toString():void 0;return we!==void 0&&(Ue=we),a.createElement("div",Je({},Xr(Pe),S?{}:Z(A,C),{"aria-selected":he(pe),className:Be,title:Ue,onMouseMove:function(){N===C||We||oe(C)},onClick:function(){We||be(pe)},style:Ae}),a.createElement("div",{className:"".concat(Re,"-content")},typeof V=="function"?V(A,{index:C}):rt),a.isValidElement(y)||je,tt&&a.createElement(sn,{className:"".concat(O,"-option-state"),customizeIcon:y,customizeIconProps:{value:pe,disabled:We,isSelected:je}},je?"✓":null))}))},Zc=a.forwardRef(Jc);const ed=(function(e,t){var r=a.useRef({values:new Map,options:new Map}),n=a.useMemo(function(){var i=r.current,l=i.values,s=i.options,u=e.map(function(v){if(v.label===void 0){var g;return I(I({},v),{},{label:(g=l.get(v.value))===null||g===void 0?void 0:g.label})}return v}),c=new Map,d=new Map;return u.forEach(function(v){c.set(v.value,v),d.set(v.value,t.get(v.value)||s.get(v.value))}),r.current.values=c,r.current.options=d,u},[e,t]),o=a.useCallback(function(i){return t.get(i)||r.current.options.get(i)},[t]);return[n,o]});function En(e,t){return Aa(e).join("").toUpperCase().includes(t)}const td=(function(e,t,r,n,o){return a.useMemo(function(){if(!r||n===!1)return e;var i=t.options,l=t.label,s=t.value,u=[],c=typeof n=="function",d=r.toUpperCase(),v=c?n:function(f,p){return o?En(p[o],d):p[i]?En(p[l!=="children"?l:"label"],d):En(p[s],d)},g=c?function(f){return jn(f)}:function(f){return f};return e.forEach(function(f){if(f[i]){var p=v(r,g(f));if(p)u.push(f);else{var h=f[i].filter(function(m){return v(r,g(m))});h.length&&u.push(I(I({},f),{},L({},i,h)))}return}v(r,g(f))&&u.push(f)}),u},[e,n,o,r,t])});var ea=0,rd=Xt();function nd(){var e;return rd?(e=ea,ea+=1):e="TEST_OR_SSR",e}function od(e){var t=a.useState(),r=M(t,2),n=r[0],o=r[1];return a.useEffect(function(){o("rc_select_".concat(nd()))},[]),e||n}var ad=["children","value"],id=["children"];function ld(e){var t=e,r=t.key,n=t.props,o=n.children,i=n.value,l=wt(n,ad);return I({key:r,value:i!==void 0?i:r,children:o},l)}function ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Jr(e).map(function(r,n){if(!a.isValidElement(r)||!r.type)return null;var o=r,i=o.type.isSelectOptGroup,l=o.key,s=o.props,u=s.children,c=wt(s,id);return t||!i?ld(r):I(I({key:"__RC_SELECT_GRP__".concat(l===null?n:l,"__"),label:l},c),{},{options:ii(u)})}).filter(function(r){return r})}var sd=function(t,r,n,o,i){return a.useMemo(function(){var l=t,s=!t;s&&(l=ii(r));var u=new Map,c=new Map,d=function(f,p,h){h&&typeof h=="string"&&f.set(p[h],p)},v=function g(f){for(var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,h=0;h<f.length;h+=1){var m=f[h];!m[n.options]||p?(u.set(m[n.value],m),d(c,m,n.label),d(c,m,o),d(c,m,i)):g(m[n.options],!0)}};return v(l),{options:l,valueOptions:u,labelOptions:c}},[t,r,n,o,i])};function ta(e){var t=a.useRef();t.current=e;var r=a.useCallback(function(){return t.current.apply(t,arguments)},[]);return r}var ud=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","optionRender","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","direction","listHeight","listItemHeight","labelRender","value","defaultValue","labelInValue","onChange","maxCount"],cd=["inputValue"];function dd(e){return!e||st(e)!=="object"}var fd=a.forwardRef(function(e,t){var r=e.id,n=e.mode,o=e.prefixCls,i=o===void 0?"rc-select":o,l=e.backfill,s=e.fieldNames,u=e.inputValue,c=e.searchValue,d=e.onSearch,v=e.autoClearSearchValue,g=v===void 0?!0:v,f=e.onSelect,p=e.onDeselect,h=e.dropdownMatchSelectWidth,m=h===void 0?!0:h,w=e.filterOption,b=e.filterSort,y=e.optionFilterProp,E=e.optionLabelProp,R=e.options,S=e.optionRender,$=e.children,P=e.defaultActiveFirstOption,B=e.menuItemSelectedIcon,V=e.virtual,O=e.direction,Y=e.listHeight,j=Y===void 0?200:Y,ue=e.listItemHeight,ce=ue===void 0?20:ue,H=e.labelRender,ie=e.value,_=e.defaultValue,me=e.labelInValue,F=e.onChange,N=e.maxCount,K=wt(e,ud),oe=od(r),he=Wn(n),be=!!(!R&&$),_e=a.useMemo(function(){return w===void 0&&n==="combobox"?!1:w},[w,n]),De=a.useMemo(function(){return ei(s,be)},[JSON.stringify(s),be]),Z=Mn("",{value:c!==void 0?c:u,postState:function(ne){return ne||""}}),Se=M(Z,2),Le=Se[0],A=Se[1],C=sd(R,$,De,y,E),T=C.valueOptions,ee=C.labelOptions,k=C.options,z=a.useCallback(function(q){var ne=Aa(q);return ne.map(function(de){var se,Te,Fe,Et,ft;if(dd(de))se=de;else{var ht;Fe=de.key,Te=de.label,se=(ht=de.value)!==null&&ht!==void 0?ht:Fe}var Ze=T.get(se);if(Ze){var $t;Te===void 0&&(Te=Ze==null?void 0:Ze[E||De.label]),Fe===void 0&&(Fe=($t=Ze==null?void 0:Ze.key)!==null&&$t!==void 0?$t:se),Et=Ze==null?void 0:Ze.disabled,ft=Ze==null?void 0:Ze.title}return{label:Te,value:se,key:Fe,disabled:Et,title:ft}})},[De,E,T]),pe=Mn(_,{value:ie}),ye=M(pe,2),ae=ye[0],Ce=ye[1],ge=a.useMemo(function(){var q,ne=he&&ae===null?[]:ae,de=z(ne);return n==="combobox"&&yu((q=de[0])===null||q===void 0?void 0:q.value)?[]:de},[ae,z,n,he]),we=ed(ge,T),Ae=M(we,2),te=Ae[0],qe=Ae[1],Pe=a.useMemo(function(){if(!n&&te.length===1){var q=te[0];if(q.value===null&&(q.label===null||q.label===void 0))return[]}return te.map(function(ne){var de;return I(I({},ne),{},{label:(de=typeof H=="function"?H(ne):ne.label)!==null&&de!==void 0?de:ne.value})})},[n,te,H]),je=a.useMemo(function(){return new Set(te.map(function(q){return q.value}))},[te]);a.useEffect(function(){if(n==="combobox"){var q,ne=(q=te[0])===null||q===void 0?void 0:q.value;A(bu(ne)?String(ne):"")}},[te]);var We=ta(function(q,ne){var de=ne??q;return L(L({},De.value,q),De.label,de)}),Re=a.useMemo(function(){if(n!=="tags")return k;var q=Ct(k),ne=function(se){return T.has(se)};return Ct(te).sort(function(de,se){return de.value<se.value?-1:1}).forEach(function(de){var se=de.value;ne(se)||q.push(We(se,de.label))}),q},[We,k,T,te,n]),Be=td(Re,De,Le,_e,y),Qe=a.useMemo(function(){return n!=="tags"||!Le||Be.some(function(q){return q[y||"value"]===Le})||Be.some(function(q){return q[De.value]===Le})?Be:[We(Le)].concat(Ct(Be))},[We,y,n,Be,Le,De]),tt=function q(ne){var de=Ct(ne).sort(function(se,Te){return b(se,Te,{searchValue:Le})});return de.map(function(se){return Array.isArray(se.options)?I(I({},se),{},{options:se.options.length>0?q(se.options):se.options}):se})},rt=a.useMemo(function(){return b?tt(Qe):Qe},[Qe,b,Le]),Ue=a.useMemo(function(){return Ic(rt,{fieldNames:De,childrenAsData:be})},[rt,De,be]),Ve=function(ne){var de=z(ne);if(Ce(de),F&&(de.length!==te.length||de.some(function(Fe,Et){var ft;return((ft=te[Et])===null||ft===void 0?void 0:ft.value)!==(Fe==null?void 0:Fe.value)}))){var se=me?de:de.map(function(Fe){return Fe.value}),Te=de.map(function(Fe){return jn(qe(Fe.value))});F(he?se:se[0],he?Te:Te[0])}},gt=a.useState(null),Ke=M(gt,2),at=Ke[0],et=Ke[1],Mt=a.useState(0),dt=M(Mt,2),fe=dt[0],X=dt[1],xe=P!==void 0?P:n!=="combobox",J=a.useCallback(function(q,ne){var de=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},se=de.source,Te=se===void 0?"keyboard":se;X(ne),l&&n==="combobox"&&q!==null&&Te==="keyboard"&&et(String(q))},[l,n]),Ie=function(ne,de,se){var Te=function(){var ut,xt=qe(ne);return[me?{label:xt==null?void 0:xt[De.label],value:ne,key:(ut=xt==null?void 0:xt.key)!==null&&ut!==void 0?ut:ne}:ne,jn(xt)]};if(de&&f){var Fe=Te(),Et=M(Fe,2),ft=Et[0],ht=Et[1];f(ft,ht)}else if(!de&&p&&se!=="clear"){var Ze=Te(),$t=M(Ze,2),St=$t[0],Nt=$t[1];p(St,Nt)}},le=ta(function(q,ne){var de,se=he?ne.selected:!0;se?de=he?[].concat(Ct(te),[q]):[q]:de=te.filter(function(Te){return Te.value!==q}),Ve(de),Ie(q,se),n==="combobox"?et(""):(!Wn||g)&&(A(""),et(""))}),ve=function(ne,de){Ve(ne);var se=de.type,Te=de.values;(se==="remove"||se==="clear")&&Te.forEach(function(Fe){Ie(Fe.value,!1,se)})},G=function(ne,de){if(A(ne),et(null),de.source==="submit"){var se=(ne||"").trim();if(se){var Te=Array.from(new Set([].concat(Ct(je),[se])));Ve(Te),Ie(se,!0),A("")}return}de.source!=="blur"&&(n==="combobox"&&Ve(ne),d==null||d(ne))},Me=function(ne){var de=ne;n!=="tags"&&(de=ne.map(function(Te){var Fe=ee.get(Te);return Fe==null?void 0:Fe.value}).filter(function(Te){return Te!==void 0}));var se=Array.from(new Set([].concat(Ct(je),Ct(de))));Ve(se),se.forEach(function(Te){Ie(Te,!0)})},Ye=a.useMemo(function(){var q=V!==!1&&m!==!1;return I(I({},C),{},{flattenOptions:Ue,onActiveValue:J,defaultActiveFirstOption:xe,onSelect:le,menuItemSelectedIcon:B,rawValues:je,fieldNames:De,virtual:q,direction:O,listHeight:j,listItemHeight:ce,childrenAsData:be,maxCount:N,optionRender:S})},[N,C,Ue,J,xe,le,B,je,De,V,m,O,j,ce,be,S]);return a.createElement(oo.Provider,{value:Ye},a.createElement(Dc,Je({},K,{id:oe,prefixCls:i,ref:t,omitDomProps:cd,mode:n,displayValues:Pe,onDisplayValuesChange:ve,direction:O,searchValue:Le,onSearch:G,autoClearSearchValue:g,onSearchSplit:Me,dropdownMatchSelectWidth:m,OptionList:Zc,emptyOptions:!Ue.length,activeValue:at,activeDescendantId:"".concat(oe,"_list_").concat(fe)})))}),li=fd;li.Option=ri;li.OptGroup=ti;const uf=D.div.withConfig({shouldForwardProp:e=>!["size","error"].includes(e)})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .text-field__required {
    color: ${({theme:e})=>e.colors.red[9]};
  }

  .text-field__error-message {
    color: ${({theme:e})=>e.colors.red[9]};
  }

  .rc-select {
    display: flex;
    align-items: center;
    font-size: 12px;
    min-width: 100px;
    position: relative;
    cursor: pointer;
  }

  .rc-select-focused .rc-select-selector {
    border-bottom: 2px solid ${({theme:e})=>e.primaryColor}!important;
  }

  .rc-select-open{
    .icon-arrow {
      transform: rotateX(180deg);
      transition: all 0.2s ease-in-out;
    }
  }
  .rc-select-selector {
    width: calc(100% - 2px);
    border-radius: ${({theme:e})=>e.control.radius};
    border: 1px solid ${({theme:e})=>e.colors.gray[3]};
    border-bottom: 1px solid ${({theme:e})=>e.colors.gray[5]};
    min-height: ${({size:e,theme:t})=>t.control.height[e]};
    align-items: center;

    &:hover {
      border-bottom: 1px solid ${({theme:e})=>e.colors.gray[8]};
    }
  }
  
  ${({error:e,theme:t})=>e&&x`
    .rc-select-selector {
      border-bottom: 2px solid ${t.colors.red[9]} !important;
    }
  `};

  .rc-select-arrow {
    position: relative;
    z-index: 10;
    right: 22px;
  }

  .rc-select-selection-search-input {
    height: 100%;
    background-color: transparent;
    border: none;
    width: 100%;
  }

  .rc-select-single .rc-select-selector .rc-select-selection-item,
  .rc-select-single .rc-select-selector .rc-select-selection-placeholder {
    position: absolute;
    left: 3px;
    pointer-events: none;
    font-weight: normal;
    top: ${({size:e})=>{if(e==="l")return"-3px";if(e==="m")return"-2px";if(e==="s")return"0px";if(e==="xs")return"1px"}};
  }

  .rc-select-single .rc-select-selector {
    display: flex;
    position: relative;
  }

  .rc-select-single .rc-select-selector .rc-select-selection-search {
    width: 100%;
    position: relative;
  }
  .rc-select-single .rc-select-selector .rc-select-selection-search-input {
    width: 100%;
  }

  .rc-select-single .rc-select-selector .rc-select-selection-wrap {
    width: calc(100% - 10px);
    position: relative;
    height: 100%;
  }

  .rc-select-single:not(.rc-select-customize-input)
    .rc-select-selector
    .rc-select-selection-search-input {
    border: none;
    outline: none;
    width: 100%;
  }

  .rc-select .rc-select-selection-search-input {
    appearance: none;
  }
  .rc-select .rc-select-selection-search-input::-webkit-search-cancel-button {
    display: none;
    appearance: none;
  }

  .rc-select-allow-clear .rc-select-clear {
    cursor: pointer;
    position: absolute;
    right: 2.625rem;
    top: ${({size:e})=>{if(e==="l")return"0.625rem";if(e==="m")return"0.6rem";if(e==="s")return"0.4375rem";if(e==="xs")return"0.1875rem"}};
  }

  .rc-select-clear-icon {
    font-size: ${({size:e})=>{if(e==="l")return"1.5rem";if(e==="m")return"1.25rem";if(e==="s")return"1rem";if(e==="xs")return"0.875rem"}};
  }

  .rc-select-selection-search-input {
    font-size: ${({theme:e,size:t})=>e.fonts.text.size[t]};
    font-weight: ${({theme:e})=>e.fonts.text.weight};
    line-height: ${({theme:e,size:t})=>e.fonts.text.lineHeight[t]};
  }

  .rc-select-multiple .rc-select-selector {
    display: flex;
    padding: 1px;
  }

  .rc-select-multiple .rc-select-selector .rc-select-selection-item {
    flex: none;
    background: #bbb;
    border-radius: 4px;
    margin-right: 2px;
    padding: 0 8px;
  }

  .rc-select-multiple .rc-select-selector .rc-select-selection-item-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .rc-select-multiple .rc-select-selector .rc-select-selection-overflow {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .rc-select-multiple .rc-select-selector .rc-select-selection-overflow-item {
    flex: none;
    max-width: 100%;
  }
  .rc-select-multiple .rc-select-selector .rc-select-selection-search {
    position: relative;
    max-width: 100%;
  }
  .rc-select-multiple .rc-select-selector .rc-select-selection-search-input,
  .rc-select-multiple .rc-select-selector .rc-select-selection-search-mirror {
    padding: 1px;
    font-family: system-ui;
  }

  .rc-select-multiple .rc-select-selector .rc-select-selection-search-mirror {
    position: absolute;
    z-index: 999;
    white-space: nowrap;
    left: 0;
    top: 0;
    visibility: hidden;
  }

  .rc-select-multiple .rc-select-selector .rc-select-selection-search-input {
    border: none;
    outline: none;
    width: 100%;
  }
  .rc-select-allow-clear.rc-select-multiple .rc-select-selector {
    padding-right: 20px;
  }

  .rc-select-multiple .rc-select-selector .rc-select-selection-placeholder {
    position: absolute;
    left: 3px;
    pointer-events: none;
    font-weight: normal;
    top: ${({size:e})=>{if(e==="l")return"10px";if(e==="m")return"8px";if(e==="s")return"7px";if(e==="xs")return"2px"}};
  }
`,cf=gi`
  .rc-select-dropdown {
    min-height: 100px;
    position: absolute;
    background: ${({theme:e})=>e.colors.grayViolet[5]};
    border: 1px solid ${({theme:e})=>e.colors.grayViolet[9]};
    border-radius: ${({theme:e})=>e.control.radius};
  }

  .rc-select-dropdown-hidden {
    display: none;
  }

  .rc-select-dropdown-slide-up-enter,
  .rc-select-dropdown-slide-up-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
    animation-play-state: paused;
  }
  .rc-select-dropdown-slide-up-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    opacity: 1;
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
    animation-play-state: paused;
  }

  .rc-select-dropdown-slide-up-enter.rc-select-dropdown-slide-up-enter-active.rc-select-dropdown-placement-bottomLeft,
  .rc-select-dropdown-slide-up-appear.rc-select-dropdown-slide-up-appear-active.rc-select-dropdown-placement-bottomLeft,
  .rc-select-dropdown-slide-up-enter.rc-select-dropdown-slide-up-enter-active.rc-select-dropdown-placement-bottomRight,
  .rc-select-dropdown-slide-up-appear.rc-select-dropdown-slide-up-appear-active.rc-select-dropdown-placement-bottomRight {
    animation-name: rcSelectDropdownSlideUpIn;
    animation-play-state: running;
  }
  .rc-select-dropdown-slide-up-leave.rc-select-dropdown-slide-up-leave-active.rc-select-dropdown-placement-bottomLeft,
  .rc-select-dropdown-slide-up-leave.rc-select-dropdown-slide-up-leave-active.rc-select-dropdown-placement-bottomRight {
    animation-name: rcSelectDropdownSlideUpOut;
    animation-play-state: running;
  }
  .rc-select-dropdown-slide-up-enter.rc-select-dropdown-slide-up-enter-active.rc-select-dropdown-placement-topLeft,
  .rc-select-dropdown-slide-up-appear.rc-select-dropdown-slide-up-appear-active.rc-select-dropdown-placement-topLeft,
  .rc-select-dropdown-slide-up-enter.rc-select-dropdown-slide-up-enter-active.rc-select-dropdown-placement-topRight,
  .rc-select-dropdown-slide-up-appear.rc-select-dropdown-slide-up-appear-active.rc-select-dropdown-placement-topRight {
    animation-name: rcSelectDropdownSlideDownIn;
    animation-play-state: running;
  }
  .rc-select-dropdown-slide-up-leave.rc-select-dropdown-slide-up-leave-active.rc-select-dropdown-placement-topLeft,
  .rc-select-dropdown-slide-up-leave.rc-select-dropdown-slide-up-leave-active.rc-select-dropdown-placement-topRight {
    animation-name: rcSelectDropdownSlideDownOut;
    animation-play-state: running;
  }

  @keyframes rcSelectDropdownSlideUpIn {
    0% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
  }
  @keyframes rcSelectDropdownSlideUpOut {
    0% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(0);
    }
  }
  @keyframes rcSelectDropdownSlideDownIn {
    0% {
      transform: scaleY(0);
      transform-origin: 100% 100%;
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 100% 100%;
      opacity: 1;
    }
  }
  @keyframes rcSelectDropdownSlideDownOut {
    0% {
      transform: scaleY(1);
      transform-origin: 100% 100%;
      opacity: 1;
    }
    100% {
      transform: scaleY(0);
      transform-origin: 100% 100%;
      opacity: 0;
    }
  }

  .rc-select-item {
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    padding: 4px 16px;
  }
  
  .rc-select-item-option {
    position: relative;
  }
  
  .rc-select-item-option .rc-select-item-option-state {
    position: absolute;
    right: 0;
    top: 4px;
    pointer-events: none;
  }
  .rc-select-item-option-active {
    background: ${({theme:e})=>e.colors.grayViolet[7]};
    border-left: 2px solid
    ${({theme:e})=>e.colors.violet[7]};
    //padding-left: calc(0.25rem - 2px);
  }
  .rc-select-item-option-disabled {
    background: ${({theme:e})=>e.colors.grayViolet[3]};
    cursor: not-allowed;
    .quen-ui__select-option {
      color: ${({theme:e})=>e.colors.gray[3]};
    }
  }
  .rc-select-item-empty {
    text-align: center;
    color: ${({theme:e})=>e.textColor};
  }
  
  .rc-select-item-option-selected {
    background: ${({theme:e})=>e.colors.grayViolet[9]};
    border-left: 2px solid
    ${({theme:e})=>e.colors.violet[7]};
  }
`,df=D(At).withConfig({shouldForwardProp:e=>!["isDisabled"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.15rem;
  width: max-content;
  border-radius: 0.25rem;
  border: 1px solid ${({theme:e})=>e.colors.violet[4]};
  background: ${({theme:e})=>e.colors.grayViolet[4]};

  ${({isDisabled:e,theme:t})=>e&&x`
      border: 1px solid ${({theme:r})=>r.colors.violet[2]};
      background: ${t.colors.grayViolet[2]};
      color: ${({theme:r})=>r.colors.gray[2]};
    `}
`,ff=D.button.withConfig({shouldForwardProp:e=>!["isDisabled"].includes(e)})`
  cursor: pointer;
  padding: 2px;
  border: 1px solid
    ${({theme:e,isDisabled:t})=>t?e.colors.gray[2]:e.colors.gray[4]};
  background: transparent;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;

  svg {
    fill: ${({theme:e,isDisabled:t})=>t?e.colors.gray[2]:e.colors.gray[4]};
  }
`,vf=D.div.withConfig({shouldForwardProp:e=>!["status","zIndex"].includes(e)})`
  ${({status:e})=>(e==="preEnter"||e==="exiting")&&x`
      opacity: 0;
      transform: scale(0.9);
    `};
  position: absolute;
  opacity: 1;
  width: 100%;
  height: 100%;
  background: ${({theme:e})=>Lr(e.colors.grayViolet[5],.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: ${({zIndex:e})=>e};
`,mf=D.div.withConfig({shouldForwardProp:e=>e!=="isFullScreen"})`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({theme:e})=>e.colors.grayViolet[2]};
  border-radius: 0.5rem;
  ${({isFullScreen:e})=>e&&x`
    width: 100%;
    height: 100%;
  `};
`,gf=D.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`,hf=D.div`
  display: flex;
  flex: 0 0 auto;
  gap: 1rem;
`,ra=(e,t)=>{switch(t){case"info":return e.colors.violet[9];case"warning":return e.colors.orange[9];case"error":return e.colors.red[9];case"success":return e.colors.green[9]}},vd=(e,t)=>{switch(t){case"top":return x`
        top: ${e.space.m};
        left: 50%;
        transform: translateX(-50%);
      `;case"top-left":return x`
        top: ${e.space.m};
        left: ${e.space.m};
      `;case"top-right":return x`
        top: ${e.space.m};
        right: ${e.space.m};
      `;case"bottom":return x`
        bottom: ${e.space.m};
        left: 50%;
        transform: translateX(-50%);
      `;case"bottom-left":return x`
        bottom: ${e.space.m};
        left: ${e.space.m};
      `;case"bottom-right":return x`
        bottom: ${e.space.m};
        right: ${e.space.m};
      `}return x``},pf=D.div.withConfig({shouldForwardProp:e=>!["position","zIndex"].includes(e)})`
  width: calc(100% - ${({theme:e})=>e.space.m} * 2);
  position: fixed;
  z-index: ${({zIndex:e=2e3})=>e};
  ${({position:e,theme:t})=>vd(t,e)};
  max-width: 384px;
`,bf=D.div.withConfig({shouldForwardProp:e=>!["status"].includes(e)})`
  width: 384px;
  position: relative;
  border-radius: ${({theme:e})=>e.control.radius};
  padding: ${({theme:e})=>e.space.m};
  background: ${({theme:e})=>e.colors.grayViolet[2]};
  margin-bottom: ${({theme:e})=>e.space.m};

  .quen-ui__notification-icon {
    color: ${({theme:e,status:t="info"})=>ra(e,t)};
  }

  ${({status:e,theme:t})=>e&&x`
      &:before {
        content: "";
        display: block;
        position: absolute;
        width: ${t.space.xs};
        top: 0;
        bottom: 0;
        inset-inline-start: 0;
        background-color: ${ra(t,e)};
      }
    `}
`,si=(e,t)=>{if(t&&t in e.colors)switch(t){case"grayViolet":return e.colors.grayViolet[5];case"green":return e.colors.green[5];case"orange":return e.colors.orange[5];case"yellow":return e.colors.yellow[5];case"red":return e.colors.red[5];case"violet":return e.colors.violet[5]}return e.colors.violet[5]},md=(e,t)=>{if(t&&t in e.colors)switch(t){case"grayViolet":return e.colors.grayViolet[9];case"green":return e.colors.green[9];case"orange":return e.colors.orange[9];case"yellow":return e.colors.yellow[9];case"red":return e.colors.red[9];case"violet":return e.colors.violet[9]}return e.colors.violet[9]},yf=D.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.space.xs};
  width: 100%;
`,gd=(e,t)=>{switch(e){case"xs":return t.control.height.xs;case"s":return t.control.height.s;case"l":return t.control.height.l;case"m":default:return t.control.height.m}},wf=D.div`
  display: flex;
  border-radius: ${({theme:e})=>e.control.radius};
  overflow: hidden;
  width: 100%;
  height: ${({theme:e,size:t})=>gd(t,e)};
  background: ${({theme:e,color:t})=>Lr(md(e,t),.3)};
`,Sf=D.div`
  height: 100%;
  background: ${({theme:e,color:t})=>si(e,t)};
  border-radius: ${({theme:e})=>e.control.radius};
`,xf=D(At)`
  color: ${({theme:e,color:t})=>si(e,t)};
`,Mr=e=>{switch(e){case"l":return"1.5rem";case"s":return"1rem";case"xs":return"0.875rem";case"m":default:return"1.25rem"}},hd=D.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${({isDisabled:e})=>e?"not-allowed":"pointer"};
`,pd=D.input`
  width: ${({size:e})=>Mr(e)};
  height: ${({size:e})=>Mr(e)};
  border: 1px solid ${({theme:e})=>e.colors.grayViolet[5]};
  border-radius: 50%;
  transition:
    border-color 0.15s,
    background-color 0.15s;
  box-sizing: border-box;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  -webkit-appearance: none;
  
  &:disabled {
    background-color: ${({theme:e})=>e.colors.gray[2]};
    border: 1px solid ${({theme:e})=>e.colors.grayViolet[5]};
    cursor: not-allowed;
  }

  &:disabled:checked {
    background-color: ${({theme:e})=>e.colors.gray[2]};
    border: calc(${({size:e})=>Mr(e)} / 4) solid ${({theme:e})=>e.colors.violet[3]};
    cursor: not-allowed;
  }
  &:checked {
    background-color: ${({theme:e})=>e.colors.grayViolet[3]};
    border: calc(${({size:e})=>Mr(e)} / 4) solid ${({theme:e})=>e.colors.violet[5]};
  }

  &:hover:not(:disabled) {
    border: 1px solid ${({theme:e})=>e.colors.violet[5]};
  }
  
  &:hover:checked:not(:disabled) {
    background-color: ${({theme:e})=>e.colors.gray[2]};
    border: calc(${({size:e})=>Mr(e)} / 4) solid ${({theme:e})=>e.colors.violet[6]};
`,bd=D.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: ${({direction:e})=>e==="horizontal"?"row":"column"};

  .checkbox-group__required {
    color: ${({theme:e})=>e.colors.red[7]};
  }

  .checkbox-group__error-message {
    color: ${({theme:e})=>e.colors.red[7]};
  }
  
  ${({isError:e,theme:t})=>e&&x`
    border-left: 2px solid ${t.colors.red[5]};
    padding-left: 0.5rem;
  `};
`,ui=({isDisabled:e,label:t,size:r="m",name:n,id:o,onChange:i,isChecked:l,value:s,className:u})=>{const c=d=>{i==null||i(d.target.checked,d)};return re.jsxs(hd,{id:o,isDisabled:e,className:u,children:[re.jsx(pd,{checked:l,type:"radio",name:n,onChange:c,size:r,disabled:e,value:s}),t&&re.jsx(At,{size:r,children:t})]})},yd=e=>e.key,wd=e=>e.label,Sd=e=>e.isDisabled,xd=e=>e.value,Ed=e=>({...e,getItemKey:e.getItemKey||yd,getItemLabel:e.getItemLabel||wd,getItemDisabled:e.getItemDisabled||Sd,getItemValue:e.getItemValue||xd}),$d=({...e})=>{const{name:t,className:r,size:n="m",getItemKey:o,getItemLabel:i,direction:l,options:s,isDisabled:u,getItemDisabled:c,getItemValue:d,value:v=[],onChange:g,label:f,isRequired:p,error:h}=Ed(e),m=b=>v===d(b),w=(b,y)=>{g==null||g(b.value,y)};return re.jsxs(bd,{direction:l,className:r,isError:!!h,children:[f&&re.jsxs(At,{as:"label",size:n,children:[f,p&&re.jsx("span",{className:"checkbox-group__required",children:"*"})]}),s.map(b=>{var y;return re.jsx(ui,{size:n,label:i(b),name:t,isChecked:m(b),isDisabled:u??c(b),value:d(b),onChange:(E,R)=>w({value:d(b)},R)},o(b)??((y=i(b))==null?void 0:y.toString()))}),typeof h=="string"&&re.jsx(At,{className:"checkbox-group__error-message",size:"xs",children:h})]})},Cd=ui;Cd.Group=$d;const Nr=(e,t)=>{const r=Yt(`${e.control.borderWidth} * 4`);return{height:e.control.height[t],borderGap:r,circleSize:Yt(`${e.control.height[t]} - ${r}`)}},Ef=D.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  ${({isDisabled:e})=>e&&"pointer-events: none;"};
`,$f=D.input`
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  width: calc(${({theme:e,size:t})=>Nr(e,t).height}* 2);
  height: ${({theme:e,size:t})=>Nr(e,t).height};
  margin: 0;
  background-color: ${({theme:e})=>e.colors.gray[4]};
  border: ${({theme:e})=>x`
    ${e.control.borderWidth} solid ${e.colors.grayViolet[9]}
  `};
  cursor: pointer;
  transition:
    background-color 0.15s,
    border-color 0.15s;
  -webkit-appearance: none;
  border-radius: ${({theme:e})=>e.control.radius};

  &::before {
    content: "";
    position: absolute;
    right: 3px;
    box-sizing: border-box;
    width: ${({theme:e,size:t})=>Nr(e,t).circleSize};
    height: ${({theme:e,size:t})=>Nr(e,t).circleSize};
    background-color: ${({theme:e})=>e.colors.grayViolet[9]};
    border-radius: 1rem;
    transition:
      transform 0.15s,
      background-color 0.15s;
    ${({theme:e,size:t})=>{const r=Nr(e,t);return x`
        transform: translateX(
          ${Yt(`(${r.height} - ${r.borderGap}) * -1`)}
        );
      `}};
  }

  &:checked {
    background-color: ${({theme:e})=>e.colors.violet[9]};

    &::before {
      transform: translateX(0);
    }
  }
  
  &:disabled {
    background-color: ${({theme:e})=>e.colors.gray[2]};
    &::before {
      background-color: ${({theme:e})=>e.colors.grayViolet[2]};
    }
  }
`,Rd=e=>{switch(e){case"l":return 3;case"s":return 2;case"xs":return 1.5;case"m":default:return 2.5}},Cf=D.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .text-field__required {
    color: ${({theme:e})=>e.colors.red[9]};
  }
  
  .text-field__error-message {
    color: ${({theme:e})=>e.colors.red[9]};
  }
`,Rf=D(At)`
  box-sizing: border-box;
  outline: none;
  border: none;
  resize: none;
  width: 100%;
`,If=D.div`
  min-height: ${({size:e})=>Rd(e)}rem;
  border-radius: 0.25rem;
  border: 1px solid ${({theme:e})=>e.colors.gray[3]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[5]};
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  gap: 0.5rem;

  &:hover {
    border-bottom: 1px solid ${({theme:e})=>e.colors.gray[8]};
  }

  ${({isFocus:e})=>e&&x`
      border-bottom: 2px solid
        ${({theme:t})=>t.colors.violet[9]}!important;
    `}
  
  ${({error:e,theme:t})=>e&&x`
    border-bottom: 2px solid ${t.colors.red[9]}!important;
  `};

  ${({isDisabled:e,theme:t})=>e&&x`
    background: ${t.colors.gray[2]};
    border-bottom: 1px solid ${t.colors.gray[3]}!important;
    textarea {
      background: ${t.colors.gray[2]};
    }
  `};
`,ci=(e,t)=>t in e.colors?e.colors[t][5]:t,Id=(e,t)=>{switch(e){case"top":return x`
        bottom: 100%;
        left: 50%;
        transform-origin: bottom center;
        margin-bottom: 8px;
        transform: translateX(-50%) scale(${t==="entered"?1:.9});
      `;case"bottom":return x`
        top: 100%;
        left: 50%;
        transform-origin: top center;
        margin-top: 8px;
        transform: translateX(-50%) scale(${t==="entered"?1:.9});
      `;case"left":return x`
        top: 50%;
        right: 100%;
        transform-origin: center right;
        margin-right: 8px;
        transform: translateY(-50%) scale(${t==="entered"?1:.9});
      `;case"right":return x`
        top: 50%;
        left: 100%;
        transform-origin: center left;
        margin-left: 8px;
        transform: translateY(-50%) scale(${t==="entered"?1:.9});
      `;case"topLeft":return x`
        bottom: 100%;
        left: 0;
        transform-origin: bottom left;
        margin-bottom: 8px;
      `;case"topRight":return x`
        bottom: 100%;
        right: 0;
        transform-origin: bottom right;
        margin-bottom: 8px;
      `;case"bottomLeft":return x`
        top: 100%;
        left: 0;
        transform-origin: top left;
        margin-top: 8px;
      `;case"bottomRight":return x`
        top: 100%;
        right: 0;
        transform-origin: top right;
        margin-top: 8px;
      `;case"leftTop":return x`
        top: 0;
        right: 100%;
        transform-origin: top right;
        margin-right: 8px;
      `;case"leftBottom":return x`
        bottom: 0;
        right: 100%;
        transform-origin: bottom right;
        margin-right: 8px;
      `;case"rightTop":return x`
        top: 0;
        left: 100%;
        transform-origin: top left;
        margin-left: 8px;
      `;case"rightBottom":return x`
        bottom: 0;
        left: 100%;
        transform-origin: bottom left;
        margin-left: 8px;
      `;default:return x``}},Mf=D.div`
  position: relative;
  display: inline-block;
`,Nf=D.div.withConfig({shouldForwardProp:e=>!["position","color","zIndex","state","width"].includes(e)})`
  position: absolute;
  padding: ${({theme:e})=>e.space.xs};
  border-radius: ${({theme:e})=>e.control.radius};
  background-color: ${({color:e,theme:t})=>ci(t,e)};
  color: ${({theme:e})=>e.colors.gray[9]};
  z-index: ${({zIndex:e})=>e};
  pointer-events: none;
  white-space: nowrap;
  opacity: ${({state:e})=>e==="entered"?1:0};
  transform: ${({state:e})=>e==="entered"?"scale(1)":"scale(0.9)"};
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  width: ${({width:e})=>e?`${e}px`:"max-content"};
  text-wrap: wrap;

  ${({state:e,position:t})=>Id(t,e)};
`,kf=D.div.withConfig({shouldForwardProp:e=>!["position","color"].includes(e)})`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;

  ${({position:e,color:t,theme:r})=>{const n=ci(r,t);switch(e){case"top":return x`
          left: 50%;
          top: 100%;
          margin-left: -5px;
          border-width: 5px 5px 0 5px;
          border-color: ${n} transparent transparent transparent;
        `;case"bottom":return x`
          bottom: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 0 5px 5px 5px;
          border-color: transparent transparent ${n} transparent;
        `;case"left":return x`
          top: 50%;
          left: 100%;
          margin-top: -5px;
          border-width: 5px 0 5px 5px;
          border-color: transparent transparent transparent ${n};
        `;case"right":return x`
          top: 50%;
          right: 100%;
          margin-top: -5px;
          border-width: 5px 5px 5px 0;
          border-color: transparent ${n} transparent transparent;
        `;case"topLeft":return x`
          top: 100%;
          left: 10px;
          border-width: 5px 5px 0 5px;
          border-color: ${n} transparent transparent transparent;
        `;case"topRight":return x`
          top: 100%;
          right: 10px;
          border-width: 5px 5px 0 5px;
          border-color: ${n} transparent transparent transparent;
        `;case"bottomLeft":return x`
          bottom: 100%;
          left: 10px;
          border-width: 0 5px 5px 5px;
          border-color: transparent transparent ${n} transparent;
        `;case"bottomRight":return x`
          bottom: 100%;
          right: 10px;
          border-width: 0 5px 5px 5px;
          border-color: transparent transparent ${n} transparent;
        `;case"leftTop":return x`
          top: 10px;
          left: 100%;
          border-width: 5px 0 5px 5px;
          border-color: transparent transparent transparent ${n};
        `;case"leftBottom":return x`
          bottom: 10px;
          left: 100%;
          border-width: 5px 0 5px 5px;
          border-color: transparent transparent transparent ${n};
        `;case"rightBottom":return x`
          bottom: 10px;
          right: 100%;
          border-width: 5px 5px 5px 0;
          border-color: transparent ${n} transparent transparent;
        `;case"rightTop":return x`
          top: 10px;
          right: 100%;
          border-width: 5px 5px 5px 0;
          border-color: transparent ${n} transparent transparent;
        `;default:return""}}}
`;export{gf as $,Od as A,na as B,gl as C,Oi as D,tf as E,Gr as F,nf as G,rf as H,Tl as I,af as J,lf as K,rn as L,sf as M,Nd as N,Qd as O,Xd as P,Yd as Q,Cd as R,Ki as S,At as T,uf as U,cf as V,li as W,ri as X,Fd as Y,vf as Z,mf as _,nl as a,hf as a0,bf as a1,pf as a2,yf as a3,wf as a4,Sf as a5,xf as a6,Ef as a7,$f as a8,df as a9,ff as aa,Ol as ab,Cf as ac,If as ad,Rf as ae,Mf as af,Nf as ag,kf as ah,_i as b,Kn as c,Vd as d,zd as e,jd as f,kd as g,_d as h,Dd as i,Pd as j,Wd as k,Bd as l,Hd as m,Td as n,Ld as o,Ad as p,bl as q,Kd as r,Ud as s,qd as t,hl as u,Gd as v,Zd as w,Jd as x,of as y,ef as z};
