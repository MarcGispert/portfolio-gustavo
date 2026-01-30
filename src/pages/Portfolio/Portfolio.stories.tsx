import type { Meta, StoryObj } from '@storybook/react';
import { Portfolio } from './Portfolio';

const meta = {
  title: 'Pages/Portfolio',
  component: Portfolio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Portfolio>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Portfolio page displaying all projects in an asymmetric grid layout.
 *
 * Desktop: 3-column grid with large (2-col span) and small (1-col span) cards
 * Mobile: Single column stack with 8 projects (excludes ALPHA BOAR and TORROT Velocipedo)
 *
 * All cards have a fixed height of 536px with no gaps between them.
 */
export const Default: Story = {};

/**
 * Portfolio page viewed on desktop viewport (1440px)
 */
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

/**
 * Portfolio page viewed on mobile viewport (393px)
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
