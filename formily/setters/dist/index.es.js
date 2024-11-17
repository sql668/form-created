import { GlobalRegistry as e } from "@form-created/core";

import t, { useMemo as n, Fragment as a, useState as o, useEffect as r } from "react";

import l from "classnames";

import { Button as i, Tree as c, Modal as s, TreeSelect as d, Menu as p, Card as u, Tag as m, Tooltip as f, Select as v } from "antd";

import { observable as g } from "@formily/reactive";

import { observer as y } from "@formily/reactive-react";

import { usePrefix as b, useToken as h, TextWidget as x, IconWidget as S, useTheme as E, useCssInJs as C, useSelectedNode as V } from "@form-created/react";

import { PlusOutlined as k } from "@ant-design/icons";

import { FormItem as w, Input as N, ArrayItems as A, Form as I, FormCollapse as D, Select as R, ArrayTable as T } from "@formily/antd-v5";

import { createForm as $, isVoidField as P } from "@formily/core";

import { createSchemaField as F, observer as M, useField as L, SchemaContext as O, Schema as B } from "@formily/react";

import { ValueInput as j, MonacoInput as q, getNpmCDNRegistry as G, FoldItem as K } from "@form-created/react-settings-form";

import { clone as U, uid as z, toArr as _, isPlainObj as W, reduce as H } from "@formily/shared";

import { requestIdle as J } from "@form-created/shared";

var Z = [ {
    label: "URL地址",
    value: "url"
}, {
    label: "邮箱格式",
    value: "email"
}, {
    label: "数字格式",
    value: "number"
}, {
    label: "整数格式",
    value: "integer"
}, {
    label: "身份证格式",
    value: "idcard"
}, {
    label: "手机号格式",
    value: "phone"
}, {
    label: "货币格式",
    value: "money"
}, {
    label: "中文格式",
    value: "zh"
}, {
    label: "日期格式",
    value: "date"
}, {
    label: "邮编格式",
    value: "zip"
} ], X = {
    "zh-CN": {
        settings: {
            "x-validator": {
                title: "校验规则",
                addValidatorRules: "添加校验规则",
                drawer: "配置规则",
                triggerType: {
                    title: "触发类型",
                    placeholder: "请选择",
                    dataSource: [ "输入时", "聚焦时", "失焦时" ]
                },
                format: {
                    title: "格式校验",
                    placeholder: "请选择",
                    dataSource: Z
                },
                validator: {
                    title: "自定义校验器",
                    tooltip: '格式: function (value){ return "Error Message"}'
                },
                pattern: "正则表达式",
                len: "长度限制",
                max: "长度/数值小于",
                min: "长度/数值大于",
                exclusiveMaximum: "长度/数值小于等于",
                exclusiveMinimum: "长度/数值大于等于",
                whitespace: "不允许空白符",
                required: "是否必填",
                message: {
                    title: "错误消息",
                    tooltip: "错误消息只对当前规则集的一个内置规则生效，如果需要对不同内置规则定制错误消息，请拆分成多条规则"
                }
            }
        },
        SettingComponents: {
            DataSourceSetter: {
                nodeProperty: "节点属性",
                pleaseSelectNode: "请先选择左侧树节点",
                addKeyValuePair: "添加键值对",
                configureDataSource: "配置可选项",
                dataSource: "可选项",
                defaultTitle: "默认标题",
                dataSourceTree: "可选项节点树",
                addNode: "新增节点",
                label: "键名",
                value: "键值",
                item: "选项"
            },
            ReactionsSetter: {
                configureReactions: "配置响应器",
                relationsFields: "依赖字段",
                variableName: "变量名",
                variableNameValidateMessage: "不符合变量命名规则",
                pleaseInput: "请输入",
                sourceField: "来源字段",
                sourceProperty: "字段属性",
                variableType: "变量类型",
                operations: "操作",
                addRelationField: "添加依赖字段",
                propertyReactions: "属性响应(仅支持JS表达式)",
                actionReactions: "动作响应(高级，可选，支持JS语句)",
                visible: "显示/隐藏",
                hidden: "UI隐藏",
                display: "展示状态",
                pattern: "UI形态",
                title: "标题",
                description: "描述",
                value: "字段值",
                initialValue: "默认值",
                dataSource: "可选项",
                required: "是否必填",
                component: "组件",
                componentProps: "组件属性",
                decorator: "容器",
                decoratorProps: "容器属性",
                pleaseSelect: "请选择",
                expressionValueTypeIs: "表达式值类型为"
            },
            ValidatorSetter: {
                pleaseSelect: "请选择",
                formats: Z
            }
        }
    }
}, Y = [ {
    label: "URL",
    value: "url"
}, {
    label: "Email",
    value: "email"
}, {
    label: "Number",
    value: "number"
}, {
    label: "Integer",
    value: "integer"
}, {
    label: "ID",
    value: "idcard"
}, {
    label: "Phone Number",
    value: "phone"
}, {
    label: "Currency",
    value: "money"
}, {
    label: "Chinese",
    value: "zh"
}, {
    label: "Date",
    value: "date"
}, {
    label: "Zip",
    value: "zip"
} ], Q = {
    "en-US": {
        settings: {
            "x-validator": {
                title: "Validator",
                addValidatorRules: "Add Validator Rules",
                drawer: "Edit Rules",
                triggerType: {
                    title: "Trigger Type",
                    placeholder: "Please Select",
                    dataSource: [ "onInput", "onFocus", "onBlur" ]
                },
                format: {
                    title: "Format",
                    placeholder: "Please Select",
                    dataSource: Y
                },
                validator: {
                    title: "Custom Validator",
                    tooltip: 'Format: function (value){ return "Error Message"}'
                },
                pattern: "RegExp",
                len: "Length Limit",
                max: "Length/Value Lt",
                min: "Length/Value Gt",
                exclusiveMaximum: "Length/Value Lte",
                exclusiveMinimum: "Length/Value Gte",
                whitespace: "No Whitespace",
                required: "Required",
                message: {
                    title: "Error Message",
                    tooltip: "The error message is only effective for one built-in rule of the current rule set. If you need to customize the error message for different built-in rules, please split into multiple rules"
                }
            }
        },
        SettingComponents: {
            DataSourceSetter: {
                nodeProperty: "Node Property",
                pleaseSelectNode: "please select node from the tree on the left",
                addKeyValuePair: "Add Key Value Pair",
                configureDataSource: "Configure",
                dataSource: "Options",
                defaultTitle: "Default Title",
                dataSourceTree: "Options Tree",
                addNode: "Add Node",
                label: "label",
                value: "value",
                item: "Item"
            },
            ReactionsSetter: {
                configureReactions: "Configure",
                relationsFields: "Associated Fields",
                variableName: "Variable Name",
                variableNameValidateMessage: "This is not a standard variable name",
                pleaseInput: "Please Input",
                sourceField: "Source Field",
                sourceProperty: "Field Property",
                variableType: "Variable Type",
                operations: "Operations",
                addRelationField: "Add Associated Field",
                propertyReactions: "Property Reactions(Only Support Javascript Expression)",
                actionReactions: "Action Reactions(Optional, Support Javascript Statement)",
                visible: "Show/None",
                hidden: "Show/UI Hidden",
                display: "Display",
                pattern: "Pattern",
                title: "Title",
                description: "Description",
                value: "Value",
                initialValue: "InitialValue",
                dataSource: "Options",
                required: "Required",
                component: "Component",
                componentProps: "Component Props",
                decorator: "Decorator",
                decoratorProps: "Decorator Props",
                pleaseSelect: "Please Select",
                expressionValueTypeIs: "Expression value type is"
            },
            ValidatorSetter: {
                pleaseSelect: "Please Select",
                formats: Y
            }
        }
    }
}, ee = [ {
    label: "URL",
    value: "url"
}, {
    label: "이메일",
    value: "email"
}, {
    label: "숫자",
    value: "number"
}, {
    label: "상수",
    value: "integer"
}, {
    label: "ID",
    value: "idcard"
}, {
    label: "휴대폰 번호",
    value: "phone"
}, {
    label: "통화",
    value: "money"
}, {
    label: "중국",
    value: "zh"
}, {
    label: "날짜",
    value: "date"
}, {
    label: "Zip",
    value: "zip"
} ], te = {
    "ko-KR": {
        settings: {
            "x-validator": {
                title: "유효성 검사 도구",
                addValidatorRules: "유효성 검사 규칙 추가",
                drawer: "규칙 수정",
                triggerType: {
                    title: "트리거 타입",
                    placeholder: "선택하세요",
                    dataSource: [ "onInput", "onFocus", "onBlur" ]
                },
                format: {
                    title: "포맷",
                    placeholder: "선택하세요",
                    dataSource: ee
                },
                validator: {
                    title: "사용자 정의 유효성 검사 도구",
                    tooltip: '형식: function (value){ return "Error Message"}'
                },
                pattern: "RegExp",
                len: "길이 제한",
                max: "길이/값 Lt",
                min: "길이/값 Gt",
                exclusiveMaximum: "길이/값 Lte",
                exclusiveMinimum: "길이/값 Gte",
                whitespace: "공백 없음",
                required: "필수 항목",
                message: {
                    title: "오류 메시지",
                    tooltip: "오류 메시지는 현재의 규칙 셋의 하나의 빌트인 규칙에 대해서만 적용됩니다. 여러 빌트인 규칙에 대한 오류 메시지를 사용자 정의해야 하는 경우 여러 규칙으로 분할하세요."
                }
            }
        },
        SettingComponents: {
            DataSourceSetter: {
                nodeProperty: "노드 속성",
                pleaseSelectNode: "왼쪽에 있는 트리에서 노드를 선택하세요.",
                addKeyValuePair: "키/값 쌍 추가",
                configureDataSource: "구성",
                dataSource: "Options",
                defaultTitle: "기본 제목",
                dataSourceTree: "Options 트리",
                addNode: "노드 추가",
                label: "레이블",
                value: "값",
                item: "아이템"
            },
            ReactionsSetter: {
                configureReactions: "구성",
                relationsFields: "관련 필드",
                variableName: "변수 이름",
                variableNameValidateMessage: "표준 변수 이름이 아닙니다.",
                pleaseInput: "입력해주세요",
                sourceField: "Source Field",
                sourceProperty: "필드 속성",
                variableType: "변수 타입",
                operations: "작업",
                addRelationField: "관련 필드 추가",
                propertyReactions: "구성 리엑션(자바스크립트 표현식만 지원함)",
                actionReactions: "액션 리엑션(선택사항, 자바스크립트 구문을 지원함)",
                visible: "보기/없음",
                hidden: "보기/UI 숨기기",
                display: "디스플레이",
                pattern: "패턴",
                title: "제목",
                description: "설명",
                value: "값",
                initialValue: "초기값",
                dataSource: "Options",
                required: "필수 항목",
                component: "컴포넌트",
                componentProps: "컴포넌트 속성",
                decorator: "테코레이터",
                decoratorProps: "테코레이터 속성",
                pleaseSelect: "선택하세요",
                expressionValueTypeIs: "표현식 값 타입은"
            },
            ValidatorSetter: {
                pleaseSelect: "선택하세요",
                formats: ee
            }
        }
    }
};

e.registerDesignerLocales(X, Q, te);

var ne = function() {
    return ne = Object.assign || function(e) {
        for (var t, n = 1, a = arguments.length; n < a; n++) for (var o in t = arguments[n], 
        t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
    }, ne.apply(this, arguments);
};

function ae(e, t, n, a) {
    return new (n || (n = Promise))((function(o, r) {
        function l(e) {
            try {
                c(a.next(e));
            } catch (t) {
                r(t);
            }
        }
        function i(e) {
            try {
                c(a["throw"](e));
            } catch (t) {
                r(t);
            }
        }
        function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                e(t);
            }))).then(l, i);
        }
        c((a = a.apply(e, t || [])).next());
    }));
}

function oe(e, t) {
    var n, a, o, r, l = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
        },
        trys: [],
        ops: []
    };
    return r = {
        next: i(0),
        throw: i(1),
        return: i(2)
    }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
        return this;
    }), r;
    function i(e) {
        return function(t) {
            return c([ e, t ]);
        };
    }
    function c(i) {
        if (n) throw new TypeError("Generator is already executing.");
        for (;r && (r = 0, i[0] && (l = 0)), l; ) try {
            if (n = 1, a && (o = 2 & i[0] ? a["return"] : i[0] ? a["throw"] || ((o = a["return"]) && o.call(a), 
            0) : a.next) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
              case 0:
              case 1:
                o = i;
                break;

              case 4:
                return l.label++, {
                    value: i[1],
                    done: !1
                };

              case 5:
                l.label++, a = i[1], i = [ 0 ];
                continue;

              case 7:
                i = l.ops.pop(), l.trys.pop();
                continue;

              default:
                if (!(o = l.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    l = 0;
                    continue;
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    l.label = i[1];
                    break;
                }
                if (6 === i[0] && l.label < o[1]) {
                    l.label = o[1], o = i;
                    break;
                }
                if (o && l.label < o[2]) {
                    l.label = o[2], l.ops.push(i);
                    break;
                }
                o[2] && l.ops.pop(), l.trys.pop();
                continue;
            }
            i = t.call(e, l);
        } catch (c) {
            i = [ 6, c ], a = 0;
        } finally {
            n = o = 0;
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        };
    }
}

function re(e) {
    var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], a = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length) return {
        next: function() {
            return e && a >= e.length && (e = void 0), {
                value: e && e[a++],
                done: !e
            };
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function le(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var a, o, r = n.call(e), l = [];
    try {
        for (;(void 0 === t || t-- > 0) && !(a = r.next()).done; ) l.push(a.value);
    } catch (i) {
        o = {
            error: i
        };
    } finally {
        try {
            a && !a.done && (n = r["return"]) && n.call(r);
        } finally {
            if (o) throw o.error;
        }
    }
    return l;
}

function ie(e, t, n) {
    if (n || 2 === arguments.length) for (var a, o = 0, r = t.length; o < r; o++) !a && o in t || (a || (a = Array.prototype.slice.call(t, 0, o)), 
    a[o] = t[o]);
    return e.concat(a || Array.prototype.slice.call(t));
}

"function" == typeof SuppressedError && SuppressedError;

var ce = y((function(e) {
    var n = e.extra, a = e.title, o = b("data-source-setter"), r = h().hashId;
    return t.createElement("div", {
        className: l("".concat(o + "-layout-item-header"), r)
    }, t.createElement("div", {
        className: l("".concat(o + "-layout-item-title"), r)
    }, a), n);
})), se = function(e, t) {
    for (var n, a, o = 0; o < e.length; o++) t(e[o], o, e), (null === (n = e[o]) || void 0 === n ? void 0 : n.children) && se(null === (a = e[o]) || void 0 === a ? void 0 : a.children, t);
}, de = function(e) {
    var t = U(e);
    return se(t, (function(e, t, n) {
        var a, o, r = {
            key: "",
            duplicateKey: "",
            map: [],
            children: []
        };
        try {
            for (var l = re(Object.entries(n[t] || {})), i = l.next(); !i.done; i = l.next()) {
                var c = le(i.value, 2), s = c[0], d = c[1];
                "children" !== s && r.map.push({
                    label: s,
                    value: d
                });
            }
        } catch (u) {
            a = {
                error: u
            };
        } finally {
            try {
                i && !i.done && (o = l.return) && o.call(l);
            } finally {
                if (a) throw a.error;
            }
        }
        var p = z();
        r.key = p, r.duplicateKey = p, r.children = n[t].children || [], n[t] = r;
    })), t;
}, pe = function(e) {
    var t = U(e);
    return se(t, (function(e, t, n) {
        var a, o = {
            children: []
        };
        _(n[t].map).forEach((function(e) {
            e.label && (o[e.label] = e.value);
        })), o.children = (null === (a = n[t]) || void 0 === a ? void 0 : a.children) || [], 
        n[t] = o;
    })), t;
}, ue = F({
    components: {
        FormItem: w,
        Input: N,
        ArrayItems: A,
        ValueInput: j
    }
}), me = y((function(e) {
    var o = e.allowExtendOption, r = e.effects, c = b("data-source-setter"), s = h().hashId, d = n((function() {
        var t;
        return se(e.treeDataSource.dataSource, (function(n) {
            n.key === e.treeDataSource.selectedKey && (t = n);
        })), $({
            values: t,
            effects: r
        });
    }), [ e.treeDataSource.selectedKey, e.treeDataSource.dataSource.length ]);
    return e.treeDataSource.selectedKey ? t.createElement(a, null, t.createElement(ce, {
        title: t.createElement(x, {
            token: "SettingComponents.DataSourceSetter.nodeProperty"
        }),
        extra: o ? t.createElement(i, {
            type: "text",
            onClick: function() {
                d.setFieldState("map", (function(e) {
                    e.value.push({});
                }));
            },
            icon: t.createElement(k, null)
        }, t.createElement(x, {
            token: "SettingComponents.DataSourceSetter.addKeyValuePair"
        })) : null
    }), t.createElement("div", {
        className: "".concat(l(c + "-layout-item-content", s))
    }, t.createElement(I, {
        form: d,
        labelWidth: 60,
        wrapperWidth: 160
    }, t.createElement(ue, null, t.createElement(ue.Array, {
        name: "map",
        "x-component": "ArrayItems"
    }, t.createElement(ue.Object, {
        "x-decorator": "ArrayItems.Item",
        "x-decorator-props": {
            type: "divide"
        }
    }, t.createElement(ue.String, {
        title: t.createElement(x, {
            token: "SettingComponents.DataSourceSetter.label"
        }),
        "x-decorator": "FormItem",
        "x-disabled": !o,
        name: "label",
        "x-component": "Input"
    }), t.createElement(ue.String, {
        title: t.createElement(x, {
            token: "SettingComponents.DataSourceSetter.value"
        }),
        "x-decorator": "FormItem",
        name: "value",
        "x-component": "ValueInput"
    }), t.createElement(ue.Void, {
        "x-component": "ArrayItems.Remove",
        "x-visible": o,
        "x-component-props": {
            style: {
                margin: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }))))))) : t.createElement(a, null, t.createElement(ce, {
        title: t.createElement(x, {
            token: "SettingComponents.DataSourceSetter.nodeProperty"
        }),
        extra: null
    }), t.createElement("div", {
        className: "".concat(l(c + "-layout-item-content", s))
    }, t.createElement(x, {
        token: "SettingComponents.DataSourceSetter.pleaseSelectNode"
    })));
})), fe = y((function(e) {
    var n, a, o = b("data-source-setter-node-title"), r = h().hashId, i = function(e) {
        var t;
        return [ "label", "title", "header" ].some((function(n) {
            var a, o = null === (a = _(e).find((function(e) {
                return e.label === n;
            }))) || void 0 === a ? void 0 : a.value;
            return void 0 !== o && (t = o, !0);
        })), void 0 === t && _(e || []).some((function(e) {
            return !(!e.value || "string" != typeof e.value) && (t = e.value, !0);
        })), t;
    };
    return t.createElement("div", {
        className: l(o, r)
    }, t.createElement("span", {
        style: {
            marginRight: "5px"
        }
    }, (n = (null == e ? void 0 : e.map) || [], a = i(n), void 0 === a ? t.createElement(x, {
        token: "SettingComponents.DataSourceSetter.defaultTitle"
    }) : a + "")), t.createElement(S, {
        className: l(o + "-icon", r),
        infer: "Remove",
        onClick: function() {
            var t, n = U(null === (t = null == e ? void 0 : e.treeDataSource) || void 0 === t ? void 0 : t.dataSource);
            se(n || [], (function(t, n, a) {
                a[n].key === e.duplicateKey && _(a).splice(n, 1);
            })), e.treeDataSource.dataSource = n;
        }
    }));
})), ve = function(e) {
    var t = e.dropPosition;
    return 0 !== t;
}, ge = y((function(n) {
    var o = b("data-source-setter"), r = h().hashId;
    return t.createElement(a, null, t.createElement(ce, {
        title: t.createElement(x, {
            token: "SettingComponents.DataSourceSetter.dataSourceTree"
        }),
        extra: t.createElement(i, {
            type: "text",
            onClick: function() {
                var t, a = z(), o = n.treeDataSource.dataSource, r = (null === (t = n.defaultOptionValue) || void 0 === t ? void 0 : t.map((function(e) {
                    return ne({}, e);
                }))) || [ {
                    label: "label",
                    value: "".concat(e.getDesignerMessage("SettingComponents.DataSourceSetter.item"), " ").concat(o.length + 1)
                }, {
                    label: "value",
                    value: a
                } ];
                n.treeDataSource.dataSource = o.concat({
                    key: a,
                    duplicateKey: a,
                    map: r,
                    children: []
                });
            },
            icon: t.createElement(S, {
                infer: "Add"
            })
        }, t.createElement(x, {
            token: "SettingComponents.DataSourceSetter.addNode"
        }))
    }), t.createElement("div", {
        className: l("".concat(o + "-layout-item-content"), r)
    }, t.createElement(c, {
        blockNode: !0,
        draggable: !0,
        allowDrop: n.allowTree ? function() {
            return !0;
        } : ve,
        defaultExpandAll: !0,
        defaultExpandParent: !0,
        autoExpandParent: !0,
        showLine: {
            showLeafIcon: !1
        },
        treeData: n.treeDataSource.dataSource,
        onDragEnter: function() {},
        onDrop: function(e) {
            var t, a, o, r = null === (t = e.node) || void 0 === t ? void 0 : t.key, l = null === (a = e.dragNode) || void 0 === a ? void 0 : a.key, i = e.node.pos.split("-"), c = e.dropPosition - Number(i[i.length - 1]), s = ie([], le(n.treeDataSource.dataSource), !1);
            if (se(s, (function(e, t, n) {
                n[t].key === l && (n.splice(t, 1), o = e);
            })), e.dropToGap) if ((e.node.children || []).length > 0 && e.node.expanded && 1 === c) se(s, (function(e) {
                e.key === r && (e.children = e.children || [], e.children.unshift(o));
            })); else {
                var d, p;
                se(s, (function(e, t, n) {
                    e.key === r && (d = n, p = t);
                })), -1 === c ? d.splice(p, 0, o) : d.splice(p + 1, 0, o);
            } else se(s, (function(e) {
                e.key === r && (e.children = e.children || [], e.children.unshift(o));
            }));
            n.treeDataSource.dataSource = s;
        },
        titleRender: function(e) {
            return t.createElement(fe, ne({}, e, {
                treeDataSource: n.treeDataSource
            }));
        },
        onSelect: function(e) {
            e[0] && (n.treeDataSource.selectedKey = e[0].toString());
        }
    })));
})), ye = function(e, t) {
    var n, a, o, r, l, i, c, s;
    return [ (n = {}, n[".".concat(e)] = (a = {}, a["::-webkit-scrollbar"] = {
        width: "5px",
        height: "5px"
    }, a["::-webkit-scrollbar-thumb"] = {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 0,
        transition: "all 0.25s ease-in-out"
    }, a["::-webkit-scrollbar-thumb:hover"] = {
        backgroundColor: "rgba(0, 0, 0, 0.3)"
    }, a["&-node-title"] = (o = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }, o["&-icon"] = (r = {
        transition: "all 0.15s ease-in-out",
        opacity: 0
    }, r["&:hover"] = {
        color: t.colorPrimary
    }, r), o), a["&-layout"] = (l = {
        display: "flex",
        justifyContent: "space-around",
        border: "1px solid ".concat(t.colorBorder),
        borderRadius: "3px"
    }, l[".ant-tree-treenode"] = (i = {
        paddingRight: "10px",
        whiteSpace: "nowrap"
    }, i["&:hover"] = (c = {}, c[".dn-data-source-setter-node-title-icon"] = {
        opacity: 1
    }, c), i), l["&-item"] = (s = {
        position: "relative"
    }, s["&.left"] = {
        width: "40%",
        borderRight: "1px solid ".concat(t.colorBorder)
    }, s["&.right"] = {
        width: "60%"
    }, s["&-header"] = {
        display: "flex",
        flex: "none",
        alignItems: "center",
        justifyContent: "space-between",
        height: "40px",
        padding: "8px 12px 9px",
        borderBottom: "1px solid ".concat(t.colorBorder),
        borderRadius: "2px 2px 0 0"
    }, s["&-content"] = {
        padding: "2%",
        height: "300px",
        maxHeight: "300px",
        overflow: "scroll"
    }, s), l), a), n) ];
}, be = y((function(e) {
    var r = e.className, c = e.value, d = void 0 === c ? [] : c, p = e.onChange, u = e.allowTree, m = void 0 === u || u, f = e.allowExtendOption, v = void 0 === f || f, y = e.defaultOptionValue, h = e.effects, S = void 0 === h ? function() {} : h, V = E(), k = b("data-source-setter"), w = C({
        prefix: k,
        styleFun: ye
    }), N = w.hashId, A = w.wrapSSR, I = le(o(!1), 2), D = I[0], R = I[1], T = n((function() {
        return g({
            dataSource: de(d),
            selectedKey: ""
        });
    }), [ d, D ]), $ = function() {
        return R(!1);
    };
    return A(t.createElement(a, null, t.createElement(i, {
        block: !0,
        onClick: function() {
            return R(!0);
        }
    }, t.createElement(x, {
        token: "SettingComponents.DataSourceSetter.configureDataSource"
    })), t.createElement(s, {
        title: t.createElement(x, {
            token: "SettingComponents.DataSourceSetter.configureDataSource"
        }),
        width: "65%",
        bodyStyle: {
            padding: 10
        },
        transitionName: "",
        maskTransitionName: "",
        open: D,
        onCancel: $,
        onOk: function() {
            p(pe(T.dataSource)), $();
        }
    }, t.createElement("div", {
        className: "".concat(l(k, r, N), " ").concat(l(k + "-" + V, N), " ").concat(l(k + "-layout", N))
    }, t.createElement("div", {
        className: "".concat(l(k + "-layout-item left", N))
    }, t.createElement(ge, {
        defaultOptionValue: y,
        allowTree: m,
        treeDataSource: T
    })), t.createElement("div", {
        className: "".concat(l(k + "-layout-item right", N))
    }, t.createElement(me, {
        allowExtendOption: v,
        treeDataSource: T,
        effects: S
    }))))));
})), he = "\n/** \n * You can use the built-in context variables\n * \n * 1. `$self` is the current Field Model \n * \n * 2. `$form` is the current Form Model \n * \n * 3. `$deps` is the dependencies value\n * \n * 4. `$observable` function is used to create an persistent observable state object\n *\n * 5. `$memo` function is is used to create a persistent data\n * \n * 6. `$effect` function is used to handle side-effect logic\n * \n * 7. `$props` function is used to set component props to current field\n * \n * Document Links\n * \n * https://react.formilyjs.org/api/shared/schema#%E5%86%85%E7%BD%AE%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%BD%9C%E7%94%A8%E5%9F%9F\n **/\n", xe = "\n/** \n * Example 1\n * Static Boolean\n **/\n\nfalse\n\n/** \n * Example 2\n * Equal Calculation\n **/\n\n$deps.VariableName === 'TARGET_VALUE'\n\n/** \n * Example 3\n * Not Equal Calculation\n **/\n\n$deps.VariableName !== 'TARGET_VALUE'\n\n/** \n * Example 4\n * And Logic Calculation\n **/\n\n$deps.VariableName1 && $deps.VariableName2\n\n/** \n * Example 5\n * Grater Logic Calculation\n **/\n\n$deps.VariableName > 100\n\n/** \n * Example 6\n * Not Logic Calculation\n **/\n\n!$deps.VariableName\n\n".concat(he, "\n"), Se = "\n/** \n * Example 1\n * Static Mode\n **/\n\n'none'\n\n/** \n * Example 2\n * Equal Condition Associated\n **/\n\n$deps.VariableName === 'TARGET_VALUE' ? 'visible' : 'none'\n\n/** \n * Example 3\n * Not Equal Condition Associated\n **/\n\n$deps.VariableName !== 'TARGET_VALUE' ? 'visible' : 'hidden'\n\n/** \n * Example 4\n * And Logic Condition Associated\n **/\n\n$deps.VariableName1 && $deps.VariableName2 ? 'visible' : 'none'\n\n/** \n * Example 5\n * Grater Logic Condition Associated\n **/\n\n$deps.VariableName > 100 ? 'visible' : 'hidden'\n\n/** \n * Example 6\n * Not Logic Condition Associated\n **/\n\n!$deps.VariableName ? 'visible' : 'none'\n\n".concat(he, "\n"), Ee = "\n/** \n * Example 1\n * Static Mode\n **/\n\n'readPretty'\n\n/** \n * Example 2\n * Equal Condition Associated\n **/\n\n$deps.VariableName === 'TARGET_VALUE' ? 'editable' : 'disabled'\n\n/** \n * Example 3\n * Not Equal Condition Associated\n **/\n\n$deps.VariableName !== 'TARGET_VALUE' ? 'editable' : 'readOnly'\n\n/** \n * Example 4\n * And Logic Condition Associated\n **/\n\n$deps.VariableName1 && $deps.VariableName2 ? 'editable' : 'readPretty'\n\n/** \n * Example 5\n * Grater Logic Condition Associated\n **/\n\n$deps.VariableName > 100 ? 'editable' : 'readOnly'\n\n/** \n * Example 6\n * Not Logic Condition Associated\n **/\n\n!$deps.VariableName ? 'editable' : 'disabled'\n\n".concat(he, "\n"), Ce = "\n/** \n * Example 1\n * Static String\n **/\n\n'Normal String Text'\n\n/** \n * Example 2\n * Associated String\n **/\n\n$deps.VariableName === 'TARGET_VALUE' ? 'Associated String Text' : ''\n\n".concat(he, "\n"), Ve = "\n/** \n * Example 1\n * String Type\n **/\n\n'String'\n\n/** \n * Example 2\n * String Array\n **/\n\n['StringArray']\n\n/** \n * Example 3\n * Object Array\n **/\n\n[{ key: 'ObjectArray' }]\n\n/** \n * Example 4\n * Boolean\n **/\n\ntrue\n\n/** \n * Example 5\n * RegExp\n **/\n\n/d+/\n\n/** \n * Example 1\n * Associated String Value\n **/\n\n$deps.VariableName + 'Compose String'\n\n/** \n * Example 2\n * Associated Array Value\n **/\n\n[ $deps.VariableName ]\n\n/** \n * Example 3\n * Associated Object Value\n **/\n\n{\n  key : $deps.VariableName\n}\n\n/** \n * Example 4\n * Associated Boolean Value\n **/\n\n!$deps.VariableName\n\n".concat(he, "\n"), ke = '\n/** \n * Example 1\n * Static DataSource\n **/\n\n[\n  { label : "item1", value: "1" },\n  { label : "item2", value: "2" }\n]\n\n/** \n * Example 2\n * Associated DataSource\n **/\n\n[\n  { label : "item1", value: "1" },\n  { label : "item2", value: "2" },\n  ...$deps.VariableName\n]\n\n'.concat(he, "\n"), we = '\n/** \n * Example 1\n * Static Props\n **/\n\n{\n  placeholder: "This is placeholder"\n}\n\n/** \n * Example 2\n * Associated Props\n **/\n\n{\n  placeholder: $deps.VariableName\n}\n\n'.concat(he, "\n"), Ne = "\n/** \n * Example 1\n * Static Props\n **/\n\n{\n  labelCol:6\n}\n\n/** \n * Example 2\n * Associated Props\n **/\n\n{\n  labelCol: $deps.VariableName\n}\n\n".concat(he, "\n"), Ae = "\n/** \n * Example 1\n * Async Select\n **/\n\n$effect(()=>{\n  $self.loading = true\n  fetch('//some.domain/getSomething')\n    .then(response=>response.json())\n    .then(({ data })=>{\n      $self.loading = false\n      $self.dataSource = data\n    },()=>{\n      $self.loading = false\n    })\n},[])\n  \n\n/** \n * Example 2\n * Async Search Select\n **/\n\nconst state = $observable({\n  keyword:''\n})\n\n$props({\n  onSearch(keyword){\n    state.keyword = keyword\n  }\n})\n\n$effect(()=>{\n  $self.loading = true\n  fetch(`//some.domain/getSomething?q=${state.keyword}`)\n    .then(response=>response.json())\n    .then(({ data })=>{\n      $self.loading = false\n      $self.dataSource = data\n    },()=>{\n      $self.loading = false\n    })\n},[ state.keyword ])\n\n/** \n * Example 3\n * Async Associated Select\n **/\n\nconst state = $observable({\n  keyword:''\n})\n\n$props({\n  onSearch(keyword){\n    state.keyword = keyword\n  }\n})\n\n$effect(()=>{\n  $self.loading = true\n  fetch(`//some.domain/getSomething?q=${state.keyword}&other=${$deps.VariableName}`)\n    .then(response=>response.json())\n    .then(({ data })=>{\n      $self.loading = false\n      $self.dataSource = data\n    },()=>{\n      $self.loading = false\n    })\n},[ state.keyword, $deps.VariableName ])\n\n".concat(he, "\n"), Ie = [ {
    key: "visible",
    type: "boolean",
    helpCode: xe
}, {
    key: "hidden",
    type: "boolean",
    helpCode: xe
}, {
    key: "display",
    type: '"visible" | "hidden" | "none"',
    helpCode: Se
}, {
    key: "pattern",
    type: '"editable" | "disabled" | "readOnly" | "readPretty"',
    helpCode: Ee
}, {
    key: "title",
    type: "string",
    helpCode: Ce
}, {
    key: "description",
    type: "string",
    helpCode: Ce
}, {
    key: "value",
    type: "any",
    helpCode: Ve
}, {
    key: "initialValue",
    type: "any",
    helpCode: Ve
}, {
    key: "required",
    type: "boolean",
    helpCode: xe
}, {
    key: "dataSource",
    type: "Array<{label?:string,value?:any}>",
    helpCode: ke
}, {
    key: "componentProps",
    token: "componentProps",
    type: "object",
    helpCode: we
}, {
    key: "decoratorProps",
    token: "decoratorProps",
    type: "object",
    helpCode: Ne
} ], De = function(e) {
    if (e) return e.trim();
}, Re = function(e) {
    return ae(void 0, void 0, void 0, (function() {
        return oe(this, (function(t) {
            return [ 2, Promise.all(e.map((function(e) {
                return ae(void 0, [ e ], void 0, (function(e) {
                    var t, n = e.name, a = e.path;
                    return oe(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return t = {
                                name: n,
                                path: a
                            }, [ 4, fetch("".concat(G(), "/").concat(n, "/").concat(a)).then((function(e) {
                                return e.text();
                            })) ];

                          case 1:
                            return [ 2, (t.library = e.sent(), t) ];
                        }
                    }));
                }));
            }))) ];
        }));
    }));
}, Te = function(e, t) {
    var n, a, o, r, l, i, c;
    return [ (n = {}, n[".".concat(e)] = (a = {
        width: "100%",
        minHeight: "623px",
        overflow: "hidden"
    }, a["::-webkit-scrollbar"] = {
        width: "5px",
        height: "5px"
    }, a["::-webkit-scrollbar-thumb"] = {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 0,
        transition: "all 0.25s ease-in-out"
    }, a["::-webkit-scrollbar-thumb:hover"] = {
        backgroundColor: "rgba(0, 0, 0, 0.3)"
    }, a[".ant-collapse"] = (o = {
        border: "1px solid ".concat(t.colorBorder)
    }, o["&-header"] = (r = {
        padding: "8px 10px !important",
        backgroundColor: "".concat(t.colorBgContainer, "!important"),
        borderBottom: "1px solid ".concat(t.colorBorder, " !important"),
        fontWeight: "500 !important"
    }, r[".ant-collapse-arrow"] = {
        marginRight: "4px !important"
    }, r), o["&-item"] = {
        border: "none !important"
    }, o["&-content"] = {
        border: "none !important",
        transition: "none !important"
    }, o["&-content-box"] = {
        padding: "12px !important"
    }, o), a[".reaction-runner"] = (l = {}, l[".ant-collapse-content-box"] = {
        padding: "12px 0 !important"
    }, l), a[".reaction-state"] = (i = {}, i[".ant-collapse-content-box"] = {
        padding: "12px 0 !important"
    }, i), a[".dn-field-property-setter"] = (c = {
        display: "flex",
        height: "300px"
    }, c["&-coder-wrapper"] = {
        display: "flex",
        flexGrow: 2,
        height: "100%",
        paddingLeft: "10px",
        position: "relative",
        flexDirection: "column"
    }, c["&-coder-start"] = {
        fontSize: "18px",
        lineHeight: "30px",
        marginBottom: "4px",
        color: t.colorText,
        fontWeight: 300,
        flexGrow: 0,
        opacity: .96,
        height: "31px"
    }, c["&-coder-end"] = {
        fontSize: "18px",
        height: "31px",
        color: t.colorText,
        marginTop: "4px",
        marginBottom: "4px",
        lineHeight: "30px",
        fontWeight: 300,
        flexGrow: 0,
        opacity: .96
    }, c["&-coder"] = {
        minWidth: 0,
        flexGrow: 2,
        paddingLeft: "10px"
    }, c), a), n) ];
}, $e = F({
    components: {
        Card: u,
        FormCollapse: D,
        Input: N,
        TypeView: function(e) {
            var n = e.value, a = String(n);
            return a.length <= 26 ? t.createElement(m, null, a) : t.createElement(m, null, t.createElement(f, {
                title: t.createElement("div", {
                    style: {
                        fontSize: 12
                    }
                }, t.createElement("code", null, t.createElement("pre", {
                    style: {
                        whiteSpace: "pre-wrap",
                        padding: 0,
                        margin: 0
                    }
                }, a)))
            }, a.substring(0, 24), "..."));
        },
        Select: R,
        FormItem: w,
        PathSelector: function(e) {
            var n, a, o, r, l, i, c, s, p, u, m = V(), f = (n = m, a = n, o = function(e) {
                for (var t = "", n = 0; n < e; n++) t += ".";
                return t;
            }, r = function(e, t) {
                var n = [], a = function(t) {
                    t && t !== e ? n.push(t.props.name || t.id) : a(t.parent);
                };
                return a(t), n.reverse().join(".");
            }, l = function(e) {
                var t;
                return null === (t = e.children) || void 0 === t ? void 0 : t.some((function(e) {
                    return "void" !== e.props.type && e !== a || l(e);
                }));
            }, i = function(e) {
                var t;
                return (null == e ? void 0 : e.parent) ? (null === (t = null == e ? void 0 : e.parent) || void 0 === t ? void 0 : t.componentName) !== e.componentName ? e.parent : i(e.parent) : e;
            }, c = function(e) {
                if (null == e ? void 0 : e.parent) {
                    if ("array" === e.parent.props.type) return e.parent;
                    if (e.parent !== u) return c(e.parent);
                }
            }, s = function(e, t) {
                return t.depth === a.depth ? ".".concat(t.props.name || t.id) : "".concat(o(a.depth - e.depth), "[].").concat(r(e, t));
            }, p = function(e, t) {
                return void 0 === t && (t = []), e.reduce((function(e, n) {
                    var o;
                    if (n === a) return e;
                    if ("array" === n.props.type && !n.contains(a)) return e;
                    if ("void" === n.props.type && !l(n)) return e;
                    var r = t.concat(n.props.name || n.id), i = c(n), d = n.props.title || (null === (o = n.props["x-component-props"]) || void 0 === o ? void 0 : o.title) || n.props.name || n.designerProps.title, u = i ? s(i, n) : r.join(".");
                    return e.concat({
                        label: d,
                        value: u,
                        node: n,
                        children: p(n.children, r)
                    });
                }), []);
            }, u = i(n), u ? p(u.children) : []), v = function(e, t) {
                for (var n, a = 0; a < e.length; a++) {
                    var o = e[a];
                    if (o.value === t) return o.node;
                    if (null === (n = o.children) || void 0 === n ? void 0 : n.length) {
                        var r = v(o.children, t);
                        if (r) return r;
                    }
                }
            };
            return t.createElement(d, ne({}, e, {
                onChange: function(t) {
                    e.onChange(t, v(f, t));
                },
                treeDefaultExpandAll: !0,
                treeData: f
            }));
        },
        FieldPropertySetter: function(e) {
            var n = le(o([ "visible" ]), 2), a = n[0], r = n[1], i = b("field-property-setter"), c = h().hashId, s = ne({}, e.value), d = function(e) {
                return H(e, (function(e, t, n) {
                    return t && "{{}}" !== t ? (e[n] = t, e) : e;
                }), {});
            }, u = Ie.find((function(e) {
                return e.key === a[0];
            }));
            return t.createElement("div", {
                className: l(i, c)
            }, t.createElement(p, {
                mode: "vertical",
                style: {
                    width: 200,
                    height: 300,
                    paddingRight: 4,
                    overflowY: "auto",
                    overflowX: "hidden"
                },
                defaultSelectedKeys: a,
                selectedKeys: a,
                onSelect: function(e) {
                    var t = e.selectedKeys;
                    r(t);
                }
            }, Ie.map((function(e) {
                return W(e) ? t.createElement(p.Item, {
                    key: e.key
                }, t.createElement(x, {
                    token: "SettingComponents.ReactionsSetter.".concat(e.token || e.key)
                })) : t.createElement(p.Item, {
                    key: e
                }, t.createElement(x, {
                    token: "SettingComponents.ReactionsSetter.".concat(e)
                }));
            }))), t.createElement("div", {
                className: l(i + "-coder-wrapper", c)
            }, t.createElement("div", {
                className: i + "-coder-start"
            }, "$self.".concat(a[0], " = ("), t.createElement("span", {
                style: {
                    fontSize: 14,
                    marginLeft: 10,
                    color: "#888",
                    fontWeight: "normal"
                }
            }, "//", " ", t.createElement(x, {
                token: "SettingComponents.ReactionsSetter.expressionValueTypeIs"
            }), " ", "`", null == u ? void 0 : u.type, "`")), t.createElement("div", {
                className: l(i + "-coder", c)
            }, t.createElement(q, {
                key: a[0],
                language: "javascript.expression",
                extraLib: e.extraLib,
                helpCode: De(null == u ? void 0 : u.helpCode),
                value: function(e) {
                    var t;
                    return e && (null === (t = String(e).match(/^\{\{([\s\S]*)\}\}$/)) || void 0 === t ? void 0 : t[1]) || "";
                }(s[a[0]]),
                options: {
                    lineNumbers: "off",
                    wordWrap: "on",
                    glyphMargin: !1,
                    folding: !1,
                    lineDecorationsWidth: 0,
                    lineNumbersMinChars: 0,
                    minimap: {
                        enabled: !1
                    }
                },
                onChange: function(t) {
                    var n, o;
                    null === (o = e.onChange) || void 0 === o || o.call(e, d(ne(ne({}, s), (n = {}, 
                    n[a[0]] = "{{".concat(t, "}}"), n))));
                }
            })), t.createElement("div", {
                className: l(i + "-coder-end", c)
            }, ")")));
        },
        ArrayTable: T,
        MonacoInput: q
    }
}), Pe = [ "value", "initialValue", "inputValue", "inputValues", "modified", "initialized", "title", "description", "mounted", "unmounted", "active", "visited", "loading", "errors", "warnings", "successes", "feedbacks", "valid", "invalid", "pattern", "display", "disabled", "readOnly", "readPretty", "visible", "hidden", "editable", "validateStatus", "validating" ], Fe = {
    modified: "boolean",
    initialized: "boolean",
    title: "string",
    description: "string",
    mounted: "boolean",
    unmounted: "boolean",
    active: "boolean",
    visited: "boolean",
    loading: "boolean",
    errors: "string[]",
    warnings: "string[]",
    successes: "string[]",
    feedbacks: "Array<\n  triggerType?: 'onInput' | 'onFocus' | 'onBlur'\n  type?: 'error' | 'success' | 'warning'\n  code?:\n    | 'ValidateError'\n    | 'ValidateSuccess'\n    | 'ValidateWarning'\n    | 'EffectError'\n    | 'EffectSuccess'\n    | 'EffectWarning'\n  messages?: string[]\n>\n",
    valid: "boolean",
    invalid: "boolean",
    pattern: "'editable' | 'disabled' | 'readOnly' | 'readPretty'",
    display: "'visible' | 'hidden' | 'none'",
    disabled: "boolean",
    readOnly: "boolean",
    readPretty: "boolean",
    visible: "boolean",
    hidden: "boolean",
    editable: "boolean",
    validateStatus: "'error' | 'warning' | 'success' | 'validating'",
    validating: "boolean"
}, Me = function(a) {
    var c = le(o(!1), 2), d = c[0], p = c[1], u = le(o(!1), 2), m = u[0], f = u[1], v = b("reactions-setter"), g = C({
        prefix: v,
        styleFun: Te
    }), y = g.hashId, h = g.wrapSSR, S = n((function() {
        return $({
            values: U(a.value)
        });
    }), [ d, a.value ]), E = n((function() {
        return D.createFormCollapse([ "deps", "state" ]);
    }), [ d ]), V = function() {
        return p(!1);
    };
    return r((function() {
        d ? J((function() {
            ae(void 0, void 0, void 0, (function() {
                return oe(this, (function(e) {
                    return [ 2, q.loader.init().then((function(e) {
                        return ae(void 0, void 0, void 0, (function() {
                            var t;
                            return oe(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return [ 4, Re([ {
                                        name: "@formily/core",
                                        path: "dist/formily.core.all.d.ts"
                                    } ]) ];

                                  case 1:
                                    return t = n.sent(), null == t || t.forEach((function(t) {
                                        var n = t.name, a = t.library;
                                        e.languages.typescript.typescriptDefaults.addExtraLib("declare module '".concat(n, "'{ ").concat(a, " }"), "file:///node_modules/".concat(n, "/index.d.ts"));
                                    })), e.languages.typescript.typescriptDefaults.addExtraLib("\n    import { Form, Field } from '@formily/core'\n    declare global {\n      /*\n       * Form Model\n       **/\n      declare var $form: Form\n      /*\n       * Form Values\n       **/\n      declare var $values: any\n      /*\n       * Field Model\n       **/\n      declare var $self: Field\n      /*\n       * create an persistent observable state object\n       **/\n      declare var $observable: <T>(target: T, deps?: any[]) => T\n      /*\n       * create a persistent data\n       **/\n      declare var $memo: <T>(callback: () => T, deps?: any[]) => T\n      /*\n       * handle side-effect logic\n       **/\n      declare var $effect: (callback: () => void | (() => void), deps?: any[]) => void\n      /*\n       * set initial component props to current field\n       **/\n      declare var $props: (props: any) => void\n    }\n    ", "file:///node_modules/formily_global.d.ts"), 
                                    [ 2 ];
                                }
                            }));
                        }));
                    })) ];
                }));
            })).then((function() {
                f(!0);
            }));
        }), {
            timeout: 400
        }) : f(!1);
    }), [ d ]), h(t.createElement(t.Fragment, null, t.createElement(i, {
        block: !0,
        onClick: function() {
            return p(!0);
        }
    }, t.createElement(x, {
        token: "SettingComponents.ReactionsSetter.configureReactions"
    })), t.createElement(s, {
        title: e.getDesignerMessage("SettingComponents.ReactionsSetter.configureReactions"),
        width: "70%",
        centered: !0,
        bodyStyle: {
            padding: 10
        },
        transitionName: "",
        maskTransitionName: "",
        open: d,
        onCancel: V,
        destroyOnClose: !0,
        onOk: function() {
            S.submit((function(e) {
                var t;
                null === (t = a.onChange) || void 0 === t || t.call(a, e);
            })), V();
        }
    }, t.createElement("div", {
        className: l(v, y)
    }, m && t.createElement(I, {
        form: S
    }, t.createElement($e, null, t.createElement($e.Void, {
        "x-component": "FormCollapse",
        "x-component-props": {
            formCollapse: E,
            defaultActiveKey: [ "deps", "state" ],
            style: {
                marginBottom: 10
            }
        }
    }, t.createElement($e.Void, {
        "x-component": "FormCollapse.CollapsePanel",
        "x-component-props": {
            key: "deps",
            header: e.getDesignerMessage("SettingComponents.ReactionsSetter.relationsFields")
        }
    }, t.createElement($e.Array, {
        name: "dependencies",
        default: [ {} ],
        "x-component": "ArrayTable"
    }, t.createElement($e.Object, null, t.createElement($e.Void, {
        "x-component": "ArrayTable.Column",
        "x-component-props": {
            title: e.getDesignerMessage("SettingComponents.ReactionsSetter.sourceField"),
            width: 240
        }
    }, t.createElement($e.String, {
        name: "source",
        "x-decorator": "FormItem",
        "x-component": "PathSelector",
        "x-component-props": {
            placeholder: e.getDesignerMessage("SettingComponents.ReactionsSetter.pleaseSelect")
        }
    })), t.createElement($e.Void, {
        "x-component": "ArrayTable.Column",
        "x-component-props": {
            title: e.getDesignerMessage("SettingComponents.ReactionsSetter.sourceProperty"),
            width: 200
        }
    }, t.createElement($e.String, {
        name: "property",
        default: "value",
        "x-decorator": "FormItem",
        "x-component": "Select",
        "x-component-props": {
            showSearch: !0
        },
        enum: Pe
    })), t.createElement($e.Void, {
        "x-component": "ArrayTable.Column",
        "x-component-props": {
            title: e.getDesignerMessage("SettingComponents.ReactionsSetter.variableName"),
            width: 200
        }
    }, t.createElement($e.String, {
        name: "name",
        "x-decorator": "FormItem",
        "x-validator": {
            pattern: /^[$_a-zA-Z]+[$_a-zA-Z0-9]*$/,
            message: e.getDesignerMessage("SettingComponents.ReactionsSetter.variableNameValidateMessage")
        },
        "x-component": "Input",
        "x-component-props": {
            addonBefore: "$deps.",
            placeholder: e.getDesignerMessage("SettingComponents.ReactionsSetter.pleaseInput")
        },
        "x-reactions": function(e) {
            P(e) || e.query(".source").take((function(t) {
                var n, a;
                P(t) || !t.value || e.value || e.modified || e.setValue((null === (a = null === (n = t.inputValues[1]) || void 0 === n ? void 0 : n.props) || void 0 === a ? void 0 : a.name) || "v_".concat(z()));
            }));
        }
    })), t.createElement($e.Void, {
        "x-component": "ArrayTable.Column",
        "x-component-props": {
            title: e.getDesignerMessage("SettingComponents.ReactionsSetter.variableType"),
            ellipsis: {
                showTitle: !1
            },
            width: 200,
            align: "center"
        }
    }, t.createElement($e.String, {
        name: "type",
        default: "any",
        "x-decorator": "FormItem",
        "x-component": "TypeView",
        "x-reactions": function(e) {
            if (!P(e)) {
                var t = e.query(".property").get("inputValues");
                t && (t[0] = t[0] || "value", e.query(".source").take((function(n) {
                    var a, o;
                    P(n) || n.value && ("value" === t[0] || "initialValue" === t[0] || "inputValue" === t[0] ? e.setValue((null === (o = null === (a = n.inputValues[1]) || void 0 === a ? void 0 : a.props) || void 0 === o ? void 0 : o.type) || "any") : "inputValues" === t[0] ? e.setValue("any[]") : t[0] ? e.setValue(Fe[t[0]]) : e.setValue("any"));
                })));
            }
        }
    })), t.createElement($e.Void, {
        "x-component": "ArrayTable.Column",
        "x-component-props": {
            title: e.getDesignerMessage("SettingComponents.ReactionsSetter.operations"),
            align: "center",
            width: 80
        }
    }, t.createElement($e.Markup, {
        type: "void",
        "x-component": "ArrayTable.Remove"
    }))), t.createElement($e.Void, {
        title: e.getDesignerMessage("SettingComponents.ReactionsSetter.addRelationField"),
        "x-component": "ArrayTable.Addition",
        "x-component-props": {
            style: {
                marginTop: 8
            }
        }
    }))), t.createElement($e.Void, {
        "x-component": "FormCollapse.CollapsePanel",
        "x-component-props": {
            header: e.getDesignerMessage("SettingComponents.ReactionsSetter.propertyReactions"),
            key: "state",
            className: "reaction-state"
        }
    }, t.createElement($e.Markup, {
        name: "fulfill.state",
        "x-component": "FieldPropertySetter"
    })), t.createElement($e.Void, {
        "x-component": "FormCollapse.CollapsePanel",
        "x-component-props": {
            key: "run",
            header: e.getDesignerMessage("SettingComponents.ReactionsSetter.actionReactions"),
            className: "reaction-runner"
        }
    }, t.createElement($e.String, {
        name: "fulfill.run",
        "x-component": "MonacoInput",
        "x-component-props": {
            width: "100%",
            height: 400,
            language: "typescript",
            helpCode: Ae,
            options: {
                minimap: {
                    enabled: !1
                }
            }
        },
        "x-reactions": function(e) {
            var t = e.query("dependencies").value();
            Array.isArray(t) && (e.componentProps.extraLib = "\n                          declare var $deps : {\n                            ".concat(t.map((function(e) {
                var t = e.name, n = e.type;
                return t ? "".concat(t, "?:").concat(n || "any", ",") : "";
            })), "\n                          }\n                          "));
        }
    })))))))));
}, Le = {
    type: "array",
    items: {
        type: "object",
        "x-decorator": "ArrayItems.Item",
        "x-decorator-props": {
            style: {
                alignItems: "center",
                borderRadius: 3,
                paddingTop: 6,
                paddingBottom: 6
            }
        },
        properties: {
            sortable: {
                type: "void",
                "x-component": "ArrayItems.SortHandle",
                "x-component-props": {
                    style: {
                        marginRight: 10
                    }
                }
            },
            drawer: {
                type: "void",
                "x-component": "DrawerSetter",
                properties: {
                    triggerType: {
                        type: "string",
                        enum: [ "onInput", "onFocus", "onBlur" ],
                        "x-decorator": "FormItem",
                        "x-component": "Select"
                    },
                    validator: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "ValueInput",
                        "x-component-props": {
                            include: [ "EXPRESSION" ]
                        }
                    },
                    message: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "Input.TextArea"
                    },
                    format: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "Select",
                        "x-component-props": {
                            allowClear: !0
                        }
                    },
                    pattern: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "Input",
                        "x-component-props": {
                            prefix: "/",
                            suffix: "/"
                        }
                    },
                    len: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "NumberPicker"
                    },
                    max: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "NumberPicker"
                    },
                    min: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "NumberPicker"
                    },
                    exclusiveMaximum: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "NumberPicker"
                    },
                    exclusiveMinimum: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "NumberPicker"
                    },
                    whitespace: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "Switch"
                    },
                    required: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "Switch"
                    }
                }
            },
            moveDown: {
                type: "void",
                "x-component": "ArrayItems.MoveDown",
                "x-component-props": {
                    style: {
                        marginLeft: 10
                    }
                }
            },
            moveUp: {
                type: "void",
                "x-component": "ArrayItems.MoveUp",
                "x-component-props": {
                    style: {
                        marginLeft: 5
                    }
                }
            },
            remove: {
                type: "void",
                "x-component": "ArrayItems.Remove",
                "x-component-props": {
                    style: {
                        marginLeft: 5
                    }
                }
            }
        }
    },
    properties: {
        addValidatorRules: {
            type: "void",
            "x-component": "ArrayItems.Addition",
            "x-component-props": {
                style: {
                    marginBottom: 10
                }
            }
        }
    }
}, Oe = M((function(n) {
    var a = L();
    return t.createElement(K, {
        label: a.title
    }, t.createElement(K.Base, null, t.createElement(v, {
        value: Array.isArray(n.value) ? void 0 : n.value,
        onChange: n.onChange,
        allowClear: !0,
        placeholder: e.getDesignerMessage("SettingComponents.ValidatorSetter.pleaseSelect"),
        options: e.getDesignerMessage("SettingComponents.ValidatorSetter.formats")
    })), t.createElement(K.Extra, null, t.createElement(O.Provider, {
        value: new B(Le)
    }, t.createElement(A, null))));
}));

export { be as DataSourceSetter, Me as ReactionsSetter, Oe as ValidatorSetter };
