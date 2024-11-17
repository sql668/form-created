import { GlobalRegistry as e } from "@form-created/core";

import t from "@monaco-editor/loader";

import n, { useRef as r, useState as a, useEffect as o, createContext as l, useContext as i, useLayoutEffect as c, Fragment as u, useMemo as s } from "react";

import { Input as d, Popover as m, Upload as p, Button as f, InputNumber as g, Tooltip as v, Select as h, theme as y, Radio as x, Slider as b, Empty as E } from "antd";

import { usePrefix as S, useCssInJs as k, IconWidget as w, useTheme as I, TextWidget as C, useTreeNode as N, useWorkbench as F, useOperation as R, useSelectedNode as T, useSelected as B, NodePathWidget as P } from "@form-created/react";

import { SketchPicker as D } from "react-color";

import A from "classnames";

import z, { loader as L } from "@monaco-editor/react";

import { parse as j, parseExpression as M } from "@babel/parser";

import { uid as V, isStr as W, cancelIdle as O, requestIdle as G } from "@form-created/shared";

import { createPortal as _ } from "react-dom";

import { observer as J, useField as q, Field as H, createSchemaField as U } from "@formily/react";

import { FormLayout as X, FormItem as Y, Select as K, Input as Z, NumberPicker as $, Radio as Q, DatePicker as ee, TimePicker as te, Switch as ne, Space as re, ArrayItems as ae, ArrayTable as oe, FormCollapse as le, FormGrid as ie, FormTab as ce, Form as ue } from "@formily/antd-v5";

import { observable as se } from "@formily/reactive";

import { camelCase as de } from "@formily/shared";

import { onFieldReact as me, isVoidField as pe, onFieldInputValueChange as fe, createForm as ge } from "@formily/core";

import { Keyframes as ve } from "@ant-design/cssinjs";

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

var he = {
    cdn: "//cdn.jsdelivr.net/npm"
}, ye = function(e) {
    he.cdn = e, t.config({
        paths: {
            vs: "".concat(e, "/monaco-editor@0.30.1/min/vs")
        }
    });
}, xe = function() {
    return String(he.cdn).replace(/\/$/, "");
}, be = function(e, t) {
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
}, Ee = function(e) {
    var t = r(null), a = S("color-input"), o = e.value, l = k({
        prefix: a,
        styleFun: be
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
}, Se = function() {
    return Se = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n], 
        t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
    }, Se.apply(this, arguments);
};

function ke(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var a = 0;
        for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    }
    return n;
}

function we(e, t, n, r) {
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

function Ie(e, t) {
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

function Ce(e, t) {
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

var Ne = function(e, t) {
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
}, Fe = function(e) {
    var t = S("corner-input"), r = k({
        prefix: t,
        styleFun: Ne
    }), l = r.hashId, i = r.wrapSSR, c = Ce(a(e.value), 2), u = c[0], s = c[1];
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
    }, n.createElement("div", Se({}, d("topLeft")), "┏"), n.createElement("div", Se({}, d("bottomLeft")), "┗")), n.createElement("div", {
        className: A(t + "-column", l)
    }, n.createElement("div", Se({}, d("all")), "╋")), n.createElement("div", {
        className: A(t + "-column", l)
    }, n.createElement("div", Se({}, d("topRight")), "┓"), n.createElement("div", Se({}, d("bottomRight")), "┛"))));
}, Re = l(null), Te = function(e, t) {
    var n;
    return [ (n = {}, n[".".concat(e)] = {
        width: "100%"
    }, n) ];
}, Be = function(e) {
    var t = e.className, r = e.style, a = ke(e, [ "className", "style" ]), o = S("image-input"), l = k({
        prefix: o,
        styleFun: Te
    }), c = l.hashId, u = l.wrapSSR, s = i(Re);
    return u(n.createElement("div", {
        className: A(o, t, c),
        style: r
    }, n.createElement(d, Se({}, a, {
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
}, Pe = function(e) {
    var t, r, a = function(e) {
        return /url\([^)]+\)/.test(e) ? e : "url(".concat(e, ")");
    };
    return n.createElement(Be, {
        value: (t = e.value, r = String(t).match(/url\(\s*([^)]+)\s*\)/), (null == r ? void 0 : r[1]) ? null == r ? void 0 : r[1] : t),
        onChange: function(t) {
            var n;
            null === (n = e.onChange) || void 0 === n || n.call(e, a(t));
        }
    });
}, De = function(e, t) {
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
}, Ae = function(e) {
    var t = S("position-input"), r = Ce(a(e.value), 2), l = r[0], i = r[1];
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
        styleFun: De
    }).hashId;
    return n.createElement("div", {
        className: A(t, e.className, u),
        style: e.style
    }, n.createElement("div", {
        className: A(t + "-row", u)
    }, n.createElement("div", Se({}, c("top")), "┳")), n.createElement("div", {
        className: A(t + "-row", u)
    }, n.createElement("div", Se({}, c("left")), "┣"), n.createElement("div", Se({}, c("center")), "╋"), n.createElement("div", Se({}, c("right")), "┫")), n.createElement("div", {
        className: A(t + "-row", u)
    }, n.createElement("div", Se({}, c("bottom")), "┻")));
}, ze = function(e, t) {
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
}, Le = function(e) {
    return null != e;
}, je = function(e) {
    return (null == e ? void 0 : e.target) ? Le(e.target.value) ? e.target.value : Le(e.target.checked) ? e.target.checked : void 0 : e;
}, Me = function(e, t, n) {
    return e.filter((function(e) {
        var r = e.type;
        return Array.isArray(n) && n.length ? n.includes(r) : !Array.isArray(t) || !t.length || !t.includes(r);
    }));
};

function Ve(e) {
    return void 0 === e && (e = []), function(t) {
        var l, i = t.className, c = t.style, u = t.value, s = t.onChange, d = t.exclude, m = t.include, p = ke(t, [ "className", "style", "value", "onChange", "exclude", "include" ]), g = S("poly-input"), v = Me(e, d, m), h = Ce(a(null === (l = v[0]) || void 0 === l ? void 0 : l.type), 2), y = h[0], x = h[1], b = null == v ? void 0 : v.find((function(e) {
            var t = e.type;
            return t === y;
        })), E = null == b ? void 0 : b.component, I = r({});
        o((function() {
            null == v || v.forEach((function(e) {
                var t = e.checker, n = e.type;
                t(u) && x(n);
            }));
        }), [ u ]);
        var C = function(e, t) {
            return (null == t ? void 0 : t.toChangeValue) ? null == t ? void 0 : t.toChangeValue(e) : e;
        }, N = k({
            prefix: g,
            styleFun: ze
        }).hashId;
        return n.createElement("div", {
            className: A(g, i, N),
            style: c
        }, E && n.createElement("div", {
            className: A(g + "-content", N)
        }, n.createElement(E, Se(Se({}, p), {
            value: (null == b ? void 0 : b.toInputValue) ? null == b ? void 0 : b.toInputValue(u) : u,
            onChange: function(e) {
                var t = je(e);
                I.current[null == b ? void 0 : b.type] = t, null == s || s(C(t, b));
            }
        }))), n.createElement(f, {
            className: A(g + "-controller", N),
            style: {
                width: E ? "auto" : "100%"
            },
            block: !0,
            onClick: function() {
                var e, t, n = (e = null == v ? void 0 : v.findIndex((function(e) {
                    var t = e.type;
                    return t === y;
                })), t = e + 1 > (null == v ? void 0 : v.length) - 1 ? 0 : e + 1, v[t]);
                n !== b && (x(null == n ? void 0 : n.type), null == s || s(C(I.current[null == n ? void 0 : n.type], n)));
            }
        }, (null == b ? void 0 : b.icon) ? n.createElement(w, {
            infer: b.icon
        }) : (null == b ? void 0 : b.title) || (null == b ? void 0 : b.type)));
    };
}

var We = function(e) {
    var t = String(e).trim().replace(/[^\d\.]+/, "");
    if ("" !== t) return Number(t);
}, Oe = function(e) {
    return {
        type: e,
        component: g,
        checker: function(t) {
            return String(t).includes(e);
        },
        toInputValue: function(e) {
            return We(e);
        },
        toChangeValue: function(t) {
            return "".concat(t || 0).concat(e);
        }
    };
}, Ge = function(e) {
    return {
        type: e,
        checker: function(t) {
            return t === e;
        },
        toChangeValue: function() {
            return e;
        }
    };
}, _e = [ Ge("inherit"), Ge("auto"), Oe("px"), Oe("%"), Oe("vh"), Oe("em") ], Je = Ve(_e), qe = Ve([ Ge("cover"), Ge("contain"), Oe("px"), Oe("%"), Oe("vh"), Oe("em") ]), He = {
    prettier: null
}, Ue = function(e, t) {
    return we(void 0, void 0, void 0, (function() {
        return Ie(this, (function(n) {
            return He.prettier = He.prettier || new Function('return import("'.concat(xe(), '/prettier@2.x/esm/standalone.mjs")'))(), 
            [ 2, He.prettier.then((function(n) {
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
}, Xe = {
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
}, Ye = {
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
}, Ke = !1, Ze = function(e, t) {
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
}, $e = function(e) {
    var t = e.className, l = e.language, i = e.defaultLanguage, c = e.width, u = e.helpLink, s = e.helpCode, d = e.helpCodeViewWidth, m = e.height, p = e.onMount, f = e.onChange, g = ke(e, [ "className", "language", "defaultLanguage", "width", "helpLink", "helpCode", "helpCodeViewWidth", "height", "onMount", "onChange" ]), h = Ce(a(!1), 2), y = h[0], x = h[1], b = I(), E = r(""), N = r(null), F = r(null), R = r([]), T = r(null), B = r(), P = r(), D = r(l || i), W = r(""), O = r(!1), G = r(!1), _ = r(V()), J = S("monaco-input"), q = k({
        prefix: J,
        styleFun: Ze
    }), H = q.hashId, U = q.wrapSSR, X = g.value || g.defaultValue;
    o((function() {
        return O.current = !1, Ke || L.init().then((function(e) {
            e.editor.defineTheme("monokai", Ye), e.editor.defineTheme("chrome-devtools", Xe), 
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
                    return we(this, void 0, void 0, (function() {
                        var t, n;
                        return Ie(this, (function(r) {
                            switch (r.label) {
                              case 0:
                                return t = {}, [ 4, Ue((null === (n = e["getDesignerLanguage"]) || void 0 === n ? void 0 : n.call(e)) || "typescript", e.getValue()) ];

                              case 1:
                                return [ 2, [ (t.text = r.sent(), t.range = e.getFullModelRange(), t) ] ];
                            }
                        }));
                    }));
                }
            }), Ke = !0;
        })), function() {
            T.current && T.current.dispose(), O.current = !0;
        };
    }), []), o((function() {
        B.current && g.extraLib && Y();
    }), [ g.extraLib ]);
    var Y = function() {
        T.current && T.current.dispose(), T.current = B.current.languages.typescript.typescriptDefaults.addExtraLib(g.extraLib, "".concat(_.current, ".d.ts"));
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
        return e && n.createElement(v, {
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
    }, n.createElement(z, Se({}, g, {
        theme: "dark" === b ? "monokai" : "chrome-devtools",
        defaultLanguage: W.current,
        language: W.current,
        options: Se(Se({
            glyphMargin: !0
        }, g.options), {
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
            }, r ? Ue(D.current, r).then((function(t) {
                e.setValue(t), x(!0);
            })).catch((function() {
                x(!0);
            })) : x(!0), g.extraLib && Y(), e.onDidChangeModelContent((function() {
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
        options: Se(Se({}, g.options), {
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

$e.loader = L;

var Qe = /<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, et = /^\{\{([\s\S]*)\}\}$/, tt = function(e) {
    return "string" == typeof e && et.test(e);
}, nt = function(e) {
    return "string" == typeof e && Qe.test(e);
}, rt = function(e) {
    var t = String(e).replace(/[^\d\.]+/, "");
    if ("" !== t) return Number(t);
}, at = Ve([ {
    type: "TEXT",
    icon: "Text",
    component: d,
    checker: function(e) {
        return "string" == typeof e && !tt(e) && !nt(e);
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
            }, n.createElement($e, Se({}, e, {
                language: "javascript.expression"
            }))),
            trigger: "click"
        }, n.createElement(f, {
            block: !0
        }, n.createElement(C, {
            token: "SettingComponents.ValueInput.expression"
        })));
    },
    checker: tt,
    toInputValue: function(e) {
        if (e && "{{}}" !== e) {
            var t = String(e).match(et);
            return (null == t ? void 0 : t[1]) || e || "";
        }
    },
    toChangeValue: function(e) {
        if (e && "{{}}" !== e) {
            var t = String(e).match(et);
            return "{{".concat((null == t ? void 0 : t[1]) || e || "", "}}");
        }
    }
}, {
    type: "BOOLEAN",
    icon: "Boolean",
    component: function(e) {
        return n.createElement(h, Se({}, e, {
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
    component: g,
    checker: function(e) {
        return "number" == typeof e;
    },
    toInputValue: rt,
    toChangeValue: rt
} ]), ot = J((function(e) {
    var t = N(), r = q(), o = Ce(a(!1), 2), l = o[0], i = o[1], s = Ce(a(!1), 2), d = s[0], m = s[1], p = Ce(a(), 2), g = p[0], v = p[1], h = S("drawer-setter"), y = S("settings-form-wrapper");
    c((function() {
        var e = document.querySelector("." + y);
        e && v(e);
    }), [ t ]);
    var x = function() {
        m(!0), setTimeout((function() {
            i(!1), m(!1);
        }), 150);
    };
    return n.createElement(u, null, n.createElement(f, Se({
        block: !0,
        onClick: function() {
            i(!0);
        }
    }, e.triggerProps), e.text || r.title), g && l ? _(n.createElement("div", {
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
    }, n.createElement(X, {
        colon: !1,
        labelWidth: 120,
        labelAlign: "left",
        wrapperAlign: "right",
        feedbackLayout: "none",
        tooltipLayout: "text"
    }, e.children))), g) : null);
})), lt = function(e, t) {
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
}, it = new Map, ct = J((function(e) {
    var t = e.className;
    e.style;
    var a = e.children, o = ke(e, [ "className", "style", "children" ]), l = S("fold-item"), i = q(), c = s((function() {
        return se.ref(it.get(i.address.toString()));
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
        styleFun: lt
    }), m = d.hashId, p = d.wrapSSR;
    return p(n.createElement("div", {
        className: A(l, t, m)
    }, n.createElement("div", {
        className: A(l + "-base", m),
        onClick: function() {
            c.value = !c.value, it.set(i.address.toString(), c.value);
        }
    }, n.createElement(Y.BaseItem, Se({}, o, {
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
})), ut = function() {
    return n.createElement(u, null);
};

ut.displayName = "FoldItem.Base";

var st = function() {
    return n.createElement(u, null);
};

st.displayName = "FoldItem.Extra", ct.Base = ut, ct.Extra = st;

var dt = function(e, t) {
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
}, mt = function(e, t) {
    var n;
    return [ (n = {}, n[".".concat(e)] = {}, n) ];
}, pt = n.createContext(null), ft = function(e) {
    var t = S("input-items"), r = k({
        prefix: t,
        styleFun: dt
    }).hashId;
    return n.createElement(pt.Provider, {
        value: e
    }, n.createElement("div", {
        className: A(t, e.className, r),
        style: e.style
    }, e.children));
};

ft.Item = function(e) {
    var t = e.width, r = void 0 === t ? "100%" : t, a = S("input-items-item"), o = i(pt), l = k({
        prefix: a,
        styleFun: mt
    }), c = l.hashId, u = l.wrapSSR;
    return u(n.createElement("div", {
        className: A(a, e.className, {
            vertical: e.vertical || o.vertical
        }, c),
        style: Se({
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

var gt, vt = {
    top: 1,
    right: 2,
    bottom: 3,
    left: 4,
    all: 1
}, ht = /([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+))?)?)?/, yt = J((function(e) {
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
    }) ] : t, a = q(), o = S("box-style-setter"), l = function(e, t) {
        var n = String(t.value).match(ht) || [], r = n[vt[e]], a = n[1], o = n[2], l = n[3], i = n[4], c = a === o && o === l && l === i;
        return Se(Se({}, t), {
            value: "all" === e ? c ? a : void 0 : r,
            onChange: function(r) {
                var a, o;
                "all" === e ? null === (a = t.onChange) || void 0 === a || a.call(t, "".concat(r || "0px", " ").concat(r || "0px", " ").concat(r || "0px", " ").concat(r || "0px")) : (n[vt[e]] = r, 
                null === (o = t.onChange) || void 0 === o || o.call(t, "".concat(n[1] || "0px", " ").concat(n[2] || "0px", " ").concat(n[3] || "0px", " ").concat(n[4] || "0px")));
            }
        });
    };
    return n.createElement(ct, {
        className: A(o, e.className),
        label: a.title
    }, n.createElement(ct.Base, null, n.createElement(Je, Se({}, l("all", e), {
        exclude: [ "inherit", "auto" ]
    }))), n.createElement(ct.Extra, null, n.createElement(ft, {
        width: "50%"
    }, n.createElement(ft.Item, {
        icon: r[0]
    }, n.createElement(Je, Se({}, l("top", e), {
        exclude: [ "inherit", "auto" ]
    }))), n.createElement(ft.Item, {
        icon: r[1]
    }, n.createElement(Je, Se({}, l("right", e), {
        exclude: [ "inherit", "auto" ]
    }))), n.createElement(ft.Item, {
        icon: r[2]
    }, n.createElement(Je, Se({}, l("bottom", e), {
        exclude: [ "inherit", "auto" ]
    }))), n.createElement(ft.Item, {
        icon: r[3]
    }, n.createElement(Je, Se({}, l("left", e), {
        exclude: [ "inherit", "auto" ]
    }))))));
})), xt = function(e, t) {
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
}, bt = [ "center", "top", "right", "bottom", "left" ], Et = function(e) {
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
}, St = function(e, t) {
    var n = "center" === e ? "" : "-".concat(e);
    return de("border".concat(n, "-").concat(t));
}, kt = function(e) {
    for (var t = e.address.parent(), n = 0; n < bt.length; n++) {
        var r = bt[n], a = "".concat(t, ".").concat(St(r, "style")), o = "".concat(t, ".").concat(St(r, "width")), l = "".concat(t, ".").concat(St(r, "color"));
        if (e.query(a).value() || e.query(o).value() || e.query(l).value()) return r;
    }
    return "center";
}, wt = J((function(e) {
    var t = e.className, r = e.style, a = q(), o = s((function() {
        return se({
            value: kt(a)
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
        styleFun: xt
    }).hashId;
    return n.createElement(ct, {
        label: a.title
    }, n.createElement(ct.Extra, null, n.createElement("div", {
        className: A(l, t, c),
        style: r
    }, n.createElement("div", {
        className: A(l + "-position", c)
    }, n.createElement(Ae, {
        value: o.value,
        onChange: function(e) {
            o.value = e;
        }
    })), n.createElement("div", {
        className: A(l + "-input", c)
    }, bt.map((function(e, t) {
        return n.createElement(u, {
            key: t
        }, n.createElement(H, {
            name: St(e, "style"),
            basePath: a.address.parent(),
            dataSource: Et(c),
            reactions: i(e),
            component: [ K, {
                placeholder: "Please Select"
            } ]
        }), n.createElement(H, {
            name: St(e, "width"),
            basePath: a.address.parent(),
            reactions: i(e),
            component: [ Je, {
                exclude: [ "auto" ]
            } ]
        }), n.createElement(H, {
            name: St(e, "color"),
            basePath: a.address.parent(),
            reactions: i(e),
            component: [ Ee ]
        }));
    }))))));
})), It = function(e) {
    return n.createElement(yt, Se({}, e, {
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
}, Ct = y.useToken, Nt = J((function(e) {
    var t = q(), r = S("background-style-setter"), a = Ct().hashId;
    return n.createElement(ct, {
        className: A(r, e.className, a),
        label: t.title
    }, n.createElement(ct.Base, null, n.createElement(H, {
        name: "backgroundColor",
        basePath: t.address.parent(),
        component: [ Ee ]
    })), n.createElement(ct.Extra, null, n.createElement(ft, null, n.createElement(ft.Item, {
        icon: "Image"
    }, n.createElement(H, {
        name: "backgroundImage",
        basePath: t.address.parent(),
        component: [ Pe ]
    })), n.createElement(ft.Item, {
        icon: "ImageSize",
        width: "50%"
    }, n.createElement(H, {
        name: "backgroundSize",
        basePath: t.address.parent(),
        component: [ qe ]
    })), n.createElement(ft.Item, {
        icon: "Repeat",
        width: "50%"
    }, n.createElement(H, {
        name: "backgroundRepeat",
        basePath: t.address.parent(),
        component: [ K, {
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
    })), n.createElement(ft.Item, {
        icon: "Position"
    }, n.createElement(H, {
        name: "backgroundPosition",
        basePath: t.address.parent(),
        component: [ Z, {
            placeholder: "center center"
        } ]
    })))));
})), Ft = J((function(e) {
    var t = q(), r = S("shadow-style-setter"), a = function(t) {
        var n = String(e.value || "").trim().split(" ");
        return {
            value: n[t],
            onChange: function(r) {
                var a;
                n[t] = r, null === (a = e.onChange) || void 0 === a || a.call(e, "".concat(n[0] || "", " ").concat(n[1] || "", " ").concat(n[2] || "", " ").concat(n[3] || "", " ").concat(n[4] || ""));
            }
        };
    };
    return n.createElement(ct, {
        className: A(r, e.className),
        style: e.style,
        label: t.title
    }, n.createElement(ct.Base, null, n.createElement(Ee, Se({}, a(4)))), n.createElement(ct.Extra, null, n.createElement(ft, {
        width: "50%"
    }, n.createElement(ft.Item, {
        icon: "AxisX"
    }, n.createElement(Je, Se({
        exclude: [ "inherit", "auto" ]
    }, a(0)))), n.createElement(ft.Item, {
        icon: "AxisY"
    }, n.createElement(Je, Se({
        exclude: [ "inherit", "auto" ]
    }, a(1)))), n.createElement(ft.Item, {
        icon: "Blur"
    }, n.createElement(Je, Se({
        exclude: [ "inherit", "auto" ]
    }, a(2)))), n.createElement(ft.Item, {
        icon: "Shadow"
    }, n.createElement(Je, Se({
        exclude: [ "inherit", "auto" ]
    }, a(3)))))));
})), Rt = (gt = [ "宋体=SimSun", "微软雅黑=Microsoft Yahei", "苹方=PingFang SC", "Andale Mono=andale mono,monospace", "Arial=arial,helvetica,sans-serif", "Arial Black=arial black,sans-serif", "Book Antiqua=book antiqua,palatino,serif", "Comic Sans MS=comic sans ms,sans-serif", "Courier New=courier new,courier,monospace", "Georgia=georgia,palatino,serif", "Helvetica Neue=Helvetica Neue", "Helvetica=helvetica,arial,sans-serif", "Impact=impact,sans-serif", "Symbol=symbol", "Tahoma=tahoma,arial,helvetica,sans-serif", "Terminal=terminal,monaco,monospace", "Times New Roman=times new roman,times,serif", "Trebuchet MS=trebuchet ms,geneva,sans-serif", "Verdana=verdana,geneva,sans-serif" ], 
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
}))), Tt = J((function(e) {
    var t = q(), r = S("font-style-setter");
    return n.createElement(ct, {
        label: t.title,
        className: A(r, e.className),
        style: e.style
    }, n.createElement(ct.Base, null, n.createElement(H, {
        name: "fontFamily",
        basePath: t.address.parent(),
        component: [ K, {
            style: {
                width: "100%"
            },
            placeholder: "Helvetica Neue"
        } ],
        dataSource: Rt
    })), n.createElement(ct.Extra, null, n.createElement(ft, null, n.createElement(ft.Item, {
        icon: "FontWeight",
        width: "50%"
    }, n.createElement(H, {
        name: "fontWeight",
        basePath: t.address.parent(),
        component: [ $, {
            placeholder: "400"
        } ]
    })), n.createElement(ft.Item, {
        icon: "FontStyle",
        width: "50%"
    }, n.createElement(H, {
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
        component: [ Q.Group, {
            optionType: "button"
        } ]
    })), n.createElement(ft.Item, {
        icon: "FontColor",
        width: "100%"
    }, n.createElement(H, {
        name: "color",
        basePath: t.address.parent(),
        component: [ Ee ]
    })), n.createElement(ft.Item, {
        icon: "FontSize",
        width: "50%"
    }, n.createElement(H, {
        name: "fontSize",
        basePath: t.address.parent(),
        component: [ Je, {
            exclude: [ "auto" ]
        } ]
    })), n.createElement(ft.Item, {
        icon: "LineHeight",
        width: "50%"
    }, n.createElement(H, {
        name: "lineHeight",
        basePath: t.address.parent(),
        component: [ Je, {
            exclude: [ "auto" ]
        } ]
    })), n.createElement(ft.Item, {
        icon: "TextAlign"
    }, n.createElement(H, {
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
        component: [ Q.Group, {
            optionType: "button"
        } ]
    })), n.createElement(ft.Item, {
        icon: "TextDecoration"
    }, n.createElement(H, {
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
        component: [ Q.Group, {
            optionType: "button"
        } ]
    })))));
})), Bt = function(e, t) {
    var n, r;
    return [ (n = {}, n[".".concat(e)] = (r = {}, r[".dn-input-items"] = {}, r), n) ];
}, Pt = J((function(e) {
    var t = q(), r = S("flex-style-setter"), a = k({
        prefix: r,
        styleFun: Bt
    }).hashId;
    return n.createElement("div", {
        className: A(r, e.className, a),
        style: e.style
    }, n.createElement(ft, {
        vertical: !0
    }, n.createElement(H, {
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
        decorator: [ ft.Item ],
        component: [ Q.Group, {
            optionType: "button"
        } ]
    }), n.createElement(H, {
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
        decorator: [ ft.Item ],
        component: [ Q.Group, {
            optionType: "button"
        } ]
    }), n.createElement(H, {
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
        decorator: [ ft.Item ],
        component: [ Q.Group, {
            optionType: "button"
        } ]
    }), n.createElement(H, {
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
        decorator: [ ft.Item ],
        component: [ Q.Group, {
            optionType: "button"
        } ]
    }), n.createElement(H, {
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
        decorator: [ ft.Item ],
        component: [ Q.Group, {
            optionType: "button"
        } ]
    })));
})), Dt = function(e, t) {
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
}, At = J((function(e) {
    var t = q(), r = S("display-style-setter"), a = k({
        prefix: r,
        styleFun: Dt
    }), o = a.hashId, l = a.wrapSSR;
    return l(n.createElement(n.Fragment, null, n.createElement(Y.BaseItem, {
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
    })), n.createElement(H, {
        name: "flex",
        basePath: t.address.parent(),
        visible: !1,
        reactions: function(e) {
            e.visible = "flex" === t.value;
        },
        component: [ Pt ]
    })));
})), zt = function(e, t) {
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
}, Lt = J((function(e) {
    var t, r = S("collapse-item"), o = k({
        prefix: r,
        styleFun: zt
    }), l = o.hashId, i = o.wrapSSR, c = q(), u = Ce(a(null === (t = e.defaultExpand) || void 0 === t || t), 2), s = u[0], d = u[1];
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
})), jt = U({
    components: {
        FormItem: Y,
        CollapseItem: Lt,
        Input: Z,
        ValueInput: at,
        SizeInput: Je,
        ColorInput: Ee,
        ImageInput: Be,
        MonacoInput: $e,
        PositionInput: Ae,
        CornerInput: Fe,
        BackgroundImageInput: Pe,
        BackgroundStyleSetter: Nt,
        BoxStyleSetter: yt,
        BorderStyleSetter: wt,
        BorderRadiusStyleSetter: It,
        DisplayStyleSetter: At,
        BoxShadowStyleSetter: Ft,
        FlexStyleSetter: Pt,
        FontStyleSetter: Tt,
        DrawerSetter: ot,
        NumberPicker: $,
        DatePicker: ee,
        TimePicker: te,
        Select: K,
        Radio: Q,
        Slider: b,
        Switch: ne,
        Space: re,
        ArrayItems: ae,
        ArrayTable: oe,
        FormCollapse: le,
        FormGrid: ie,
        FormLayout: X,
        FormTab: ce
    }
}), Mt = function(e) {
    if (W(e)) {
        var t = e.match(/@([^:\s]+)(?:\s*\:\s*([\s\S]+))?/);
        return t ? [ t[1], t[2] ] : void 0;
    }
}, Vt = function(e) {
    return function(t, r) {
        var a, o, l, i = e[r] || e[t.value] || t.label, c = Mt(i);
        return Se(Se({}, t), {
            value: null !== (a = null == t ? void 0 : t.value) && void 0 !== a ? a : null,
            label: c ? n.createElement(w, {
                infer: c[0],
                tooltip: c[1]
            }) : null !== (l = null !== (o = null == i ? void 0 : i.label) && void 0 !== o ? o : i) && void 0 !== l ? l : "Unknow"
        });
    };
}, Wt = function(t) {
    me("*", (function(n) {
        var r, a, o = n.path.toString().replace(/\.[\d+]/g, ""), l = function(n) {
            var r = "settings.".concat(o).concat(n ? ".".concat(n) : "");
            return t.getMessage(r) || e.getDesignerMessage(r);
        }, i = l("title") || l(), c = l("description"), u = l("tooltip"), s = l("dataSource"), d = l("placeholder");
        i && (n.title = i), c && (n.description = c), u && (n.decorator[1] = n.decorator[1] || [], 
        n.decorator[1].tooltip = u), d && (n.component[1] = n.component[1] || [], n.component[1].placeholder = d), 
        pe(n) || ((null == s ? void 0 : s.length) ? (null === (r = n.dataSource) || void 0 === r ? void 0 : r.length) ? n.dataSource = n.dataSource.map(Vt(s)) : n.dataSource = s.slice() : n.dataSource = null === (a = n.dataSource) || void 0 === a ? void 0 : a.filter(Boolean));
    }));
}, Ot = null, Gt = function(e) {
    fe("*", (function() {
        clearTimeout(Ot), Ot = setTimeout((function() {
            e.snapshot("update:node:props");
        }), 1e3);
    }));
}, _t = new ve("fadeIn", {
    "0%": {
        opacity: 0
    },
    "100%": {
        opacity: 1
    }
}), Jt = new ve("slideInRight", {
    "0%": {
        transform: "translateX(100%)"
    },
    "100%": {
        transform: "translateX(0)"
    }
}), qt = new ve("slideOutRight", {
    "0%": {
        transform: "translateX(0)"
    },
    "100%": {
        transform: "translateX(100%)"
    }
}), Ht = function(e, t) {
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
        animationName: _t
    }, c[".animate__slideInRight"] = {
        animationName: Jt
    }, c[".animate__slideOutRight"] = {
        animationName: qt
    }, c[".animate__animated"] = {
        animationDelay: "0ms",
        animationDuration: "0.25s",
        animationFillMode: "forwards"
    }, c), _t, Jt, qt ];
}, Ut = {
    idleRequest: null
}, Xt = J((function(e) {
    var t, r, a = F(), o = (null == a ? void 0 : a.activeWorkspace) || (null == a ? void 0 : a.currentWorkspace), l = null == o ? void 0 : o.id, i = R(l), c = T(l), u = B(l), d = S("settings-form"), m = null === (t = null == c ? void 0 : c.designerProps) || void 0 === t ? void 0 : t.propsSchema, p = !(c && (null === (r = c.designerProps) || void 0 === r ? void 0 : r.propsSchema) && 1 === u.length), f = s((function() {
        var t;
        return ge({
            initialValues: null === (t = null == c ? void 0 : c.designerProps) || void 0 === t ? void 0 : t.defaultProps,
            values: null == c ? void 0 : c.props,
            effects: function(t) {
                var n;
                Wt(c), Gt(i), null === (n = e.effects) || void 0 === n || n.call(e, t);
            }
        });
    }), [ c, null == c ? void 0 : c.props, m, i, p ]), g = k({
        prefix: d,
        styleFun: Ht
    }), v = g.hashId, h = g.wrapSSR;
    return h(n.createElement(w.Provider, {
        tooltip: !0
    }, n.createElement("div", {
        className: A(d + "-wrapper", v)
    }, !p && n.createElement(P, {
        workspaceId: l
    }), n.createElement("div", {
        className: A(d + "-content", v)
    }, p ? n.createElement("div", {
        className: d + "-empty"
    }, n.createElement(E, null)) : n.createElement("div", {
        className: A(d, e.className, v),
        style: e.style,
        key: c.id
    }, n.createElement(Re.Provider, {
        value: e
    }, n.createElement(ue, {
        form: f,
        colon: !1,
        labelWidth: 120,
        labelAlign: "left",
        wrapperAlign: "right",
        feedbackLayout: "none",
        tooltipLayout: "text"
    }, n.createElement(jt, {
        schema: m,
        components: e.components,
        scope: Se({
            $node: c
        }, e.scope)
    }))))))));
}), {
    scheduler: function(e) {
        O(Ut.idleRequest), Ut.idleRequest = G(e, {
            timeout: 500
        });
    }
});

export { Pe as BackgroundImageInput, qe as BackgroundSizeInput, Nt as BackgroundStyleSetter, It as BorderRadiusStyleSetter, wt as BorderStyleSetter, Ft as BoxShadowStyleSetter, yt as BoxStyleSetter, Lt as CollapseItem, Ee as ColorInput, Fe as CornerInput, At as DisplayStyleSetter, ot as DrawerSetter, Pt as FlexStyleSetter, ct as FoldItem, Tt as FontStyleSetter, Be as ImageInput, ft as InputItems, $e as MonacoInput, Ae as PositionInput, jt as SchemaField, Xt as SettingsForm, Je as SizeInput, at as ValueInput, Ve as createPolyInput, Wt as effectLocales, Gt as effectSnapshot, xe as getNpmCDNRegistry, ye as setNpmCDNRegistry };
