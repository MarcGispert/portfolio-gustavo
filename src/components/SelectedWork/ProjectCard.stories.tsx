import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from './ProjectCard';
import heroImg from '../../assets/hero-bike.jpg';
import conceptImg from '../../assets/Concept-Sketching.png';

const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    category: { control: 'text' },
    image: { control: 'text' },
    link: { control: 'text' },
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Sport Naked 450',
    category: 'Industrial Design',
    image: heroImg,
    link: '#',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CafeRacer: Story = {
  args: {
    title: 'Cafe Racer 750',
    category: 'Concept Design',
    image: conceptImg,
    link: '#',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    title: 'Urban Commuter',
    category: 'Engineering',
    image: heroImg,
    link: '#',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Tall: Story = {
  args: {
    title: 'Racing Prototype',
    category: 'Virtual Clay',
    image: conceptImg,
    link: '#',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Wide: Story = {
  args: {
    title: 'Enduro 650',
    category: 'Class A Surfacing',
    image: heroImg,
    link: '#',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '800px', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
