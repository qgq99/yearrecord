import styleInject from './css-inject.js';

var css_dxo4 = `.day-record {
  width: var(--itemWidth);
  height: var(--itemHeight);
  border-radius: var(--itemBorderRadius);
  background-color: var(--themeColor);
  opacity: var(--opacity);
  cursor: pointer;
  z-index: -9999;
}`;
styleInject(css_dxo4);

export { css_dxo4 as default };