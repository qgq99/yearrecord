/**
 * 判断某一年某一月的第一天是周几
 * @param {*} year
 * @param {*} month
 * @returns
 */
var dayOfTheWeek = function (year, month, day) {
    // const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    /* 输入年份之前的年份的天数贡献 */
    var days = 365 * (year - 1971) + Math.floor((year - 1969) / 4);
    /* 输入年份中，输入月份之前的月份的天数贡献 */
    for (var i = 0; i < month - 1; ++i) {
        days += monthDays[i];
    }
    if ((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) && month >= 3) {
        days += 1;
    }
    /* 输入月份中的天数贡献 */
    days += day;
    return ((days + 3) % 7) + 1;
};
/**
 *
 * @param {*} year
 * @param {*} month
 * @param {*} mn
 * @param {*} mx
 */
var generateRandomMonthData = function (year, month, mn, mx) {
    mn = Math.floor(mn);
    mx = Math.floor(mx);
    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        days[1] = 29;
    }
    var data = [];
    for (var i = 0; i < days[month - 1]; i++) {
        data.push({
            year: year,
            month: month,
            day: i + 1,
            data: Math.floor(Math.random() * (mx - mn)) + mn
        });
    }
    return data;
};
/**
 * 根据数据数量和第一条数据的日期计算grid需要多少列
 * @param {*} year
 * @param {*} month
 * @param {*} day
 * @param {*} dataCnt
 */
var calcColumnCnt = function (year, month, day, dataCnt) {
    dataCnt += dayOfTheWeek(year, month, day) - 1;
    return dataCnt % 7 === 0 ? dataCnt / 7 : Math.ceil(dataCnt / 7);
};
/**
 * 随机生成指定数量数据记录
 * @param year
 * @param month
 * @param day
 * @param dataCnt
 * @returns
 */
var generateRandomCompactData = function (year, month, day, dataCnt) {
    var curDate = new Date(year, month - 1, day), fakeData = [];
    for (var i = 0; i < dataCnt; i++) {
        fakeData.push({
            year: curDate.getFullYear(),
            month: curDate.getMonth() + 1,
            day: curDate.getDate(),
            data: Math.floor(Math.random() * (100 - 0)) + 0
        });
        curDate.setDate(curDate.getDate() + 1);
    }
    return fakeData;
};
var getMaxAndMinValue = function (nums) {
    var mx = Number.NEGATIVE_INFINITY, mn = Number.POSITIVE_INFINITY;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var i = nums_1[_i];
        mx = Math.max(mx, i);
        mn = Math.min(mn, i);
    }
    return [mx, mn];
};

export { calcColumnCnt, dayOfTheWeek, generateRandomCompactData, generateRandomMonthData, getMaxAndMinValue };
