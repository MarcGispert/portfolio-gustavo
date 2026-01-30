import type { Meta, StoryObj } from '@storybook/react';
import { SelectedWork } from './SelectedWork';

const meta = {
  title: 'Components/SelectedWork',
  component: SelectedWork,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedWork>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
