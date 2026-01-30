import{j as e}from"./jsx-runtime-u17CrQMm.js";import{H as c}from"./Header-CHQW7V4G.js";import{F as p}from"./Footer-gysdQSmD.js";import{C as m}from"./Container-DcNnWN7V.js";import{P as g}from"./ProjectCard-CA5sfy70.js";import{h as t}from"./hero-bike-DVFJ3dqG.js";import{c as r}from"./Concept-Sketching-BlsnOoco.js";import{e as l,v as n}from"./virtual-clay -CDwIeibp.js";import"./iframe-Yo0xn3hn.js";import"./preload-helper-PPVm8Dsz.js";const u=[{id:1,title:"GAS GAS",category:"Concept Design",image:t,link:"#",size:"large",desktopGridClass:"col-span-2"},{id:2,title:"ITALJET",category:"Engineering",image:r,link:"#",size:"small",desktopGridClass:"col-span-1"},{id:3,title:"GAVARES",category:"Industrial Design",image:l,link:"#",size:"small",desktopGridClass:"col-span-1"},{id:4,title:"OSSA",category:"Production",image:n,link:"#",size:"large",desktopGridClass:"col-span-2"},{id:5,title:"E-RACER",category:"Electric Mobility",image:t,link:"#",size:"small",desktopGridClass:"col-span-1"},{id:6,title:"TORROT Muvi",category:"Urban Mobility",image:r,link:"#",size:"small",desktopGridClass:"col-span-1"},{id:7,title:"TORROT Velocipedo",category:"Innovation",image:l,link:"#",size:"small",desktopGridClass:"col-span-1",hideOnMobile:!0},{id:8,title:"FACOMSA",category:"Engineering",image:n,link:"#",size:"small",desktopGridClass:"col-span-1"},{id:9,title:"GHION",category:"Concept",image:t,link:"#",size:"small",desktopGridClass:"col-span-1"},{id:10,title:"ALPHA BOAR",category:"Performance",image:r,link:"#",size:"small",desktopGridClass:"col-span-1",hideOnMobile:!0}];function d(){return e.jsxs("div",{className:"min-h-screen bg-black",children:[e.jsx(c,{variant:"dark"}),e.jsxs("main",{className:"pt-20",children:[e.jsx("section",{className:"py-24 text-white md:py-24",children:e.jsx(m,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("h1",{className:"font-sans text-[40px] font-normal leading-tight md:text-[65px]",children:"PORTFOLIO"}),e.jsx("p",{className:"max-w-3xl font-sans text-[24px] font-semibold leading-normal text-white/90",children:"Selected projects spanning concept design, engineering, and production."})]})})}),e.jsx("section",{className:"w-full bg-black",children:e.jsx("div",{className:"mx-auto w-full max-w-[1440px]",children:e.jsx("div",{className:"grid auto-rows-[536px] grid-cols-1 gap-0 md:grid-cols-3",children:u.map(s=>e.jsx("div",{className:`
                    ${s.desktopGridClass}
                    ${s.hideOnMobile?"hidden md:block":""}
                    h-full w-full
                  `,children:e.jsx(g,{title:s.title,category:s.category,image:s.image,link:s.link})},s.id))})})})]}),e.jsx(p,{})]})}d.__docgenInfo={description:"",methods:[],displayName:"Portfolio"};const A={title:"Pages/Portfolio",component:d,parameters:{layout:"fullscreen",backgrounds:{default:"dark"}},tags:["autodocs"]},i={},a={parameters:{viewport:{defaultViewport:"desktop"}}},o={parameters:{viewport:{defaultViewport:"mobile1"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source},description:{story:`Portfolio page displaying all projects in an asymmetric grid layout.

Desktop: 3-column grid with large (2-col span) and small (1-col span) cards
Mobile: Single column stack with 8 projects (excludes ALPHA BOAR and TORROT Velocipedo)

All cards have a fixed height of 536px with no gaps between them.`,...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Portfolio page viewed on desktop viewport (1440px)",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Portfolio page viewed on mobile viewport (393px)",...o.parameters?.docs?.description}}};const j=["Default","Desktop","Mobile"];export{i as Default,a as Desktop,o as Mobile,j as __namedExportsOrder,A as default};
