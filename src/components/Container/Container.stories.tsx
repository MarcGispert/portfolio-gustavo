import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="bg-gray-200 p-8 text-black">
        <h2 className="mb-4 text-2xl font-bold">Container Demo</h2>
        <p>This container has a max-width of 1440px and is horizontally centered.</p>
        <p className="mt-2">Padding: 24px on mobile, 48px on desktop.</p>
      </div>
    ),
  },
};

export const OnWhiteBackground: Story = {
  args: {
    children: (
      <div className="py-16">
        <h1 className="mb-4">Heading in Container</h1>
        <p className="text-lg">This demonstrates content within the container on a white background.</p>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div className="bg-white">
        <Story />
      </div>
    ),
  ],
};

export const OnBlackBackground: Story = {
  args: {
    children: (
      <div className="py-16 text-white">
        <h1 className="mb-4">Heading in Container</h1>
        <p className="text-lg">This demonstrates content within the container on a black background.</p>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div className="bg-black">
        <Story />
      </div>
    ),
  ],
};
