import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { generateRandomMonthData, dayOfTheWeek, calcColumnCnt, getMaxAndMinValue } from '../utils/tool.js';
import '../stylejs/monthRecord.css.js';
import { Tooltip } from './Tooltip.js';
import { MIN_ITEM_OPACITY } from '../utils/constant.js';

var MonthRecord = function (_a) {
    var _b = _a.itemWidth, itemWidth = _b === void 0 ? "15px" : _b, _c = _a.itemHeight, itemHeight = _c === void 0 ? "15px" : _c, _d = _a.itemBorderRadius, itemBorderRadius = _d === void 0 ? "5px" : _d, _e = _a.gridRowGap, gridRowGap = _e === void 0 ? "3px" : _e, _f = _a.gridColumnGap, gridColumnGap = _f === void 0 ? "3px" : _f, _g = _a.year, year = _g === void 0 ? new Date().getFullYear() : _g, _h = _a.month, month = _h === void 0 ? new Date().getMonth() + 1 : _h, data = _a.data, _j = _a.themeColor, themeColor = _j === void 0 ? "#39d353" : _j, _k = _a.tooltipTitileFunc, tooltipTitileFunc = _k === void 0 ? function (_) { return "tooltip title"; } : _k, _l = _a.tooltipTitlePlacement, tooltipTitlePlacement = _l === void 0 ? "top" : _l, _m = _a.compact, compact = _m === void 0 ? false : _m, _o = _a.onRecordClick, onRecordClick = _o === void 0 ? function (_) { } : _o;
    if (!data) {
        //若未传入数据, 使用随机生成的假数据
        data = generateRandomMonthData(year, month, 0, 100);
    }
    var week = compact ? dayOfTheWeek(data[0]["year"], data[0]["month"], data[0]["day"]) : dayOfTheWeek(year, month, 1);
    var hiddenList = new Array(week - 1).fill(0);
    var colNeed = calcColumnCnt(year, month, 1, data.length);
    var tailList = new Array(colNeed * 7 - week + 1 - data.length).fill(0); // 结尾剩余几个需要隐藏的，若为7个，则取消最后一列
    var mrContainerStyle = {
        boxSizing: "border-box",
        padding: "5px",
        display: "grid",
        gridTemplateRows: "repeat(7, ".concat(itemHeight, ")"),
        gridTemplateColumns: "repeat(".concat(colNeed, ", ").concat(itemWidth, ")"),
        rowGap: gridRowGap,
        columnGap: gridColumnGap,
        gridAutoFlow: "column",
        "--itemWidth": itemWidth,
        "--itemHeight": itemHeight
    };
    var _p = useMemo(function () { return getMaxAndMinValue(data.map(function (_) { return _.data; })); }, []), mxData = _p[0], mnData = _p[1];
    return (jsx(Fragment, { children: jsxs("div", { style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }, children: [jsxs("div", { className: "mr-container", style: mrContainerStyle, children: [hiddenList.map(function (_, i) {
                            return (jsx("div", { className: "day-record", style: {
                                    "--itemBorderRadius": itemBorderRadius,
                                    visibility: "hidden"
                                } }, i));
                        }), data.map(function (v, i) {
                            return (jsx(Tooltip, { title: tooltipTitileFunc(v), placement: tooltipTitlePlacement, children: jsx("div", { onClick: function () { return onRecordClick(v); }, className: "day-record", style: {
                                        "--itemBorderRadius": itemBorderRadius,
                                        "--themeColor": themeColor,
                                        "--opacity": (v.data - mnData) / (mxData - mnData) + MIN_ITEM_OPACITY
                                    } }) }, i));
                        }), tailList.map(function (_, i) {
                            return (jsx("div", { className: "day-record", style: {
                                    "--itemBorderRadius": itemBorderRadius,
                                    visibility: "hidden"
                                } }, i));
                        })] }), compact ? jsx(Fragment, {}) : jsxs("span", { children: [month, "\u6708"] })] }) }));
};

export { MonthRecord };
