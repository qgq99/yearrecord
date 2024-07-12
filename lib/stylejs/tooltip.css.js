import styleInject from './css-inject.js';

var css_8p4g = `.reference-el-wraper > *{
  cursor: pointer;
}

.tooltip {
  /* display: none; */
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
  background: #222;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 4px;
  font-size: 90%;
  max-width: 300px;
  z-index: 9999;
}

.arrow {
  position: absolute;
  background: #222;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  z-index: 9999;

}`;
styleInject(css_8p4g);

export { css_8p4g as default };