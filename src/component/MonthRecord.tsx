import React, { CSSProperties, useMemo } from "react"
import { generateRandomMonthData, dayOfTheWeek, calcColumnCnt, getMaxAndMinValue } from "../utils/tool"
import "./monthRecord.css"
import { placementType, Tooltip } from "./Tooltip"
import { MIN_ITEM_OPACITY } from "../utils/constant";


export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
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
  compact: boolean,
  onRecordClick: (item: DataRecord) => void
}

export type MonthRecordProps = Partial<MonthRecordProps_>;


export const MonthRecord: React.FC<MonthRecordProps> = ({
  itemWidth = "15px",
  itemHeight = "15px",
  itemBorderRadius = "5px",
  gridRowGap = "3px",
  gridColumnGap = "3px",
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1 as Month,
  data,
  themeColor = "#39d353",
  tooltipTitileFunc = _ => "tooltip title",
  tooltipTitlePlacement = "top",
  compact = false,
  onRecordClick = _ => undefined
}: MonthRecordProps) => {

  if (!data) {
    //若未传入数据, 使用随机生成的假数据
    data = generateRandomMonthData(year, month, 0, 100);
  }
  const week = compact ? dayOfTheWeek(data[0]["year"], data[0]["month"], data[0]["day"]) : dayOfTheWeek(year, month, 1);
  const hiddenList = new Array(week - 1).fill(0);
  const colNeed = calcColumnCnt(year, month, 1, data.length);
  const tailList = new Array(colNeed * 7 - week + 1 - data.length).fill(0); // 结尾剩余几个需要隐藏的，若为7个，则取消最后一列

  const mrContainerStyle = {
    boxSizing: "border-box",
    padding: "5px",
    display: "grid",
    gridTemplateRows: `repeat(7, ${itemHeight})`,
    gridTemplateColumns: `repeat(${colNeed}, ${itemWidth})`,
    rowGap: gridRowGap,
    columnGap: gridColumnGap,
    gridAutoFlow: "column",
    "--itemWidth": itemWidth,
    "--itemHeight": itemHeight
  }
  const [mxData, mnData] = useMemo(() => getMaxAndMinValue(data.map(_ => _.data)), []);

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div className="mr-container" style={mrContainerStyle as CSSProperties}>
          {
            hiddenList.map((_, i) => {
              return (
                <div className="day-record" key={i} style={{
                  "--itemBorderRadius": itemBorderRadius,
                  visibility: "hidden"
                } as CSSProperties}></div>
              )
            })
          }
          {
            data.map((v, i) => {
              return (
                <Tooltip title={tooltipTitileFunc(v)} key={i} placement={tooltipTitlePlacement}>
                  <div onClick={() => onRecordClick(v)} className="day-record" style={{
                    "--itemBorderRadius": itemBorderRadius,
                    "--themeColor": themeColor,
                    "--opacity": (v.data - mnData) / (mxData - mnData) + MIN_ITEM_OPACITY
                  } as CSSProperties}></div>
                </Tooltip>
              )
            })
          }
          {
            tailList.map((_, i) => {
              return (
                <div className="day-record" key={i} style={{
                  "--itemBorderRadius": itemBorderRadius,
                  visibility: "hidden"
                } as CSSProperties}></div>

              )
            })
          }
        </div>
        {
          compact ? <></> : <span>{month}月</span>
        }
      </div>
    </>
  )
}