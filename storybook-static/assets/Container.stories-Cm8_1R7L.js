import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as r}from"./Container-DcNnWN7V.js";const i={title:"Layout/Container",component:r,parameters:{layout:"fullscreen"},tags:["autodocs"]},a={args:{children:e.jsxs("div",{className:"bg-gray-200 p-8 text-black",children:[e.jsx("h2",{className:"mb-4 text-2xl font-bold",children:"Container Demo"}),e.jsx("p",{children:"This container has a max-width of 1440px and is horizontally centered."}),e.jsx("p",{className:"mt-2",children:"Padding: 24px on mobile, 48px on desktop."})]})}},n={args:{children:e.jsxs("div",{className:"py-16",children:[e.jsx("h1",{className:"mb-4",children:"Heading in Container"}),e.jsx("p",{className:"text-lg",children:"This demonstrates content within the container on a white background."})]})},decorators:[t=>e.jsx("div",{className:"bg-white",children:e.jsx(t,{})})]},s={args:{children:e.jsxs("div",{className:"py-16 text-white",children:[e.jsx("h1",{className:"mb-4",children:"Heading in Container"}),e.jsx("p",{className:"text-lg",children:"This demonstrates content within the container on a black background."})]})},decorators:[t=>e.jsx("div",{className:"bg-black",children:e.jsx(t,{})})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="bg-gray-200 p-8 text-black">
        <h2 className="mb-4 text-2xl font-bold">Container Demo</h2>
        <p>This container has a max-width of 1440px and is horizontally centered.</p>
        <p className="mt-2">Padding: 24px on mobile, 48px on desktop.</p>
      </div>
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="py-16">
        <h1 className="mb-4">Heading in Container</h1>
        <p className="text-lg">This demonstrates content within the container on a white background.</p>
      </div>
  },
  decorators: [Story => <div className="bg-white">
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="py-16 text-white">
        <h1 className="mb-4">Heading in Container</h1>
        <p className="text-lg">This demonstrates content within the container on a black background.</p>
      </div>
  },
  decorators: [Story => <div className="bg-black">
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};const d=["Default","OnWhiteBackground","OnBlackBackground"];export{a as Default,s as OnBlackBackground,n as OnWhiteBackground,d as __namedExportsOrder,i as default};
