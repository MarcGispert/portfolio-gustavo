import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta = {
  title: 'DesignSystem/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#ffffff' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
