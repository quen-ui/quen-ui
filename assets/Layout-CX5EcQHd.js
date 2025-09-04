import{d as h,u as p,j as t,L as n,r as x,Q as j,a as L,O as y}from"./index-jR0FLVqU.js";import{L as i}from"./styles-B8Yckata.js";const f="/assets/LogoWhite-DILoh78B.png",$=h(i.Header)`
  background: ${({theme:r})=>r.colors.violet[9]};

  .quen-ui__layout-menu-item {
    color: ${({theme:r})=>r.colors.gray[1]};
    
    &:hover {
      color: ${({theme:r})=>r.colors.gray[9]};
    }
  }
`;function C(r){const l=[...r];return l.sort((a,e)=>"order"in a&&"order"in e?a.order===e.order?a.title.toLowerCase().localeCompare(e.title.toLowerCase()):a.order-e.order:a.title.toLowerCase().localeCompare(e.title.toLowerCase())),l}const k=()=>{const{loaderData:r,location:l,matches:a}=p({select:o=>{var s;return{loaderData:(s=o.matches.at(-1))==null?void 0:s.loaderData,location:o.location,matches:o.matches}}}),{current:e,allPages:d}=r,m=l.pathname!=="/",c=C(d??[]).map(o=>{var s;return{label:t.jsx(n,{to:`${a[1].pathname}/$slug`,params:{slug:o.title},children:o.title}),key:o.title,isActive:o.title===((s=e==null?void 0:e.frontmatter)==null?void 0:s.title)}}),g=x.useMemo(()=>{var o,s,u;return[{label:t.jsx(n,{to:"/guides/$slug",params:{slug:"gettingstarted"},children:"Get started"}),key:"guides",isActive:((o=e.frontmatter)==null?void 0:o.group)==="guides"},{label:t.jsx(n,{to:"/theming/$slug",params:{slug:"introductiontheming"},children:"Theming"}),key:"theming",isActive:((s=e.frontmatter)==null?void 0:s.group)==="theming"},{key:"components",label:t.jsx(n,{to:"/components/$slug",params:{slug:"alert"},children:"Components"}),isActive:((u=e.frontmatter)==null?void 0:u.group)==="components"}]},[]);return t.jsx(j,{theme:L,children:t.jsxs(i,{children:[m&&t.jsx($,{classNameMenuItem:"menu-item",logo:t.jsx(n,{to:"/",children:t.jsx("img",{alt:"logo",src:f,width:50,height:50})}),menuItems:g}),m&&c.length?t.jsx(i.Sidebar,{menuItems:c}):null,t.jsx(i.Content,{children:t.jsx(y,{})})]})})};export{k as L};
