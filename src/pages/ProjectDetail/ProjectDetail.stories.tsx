import type { Meta, StoryObj } from '@storybook/react';
import { ProjectDetail } from './ProjectDetail';

const meta = {
  title: 'Pages/ProjectDetail',
  component: ProjectDetail,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Portfolio Detail page for the OSSA project.
 *
 * Features:
 * - Full-width hero section with image and gradient overlay (500px height)
 * - Back link to return to portfolio
 * - Desktop: 2-column layout (left: image gallery, right: text content)
 * - Mobile: Stacked layout (images first, then text)
 * - Image gallery: 1 large image + 2 small square images
 */
export const Default: Story = {};

/**
 * OSSA project detail on desktop viewport (1440px)
 * Shows 2-column layout with image gallery on left and content on right
 */
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

/**
 * OSSA project detail on mobile viewport (393px)
 * Shows stacked layout with images first, then text content
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
