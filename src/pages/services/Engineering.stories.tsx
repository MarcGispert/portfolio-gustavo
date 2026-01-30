import type { Meta, StoryObj } from '@storybook/react';
import { Engineering } from './Engineering';

const meta = {
  title: 'Pages/Services/Engineering',
  component: Engineering,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
} satisfies Meta<typeof Engineering>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Desktop: Story = { parameters: { viewport: { defaultViewport: 'desktop' } } };
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'mobile1' } } };
