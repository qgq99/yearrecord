// import { Tooltip } from "antd";
import "./monthRecord.css";
import { dayOfTheWeek, convertToRGBA, calcColumnCnt } from "../../utils/tool";
import Tooltip from "../tooltip/ToolTip";

function MonthRecord({
  itemWidth = "15px",
  itemHeight = "15px",
  itemBorderRadius = "5px",
  gridRowGap = "3px",
  gridColumnGap = "3px",
  year,
  month,
  data,
  themeColor = "red",
  tooltipTitileFunc = _ => "tooltip title",
  tooltipTitlePlacement = "top",
  compact = false
}) {
  const week = compact ? dayOfTheWeek(data[0]["year"], data[0]["month"], data[0]["day"]) : dayOfTheWeek(year, month, 1);
  const hiddenList = new Array(week - 1).fill(0);
  const colNeed = calcColumnCnt(year, month, 1, data.length);
  console.log(month, colNeed);
  const tailList = new Array(colNeed * 7 - week + 1 - data.length).fill(0); // 结尾剩余几个需要隐藏的，若为7个，则取消最后一列
  console.log(data);
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
  let mxData = Math.max(...(data.map(item => item.data)));
  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div className="mr-container" style={mrContainerStyle}>
          {
            hiddenList.map((_, i) => {
              return (
                <div className="day-record" key={i} style={{
                  "--itemBorderRadius": itemBorderRadius,
                  visibility: "hidden"
                }}></div>
              )
            })
          }
          {
            data.map((v, i) => {
              return (
                <Tooltip title={tooltipTitileFunc(v)} key={i} placement={tooltipTitlePlacement}>
                  <div className="day-record" style={{
                    "--itemBorderRadius": itemBorderRadius,
                    "--themeColor": convertToRGBA(themeColor, v.data / mxData + 0.05),
                  }}></div>
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
                }}></div>

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


export default MonthRecord;