var t = function(e, n) {
    return t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }, t(e, n);
};

function e(e, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    function r() {
        this.constructor = e;
    }
    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
    new r);
}

var n = function() {
    return n = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n], 
        e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
    }, n.apply(this, arguments);
};

function r(t, e) {
    var n = "function" == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var r, i, o = n.call(t), u = [];
    try {
        for (;(void 0 === e || e-- > 0) && !(r = o.next()).done; ) u.push(r.value);
    } catch (s) {
        i = {
            error: s
        };
    } finally {
        try {
            r && !r.done && (n = o["return"]) && n.call(o);
        } finally {
            if (i) throw i.error;
        }
    }
    return u;
}

"function" == typeof SuppressedError && SuppressedError;

var i = function(t) {
    return function(e) {
        return null != e && (Array.isArray(t) ? t : [ t ]).some((function(t) {
            return o(e) === "[object ".concat(t, "]");
        }));
    };
}, o = function(t) {
    return Object.prototype.toString.call(t);
}, u = i([ "Function", "AsyncFunction", "GeneratorFunction" ]), s = i("Window"), a = function(t) {
    return (null == t ? void 0 : t["nodeName"]) || (null == t ? void 0 : t["tagName"]);
}, h = Array.isArray, c = i("Object"), l = i("String"), f = i("Boolean"), d = i("Number"), y = function(t) {
    return "object" == typeof t;
}, v = i("RegExp"), p = function(t) {
    return null != t;
}, b = function(t) {
    return !isNaN(t) && d(t);
}, m = Symbol("UNSUBSCRIBE_ID_SYMBOL"), g = function() {
    function t() {
        var t = this;
        this.subscribers = {
            index: 0
        }, this.unsubscribe = function(e) {
            if (null != e) u(e) ? delete t.subscribers[e[m]] : delete t.subscribers[e]; else for (var n in t.subscribers) t.unsubscribe(n);
        };
    }
    return t.prototype.dispatch = function(t, e) {
        var n = !1;
        for (var r in this.subscribers) u(this.subscribers[r]) && (t["context"] = e, !1 === this.subscribers[r](t) && (n = !0));
        return !n;
    }, t.prototype.subscribe = function(t) {
        var e, n = this;
        u(t) && (e = this.subscribers.index + 1, this.subscribers[e] = t, this.subscribers.index++);
        var r = function() {
            n.unsubscribe(e);
        };
        return r[m] = e, r;
    }, t;
}();

var w = function() {
    try {
        if ("undefined" != typeof self) return self;
    } catch (t) {}
    try {
        if ("undefined" != typeof w) return w;
    } catch (t) {}
    try {
        if ("undefined" != typeof global) return global;
    } catch (t) {}
    return Function("return this")();
}(), x = Symbol("ATTACHED_SYMBOL"), S = Symbol("__EVENTS_SYMBOL__"), E = Symbol("EVENTS_ONCE_SYMBOL"), M = Symbol("EVENTS_BATCH_SYMBOL"), O = Symbol("DRIVER_INSTANCES_SYMBOL"), A = function(t) {
    return "onlyOne" === t || "onlyChild" === t || "onlyParent" === t;
}, T = function() {
    function t(t, e) {
        this.container = document, this.contentWindow = w, this.engine = t, this.context = e;
    }
    return t.prototype.dispatch = function(t) {
        return this.engine.dispatch(t, this.context);
    }, t.prototype.subscribe = function(t) {
        return this.engine.subscribe(t);
    }, t.prototype.subscribeTo = function(t, e) {
        return this.engine.subscribeTo(t, e);
    }, t.prototype.subscribeWith = function(t, e) {
        return this.engine.subscribeWith(t, e);
    }, t.prototype.attach = function(t) {}, t.prototype.detach = function(t) {}, t.prototype.eventTarget = function(t) {
        var e;
        return "resize" !== t && "scroll" !== t || this.container !== (null === (e = this.contentWindow) || void 0 === e ? void 0 : e.document) ? this.container : this.contentWindow;
    }, t.prototype.addEventListener = function(t, e, n) {
        var r, i, o, u, s = this.eventTarget(t);
        if (A(null == n ? void 0 : n.mode)) {
            s[E] = s[E] || {};
            var a = this["constructor"];
            a[E] = a[E] || {};
            var h = s[E][t], c = a[E][t];
            if (!h) {
                if (c) if ("onlyChild" === n.mode) c.contains(s) && (c.removeEventListener(t, c[E][t], n), 
                delete c[E][t]); else if ("onlyParent" === n.mode && c.contains(s)) return;
                s.addEventListener(t, e, n), s[E][t] = e, a[E][t] = s;
            }
        } else s[S] = s[S] || {}, s[S][t] = s[S][t] || new Map, (null === (i = null === (r = s[S][t]) || void 0 === r ? void 0 : r.get) || void 0 === i ? void 0 : i.call(r, e)) || (s.addEventListener(t, e, n), 
        null === (u = null === (o = s[S][t]) || void 0 === o ? void 0 : o.set) || void 0 === u || u.call(o, e, !0));
    }, t.prototype.removeEventListener = function(t, e, n) {
        var r, i, o = this.eventTarget(t);
        if (A(null == n ? void 0 : n.mode)) {
            var u = this["constructor"];
            u[E] = u[E] || {}, o[E] = o[E] || {}, delete u[E][t], delete o[E][t], o.removeEventListener(t, e, n);
        } else o[S] = o[S] || {}, o[S][t] = o[S][t] || new Map, null === (i = null === (r = o[S][t]) || void 0 === r ? void 0 : r.delete) || void 0 === i || i.call(r, e), 
        o.removeEventListener(t, e, n);
    }, t.prototype.batchAddEventListener = function(t, e, n) {
        this.engine[O] = this.engine[O] || [], this.engine[O].includes(this) || this.engine[O].push(this), 
        this.engine[O].forEach((function(r) {
            var i = r.eventTarget(t);
            i[M] = i[M] || {}, i[M][t] || (i.addEventListener(t, e, n), i[M][t] = e);
        }));
    }, t.prototype.batchRemoveEventListener = function(t, e, n) {
        this.engine[O] = this.engine[O] || [], this.engine[O].forEach((function(r) {
            var i = r.eventTarget(t);
            i[M] = i[M] || {}, i.removeEventListener(t, e, n), delete i[M][t];
        }));
    }, t;
}(), k = function(t) {
    function n(e) {
        var n = t.call(this) || this;
        return n.drivers = [], n.containers = [], h(null == e ? void 0 : e.effects) && e.effects.forEach((function(t) {
            t(n);
        })), h(null == e ? void 0 : e.drivers) && (n.drivers = e.drivers), n;
    }
    return e(n, t), n.prototype.subscribeTo = function(t, e) {
        return this.subscribe((function(n) {
            if (t && n instanceof t) return e(n);
        }));
    }, n.prototype.subscribeWith = function(t, e) {
        return this.subscribe((function(n) {
            if (h(t)) {
                if (t.includes(null == n ? void 0 : n.type)) return e(n);
            } else if (t && (null == n ? void 0 : n.type) === t) return e(n);
        }));
    }, n.prototype.attachEvents = function(t, e, n) {
        var r = this;
        if (void 0 === e && (e = w), t) return s(t) ? this.attachEvents(t.document, t, n) : void (t[x] || (t[x] = this.drivers.map((function(i) {
            var o = new i(r, n);
            return o.contentWindow = e, o.container = t, o.attach(t), o;
        })), this.containers.includes(t) || this.containers.push(t)));
    }, n.prototype.detachEvents = function(t) {
        var e = this;
        if (t) return s(t) ? this.detachEvents(t.document) : void (t[x] && (t[x].forEach((function(e) {
            e.detach(t);
        })), this[O] = this[O] || [], this[O] = this[O].reduce((function(e, n) {
            return n.container === t ? (n.detach(t), e) : e.concat(n);
        }), []), this.containers = this.containers.filter((function(e) {
            return e !== t;
        })), delete t[x], delete t[S], delete t[E], delete t[M]));
        this.containers.forEach((function(t) {
            e.detachEvents(t);
        }));
    }, n;
}(g), F = function(t, e) {
    void 0 === t && (t = 10);
    var n = null, r = null, i = function() {
        n || (n = requestAnimationFrame((function(o) {
            null === r && (r = o);
            var u = o - r, s = u / 1e3 * t;
            e(s), n = null, i();
        })));
    };
    return i(), function() {
        n && (cancelAnimationFrame(n), n = null), r = null;
    };
}, L = function(t, e) {
    return void 0 === t && (t = 0), void 0 === e && (e = 1 / 0), e >= t ? (e - t) / e : 0;
}, N = function(t, e, n, r) {
    void 0 === r && (r = 80);
    var i, o, u, s, a = n.left, h = n.right, c = n.top, l = n.bottom, f = t.x, d = t.y;
    "x" === e ? (i = a, o = h, u = f) : (i = c, o = l, u = d);
    var y = o - i, v = y > 400 ? 100 : y / 3;
    return o - u < v ? {
        direction: "end",
        speedFactor: s,
        speed: r * L(o - u, v)
    } : u - i < v ? {
        direction: "begin",
        speedFactor: s,
        speed: r * L(u - i, v)
    } : null;
}, _ = function(t, e, n, r) {
    if (t) if (s(t)) "x" === e ? t.scrollBy({
        left: n,
        behavior: "smooth"
    }) : t.scrollBy({
        top: n,
        behavior: "smooth"
    }), u(r) && r(n); else if ("x" === e) {
        if (t.scrollLeft + n > t.scrollWidth) return;
        t.scrollLeft += n, u(r) && r(t.scrollLeft);
    } else {
        if (t.scrollTop + n > t.scrollHeight) return;
        t.scrollTop += n, u(r) && r(t.scrollTop);
    }
}, P = function(t, e, n, r, i) {
    return F(r, (function(r) {
        _(t, e, "begin" === n ? 0 - r : r, i);
    }));
};

function I(t) {
    return (null == t ? void 0 : t.x) && (null == t ? void 0 : t.y) && (null == t ? void 0 : t.width) && (null == t ? void 0 : t.height);
}

function R(t) {
    return b(null == t ? void 0 : t.x) && b(null == t ? void 0 : t.y);
}

function B(t) {
    return R(null == t ? void 0 : t.start) && R(null == t ? void 0 : t.end);
}

var D, C = function(t, e) {
    this.x = t, this.y = e;
}, U = function() {
    function t(t, e, n, r) {
        this.x = 0, this.y = 0, this.width = 0, this.height = 0, this.x = t, this.y = e, 
        this.width = n, this.height = r;
    }
    return Object.defineProperty(t.prototype, "left", {
        get: function() {
            return this.x;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            return this.x + this.width;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "top", {
        get: function() {
            return this.y;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "bottom", {
        get: function() {
            return this.y + this.height;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), j = function(t, e) {
    this.start = n({}, t), this.end = n({}, e);
};

function z(t, e, n) {
    void 0 === n && (n = !0);
    var r = function(t) {
        if (!n) return 0;
        var e = .1 * t;
        return e > 20 ? 20 : e < 10 ? 10 : e;
    };
    return t.x >= e.x + r(e.width) && t.x <= e.x + e.width - r(e.width) && t.y >= e.y + r(e.height) && t.y <= e.y + e.height - r(e.height);
}

function W(t, e) {
    return (null == t ? void 0 : t.x) === (null == e ? void 0 : e.x) && t.y === e.y && t.width === e.width && t.height === e.height;
}

function V(t) {
    var e = new C(t.x, t.y), n = new C(t.x + t.width, t.y), r = new C(t.x + t.width, t.y + t.height), i = new C(t.x, t.y + t.height);
    return [ e, n, r, i ];
}

function H(t, e) {
    var n = r(V(t), 4), i = n[0], o = n[1], u = n[2], s = n[3];
    return z(i, e, !1) && z(o, e, !1) && z(u, e, !1) && z(s, e, !1);
}

function Y(t, e) {
    var n = new C(t.x + t.width / 2, t.y + t.height / 2), r = new C(e.x + e.width / 2, e.y + e.height / 2);
    return Math.abs(n.x - r.x) <= t.width / 2 + e.width / 2 && Math.abs(n.y - r.y) <= t.height / 2 + e.height / 2;
}

function G(t, e) {
    var n = z(t, e);
    return t.x <= e.x + e.width / 2 ? t.y <= e.y + e.height / 2 ? n ? D.Inner1 : D.Outer1 : n ? D.Inner4 : D.Outer4 : t.y <= e.y + e.height / 2 ? n ? D.Inner2 : D.Outer2 : n ? D.Inner3 : D.Outer3;
}

function q(t, e) {
    var n = Math.min(Math.abs(t.x - e.x), Math.abs(t.x - (e.x + e.width))), r = Math.min(Math.abs(t.y - e.y), Math.abs(t.y - (e.y + e.height)));
    return t.x >= e.x && t.x <= e.x + e.width && (n = 0), t.y >= e.y && t.y <= e.y + e.height && (r = 0), 
    Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
}

function J(t, e) {
    var n = Math.abs(t.y - e.y), r = Math.abs(t.y - (e.y + e.height)), i = Math.abs(t.x - e.x), o = Math.abs(t.x - (e.x + e.width));
    return Math.min(n, r, i, o);
}

function K(t, e, n) {
    return void 0 === n && (n = !1), n ? Math.abs(t.x - e.x) + Math.abs(t.y - e.y) > Math.abs(t.x - (e.x + e.width)) + Math.abs(t.y - (e.y + e.height)) : Math.abs(t.y - e.y) > Math.abs(t.y - (e.y + e.height));
}

function Q(t, e) {
    var n = q(t, e), r = G(t, e);
    return {
        quadrant: r,
        distance: n
    };
}

function X(t) {
    if ((null == t ? void 0 : t.length) && (1 !== (null == t ? void 0 : t.length) || t[0])) {
        var e = 1 / 0, n = -1 / 0, r = 1 / 0, i = -1 / 0;
        return t.forEach((function(t) {
            var o = new U(t.x, t.y, t.width, t.height);
            o.top <= e && (e = o.top), o.bottom >= n && (n = o.bottom), o.left <= r && (r = o.left), 
            o.right >= i && (i = o.right);
        })), new U(r, e, i - r, n - e);
    }
}

function Z(t, e, n, r) {
    void 0 === n && (n = 0), void 0 === r && (r = 0);
    var i = 0, o = 0;
    return e.x + n >= t.x && e.y + r >= t.y ? (i = t.x, o = t.y, new U(i - n, o - r, Math.abs(e.x - t.x + n), Math.abs(e.y - t.y + r))) : e.x + n < t.x && e.y + r < t.y ? (i = e.x, 
    o = e.y, new U(i, o, Math.abs(e.x - t.x + n), Math.abs(e.y - t.y + r))) : e.x + n < t.x && e.y + r >= t.y ? (i = e.x, 
    o = t.y, new U(i - n, o - r, Math.abs(e.x - t.x + n), Math.abs(e.y - t.y + r))) : (i = t.x, 
    o = e.y, new U(i, o, Math.abs(e.x - t.x + n), Math.abs(e.y - t.y + r)));
}

function $(t) {
    return {
        v: [ new j(new C(t.x, t.y), new C(t.x, t.y + t.height)), new j(new C(t.x + t.width / 2, t.y), new C(t.x + t.width / 2, t.y + t.height)), new j(new C(t.x + t.width, t.y), new C(t.x + t.width, t.y + t.height)) ],
        h: [ new j(new C(t.x, t.y), new C(t.x + t.width, t.y)), new j(new C(t.x, t.y + t.height / 2), new C(t.x + t.width, t.y + t.height / 2)), new j(new C(t.x, t.y + t.height), new C(t.x + t.width, t.y + t.height)) ]
    };
}

function tt(t) {
    if (B(t)) {
        var e = t.start.x === t.end.x;
        return new U(t.start.x, t.start.y, e ? 0 : t.end.x - t.start.x, e ? t.end.y - t.start.y : 0);
    }
}

function et(t, e, n) {
    var r = new U(t.x, t.y, t.width, t.height), i = new U(e.x, e.y, e.width, e.height);
    if (!(i.bottom < r.top && i.left > r.right || i.top > r.bottom && i.left > r.right || i.bottom < r.top && i.right < r.left || i.top > r.bottom && i.right < r.left)) {
        if (i.bottom < r.top) {
            var o = r.top - i.bottom, u = Math.min(i.left, r.left), s = Math.max(i.right, r.right);
            if (n && "top" !== n) return;
            return {
                type: "top",
                distance: o,
                rect: new U(u, i.bottom, s - u, o)
            };
        }
        if (i.top > r.bottom) {
            o = i.top - r.bottom, u = Math.min(i.left, r.left), s = Math.max(i.right, r.right);
            if (n && "bottom" !== n) return;
            return {
                type: "bottom",
                distance: o,
                rect: new U(u, r.bottom, s - u, o)
            };
        }
        if (i.right < r.left) {
            o = r.left - i.right;
            var a = Math.min(i.top, r.top), h = Math.max(i.bottom, r.bottom);
            if (n && "left" !== n) return;
            return {
                type: "left",
                distance: o,
                rect: new U(i.right, a, o, h - a)
            };
        }
        if (i.left > r.right) {
            o = i.left - r.right;
            var c = Math.min(i.top, r.top);
            h = Math.max(i.bottom, r.bottom);
            if (n && "right" !== n) return;
            return {
                type: "right",
                distance: o,
                rect: new U(r.right, c, o, h - c)
            };
        }
    }
}

function nt(t, e) {
    if (e.right < t.right && t.left <= e.right) {
        if (e.bottom < t.top) return {
            start: {
                x: e.right,
                y: e.bottom
            },
            end: {
                x: t.right,
                y: e.bottom
            }
        };
        if (e.top > t.bottom) return {
            start: {
                x: e.right,
                y: e.top
            },
            end: {
                x: t.right,
                y: e.top
            }
        };
    } else if (e.left > t.left && t.right >= e.left) {
        if (e.bottom < t.top) return {
            start: {
                x: t.left,
                y: e.bottom
            },
            end: {
                x: e.left,
                y: e.bottom
            }
        };
        if (e.top > t.bottom) return {
            start: {
                x: t.left,
                y: e.top
            },
            end: {
                x: e.left,
                y: e.top
            }
        };
    }
    if (e.top < t.top && t.bottom >= e.top) {
        if (e.right < t.left) return {
            start: {
                x: e.right,
                y: e.bottom
            },
            end: {
                x: e.right,
                y: t.bottom
            }
        };
        if (e.left > t.right) return {
            start: {
                x: e.left,
                y: e.bottom
            },
            end: {
                x: e.left,
                y: t.bottom
            }
        };
    } else if (e.bottom > t.bottom && e.top <= t.bottom) {
        if (e.right < t.left) return {
            start: {
                x: e.right,
                y: t.top
            },
            end: {
                x: e.right,
                y: e.top
            }
        };
        if (e.left > t.right) return {
            start: {
                x: e.left,
                y: t.top
            },
            end: {
                x: e.left,
                y: e.top
            }
        };
    }
}

function rt(t, e) {
    var n, r = (n = e, {
        x: [ n.x, n.x + n.width / 2, n.x + n.width ],
        y: [ n.y, n.y + n.height / 2, n.y + n.height ]
    }), i = t.start.x === t.end.x;
    if (i) return {
        x: o(r.x, t.start.x) - e.x,
        y: 0
    };
    function o(t, e) {
        for (var n = 1 / 0, r = -1, i = 0; i < t.length; i++) {
            var o = Math.abs(t[i] - e);
            n > o && (n = o, r = i);
        }
        return t[r];
    }
    return {
        x: 0,
        y: o(r.y, t.start.y) - e.y
    };
}

function it(t, e) {
    var n, r, i, o, u = 1 / 0;
    if ((null === (n = null == t ? void 0 : t.start) || void 0 === n ? void 0 : n.y) === (null === (r = null == t ? void 0 : t.end) || void 0 === r ? void 0 : r.y)) e.h.forEach((function(e) {
        var n = Math.abs(e.start.y - t.start.y);
        n < u && (u = n);
    })); else {
        if ((null === (i = null == t ? void 0 : t.start) || void 0 === i ? void 0 : i.x) !== (null === (o = null == t ? void 0 : t.end) || void 0 === o ? void 0 : o.x)) throw new Error("can not calculate slash distance");
        e.v.forEach((function(e) {
            var n = Math.abs(e.start.x - t.start.x);
            n < u && (u = n);
        }));
    }
    return u;
}

function ot(t, e) {
    return t.start.x === t.end.x ? new j(new C(t.start.x, t.start.y > e.start.y ? e.start.y : t.start.y), new C(t.start.x, t.end.y > e.end.y ? t.end.y : e.end.y)) : new j(new C(t.start.x > e.start.x ? e.start.x : t.start.x, t.start.y), new C(t.end.x > e.end.x ? t.end.x : e.end.x, t.end.y));
}

function ut(t, e) {
    var n, r, i, o, u, s = 1 / 0;
    if ((null === (n = null == t ? void 0 : t.start) || void 0 === n ? void 0 : n.y) === (null === (r = null == t ? void 0 : t.end) || void 0 === r ? void 0 : r.y)) e.h.forEach((function(e) {
        var n = Math.abs(e.start.y - t.start.y);
        n < s && (s = n, u = e);
    })); else {
        if ((null === (i = null == t ? void 0 : t.start) || void 0 === i ? void 0 : i.x) !== (null === (o = null == t ? void 0 : t.end) || void 0 === o ? void 0 : o.x)) throw new Error("can not calculate slash distance");
        e.v.forEach((function(e) {
            var n = Math.abs(e.start.x - t.start.x);
            n < s && (s = n, u = e);
        }));
    }
    return [ s, u ];
}

(function(t) {
    t["Inner1"] = "I1", t["Inner2"] = "I2", t["Inner3"] = "I3", t["Inner4"] = "I4", 
    t["Outer1"] = "O1", t["Outer2"] = "O2", t["Outer3"] = "O3", t["Outer4"] = "O4";
})(D || (D = {}));

for (var st = 36, at = ""; st--; ) at += st.toString(36);

function ht(t) {
    for (var e = "", n = t || 11; n--; ) e += at[36 * Math.random() | 0];
    return e;
}

var ct = function(t, e) {
    return u(e) ? t instanceof e : !!l(e) && (!!w[e] && t instanceof w[e]);
}, lt = [ [ "Map", function(t) {
    return new Map(t);
} ], [ "WeakMap", function(t) {
    return new WeakMap(t);
} ], [ "WeakSet", function(t) {
    return new WeakSet(t);
} ], [ "Set", function(t) {
    return new Set(t);
} ], [ "Date", function(t) {
    return new Date(t);
} ], "FileList", "File", "URL", "RegExp", [ "Promise", function(t) {
    return new Promise((function(e, n) {
        return t.then(e, n);
    }));
} ] ], ft = function(t) {
    for (var e = 0; e < lt.length; e++) {
        var n = lt[e];
        if (Array.isArray(n) && n[0]) {
            if (ct(t, n[0])) return n[1] ? n[1] : n[0];
        } else if (ct(t, n)) return n;
    }
}, dt = function(t) {
    var e;
    return Array.isArray(t) ? t.slice(0) : ft(t) ? (e = ft(t), u(e) ? e(t) : t) : "object" == typeof t && t ? n({}, t) : void 0;
}, yt = function(t, e) {
    var n;
    if (Array.isArray(t)) return t.map((function(t) {
        return yt(t, e);
    }));
    if (ft(t)) return n = ft(t), u(n) ? n(t) : t;
    if ("object" == typeof t && t) {
        if ("$$typeof" in t && "_owner" in t) return t;
        if (t._isAMomentObject) return t;
        if (t._isJSONSchemaObject) return t;
        if (u(t.toJS)) return t;
        if (u(t.toJSON)) return t;
        if (Object.getOwnPropertySymbols(t || {}).length) return t;
        var r = {};
        for (var i in t) Object.hasOwnProperty.call(t, i) && (u(e) ? e(t[i], i) ? r[i] = yt(t[i], e) : r[i] = t[i] : r[i] = yt(t[i], e));
        return r;
    }
    return t;
}, vt = Symbol("newer"), pt = Symbol("older");

function bt(t, e) {
    this.key = t, this.value = e, this[vt] = void 0, this[pt] = void 0;
}

var mt = function() {
    function t(t, e) {
        "number" != typeof t && (e = t, t = 0), this.size = 0, this.limit = t, this.oldest = this.newest = void 0, 
        this._keymap = new Map, e && (this.assign(e), t < 1 && (this.limit = this.size));
    }
    return t.prototype._markEntryAsUsed = function(t) {
        t !== this.newest && (t[vt] && (t === this.oldest && (this.oldest = t[vt]), t[vt][pt] = t[pt]), 
        t[pt] && (t[pt][vt] = t[vt]), t[vt] = void 0, t[pt] = this.newest, this.newest && (this.newest[vt] = t), 
        this.newest = t);
    }, t.prototype.assign = function(t) {
        var e, n = this.limit || Number.MAX_VALUE;
        this._keymap.clear();
        for (var r = t[Symbol.iterator](), i = r.next(); !i.done; i = r.next()) {
            var o = new bt(i.value[0], i.value[1]);
            if (this._keymap.set(o.key, o), e ? (e[vt] = o, o[pt] = e) : this.oldest = o, e = o, 
            0 == n--) throw new Error("overflow");
        }
        this.newest = e, this.size = this._keymap.size;
    }, t.prototype.get = function(t) {
        var e = this._keymap.get(t);
        if (e) return this._markEntryAsUsed(e), e.value;
    }, t.prototype.set = function(t, e) {
        var n = this._keymap.get(t);
        return n ? (n.value = e, this._markEntryAsUsed(n), this) : (this._keymap.set(t, n = new bt(t, e)), 
        this.newest ? (this.newest[vt] = n, n[pt] = this.newest) : this.oldest = n, this.newest = n, 
        ++this.size, this.size > this.limit && this.shift(), this);
    }, t.prototype.shift = function() {
        var t = this.oldest;
        if (t) return this.oldest[vt] ? (this.oldest = this.oldest[vt], this.oldest[pt] = void 0) : (this.oldest = void 0, 
        this.newest = void 0), t[vt] = t[pt] = void 0, this._keymap.delete(t.key), --this.size, 
        [ t.key, t.value ];
    }, t.prototype.find = function(t) {
        var e = this._keymap.get(t);
        return e ? e.value : void 0;
    }, t.prototype.has = function(t) {
        return this._keymap.has(t);
    }, t.prototype.delete = function(t) {
        var e = this._keymap.get(t);
        if (e) return this._keymap.delete(e.key), e[vt] && e[pt] ? (e[pt][vt] = e[vt], e[vt][pt] = e[pt]) : e[vt] ? (e[vt][pt] = void 0, 
        this.oldest = e[vt]) : e[pt] ? (e[pt][vt] = void 0, this.newest = e[pt]) : this.oldest = this.newest = void 0, 
        this.size--, e.value;
    }, t.prototype.clear = function() {
        this.oldest = this.newest = void 0, this.size = 0, this._keymap.clear();
    }, t.prototype.keys = function() {
        return new wt(this.oldest);
    }, t.prototype.values = function() {
        return new xt(this.oldest);
    }, t.prototype.entries = function() {}, t.prototype.forEach = function(t, e) {
        "object" != typeof e && (e = this);
        for (var n = this.oldest; n; ) t.call(e, n.value, n.key, this), n = n[vt];
    }, t.prototype.toJSON = function() {
        for (var t = new Array(this.size), e = 0, n = this.oldest; n; ) t[e++] = {
            key: n.key,
            value: n.value
        }, n = n[vt];
        return t;
    }, t.prototype.toString = function() {
        for (var t = "", e = this.oldest; e; ) t += String(e.key) + ":" + e.value, e = e[vt], 
        e && (t += " < ");
        return t;
    }, t.prototype[Symbol.iterator] = function() {
        return new gt(this.oldest);
    }, t;
}(), gt = function() {
    function t(t) {
        this.entry = t;
    }
    return t.prototype[Symbol.iterator] = function() {
        return this;
    }, t.prototype.next = function() {
        var t = this.entry;
        return t ? (this.entry = t[vt], {
            done: !1,
            value: [ t.key, t.value ]
        }) : {
            done: !0,
            value: void 0
        };
    }, t;
}(), wt = function() {
    function t(t) {
        this.entry = t;
    }
    return t.prototype[Symbol.iterator] = function() {
        return this;
    }, t.prototype.next = function() {
        var t = this.entry;
        return t ? (this.entry = t[vt], {
            done: !1,
            value: t.key
        }) : {
            done: !0,
            value: void 0
        };
    }, t;
}(), xt = function() {
    function t(t) {
        this.entry = t;
    }
    return t.prototype[Symbol.iterator] = function() {
        return this;
    }, t.prototype.next = function() {
        var t = this.entry;
        return t ? (this.entry = t[vt], {
            done: !1,
            value: t.value
        }) : {
            done: !0,
            value: void 0
        };
    }, t;
}(), St = function() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return function(e) {
        return t.reduce((function(t, e) {
            return e(t);
        }), e);
    };
}, Et = function(t) {
    return h(t) ? t : t ? [ t ] : [];
};

function Mt(t, e, n) {
    if (h(t) || l(t)) {
        if (n) {
            for (var r = t.length - 1; r >= 0; r--) if (!1 === e(t[r], r)) return;
        } else for (r = 0; r < t.length; r++) if (!1 === e(t[r], r)) return;
    } else if (y(t)) {
        var i = void 0;
        for (i in t) if (Object.hasOwnProperty.call(t, i) && !1 === e(t[i], i)) return;
    }
}

function Ot(t, e, n) {
    var r = h(t) || l(t) ? [] : {};
    return Mt(t, (function(t, n) {
        var i = e(t, n);
        h(r) ? r.push(i) : r[n] = i;
    }), n), r;
}

function At(t, e, n, r) {
    var i = n;
    return Mt(t, (function(t, n) {
        i = e(i, t, n);
    }), r), i;
}

function Tt(t, e, n) {
    var r = !0;
    return Mt(t, (function(t, n) {
        if (!e(t, n)) return r = !1, !1;
    }), n), r;
}

function kt(t, e, n) {
    var r = !1;
    return Mt(t, (function(t, n) {
        if (e(t, n)) return r = !0, !1;
    }), n), r;
}

function Ft(t, e, n) {
    var r = -1;
    return Mt(t, (function(t, n) {
        if (e(t, n)) return r = n, !1;
    }), n), r;
}

function Lt(t, e, n) {
    var r;
    return Mt(t, (function(t, n) {
        if (e(t, n)) return r = t, !1;
    }), n), r;
}

function Nt(t, e, n) {
    return l(t) ? t.includes(e) : kt(t, (function(t) {
        return t === e;
    }), n);
}

function _t(t, e) {
    return !!h(t) && t.some((function(t) {
        return e(t);
    }));
}

var Pt, It = function(t) {
    return Et(t).reduce((function(t, e) {
        return h(e) ? t.concat(It(e)) : t.concat(e);
    }), []);
};

(function(t) {
    t["Backspace"] = "Backspace", t["Tab"] = "Tab", t["Enter"] = "Enter", t["Shift"] = "Shift", 
    t["Control"] = "Control", t["Alt"] = "Alt", t["CapsLock"] = "CapsLock", t["Escape"] = "Escape", 
    t["Space"] = " ", t["PageUp"] = "PageUp", t["PageDown"] = "PageDown", t["End"] = "End", 
    t["Home"] = "Home", t["ArrowLeft"] = "ArrowLeft", t["ArrowUp"] = "ArrowUp", t["ArrowRight"] = "ArrowRight", 
    t["ArrowDown"] = "ArrowDown", t["Left"] = "Left", t["Up"] = "Up", t["Right"] = "Right", 
    t["Down"] = "Down", t["Insert"] = "Insert", t["Delete"] = "Delete", t["Zero"] = "0", 
    t["ClosedParen"] = ")", t["One"] = "1", t["ExclamationMark"] = "!", t["Two"] = "2", 
    t["AtSign"] = "@", t["Three"] = "3", t["PoundSign"] = "£", t["Hash"] = "#", t["Four"] = "4", 
    t["DollarSign"] = "$", t["Five"] = "5", t["PercentSign"] = "%", t["Six"] = "6", 
    t["Caret"] = "^", t["Hat"] = "^", t["Seven"] = "7", t["Ampersand"] = "&", t["Eight"] = "8", 
    t["Star"] = "*", t["Asterisk"] = "*", t["Nine"] = "9", t["OpenParen"] = "(", t["a"] = "a", 
    t["b"] = "b", t["c"] = "c", t["d"] = "d", t["e"] = "e", t["f"] = "f", t["g"] = "g", 
    t["h"] = "h", t["i"] = "i", t["j"] = "j", t["k"] = "k", t["l"] = "l", t["m"] = "m", 
    t["n"] = "n", t["o"] = "o", t["p"] = "p", t["q"] = "q", t["r"] = "r", t["s"] = "s", 
    t["t"] = "t", t["u"] = "u", t["v"] = "v", t["w"] = "w", t["x"] = "x", t["y"] = "y", 
    t["z"] = "z", t["A"] = "A", t["B"] = "B", t["C"] = "C", t["D"] = "D", t["E"] = "E", 
    t["F"] = "F", t["G"] = "G", t["H"] = "H", t["I"] = "I", t["J"] = "J", t["K"] = "K", 
    t["L"] = "L", t["M"] = "M", t["N"] = "N", t["O"] = "O", t["P"] = "P", t["Q"] = "Q", 
    t["R"] = "R", t["S"] = "S", t["T"] = "T", t["U"] = "U", t["V"] = "V", t["W"] = "W", 
    t["X"] = "X", t["Y"] = "Y", t["Z"] = "Z", t["Meta"] = "Meta", t["LeftWindowKey"] = "Meta", 
    t["RightWindowKey"] = "Meta", t["Numpad0"] = "0", t["Numpad1"] = "1", t["Numpad2"] = "2", 
    t["Numpad3"] = "3", t["Numpad4"] = "4", t["Numpad5"] = "5", t["Numpad6"] = "6", 
    t["Numpad7"] = "7", t["Numpad8"] = "8", t["Numpad9"] = "9", t["Multiply"] = "*", 
    t["Add"] = "+", t["Subtract"] = "-", t["DecimalPoint"] = ".", t["MSDecimalPoint"] = "Decimal", 
    t["Divide"] = "/", t["F1"] = "F1", t["F2"] = "F2", t["F3"] = "F3", t["F4"] = "F4", 
    t["F5"] = "F5", t["F6"] = "F6", t["F7"] = "F7", t["F8"] = "F8", t["F9"] = "F9", 
    t["F10"] = "F10", t["F11"] = "F11", t["F12"] = "F12", t["NumLock"] = "NumLock", 
    t["ScrollLock"] = "ScrollLock", t["SemiColon"] = ";", t["Equals"] = "=", t["Comma"] = ",", 
    t["Dash"] = "-", t["Period"] = ".", t["UnderScore"] = "_", t["PlusSign"] = "+", 
    t["ForwardSlash"] = "/", t["Tilde"] = "~", t["GraveAccent"] = "`", t["OpenBracket"] = "[", 
    t["ClosedBracket"] = "]", t["Quote"] = "'";
})(Pt || (Pt = {}));

var Rt = function(t) {
    return t.key;
}, Bt = function(t, e) {
    return w["requestIdleCallback"](t, e);
}, Dt = function(t) {
    w["cancelIdleCallback"](t);
}, Ct = new Set([ "A", "ABBR", "ACRONYM", "AUDIO", "B", "BDI", "BDO", "BIG", "BR", "BUTTON", "CANVAS", "CITE", "CODE", "DATA", "DATALIST", "DEL", "DFN", "EM", "EMBED", "I", "IFRAME", "IMG", "INS", "KBD", "LABEL", "MAP", "MARK", "METER", "NOSCRIPT", "OBJECT", "OUTPUT", "PICTURE", "PROGRESS", "Q", "RUBY", "S", "SAMP", "SELECT", "SLOT", "SMALL", "STRONG", "SUB", "SUP", "SVG", "TEMPLATE", "TEXTAREA", "TIME", "U", "TT", "VAR", "VIDEO", "WBR", "INPUT", "SPAN" ]), Ut = function(t, e) {
    return t + parseFloat(e.marginLeft) + parseFloat(e.marginRight) + parseFloat(e.paddingLeft) + parseFloat(e.paddingRight) + parseFloat(e.borderLeftWidth) + parseFloat(e.borderRightWidth);
}, jt = function(t) {
    if (!t) return "vertical";
    var e = t.parentElement;
    if (!e) return "vertical";
    var n = t.tagName, r = e.tagName, i = getComputedStyle(t), o = getComputedStyle(e), u = function() {
        var n = t.getBoundingClientRect().width, r = Ut(n, i), o = e.getBoundingClientRect().width;
        return r.toFixed(0) < o.toFixed(0);
    };
    return "TH" !== n && "TD" !== n || "TR" !== r ? "flex" === o.display && "row" === o.flexDirection || "grid" === o.display && u() ? "horizontal" : Ct.has(n) ? "block" === i.display && ("left" !== i.float && "right" !== i.float || !u()) ? "vertical" : "horizontal" : void 0 : "horizontal";
}, zt = function(t) {
    var e, n, i, o = null === (e = null == t ? void 0 : t.style) || void 0 === e ? void 0 : e.transform;
    if (o) {
        var u = r(null !== (i = null === (n = o.match(/translate(?:3d)?\(\s*([-\d.]+)[a-z]+?[\s,]+([-\d.]+)[a-z]+?(?:[\s,]+([-\d.]+))?[a-z]+?\s*\)/)) || void 0 === n ? void 0 : n.slice(1, 3)) && void 0 !== i ? i : [ 0, 0 ], 2), s = u[0], a = u[1];
        return new C(Number(s), Number(a));
    }
    return new C(Number(t.offsetLeft), Number(t.offsetTop));
}, Wt = function(t) {
    var e, n, r, i = null === (e = null == t ? void 0 : t.style) || void 0 === e ? void 0 : e.transform;
    return i ? Number(null !== (r = null === (n = i.match(/rotate\(\s*([-\d.]+)/)) || void 0 === n ? void 0 : n[1]) && void 0 !== r ? r : 0) : 0;
}, Vt = function(t) {
    var e, n, r, i = null === (e = null == t ? void 0 : t.style) || void 0 === e ? void 0 : e.transform;
    return i ? Number(null !== (r = null === (n = i.match(/scale\(\s*([-\d.]+)/)) || void 0 === n ? void 0 : n[1]) && void 0 !== r ? r : 0) : 0;
}, Ht = function(t) {
    void 0 === t && (t = function() {});
    var e = this;
    this.connected = !1, this.observe = function(t) {
        e.resizeObserver.observe(t), e.performanceObserver.observe({
            entryTypes: [ "paint", "element", "layout-shift", "event" ]
        }), e.mutationObserver.observe(t, {
            attributeFilter: [ "style" ],
            attributes: !0
        }), e.connected = !0;
    }, this.disconnect = function() {
        e.connected && (e.resizeObserver.disconnect(), e.performanceObserver.disconnect(), 
        e.mutationObserver.disconnect()), e.connected = !1;
    }, this.resizeObserver = new ResizeObserver((function() {
        return t();
    })), this.performanceObserver = new PerformanceObserver((function() {
        t();
    })), this.mutationObserver = new MutationObserver((function() {
        return t();
    }));
};

export { k as Event, T as EventDriver, Pt as KeyCode, mt as LRUMap, Ht as LayoutObserver, j as LineSegment, C as Point, U as Rect, D as RectQuadrant, g as Subscribable, N as calcAutoScrollBasicInfo, X as calcBoundingRect, ut as calcClosestEdges, ot as calcCombineSnapLineSegment, q as calcDistanceOfPointToRect, it as calcDistanceOfSnapLineToEdges, J as calcDistancePointToEdge, $ as calcEdgeLinesOfRect, jt as calcElementLayout, Ut as calcElementOuterWidth, Wt as calcElementRotate, Vt as calcElementScale, zt as calcElementTranslate, nt as calcExtendsLineSegmentOfRect, rt as calcOffsetOfSnapLineSegmentToEdge, G as calcQuadrantOfPointToRect, Z as calcRectByStartEndPoint, tt as calcRectOfAxisLineSegment, Q as calcRelativeOfPointToRect, et as calcSpaceBlockOfRect, L as calcSpeedFactor, Dt as cancelIdle, yt as clone, St as compose, F as createUniformSpeedAnimation, Mt as each, Tt as every, Lt as find, Ft as findIndex, It as flat, Rt as getKeyCodeFromEvent, V as getRectPoints, o as getType, w as globalThisPolyfill, Nt as includes, _t as includesWith, ct as instOf, h as isArr, f as isBool, Y as isCrossRectInRect, W as isEqualRect, u as isFn, a as isHTMLElement, B as isLineSegment, K as isNearAfter, d as isNum, y as isObj, c as isPlainObj, R as isPoint, z as isPointInRect, I as isRect, H as isRectInRect, v as isRegExp, l as isStr, p as isValid, b as isValidNumber, s as isWindow, Ot as map, At as reduce, Bt as requestIdle, P as scrollAnimate, dt as shallowClone, kt as some, Et as toArr, ht as uid, _ as updateScrollValue };
