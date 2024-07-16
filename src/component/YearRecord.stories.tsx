import type { Meta, StoryObj } from '@storybook/react';

import { YearRecord, YearRecordProps } from './YearRecord';
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
    themeColor: "#39d353",
    tooltipTitileFunc: (_: DataRecord) => "tooltip title",
    tooltipTitlePlacement: "top",
    compact: false
  }

};

export const Basic: Story = {
  args: {
    tooltipTitileFunc: (item: DataRecord) => `${item.year}年${item.month}月${item.day}日, ${item.data}次浏览`,
  } as YearRecordProps

};

export const Compact: Story = {
  args: {
    itemWidth: "13px",
    itemHeight: "13px",
    compact: true,
    tooltipTitileFunc: (item: DataRecord) => `${item.year}年${item.month}月${item.day}日, ${item.data}次浏览`,
  } as YearRecordProps

};

export const Props: Story = {
  args: {

  } as YearRecordProps

};