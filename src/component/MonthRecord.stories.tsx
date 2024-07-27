import type { Meta, StoryObj } from '@storybook/react';
// import { generateRandomMonthData } from '../utils/tool';

import { MonthRecord, MonthRecordProps } from './MonthRecord';

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