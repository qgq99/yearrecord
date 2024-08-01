import type { Meta, StoryObj } from '@storybook/react';

import Legend from './Legend';

const meta = {
  component: Legend,
  parameters:{
    layout: "centered"
  }
} satisfies Meta<typeof Legend>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  }
};