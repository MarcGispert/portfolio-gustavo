import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'DesignSystem/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    children: 'Get Started',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {};

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const SolidDisabled: Story = {
  args: {
    variant: 'solid',
    disabled: true,
  },
};
