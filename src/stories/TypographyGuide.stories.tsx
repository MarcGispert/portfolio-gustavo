import type { Meta, StoryObj } from '@storybook/react';
import { TypographyGuide } from './TypographyGuide';

const meta = {
  title: 'System/Typography', // Esto creará una carpeta "System" en la barra lateral
  component: TypographyGuide,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TypographyGuide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Calibration: Story = {};