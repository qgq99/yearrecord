import type { Meta, StoryObj } from '@storybook/react';
import { generateRandomMonthData } from '../utils/tool';

import { Month, MonthRecord } from './MonthRecord';

const meta = {
  component: MonthRecord,
  parameters:{
    layout: "centered"
  }
} satisfies Meta<typeof MonthRecord>;

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
    month: new Date().getMonth() + 1 as Month,
    data: undefined,
    themeColor: "red",
    tooltipTitileFunc: _ => `tooltip title, ${_.data}`,
    tooltipTitlePlacement: "top",
    compact: false
  }
};