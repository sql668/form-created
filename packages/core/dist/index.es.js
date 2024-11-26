import { globalThisPolyfill as t, getKeyCodeFromEvent as e, EventDriver as n, isPlainObj as r, each as o, isFn as i, uid as s, cancelIdle as a, requestIdle as c, isHTMLElement as u, isPointInRect as l, isRectInRect as d, Rect as h, calcBoundingRect as p, calcElementLayout as f, isStr as v, isArr as g, calcOffsetOfSnapLineSegmentToEdge as y, calcRectOfAxisLineSegment as m, calcExtendsLineSegmentOfRect as w, LineSegment as b, calcDistanceOfSnapLineToEdges as E, isValidNumber as N, calcElementTranslate as S, calcEdgeLinesOfRect as k, isEqualRect as R, calcSpaceBlockOfRect as C, isLineSegment as P, Point as O, calcClosestEdges as A, calcCombineSnapLineSegment as D, isNearAfter as x, calcDistancePointToEdge as I, calcDistanceOfPointToRect as T, KeyCode as W, Event as M, calcRectByStartEndPoint as L, isCrossRectInRect as B, calcAutoScrollBasicInfo as j, scrollAnimate as X } from "@form-created/shared";

export { KeyCode } from "@form-created/shared";

import { observable as Y, define as V, action as z, toJS as F, untracked as q } from "@formily/reactive";

import { ResizeObserver as H } from "@juggle/resize-observer";

import { Path as U } from "@formily/path";

import { createForm as K } from "@formily/core";

var _ = function(t, e) {
    return _ = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }, _(t, e);
};

function $(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    function n() {
        this.constructor = t;
    }
    _(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, 
    new n);
}

var G = function() {
    return G = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n], 
        e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
    }, G.apply(this, arguments);
};

function Z(t, e) {
    var n = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
    }
    return n;
}

function J(t) {
    var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
    if (n) return n.call(t);
    if (t && "number" == typeof t.length) return {
        next: function() {
            return t && r >= t.length && (t = void 0), {
                value: t && t[r++],
                done: !t
            };
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function Q(t, e) {
    var n = "function" == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var r, o, i = n.call(t), s = [];
    try {
        for (;(void 0 === e || e-- > 0) && !(r = i.next()).done; ) s.push(r.value);
    } catch (a) {
        o = {
            error: a
        };
    } finally {
        try {
            r && !r.done && (n = i["return"]) && n.call(i);
        } finally {
            if (o) throw o.error;
        }
    }
    return s;
}

function tt(t, e, n) {
    if (n || 2 === arguments.length) for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), 
    r[o] = e[o]);
    return t.concat(r || Array.prototype.slice.call(e));
}

"function" == typeof SuppressedError && SuppressedError;

var et = function() {
    function e(e) {
        this.data = e || {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            target: null,
            view: t
        }, this.transformCoordinates();
    }
    return e.prototype.transformCoordinates = function() {
        var e, n = ((null === (e = this.data) || void 0 === e ? void 0 : e.view) || {}).frameElement;
        if (n && this.data.view !== t) {
            var r = n.getBoundingClientRect(), o = r.width / n["offsetWidth"];
            this.data.topClientX = this.data.clientX * o + r.x, this.data.topClientY = this.data.clientY * o + r.y, 
            this.data.topPageX = this.data.pageX + r.x - this.data.view.scrollX, this.data.topPageY = this.data.pageY + r.y - this.data.view.scrollY;
            var i = document.elementFromPoint(this.data.topPageX, this.data.topClientY);
            i !== n && (this.data.target = i);
        } else this.data.topClientX = this.data.clientX, this.data.topClientY = this.data.clientY, 
        this.data.topPageX = this.data.pageX, this.data.topPageY = this.data.pageY;
    }, e;
}(), nt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "drag:move", e;
    }
    return $(e, t), e;
}(et), rt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "drag:start", e;
    }
    return $(e, t), e;
}(et), ot = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "drag:stop", e;
    }
    return $(e, t), e;
}(et), it = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "mouse:click", e;
    }
    return $(e, t), e;
}(et), st = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "mouse:dblclick", e;
    }
    return $(e, t), e;
}(et), at = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "mouse:move", e;
    }
    return $(e, t), e;
}(et), ct = function() {
    function t(t) {
        this.data = e(t), this.originEvent = t;
    }
    return Object.defineProperty(t.prototype, "eventType", {
        get: function() {
            return this.originEvent.type;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ctrlKey", {
        get: function() {
            return this.originEvent.ctrlKey;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "shiftKey", {
        get: function() {
            return this.originEvent.shiftKey;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metaKey", {
        get: function() {
            return this.originEvent.metaKey;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "altkey", {
        get: function() {
            return this.originEvent.altKey;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.preventDefault = function() {
        this.originEvent.preventDefault ? this.originEvent.preventDefault() : this.originEvent.returnValue = !1;
    }, t.prototype.stopPropagation = function() {
        var t;
        (null === (t = this.originEvent) || void 0 === t ? void 0 : t.stopPropagation) ? this.originEvent.stopPropagation() : this.originEvent.cancelBubble = !0;
    }, t;
}(), ut = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "key:down", e;
    }
    return $(e, t), e;
}(ct), lt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "key:up", e;
    }
    return $(e, t), e;
}(ct), dt = function(t) {
    this.data = t;
}, ht = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "drag:node", e;
    }
    return $(e, t), e;
}(dt), pt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "drop:node", e;
    }
    return $(e, t), e;
}(dt), ft = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "hover:node", e;
    }
    return $(e, t), e;
}(dt), vt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "insert:after", e;
    }
    return $(e, t), e;
}(dt), gt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "insert:before", e;
    }
    return $(e, t), e;
}(dt), yt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "insert:children", e;
    }
    return $(e, t), e;
}(dt), mt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "prepend:node", e;
    }
    return $(e, t), e;
}(dt), wt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "remove:node", e;
    }
    return $(e, t), e;
}(dt), bt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "select:node", e;
    }
    return $(e, t), e;
}(dt), Et = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "unselect:node", e;
    }
    return $(e, t), e;
}(dt), Nt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "update:children", e;
    }
    return $(e, t), e;
}(dt), St = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "update:node:props", e;
    }
    return $(e, t), e;
}(dt), kt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "wrap:node", e;
    }
    return $(e, t), e;
}(dt), Rt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "clone:node", e;
    }
    return $(e, t), e;
}(dt), Ct = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "append:node", e;
    }
    return $(e, t), e;
}(dt), Pt = function(t) {
    this.type = "from:node", this.data = t;
}, Ot = function(e) {
    this.data = e || {
        scrollX: t.scrollX,
        scrollY: t.scrollY,
        width: t.innerWidth,
        height: t.innerHeight,
        innerWidth: t.innerWidth,
        innerHeight: t.innerHeight,
        view: t,
        target: t
    };
}, At = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "viewport:resize", e;
    }
    return $(e, t), e;
}(Ot), Dt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "viewport:scroll", e;
    }
    return $(e, t), e;
}(Ot), xt = function(t) {
    this.data = t;
}, It = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "add:workspace", e;
    }
    return $(e, t), e;
}(xt), Tt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "remove:workspace", e;
    }
    return $(e, t), e;
}(xt), Wt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "switch:workspace", e;
    }
    return $(e, t), e;
}(xt), Mt = function(t) {
    this.data = t;
}, Lt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "history:undo", e;
    }
    return $(e, t), e;
}(Mt), Bt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "history:redo", e;
    }
    return $(e, t), e;
}(Mt), jt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "history:goto", e;
    }
    return $(e, t), e;
}(Mt), Xt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.type = "history:push", e;
    }
    return $(e, t), e;
}(Mt), Yt = {
    dragging: !1,
    onMouseDownAt: 0,
    startEvent: null,
    moveEvent: null
}, Vt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.mouseDownTimer = null, e.onMouseDown = function(t) {
            var n, r;
            if (0 === t.button && !t.ctrlKey && !t.metaKey) return !(!t.target["isContentEditable"] && "true" !== t.target["contentEditable"]) || void ((null === (r = null === (n = t.target) || void 0 === n ? void 0 : n["closest"]) || void 0 === r ? void 0 : r.call(n, ".monaco-editor")) || (Yt.startEvent = t, 
            Yt.dragging = !1, Yt.onMouseDownAt = Date.now(), e.batchAddEventListener("mouseup", e.onMouseUp), 
            e.batchAddEventListener("dragend", e.onMouseUp), e.batchAddEventListener("dragstart", e.onStartDrag), 
            e.batchAddEventListener("mousemove", e.onDistanceChange)));
        }, e.onMouseUp = function(t) {
            Yt.dragging && e.dispatch(new ot({
                clientX: t.clientX,
                clientY: t.clientY,
                pageX: t.pageX,
                pageY: t.pageY,
                target: t.target,
                view: t.view
            })), e.batchRemoveEventListener("contextmenu", e.onContextMenuWhileDragging, !0), 
            e.batchRemoveEventListener("mouseup", e.onMouseUp), e.batchRemoveEventListener("mousedown", e.onMouseDown), 
            e.batchRemoveEventListener("dragover", e.onMouseMove), e.batchRemoveEventListener("mousemove", e.onMouseMove), 
            e.batchRemoveEventListener("mousemove", e.onDistanceChange), Yt.dragging = !1;
        }, e.onMouseMove = function(t) {
            var n, r;
            t.clientX === (null === (n = Yt.moveEvent) || void 0 === n ? void 0 : n.clientX) && t.clientY === (null === (r = Yt.moveEvent) || void 0 === r ? void 0 : r.clientY) || (e.dispatch(new nt({
                clientX: t.clientX,
                clientY: t.clientY,
                pageX: t.pageX,
                pageY: t.pageY,
                target: t.target,
                view: t.view
            })), Yt.moveEvent = t);
        }, e.onContextMenuWhileDragging = function(t) {
            t.preventDefault();
        }, e.onStartDrag = function(t) {
            Yt.dragging || (Yt.startEvent = Yt.startEvent || t, e.batchAddEventListener("dragover", e.onMouseMove), 
            e.batchAddEventListener("mousemove", e.onMouseMove), e.batchAddEventListener("contextmenu", e.onContextMenuWhileDragging, !0), 
            e.dispatch(new rt({
                clientX: Yt.startEvent.clientX,
                clientY: Yt.startEvent.clientY,
                pageX: Yt.startEvent.pageX,
                pageY: Yt.startEvent.pageY,
                target: Yt.startEvent.target,
                view: Yt.startEvent.view
            })), Yt.dragging = !0);
        }, e.onDistanceChange = function(t) {
            var n = Math.sqrt(Math.pow(t.pageX - Yt.startEvent.pageX, 2) + Math.pow(t.pageY - Yt.startEvent.pageY, 2)), r = Date.now() - Yt.onMouseDownAt;
            r > 10 && t !== Yt.startEvent && n > 4 && (e.batchRemoveEventListener("mousemove", e.onDistanceChange), 
            e.onStartDrag(t));
        }, e;
    }
    return $(e, t), e.prototype.attach = function() {
        this.batchAddEventListener("mousedown", this.onMouseDown, !0);
    }, e.prototype.detach = function() {
        Yt.dragging = !1, Yt.moveEvent = null, Yt.onMouseDownAt = null, Yt.startEvent = null, 
        this.batchRemoveEventListener("mousedown", this.onMouseDown, !0), this.batchRemoveEventListener("dragstart", this.onStartDrag), 
        this.batchRemoveEventListener("dragend", this.onMouseUp), this.batchRemoveEventListener("dragover", this.onMouseMove), 
        this.batchRemoveEventListener("mouseup", this.onMouseUp), this.batchRemoveEventListener("mousemove", this.onMouseMove), 
        this.batchRemoveEventListener("mousemove", this.onDistanceChange), this.batchRemoveEventListener("contextmenu", this.onContextMenuWhileDragging, !0);
    }, e;
}(n), zt = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.onMouseClick = function(t) {
            var n = t.target;
            (null == n ? void 0 : n.closest("*[".concat(e.engine.props.clickStopPropagationAttrName, "]"))) || e.dispatch(new it({
                clientX: t.clientX,
                clientY: t.clientY,
                pageX: t.pageX,
                pageY: t.pageY,
                target: t.target,
                view: t.view
            }));
        }, e.onMouseDoubleClick = function(t) {
            var n = t.target;
            (null == n ? void 0 : n.closest("*[".concat(e.engine.props.clickStopPropagationAttrName, "]"))) || e.dispatch(new st({
                clientX: t.clientX,
                clientY: t.clientY,
                pageX: t.pageX,
                pageY: t.pageY,
                target: t.target,
                view: t.view
            }));
        }, e;
    }
    return $(e, t), e.prototype.attach = function() {
        this.addEventListener("click", this.onMouseClick, {
            mode: "onlyChild"
        }), this.addEventListener("dblclick", this.onMouseDoubleClick, {
            mode: "onlyChild"
        });
    }, e.prototype.detach = function() {
        this.removeEventListener("click", this.onMouseClick, {
            mode: "onlyChild"
        }), this.removeEventListener("dblclick", this.onMouseDoubleClick, {
            mode: "onlyChild"
        });
    }, e;
}(n), Ft = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.request = null, e.onMouseMove = function(t) {
            e.request = requestAnimationFrame((function() {
                cancelAnimationFrame(e.request), e.dispatch(new at({
                    clientX: t.clientX,
                    clientY: t.clientY,
                    pageX: t.pageX,
                    pageY: t.pageY,
                    target: t.target,
                    view: t.view
                }));
            }));
        }, e;
    }
    return $(e, t), e.prototype.attach = function() {
        this.addEventListener("mousemove", this.onMouseMove, {
            mode: "onlyOne"
        });
    }, e.prototype.detach = function() {
        this.removeEventListener("mouseover", this.onMouseMove, {
            mode: "onlyOne"
        });
    }, e;
}(n), qt = function(e) {
    function n() {
        var t = e.apply(this, tt([], Q(arguments), !1)) || this;
        return t.request = null, t.resizeObserver = null, t.onResize = function(e) {
            e.preventDefault && e.preventDefault(), t.request = requestAnimationFrame((function() {
                cancelAnimationFrame(t.request), t.dispatch(new At({
                    scrollX: t.contentWindow.scrollX,
                    scrollY: t.contentWindow.scrollY,
                    width: t.contentWindow.innerWidth,
                    height: t.contentWindow.innerHeight,
                    innerHeight: t.contentWindow.innerHeight,
                    innerWidth: t.contentWindow.innerWidth,
                    view: t.contentWindow,
                    target: e.target || t.container
                }));
            }));
        }, t;
    }
    return $(n, e), n.prototype.attach = function() {
        this.contentWindow && this.contentWindow !== t ? this.addEventListener("resize", this.onResize) : this.container && this.container !== document && (this.resizeObserver = new H(this.onResize), 
        this.resizeObserver.observe(this.container));
    }, n.prototype.detach = function() {
        this.contentWindow && this.contentWindow !== t ? this.removeEventListener("resize", this.onResize) : this.resizeObserver && this.container && this.container !== document && (this.resizeObserver.unobserve(this.container), 
        this.resizeObserver.disconnect());
    }, n;
}(n), Ht = function(e) {
    function n() {
        var n = e.apply(this, tt([], Q(arguments), !1)) || this;
        return n.request = null, n.onScroll = function(e) {
            e.preventDefault(), n.request = t.requestAnimationFrame((function() {
                n.dispatch(new Dt({
                    scrollX: n.contentWindow.scrollX,
                    scrollY: n.contentWindow.scrollY,
                    width: n.contentWindow.document.body.clientWidth,
                    height: n.contentWindow.document.body.clientHeight,
                    innerHeight: n.contentWindow.innerHeight,
                    innerWidth: n.contentWindow.innerWidth,
                    view: n.contentWindow,
                    target: e.target
                })), cancelAnimationFrame(n.request);
            }));
        }, n;
    }
    return $(n, e), n.prototype.attach = function() {
        this.addEventListener("scroll", this.onScroll);
    }, n.prototype.detach = function() {
        this.removeEventListener("scroll", this.onScroll);
    }, n;
}(n);

var Ut, Kt, _t, $t = function(t) {
    function e() {
        var e = t.apply(this, tt([], Q(arguments), !1)) || this;
        return e.onKeyDown = function(t) {
            var n, r, o, i;
            (n = t, r = n.target, o = r.tagName, i = !0, (r["isContentEditable"] || ("INPUT" === o || "TEXTAREA" === o || "SELECT" === o || customElements.get(o.toLocaleLowerCase())) && !r.readOnly) && (i = !1), 
            i) && e.dispatch(new ut(t));
        }, e.onKeyUp = function(t) {
            e.dispatch(new lt(t));
        }, e;
    }
    return $(e, t), e.prototype.attach = function() {
        this.addEventListener("keydown", this.onKeyDown, {
            mode: "onlyParent"
        }), this.addEventListener("keyup", this.onKeyUp, {
            mode: "onlyParent"
        });
    }, e.prototype.detach = function() {
        this.removeEventListener("keydown", this.onKeyDown, {
            mode: "onlyParent"
        }), this.removeEventListener("keyup", this.onKeyUp, {
            mode: "onlyParent"
        });
    }, e;
}(n), Gt = function(t) {
    return String(t).replace(/\s+/g, "_").toLocaleLowerCase();
}, Zt = function(t, e) {
    if (r(t) && r(e)) return o(e, (function(e, n) {
        var r = Gt(n), o = Zt(t[n] || t[r], e);
        t[r] = o;
    })), t;
    if (r(e)) {
        var n = Array.isArray(e) ? [] : {};
        return o(e, (function(t, e) {
            var r = Zt(void 0, t);
            n[Gt(e)] = r;
        })), n;
    }
    return e;
}, Jt = function(t) {
    var e = re.value, n = Gt(t);
    return ne.value[n] ? n : (o(ne.value, (function(t, r) {
        if (r.indexOf(n) > -1 || String(n).indexOf(r) > -1) return e = r, !1;
    })), e);
}, Qt = function(t, e) {
    var n = function(e) {
        return t.includes(e);
    }, r = function(t) {
        for (var n in e) for (var r = e[n].Behavior, o = 0; o < r.length; o++) if (r[o].name === t) return r[o];
    };
    o(e, (function(e) {
        if (e && rn(e)) {
            var i = e.Behavior;
            o(i, (function(e) {
                if (!n(e)) {
                    var i = e.name;
                    o(e.extends, (function(e) {
                        var o = r(e);
                        if (!o) throw new Error("No ".concat(e, " behavior that ").concat(i, " depends on"));
                        n(o) || t.unshift(o);
                    })), t.push(e);
                }
            }));
        }
    }));
}, te = Y.ref([]), ee = Y.ref({}), ne = Y.ref({}), re = Y.ref(function() {
    var e;
    return t.navigator && (t.navigator["browserlanguage"] || (null === (e = t.navigator) || void 0 === e ? void 0 : e.language)) || "en";
}()), oe = {
    setDesignerLanguage: function(t) {
        re.value = t;
    },
    setDesignerBehaviors: function(t) {
        te.value = t.reduce((function(t, e) {
            return rn(e) ? t.concat(e.Behavior) : on(e) ? t.concat(e) : t;
        }), []);
    },
    getDesignerBehaviors: function(t) {
        return te.value.filter((function(e) {
            return e.selector(t);
        }));
    },
    getDesignerIcon: function(t) {
        return ee[t];
    },
    getDesignerLanguage: function() {
        return Jt(re.value);
    },
    getDesignerMessage: function(t, e) {
        var n = Jt(re.value), r = e ? e[n] : ne.value[n];
        if (r) return U.getIn(r, Gt(t));
        for (var o in ne.value) {
            var i = U.getIn(ne.value[o], Gt(t));
            if (i) return i;
        }
    },
    registerDesignerIcons: function(t) {
        Object.assign(ee, t);
    },
    registerDesignerLocales: function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        t.forEach((function(t) {
            Zt(ne.value, t);
        }));
    },
    registerDesignerBehaviors: function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = [];
        t.forEach((function(t) {
            Qt(n, t);
        })), n.length && (te.value = n);
    }
}, ie = oe, se = new Map, ae = new Map, ce = function(t) {
    t.parent && (t.parent.children = t.parent.children.filter((function(e) {
        return e !== t;
    })));
}, ue = function(t, e) {
    var n = function(t) {
        t.depth = t.parent ? t.parent.depth + 1 : 0, t.children.forEach(n);
    }, r = function(t) {
        t.parent = e, t.root = e.root, n(t);
    }, o = function(t) {
        r(t), ue(t.children, t);
    };
    return t.map((function(t) {
        var i;
        return t === e || (e.isSourceNode ? o(t) : t.isSourceNode ? (t = t.clone(e), n(t)) : !t.isRoot && t.isInOperation ? (null === (i = t.operation) || void 0 === i || i.selection.remove(t), 
        ce(t), r(t)) : o(t), se.has(t.id) || (se.set(t.id, t), ae.set(t.componentName, t.designerProps))), 
        t;
    }));
}, le = function(t, e) {
    return ue([ t ], e)[0];
}, de = function() {
    function t(e, n) {
        if (this.depth = 0, this.hidden = !1, this.componentName = "NO_NAME_COMPONENT", 
        this.sourceName = "", this.props = {}, this.children = [], e instanceof t) return e;
        this.id = e.id || s(), n ? (this.parent = n, this.depth = n.depth + 1, this.root = n.root, 
        se.set(this.id, this)) : (this.root = this, this.rootOperation = e.operation, this.isSelfSourceNode = e.isSourceNode || !1, 
        se.set(this.id, this)), e && this.from(e), this.makeObservable();
    }
    return t.prototype.makeObservable = function() {
        V(this, {
            componentName: Y.ref,
            props: Y,
            hidden: Y.ref,
            children: Y.shallow,
            designerProps: Y.computed,
            designerLocales: Y.computed,
            wrap: z,
            prepend: z,
            append: z,
            insertAfter: z,
            insertBefore: z,
            remove: z,
            setProps: z,
            setChildren: z,
            setComponentName: z
        });
    }, Object.defineProperty(t.prototype, "designerProps", {
        get: function() {
            var t = this, e = ie.getDesignerBehaviors(this), n = e.reduce((function(e, n) {
                return n.designerProps ? (Object.assign(e, (r = t, o = n.designerProps, i(o) ? o(r) : o)), 
                e) : e;
                var r, o;
            }), {});
            return n;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "designerLocales", {
        get: function() {
            var t = ie.getDesignerBehaviors(this), e = t.reduce((function(t, e) {
                return e.designerLocales ? (Zt(t, e.designerLocales), t) : t;
            }), {});
            return e;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "previous", {
        get: function() {
            if (this.parent !== this && this.parent) return this.parent.children[this.index - 1];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "next", {
        get: function() {
            if (this.parent !== this && this.parent) return this.parent.children[this.index + 1];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "siblings", {
        get: function() {
            var t = this;
            return this.parent ? this.parent.children.filter((function(e) {
                return e !== t;
            })) : [];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "index", {
        get: function() {
            return this.parent !== this && this.parent ? this.parent.children.indexOf(this) : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "descendants", {
        get: function() {
            return this.children.reduce((function(t, e) {
                return t.concat(e).concat(e.descendants);
            }), []);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isRoot", {
        get: function() {
            return this === this.root;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isInOperation", {
        get: function() {
            return !!this.operation;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lastChild", {
        get: function() {
            return this.children[this.children.length - 1];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "firstChild", {
        get: function() {
            return this.children[0];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isSourceNode", {
        get: function() {
            return this.root.isSelfSourceNode;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "operation", {
        get: function() {
            var t;
            return null === (t = this.root) || void 0 === t ? void 0 : t.rootOperation;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "viewport", {
        get: function() {
            var t, e;
            return null === (e = null === (t = this.operation) || void 0 === t ? void 0 : t.workspace) || void 0 === e ? void 0 : e.viewport;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "outline", {
        get: function() {
            var t, e;
            return null === (e = null === (t = this.operation) || void 0 === t ? void 0 : t.workspace) || void 0 === e ? void 0 : e.outline;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "moveLayout", {
        get: function() {
            var t;
            return null === (t = this.viewport) || void 0 === t ? void 0 : t.getValidNodeLayout(this);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.getElement = function(t) {
        var e;
        return void 0 === t && (t = "viewport"), null === (e = this[t]) || void 0 === e ? void 0 : e.findElementById(this.id);
    }, t.prototype.getValidElement = function(t) {
        var e;
        return void 0 === t && (t = "viewport"), null === (e = this[t]) || void 0 === e ? void 0 : e.getValidNodeElement(this);
    }, t.prototype.getElementRect = function(t) {
        var e;
        return void 0 === t && (t = "viewport"), null === (e = this[t]) || void 0 === e ? void 0 : e.getElementRect(this.getElement(t));
    }, t.prototype.getValidElementRect = function(t) {
        var e;
        return void 0 === t && (t = "viewport"), null === (e = this[t]) || void 0 === e ? void 0 : e.getValidNodeRect(this);
    }, t.prototype.getElementOffsetRect = function(t) {
        var e;
        return void 0 === t && (t = "viewport"), null === (e = this[t]) || void 0 === e ? void 0 : e.getElementOffsetRect(this.getElement(t));
    }, t.prototype.getValidElementOffsetRect = function(t) {
        var e;
        return void 0 === t && (t = "viewport"), null === (e = this[t]) || void 0 === e ? void 0 : e.getValidNodeOffsetRect(this);
    }, t.prototype.getPrevious = function(t) {
        return void 0 === t && (t = 1), this.parent.children[this.index - t];
    }, t.prototype.getAfter = function(t) {
        return void 0 === t && (t = 1), this.parent.children[this.index + t];
    }, t.prototype.getSibling = function(t) {
        return void 0 === t && (t = 0), this.parent.children[t];
    }, t.prototype.getParents = function(t) {
        var e = t || this;
        return (null == e ? void 0 : e.parent) ? [ e.parent ].concat(this.getParents(e.parent)) : [];
    }, t.prototype.getParentByDepth = function(t) {
        void 0 === t && (t = 0);
        var e = this.parent;
        return (null == e ? void 0 : e.depth) === t ? e : null == e ? void 0 : e.getParentByDepth(t);
    }, t.prototype.getMessage = function(t) {
        return ie.getDesignerMessage(t, this.designerLocales);
    }, t.prototype.isMyAncestor = function(t) {
        return t !== this && this.parent !== t && t.contains(this);
    }, t.prototype.isMyParent = function(t) {
        return this.parent === t;
    }, t.prototype.isMyParents = function(t) {
        return t !== this && (this.isMyParent(t) || this.isMyAncestor(t));
    }, t.prototype.isMyChild = function(t) {
        return t.isMyParent(this);
    }, t.prototype.isMyChildren = function(t) {
        return t.isMyParents(this);
    }, t.prototype.takeSnapshot = function(t) {
        var e;
        null === (e = this.operation) || void 0 === e || e.snapshot(t);
    }, t.prototype.triggerMutation = function(t, e, n) {
        if (this.operation) {
            var r = this.operation.dispatch(t, e) || n;
            return this.takeSnapshot(null == t ? void 0 : t.type), r;
        }
        if (i(e)) return e();
    }, t.prototype.find = function(t) {
        if (t(this)) return this;
        var e = void 0;
        return this.eachChildren((function(n) {
            if (t(n)) return e = n, !1;
        })), e;
    }, t.prototype.findAll = function(t) {
        var e = [];
        return t(this) && e.push(this), this.eachChildren((function(n) {
            t(n) && e.push(n);
        })), e;
    }, t.prototype.distanceTo = function(t) {
        return this.root !== t.root || this.parent !== t.parent ? 1 / 0 : Math.abs(this.index - t.index);
    }, t.prototype.crossSiblings = function(t) {
        if (this.parent !== t.parent) return [];
        for (var e = Math.min(this.index, t.index), n = Math.max(this.index, t.index), r = [], o = e + 1; o < n; o++) r.push(this.parent.children[o]);
        return r;
    }, t.prototype.allowSibling = function(t) {
        var e, n, r;
        return !1 !== (null === (n = null === (e = this.designerProps) || void 0 === e ? void 0 : e.allowSiblings) || void 0 === n ? void 0 : n.call(e, this, t)) && (null === (r = this.parent) || void 0 === r ? void 0 : r.allowAppend(t));
    }, t.prototype.allowDrop = function(t) {
        return !i(this.designerProps.allowDrop) || this.designerProps.allowDrop(t);
    }, t.prototype.allowAppend = function(t) {
        var e, n, r, o = this;
        return !!(null === (e = this.designerProps) || void 0 === e ? void 0 : e.droppable) && (!1 !== (null === (r = null === (n = this.designerProps) || void 0 === n ? void 0 : n.allowAppend) || void 0 === r ? void 0 : r.call(n, this, t)) && (!t.some((function(t) {
            return !t.allowDrop(o);
        })) && (this.root, !0)));
    }, t.prototype.allowClone = function() {
        var t;
        return this !== this.root && (null === (t = this.designerProps.cloneable) || void 0 === t || t);
    }, t.prototype.allowDrag = function() {
        var t;
        return !(this === this.root && !this.isSourceNode) && (null === (t = this.designerProps.draggable) || void 0 === t || t);
    }, t.prototype.allowResize = function() {
        if (this === this.root && !this.isSourceNode) return !1;
        var t = this.designerProps.resizable;
        return !!t && (t.width && t.height ? [ "x", "y" ] : t.width ? [ "x" ] : [ "y" ]);
    }, t.prototype.allowRotate = function() {}, t.prototype.allowRound = function() {}, 
    t.prototype.allowScale = function() {}, t.prototype.allowTranslate = function() {
        if (this === this.root && !this.isSourceNode) return !1;
        var t = this.designerProps.translatable;
        return !(!(null == t ? void 0 : t.x) || !(null == t ? void 0 : t.y));
    }, t.prototype.allowDelete = function() {
        var t;
        return this !== this.root && (null === (t = this.designerProps.deletable) || void 0 === t || t);
    }, t.prototype.findById = function(t) {
        var e;
        if (t) return this.id === t ? this : (null === (e = this.children) || void 0 === e ? void 0 : e.length) > 0 ? se.get(t) : void 0;
    }, t.prototype.contains = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return e.every((function(e) {
            return e === t || (null == e ? void 0 : e.parent) === t || (null == e ? void 0 : e.getParentByDepth(t.depth)) === t;
        }));
    }, t.prototype.eachTree = function(t) {
        var e;
        i(t) && (t(this.root), null === (e = this.root) || void 0 === e || e.eachChildren(t));
    }, t.prototype.eachChildren = function(t) {
        if (i(t)) for (var e = 0; e < this.children.length; e++) {
            var n = this.children[e];
            if (!1 === t(n)) return;
            n.eachChildren(t);
        }
    }, t.prototype.resetNodesParent = function(t, e) {
        var n = this;
        return ue(t.filter((function(t) {
            return t !== n;
        })), e);
    }, t.prototype.setProps = function(t) {
        var e = this;
        return this.triggerMutation(new St({
            target: this,
            source: null
        }), (function() {
            Object.assign(e.props, t);
        }));
    }, t.prototype.setComponentName = function(t) {
        this.componentName = t;
    }, t.prototype.prepend = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        if (e.some((function(e) {
            return e.contains(t);
        }))) return [];
        var r = e.map((function(t) {
            return t.parent;
        })), o = this.resetNodesParent(e, this);
        return o.length ? this.triggerMutation(new mt({
            originSourceParents: r,
            target: this,
            source: o
        }), (function() {
            return t.children = o.concat(t.children), o;
        }), []) : [];
    }, t.prototype.append = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        if (e.some((function(e) {
            return e.contains(t);
        }))) return [];
        var r = e.map((function(t) {
            return t.parent;
        })), o = this.resetNodesParent(e, this);
        return o.length ? this.triggerMutation(new Ct({
            originSourceParents: r,
            target: this,
            source: o
        }), (function() {
            return t.children = t.children.concat(o), o;
        }), []) : [];
    }, t.prototype.wrap = function(t) {
        var e = this;
        if (t !== this) {
            var n = this.parent;
            return this.triggerMutation(new kt({
                target: this,
                source: t
            }), (function() {
                return le(e, t), le(t, n), t;
            }));
        }
    }, t.prototype.insertAfter = function() {
        for (var t, e = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        var o = this.parent;
        if (n.some((function(t) {
            return t.contains(e);
        }))) return [];
        if (null === (t = null == o ? void 0 : o.children) || void 0 === t ? void 0 : t.length) {
            var i = n.map((function(t) {
                return t.parent;
            })), s = this.resetNodesParent(n, o);
            return s.length ? this.triggerMutation(new vt({
                originSourceParents: i,
                target: this,
                source: s
            }), (function() {
                return o.children = o.children.reduce((function(t, n) {
                    return n === e ? t.concat([ n ]).concat(s) : t.concat([ n ]);
                }), []), s;
            }), []) : [];
        }
        return [];
    }, t.prototype.insertBefore = function() {
        for (var t, e = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        var o = this.parent;
        if (n.some((function(t) {
            return t.contains(e);
        }))) return [];
        if (null === (t = null == o ? void 0 : o.children) || void 0 === t ? void 0 : t.length) {
            var i = n.map((function(t) {
                return t.parent;
            })), s = this.resetNodesParent(n, o);
            return s.length ? this.triggerMutation(new gt({
                originSourceParents: i,
                target: this,
                source: s
            }), (function() {
                return o.children = o.children.reduce((function(t, n) {
                    return n === e ? t.concat(s).concat([ n ]) : t.concat([ n ]);
                }), []), s;
            }), []) : [];
        }
        return [];
    }, t.prototype.insertChildren = function(t) {
        for (var e, n = this, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
        if (r.some((function(t) {
            return t.contains(n);
        }))) return [];
        if (null === (e = this.children) || void 0 === e ? void 0 : e.length) {
            var i = r.map((function(t) {
                return t.parent;
            })), s = this.resetNodesParent(r, this);
            return s.length ? this.triggerMutation(new yt({
                originSourceParents: i,
                target: this,
                source: s
            }), (function() {
                return n.children = n.children.reduce((function(e, n, r) {
                    return r === t ? e.concat(s).concat([ n ]) : e.concat([ n ]);
                }), []), s;
            }), []) : [];
        }
        return [];
    }, t.prototype.setChildren = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = e.map((function(t) {
            return t.parent;
        })), o = this.resetNodesParent(e, this);
        return this.triggerMutation(new Nt({
            originSourceParents: r,
            target: this,
            source: o
        }), (function() {
            return t.children = o, o;
        }), []);
    }, t.prototype.setNodeChildren = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return this.setChildren.apply(this, tt([], Q(t), !1));
    }, t.prototype.remove = function() {
        var t = this;
        return this.triggerMutation(new wt({
            target: this,
            source: null
        }), (function() {
            ce(t), se.delete(t.id);
        }));
    }, t.prototype.clone = function(e) {
        var n = new t({
            id: s(),
            componentName: this.componentName,
            sourceName: this.sourceName,
            props: F(this.props),
            children: []
        }, e || this.parent);
        return n.children = ue(this.children.map((function(t) {
            return t.clone(n);
        })), n), this.triggerMutation(new Rt({
            target: this,
            source: n
        }), (function() {
            return n;
        }));
    }, t.prototype.from = function(e) {
        var n = this;
        if (e) return this.triggerMutation(new Pt({
            target: this,
            source: e
        }), (function() {
            var r, o, i;
            e.id && e.id !== n.id && (se.delete(n.id), se.set(e.id, n), n.id = e.id), e.componentName && (n.componentName = e.componentName), 
            n.props = null !== (r = e.props) && void 0 !== r ? r : {}, e.hidden && (n.hidden = e.hidden), 
            e.children && (n.children = (null === (i = null === (o = e.children) || void 0 === o ? void 0 : o.map) || void 0 === i ? void 0 : i.call(o, (function(e) {
                return new t(e, n);
            }))) || []);
        }));
    }, t.prototype.serialize = function() {
        return {
            id: this.id,
            componentName: this.componentName,
            sourceName: this.sourceName,
            props: F(this.props),
            hidden: this.hidden,
            children: this.children.map((function(t) {
                return t.serialize();
            }))
        };
    }, t.getAllTreeNodes = function() {
        return se;
    }, t.create = function(e, n) {
        return new t(e, n);
    }, t.findById = function(t) {
        return se.get(t);
    }, t.remove = function(t) {
        var e, n;
        void 0 === t && (t = []);
        for (var r = t.length - 1; r >= 0; r--) {
            var o = t[r];
            if (o.allowDelete()) {
                var i = o.previous, s = o.next;
                o.remove(), null === (e = o.operation) || void 0 === e || e.selection.select(i || (s || o.parent)), 
                null === (n = o.operation) || void 0 === n || n.hover.clear();
            }
        }
    }, t.sort = function(t) {
        return void 0 === t && (t = []), t.sort((function(t, e) {
            return t.depth !== e.depth ? 0 : t.index - e.index >= 0 ? 1 : -1;
        }));
    }, t.clone = function(e) {
        void 0 === e && (e = []);
        var n = {}, r = {}, i = t.sort(e).filter((function(t) {
            return !e.some((function(e) {
                return t.isMyParents(e);
            }));
        }));
        o(i, (function(t) {
            var e, o, i, s, a, c, u;
            t !== t.root && t.allowClone() && (null == t ? void 0 : t.operation) && (n[null === (e = null == t ? void 0 : t.parent) || void 0 === e ? void 0 : e.id] = n[null === (o = null == t ? void 0 : t.parent) || void 0 === o ? void 0 : o.id] || [], 
            n[null === (i = null == t ? void 0 : t.parent) || void 0 === i ? void 0 : i.id].push(t), 
            r[null === (s = null == t ? void 0 : t.parent) || void 0 === s ? void 0 : s.id] ? t.index > r[null === (a = null == t ? void 0 : t.parent) || void 0 === a ? void 0 : a.id].index && (r[null === (c = null == t ? void 0 : t.parent) || void 0 === c ? void 0 : c.id] = t) : r[null === (u = null == t ? void 0 : t.parent) || void 0 === u ? void 0 : u.id] = t);
        }));
        var s = new Map;
        o(n, (function(t, e) {
            var n = r[e], i = n;
            o(t, (function(t) {
                var e, n, r = t.clone();
                if (r) if ((null === (e = t.operation) || void 0 === e ? void 0 : e.selection.has(t)) && i.parent.allowAppend([ r ])) i.insertAfter(r), 
                i = i.next; else if (1 === t.operation.selection.length) {
                    var o = null === (n = t.operation) || void 0 === n ? void 0 : n.tree.findById(t.operation.selection.first), a = s.get(o);
                    a || (a = [], s.set(o, a)), o && o.allowAppend([ r ]) && a.push(r);
                }
            }));
        })), s.forEach((function(t, e) {
            t.length && e.append.apply(e, tt([], Q(t), !1));
        }));
    }, t.filterResizable = function(t) {
        return void 0 === t && (t = []), t.filter((function(t) {
            return t.allowResize();
        }));
    }, t.filterRotatable = function(t) {
        return void 0 === t && (t = []), t.filter((function(t) {
            return t.allowRotate();
        }));
    }, t.filterScalable = function(t) {
        return void 0 === t && (t = []), t.filter((function(t) {
            return t.allowScale();
        }));
    }, t.filterRoundable = function(t) {
        return void 0 === t && (t = []), t.filter((function(t) {
            return t.allowRound();
        }));
    }, t.filterTranslatable = function(t) {
        return void 0 === t && (t = []), t.filter((function(t) {
            return t.allowTranslate();
        }));
    }, t.filterDraggable = function(t) {
        return void 0 === t && (t = []), t.reduce((function(t, e) {
            var n;
            if (!e.allowDrag()) return t;
            if (i(null === (n = null == e ? void 0 : e.designerProps) || void 0 === n ? void 0 : n.getDragNodes)) {
                var r = e.designerProps.getDragNodes(e);
                return r ? t.concat(r) : t;
            }
            return "$$ResourceNode$$" === e.componentName ? t.concat(e.children) : t.concat([ e ]);
        }), []);
    }, t.filterDroppable = function(t, e) {
        return void 0 === t && (t = []), t.reduce((function(t, n) {
            var r;
            if (!n.allowDrop(e)) return t;
            if (i(null === (r = n.designerProps) || void 0 === r ? void 0 : r.getDropNodes)) {
                var o = n.isSourceNode ? n.clone(n.parent) : n, s = n.designerProps.getDropNodes(o, e);
                return s ? t.concat(s) : t;
            }
            return "$$ResourceNode$$" === n.componentName ? t.concat(n.children) : t.concat([ n ]);
        }), []);
    }, t;
}(), he = function() {
    function e(t) {
        var e, n;
        this.scrollX = 0, this.scrollY = 0, this.width = 0, this.height = 0, this.mounted = !1, 
        this.nodeElementsStore = {}, this.workspace = t.workspace, this.engine = t.engine, 
        this.moveSensitive = null !== (e = t.moveSensitive) && void 0 !== e && e, this.moveInsertionType = null !== (n = t.moveInsertionType) && void 0 !== n ? n : "all", 
        this.viewportElement = t.viewportElement, this.contentWindow = t.contentWindow, 
        this.nodeIdAttrName = t.nodeIdAttrName, this.digestViewport(), this.makeObservable(), 
        this.attachEvents();
    }
    return Object.defineProperty(e.prototype, "isScrollLeft", {
        get: function() {
            return 0 === this.scrollX;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "isScrollTop", {
        get: function() {
            return 0 === this.scrollY;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "isScrollRight", {
        get: function() {
            var t, e, n;
            return this.isIframe ? this.width + this.contentWindow.scrollX >= (null === (n = null === (e = null === (t = this.contentWindow) || void 0 === t ? void 0 : t.document) || void 0 === e ? void 0 : e.body) || void 0 === n ? void 0 : n.scrollWidth) : this.viewportElement ? this.viewportElement.offsetWidth + this.scrollX >= this.viewportElement.scrollWidth : void 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "isScrollBottom", {
        get: function() {
            var t, e;
            return this.isIframe ? !!(null === (e = null === (t = this.contentWindow) || void 0 === t ? void 0 : t.document) || void 0 === e ? void 0 : e.body) && this.height + this.contentWindow.scrollY >= this.contentWindow.document.body.scrollHeight : this.viewportElement ? !!this.viewportElement && this.viewportElement.offsetHeight + this.viewportElement.scrollTop >= this.viewportElement.scrollHeight : void 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "viewportRoot", {
        get: function() {
            var t, e;
            return this.isIframe ? null === (e = null === (t = this.contentWindow) || void 0 === t ? void 0 : t.document) || void 0 === e ? void 0 : e.body : this.viewportElement;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "isMaster", {
        get: function() {
            return this.contentWindow === t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "isIframe", {
        get: function() {
            var t;
            return !!(null === (t = this.contentWindow) || void 0 === t ? void 0 : t.frameElement) && !this.isMaster;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "scrollContainer", {
        get: function() {
            return this.isIframe ? this.contentWindow : this.viewportElement;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "rect", {
        get: function() {
            var t = this.viewportElement;
            if (t) return t.getBoundingClientRect();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "innerRect", {
        get: function() {
            var t = this.rect;
            return new h(0, 0, null == t ? void 0 : t.width, null == t ? void 0 : t.height);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "offsetX", {
        get: function() {
            var t = this.rect;
            return t ? t.x : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "offsetY", {
        get: function() {
            var t = this.rect;
            return t ? t.y : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "scale", {
        get: function() {
            if (!this.viewportElement) return 1;
            var t = this.viewportElement.getBoundingClientRect(), e = this.viewportElement.offsetWidth;
            return t.width && e ? Math.round(t.width / e) : 1;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "dragScrollXDelta", {
        get: function() {
            return this.scrollX - this.dragStartSnapshot.scrollX;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "dragScrollYDelta", {
        get: function() {
            return this.scrollY - this.dragStartSnapshot.scrollY;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.cacheElements = function() {
        var t, e = this;
        this.nodeElementsStore = {}, null === (t = this.viewportRoot) || void 0 === t || t.querySelectorAll("*[".concat(this.nodeIdAttrName, "]")).forEach((function(t) {
            var n = t.getAttribute(e.nodeIdAttrName);
            e.nodeElementsStore[n] = e.nodeElementsStore[n] || [], e.nodeElementsStore[n].push(t);
        }));
    }, e.prototype.clearCache = function() {
        this.nodeElementsStore = {};
    }, e.prototype.getCurrentData = function() {
        var t, e, n, r, o, i, s, a, c = {};
        return this.isIframe ? (c.scrollX = (null === (t = this.contentWindow) || void 0 === t ? void 0 : t.scrollX) || 0, 
        c.scrollY = (null === (e = this.contentWindow) || void 0 === e ? void 0 : e.scrollY) || 0, 
        c.width = (null === (n = this.contentWindow) || void 0 === n ? void 0 : n.innerWidth) || 0, 
        c.height = (null === (r = this.contentWindow) || void 0 === r ? void 0 : r.innerHeight) || 0) : this.viewportElement && (c.scrollX = (null === (o = this.viewportElement) || void 0 === o ? void 0 : o.scrollLeft) || 0, 
        c.scrollY = (null === (i = this.viewportElement) || void 0 === i ? void 0 : i.scrollTop) || 0, 
        c.width = (null === (s = this.viewportElement) || void 0 === s ? void 0 : s.clientWidth) || 0, 
        c.height = (null === (a = this.viewportElement) || void 0 === a ? void 0 : a.clientHeight) || 0), 
        c;
    }, e.prototype.takeDragStartSnapshot = function() {
        this.dragStartSnapshot = this.getCurrentData();
    }, e.prototype.digestViewport = function() {
        Object.assign(this, this.getCurrentData());
    }, e.prototype.elementFromPoint = function(t) {
        var e;
        if (null === (e = this.contentWindow) || void 0 === e ? void 0 : e.document) return this.contentWindow.document.elementFromPoint(t.x, t.y);
    }, e.prototype.matchViewport = function(t) {
        var e;
        return this.isIframe ? t === this.viewportElement || t === this.contentWindow || t === (null === (e = this.contentWindow) || void 0 === e ? void 0 : e.document) : t === this.viewportElement;
    }, e.prototype.attachEvents = function() {
        var t = this, e = this.engine;
        a(this.attachRequest), this.attachRequest = c((function() {
            e && (t.isIframe ? t.workspace.attachEvents(t.contentWindow, t.contentWindow) : u(t.viewportElement) && t.workspace.attachEvents(t.viewportElement, t.contentWindow));
        }));
    }, e.prototype.detachEvents = function() {
        this.isIframe ? (this.workspace.detachEvents(this.contentWindow), this.workspace.detachEvents(this.viewportElement)) : this.viewportElement && this.workspace.detachEvents(this.viewportElement);
    }, e.prototype.onMount = function(t, e) {
        this.mounted = !0, this.viewportElement = t, this.contentWindow = e, this.attachEvents(), 
        this.digestViewport();
    }, e.prototype.onUnmount = function() {
        this.mounted = !1, this.detachEvents();
    }, e.prototype.isPointInViewport = function(t, e) {
        return !!this.rect && (!!this.containsElement(document.elementFromPoint(t.x, t.y)) && l(t, this.rect, e));
    }, e.prototype.isRectInViewport = function(t) {
        return !!this.rect && (!!this.containsElement(document.elementFromPoint(t.x, t.y)) && d(t, this.rect));
    }, e.prototype.isPointInViewportArea = function(t, e) {
        return !!this.rect && l(t, this.rect, e);
    }, e.prototype.isOffsetPointInViewport = function(t, e) {
        return !!this.innerRect && (!!this.containsElement(document.elementFromPoint(t.x, t.y)) && l(t, this.innerRect, e));
    }, e.prototype.isOffsetRectInViewport = function(t) {
        return !!this.innerRect && (!!this.containsElement(document.elementFromPoint(t.x, t.y)) && d(t, this.innerRect));
    }, e.prototype.makeObservable = function() {
        V(this, {
            scrollX: Y.ref,
            scrollY: Y.ref,
            width: Y.ref,
            height: Y.ref,
            digestViewport: z,
            viewportElement: Y.ref,
            contentWindow: Y.ref
        });
    }, e.prototype.findElementById = function(t) {
        var e;
        if (t) return this.nodeElementsStore[t] ? this.nodeElementsStore[t][0] : null === (e = this.viewportRoot) || void 0 === e ? void 0 : e.querySelector("*[".concat(this.nodeIdAttrName, "='").concat(t, "']"));
    }, e.prototype.findElementsById = function(t) {
        var e, n;
        return t ? this.nodeElementsStore[t] ? this.nodeElementsStore[t] : Array.from(null !== (n = null === (e = this.viewportRoot) || void 0 === e ? void 0 : e.querySelectorAll("*[".concat(this.nodeIdAttrName, "='").concat(t, "']"))) && void 0 !== n ? n : []) : [];
    }, e.prototype.containsElement = function(t) {
        var e = this.viewportElement;
        return e === t || (null == e ? void 0 : e.contains(t));
    }, e.prototype.getOffsetPoint = function(t) {
        var e = this.getCurrentData();
        return {
            x: t.x - this.offsetX + e.scrollX,
            y: t.y - this.offsetY + e.scrollY
        };
    }, e.prototype.getElementRect = function(t) {
        var e = t.getBoundingClientRect(), n = t["offsetWidth"] ? t["offsetWidth"] : e.width, r = t["offsetHeight"] ? t["offsetHeight"] : e.height;
        return new h(e.x, e.y, 1 !== this.scale ? n : e.width, 1 !== this.scale ? r : e.height);
    }, e.prototype.getElementRectById = function(t) {
        var e = this, n = this.findElementsById(t), r = p(n.map((function(t) {
            return e.getElementRect(t);
        })));
        if (r) return this.isIframe ? new h(r.x + this.offsetX, r.y + this.offsetY, r.width, r.height) : new h(r.x, r.y, r.width, r.height);
    }, e.prototype.getElementOffsetRect = function(t) {
        var e = t.getBoundingClientRect();
        if (e) return this.isIframe ? new h(e.x + this.contentWindow.scrollX, e.y + this.contentWindow.scrollY, e.width, e.height) : new h((e.x - this.offsetX + this.viewportElement.scrollLeft) / this.scale, (e.y - this.offsetY + this.viewportElement.scrollTop) / this.scale, e.width, e.height);
    }, e.prototype.getElementOffsetRectById = function(t) {
        var e = this, n = this.findElementsById(t);
        if (n.length) {
            var r = p(n.map((function(t) {
                return e.getElementRect(t);
            })));
            return r ? this.isIframe ? new h(r.x + this.contentWindow.scrollX, r.y + this.contentWindow.scrollY, r.width, r.height) : new h((r.x - this.offsetX + this.viewportElement.scrollLeft) / this.scale, (r.y - this.offsetY + this.viewportElement.scrollTop) / this.scale, r.width, r.height) : void 0;
        }
    }, e.prototype.getValidNodeElement = function(t) {
        var e = this, n = function(t) {
            if (t) {
                var r = e.findElementById(t.id);
                return r || n(t.parent);
            }
        };
        return n(t);
    }, e.prototype.getChildrenRect = function(t) {
        var e, n = this;
        if (null === (e = null == t ? void 0 : t.children) || void 0 === e ? void 0 : e.length) return p(t.children.reduce((function(t, e) {
            var r = n.getValidNodeRect(e);
            return r ? t.concat(r) : t;
        }), []));
    }, e.prototype.getChildrenOffsetRect = function(t) {
        var e, n = this;
        if (null === (e = null == t ? void 0 : t.children) || void 0 === e ? void 0 : e.length) return p(t.children.reduce((function(t, e) {
            var r = n.getValidNodeOffsetRect(e);
            return r ? t.concat(r) : t;
        }), []));
    }, e.prototype.getValidNodeRect = function(t) {
        if (t) {
            var e = this.getElementRectById(t.id);
            return t && t === t.root && t.isInOperation ? e ? p([ this.rect, e ]) : this.rect : e || this.getChildrenRect(t);
        }
    }, e.prototype.getValidNodeOffsetRect = function(t) {
        if (t) {
            var e = this.getElementOffsetRectById(t.id);
            return t && t === t.root && t.isInOperation ? e ? p([ this.innerRect, e ]) : this.innerRect : e || this.getChildrenOffsetRect(t);
        }
    }, e.prototype.getValidNodeLayout = function(t) {
        var e, n;
        return t ? (null === (n = null === (e = t.parent) || void 0 === e ? void 0 : e.designerProps) || void 0 === n ? void 0 : n.inlineChildrenLayout) ? "horizontal" : f(this.findElementById(t.id)) : "vertical";
    }, e;
}(), pe = function() {
    function t(t) {
        this.selected = [], this.indexes = {}, t.selected && (this.selected = t.selected), 
        t.operation && (this.operation = t.operation), this.makeObservable();
    }
    return t.prototype.makeObservable = function() {
        V(this, {
            selected: Y,
            select: z,
            batchSelect: z,
            add: z,
            remove: z,
            clear: z,
            crossAddTo: z
        });
    }, t.prototype.trigger = function(t) {
        return void 0 === t && (t = bt), this.operation.dispatch(new t({
            target: this.operation.tree,
            source: this.selectedNodes
        }));
    }, t.prototype.select = function(t) {
        var e;
        if (v(t)) {
            if (1 === this.selected.length && this.selected.includes(t)) return void this.trigger(bt);
            this.selected = [ t ], this.indexes = (e = {}, e[t] = !0, e), this.trigger(bt);
        } else this.select(null == t ? void 0 : t.id);
    }, t.prototype.safeSelect = function(t) {
        t && this.select(t);
    }, t.prototype.mapIds = function(t) {
        return g(t) ? t.map((function(t) {
            return v(t) ? t : null == t ? void 0 : t.id;
        })) : [];
    }, t.prototype.batchSelect = function(t) {
        this.selected = this.mapIds(t), this.indexes = this.selected.reduce((function(t, e) {
            return t[e] = !0, t;
        }), {}), this.trigger(bt);
    }, t.prototype.batchSafeSelect = function(t) {
        (null == t ? void 0 : t.length) && this.batchSelect(t);
    }, Object.defineProperty(t.prototype, "selectedNodes", {
        get: function() {
            var t = this;
            return this.selected.map((function(e) {
                return t.operation.tree.findById(e);
            }));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "first", {
        get: function() {
            if (this.selected && this.selected.length) return this.selected[0];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "last", {
        get: function() {
            if (this.selected && this.selected.length) return this.selected[this.selected.length - 1];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.selected.length;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.add = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        this.mapIds(e).forEach((function(e) {
            v(e) ? t.selected.includes(e) || (t.selected.push(e), t.indexes[e] = !0) : t.add(null == e ? void 0 : e.id);
        })), this.trigger();
    }, t.prototype.crossAddTo = function(t) {
        var e = this;
        if (t.parent) {
            var n = this.selectedNodes;
            if (this.has(t)) this.remove(t); else {
                var r = n.reduce((function(e, n) {
                    return n.distanceTo(t) < e.distanceTo(t) ? n : e;
                }), n[0]);
                if (r) {
                    var o = t.crossSiblings(r);
                    o.forEach((function(t) {
                        e.has(t.id) || (e.selected.push(t.id), e.indexes[t.id] = !0);
                    }));
                }
                this.has(t.id) || (this.selected.push(t.id), this.indexes[t.id] = !0);
            }
        }
    }, t.prototype.remove = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        this.mapIds(e).forEach((function(e) {
            v(e) ? (t.selected = t.selected.filter((function(t) {
                return t !== e;
            })), delete t.indexes[e]) : t.remove(null == e ? void 0 : e.id);
        })), this.trigger(Et);
    }, t.prototype.has = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return this.mapIds(e).some((function(e) {
            return v(e) ? t.indexes[e] : !!(null == e ? void 0 : e.id) && t.has(null == e ? void 0 : e.id);
        }));
    }, t.prototype.clear = function() {
        this.selected = [], this.indexes = {}, this.trigger(Et);
    }, t;
}(), fe = function() {
    function t(t) {
        this.node = null, this.operation = null == t ? void 0 : t.operation, this.makeObservable();
    }
    return t.prototype.setHover = function(t) {
        this.node = t || null, this.trigger();
    }, t.prototype.clear = function() {
        this.node = null;
    }, t.prototype.trigger = function() {
        if (this.operation) return this.operation.dispatch(new ft({
            target: this.operation.tree,
            source: this.node
        }));
    }, t.prototype.makeObservable = function() {
        V(this, {
            node: Y.ref,
            setHover: z,
            clear: z
        });
    }, t;
}(), ve = function() {
    function t(t, e) {
        this.helper = t, this.type = e.type || "normal", this._id = e.id, this.refer = e.refer, 
        this.start = G({}, e.start), this.end = G({}, e.end), this.distance = e.distance;
    }
    return Object.defineProperty(t.prototype, "id", {
        get: function() {
            var t;
            return null !== (t = this._id) && void 0 !== t ? t : "".concat(this.start.x, "-").concat(this.start.y, "-").concat(this.end.x, "-").concat(this.end.y);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "direction", {
        get: function() {
            var t, e;
            return (null === (t = this.start) || void 0 === t ? void 0 : t.x) === (null === (e = this.end) || void 0 === e ? void 0 : e.x) ? "v" : "h";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "closest", {
        get: function() {
            return this.distance < Ne.threshold;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rect", {
        get: function() {
            return m(this);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.translate = function(t, e) {
        if (t && (null == t ? void 0 : t.parent)) {
            var n = t.parent, r = t.getValidElementOffsetRect(), o = n.getValidElementOffsetRect(), i = y(this, r);
            "h" === this.direction ? e.y = this.start.y - o.y - i.y : e.x = this.start.x - o.x - i.x;
        }
    }, t.prototype.resize = function(t, e) {
        if (t && (null == t ? void 0 : t.parent)) {
            var n = t.parent, r = t.getValidElementOffsetRect(), o = n.getValidElementOffsetRect(), i = y(this, r), s = this.helper.cursorDragNodesRect, a = this.snapEdge(e);
            if ("h" === this.direction) {
                var c = this.start.y - o.y - i.y;
                switch (this.helper.direction) {
                  case "left-top":
                  case "center-top":
                  case "right-top":
                    if ("ht" !== a) return;
                    e.y = c, e.height = s.bottom - c;
                    break;

                  case "left-bottom":
                  case "center-bottom":
                  case "right-bottom":
                    if ("hb" !== a) return;
                    e.height = this.start.y - s.top;
                }
            } else {
                var u = this.start.x - o.x - i.x;
                switch (this.helper.direction) {
                  case "left-top":
                  case "left-bottom":
                  case "left-center":
                    if ("vl" !== a) return;
                    e.x = u, e.width = s.right - u;
                    break;

                  case "right-center":
                  case "right-top":
                  case "right-bottom":
                    if ("vr" !== a) return;
                    e.width = this.start.x - s.left;
                }
            }
        }
    }, t.prototype.snapEdge = function(t) {
        var e = Ne.threshold;
        if ("h" === this.direction) {
            if (Math.abs(this.start.y - t.top) < e) return "ht";
            if (Math.abs(this.start.y - (t.top + t.height / 2)) < e) return "hc";
            if (Math.abs(this.start.y - t.bottom) < e) return "hb";
        } else {
            if (Math.abs(this.start.x - t.left) < e) return "vl";
            if (Math.abs(this.start.x - (t.left + t.width / 2)) < e) return "vc";
            if (Math.abs(this.start.x - t.right) < e) return "vr";
        }
    }, t;
}(), ge = function() {
    function t(t, e) {
        this.helper = t, this.distance = e.distance, this.refer = e.refer, this.rect = e.rect, 
        this.type = e.type;
    }
    return Object.defineProperty(t.prototype, "referRect", {
        get: function() {
            if (this.refer) return this.helper.getNodeRect(this.refer);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "id", {
        get: function() {
            var t;
            return null !== (t = this._id) && void 0 !== t ? t : "".concat(this.rect.x, "-").concat(this.rect.y, "-").concat(this.rect.width, "-").concat(this.rect.height);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "next", {
        get: function() {
            var t = this.helper.calcAroundSpaceBlocks(this.referRect);
            return t[this.type];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "extendsLine", {
        get: function() {
            if (this.needExtendsLine) {
                var t = this.helper.dragNodesRect;
                return w(t, this.referRect);
            }
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "needExtendsLine", {
        get: function() {
            var t = this.crossDragNodesRect, e = this.crossReferRect;
            if ("top" === this.type || "bottom" === this.type) {
                var n = e.right - t.left, r = t.right - e.left;
                return n < t.width / 2 || r < t.width / 2;
            }
            var o = t.bottom - e.top, i = e.bottom - t.top;
            return o < t.height / 2 || i < t.height / 2;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "crossReferRect", {
        get: function() {
            var t = this.referRect;
            return "top" === this.type || "bottom" === this.type ? new h(t.x, this.rect.y, t.width, this.rect.height) : new h(this.rect.x, t.y, this.rect.width, t.height);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "crossDragNodesRect", {
        get: function() {
            var t = this.helper.dragNodesRect;
            return "top" === this.type || "bottom" === this.type ? new h(t.x, this.rect.y, t.width, this.rect.height) : new h(this.rect.x, t.y, this.rect.width, t.height);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isometrics", {
        get: function() {
            for (var t = [], e = this; e = e.next; ) if (Math.abs(e.distance - this.distance) < Ne.threshold) {
                if (t.some((function(t) {
                    return t.distance !== e.distance;
                }))) continue;
                t.push(e);
            }
            return t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "snapLine", {
        get: function() {
            if (this.isometrics.length) {
                var t, e = this.next.rect, n = this.referRect;
                t = "top" === this.type ? new b({
                    x: e.left,
                    y: n.bottom + e.height
                }, {
                    x: e.right,
                    y: n.bottom + e.height
                }) : "bottom" === this.type ? new b({
                    x: e.left,
                    y: n.top - e.height
                }, {
                    x: e.right,
                    y: n.top - e.height
                }) : "left" === this.type ? new b({
                    x: n.right + e.width,
                    y: e.top
                }, {
                    x: n.right + e.width,
                    y: e.bottom
                }) : new b({
                    x: n.left - e.width,
                    y: e.top
                }, {
                    x: n.left - e.width,
                    y: e.bottom
                });
                var r = E(t, this.helper.dragNodesEdgeLines);
                return new ve(this.helper, G(G({}, t), {
                    distance: r,
                    type: "space-block"
                }));
            }
        },
        enumerable: !1,
        configurable: !0
    }), t;
}();

(function(t) {
    t["Normal"] = "NORMAL", t["DragStart"] = "DRAG_START", t["Dragging"] = "DRAGGING", 
    t["DragStop"] = "DRAG_STOP";
})(Ut || (Ut = {})), function(t) {
    t["Move"] = "MOVE", t["Resize"] = "RESIZE", t["Rotate"] = "ROTATE", t["Scale"] = "SCALE", 
    t["Translate"] = "TRANSLATE", t["Round"] = "ROUND";
}(Kt || (Kt = {})), function(t) {
    t["Normal"] = "NORMAL", t["Selection"] = "SELECTION", t["Sketch"] = "SKETCH";
}(_t || (_t = {}));

var ye, me = {
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    topPageX: 0,
    topPageY: 0,
    topClientX: 0,
    topClientY: 0
}, we = function(t, e) {
    var n, r, o, i, s = null === (r = null === (n = null === document || void 0 === document ? void 0 : document.getElementsByTagName) || void 0 === n ? void 0 : n.call(document, "html")) || void 0 === r ? void 0 : r[0], a = null === (i = null === (o = null == t ? void 0 : t.document) || void 0 === o ? void 0 : o.getElementsByTagName("html")) || void 0 === i ? void 0 : i[0];
    a && a.style.cursor !== e && (a.style.cursor = e), s && s.style.cursor !== e && (s.style.cursor = e);
}, be = function(t, e) {
    return Object.keys(t || {}).reduce((function(n, r) {
        return N(null == t ? void 0 : t[r]) && N(null == e ? void 0 : e[r]) ? n[r] = t[r] - e[r] : n[r] = t[r], 
        n;
    }), {});
}, Ee = function() {
    function e(e) {
        this.type = _t.Normal, this.dragType = Kt.Move, this.status = Ut.Normal, this.position = me, 
        this.dragAtomDelta = me, this.dragStartToCurrentDelta = me, this.dragStartToEndDelta = me, 
        this.view = t, this.engine = e, this.makeObservable();
    }
    return e.prototype.makeObservable = function() {
        V(this, {
            type: Y.ref,
            dragType: Y.ref,
            status: Y.ref,
            position: Y.ref,
            dragStartPosition: Y.ref,
            dragEndPosition: Y.ref,
            dragAtomDelta: Y.ref,
            dragStartToCurrentDelta: Y.ref,
            dragStartToEndDelta: Y.ref,
            view: Y.ref,
            setStyle: z,
            setPosition: z,
            setStatus: z,
            setType: z
        });
    }, Object.defineProperty(e.prototype, "speed", {
        get: function() {
            return Math.sqrt(Math.pow(this.dragAtomDelta.clientX, 2) + Math.pow(this.dragAtomDelta.clientY, 2));
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.setStatus = function(t) {
        this.status = t;
    }, e.prototype.setType = function(t) {
        this.type = t;
    }, e.prototype.setDragType = function(t) {
        this.dragType = t;
    }, e.prototype.setStyle = function(t) {
        this.engine.workbench.eachWorkspace((function(e) {
            we(e.viewport.contentWindow, t);
        }));
    }, e.prototype.setPosition = function(t) {
        this.dragAtomDelta = be(this.position, t), this.position = G({}, t), this.status === Ut.Dragging && (this.dragStartToCurrentDelta = be(this.position, this.dragStartPosition));
    }, e.prototype.setDragStartPosition = function(t) {
        t ? this.dragStartPosition = G({}, t) : (this.dragStartPosition = null, this.dragStartToCurrentDelta = me);
    }, e.prototype.setDragEndPosition = function(t) {
        this.dragStartPosition && (t ? (this.dragEndPosition = G({}, t), this.dragStartToEndDelta = be(this.dragStartPosition, this.dragEndPosition)) : (this.dragEndPosition = null, 
        this.dragStartToEndDelta = me));
    }, e;
}(), Ne = function() {
    function t(t) {
        this.dragNodes = [], this.rulerSnapLines = [], this.aroundSnapLines = [], this.aroundSpaceBlocks = null, 
        this.viewportRectsStore = {}, this.dragStartTranslateStore = {}, this.dragStartSizeStore = {}, 
        this.dragStartNodesRect = null, this.snapping = !1, this.dragging = !1, this.snapped = !1, 
        this.operation = t.operation, this.makeObservable();
    }
    return Object.defineProperty(t.prototype, "tree", {
        get: function() {
            return this.operation.tree;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursor", {
        get: function() {
            return this.operation.engine.cursor;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "viewport", {
        get: function() {
            return this.operation.workspace.viewport;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "deltaX", {
        get: function() {
            return this.cursor.dragStartToCurrentDelta.clientX;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "deltaY", {
        get: function() {
            return this.cursor.dragStartToCurrentDelta.clientY;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursorPosition", {
        get: function() {
            var t = this.cursor.position;
            return this.operation.workspace.viewport.getOffsetPoint(new O(t.clientX, t.clientY));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursorDragNodesRect", {
        get: function() {
            if ("translate" === this.type) return new h(this.cursorPosition.x - this.dragStartCursorOffset.x, this.cursorPosition.y - this.dragStartCursorOffset.y, this.dragNodesRect.width, this.dragNodesRect.height);
            if ("resize" === this.type) {
                var t = this.dragStartNodesRect, e = this.cursor.dragStartToCurrentDelta.clientX, n = this.cursor.dragStartToCurrentDelta.clientY;
                switch (this.direction) {
                  case "left-top":
                    return new h(this.cursorPosition.x - this.dragStartCursorOffset.x, this.cursorPosition.y - this.dragStartCursorOffset.y, t.width - e, t.height - n);

                  case "left-center":
                    return new h(this.cursorPosition.x - this.dragStartCursorOffset.x, t.y, t.width - e, t.height);

                  case "left-bottom":
                    return new h(this.cursorPosition.x - this.dragStartCursorOffset.x, t.y, t.width - e, t.height - n);

                  case "center-top":
                    return new h(t.x, this.cursorPosition.y - this.dragStartCursorOffset.y, t.width, t.height - n);

                  case "center-bottom":
                    return new h(t.x, t.y, t.width, t.height + n);

                  case "right-top":
                    return new h(t.x, this.cursorPosition.y - this.dragStartCursorOffset.y, t.width + e, t.height - n);

                  case "right-center":
                    return new h(t.x, t.y, t.width + e, t.height);

                  case "right-bottom":
                    return new h(t.x, t.y, t.width + e, t.height - n);
                }
            }
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursorDragNodesEdgeLines", {
        get: function() {
            return k(this.cursorDragNodesRect);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "dragNodesRect", {
        get: function() {
            return this.draggingNodesRect ? this.draggingNodesRect : p(this.dragNodes.map((function(t) {
                return t.getValidElementOffsetRect();
            })));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "dragNodesEdgeLines", {
        get: function() {
            return k(this.dragNodesRect);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursorOffset", {
        get: function() {
            return new O(this.cursorPosition.x - this.dragNodesRect.x, this.cursorPosition.y - this.dragNodesRect.y);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "dragStartCursor", {
        get: function() {
            var t = this.operation.engine.cursor.dragStartPosition;
            return this.operation.workspace.viewport.getOffsetPoint(new O(t.clientX, t.clientY));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "dragStartCursorOffset", {
        get: function() {
            return new O(this.dragStartCursor.x - this.dragStartNodesRect.x, this.dragStartCursor.y - this.dragStartNodesRect.y);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "closestSnapLines", {
        get: function() {
            if (!this.dragging) return [];
            var e = [], n = this.cursorDragNodesEdgeLines;
            return this.thresholdSnapLines.forEach((function(r) {
                var o = E(r, n);
                if (o < t.threshold) {
                    var i = e.findIndex((function(t) {
                        return t.distance > o && t.distance > 0 && t.direction === r.direction;
                    }));
                    i > -1 && e.splice(i, 1), e.push(r);
                }
            })), e;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "closestSpaceBlocks", {
        get: function() {
            if (!this.dragging) return [];
            var e = this.cursorDragNodesEdgeLines;
            return this.thresholdSpaceBlocks.filter((function(n) {
                var r = n.snapLine;
                return !!r && E(r, e) < t.threshold;
            }));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "thresholdSnapLines", {
        get: function() {
            if (!this.dragging) return [];
            var t = [];
            for (var e in this.aroundSnapLines.forEach((function(e) {
                t.push(e);
            })), this.rulerSnapLines.forEach((function(e) {
                e.closest && t.push(e);
            })), this.aroundSpaceBlocks) {
                var n = this.aroundSpaceBlocks[e], r = n.snapLine;
                r && t.push(r);
            }
            return t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "thresholdSpaceBlocks", {
        get: function() {
            var t = [];
            if (!this.dragging) return [];
            for (var e in this.aroundSpaceBlocks) {
                var n = this.aroundSpaceBlocks[e];
                if (!n.snapLine) return [];
                if (0 !== n.snapLine.distance) return [];
                n.isometrics.length && (t.push(n), t.push.apply(t, tt([], Q(n.isometrics), !1)));
            }
            return t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "measurerSpaceBlocks", {
        get: function() {
            var t = [];
            if (!this.dragging || !this.snapped) return [];
            for (var e in this.aroundSpaceBlocks) this.aroundSpaceBlocks[e] && t.push(this.aroundSpaceBlocks[e]);
            return t;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.calcBaseTranslate = function(t) {
        var e, n = null !== (e = this.dragStartTranslateStore[t.id]) && void 0 !== e ? e : {
            x: 0,
            y: 0
        }, r = n.x + this.deltaX, o = n.y + this.deltaY;
        return {
            x: r,
            y: o
        };
    }, t.prototype.calcBaseResize = function(t) {
        var e, n, r = this.deltaX, o = this.deltaY, i = null !== (e = this.dragStartTranslateStore[t.id]) && void 0 !== e ? e : {
            x: 0,
            y: 0
        }, s = null !== (n = this.dragStartSizeStore[t.id]) && void 0 !== n ? n : {
            width: 0,
            height: 0
        };
        switch (this.direction) {
          case "left-top":
            return new h(i.x + r, i.y + o, s.width - r, s.height - o);

          case "left-center":
            return new h(i.x + r, i.y, s.width - r, s.height);

          case "left-bottom":
            return new h(i.x + r, i.y, s.width - r, s.height + o);

          case "center-bottom":
            return new h(i.x, i.y, s.width, s.height + o);

          case "center-top":
            return new h(i.x, i.y + o, s.width, s.height - o);

          case "right-top":
            return new h(i.x, i.y + o, s.width + r, s.height - o);

          case "right-bottom":
            return new h(i.x, i.y, s.width + r, s.height + o);

          case "right-center":
            return new h(i.x, i.y, s.width + r, s.height);
        }
    }, t.prototype.calcDragStartStore = function(t) {
        var e = this;
        void 0 === t && (t = []), this.dragStartNodesRect = this.dragNodesRect, t.forEach((function(t) {
            var n = t.getElement(), r = t.getElementOffsetRect();
            e.dragStartTranslateStore[t.id] = S(n), e.dragStartSizeStore[t.id] = {
                width: r.width,
                height: r.height
            };
        }));
    }, t.prototype.calcRulerSnapLines = function(t) {
        var e = k(t);
        return this.rulerSnapLines.map((function(t) {
            return t.distance = E(t, e), t;
        }));
    }, t.prototype.calcAroundSnapLines = function(e) {
        var n = this, r = [], o = k(e);
        return this.eachViewportNodes((function(i, s) {
            if (!n.dragNodes.includes(i)) {
                var a = k(s), c = function(i) {
                    var s = Q(A(i, o), 2), a = s[0], c = s[1], u = D(i, c);
                    if (a < t.threshold) {
                        if (n.snapping && 0 !== a) return;
                        var l = new ve(n, G(G({}, u), {
                            distance: a
                        })), d = l.snapEdge(e);
                        ("translate" === n.type || "hc" !== d && "vc" !== d) && r.push(l);
                    }
                };
                a.h.forEach(c), a.v.forEach(c);
            }
        })), r;
    }, t.prototype.calcAroundSpaceBlocks = function(t) {
        var e = this, n = {};
        return this.eachViewportNodes((function(r, o) {
            if (!R(t, o)) {
                var i = C(t, o);
                if (i) {
                    var s = new ge(e, G({
                        refer: r
                    }, i));
                    n[i.type] ? s.distance < n[i.type].distance && (n[i.type] = s) : n[i.type] = s;
                }
            }
        })), n;
    }, t.prototype.calcViewportNodes = function() {
        var t = this;
        this.tree.eachTree((function(e) {
            var n = e.getValidElementRect(), r = e.getValidElementOffsetRect();
            t.dragNodes.includes(e) || t.viewport.isRectInViewport(n) && (t.viewportRectsStore[e.id] = r);
        }));
    }, t.prototype.getNodeRect = function(t) {
        return this.viewportRectsStore[t.id];
    }, t.prototype.eachViewportNodes = function(t) {
        for (var e in this.viewportRectsStore) t(this.tree.findById(e), this.viewportRectsStore[e]);
    }, t.prototype.translate = function(t, e) {
        var n, r;
        if (this.dragging) {
            var o = this.calcBaseTranslate(t);
            this.snapped = !1, this.snapping = !1;
            try {
                for (var i = J(this.closestSnapLines), s = i.next(); !s.done; s = i.next()) {
                    var a = s.value;
                    a.translate(t, o), this.snapping = !0, this.snapped = !0;
                }
            } catch (c) {
                n = {
                    error: c
                };
            } finally {
                try {
                    s && !s.done && (r = i.return) && r.call(i);
                } finally {
                    if (n) throw n.error;
                }
            }
            e(o), this.snapping && (this.dragMove(), this.snapping = !1);
        }
    }, t.prototype.resize = function(t, e) {
        var n, r;
        if (this.dragging) {
            var o = this.calcBaseResize(t);
            this.snapping = !1, this.snapping = !1;
            try {
                for (var i = J(this.closestSnapLines), s = i.next(); !s.done; s = i.next()) {
                    var a = s.value;
                    a.resize(t, o), this.snapping = !0, this.snapped = !0;
                }
            } catch (c) {
                n = {
                    error: c
                };
            } finally {
                try {
                    s && !s.done && (r = i.return) && r.call(i);
                } finally {
                    if (n) throw n.error;
                }
            }
            e(o), this.snapping && (this.dragMove(), this.snapping = !1);
        }
    }, t.prototype.findRulerSnapLine = function(t) {
        return this.rulerSnapLines.find((function(e) {
            return e.id === t;
        }));
    }, t.prototype.addRulerSnapLine = function(t) {
        P(t) && (this.findRulerSnapLine(t.id) || this.rulerSnapLines.push(new ve(this, G(G({}, t), {
            type: "ruler"
        }))));
    }, t.prototype.removeRulerSnapLine = function(t) {
        var e = this.rulerSnapLines.findIndex((function(e) {
            return e.id === t;
        }));
        e > -1 && this.rulerSnapLines.splice(e, 1);
    }, t.prototype.dragStart = function(t) {
        var e = null == t ? void 0 : t.dragNodes, n = null == t ? void 0 : t.type, r = null == t ? void 0 : t.direction;
        if ("resize" === n) {
            var o = de.filterResizable(e);
            o.length && (this.dragging = !0, this.type = n, this.direction = r, this.dragNodes = o, 
            this.calcDragStartStore(o), this.cursor.setDragType(Kt.Resize));
        } else if ("translate" === n) {
            o = de.filterTranslatable(e);
            o.length && (this.dragging = !0, this.type = n, this.direction = r, this.dragNodes = o, 
            this.calcDragStartStore(o), this.cursor.setDragType(Kt.Translate));
        } else if ("rotate" === n) {
            o = de.filterRotatable(e);
            o.length && (this.dragging = !0, this.type = n, this.dragNodes = o, this.calcDragStartStore(o), 
            this.cursor.setDragType(Kt.Rotate));
        } else if ("scale" === n) {
            o = de.filterScalable(e);
            o.length && (this.dragging = !0, this.type = n, this.dragNodes = o, this.calcDragStartStore(o), 
            this.cursor.setDragType(Kt.Scale));
        } else if ("round" === n) {
            o = de.filterRoundable(e);
            o.length && (this.dragging = !0, this.type = n, this.dragNodes = o, this.calcDragStartStore(o), 
            this.cursor.setDragType(Kt.Round));
        }
        this.dragging && this.calcViewportNodes();
    }, t.prototype.dragMove = function() {
        this.dragging && (this.draggingNodesRect = null, this.draggingNodesRect = this.dragNodesRect, 
        this.rulerSnapLines = this.calcRulerSnapLines(this.dragNodesRect), this.aroundSnapLines = this.calcAroundSnapLines(this.dragNodesRect), 
        this.aroundSpaceBlocks = this.calcAroundSpaceBlocks(this.dragNodesRect));
    }, t.prototype.dragEnd = function() {
        this.dragging = !1, this.viewportRectsStore = {}, this.dragStartTranslateStore = {}, 
        this.aroundSnapLines = [], this.draggingNodesRect = null, this.aroundSpaceBlocks = null, 
        this.dragStartNodesRect = null, this.dragNodes = [], this.cursor.setDragType(Kt.Move);
    }, t.prototype.makeObservable = function() {
        V(this, {
            snapped: Y.ref,
            dragging: Y.ref,
            snapping: Y.ref,
            dragNodes: Y.ref,
            aroundSnapLines: Y.ref,
            aroundSpaceBlocks: Y.ref,
            rulerSnapLines: Y.shallow,
            closestSnapLines: Y.computed,
            thresholdSnapLines: Y.computed,
            thresholdSpaceBlocks: Y.computed,
            measurerSpaceBlocks: Y.computed,
            cursor: Y.computed,
            cursorPosition: Y.computed,
            cursorOffset: Y.computed,
            dragStartCursor: Y.computed,
            translate: z,
            dragStart: z,
            dragMove: z,
            dragEnd: z
        });
    }, t.threshold = 6, t;
}();

(function(t) {
    t["Before"] = "BEFORE", t["ForbidBefore"] = "FORBID_BEFORE", t["After"] = "After", 
    t["ForbidAfter"] = "FORBID_AFTER", t["Upper"] = "UPPER", t["ForbidUpper"] = "FORBID_UPPER", 
    t["Under"] = "UNDER", t["ForbidUnder"] = "FORBID_UNDER", t["Inner"] = "INNER", t["ForbidInner"] = "FORBID_INNER", 
    t["InnerAfter"] = "INNER_AFTER", t["ForbidInnerAfter"] = "FORBID_INNER_AFTER", t["InnerBefore"] = "INNER_BEFORE", 
    t["ForbidInnerBefore"] = "FORBID_INNER_BEFORE", t["Forbid"] = "FORBID";
})(ye || (ye = {}));

var Se, ke, Re = function() {
    function t(t) {
        this.dragNodes = [], this.touchNode = null, this.closestNode = null, this.activeViewport = null, 
        this.viewportClosestRect = null, this.outlineClosestRect = null, this.viewportClosestOffsetRect = null, 
        this.outlineClosestOffsetRect = null, this.viewportClosestDirection = null, this.outlineClosestDirection = null, 
        this.dragging = !1, this.operation = t.operation, this.rootNode = this.operation.tree, 
        this.makeObservable();
    }
    return Object.defineProperty(t.prototype, "cursor", {
        get: function() {
            return this.operation.engine.cursor;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "viewport", {
        get: function() {
            return this.operation.workspace.viewport;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "outline", {
        get: function() {
            return this.operation.workspace.outline;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "hasDragNodes", {
        get: function() {
            return this.dragNodes.length > 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "closestDirection", {
        get: function() {
            return this.activeViewport === this.outline ? this.outlineClosestDirection : this.viewportClosestDirection;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.getClosestLayout = function(t) {
        return t.getValidNodeLayout(this.closestNode);
    }, t.prototype.calcClosestPosition = function(t, e) {
        var n = this, r = this.closestNode;
        if (!r || !e.isPointInViewport(t)) return ye.Forbid;
        var o = e.getValidNodeRect(r), i = "horizontal" === this.getClosestLayout(e);
        if (o) {
            var s = x(t, o, "block" !== e.moveInsertionType && i), a = function(t) {
                var e;
                if (t) return (null === (e = t.parent) || void 0 === e ? void 0 : e.allowSibling(n.dragNodes)) ? t.parent : a(t.parent);
            };
            if (l(t, o, e.moveSensitive)) {
                if (!r.allowAppend(this.dragNodes)) {
                    if (r.allowSibling(this.dragNodes)) return i ? s ? ye.After : ye.Before : s ? ye.Under : ye.Upper;
                    var c = a(r);
                    return c && (this.closestNode = c), i ? c ? s ? ye.After : ye.Before : s ? ye.ForbidAfter : ye.ForbidBefore : c ? s ? ye.Under : ye.Upper : s ? ye.ForbidUnder : ye.ForbidUpper;
                }
                return r.contains.apply(r, tt([], Q(this.dragNodes), !1)) ? s ? ye.InnerAfter : ye.InnerBefore : ye.Inner;
            }
            if (r === r.root) return s ? ye.InnerAfter : ye.InnerBefore;
            if (!r.allowSibling(this.dragNodes)) {
                c = a(r);
                return c && (this.closestNode = c), i ? c ? s ? ye.After : ye.Before : s ? ye.ForbidAfter : ye.ForbidBefore : c ? s ? ye.Under : ye.Upper : s ? ye.ForbidUnder : ye.ForbidUpper;
            }
            return i ? s ? ye.After : ye.Before : s ? ye.Under : ye.Upper;
        }
    }, t.prototype.calcClosestNode = function(t, e) {
        var n, r;
        if (this.touchNode) {
            var o = e.getValidNodeRect(this.touchNode);
            if (!o) return;
            if (null === (r = null === (n = this.touchNode) || void 0 === n ? void 0 : n.children) || void 0 === r ? void 0 : r.length) {
                var i = I(t, o), s = i, a = this.touchNode;
                return this.touchNode.eachChildren((function(n) {
                    var r = e.getElementRectById(n.id);
                    if (r) {
                        var o = l(t, r, e.moveSensitive) ? 0 : T(t, r);
                        o <= s && (s = o, a = n);
                    }
                })), a;
            }
            return this.touchNode;
        }
        return this.operation.tree;
    }, t.prototype.calcClosestRect = function(t, e) {
        var n = this.closestNode;
        if (n && e) {
            var r = t.getValidNodeRect(n);
            return e === ye.InnerAfter || e === ye.InnerBefore ? t.getChildrenRect(n) : r;
        }
    }, t.prototype.calcClosestOffsetRect = function(t, e) {
        var n = this.closestNode;
        if (n && e) {
            var r = t.getValidNodeOffsetRect(n);
            return e === ye.InnerAfter || e === ye.InnerBefore ? t.getChildrenOffsetRect(n) : r;
        }
    }, t.prototype.dragStart = function(t) {
        var e = de.filterDraggable(null == t ? void 0 : t.dragNodes);
        e.length && (this.dragNodes = e, this.trigger(new ht({
            target: this.operation.tree,
            source: this.dragNodes
        })), this.viewport.cacheElements(), this.cursor.setDragType(Kt.Move), this.dragging = !0);
    }, t.prototype.dragMove = function(t) {
        var e = t.point, n = t.touchNode;
        this.dragging && (this.outline.isPointInViewport(e, !1) ? (this.activeViewport = this.outline, 
        this.touchNode = n, this.closestNode = this.calcClosestNode(e, this.outline)) : this.viewport.isPointInViewport(e, !1) && (this.activeViewport = this.viewport, 
        this.touchNode = n, this.closestNode = this.calcClosestNode(e, this.viewport)), 
        this.activeViewport && (this.activeViewport === this.outline ? (this.outlineClosestDirection = this.calcClosestPosition(e, this.outline), 
        this.viewportClosestDirection = this.outlineClosestDirection) : (this.viewportClosestDirection = this.calcClosestPosition(e, this.viewport), 
        this.outlineClosestDirection = this.viewportClosestDirection), this.outline.mounted && (this.outlineClosestRect = this.calcClosestRect(this.outline, this.outlineClosestDirection), 
        this.outlineClosestOffsetRect = this.calcClosestOffsetRect(this.outline, this.outlineClosestDirection)), 
        this.viewport.mounted && (this.viewportClosestRect = this.calcClosestRect(this.viewport, this.viewportClosestDirection), 
        this.viewportClosestOffsetRect = this.calcClosestOffsetRect(this.viewport, this.viewportClosestDirection))));
    }, t.prototype.dragDrop = function(t) {
        this.trigger(new pt({
            target: this.operation.tree,
            source: null == t ? void 0 : t.dropNode
        }));
    }, t.prototype.dragEnd = function() {
        this.dragging = !1, this.dragNodes = [], this.touchNode = null, this.closestNode = null, 
        this.activeViewport = null, this.outlineClosestDirection = null, this.outlineClosestOffsetRect = null, 
        this.outlineClosestRect = null, this.viewportClosestDirection = null, this.viewportClosestOffsetRect = null, 
        this.viewportClosestRect = null, this.viewport.clearCache();
    }, t.prototype.trigger = function(t) {
        if (this.operation) return this.operation.dispatch(t);
    }, t.prototype.makeObservable = function() {
        V(this, {
            dragging: Y.ref,
            dragNodes: Y.ref,
            touchNode: Y.ref,
            closestNode: Y.ref,
            outlineClosestDirection: Y.ref,
            outlineClosestOffsetRect: Y.ref,
            outlineClosestRect: Y.ref,
            viewportClosestDirection: Y.ref,
            viewportClosestOffsetRect: Y.ref,
            viewportClosestRect: Y.ref,
            dragStart: z,
            dragMove: z,
            dragEnd: z
        });
    }, t;
}(), Ce = function() {
    function t(t) {
        this.requests = {
            snapshot: null
        }, this.engine = t.engine, this.workspace = t, this.tree = new de(G(G({
            componentName: this.engine.props.rootComponentName
        }, this.engine.props.defaultComponentTree), {
            operation: this
        })), this.hover = new fe({
            operation: this
        }), this.selection = new pe({
            operation: this
        }), this.moveHelper = new Re({
            operation: this
        }), this.transformHelper = new Ne({
            operation: this
        }), this.selection.select(this.tree);
    }
    return t.prototype.dispatch = function(t, e) {
        if (!1 !== this.workspace.dispatch(t)) return i(e) ? e() : void 0;
    }, t.prototype.snapshot = function(t) {
        var e = this;
        a(this.requests.snapshot), this.workspace && this.workspace.history && !this.workspace.history.locking && (this.requests.snapshot = c((function() {
            e.workspace.history.push(t);
        })));
    }, t.prototype.from = function(t) {
        t && (t.tree && this.tree.from(t.tree), t.selected && (this.selection.selected = t.selected));
    }, t.prototype.serialize = function() {
        return {
            tree: this.tree.serialize(),
            selected: [ this.tree.id ]
        };
    }, t;
}(), Pe = function() {
    function t(t, e) {
        this.current = 0, this.history = [], this.updateTimer = null, this.maxSize = 100, 
        this.locking = !1, this.context = t, this.props = e, this.push(), this.makeObservable();
    }
    return t.prototype.makeObservable = function() {
        V(this, {
            current: Y.ref,
            history: Y.shallow,
            push: z,
            undo: z,
            redo: z,
            goTo: z,
            clear: z
        });
    }, t.prototype.list = function() {
        return this.history;
    }, t.prototype.push = function(t) {
        var e;
        if (!this.locking) {
            this.current < this.history.length - 1 && (this.history = this.history.slice(0, this.current + 1));
            var n = {
                data: this.context.serialize(),
                timestamp: Date.now(),
                type: t
            };
            this.current = this.history.length, this.history.push(n);
            var r = this.history.length - this.maxSize;
            r > 0 && (this.history.splice(0, r), this.current = this.history.length - 1), (null === (e = this.props) || void 0 === e ? void 0 : e.onPush) && this.props.onPush(n);
        }
    }, Object.defineProperty(t.prototype, "allowUndo", {
        get: function() {
            return this.history.length > 0 && this.current - 1 >= 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "allowRedo", {
        get: function() {
            return this.history.length > this.current + 1;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.redo = function() {
        var t;
        if (this.allowRedo) {
            var e = this.history[this.current + 1];
            this.locking = !0, this.context.from(e.data), this.locking = !1, this.current++, 
            (null === (t = this.props) || void 0 === t ? void 0 : t.onRedo) && this.props.onRedo(e);
        }
    }, t.prototype.undo = function() {
        var t;
        if (this.allowUndo) {
            var e = this.history[this.current - 1];
            this.locking = !0, this.context.from(e.data), this.locking = !1, this.current--, 
            (null === (t = this.props) || void 0 === t ? void 0 : t.onUndo) && this.props.onUndo(e);
        }
    }, t.prototype.goTo = function(t) {
        var e, n = this.history[t];
        n && (this.locking = !0, this.context.from(n.data), this.locking = !1, this.current = t, 
        (null === (e = this.props) || void 0 === e ? void 0 : e.onGoto) && this.props.onGoto(n));
    }, t.prototype.clear = function() {
        this.history = [], this.current = 0;
    }, t;
}(), Oe = function() {
    function t(t, e) {
        var n = this;
        this.engine = t, this.props = e, this.id = e.id || s(), this.title = e.title, this.description = e.description, 
        this.viewport = new he({
            engine: this.engine,
            workspace: this,
            viewportElement: e.viewportElement,
            contentWindow: e.contentWindow,
            nodeIdAttrName: this.engine.props.nodeIdAttrName,
            moveSensitive: !0,
            moveInsertionType: "all"
        }), this.outline = new he({
            engine: this.engine,
            workspace: this,
            viewportElement: e.viewportElement,
            contentWindow: e.contentWindow,
            nodeIdAttrName: this.engine.props.outlineNodeIdAttrName,
            moveSensitive: !1,
            moveInsertionType: "block"
        }), this.operation = new Ce(this), this.history = new Pe(this, {
            onPush: function(t) {
                n.operation.dispatch(new Xt(t));
            },
            onRedo: function(t) {
                n.operation.hover.clear(), n.operation.dispatch(new Bt(t));
            },
            onUndo: function(t) {
                n.operation.hover.clear(), n.operation.dispatch(new Lt(t));
            },
            onGoto: function(t) {
                n.operation.hover.clear(), n.operation.dispatch(new jt(t));
            }
        });
    }
    return t.prototype.getEventContext = function() {
        return {
            workbench: this.engine.workbench,
            workspace: this,
            engine: this.engine,
            viewport: this.viewport
        };
    }, t.prototype.attachEvents = function(t, e) {
        this.engine.attachEvents(t, e, this.getEventContext());
    }, t.prototype.detachEvents = function(t) {
        this.engine.detachEvents(t);
    }, t.prototype.dispatch = function(t) {
        return this.engine.dispatch(t, this.getEventContext());
    }, t.prototype.serialize = function() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            operation: this.operation.serialize()
        };
    }, t.prototype.from = function(t) {
        t && (t.operation && this.operation.from(t.operation), t.id && (this.id = t.id), 
        t.title && (this.title = t.title), t.description && (this.description = t.description));
    }, t;
}(), Ae = function() {
    function t(t) {
        this.type = "DESIGNABLE", this.engine = t, this.workspaces = [], this.currentWorkspace = null, 
        this.activeWorkspace = null, this.makeObservable();
    }
    return t.prototype.makeObservable = function() {
        V(this, {
            currentWorkspace: Y.ref,
            workspaces: Y.shallow,
            activeWorkspace: Y.ref,
            type: Y.ref,
            switchWorkspace: z,
            addWorkspace: z,
            removeWorkspace: z,
            setActiveWorkspace: z,
            setWorkbenchType: z
        });
    }, t.prototype.getEventContext = function() {
        return {
            engine: this.engine,
            workbench: this.engine.workbench,
            workspace: null,
            viewport: null
        };
    }, t.prototype.switchWorkspace = function(t) {
        var e = this.findWorkspaceById(t);
        return e && (this.currentWorkspace = e, this.engine.dispatch(new Wt(e))), this.currentWorkspace;
    }, t.prototype.setActiveWorkspace = function(t) {
        return this.activeWorkspace = t, t;
    }, t.prototype.setWorkbenchType = function(t) {
        this.type = t;
    }, t.prototype.addWorkspace = function(t) {
        var e = this.findWorkspaceById(t.id);
        return e || (this.currentWorkspace = new Oe(this.engine, t), this.workspaces.push(this.currentWorkspace), 
        this.engine.dispatch(new It(this.currentWorkspace)), this.currentWorkspace);
    }, t.prototype.removeWorkspace = function(t) {
        var e = this.findWorkspaceIndexById(t);
        if (e > -1 && e < this.workspaces.length) {
            var n = this.workspaces[e];
            n.viewport.detachEvents(), this.workspaces.splice(e, 1), n === this.currentWorkspace && (this.workspaces.length && this.workspaces[e] ? this.currentWorkspace = this.workspaces[e] : this.currentWorkspace = this.workspaces[this.workspaces.length - 1]), 
            this.engine.dispatch(new Tt(n));
        }
    }, t.prototype.ensureWorkspace = function(t) {
        void 0 === t && (t = {});
        var e = this.findWorkspaceById(t.id);
        return e || (this.addWorkspace(t), this.currentWorkspace);
    }, t.prototype.findWorkspaceById = function(t) {
        return this.workspaces.find((function(e) {
            return e.id === t;
        }));
    }, t.prototype.findWorkspaceIndexById = function(t) {
        return this.workspaces.findIndex((function(e) {
            return e.id === t;
        }));
    }, t.prototype.mapWorkspace = function(t) {
        return this.workspaces.map(t);
    }, t.prototype.eachWorkspace = function(t) {
        this.workspaces.forEach(t);
    }, t;
}(), De = function() {
    function t(t) {
        this.codes = this.parseCodes(t.codes), this.handler = t.handler, this.matcher = t.matcher;
    }
    return t.prototype.parseCodes = function(t) {
        var e = [];
        return t.forEach((function(t) {
            Array.isArray(t) ? e.push(t) : e.push([ t ]);
        })), e;
    }, t.prototype.preventCodes = function(e) {
        var n;
        if (this.codes.length) {
            for (var r = 0; r < e.length; r++) for (var o = null !== (n = this.codes[r]) && void 0 !== n ? n : [], i = 0; i < o.length; i++) if (!t.matchCode(e[i], o[i])) return !1;
            return !0;
        }
        return !1;
    }, t.prototype.matched = function(t, e) {
        return i(this.handler) && t && this.handler(e), t;
    }, t.prototype.match = function(e, n) {
        var r = this;
        return this.codes.some((function(o) {
            var s = t.sortCodes(o), a = t.sortCodes(e);
            if (i(r.matcher)) return r.matched(r.matcher(a), n);
            if (a.length !== s.length) return r.matched(!1, n);
            for (var c = 0; c < s.length; c++) if (!t.matchCode(a[c], s[c])) return r.matched(!1, n);
            return r.matched(!0, n);
        }));
    }, t.matchCode = function(t, e) {
        var n, r;
        return (null === (n = null == t ? void 0 : t.toLocaleLowerCase) || void 0 === n ? void 0 : n.call(t)) === (null === (r = null == e ? void 0 : e.toLocaleLowerCase) || void 0 === r ? void 0 : r.call(e));
    }, t.sortCodes = function(t) {
        return t.map((function(t) {
            return t.toLocaleLowerCase();
        })).sort();
    }, t;
}(), xe = [ [ "metaKey", W.Meta ], [ "shiftKey", W.Shift ], [ "ctrlKey", W.Control ], [ "altKey", W.Alt ] ], Ie = function() {
    function t(t) {
        var e;
        this.shortcuts = [], this.sequence = [], this.keyDown = null, this.modifiers = {}, 
        this.requestTimer = null, this.engine = t, this.shortcuts = (null === (e = t.props) || void 0 === e ? void 0 : e.shortcuts) || [], 
        this.makeObservable();
    }
    return t.prototype.matchCodes = function(t) {
        for (var e = 0; e < this.shortcuts.length; e++) {
            var n = this.shortcuts[e];
            if (n.match(this.sequence, t)) return !0;
        }
        return !1;
    }, t.prototype.preventCodes = function() {
        var t = this;
        return this.shortcuts.some((function(e) {
            return e.preventCodes(t.sequence);
        }));
    }, t.prototype.includes = function(t) {
        return this.sequence.some((function(e) {
            return De.matchCode(e, t);
        }));
    }, t.prototype.excludes = function(t) {
        this.sequence = this.sequence.filter((function(e) {
            return !De.matchCode(t, e);
        }));
    }, t.prototype.addKeyCode = function(t) {
        this.includes(t) || this.sequence.push(t);
    }, t.prototype.removeKeyCode = function(t) {
        this.includes(t) && this.excludes(t);
    }, t.prototype.isModifier = function(t) {
        return xe.some((function(e) {
            return De.matchCode(e[1], t);
        }));
    }, t.prototype.handleModifiers = function(t) {
        var e = this;
        xe.forEach((function(n) {
            var r = Q(n, 2), o = r[0], i = r[1];
            t[o] && (e.includes(i) || (e.sequence = [ i ].concat(e.sequence)));
        }));
    }, t.prototype.handleKeyboard = function(t, e) {
        "keydown" === t.eventType ? (this.keyDown = t.data, this.addKeyCode(this.keyDown), 
        this.handleModifiers(t), this.matchCodes(e) && (this.sequence = []), this.requestClean(4e3), 
        this.preventCodes() && (t.preventDefault(), t.stopPropagation())) : (this.isModifier(t.data) && (this.sequence = []), 
        this.keyDown = null);
    }, t.prototype.isKeyDown = function(t) {
        return this.keyDown === t;
    }, t.prototype.requestClean = function(t) {
        var e = this;
        void 0 === t && (t = 320), clearTimeout(this.requestTimer), this.requestTimer = setTimeout((function() {
            e.keyDown = null, e.sequence = [], clearTimeout(e.requestTimer);
        }), t);
    }, t.prototype.makeObservable = function() {
        V(this, {
            sequence: Y.shallow,
            keyDown: Y.ref,
            handleKeyboard: z
        });
    }, t;
}();

(function(t) {
    t["PC"] = "PC", t["Responsive"] = "Responsive", t["Mobile"] = "Mobile", t["Sketch"] = "Sketch";
})(Se || (Se = {})), function(t) {
    t["Normal"] = "Normal", t["Resizing"] = "Resizing", t["Zooming"] = "Zooming";
}(ke || (ke = {}));

var Te = function() {
    function t(t) {
        this.scale = 1, this.width = "100%", this.height = "100%", this.background = "", 
        this.flip = !1, this.status = ke.Normal, this.engine = t, this.type = t.props.defaultScreenType, 
        this.makeObservable();
    }
    return t.prototype.makeObservable = function() {
        V(this, {
            type: Y.ref,
            scale: Y.ref,
            width: Y.ref,
            height: Y.ref,
            status: Y.ref,
            flip: Y.ref,
            background: Y.ref,
            setType: z,
            setScale: z,
            setSize: z,
            resetSize: z,
            setBackground: z,
            setFlip: z
        });
    }, t.prototype.setStatus = function(t) {
        this.status = t;
    }, t.prototype.setType = function(t) {
        this.type = t;
    }, t.prototype.setScale = function(t) {
        this.scale = t;
    }, t.prototype.setSize = function(t, e) {
        t && (this.width = t), e && (this.height = e);
    }, t.prototype.resetSize = function() {
        this.width = "100%", this.height = "100%";
    }, t.prototype.setBackground = function(t) {
        this.background = t;
    }, t.prototype.setFlip = function(t) {
        this.flip = t;
    }, t;
}(), We = function(e) {
    function n(t) {
        var r = e.call(this, t) || this;
        return r.props = G(G({}, n.defaultProps), t), r.init(), r.id = s(), r;
    }
    return $(n, e), n.prototype.init = function() {
        this.workbench = new Ae(this), this.screen = new Te(this), this.cursor = new Ee(this), 
        this.keyboard = new Ie(this);
    }, n.prototype.setCurrentTree = function(t) {
        this.workbench.currentWorkspace && this.workbench.currentWorkspace.operation.tree.from(t);
    }, n.prototype.getCurrentTree = function() {
        var t, e, n;
        return null === (n = null === (e = null === (t = this.workbench) || void 0 === t ? void 0 : t.currentWorkspace) || void 0 === e ? void 0 : e.operation) || void 0 === n ? void 0 : n.tree;
    }, n.prototype.getAllSelectedNodes = function() {
        for (var t = [], e = 0; e < this.workbench.workspaces.length; e++) {
            var n = this.workbench.workspaces[e];
            t = t.concat(n.operation.selection.selectedNodes);
        }
        return t;
    }, n.prototype.findNodeById = function(t) {
        return de.findById(t);
    }, n.prototype.findMovingNodes = function() {
        var t = [];
        return this.workbench.eachWorkspace((function(e) {
            var n;
            null === (n = e.operation.moveHelper.dragNodes) || void 0 === n || n.forEach((function(e) {
                t.includes(e) || t.push(e);
            }));
        })), t;
    }, n.prototype.createNode = function(t, e) {
        return new de(t, e);
    }, n.prototype.mount = function() {
        this.attachEvents(t);
    }, n.prototype.unmount = function() {
        this.detachEvents();
    }, n.defaultProps = {
        shortcuts: [],
        effects: [],
        drivers: [],
        rootComponentName: "Root",
        sourceIdAttrName: "data-designer-source-id",
        nodeIdAttrName: "data-designer-node-id",
        contentEditableAttrName: "data-content-editable",
        contentEditableNodeIdAttrName: "data-content-editable-node-id",
        clickStopPropagationAttrName: "data-click-stop-propagation",
        nodeSelectionIdAttrName: "data-designer-node-helpers-id",
        nodeDragHandlerAttrName: "data-designer-node-drag-handler",
        screenResizeHandlerAttrName: "data-designer-screen-resize-handler",
        nodeResizeHandlerAttrName: "data-designer-node-resize-handler",
        outlineNodeIdAttrName: "data-designer-outline-node-id",
        nodeTranslateAttrName: "data-designer-node-translate-handler",
        defaultScreenType: Se.PC
    }, n;
}(M);

function Me(t) {
    for (var e = [], n = 0; n < t.rangeCount; n++) {
        var r = t.getRangeAt(n);
        e[n] = {
            collapsed: r.collapsed,
            startOffset: r.startOffset,
            endOffset: r.endOffset
        };
    }
    return e;
}

function Le(e) {
    var n = document.createRange();
    n.selectNodeContents(e), n.collapse(!1);
    var r = t.getSelection();
    r.removeAllRanges(), r.addRange(n);
}

function Be(e) {
    var n = t.getSelection();
    if (!n.containsNode(e)) {
        var r = Me(n);
        return function(n) {
            void 0 === n && (n = 0);
            var o = t.getSelection(), i = e.childNodes[0];
            i && (o.removeAllRanges(), r.forEach((function(t) {
                var e = document.createRange();
                e.collapse(t.collapsed), e.setStart(i, t.startOffset + n), e.setEnd(i, t.endOffset + n), 
                o.addRange(e);
            })));
        };
    }
}

var je, Xe = new De({
    codes: [ [ W.Meta ], [ W.Control ] ]
}), Ye = new De({
    codes: [ W.Shift ]
}), Ve = new De({
    codes: [ [ W.Meta, W.X ], [ W.Control, W.X ] ]
}), ze = new De({
    codes: [ [ W.Meta, W.A ], [ W.Control, W.A ] ],
    handler: function(t) {
        var e = null == t ? void 0 : t.workspace.operation;
        if (e) {
            var n = e.tree, r = e.selection;
            r.batchSelect(n.descendants);
        }
    }
}), Fe = new De({
    codes: [ [ W.Backspace ], [ W.Delete ] ],
    handler: function(t) {
        var e = null == t ? void 0 : t.workspace.operation;
        e && de.remove(e.selection.selectedNodes);
    }
}), qe = {
    nodes: []
}, He = new De({
    codes: [ [ W.Meta, W.C ], [ W.Control, W.C ] ],
    handler: function(t) {
        var e = null == t ? void 0 : t.workspace.operation;
        e && (qe.nodes = e.selection.selectedNodes);
    }
}), Ue = new De({
    codes: [ [ W.Meta, W.V ], [ W.Control, W.V ] ],
    handler: function(t) {
        var e = null == t ? void 0 : t.workspace.operation;
        e && de.clone(qe.nodes);
    }
}), Ke = new De({
    codes: [ [ W.Meta, W.Z ], [ W.Control, W.Z ] ],
    handler: function(t) {
        var e = null == t ? void 0 : t.workspace;
        e && e.history.undo(), e.operation.hover.clear();
    }
}), _e = new De({
    codes: [ [ W.Meta, W.Shift, W.Z ], [ W.Control, W.Shift, W.Z ] ],
    handler: function(t) {
        var e = null == t ? void 0 : t.workspace;
        e && e.history.redo(), e.operation.hover.clear();
    }
}), $e = new De({
    codes: [ W.Shift, W.S ],
    handler: function(t) {
        var e = null == t ? void 0 : t.engine;
        e && e.cursor.setType(_t.Selection);
    }
}), Ge = function(t) {
    return t && t.lastChild ? Ge(t.lastChild) : t;
}, Ze = function(t) {
    var e;
    return t.parent ? (null === (e = t.parent) || void 0 === e ? void 0 : e.next) ? t.parent.next : Ze(t.parent) : t;
}, Je = new De({
    codes: [ [ W.Up ], [ W.PageUp ], [ W.ArrowUp ], [ W.Left ], [ W.LeftWindowKey ], [ W.ArrowLeft ] ],
    handler: function(t) {
        var e = null == t ? void 0 : t.workspace.operation;
        if (e) {
            var n = e.tree, r = e.selection, o = n.findById(r.last);
            if (o) {
                var i = o.previous;
                if (i) {
                    var s = Ge(i);
                    s ? r.select(s) : r.select(i);
                } else if (o.parent) r.select(o.parent); else {
                    s = Ge(o.lastChild);
                    s && r.select(s);
                }
            }
        }
    }
}), Qe = new De({
    codes: [ [ W.Down ], [ W.PageDown ], [ W.ArrowDown ], [ W.Right ], [ W.RightWindowKey ], [ W.ArrowRight ] ],
    handler: function(t) {
        var e = null == t ? void 0 : t.workspace.operation;
        if (e) {
            var n = e.tree, r = e.selection, o = n.findById(r.last);
            if (o) {
                var i = o.firstChild ? o.firstChild : o.next;
                i ? r.select(i) : r.select(Ze(o));
            }
        }
    }
}), tn = [ function(t) {
    t.subscribeTo(ot, (function(e) {
        t.cursor.dragType === Kt.Move && (t.workbench.eachWorkspace((function(n) {
            var r = n.viewport, o = new O(e.data.topClientX, e.data.topClientY), i = r.getOffsetPoint(new O(t.cursor.dragStartPosition.topClientX, t.cursor.dragStartPosition.topClientY)), s = r.getOffsetPoint(new O(t.cursor.position.topClientX, t.cursor.position.topClientY));
            if (r.isPointInViewport(o, !1)) {
                var a = n.operation.tree, c = L(i, s, r.dragScrollXDelta, r.dragScrollYDelta), u = [];
                a.eachChildren((function(t) {
                    var e = r.getValidNodeOffsetRect(t);
                    e && B(c, e) && u.push([ t, e ]);
                }));
                var l = u.reduce((function(t, e) {
                    var n = Q(e, 2), r = n[0], o = n[1];
                    return d(o, c) && u.some((function(t) {
                        var e = Q(t, 1), n = e[0];
                        return n.isMyParents(r);
                    })) ? t : t.concat(r);
                }), []);
                n.operation.selection.batchSafeSelect(l);
            }
        })), t.cursor.type === _t.Selection && t.cursor.setType(_t.Normal));
    }));
}, function(t) {
    t.subscribeTo(at, (function(e) {
        t.cursor.setStatus(t.cursor.status === Ut.Dragging || t.cursor.status === Ut.DragStart ? t.cursor.status : Ut.Normal), 
        t.cursor.status !== Ut.Dragging && t.cursor.setPosition(e.data);
    })), t.subscribeTo(rt, (function(e) {
        t.cursor.setStatus(Ut.DragStart), t.cursor.setDragStartPosition(e.data);
    })), t.subscribeTo(nt, (function(e) {
        t.cursor.setStatus(Ut.Dragging), t.cursor.setPosition(e.data);
    })), t.subscribeTo(ot, (function(e) {
        t.cursor.setStatus(Ut.DragStop), t.cursor.setDragEndPosition(e.data), t.cursor.setDragStartPosition(null), 
        c((function() {
            t.cursor.setStatus(Ut.Normal);
        }));
    })), t.subscribeTo(at, (function(e) {
        var n, r, o = null === (n = null == e ? void 0 : e.context) || void 0 === n ? void 0 : n.workspace;
        if (o) {
            var i = o.operation;
            if (t.cursor.status === Ut.Normal) {
                var s = e.data.target, a = null === (r = null == s ? void 0 : s.closest) || void 0 === r ? void 0 : r.call(s, "\n      *[".concat(t.props.nodeIdAttrName, "],\n      *[").concat(t.props.outlineNodeIdAttrName, "]\n    "));
                if (null == a ? void 0 : a.getAttribute) {
                    var c = a.getAttribute(t.props.nodeIdAttrName), u = a.getAttribute(t.props.outlineNodeIdAttrName), l = i.tree.findById(c || u);
                    l ? i.hover.setHover(l) : i.hover.clear();
                }
            } else i.hover.clear();
        }
    }));
}, function(t) {
    t.subscribeTo(At, (function(t) {
        var e, n = null === (e = null == t ? void 0 : t.context) || void 0 === e ? void 0 : e.workspace;
        if (n) {
            var r = n.viewport, o = n.outline;
            r.matchViewport(t.data.target) && r.digestViewport(), o.matchViewport(t.data.target) && o.digestViewport();
        }
    })), t.subscribeTo(Dt, (function(t) {
        var e, n = null === (e = null == t ? void 0 : t.context) || void 0 === e ? void 0 : e.workspace;
        if (n) {
            var r = n.viewport, o = n.outline;
            r.matchViewport(t.data.target) && r.digestViewport(), o.matchViewport(t.data.target) && o.digestViewport();
        }
    }));
}, function(t) {
    t.subscribeTo(rt, (function(e) {
        if (t.cursor.type === _t.Normal) {
            var n = e.data.target, r = null == n ? void 0 : n.closest("\n       *[".concat(t.props.nodeIdAttrName, "],\n       *[").concat(t.props.sourceIdAttrName, "],\n       *[").concat(t.props.outlineNodeIdAttrName, "]\n      ")), o = null == n ? void 0 : n.closest("*[".concat(t.props.nodeDragHandlerAttrName, "]")), i = null == o ? void 0 : o.closest("*[".concat(t.props.nodeSelectionIdAttrName, "]"));
            if ((null == r ? void 0 : r.getAttribute) || o) {
                var s = null == r ? void 0 : r.getAttribute(t.props.sourceIdAttrName), a = null == r ? void 0 : r.getAttribute(t.props.outlineNodeIdAttrName), c = null == i ? void 0 : i.getAttribute(t.props.nodeSelectionIdAttrName), u = null == r ? void 0 : r.getAttribute(t.props.nodeIdAttrName);
                t.workbench.eachWorkspace((function(e) {
                    var n = e.operation, r = n.moveHelper;
                    if (u || a || c) {
                        var o = t.findNodeById(a || u || c);
                        if (o) {
                            if (!o.allowDrag()) return;
                            if (o === o.root) return;
                            var i = t.getAllSelectedNodes().filter((function(t) {
                                return t.allowDrag();
                            }));
                            i.some((function(t) {
                                return t === o;
                            })) ? r.dragStart({
                                dragNodes: de.sort(i)
                            }) : r.dragStart({
                                dragNodes: [ o ]
                            });
                        }
                    } else if (s) {
                        var l = t.findNodeById(s);
                        l && r.dragStart({
                            dragNodes: [ l ]
                        });
                    }
                })), t.cursor.setStyle("move");
            }
        }
    })), t.subscribeTo(nt, (function(e) {
        if (t.cursor.type === _t.Normal && t.cursor.dragType === Kt.Move) {
            var n = e.data.target, r = null == n ? void 0 : n.closest("\n      *[".concat(t.props.nodeIdAttrName, "],\n      *[").concat(t.props.outlineNodeIdAttrName, "]\n    ")), o = new O(e.data.topClientX, e.data.topClientY), i = null == r ? void 0 : r.getAttribute(t.props.nodeIdAttrName), s = null == r ? void 0 : r.getAttribute(t.props.outlineNodeIdAttrName);
            t.workbench.eachWorkspace((function(t) {
                var e = t.operation, n = e.moveHelper, r = n.dragNodes, a = e.tree;
                if (r.length) {
                    var c = a.findById(s || i);
                    n.dragMove({
                        point: o,
                        touchNode: c
                    });
                }
            }));
        }
    })), t.subscribeTo(Dt, (function(e) {
        var n, r;
        if (t.cursor.type === _t.Normal && t.cursor.dragType === Kt.Move) {
            var o = new O(t.cursor.position.topClientX, t.cursor.position.topClientY), i = null !== (r = null === (n = null == e ? void 0 : e.context) || void 0 === n ? void 0 : n.workspace) && void 0 !== r ? r : t.workbench.activeWorkspace;
            if (i) {
                var s = i.operation, a = s.moveHelper;
                if (a.dragNodes.length) {
                    var c = s.tree, u = i.viewport, l = i.outline, d = u.elementFromPoint(o), h = l.elementFromPoint(o), p = null == d ? void 0 : d.closest("\n      *[".concat(t.props.nodeIdAttrName, "],\n      *[").concat(t.props.outlineNodeIdAttrName, "]\n    ")), f = null == h ? void 0 : h.closest("\n    *[".concat(t.props.nodeIdAttrName, "],\n    *[").concat(t.props.outlineNodeIdAttrName, "]\n  ")), v = null == p ? void 0 : p.getAttribute(t.props.nodeIdAttrName), g = null == f ? void 0 : f.getAttribute(t.props.outlineNodeIdAttrName), y = c.findById(g || v);
                    a.dragMove({
                        point: o,
                        touchNode: y
                    });
                }
            }
        }
    })), t.subscribeTo(ot, (function() {
        t.cursor.type === _t.Normal && t.cursor.dragType === Kt.Move && (t.workbench.eachWorkspace((function(t) {
            var e = t.operation, n = e.moveHelper, r = n.dragNodes, o = n.closestNode, i = n.closestDirection, s = e.selection;
            r.length && (r.length && o && i && (i === ye.After || i === ye.Under ? o.allowSibling(r) && s.batchSafeSelect(o.insertAfter.apply(o, tt([], Q(de.filterDroppable(r, o.parent)), !1))) : i === ye.Before || i === ye.Upper ? o.allowSibling(r) && s.batchSafeSelect(o.insertBefore.apply(o, tt([], Q(de.filterDroppable(r, o.parent)), !1))) : i === ye.Inner || i === ye.InnerAfter ? o.allowAppend(r) && (s.batchSafeSelect(o.append.apply(o, tt([], Q(de.filterDroppable(r, o)), !1))), 
            n.dragDrop({
                dropNode: o
            })) : i === ye.InnerBefore && o.allowAppend(r) && (s.batchSafeSelect(o.prepend.apply(o, tt([], Q(de.filterDroppable(r, o)), !1))), 
            n.dragDrop({
                dropNode: o
            }))), n.dragEnd());
        })), t.cursor.setStyle(""));
    }));
}, function(t) {
    t.subscribeTo(it, (function(e) {
        var n, r, o, i;
        if (t.cursor.status === Ut.Normal) {
            var s = e.data.target, a = null === (n = null == s ? void 0 : s.closest) || void 0 === n ? void 0 : n.call(s, "\n      *[".concat(t.props.nodeIdAttrName, "],\n      *[").concat(t.props.outlineNodeIdAttrName, "]\n    ")), c = null === (r = null == s ? void 0 : s.closest) || void 0 === r ? void 0 : r.call(s, "*[".concat(t.props.nodeSelectionIdAttrName, "]")), u = null !== (i = null === (o = e.context) || void 0 === o ? void 0 : o.workspace) && void 0 !== i ? i : t.workbench.activeWorkspace;
            if (u) if (null == a ? void 0 : a.getAttribute) {
                var l = a.getAttribute(t.props.nodeIdAttrName), d = a.getAttribute(t.props.outlineNodeIdAttrName), h = u.operation, p = h.selection, f = h.tree, v = f.findById(l || d);
                v ? (t.keyboard.requestClean(), t.keyboard.isKeyDown(W.Meta) || t.keyboard.isKeyDown(W.Control) ? p.has(v) ? p.selected.length > 1 && p.remove(v) : p.add(v) : t.keyboard.isKeyDown(W.Shift) ? p.has(v) ? p.selected.length > 1 && p.remove(v) : p.crossAddTo(v) : p.select(v)) : p.select(f);
            } else {
                var g = new O(e.data.topClientX, e.data.topClientY), y = u.operation, m = u.viewport, w = u.outline, b = m.isPointInViewport(g, !1), E = w.isPointInViewport(g, !1);
                if (c) return;
                if (b || E) {
                    var N = y.selection, S = y.tree;
                    N.select(S);
                }
            }
        }
    }));
}, function(t) {
    t.subscribeTo(ut, (function(e) {
        var n = t.keyboard;
        if (n) {
            var r = t.workbench.activeWorkspace || t.workbench.currentWorkspace;
            n.handleKeyboard(e, r.getEventContext());
        }
    })), t.subscribeTo(lt, (function(e) {
        var n = t.keyboard;
        if (n) {
            var r = t.workbench.activeWorkspace || t.workbench.currentWorkspace;
            n.handleKeyboard(e, r.getEventContext());
        }
    }));
}, function(t) {
    var e = null, n = null, r = null, o = null, i = function(i, s) {
        t.cursor.status === Ut.Dragging && (e = j(i, "x", s.rect), n = j(i, "y", s.rect), 
        e ? (r && r(), r = X(s.scrollContainer, "x", e.direction, e.speed)) : r && r(), 
        n ? (o && o(), o = X(s.scrollContainer, "y", n.direction, n.speed)) : o && o());
    };
    t.subscribeTo(rt, (function() {
        t.workbench.eachWorkspace((function(t) {
            t.viewport.takeDragStartSnapshot();
        }));
    })), t.subscribeTo(nt, (function(e) {
        t.workbench.eachWorkspace((function(t) {
            var n = t.viewport, r = t.outline, o = new O(e.data.topClientX, e.data.topClientY);
            r.isPointInViewport(o) ? i(o, r) : n.isPointInViewport(o) && i(o, n);
        }));
    })), t.subscribeTo(ot, (function() {
        e = null, n = null, r && r(), o && o();
    }));
}, function(t) {
    t.subscribeWith([ "append:node", "insert:after", "insert:before", "insert:children", "drag:node", "drop:node", "prepend:node", "remove:node", "select:node", "update:children", "wrap:node", "update:node:props" ], (function(e) {
        var n;
        (null === (n = e.context) || void 0 === n ? void 0 : n.workbench) && t.workbench.setActiveWorkspace(e.context.workspace);
    })), t.subscribeTo(bt, (function(e) {
        t.workbench.eachWorkspace((function(t) {
            t !== e.context.workspace && t.operation.selection.clear();
        }));
    }));
}, function(e) {
    var n = {
        activeElements: new Map,
        queue: [],
        requestTimer: null,
        isComposition: !1
    };
    function r(t) {
        "Enter" === t.key && (t.stopPropagation(), t.preventDefault());
    }
    function o(t) {
        var r = this, o = n.activeElements.get(this);
        if (t.stopPropagation(), t.preventDefault(), o) {
            var i = t.target, s = function() {
                if (n.queue.length = 0, !n.isComposition) {
                    var t = Be(i);
                    U.setIn(o.props, r.getAttribute(e.props.contentEditableAttrName), null == i ? void 0 : i.textContent), 
                    c((function() {
                        o.takeSnapshot("update:node:props"), t();
                    }));
                }
            };
            n.queue.push(s), clearTimeout(n.requestTimer), n.requestTimer = setTimeout(s, 600);
        }
    }
    function i() {
        clearTimeout(n.requestTimer), n.requestTimer = setTimeout(n.queue[n.queue.length - 1], 600);
    }
    function s(t) {
        "compositionend" === t.type ? (n.isComposition = !1, o(t)) : (clearTimeout(n.requestTimer), 
        n.isComposition = !0);
    }
    function a(r) {
        r.preventDefault();
        var o = n.activeElements.get(this), i = r.clipboardData.getData("text"), s = t.getSelection(), a = r.target, c = s.getRangeAt(0), u = Be(a);
        c.deleteContents(), c.insertNode(document.createTextNode(i)), U.setIn(o.props, this.getAttribute(e.props.contentEditableAttrName), a.textContent), 
        u(i.length);
    }
    function u(t) {
        if (t) {
            var n = t.getAttribute(e.props.contentEditableNodeIdAttrName);
            if (n) return n;
            var r = t.closest("*[".concat(e.props.nodeIdAttrName, "]"));
            return r ? r.getAttribute(e.props.nodeIdAttrName) : void 0;
        }
    }
    e.subscribeTo(it, (function(t) {
        var r, c = t.data.target, u = null === (r = null == c ? void 0 : c.closest) || void 0 === r ? void 0 : r.call(c, "*[".concat(e.props.contentEditableAttrName, "]"));
        u && "true" === u.getAttribute("contenteditable") || n.activeElements.forEach((function(t, e) {
            n.activeElements.delete(e), e.removeAttribute("contenteditable"), e.removeAttribute("spellcheck"), 
            e.removeEventListener("input", o), e.removeEventListener("compositionstart", s), 
            e.removeEventListener("compositionupdate", s), e.removeEventListener("compositionend", s), 
            e.removeEventListener("past", a), document.removeEventListener("selectionchange", i);
        }));
    })), e.subscribeTo(st, (function(t) {
        var c, l = t.data.target, d = null === (c = null == l ? void 0 : l.closest) || void 0 === c ? void 0 : c.call(l, "*[".concat(e.props.contentEditableAttrName, "]")), h = e.workbench.activeWorkspace, p = h.operation.tree;
        if (d) {
            var f = d.getAttribute("contenteditable");
            if ("false" === f || !f) {
                var v = u(d);
                if (v) {
                    var g = p.findById(v);
                    g && (n.activeElements.set(d, g), d.setAttribute("spellcheck", "false"), d.setAttribute("contenteditable", "true"), 
                    d.focus(), d.addEventListener("input", o), d.addEventListener("compositionstart", s), 
                    d.addEventListener("compositionupdate", s), d.addEventListener("compositionend", s), 
                    d.addEventListener("keydown", r), d.addEventListener("paste", a), document.addEventListener("selectionchange", i), 
                    Le(d));
                }
            }
        }
    }));
}, function(t) {
    t.subscribeTo(rt, (function(e) {
        var n, r, o = e.data.target, i = null !== (r = null === (n = e.context) || void 0 === n ? void 0 : n.workspace) && void 0 !== r ? r : t.workbench.activeWorkspace, s = null == o ? void 0 : o.closest("*[".concat(t.props.nodeTranslateAttrName, "]"));
        if (i) {
            var a = i.operation.transformHelper;
            if (s) {
                var c = s.getAttribute(t.props.nodeTranslateAttrName);
                if (c) {
                    var u = s.closest("*[".concat(t.props.nodeSelectionIdAttrName, "]"));
                    if (u) {
                        var l = u.getAttribute(t.props.nodeSelectionIdAttrName);
                        if (l) {
                            var d = t.findNodeById(l);
                            d && a.dragStart({
                                dragNodes: [ d ],
                                type: "translate"
                            });
                        }
                    }
                }
            }
        }
    })), t.subscribeTo(nt, (function(e) {
        var n, r;
        if (t.cursor.dragType === Kt.Translate) {
            var o = null !== (r = null === (n = e.context) || void 0 === n ? void 0 : n.workspace) && void 0 !== r ? r : t.workbench.activeWorkspace, i = null == o ? void 0 : o.operation.transformHelper, s = i.dragNodes;
            s.length && (i.dragMove(), s.forEach((function(t) {
                var e = t.getElement();
                i.translate(t, (function(t) {
                    e.style.position = "absolute", e.style.left = "0px", e.style.top = "0px", e.style.transform = "translate3d(".concat(t.x, "px,").concat(t.y, "px,0)");
                }));
            })));
        }
    })), t.subscribeTo(ot, (function(e) {
        var n, r;
        if (t.cursor.dragType === Kt.Translate) {
            var o = null !== (r = null === (n = e.context) || void 0 === n ? void 0 : n.workspace) && void 0 !== r ? r : t.workbench.activeWorkspace, i = null == o ? void 0 : o.operation.transformHelper;
            i && i.dragEnd();
        }
    }));
}, function(t) {
    var e = function(e) {
        var n = null == e ? void 0 : e.closest("*[".concat(t.props.nodeResizeHandlerAttrName, "]"));
        if (n) {
            var r = n.getAttribute(t.props.nodeResizeHandlerAttrName);
            if (r) {
                var o = n.closest("*[".concat(t.props.nodeSelectionIdAttrName, "]"));
                if (o) {
                    var i = o.getAttribute(t.props.nodeSelectionIdAttrName);
                    if (i) {
                        var s = t.findNodeById(i);
                        if (s) return {
                            direction: r,
                            node: s,
                            element: o
                        };
                    }
                }
            }
        }
    };
    t.subscribeTo(rt, (function(n) {
        var r, o, i = n.data.target, s = null !== (o = null === (r = n.context) || void 0 === r ? void 0 : r.workspace) && void 0 !== o ? o : t.workbench.activeWorkspace;
        if (s) {
            var a = e(i), c = s.operation.transformHelper;
            if (a) {
                var u = a.element.closest("*[".concat(t.props.nodeSelectionIdAttrName, "]"));
                if (u) {
                    var l = u.getAttribute(t.props.nodeSelectionIdAttrName);
                    if (l) {
                        var d = t.findNodeById(l);
                        d && c.dragStart({
                            dragNodes: [ d ],
                            type: "resize",
                            direction: a.direction
                        });
                    }
                }
            }
        }
    })), t.subscribeTo(nt, (function(e) {
        var n, r;
        if (t.cursor.dragType === Kt.Resize) {
            var o = null !== (r = null === (n = e.context) || void 0 === n ? void 0 : n.workspace) && void 0 !== r ? r : t.workbench.activeWorkspace, i = null == o ? void 0 : o.operation.transformHelper, s = i.dragNodes;
            s.length && (i.dragMove(), s.forEach((function(t) {
                var e = t.getElement();
                i.resize(t, (function(t) {
                    e.style.width = t.width + "px", e.style.height = t.height + "px", e.style.position = "absolute", 
                    e.style.left = "0px", e.style.top = "0px", e.style.transform = "translate3d(".concat(t.x, "px,").concat(t.y, "px,0)");
                }));
            })));
        }
    })), t.subscribeTo(ot, (function(e) {
        var n, r;
        if (t.cursor.dragType === Kt.Resize) {
            var o = null !== (r = null === (n = e.context) || void 0 === n ? void 0 : n.workspace) && void 0 !== r ? r : t.workbench.activeWorkspace, i = null == o ? void 0 : o.operation.transformHelper;
            i && i.dragEnd();
        }
    }));
} ], en = [ Ft, Vt, zt, qt, Ht, $t ], nn = [ Ve, Xe, ze, Ye, Fe, He, Ue, Je, Qe, Ke, _e, $e ], rn = function(t) {
    return (null == t ? void 0 : t.Behavior) && on(t.Behavior);
}, on = function(t) {
    return Array.isArray(t) && t.every(sn);
}, sn = function(t) {
    return (null == t ? void 0 : t.name) || (null == t ? void 0 : t.selector) || (null == t ? void 0 : t.extends) || (null == t ? void 0 : t.designerProps) || (null == t ? void 0 : t.designerLocales);
}, an = function(t) {
    return (null == t ? void 0 : t.Resource) && cn(t.Resource);
}, cn = function(t) {
    return Array.isArray(t) && t.every(un);
}, un = function(t) {
    return (null == t ? void 0 : t.node) && !!t.node.isSourceNode && t.node instanceof de;
}, ln = function() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n = {};
    return t.forEach((function(t) {
        Zt(n, t);
    })), n;
}, dn = function() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return t.reduce((function(t, e) {
        if (g(e)) return t.concat(dn.apply(void 0, tt([], Q(e), !1)));
        var n = (e || {}).selector;
        return n ? ("string" == typeof n && (e.selector = function(t) {
            return t.componentName === n;
        }), t.concat(e)) : t;
    }), []);
}, hn = function() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return t.reduce((function(t, e) {
        return t.concat(G(G({}, e), {
            node: new de({
                componentName: "$$ResourceNode$$",
                isSourceNode: !0,
                children: e.elements || []
            })
        }));
    }), []);
}, pn = function(t) {
    void 0 === t && (t = {});
    var e = t.drivers || [], n = t.effects || [], r = t.shortcuts || [];
    return q((function() {
        return new We(G(G({}, t), {
            effects: tt(tt([], Q(n), !1), Q(tn), !1),
            drivers: tt(tt([], Q(e), !1), Q(en), !1),
            shortcuts: tt(tt([], Q(r), !1), Q(nn), !1)
        }));
    }));
}, fn = function(t) {
    void 0 === t && (t = {});
    var e = t.extConfig, n = Z(t, [ "extConfig" ]), r = K(G({}, n));
    return Object.assign(r, {
        extConfig: G({}, e)
    }), r;
}, vn = Object.freeze({
    __proto__: null,
    isBehaviorHost: rn,
    isBehaviorList: on,
    isBehavior: sn,
    isResourceHost: an,
    isResourceList: cn,
    isResource: un,
    createLocales: ln,
    createBehavior: dn,
    createResource: hn,
    createDesigner: pn,
    GlobalRegistry: ie,
    Engine: We,
    get ScreenType() {
        return Se;
    },
    get ScreenStatus() {
        return ke;
    },
    Screen: Te,
    get CursorStatus() {
        return Ut;
    },
    get CursorDragType() {
        return Kt;
    },
    get CursorType() {
        return _t;
    },
    Cursor: Ee,
    Operation: Ce,
    Viewport: he,
    TreeNode: de,
    Workbench: Ae,
    Workspace: Oe,
    Selection: pe,
    get ClosestPosition() {
        return ye;
    },
    MoveHelper: Re,
    Keyboard: Ie,
    KeyCode: W,
    Shortcut: De,
    History: Pe,
    DragMoveEvent: nt,
    DragStartEvent: rt,
    DragStopEvent: ot,
    MouseClickEvent: it,
    MouseDoubleClickEvent: st,
    MouseMoveEvent: at,
    KeyDownEvent: ut,
    KeyUpEvent: lt,
    DragNodeEvent: ht,
    DropNodeEvent: pt,
    HoverNodeEvent: ft,
    InsertAfterEvent: vt,
    InsertBeforeEvent: gt,
    InsertChildrenEvent: yt,
    PrependNodeEvent: mt,
    RemoveNodeEvent: wt,
    SelectNodeEvent: bt,
    UnSelectNodeEvent: Et,
    UpdateChildrenEvent: Nt,
    UpdateNodePropsEvent: St,
    WrapNodeEvent: kt,
    CloneNodeEvent: Rt,
    AppendNodeEvent: Ct,
    FromNodeEvent: Pt,
    ViewportResizeEvent: At,
    ViewportScrollEvent: Dt,
    AddWorkspaceEvent: It,
    RemoveWorkspaceEvent: Tt,
    SwitchWorkspaceEvent: Wt,
    HistoryUndoEvent: Lt,
    HistoryRedoEvent: Bt,
    HistoryGotoEvent: jt,
    HistoryPushEvent: Xt,
    createExtForm: fn
});

(null === (je = null == t ? void 0 : t["FormCreated"]) || void 0 === je ? void 0 : je["Core"]) ? module.exports && (module.exports = G({
    __esModule: !0
}, t["FormCreated"]["Core"])) : (t["FormCreated"] = t["FormCreated"] || {}, t["FormCreated"].Core = vn);

export { It as AddWorkspaceEvent, Ct as AppendNodeEvent, Rt as CloneNodeEvent, ye as ClosestPosition, Ee as Cursor, Kt as CursorDragType, Ut as CursorStatus, _t as CursorType, nt as DragMoveEvent, ht as DragNodeEvent, rt as DragStartEvent, ot as DragStopEvent, pt as DropNodeEvent, We as Engine, Pt as FromNodeEvent, ie as GlobalRegistry, Pe as History, jt as HistoryGotoEvent, Xt as HistoryPushEvent, Bt as HistoryRedoEvent, Lt as HistoryUndoEvent, ft as HoverNodeEvent, vt as InsertAfterEvent, gt as InsertBeforeEvent, yt as InsertChildrenEvent, ut as KeyDownEvent, lt as KeyUpEvent, Ie as Keyboard, it as MouseClickEvent, st as MouseDoubleClickEvent, at as MouseMoveEvent, Re as MoveHelper, Ce as Operation, mt as PrependNodeEvent, wt as RemoveNodeEvent, Tt as RemoveWorkspaceEvent, Te as Screen, ke as ScreenStatus, Se as ScreenType, bt as SelectNodeEvent, pe as Selection, De as Shortcut, Wt as SwitchWorkspaceEvent, de as TreeNode, Et as UnSelectNodeEvent, Nt as UpdateChildrenEvent, St as UpdateNodePropsEvent, he as Viewport, At as ViewportResizeEvent, Dt as ViewportScrollEvent, Ae as Workbench, Oe as Workspace, kt as WrapNodeEvent, dn as createBehavior, pn as createDesigner, fn as createExtForm, ln as createLocales, hn as createResource, sn as isBehavior, rn as isBehaviorHost, on as isBehaviorList, un as isResource, an as isResourceHost, cn as isResourceList };
