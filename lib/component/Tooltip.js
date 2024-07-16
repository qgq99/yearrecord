import { __assign } from 'tslib';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useRef } from 'react';
import '../stylejs/tooltip.css.js';
import { useFloating, offset, flip, shift, arrow, autoUpdate, useHover, useDismiss, useRole, useInteractions, FloatingArrow } from '@floating-ui/react';

var Tooltip = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Tooltip title" : _b, _c = _a.placement, placement = _c === void 0 ? "top" : _c, children = _a.children;
    var _d = useState(false), isOpen = _d[0], setIsOpen = _d[1];
    var arrowRef = useRef(null);
    var _e = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: placement,
        middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
        whileElementsMounted: autoUpdate
    }), refs = _e.refs, floatingStyles = _e.floatingStyles, context = _e.context;
    var hover = useHover(context, { move: false });
    var focus = useHover(context);
    var dismiss = useDismiss(context);
    var role = useRole(context, {
        role: "tooltip"
    });
    var _f = useInteractions([hover, focus, dismiss, role]), getReferenceProps = _f.getReferenceProps, getFloatingProps = _f.getFloatingProps;
    return (jsxs(Fragment, { children: [jsx("span", __assign({ className: "reference-el-wraper", ref: refs.setReference }, getReferenceProps(), { children: children })), isOpen && (jsxs("div", __assign({ ref: refs.setFloating, style: floatingStyles }, getFloatingProps(), { className: "tooltip", children: [title, jsx(FloatingArrow, { ref: arrowRef, context: context })] })))] }));
};

export { Tooltip };
