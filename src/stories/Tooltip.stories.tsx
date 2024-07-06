import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';
// import { Fragment } from 'react/jsx-runtime';

const meta = {
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Tooltip title",
    placement: "top",
    children: <button>hover</button>
  }
};