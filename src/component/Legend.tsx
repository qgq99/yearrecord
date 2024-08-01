import React, { CSSProperties, useId } from "react";
import "./legend.css"
import "./monthRecord.css"
import { MIN_ITEM_OPACITY } from "../utils/constant";





const orientation2FlexDirection = {
  horizon: "row",
  vertical: "column"
}


/**
 * 图例组件的props定义
 */
export interface legendProps_ {
  /**
   * 色块数量
   */
  cnt: number,
  /**
   * 最小值的描述文本
   */
  minText: string,
  /**
   * 最大值的描述文本
   */
  maxText: string,
  /**
   * 图例排列方向
   */
  orientation: "horizon" | "vertical"
  itemWidth: string,
  itemHeight: string,
  itemBorderRadius: string,
  themeColor: string,
}

export type legendProps = Partial<legendProps_>


const Legend: React.FC<legendProps> = ({
  cnt = 6,
  minText = "Less",
  maxText = "More",
  orientation = "horizon",
  itemWidth = "10px",
  itemHeight = "10px",
  itemBorderRadius = "3px",
  themeColor = "#39d353",
}) => {
  const colerBlocksId = useId();

  return (
    <>
      <div className="legend-container" style={{ "--orientation": orientation2FlexDirection[orientation] } as CSSProperties}>
        <span>{minText}</span>
        {
          new Array(cnt).fill(0).map((_, i) => {
            return <div key={`${colerBlocksId}${i}`} className="day-record" style={{
              "--itemWidth": itemWidth,
              "--itemHeight": itemHeight,
              "--itemBorderRadius": itemBorderRadius,
              "--themeColor": themeColor,
              "--opacity": MIN_ITEM_OPACITY + (i * (1 - MIN_ITEM_OPACITY) / (cnt - 1))
            } as CSSProperties}></div>
          })
        }
        <span>{maxText}</span>
      </div>
    </>
  )
}

export default Legend;