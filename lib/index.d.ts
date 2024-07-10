

export type placementType = "top" | "left" | "right" | "bottom" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end";
interface TooltipProps {
  title?: String,
  placement?: placementType,
  children?: React.ReactElement
}



export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;
export interface DataRecord {
  year: number,
  month: Month,
  day: Day,
  data: number
}
export interface MonthRecordProps_ {
  itemWidth: string,
  itemHeight: string,
  itemBorderRadius: string,
  gridRowGap: string,
  gridColumnGap: string,
  year: number,
  month: Month,
  data: DataRecord[] | undefined,
  themeColor: string,
  tooltipTitileFunc: (item: DataRecord) => string,
  tooltipTitlePlacement: placementType,
  compact: boolean
}
type MonthRecordProps = Partial<MonthRecordProps_>;


export type YearRecordProps = Partial<Omit<MonthRecordProps, "month" | "data"> & {
  data: DataRecord[][] | DataRecord[] | undefined
}>


declare const Tooltip: React.FC<TooltipProps>;

declare const MonthRecord: React.FC<MonthRecordProps>;

declare const YearRecord: React.FC<YearRecordProps>;

export {
  YearRecord as default,
  Tooltip,
  MonthRecord
}