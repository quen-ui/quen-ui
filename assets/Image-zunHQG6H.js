import{j as e}from"./index-jR0FLVqU.js";import{b as s}from"./styles-B8Yckata.js";import{I as i}from"./Image-Cj1i1-zl.js";import{u as r}from"./index-BOxoqHcG.js";const h={package:"@quen-ui/components",title:"Image",order:1,group:"components",description:"The Image component provides an enhanced solution for displaying images in your application. It offers robust features for handling loading states, error fallbacks, and interactive previews, ensuring a seamless user experience even when images fail to load or require additional interaction.",import:"import { Image } from '@quen-ui/components';",source:"/packages/components/src/Image/Image.tsx",demo:!1};function t(a){const n={code:"code",div:"div",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h4,{children:"Basic image"}),`
`,e.jsx(n.p,{children:"Renders a simple image with fixed dimensions. Always include an alt attribute for accessibility and SEO."}),`
`,e.jsx(i,{src:"https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1946",alt:"cactus",width:300,height:200}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Image
  src="https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1946"
  alt="cactus"
  width={300}
  height={200}
/>
`})}),`
`,e.jsx(n.h4,{children:"Responsive image"}),`
`,e.jsx(n.p,{children:'Stretches the image to fit the container’s width while maintaining its aspect ratio by setting height="auto". Useful for banners and full-width images.'}),`
`,e.jsx(i,{src:"https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1946",alt:"cactus",width:"100%",height:"auto",className:"responsive-banner"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Image
  src="/banner.jpg"
  alt="Summer sale banner"
  width="100%"
  height="auto"
  className="responsive-banner"
/>
`})}),`
`,e.jsx(n.h4,{children:"Image with placeholder and fallback"}),`
`,e.jsx(n.p,{children:"Shows a custom placeholder (skeleton loader) while the image is loading. If the primary source fails, a fallback image is rendered instead. This is particularly useful for avatars or API-driven images."}),`
`,e.jsx(i,{src:"https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1946",alt:"cactus",fallback:"/default-avatar.jpg",placeholder:e.jsx(n.div,{className:"skeleton-loader",style:{width:120,height:120}}),width:120,height:120}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Image
  src="https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1946"
  alt="cactus"
  fallback="/default-avatar.jpg"
  placeholder={
    <div className="skeleton-loader" style={{ width: 120, height: 120 }} />
  }
  width={120}
  height={120}
/>
`})}),`
`,e.jsx(n.h4,{children:"Preview mode"}),`
`,e.jsx(n.p,{children:"Enables a lightbox-style preview when the image is clicked. Displays a loading spinner while fetching the high-resolution version. Requires integration with a lightbox implementation to handle preview behavior."}),`
`,e.jsx(i,{src:"https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1946",alt:"cactus",width:200,height:150,isPreview:!0,placeholder:e.jsx(s,{size:"s"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Image
  src="https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1946"
  alt="cactus"
  width={200}
  height={150}
  isPreview
  placeholder={<Loader size="s" />}
/>
`})}),`
`,e.jsx(n.h4,{children:"Error handling with state"}),`
`,e.jsx(n.p,{children:"Demonstrates advanced error handling using React state. Logs load errors and swaps to a fallback image when the primary source fails."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const SafeImage = () => {
  const [error, setError] = useState(false);

  return (
    <Image
      src={error ? '' : '/unreliable-source.jpg'}
      alt="Important content"
      fallback="/fallback.jpg"
      onError={() => {
        console.error('Image failed to load');
        setError(true);
      }}
    />
  );
}
`})}),`
`,e.jsx(n.h4,{children:"Lazy loading example"}),`
`,e.jsxs(n.p,{children:["Combines the ",e.jsx(n.code,{children:"placeholder"})," prop with native browser lazy-loading (",e.jsx(n.code,{children:'loading="lazy"'})," via props spread) to improve performance for images below the fold. This reduces initial page load time."]}),`
`,e.jsx(i,{src:"/high-resolution-photo.jpg",alt:"Landscape view",width:400,height:300,placeholder:e.jsx(s,{})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Image
  src="/high-resolution-photo.jpg"
  alt="Landscape view"
  width={400}
  height={300}
  placeholder={<Loader />}
/>
`})}),`
`,e.jsx(n.h4,{children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Always provide meaningful alt text for content images."}),`
`,e.jsx(n.li,{children:'Use empty alt text (alt="") for decorative elements.'}),`
`,e.jsx(n.li,{children:'Avoid redundancy such as "Image of..." in descriptions.'}),`
`,e.jsx(n.li,{children:"Provide captions or descriptive context for complex graphics."}),`
`,e.jsx(n.li,{children:"Ensure color contrast for text placed on top of images."}),`
`,e.jsx(n.li,{children:'Add ARIA roles when necessary (e.g., role="presentation" for decorative images).'}),`
`]}),`
`,e.jsx(n.h4,{children:"Best practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use descriptive alt text for meaningful content images."}),`
`,e.jsxs(n.li,{children:["Leave ",e.jsx(n.code,{children:'alt=""'})," for decorative images to hide them from screen readers."]}),`
`,e.jsx(n.li,{children:"Optimize images with modern formats like WebP, and provide JPEG or PNG fallbacks if needed."}),`
`,e.jsx(n.li,{children:"Compress assets to balance quality and performance (70–85% quality recommended)."}),`
`,e.jsx(n.li,{children:"Leverage CDN for faster global image delivery."}),`
`,e.jsx(n.li,{children:"Apply lazy loading for images below the fold to improve page performance."}),`
`,e.jsxs(n.li,{children:["Test responsiveness by using ",e.jsx(n.code,{children:"%"})," or ",e.jsx(n.code,{children:"auto"})," dimensions where appropriate."]}),`
`]})]})}function g(a={}){const{wrapper:n}={...r(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{g as default,h as frontmatter};
