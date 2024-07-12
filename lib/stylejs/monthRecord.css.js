import styleInject from './css-inject.js';

var css_hlkm = `.mr-container .day-record {
  width: var(--itemWidth);
  height: var(--itemHeight);
  border-radius: var(--itemBorderRadius);
  background-color: var(--themeColor);
  opacity: var(--opacity);
  cursor: pointer;
  z-index: -9999;
}`;
styleInject(css_hlkm);

export { css_hlkm as default };