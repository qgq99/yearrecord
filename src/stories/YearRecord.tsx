import { useMemo } from "react";
import { generateRandomCompactData, generateRandomMonthData } from "../utils/tool";
import { DataRecord, Month, MonthRecord, MonthRecordProps } from "./MonthRecord";


// type YearRecordProps = Omit<MonthRecordProps, "month">

interface YearRecordProps extends Omit<MonthRecordProps, "month" | "data"> {
  data: DataRecord[][] | DataRecord[] | undefined
}


export const YearRecord = ({
  itemWidth = "15px",
  itemHeight = "15px",
  itemBorderRadius = "5px",
  gridRowGap = "3px",
  gridColumnGap = "3px",
  year = new Date().getFullYear(),
  data,
  themeColor = "red",
  tooltipTitileFunc = _ => "tooltip title",
  tooltipTitlePlacement = "top",
  compact = false
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
        >
        </MonthRecord>
      )
    });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
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
            ></MonthRecord> :
            uncompactRenderContent()
        }
      </div>
    </>
  )
}