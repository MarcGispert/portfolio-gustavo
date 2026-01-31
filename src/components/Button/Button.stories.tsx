import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ArrowRightCircle } from 'lucide-react';
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

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: ArrowRightCircle,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const OutlineWithIcon: Story = {
  args: {
    variant: 'outline',
    icon: ArrowRightCircle,
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const SolidWithIcon: Story = {
  args: {
    variant: 'solid',
    icon: ArrowRightCircle,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledWithIcon: Story = {
  args: {
    disabled: true,
    icon: ArrowRightCircle,
  },
};

// Primary Borderless CTA (with icon) - Used for main CTAs
export const PrimaryCTA: Story = {
  args: {
    icon: ArrowRightCircle,
    children: 'View All Projects',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary CTA button with no border, transparent background, and icon. Hover and focus states included.',
      },
    },
  },
};

export const PrimaryCTADisabled: Story = {
  args: {
    icon: ArrowRightCircle,
    children: 'View All Projects',
    disabled: true,
  },
};

// Mobile viewport test
export const MobileView: Story = {
  args: {
    icon: ArrowRightCircle,
    children: 'Learn More',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Button on mobile viewport (320px) - ensures text does not clip with responsive padding and font size.',
      },
    },
  },
};
