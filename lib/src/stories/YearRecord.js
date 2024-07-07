import { jsx, Fragment } from 'react/jsx-runtime';
import { generateRandomCompactData, generateRandomMonthData } from '../utils/tool.js';
import { MonthRecord } from './MonthRecord.js';

var YearRecord = function (_a) {
    var _b = _a.itemWidth, itemWidth = _b === void 0 ? "10px" : _b, _c = _a.itemHeight, itemHeight = _c === void 0 ? "10px" : _c, _d = _a.itemBorderRadius, itemBorderRadius = _d === void 0 ? "3px" : _d, _e = _a.gridRowGap, gridRowGap = _e === void 0 ? "3px" : _e, _f = _a.gridColumnGap, gridColumnGap = _f === void 0 ? "3px" : _f, _g = _a.year, year = _g === void 0 ? new Date().getFullYear() : _g, data = _a.data, _h = _a.themeColor, themeColor = _h === void 0 ? "#39d353" : _h, _j = _a.tooltipTitileFunc, tooltipTitileFunc = _j === void 0 ? function (_) { return "tooltip title"; } : _j, _k = _a.tooltipTitlePlacement, tooltipTitlePlacement = _k === void 0 ? "top" : _k, _l = _a.compact, compact = _l === void 0 ? false : _l;
    var months = new Array(12).fill(0);
    // 非紧凑模式下的渲染内容, 每个月一个月记录组件
    var uncompactRenderContent = function () {
        return months.map(function (_, i) {
            return (jsx(MonthRecord, { itemHeight: itemHeight, itemWidth: itemWidth, itemBorderRadius: itemBorderRadius, gridColumnGap: gridColumnGap, gridRowGap: gridRowGap, year: year, month: i + 1, themeColor: themeColor, data: generateRandomMonthData(year, i + 1, 0, 100), tooltipTitileFunc: tooltipTitileFunc, tooltipTitlePlacement: tooltipTitlePlacement, compact: compact }, i));
        });
    };
    return (jsx(Fragment, { children: jsx("div", { style: { display: "flex" }, children: compact ?
                jsx(MonthRecord, { compact: compact, itemHeight: itemHeight, itemWidth: itemWidth, itemBorderRadius: itemBorderRadius, gridColumnGap: gridColumnGap, gridRowGap: gridRowGap, year: year, month: 7, themeColor: themeColor, data: (data ? data : generateRandomCompactData(new Date().getFullYear(), 1, 1, 365)), tooltipTitileFunc: tooltipTitileFunc, tooltipTitlePlacement: tooltipTitlePlacement }) :
                uncompactRenderContent() }) }));
};

export { YearRecord };
