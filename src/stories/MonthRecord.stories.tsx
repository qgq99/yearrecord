import type { Meta, StoryObj } from '@storybook/react';
import { generateRandomMonthData } from '../utils/tool';

import { Month, MonthRecord, MonthRecordProps } from './MonthRecord';

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
    // itemWidth: "10px",
    // itemHeight: "10px",
    // itemBorderRadius: "3px",
    // gridRowGap: "3px",
    // gridColumnGap: "3px",
    // year: new Date().getFullYear(),
    // month: new Date().getMonth() + 1 as Month,
    // data: undefined,
    // themeColor: "red",
    // tooltipTitileFunc: _ => `tooltip title, ${_.data}`,
    // tooltipTitlePlacement: "top",
    // compact: false
  } as MonthRecordProps
};

export const SpecificMonth: Story = {
  args: {
    year: 2024,
    month: 9
  } as MonthRecordProps
};

export const SpecificGeoInfo: Story = {
  args: {
    itemWidth: "20px",
    itemHeight: "15px",
    itemBorderRadius: "5px",
    gridRowGap: "1px",
    gridColumnGap: "5px",
    themeColor: "#029cfd"
  } as MonthRecordProps
};

export const SpecificTooltipTitlePlacement: Story = {
  args: {
    tooltipTitlePlacement: "right"
  } as MonthRecordProps
};

export const CustomData: Story = {
  args: {
    data: [
      {
        year: 2024,
        month: 6,
        day: 1,
        data: 10
      },
      {
        year: 2024,
        month: 6,
        day: 2,
        data: 20
      },
      {
        year: 2024,
        month: 3,
        day: 5,
        data: 25
      }
    ]
  } as MonthRecordProps
};

export const SpecificTooltipTitle: Story = {
  args: {
    tooltipTitileFunc: item => `${item.year}年${item.month}月${item.day}日, 数据值: ${item.data}`
  } as MonthRecordProps
};

export const SpecificPrps: Story = {
  args: {

  } as MonthRecordProps
};