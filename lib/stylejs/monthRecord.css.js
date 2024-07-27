import styleInject from './css-inject.js';

var css_2ybt = `.mr-container .day-record {
  width: var(--itemWidth);
  height: var(--itemHeight);
  border-radius: var(--itemBorderRadius);
  background-color: var(--themeColor);
  opacity: var(--opacity);
  cursor: pointer;
  z-index: -9999;
}`;
styleInject(css_2ybt);

export { css_2ybt as default };