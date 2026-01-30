import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'DesignSystem/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Dark header (default) on black background */
export const Dark: Story = {
  args: {
    variant: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
  },
};

/** Light header on white background */
export const Light: Story = {
  args: {
    variant: 'light',
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#ffffff' }],
    },
  },
};

/** Mobile view - dark */
export const MobileDark: Story = {
  args: {
    variant: 'dark',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
  },
};

/** Mobile view - light */
export const MobileLight: Story = {
  args: {
    variant: 'light',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#ffffff' }],
    },
  },
};
