import "./tooltip.css"
import { useEffect, useRef } from "react";
import { computePosition, flip, shift, offset, arrow } from "@floating-ui/dom";


function Tooltip({ title, placement = "top", children }) {

  const childRef = useRef(null);
  const tooltipRef = useRef(null);
  const arrowRef = useRef(null);

  if (Array.isArray(children)) {
    throw new Error("Tooltip can only have one direct subcomponent");
  }
  const update = () => {
    computePosition(childRef.current.firstChild, tooltipRef.current, {
      placement: placement,
      middleware: [flip(), shift(), offset(8), arrow({ element: arrowRef.current })]
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(tooltipRef.current.style, {
        left: `${x}px`,
        top: `${y}px`
      });
      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]];

      Object.assign(arrowRef.current.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-4px',
      });
    });
  }

  const showTooltip = () => {
    tooltipRef.current.style.display = "block";
    update();
  }

  const hideTooltip = () => {
    tooltipRef.current.style.display = "";
  }


  useEffect(() => {
    if (childRef.current) {
      [
        ['mouseenter', showTooltip],
        ['mouseleave', hideTooltip],
      ].forEach(([event, listener]) => {
        childRef.current.firstChild.addEventListener(event, listener);
      });
    }
  }, []);

  return (
    <>
      <div className="tooltip-container">
        <div ref={childRef}>
          {children}
        </div>
        <div ref={tooltipRef} className="tooltip">
          {title}
          <div ref={arrowRef} className="arrow"></div>
        </div>
      </div>
    </>
  )
}


export default Tooltip;