import MonthRecord from "./MonthRecord";
import { generateRandomMonthData, generateRandomCompactData } from "../../utils/tool.js"


function YearRecord({
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
}) {

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
          month={i + 1}
          themeColor={themeColor}
          data={generateRandomMonthData(year, i + 1, 0, 100)}
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
              data={data ? data : generateRandomCompactData(new Date().getFullYear(), 1, 1, 365)}
              tooltipTitileFunc={tooltipTitileFunc}
              tooltipTitlePlacement={tooltipTitlePlacement}
            ></MonthRecord> :
            uncompactRenderContent()
        }
      </div>
    </>)
}


export default YearRecord;