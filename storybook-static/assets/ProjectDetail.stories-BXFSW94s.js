import{j as e}from"./jsx-runtime-u17CrQMm.js";import{H as d}from"./Header-CHQW7V4G.js";import{F as m}from"./Footer-gysdQSmD.js";import{C as i}from"./Container-DcNnWN7V.js";import{h as c}from"./hero-bike-DVFJ3dqG.js";import{c as h}from"./Concept-Sketching-BlsnOoco.js";import{e as p,v as g}from"./virtual-clay -CDwIeibp.js";import"./iframe-Yo0xn3hn.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"OSSA",tagline:"Where ideas take shape",heroImage:c,mainImage:h,galleryImages:[p,g],paragraphs:["I was the responsible for style in the TR project for all versions but the very first (launched on autumm 2010). I designed all the graphics, all the new plastics and lots of other parts.","I created the style of the OSSA Enduro over the base designed by Xiu RDi. I designed all the plastics and graphics, as well as the muffler, in only three weeks before the EICMA 2011 show.","I designed the Explorer for OSSA alongside with Boris Sánchez. I designed all the plastics, the fuel tank, the seat, the footrests, the passenger holder, the rear brake pedal, the stickers and some other small parts. For the 2014 model I made the restyling and some of the small technical improvements."]};function n({project:t=f}){return e.jsxs("div",{className:"min-h-screen bg-white",children:[e.jsx(d,{variant:"light"}),e.jsxs("main",{className:"pt-20",children:[e.jsxs("section",{className:"relative h-[500px] w-full bg-cover bg-center",style:{backgroundImage:`url(${t.heroImage})`},children:[e.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)"}}),e.jsx("div",{className:"absolute inset-0 flex flex-col justify-end p-12",children:e.jsxs("div",{className:"mx-auto w-full max-w-[1440px]",children:[e.jsx("h1",{className:"mb-[10px] font-sans text-[65px] font-normal leading-[79.235px] text-white",children:t.title}),e.jsx("p",{className:"font-sans text-[24px] font-semibold leading-[29.256px] text-white",children:t.tagline})]})})]}),e.jsx("section",{className:"w-full bg-white py-12",children:e.jsx(i,{children:e.jsxs("a",{href:"#",className:"inline-flex items-center gap-3 font-sans text-[18px] font-normal leading-[21.942px] text-[#0A0A0A] transition-colors hover:text-gray-600",children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",children:e.jsx("path",{d:"M10 12L6 8L10 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"All projects"]})})}),e.jsx("section",{className:"w-full bg-white pb-12",children:e.jsx(i,{children:e.jsxs("div",{className:"flex flex-col gap-0 md:flex-row md:gap-12",children:[e.jsxs("div",{className:"flex w-full flex-col gap-12 md:w-[762px] md:gap-[10px] md:pr-0",children:[e.jsx("div",{className:"h-auto w-full overflow-hidden md:h-[677px]",children:e.jsx("img",{src:t.mainImage,alt:`${t.title} main`,className:"h-full w-full object-cover"})}),e.jsx("div",{className:"flex flex-col gap-12 md:flex-row md:gap-[10px]",children:t.galleryImages.map((o,l)=>e.jsx("div",{className:"h-auto w-full overflow-hidden md:h-[356px] md:w-[356px]",children:e.jsx("img",{src:o,alt:`${t.title} gallery ${l+1}`,className:"h-full w-full object-cover"})},l))})]}),e.jsx("div",{className:"mt-12 w-full md:mt-0 md:w-[678px] md:pl-0",children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("h2",{className:"font-sans text-[58px] font-normal leading-[70.702px] text-black",children:t.title}),e.jsx("div",{className:"flex flex-col gap-6",children:t.paragraphs.map((o,l)=>e.jsx("p",{className:"font-sans text-[18px] font-normal leading-[21.942px] text-black",children:o},l))})]})})]})})})]}),e.jsx(m,{})]})}n.__docgenInfo={description:"",methods:[],displayName:"ProjectDetail",props:{project:{required:!1,tsType:{name:"ProjectDetailData"},description:"",defaultValue:{value:`{
  title: 'OSSA',
  tagline: 'Where ideas take shape',
  heroImage: heroImg,
  mainImage: conceptImg,
  galleryImages: [engineeringImg, virtualClayImg],
  paragraphs: [
    'I was the responsible for style in the TR project for all versions but the very first (launched on autumm 2010). I designed all the graphics, all the new plastics and lots of other parts.',
    'I created the style of the OSSA Enduro over the base designed by Xiu RDi. I designed all the plastics and graphics, as well as the muffler, in only three weeks before the EICMA 2011 show.',
    'I designed the Explorer for OSSA alongside with Boris Sánchez. I designed all the plastics, the fuel tank, the seat, the footrests, the passenger holder, the rear brake pedal, the stickers and some other small parts. For the 2014 model I made the restyling and some of the small technical improvements.',
  ],
}`,computed:!1}}}};const S={title:"Pages/ProjectDetail",component:n,parameters:{layout:"fullscreen",backgrounds:{default:"light"}},tags:["autodocs"]},a={},s={parameters:{viewport:{defaultViewport:"desktop"}}},r={parameters:{viewport:{defaultViewport:"mobile1"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source},description:{story:`Portfolio Detail page for the OSSA project.

Features:
- Full-width hero section with image and gradient overlay (500px height)
- Back link to return to portfolio
- Desktop: 2-column layout (left: image gallery, right: text content)
- Mobile: Stacked layout (images first, then text)
- Image gallery: 1 large image + 2 small square images`,...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`OSSA project detail on desktop viewport (1440px)
Shows 2-column layout with image gallery on left and content on right`,...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...r.parameters?.docs?.source},description:{story:`OSSA project detail on mobile viewport (393px)
Shows stacked layout with images first, then text content`,...r.parameters?.docs?.description}}};const N=["Default","Desktop","Mobile"];export{a as Default,s as Desktop,r as Mobile,N as __namedExportsOrder,S as default};
