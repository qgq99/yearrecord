import React, { CSSProperties } from "react";
import { convertPlacementToInset, generateRandomCompactData, generateRandomMonthData } from "../utils/tool";
import { DataRecord, Month, MonthRecord, MonthRecordProps } from "./MonthRecord";
import Legend, { legendProps } from "./Legend";
import "./yearRecord.css"
import { placementType } from "./Tooltip";


/**
 * 该属性应用在包裹Legend组件的div的css属性inset上
 */
export interface LegendContainerInsetType {
  left?: string,
  top?: string,
  bottom?: string,
  right?: string
}

export type YearRecordProps = Partial<Omit<MonthRecordProps, "month" | "data"> & {
  data: DataRecord[][] | DataRecord[] | undefined,
  legendProps: legendProps,
  showLegend: boolean,
  legendPlacement?: placementType,
}>


export const YearRecord: React.FC<YearRecordProps> = ({
  itemWidth = "10px",
  itemHeight = "10px",
  itemBorderRadius = "3px",
  gridRowGap = "3px",
  gridColumnGap = "3px",
  year = new Date().getFullYear(),
  data,
  themeColor = "#39d353",
  tooltipTitlePlacement = "top",
  compact = false,
  legendProps = {},
  showLegend = false,
  legendPlacement = "bottom-end",
  tooltipTitileFunc = _ => "tooltip title",
  onRecordClick = _ => undefined
}: YearRecordProps) => {
  const months = new Array(12).fill(0);

  // 非紧凑模式下的渲染内容, 每个月一个月记录组件

  const uncompactRenderContent = () => {
    return months.map((_, i) => {
      return (
        <MonthRecord
          key={i}
          itemHeight={itemHeight}
          itemWidth={itemWidth}
          itemBorderRadius={itemBorderRadius}
          gridColumnGap={gridColumnGap}
          gridRowGap={gridRowGap}
          year={year}
          month={i + 1 as Month}
          themeColor={themeColor}
          data={generateRandomMonthData(year, i + 1 as Month, 0, 100)}
          tooltipTitileFunc={tooltipTitileFunc}
          tooltipTitlePlacement={tooltipTitlePlacement}
          compact={compact}
          onRecordClick={onRecordClick}
        >
        </MonthRecord>
      )
    });
  };

  return (
    <>
      <div className="yearRecord-container ">
        {
          compact ?
            <MonthRecord
              compact={compact}
              itemHeight={itemHeight}
              itemWidth={itemWidth}
              itemBorderRadius={itemBorderRadius}
              gridColumnGap={gridColumnGap}
              gridRowGap={gridRowGap}
              year={year}
              month={7}
              themeColor={themeColor}
              data={(data ? data : generateRandomCompactData(new Date().getFullYear(), 1, 1, 365)) as DataRecord[]}
              tooltipTitileFunc={tooltipTitileFunc}
              tooltipTitlePlacement={tooltipTitlePlacement}
              onRecordClick={onRecordClick}
            ></MonthRecord> :
            uncompactRenderContent()
        }
        {
          // showLegend为false时, 不渲染图例
          showLegend &&
          <div
            className="legend-component-container"
            style={{ "--inset": convertPlacementToInset(legendPlacement) } as CSSProperties}
          >
            <Legend {...legendProps}></Legend>
          </div>
        }
      </div>
    </>
  )
}