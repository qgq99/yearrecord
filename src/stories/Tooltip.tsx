import React, { useRef, useState } from "react"
import "./tooltip.css"
import { autoUpdate, flip, offset, shift, useDismiss, useFloating, useHover, useInteractions, useRole, FloatingArrow, arrow } from "@floating-ui/react";


export type placementType = "top" | "left" | "right" | "bottom" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end";


interface TooltipProps {
  title: String,
  placement:  placementType,
  children: React.ReactElement
}

export const Tooltip = ({ title = "Tooltip title", placement = "top", children }: TooltipProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: placement,

    middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
    whileElementsMounted: autoUpdate
  });

  const hover = useHover(context, { move: false });
  const focus = useHover(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, {
    role: "tooltip"
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);



  return (
    <>
      <span className="reference-el-wraper" ref={refs.setReference} {...getReferenceProps()}>
        {
          children
        }
      </span>
      {
        isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="tooltip"
          >
            {title}
            <FloatingArrow ref={arrowRef} context={context}></FloatingArrow>
          </div>
        )
      }
    </>
  )
}