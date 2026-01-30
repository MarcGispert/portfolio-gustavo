import{H as n}from"./Header-CHQW7V4G.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-Yo0xn3hn.js";import"./preload-helper-PPVm8Dsz.js";import"./Container-DcNnWN7V.js";const c={title:"DesignSystem/Header",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"]},a={args:{variant:"dark"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#000000"}]}}},e={args:{variant:"light"},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"}]}}},r={args:{variant:"dark"},parameters:{viewport:{defaultViewport:"mobile1"},backgrounds:{default:"dark",values:[{name:"dark",value:"#000000"}]}}},t={args:{variant:"light"},parameters:{viewport:{defaultViewport:"mobile1"},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"}]}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dark'
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{
        name: 'dark',
        value: '#000000'
      }]
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Dark header (default) on black background",...a.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'light'
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [{
        name: 'light',
        value: '#ffffff'
      }]
    }
  }
}`,...e.parameters?.docs?.source},description:{story:"Light header on white background",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dark'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    backgrounds: {
      default: 'dark',
      values: [{
        name: 'dark',
        value: '#000000'
      }]
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Mobile view - dark",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'light'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    backgrounds: {
      default: 'light',
      values: [{
        name: 'light',
        value: '#ffffff'
      }]
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Mobile view - light",...t.parameters?.docs?.description}}};const u=["Dark","Light","MobileDark","MobileLight"];export{a as Dark,e as Light,r as MobileDark,t as MobileLight,u as __namedExportsOrder,c as default};
