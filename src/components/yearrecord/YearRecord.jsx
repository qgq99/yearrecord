import { Card, Col, Row } from "antd";
import MonthRecord from "./MonthRecord";
import { dayOfTheWeek, generateRandomMonthData } from "../../utils/tool.js"


function YearRecord({ itemWidth = "15px", itemHeight = "15px", itemBorderRadius = "5px", gridRowGap = "3px", gridColumnGap = "3px", year, data, themeColor = "red", tooltipTitileFunc= _ => "" }) {

  const months = new Array(12).fill(0);

  const mrContainerConfig = {
    itemHeight: "5px",
    itemWidth: "5px",
    itemBorderRadius: "2px",
    gridRowGap: "2px",
    gridColumnGap: "2px"
  }

  return (
    <>

      <div style={{ display: "flex" }}>
        {
          months.map((_, i) => {
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
              >
              </MonthRecord>
            )
          })
        }
      </div>
    </>)
}


export default YearRecord;