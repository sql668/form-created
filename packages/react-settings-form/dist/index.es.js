import { GlobalRegistry as e } from "@form-created/core";

import t from "@monaco-editor/loader";

import n, { useRef as r, useState as a, useEffect as o, createContext as l, useContext as i, useLayoutEffect as c, Fragment as u, useMemo as s } from "react";

import { Input as d, Popover as m, Upload as p, Button as f, InputNumber as v, Tooltip as g, Select as h, theme as y, Radio as x, Slider as b, Empty as E } from "antd";

import { usePrefix as S, useCssInJs as k, IconWidget as w, useTheme as I, TextWidget as C, useTreeNode as N, useWorkbench as F, useOperation as R, useSelectedNode as T, useSelected as B, NodePathWidget as P } from "@form-created/react";

import { SketchPicker as D } from "react-color";

import A from "classnames";

import z, { loader as L } from "@monaco-editor/react";

import { parse as j, parseExpression as M } from "@babel/parser";

import { uid as V, isStr as W, cancelIdle as O, requestIdle as G, globalThisPolyfill as _ } from "@form-created/shared";

import { createPortal as J } from "react-dom";

import { observer as q, useField as H, Field as U, createSchemaField as X } from "@formily/react";

import { FormLayout as Y, FormItem as K, Select as Z, Input as $, NumberPicker as Q, Radio as ee, DatePicker as te, TimePicker as ne, Switch as re, Space as ae, ArrayItems as oe, ArrayTable as le, FormCollapse as ie, FormGrid as ce, FormTab as ue, Form as se } from "@formily/antd-v5";

import { observable as de } from "@formily/reactive";

import { camelCase as me } from "@formily/shared";

import { onFieldReact as pe, isVoidField as fe, onFieldInputValueChange as ve, createForm as ge } from "@formily/core";

import { Keyframes as he } from "@ant-design/cssinjs";

e.registerDesignerLocales({
    "zh-CN": {
        SettingComponents: {
            ValueInput: {
                expression: "表达式"
            },
            MonacoInput: {
                helpDocument: "帮助文档"
            }
        }
    }
}, {
    "en-US": {
        SettingComponents: {
            ValueInput: {
                expression: "Expression"
            },
            MonacoInput: {
                helpDocument: "Help Documents"
            }
        }
    }
}, {
    "ko-KR": {
        SettingComponents: {
            ValueInput: {
                expression: "표현식"
            },
            MonacoInput: {
                helpDocument: "도움말 문서"
            }
        }
    }
});

var ye = {
    cdn: "//cdn.jsdelivr.net/npm"
}, xe = function(e) {
    ye.cdn = e, t.config({
        paths: {
            vs: "".concat(e, "/monaco-editor@0.30.1/min/vs")
        }
    });
}, be = function() {
    return String(ye.cdn).replace(/\/$/, "");
}, Ee = function(e, t) {
    var n, r;
    return [ (n = {}, n[".".concat(e)] = (r = {
        width: "100%"
    }, r[".ant-popover-inner-content"] = {
        padding: "0 !important",
        userSelect: "none"
    }, r["&-color-tips"] = {
        width: "20px",
        height: "20px",
        borderRadius: "2px",
        border: "1px solid ".concat(t.colorBorder),
        cursor: "pointer"
    }, r), n) ];
}, Se = function(e) {
    var t = r(null), a = S("color-input"), o = e.value, l = k({
        prefix: a,
        styleFun: Ee
    }).hashId;
    return n.createElement("div", {
        ref: t,
        className: A(a, l)
    }, n.createElement(d, {
        value: e.value,
        onChange: function(t) {
            var n;
            null === (n = e.onChange) || void 0 === n || n.call(e, t.target.value);
        },
        placeholder: "Color",
        prefix: n.createElement(m, {
            autoAdjustOverflow: !0,
            trigger: "click",
            overlayInnerStyle: {
                padding: 0
            },
            getPopupContainer: function() {
                return t.current;
            },
            content: n.createElement(D, {
                color: o,
                onChange: function(t) {
                    var n, r = t.rgb;
                    null === (n = e.onChange) || void 0 === n || n.call(e, "rgba(".concat(r.r, ",").concat(r.g, ",").concat(r.b, ",").concat(r.a, ")"));
                }
            })
        }, n.createElement("div", {
            className: A(a + "-color-tips", l),
            style: {
                backgroundColor: o
            }
        }))
    }));
}, ke = function() {
    return ke = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n], 
        t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
    }, ke.apply(this, arguments);
};

function we(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var a = 0;
        for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    }
    return n;
}

function Ie(e, t, n, r) {
    return new (n || (n = Promise))((function(a, o) {
        function l(e) {
            try {
                c(r.next(e));
            } catch (t) {
                o(t);
            }
        }
        function i(e) {
            try {
                c(r["throw"](e));
            } catch (t) {
                o(t);
            }
        }
        function c(e) {
            var t;
            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                e(t);
            }))).then(l, i);
        }
        c((r = r.apply(e, t || [])).next());
    }));
}

function Ce(e, t) {
    var n, r, a, o, l = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1];
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        throw: i(1),
        return: i(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
    }), o;
    function i(e) {
        return function(t) {
            return c([ e, t ]);
        };
    }
    function c(i) {
        if (n) throw new TypeError("Generator is already executing.");
        for (;o && (o = 0, i[0] && (l = 0)), l; ) try {
            if (n = 1, r && (a = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((a = r["return"]) && a.call(r), 
            0) : r.next) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [ 2 & i[0], a.value ]), i[0]) {
              case 0:
              case 1:
                a = i;
                break;

              case 4:
                return l.label++, {
                    value: i[1],
                    done: !1
                };

              case 5:
                l.label++, r = i[1], i = [ 0 ];
                continue;

              case 7:
                i = l.ops.pop(), l.trys.pop();
                continue;

              default:
                if (!(a = l.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    l = 0;
                    continue;
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    l.label = i[1];
                    break;
                }
                if (6 === i[0] && l.label < a[1]) {
                    l.label = a[1], a = i;
                    break;
                }
                if (a && l.label < a[2]) {
                    l.label = a[2], l.ops.push(i);
                    break;
                }
                a[2] && l.ops.pop(), l.trys.pop();
                continue;
            }
            i = t.call(e, l);
        } catch (c) {
            i = [ 6, c ], r = 0;
        } finally {
            n = a = 0;
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        };
    }
}

function Ne(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r, a, o = n.call(e), l = [];
    try {
        for (;(void 0 === t || t-- > 0) && !(r = o.next()).done; ) l.push(r.value);
    } catch (i) {
        a = {
            error: i
        };
    } finally {
        try {
            r && !r.done && (n = o["return"]) && n.call(o);
        } finally {
            if (a) throw a.error;
        }
    }
    return l;
}

"function" == typeof SuppressedError && SuppressedError;

var Fe = function(e, t) {
    var n, r, a;
    return [ (n = {}, n[".".concat(e)] = (r = {
        display: "flex"
    }, r["&-column"] = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
    }, r["&-cell"] = (a = {
        width: "26px",
        height: "26px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        borderRadius: "3px",
        color: "rgba(0, 0, 0, 0.6)",
        margin: "5px"
    }, a["&.active"] = {
        background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))"
    }, a), r), n) ];
}, Re = function(e) {
    var t = S("corner-input"), r = k({
        prefix: t,
        styleFun: Fe
    }), l = r.hashId, i = r.wrapSSR, c = Ne(a(e.value), 2), u = c[0], s = c[1];
    o((function() {
        e.value || s("all");
    }), [ e.value ]);
    var d = function(n) {
        return {
            className: A(t + "-cell", {
                active: u === n
            }),
            onClick: function() {
                var t;
                s(n), null === (t = e.onChange) || void 0 === t || t.call(e, n);
            }
        };
    };
    return i(n.createElement("div", {
        className: A(t, e.className, l),
        style: e.style
    }, n.createElement("div", {
        className: A(t + "-column", l)
    }, n.createElement("div", ke({}, d("topLeft")), "┏"), n.createElement("div", ke({}, d("bottomLeft")), "┗")), n.createElement("div", {
        className: A(t + "-column", l)
    }, n.createElement("div", ke({}, d("all")), "╋")), n.createElement("div", {
        className: A(t + "-column", l)
    }, n.createElement("div", ke({}, d("topRight")), "┓"), n.createElement("div", ke({}, d("bottomRight")), "┛"))));
}, Te = l(null), Be = function(e, t) {
    var n;
    return [ (n = {}, n[".".concat(e)] = {
        width: "100%"
    }, n) ];
}, Pe = function(e) {
    var t = e.className, r = e.style, a = we(e, [ "className", "style" ]), o = S("image-input"), l = k({
        prefix: o,
        styleFun: Be
    }), c = l.hashId, u = l.wrapSSR, s = i(Te);
    return u(n.createElement("div", {
        className: A(o, t, c),
        style: r
    }, n.createElement(d, ke({}, a, {
        onChange: function(e) {
            var t, n;
            null === (t = a.onChange) || void 0 === t || t.call(a, null === (n = null == e ? void 0 : e.target) || void 0 === n ? void 0 : n["value"]);
        },
        prefix: n.createElement(p, {
            action: s.uploadAction,
            itemRender: function() {
                return null;
            },
            maxCount: 1,
            onChange: function(e) {
                var t, n, r = null === (t = e.file) || void 0 === t ? void 0 : t.response, o = (null == r ? void 0 : r.url) || (null == r ? void 0 : r.downloadURL) || (null == r ? void 0 : r.imageURL) || (null == r ? void 0 : r.thumbUrl);
                o && (null === (n = a.onChange) || void 0 === n || n.call(a, o));
            }
        }, n.createElement(w, {
            infer: "CloudUpload",
            style: {
                cursor: "pointer"
            }
        }))
    }))));
}, De = function(e) {
    var t, r, a = function(e) {
        return /url\([^)]+\)/.test(e) ? e : "url(".concat(e, ")");
    };
    return n.createElement(Pe, {
        value: (t = e.value, r = String(t).match(/url\(\s*([^)]+)\s*\)/), (null == r ? void 0 : r[1]) ? null == r ? void 0 : r[1] : t),
        onChange: function(t) {
            var n;
            null === (n = e.onChange) || void 0 === n || n.call(e, a(t));
        }
    });
}, Ae = function(e, t) {
    var n, r;
    return [ (n = {}, n[".".concat(e)] = (r = {
        display: "flex",
        flexDirection: "column"
    }, r["&-row"] = {
        display: "flex",
        justifyContent: "center"
    }, r["&-cell"] = {
        width: "26px",
        height: "26px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        borderRadius: "3px",
        margin: "5px",
        color: t.colorText
    }, r), n) ];
}, ze = function(e) {
    var t = S("position-input"), r = Ne(a(e.value), 2), l = r[0], i = r[1];
    o((function() {
        e.value || i("center");
    }), [ e.value ]);
    var c = function(n) {
        return {
            className: A(t + "-cell", {
                active: l === n
            }, u),
            onClick: function() {
                var t;
                i(n), null === (t = e.onChange) || void 0 === t || t.call(e, n);
            }
        };
    }, u = k({
        prefix: t,
        styleFun: Ae
    }).hashId;
    return n.createElement("div", {
        className: A(t, e.className, u),
        style: e.style
    }, n.createElement("div", {
        className: A(t + "-row", u)
    }, n.createElement("div", ke({}, c("top")), "┳")), n.createElement("div", {
        className: A(t + "-row", u)
    }, n.createElement("div", ke({}, c("left")), "┣"), n.createElement("div", ke({}, c("center")), "╋"), n.createElement("div", ke({}, c("right")), "┫")), n.createElement("div", {
        className: A(t + "-row", u)
    }, n.createElement("div", ke({}, c("bottom")), "┻")));
}, Le = function(e, t) {
    var n, r, a;
    return [ (n = {}, n[".".concat(e)] = (r = {
        display: "flex",
        width: "100%",
        alignItems: "center"
    }, r["&-content"] = (a = {
        flexGrow: 2,
        marginRight: "2px",
        display: "flex"
    }, a[".ant-select"] = {
        width: "100%"
    }, a[".ant-input-number"] = {
        width: "100%"
    }, a), r["&-controller"] = {
        border: "1px solid ".concat(t.colorBorder),
        cursor: "pointer",
        padding: "0 8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 0
    }, r), n) ];
}, je = function(e) {
    return null != e;
}, Me = function(e) {
    return (null == e ? void 0 : e.target) ? je(e.target.value) ? e.target.value : je(e.target.checked) ? e.target.checked : void 0 : e;
}, Ve = function(e, t, n) {
    return e.filter((function(e) {
        var r = e.type;
        return Array.isArray(n) && n.length ? n.includes(r) : !Array.isArray(t) || !t.length || !t.includes(r);
    }));
};

function We(e) {
    return void 0 === e && (e = []), function(t) {
        var l, i = t.className, c = t.style, u = t.value, s = t.onChange, d = t.exclude, m = t.include, p = we(t, [ "className", "style", "value", "onChange", "exclude", "include" ]), v = S("poly-input"), g = Ve(e, d, m), h = Ne(a(null === (l = g[0]) || void 0 === l ? void 0 : l.type), 2), y = h[0], x = h[1], b = null == g ? void 0 : g.find((function(e) {
            var t = e.type;
            return t === y;
        })), E = null == b ? void 0 : b.component, I = r({});
        o((function() {
            null == g || g.forEach((function(e) {
                var t = e.checker, n = e.type;
                t(u) && x(n);
            }));
        }), [ u ]);
        var C = function(e, t) {
            return (null == t ? void 0 : t.toChangeValue) ? null == t ? void 0 : t.toChangeValue(e) : e;
        }, N = k({
            prefix: v,
            styleFun: Le
        }).hashId;
        return n.createElement("div", {
            className: A(v, i, N),
            style: c
        }, E && n.createElement("div", {
            className: A(v + "-content", N)
        }, n.createElement(E, ke(ke({}, p), {
            value: (null == b ? void 0 : b.toInputValue) ? null == b ? void 0 : b.toInputValue(u) : u,
            onChange: function(e) {
                var t = Me(e);
                I.current[null == b ? void 0 : b.type] = t, null == s || s(C(t, b));
            }
        }))), n.createElement(f, {
            className: A(v + "-controller", N),
            style: {
                width: E ? "auto" : "100%"
            },
            block: !0,
            onClick: function() {
                var e, t, n = (e = null == g ? void 0 : g.findIndex((function(e) {
                    var t = e.type;
                    return t === y;
                })), t = e + 1 > (null == g ? void 0 : g.length) - 1 ? 0 : e + 1, g[t]);
                n !== b && (x(null == n ? void 0 : n.type), null == s || s(C(I.current[null == n ? void 0 : n.type], n)));
            }
        }, (null == b ? void 0 : b.icon) ? n.createElement(w, {
            infer: b.icon
        }) : (null == b ? void 0 : b.title) || (null == b ? void 0 : b.type)));
    };
}

var Oe = function(e) {
    var t = String(e).trim().replace(/[^\d\.]+/, "");
    if ("" !== t) return Number(t);
}, Ge = function(e) {
    return {
        type: e,
        component: v,
        checker: function(t) {
            return String(t).includes(e);
        },
        toInputValue: function(e) {
            return Oe(e);
        },
        toChangeValue: function(t) {
            return "".concat(t || 0).concat(e);
        }
    };
}, _e = function(e) {
    return {
        type: e,
        checker: function(t) {
            return t === e;
        },
        toChangeValue: function() {
            return e;
        }
    };
}, Je = [ _e("inherit"), _e("auto"), Ge("px"), Ge("%"), Ge("vh"), Ge("em") ], qe = We(Je), He = We([ _e("cover"), _e("contain"), Ge("px"), Ge("%"), Ge("vh"), Ge("em") ]), Ue = {
    prettier: null
}, Xe = function(e, t) {
    return Ie(void 0, void 0, void 0, (function() {
        return Ce(this, (function(n) {
            return Ue.prettier = Ue.prettier || new Function('return import("'.concat(be(), '/prettier@2.x/esm/standalone.mjs")'))(), 
            [ 2, Ue.prettier.then((function(n) {
                return "javascript.expression" === e || "typescript.expression" === e ? t : /(?:javascript|typescript)/gi.test(e) ? n.default.format(t, {
                    semi: !1,
                    parser: function(e) {
                        return j(e, {
                            sourceType: "module",
                            plugins: [ "typescript", "jsx" ]
                        });
                    }
                }) : "json" === e ? JSON.stringify(JSON.parse(t), null, 2) : t;
            })) ];
        }));
    }));
}, Ye = {
    base: "vs",
    inherit: !0,
    rules: [ {
        foreground: "c41a16",
        token: "string"
    }, {
        foreground: "1c00cf",
        token: "constant.numeric"
    }, {
        foreground: "aa0d91",
        token: "keyword"
    }, {
        foreground: "000000",
        token: "keyword.operator"
    }, {
        foreground: "aa0d91",
        token: "constant.language"
    }, {
        foreground: "990000",
        token: "support.class.exception"
    }, {
        foreground: "000000",
        token: "entity.name.function"
    }, {
        fontStyle: "bold underline",
        token: "entity.name.type"
    }, {
        fontStyle: "italic",
        token: "variable.parameter"
    }, {
        foreground: "007400",
        token: "comment"
    }, {
        foreground: "ff0000",
        token: "invalid"
    }, {
        background: "e71a1100",
        token: "invalid.deprecated.trailing-whitespace"
    }, {
        foreground: "000000",
        background: "fafafafc",
        token: "text source"
    }, {
        foreground: "aa0d91",
        token: "meta.tag"
    }, {
        foreground: "aa0d91",
        token: "declaration.tag"
    }, {
        foreground: "000000",
        fontStyle: "bold",
        token: "support"
    }, {
        foreground: "aa0d91",
        token: "storage"
    }, {
        fontStyle: "bold underline",
        token: "entity.name.section"
    }, {
        foreground: "000000",
        fontStyle: "bold",
        token: "entity.name.function.frame"
    }, {
        foreground: "333333",
        token: "meta.tag.preprocessor.xml"
    }, {
        foreground: "994500",
        fontStyle: "italic",
        token: "entity.other.attribute-name"
    }, {
        foreground: "881280",
        token: "entity.name.tag"
    } ],
    colors: {
        "editor.foreground": "#000000",
        "editor.background": "#FFFFFF",
        "editor.selectionBackground": "#BAD6FD",
        "editor.lineHighlightBackground": "#EFEFFF",
        "editorCursor.foreground": "#000000",
        "editorWhitespace.foreground": "#B3B3B3F4"
    }
}, Ke = {
    base: "vs-dark",
    inherit: !0,
    rules: [ {
        foreground: "75715e",
        token: "comment"
    }, {
        foreground: "e6db74",
        token: "string"
    }, {
        foreground: "ae81ff",
        token: "constant.numeric"
    }, {
        foreground: "ae81ff",
        token: "constant.language"
    }, {
        foreground: "ae81ff",
        token: "constant.character"
    }, {
        foreground: "ae81ff",
        token: "constant.other"
    }, {
        foreground: "f92672",
        token: "keyword"
    }, {
        foreground: "f92672",
        token: "storage"
    }, {
        foreground: "66d9ef",
        fontStyle: "italic",
        token: "storage.type"
    }, {
        foreground: "a6e22e",
        fontStyle: "underline",
        token: "entity.name.class"
    }, {
        foreground: "a6e22e",
        fontStyle: "italic underline",
        token: "entity.other.inherited-class"
    }, {
        foreground: "a6e22e",
        token: "entity.name.function"
    }, {
        foreground: "fd971f",
        fontStyle: "italic",
        token: "variable.parameter"
    }, {
        foreground: "f92672",
        token: "entity.name.tag"
    }, {
        foreground: "a6e22e",
        token: "entity.other.attribute-name"
    }, {
        foreground: "66d9ef",
        token: "support.function"
    }, {
        foreground: "66d9ef",
        token: "support.constant"
    }, {
        foreground: "66d9ef",
        fontStyle: "italic",
        token: "support.type"
    }, {
        foreground: "66d9ef",
        fontStyle: "italic",
        token: "support.class"
    }, {
        foreground: "f8f8f0",
        background: "f92672",
        token: "invalid"
    }, {
        foreground: "f8f8f0",
        background: "ae81ff",
        token: "invalid.deprecated"
    }, {
        foreground: "cfcfc2",
        token: "meta.structure.dictionary.json string.quoted.double.json"
    }, {
        foreground: "75715e",
        token: "meta.diff"
    }, {
        foreground: "75715e",
        token: "meta.diff.header"
    }, {
        foreground: "f92672",
        token: "markup.deleted"
    }, {
        foreground: "a6e22e",
        token: "markup.inserted"
    }, {
        foreground: "e6db74",
        token: "markup.changed"
    }, {
        foreground: "ae81ffa0",
        token: "constant.numeric.line-number.find-in-files - match"
    }, {
        foreground: "e6db74",
        token: "entity.name.filename.find-in-files"
    } ],
    colors: {
        "editor.foreground": "#F8F8F2",
        "editor.background": "#222222",
        "editor.selectionBackground": "#49483E",
        "editor.lineHighlightBackground": "#3E3D32",
        "editorCursor.foreground": "#F8F8F0",
        "editorWhitespace.foreground": "#3B3A32",
        "editorIndentGuide.activeBackground": "#9D550FB0",
        "editor.selectionHighlightBorder": "#222218"
    }
}, Ze = !1, $e = function(e, t) {
    var n, r;
    return [ (n = {}, n[".".concat(e)] = (r = {
        position: "relative",
        transition: "all 0.15s ease-in-out",
        width: "100%",
        height: "100%",
        opacity: 0,
        display: "flex"
    }, r["&.loaded"] = {
        opacity: 1
    }, r["&-view"] = {
        flexGrow: 2,
        height: "100%"
    }, r["&-helper"] = {
        position: "absolute",
        bottom: "10px",
        right: "5%",
        zIndex: 2
    }, r[".monaco-error-highline"] = {
        left: "0px !important",
        width: "5px !important",
        height: "5px !important",
        background: "red !important",
        borderRadius: "100% !important",
        transform: "translate(35px, 5px) !important"
    }, r), n) ];
}, Qe = function(e) {
    var t = e.className, l = e.language, i = e.defaultLanguage, c = e.width, u = e.helpLink, s = e.helpCode, d = e.helpCodeViewWidth, m = e.height, p = e.onMount, f = e.onChange, v = we(e, [ "className", "language", "defaultLanguage", "width", "helpLink", "helpCode", "helpCodeViewWidth", "height", "onMount", "onChange" ]), h = Ne(a(!1), 2), y = h[0], x = h[1], b = I(), E = r(""), N = r(null), F = r(null), R = r([]), T = r(null), B = r(), P = r(), D = r(l || i), W = r(""), O = r(!1), G = r(!1), _ = r(V()), J = S("monaco-input"), q = k({
        prefix: J,
        styleFun: $e
    }), H = q.hashId, U = q.wrapSSR, X = v.value || v.defaultValue;
    o((function() {
        return O.current = !1, Ze || L.init().then((function(e) {
            e.editor.defineTheme("monokai", Ke), e.editor.defineTheme("chrome-devtools", Ye), 
            e.languages.typescript.typescriptDefaults.setCompilerOptions({
                target: e.languages.typescript.ScriptTarget.Latest,
                allowNonTsExtensions: !0,
                moduleResolution: e.languages.typescript.ModuleResolutionKind.NodeJs,
                module: e.languages.typescript.ModuleKind.CommonJS,
                noEmit: !0,
                esModuleInterop: !0,
                jsx: e.languages.typescript.JsxEmit.React,
                reactNamespace: "React",
                allowJs: !0
            }), e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
                noSemanticValidation: !1,
                noSyntaxValidation: !0
            }), e.languages.registerDocumentFormattingEditProvider("typescript", {
                provideDocumentFormattingEdits: function(e) {
                    return Ie(this, void 0, void 0, (function() {
                        var t, n;
                        return Ce(this, (function(r) {
                            switch (r.label) {
                              case 0:
                                return t = {}, [ 4, Xe((null === (n = e["getDesignerLanguage"]) || void 0 === n ? void 0 : n.call(e)) || "typescript", e.getValue()) ];

                              case 1:
                                return [ 2, [ (t.text = r.sent(), t.range = e.getFullModelRange(), t) ] ];
                            }
                        }));
                    }));
                }
            }), Ze = !0;
        })), function() {
            T.current && T.current.dispose(), O.current = !0;
        };
    }), []), o((function() {
        B.current && v.extraLib && Y();
    }), [ v.extraLib ]);
    var Y = function() {
        T.current && T.current.dispose(), T.current = B.current.languages.typescript.typescriptDefaults.addExtraLib(v.extraLib, "".concat(_.current, ".d.ts"));
    }, K = function() {
        var e = D.current;
        return "javascript" === e || "typescript" === e;
    }, Z = function() {
        var e = D.current;
        return "javascript.expression" === e || "typescript.expression" === e;
    }, $ = function() {
        clearTimeout(F.current), F.current = setTimeout((function() {
            null == f || f(E.current);
        }), 1e3);
    }, Q = function(e) {
        G.current = !0, E.current = e, "typescript" === W.current ? (clearTimeout(N.current), 
        N.current = setTimeout((function() {
            try {
                E.current && (K() ? j(E.current, {
                    sourceType: "module",
                    plugins: [ "typescript", "jsx" ]
                }) : Z() && M(E.current, {
                    plugins: [ "typescript", "jsx" ]
                })), B.current.editor.setModelMarkers(P.current.getModel(), D.current, []), R.current = P.current.deltaDecorations(R.current, [ {
                    range: new B.current.Range(1, 1, 1, 1),
                    options: {}
                } ]), $();
            } catch (e) {
                R.current = P.current.deltaDecorations(R.current, [ {
                    range: new B.current.Range(e.loc.line, e.loc.column, e.loc.line, e.loc.column),
                    options: {
                        isWholeLine: !0,
                        glyphMarginClassName: "monaco-error-highline"
                    }
                } ]), B.current.editor.setModelMarkers(P.current.getModel(), D.current, [ {
                    code: "1003",
                    severity: 8,
                    startLineNumber: e.loc.line,
                    startColumn: e.loc.column,
                    endLineNumber: e.loc.line,
                    endColumn: e.loc.column,
                    message: e.message
                } ]);
            }
        }), 240)) : ($(), R.current = P.current.deltaDecorations(R.current, [ {
            range: new B.current.Range(1, 1, 1, 1),
            options: {}
        } ]));
    };
    D.current = l || i, W.current = /(?:javascript|typescript)/gi.test(D.current) ? "typescript" : D.current;
    return U(n.createElement("div", {
        className: A(J, t, {
            loaded: y
        }, H),
        style: {
            width: c,
            height: m
        }
    }, function() {
        if (!1 === u) return null;
        var e = "string" == typeof u ? u : K() ? "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" : Z() ? "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators" : void 0;
        return e && n.createElement(g, {
            title: n.createElement(C, {
                token: "SettingComponents.MonacoInput.helpDocument"
            })
        }, n.createElement("div", {
            className: A(J + "-helper", H)
        }, n.createElement("a", {
            target: "_blank",
            href: e,
            rel: "noreferrer"
        }, n.createElement(w, {
            infer: "Help"
        }))));
    }(), n.createElement("div", {
        className: A(J + "-view", H)
    }, n.createElement(z, ke({}, v, {
        theme: "dark" === b ? "monokai" : "chrome-devtools",
        defaultLanguage: W.current,
        language: W.current,
        options: ke(ke({
            glyphMargin: !0
        }, v.options), {
            tabSize: 2,
            smoothScrolling: !0,
            scrollbar: {
                verticalScrollbarSize: 5,
                horizontalScrollbarSize: 5,
                alwaysConsumeMouseWheel: !1
            }
        }),
        value: X,
        width: "100%",
        height: "100%",
        onMount: function(e, t) {
            P.current = e, B.current = t, null == p || p(e, t);
            var n = e.getModel(), r = e.getValue();
            n["getDesignerLanguage"] = function() {
                return D.current;
            }, r ? Xe(D.current, r).then((function(t) {
                e.setValue(t), x(!0);
            })).catch((function() {
                x(!0);
            })) : x(!0), v.extraLib && Y(), e.onDidChangeModelContent((function() {
                Q(e.getValue());
            }));
        }
    }))), s ? n.createElement("div", {
        className: A(J + "-view", H),
        style: {
            width: d || "50%"
        }
    }, n.createElement(z, {
        value: s,
        theme: "dark" === b ? "monokai" : "chrome-devtools",
        defaultLanguage: W.current,
        language: W.current,
        options: ke(ke({}, v.options), {
            lineNumbers: "off",
            readOnly: !0,
            glyphMargin: !1,
            folding: !1,
            lineDecorationsWidth: 0,
            lineNumbersMinChars: 0,
            minimap: {
                enabled: !1
            },
            tabSize: 2,
            smoothScrolling: !0,
            scrollbar: {
                verticalScrollbarSize: 5,
                horizontalScrollbarSize: 5,
                alwaysConsumeMouseWheel: !1
            }
        }),
        width: "100%",
        height: "100%"
    })) : null));
};

Qe.loader = L;

var et = /<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, tt = /^\{\{([\s\S]*)\}\}$/, nt = function(e) {
    return "string" == typeof e && tt.test(e);
}, rt = function(e) {
    return "string" == typeof e && et.test(e);
}, at = function(e) {
    var t = String(e).replace(/[^\d\.]+/, "");
    if ("" !== t) return Number(t);
}, ot = We([ {
    type: "TEXT",
    icon: "Text",
    component: d,
    checker: function(e) {
        return "string" == typeof e && !nt(e) && !rt(e);
    }
}, {
    type: "EXPRESSION",
    icon: "Expression",
    component: function(e) {
        return n.createElement(m, {
            content: n.createElement("div", {
                style: {
                    width: 400,
                    height: 200,
                    marginLeft: -16,
                    marginRight: -16,
                    marginBottom: -12
                }
            }, n.createElement(Qe, ke({}, e, {
                language: "javascript.expression"
            }))),
            trigger: "click"
        }, n.createElement(f, {
            block: !0
        }, n.createElement(C, {
            token: "SettingComponents.ValueInput.expression"
        })));
    },
    checker: nt,
    toInputValue: function(e) {
        if (e && "{{}}" !== e) {
            var t = String(e).match(tt);
            return (null == t ? void 0 : t[1]) || e || "";
        }
    },
    toChangeValue: function(e) {
        if (e && "{{}}" !== e) {
            var t = String(e).match(tt);
            return "{{".concat((null == t ? void 0 : t[1]) || e || "", "}}");
        }
    }
}, {
    type: "BOOLEAN",
    icon: "Boolean",
    component: function(e) {
        return n.createElement(h, ke({}, e, {
            options: [ {
                label: "True",
                value: !0
            }, {
                label: "False",
                value: !1
            } ]
        }));
    },
    checker: function(e) {
        return "boolean" == typeof e;
    },
    toInputValue: function(e) {
        return !!e;
    },
    toChangeValue: function(e) {
        return !!e;
    }
}, {
    type: "NUMBER",
    icon: "Number",
    component: v,
    checker: function(e) {
        return "number" == typeof e;
    },
    toInputValue: at,
    toChangeValue: at
} ]), lt = q((function(e) {
    var t = N(), r = H(), o = Ne(a(!1), 2), l = o[0], i = o[1], s = Ne(a(!1), 2), d = s[0], m = s[1], p = Ne(a(), 2), v = p[0], g = p[1], h = S("drawer-setter"), y = S("settings-form-wrapper");
    c((function() {
        var e = document.querySelector("." + y);
        e && g(e);
    }), [ t ]);
    var x = function() {
        m(!0), setTimeout((function() {
            i(!1), m(!1);
        }), 150);
    };
    return n.createElement(u, null, n.createElement(f, ke({
        block: !0,
        onClick: function() {
            i(!0);
        }
    }, e.triggerProps), e.text || r.title), v && l ? J(n.createElement("div", {
        className: A(h, "animate__animated animate__slideInRight", {
            animate__slideOutRight: d
        })
    }, n.createElement("div", {
        className: h + "-header",
        onClick: x
    }, n.createElement(w, {
        infer: "Return",
        size: 18
    }), n.createElement("span", {
        className: h + "-header-text"
    }, e.text || r.title)), n.createElement("div", {
        className: h + "-body"
    }, n.createElement(Y, {
        colon: !1,
        labelWidth: 120,
        labelAlign: "left",
        wrapperAlign: "right",
        feedbackLayout: "none",
        tooltipLayout: "text"
    }, e.children))), v) : null);
})), it = function(e, t) {
    var n, r, a, o, l;
    return [ (n = {}, n[".".concat(e)] = (r = {}, r[".ant-formily-item-label-content"] = {
        overflow: "visible"
    }, r["&-base"] = {
        cursor: "pointer"
    }, r["&-title"] = (a = {
        display: "flex",
        alignItems: "center",
        marginLeft: "-10px",
        cursor: "pointer"
    }, a[".dn-icon"] = (o = {
        transform: "translateX(-3px)"
    }, o["svg"] = {
        transition: "all 0.15s ease-in-out",
        transform: "rotate(-90deg)"
    }, o), a["&.expand"] = (l = {}, l[".dn-icon"] = {
        svg: {
            transform: "rotate(0deg)"
        }
    }, l), a), r["&-extra"] = {
        margin: "-10px -10px 10px",
        padding: "10px 10px 0 10px",
        backgroundColor: t.colorBgLayout
    }, r), n) ];
}, ct = new Map, ut = q((function(e) {
    var t = e.className;
    e.style;
    var a = e.children, o = we(e, [ "className", "style", "children" ]), l = S("fold-item"), i = H(), c = s((function() {
        return de.ref(ct.get(i.address.toString()));
    }), []), u = r({
        base: null,
        extra: null
    });
    n.Children.forEach(a, (function(e) {
        var t, r;
        n.isValidElement(e) && ("FoldItem.Base" === (null === (t = null == e ? void 0 : e["type"]) || void 0 === t ? void 0 : t["displayName"]) && (u.current.base = e["props"].children), 
        "FoldItem.Extra" === (null === (r = null == e ? void 0 : e["type"]) || void 0 === r ? void 0 : r["displayName"]) && (u.current.extra = e["props"].children));
    }));
    var d = k({
        prefix: l,
        styleFun: it
    }), m = d.hashId, p = d.wrapSSR;
    return p(n.createElement("div", {
        className: A(l, t, m)
    }, n.createElement("div", {
        className: A(l + "-base", m),
        onClick: function() {
            c.value = !c.value, ct.set(i.address.toString(), c.value);
        }
    }, n.createElement(K.BaseItem, ke({}, o, {
        label: n.createElement("span", {
            className: A(l + "-title", {
                expand: c.value
            }, m)
        }, u.current.extra && n.createElement(w, {
            infer: "Expand",
            size: 10
        }), o.label)
    }), n.createElement("div", {
        style: {
            width: "100%"
        },
        onClick: function(e) {
            e.stopPropagation();
        }
    }, u.current.base))), c.value && u.current.extra && n.createElement("div", {
        className: A(l + "-extra", m)
    }, u.current.extra)));
})), st = function() {
    return n.createElement(u, null);
};

st.displayName = "FoldItem.Base";

var dt = function() {
    return n.createElement(u, null);
};

dt.displayName = "FoldItem.Extra", ut.Base = st, ut.Extra = dt;

var mt = function(e, t) {
    var n, r, a, o, l, i;
    return [ (n = {}, n[".".concat(e)] = (r = {
        display: "flex",
        flexWrap: "wrap"
    }, r["&-item"] = (a = {
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        color: t.colorText
    }, a["&-icon"] = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 8px",
        flexShrink: 0,
        flexGrow: 0,
        color: t.colorText
    }, a["&-controller"] = (o = {
        minWidth: 0,
        flexShrink: 1,
        flexGrow: 1
    }, o[".ant-radio-group"] = (l = {
        display: "flex"
    }, l[".ant-radio-button-wrapper"] = {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center"
    }, l), o), a["&.vertical"] = (i = {
        flexDirection: "column",
        alignItems: "flex-start"
    }, i[".dn-input-items-item-controller"] = {
        width: "100%"
    }, i), a), r), n) ];
}, pt = function(e, t) {
    var n;
    return [ (n = {}, n[".".concat(e)] = {}, n) ];
}, ft = n.createContext(null), vt = function(e) {
    var t = S("input-items"), r = k({
        prefix: t,
        styleFun: mt
    }).hashId;
    return n.createElement(ft.Provider, {
        value: e
    }, n.createElement("div", {
        className: A(t, e.className, r),
        style: e.style
    }, e.children));
};

vt.Item = function(e) {
    var t = e.width, r = void 0 === t ? "100%" : t, a = S("input-items-item"), o = i(ft), l = k({
        prefix: a,
        styleFun: pt
    }), c = l.hashId, u = l.wrapSSR;
    return u(n.createElement("div", {
        className: A(a, e.className, {
            vertical: e.vertical || o.vertical
        }, c),
        style: ke({
            width: r || o.width
        }, e.style)
    }, e.icon && n.createElement("div", {
        className: A(a + "-icon", c)
    }, n.createElement(w, {
        infer: e.icon,
        size: 16
    })), e.title && n.createElement("div", {
        className: A(a + "-title", c)
    }, e.title), n.createElement("div", {
        className: A(a + "-controller", c)
    }, e.children)));
};

var gt, ht = {
    top: 1,
    right: 2,
    bottom: 3,
    left: 4,
    all: 1
}, yt = /([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+))?)?)?/, xt = q((function(e) {
    var t = e.labels, r = void 0 === t ? [ n.createElement(w, {
        infer: "Top",
        size: 16,
        key: "1"
    }), n.createElement(w, {
        infer: "Right",
        size: 16,
        key: "2"
    }), n.createElement(w, {
        infer: "Bottom",
        size: 16,
        key: "3"
    }), n.createElement(w, {
        infer: "Left",
        size: 16,
        key: "4"
    }) ] : t, a = H(), o = S("box-style-setter"), l = function(e, t) {
        var n = String(t.value).match(yt) || [], r = n[ht[e]], a = n[1], o = n[2], l = n[3], i = n[4], c = a === o && o === l && l === i;
        return ke(ke({}, t), {
            value: "all" === e ? c ? a : void 0 : r,
            onChange: function(r) {
                var a, o;
                "all" === e ? null === (a = t.onChange) || void 0 === a || a.call(t, "".concat(r || "0px", " ").concat(r || "0px", " ").concat(r || "0px", " ").concat(r || "0px")) : (n[ht[e]] = r, 
                null === (o = t.onChange) || void 0 === o || o.call(t, "".concat(n[1] || "0px", " ").concat(n[2] || "0px", " ").concat(n[3] || "0px", " ").concat(n[4] || "0px")));
            }
        });
    };
    return n.createElement(ut, {
        className: A(o, e.className),
        label: a.title
    }, n.createElement(ut.Base, null, n.createElement(qe, ke({}, l("all", e), {
        exclude: [ "inherit", "auto" ]
    }))), n.createElement(ut.Extra, null, n.createElement(vt, {
        width: "50%"
    }, n.createElement(vt.Item, {
        icon: r[0]
    }, n.createElement(qe, ke({}, l("top", e), {
        exclude: [ "inherit", "auto" ]
    }))), n.createElement(vt.Item, {
        icon: r[1]
    }, n.createElement(qe, ke({}, l("right", e), {
        exclude: [ "inherit", "auto" ]
    }))), n.createElement(vt.Item, {
        icon: r[2]
    }, n.createElement(qe, ke({}, l("bottom", e), {
        exclude: [ "inherit", "auto" ]
    }))), n.createElement(vt.Item, {
        icon: r[3]
    }, n.createElement(qe, ke({}, l("left", e), {
        exclude: [ "inherit", "auto" ]
    }))))));
})), bt = function(e, t) {
    var n, r, a, o, l;
    return [ (n = {}, n[".".concat(e)] = (r = {
        display: "flex"
    }, r["&-position"] = {
        marginLeft: "-10px"
    }, r["&-input"] = {
        height: "110px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: "10px"
    }, r), n[".border-style-solid-line"] = (a = {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "block"
    }, a["&::after"] = {
        position: "absolute",
        top: "50%",
        left: 0,
        display: "block",
        content: "' '",
        height: 0,
        width: "100%",
        borderTop: "2px solid currentColor",
        transform: "translateY(-50%)"
    }, a), n[".border-style-dashed-line"] = (o = {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "block"
    }, o["&::after"] = {
        position: "absolute",
        top: "50%",
        left: 0,
        display: "block",
        content: "' '",
        height: 0,
        width: "100%",
        borderTop: "2px dashed currentColor",
        transform: "translateY(-50%)"
    }, o), n[".border-style-dotted-line"] = (l = {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "block"
    }, l["&::after"] = {
        position: "absolute",
        top: "50%",
        left: 0,
        display: "block",
        content: "''",
        height: 0,
        width: "100%",
        borderTop: "2px dotted currentColor",
        transform: "translateY(-50%)"
    }, l), n) ];
}, Et = [ "center", "top", "right", "bottom", "left" ], St = function(e) {
    return [ {
        label: "None",
        value: "none"
    }, {
        label: n.createElement("span", {
            className: A("border-style-solid-line", e)
        }),
        value: "solid"
    }, {
        label: n.createElement("span", {
            className: A("border-style-dashed-line", e)
        }),
        value: "dashed"
    }, {
        label: n.createElement("span", {
            className: A("border-style-dotted-line", e)
        }),
        value: "dotted"
    } ];
}, kt = function(e, t) {
    var n = "center" === e ? "" : "-".concat(e);
    return me("border".concat(n, "-").concat(t));
}, wt = function(e) {
    for (var t = e.address.parent(), n = 0; n < Et.length; n++) {
        var r = Et[n], a = "".concat(t, ".").concat(kt(r, "style")), o = "".concat(t, ".").concat(kt(r, "width")), l = "".concat(t, ".").concat(kt(r, "color"));
        if (e.query(a).value() || e.query(o).value() || e.query(l).value()) return r;
    }
    return "center";
}, It = q((function(e) {
    var t = e.className, r = e.style, a = H(), o = s((function() {
        return de({
            value: wt(a)
        });
    }), [ a.value ]), l = S("border-style-setter"), i = function(e) {
        return function(t) {
            if (t.display = o.value === e ? "visible" : "hidden", "center" !== e) {
                var n = t.query(".borderStyle").value(), r = t.query(".borderWidth").value(), a = t.query(".borderColor").value();
                (n || r || a) && (t.value = void 0);
            }
        };
    }, c = k({
        prefix: l,
        styleFun: bt
    }).hashId;
    return n.createElement(ut, {
        label: a.title
    }, n.createElement(ut.Extra, null, n.createElement("div", {
        className: A(l, t, c),
        style: r
    }, n.createElement("div", {
        className: A(l + "-position", c)
    }, n.createElement(ze, {
        value: o.value,
        onChange: function(e) {
            o.value = e;
        }
    })), n.createElement("div", {
        className: A(l + "-input", c)
    }, Et.map((function(e, t) {
        return n.createElement(u, {
            key: t
        }, n.createElement(U, {
            name: kt(e, "style"),
            basePath: a.address.parent(),
            dataSource: St(c),
            reactions: i(e),
            component: [ Z, {
                placeholder: "Please Select"
            } ]
        }), n.createElement(U, {
            name: kt(e, "width"),
            basePath: a.address.parent(),
            reactions: i(e),
            component: [ qe, {
                exclude: [ "auto" ]
            } ]
        }), n.createElement(U, {
            name: kt(e, "color"),
            basePath: a.address.parent(),
            reactions: i(e),
            component: [ Se ]
        }));
    }))))));
})), Ct = function(e) {
    return n.createElement(xt, ke({}, e, {
        labels: [ n.createElement(w, {
            infer: "TopLeft",
            size: 16,
            key: "1"
        }), n.createElement(w, {
            infer: "TopRight",
            size: 16,
            key: "2"
        }), n.createElement(w, {
            infer: "BottomRight",
            size: 16,
            key: "3"
        }), n.createElement(w, {
            infer: "BottomLeft",
            size: 16,
            key: "4"
        }) ]
    }));
}, Nt = y.useToken, Ft = q((function(e) {
    var t = H(), r = S("background-style-setter"), a = Nt().hashId;
    return n.createElement(ut, {
        className: A(r, e.className, a),
        label: t.title
    }, n.createElement(ut.Base, null, n.createElement(U, {
        name: "backgroundColor",
        basePath: t.address.parent(),
        component: [ Se ]
    })), n.createElement(ut.Extra, null, n.createElement(vt, null, n.createElement(vt.Item, {
        icon: "Image"
    }, n.createElement(U, {
        name: "backgroundImage",
        basePath: t.address.parent(),
        component: [ De ]
    })), n.createElement(vt.Item, {
        icon: "ImageSize",
        width: "50%"
    }, n.createElement(U, {
        name: "backgroundSize",
        basePath: t.address.parent(),
        component: [ He ]
    })), n.createElement(vt.Item, {
        icon: "Repeat",
        width: "50%"
    }, n.createElement(U, {
        name: "backgroundRepeat",
        basePath: t.address.parent(),
        component: [ Z, {
            style: {
                width: "100%"
            },
            placeholder: "Repeat"
        } ],
        dataSource: [ {
            label: "No Repeat",
            value: "no-repeat"
        }, {
            label: "Repeat",
            value: "repeat"
        }, {
            label: "Repeat X",
            value: "repeat-x"
        }, {
            label: "Repeat Y",
            value: "repeat-y"
        }, {
            label: "Space",
            value: "space"
        }, {
            label: "Round",
            value: "round"
        } ]
    })), n.createElement(vt.Item, {
        icon: "Position"
    }, n.createElement(U, {
        name: "backgroundPosition",
        basePath: t.address.parent(),
        component: [ $, {
            placeholder: "center center"
        } ]
    })))));
})), Rt = q((function(e) {
    var t = H(), r = S("shadow-style-setter"), a = function(t) {
        var n = String(e.value || "").trim().split(" ");
        return {
            value: n[t],
            onChange: function(r) {
                var a;
                n[t] = r, null === (a = e.onChange) || void 0 === a || a.call(e, "".concat(n[0] || "", " ").concat(n[1] || "", " ").concat(n[2] || "", " ").concat(n[3] || "", " ").concat(n[4] || ""));
            }
        };
    };
    return n.createElement(ut, {
        className: A(r, e.className),
        style: e.style,
        label: t.title
    }, n.createElement(ut.Base, null, n.createElement(Se, ke({}, a(4)))), n.createElement(ut.Extra, null, n.createElement(vt, {
        width: "50%"
    }, n.createElement(vt.Item, {
        icon: "AxisX"
    }, n.createElement(qe, ke({
        exclude: [ "inherit", "auto" ]
    }, a(0)))), n.createElement(vt.Item, {
        icon: "AxisY"
    }, n.createElement(qe, ke({
        exclude: [ "inherit", "auto" ]
    }, a(1)))), n.createElement(vt.Item, {
        icon: "Blur"
    }, n.createElement(qe, ke({
        exclude: [ "inherit", "auto" ]
    }, a(2)))), n.createElement(vt.Item, {
        icon: "Shadow"
    }, n.createElement(qe, ke({
        exclude: [ "inherit", "auto" ]
    }, a(3)))))));
})), Tt = (gt = [ "宋体=SimSun", "微软雅黑=Microsoft Yahei", "苹方=PingFang SC", "Andale Mono=andale mono,monospace", "Arial=arial,helvetica,sans-serif", "Arial Black=arial black,sans-serif", "Book Antiqua=book antiqua,palatino,serif", "Comic Sans MS=comic sans ms,sans-serif", "Courier New=courier new,courier,monospace", "Georgia=georgia,palatino,serif", "Helvetica Neue=Helvetica Neue", "Helvetica=helvetica,arial,sans-serif", "Impact=impact,sans-serif", "Symbol=symbol", "Tahoma=tahoma,arial,helvetica,sans-serif", "Terminal=terminal,monaco,monospace", "Times New Roman=times new roman,times,serif", "Trebuchet MS=trebuchet ms,geneva,sans-serif", "Verdana=verdana,geneva,sans-serif" ], 
gt.map((function(e) {
    var t = e.split("="), r = null == t ? void 0 : t[0], a = null == t ? void 0 : t[1];
    return {
        label: n.createElement("span", {
            style: {
                fontFamily: a
            }
        }, r),
        value: a
    };
}))), Bt = q((function(e) {
    var t = H(), r = S("font-style-setter");
    return n.createElement(ut, {
        label: t.title,
        className: A(r, e.className),
        style: e.style
    }, n.createElement(ut.Base, null, n.createElement(U, {
        name: "fontFamily",
        basePath: t.address.parent(),
        component: [ Z, {
            style: {
                width: "100%"
            },
            placeholder: "Helvetica Neue"
        } ],
        dataSource: Tt
    })), n.createElement(ut.Extra, null, n.createElement(vt, null, n.createElement(vt.Item, {
        icon: "FontWeight",
        width: "50%"
    }, n.createElement(U, {
        name: "fontWeight",
        basePath: t.address.parent(),
        component: [ Q, {
            placeholder: "400"
        } ]
    })), n.createElement(vt.Item, {
        icon: "FontStyle",
        width: "50%"
    }, n.createElement(U, {
        name: "fontStyle",
        basePath: t.address.parent(),
        dataSource: [ {
            label: n.createElement(w, {
                infer: "NormalFontStyle"
            }),
            value: "normal"
        }, {
            label: n.createElement(w, {
                infer: "ItalicFontStyle"
            }),
            value: "italic"
        } ],
        component: [ ee.Group, {
            optionType: "button"
        } ]
    })), n.createElement(vt.Item, {
        icon: "FontColor",
        width: "100%"
    }, n.createElement(U, {
        name: "color",
        basePath: t.address.parent(),
        component: [ Se ]
    })), n.createElement(vt.Item, {
        icon: "FontSize",
        width: "50%"
    }, n.createElement(U, {
        name: "fontSize",
        basePath: t.address.parent(),
        component: [ qe, {
            exclude: [ "auto" ]
        } ]
    })), n.createElement(vt.Item, {
        icon: "LineHeight",
        width: "50%"
    }, n.createElement(U, {
        name: "lineHeight",
        basePath: t.address.parent(),
        component: [ qe, {
            exclude: [ "auto" ]
        } ]
    })), n.createElement(vt.Item, {
        icon: "TextAlign"
    }, n.createElement(U, {
        name: "textAlign",
        basePath: t.address.parent(),
        dataSource: [ {
            label: n.createElement(w, {
                infer: "TextAlignLeft"
            }),
            value: "left"
        }, {
            label: n.createElement(w, {
                infer: "TextAlignCenter"
            }),
            value: "center"
        }, {
            label: n.createElement(w, {
                infer: "TextAlignRight"
            }),
            value: "right"
        }, {
            label: n.createElement(w, {
                infer: "TextAlignJustify"
            }),
            value: "justify"
        } ],
        component: [ ee.Group, {
            optionType: "button"
        } ]
    })), n.createElement(vt.Item, {
        icon: "TextDecoration"
    }, n.createElement(U, {
        name: "textDecoration",
        basePath: t.address.parent(),
        dataSource: [ {
            label: "--",
            value: "none"
        }, {
            label: n.createElement(w, {
                infer: "TextUnderline"
            }),
            value: "underline"
        }, {
            label: n.createElement(w, {
                infer: "TextLineThrough"
            }),
            value: "line-through"
        } ],
        component: [ ee.Group, {
            optionType: "button"
        } ]
    })))));
})), Pt = function(e, t) {
    var n, r;
    return [ (n = {}, n[".".concat(e)] = (r = {}, r[".dn-input-items"] = {}, r), n) ];
}, Dt = q((function(e) {
    var t = H(), r = S("flex-style-setter"), a = k({
        prefix: r,
        styleFun: Pt
    }).hashId;
    return n.createElement("div", {
        className: A(r, e.className, a),
        style: e.style
    }, n.createElement(vt, {
        vertical: !0
    }, n.createElement(U, {
        name: "flexDirection",
        basePath: t.address.parent(),
        dataSource: [ {
            label: n.createElement(w, {
                infer: "FlexDirectionRow"
            }),
            value: "row"
        }, {
            label: n.createElement(w, {
                infer: "FlexDirectionColumn"
            }),
            value: "column"
        } ],
        reactions: function(e) {
            e.decorator[1].title = "Flex Direction : ".concat(e.value || "");
        },
        decorator: [ vt.Item ],
        component: [ ee.Group, {
            optionType: "button"
        } ]
    }), n.createElement(U, {
        name: "flexWrap",
        basePath: t.address.parent(),
        dataSource: [ {
            label: n.createElement(w, {
                infer: "FlexNoWrap"
            }),
            value: "nowrap"
        }, {
            label: n.createElement(w, {
                infer: "FlexWrap"
            }),
            value: "wrap"
        } ],
        reactions: function(e) {
            e.decorator[1].title = "Flex Wrap : ".concat(e.value || "");
        },
        decorator: [ vt.Item ],
        component: [ ee.Group, {
            optionType: "button"
        } ]
    }), n.createElement(U, {
        name: "alignContent",
        basePath: t.address.parent(),
        dataSource: [ {
            label: n.createElement(w, {
                infer: "FlexAlignContentCenter"
            }),
            value: "center"
        }, {
            label: n.createElement(w, {
                infer: "FlexAlignContentStart"
            }),
            value: "flex-start"
        }, {
            label: n.createElement(w, {
                infer: "FlexAlignContentEnd"
            }),
            value: "flex-end"
        }, {
            label: n.createElement(w, {
                infer: "FlexAlignContentSpaceAround"
            }),
            value: "space-around"
        }, {
            label: n.createElement(w, {
                infer: "FlexAlignContentSpaceBetween"
            }),
            value: "space-between"
        }, {
            label: n.createElement(w, {
                infer: "FlexAlignContentStretch"
            }),
            value: "stretch"
        } ],
        reactions: function(e) {
            e.decorator[1].title = "Align Content : ".concat(e.value || "");
        },
        decorator: [ vt.Item ],
        component: [ ee.Group, {
            optionType: "button"
        } ]
    }), n.createElement(U, {
        name: "justifyContent",
        basePath: t.address.parent(),
        dataSource: [ {
            label: n.createElement(w, {
                infer: "FlexJustifyCenter"
            }),
            value: "center"
        }, {
            label: n.createElement(w, {
                infer: "FlexJustifyStart"
            }),
            value: "flex-start"
        }, {
            label: n.createElement(w, {
                infer: "FlexJustifyEnd"
            }),
            value: "flex-end"
        }, {
            label: n.createElement(w, {
                infer: "FlexJustifySpaceAround"
            }),
            value: "space-around"
        }, {
            label: n.createElement(w, {
                infer: "FlexJustifySpaceBetween"
            }),
            value: "space-between"
        }, {
            label: n.createElement(w, {
                infer: "FlexJustifySpaceEvenly"
            }),
            value: "space-evenly"
        } ],
        reactions: function(e) {
            e.decorator[1].title = "Justify Content : ".concat(e.value || "");
        },
        decorator: [ vt.Item ],
        component: [ ee.Group, {
            optionType: "button"
        } ]
    }), n.createElement(U, {
        name: "alignItems",
        basePath: t.address.parent(),
        dataSource: [ {
            label: n.createElement(w, {
                infer: "FlexAlignItemsCenter"
            }),
            value: "center"
        }, {
            label: n.createElement(w, {
                infer: "FlexAlignItemsStart"
            }),
            value: "flex-start"
        }, {
            label: n.createElement(w, {
                infer: "FlexAlignItemsEnd"
            }),
            value: "flex-end"
        }, {
            label: n.createElement(w, {
                infer: "FlexAlignItemsStretch"
            }),
            value: "stretch"
        }, {
            label: n.createElement(w, {
                infer: "FlexAlignItemsBaseline"
            }),
            value: "baseline"
        } ],
        reactions: function(e) {
            e.decorator[1].title = "Align Items : ".concat(e.value || "");
        },
        decorator: [ vt.Item ],
        component: [ ee.Group, {
            optionType: "button"
        } ]
    })));
})), At = function(e, t) {
    var n, r, a;
    return [ (n = {}, n[".".concat(e)] = (r = {}, r["&-radio"] = (a = {
        display: "flex !important",
        width: "100%"
    }, a[".ant-radio-button-wrapper"] = {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0
    }, a), r), n) ];
}, zt = q((function(e) {
    var t = H(), r = S("display-style-setter"), a = k({
        prefix: r,
        styleFun: At
    }), o = a.hashId, l = a.wrapSSR;
    return l(n.createElement(n.Fragment, null, n.createElement(K.BaseItem, {
        label: t.title,
        className: A(r, e.className, o),
        style: e.style
    }, n.createElement(x.Group, {
        className: A(r + "-radio", o),
        options: [ {
            label: n.createElement(w, {
                infer: "DisplayBlock",
                size: 16
            }),
            value: "block"
        }, {
            label: n.createElement(w, {
                infer: "DisplayInlineBlock",
                size: 16
            }),
            value: "inline-block"
        }, {
            label: n.createElement(w, {
                infer: "DisplayInline",
                size: 16
            }),
            value: "inline"
        }, {
            label: n.createElement(w, {
                infer: "DisplayFlex",
                size: 16
            }),
            value: "flex"
        } ],
        value: e.value,
        onChange: function(t) {
            var n;
            null === (n = e.onChange) || void 0 === n || n.call(e, t.target.value);
        },
        optionType: "button"
    })), n.createElement(U, {
        name: "flex",
        basePath: t.address.parent(),
        visible: !1,
        reactions: function(e) {
            e.visible = "flex" === t.value;
        },
        component: [ Dt ]
    })));
})), Lt = function(e, t) {
    var n, r, a, o, l;
    return [ (n = {}, n[".".concat(e)] = (r = {
        flexWrap: "wrap"
    }, r["&-header"] = (a = {
        display: "flex",
        alignItems: "center",
        padding: "5px 20px",
        margin: "-1px -20px 0 -20px",
        color: t.colorText,
        borderTop: "1px solid ".concat(t.colorBorder),
        borderBottom: "1px solid ".concat(t.colorBorder),
        backgroundColor: "#eee",
        cursor: "pointer",
        transition: "all 0.25s ease-in-out",
        fontSize: "13px"
    }, a["&-expand"] = {
        marginLeft: "-13px",
        transform: "rotate(-90deg)",
        fontSize: "12px",
        transition: "all 0.15s ease-in-out",
        marginRight: "3px"
    }, a), r["&-content"] = (o = {
        display: "none",
        width: "100%",
        paddingTop: "4px"
    }, o["& > div:last-child"] = {
        borderBottom: "none !important"
    }, o), r["&.expand"] = (l = {}, l[".dn-collapse-item-content"] = {
        display: "block"
    }, l[".dn-collapse-item-header-expand"] = {
        transform: "rotate(0)"
    }, l), r), n) ];
}, jt = q((function(e) {
    var t, r = S("collapse-item"), o = k({
        prefix: r,
        styleFun: Lt
    }), l = o.hashId, i = o.wrapSSR, c = H(), u = Ne(a(null === (t = e.defaultExpand) || void 0 === t || t), 2), s = u[0], d = u[1];
    return i(n.createElement("div", {
        className: A(r, e.className, {
            expand: s
        }, l),
        style: e.style
    }, n.createElement("div", {
        className: A(r + "-header", l),
        onClick: function(e) {
            e.stopPropagation(), e.preventDefault(), d(!s);
        }
    }, n.createElement("div", {
        className: A(r + "-header-expand", l)
    }, n.createElement(w, {
        infer: "Expand",
        size: 10
    })), n.createElement("div", {
        className: A(r + "-header-content", l)
    }, c.title)), n.createElement("div", {
        className: A(r + "-content", l)
    }, e.children)));
})), Mt = X({
    components: {
        FormItem: K,
        CollapseItem: jt,
        Input: $,
        ValueInput: ot,
        SizeInput: qe,
        ColorInput: Se,
        ImageInput: Pe,
        MonacoInput: Qe,
        PositionInput: ze,
        CornerInput: Re,
        BackgroundImageInput: De,
        BackgroundStyleSetter: Ft,
        BoxStyleSetter: xt,
        BorderStyleSetter: It,
        BorderRadiusStyleSetter: Ct,
        DisplayStyleSetter: zt,
        BoxShadowStyleSetter: Rt,
        FlexStyleSetter: Dt,
        FontStyleSetter: Bt,
        DrawerSetter: lt,
        NumberPicker: Q,
        DatePicker: te,
        TimePicker: ne,
        Select: Z,
        Radio: ee,
        Slider: b,
        Switch: re,
        Space: ae,
        ArrayItems: oe,
        ArrayTable: le,
        FormCollapse: ie,
        FormGrid: ce,
        FormLayout: Y,
        FormTab: ue
    }
}), Vt = function(e) {
    if (W(e)) {
        var t = e.match(/@([^:\s]+)(?:\s*\:\s*([\s\S]+))?/);
        return t ? [ t[1], t[2] ] : void 0;
    }
}, Wt = function(e) {
    return function(t, r) {
        var a, o, l, i = e[r] || e[t.value] || t.label, c = Vt(i);
        return ke(ke({}, t), {
            value: null !== (a = null == t ? void 0 : t.value) && void 0 !== a ? a : null,
            label: c ? n.createElement(w, {
                infer: c[0],
                tooltip: c[1]
            }) : null !== (l = null !== (o = null == i ? void 0 : i.label) && void 0 !== o ? o : i) && void 0 !== l ? l : "Unknow"
        });
    };
}, Ot = function(t) {
    pe("*", (function(n) {
        var r, a, o = n.path.toString().replace(/\.[\d+]/g, ""), l = function(n) {
            var r = "settings.".concat(o).concat(n ? ".".concat(n) : "");
            return t.getMessage(r) || e.getDesignerMessage(r);
        }, i = l("title") || l(), c = l("description"), u = l("tooltip"), s = l("dataSource"), d = l("placeholder");
        i && (n.title = i), c && (n.description = c), u && (n.decorator[1] = n.decorator[1] || [], 
        n.decorator[1].tooltip = u), d && (n.component[1] = n.component[1] || [], n.component[1].placeholder = d), 
        fe(n) || ((null == s ? void 0 : s.length) ? (null === (r = n.dataSource) || void 0 === r ? void 0 : r.length) ? n.dataSource = n.dataSource.map(Wt(s)) : n.dataSource = s.slice() : n.dataSource = null === (a = n.dataSource) || void 0 === a ? void 0 : a.filter(Boolean));
    }));
}, Gt = null, _t = function(e) {
    ve("*", (function() {
        clearTimeout(Gt), Gt = setTimeout((function() {
            e.snapshot("update:node:props");
        }), 1e3);
    }));
}, Jt = new he("fadeIn", {
    "0%": {
        opacity: 0
    },
    "100%": {
        opacity: 1
    }
}), qt = new he("slideInRight", {
    "0%": {
        transform: "translateX(100%)"
    },
    "100%": {
        transform: "translateX(0)"
    }
}), Ht = new he("slideOutRight", {
    "0%": {
        transform: "translateX(0)"
    },
    "100%": {
        transform: "translateX(100%)"
    }
}), Ut = function(e, t) {
    var n, r, a, o, l, i, c;
    return [ (n = {}, n[".".concat(e)] = (r = {
        padding: "0 20px"
    }, r["&-wrapper"] = (a = {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden"
    }, a[".dn-node-path"] = {
        flexGrow: 0
    }, a[".ant-formily-item"] = (o = {
        paddingBottom: "8px",
        marginBottom: "8px",
        marginTop: "8px",
        borderBottom: "1px solid ".concat(t.colorBorder)
    }, o["*"] = {
        fontSize: "13px"
    }, o[".ant-formily-item-control-content-component"] = (l = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    }, l["& > .ant-radio-group"] = (i = {
        display: "flex !important",
        width: "100%"
    }, i[".ant-radio-button-wrapper"] = {
        display: "flex",
        justifyContent: "center",
        padding: "0 6px !important",
        alignItems: "center",
        flexGrow: 2
    }, i), l["& > .ant-slider"] = {
        flexShrink: 0,
        minWidth: 0,
        width: "100%"
    }, l["& > .ant-select"] = {
        maxWidth: "140px"
    }, l), o), a), r["&-content"] = {
        flexGrow: 1,
        overflow: "overlay"
    }, r["&-empty"] = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        color: "#888"
    }, r), n), (c = {}, c[".animate__fadeInUp"] = {
        animationName: Jt
    }, c[".animate__slideInRight"] = {
        animationName: qt
    }, c[".animate__slideOutRight"] = {
        animationName: Ht
    }, c[".animate__animated"] = {
        animationDelay: "0ms",
        animationDuration: "0.25s",
        animationFillMode: "forwards"
    }, c), Jt, qt, Ht ];
}, Xt = {
    idleRequest: null
}, Yt = q((function(e) {
    var t, r, a = F(), o = (null == a ? void 0 : a.activeWorkspace) || (null == a ? void 0 : a.currentWorkspace), l = null == o ? void 0 : o.id, i = R(l), c = T(l), u = B(l), d = S("settings-form"), m = null === (t = null == c ? void 0 : c.designerProps) || void 0 === t ? void 0 : t.propsSchema, p = !(c && (null === (r = c.designerProps) || void 0 === r ? void 0 : r.propsSchema) && 1 === u.length), f = s((function() {
        var t;
        return ge({
            initialValues: null === (t = null == c ? void 0 : c.designerProps) || void 0 === t ? void 0 : t.defaultProps,
            values: null == c ? void 0 : c.props,
            effects: function(t) {
                var n;
                Ot(c), _t(i), null === (n = e.effects) || void 0 === n || n.call(e, t);
            }
        });
    }), [ c, null == c ? void 0 : c.props, m, i, p ]), v = k({
        prefix: d,
        styleFun: Ut
    }), g = v.hashId, h = v.wrapSSR;
    return h(n.createElement(w.Provider, {
        tooltip: !0
    }, n.createElement("div", {
        className: A(d + "-wrapper", g)
    }, !p && n.createElement(P, {
        workspaceId: l
    }), n.createElement("div", {
        className: A(d + "-content", g)
    }, p ? n.createElement("div", {
        className: d + "-empty"
    }, n.createElement(E, null)) : n.createElement("div", {
        className: A(d, e.className, g),
        style: e.style,
        key: c.id
    }, n.createElement(Te.Provider, {
        value: e
    }, n.createElement(se, {
        form: f,
        colon: !1,
        labelWidth: 120,
        labelAlign: "left",
        wrapperAlign: "right",
        feedbackLayout: "none",
        tooltipLayout: "text"
    }, n.createElement(Mt, {
        schema: m,
        components: e.components,
        scope: ke({
            $node: c
        }, e.scope)
    }))))))));
}), {
    scheduler: function(e) {
        O(Xt.idleRequest), Xt.idleRequest = G(e, {
            timeout: 500
        });
    }
}), Kt = function(e) {
    return Ie(void 0, void 0, void 0, (function() {
        var t, n;
        return Ce(this, (function(r) {
            return t = ke({
                base: be()
            }, e), _[e.root] ? [ 2, _[t.root] ] : (n = "".concat(t.base, "/").concat(t.package, "/").concat(t.entry), 
            [ 2, new Promise((function(e, r) {
                var a = document.createElement("script");
                a.type = "text/javascript", a.async = !1, a.src = n, a.onload = function() {
                    var n = _[t.root];
                    _["define"] = o, e(n), a.remove();
                }, a.onerror = function(e) {
                    r(e);
                };
                var o = _["define"];
                _["define"] = void 0, document.body.appendChild(a);
            })) ]);
        }));
    }));
};

export { De as BackgroundImageInput, He as BackgroundSizeInput, Ft as BackgroundStyleSetter, Ct as BorderRadiusStyleSetter, It as BorderStyleSetter, Rt as BoxShadowStyleSetter, xt as BoxStyleSetter, jt as CollapseItem, Se as ColorInput, Re as CornerInput, zt as DisplayStyleSetter, lt as DrawerSetter, Dt as FlexStyleSetter, ut as FoldItem, Bt as FontStyleSetter, Pe as ImageInput, vt as InputItems, Qe as MonacoInput, ze as PositionInput, Mt as SchemaField, Yt as SettingsForm, Te as SettingsFormContext, qe as SizeInput, ot as ValueInput, We as createPolyInput, Ot as effectLocales, _t as effectSnapshot, be as getNpmCDNRegistry, Kt as loadScript, xe as setNpmCDNRegistry };
