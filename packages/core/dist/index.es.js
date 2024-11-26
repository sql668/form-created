import { globalThisPolyfill, getKeyCodeFromEvent, EventDriver, isPlainObj, each, isFn, uid, cancelIdle, requestIdle, isHTMLElement, isPointInRect, isRectInRect, Rect, calcBoundingRect, calcElementLayout, isStr, isArr, calcOffsetOfSnapLineSegmentToEdge, calcRectOfAxisLineSegment, calcExtendsLineSegmentOfRect, LineSegment, calcDistanceOfSnapLineToEdges, isValidNumber, calcElementTranslate, calcEdgeLinesOfRect, isEqualRect, calcSpaceBlockOfRect, isLineSegment, Point, calcClosestEdges, calcCombineSnapLineSegment, isNearAfter, calcDistancePointToEdge, calcDistanceOfPointToRect, KeyCode, Event, calcRectByStartEndPoint, isCrossRectInRect, calcAutoScrollBasicInfo, scrollAnimate } from '@form-created/shared';
export { KeyCode } from '@form-created/shared';
import { observable, define, action, toJS, untracked } from '@formily/reactive';
import { ResizeObserver } from '@juggle/resize-observer';
import { Path } from '@formily/path';
import { createForm } from '@formily/core';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var AbstractCursorEvent = /** @class */ (function () {
    function AbstractCursorEvent(data) {
        this.data = data || {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            target: null,
            view: globalThisPolyfill,
        };
        this.transformCoordinates();
    }
    AbstractCursorEvent.prototype.transformCoordinates = function () {
        var _a;
        var frameElement = (((_a = this.data) === null || _a === void 0 ? void 0 : _a.view) || {}).frameElement;
        if (frameElement && this.data.view !== globalThisPolyfill) {
            var frameRect = frameElement.getBoundingClientRect();
            var scale = frameRect.width / frameElement['offsetWidth'];
            this.data.topClientX = this.data.clientX * scale + frameRect.x;
            this.data.topClientY = this.data.clientY * scale + frameRect.y;
            this.data.topPageX =
                this.data.pageX + frameRect.x - this.data.view.scrollX;
            this.data.topPageY =
                this.data.pageY + frameRect.y - this.data.view.scrollY;
            var topElement = document.elementFromPoint(this.data.topPageX, this.data.topClientY);
            if (topElement !== frameElement) {
                this.data.target = topElement;
            }
        }
        else {
            this.data.topClientX = this.data.clientX;
            this.data.topClientY = this.data.clientY;
            this.data.topPageX = this.data.pageX;
            this.data.topPageY = this.data.pageY;
        }
    };
    return AbstractCursorEvent;
}());

var DragMoveEvent = /** @class */ (function (_super) {
    __extends(DragMoveEvent, _super);
    function DragMoveEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'drag:move';
        return _this;
    }
    return DragMoveEvent;
}(AbstractCursorEvent));

var DragStartEvent = /** @class */ (function (_super) {
    __extends(DragStartEvent, _super);
    function DragStartEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'drag:start';
        return _this;
    }
    return DragStartEvent;
}(AbstractCursorEvent));

var DragStopEvent = /** @class */ (function (_super) {
    __extends(DragStopEvent, _super);
    function DragStopEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'drag:stop';
        return _this;
    }
    return DragStopEvent;
}(AbstractCursorEvent));

var MouseClickEvent = /** @class */ (function (_super) {
    __extends(MouseClickEvent, _super);
    function MouseClickEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'mouse:click';
        return _this;
    }
    return MouseClickEvent;
}(AbstractCursorEvent));
var MouseDoubleClickEvent = /** @class */ (function (_super) {
    __extends(MouseDoubleClickEvent, _super);
    function MouseDoubleClickEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'mouse:dblclick';
        return _this;
    }
    return MouseDoubleClickEvent;
}(AbstractCursorEvent));

var MouseMoveEvent = /** @class */ (function (_super) {
    __extends(MouseMoveEvent, _super);
    function MouseMoveEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'mouse:move';
        return _this;
    }
    return MouseMoveEvent;
}(AbstractCursorEvent));

var AbstractKeyboardEvent = /** @class */ (function () {
    function AbstractKeyboardEvent(e) {
        this.data = getKeyCodeFromEvent(e);
        this.originEvent = e;
    }
    Object.defineProperty(AbstractKeyboardEvent.prototype, "eventType", {
        get: function () {
            return this.originEvent.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractKeyboardEvent.prototype, "ctrlKey", {
        get: function () {
            return this.originEvent.ctrlKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractKeyboardEvent.prototype, "shiftKey", {
        get: function () {
            return this.originEvent.shiftKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractKeyboardEvent.prototype, "metaKey", {
        get: function () {
            return this.originEvent.metaKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractKeyboardEvent.prototype, "altkey", {
        get: function () {
            return this.originEvent.altKey;
        },
        enumerable: false,
        configurable: true
    });
    AbstractKeyboardEvent.prototype.preventDefault = function () {
        if (this.originEvent.preventDefault) {
            this.originEvent.preventDefault();
        }
        else {
            this.originEvent.returnValue = false;
        }
    };
    AbstractKeyboardEvent.prototype.stopPropagation = function () {
        var _a;
        if ((_a = this.originEvent) === null || _a === void 0 ? void 0 : _a.stopPropagation) {
            this.originEvent.stopPropagation();
        }
        else {
            this.originEvent.cancelBubble = true;
        }
    };
    return AbstractKeyboardEvent;
}());

var KeyDownEvent = /** @class */ (function (_super) {
    __extends(KeyDownEvent, _super);
    function KeyDownEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'key:down';
        return _this;
    }
    return KeyDownEvent;
}(AbstractKeyboardEvent));

var KeyUpEvent = /** @class */ (function (_super) {
    __extends(KeyUpEvent, _super);
    function KeyUpEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'key:up';
        return _this;
    }
    return KeyUpEvent;
}(AbstractKeyboardEvent));

var AbstractMutationNodeEvent = /** @class */ (function () {
    function AbstractMutationNodeEvent(data) {
        this.data = data;
    }
    return AbstractMutationNodeEvent;
}());

var DragNodeEvent = /** @class */ (function (_super) {
    __extends(DragNodeEvent, _super);
    function DragNodeEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'drag:node';
        return _this;
    }
    return DragNodeEvent;
}(AbstractMutationNodeEvent));

var DropNodeEvent = /** @class */ (function (_super) {
    __extends(DropNodeEvent, _super);
    function DropNodeEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'drop:node';
        return _this;
    }
    return DropNodeEvent;
}(AbstractMutationNodeEvent));

var HoverNodeEvent = /** @class */ (function (_super) {
    __extends(HoverNodeEvent, _super);
    function HoverNodeEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'hover:node';
        return _this;
    }
    return HoverNodeEvent;
}(AbstractMutationNodeEvent));

var InsertAfterEvent = /** @class */ (function (_super) {
    __extends(InsertAfterEvent, _super);
    function InsertAfterEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'insert:after';
        return _this;
    }
    return InsertAfterEvent;
}(AbstractMutationNodeEvent));

var InsertBeforeEvent = /** @class */ (function (_super) {
    __extends(InsertBeforeEvent, _super);
    function InsertBeforeEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'insert:before';
        return _this;
    }
    return InsertBeforeEvent;
}(AbstractMutationNodeEvent));

var InsertChildrenEvent = /** @class */ (function (_super) {
    __extends(InsertChildrenEvent, _super);
    function InsertChildrenEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'insert:children';
        return _this;
    }
    return InsertChildrenEvent;
}(AbstractMutationNodeEvent));

var PrependNodeEvent = /** @class */ (function (_super) {
    __extends(PrependNodeEvent, _super);
    function PrependNodeEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'prepend:node';
        return _this;
    }
    return PrependNodeEvent;
}(AbstractMutationNodeEvent));

var RemoveNodeEvent = /** @class */ (function (_super) {
    __extends(RemoveNodeEvent, _super);
    function RemoveNodeEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'remove:node';
        return _this;
    }
    return RemoveNodeEvent;
}(AbstractMutationNodeEvent));

var SelectNodeEvent = /** @class */ (function (_super) {
    __extends(SelectNodeEvent, _super);
    function SelectNodeEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'select:node';
        return _this;
    }
    return SelectNodeEvent;
}(AbstractMutationNodeEvent));

var UnSelectNodeEvent = /** @class */ (function (_super) {
    __extends(UnSelectNodeEvent, _super);
    function UnSelectNodeEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'unselect:node';
        return _this;
    }
    return UnSelectNodeEvent;
}(AbstractMutationNodeEvent));

var UpdateChildrenEvent = /** @class */ (function (_super) {
    __extends(UpdateChildrenEvent, _super);
    function UpdateChildrenEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'update:children';
        return _this;
    }
    return UpdateChildrenEvent;
}(AbstractMutationNodeEvent));

var UpdateNodePropsEvent = /** @class */ (function (_super) {
    __extends(UpdateNodePropsEvent, _super);
    function UpdateNodePropsEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'update:node:props';
        return _this;
    }
    return UpdateNodePropsEvent;
}(AbstractMutationNodeEvent));

var WrapNodeEvent = /** @class */ (function (_super) {
    __extends(WrapNodeEvent, _super);
    function WrapNodeEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'wrap:node';
        return _this;
    }
    return WrapNodeEvent;
}(AbstractMutationNodeEvent));

var CloneNodeEvent = /** @class */ (function (_super) {
    __extends(CloneNodeEvent, _super);
    function CloneNodeEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'clone:node';
        return _this;
    }
    return CloneNodeEvent;
}(AbstractMutationNodeEvent));

var AppendNodeEvent = /** @class */ (function (_super) {
    __extends(AppendNodeEvent, _super);
    function AppendNodeEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'append:node';
        return _this;
    }
    return AppendNodeEvent;
}(AbstractMutationNodeEvent));

var FromNodeEvent = /** @class */ (function () {
    function FromNodeEvent(data) {
        this.type = 'from:node';
        this.data = data;
    }
    return FromNodeEvent;
}());

var AbstractViewportEvent = /** @class */ (function () {
    function AbstractViewportEvent(data) {
        this.data = data || {
            scrollX: globalThisPolyfill.scrollX,
            scrollY: globalThisPolyfill.scrollY,
            width: globalThisPolyfill.innerWidth,
            height: globalThisPolyfill.innerHeight,
            innerWidth: globalThisPolyfill.innerWidth,
            innerHeight: globalThisPolyfill.innerHeight,
            view: globalThisPolyfill,
            target: globalThisPolyfill,
        };
    }
    return AbstractViewportEvent;
}());

var ViewportResizeEvent = /** @class */ (function (_super) {
    __extends(ViewportResizeEvent, _super);
    function ViewportResizeEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'viewport:resize';
        return _this;
    }
    return ViewportResizeEvent;
}(AbstractViewportEvent));

var ViewportScrollEvent = /** @class */ (function (_super) {
    __extends(ViewportScrollEvent, _super);
    function ViewportScrollEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'viewport:scroll';
        return _this;
    }
    return ViewportScrollEvent;
}(AbstractViewportEvent));

var AbstractWorkspaceEvent = /** @class */ (function () {
    function AbstractWorkspaceEvent(data) {
        this.data = data;
    }
    return AbstractWorkspaceEvent;
}());

var AddWorkspaceEvent = /** @class */ (function (_super) {
    __extends(AddWorkspaceEvent, _super);
    function AddWorkspaceEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'add:workspace';
        return _this;
    }
    return AddWorkspaceEvent;
}(AbstractWorkspaceEvent));

var RemoveWorkspaceEvent = /** @class */ (function (_super) {
    __extends(RemoveWorkspaceEvent, _super);
    function RemoveWorkspaceEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'remove:workspace';
        return _this;
    }
    return RemoveWorkspaceEvent;
}(AbstractWorkspaceEvent));

var SwitchWorkspaceEvent = /** @class */ (function (_super) {
    __extends(SwitchWorkspaceEvent, _super);
    function SwitchWorkspaceEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'switch:workspace';
        return _this;
    }
    return SwitchWorkspaceEvent;
}(AbstractWorkspaceEvent));

var AbstractHistoryEvent = /** @class */ (function () {
    function AbstractHistoryEvent(data) {
        this.data = data;
    }
    return AbstractHistoryEvent;
}());

var HistoryUndoEvent = /** @class */ (function (_super) {
    __extends(HistoryUndoEvent, _super);
    function HistoryUndoEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'history:undo';
        return _this;
    }
    return HistoryUndoEvent;
}(AbstractHistoryEvent));

var HistoryRedoEvent = /** @class */ (function (_super) {
    __extends(HistoryRedoEvent, _super);
    function HistoryRedoEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'history:redo';
        return _this;
    }
    return HistoryRedoEvent;
}(AbstractHistoryEvent));

var HistoryGotoEvent = /** @class */ (function (_super) {
    __extends(HistoryGotoEvent, _super);
    function HistoryGotoEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'history:goto';
        return _this;
    }
    return HistoryGotoEvent;
}(AbstractHistoryEvent));

var HistoryPushEvent = /** @class */ (function (_super) {
    __extends(HistoryPushEvent, _super);
    function HistoryPushEvent() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.type = 'history:push';
        return _this;
    }
    return HistoryPushEvent;
}(AbstractHistoryEvent));

var GlobalState = {
    dragging: false,
    onMouseDownAt: 0,
    startEvent: null,
    moveEvent: null,
};
var DragDropDriver = /** @class */ (function (_super) {
    __extends(DragDropDriver, _super);
    function DragDropDriver() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.mouseDownTimer = null;
        _this.onMouseDown = function (e) {
            var _a, _b;
            if (e.button !== 0 || e.ctrlKey || e.metaKey) {
                return;
            }
            if (e.target['isContentEditable'] ||
                e.target['contentEditable'] === 'true') {
                return true;
            }
            if ((_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a['closest']) === null || _b === void 0 ? void 0 : _b.call(_a, '.monaco-editor'))
                return;
            GlobalState.startEvent = e;
            GlobalState.dragging = false;
            GlobalState.onMouseDownAt = Date.now();
            _this.batchAddEventListener('mouseup', _this.onMouseUp);
            _this.batchAddEventListener('dragend', _this.onMouseUp);
            _this.batchAddEventListener('dragstart', _this.onStartDrag);
            _this.batchAddEventListener('mousemove', _this.onDistanceChange);
        };
        _this.onMouseUp = function (e) {
            if (GlobalState.dragging) {
                _this.dispatch(new DragStopEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    target: e.target,
                    view: e.view,
                }));
            }
            _this.batchRemoveEventListener('contextmenu', _this.onContextMenuWhileDragging, true);
            _this.batchRemoveEventListener('mouseup', _this.onMouseUp);
            _this.batchRemoveEventListener('mousedown', _this.onMouseDown);
            _this.batchRemoveEventListener('dragover', _this.onMouseMove);
            _this.batchRemoveEventListener('mousemove', _this.onMouseMove);
            _this.batchRemoveEventListener('mousemove', _this.onDistanceChange);
            GlobalState.dragging = false;
        };
        _this.onMouseMove = function (e) {
            var _a, _b;
            if (e.clientX === ((_a = GlobalState.moveEvent) === null || _a === void 0 ? void 0 : _a.clientX) &&
                e.clientY === ((_b = GlobalState.moveEvent) === null || _b === void 0 ? void 0 : _b.clientY))
                return;
            _this.dispatch(new DragMoveEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                target: e.target,
                view: e.view,
            }));
            GlobalState.moveEvent = e;
        };
        _this.onContextMenuWhileDragging = function (e) {
            e.preventDefault();
        };
        _this.onStartDrag = function (e) {
            if (GlobalState.dragging)
                return;
            GlobalState.startEvent = GlobalState.startEvent || e;
            _this.batchAddEventListener('dragover', _this.onMouseMove);
            _this.batchAddEventListener('mousemove', _this.onMouseMove);
            _this.batchAddEventListener('contextmenu', _this.onContextMenuWhileDragging, true);
            _this.dispatch(new DragStartEvent({
                clientX: GlobalState.startEvent.clientX,
                clientY: GlobalState.startEvent.clientY,
                pageX: GlobalState.startEvent.pageX,
                pageY: GlobalState.startEvent.pageY,
                target: GlobalState.startEvent.target,
                view: GlobalState.startEvent.view,
            }));
            GlobalState.dragging = true;
        };
        _this.onDistanceChange = function (e) {
            var distance = Math.sqrt(Math.pow(e.pageX - GlobalState.startEvent.pageX, 2) +
                Math.pow(e.pageY - GlobalState.startEvent.pageY, 2));
            var timeDelta = Date.now() - GlobalState.onMouseDownAt;
            if (timeDelta > 10 && e !== GlobalState.startEvent && distance > 4) {
                _this.batchRemoveEventListener('mousemove', _this.onDistanceChange);
                _this.onStartDrag(e);
            }
        };
        return _this;
    }
    DragDropDriver.prototype.attach = function () {
        this.batchAddEventListener('mousedown', this.onMouseDown, true);
    };
    DragDropDriver.prototype.detach = function () {
        GlobalState.dragging = false;
        GlobalState.moveEvent = null;
        GlobalState.onMouseDownAt = null;
        GlobalState.startEvent = null;
        this.batchRemoveEventListener('mousedown', this.onMouseDown, true);
        this.batchRemoveEventListener('dragstart', this.onStartDrag);
        this.batchRemoveEventListener('dragend', this.onMouseUp);
        this.batchRemoveEventListener('dragover', this.onMouseMove);
        this.batchRemoveEventListener('mouseup', this.onMouseUp);
        this.batchRemoveEventListener('mousemove', this.onMouseMove);
        this.batchRemoveEventListener('mousemove', this.onDistanceChange);
        this.batchRemoveEventListener('contextmenu', this.onContextMenuWhileDragging, true);
    };
    return DragDropDriver;
}(EventDriver));

var MouseClickDriver = /** @class */ (function (_super) {
    __extends(MouseClickDriver, _super);
    function MouseClickDriver() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onMouseClick = function (e) {
            var target = e.target;
            if (target === null || target === void 0 ? void 0 : target.closest("*[".concat(_this.engine.props.clickStopPropagationAttrName, "]"))) {
                return;
            }
            _this.dispatch(new MouseClickEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                target: e.target,
                view: e.view,
            }));
        };
        _this.onMouseDoubleClick = function (e) {
            var target = e.target;
            if (target === null || target === void 0 ? void 0 : target.closest("*[".concat(_this.engine.props.clickStopPropagationAttrName, "]"))) {
                return;
            }
            _this.dispatch(new MouseDoubleClickEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                target: e.target,
                view: e.view,
            }));
        };
        return _this;
    }
    MouseClickDriver.prototype.attach = function () {
        this.addEventListener('click', this.onMouseClick, {
            mode: 'onlyChild',
        });
        this.addEventListener('dblclick', this.onMouseDoubleClick, {
            mode: 'onlyChild',
        });
    };
    MouseClickDriver.prototype.detach = function () {
        this.removeEventListener('click', this.onMouseClick, {
            mode: 'onlyChild',
        });
        this.removeEventListener('dblclick', this.onMouseDoubleClick, {
            mode: 'onlyChild',
        });
    };
    return MouseClickDriver;
}(EventDriver));

var MouseMoveDriver = /** @class */ (function (_super) {
    __extends(MouseMoveDriver, _super);
    function MouseMoveDriver() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.request = null;
        _this.onMouseMove = function (e) {
            _this.request = requestAnimationFrame(function () {
                cancelAnimationFrame(_this.request);
                _this.dispatch(new MouseMoveEvent({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    target: e.target,
                    view: e.view,
                }));
            });
        };
        return _this;
    }
    MouseMoveDriver.prototype.attach = function () {
        this.addEventListener('mousemove', this.onMouseMove, {
            mode: 'onlyOne',
        });
    };
    MouseMoveDriver.prototype.detach = function () {
        this.removeEventListener('mouseover', this.onMouseMove, {
            mode: 'onlyOne',
        });
    };
    return MouseMoveDriver;
}(EventDriver));

var ViewportResizeDriver = /** @class */ (function (_super) {
    __extends(ViewportResizeDriver, _super);
    function ViewportResizeDriver() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.request = null;
        _this.resizeObserver = null;
        _this.onResize = function (e) {
            if (e.preventDefault)
                e.preventDefault();
            _this.request = requestAnimationFrame(function () {
                cancelAnimationFrame(_this.request);
                _this.dispatch(new ViewportResizeEvent({
                    scrollX: _this.contentWindow.scrollX,
                    scrollY: _this.contentWindow.scrollY,
                    width: _this.contentWindow.innerWidth,
                    height: _this.contentWindow.innerHeight,
                    innerHeight: _this.contentWindow.innerHeight,
                    innerWidth: _this.contentWindow.innerWidth,
                    view: _this.contentWindow,
                    target: e.target || _this.container,
                }));
            });
        };
        return _this;
    }
    ViewportResizeDriver.prototype.attach = function () {
        if (this.contentWindow && this.contentWindow !== globalThisPolyfill) {
            this.addEventListener('resize', this.onResize);
        }
        else {
            if (this.container && this.container !== document) {
                this.resizeObserver = new ResizeObserver(this.onResize);
                this.resizeObserver.observe(this.container);
            }
        }
    };
    ViewportResizeDriver.prototype.detach = function () {
        if (this.contentWindow && this.contentWindow !== globalThisPolyfill) {
            this.removeEventListener('resize', this.onResize);
        }
        else if (this.resizeObserver) {
            if (this.container && this.container !== document) {
                this.resizeObserver.unobserve(this.container);
                this.resizeObserver.disconnect();
            }
        }
    };
    return ViewportResizeDriver;
}(EventDriver));

var ViewportScrollDriver = /** @class */ (function (_super) {
    __extends(ViewportScrollDriver, _super);
    function ViewportScrollDriver() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.request = null;
        _this.onScroll = function (e) {
            e.preventDefault();
            _this.request = globalThisPolyfill.requestAnimationFrame(function () {
                _this.dispatch(new ViewportScrollEvent({
                    scrollX: _this.contentWindow.scrollX,
                    scrollY: _this.contentWindow.scrollY,
                    width: _this.contentWindow.document.body.clientWidth,
                    height: _this.contentWindow.document.body.clientHeight,
                    innerHeight: _this.contentWindow.innerHeight,
                    innerWidth: _this.contentWindow.innerWidth,
                    view: _this.contentWindow,
                    target: e.target,
                }));
                cancelAnimationFrame(_this.request);
            });
        };
        return _this;
    }
    ViewportScrollDriver.prototype.attach = function () {
        this.addEventListener('scroll', this.onScroll);
    };
    ViewportScrollDriver.prototype.detach = function () {
        this.removeEventListener('scroll', this.onScroll);
    };
    return ViewportScrollDriver;
}(EventDriver));

function filter(event) {
    var target = event.target;
    var tagName = target.tagName;
    var flag = true;
    // ignore: isContentEditable === 'true', <input> and <textarea> when readOnly state is false, <select>、Web Components
    if (target['isContentEditable'] ||
        ((tagName === 'INPUT' ||
            tagName === 'TEXTAREA' ||
            tagName === 'SELECT' ||
            customElements.get(tagName.toLocaleLowerCase())) &&
            !target.readOnly)) {
        flag = false;
    }
    return flag;
}
var KeyboardDriver = /** @class */ (function (_super) {
    __extends(KeyboardDriver, _super);
    function KeyboardDriver() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onKeyDown = function (e) {
            if (!filter(e))
                return;
            _this.dispatch(new KeyDownEvent(e));
        };
        _this.onKeyUp = function (e) {
            _this.dispatch(new KeyUpEvent(e));
        };
        return _this;
    }
    KeyboardDriver.prototype.attach = function () {
        this.addEventListener('keydown', this.onKeyDown, {
            mode: 'onlyParent',
        });
        this.addEventListener('keyup', this.onKeyUp, {
            mode: 'onlyParent',
        });
    };
    KeyboardDriver.prototype.detach = function () {
        this.removeEventListener('keydown', this.onKeyDown, {
            mode: 'onlyParent',
        });
        this.removeEventListener('keyup', this.onKeyUp, {
            mode: 'onlyParent',
        });
    };
    return KeyboardDriver;
}(EventDriver));

var lowerSnake = function (str) {
    return String(str).replace(/\s+/g, '_').toLocaleLowerCase();
};
var mergeLocales = function (target, source) {
    if (isPlainObj(target) && isPlainObj(source)) {
        each(source, function (value, key) {
            var token = lowerSnake(key);
            var messages = mergeLocales(target[key] || target[token], value);
            target[token] = messages;
        });
        return target;
    }
    else if (isPlainObj(source)) {
        var result_1 = Array.isArray(source) ? [] : {};
        each(source, function (value, key) {
            var messages = mergeLocales(undefined, value);
            result_1[lowerSnake(key)] = messages;
        });
        return result_1;
    }
    return source;
};
var getBrowserLanguage = function () {
    var _a;
    /* istanbul ignore next */
    if (!globalThisPolyfill.navigator) {
        return 'en';
    }
    return (globalThisPolyfill.navigator['browserlanguage'] ||
        ((_a = globalThisPolyfill.navigator) === null || _a === void 0 ? void 0 : _a.language) ||
        'en');
};

var getISOCode = function (language) {
    var isoCode = DESIGNER_LANGUAGE_STORE.value;
    var lang = lowerSnake(language);
    if (DESIGNER_LOCALES_STORE.value[lang]) {
        return lang;
    }
    each(DESIGNER_LOCALES_STORE.value, function (_, key) {
        if (key.indexOf(lang) > -1 || String(lang).indexOf(key) > -1) {
            isoCode = key;
            return false;
        }
    });
    return isoCode;
};
var reSortBehaviors = function (target, sources) {
    var findTargetBehavior = function (behavior) { return target.includes(behavior); };
    var findSourceBehavior = function (name) {
        for (var key in sources) {
            var Behavior = sources[key].Behavior;
            for (var i = 0; i < Behavior.length; i++) {
                if (Behavior[i].name === name)
                    return Behavior[i];
            }
        }
    };
    each(sources, function (item) {
        if (!item)
            return;
        if (!isBehaviorHost(item))
            return;
        var Behavior = item.Behavior;
        each(Behavior, function (behavior) {
            if (findTargetBehavior(behavior))
                return;
            var name = behavior.name;
            each(behavior.extends, function (dep) {
                var behavior = findSourceBehavior(dep);
                if (!behavior)
                    throw new Error("No ".concat(dep, " behavior that ").concat(name, " depends on"));
                if (!findTargetBehavior(behavior)) {
                    target.unshift(behavior);
                }
            });
            target.push(behavior);
        });
    });
};
var DESIGNER_BEHAVIORS_STORE = observable.ref([]);
var DESIGNER_ICONS_STORE = observable.ref({});
var DESIGNER_LOCALES_STORE = observable.ref({});
var DESIGNER_LANGUAGE_STORE = observable.ref(getBrowserLanguage());
var DESIGNER_GlobalRegistry = {
    setDesignerLanguage: function (lang) {
        DESIGNER_LANGUAGE_STORE.value = lang;
    },
    setDesignerBehaviors: function (behaviors) {
        DESIGNER_BEHAVIORS_STORE.value = behaviors.reduce(function (buf, behavior) {
            if (isBehaviorHost(behavior)) {
                return buf.concat(behavior.Behavior);
            }
            else if (isBehaviorList(behavior)) {
                return buf.concat(behavior);
            }
            return buf;
        }, []);
    },
    getDesignerBehaviors: function (node) {
        return DESIGNER_BEHAVIORS_STORE.value.filter(function (pattern) {
            return pattern.selector(node);
        });
    },
    getDesignerIcon: function (name) {
        return DESIGNER_ICONS_STORE[name];
    },
    getDesignerLanguage: function () {
        return getISOCode(DESIGNER_LANGUAGE_STORE.value);
    },
    getDesignerMessage: function (token, locales) {
        var lang = getISOCode(DESIGNER_LANGUAGE_STORE.value);
        var locale = locales ? locales[lang] : DESIGNER_LOCALES_STORE.value[lang];
        if (!locale) {
            for (var key in DESIGNER_LOCALES_STORE.value) {
                var message = Path.getIn(DESIGNER_LOCALES_STORE.value[key], lowerSnake(token));
                if (message)
                    return message;
            }
            return;
        }
        return Path.getIn(locale, lowerSnake(token));
    },
    registerDesignerIcons: function (map) {
        Object.assign(DESIGNER_ICONS_STORE, map);
    },
    registerDesignerLocales: function () {
        var packages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            packages[_i] = arguments[_i];
        }
        packages.forEach(function (locales) {
            mergeLocales(DESIGNER_LOCALES_STORE.value, locales);
        });
    },
    registerDesignerBehaviors: function () {
        var packages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            packages[_i] = arguments[_i];
        }
        var results = [];
        packages.forEach(function (sources) {
            reSortBehaviors(results, sources);
        });
        if (results.length) {
            DESIGNER_BEHAVIORS_STORE.value = results;
        }
    },
};
var GlobalRegistry = DESIGNER_GlobalRegistry;

var TreeNodes = new Map();
var CommonDesignerPropsMap = new Map();
var removeNode = function (node) {
    if (node.parent) {
        node.parent.children = node.parent.children.filter(function (child) { return child !== node; });
    }
};
var resetNodesParent = function (nodes, parent) {
    var resetDepth = function (node) {
        node.depth = node.parent ? node.parent.depth + 1 : 0;
        node.children.forEach(resetDepth);
    };
    var shallowReset = function (node) {
        node.parent = parent;
        node.root = parent.root;
        resetDepth(node);
    };
    var deepReset = function (node) {
        shallowReset(node);
        resetNodesParent(node.children, node);
    };
    return nodes.map(function (node) {
        var _a;
        if (node === parent)
            return node;
        if (!parent.isSourceNode) {
            if (node.isSourceNode) {
                node = node.clone(parent);
                resetDepth(node);
            }
            else if (!node.isRoot && node.isInOperation) {
                (_a = node.operation) === null || _a === void 0 ? void 0 : _a.selection.remove(node);
                removeNode(node);
                shallowReset(node);
            }
            else {
                deepReset(node);
            }
        }
        else {
            deepReset(node);
        }
        if (!TreeNodes.has(node.id)) {
            TreeNodes.set(node.id, node);
            CommonDesignerPropsMap.set(node.componentName, node.designerProps);
        }
        return node;
    });
};
var resetParent = function (node, parent) {
    return resetNodesParent([node], parent)[0];
};
var resolveDesignerProps = function (node, props) {
    if (isFn(props))
        return props(node);
    return props;
};
var TreeNode = /** @class */ (function () {
    function TreeNode(node, parent) {
        this.depth = 0;
        this.hidden = false;
        this.componentName = 'NO_NAME_COMPONENT';
        this.sourceName = '';
        this.props = {};
        this.children = [];
        if (node instanceof TreeNode) {
            return node;
        }
        this.id = node.id || uid();
        if (parent) {
            this.parent = parent;
            this.depth = parent.depth + 1;
            this.root = parent.root;
            TreeNodes.set(this.id, this);
        }
        else {
            this.root = this;
            this.rootOperation = node.operation;
            this.isSelfSourceNode = node.isSourceNode || false;
            TreeNodes.set(this.id, this);
        }
        if (node) {
            this.from(node);
        }
        this.makeObservable();
    }
    TreeNode.prototype.makeObservable = function () {
        define(this, {
            componentName: observable.ref,
            props: observable,
            hidden: observable.ref,
            children: observable.shallow,
            designerProps: observable.computed,
            designerLocales: observable.computed,
            wrap: action,
            prepend: action,
            append: action,
            insertAfter: action,
            insertBefore: action,
            remove: action,
            setProps: action,
            setChildren: action,
            setComponentName: action,
        });
    };
    Object.defineProperty(TreeNode.prototype, "designerProps", {
        get: function () {
            var _this = this;
            var behaviors = GlobalRegistry.getDesignerBehaviors(this);
            var designerProps = behaviors.reduce(function (buf, pattern) {
                if (!pattern.designerProps)
                    return buf;
                Object.assign(buf, resolveDesignerProps(_this, pattern.designerProps));
                return buf;
            }, {});
            return designerProps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "designerLocales", {
        get: function () {
            var behaviors = GlobalRegistry.getDesignerBehaviors(this);
            var designerLocales = behaviors.reduce(function (buf, pattern) {
                if (!pattern.designerLocales)
                    return buf;
                mergeLocales(buf, pattern.designerLocales);
                return buf;
            }, {});
            return designerLocales;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "previous", {
        get: function () {
            if (this.parent === this || !this.parent)
                return;
            return this.parent.children[this.index - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "next", {
        get: function () {
            if (this.parent === this || !this.parent)
                return;
            return this.parent.children[this.index + 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "siblings", {
        get: function () {
            var _this = this;
            if (this.parent) {
                return this.parent.children.filter(function (node) { return node !== _this; });
            }
            return [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "index", {
        get: function () {
            if (this.parent === this || !this.parent)
                return 0;
            return this.parent.children.indexOf(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "descendants", {
        get: function () {
            return this.children.reduce(function (buf, node) {
                return buf.concat(node).concat(node.descendants);
            }, []);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isRoot", {
        get: function () {
            return this === this.root;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isInOperation", {
        get: function () {
            return !!this.operation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "lastChild", {
        get: function () {
            return this.children[this.children.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "firstChild", {
        get: function () {
            return this.children[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isSourceNode", {
        get: function () {
            return this.root.isSelfSourceNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "operation", {
        get: function () {
            var _a;
            return (_a = this.root) === null || _a === void 0 ? void 0 : _a.rootOperation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "viewport", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.operation) === null || _a === void 0 ? void 0 : _a.workspace) === null || _b === void 0 ? void 0 : _b.viewport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "outline", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.operation) === null || _a === void 0 ? void 0 : _a.workspace) === null || _b === void 0 ? void 0 : _b.outline;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "moveLayout", {
        get: function () {
            var _a;
            return (_a = this.viewport) === null || _a === void 0 ? void 0 : _a.getValidNodeLayout(this);
        },
        enumerable: false,
        configurable: true
    });
    TreeNode.prototype.getElement = function (area) {
        var _a;
        if (area === void 0) { area = 'viewport'; }
        return (_a = this[area]) === null || _a === void 0 ? void 0 : _a.findElementById(this.id);
    };
    TreeNode.prototype.getValidElement = function (area) {
        var _a;
        if (area === void 0) { area = 'viewport'; }
        return (_a = this[area]) === null || _a === void 0 ? void 0 : _a.getValidNodeElement(this);
    };
    TreeNode.prototype.getElementRect = function (area) {
        var _a;
        if (area === void 0) { area = 'viewport'; }
        return (_a = this[area]) === null || _a === void 0 ? void 0 : _a.getElementRect(this.getElement(area));
    };
    TreeNode.prototype.getValidElementRect = function (area) {
        var _a;
        if (area === void 0) { area = 'viewport'; }
        return (_a = this[area]) === null || _a === void 0 ? void 0 : _a.getValidNodeRect(this);
    };
    TreeNode.prototype.getElementOffsetRect = function (area) {
        var _a;
        if (area === void 0) { area = 'viewport'; }
        return (_a = this[area]) === null || _a === void 0 ? void 0 : _a.getElementOffsetRect(this.getElement(area));
    };
    TreeNode.prototype.getValidElementOffsetRect = function (area) {
        var _a;
        if (area === void 0) { area = 'viewport'; }
        return (_a = this[area]) === null || _a === void 0 ? void 0 : _a.getValidNodeOffsetRect(this);
    };
    TreeNode.prototype.getPrevious = function (step) {
        if (step === void 0) { step = 1; }
        return this.parent.children[this.index - step];
    };
    TreeNode.prototype.getAfter = function (step) {
        if (step === void 0) { step = 1; }
        return this.parent.children[this.index + step];
    };
    TreeNode.prototype.getSibling = function (index) {
        if (index === void 0) { index = 0; }
        return this.parent.children[index];
    };
    TreeNode.prototype.getParents = function (node) {
        var _node = node || this;
        return (_node === null || _node === void 0 ? void 0 : _node.parent)
            ? [_node.parent].concat(this.getParents(_node.parent))
            : [];
    };
    TreeNode.prototype.getParentByDepth = function (depth) {
        if (depth === void 0) { depth = 0; }
        var parent = this.parent;
        if ((parent === null || parent === void 0 ? void 0 : parent.depth) === depth) {
            return parent;
        }
        else {
            return parent === null || parent === void 0 ? void 0 : parent.getParentByDepth(depth);
        }
    };
    TreeNode.prototype.getMessage = function (token) {
        return GlobalRegistry.getDesignerMessage(token, this.designerLocales);
    };
    TreeNode.prototype.isMyAncestor = function (node) {
        if (node === this || this.parent === node)
            return false;
        return node.contains(this);
    };
    TreeNode.prototype.isMyParent = function (node) {
        return this.parent === node;
    };
    TreeNode.prototype.isMyParents = function (node) {
        if (node === this)
            return false;
        return this.isMyParent(node) || this.isMyAncestor(node);
    };
    TreeNode.prototype.isMyChild = function (node) {
        return node.isMyParent(this);
    };
    TreeNode.prototype.isMyChildren = function (node) {
        return node.isMyParents(this);
    };
    TreeNode.prototype.takeSnapshot = function (type) {
        var _a;
        (_a = this.operation) === null || _a === void 0 ? void 0 : _a.snapshot(type);
    };
    TreeNode.prototype.triggerMutation = function (event, callback, defaults) {
        if (this.operation) {
            var result = (this.operation.dispatch(event, callback) || defaults);
            this.takeSnapshot(event === null || event === void 0 ? void 0 : event.type);
            return result;
        }
        else if (isFn(callback)) {
            return callback();
        }
    };
    TreeNode.prototype.find = function (finder) {
        if (finder(this)) {
            return this;
        }
        else {
            var result_1 = undefined;
            this.eachChildren(function (node) {
                if (finder(node)) {
                    result_1 = node;
                    return false;
                }
            });
            return result_1;
        }
    };
    TreeNode.prototype.findAll = function (finder) {
        var results = [];
        if (finder(this)) {
            results.push(this);
        }
        this.eachChildren(function (node) {
            if (finder(node)) {
                results.push(node);
            }
        });
        return results;
    };
    TreeNode.prototype.distanceTo = function (node) {
        if (this.root !== node.root) {
            return Infinity;
        }
        if (this.parent !== node.parent) {
            return Infinity;
        }
        return Math.abs(this.index - node.index);
    };
    TreeNode.prototype.crossSiblings = function (node) {
        if (this.parent !== node.parent)
            return [];
        var minIndex = Math.min(this.index, node.index);
        var maxIndex = Math.max(this.index, node.index);
        var results = [];
        for (var i = minIndex + 1; i < maxIndex; i++) {
            results.push(this.parent.children[i]);
        }
        return results;
    };
    TreeNode.prototype.allowSibling = function (nodes) {
        var _a, _b, _c;
        if (((_b = (_a = this.designerProps) === null || _a === void 0 ? void 0 : _a.allowSiblings) === null || _b === void 0 ? void 0 : _b.call(_a, this, nodes)) === false)
            return false;
        return (_c = this.parent) === null || _c === void 0 ? void 0 : _c.allowAppend(nodes);
    };
    TreeNode.prototype.allowDrop = function (parent) {
        if (!isFn(this.designerProps.allowDrop))
            return true;
        return this.designerProps.allowDrop(parent);
    };
    TreeNode.prototype.allowAppend = function (nodes) {
        var _this = this;
        var _a, _b, _c;
        if (!((_a = this.designerProps) === null || _a === void 0 ? void 0 : _a.droppable))
            return false;
        if (((_c = (_b = this.designerProps) === null || _b === void 0 ? void 0 : _b.allowAppend) === null || _c === void 0 ? void 0 : _c.call(_b, this, nodes)) === false)
            return false;
        if (nodes.some(function (node) { return !node.allowDrop(_this); }))
            return false;
        if (this.root === this)
            return true;
        return true;
    };
    TreeNode.prototype.allowClone = function () {
        var _a;
        if (this === this.root)
            return false;
        return (_a = this.designerProps.cloneable) !== null && _a !== void 0 ? _a : true;
    };
    TreeNode.prototype.allowDrag = function () {
        var _a;
        if (this === this.root && !this.isSourceNode)
            return false;
        return (_a = this.designerProps.draggable) !== null && _a !== void 0 ? _a : true;
    };
    TreeNode.prototype.allowResize = function () {
        if (this === this.root && !this.isSourceNode)
            return false;
        var resizable = this.designerProps.resizable;
        if (!resizable)
            return false;
        if (resizable.width && resizable.height)
            return ['x', 'y'];
        if (resizable.width)
            return ['x'];
        return ['y'];
    };
    TreeNode.prototype.allowRotate = function () { };
    TreeNode.prototype.allowRound = function () { };
    TreeNode.prototype.allowScale = function () { };
    TreeNode.prototype.allowTranslate = function () {
        if (this === this.root && !this.isSourceNode)
            return false;
        var translatable = this.designerProps.translatable;
        if ((translatable === null || translatable === void 0 ? void 0 : translatable.x) && (translatable === null || translatable === void 0 ? void 0 : translatable.y))
            return true;
        return false;
    };
    TreeNode.prototype.allowDelete = function () {
        var _a;
        if (this === this.root)
            return false;
        return (_a = this.designerProps.deletable) !== null && _a !== void 0 ? _a : true;
    };
    TreeNode.prototype.findById = function (id) {
        var _a;
        if (!id)
            return;
        if (this.id === id)
            return this;
        if (((_a = this.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return TreeNodes.get(id);
        }
    };
    TreeNode.prototype.contains = function () {
        var _this = this;
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        return nodes.every(function (node) {
            if (node === _this ||
                (node === null || node === void 0 ? void 0 : node.parent) === _this ||
                (node === null || node === void 0 ? void 0 : node.getParentByDepth(_this.depth)) === _this) {
                return true;
            }
            return false;
        });
    };
    TreeNode.prototype.eachTree = function (callback) {
        var _a;
        if (isFn(callback)) {
            callback(this.root);
            (_a = this.root) === null || _a === void 0 ? void 0 : _a.eachChildren(callback);
        }
    };
    TreeNode.prototype.eachChildren = function (callback) {
        if (isFn(callback)) {
            for (var i = 0; i < this.children.length; i++) {
                var node = this.children[i];
                if (callback(node) === false)
                    return;
                node.eachChildren(callback);
            }
        }
    };
    TreeNode.prototype.resetNodesParent = function (nodes, parent) {
        var _this = this;
        return resetNodesParent(nodes.filter(function (node) { return node !== _this; }), parent);
    };
    TreeNode.prototype.setProps = function (props) {
        var _this = this;
        return this.triggerMutation(new UpdateNodePropsEvent({
            target: this,
            source: null,
        }), function () {
            Object.assign(_this.props, props);
        });
    };
    TreeNode.prototype.setComponentName = function (componentName) {
        this.componentName = componentName;
    };
    TreeNode.prototype.prepend = function () {
        var _this = this;
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        if (nodes.some(function (node) { return node.contains(_this); }))
            return [];
        var originSourceParents = nodes.map(function (node) { return node.parent; });
        var newNodes = this.resetNodesParent(nodes, this);
        if (!newNodes.length)
            return [];
        return this.triggerMutation(new PrependNodeEvent({
            originSourceParents: originSourceParents,
            target: this,
            source: newNodes,
        }), function () {
            _this.children = newNodes.concat(_this.children);
            return newNodes;
        }, []);
    };
    TreeNode.prototype.append = function () {
        var _this = this;
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        if (nodes.some(function (node) { return node.contains(_this); }))
            return [];
        var originSourceParents = nodes.map(function (node) { return node.parent; });
        var newNodes = this.resetNodesParent(nodes, this);
        if (!newNodes.length)
            return [];
        return this.triggerMutation(new AppendNodeEvent({
            originSourceParents: originSourceParents,
            target: this,
            source: newNodes,
        }), function () {
            _this.children = _this.children.concat(newNodes);
            return newNodes;
        }, []);
    };
    TreeNode.prototype.wrap = function (wrapper) {
        var _this = this;
        if (wrapper === this)
            return;
        var parent = this.parent;
        return this.triggerMutation(new WrapNodeEvent({
            target: this,
            source: wrapper,
        }), function () {
            resetParent(_this, wrapper);
            resetParent(wrapper, parent);
            return wrapper;
        });
    };
    TreeNode.prototype.insertAfter = function () {
        var _this = this;
        var _a;
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        var parent = this.parent;
        if (nodes.some(function (node) { return node.contains(_this); }))
            return [];
        if ((_a = parent === null || parent === void 0 ? void 0 : parent.children) === null || _a === void 0 ? void 0 : _a.length) {
            var originSourceParents = nodes.map(function (node) { return node.parent; });
            var newNodes_1 = this.resetNodesParent(nodes, parent);
            if (!newNodes_1.length)
                return [];
            return this.triggerMutation(new InsertAfterEvent({
                originSourceParents: originSourceParents,
                target: this,
                source: newNodes_1,
            }), function () {
                parent.children = parent.children.reduce(function (buf, node) {
                    if (node === _this) {
                        return buf.concat([node]).concat(newNodes_1);
                    }
                    else {
                        return buf.concat([node]);
                    }
                }, []);
                return newNodes_1;
            }, []);
        }
        return [];
    };
    TreeNode.prototype.insertBefore = function () {
        var _this = this;
        var _a;
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        var parent = this.parent;
        if (nodes.some(function (node) { return node.contains(_this); }))
            return [];
        if ((_a = parent === null || parent === void 0 ? void 0 : parent.children) === null || _a === void 0 ? void 0 : _a.length) {
            var originSourceParents = nodes.map(function (node) { return node.parent; });
            var newNodes_2 = this.resetNodesParent(nodes, parent);
            if (!newNodes_2.length)
                return [];
            return this.triggerMutation(new InsertBeforeEvent({
                originSourceParents: originSourceParents,
                target: this,
                source: newNodes_2,
            }), function () {
                parent.children = parent.children.reduce(function (buf, node) {
                    if (node === _this) {
                        return buf.concat(newNodes_2).concat([node]);
                    }
                    else {
                        return buf.concat([node]);
                    }
                }, []);
                return newNodes_2;
            }, []);
        }
        return [];
    };
    TreeNode.prototype.insertChildren = function (start) {
        var _this = this;
        var _a;
        var nodes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            nodes[_i - 1] = arguments[_i];
        }
        if (nodes.some(function (node) { return node.contains(_this); }))
            return [];
        if ((_a = this.children) === null || _a === void 0 ? void 0 : _a.length) {
            var originSourceParents = nodes.map(function (node) { return node.parent; });
            var newNodes_3 = this.resetNodesParent(nodes, this);
            if (!newNodes_3.length)
                return [];
            return this.triggerMutation(new InsertChildrenEvent({
                originSourceParents: originSourceParents,
                target: this,
                source: newNodes_3,
            }), function () {
                _this.children = _this.children.reduce(function (buf, node, index) {
                    if (index === start) {
                        return buf.concat(newNodes_3).concat([node]);
                    }
                    return buf.concat([node]);
                }, []);
                return newNodes_3;
            }, []);
        }
        return [];
    };
    TreeNode.prototype.setChildren = function () {
        var _this = this;
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        var originSourceParents = nodes.map(function (node) { return node.parent; });
        var newNodes = this.resetNodesParent(nodes, this);
        return this.triggerMutation(new UpdateChildrenEvent({
            originSourceParents: originSourceParents,
            target: this,
            source: newNodes,
        }), function () {
            _this.children = newNodes;
            return newNodes;
        }, []);
    };
    /**
     * @deprecated
     * please use `setChildren`
     */
    TreeNode.prototype.setNodeChildren = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        return this.setChildren.apply(this, __spreadArray([], __read(nodes), false));
    };
    TreeNode.prototype.remove = function () {
        var _this = this;
        return this.triggerMutation(new RemoveNodeEvent({
            target: this,
            source: null,
        }), function () {
            removeNode(_this);
            TreeNodes.delete(_this.id);
        });
    };
    TreeNode.prototype.clone = function (parent) {
        var newNode = new TreeNode({
            id: uid(),
            componentName: this.componentName,
            sourceName: this.sourceName,
            props: toJS(this.props),
            children: [],
        }, parent ? parent : this.parent);
        newNode.children = resetNodesParent(this.children.map(function (child) {
            return child.clone(newNode);
        }), newNode);
        return this.triggerMutation(new CloneNodeEvent({
            target: this,
            source: newNode,
        }), function () { return newNode; });
    };
    TreeNode.prototype.from = function (node) {
        var _this = this;
        if (!node)
            return;
        return this.triggerMutation(new FromNodeEvent({
            target: this,
            source: node,
        }), function () {
            var _a, _b, _c;
            if (node.id && node.id !== _this.id) {
                TreeNodes.delete(_this.id);
                TreeNodes.set(node.id, _this);
                _this.id = node.id;
            }
            if (node.componentName) {
                _this.componentName = node.componentName;
            }
            _this.props = (_a = node.props) !== null && _a !== void 0 ? _a : {};
            if (node.hidden) {
                _this.hidden = node.hidden;
            }
            if (node.children) {
                _this.children =
                    ((_c = (_b = node.children) === null || _b === void 0 ? void 0 : _b.map) === null || _c === void 0 ? void 0 : _c.call(_b, function (node) {
                        return new TreeNode(node, _this);
                    })) || [];
            }
        });
    };
    TreeNode.prototype.serialize = function () {
        return {
            id: this.id,
            componentName: this.componentName,
            sourceName: this.sourceName,
            props: toJS(this.props),
            hidden: this.hidden,
            children: this.children.map(function (treeNode) {
                return treeNode.serialize();
            }),
        };
    };
    TreeNode.getAllTreeNodes = function () {
        return TreeNodes;
    };
    TreeNode.create = function (node, parent) {
        return new TreeNode(node, parent);
    };
    TreeNode.findById = function (id) {
        return TreeNodes.get(id);
    };
    TreeNode.remove = function (nodes) {
        var _a, _b;
        if (nodes === void 0) { nodes = []; }
        for (var i = nodes.length - 1; i >= 0; i--) {
            var node = nodes[i];
            if (node.allowDelete()) {
                var previous = node.previous;
                var next = node.next;
                node.remove();
                (_a = node.operation) === null || _a === void 0 ? void 0 : _a.selection.select(previous ? previous : next ? next : node.parent);
                (_b = node.operation) === null || _b === void 0 ? void 0 : _b.hover.clear();
            }
        }
    };
    TreeNode.sort = function (nodes) {
        if (nodes === void 0) { nodes = []; }
        return nodes.sort(function (before, after) {
            if (before.depth !== after.depth)
                return 0;
            return before.index - after.index >= 0 ? 1 : -1;
        });
    };
    TreeNode.clone = function (nodes) {
        if (nodes === void 0) { nodes = []; }
        var groups = {};
        var lastGroupNode = {};
        var filterNestedNode = TreeNode.sort(nodes).filter(function (node) {
            return !nodes.some(function (parent) {
                return node.isMyParents(parent);
            });
        });
        each(filterNestedNode, function (node) {
            var _a, _b, _c, _d, _e, _f, _g;
            if (node === node.root)
                return;
            if (!node.allowClone())
                return;
            if (!(node === null || node === void 0 ? void 0 : node.operation))
                return;
            groups[(_a = node === null || node === void 0 ? void 0 : node.parent) === null || _a === void 0 ? void 0 : _a.id] = groups[(_b = node === null || node === void 0 ? void 0 : node.parent) === null || _b === void 0 ? void 0 : _b.id] || [];
            groups[(_c = node === null || node === void 0 ? void 0 : node.parent) === null || _c === void 0 ? void 0 : _c.id].push(node);
            if (lastGroupNode[(_d = node === null || node === void 0 ? void 0 : node.parent) === null || _d === void 0 ? void 0 : _d.id]) {
                if (node.index > lastGroupNode[(_e = node === null || node === void 0 ? void 0 : node.parent) === null || _e === void 0 ? void 0 : _e.id].index) {
                    lastGroupNode[(_f = node === null || node === void 0 ? void 0 : node.parent) === null || _f === void 0 ? void 0 : _f.id] = node;
                }
            }
            else {
                lastGroupNode[(_g = node === null || node === void 0 ? void 0 : node.parent) === null || _g === void 0 ? void 0 : _g.id] = node;
            }
        });
        var parents = new Map();
        each(groups, function (nodes, parentId) {
            var lastNode = lastGroupNode[parentId];
            var insertPoint = lastNode;
            each(nodes, function (node) {
                var _a, _b;
                var cloned = node.clone();
                if (!cloned)
                    return;
                if (((_a = node.operation) === null || _a === void 0 ? void 0 : _a.selection.has(node)) &&
                    insertPoint.parent.allowAppend([cloned])) {
                    insertPoint.insertAfter(cloned);
                    insertPoint = insertPoint.next;
                }
                else if (node.operation.selection.length === 1) {
                    var targetNode = (_b = node.operation) === null || _b === void 0 ? void 0 : _b.tree.findById(node.operation.selection.first);
                    var cloneNodes = parents.get(targetNode);
                    if (!cloneNodes) {
                        cloneNodes = [];
                        parents.set(targetNode, cloneNodes);
                    }
                    if (targetNode && targetNode.allowAppend([cloned])) {
                        cloneNodes.push(cloned);
                    }
                }
            });
        });
        parents.forEach(function (nodes, target) {
            if (!nodes.length)
                return;
            target.append.apply(target, __spreadArray([], __read(nodes), false));
        });
    };
    TreeNode.filterResizable = function (nodes) {
        if (nodes === void 0) { nodes = []; }
        return nodes.filter(function (node) { return node.allowResize(); });
    };
    TreeNode.filterRotatable = function (nodes) {
        if (nodes === void 0) { nodes = []; }
        return nodes.filter(function (node) { return node.allowRotate(); });
    };
    TreeNode.filterScalable = function (nodes) {
        if (nodes === void 0) { nodes = []; }
        return nodes.filter(function (node) { return node.allowScale(); });
    };
    TreeNode.filterRoundable = function (nodes) {
        if (nodes === void 0) { nodes = []; }
        return nodes.filter(function (node) { return node.allowRound(); });
    };
    TreeNode.filterTranslatable = function (nodes) {
        if (nodes === void 0) { nodes = []; }
        return nodes.filter(function (node) { return node.allowTranslate(); });
    };
    TreeNode.filterDraggable = function (nodes) {
        if (nodes === void 0) { nodes = []; }
        return nodes.reduce(function (buf, node) {
            var _a;
            if (!node.allowDrag())
                return buf;
            if (isFn((_a = node === null || node === void 0 ? void 0 : node.designerProps) === null || _a === void 0 ? void 0 : _a.getDragNodes)) {
                var transformed = node.designerProps.getDragNodes(node);
                return transformed ? buf.concat(transformed) : buf;
            }
            if (node.componentName === '$$ResourceNode$$')
                return buf.concat(node.children);
            return buf.concat([node]);
        }, []);
    };
    TreeNode.filterDroppable = function (nodes, parent) {
        if (nodes === void 0) { nodes = []; }
        return nodes.reduce(function (buf, node) {
            var _a;
            if (!node.allowDrop(parent))
                return buf;
            if (isFn((_a = node.designerProps) === null || _a === void 0 ? void 0 : _a.getDropNodes)) {
                var cloned = node.isSourceNode ? node.clone(node.parent) : node;
                var transformed = node.designerProps.getDropNodes(cloned, parent);
                return transformed ? buf.concat(transformed) : buf;
            }
            if (node.componentName === '$$ResourceNode$$')
                return buf.concat(node.children);
            return buf.concat([node]);
        }, []);
    };
    return TreeNode;
}());

/**
 * 视口模型
 */
var Viewport = /** @class */ (function () {
    function Viewport(props) {
        var _a, _b;
        this.scrollX = 0;
        this.scrollY = 0;
        this.width = 0;
        this.height = 0;
        this.mounted = false;
        this.nodeElementsStore = {};
        this.workspace = props.workspace;
        this.engine = props.engine;
        this.moveSensitive = (_a = props.moveSensitive) !== null && _a !== void 0 ? _a : false;
        this.moveInsertionType = (_b = props.moveInsertionType) !== null && _b !== void 0 ? _b : 'all';
        this.viewportElement = props.viewportElement;
        this.contentWindow = props.contentWindow;
        this.nodeIdAttrName = props.nodeIdAttrName;
        this.digestViewport();
        this.makeObservable();
        this.attachEvents();
    }
    Object.defineProperty(Viewport.prototype, "isScrollLeft", {
        get: function () {
            return this.scrollX === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "isScrollTop", {
        get: function () {
            return this.scrollY === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "isScrollRight", {
        get: function () {
            var _a, _b, _c;
            if (this.isIframe) {
                return (this.width + this.contentWindow.scrollX >=
                    ((_c = (_b = (_a = this.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.body) === null || _c === void 0 ? void 0 : _c.scrollWidth));
            }
            else if (this.viewportElement) {
                return (this.viewportElement.offsetWidth + this.scrollX >=
                    this.viewportElement.scrollWidth);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "isScrollBottom", {
        get: function () {
            var _a, _b;
            if (this.isIframe) {
                if (!((_b = (_a = this.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.body))
                    return false;
                return (this.height + this.contentWindow.scrollY >=
                    this.contentWindow.document.body.scrollHeight);
            }
            else if (this.viewportElement) {
                if (!this.viewportElement)
                    return false;
                return (this.viewportElement.offsetHeight + this.viewportElement.scrollTop >=
                    this.viewportElement.scrollHeight);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "viewportRoot", {
        get: function () {
            var _a, _b;
            return this.isIframe
                ? (_b = (_a = this.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.body
                : this.viewportElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "isMaster", {
        get: function () {
            return this.contentWindow === globalThisPolyfill;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "isIframe", {
        get: function () {
            var _a;
            return !!((_a = this.contentWindow) === null || _a === void 0 ? void 0 : _a.frameElement) && !this.isMaster;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "scrollContainer", {
        get: function () {
            return this.isIframe ? this.contentWindow : this.viewportElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "rect", {
        get: function () {
            var viewportElement = this.viewportElement;
            if (viewportElement)
                return viewportElement.getBoundingClientRect();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "innerRect", {
        get: function () {
            var rect = this.rect;
            return new Rect(0, 0, rect === null || rect === void 0 ? void 0 : rect.width, rect === null || rect === void 0 ? void 0 : rect.height);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "offsetX", {
        get: function () {
            var rect = this.rect;
            if (!rect)
                return 0;
            return rect.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "offsetY", {
        get: function () {
            var rect = this.rect;
            if (!rect)
                return 0;
            return rect.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "scale", {
        get: function () {
            if (!this.viewportElement)
                return 1;
            var clientRect = this.viewportElement.getBoundingClientRect();
            var offsetWidth = this.viewportElement.offsetWidth;
            if (!clientRect.width || !offsetWidth)
                return 1;
            return Math.round(clientRect.width / offsetWidth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "dragScrollXDelta", {
        get: function () {
            return this.scrollX - this.dragStartSnapshot.scrollX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "dragScrollYDelta", {
        get: function () {
            return this.scrollY - this.dragStartSnapshot.scrollY;
        },
        enumerable: false,
        configurable: true
    });
    Viewport.prototype.cacheElements = function () {
        var _this = this;
        var _a;
        this.nodeElementsStore = {};
        (_a = this.viewportRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll("*[".concat(this.nodeIdAttrName, "]")).forEach(function (element) {
            var id = element.getAttribute(_this.nodeIdAttrName);
            _this.nodeElementsStore[id] = _this.nodeElementsStore[id] || [];
            _this.nodeElementsStore[id].push(element);
        });
    };
    Viewport.prototype.clearCache = function () {
        this.nodeElementsStore = {};
    };
    Viewport.prototype.getCurrentData = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var data = {};
        if (this.isIframe) {
            data.scrollX = ((_a = this.contentWindow) === null || _a === void 0 ? void 0 : _a.scrollX) || 0;
            data.scrollY = ((_b = this.contentWindow) === null || _b === void 0 ? void 0 : _b.scrollY) || 0;
            data.width = ((_c = this.contentWindow) === null || _c === void 0 ? void 0 : _c.innerWidth) || 0;
            data.height = ((_d = this.contentWindow) === null || _d === void 0 ? void 0 : _d.innerHeight) || 0;
        }
        else if (this.viewportElement) {
            data.scrollX = ((_e = this.viewportElement) === null || _e === void 0 ? void 0 : _e.scrollLeft) || 0;
            data.scrollY = ((_f = this.viewportElement) === null || _f === void 0 ? void 0 : _f.scrollTop) || 0;
            data.width = ((_g = this.viewportElement) === null || _g === void 0 ? void 0 : _g.clientWidth) || 0;
            data.height = ((_h = this.viewportElement) === null || _h === void 0 ? void 0 : _h.clientHeight) || 0;
        }
        return data;
    };
    Viewport.prototype.takeDragStartSnapshot = function () {
        this.dragStartSnapshot = this.getCurrentData();
    };
    Viewport.prototype.digestViewport = function () {
        Object.assign(this, this.getCurrentData());
    };
    Viewport.prototype.elementFromPoint = function (point) {
        var _a;
        if ((_a = this.contentWindow) === null || _a === void 0 ? void 0 : _a.document) {
            return this.contentWindow.document.elementFromPoint(point.x, point.y);
        }
    };
    Viewport.prototype.matchViewport = function (target) {
        var _a;
        if (this.isIframe) {
            return (target === this.viewportElement ||
                target === this.contentWindow ||
                target === ((_a = this.contentWindow) === null || _a === void 0 ? void 0 : _a.document));
        }
        else {
            return target === this.viewportElement;
        }
    };
    Viewport.prototype.attachEvents = function () {
        var _this = this;
        var engine = this.engine;
        cancelIdle(this.attachRequest);
        this.attachRequest = requestIdle(function () {
            if (!engine)
                return;
            if (_this.isIframe) {
                _this.workspace.attachEvents(_this.contentWindow, _this.contentWindow);
            }
            else if (isHTMLElement(_this.viewportElement)) {
                _this.workspace.attachEvents(_this.viewportElement, _this.contentWindow);
            }
        });
    };
    Viewport.prototype.detachEvents = function () {
        if (this.isIframe) {
            this.workspace.detachEvents(this.contentWindow);
            this.workspace.detachEvents(this.viewportElement);
        }
        else if (this.viewportElement) {
            this.workspace.detachEvents(this.viewportElement);
        }
    };
    Viewport.prototype.onMount = function (element, contentWindow) {
        this.mounted = true;
        this.viewportElement = element;
        this.contentWindow = contentWindow;
        this.attachEvents();
        this.digestViewport();
    };
    Viewport.prototype.onUnmount = function () {
        this.mounted = false;
        this.detachEvents();
    };
    Viewport.prototype.isPointInViewport = function (point, sensitive) {
        if (!this.rect)
            return false;
        if (!this.containsElement(document.elementFromPoint(point.x, point.y))) {
            return false;
        }
        return isPointInRect(point, this.rect, sensitive);
    };
    Viewport.prototype.isRectInViewport = function (rect) {
        if (!this.rect)
            return false;
        if (!this.containsElement(document.elementFromPoint(rect.x, rect.y))) {
            return false;
        }
        return isRectInRect(rect, this.rect);
    };
    Viewport.prototype.isPointInViewportArea = function (point, sensitive) {
        if (!this.rect)
            return false;
        return isPointInRect(point, this.rect, sensitive);
    };
    Viewport.prototype.isOffsetPointInViewport = function (point, sensitive) {
        if (!this.innerRect)
            return false;
        if (!this.containsElement(document.elementFromPoint(point.x, point.y)))
            return false;
        return isPointInRect(point, this.innerRect, sensitive);
    };
    Viewport.prototype.isOffsetRectInViewport = function (rect) {
        if (!this.innerRect)
            return false;
        if (!this.containsElement(document.elementFromPoint(rect.x, rect.y))) {
            return false;
        }
        return isRectInRect(rect, this.innerRect);
    };
    Viewport.prototype.makeObservable = function () {
        define(this, {
            scrollX: observable.ref,
            scrollY: observable.ref,
            width: observable.ref,
            height: observable.ref,
            digestViewport: action,
            viewportElement: observable.ref,
            contentWindow: observable.ref,
        });
    };
    Viewport.prototype.findElementById = function (id) {
        var _a;
        if (!id)
            return;
        if (this.nodeElementsStore[id])
            return this.nodeElementsStore[id][0];
        return (_a = this.viewportRoot) === null || _a === void 0 ? void 0 : _a.querySelector("*[".concat(this.nodeIdAttrName, "='").concat(id, "']"));
    };
    Viewport.prototype.findElementsById = function (id) {
        var _a, _b;
        if (!id)
            return [];
        if (this.nodeElementsStore[id])
            return this.nodeElementsStore[id];
        return Array.from((_b = (_a = this.viewportRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll("*[".concat(this.nodeIdAttrName, "='").concat(id, "']"))) !== null && _b !== void 0 ? _b : []);
    };
    Viewport.prototype.containsElement = function (element) {
        var root = this.viewportElement;
        if (root === element)
            return true;
        return root === null || root === void 0 ? void 0 : root.contains(element);
    };
    Viewport.prototype.getOffsetPoint = function (topPoint) {
        var data = this.getCurrentData();
        return {
            x: topPoint.x - this.offsetX + data.scrollX,
            y: topPoint.y - this.offsetY + data.scrollY,
        };
    };
    //相对于页面
    Viewport.prototype.getElementRect = function (element) {
        var rect = element.getBoundingClientRect();
        var offsetWidth = element['offsetWidth']
            ? element['offsetWidth']
            : rect.width;
        var offsetHeight = element['offsetHeight']
            ? element['offsetHeight']
            : rect.height;
        return new Rect(rect.x, rect.y, this.scale !== 1 ? offsetWidth : rect.width, this.scale !== 1 ? offsetHeight : rect.height);
    };
    //相对于页面
    Viewport.prototype.getElementRectById = function (id) {
        var _this = this;
        var elements = this.findElementsById(id);
        var rect = calcBoundingRect(elements.map(function (element) { return _this.getElementRect(element); }));
        if (rect) {
            if (this.isIframe) {
                return new Rect(rect.x + this.offsetX, rect.y + this.offsetY, rect.width, rect.height);
            }
            else {
                return new Rect(rect.x, rect.y, rect.width, rect.height);
            }
        }
    };
    //相对于视口
    Viewport.prototype.getElementOffsetRect = function (element) {
        var elementRect = element.getBoundingClientRect();
        if (elementRect) {
            if (this.isIframe) {
                return new Rect(elementRect.x + this.contentWindow.scrollX, elementRect.y + this.contentWindow.scrollY, elementRect.width, elementRect.height);
            }
            else {
                return new Rect((elementRect.x - this.offsetX + this.viewportElement.scrollLeft) /
                    this.scale, (elementRect.y - this.offsetY + this.viewportElement.scrollTop) /
                    this.scale, elementRect.width, elementRect.height);
            }
        }
    };
    //相对于视口
    Viewport.prototype.getElementOffsetRectById = function (id) {
        var _this = this;
        var elements = this.findElementsById(id);
        if (!elements.length)
            return;
        var elementRect = calcBoundingRect(elements.map(function (element) { return _this.getElementRect(element); }));
        if (elementRect) {
            if (this.isIframe) {
                return new Rect(elementRect.x + this.contentWindow.scrollX, elementRect.y + this.contentWindow.scrollY, elementRect.width, elementRect.height);
            }
            else {
                return new Rect((elementRect.x - this.offsetX + this.viewportElement.scrollLeft) /
                    this.scale, (elementRect.y - this.offsetY + this.viewportElement.scrollTop) /
                    this.scale, elementRect.width, elementRect.height);
            }
        }
    };
    Viewport.prototype.getValidNodeElement = function (node) {
        var _this = this;
        var getNodeElement = function (node) {
            if (!node)
                return;
            var ele = _this.findElementById(node.id);
            if (ele) {
                return ele;
            }
            else {
                return getNodeElement(node.parent);
            }
        };
        return getNodeElement(node);
    };
    Viewport.prototype.getChildrenRect = function (node) {
        var _this = this;
        var _a;
        if (!((_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.length))
            return;
        return calcBoundingRect(node.children.reduce(function (buf, child) {
            var rect = _this.getValidNodeRect(child);
            if (rect) {
                return buf.concat(rect);
            }
            return buf;
        }, []));
    };
    Viewport.prototype.getChildrenOffsetRect = function (node) {
        var _this = this;
        var _a;
        if (!((_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.length))
            return;
        return calcBoundingRect(node.children.reduce(function (buf, child) {
            var rect = _this.getValidNodeOffsetRect(child);
            if (rect) {
                return buf.concat(rect);
            }
            return buf;
        }, []));
    };
    Viewport.prototype.getValidNodeRect = function (node) {
        if (!node)
            return;
        var rect = this.getElementRectById(node.id);
        if (node && node === node.root && node.isInOperation) {
            if (!rect)
                return this.rect;
            return calcBoundingRect([this.rect, rect]);
        }
        if (rect) {
            return rect;
        }
        else {
            return this.getChildrenRect(node);
        }
    };
    Viewport.prototype.getValidNodeOffsetRect = function (node) {
        if (!node)
            return;
        var rect = this.getElementOffsetRectById(node.id);
        if (node && node === node.root && node.isInOperation) {
            if (!rect)
                return this.innerRect;
            return calcBoundingRect([this.innerRect, rect]);
        }
        if (rect) {
            return rect;
        }
        else {
            return this.getChildrenOffsetRect(node);
        }
    };
    Viewport.prototype.getValidNodeLayout = function (node) {
        var _a, _b;
        if (!node)
            return 'vertical';
        if ((_b = (_a = node.parent) === null || _a === void 0 ? void 0 : _a.designerProps) === null || _b === void 0 ? void 0 : _b.inlineChildrenLayout)
            return 'horizontal';
        return calcElementLayout(this.findElementById(node.id));
    };
    return Viewport;
}());

var Selection = /** @class */ (function () {
    function Selection(props) {
        this.selected = [];
        this.indexes = {};
        if (props.selected) {
            this.selected = props.selected;
        }
        if (props.operation) {
            this.operation = props.operation;
        }
        this.makeObservable();
    }
    Selection.prototype.makeObservable = function () {
        define(this, {
            selected: observable,
            select: action,
            batchSelect: action,
            add: action,
            remove: action,
            clear: action,
            crossAddTo: action,
        });
    };
    Selection.prototype.trigger = function (type) {
        if (type === void 0) { type = SelectNodeEvent; }
        return this.operation.dispatch(new type({
            target: this.operation.tree,
            source: this.selectedNodes,
        }));
    };
    Selection.prototype.select = function (id) {
        var _a;
        if (isStr(id)) {
            if (this.selected.length === 1 && this.selected.includes(id)) {
                this.trigger(SelectNodeEvent);
                return;
            }
            this.selected = [id];
            this.indexes = (_a = {}, _a[id] = true, _a);
            this.trigger(SelectNodeEvent);
        }
        else {
            this.select(id === null || id === void 0 ? void 0 : id.id);
        }
    };
    Selection.prototype.safeSelect = function (id) {
        if (!id)
            return;
        this.select(id);
    };
    Selection.prototype.mapIds = function (ids) {
        return isArr(ids)
            ? ids.map(function (node) { return (isStr(node) ? node : node === null || node === void 0 ? void 0 : node.id); })
            : [];
    };
    Selection.prototype.batchSelect = function (ids) {
        this.selected = this.mapIds(ids);
        this.indexes = this.selected.reduce(function (buf, id) {
            buf[id] = true;
            return buf;
        }, {});
        this.trigger(SelectNodeEvent);
    };
    Selection.prototype.batchSafeSelect = function (ids) {
        if (!(ids === null || ids === void 0 ? void 0 : ids.length))
            return;
        this.batchSelect(ids);
    };
    Object.defineProperty(Selection.prototype, "selectedNodes", {
        get: function () {
            var _this = this;
            return this.selected.map(function (id) { return _this.operation.tree.findById(id); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "first", {
        get: function () {
            if (this.selected && this.selected.length)
                return this.selected[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "last", {
        get: function () {
            if (this.selected && this.selected.length)
                return this.selected[this.selected.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "length", {
        get: function () {
            return this.selected.length;
        },
        enumerable: false,
        configurable: true
    });
    Selection.prototype.add = function () {
        var _this = this;
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        this.mapIds(ids).forEach(function (id) {
            if (isStr(id)) {
                if (!_this.selected.includes(id)) {
                    _this.selected.push(id);
                    _this.indexes[id] = true;
                }
            }
            else {
                _this.add(id === null || id === void 0 ? void 0 : id.id);
            }
        });
        this.trigger();
    };
    Selection.prototype.crossAddTo = function (node) {
        var _this = this;
        if (node.parent) {
            var selectedNodes = this.selectedNodes;
            if (this.has(node)) {
                this.remove(node);
            }
            else {
                var minDistanceNode = selectedNodes.reduce(function (minDistanceNode, item) {
                    return item.distanceTo(node) < minDistanceNode.distanceTo(node)
                        ? item
                        : minDistanceNode;
                }, selectedNodes[0]);
                if (minDistanceNode) {
                    var crossNodes = node.crossSiblings(minDistanceNode);
                    crossNodes.forEach(function (node) {
                        if (!_this.has(node.id)) {
                            _this.selected.push(node.id);
                            _this.indexes[node.id] = true;
                        }
                    });
                }
                if (!this.has(node.id)) {
                    this.selected.push(node.id);
                    this.indexes[node.id] = true;
                }
            }
        }
    };
    Selection.prototype.remove = function () {
        var _this = this;
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        this.mapIds(ids).forEach(function (id) {
            if (isStr(id)) {
                _this.selected = _this.selected.filter(function (item) { return item !== id; });
                delete _this.indexes[id];
            }
            else {
                _this.remove(id === null || id === void 0 ? void 0 : id.id);
            }
        });
        this.trigger(UnSelectNodeEvent);
    };
    Selection.prototype.has = function () {
        var _this = this;
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        return this.mapIds(ids).some(function (id) {
            if (isStr(id)) {
                return _this.indexes[id];
            }
            else {
                if (!(id === null || id === void 0 ? void 0 : id.id))
                    return false;
                return _this.has(id === null || id === void 0 ? void 0 : id.id);
            }
        });
    };
    Selection.prototype.clear = function () {
        this.selected = [];
        this.indexes = {};
        this.trigger(UnSelectNodeEvent);
    };
    return Selection;
}());

var Hover = /** @class */ (function () {
    function Hover(props) {
        this.node = null;
        this.operation = props === null || props === void 0 ? void 0 : props.operation;
        this.makeObservable();
    }
    Hover.prototype.setHover = function (node) {
        if (node) {
            this.node = node;
        }
        else {
            this.node = null;
        }
        this.trigger();
    };
    Hover.prototype.clear = function () {
        this.node = null;
    };
    Hover.prototype.trigger = function () {
        if (this.operation) {
            return this.operation.dispatch(new HoverNodeEvent({
                target: this.operation.tree,
                source: this.node,
            }));
        }
    };
    Hover.prototype.makeObservable = function () {
        define(this, {
            node: observable.ref,
            setHover: action,
            clear: action,
        });
    };
    return Hover;
}());

var SnapLine = /** @class */ (function () {
    function SnapLine(helper, line) {
        this.helper = helper;
        this.type = line.type || 'normal';
        this._id = line.id;
        this.refer = line.refer;
        this.start = __assign({}, line.start);
        this.end = __assign({}, line.end);
        this.distance = line.distance;
    }
    Object.defineProperty(SnapLine.prototype, "id", {
        get: function () {
            var _a;
            return ((_a = this._id) !== null && _a !== void 0 ? _a : "".concat(this.start.x, "-").concat(this.start.y, "-").concat(this.end.x, "-").concat(this.end.y));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnapLine.prototype, "direction", {
        get: function () {
            var _a, _b;
            if (((_a = this.start) === null || _a === void 0 ? void 0 : _a.x) === ((_b = this.end) === null || _b === void 0 ? void 0 : _b.x))
                return 'v';
            return 'h';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnapLine.prototype, "closest", {
        get: function () {
            return this.distance < TransformHelper.threshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnapLine.prototype, "rect", {
        get: function () {
            return calcRectOfAxisLineSegment(this);
        },
        enumerable: false,
        configurable: true
    });
    SnapLine.prototype.translate = function (node, translate) {
        if (!node || !(node === null || node === void 0 ? void 0 : node.parent))
            return;
        var parent = node.parent;
        var dragNodeRect = node.getValidElementOffsetRect();
        var parentRect = parent.getValidElementOffsetRect();
        var edgeOffset = calcOffsetOfSnapLineSegmentToEdge(this, dragNodeRect);
        if (this.direction === 'h') {
            translate.y = this.start.y - parentRect.y - edgeOffset.y;
        }
        else {
            translate.x = this.start.x - parentRect.x - edgeOffset.x;
        }
    };
    SnapLine.prototype.resize = function (node, rect) {
        if (!node || !(node === null || node === void 0 ? void 0 : node.parent))
            return;
        var parent = node.parent;
        var dragNodeRect = node.getValidElementOffsetRect();
        var parentRect = parent.getValidElementOffsetRect();
        var edgeOffset = calcOffsetOfSnapLineSegmentToEdge(this, dragNodeRect);
        var cursorRect = this.helper.cursorDragNodesRect;
        var snapEdge = this.snapEdge(rect);
        if (this.direction === 'h') {
            var y = this.start.y - parentRect.y - edgeOffset.y;
            switch (this.helper.direction) {
                case 'left-top':
                case 'center-top':
                case 'right-top':
                    if (snapEdge !== 'ht')
                        return;
                    rect.y = y;
                    rect.height = cursorRect.bottom - y;
                    break;
                case 'left-bottom':
                case 'center-bottom':
                case 'right-bottom':
                    if (snapEdge !== 'hb')
                        return;
                    rect.height = this.start.y - cursorRect.top;
                    break;
            }
        }
        else {
            var x = this.start.x - parentRect.x - edgeOffset.x;
            switch (this.helper.direction) {
                case 'left-top':
                case 'left-bottom':
                case 'left-center':
                    if (snapEdge !== 'vl')
                        return;
                    rect.x = x;
                    rect.width = cursorRect.right - x;
                    break;
                case 'right-center':
                case 'right-top':
                case 'right-bottom':
                    if (snapEdge !== 'vr')
                        return;
                    rect.width = this.start.x - cursorRect.left;
                    break;
            }
        }
    };
    SnapLine.prototype.snapEdge = function (rect) {
        var threshold = TransformHelper.threshold;
        if (this.direction === 'h') {
            if (Math.abs(this.start.y - rect.top) < threshold)
                return 'ht';
            if (Math.abs(this.start.y - (rect.top + rect.height / 2)) < threshold)
                return 'hc';
            if (Math.abs(this.start.y - rect.bottom) < threshold)
                return 'hb';
        }
        else {
            if (Math.abs(this.start.x - rect.left) < threshold)
                return 'vl';
            if (Math.abs(this.start.x - (rect.left + rect.width / 2)) < threshold)
                return 'vc';
            if (Math.abs(this.start.x - rect.right) < threshold)
                return 'vr';
        }
    };
    return SnapLine;
}());

var SpaceBlock = /** @class */ (function () {
    function SpaceBlock(helper, box) {
        this.helper = helper;
        this.distance = box.distance;
        this.refer = box.refer;
        this.rect = box.rect;
        this.type = box.type;
    }
    Object.defineProperty(SpaceBlock.prototype, "referRect", {
        get: function () {
            if (!this.refer)
                return;
            return this.helper.getNodeRect(this.refer);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpaceBlock.prototype, "id", {
        get: function () {
            var _a;
            return ((_a = this._id) !== null && _a !== void 0 ? _a : "".concat(this.rect.x, "-").concat(this.rect.y, "-").concat(this.rect.width, "-").concat(this.rect.height));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpaceBlock.prototype, "next", {
        get: function () {
            var spaceBlock = this.helper.calcAroundSpaceBlocks(this.referRect);
            return spaceBlock[this.type];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpaceBlock.prototype, "extendsLine", {
        get: function () {
            if (!this.needExtendsLine)
                return;
            var dragNodesRect = this.helper.dragNodesRect;
            return calcExtendsLineSegmentOfRect(dragNodesRect, this.referRect);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpaceBlock.prototype, "needExtendsLine", {
        get: function () {
            var targetRect = this.crossDragNodesRect;
            var referRect = this.crossReferRect;
            if (this.type === 'top' || this.type === 'bottom') {
                var rightDelta = referRect.right - targetRect.left;
                var leftDelta = targetRect.right - referRect.left;
                return (rightDelta < targetRect.width / 2 || leftDelta < targetRect.width / 2);
            }
            else {
                var topDelta = targetRect.bottom - referRect.top;
                var bottomDelta = referRect.bottom - targetRect.top;
                return (topDelta < targetRect.height / 2 || bottomDelta < targetRect.height / 2);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpaceBlock.prototype, "crossReferRect", {
        get: function () {
            var referRect = this.referRect;
            if (this.type === 'top' || this.type === 'bottom') {
                return new Rect(referRect.x, this.rect.y, referRect.width, this.rect.height);
            }
            else {
                return new Rect(this.rect.x, referRect.y, this.rect.width, referRect.height);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpaceBlock.prototype, "crossDragNodesRect", {
        get: function () {
            var dragNodesRect = this.helper.dragNodesRect;
            if (this.type === 'top' || this.type === 'bottom') {
                return new Rect(dragNodesRect.x, this.rect.y, dragNodesRect.width, this.rect.height);
            }
            else {
                return new Rect(this.rect.x, dragNodesRect.y, this.rect.width, dragNodesRect.height);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpaceBlock.prototype, "isometrics", {
        get: function () {
            var results = [];
            var spaceBlock = this;
            while ((spaceBlock = spaceBlock.next)) {
                if (Math.abs(spaceBlock.distance - this.distance) <
                    TransformHelper.threshold) {
                    if (results.some(function (box) { return box.distance !== spaceBlock.distance; }))
                        continue;
                    results.push(spaceBlock);
                }
            }
            return results;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpaceBlock.prototype, "snapLine", {
        get: function () {
            if (!this.isometrics.length)
                return;
            var nextRect = this.next.rect;
            var referRect = this.referRect;
            var line;
            if (this.type === 'top') {
                line = new LineSegment({
                    x: nextRect.left,
                    y: referRect.bottom + nextRect.height,
                }, {
                    x: nextRect.right,
                    y: referRect.bottom + nextRect.height,
                });
            }
            else if (this.type === 'bottom') {
                line = new LineSegment({
                    x: nextRect.left,
                    y: referRect.top - nextRect.height,
                }, {
                    x: nextRect.right,
                    y: referRect.top - nextRect.height,
                });
            }
            else if (this.type === 'left') {
                line = new LineSegment({
                    x: referRect.right + nextRect.width,
                    y: nextRect.top,
                }, {
                    x: referRect.right + nextRect.width,
                    y: nextRect.bottom,
                });
            }
            else {
                line = new LineSegment({
                    x: referRect.left - nextRect.width,
                    y: nextRect.top,
                }, {
                    x: referRect.left - nextRect.width,
                    y: nextRect.bottom,
                });
            }
            var distance = calcDistanceOfSnapLineToEdges(line, this.helper.dragNodesEdgeLines);
            return new SnapLine(this.helper, __assign(__assign({}, line), { distance: distance, type: 'space-block' }));
        },
        enumerable: false,
        configurable: true
    });
    return SpaceBlock;
}());

var CursorStatus;
(function (CursorStatus) {
    CursorStatus["Normal"] = "NORMAL";
    CursorStatus["DragStart"] = "DRAG_START";
    CursorStatus["Dragging"] = "DRAGGING";
    CursorStatus["DragStop"] = "DRAG_STOP";
})(CursorStatus || (CursorStatus = {}));
var CursorDragType;
(function (CursorDragType) {
    CursorDragType["Move"] = "MOVE";
    CursorDragType["Resize"] = "RESIZE";
    CursorDragType["Rotate"] = "ROTATE";
    CursorDragType["Scale"] = "SCALE";
    CursorDragType["Translate"] = "TRANSLATE";
    CursorDragType["Round"] = "ROUND";
})(CursorDragType || (CursorDragType = {}));
var CursorType;
(function (CursorType) {
    CursorType["Normal"] = "NORMAL";
    CursorType["Selection"] = "SELECTION";
    CursorType["Sketch"] = "SKETCH";
})(CursorType || (CursorType = {}));
var DEFAULT_POSITION = {
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    topPageX: 0,
    topPageY: 0,
    topClientX: 0,
    topClientY: 0,
};
var setCursorStyle = function (contentWindow, style) {
    var _a, _b, _c, _d;
    var currentRoot = (_b = (_a = document === null || document === void 0 ? void 0 : document.getElementsByTagName) === null || _a === void 0 ? void 0 : _a.call(document, 'html')) === null || _b === void 0 ? void 0 : _b[0];
    var root = (_d = (_c = contentWindow === null || contentWindow === void 0 ? void 0 : contentWindow.document) === null || _c === void 0 ? void 0 : _c.getElementsByTagName('html')) === null || _d === void 0 ? void 0 : _d[0];
    if (root && root.style.cursor !== style) {
        root.style.cursor = style;
    }
    if (currentRoot && currentRoot.style.cursor !== style) {
        currentRoot.style.cursor = style;
    }
};
var calcPositionDelta = function (end, start) {
    return Object.keys(end || {}).reduce(function (buf, key) {
        if (isValidNumber(end === null || end === void 0 ? void 0 : end[key]) && isValidNumber(start === null || start === void 0 ? void 0 : start[key])) {
            buf[key] = end[key] - start[key];
        }
        else {
            buf[key] = end[key];
        }
        return buf;
    }, {});
};
var Cursor = /** @class */ (function () {
    function Cursor(engine) {
        this.type = CursorType.Normal;
        this.dragType = CursorDragType.Move;
        this.status = CursorStatus.Normal;
        this.position = DEFAULT_POSITION;
        this.dragAtomDelta = DEFAULT_POSITION;
        this.dragStartToCurrentDelta = DEFAULT_POSITION;
        this.dragStartToEndDelta = DEFAULT_POSITION;
        this.view = globalThisPolyfill;
        this.engine = engine;
        this.makeObservable();
    }
    Cursor.prototype.makeObservable = function () {
        define(this, {
            type: observable.ref,
            dragType: observable.ref,
            status: observable.ref,
            position: observable.ref,
            dragStartPosition: observable.ref,
            dragEndPosition: observable.ref,
            dragAtomDelta: observable.ref,
            dragStartToCurrentDelta: observable.ref,
            dragStartToEndDelta: observable.ref,
            view: observable.ref,
            setStyle: action,
            setPosition: action,
            setStatus: action,
            setType: action,
        });
    };
    Object.defineProperty(Cursor.prototype, "speed", {
        get: function () {
            return Math.sqrt(Math.pow(this.dragAtomDelta.clientX, 2) +
                Math.pow(this.dragAtomDelta.clientY, 2));
        },
        enumerable: false,
        configurable: true
    });
    Cursor.prototype.setStatus = function (status) {
        this.status = status;
    };
    Cursor.prototype.setType = function (type) {
        this.type = type;
    };
    Cursor.prototype.setDragType = function (type) {
        this.dragType = type;
    };
    Cursor.prototype.setStyle = function (style) {
        this.engine.workbench.eachWorkspace(function (workspace) {
            setCursorStyle(workspace.viewport.contentWindow, style);
        });
    };
    Cursor.prototype.setPosition = function (position) {
        this.dragAtomDelta = calcPositionDelta(this.position, position);
        this.position = __assign({}, position);
        if (this.status === CursorStatus.Dragging) {
            this.dragStartToCurrentDelta = calcPositionDelta(this.position, this.dragStartPosition);
        }
    };
    Cursor.prototype.setDragStartPosition = function (position) {
        if (position) {
            this.dragStartPosition = __assign({}, position);
        }
        else {
            this.dragStartPosition = null;
            this.dragStartToCurrentDelta = DEFAULT_POSITION;
        }
    };
    Cursor.prototype.setDragEndPosition = function (position) {
        if (!this.dragStartPosition)
            return;
        if (position) {
            this.dragEndPosition = __assign({}, position);
            this.dragStartToEndDelta = calcPositionDelta(this.dragStartPosition, this.dragEndPosition);
        }
        else {
            this.dragEndPosition = null;
            this.dragStartToEndDelta = DEFAULT_POSITION;
        }
    };
    return Cursor;
}());

var TransformHelper = /** @class */ (function () {
    function TransformHelper(props) {
        this.dragNodes = [];
        this.rulerSnapLines = [];
        this.aroundSnapLines = [];
        this.aroundSpaceBlocks = null;
        this.viewportRectsStore = {};
        this.dragStartTranslateStore = {};
        this.dragStartSizeStore = {};
        this.dragStartNodesRect = null;
        this.snapping = false;
        this.dragging = false;
        this.snapped = false;
        this.operation = props.operation;
        this.makeObservable();
    }
    Object.defineProperty(TransformHelper.prototype, "tree", {
        get: function () {
            return this.operation.tree;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "cursor", {
        get: function () {
            return this.operation.engine.cursor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "viewport", {
        get: function () {
            return this.operation.workspace.viewport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "deltaX", {
        get: function () {
            return this.cursor.dragStartToCurrentDelta.clientX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "deltaY", {
        get: function () {
            return this.cursor.dragStartToCurrentDelta.clientY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "cursorPosition", {
        get: function () {
            var position = this.cursor.position;
            return this.operation.workspace.viewport.getOffsetPoint(new Point(position.clientX, position.clientY));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "cursorDragNodesRect", {
        get: function () {
            if (this.type === 'translate') {
                return new Rect(this.cursorPosition.x - this.dragStartCursorOffset.x, this.cursorPosition.y - this.dragStartCursorOffset.y, this.dragNodesRect.width, this.dragNodesRect.height);
            }
            else if (this.type === 'resize') {
                var dragNodesRect = this.dragStartNodesRect;
                var deltaX = this.cursor.dragStartToCurrentDelta.clientX;
                var deltaY = this.cursor.dragStartToCurrentDelta.clientY;
                switch (this.direction) {
                    case 'left-top':
                        return new Rect(this.cursorPosition.x - this.dragStartCursorOffset.x, this.cursorPosition.y - this.dragStartCursorOffset.y, dragNodesRect.width - deltaX, dragNodesRect.height - deltaY);
                    case 'left-center':
                        return new Rect(this.cursorPosition.x - this.dragStartCursorOffset.x, dragNodesRect.y, dragNodesRect.width - deltaX, dragNodesRect.height);
                    case 'left-bottom':
                        return new Rect(this.cursorPosition.x - this.dragStartCursorOffset.x, dragNodesRect.y, dragNodesRect.width - deltaX, dragNodesRect.height - deltaY);
                    case 'center-top':
                        return new Rect(dragNodesRect.x, this.cursorPosition.y - this.dragStartCursorOffset.y, dragNodesRect.width, dragNodesRect.height - deltaY);
                    case 'center-bottom':
                        return new Rect(dragNodesRect.x, dragNodesRect.y, dragNodesRect.width, dragNodesRect.height + deltaY);
                    case 'right-top':
                        return new Rect(dragNodesRect.x, this.cursorPosition.y - this.dragStartCursorOffset.y, dragNodesRect.width + deltaX, dragNodesRect.height - deltaY);
                    case 'right-center':
                        return new Rect(dragNodesRect.x, dragNodesRect.y, dragNodesRect.width + deltaX, dragNodesRect.height);
                    case 'right-bottom':
                        return new Rect(dragNodesRect.x, dragNodesRect.y, dragNodesRect.width + deltaX, dragNodesRect.height - deltaY);
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "cursorDragNodesEdgeLines", {
        get: function () {
            return calcEdgeLinesOfRect(this.cursorDragNodesRect);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "dragNodesRect", {
        get: function () {
            if (this.draggingNodesRect)
                return this.draggingNodesRect;
            return calcBoundingRect(this.dragNodes.map(function (node) { return node.getValidElementOffsetRect(); }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "dragNodesEdgeLines", {
        get: function () {
            return calcEdgeLinesOfRect(this.dragNodesRect);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "cursorOffset", {
        get: function () {
            return new Point(this.cursorPosition.x - this.dragNodesRect.x, this.cursorPosition.y - this.dragNodesRect.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "dragStartCursor", {
        get: function () {
            var position = this.operation.engine.cursor.dragStartPosition;
            return this.operation.workspace.viewport.getOffsetPoint(new Point(position.clientX, position.clientY));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "dragStartCursorOffset", {
        get: function () {
            return new Point(this.dragStartCursor.x - this.dragStartNodesRect.x, this.dragStartCursor.y - this.dragStartNodesRect.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "closestSnapLines", {
        get: function () {
            if (!this.dragging)
                return [];
            var results = [];
            var cursorDragNodesEdgeLines = this.cursorDragNodesEdgeLines;
            this.thresholdSnapLines.forEach(function (line) {
                var distance = calcDistanceOfSnapLineToEdges(line, cursorDragNodesEdgeLines);
                if (distance < TransformHelper.threshold) {
                    var existed = results.findIndex(function (l) {
                        return l.distance > distance &&
                            l.distance > 0 &&
                            l.direction === line.direction;
                    });
                    if (existed > -1) {
                        results.splice(existed, 1);
                    }
                    results.push(line);
                }
            });
            return results;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "closestSpaceBlocks", {
        get: function () {
            if (!this.dragging)
                return [];
            var cursorDragNodesEdgeLines = this.cursorDragNodesEdgeLines;
            return this.thresholdSpaceBlocks.filter(function (block) {
                var line = block.snapLine;
                if (!line)
                    return false;
                return (calcDistanceOfSnapLineToEdges(line, cursorDragNodesEdgeLines) <
                    TransformHelper.threshold);
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "thresholdSnapLines", {
        get: function () {
            if (!this.dragging)
                return [];
            var lines = [];
            this.aroundSnapLines.forEach(function (line) {
                lines.push(line);
            });
            this.rulerSnapLines.forEach(function (line) {
                if (line.closest) {
                    lines.push(line);
                }
            });
            for (var type in this.aroundSpaceBlocks) {
                var block = this.aroundSpaceBlocks[type];
                var line = block.snapLine;
                if (line) {
                    lines.push(line);
                }
            }
            return lines;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "thresholdSpaceBlocks", {
        get: function () {
            var results = [];
            if (!this.dragging)
                return [];
            for (var type in this.aroundSpaceBlocks) {
                var block = this.aroundSpaceBlocks[type];
                if (!block.snapLine)
                    return [];
                if (block.snapLine.distance !== 0)
                    return [];
                if (block.isometrics.length) {
                    results.push(block);
                    results.push.apply(results, __spreadArray([], __read(block.isometrics), false));
                }
            }
            return results;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformHelper.prototype, "measurerSpaceBlocks", {
        get: function () {
            var results = [];
            if (!this.dragging || !this.snapped)
                return [];
            for (var type in this.aroundSpaceBlocks) {
                if (this.aroundSpaceBlocks[type])
                    results.push(this.aroundSpaceBlocks[type]);
            }
            return results;
        },
        enumerable: false,
        configurable: true
    });
    TransformHelper.prototype.calcBaseTranslate = function (node) {
        var _a;
        var dragStartTranslate = (_a = this.dragStartTranslateStore[node.id]) !== null && _a !== void 0 ? _a : {
            x: 0,
            y: 0,
        };
        var x = dragStartTranslate.x + this.deltaX, y = dragStartTranslate.y + this.deltaY;
        return { x: x, y: y };
    };
    TransformHelper.prototype.calcBaseResize = function (node) {
        var _a, _b;
        var deltaX = this.deltaX;
        var deltaY = this.deltaY;
        var dragStartTranslate = (_a = this.dragStartTranslateStore[node.id]) !== null && _a !== void 0 ? _a : {
            x: 0,
            y: 0,
        };
        var dragStartSize = (_b = this.dragStartSizeStore[node.id]) !== null && _b !== void 0 ? _b : {
            width: 0,
            height: 0,
        };
        switch (this.direction) {
            case 'left-top':
                return new Rect(dragStartTranslate.x + deltaX, dragStartTranslate.y + deltaY, dragStartSize.width - deltaX, dragStartSize.height - deltaY);
            case 'left-center':
                return new Rect(dragStartTranslate.x + deltaX, dragStartTranslate.y, dragStartSize.width - deltaX, dragStartSize.height);
            case 'left-bottom':
                return new Rect(dragStartTranslate.x + deltaX, dragStartTranslate.y, dragStartSize.width - deltaX, dragStartSize.height + deltaY);
            case 'center-bottom':
                return new Rect(dragStartTranslate.x, dragStartTranslate.y, dragStartSize.width, dragStartSize.height + deltaY);
            case 'center-top':
                return new Rect(dragStartTranslate.x, dragStartTranslate.y + deltaY, dragStartSize.width, dragStartSize.height - deltaY);
            case 'right-top':
                return new Rect(dragStartTranslate.x, dragStartTranslate.y + deltaY, dragStartSize.width + deltaX, dragStartSize.height - deltaY);
            case 'right-bottom':
                return new Rect(dragStartTranslate.x, dragStartTranslate.y, dragStartSize.width + deltaX, dragStartSize.height + deltaY);
            case 'right-center':
                return new Rect(dragStartTranslate.x, dragStartTranslate.y, dragStartSize.width + deltaX, dragStartSize.height);
        }
    };
    TransformHelper.prototype.calcDragStartStore = function (nodes) {
        var _this = this;
        if (nodes === void 0) { nodes = []; }
        this.dragStartNodesRect = this.dragNodesRect;
        nodes.forEach(function (node) {
            var element = node.getElement();
            var rect = node.getElementOffsetRect();
            _this.dragStartTranslateStore[node.id] = calcElementTranslate(element);
            _this.dragStartSizeStore[node.id] = {
                width: rect.width,
                height: rect.height,
            };
        });
    };
    TransformHelper.prototype.calcRulerSnapLines = function (dragNodesRect) {
        var edgeLines = calcEdgeLinesOfRect(dragNodesRect);
        return this.rulerSnapLines.map(function (line) {
            line.distance = calcDistanceOfSnapLineToEdges(line, edgeLines);
            return line;
        });
    };
    TransformHelper.prototype.calcAroundSnapLines = function (dragNodesRect) {
        var _this = this;
        var results = [];
        var edgeLines = calcEdgeLinesOfRect(dragNodesRect);
        this.eachViewportNodes(function (refer, referRect) {
            if (_this.dragNodes.includes(refer))
                return;
            var referLines = calcEdgeLinesOfRect(referRect);
            var add = function (line) {
                var _a = __read(calcClosestEdges(line, edgeLines), 2), distance = _a[0], edge = _a[1];
                var combined = calcCombineSnapLineSegment(line, edge);
                if (distance < TransformHelper.threshold) {
                    if (_this.snapping && distance !== 0)
                        return;
                    var snapLine = new SnapLine(_this, __assign(__assign({}, combined), { distance: distance }));
                    var edge_1 = snapLine.snapEdge(dragNodesRect);
                    if (_this.type === 'translate') {
                        results.push(snapLine);
                    }
                    else if (edge_1 !== 'hc' && edge_1 !== 'vc') {
                        results.push(snapLine);
                    }
                }
            };
            referLines.h.forEach(add);
            referLines.v.forEach(add);
        });
        return results;
    };
    TransformHelper.prototype.calcAroundSpaceBlocks = function (dragNodesRect) {
        var _this = this;
        var closestSpaces = {};
        this.eachViewportNodes(function (refer, referRect) {
            if (isEqualRect(dragNodesRect, referRect))
                return;
            var origin = calcSpaceBlockOfRect(dragNodesRect, referRect);
            if (origin) {
                var spaceBlock = new SpaceBlock(_this, __assign({ refer: refer }, origin));
                if (!closestSpaces[origin.type]) {
                    closestSpaces[origin.type] = spaceBlock;
                }
                else if (spaceBlock.distance < closestSpaces[origin.type].distance) {
                    closestSpaces[origin.type] = spaceBlock;
                }
            }
        });
        return closestSpaces;
    };
    TransformHelper.prototype.calcViewportNodes = function () {
        var _this = this;
        this.tree.eachTree(function (node) {
            var topRect = node.getValidElementRect();
            var offsetRect = node.getValidElementOffsetRect();
            if (_this.dragNodes.includes(node))
                return;
            if (_this.viewport.isRectInViewport(topRect)) {
                _this.viewportRectsStore[node.id] = offsetRect;
            }
        });
    };
    TransformHelper.prototype.getNodeRect = function (node) {
        return this.viewportRectsStore[node.id];
    };
    TransformHelper.prototype.eachViewportNodes = function (visitor) {
        for (var id in this.viewportRectsStore) {
            visitor(this.tree.findById(id), this.viewportRectsStore[id]);
        }
    };
    TransformHelper.prototype.translate = function (node, handler) {
        var e_1, _a;
        if (!this.dragging)
            return;
        var translate = this.calcBaseTranslate(node);
        this.snapped = false;
        this.snapping = false;
        try {
            for (var _b = __values(this.closestSnapLines), _c = _b.next(); !_c.done; _c = _b.next()) {
                var line = _c.value;
                line.translate(node, translate);
                this.snapping = true;
                this.snapped = true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        handler(translate);
        if (this.snapping) {
            this.dragMove();
            this.snapping = false;
        }
    };
    TransformHelper.prototype.resize = function (node, handler) {
        var e_2, _a;
        if (!this.dragging)
            return;
        var rect = this.calcBaseResize(node);
        this.snapping = false;
        this.snapping = false;
        try {
            for (var _b = __values(this.closestSnapLines), _c = _b.next(); !_c.done; _c = _b.next()) {
                var line = _c.value;
                line.resize(node, rect);
                this.snapping = true;
                this.snapped = true;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        handler(rect);
        if (this.snapping) {
            this.dragMove();
            this.snapping = false;
        }
    };
    // rotate(node: TreeNode, handler: (rotate: number) => void) {}
    // scale(node: TreeNode, handler: (scale: number) => void) {}
    // round(node: TreeNode, handler: (round: number) => void) {}
    TransformHelper.prototype.findRulerSnapLine = function (id) {
        return this.rulerSnapLines.find(function (item) { return item.id === id; });
    };
    TransformHelper.prototype.addRulerSnapLine = function (line) {
        if (!isLineSegment(line))
            return;
        if (!this.findRulerSnapLine(line.id)) {
            this.rulerSnapLines.push(new SnapLine(this, __assign(__assign({}, line), { type: 'ruler' })));
        }
    };
    TransformHelper.prototype.removeRulerSnapLine = function (id) {
        var matchedLineIndex = this.rulerSnapLines.findIndex(function (item) { return item.id === id; });
        if (matchedLineIndex > -1) {
            this.rulerSnapLines.splice(matchedLineIndex, 1);
        }
    };
    TransformHelper.prototype.dragStart = function (props) {
        var dragNodes = props === null || props === void 0 ? void 0 : props.dragNodes;
        var type = props === null || props === void 0 ? void 0 : props.type;
        var direction = props === null || props === void 0 ? void 0 : props.direction;
        if (type === 'resize') {
            var nodes = TreeNode.filterResizable(dragNodes);
            if (nodes.length) {
                this.dragging = true;
                this.type = type;
                this.direction = direction;
                this.dragNodes = nodes;
                this.calcDragStartStore(nodes);
                this.cursor.setDragType(CursorDragType.Resize);
            }
        }
        else if (type === 'translate') {
            var nodes = TreeNode.filterTranslatable(dragNodes);
            if (nodes.length) {
                this.dragging = true;
                this.type = type;
                this.direction = direction;
                this.dragNodes = nodes;
                this.calcDragStartStore(nodes);
                this.cursor.setDragType(CursorDragType.Translate);
            }
        }
        else if (type === 'rotate') {
            var nodes = TreeNode.filterRotatable(dragNodes);
            if (nodes.length) {
                this.dragging = true;
                this.type = type;
                this.dragNodes = nodes;
                this.calcDragStartStore(nodes);
                this.cursor.setDragType(CursorDragType.Rotate);
            }
        }
        else if (type === 'scale') {
            var nodes = TreeNode.filterScalable(dragNodes);
            if (nodes.length) {
                this.dragging = true;
                this.type = type;
                this.dragNodes = nodes;
                this.calcDragStartStore(nodes);
                this.cursor.setDragType(CursorDragType.Scale);
            }
        }
        else if (type === 'round') {
            var nodes = TreeNode.filterRoundable(dragNodes);
            if (nodes.length) {
                this.dragging = true;
                this.type = type;
                this.dragNodes = nodes;
                this.calcDragStartStore(nodes);
                this.cursor.setDragType(CursorDragType.Round);
            }
        }
        if (this.dragging) {
            this.calcViewportNodes();
        }
    };
    TransformHelper.prototype.dragMove = function () {
        if (!this.dragging)
            return;
        this.draggingNodesRect = null;
        this.draggingNodesRect = this.dragNodesRect;
        this.rulerSnapLines = this.calcRulerSnapLines(this.dragNodesRect);
        this.aroundSnapLines = this.calcAroundSnapLines(this.dragNodesRect);
        this.aroundSpaceBlocks = this.calcAroundSpaceBlocks(this.dragNodesRect);
    };
    TransformHelper.prototype.dragEnd = function () {
        this.dragging = false;
        this.viewportRectsStore = {};
        this.dragStartTranslateStore = {};
        this.aroundSnapLines = [];
        this.draggingNodesRect = null;
        this.aroundSpaceBlocks = null;
        this.dragStartNodesRect = null;
        this.dragNodes = [];
        this.cursor.setDragType(CursorDragType.Move);
    };
    TransformHelper.prototype.makeObservable = function () {
        define(this, {
            snapped: observable.ref,
            dragging: observable.ref,
            snapping: observable.ref,
            dragNodes: observable.ref,
            aroundSnapLines: observable.ref,
            aroundSpaceBlocks: observable.ref,
            rulerSnapLines: observable.shallow,
            closestSnapLines: observable.computed,
            thresholdSnapLines: observable.computed,
            thresholdSpaceBlocks: observable.computed,
            measurerSpaceBlocks: observable.computed,
            cursor: observable.computed,
            cursorPosition: observable.computed,
            cursorOffset: observable.computed,
            dragStartCursor: observable.computed,
            translate: action,
            dragStart: action,
            dragMove: action,
            dragEnd: action,
        });
    };
    TransformHelper.threshold = 6;
    return TransformHelper;
}());

var ClosestPosition;
(function (ClosestPosition) {
    ClosestPosition["Before"] = "BEFORE";
    ClosestPosition["ForbidBefore"] = "FORBID_BEFORE";
    ClosestPosition["After"] = "After";
    ClosestPosition["ForbidAfter"] = "FORBID_AFTER";
    ClosestPosition["Upper"] = "UPPER";
    ClosestPosition["ForbidUpper"] = "FORBID_UPPER";
    ClosestPosition["Under"] = "UNDER";
    ClosestPosition["ForbidUnder"] = "FORBID_UNDER";
    ClosestPosition["Inner"] = "INNER";
    ClosestPosition["ForbidInner"] = "FORBID_INNER";
    ClosestPosition["InnerAfter"] = "INNER_AFTER";
    ClosestPosition["ForbidInnerAfter"] = "FORBID_INNER_AFTER";
    ClosestPosition["InnerBefore"] = "INNER_BEFORE";
    ClosestPosition["ForbidInnerBefore"] = "FORBID_INNER_BEFORE";
    ClosestPosition["Forbid"] = "FORBID";
})(ClosestPosition || (ClosestPosition = {}));
var MoveHelper = /** @class */ (function () {
    function MoveHelper(props) {
        this.dragNodes = [];
        this.touchNode = null;
        this.closestNode = null;
        this.activeViewport = null;
        this.viewportClosestRect = null;
        this.outlineClosestRect = null;
        this.viewportClosestOffsetRect = null;
        this.outlineClosestOffsetRect = null;
        this.viewportClosestDirection = null;
        this.outlineClosestDirection = null;
        this.dragging = false;
        this.operation = props.operation;
        this.rootNode = this.operation.tree;
        this.makeObservable();
    }
    Object.defineProperty(MoveHelper.prototype, "cursor", {
        get: function () {
            return this.operation.engine.cursor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveHelper.prototype, "viewport", {
        get: function () {
            return this.operation.workspace.viewport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveHelper.prototype, "outline", {
        get: function () {
            return this.operation.workspace.outline;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveHelper.prototype, "hasDragNodes", {
        get: function () {
            return this.dragNodes.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveHelper.prototype, "closestDirection", {
        get: function () {
            if (this.activeViewport === this.outline) {
                return this.outlineClosestDirection;
            }
            return this.viewportClosestDirection;
        },
        enumerable: false,
        configurable: true
    });
    MoveHelper.prototype.getClosestLayout = function (viewport) {
        return viewport.getValidNodeLayout(this.closestNode);
    };
    MoveHelper.prototype.calcClosestPosition = function (point, viewport) {
        var _this = this;
        var closestNode = this.closestNode;
        if (!closestNode || !viewport.isPointInViewport(point))
            return ClosestPosition.Forbid;
        var closestRect = viewport.getValidNodeRect(closestNode);
        var isInline = this.getClosestLayout(viewport) === 'horizontal';
        if (!closestRect) {
            return;
        }
        var isAfter = isNearAfter(point, closestRect, viewport.moveInsertionType === 'block' ? false : isInline);
        var getValidParent = function (node) {
            var _a;
            if (!node)
                return;
            if ((_a = node.parent) === null || _a === void 0 ? void 0 : _a.allowSibling(_this.dragNodes))
                return node.parent;
            return getValidParent(node.parent);
        };
        if (isPointInRect(point, closestRect, viewport.moveSensitive)) {
            if (!closestNode.allowAppend(this.dragNodes)) {
                if (!closestNode.allowSibling(this.dragNodes)) {
                    var parentClosestNode = getValidParent(closestNode);
                    if (parentClosestNode) {
                        this.closestNode = parentClosestNode;
                    }
                    if (isInline) {
                        if (parentClosestNode) {
                            if (isAfter) {
                                return ClosestPosition.After;
                            }
                            return ClosestPosition.Before;
                        }
                        if (isAfter) {
                            return ClosestPosition.ForbidAfter;
                        }
                        return ClosestPosition.ForbidBefore;
                    }
                    else {
                        if (parentClosestNode) {
                            if (isAfter) {
                                return ClosestPosition.Under;
                            }
                            return ClosestPosition.Upper;
                        }
                        if (isAfter) {
                            return ClosestPosition.ForbidUnder;
                        }
                        return ClosestPosition.ForbidUpper;
                    }
                }
                else {
                    if (isInline) {
                        return isAfter ? ClosestPosition.After : ClosestPosition.Before;
                    }
                    else {
                        return isAfter ? ClosestPosition.Under : ClosestPosition.Upper;
                    }
                }
            }
            if (closestNode.contains.apply(closestNode, __spreadArray([], __read(this.dragNodes), false))) {
                if (isAfter) {
                    return ClosestPosition.InnerAfter;
                }
                return ClosestPosition.InnerBefore;
            }
            else {
                return ClosestPosition.Inner;
            }
        }
        else if (closestNode === closestNode.root) {
            return isAfter ? ClosestPosition.InnerAfter : ClosestPosition.InnerBefore;
        }
        else {
            if (!closestNode.allowSibling(this.dragNodes)) {
                var parentClosestNode = getValidParent(closestNode);
                if (parentClosestNode) {
                    this.closestNode = parentClosestNode;
                }
                if (isInline) {
                    if (parentClosestNode) {
                        if (isAfter) {
                            return ClosestPosition.After;
                        }
                        return ClosestPosition.Before;
                    }
                    return isAfter
                        ? ClosestPosition.ForbidAfter
                        : ClosestPosition.ForbidBefore;
                }
                else {
                    if (parentClosestNode) {
                        if (isAfter) {
                            return ClosestPosition.Under;
                        }
                        return ClosestPosition.Upper;
                    }
                    return isAfter
                        ? ClosestPosition.ForbidUnder
                        : ClosestPosition.ForbidUpper;
                }
            }
            if (isInline) {
                return isAfter ? ClosestPosition.After : ClosestPosition.Before;
            }
            else {
                return isAfter ? ClosestPosition.Under : ClosestPosition.Upper;
            }
        }
    };
    MoveHelper.prototype.calcClosestNode = function (point, viewport) {
        var _a, _b;
        if (this.touchNode) {
            var touchNodeRect = viewport.getValidNodeRect(this.touchNode);
            if (!touchNodeRect)
                return;
            if ((_b = (_a = this.touchNode) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length) {
                var touchDistance = calcDistancePointToEdge(point, touchNodeRect);
                var minDistance_1 = touchDistance;
                var minDistanceNode_1 = this.touchNode;
                this.touchNode.eachChildren(function (node) {
                    var rect = viewport.getElementRectById(node.id);
                    if (!rect)
                        return;
                    var distance = isPointInRect(point, rect, viewport.moveSensitive)
                        ? 0
                        : calcDistanceOfPointToRect(point, rect);
                    if (distance <= minDistance_1) {
                        minDistance_1 = distance;
                        minDistanceNode_1 = node;
                    }
                });
                return minDistanceNode_1;
            }
            else {
                return this.touchNode;
            }
        }
        return this.operation.tree;
    };
    MoveHelper.prototype.calcClosestRect = function (viewport, closestDirection) {
        var closestNode = this.closestNode;
        if (!closestNode || !closestDirection)
            return;
        var closestRect = viewport.getValidNodeRect(closestNode);
        if (closestDirection === ClosestPosition.InnerAfter ||
            closestDirection === ClosestPosition.InnerBefore) {
            return viewport.getChildrenRect(closestNode);
        }
        else {
            return closestRect;
        }
    };
    MoveHelper.prototype.calcClosestOffsetRect = function (viewport, closestDirection) {
        var closestNode = this.closestNode;
        if (!closestNode || !closestDirection)
            return;
        var closestRect = viewport.getValidNodeOffsetRect(closestNode);
        if (closestDirection === ClosestPosition.InnerAfter ||
            closestDirection === ClosestPosition.InnerBefore) {
            return viewport.getChildrenOffsetRect(closestNode);
        }
        else {
            return closestRect;
        }
    };
    MoveHelper.prototype.dragStart = function (props) {
        var nodes = TreeNode.filterDraggable(props === null || props === void 0 ? void 0 : props.dragNodes);
        if (nodes.length) {
            this.dragNodes = nodes;
            this.trigger(new DragNodeEvent({
                target: this.operation.tree,
                source: this.dragNodes,
            }));
            this.viewport.cacheElements();
            this.cursor.setDragType(CursorDragType.Move);
            this.dragging = true;
        }
    };
    MoveHelper.prototype.dragMove = function (props) {
        var point = props.point, touchNode = props.touchNode;
        if (!this.dragging)
            return;
        if (this.outline.isPointInViewport(point, false)) {
            this.activeViewport = this.outline;
            this.touchNode = touchNode;
            this.closestNode = this.calcClosestNode(point, this.outline);
        }
        else if (this.viewport.isPointInViewport(point, false)) {
            this.activeViewport = this.viewport;
            this.touchNode = touchNode;
            this.closestNode = this.calcClosestNode(point, this.viewport);
        }
        if (!this.activeViewport)
            return;
        if (this.activeViewport === this.outline) {
            this.outlineClosestDirection = this.calcClosestPosition(point, this.outline);
            this.viewportClosestDirection = this.outlineClosestDirection;
        }
        else {
            this.viewportClosestDirection = this.calcClosestPosition(point, this.viewport);
            this.outlineClosestDirection = this.viewportClosestDirection;
        }
        if (this.outline.mounted) {
            this.outlineClosestRect = this.calcClosestRect(this.outline, this.outlineClosestDirection);
            this.outlineClosestOffsetRect = this.calcClosestOffsetRect(this.outline, this.outlineClosestDirection);
        }
        if (this.viewport.mounted) {
            this.viewportClosestRect = this.calcClosestRect(this.viewport, this.viewportClosestDirection);
            this.viewportClosestOffsetRect = this.calcClosestOffsetRect(this.viewport, this.viewportClosestDirection);
        }
    };
    MoveHelper.prototype.dragDrop = function (props) {
        this.trigger(new DropNodeEvent({
            target: this.operation.tree,
            source: props === null || props === void 0 ? void 0 : props.dropNode,
        }));
    };
    MoveHelper.prototype.dragEnd = function () {
        this.dragging = false;
        this.dragNodes = [];
        this.touchNode = null;
        this.closestNode = null;
        this.activeViewport = null;
        this.outlineClosestDirection = null;
        this.outlineClosestOffsetRect = null;
        this.outlineClosestRect = null;
        this.viewportClosestDirection = null;
        this.viewportClosestOffsetRect = null;
        this.viewportClosestRect = null;
        this.viewport.clearCache();
    };
    MoveHelper.prototype.trigger = function (event) {
        if (this.operation) {
            return this.operation.dispatch(event);
        }
    };
    MoveHelper.prototype.makeObservable = function () {
        define(this, {
            dragging: observable.ref,
            dragNodes: observable.ref,
            touchNode: observable.ref,
            closestNode: observable.ref,
            outlineClosestDirection: observable.ref,
            outlineClosestOffsetRect: observable.ref,
            outlineClosestRect: observable.ref,
            viewportClosestDirection: observable.ref,
            viewportClosestOffsetRect: observable.ref,
            viewportClosestRect: observable.ref,
            dragStart: action,
            dragMove: action,
            dragEnd: action,
        });
    };
    return MoveHelper;
}());

var Operation = /** @class */ (function () {
    function Operation(workspace) {
        this.requests = {
            snapshot: null,
        };
        this.engine = workspace.engine;
        this.workspace = workspace;
        this.tree = new TreeNode(__assign(__assign({ componentName: this.engine.props.rootComponentName }, this.engine.props.defaultComponentTree), { operation: this }));
        this.hover = new Hover({
            operation: this,
        });
        this.selection = new Selection({
            operation: this,
        });
        this.moveHelper = new MoveHelper({
            operation: this,
        });
        this.transformHelper = new TransformHelper({
            operation: this,
        });
        this.selection.select(this.tree);
    }
    Operation.prototype.dispatch = function (event, callback) {
        if (this.workspace.dispatch(event) === false)
            return;
        if (isFn(callback))
            return callback();
    };
    Operation.prototype.snapshot = function (type) {
        var _this = this;
        cancelIdle(this.requests.snapshot);
        if (!this.workspace ||
            !this.workspace.history ||
            this.workspace.history.locking)
            return;
        this.requests.snapshot = requestIdle(function () {
            _this.workspace.history.push(type);
        });
    };
    Operation.prototype.from = function (operation) {
        if (!operation)
            return;
        if (operation.tree) {
            this.tree.from(operation.tree);
        }
        if (operation.selected) {
            this.selection.selected = operation.selected;
        }
    };
    Operation.prototype.serialize = function () {
        return {
            tree: this.tree.serialize(),
            selected: [this.tree.id],
        };
    };
    return Operation;
}());

var History = /** @class */ (function () {
    function History(context, props) {
        this.current = 0;
        this.history = [];
        this.updateTimer = null;
        this.maxSize = 100;
        this.locking = false;
        this.context = context;
        this.props = props;
        this.push();
        this.makeObservable();
    }
    History.prototype.makeObservable = function () {
        define(this, {
            current: observable.ref,
            history: observable.shallow,
            push: action,
            undo: action,
            redo: action,
            goTo: action,
            clear: action,
        });
    };
    History.prototype.list = function () {
        return this.history;
    };
    History.prototype.push = function (type) {
        var _a;
        if (this.locking)
            return;
        if (this.current < this.history.length - 1) {
            this.history = this.history.slice(0, this.current + 1);
        }
        var item = {
            data: this.context.serialize(),
            timestamp: Date.now(),
            type: type,
        };
        this.current = this.history.length;
        this.history.push(item);
        var overSizeCount = this.history.length - this.maxSize;
        if (overSizeCount > 0) {
            this.history.splice(0, overSizeCount);
            this.current = this.history.length - 1;
        }
        if ((_a = this.props) === null || _a === void 0 ? void 0 : _a.onPush) {
            this.props.onPush(item);
        }
    };
    Object.defineProperty(History.prototype, "allowUndo", {
        get: function () {
            return this.history.length > 0 && this.current - 1 >= 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(History.prototype, "allowRedo", {
        get: function () {
            return this.history.length > this.current + 1;
        },
        enumerable: false,
        configurable: true
    });
    History.prototype.redo = function () {
        var _a;
        if (this.allowRedo) {
            var item = this.history[this.current + 1];
            this.locking = true;
            this.context.from(item.data);
            this.locking = false;
            this.current++;
            if ((_a = this.props) === null || _a === void 0 ? void 0 : _a.onRedo) {
                this.props.onRedo(item);
            }
        }
    };
    History.prototype.undo = function () {
        var _a;
        if (this.allowUndo) {
            var item = this.history[this.current - 1];
            this.locking = true;
            this.context.from(item.data);
            this.locking = false;
            this.current--;
            if ((_a = this.props) === null || _a === void 0 ? void 0 : _a.onUndo) {
                this.props.onUndo(item);
            }
        }
    };
    History.prototype.goTo = function (index) {
        var _a;
        var item = this.history[index];
        if (item) {
            this.locking = true;
            this.context.from(item.data);
            this.locking = false;
            this.current = index;
            if ((_a = this.props) === null || _a === void 0 ? void 0 : _a.onGoto) {
                this.props.onGoto(item);
            }
        }
    };
    History.prototype.clear = function () {
        this.history = [];
        this.current = 0;
    };
    return History;
}());

//工作区模型
var Workspace = /** @class */ (function () {
    function Workspace(engine, props) {
        var _this = this;
        this.engine = engine;
        this.props = props;
        this.id = props.id || uid();
        this.title = props.title;
        this.description = props.description;
        this.viewport = new Viewport({
            engine: this.engine,
            workspace: this,
            viewportElement: props.viewportElement,
            contentWindow: props.contentWindow,
            nodeIdAttrName: this.engine.props.nodeIdAttrName,
            moveSensitive: true,
            moveInsertionType: 'all',
        });
        this.outline = new Viewport({
            engine: this.engine,
            workspace: this,
            viewportElement: props.viewportElement,
            contentWindow: props.contentWindow,
            nodeIdAttrName: this.engine.props.outlineNodeIdAttrName,
            moveSensitive: false,
            moveInsertionType: 'block',
        });
        this.operation = new Operation(this);
        this.history = new History(this, {
            onPush: function (item) {
                _this.operation.dispatch(new HistoryPushEvent(item));
            },
            onRedo: function (item) {
                _this.operation.hover.clear();
                _this.operation.dispatch(new HistoryRedoEvent(item));
            },
            onUndo: function (item) {
                _this.operation.hover.clear();
                _this.operation.dispatch(new HistoryUndoEvent(item));
            },
            onGoto: function (item) {
                _this.operation.hover.clear();
                _this.operation.dispatch(new HistoryGotoEvent(item));
            },
        });
    }
    Workspace.prototype.getEventContext = function () {
        return {
            workbench: this.engine.workbench,
            workspace: this,
            engine: this.engine,
            viewport: this.viewport,
        };
    };
    Workspace.prototype.attachEvents = function (container, contentWindow) {
        this.engine.attachEvents(container, contentWindow, this.getEventContext());
    };
    Workspace.prototype.detachEvents = function (container) {
        this.engine.detachEvents(container);
    };
    Workspace.prototype.dispatch = function (event) {
        return this.engine.dispatch(event, this.getEventContext());
    };
    Workspace.prototype.serialize = function () {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            operation: this.operation.serialize(),
        };
    };
    Workspace.prototype.from = function (workspace) {
        if (!workspace)
            return;
        if (workspace.operation) {
            this.operation.from(workspace.operation);
        }
        if (workspace.id) {
            this.id = workspace.id;
        }
        if (workspace.title) {
            this.title = workspace.title;
        }
        if (workspace.description) {
            this.description = workspace.description;
        }
    };
    return Workspace;
}());

var Workbench = /** @class */ (function () {
    function Workbench(engine) {
        this.type = 'DESIGNABLE';
        this.engine = engine;
        this.workspaces = [];
        this.currentWorkspace = null;
        this.activeWorkspace = null;
        this.makeObservable();
    }
    Workbench.prototype.makeObservable = function () {
        define(this, {
            currentWorkspace: observable.ref,
            workspaces: observable.shallow,
            activeWorkspace: observable.ref,
            type: observable.ref,
            switchWorkspace: action,
            addWorkspace: action,
            removeWorkspace: action,
            setActiveWorkspace: action,
            setWorkbenchType: action,
        });
    };
    Workbench.prototype.getEventContext = function () {
        return {
            engine: this.engine,
            workbench: this.engine.workbench,
            workspace: null,
            viewport: null,
        };
    };
    Workbench.prototype.switchWorkspace = function (id) {
        var finded = this.findWorkspaceById(id);
        if (finded) {
            this.currentWorkspace = finded;
            this.engine.dispatch(new SwitchWorkspaceEvent(finded));
        }
        return this.currentWorkspace;
    };
    Workbench.prototype.setActiveWorkspace = function (workspace) {
        this.activeWorkspace = workspace;
        return workspace;
    };
    Workbench.prototype.setWorkbenchType = function (type) {
        this.type = type;
    };
    Workbench.prototype.addWorkspace = function (props) {
        var finded = this.findWorkspaceById(props.id);
        if (!finded) {
            this.currentWorkspace = new Workspace(this.engine, props);
            this.workspaces.push(this.currentWorkspace);
            this.engine.dispatch(new AddWorkspaceEvent(this.currentWorkspace));
            return this.currentWorkspace;
        }
        return finded;
    };
    Workbench.prototype.removeWorkspace = function (id) {
        var findIndex = this.findWorkspaceIndexById(id);
        if (findIndex > -1 && findIndex < this.workspaces.length) {
            var findedWorkspace = this.workspaces[findIndex];
            findedWorkspace.viewport.detachEvents();
            this.workspaces.splice(findIndex, 1);
            if (findedWorkspace === this.currentWorkspace) {
                if (this.workspaces.length && this.workspaces[findIndex]) {
                    this.currentWorkspace = this.workspaces[findIndex];
                }
                else {
                    this.currentWorkspace = this.workspaces[this.workspaces.length - 1];
                }
            }
            this.engine.dispatch(new RemoveWorkspaceEvent(findedWorkspace));
        }
    };
    Workbench.prototype.ensureWorkspace = function (props) {
        if (props === void 0) { props = {}; }
        var workspace = this.findWorkspaceById(props.id);
        if (workspace)
            return workspace;
        this.addWorkspace(props);
        return this.currentWorkspace;
    };
    Workbench.prototype.findWorkspaceById = function (id) {
        return this.workspaces.find(function (item) { return item.id === id; });
    };
    Workbench.prototype.findWorkspaceIndexById = function (id) {
        return this.workspaces.findIndex(function (item) { return item.id === id; });
    };
    Workbench.prototype.mapWorkspace = function (callbackFn) {
        return this.workspaces.map(callbackFn);
    };
    Workbench.prototype.eachWorkspace = function (callbackFn) {
        this.workspaces.forEach(callbackFn);
    };
    return Workbench;
}());

var Shortcut = /** @class */ (function () {
    function Shortcut(props) {
        this.codes = this.parseCodes(props.codes);
        this.handler = props.handler;
        this.matcher = props.matcher;
    }
    Shortcut.prototype.parseCodes = function (codes) {
        var results = [];
        codes.forEach(function (code) {
            if (Array.isArray(code)) {
                results.push(code);
            }
            else {
                results.push([code]);
            }
        });
        return results;
    };
    Shortcut.prototype.preventCodes = function (codes) {
        var _a;
        if (this.codes.length) {
            for (var i = 0; i < codes.length; i++) {
                var sequence = (_a = this.codes[i]) !== null && _a !== void 0 ? _a : [];
                for (var j = 0; j < sequence.length; j++) {
                    if (!Shortcut.matchCode(codes[j], sequence[j])) {
                        return false;
                    }
                }
            }
            return true;
        }
        return false;
    };
    Shortcut.prototype.matched = function (matched, context) {
        if (isFn(this.handler) && matched) {
            this.handler(context);
        }
        return matched;
    };
    Shortcut.prototype.match = function (codes, context) {
        var _this = this;
        return this.codes.some(function (sequence) {
            var sortedSelf = Shortcut.sortCodes(sequence);
            var sortedTarget = Shortcut.sortCodes(codes);
            if (isFn(_this.matcher)) {
                return _this.matched(_this.matcher(sortedTarget), context);
            }
            if (sortedTarget.length !== sortedSelf.length)
                return _this.matched(false, context);
            for (var i = 0; i < sortedSelf.length; i++) {
                if (!Shortcut.matchCode(sortedTarget[i], sortedSelf[i])) {
                    return _this.matched(false, context);
                }
            }
            return _this.matched(true, context);
        });
    };
    Shortcut.matchCode = function (code1, code2) {
        var _a, _b;
        return ((_a = code1 === null || code1 === void 0 ? void 0 : code1.toLocaleLowerCase) === null || _a === void 0 ? void 0 : _a.call(code1)) === ((_b = code2 === null || code2 === void 0 ? void 0 : code2.toLocaleLowerCase) === null || _b === void 0 ? void 0 : _b.call(code2));
    };
    Shortcut.sortCodes = function (codes) {
        return codes.map(function (code) { return code.toLocaleLowerCase(); }).sort();
    };
    return Shortcut;
}());

var Modifiers = [
    ['metaKey', KeyCode.Meta],
    ['shiftKey', KeyCode.Shift],
    ['ctrlKey', KeyCode.Control],
    ['altKey', KeyCode.Alt],
];
var Keyboard = /** @class */ (function () {
    function Keyboard(engine) {
        var _a;
        this.shortcuts = [];
        this.sequence = [];
        this.keyDown = null;
        this.modifiers = {};
        this.requestTimer = null;
        this.engine = engine;
        this.shortcuts = ((_a = engine.props) === null || _a === void 0 ? void 0 : _a.shortcuts) || [];
        this.makeObservable();
    }
    Keyboard.prototype.matchCodes = function (context) {
        for (var i = 0; i < this.shortcuts.length; i++) {
            var shortcut = this.shortcuts[i];
            if (shortcut.match(this.sequence, context)) {
                return true;
            }
        }
        return false;
    };
    Keyboard.prototype.preventCodes = function () {
        var _this = this;
        return this.shortcuts.some(function (shortcut) {
            return shortcut.preventCodes(_this.sequence);
        });
    };
    Keyboard.prototype.includes = function (key) {
        return this.sequence.some(function (code) { return Shortcut.matchCode(code, key); });
    };
    Keyboard.prototype.excludes = function (key) {
        this.sequence = this.sequence.filter(function (code) { return !Shortcut.matchCode(key, code); });
    };
    Keyboard.prototype.addKeyCode = function (key) {
        if (!this.includes(key)) {
            this.sequence.push(key);
        }
    };
    Keyboard.prototype.removeKeyCode = function (key) {
        if (this.includes(key)) {
            this.excludes(key);
        }
    };
    Keyboard.prototype.isModifier = function (code) {
        return Modifiers.some(function (modifier) { return Shortcut.matchCode(modifier[1], code); });
    };
    Keyboard.prototype.handleModifiers = function (event) {
        var _this = this;
        Modifiers.forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], code = _b[1];
            if (event[key]) {
                if (!_this.includes(code)) {
                    _this.sequence = [code].concat(_this.sequence);
                }
            }
        });
    };
    Keyboard.prototype.handleKeyboard = function (event, context) {
        if (event.eventType === 'keydown') {
            this.keyDown = event.data;
            this.addKeyCode(this.keyDown);
            this.handleModifiers(event);
            if (this.matchCodes(context)) {
                this.sequence = [];
            }
            this.requestClean(4000);
            if (this.preventCodes()) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
        else {
            if (this.isModifier(event.data)) {
                this.sequence = [];
            }
            this.keyDown = null;
        }
    };
    Keyboard.prototype.isKeyDown = function (code) {
        return this.keyDown === code;
    };
    Keyboard.prototype.requestClean = function (duration) {
        var _this = this;
        if (duration === void 0) { duration = 320; }
        clearTimeout(this.requestTimer);
        this.requestTimer = setTimeout(function () {
            _this.keyDown = null;
            _this.sequence = [];
            clearTimeout(_this.requestTimer);
        }, duration);
    };
    Keyboard.prototype.makeObservable = function () {
        define(this, {
            sequence: observable.shallow,
            keyDown: observable.ref,
            handleKeyboard: action,
        });
    };
    return Keyboard;
}());

var ScreenType;
(function (ScreenType) {
    ScreenType["PC"] = "PC";
    ScreenType["Responsive"] = "Responsive";
    ScreenType["Mobile"] = "Mobile";
    ScreenType["Sketch"] = "Sketch";
})(ScreenType || (ScreenType = {}));
var ScreenStatus;
(function (ScreenStatus) {
    ScreenStatus["Normal"] = "Normal";
    ScreenStatus["Resizing"] = "Resizing";
    ScreenStatus["Zooming"] = "Zooming";
})(ScreenStatus || (ScreenStatus = {}));
var Screen = /** @class */ (function () {
    function Screen(engine) {
        this.scale = 1;
        this.width = '100%';
        this.height = '100%';
        this.background = '';
        this.flip = false;
        this.status = ScreenStatus.Normal;
        this.engine = engine;
        this.type = engine.props.defaultScreenType;
        this.makeObservable();
    }
    Screen.prototype.makeObservable = function () {
        define(this, {
            type: observable.ref,
            scale: observable.ref,
            width: observable.ref,
            height: observable.ref,
            status: observable.ref,
            flip: observable.ref,
            background: observable.ref,
            setType: action,
            setScale: action,
            setSize: action,
            resetSize: action,
            setBackground: action,
            setFlip: action,
        });
    };
    Screen.prototype.setStatus = function (status) {
        this.status = status;
    };
    Screen.prototype.setType = function (type) {
        this.type = type;
    };
    Screen.prototype.setScale = function (scale) {
        this.scale = scale;
    };
    Screen.prototype.setSize = function (width, height) {
        if (width) {
            this.width = width;
        }
        if (height) {
            this.height = height;
        }
    };
    Screen.prototype.resetSize = function () {
        this.width = '100%';
        this.height = '100%';
    };
    Screen.prototype.setBackground = function (background) {
        this.background = background;
    };
    Screen.prototype.setFlip = function (flip) {
        this.flip = flip;
    };
    return Screen;
}());

/**
 * 设计器引擎
 */
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine(props) {
        var _this = _super.call(this, props) || this;
        _this.props = __assign(__assign({}, Engine.defaultProps), props);
        _this.init();
        _this.id = uid();
        return _this;
    }
    Engine.prototype.init = function () {
        this.workbench = new Workbench(this);
        this.screen = new Screen(this);
        this.cursor = new Cursor(this);
        this.keyboard = new Keyboard(this);
    };
    Engine.prototype.setCurrentTree = function (tree) {
        if (this.workbench.currentWorkspace) {
            this.workbench.currentWorkspace.operation.tree.from(tree);
        }
    };
    Engine.prototype.getCurrentTree = function () {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.workbench) === null || _a === void 0 ? void 0 : _a.currentWorkspace) === null || _b === void 0 ? void 0 : _b.operation) === null || _c === void 0 ? void 0 : _c.tree;
    };
    Engine.prototype.getAllSelectedNodes = function () {
        var results = [];
        for (var i = 0; i < this.workbench.workspaces.length; i++) {
            var workspace = this.workbench.workspaces[i];
            results = results.concat(workspace.operation.selection.selectedNodes);
        }
        return results;
    };
    Engine.prototype.findNodeById = function (id) {
        return TreeNode.findById(id);
    };
    Engine.prototype.findMovingNodes = function () {
        var results = [];
        this.workbench.eachWorkspace(function (workspace) {
            var _a;
            (_a = workspace.operation.moveHelper.dragNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (node) {
                if (!results.includes(node)) {
                    results.push(node);
                }
            });
        });
        return results;
    };
    Engine.prototype.createNode = function (node, parent) {
        return new TreeNode(node, parent);
    };
    Engine.prototype.mount = function () {
        this.attachEvents(globalThisPolyfill);
    };
    Engine.prototype.unmount = function () {
        this.detachEvents();
    };
    Engine.defaultProps = {
        shortcuts: [],
        effects: [],
        drivers: [],
        rootComponentName: 'Root',
        sourceIdAttrName: 'data-designer-source-id',
        nodeIdAttrName: 'data-designer-node-id',
        contentEditableAttrName: 'data-content-editable',
        contentEditableNodeIdAttrName: 'data-content-editable-node-id',
        clickStopPropagationAttrName: 'data-click-stop-propagation',
        nodeSelectionIdAttrName: 'data-designer-node-helpers-id',
        nodeDragHandlerAttrName: 'data-designer-node-drag-handler',
        screenResizeHandlerAttrName: 'data-designer-screen-resize-handler',
        nodeResizeHandlerAttrName: 'data-designer-node-resize-handler',
        outlineNodeIdAttrName: 'data-designer-outline-node-id',
        nodeTranslateAttrName: 'data-designer-node-translate-handler',
        defaultScreenType: ScreenType.PC,
    };
    return Engine;
}(Event));

var useCursorEffect = function (engine) {
    engine.subscribeTo(MouseMoveEvent, function (event) {
        engine.cursor.setStatus(engine.cursor.status === CursorStatus.Dragging ||
            engine.cursor.status === CursorStatus.DragStart
            ? engine.cursor.status
            : CursorStatus.Normal);
        if (engine.cursor.status === CursorStatus.Dragging)
            return;
        engine.cursor.setPosition(event.data);
    });
    engine.subscribeTo(DragStartEvent, function (event) {
        engine.cursor.setStatus(CursorStatus.DragStart);
        engine.cursor.setDragStartPosition(event.data);
    });
    engine.subscribeTo(DragMoveEvent, function (event) {
        engine.cursor.setStatus(CursorStatus.Dragging);
        engine.cursor.setPosition(event.data);
    });
    engine.subscribeTo(DragStopEvent, function (event) {
        engine.cursor.setStatus(CursorStatus.DragStop);
        engine.cursor.setDragEndPosition(event.data);
        engine.cursor.setDragStartPosition(null);
        requestIdle(function () {
            engine.cursor.setStatus(CursorStatus.Normal);
        });
    });
    engine.subscribeTo(MouseMoveEvent, function (event) {
        var _a, _b;
        var currentWorkspace = (_a = event === null || event === void 0 ? void 0 : event.context) === null || _a === void 0 ? void 0 : _a.workspace;
        if (!currentWorkspace)
            return;
        var operation = currentWorkspace.operation;
        if (engine.cursor.status !== CursorStatus.Normal) {
            operation.hover.clear();
            return;
        }
        var target = event.data.target;
        var el = (_b = target === null || target === void 0 ? void 0 : target.closest) === null || _b === void 0 ? void 0 : _b.call(target, "\n      *[".concat(engine.props.nodeIdAttrName, "],\n      *[").concat(engine.props.outlineNodeIdAttrName, "]\n    "));
        if (!(el === null || el === void 0 ? void 0 : el.getAttribute)) {
            return;
        }
        var nodeId = el.getAttribute(engine.props.nodeIdAttrName);
        var outlineNodeId = el.getAttribute(engine.props.outlineNodeIdAttrName);
        var node = operation.tree.findById(nodeId || outlineNodeId);
        if (node) {
            operation.hover.setHover(node);
        }
        else {
            operation.hover.clear();
        }
    });
};

var useViewportEffect = function (engine) {
    engine.subscribeTo(ViewportResizeEvent, function (event) {
        var _a;
        var currentWorkspace = (_a = event === null || event === void 0 ? void 0 : event.context) === null || _a === void 0 ? void 0 : _a.workspace;
        if (!currentWorkspace)
            return;
        var viewport = currentWorkspace.viewport;
        var outline = currentWorkspace.outline;
        if (viewport.matchViewport(event.data.target)) {
            viewport.digestViewport();
        }
        if (outline.matchViewport(event.data.target)) {
            outline.digestViewport();
        }
    });
    engine.subscribeTo(ViewportScrollEvent, function (event) {
        var _a;
        var currentWorkspace = (_a = event === null || event === void 0 ? void 0 : event.context) === null || _a === void 0 ? void 0 : _a.workspace;
        if (!currentWorkspace)
            return;
        var viewport = currentWorkspace.viewport;
        var outline = currentWorkspace.outline;
        if (viewport.matchViewport(event.data.target)) {
            viewport.digestViewport();
        }
        if (outline.matchViewport(event.data.target)) {
            outline.digestViewport();
        }
    });
};

var useDragDropEffect = function (engine) {
    engine.subscribeTo(DragStartEvent, function (event) {
        if (engine.cursor.type !== CursorType.Normal)
            return;
        var target = event.data.target;
        var el = target === null || target === void 0 ? void 0 : target.closest("\n       *[".concat(engine.props.nodeIdAttrName, "],\n       *[").concat(engine.props.sourceIdAttrName, "],\n       *[").concat(engine.props.outlineNodeIdAttrName, "]\n      "));
        var handler = target === null || target === void 0 ? void 0 : target.closest("*[".concat(engine.props.nodeDragHandlerAttrName, "]"));
        var helper = handler === null || handler === void 0 ? void 0 : handler.closest("*[".concat(engine.props.nodeSelectionIdAttrName, "]"));
        if (!(el === null || el === void 0 ? void 0 : el.getAttribute) && !handler)
            return;
        var sourceId = el === null || el === void 0 ? void 0 : el.getAttribute(engine.props.sourceIdAttrName);
        var outlineId = el === null || el === void 0 ? void 0 : el.getAttribute(engine.props.outlineNodeIdAttrName);
        var handlerId = helper === null || helper === void 0 ? void 0 : helper.getAttribute(engine.props.nodeSelectionIdAttrName);
        var nodeId = el === null || el === void 0 ? void 0 : el.getAttribute(engine.props.nodeIdAttrName);
        engine.workbench.eachWorkspace(function (currentWorkspace) {
            var operation = currentWorkspace.operation;
            var moveHelper = operation.moveHelper;
            if (nodeId || outlineId || handlerId) {
                var node_1 = engine.findNodeById(outlineId || nodeId || handlerId);
                if (node_1) {
                    if (!node_1.allowDrag())
                        return;
                    if (node_1 === node_1.root)
                        return;
                    var validSelected = engine
                        .getAllSelectedNodes()
                        .filter(function (node) { return node.allowDrag(); });
                    if (validSelected.some(function (selectNode) { return selectNode === node_1; })) {
                        moveHelper.dragStart({ dragNodes: TreeNode.sort(validSelected) });
                    }
                    else {
                        moveHelper.dragStart({ dragNodes: [node_1] });
                    }
                }
            }
            else if (sourceId) {
                var sourceNode = engine.findNodeById(sourceId);
                if (sourceNode) {
                    moveHelper.dragStart({ dragNodes: [sourceNode] });
                }
            }
        });
        engine.cursor.setStyle('move');
    });
    engine.subscribeTo(DragMoveEvent, function (event) {
        if (engine.cursor.type !== CursorType.Normal)
            return;
        if (engine.cursor.dragType !== CursorDragType.Move)
            return;
        var target = event.data.target;
        var el = target === null || target === void 0 ? void 0 : target.closest("\n      *[".concat(engine.props.nodeIdAttrName, "],\n      *[").concat(engine.props.outlineNodeIdAttrName, "]\n    "));
        var point = new Point(event.data.topClientX, event.data.topClientY);
        var nodeId = el === null || el === void 0 ? void 0 : el.getAttribute(engine.props.nodeIdAttrName);
        var outlineId = el === null || el === void 0 ? void 0 : el.getAttribute(engine.props.outlineNodeIdAttrName);
        engine.workbench.eachWorkspace(function (currentWorkspace) {
            var operation = currentWorkspace.operation;
            var moveHelper = operation.moveHelper;
            var dragNodes = moveHelper.dragNodes;
            var tree = operation.tree;
            if (!dragNodes.length)
                return;
            var touchNode = tree.findById(outlineId || nodeId);
            moveHelper.dragMove({
                point: point,
                touchNode: touchNode,
            });
        });
    });
    engine.subscribeTo(ViewportScrollEvent, function (event) {
        var _a, _b;
        if (engine.cursor.type !== CursorType.Normal)
            return;
        if (engine.cursor.dragType !== CursorDragType.Move)
            return;
        var point = new Point(engine.cursor.position.topClientX, engine.cursor.position.topClientY);
        var currentWorkspace = (_b = (_a = event === null || event === void 0 ? void 0 : event.context) === null || _a === void 0 ? void 0 : _a.workspace) !== null && _b !== void 0 ? _b : engine.workbench.activeWorkspace;
        if (!currentWorkspace)
            return;
        var operation = currentWorkspace.operation;
        var moveHelper = operation.moveHelper;
        if (!moveHelper.dragNodes.length)
            return;
        var tree = operation.tree;
        var viewport = currentWorkspace.viewport;
        var outline = currentWorkspace.outline;
        var viewportTarget = viewport.elementFromPoint(point);
        var outlineTarget = outline.elementFromPoint(point);
        var viewportNodeElement = viewportTarget === null || viewportTarget === void 0 ? void 0 : viewportTarget.closest("\n      *[".concat(engine.props.nodeIdAttrName, "],\n      *[").concat(engine.props.outlineNodeIdAttrName, "]\n    "));
        var outlineNodeElement = outlineTarget === null || outlineTarget === void 0 ? void 0 : outlineTarget.closest("\n    *[".concat(engine.props.nodeIdAttrName, "],\n    *[").concat(engine.props.outlineNodeIdAttrName, "]\n  "));
        var nodeId = viewportNodeElement === null || viewportNodeElement === void 0 ? void 0 : viewportNodeElement.getAttribute(engine.props.nodeIdAttrName);
        var outlineNodeId = outlineNodeElement === null || outlineNodeElement === void 0 ? void 0 : outlineNodeElement.getAttribute(engine.props.outlineNodeIdAttrName);
        var touchNode = tree.findById(outlineNodeId || nodeId);
        moveHelper.dragMove({ point: point, touchNode: touchNode });
    });
    engine.subscribeTo(DragStopEvent, function () {
        if (engine.cursor.type !== CursorType.Normal)
            return;
        if (engine.cursor.dragType !== CursorDragType.Move)
            return;
        engine.workbench.eachWorkspace(function (currentWorkspace) {
            var operation = currentWorkspace.operation;
            var moveHelper = operation.moveHelper;
            var dragNodes = moveHelper.dragNodes;
            var closestNode = moveHelper.closestNode;
            var closestDirection = moveHelper.closestDirection;
            var selection = operation.selection;
            if (!dragNodes.length)
                return;
            if (dragNodes.length && closestNode && closestDirection) {
                if (closestDirection === ClosestPosition.After ||
                    closestDirection === ClosestPosition.Under) {
                    if (closestNode.allowSibling(dragNodes)) {
                        selection.batchSafeSelect(closestNode.insertAfter.apply(closestNode, __spreadArray([], __read(TreeNode.filterDroppable(dragNodes, closestNode.parent)), false)));
                    }
                }
                else if (closestDirection === ClosestPosition.Before ||
                    closestDirection === ClosestPosition.Upper) {
                    if (closestNode.allowSibling(dragNodes)) {
                        selection.batchSafeSelect(closestNode.insertBefore.apply(closestNode, __spreadArray([], __read(TreeNode.filterDroppable(dragNodes, closestNode.parent)), false)));
                    }
                }
                else if (closestDirection === ClosestPosition.Inner ||
                    closestDirection === ClosestPosition.InnerAfter) {
                    if (closestNode.allowAppend(dragNodes)) {
                        selection.batchSafeSelect(closestNode.append.apply(closestNode, __spreadArray([], __read(TreeNode.filterDroppable(dragNodes, closestNode)), false)));
                        moveHelper.dragDrop({ dropNode: closestNode });
                    }
                }
                else if (closestDirection === ClosestPosition.InnerBefore) {
                    if (closestNode.allowAppend(dragNodes)) {
                        selection.batchSafeSelect(closestNode.prepend.apply(closestNode, __spreadArray([], __read(TreeNode.filterDroppable(dragNodes, closestNode)), false)));
                        moveHelper.dragDrop({ dropNode: closestNode });
                    }
                }
            }
            moveHelper.dragEnd();
        });
        engine.cursor.setStyle('');
    });
};

var useResizeEffect = function (engine) {
    var findStartNodeHandler = function (target) {
        var handler = target === null || target === void 0 ? void 0 : target.closest("*[".concat(engine.props.nodeResizeHandlerAttrName, "]"));
        if (handler) {
            var direction = handler.getAttribute(engine.props.nodeResizeHandlerAttrName);
            if (direction) {
                var element = handler.closest("*[".concat(engine.props.nodeSelectionIdAttrName, "]"));
                if (element) {
                    var nodeId = element.getAttribute(engine.props.nodeSelectionIdAttrName);
                    if (nodeId) {
                        var node = engine.findNodeById(nodeId);
                        if (node) {
                            return { direction: direction, node: node, element: element };
                        }
                    }
                }
            }
        }
        return;
    };
    engine.subscribeTo(DragStartEvent, function (event) {
        var _a, _b;
        var target = event.data.target;
        var currentWorkspace = (_b = (_a = event.context) === null || _a === void 0 ? void 0 : _a.workspace) !== null && _b !== void 0 ? _b : engine.workbench.activeWorkspace;
        if (!currentWorkspace)
            return;
        var handler = findStartNodeHandler(target);
        var helper = currentWorkspace.operation.transformHelper;
        if (handler) {
            var selectionElement = handler.element.closest("*[".concat(engine.props.nodeSelectionIdAttrName, "]"));
            if (selectionElement) {
                var nodeId = selectionElement.getAttribute(engine.props.nodeSelectionIdAttrName);
                if (nodeId) {
                    var node = engine.findNodeById(nodeId);
                    if (node) {
                        helper.dragStart({
                            dragNodes: [node],
                            type: 'resize',
                            direction: handler.direction,
                        });
                    }
                }
            }
        }
    });
    engine.subscribeTo(DragMoveEvent, function (event) {
        var _a, _b;
        if (engine.cursor.dragType !== CursorDragType.Resize)
            return;
        var currentWorkspace = (_b = (_a = event.context) === null || _a === void 0 ? void 0 : _a.workspace) !== null && _b !== void 0 ? _b : engine.workbench.activeWorkspace;
        var helper = currentWorkspace === null || currentWorkspace === void 0 ? void 0 : currentWorkspace.operation.transformHelper;
        var dragNodes = helper.dragNodes;
        if (!dragNodes.length)
            return;
        helper.dragMove();
        dragNodes.forEach(function (node) {
            var element = node.getElement();
            helper.resize(node, function (rect) {
                element.style.width = rect.width + 'px';
                element.style.height = rect.height + 'px';
                element.style.position = 'absolute';
                element.style.left = '0px';
                element.style.top = '0px';
                element.style.transform = "translate3d(".concat(rect.x, "px,").concat(rect.y, "px,0)");
            });
        });
    });
    engine.subscribeTo(DragStopEvent, function (event) {
        var _a, _b;
        if (engine.cursor.dragType !== CursorDragType.Resize)
            return;
        var currentWorkspace = (_b = (_a = event.context) === null || _a === void 0 ? void 0 : _a.workspace) !== null && _b !== void 0 ? _b : engine.workbench.activeWorkspace;
        var helper = currentWorkspace === null || currentWorkspace === void 0 ? void 0 : currentWorkspace.operation.transformHelper;
        if (helper) {
            helper.dragEnd();
        }
    });
};

var useSelectionEffect = function (engine) {
    engine.subscribeTo(MouseClickEvent, function (event) {
        var _a, _b, _c, _d;
        if (engine.cursor.status !== CursorStatus.Normal)
            return;
        var target = event.data.target;
        var el = (_a = target === null || target === void 0 ? void 0 : target.closest) === null || _a === void 0 ? void 0 : _a.call(target, "\n      *[".concat(engine.props.nodeIdAttrName, "],\n      *[").concat(engine.props.outlineNodeIdAttrName, "]\n    "));
        var isHelpers = (_b = target === null || target === void 0 ? void 0 : target.closest) === null || _b === void 0 ? void 0 : _b.call(target, "*[".concat(engine.props.nodeSelectionIdAttrName, "]"));
        var currentWorkspace = (_d = (_c = event.context) === null || _c === void 0 ? void 0 : _c.workspace) !== null && _d !== void 0 ? _d : engine.workbench.activeWorkspace;
        if (!currentWorkspace)
            return;
        if (!(el === null || el === void 0 ? void 0 : el.getAttribute)) {
            var point = new Point(event.data.topClientX, event.data.topClientY);
            var operation_1 = currentWorkspace.operation;
            var viewport = currentWorkspace.viewport;
            var outline = currentWorkspace.outline;
            var isInViewport = viewport.isPointInViewport(point, false);
            var isInOutline = outline.isPointInViewport(point, false);
            if (isHelpers)
                return;
            if (isInViewport || isInOutline) {
                var selection_1 = operation_1.selection;
                var tree_1 = operation_1.tree;
                selection_1.select(tree_1);
            }
            return;
        }
        var nodeId = el.getAttribute(engine.props.nodeIdAttrName);
        var structNodeId = el.getAttribute(engine.props.outlineNodeIdAttrName);
        var operation = currentWorkspace.operation;
        var selection = operation.selection;
        var tree = operation.tree;
        var node = tree.findById(nodeId || structNodeId);
        if (node) {
            engine.keyboard.requestClean();
            if (engine.keyboard.isKeyDown(KeyCode.Meta) ||
                engine.keyboard.isKeyDown(KeyCode.Control)) {
                if (selection.has(node)) {
                    if (selection.selected.length > 1) {
                        selection.remove(node);
                    }
                }
                else {
                    selection.add(node);
                }
            }
            else if (engine.keyboard.isKeyDown(KeyCode.Shift)) {
                if (selection.has(node)) {
                    if (selection.selected.length > 1) {
                        selection.remove(node);
                    }
                }
                else {
                    selection.crossAddTo(node);
                }
            }
            else {
                selection.select(node);
            }
        }
        else {
            selection.select(tree);
        }
    });
};

var useFreeSelectionEffect = function (engine) {
    engine.subscribeTo(DragStopEvent, function (event) {
        if (engine.cursor.dragType !== CursorDragType.Move) {
            return;
        }
        engine.workbench.eachWorkspace(function (workspace) {
            var viewport = workspace.viewport;
            var dragEndPoint = new Point(event.data.topClientX, event.data.topClientY);
            var dragStartOffsetPoint = viewport.getOffsetPoint(new Point(engine.cursor.dragStartPosition.topClientX, engine.cursor.dragStartPosition.topClientY));
            var dragEndOffsetPoint = viewport.getOffsetPoint(new Point(engine.cursor.position.topClientX, engine.cursor.position.topClientY));
            if (!viewport.isPointInViewport(dragEndPoint, false))
                return;
            var tree = workspace.operation.tree;
            var selectionRect = calcRectByStartEndPoint(dragStartOffsetPoint, dragEndOffsetPoint, viewport.dragScrollXDelta, viewport.dragScrollYDelta);
            //DOMRect
            var selected = [];
            tree.eachChildren(function (node) {
                var nodeRect = viewport.getValidNodeOffsetRect(node);
                if (nodeRect && isCrossRectInRect(selectionRect, nodeRect)) {
                    selected.push([node, nodeRect]);
                }
            });
            var selectedNodes = selected.reduce(function (buf, _a) {
                var _b = __read(_a, 2), node = _b[0], nodeRect = _b[1];
                if (isRectInRect(nodeRect, selectionRect)) {
                    if (selected.some(function (_a) {
                        var _b = __read(_a, 1), selectNode = _b[0];
                        return selectNode.isMyParents(node);
                    })) {
                        return buf;
                    }
                }
                return buf.concat(node);
            }, []);
            workspace.operation.selection.batchSafeSelect(selectedNodes);
        });
        if (engine.cursor.type === CursorType.Selection) {
            engine.cursor.setType(CursorType.Normal);
        }
    });
};

var useKeyboardEffect = function (engine) {
    engine.subscribeTo(KeyDownEvent, function (event) {
        var keyboard = engine.keyboard;
        if (!keyboard)
            return;
        var workspace = engine.workbench.activeWorkspace || engine.workbench.currentWorkspace;
        keyboard.handleKeyboard(event, workspace.getEventContext());
    });
    engine.subscribeTo(KeyUpEvent, function (event) {
        var keyboard = engine.keyboard;
        if (!keyboard)
            return;
        var workspace = engine.workbench.activeWorkspace || engine.workbench.currentWorkspace;
        keyboard.handleKeyboard(event, workspace.getEventContext());
    });
};

var useAutoScrollEffect = function (engine) {
    var xScroller = null;
    var yScroller = null;
    var xScrollerAnimationStop = null;
    var yScrollerAnimationStop = null;
    var scrolling = function (point, viewport) {
        if (engine.cursor.status === CursorStatus.Dragging) {
            xScroller = calcAutoScrollBasicInfo(point, 'x', viewport.rect);
            yScroller = calcAutoScrollBasicInfo(point, 'y', viewport.rect);
            if (xScroller) {
                if (xScrollerAnimationStop) {
                    xScrollerAnimationStop();
                }
                xScrollerAnimationStop = scrollAnimate(viewport.scrollContainer, 'x', xScroller.direction, xScroller.speed);
            }
            else {
                if (xScrollerAnimationStop) {
                    xScrollerAnimationStop();
                }
            }
            if (yScroller) {
                if (yScrollerAnimationStop) {
                    yScrollerAnimationStop();
                }
                yScrollerAnimationStop = scrollAnimate(viewport.scrollContainer, 'y', yScroller.direction, yScroller.speed);
            }
            else {
                if (yScrollerAnimationStop) {
                    yScrollerAnimationStop();
                }
            }
        }
    };
    engine.subscribeTo(DragStartEvent, function () {
        engine.workbench.eachWorkspace(function (workspace) {
            workspace.viewport.takeDragStartSnapshot();
        });
    });
    engine.subscribeTo(DragMoveEvent, function (event) {
        engine.workbench.eachWorkspace(function (workspace) {
            var viewport = workspace.viewport;
            var outline = workspace.outline;
            var point = new Point(event.data.topClientX, event.data.topClientY);
            if (outline.isPointInViewport(point)) {
                scrolling(point, outline);
            }
            else if (viewport.isPointInViewport(point)) {
                scrolling(point, viewport);
            }
        });
    });
    engine.subscribeTo(DragStopEvent, function () {
        xScroller = null;
        yScroller = null;
        if (xScrollerAnimationStop) {
            xScrollerAnimationStop();
        }
        if (yScrollerAnimationStop) {
            yScrollerAnimationStop();
        }
    });
};

var useWorkspaceEffect = function (engine) {
    engine.subscribeWith([
        'append:node',
        'insert:after',
        'insert:before',
        'insert:children',
        'drag:node',
        'drop:node',
        'prepend:node',
        'remove:node',
        'select:node',
        'update:children',
        'wrap:node',
        'update:node:props',
    ], function (event) {
        var _a;
        if ((_a = event.context) === null || _a === void 0 ? void 0 : _a.workbench) {
            engine.workbench.setActiveWorkspace(event.context.workspace);
        }
    });
    engine.subscribeTo(SelectNodeEvent, function (event) {
        engine.workbench.eachWorkspace(function (workspace) {
            if (workspace !== event.context.workspace) {
                workspace.operation.selection.clear();
            }
        });
    });
};

function getAllRanges(sel) {
    var ranges = [];
    for (var i = 0; i < sel.rangeCount; i++) {
        var range = sel.getRangeAt(i);
        ranges[i] = {
            collapsed: range.collapsed,
            startOffset: range.startOffset,
            endOffset: range.endOffset,
        };
    }
    return ranges;
}
function setEndOfContenteditable(contentEditableElement) {
    var range = document.createRange();
    range.selectNodeContents(contentEditableElement);
    range.collapse(false);
    var selection = globalThisPolyfill.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}
function createCaretCache(el) {
    var currentSelection = globalThisPolyfill.getSelection();
    if (currentSelection.containsNode(el))
        return;
    var ranges = getAllRanges(currentSelection);
    return function (offset) {
        if (offset === void 0) { offset = 0; }
        var sel = globalThisPolyfill.getSelection();
        var firstNode = el.childNodes[0];
        if (!firstNode)
            return;
        sel.removeAllRanges();
        ranges.forEach(function (item) {
            var range = document.createRange();
            range.collapse(item.collapsed);
            range.setStart(firstNode, item.startOffset + offset);
            range.setEnd(firstNode, item.endOffset + offset);
            sel.addRange(range);
        });
    };
}
var useContentEditableEffect = function (engine) {
    var globalState = {
        activeElements: new Map(),
        queue: [],
        requestTimer: null,
        isComposition: false,
    };
    function onKeyDownHandler(event) {
        if (event.key === 'Enter') {
            event.stopPropagation();
            event.preventDefault();
        }
    }
    function onInputHandler(event) {
        var _this = this;
        var node = globalState.activeElements.get(this);
        event.stopPropagation();
        event.preventDefault();
        if (node) {
            var target_1 = event.target;
            var handler = function () {
                globalState.queue.length = 0;
                if (globalState.isComposition)
                    return;
                var restore = createCaretCache(target_1);
                Path.setIn(node.props, _this.getAttribute(engine.props.contentEditableAttrName), target_1 === null || target_1 === void 0 ? void 0 : target_1.textContent);
                requestIdle(function () {
                    node.takeSnapshot('update:node:props');
                    restore();
                });
            };
            globalState.queue.push(handler);
            clearTimeout(globalState.requestTimer);
            globalState.requestTimer = setTimeout(handler, 600);
        }
    }
    function onSelectionChangeHandler() {
        clearTimeout(globalState.requestTimer);
        globalState.requestTimer = setTimeout(globalState.queue[globalState.queue.length - 1], 600);
    }
    function onCompositionHandler(event) {
        if (event.type === 'compositionend') {
            globalState.isComposition = false;
            onInputHandler(event);
        }
        else {
            clearTimeout(globalState.requestTimer);
            globalState.isComposition = true;
        }
    }
    function onPastHandler(event) {
        event.preventDefault();
        var node = globalState.activeElements.get(this);
        var text = event.clipboardData.getData('text');
        var selObj = globalThisPolyfill.getSelection();
        var target = event.target;
        var selRange = selObj.getRangeAt(0);
        var restore = createCaretCache(target);
        selRange.deleteContents();
        selRange.insertNode(document.createTextNode(text));
        Path.setIn(node.props, this.getAttribute(engine.props.contentEditableAttrName), target.textContent);
        restore(text.length);
    }
    function findTargetNodeId(element) {
        if (!element)
            return;
        var nodeId = element.getAttribute(engine.props.contentEditableNodeIdAttrName);
        if (nodeId)
            return nodeId;
        var parent = element.closest("*[".concat(engine.props.nodeIdAttrName, "]"));
        if (parent)
            return parent.getAttribute(engine.props.nodeIdAttrName);
    }
    engine.subscribeTo(MouseClickEvent, function (event) {
        var _a;
        var target = event.data.target;
        var editableElement = (_a = target === null || target === void 0 ? void 0 : target.closest) === null || _a === void 0 ? void 0 : _a.call(target, "*[".concat(engine.props.contentEditableAttrName, "]"));
        if (editableElement &&
            editableElement.getAttribute('contenteditable') === 'true')
            return;
        globalState.activeElements.forEach(function (node, element) {
            globalState.activeElements.delete(element);
            element.removeAttribute('contenteditable');
            element.removeAttribute('spellcheck');
            element.removeEventListener('input', onInputHandler);
            element.removeEventListener('compositionstart', onCompositionHandler);
            element.removeEventListener('compositionupdate', onCompositionHandler);
            element.removeEventListener('compositionend', onCompositionHandler);
            element.removeEventListener('past', onPastHandler);
            document.removeEventListener('selectionchange', onSelectionChangeHandler);
        });
    });
    engine.subscribeTo(MouseDoubleClickEvent, function (event) {
        var _a;
        var target = event.data.target;
        var editableElement = (_a = target === null || target === void 0 ? void 0 : target.closest) === null || _a === void 0 ? void 0 : _a.call(target, "*[".concat(engine.props.contentEditableAttrName, "]"));
        var workspace = engine.workbench.activeWorkspace;
        var tree = workspace.operation.tree;
        if (editableElement) {
            var editable = editableElement.getAttribute('contenteditable');
            if (editable === 'false' || !editable) {
                var nodeId = findTargetNodeId(editableElement);
                if (nodeId) {
                    var targetNode = tree.findById(nodeId);
                    if (targetNode) {
                        globalState.activeElements.set(editableElement, targetNode);
                        editableElement.setAttribute('spellcheck', 'false');
                        editableElement.setAttribute('contenteditable', 'true');
                        editableElement.focus();
                        editableElement.addEventListener('input', onInputHandler);
                        editableElement.addEventListener('compositionstart', onCompositionHandler);
                        editableElement.addEventListener('compositionupdate', onCompositionHandler);
                        editableElement.addEventListener('compositionend', onCompositionHandler);
                        editableElement.addEventListener('keydown', onKeyDownHandler);
                        editableElement.addEventListener('paste', onPastHandler);
                        document.addEventListener('selectionchange', onSelectionChangeHandler);
                        setEndOfContenteditable(editableElement);
                    }
                }
            }
        }
    });
};

var useTranslateEffect = function (engine) {
    engine.subscribeTo(DragStartEvent, function (event) {
        var _a, _b;
        var target = event.data.target;
        var currentWorkspace = (_b = (_a = event.context) === null || _a === void 0 ? void 0 : _a.workspace) !== null && _b !== void 0 ? _b : engine.workbench.activeWorkspace;
        var handler = target === null || target === void 0 ? void 0 : target.closest("*[".concat(engine.props.nodeTranslateAttrName, "]"));
        if (!currentWorkspace)
            return;
        var helper = currentWorkspace.operation.transformHelper;
        if (handler) {
            var type = handler.getAttribute(engine.props.nodeTranslateAttrName);
            if (type) {
                var selectionElement = handler.closest("*[".concat(engine.props.nodeSelectionIdAttrName, "]"));
                if (selectionElement) {
                    var nodeId = selectionElement.getAttribute(engine.props.nodeSelectionIdAttrName);
                    if (nodeId) {
                        var node = engine.findNodeById(nodeId);
                        if (node) {
                            helper.dragStart({ dragNodes: [node], type: 'translate' });
                        }
                    }
                }
            }
        }
    });
    engine.subscribeTo(DragMoveEvent, function (event) {
        var _a, _b;
        if (engine.cursor.dragType !== CursorDragType.Translate)
            return;
        var currentWorkspace = (_b = (_a = event.context) === null || _a === void 0 ? void 0 : _a.workspace) !== null && _b !== void 0 ? _b : engine.workbench.activeWorkspace;
        var helper = currentWorkspace === null || currentWorkspace === void 0 ? void 0 : currentWorkspace.operation.transformHelper;
        var dragNodes = helper.dragNodes;
        if (!dragNodes.length)
            return;
        helper.dragMove();
        dragNodes.forEach(function (node) {
            var element = node.getElement();
            helper.translate(node, function (translate) {
                element.style.position = 'absolute';
                element.style.left = '0px';
                element.style.top = '0px';
                element.style.transform = "translate3d(".concat(translate.x, "px,").concat(translate.y, "px,0)");
            });
        });
    });
    engine.subscribeTo(DragStopEvent, function (event) {
        var _a, _b;
        if (engine.cursor.dragType !== CursorDragType.Translate)
            return;
        var currentWorkspace = (_b = (_a = event.context) === null || _a === void 0 ? void 0 : _a.workspace) !== null && _b !== void 0 ? _b : engine.workbench.activeWorkspace;
        var helper = currentWorkspace === null || currentWorkspace === void 0 ? void 0 : currentWorkspace.operation.transformHelper;
        if (helper) {
            helper.dragEnd();
        }
    });
};

var SelectNodes = new Shortcut({
    codes: [[KeyCode.Meta], [KeyCode.Control]],
});
var SelectSameTypeNodes = new Shortcut({
    codes: [KeyCode.Shift],
});
var PreventCommandX = new Shortcut({
    codes: [
        [KeyCode.Meta, KeyCode.X],
        [KeyCode.Control, KeyCode.X],
    ],
});
var SelectAllNodes = new Shortcut({
    codes: [
        [KeyCode.Meta, KeyCode.A],
        [KeyCode.Control, KeyCode.A],
    ],
    handler: function (context) {
        var operation = context === null || context === void 0 ? void 0 : context.workspace.operation;
        if (operation) {
            var tree = operation.tree;
            var selection = operation.selection;
            selection.batchSelect(tree.descendants);
        }
    },
});

/**
 * 快捷删除，快捷复制粘贴
 */
var DeleteNodes = new Shortcut({
    codes: [[KeyCode.Backspace], [KeyCode.Delete]],
    handler: function (context) {
        var operation = context === null || context === void 0 ? void 0 : context.workspace.operation;
        if (operation) {
            TreeNode.remove(operation.selection.selectedNodes);
        }
    },
});
var Clipboard = {
    nodes: [],
};
var CopyNodes = new Shortcut({
    codes: [
        [KeyCode.Meta, KeyCode.C],
        [KeyCode.Control, KeyCode.C],
    ],
    handler: function (context) {
        var operation = context === null || context === void 0 ? void 0 : context.workspace.operation;
        if (operation) {
            Clipboard.nodes = operation.selection.selectedNodes;
        }
    },
});
var PasteNodes = new Shortcut({
    codes: [
        [KeyCode.Meta, KeyCode.V],
        [KeyCode.Control, KeyCode.V],
    ],
    handler: function (context) {
        var operation = context === null || context === void 0 ? void 0 : context.workspace.operation;
        if (operation) {
            TreeNode.clone(Clipboard.nodes);
        }
    },
});

var UndoMutation = new Shortcut({
    codes: [
        [KeyCode.Meta, KeyCode.Z],
        [KeyCode.Control, KeyCode.Z],
    ],
    handler: function (context) {
        var workspace = context === null || context === void 0 ? void 0 : context.workspace;
        if (workspace) {
            workspace.history.undo();
        }
        workspace.operation.hover.clear();
    },
});
var RedoMutation = new Shortcut({
    codes: [
        [KeyCode.Meta, KeyCode.Shift, KeyCode.Z],
        [KeyCode.Control, KeyCode.Shift, KeyCode.Z],
    ],
    handler: function (context) {
        var workspace = context === null || context === void 0 ? void 0 : context.workspace;
        if (workspace) {
            workspace.history.redo();
        }
        workspace.operation.hover.clear();
    },
});

var CursorSwitchSelection = new Shortcut({
    codes: [KeyCode.Shift, KeyCode.S],
    handler: function (context) {
        var engine = context === null || context === void 0 ? void 0 : context.engine;
        if (engine) {
            engine.cursor.setType(CursorType.Selection);
        }
    },
});

var findBottomLastChild = function (node) {
    if (!node)
        return node;
    if (node.lastChild) {
        return findBottomLastChild(node.lastChild);
    }
    return node;
};
var findTopParentNext = function (node) {
    var _a;
    if (!node.parent)
        return node;
    if ((_a = node.parent) === null || _a === void 0 ? void 0 : _a.next)
        return node.parent.next;
    return findTopParentNext(node.parent);
};
var SelectPrevNode = new Shortcut({
    codes: [
        [KeyCode.Up],
        [KeyCode.PageUp],
        [KeyCode.ArrowUp],
        [KeyCode.Left],
        [KeyCode.LeftWindowKey],
        [KeyCode.ArrowLeft],
    ],
    handler: function (context) {
        var operation = context === null || context === void 0 ? void 0 : context.workspace.operation;
        if (operation) {
            var tree = operation.tree;
            var selection = operation.selection;
            var selectedNode = tree.findById(selection.last);
            if (selectedNode) {
                var previousNode = selectedNode.previous;
                if (previousNode) {
                    var bottom = findBottomLastChild(previousNode);
                    if (bottom) {
                        selection.select(bottom);
                    }
                    else {
                        selection.select(previousNode);
                    }
                }
                else if (selectedNode.parent) {
                    selection.select(selectedNode.parent);
                }
                else {
                    var bottom = findBottomLastChild(selectedNode.lastChild);
                    if (bottom) {
                        selection.select(bottom);
                    }
                }
            }
        }
    },
});
var SelectNextNode = new Shortcut({
    codes: [
        [KeyCode.Down],
        [KeyCode.PageDown],
        [KeyCode.ArrowDown],
        [KeyCode.Right],
        [KeyCode.RightWindowKey],
        [KeyCode.ArrowRight],
    ],
    handler: function (context) {
        var operation = context === null || context === void 0 ? void 0 : context.workspace.operation;
        if (operation) {
            var tree = operation.tree;
            var selection = operation.selection;
            var selectedNode = tree.findById(selection.last);
            if (selectedNode) {
                var nextNode = selectedNode.firstChild
                    ? selectedNode.firstChild
                    : selectedNode.next;
                if (nextNode) {
                    selection.select(nextNode);
                }
                else {
                    selection.select(findTopParentNext(selectedNode));
                }
            }
        }
    },
});

var DEFAULT_EFFECTS = [
    useFreeSelectionEffect,
    useCursorEffect,
    useViewportEffect,
    useDragDropEffect,
    useSelectionEffect,
    useKeyboardEffect,
    useAutoScrollEffect,
    useWorkspaceEffect,
    useContentEditableEffect,
    useTranslateEffect,
    useResizeEffect,
];
var DEFAULT_DRIVERS = [
    MouseMoveDriver,
    DragDropDriver,
    MouseClickDriver,
    ViewportResizeDriver,
    ViewportScrollDriver,
    KeyboardDriver,
];
var DEFAULT_SHORTCUTS = [
    PreventCommandX,
    SelectNodes,
    SelectAllNodes,
    SelectSameTypeNodes,
    DeleteNodes,
    CopyNodes,
    PasteNodes,
    SelectPrevNode,
    SelectNextNode,
    UndoMutation,
    RedoMutation,
    CursorSwitchSelection,
];

var isBehaviorHost = function (val) {
    return (val === null || val === void 0 ? void 0 : val.Behavior) && isBehaviorList(val.Behavior);
};
var isBehaviorList = function (val) {
    return Array.isArray(val) && val.every(isBehavior);
};
var isBehavior = function (val) {
    return (val === null || val === void 0 ? void 0 : val.name) ||
        (val === null || val === void 0 ? void 0 : val.selector) ||
        (val === null || val === void 0 ? void 0 : val.extends) ||
        (val === null || val === void 0 ? void 0 : val.designerProps) ||
        (val === null || val === void 0 ? void 0 : val.designerLocales);
};
var isResourceHost = function (val) {
    return (val === null || val === void 0 ? void 0 : val.Resource) && isResourceList(val.Resource);
};
var isResourceList = function (val) {
    return Array.isArray(val) && val.every(isResource);
};
var isResource = function (val) {
    return (val === null || val === void 0 ? void 0 : val.node) && !!val.node.isSourceNode && val.node instanceof TreeNode;
};
var createLocales = function () {
    var packages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        packages[_i] = arguments[_i];
    }
    var results = {};
    packages.forEach(function (locales) {
        mergeLocales(results, locales);
    });
    return results;
};
// 创建组件的行为，locals 信息、propsSchema 可修改属性
var createBehavior = function () {
    var behaviors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        behaviors[_i] = arguments[_i];
    }
    return behaviors.reduce(function (buf, behavior) {
        if (isArr(behavior))
            return buf.concat(createBehavior.apply(void 0, __spreadArray([], __read(behavior), false)));
        var selector = (behavior || {}).selector;
        if (!selector)
            return buf;
        if (typeof selector === 'string') {
            behavior.selector = function (node) { return node.componentName === selector; };
        }
        return buf.concat(behavior);
    }, []);
};
// 创建资源基础信息，用于左侧拖拽组件
var createResource = function () {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return sources.reduce(function (buf, source) {
        return buf.concat(__assign(__assign({}, source), { node: new TreeNode({
                componentName: '$$ResourceNode$$',
                isSourceNode: true,
                children: source.elements || [],
            }) }));
    }, []);
};
// 创建设计器实例
var createDesigner = function (props) {
    if (props === void 0) { props = {}; }
    var drivers = props.drivers || [];
    var effects = props.effects || [];
    var shortcuts = props.shortcuts || [];
    // untracked 不会对返回值进行依赖收集
    return untracked(function () {
        return new Engine(__assign(__assign({}, props), { effects: __spreadArray(__spreadArray([], __read(effects), false), __read(DEFAULT_EFFECTS), false), drivers: __spreadArray(__spreadArray([], __read(drivers), false), __read(DEFAULT_DRIVERS), false), shortcuts: __spreadArray(__spreadArray([], __read(shortcuts), false), __read(DEFAULT_SHORTCUTS), false) }));
    });
};

var createExtForm = function (props) {
    if (props === void 0) { props = {}; }
    var extConfig = props.extConfig, formilyFormProps = __rest(props, ["extConfig"]);
    var form = createForm(__assign({}, formilyFormProps));
    Object.assign(form, { extConfig: __assign({}, extConfig) });
    return form;
};

var Core = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isBehaviorHost: isBehaviorHost,
  isBehaviorList: isBehaviorList,
  isBehavior: isBehavior,
  isResourceHost: isResourceHost,
  isResourceList: isResourceList,
  isResource: isResource,
  createLocales: createLocales,
  createBehavior: createBehavior,
  createResource: createResource,
  createDesigner: createDesigner,
  GlobalRegistry: GlobalRegistry,
  Engine: Engine,
  get ScreenType () { return ScreenType; },
  get ScreenStatus () { return ScreenStatus; },
  Screen: Screen,
  get CursorStatus () { return CursorStatus; },
  get CursorDragType () { return CursorDragType; },
  get CursorType () { return CursorType; },
  Cursor: Cursor,
  Operation: Operation,
  Viewport: Viewport,
  TreeNode: TreeNode,
  Workbench: Workbench,
  Workspace: Workspace,
  Selection: Selection,
  get ClosestPosition () { return ClosestPosition; },
  MoveHelper: MoveHelper,
  Keyboard: Keyboard,
  KeyCode: KeyCode,
  Shortcut: Shortcut,
  History: History,
  DragMoveEvent: DragMoveEvent,
  DragStartEvent: DragStartEvent,
  DragStopEvent: DragStopEvent,
  MouseClickEvent: MouseClickEvent,
  MouseDoubleClickEvent: MouseDoubleClickEvent,
  MouseMoveEvent: MouseMoveEvent,
  KeyDownEvent: KeyDownEvent,
  KeyUpEvent: KeyUpEvent,
  DragNodeEvent: DragNodeEvent,
  DropNodeEvent: DropNodeEvent,
  HoverNodeEvent: HoverNodeEvent,
  InsertAfterEvent: InsertAfterEvent,
  InsertBeforeEvent: InsertBeforeEvent,
  InsertChildrenEvent: InsertChildrenEvent,
  PrependNodeEvent: PrependNodeEvent,
  RemoveNodeEvent: RemoveNodeEvent,
  SelectNodeEvent: SelectNodeEvent,
  UnSelectNodeEvent: UnSelectNodeEvent,
  UpdateChildrenEvent: UpdateChildrenEvent,
  UpdateNodePropsEvent: UpdateNodePropsEvent,
  WrapNodeEvent: WrapNodeEvent,
  CloneNodeEvent: CloneNodeEvent,
  AppendNodeEvent: AppendNodeEvent,
  FromNodeEvent: FromNodeEvent,
  ViewportResizeEvent: ViewportResizeEvent,
  ViewportScrollEvent: ViewportScrollEvent,
  AddWorkspaceEvent: AddWorkspaceEvent,
  RemoveWorkspaceEvent: RemoveWorkspaceEvent,
  SwitchWorkspaceEvent: SwitchWorkspaceEvent,
  HistoryUndoEvent: HistoryUndoEvent,
  HistoryRedoEvent: HistoryRedoEvent,
  HistoryGotoEvent: HistoryGotoEvent,
  HistoryPushEvent: HistoryPushEvent,
  createExtForm: createExtForm
});

var _a;
if ((_a = globalThisPolyfill === null || globalThisPolyfill === void 0 ? void 0 : globalThisPolyfill['FormCreated']) === null || _a === void 0 ? void 0 : _a['Core']) {
    if (module.exports) {
        module.exports = __assign({ __esModule: true }, globalThisPolyfill['FormCreated']['Core']);
    }
}
else {
    globalThisPolyfill['FormCreated'] = globalThisPolyfill['FormCreated'] || {};
    globalThisPolyfill['FormCreated'].Core = Core;
}

export { AddWorkspaceEvent, AppendNodeEvent, CloneNodeEvent, ClosestPosition, Cursor, CursorDragType, CursorStatus, CursorType, DragMoveEvent, DragNodeEvent, DragStartEvent, DragStopEvent, DropNodeEvent, Engine, FromNodeEvent, GlobalRegistry, History, HistoryGotoEvent, HistoryPushEvent, HistoryRedoEvent, HistoryUndoEvent, HoverNodeEvent, InsertAfterEvent, InsertBeforeEvent, InsertChildrenEvent, KeyDownEvent, KeyUpEvent, Keyboard, MouseClickEvent, MouseDoubleClickEvent, MouseMoveEvent, MoveHelper, Operation, PrependNodeEvent, RemoveNodeEvent, RemoveWorkspaceEvent, Screen, ScreenStatus, ScreenType, SelectNodeEvent, Selection, Shortcut, SwitchWorkspaceEvent, TreeNode, UnSelectNodeEvent, UpdateChildrenEvent, UpdateNodePropsEvent, Viewport, ViewportResizeEvent, ViewportScrollEvent, Workbench, Workspace, WrapNodeEvent, createBehavior, createDesigner, createExtForm, createLocales, createResource, isBehavior, isBehaviorHost, isBehaviorList, isResource, isResourceHost, isResourceList };
