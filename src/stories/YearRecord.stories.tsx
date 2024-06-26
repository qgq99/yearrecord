import type { Meta, StoryObj } from '@storybook/react';

import { YearRecord } from './YearRecord';
import { DataRecord } from './MonthRecord';

const meta = {
  component: YearRecord,
  parameters: {
    layout: "centered"
  }
} satisfies Meta<typeof YearRecord>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    itemWidth: "10px",
    itemHeight: "10px",
    itemBorderRadius: "3px",
    gridRowGap: "3px",
    gridColumnGap: "3px",
    year: new Date().getFullYear(),
    data: undefined,
    themeColor: "red",
    tooltipTitileFunc: (_: DataRecord) => "tooltip title",
    tooltipTitlePlacement: "top",
    compact: false
  }

};