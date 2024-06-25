import { DataRecord, Day, Month } from "../stories/MonthRecord";

/**
 * 判断某一年某一月的第一天是周几
 * @param {*} year 
 * @param {*} month 
 * @returns 
 */
const dayOfTheWeek = (year: number, month: number, day: number): number => {
  // const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  /* 输入年份之前的年份的天数贡献 */
  let days = 365 * (year - 1971) + Math.floor((year - 1969) / 4);
  /* 输入年份中，输入月份之前的月份的天数贡献 */
  for (let i = 0; i < month - 1; ++i) {
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
const generateRandomMonthData = (year: number, month: Month, mn: number, mx: number): DataRecord[] => {
  mn = Math.floor(mn);
  mx = Math.floor(mx);
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    days[1] = 29;
  }
  let data = [];
  for (let i = 0; i < days[month - 1]; i++) {
    data.push({
      year,
      month,
      day: i + 1 as Day,
      data: Math.floor(Math.random() * (mx - mn)) + mn
    });
  }
  return data;
}


/**
 * 给定一个指示某种颜色的字符串, 将其转换为rgba的函数调用格式
 * @param {*} colorString 
 * @param {*} opacity 透明度
 * @returns 
 */
function convertToRGBA(colorString: string, opacity: number): string {
  // 如果颜色字符串已经是 rgba 格式，直接返回
  if (colorString.toLowerCase().startsWith("rgba")) {
    return colorString;
  }

  // 创建一个用于解析颜色的虚拟元素
  let colorDiv = document.createElement("div");
  colorDiv.style.color = colorString;
  document.body.appendChild(colorDiv);

  // 获取计算后的颜色值
  let computedColor = window.getComputedStyle(colorDiv).color;

  // 从计算后的颜色值中提取 RGB 分量
  let match = computedColor.match(/\d+/g);
  if (!match) {
    return "";
  }
  let r = match[0];
  let g = match[1];
  let b = match[2];
  // 移除虚拟元素
  document.body.removeChild(colorDiv);

  // 构建 rgba 格式字符串
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * 根据数据数量和第一条数据的日期计算grid需要多少列
 * @param {*} year 
 * @param {*} month 
 * @param {*} day 
 * @param {*} dataCnt 
 */
const calcColumnCnt = (year: number, month: number, day: number, dataCnt: number): number => {
  dataCnt += dayOfTheWeek(year, month, day) - 1;
  return dataCnt % 7 === 0 ? dataCnt / 7 : Math.ceil(dataCnt / 7);
}


/**
 * 随机生成指定数量数据记录
 * @param year 
 * @param month 
 * @param day 
 * @param dataCnt 
 * @returns 
 */
const generateRandomCompactData = (year: number, month: number, day: number, dataCnt: number): DataRecord[] => {
  let curDate = new Date(year, month - 1, day), fakeData = [];
  for (let i = 0; i < dataCnt; i++) {
    fakeData.push({
      year: curDate.getFullYear(),
      month: curDate.getMonth() + 1 as Month,
      day: curDate.getDate() as Day,
      data: Math.floor(Math.random() * (100 - 0)) + 0
    });
    curDate.setDate(curDate.getDate() + 1);
  }
  return fakeData;
}

export {
  dayOfTheWeek,
  generateRandomMonthData,
  convertToRGBA,
  calcColumnCnt,
  generateRandomCompactData
}