import type { Meta, StoryObj } from '@storybook/react';
import { ConceptSketching } from './ConceptSketching';

const meta = {
  title: 'Pages/Services/Concept & Sketching',
  component: ConceptSketching,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ConceptSketching>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Concept & Sketching service page.
 *
 * Features:
 * - Full-width hero section with image and gradient overlay (500px height)
 * - Intro split block (image + text on gray background)
 * - Key capabilities band (5 capabilities with icons on black background)
 * - Selected projects section (9 projects with alternating image/text layout)
 * - Fully responsive: desktop layout matches Figma, mobile stacks vertically
 */
export const Default: Story = {};

/**
 * Concept & Sketching page on desktop viewport (1440px)
 * Shows 2-column layouts and alternating project patterns
 */
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

/**
 * Concept & Sketching page on mobile viewport
 * Shows stacked layouts with images first
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
