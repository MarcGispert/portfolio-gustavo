import type { Meta, StoryObj } from '@storybook/react';
import { Services } from './Services';

const meta = {
  title: 'DesignSystem/Services',
  component: Services,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Services>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
