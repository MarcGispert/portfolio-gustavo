import type { Meta, StoryObj } from '@storybook/react';
import { VirtualClayClassA } from './VirtualClayClassA';

const meta = {
  title: 'Pages/Services/Virtual Clay & Class A',
  component: VirtualClayClassA,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
} satisfies Meta<typeof VirtualClayClassA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Desktop: Story = { parameters: { viewport: { defaultViewport: 'desktop' } } };
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'mobile1' } } };
