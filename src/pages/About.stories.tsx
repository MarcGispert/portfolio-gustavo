import type { Meta, StoryObj } from '@storybook/react';
import { About } from './About';

const meta = {
  title: 'Pages/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Desktop: Story = { parameters: { viewport: { defaultViewport: 'desktop' } } };
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'mobile1' } } };
