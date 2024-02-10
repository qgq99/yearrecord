// import { Tooltip } from "antd";
import "./monthRecord.css";
import { dayOfTheWeek, convertToRGBA } from "../../utils/tool";
import Tooltip from "../tooltip/ToolTip";

function MonthRecord({ itemWidth = "15px", itemHeight = "15px", itemBorderRadius = "5px", gridRowGap = "3px", gridColumnGap = "3px", year, month, data, themeColor = "red", tooltipTitileFunc = _ => "" }) {
  const week = dayOfTheWeek(year, month);
  console.log(week);
  const hiddenList = new Array(week - 1).fill(0);
  const remaining = 43 - week - data.length;  // 结尾剩余几个需要隐藏的，若为7个，则取消最后一列
  const tailList = new Array(remaining < 7 ? remaining : 0).fill(0);
  console.log(data);
  const mrContainerStyle = {
    boxSizing: "border-box",
    padding: "5px",
    display: "grid",
    gridTemplateRows: `repeat(7, ${itemHeight})`,
    gridTemplateColumns: `repeat(${remaining < 7 ? 6 : 5}, ${itemWidth})`,
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
                <Tooltip title={tooltipTitileFunc(v)} key={i} placement="bottom">
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
        <span>{month}月</span>
      </div>

    </>
  )
}


export default MonthRecord;