import e, { useMemo as t, Fragment as o, useState as r } from "react";

import { FormPath as n, createForm as a } from "@formily/core";

import { toJS as p } from "@formily/reactive";

import { Schema as l, observer as i, ObjectField as c, ArrayField as d, VoidField as m, Field as s, useForm as u } from "@formily/react";

import { FormItem as x, Form as h, Input as y, Select as b, TreeSelect as S, Cascader as g, Checkbox as f, Radio as F, NumberPicker as I, Transfer as w, Password as C, DatePicker as v, TimePicker as T, Upload as k, Space as A, ArrayBase as N, FormGrid as P, FormLayout as R } from "@formily/antd-v5";

import { each as L, reduce as E, toArr as O } from "@formily/shared";

import { createLocales as D, GlobalRegistry as W, createBehavior as V, createResource as z, TreeNode as M, AppendNodeEvent as U } from "@form-created/core";

import { DroppableWidget as H, useDesigner as G, useComponents as B, useTreeNode as j, usePrefix as K, useCssInJs as X, NodeActionsWidget as _, useNodeIdProps as Y, TreeNodeWidget as q } from "@form-created/react";

import { isStr as $, isArr as Q } from "@form-created/shared";

import { observer as J } from "@formily/reactive-react";

import { DataSourceSetter as Z, ReactionsSetter as ee, ValidatorSetter as te } from "@form-created/formily-setters";

import { Switch as oe, Slider as re, Rate as ne, Card as ae, Table as pe, Tabs as le, Collapse as ie } from "antd";

import ce from "classnames";

var de = function() {
    return de = Object.assign || function(e) {
        for (var t, o = 1, r = arguments.length; o < r; o++) for (var n in t = arguments[o], 
        t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
    }, de.apply(this, arguments);
};

function me(e, t) {
    var o = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var n = 0;
        for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]]);
    }
    return o;
}

function se(e, t) {
    var o = "function" == typeof Symbol && e[Symbol.iterator];
    if (!o) return e;
    var r, n, a = o.call(e), p = [];
    try {
        for (;(void 0 === t || t-- > 0) && !(r = a.next()).done; ) p.push(r.value);
    } catch (l) {
        n = {
            error: l
        };
    } finally {
        try {
            r && !r.done && (o = a["return"]) && o.call(a);
        } finally {
            if (n) throw n.error;
        }
    }
    return p;
}

function ue(e, t, o) {
    if (o || 2 === arguments.length) for (var r, n = 0, a = t.length; n < a; n++) !r && n in t || (r || (r = Array.prototype.slice.call(t, 0, n)), 
    r[n] = t[n]);
    return e.concat(r || Array.prototype.slice.call(t));
}

"function" == typeof SuppressedError && SuppressedError;

var xe = J((function(t) {
    return e.createElement(H, null, t.children);
})), he = function(t) {
    return function(o) {
        return e.createElement(H, null, e.createElement(t, de({}, o)));
    };
}, ye = {
    "zh-CN": {
        settings: {
            style: {
                width: "宽度",
                height: "高度",
                display: "展示",
                background: "背景",
                boxShadow: "阴影",
                font: "字体",
                margin: "外边距",
                padding: "内边距",
                borderRadius: "圆角",
                border: "边框",
                opacity: "透明度"
            }
        }
    },
    "en-US": {
        settings: {
            style: {
                width: "Width",
                height: "Height",
                display: "Display",
                background: "Background",
                boxShadow: "Box Shadow",
                font: "Font",
                margin: "Margin",
                padding: "Padding",
                borderRadius: "Radius",
                border: "Border",
                opacity: "Opacity"
            }
        }
    },
    "ko-KR": {
        settings: {
            style: {
                width: "너비",
                height: "높이",
                display: "디스플레이",
                background: "배경",
                boxShadow: "쉐도우 박스",
                font: "폰트",
                margin: "마진",
                padding: "패딩",
                borderRadius: "테두리 굴곡",
                border: "테두리",
                opacity: "투명도"
            }
        }
    }
}, be = {
    "zh-CN": {
        settings: {
            name: "字段标识",
            title: "标题",
            required: "必填",
            description: "描述",
            default: "默认值",
            enum: "可选项",
            "x-display": {
                title: "展示状态",
                tooltip: "半隐藏只会隐藏UI，全隐藏会删除数据",
                dataSource: [ "显示", "半隐藏", "全隐藏", "继承" ]
            },
            "x-pattern": {
                title: "UI形态",
                dataSource: [ "可编辑", "禁用", "只读", "阅读", "继承" ]
            },
            "x-validator": "校验规则",
            "x-decorator": "容器组件",
            "x-reactions": "响应器规则",
            "field-group": "字段属性",
            "component-group": "组件属性",
            "decorator-group": "容器属性",
            "component-style-group": "组件样式",
            "decorator-style-group": "容器样式",
            "x-component-props": {
                size: {
                    title: "尺寸",
                    dataSource: [ "大", "小", "默认", "继承" ]
                },
                allowClear: "允许清除内容",
                autoFocus: "自动获取焦点",
                showSearch: "支持搜索",
                notFoundContent: "空状态内容",
                bordered: "是否有边框",
                placeholder: "占位提示",
                style: {
                    width: "宽度",
                    height: "高度",
                    display: "展示",
                    background: "背景",
                    boxShadow: "阴影",
                    font: "字体",
                    margin: "外边距",
                    padding: "内边距",
                    borderRadius: "圆角",
                    border: "边框",
                    opacity: "透明度"
                }
            },
            "x-decorator-props": {
                addonAfter: "后缀标签",
                addonBefore: "前缀标签",
                tooltip: "提示",
                asterisk: "星号",
                gridSpan: "网格跨列",
                labelCol: "标签网格宽度",
                wrapperCol: "组件网格宽度",
                colon: "是否有冒号",
                labelAlign: {
                    title: "标签对齐",
                    dataSource: [ "左对齐", "右对齐", "继承" ]
                },
                wrapperAlign: {
                    title: "组件对齐",
                    dataSource: [ "左对齐", "右对齐", "继承" ]
                },
                labelWrap: "标签换行",
                wrapperWrap: "组件换行",
                labelWidth: "标签宽度",
                wrapperWidth: "组件宽度",
                fullness: "组件占满",
                inset: "内联布局",
                shallow: "是否浅传递",
                bordered: "是否有边框",
                size: {
                    title: "尺寸",
                    dataSource: [ "大", "小", "默认", "继承" ]
                },
                layout: {
                    title: "布局",
                    dataSource: [ "垂直", "水平", "内联", "继承" ]
                },
                feedbackLayout: {
                    title: "反馈布局",
                    dataSource: [ "宽松", "紧凑", "弹层", "无", "继承" ]
                },
                tooltipLayout: {
                    title: "提示布局",
                    dataSource: [ "图标", "文本", "继承" ]
                },
                style: {
                    width: "宽度",
                    height: "高度",
                    display: "展示",
                    background: "背景",
                    boxShadow: "阴影",
                    font: "字体",
                    margin: "外边距",
                    padding: "内边距",
                    borderRadius: "圆角",
                    border: "边框",
                    opacity: "透明度"
                }
            }
        }
    },
    "en-US": {
        settings: {
            name: "Name",
            title: "Title",
            required: "Required",
            description: "Description",
            default: "Default",
            enum: "Options",
            "x-display": {
                title: "Display State",
                tooltip: 'When the display value is "None", the data will be "Hidden" and deleted. When the display value is hidden, only the UI will be hidden',
                dataSource: [ "Visible", "Hidden", "None", "Inherit" ]
            },
            "x-pattern": {
                title: "UI Pattern",
                dataSource: [ "Editable", "Disabled", "ReadOnly", "ReadPretty", "Inherit" ]
            },
            "x-validator": "Validator",
            "x-decorator": "Decorator",
            "x-reactions": "Reactions",
            "field-group": "Field Properties",
            "component-group": "Component Properties",
            "decorator-group": "Decorator Properties",
            "component-style-group": "Component Style",
            "decorator-style-group": "Decorator Style",
            "x-component-props": {
                size: {
                    title: "Size",
                    dataSource: [ "Large", "Small", "Default", "Inherit" ]
                },
                allowClear: "Allow Clear",
                autoFocus: "Auto Focus",
                showSearch: "Show Search",
                notFoundContent: "Not Found Content",
                bordered: "Bordered",
                placeholder: "Placeholder",
                style: {
                    width: "Width",
                    height: "Height",
                    display: "Display",
                    background: "Background",
                    boxShadow: "Box Shadow",
                    font: "Font",
                    margin: "Margin",
                    padding: "Padding",
                    borderRadius: "Radius",
                    border: "Border",
                    opacity: "Opacity"
                }
            },
            "x-decorator-props": {
                addonAfter: "Addon After",
                addonBefore: "Addon Before",
                tooltip: "Tooltip",
                asterisk: "Asterisk",
                gridSpan: "Grid Span",
                labelCol: "Label Col",
                wrapperCol: "Wrapper Col",
                colon: "Colon",
                labelAlign: {
                    title: "Label Align",
                    dataSource: [ "Left", "Right", "Inherit" ]
                },
                wrapperAlign: {
                    title: "Wrapper Align",
                    dataSource: [ "Left", "Right", "Inherit" ]
                },
                labelWrap: "Label Wrap",
                wrapperWrap: "Wrapper Wrap",
                labelWidth: "Label Width",
                wrapperWidth: "Wrapper Width",
                fullness: "Fullness",
                inset: "Inset",
                shallow: "Shallow",
                bordered: "Bordered",
                size: {
                    title: "Size",
                    dataSource: [ "Large", "Small", "Default", "Inherit" ]
                },
                layout: {
                    title: "Layout",
                    dataSource: [ "Vertical", "Horizontal", "Inline", "Inherit" ]
                },
                feedbackLayout: {
                    title: "Feedback Layout",
                    dataSource: [ "Loose", "Terse", "Popup", "None", "Inherit" ]
                },
                tooltipLayout: {
                    title: "Tooltip Layout",
                    dataSource: [ "Icon", "Text", "Inherit" ]
                },
                style: {
                    width: "Width",
                    height: "Height",
                    display: "Display",
                    background: "Background",
                    boxShadow: "Box Shadow",
                    font: "Font",
                    margin: "Margin",
                    padding: "Padding",
                    borderRadius: "Radius",
                    border: "Border",
                    opacity: "Opacity"
                }
            }
        }
    },
    "ko-KR": {
        settings: {
            name: "이름",
            title: "제목",
            required: "필수항목",
            description: "설명",
            default: "기본 값",
            enum: "Options",
            "x-display": {
                title: "디스플레이 상태",
                tooltip: '디스플레이 값이 "없음"이면 데이터가 "숨김"상태가 되고 삭제됩니다. 디스플레이 값이 숨김이면 UI만 숨겨집니다.',
                dataSource: [ "보임", "숨김", "없음", "상속" ]
            },
            "x-pattern": {
                title: "UI 패턴",
                dataSource: [ "수정 가능", "비활성화", "ReadOnly", "ReadPretty", "상속" ]
            },
            "x-validator": "유효성 검사 도구",
            "x-decorator": "데코레이터",
            "x-reactions": "Reactions",
            "field-group": "필드 속성",
            "component-group": "컴포넌트 속성",
            "decorator-group": "데코레이터 속성",
            "component-style-group": "컴포넌트 스타일",
            "decorator-style-group": "데코레이터 스타일",
            "x-component-props": {
                size: {
                    title: "크기",
                    dataSource: [ "크게", "작게", "보통", "상속" ]
                },
                allowClear: "삭제 허용",
                autoFocus: "오토 포커스",
                showSearch: "검색 보기",
                notFoundContent: "값을 찾을 수 없음",
                bordered: "Bordered",
                placeholder: "Placeholder",
                style: {
                    width: "너비",
                    height: "높이",
                    display: "디스플레이",
                    background: "배경",
                    boxShadow: "그림자 박스",
                    font: "폰트",
                    margin: "마진",
                    padding: "패딩",
                    borderRadius: "테두리 굴곡",
                    border: "테두리",
                    opacity: "투명도"
                }
            },
            "x-decorator-props": {
                addonAfter: "에드온 뒤",
                addonBefore: "에드온 전",
                tooltip: "툴팁",
                asterisk: "별표시",
                gridSpan: "Grid Span",
                labelCol: "Label Col",
                wrapperCol: "Wrapper Col",
                colon: "Colon",
                labelAlign: {
                    title: "Label 정렬",
                    dataSource: [ "왼쪽", "오른쪽", "상속" ]
                },
                wrapperAlign: {
                    title: "Wrapper 정렬",
                    dataSource: [ "왼쪽", "오른쪽", "상속" ]
                },
                labelWrap: "Label Wrap",
                wrapperWrap: "Wrapper Wrap",
                labelWidth: "Label Width",
                wrapperWidth: "Wrapper Width",
                fullness: "Fullness",
                inset: "Inset",
                shallow: "얇게",
                bordered: "Bordered",
                size: {
                    title: "크기",
                    dataSource: [ "크게", "작게", "보통", "상속" ]
                },
                layout: {
                    title: "레이아웃",
                    dataSource: [ "수직", "수평", "인라인", "상속" ]
                },
                feedbackLayout: {
                    title: "피드백 레이아웃",
                    dataSource: [ "느슨하게", "Terse", "팝업", "없음", "상속" ]
                },
                tooltipLayout: {
                    title: "툴팁 레이아웃",
                    dataSource: [ "아이콘", "텍스트", "상속" ]
                },
                style: {
                    width: "너비",
                    height: "높이",
                    display: "디스플레이",
                    background: "배경",
                    boxShadow: "그림자 박수",
                    font: "폰트",
                    margin: "마진",
                    padding: "패딩",
                    borderRadius: "테두리 굴곡",
                    border: "테두리",
                    opacity: "투명도"
                }
            }
        }
    }
}, Se = {
    "zh-CN": {
        title: "输入框",
        settings: {
            "x-component-props": {
                addonAfter: "后缀标签",
                addonBefore: "前缀标签",
                maxLength: "最大长度",
                prefix: "前缀",
                suffix: "后缀",
                autoSize: {
                    title: "自适应高度",
                    tooltip: "可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }"
                },
                showCount: "是否展示字数",
                checkStrength: "检测强度"
            }
        }
    },
    "en-US": {
        title: "Input",
        settings: {
            "x-component-props": {
                addonAfter: "Addon After",
                addonBefore: "Addon Before",
                maxLength: "Max Length",
                prefix: "Prefix",
                suffix: "Suffix",
                autoSize: "Auto Size",
                showCount: "Show Count",
                checkStrength: "Check Strength"
            }
        }
    },
    "ko-KR": {
        title: "입력",
        settings: {
            "x-component-props": {
                addonAfter: "애드온 후",
                addonBefore: "애드온 전",
                maxLength: "최대 길이",
                prefix: "접두사",
                suffix: "접미사",
                autoSize: "자동 크기 맞춤",
                showCount: "개수 보여주기",
                checkStrength: "강도 체크"
            }
        }
    }
}, ge = {
    "zh-CN": {
        title: "选择框",
        settings: {
            "x-component-props": {
                mode: {
                    title: "模式",
                    dataSource: [ "多选", "标签", "单选" ]
                },
                autoClearSearchValue: {
                    title: "选中自动清除",
                    tooltip: "仅在多选或者标签模式下支持"
                },
                defaultActiveFirstOption: "默认高亮第一个选项",
                dropdownMatchSelectWidth: {
                    title: "下拉菜单和选择器同宽",
                    tooltip: "默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动"
                },
                defaultOpen: "默认展开",
                filterOption: "选项筛选器",
                filterSort: "选项排序器",
                labelInValue: {
                    title: "标签值",
                    tooltip: "是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式"
                },
                listHeight: "弹窗滚动高度",
                maxTagCount: {
                    title: "最多标签数量",
                    tooltip: "最多显示多少个 tag，响应式模式会对性能产生损耗"
                },
                maxTagPlaceholder: {
                    title: "最多标签占位",
                    tooltip: "隐藏 tag 时显示的内容"
                },
                maxTagTextLength: "最多标签文本长度",
                showArrow: "显示箭头",
                virtual: "开启虚拟滚动"
            }
        }
    },
    "en-US": {
        title: "Select",
        settings: {
            "x-component-props": {
                mode: {
                    title: "Mode",
                    dataSource: [ "Multiple", "Tags", "Single" ]
                },
                autoClearSearchValue: {
                    title: "Auto Clear Search Value",
                    tooltip: "Only used to multiple and tags mode"
                },
                defaultActiveFirstOption: "Default Active First Option",
                dropdownMatchSelectWidth: "Dropdown Match Select Width",
                defaultOpen: "Default Open",
                filterOption: "Filter Option",
                filterSort: "Filter Sort",
                labelInValue: "label InValue",
                listHeight: "List Height",
                maxTagCount: "Max Tag Count",
                maxTagPlaceholder: {
                    title: "Max Tag Placeholder",
                    tooltip: "Content displayed when tag is hidden"
                },
                maxTagTextLength: "Max Tag Text Length",
                showArrow: "Show Arrow",
                virtual: "Use Virtual Scroll"
            }
        }
    },
    "ko-KR": {
        title: "선택",
        settings: {
            "x-component-props": {
                mode: {
                    title: "모드",
                    dataSource: [ "다중", "태그", "단일" ]
                },
                autoClearSearchValue: {
                    title: "자동 검색 값 삭제",
                    tooltip: "다중 모드와 태그 모드만 사용할 수 있습니다."
                },
                defaultActiveFirstOption: "기본으로 첫번째 옵션을 선택함",
                dropdownMatchSelectWidth: "드롭다운 너비와 일치시킴",
                defaultOpen: "기본 오픈",
                filterOption: "옵션 필터",
                filterSort: "정렬 필터",
                labelInValue: "레이블 InValue",
                listHeight: "리스트 높이",
                maxTagCount: "최대 태그 개수",
                maxTagPlaceholder: {
                    title: "최대 태그 Placeholder",
                    tooltip: "태그가 숨겨질때 보입니다."
                },
                maxTagTextLength: "최대 태그 텍스트 길이",
                showArrow: "화살표 보기",
                virtual: "수직 스크롤 사용"
            }
        }
    }
}, fe = {
    "zh-CN": {
        title: "多行输入",
        settings: {
            "x-component-props": {
                maxLength: "最大长度",
                autoSize: {
                    title: "自适应高度",
                    tooltip: "可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }"
                },
                showCount: "是否展示字数"
            }
        }
    },
    "en-US": {
        title: "TextArea",
        settings: {
            "x-component-props": {
                maxLength: "Max Length",
                autoSize: "Auto Size",
                showCount: "Show Count"
            }
        }
    },
    "ko-KR": {
        title: "텍스트 상자",
        settings: {
            "x-component-props": {
                maxLength: "최대 길이",
                autoSize: "자동 길이 변환",
                showCount: "개수 보기"
            }
        }
    }
}, Fe = {
    "zh-CN": {
        title: "树选择",
        settings: {
            "x-component-props": {
                mode: {
                    title: "模式",
                    dataSource: [ "多选", "标签", "单选" ]
                },
                autoClearSearchValue: {
                    title: "选中自动清除",
                    tooltip: "仅在多选或者标签模式下支持"
                },
                defaultActiveFirstOption: "默认高亮第一个选项",
                defaultOpen: "默认展开",
                filterOption: "选项筛选器",
                filterSort: "选项排序器",
                labelInValue: {
                    title: "标签值",
                    tooltip: "是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式"
                },
                listHeight: "弹窗滚动高度",
                maxTagCount: {
                    title: "最多标签数量",
                    tooltip: "最多显示多少个 tag，响应式模式会对性能产生损耗"
                },
                maxTagPlaceholder: {
                    title: "最多标签占位",
                    tooltip: "隐藏 tag 时显示的内容"
                },
                maxTagTextLength: "最多标签文本长度",
                showArrow: "显示箭头",
                virtual: "开启虚拟滚动",
                dropdownMatchSelectWidth: {
                    title: "下拉选择器同宽",
                    tooltip: "默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动"
                },
                showCheckedStrategy: {
                    title: "复选回显策略",
                    tooltip: "配置 treeCheckable 时，定义选中项回填的方式。TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点)。TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点",
                    dataSource: [ "显示所有", "显示父节点", "显示子节点" ]
                },
                treeCheckable: "开启复选",
                treeDefaultExpandAll: "默认展开所有",
                treeDefaultExpandedKeys: {
                    title: "默认展开选项",
                    tooltip: "格式：Array<string | number>"
                },
                treeNodeFilterProp: {
                    title: "节点过滤属性",
                    tooltip: "输入项过滤对应的 treeNode 属性"
                },
                treeDataSimpleMode: {
                    title: "使用简单数据结构",
                    tooltip: "使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', title:\"test1\",...},...]， pId 是父节点的 id)"
                },
                treeNodeLabelProp: {
                    title: "标签显示名称",
                    tooltip: "默认为title"
                },
                filterTreeNode: "节点过滤器"
            }
        }
    },
    "en-US": {
        title: "TreeSelect",
        settings: {
            "x-component-props": {
                mode: {
                    title: "Mode",
                    dataSource: [ "Multiple", "Tags", "Single" ]
                },
                autoClearSearchValue: {
                    title: "Auto Clear Search Value",
                    tooltip: "Only used to multiple and tags mode"
                },
                defaultActiveFirstOption: "Default Active First Option",
                defaultOpen: "Default Open",
                filterOption: "Filter Option",
                filterSort: "Filter Sort",
                labelInValue: "Label In Value",
                listHeight: "List Height",
                maxTagCount: "Max Tag Count",
                maxTagPlaceholder: {
                    title: "Max Tag Placeholder",
                    tooltip: "Content displayed when tag is hidden"
                },
                maxTagTextLength: "Max Tag Text Length",
                notFoundContent: "Not Found Content",
                showArrow: "Show Arrow",
                virtual: "Use Virtual Scroll",
                dropdownMatchSelectWidth: {
                    title: "Dropdown Match Select Width",
                    tooltip: "By default, min-width will be set, and it will be ignored when the value is less than the width of the selection box. false will turn off virtual scrolling"
                },
                showCheckedStrategy: {
                    title: "Show Checked Strategy",
                    tooltip: "When configuring treeCheckable, define how to backfill the selected item. TreeSelect.SHOW_ALL: Show all selected nodes (including parent nodes). TreeSelect.SHOW_PARENT: Only display the parent node (when all child nodes under the parent node are selected). Only show child nodes by default",
                    dataSource: [ "Show All", "Show Parent Node", "Show Child Nodes" ]
                },
                treeCheckable: "Tree Checkable",
                treeDefaultExpandAll: "Tree Default Expand All",
                treeDefaultExpandedKeys: {
                    title: "Tree Default Expanded Keys",
                    tooltip: "Format：Array<string | number>"
                },
                treeNodeFilterProp: {
                    title: "Tree Node Filter Properties",
                    tooltip: "The treeNode attribute corresponding to the input item filter"
                },
                treeDataSimpleMode: {
                    title: "Tree Data Simple Mode",
                    tooltip: "Use treeData in a simple format. For specific settings, refer to the settable type (the treeData should be a data structure like this: [{id:1, pId:0, value:'1', title:\"test1\",...} ,...], pId is the id of the parent node)"
                },
                treeNodeLabelProp: {
                    title: "Tree Node Label Properties",
                    tooltip: "The default is title"
                },
                filterTreeNode: "Filter Tree Node"
            }
        }
    },
    "ko-KR": {
        title: "트리 셀렉터",
        settings: {
            "x-component-props": {
                mode: {
                    title: "모드",
                    dataSource: [ "다중", "태그", "단일" ]
                },
                autoClearSearchValue: {
                    title: "검색값 자동 삭제",
                    tooltip: "다중 모드와 태그 모드에서만 사용 가능"
                },
                defaultActiveFirstOption: "기본 활성값으로 첫번째 옵션 사용",
                defaultOpen: "기본 오픈",
                filterOption: "옵션 필터",
                filterSort: "정렬 필터",
                labelInValue: "레이블 입력 값",
                listHeight: "리스트 높이",
                maxTagCount: "최대 태그 개수",
                maxTagPlaceholder: {
                    title: "최대 태그 Placeholder",
                    tooltip: "태그가 숨김일때 보여줍니다."
                },
                maxTagTextLength: "최대 태그 문자 길이",
                notFoundContent: "내용 없음",
                showArrow: "화살표 보기",
                virtual: "수직 스크롤 사용",
                dropdownMatchSelectWidth: {
                    title: "드롭다운 너비 맞추기",
                    tooltip: "기본적으로 최소 너비가 설정되며 값이 선택 상자의 너비보다 작으면 무시됩니다."
                },
                showCheckedStrategy: {
                    title: "선택한 전략 표시",
                    tooltip: "treeCheckable을 구성할 때 선택한 항목을 다시 채우는 방법을 정의합니다. TreeSelect.SHOW_ALL: 선택한 모든 노드(상위 노드 포함)를 표시합니다. TreeSelect.SHOW_PARTE: 상위 노드 아래의 모든 하위 노드를 선택한 경우에만 상위 노드를 표시합니다. 기본적으로 하위 노드만 표시합니다",
                    dataSource: [ "모두 보기", "부모 노드만 보기", "자식 노드만 보기" ]
                },
                treeCheckable: "트리 체크 가능 여부",
                treeDefaultExpandAll: "트리 기본 모두 확장",
                treeDefaultExpandedKeys: {
                    title: "트리 기본 확장 키",
                    tooltip: "형식：Array<string | number>"
                },
                treeNodeFilterProp: {
                    title: "트리 노드 필터 속성",
                    tooltip: "입력 항목 필터에 해당하는 treeNode 속성"
                },
                treeDataSimpleMode: {
                    title: "트리 데이터 심플 모드",
                    tooltip: "treeData를 간단한 형식으로 사용합니다. 특정 설정은 설정가능한 유형을 참조하세요 (트리데이터는 다음과 같은 데이터 구조여야 합니다: [{id:1, pId:0, value:'1', title:\"test1\",...} ,...], pId는 id의 상위 노드입니다)."
                },
                treeNodeLabelProp: {
                    title: "트리 노드 레이블 속성",
                    tooltip: "기본 값은 제목"
                },
                filterTreeNode: "트리 노드 필터"
            }
        }
    }
}, Ie = {
    "zh-CN": {
        title: "联级选择",
        settings: {
            "x-component-props": {
                changeOnSelect: {
                    title: "选择时触发",
                    tooltip: "点选每级菜单选项值都会发生变化"
                },
                displayRender: {
                    title: "渲染函数",
                    tooltip: '选择后展示的渲染函数，默认为label => label.join("/")\t'
                },
                fieldNames: {
                    title: "自定义字段名",
                    tooltip: '默认值：{ label: "label", value: "value", children: "children" }'
                }
            }
        }
    },
    "en-US": {
        title: "Cascader",
        settings: {
            "x-component-props": {
                changeOnSelect: {
                    title: "Change On Select",
                    tooltip: "Click on each level of menu option value will change"
                },
                displayRender: {
                    title: "Display Render",
                    tooltip: 'The rendering function displayed after selection, the default is label => label.join("/")\t'
                },
                fieldNames: {
                    title: "Field Names",
                    tooltip: 'Defaults：{ label: "label", value: "value", children: "children" }'
                }
            }
        }
    },
    "ko-KR": {
        title: "Cascader",
        settings: {
            "x-component-props": {
                changeOnSelect: {
                    title: "선택 시 변경",
                    tooltip: "메뉴 옵션 값의 레벨을 클릭하면 변경됩니다."
                },
                displayRender: {
                    title: "디스플레이 렌더링",
                    tooltip: '선택 후 실행되는 렌더링 함수로 기본 값은 label => label.join("/")\t'
                },
                fieldNames: {
                    title: "필드 이름",
                    tooltip: '기본 값：{ label: "label", value: "value", children: "children" }'
                }
            }
        }
    }
}, we = {
    "zh-CN": {
        title: "单选框组",
        settings: {
            "x-component-props": {
                buttonStyle: {
                    title: "按钮风格",
                    dataSource: [ "空心", "实心" ]
                },
                optionType: {
                    title: "选项类型",
                    dataSource: [ "默认", "按钮" ]
                }
            }
        }
    },
    "en-US": {
        title: "Radio",
        settings: {
            "x-component-props": {
                buttonStyle: {
                    title: "Button style",
                    dataSource: [ "Hollow", "Solid" ]
                },
                optionType: {
                    title: "Option type",
                    dataSource: [ "Default", "Button" ]
                }
            }
        }
    },
    "ko-KR": {
        title: "라디오",
        settings: {
            "x-component-props": {
                buttonStyle: {
                    title: "버튼 스타일",
                    dataSource: [ "Hollow", "Solid" ]
                },
                optionType: {
                    title: "옵션 타입",
                    dataSource: [ "기본", "버튼" ]
                }
            }
        }
    }
}, Ce = {
    "zh-CN": {
        title: "复选框组"
    },
    "en-US": {
        title: "Checkbox"
    },
    "ko-KR": {
        title: "체크박스"
    }
}, ve = {
    "zh-CN": {
        title: "滑动条",
        settings: {
            "x-component-props": {
                dots: "刻度固定",
                range: "双滑块",
                reverse: "反向坐标系",
                vertical: "垂直布局",
                tooltipPlacement: {
                    title: "提示位置",
                    tooltip: "设置 提示 展示位置。参考 Tooltip"
                },
                tooltipVisible: {
                    title: "提示显示",
                    tooltip: "开启时，提示 将会始终显示；否则始终不显示，哪怕在拖拽及移入时"
                },
                max: "最大值",
                min: "最小值",
                step: "步长",
                marks: "刻度标签"
            }
        }
    },
    "en-US": {
        title: "Slider",
        settings: {
            "x-component-props": {
                dots: "Fixed Scale",
                range: "Double Slider",
                reverse: "Reverse Coordinate System",
                vertical: "Vertical",
                tooltipPlacement: {
                    title: "Tooltip Placement",
                    tooltip: "Set up prompt placement. Reference Tooltip"
                },
                tooltipVisible: {
                    title: "Tooltip Visible",
                    tooltip: "When turned on, the prompt will always be displayed; otherwise, it will always not be displayed, even when dragging and moving in"
                },
                max: "Max",
                min: "Min",
                step: "Step",
                marks: "Marks"
            }
        }
    },
    "ko-KR": {
        title: "슬라이더",
        settings: {
            "x-component-props": {
                dots: "고정된 크기",
                range: "더블 슬라이더",
                reverse: "뒤집어진 좌표 시스템",
                vertical: "수직",
                tooltipPlacement: {
                    title: "툴팁 배치",
                    tooltip: "툴팁이 나오는 위치를 설정"
                },
                tooltipVisible: {
                    title: "툴팁 보기",
                    tooltip: "이 옵션을 켜면 툴팁이 항상 표시됩니다. 그렇지 않으면 끌어서 이동할 때도 툴팁이 항상 표시되지 않습니다"
                },
                max: "최댓값",
                min: "최솟값",
                step: "스탭",
                marks: "마크"
            }
        }
    }
}, Te = {
    "zh-CN": {
        title: "评分器",
        settings: {
            "x-component-props": {
                allowHalf: "允许半选",
                tooltips: {
                    title: "提示信息",
                    tooltip: "格式：string[]"
                },
                count: "总数"
            }
        }
    },
    "en-US": {
        title: "Rate",
        settings: {
            "x-component-props": {
                allowHalf: "Allow Half",
                tooltips: {
                    title: "Tooltips",
                    tooltip: "Format：string[]"
                },
                count: "Count"
            }
        }
    },
    "ko-KR": {
        title: "비율",
        settings: {
            "x-component-props": {
                allowHalf: "절반 허용",
                tooltips: {
                    title: "툴팁",
                    tooltip: "형식：string[]"
                },
                count: "개수"
            }
        }
    }
}, ke = {
    "zh-CN": {
        title: "日期选择",
        settings: {
            "x-component-props": {
                disabledDate: {
                    title: "不可选日期",
                    tooltip: "格式 (currentDate: moment) => boolean"
                },
                disabledTime: {
                    title: "不可选时间",
                    tooltip: "格式 (currentDate: moment) => boolean"
                },
                inputReadOnly: "输入框只读",
                format: "格式",
                picker: {
                    title: "选择器类型",
                    dataSource: [ "时间", "日期", "月份", "年", "季度", "财年" ]
                },
                showNow: "显示此刻",
                showTime: "时间选择",
                showToday: "显示今天"
            }
        }
    },
    "en-US": {
        title: "DatePicker",
        settings: {
            "x-component-props": {
                disabledDate: {
                    title: "Disabled Date",
                    tooltip: "Format (currentDate: moment) => boolean"
                },
                disabledTime: {
                    title: "Disabled Time",
                    tooltip: "Format (currentDate: moment) => boolean"
                },
                inputReadOnly: "Input ReadOnly",
                format: "Format",
                picker: {
                    title: "Picker Type",
                    dataSource: [ "Time", "Date", "Month", "Year", "Quarter", "Decade" ]
                },
                showNow: "Show Now",
                showTime: "Show Time",
                showToday: "Show Today"
            }
        }
    },
    "ko-KR": {
        title: "날짜 선택 상자",
        settings: {
            "x-component-props": {
                disabledDate: {
                    title: "비활성화 된 날짜",
                    tooltip: "형식 (currentDate: moment) => boolean"
                },
                disabledTime: {
                    title: "비활성화 된 시간",
                    tooltip: "형식 (currentDate: moment) => boolean"
                },
                inputReadOnly: "ReadOnly",
                format: "포맷",
                picker: {
                    title: "타입",
                    dataSource: [ "시간", "날짜", "월", "년", "분기", "십년 단위" ]
                },
                showNow: "현재 시각 보기",
                showTime: "시간 보기",
                showToday: "오늘 보기"
            }
        }
    }
}, Ae = D(ke, {
    "zh-CN": {
        title: "日期范围"
    },
    "en-US": {
        title: "DateRange"
    },
    "ko-KR": {
        title: "날짜범위 선택 상자"
    }
}), Ne = D(ke, {
    "zh-CN": {
        title: "时间选择",
        settings: {
            "x-component-props": {
                clearText: "清除提示",
                disabledHours: "禁止小时",
                disabledMinutes: "禁止分钟",
                disabledSeconds: "禁止秒",
                hideDisabledOptions: "隐藏禁止选项",
                hourStep: "小时间隔",
                minuteStep: "分钟间隔",
                secondStep: "秒间隔",
                use12Hours: "12小时制",
                inputReadOnly: "输入框只读",
                showNow: "显示此刻",
                format: "格式"
            }
        }
    },
    "en-US": {
        title: "Time Picker",
        settings: {
            "x-component-props": {
                clearText: "Clear Text",
                disabledHours: "Disbaled Hours",
                disabledMinutes: "Disabled Minutes",
                disabledSeconds: "Disabled Seconds",
                hideDisabledOptions: "Hide Disabled Options",
                hourStep: "Hour Step",
                minuteStep: "Minute Step",
                secondStep: "Second Step",
                use12Hours: "Use 12-hour",
                inputReadOnly: "Input ReadOnly",
                showNow: "Show Now",
                format: "Format"
            }
        }
    },
    "ko-KR": {
        title: "시간 선택",
        settings: {
            "x-component-props": {
                clearText: "텍스트 삭제",
                disabledHours: "시 비활성화",
                disabledMinutes: "분 비활성화",
                disabledSeconds: "초 비활성화",
                hideDisabledOptions: "비황성화 옵션 숨기기",
                hourStep: "시 스탭",
                minuteStep: "분 스탭",
                secondStep: "초 스탭",
                use12Hours: "12시간 단위 사용",
                inputReadOnly: "ReadOnly",
                showNow: "현재 시각 보여주기",
                format: "포맷"
            }
        }
    }
}), Pe = D(Ne, {
    "zh-CN": {
        title: "时间范围"
    },
    "en-US": {
        title: "Time Range"
    },
    "ko-KR": {
        title: "시간 범위"
    }
}), Re = {
    "zh-CN": {
        title: "数字输入",
        settings: {
            "x-component-props": {
                formatter: {
                    title: "格式转换器",
                    tooltip: "格式：function(value: number | string): string"
                },
                keyboard: "启用快捷键",
                parser: {
                    title: "格式解析器",
                    tooltip: "指定从 格式转换器 里转换回数字的方式，和 格式转换器 搭配使用,格式：function(string): number"
                },
                decimalSeparator: "小数点",
                precision: "数字精度",
                max: "最大值",
                min: "最小值",
                step: "步长",
                stringMode: {
                    title: "字符串格式",
                    tooltip: "开启后支持高精度小数。同时 onChange 将返回 string 类型"
                }
            }
        }
    },
    "en-US": {
        title: "NumberInput",
        settings: {
            "x-component-props": {
                formatter: {
                    title: "Format Converter",
                    tooltip: "Format：function(value: number | string): string"
                },
                keyboard: "Enable Shortcut Keys",
                parser: {
                    title: "Format Parser",
                    tooltip: "Specify the method of converting back to numbers from the format converter, and use it with the format converter, the format:function(string): number"
                },
                decimalSeparator: "Decimal Separator",
                precision: "Precision",
                max: "Max",
                min: "Min",
                step: "Step",
                stringMode: {
                    title: "String Format",
                    tooltip: "Support high-precision decimals after opening. At the same time onChange will return string type"
                }
            }
        }
    },
    "ko-KR": {
        title: "숫자 입력",
        settings: {
            "x-component-props": {
                formatter: {
                    title: "포맷 컨버터",
                    tooltip: "형식: function(value: number | string): string"
                },
                keyboard: "숏컷 키 활성화",
                parser: {
                    title: "포멧 파서",
                    tooltip: "문자열을 숫자로 변환하는 포맷 컨버터를 만들고 사용하세요, 형식 :function(string): number"
                },
                decimalSeparator: "소수 구분 기호",
                precision: "정밀도",
                max: "최대값",
                min: "최소값",
                step: "스탭",
                stringMode: {
                    title: "문자열 형식",
                    tooltip: "높은 정밀도 소수를 지원합니다. onChange에서 문자열 타입으로 반환됩니다."
                }
            }
        }
    }
}, Le = D(Se, {
    "zh-CN": {
        title: "密码输入"
    },
    "en-US": {
        title: "Password"
    },
    "ko-KR": {
        title: "비밀번호"
    }
}), Ee = {
    "zh-CN": {
        title: "穿梭框",
        settings: {
            "x-component-props": {
                oneWay: "单向展示",
                operations: {
                    title: "操作文案集合",
                    tooltip: "格式：string[]"
                },
                titles: {
                    title: "标题集合",
                    tooltip: "格式：string[]"
                },
                showSearchAll: "支持全选",
                filterOption: "选项筛选器"
            }
        }
    },
    "en-US": {
        title: "Transfer",
        settings: {
            "x-component-props": {
                oneWay: "One Way",
                operations: {
                    title: "Operations",
                    tooltip: "Format：string[]"
                },
                titles: {
                    title: "Titles",
                    tooltip: "Format：string[]"
                },
                showSearchAll: "Show Search All",
                filterOption: "Filter Option"
            }
        }
    },
    "ko-KR": {
        title: "전송",
        settings: {
            "x-component-props": {
                oneWay: "하나의 방법",
                operations: {
                    title: "작업",
                    tooltip: "형식：string[]"
                },
                titles: {
                    title: "제목",
                    tooltip: "형식：string[]"
                },
                showSearchAll: "모든 검색 결과 보여주기",
                filterOption: "필터 옵션"
            }
        }
    }
}, Oe = {
    "zh-CN": {
        title: "上传",
        settings: {
            "x-component-props": {
                accept: "可接受类型",
                action: "上传地址",
                data: "数据/参数",
                directory: "支持上传目录",
                headers: "请求头",
                listType: {
                    title: "列表类型",
                    dataSource: [ "文本", "图片", "卡片" ]
                },
                multiple: "多选模式",
                name: "字段标识",
                openFileDialogOnClick: {
                    title: "点击打开文件对话框",
                    tooltip: "点击打开文件对话框"
                },
                showUploadList: "是否展示文件列表",
                withCredentials: "携带Cookie",
                maxCount: "最大数量",
                method: "方法",
                textContent: "上传文案"
            }
        }
    },
    "en-US": {
        title: "Upload",
        settings: {
            "x-component-props": {
                accept: "Accept",
                action: "Upload Address",
                data: "Data",
                directory: "Support Upload Directory",
                headers: "Headers",
                listType: {
                    title: "List Type",
                    dataSource: [ "Text", "Image", "Card" ]
                },
                multiple: "Multiple",
                name: "Name",
                openFileDialogOnClick: "Open File Dialog On Click",
                showUploadList: "Show Upload List",
                withCredentials: "withCredentials",
                maxCount: "Max Count",
                method: "Method",
                textContent: "Text Content"
            }
        }
    },
    "ko-KR": {
        title: "업로드",
        settings: {
            "x-component-props": {
                accept: "승인",
                action: "업로드 주소",
                data: "데이터",
                directory: "디렉터리 업로드 지원",
                headers: "헤더",
                listType: {
                    title: "리스트 타입",
                    dataSource: [ "텍스트", "이미지", "카드" ]
                },
                multiple: "여러개",
                name: "이름",
                openFileDialogOnClick: "눌러서 파일 다이얼로그 열기",
                showUploadList: "업로드 목록 표시",
                withCredentials: "자격 증명 포함",
                maxCount: "최대 개수",
                method: "메서드",
                textContent: "텍스트 내용"
            }
        }
    }
}, De = D(Oe, {
    "zh-CN": {
        title: "拖拽上传",
        settings: {
            "x-component-props": {}
        }
    },
    "en-US": {
        title: "UploadDragger",
        settings: {
            "x-component-props": {}
        }
    },
    "ko-KR": {
        title: "드래그로 업로드",
        settings: {
            "x-component-props": {}
        }
    }
}), We = {
    "zh-CN": {
        title: "开关"
    },
    "en-US": {
        title: "Switch"
    },
    "ko-KR": {
        title: "스위치"
    }
}, Ve = {
    "zh-CN": {
        title: "对象容器"
    },
    "en-US": {
        title: "Object"
    },
    "ko-KR": {
        title: "오브젝트"
    }
}, ze = D(ye, {
    "zh-CN": {
        title: "表单",
        settings: {
            labelCol: "标签网格宽度",
            wrapperCol: "组件网格宽度",
            colon: "是否有冒号",
            labelAlign: {
                title: "标签对齐",
                dataSource: [ "左对齐", "右对齐", "继承" ]
            },
            wrapperAlign: {
                title: "组件对齐",
                dataSource: [ "左对齐", "右对齐", "继承" ]
            },
            labelWrap: "标签换行",
            wrapperWrap: "组件换行",
            labelWidth: "标签宽度",
            wrapperWidth: "组件宽度",
            fullness: "组件占满",
            inset: "内联布局",
            shallow: "是否浅传递",
            bordered: "是否有边框",
            size: {
                title: "尺寸",
                dataSource: [ "大", "小", "默认", "继承" ]
            },
            layout: {
                title: "布局",
                dataSource: [ "垂直", "水平", "内联", "继承" ]
            },
            feedbackLayout: {
                title: "反馈布局",
                dataSource: [ "宽松", "紧凑", "弹层", "无", "继承" ]
            },
            tooltipLayout: {
                title: "提示布局",
                dataSource: [ "图标", "文本", "继承" ]
            }
        }
    },
    "en-US": {
        title: "Form",
        settings: {
            labelCol: "Label Col",
            wrapperCol: "Wrapper Col",
            colon: "Colon",
            labelAlign: {
                title: "Label Align",
                dataSource: [ "Left", "Right", "Inherit" ]
            },
            wrapperAlign: {
                title: "Wrapper Align",
                dataSource: [ "Left", "Right", "Inherit" ]
            },
            labelWrap: "Label Wrap",
            wrapperWrap: "Wrapper Wrap",
            labelWidth: "Label Width",
            wrapperWidth: "Wrapper Width",
            fullness: "Fullness",
            inset: "Inset",
            shallow: "Shallow",
            bordered: "Bordered",
            size: {
                title: "Size",
                dataSource: [ "Large", "Small", "Default", "Inherit" ]
            },
            layout: {
                title: "Layout",
                dataSource: [ "Vertical", "Horizontal", "Inline", "Inherit" ]
            },
            feedbackLayout: {
                title: "Feedback Layout",
                dataSource: [ "Loose", "Terse", "Popup", "None", "Inherit" ]
            },
            tooltipLayout: {
                title: "Tooltip Layout",
                dataSource: [ "Icon", "Text", "Inherit" ]
            }
        }
    },
    "ko-KR": {
        title: "폼",
        settings: {
            labelCol: "Label Col",
            wrapperCol: "Wrapper Col",
            colon: "Colon",
            labelAlign: {
                title: "Label 정렬",
                dataSource: [ "왼쪽", "오른쪽", "상속" ]
            },
            wrapperAlign: {
                title: "Wrapper 정렬",
                dataSource: [ "왼쪽", "오른쪽", "상속" ]
            },
            labelWrap: "Label Wrap",
            wrapperWrap: "Wrapper Wrap",
            labelWidth: "Label Width",
            wrapperWidth: "Wrapper Width",
            fullness: "Fullness",
            inset: "Inset",
            shallow: "Shallow",
            bordered: "Bordered",
            size: {
                title: "크기",
                dataSource: [ "크게", "작게", "보통", "상속" ]
            },
            layout: {
                title: "레이아웃",
                dataSource: [ "수직", "수평", "인라인", "상속" ]
            },
            feedbackLayout: {
                title: "피드백 레이아웃",
                dataSource: [ "Loose", "Terse", "팝업", "없음", "상속" ]
            },
            tooltipLayout: {
                title: "툴팁 레이아웃",
                dataSource: [ "아이콘", "텍스트", "상속" ]
            }
        }
    }
}), Me = {
    "zh-CN": {
        title: "表单布局",
        settings: {
            "x-component-props": {
                labelCol: "标签网格宽度",
                wrapperCol: "组件网格宽度",
                colon: "是否有冒号",
                labelAlign: {
                    title: "标签对齐",
                    dataSource: [ "左对齐", "右对齐", "继承" ]
                },
                wrapperAlign: {
                    title: "组件对齐",
                    dataSource: [ "左对齐", "右对齐", "继承" ]
                },
                labelWrap: "标签换行",
                wrapperWrap: "组件换行",
                labelWidth: "标签宽度",
                wrapperWidth: "组件宽度",
                fullness: "组件占满",
                inset: "内联布局",
                shallow: "是否浅传递",
                bordered: "是否有边框",
                size: {
                    title: "尺寸",
                    dataSource: [ "大", "小", "默认", "继承" ]
                },
                layout: {
                    title: "布局",
                    dataSource: [ "水平", "垂直", "内联", "继承" ]
                },
                feedbackLayout: {
                    title: "反馈布局",
                    dataSource: [ "宽松", "紧凑", "弹层", "无", "继承" ]
                },
                tooltipLayout: {
                    title: "提示布局",
                    dataSource: [ "图标", "文本", "继承" ]
                }
            }
        }
    },
    "en-US": {
        title: "Form Layout",
        settings: {
            "x-component-props": {
                labelCol: "Label Col",
                wrapperCol: "Wrapper Col",
                colon: "Colon",
                labelAlign: {
                    title: "Label Align",
                    dataSource: [ "Left", "Right", "Inherit" ]
                },
                wrapperAlign: {
                    title: "Wrapper Align",
                    dataSource: [ "Left", "Right", "Inherit" ]
                },
                labelWrap: "Label Wrap",
                wrapperWrap: "Wrapper Wrap",
                labelWidth: "Label Width",
                wrapperWidth: "Wrapper Width",
                fullness: "Fullness",
                inset: "Inset",
                shallow: "Shallow",
                bordered: "Bordered",
                size: {
                    title: "Size",
                    dataSource: [ "Large", "Small", "Default", "Inherit" ]
                },
                layout: {
                    title: "Layout",
                    dataSource: [ "Horizontal", "Vertical", "Inline", "Inherit" ]
                },
                feedbackLayout: {
                    title: "Feedback Layout",
                    dataSource: [ "Loose", "Terse", "Popup", "None", "Inherit" ]
                },
                tooltipLayout: {
                    title: "Tooltip Layout",
                    dataSource: [ "Icon", "Text", "Inherit" ]
                }
            }
        }
    },
    "ko-KR": {
        title: "양식 레이아웃",
        settings: {
            "x-component-props": {
                labelCol: "레이블 열",
                wrapperCol: "래퍼 열",
                colon: "콜론",
                labelAlign: {
                    title: "레이블 정렬",
                    dataSource: [ "왼쪽", "오른쪽", "상속" ]
                },
                wrapperAlign: {
                    title: "래퍼 정렬",
                    dataSource: [ "왼쪽", "오른쪽", "상속" ]
                },
                labelWrap: "레이블 랩",
                wrapperWrap: "래퍼 랩",
                labelWidth: "레이블 너비",
                wrapperWidth: "래퍼 너비",
                fullness: "충만",
                inset: "삽입",
                shallow: "얕다",
                bordered: "경계",
                size: {
                    title: "크기",
                    dataSource: [ "큰", "작은", "기본", "상속" ]
                },
                layout: {
                    title: "레이아웃",
                    dataSource: [ "가로", "세로", "인라인", "상속" ]
                },
                feedbackLayout: {
                    title: "피드백 레이아웃",
                    dataSource: [ "느슨한", "간단한", "팝업", "없음", "상속" ]
                },
                tooltipLayout: {
                    title: "도구 설명 레이아웃",
                    dataSource: [ "아이콘", "텍스트", "상속" ]
                }
            }
        }
    }
}, Ue = {
    "zh-CN": {
        title: "文本",
        settings: {
            "x-component-props": {
                content: "文本内容",
                mode: {
                    title: "文本类型",
                    dataSource: [ "H1", "H2", "H3", "Paragraph", "Normal" ]
                }
            }
        }
    },
    "en-US": {
        title: "Text",
        settings: {
            "x-component-props": {
                content: "Text Content",
                mode: {
                    title: "Text Mode",
                    dataSource: [ "H1", "H2", "H3", "Paragraph", "Normal" ]
                }
            }
        }
    },
    "ko-KR": {
        title: "텍스트",
        settings: {
            "x-component-props": {
                content: "텍스트 내용",
                mode: {
                    title: "텍스트 모드",
                    dataSource: [ "H1", "H2", "H3", "Paragraph", "Normal" ]
                }
            }
        }
    }
}, He = {
    "zh-CN": {
        title: "卡片",
        settings: {
            "x-component-props": {
                type: "类型",
                title: "标题",
                extra: "右侧扩展",
                cardTypes: [ {
                    label: "内置",
                    value: "inner"
                }, {
                    label: "默认",
                    value: ""
                } ]
            }
        }
    },
    "en-US": {
        title: "Card",
        settings: {
            "x-component-props": {
                type: "Type",
                title: "Title",
                extra: "Extra",
                cardTypes: [ {
                    label: "Inner",
                    value: "inner"
                }, {
                    label: "Default",
                    value: ""
                } ]
            }
        }
    },
    "ko-KR": {
        title: "카드",
        settings: {
            "x-component-props": {
                type: "타입",
                title: "제목",
                extra: "추가 항목",
                cardTypes: [ {
                    label: "안쪽",
                    value: "inner"
                }, {
                    label: "기본",
                    value: ""
                } ]
            }
        }
    }
};

W.registerDesignerLocales({
    "zh-CN": {
        Previews: {
            droppable: "可以拖入组件",
            addTabPane: "添加选项卡",
            addCollapsePanel: "添加手风琴卡片",
            addTableColumn: "添加表格列",
            addTableSortHandle: "添加排序",
            addIndex: "添加索引",
            addOperation: "添加操作"
        }
    }
});

var Ge = {
    "zh-CN": {
        title: "添加按钮",
        settings: {
            "x-component-props": {
                method: "方法",
                defaultValue: "默认值"
            }
        }
    }
}, Be = {
    "zh-CN": {
        title: "删除按钮"
    },
    "en-US": {
        title: "Remove"
    },
    "ko-KR": {
        title: "삭제"
    }
}, je = {
    "zh-CN": {
        title: "上移按钮"
    },
    "en-US": {
        title: "Move Up"
    },
    "ko-KR": {
        title: "위로 옮기기"
    }
}, Ke = {
    "zh-CN": {
        title: "下移按钮"
    },
    "en-US": {
        title: "Move Down"
    },
    "ko-KR": {
        title: "아래로 옮기기"
    }
}, Xe = {
    "zh-CN": {
        title: "索引标识"
    },
    "en-US": {
        title: "Index"
    },
    "ko-KR": {
        title: "색인"
    }
}, _e = D(He, {
    "zh-CN": {
        title: "自增卡片",
        addIndex: "添加索引",
        addOperation: "添加操作"
    },
    "en-US": {
        title: "Array Cards",
        addIndex: "Add Index",
        addOperation: "Add Operations"
    },
    "ko-KR": {
        title: "배열 카드",
        addIndex: "색인 추가",
        addOperation: "작업 추가"
    }
}), Ye = {
    "zh-CN": {
        title: "表格列",
        settings: {
            "x-component-props": {
                title: "标题",
                align: {
                    title: "内容对齐",
                    dataSource: [ "左", "右", "居中" ]
                },
                colSpan: "跨列",
                width: "宽度",
                fixed: {
                    title: "固定",
                    dataSource: [ "左", "右", "无" ]
                }
            }
        }
    },
    "en-US": {
        title: "Column",
        settings: {
            "x-component-props": {
                title: "Title",
                align: {
                    title: "Align",
                    dataSource: [ "Left", "Right", "Center" ]
                },
                colSpan: "Col Span",
                width: "Width",
                fixed: {
                    title: "Fixed",
                    dataSource: [ "Left", "Right", "None" ]
                }
            }
        }
    },
    "ko-KR": {
        title: "열",
        settings: {
            "x-component-props": {
                title: "제목",
                align: {
                    title: "정렬",
                    dataSource: [ "왼쪽", "오른쪽", "가운데" ]
                },
                colSpan: "Col Span",
                width: "너비",
                fixed: {
                    title: "고정",
                    dataSource: [ "왼쪽", "오른족", "없음" ]
                }
            }
        }
    }
}, qe = {
    "zh-CN": {
        title: "弹性间距",
        settings: {
            "x-component-props": {
                direction: {
                    title: "方向",
                    dataSource: [ "垂直", "水平" ]
                },
                split: "分割内容",
                wrap: "自动换行",
                align: {
                    title: "对齐",
                    dataSource: [ "头部", "尾部", "居中", "基准线" ]
                }
            }
        }
    },
    "en-US": {
        title: "Space",
        settings: {
            "x-component-props": {
                direction: {
                    title: "Direction",
                    dataSource: [ "Vertical", "Horizontal" ]
                },
                split: "Split",
                wrap: "Word Wrap",
                align: {
                    title: "Align",
                    dataSource: [ "Start", "End", "Center", "Baseline" ]
                }
            }
        }
    },
    "ko-KR": {
        title: "간격",
        settings: {
            "x-component-props": {
                direction: {
                    title: "방향",
                    dataSource: [ "수직", "수평" ]
                },
                split: "분할",
                wrap: "자동 줄 바꿈",
                align: {
                    title: "정렬",
                    dataSource: [ "시작", "끝", "가운데", "기준선" ]
                }
            }
        }
    }
}, $e = {
    "zh-CN": {
        title: "选项卡",
        addTabPane: "添加选项卡",
        settings: {
            "x-component-props": {
                animated: "启用动画过渡",
                centered: "标签居中",
                tab: "选项名称",
                type: {
                    title: "类型",
                    dataSource: [ {
                        label: "线框",
                        value: "line"
                    }, {
                        label: "卡片",
                        value: "card"
                    } ]
                }
            }
        }
    },
    "en-US": {
        title: "Tabs",
        addTabPane: "Add Panel",
        settings: {
            "x-component-props": {
                animated: "Enable Animated",
                centered: "Label Centered",
                tab: "Tab Title",
                type: {
                    title: "Type",
                    dataSource: [ {
                        label: "Line",
                        value: "line"
                    }, {
                        label: "Card",
                        value: "card"
                    } ]
                }
            }
        }
    },
    "ko-KR": {
        title: "탭",
        addTabPane: "패널 추가",
        settings: {
            "x-component-props": {
                animated: "애니메이션 활성화",
                centered: "레이블을 가운데로",
                tab: "텝 제목",
                type: {
                    title: "타입",
                    dataSource: [ {
                        label: "라인",
                        value: "line"
                    }, {
                        label: "카드",
                        value: "card"
                    } ]
                }
            }
        }
    }
}, Qe = {
    "zh-CN": {
        title: "选项卡面板",
        settings: {
            "x-component-props": {
                tab: "面板标题"
            }
        }
    },
    "en-US": {
        title: "Tab Panel",
        settings: {
            "x-component-props": {
                tab: "Panel Title"
            }
        }
    },
    "ko-KR": {
        title: "탭 패널",
        settings: {
            "x-component-props": {
                tab: "패널 제목"
            }
        }
    }
}, Je = {
    "zh-CN": {
        title: "折叠面板",
        addCollapsePanel: "添加面板",
        settings: {
            "x-component-props": {
                accordion: "手风琴模式",
                collapsible: {
                    title: "可折叠区域",
                    dataSource: [ "头部", "禁用" ]
                },
                ghost: "幽灵模式",
                bordered: "是否有边框"
            }
        }
    },
    "en-US": {
        title: "Collapse",
        addCollapsePanel: "Add Panel",
        settings: {
            "x-component-props": {
                accordion: "Accordion Mode",
                collapsible: {
                    title: "Collapsible",
                    dataSource: [ "Header", "Disable" ]
                },
                ghost: "Ghost Mode",
                bordered: "Bordered"
            }
        }
    },
    "ko-KR": {
        title: "드롭다운",
        addCollapsePanel: "패널 추가",
        settings: {
            "x-component-props": {
                accordion: "Accordion 모드",
                collapsible: {
                    title: "드롭 여부",
                    dataSource: [ "헤더", "비활성화" ]
                },
                ghost: "고스트 모드",
                bordered: "Bordered"
            }
        }
    }
}, Ze = {
    "zh-CN": {
        title: "面板",
        settings: {
            "x-component-props": {
                collapsible: {
                    title: "是否可折叠",
                    dataSource: [ "头部", "禁用" ]
                },
                header: "标题",
                extra: "扩展内容"
            }
        }
    },
    "en-US": {
        title: "Panel",
        settings: {
            "x-component-props": {
                collapsible: {
                    title: "Collapsible",
                    dataSource: [ "Header", "Disable" ]
                },
                header: "Header Title",
                extra: "Extra Content"
            }
        }
    },
    "ko-KR": {
        title: "패널",
        settings: {
            "x-component-props": {
                collapsible: {
                    title: "드롭 여부",
                    dataSource: [ "해더", "비활성화" ]
                },
                header: "헤더 제목",
                extra: "추가 내용"
            }
        }
    }
}, et = {
    "zh-CN": {
        title: "网格布局",
        addGridColumn: "添加网格列",
        settings: {
            "x-component-props": {
                minWidth: "最小宽度",
                minColumns: "最小列数",
                maxWidth: "最大宽度",
                maxColumns: "最大列数",
                breakpoints: "响应式断点",
                columnGap: "列间距",
                rowGap: "行间距",
                colWrap: "自动换行",
                strictAutoFit: "自动填充"
            }
        }
    },
    "en-US": {
        title: "Grid",
        addGridColumn: "Add Grid Column",
        settings: {
            "x-component-props": {
                minWidth: "Min Width",
                minColumns: "Min Columns",
                maxWidth: "Max Width",
                maxColumns: "Max Columns",
                breakpoints: "Breakpoints",
                columnGap: "Column Gap",
                rowGap: "Row Gap",
                colWrap: "Col Wrap",
                strictAutoFit: "Strict Auto Fit"
            }
        }
    },
    "ko-KR": {
        title: "그리드 열",
        addGridColumn: "그리드 열 추가",
        settings: {
            "x-component-props": {
                minWidth: "최소 너비",
                minColumns: "최소 열 개수",
                maxWidth: "최대 너비",
                maxColumns: "최대 열 개수",
                breakpoints: "중단점",
                columnGap: "열 간격",
                rowGap: "행 간격",
                colWrap: "자동 줄바꿈"
            }
        }
    }
}, tt = {
    "zh-CN": {
        title: "网格列",
        settings: {
            "x-component-props": {
                gridSpan: "跨列栏数"
            }
        }
    },
    "en-US": {
        title: "Grid Column",
        settings: {
            "x-component-props": {
                gridSpan: "Grid Span"
            }
        }
    },
    "ko-KR": {
        title: "그리드 열",
        settings: {
            "x-component-props": {
                gridSpan: "그리드 스팬"
            }
        }
    }
}, ot = {
    "zh-CN": {
        title: "插槽",
        settings: {
            "x-component-props": {
                slotName: {
                    title: "插槽名称",
                    tooltip: "需要在createExtForm.extConfig.slots配置对应的插槽信息"
                }
            }
        }
    },
    "en-US": {
        title: "Slot",
        settings: {
            "x-component-props": {
                slotName: {
                    title: "slot's name",
                    tooltip: "The corresponding slot information needs to be passed into 'createExtForm.extConfig.slots'"
                }
            }
        }
    }
}, rt = Object.freeze({
    __proto__: null,
    Component: ye,
    Field: be,
    Input: Se,
    Select: ge,
    TextArea: fe,
    TreeSelect: Fe,
    Cascader: Ie,
    RadioGroup: we,
    CheckboxGroup: Ce,
    Slider: ve,
    Rate: Te,
    DatePicker: ke,
    DateRangePicker: Ae,
    TimePicker: Ne,
    TimeRangePicker: Pe,
    NumberPicker: Re,
    Password: Le,
    Transfer: Ee,
    Upload: Oe,
    UploadDragger: De,
    Switch: We,
    ObjectLocale: Ve,
    Form: ze,
    FormLayout: Me,
    Text: Ue,
    Card: He,
    ArrayAddition: Ge,
    ArrayRemove: Be,
    ArrayMoveUp: je,
    ArrayMoveDown: Ke,
    ArrayIndex: Xe,
    ArraySortHandle: {
        "zh-CN": {
            title: "排序标识"
        },
        "en-US": {
            title: "Sort Handle"
        },
        "ko-KR": {
            title: "정렬 핸들"
        }
    },
    ArrayCards: _e,
    ArrayTable: {
        "zh-CN": {
            title: "自增表格",
            addSortHandle: "添加排序",
            addColumn: "添加列",
            addIndex: "添加索引",
            addOperation: "添加操作",
            settings: {
                "x-component-props": {
                    showHeader: "显示头部",
                    sticky: "吸顶",
                    align: {
                        title: "对齐",
                        dataSource: [ "左", "右", "居中" ]
                    },
                    colSpan: "跨列",
                    fixed: {
                        title: "固定列",
                        dataSource: [ "左", "右", "无" ]
                    },
                    width: "宽度",
                    defaultValue: "默认值",
                    tableLayout: {
                        title: "表格布局",
                        dataSource: [ "自动", "固定" ]
                    }
                }
            }
        },
        "en-US": {
            title: "Array Table",
            addSortHandle: "Add Sort Handle",
            addColumn: "Add Column",
            addIndex: "Add Index",
            addOperation: "Add Operations",
            settings: {
                "x-component-props": {
                    showHeader: "Show Header",
                    sticky: "Sticky",
                    align: {
                        title: "Align",
                        dataSource: [ "Left", "Right", "Center" ]
                    },
                    colSpan: "Col Span",
                    fixed: {
                        title: "Fixed",
                        dataSource: [ "Left", "Right", "None" ]
                    },
                    width: "Width",
                    defaultValue: "Default Value",
                    tableLayout: {
                        title: "Table Layout",
                        dataSource: [ "Auto", "Fixed" ]
                    }
                }
            }
        },
        "ko-KR": {
            title: "배열 테이블",
            addSortHandle: "정렬 핸들 추가",
            addColumn: "열 추가",
            addIndex: "색인 추가",
            addOperation: "작업 추가",
            settings: {
                "x-component-props": {
                    showHeader: "헤더 보여주기",
                    sticky: "고정",
                    align: {
                        title: "정렬",
                        dataSource: [ "왼쪽", "오른쪽", "가운데" ]
                    },
                    colSpan: "colSpan",
                    fixed: {
                        title: "고정",
                        dataSource: [ "왼쪽", "오른쪽", "없음" ]
                    },
                    width: "너비",
                    defaultValue: "기본 값"
                }
            }
        }
    },
    ArrayTableColumn: Ye,
    Void: {
        "zh-CN": {
            title: "虚拟容器"
        },
        "en-US": {
            title: "Void"
        },
        "ko-KR": {
            title: "비어있음"
        }
    },
    Space: qe,
    FormTab: $e,
    FormTabPane: Qe,
    FormCollapse: Je,
    FormCollapsePanel: Ze,
    FormGrid: et,
    FormGridColumn: tt,
    Slot: ot
});

l.silent(!0);

var nt = {
    title: "title",
    description: "description",
    default: "value",
    enum: "dataSource",
    readOnly: "readOnly",
    writeOnly: "editable",
    required: "required",
    "x-content": "content",
    "x-value": "value",
    "x-editable": "editable",
    "x-disabled": "disabled",
    "x-read-pretty": "readPretty",
    "x-read-only": "readOnly",
    "x-visible": "visible",
    "x-hidden": "hidden",
    "x-display": "display",
    "x-pattern": "pattern"
}, at = {
    title: !0,
    description: !0,
    default: !0,
    "x-content": !0,
    "x-value": !0
}, pt = function(e) {
    return $(e) && /^\{\{.*\}\}$/.test(e);
}, lt = function(e) {
    if ("object" == typeof e) {
        var t = Q(e), o = E(e, (function(e, o, r) {
            if (pt(o)) return e;
            var n = lt(o);
            return null == n ? e : t ? e.concat([ n ]) : (e[r] = n, e);
        }), t ? [] : {});
        return o;
    }
    if (!pt(e)) return e;
}, it = function(t, o, r, a) {
    var l = {};
    L(nt, (function(e, o) {
        var r = t[o];
        if (pt(r)) {
            if (!at[o]) return;
            if (r) return void (l[e] = r);
        } else r && (l[e] = lt(r));
    })), o["FormItem"] || (o["FormItem"] = x);
    var i = t["x-decorator"] && n.getIn(o, t["x-decorator"]), c = t["x-component"] && n.getIn(o, t["x-component"]), d = t["x-decorator-props"] || {}, m = t["x-component-props"] || {};
    return i && (l.decorator = [ i, p(d) ]), c && (l.component = [ c, p(m) ]), i ? n.setIn(l["decorator"][1], r, a) : c && n.setIn(l["component"][1], r, a), 
    l.title = l.title && e.createElement("span", {
        "data-content-editable": "title"
    }, l.title), l.description = l.description && e.createElement("span", {
        "data-content-editable": "description"
    }, l.description), l;
}, ct = i((function(t) {
    var o = G(), r = B(), n = j();
    if (!n) return null;
    var a = it(t, r, o.props.nodeIdAttrName, n.id);
    return "object" === t.type ? e.createElement(xe, null, e.createElement(c, de({}, a, {
        name: n.id
    }), t.children)) : "array" === t.type ? e.createElement(d, de({}, a, {
        name: n.id
    })) : "void" === n.props.type ? e.createElement(m, de({}, a, {
        name: n.id
    }), t.children) : e.createElement(s, de({}, a, {
        name: n.id
    }));
}));

ct.Behavior = V({
    name: "Field",
    selector: "Field",
    designerLocales: be
});

var dt = function(t) {
    return e.createElement(oe, {
        checked: "FormItem" === t.value,
        onChange: function(e) {
            t.onChange(e ? "FormItem" : void 0);
        }
    });
}, mt = {
    type: "object",
    properties: {
        addonBefore: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        addonAfter: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        prefix: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        suffix: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        allowClear: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        bordered: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        maxLength: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        placeholder: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        size: {
            type: "string",
            enum: [ "large", "small", "middle", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "middle"
            }
        }
    },
    TextArea: {
        type: "object",
        properties: {
            bordered: {
                type: "boolean",
                "x-decorator": "FormItem",
                "x-component": "Switch",
                "x-component-props": {
                    defaultChecked: !0
                }
            },
            maxLength: {
                type: "number",
                "x-decorator": "FormItem",
                "x-component": "NumberPicker"
            },
            placeholder: {
                type: "string",
                "x-decorator": "FormItem",
                "x-component": "Input"
            },
            autoSize: {
                type: "boolean",
                "x-decorator": "FormItem",
                "x-component": "Switch"
            },
            showCount: {
                "x-decorator": "FormItem",
                "x-component": "Switch"
            }
        }
    }
}, st = {
    type: "object",
    properties: {
        content: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input.TextArea"
        },
        mode: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "normal"
            },
            enum: [ "h1", "h2", "h3", "p", "normal" ]
        }
    }
}, ut = {
    type: "object",
    properties: {
        labelCol: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        wrapperCol: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        labelWidth: {
            "x-decorator": "FormItem",
            "x-component": "SizeInput"
        },
        wrapperWidth: {
            "x-decorator": "FormItem",
            "x-component": "SizeInput"
        },
        colon: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        feedbackLayout: {
            type: "string",
            enum: [ "loose", "terse", "popover", "none", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "loose"
            }
        },
        size: {
            type: "string",
            enum: [ "large", "small", "default", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "default"
            }
        },
        layout: {
            type: "string",
            enum: [ "vertical", "horizontal", "inline", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "horizontal"
            }
        },
        tooltipLayout: {
            type: "string",
            enum: [ "icon", "text", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "icon"
            }
        },
        labelAlign: {
            type: "string",
            enum: [ "left", "right", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "right"
            }
        },
        wrapperAlign: {
            type: "string",
            enum: [ "left", "right", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "left"
            }
        },
        labelWrap: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        wrapperWrap: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        fullness: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        inset: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        shallow: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        bordered: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        }
    }
}, xt = {
    type: "void",
    properties: {
        "style.width": {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "SizeInput"
        },
        "style.height": {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "SizeInput"
        },
        "style.display": {
            "x-component": "DisplayStyleSetter"
        },
        "style.background": {
            "x-component": "BackgroundStyleSetter"
        },
        "style.boxShadow": {
            "x-component": "BoxShadowStyleSetter"
        },
        "style.font": {
            "x-component": "FontStyleSetter"
        },
        "style.margin": {
            "x-component": "BoxStyleSetter"
        },
        "style.padding": {
            "x-component": "BoxStyleSetter"
        },
        "style.borderRadius": {
            "x-component": "BorderRadiusStyleSetter"
        },
        "style.border": {
            "x-component": "BorderStyleSetter"
        },
        "style.opacity": {
            "x-decorator": "FormItem",
            "x-component": "Slider",
            "x-component-props": {
                defaultValue: 1,
                min: 0,
                max: 1,
                step: .01
            }
        }
    }
}, ht = {
    type: "object",
    properties: de(de({}, ut.properties), {
        style: xt
    })
}, yt = {
    type: "object",
    properties: {
        tooltip: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        addonBefore: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        addonAfter: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        labelCol: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        wrapperCol: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        labelWidth: {
            "x-decorator": "FormItem",
            "x-component": "SizeInput"
        },
        wrapperWidth: {
            "x-decorator": "FormItem",
            "x-component": "SizeInput"
        },
        colon: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        asterisk: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        gridSpan: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        feedbackLayout: {
            type: "string",
            enum: [ "loose", "terse", "popover", "none", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "loose"
            }
        },
        size: {
            type: "string",
            enum: [ "large", "small", "default", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "default"
            }
        },
        layout: {
            type: "string",
            enum: [ "vertical", "horizontal", "inline", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "horizontal"
            }
        },
        tooltipLayout: {
            type: "string",
            enum: [ "icon", "text", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "icon"
            }
        },
        labelAlign: {
            type: "string",
            enum: [ "left", "right", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "right"
            }
        },
        wrapperAlign: {
            type: "string",
            enum: [ "left", "right", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "left"
            }
        },
        labelWrap: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        wrapperWrap: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        fullness: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        inset: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        bordered: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        }
    }
}, bt = {
    type: "object",
    properties: {
        mode: {
            type: "string",
            enum: [ "multiple", "tags", null ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
                defaultValue: null,
                optionType: "button"
            }
        },
        allowClear: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        autoClearSearchValue: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        dropdownMatchSelectWidth: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        autoFocus: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        bordered: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        defaultActiveFirstOption: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        defaultOpen: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        labelInValue: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        showArrow: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        showSearch: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        virtual: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultValue: !0
            }
        },
        filterOption: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "BOOLEAN", "EXPRESSION" ]
            }
        },
        filterSort: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        listHeight: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
                defaultValue: 256
            }
        },
        maxTagCount: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        maxTagPlaceholder: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        maxTagTextLength: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        notFoundContent: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "x-component-props": {
                defaultValue: "Not Found"
            }
        },
        placeholder: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        size: {
            type: "string",
            enum: [ "large", "small", "middle", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "middle"
            }
        }
    }
}, St = {
    type: "object",
    properties: {
        title: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        extra: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        type: {
            type: "boolean",
            enum: W.getDesignerMessage("settings.cardTypes"),
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
                defaultValue: "",
                optionType: "button"
            }
        },
        bordered: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        }
    }
}, gt = {
    type: "object",
    properties: {
        allowClear: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        changeOnSelect: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        autoFocus: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        bordered: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        displayRender: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        fieldNames: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        showSearch: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        notFoundContent: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "x-component-props": {
                defaultValue: "Not Found"
            }
        },
        placeholder: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        size: {
            type: "string",
            enum: [ "large", "small", "middle", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "middle"
            }
        }
    }
}, ft = {
    type: "object",
    properties: {
        autoFocus: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        }
    }
}, Ft = {
    type: "object",
    properties: {
        autoFocus: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        }
    },
    Group: {
        type: "object",
        properties: {
            optionType: {
                type: "string",
                enum: [ "default", "button" ],
                "x-decorator": "FormItem",
                "x-component": "Radio.Group",
                "x-component-props": {
                    defaultValue: "default",
                    optionType: "button"
                }
            },
            buttonStyle: {
                type: "string",
                enum: [ "outline", "solid" ],
                "x-decorator": "FormItem",
                "x-component": "Radio.Group",
                "x-component-props": {
                    defaultValue: "outline",
                    optionType: "button"
                }
            }
        }
    }
}, It = {
    allowClear: {
        type: "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch",
        "x-component-props": {
            defaultChecked: !0
        }
    },
    autoFocus: {
        type: "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
    },
    bordered: {
        type: "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch",
        "x-component-props": {
            defaultChecked: !0
        }
    },
    disabledTime: {
        "x-decorator": "FormItem",
        "x-component": "ValueInput",
        "x-component-props": {
            include: [ "EXPRESSION" ]
        }
    },
    disabledDate: {
        "x-decorator": "FormItem",
        "x-component": "ValueInput",
        "x-component-props": {
            include: [ "EXPRESSION" ]
        }
    },
    inputReadOnly: {
        type: "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
    },
    placeholder: {
        type: "string",
        "x-decorator": "FormItem",
        "x-component": "Input"
    },
    size: {
        type: "string",
        enum: [ "large", "small", "middle", null ],
        "x-decorator": "FormItem",
        "x-component": "Select",
        "x-component-props": {
            defaultValue: "middle"
        }
    },
    format: {
        type: "string",
        "x-decorator": "FormItem",
        "x-component": "Input",
        "x-component-props": {
            placeholder: "YYYY-MM-DD"
        }
    }
}, wt = {
    type: "object",
    properties: de(de({
        picker: {
            type: "string",
            enum: [ "time", "date", "month", "year", "quarter", "decade" ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "date"
            }
        }
    }, It), {
        showNow: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        showTime: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        showToday: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        }
    })
};

wt.RangePicker = {
    type: "object",
    properties: de(de({
        picker: {
            type: "string",
            enum: [ "time", "date", "month", "year", "decade" ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "date"
            }
        }
    }, It), {
        showTime: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        }
    })
};

var Ct = {
    type: "object",
    properties: {
        decimalSeparator: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        precision: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        max: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        min: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        step: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        placeholder: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        size: {
            type: "string",
            enum: [ "large", "small", "middle", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "middle"
            }
        },
        formatter: {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        parser: {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        stringMode: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        bordered: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        keyboard: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        }
    }
}, vt = {
    type: "object",
    properties: de(de({}, mt.properties), {
        checkStrength: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        }
    })
}, Tt = {
    type: "object",
    properties: {
        allowClear: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        count: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
                defaultValue: 5
            }
        },
        allowHalf: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        tooltips: {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        autoFocus: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        }
    }
}, kt = {
    type: "object",
    properties: {
        allowClear: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        dots: {
            title: W.getDesignerMessage("settings.sliderDots"),
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        range: {
            title: W.getDesignerMessage("settings.sliderRange"),
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        reverse: {
            title: W.getDesignerMessage("settings.sliderReverse"),
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        vertical: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        tooltipVisible: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        tooltipPlacement: {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        marks: {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        max: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
                defaultValue: 100
            }
        },
        min: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
                defaultValue: 0
            }
        },
        step: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
                defaultValue: 1
            }
        }
    }
}, At = {
    allowClear: {
        type: "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch",
        "x-component-props": {
            defaultChecked: !0
        }
    },
    autoFocus: {
        type: "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
    },
    bordered: {
        type: "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch",
        "x-component-props": {
            defaultChecked: !0
        }
    },
    clearText: {
        type: "string",
        "x-decorator": "FormItem",
        "x-component": "Input"
    },
    disabledHours: {
        "x-decorator": "FormItem",
        "x-component": "ValueInput",
        "x-component-props": {
            include: [ "EXPRESSION" ]
        }
    },
    disabledMinutes: {
        "x-decorator": "FormItem",
        "x-component": "ValueInput",
        "x-component-props": {
            include: [ "EXPRESSION" ]
        }
    },
    disabledSeconds: {
        "x-decorator": "FormItem",
        "x-component": "ValueInput",
        "x-component-props": {
            include: [ "EXPRESSION" ]
        }
    },
    hideDisabledOptions: {
        type: "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
    },
    inputReadOnly: {
        type: "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
    },
    showNow: {
        type: "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
    },
    use12Hours: {
        type: "boolean",
        "x-decorator": "FormItem",
        "x-component": "Switch"
    },
    hourStep: {
        type: "number",
        "x-decorator": "FormItem",
        "x-component": "NumberPicker",
        "x-component-props": {
            defaultValue: 1
        }
    },
    minuteStep: {
        type: "number",
        "x-decorator": "FormItem",
        "x-component": "NumberPicker",
        "x-component-props": {
            defaultValue: 1
        }
    },
    secondStep: {
        type: "number",
        "x-decorator": "FormItem",
        "x-component": "NumberPicker",
        "x-component-props": {
            defaultValue: 1
        }
    },
    placeholder: {
        type: "string",
        "x-decorator": "FormItem",
        "x-component": "Input"
    },
    size: {
        type: "string",
        enum: [ "large", "small", "middle", null ],
        "x-decorator": "FormItem",
        "x-component": "Select"
    },
    format: {
        type: "string",
        "x-decorator": "FormItem",
        "x-component": "Input",
        "x-component-props": {
            placeholder: "YYYY-MM-DD"
        }
    }
}, Nt = {
    type: "object",
    properties: At
};

Nt.RangePicker = {
    type: "object",
    properties: At
};

var Pt = {
    type: "object",
    properties: {
        allowClear: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        autoClearSearchValue: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        autoFocus: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        bordered: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        labelInValue: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        showArrow: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        showSearch: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        virtual: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        treeCheckable: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        treeDefaultExpandAll: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        dropdownMatchSelectWidth: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        showCheckedStrategy: {
            type: "string",
            enum: [ "SHOW_ALL", "SHOW_PARENT", "SHOW_CHILD" ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "SHOW_CHILD"
            }
        },
        treeDefaultExpandedKeys: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        treeNodeFilterProp: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        treeNodeLabelProp: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        filterTreeNode: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "BOOLEAN", "EXPRESSION" ]
            }
        },
        treeDataSimpleMode: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "BOOLEAN", "EXPRESSION" ]
            }
        },
        listHeight: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
                defaultValue: 256
            }
        },
        placeholder: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        size: {
            type: "string",
            enum: [ "large", "small", "middle", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "middle"
            }
        }
    }
}, Rt = {
    type: "object",
    properties: {
        oneWay: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        showSearch: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        showSearchAll: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        filterOption: {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        operations: {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        titles: {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        }
    }
}, Lt = {
    type: "object",
    properties: {
        textContent: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        accept: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        action: {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "TEXT", "EXPRESSION" ]
            }
        },
        name: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "x-component-props": {
                defaultValue: "file"
            }
        },
        maxCount: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        method: {
            enum: [ "POST", "PUT", "GET" ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
                defaultValue: "POST",
                optionType: "button"
            }
        },
        data: {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        headers: {
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        listType: {
            enum: [ "text", "picture", "picture-card" ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
                defaultValue: "text",
                optionType: "button"
            }
        },
        directory: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        multiple: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        openFileDialogOnClick: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        showUploadList: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        withCredentials: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        }
    }
};

Lt.Dragger = Lt;

var Et = {
    type: "object",
    properties: {
        autoFocus: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        size: {
            type: "string",
            enum: [ "large", "small", "default", "" ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "default"
            }
        }
    }
}, Ot = {
    type: "object",
    properties: {
        minWidth: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
                defaultValue: 100
            }
        },
        maxWidth: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        minColumns: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
                defaultValue: 0
            }
        },
        maxColumns: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        breakpoints: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "ValueInput",
            "x-component-props": {
                include: [ "EXPRESSION" ]
            }
        },
        columnGap: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
                defaultValue: 10
            }
        },
        rowGap: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
                defaultValue: 5
            }
        },
        colWrap: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        strictAutoFit: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !1
            }
        }
    },
    GridColumn: {
        type: "object",
        properties: {
            gridSpan: {
                type: "number",
                "x-decorator": "FormItem",
                "x-component": "NumberPicker",
                "x-component-props": {
                    defaultValue: 1
                }
            }
        }
    }
}, Dt = {
    type: "object",
    properties: {
        align: {
            type: "string",
            enum: [ "start", "end", "center", "baseline" ],
            "x-decorator": "FormItem",
            "x-component": "Select"
        },
        direction: {
            type: "string",
            enum: [ "vertical", "horizontal" ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
                defaultValue: "horizontal",
                optionType: "button"
            }
        },
        size: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-component-props": {
                defaultValue: 8
            }
        },
        split: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        wrap: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        }
    }
}, Wt = {
    type: "object",
    properties: {
        animated: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        centered: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        size: {
            type: "string",
            enum: [ "large", "small", "default", null ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "default"
            }
        },
        type: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
                defaultValue: "line",
                optionType: "button"
            }
        }
    },
    TabPane: {
        type: "object",
        properties: {
            tab: {
                type: "string",
                "x-decorator": "FormItem",
                "x-component": "Input"
            }
        }
    }
}, Vt = {
    type: "object",
    properties: {
        accordion: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        collapsible: {
            type: "string",
            enum: [ "header", "disabled" ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
                defaultValue: "header",
                optionType: "button"
            }
        },
        ghost: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        bordered: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        }
    },
    CollapsePanel: {
        type: "object",
        properties: {
            collapsible: {
                type: "string",
                enum: [ "header", "disabled" ],
                "x-decorator": "FormItem",
                "x-component": "Radio.Group",
                "x-component-props": {
                    defaultValue: "header",
                    optionType: "button"
                }
            },
            header: {
                type: "boolean",
                "x-decorator": "FormItem",
                "x-component": "Input"
            },
            extra: {
                type: "boolean",
                "x-decorator": "FormItem",
                "x-component": "Input"
            }
        }
    }
}, zt = {
    type: "object",
    properties: {
        bordered: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        showHeader: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-component-props": {
                defaultChecked: !0
            }
        },
        sticky: {
            type: "boolean",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        },
        size: {
            type: "string",
            enum: [ "large", "small", "middle" ],
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                defaultValue: "small"
            }
        },
        tableLayout: {
            type: "string",
            enum: [ "auto", "fixed" ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
                defaultValue: "auto",
                optionType: "button"
            }
        }
    }
};

zt.Column = {
    type: "object",
    properties: {
        title: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        },
        align: {
            type: "string",
            enum: [ "left", "right", "center" ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
                defaultValue: "left",
                optionType: "button"
            }
        },
        colSpan: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        width: {
            type: "number",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        },
        fixed: {
            type: "string",
            enum: [ "left", "right", !1 ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
                optionType: "button"
            }
        }
    }
}, zt.Addition = {
    type: "object",
    properties: {
        method: {
            type: "string",
            enum: [ "push", "unshift" ],
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "x-component-props": {
                defaultValue: "push",
                optionType: "button"
            }
        },
        defaultValue: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "ValueInput"
        }
    }
};

var Mt = St;

Mt.Addition = zt.Addition;

var Ut = {
    type: "object",
    properties: {
        slotName: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input"
        }
    }
}, Ht = Object.freeze({
    __proto__: null,
    Input: mt,
    Text: st,
    FormLayout: ut,
    CSSStyle: xt,
    Form: ht,
    FormItem: yt,
    Select: bt,
    Card: St,
    Cascader: gt,
    Checkbox: ft,
    Radio: Ft,
    DatePicker: wt,
    NumberPicker: Ct,
    Password: vt,
    Rate: Tt,
    Slider: kt,
    CommonTimePickerAPI: At,
    TimePicker: Nt,
    TreeSelect: Pt,
    Transfer: Rt,
    Upload: Lt,
    Switch: Et,
    FormGrid: Ot,
    Space: Dt,
    FormTab: Wt,
    FormCollapse: Vt,
    ArrayTable: zt,
    ArrayCards: Mt,
    Slot: Ut
}), Gt = function(e, t) {
    return {
        "component-group": e && {
            type: "void",
            "x-component": "CollapseItem",
            "x-reactions": {
                fulfill: {
                    state: {
                        visible: '{{!!$form.values["x-component"]}}'
                    }
                }
            },
            properties: {
                "x-component-props": e
            }
        },
        "decorator-group": t && {
            type: "void",
            "x-component": "CollapseItem",
            "x-component-props": {
                defaultExpand: !1
            },
            "x-reactions": {
                fulfill: {
                    state: {
                        visible: '{{!!$form.values["x-decorator"]}}'
                    }
                }
            },
            properties: {
                "x-decorator-props": t
            }
        },
        "component-style-group": {
            type: "void",
            "x-component": "CollapseItem",
            "x-component-props": {
                defaultExpand: !1
            },
            "x-reactions": {
                fulfill: {
                    state: {
                        visible: '{{!!$form.values["x-component"]}}'
                    }
                }
            },
            properties: {
                "x-component-props.style": xt
            }
        },
        "decorator-style-group": {
            type: "void",
            "x-component": "CollapseItem",
            "x-component-props": {
                defaultExpand: !1
            },
            "x-reactions": {
                fulfill: {
                    state: {
                        visible: '{{!!$form.values["x-decorator"]}}'
                    }
                }
            },
            properties: {
                "x-decorator-props.style": xt
            }
        }
    };
}, Bt = function(e, t) {
    return void 0 === t && (t = yt), {
        type: "object",
        properties: de({
            "field-group": {
                type: "void",
                "x-component": "CollapseItem",
                properties: {
                    name: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "Input"
                    },
                    title: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "Input"
                    },
                    description: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "Input.TextArea"
                    },
                    "x-display": {
                        type: "string",
                        enum: [ "visible", "hidden", "none", "" ],
                        "x-decorator": "FormItem",
                        "x-component": "Select",
                        "x-component-props": {
                            defaultValue: "visible"
                        }
                    },
                    "x-pattern": {
                        type: "string",
                        enum: [ "editable", "disabled", "readOnly", "readPretty", "" ],
                        "x-decorator": "FormItem",
                        "x-component": "Select",
                        "x-component-props": {
                            defaultValue: "editable"
                        }
                    },
                    default: {
                        "x-decorator": "FormItem",
                        "x-component": "ValueInput"
                    },
                    enum: {
                        "x-decorator": "FormItem",
                        "x-component": Z
                    },
                    "x-reactions": {
                        "x-decorator": "FormItem",
                        "x-component": ee
                    },
                    "x-validator": {
                        type: "array",
                        "x-component": te
                    },
                    required: {
                        type: "boolean",
                        "x-decorator": "FormItem",
                        "x-component": "Switch"
                    }
                }
            }
        }, Gt(e, t))
    };
}, jt = function(e, t) {
    return void 0 === t && (t = yt), {
        type: "object",
        properties: de({
            "field-group": {
                type: "void",
                "x-component": "CollapseItem",
                properties: {
                    name: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "Input"
                    },
                    title: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "Input",
                        "x-reactions": {
                            fulfill: {
                                state: {
                                    hidden: '{{$form.values["x-decorator"] !== "FormItem"}}'
                                }
                            }
                        }
                    },
                    description: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": "Input.TextArea",
                        "x-reactions": {
                            fulfill: {
                                state: {
                                    hidden: '{{$form.values["x-decorator"] !== "FormItem"}}'
                                }
                            }
                        }
                    },
                    "x-display": {
                        type: "string",
                        enum: [ "visible", "hidden", "none", "" ],
                        "x-decorator": "FormItem",
                        "x-component": "Select",
                        "x-component-props": {
                            defaultValue: "visible"
                        }
                    },
                    "x-pattern": {
                        type: "string",
                        enum: [ "editable", "disabled", "readOnly", "readPretty", "" ],
                        "x-decorator": "FormItem",
                        "x-component": "Select",
                        "x-component-props": {
                            defaultValue: "editable"
                        }
                    },
                    "x-reactions": {
                        "x-decorator": "FormItem",
                        "x-component": ee
                    },
                    "x-decorator": {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-component": dt
                    }
                }
            }
        }, Gt(e, t))
    };
}, Kt = function(e, t) {
    var o, r, n, a = "ant";
    return o = {}, o[".".concat(e)] = (r = {}, r["\n            .".concat(a, "-input,\n            .").concat(a, "-input-number,\n            .").concat(a, "-input-affix-wrapper,\n            .").concat(a, "-cascader-picker,\n            .").concat(a, "-picker-input,\n            .").concat(a, "-picker,\n            .").concat(a, "-cascader-picker-label,\n            .").concat(a, "-slider,\n            .").concat(a, "-checkbox,\n            .").concat(a, "-rate,\n            .").concat(a, "-switch,\n            .").concat(a, "-radio,\n            .").concat(a, "-radio-wrapper,\n            .").concat(a, "-checkbox-group,\n            .").concat(a, "-checkbox-wrapper,\n            .").concat(a, "-radio-group,\n            .").concat(a, "-upload,\n            .").concat(a, "-transfer,\n            .").concat(a, "-select,\n            .").concat(a, "-select-selector\n            ")] = (n = {
        pointerEvents: "none"
    }, n["input"] = {
        pointerEvents: "none"
    }, n), r[".anticon svg "] = {
        pointerEvents: "none"
    }, r), o;
}, Xt = i((function(o) {
    var r = K("designable-form"), n = X({
        prefix: r,
        styleFun: Kt
    }), p = n.hashId, l = n.wrapSSR, i = t((function() {
        return a({
            designable: !0
        });
    }), []);
    return l(e.createElement(h, de({}, o, {
        style: de({}, o.style),
        className: ce(r, p),
        form: i
    }), o.children));
}));

Xt.Behavior = V({
    name: "Form",
    selector: function(e) {
        return "Form" === e.componentName;
    },
    designerProps: function(e) {
        return {
            draggable: !e.isRoot,
            cloneable: !e.isRoot,
            deletable: !e.isRoot,
            droppable: !0,
            propsSchema: {
                type: "object",
                properties: de(de({}, ut.properties), {
                    style: xt
                })
            },
            defaultProps: {
                labelCol: 6,
                wrapperCol: 12
            }
        };
    },
    designerLocales: ze
}), Xt.Resource = z({
    title: {
        "zh-CN": "表单",
        "en-US": "Form"
    },
    icon: "FormLayoutSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "object",
            "x-component": "Form"
        }
    } ]
});

var _t = y;

_t.Behavior = V({
    name: "Input",
    extends: [ "Field" ],
    selector: function(e) {
        return "Input" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(mt)
    },
    designerLocales: Se
}, {
    name: "Input.TextArea",
    extends: [ "Field" ],
    selector: function(e) {
        return "Input.TextArea" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(mt.TextArea)
    },
    designerLocales: fe
}), _t.Resource = z({
    icon: "InputSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "string",
            title: "Input",
            "x-decorator": "FormItem",
            "x-component": "Input"
        }
    } ]
}, {
    icon: "TextAreaSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "string",
            title: "TextArea",
            "x-decorator": "FormItem",
            "x-component": "Input.TextArea"
        }
    } ]
});

var Yt = b;

Yt.Behavior = V({
    name: "Select",
    extends: [ "Field" ],
    selector: function(e) {
        return "Select" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(bt)
    },
    designerLocales: ge
}), Yt.Resource = z({
    icon: "SelectSource",
    elements: [ {
        componentName: "Field",
        props: {
            title: "Select",
            "x-decorator": "FormItem",
            "x-component": "Select"
        }
    } ]
});

var qt = S;

qt.Behavior = V({
    name: "TreeSelect",
    extends: [ "Field" ],
    selector: function(e) {
        return "TreeSelect" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(Pt)
    },
    designerLocales: Fe
}), qt.Resource = z({
    icon: "TreeSelectSource",
    elements: [ {
        componentName: "Field",
        props: {
            title: "TreeSelect",
            "x-decorator": "FormItem",
            "x-component": "TreeSelect"
        }
    } ]
});

var $t = g;

$t.Behavior = V({
    name: "Cascader",
    extends: [ "Field" ],
    selector: function(e) {
        return "Cascader" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(gt)
    },
    designerLocales: Ie
}), $t.Resource = z({
    icon: "CascaderSource",
    elements: [ {
        componentName: "Field",
        props: {
            title: "Cascader",
            "x-decorator": "FormItem",
            "x-component": "Cascader"
        }
    } ]
});

var Qt = f;

Qt.Behavior = V({
    name: "Checkbox.Group",
    extends: [ "Field" ],
    selector: function(e) {
        return "Checkbox.Group" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(ft.Group)
    },
    designerLocales: Ce
}), Qt.Resource = z({
    icon: "CheckboxGroupSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "Array<string | number>",
            title: "Checkbox Group",
            "x-decorator": "FormItem",
            "x-component": "Checkbox.Group",
            enum: [ {
                label: "选项1",
                value: 1
            }, {
                label: "选项2",
                value: 2
            } ]
        }
    } ]
});

var Jt = F;

Jt.Behavior = V({
    name: "Radio.Group",
    extends: [ "Field" ],
    selector: function(e) {
        return "Radio.Group" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(Ft.Group)
    },
    designerLocales: we
}), Jt.Resource = z({
    icon: "RadioGroupSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "string | number",
            title: "Radio Group",
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            enum: [ {
                label: "选项1",
                value: 1
            }, {
                label: "选项2",
                value: 2
            } ]
        }
    } ]
});

var Zt = re;

Zt.Behavior = V({
    name: "Slider",
    extends: [ "Field" ],
    selector: function(e) {
        return "Slider" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(kt)
    },
    designerLocales: ve
}), Zt.Resource = z({
    icon: "SliderSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "number",
            title: "Slider",
            "x-decorator": "FormItem",
            "x-component": "Slider"
        }
    } ]
});

var eo = ne;

eo.Behavior = V({
    name: "Rate",
    extends: [ "Field" ],
    selector: function(e) {
        return "Rate" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(Tt)
    },
    designerLocales: Te
}), eo.Resource = z({
    icon: "RateSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "number",
            title: "Rate",
            "x-decorator": "FormItem",
            "x-component": "Rate"
        }
    } ]
});

var to = I;

to.Behavior = V({
    name: "NumberPicker",
    extends: [ "Field" ],
    selector: function(e) {
        return "NumberPicker" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(Ct)
    },
    designerLocales: Re
}), to.Resource = z({
    icon: "NumberPickerSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "number",
            title: "NumberPicker",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker"
        }
    } ]
});

var oo = w;

oo.Behavior = V({
    name: "Transfer",
    extends: [ "Field" ],
    selector: function(e) {
        return "Transfer" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(Rt)
    },
    designerLocales: Ee
}), oo.Resource = z({
    icon: "TransferSource",
    elements: [ {
        componentName: "Field",
        props: {
            title: "Transfer",
            "x-decorator": "FormItem",
            "x-component": "Transfer"
        }
    } ]
});

var ro = C;

ro.Behavior = V({
    name: "Password",
    extends: [ "Field" ],
    selector: function(e) {
        return "Password" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(vt)
    },
    designerLocales: Le
}), ro.Resource = z({
    icon: "PasswordSource",
    elements: [ {
        componentName: "Field",
        props: {
            title: "Password",
            "x-decorator": "FormItem",
            "x-component": "Password"
        }
    } ]
});

var no = v;

no.Behavior = V({
    name: "DatePicker",
    extends: [ "Field" ],
    selector: function(e) {
        return "DatePicker" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(wt)
    },
    designerLocales: ke
}, {
    name: "DatePicker.RangePicker",
    extends: [ "Field" ],
    selector: function(e) {
        return "DatePicker.RangePicker" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(wt.RangePicker)
    },
    designerLocales: Ae
}), no.Resource = z({
    icon: "DatePickerSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "string",
            title: "DatePicker",
            "x-decorator": "FormItem",
            "x-component": "DatePicker"
        }
    } ]
}, {
    icon: "DateRangePickerSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "string[]",
            title: "DateRangePicker",
            "x-decorator": "FormItem",
            "x-component": "DatePicker.RangePicker"
        }
    } ]
});

var ao = T;

ao.Behavior = V({
    name: "TimePicker",
    extends: [ "Field" ],
    selector: function(e) {
        return "TimePicker" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(Nt)
    },
    designerLocales: Ne
}, {
    name: "TimePicker.RangePicker",
    extends: [ "Field" ],
    selector: function(e) {
        return "TimePicker.RangePicker" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(Nt.RangePicker)
    },
    designerLocales: Pe
}), ao.Resource = z({
    icon: "TimePickerSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "string",
            title: "TimePicker",
            "x-decorator": "FormItem",
            "x-component": "TimePicker"
        }
    } ]
}, {
    icon: "TimeRangePickerSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "string[]",
            title: "TimeRangePicker",
            "x-decorator": "FormItem",
            "x-component": "TimePicker.RangePicker"
        }
    } ]
});

var po = k;

po.Behavior = V({
    name: "Upload",
    extends: [ "Field" ],
    selector: function(e) {
        return "Upload" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(Lt)
    },
    designerLocales: Oe
}, {
    name: "Upload.Dragger",
    extends: [ "Field" ],
    selector: function(e) {
        return "Upload.Dragger" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(Lt.Dragger)
    },
    designerLocales: De
}), po.Resource = z({
    icon: "UploadSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "Array<object>",
            title: "Upload",
            "x-decorator": "FormItem",
            "x-component": "Upload",
            "x-component-props": {
                textContent: "Upload"
            }
        }
    } ]
}, {
    icon: "UploadDraggerSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "Array<object>",
            title: "Drag Upload",
            "x-decorator": "FormItem",
            "x-component": "Upload.Dragger",
            "x-component-props": {
                textContent: "Click or drag file to this area to upload"
            }
        }
    } ]
});

var lo = oe;

lo.Behavior = V({
    name: "Switch",
    extends: [ "Field" ],
    selector: function(e) {
        return "Switch" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: Bt(Et)
    },
    designerLocales: We
}), lo.Resource = z({
    icon: "SwitchSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "boolean",
            title: "Switch",
            "x-decorator": "FormItem",
            "x-component": "Switch"
        }
    } ]
});

var io = function(e, t) {
    var o, r;
    return o = {}, o[".".concat(e)] = (r = {}, r["&:empty::before"] = {
        content: "Please Input",
        display: "block",
        opacity: .6
    }, r["&:focus"] = {
        padding: "4px"
    }, r), o;
}, co = function(t) {
    var o = "normal" !== t.mode && t.mode ? t.mode : "div", r = "dn-text", n = X({
        prefix: r,
        styleFun: io
    }), a = n.hashId, p = n.wrapSSR;
    return p(e.createElement(o, de(de({}, t), {
        className: ce(t.className, r, a),
        "data-content-editable": "x-component-props.content"
    }), t.content));
};

co.Behavior = V({
    name: "Text",
    extends: [ "Field" ],
    selector: function(e) {
        return "Text" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: jt(st)
    },
    designerLocales: Ue
}), co.Resource = z({
    icon: "TextSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "string",
            "x-component": "Text"
        }
    } ]
});

var mo = function(t) {
    return e.createElement(ae, de({}, t, {
        title: e.createElement("span", {
            "data-content-editable": "x-component-props.title"
        }, t.title)
    }), t.children);
};

mo.Behavior = V({
    name: "Card",
    extends: [ "Field" ],
    selector: function(e) {
        return "Card" === e.props["x-component"];
    },
    designerProps: {
        droppable: !0,
        propsSchema: jt(St)
    },
    designerLocales: He
}), mo.Resource = z({
    icon: "CardSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "void",
            "x-component": "Card",
            "x-component-props": {
                title: "Title"
            }
        }
    } ]
});

var so = he(A);

so.Behavior = V({
    name: "Space",
    extends: [ "Field" ],
    selector: function(e) {
        return "Space" === e.props["x-component"];
    },
    designerProps: {
        droppable: !0,
        inlineChildrenLayout: !0,
        propsSchema: jt(Dt)
    },
    designerLocales: qe
}), so.Resource = z({
    icon: "SpaceSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "void",
            "x-component": "Space"
        }
    } ]
});

var uo = xe;

uo.Behavior = V({
    name: "Object",
    extends: [ "Field" ],
    selector: function(e) {
        return "object" === e.props.type;
    },
    designerProps: {
        droppable: !0,
        propsSchema: Bt()
    },
    designerLocales: Ve
}), uo.Resource = z({
    icon: "ObjectSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "object"
        }
    } ]
});

var xo = function(t) {
    var o;
    return e.createElement(_, null, null === (o = t.actions) || void 0 === o ? void 0 : o.map((function(t, o) {
        return e.createElement(_.Action, de({}, t, {
            key: o
        }));
    })));
}, ho = function(e, t, o) {
    var r;
    if ("*" === t) return !0;
    var n = null === (r = null == e ? void 0 : e.props) || void 0 === r ? void 0 : r["x-component"];
    return "function" == typeof t ? t(n || "", e, o) : Array.isArray(t) ? t.includes(n) : n === t;
}, yo = function(e, t, o) {
    var r;
    if ("*" === t) return !0;
    var n = null === (r = null == e ? void 0 : e.props) || void 0 === r ? void 0 : r["x-component"];
    return !!n && ("function" == typeof t ? t(n || "", e, o) : Array.isArray(t) ? t.includes(n) : n.indexOf("".concat(t, ".")) > -1);
}, bo = function(e, t) {
    return 0 === (null == t ? void 0 : t.length) ? [] : 1 === (null == t ? void 0 : t.length) && ho(e, t[0]) ? [ e ] : ho(e, t[0]) ? e.children.reduce((function(e, o) {
        return e.concat(bo(o, t.slice(1)));
    }), []) : [];
}, So = function(e, t) {
    if (0 !== (null == t ? void 0 : t.length)) {
        if (1 === (null == t ? void 0 : t.length) && ho(e, t[0])) return e;
        if (ho(e, t[0])) for (var o = 0; o < e.children.length; o++) {
            var r = So(e.children[o], t.slice(1));
            if (r) return r;
        }
    }
}, go = function(e, t) {
    return !!So(e, t);
}, fo = function(e, t) {
    var o;
    return o = {}, o[e.props.nodeIdAttrName] = t, o;
}, Fo = function(e) {
    return function(t) {
        var o = t.children.find((function(t) {
            return t.props["type"] === e;
        }));
        if (o) return o;
        var r = new M({
            componentName: "Field",
            props: {
                type: e
            }
        });
        return t.prepend(r), r;
    };
}, Io = function(e, t) {
    return G((function(o) {
        return o.subscribeTo(U, (function(o) {
            var r = o.data, n = r.source, a = r.target;
            if (!Array.isArray(a) && Array.isArray(n)) return ho(a, (function(t) {
                return t === e && n.every((function(t) {
                    return !yo(t, e);
                }));
            })) && 0 === a.children.length ? (a.setChildren.apply(a, ue([], se(t(n)), !1)), 
            !1) : void 0;
        }));
    }));
}, wo = function(e) {
    return V({
        name: e,
        extends: [ "Field" ],
        selector: function(t) {
            return t.props["x-component"] === e;
        },
        designerProps: {
            droppable: !0,
            propsSchema: Bt(Ht[e])
        },
        designerLocales: rt[e]
    }, {
        name: "".concat(e, ".Addition"),
        extends: [ "Field" ],
        selector: function(t) {
            return t.props["x-component"] === "".concat(e, ".Addition");
        },
        designerProps: {
            allowDrop: function(t) {
                return t.props["x-component"] === e;
            },
            propsSchema: jt(Ht[e].Addition)
        },
        designerLocales: Ge
    }, {
        name: "".concat(e, ".Remove"),
        extends: [ "Field" ],
        selector: function(t) {
            return t.props["x-component"] === "".concat(e, ".Remove");
        },
        designerProps: {
            allowDrop: function(t) {
                return t.props["x-component"] === e;
            },
            propsSchema: jt()
        },
        designerLocales: Be
    }, {
        name: "".concat(e, ".Index"),
        extends: [ "Field" ],
        selector: function(t) {
            return t.props["x-component"] === "".concat(e, ".Index");
        },
        designerProps: {
            allowDrop: function(t) {
                return t.props["x-component"] === e;
            },
            propsSchema: jt()
        },
        designerLocales: Xe
    }, {
        name: "".concat(e, ".MoveUp"),
        extends: [ "Field" ],
        selector: function(t) {
            return t.props["x-component"] === "".concat(e, ".MoveUp");
        },
        designerProps: {
            allowDrop: function(t) {
                return t.props["x-component"] === e;
            },
            propsSchema: jt()
        },
        designerLocales: je
    }, {
        name: "".concat(e, ".MoveDown"),
        extends: [ "Field" ],
        selector: function(t) {
            return t.props["x-component"] === "".concat(e, ".MoveDown");
        },
        designerProps: {
            allowDrop: function(e) {
                return "ArrayCards" === e.props["x-component"];
            },
            propsSchema: jt()
        },
        designerLocales: Ke
    });
}, Co = function(e, t) {
    var o;
    return o = {}, o[".".concat(e)] = {
        backgroundColor: t.colorBgContainer
    }, o;
}, vo = Fo("object"), To = function(e) {
    return "ArrayCards.Remove" === e || "ArrayCards.MoveDown" === e || "ArrayCards.MoveUp" === e;
}, ko = i((function(t) {
    var r = j(), n = Y(), a = Io("ArrayCards", (function(e) {
        var t = new M({
            componentName: r.componentName,
            props: {
                type: "void",
                "x-component": "ArrayCards.Index"
            }
        }), o = new M({
            componentName: r.componentName,
            props: {
                type: "void",
                title: "Addition",
                "x-component": "ArrayCards.Addition"
            }
        }), n = new M({
            componentName: r.componentName,
            props: {
                type: "void",
                title: "Addition",
                "x-component": "ArrayCards.Remove"
            }
        }), a = new M({
            componentName: r.componentName,
            props: {
                type: "void",
                title: "Addition",
                "x-component": "ArrayCards.MoveDown"
            }
        }), p = new M({
            componentName: r.componentName,
            props: {
                type: "void",
                title: "Addition",
                "x-component": "ArrayCards.MoveUp"
            }
        }), l = new M({
            componentName: r.componentName,
            props: {
                type: "object"
            },
            children: ue(ue([ t ], se(e), !1), [ n, a, p ], !1)
        });
        return [ l, o ];
    })), p = X({
        prefix: "dn-array-cards",
        styleFun: Co
    }), l = p.hashId, i = p.wrapSSR;
    return i(e.createElement("div", de({}, n, {
        className: ce("dn-array-cards", l)
    }), function() {
        if (0 === r.children.length) return e.createElement(H, null);
        var n = bo(r, [ "ArrayCards", "ArrayCards.Addition" ]), p = bo(r, [ "ArrayCards", "*", "ArrayCards.Index" ]), l = bo(r, [ "ArrayCards", "*", To ]), i = bo(r, [ "ArrayCards", "*", function(e) {
            return -1 === e.indexOf("ArrayCards.");
        } ]);
        return e.createElement(N, {
            disabled: !0
        }, e.createElement(N.Item, {
            index: 0,
            record: null
        }, e.createElement(ae, de({}, t, {
            title: e.createElement(o, null, p.map((function(t, o) {
                return e.createElement(q, {
                    key: o,
                    node: t
                });
            })), e.createElement("span", {
                "data-content-editable": "x-component-props.title"
            }, t.title)),
            className: ce("ant-formily-array-cards-item", t.className),
            extra: e.createElement(o, null, l.map((function(t) {
                return e.createElement(q, {
                    key: t.id,
                    node: t
                });
            })), t.extra)
        }), e.createElement("div", de({}, fo(a, vo(r).id)), i.length ? i.map((function(t) {
            return e.createElement(q, {
                key: t.id,
                node: t
            });
        })) : e.createElement(H, {
            hasChildren: !1
        })))), n.map((function(t) {
            return e.createElement(q, {
                key: t.id,
                node: t
            });
        })));
    }(), e.createElement(xo, {
        actions: [ {
            title: r.getMessage("addIndex"),
            icon: "AddIndex",
            onClick: function() {
                if (!go(r, [ "ArrayCards", "*", "ArrayCards.Index" ])) {
                    var e = new M({
                        componentName: r.componentName,
                        props: {
                            type: "void",
                            "x-component": "ArrayCards.Index"
                        }
                    });
                    vo(r).append(e);
                }
            }
        }, {
            title: r.getMessage("addOperation"),
            icon: "AddOperation",
            onClick: function() {
                var e = So(r, [ "ArrayCards", "ArrayCards.Addition" ]);
                if (!e) {
                    var t = new M({
                        componentName: r.componentName,
                        props: {
                            type: "void",
                            title: "Addition",
                            "x-component": "ArrayCards.Addition"
                        }
                    });
                    vo(r).insertAfter(t);
                }
                var o = So(r, [ "ArrayCards", "*", "ArrayCards.Remove" ]), n = So(r, [ "ArrayCards", "*", "ArrayCards.MoveDown" ]), a = So(r, [ "ArrayCards", "*", "ArrayCards.MoveUp" ]);
                o || vo(r).append(new M({
                    componentName: r.componentName,
                    props: {
                        type: "void",
                        "x-component": "ArrayCards.Remove"
                    }
                })), n || vo(r).append(new M({
                    componentName: r.componentName,
                    props: {
                        type: "void",
                        "x-component": "ArrayCards.MoveDown"
                    }
                })), a || vo(r).append(new M({
                    componentName: r.componentName,
                    props: {
                        type: "void",
                        "x-component": "ArrayCards.MoveUp"
                    }
                }));
            }
        } ]
    })));
}));

N.mixin(ko), ko.Behavior = wo("ArrayCards"), ko.Resource = z({
    icon: "ArrayCardsSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "array",
            "x-decorator": "FormItem",
            "x-component": "ArrayCards",
            "x-component-props": {
                title: "Title"
            }
        }
    } ]
});

var Ao = function(e, t) {
    var o;
    return o = {}, o[".".concat(e)] = {
        backgroundColor: t.colorBgContainer
    }, o;
}, No = Fo("object"), Po = function(t) {
    var o;
    return e.createElement("th", de({}, t, {
        "data-designer-node-id": null === (o = t.className.match(/data-id\:([^\s]+)/)) || void 0 === o ? void 0 : o[1]
    }), t.children);
}, Ro = function(t) {
    var o;
    return e.createElement("td", de({}, t, {
        "data-designer-node-id": null === (o = t.className.match(/data-id\:([^\s]+)/)) || void 0 === o ? void 0 : o[1]
    }), t.children);
}, Lo = i((function(t) {
    var o = j(), r = Y(), n = "dn-array-table", a = X({
        prefix: n,
        styleFun: Ao
    }), p = a.hashId, l = a.wrapSSR;
    Io("ArrayTable", (function(e) {
        var t = new M({
            componentName: "Field",
            props: {
                type: "void",
                "x-component": "ArrayTable.Column",
                "x-component-props": {
                    title: "Title"
                }
            },
            children: [ {
                componentName: "Field",
                props: {
                    type: "void",
                    "x-component": "ArrayTable.SortHandle"
                }
            } ]
        }), o = new M({
            componentName: "Field",
            props: {
                type: "void",
                "x-component": "ArrayTable.Column",
                "x-component-props": {
                    title: "Title"
                }
            },
            children: [ {
                componentName: "Field",
                props: {
                    type: "void",
                    "x-component": "ArrayTable.Index"
                }
            } ]
        }), r = new M({
            componentName: "Field",
            props: {
                type: "void",
                "x-component": "ArrayTable.Column",
                "x-component-props": {
                    title: "Title"
                }
            },
            children: e.map((function(e) {
                return e.props.title = void 0, e;
            }))
        }), n = new M({
            componentName: "Field",
            props: {
                type: "void",
                "x-component": "ArrayTable.Column",
                "x-component-props": {
                    title: "Title"
                }
            },
            children: [ {
                componentName: "Field",
                props: {
                    type: "void",
                    "x-component": "ArrayTable.Remove"
                }
            }, {
                componentName: "Field",
                props: {
                    type: "void",
                    "x-component": "ArrayTable.MoveDown"
                }
            }, {
                componentName: "Field",
                props: {
                    type: "void",
                    "x-component": "ArrayTable.MoveUp"
                }
            } ]
        }), a = new M({
            componentName: "Field",
            props: {
                type: "object"
            },
            children: [ t, o, r, n ]
        }), p = new M({
            componentName: "Field",
            props: {
                type: "void",
                title: "Addition",
                "x-component": "ArrayTable.Addition"
            }
        });
        return [ a, p ];
    }));
    var i = bo(o, [ "ArrayTable", "*", "ArrayTable.Column" ]), c = bo(o, [ "ArrayTable", "ArrayTable.Addition" ]), d = function() {
        return o.id;
    };
    return Io("ArrayTable.Column", (function(e) {
        return e.map((function(e) {
            return e.props.title = void 0, e;
        }));
    })), l(e.createElement("div", de({}, r, {
        className: ce(n, p)
    }), 0 === o.children.length ? e.createElement(H, null) : e.createElement(N, {
        disabled: !0
    }, e.createElement(pe, de({
        size: "small",
        bordered: !0
    }, t, {
        scroll: {
            x: "100%"
        },
        className: ce("ant-formily-array-table", t.className),
        style: de({
            marginBottom: 10
        }, t.style),
        rowKey: d,
        dataSource: [ {
            id: "1"
        } ],
        pagination: !1,
        components: {
            header: {
                cell: Po
            },
            body: {
                cell: Ro
            }
        }
    }), i.map((function(t) {
        var o = t.children.map((function(t) {
            return e.createElement(q, {
                node: t,
                key: t.id
            });
        })), r = t.props["x-component-props"];
        return e.createElement(pe.Column, de({}, r, {
            title: e.createElement("div", {
                "data-content-editable": "x-component-props.title"
            }, r.title),
            dataIndex: t.id,
            className: "data-id:".concat(t.id),
            key: t.id,
            render: function(t, r, n) {
                return e.createElement(N.Item, {
                    key: n,
                    index: n,
                    record: null
                }, o.length > 0 ? o : "Droppable");
            }
        }));
    })), 0 === i.length && e.createElement(pe.Column, {
        render: function() {
            return e.createElement(H, null);
        }
    })), c.map((function(t) {
        return e.createElement(q, {
            node: t,
            key: t.id
        });
    }))), e.createElement(xo, {
        actions: [ {
            title: o.getMessage("addSortHandle"),
            icon: "AddSort",
            onClick: function() {
                if (!go(o, [ "ArrayTable", "*", "ArrayTable.Column", "ArrayTable.SortHandle" ])) {
                    var e = new M({
                        componentName: "Field",
                        props: {
                            type: "void",
                            "x-component": "ArrayTable.Column",
                            "x-component-props": {
                                title: "Title"
                            }
                        },
                        children: [ {
                            componentName: "Field",
                            props: {
                                type: "void",
                                "x-component": "ArrayTable.SortHandle"
                            }
                        } ]
                    });
                    No(o).prepend(e);
                }
            }
        }, {
            title: o.getMessage("addIndex"),
            icon: "AddIndex",
            onClick: function() {
                if (!go(o, [ "ArrayTable", "*", "ArrayTable.Column", "ArrayTable.Index" ])) {
                    var e = new M({
                        componentName: "Field",
                        props: {
                            type: "void",
                            "x-component": "ArrayTable.Column",
                            "x-component-props": {
                                title: "Title"
                            }
                        },
                        children: [ {
                            componentName: "Field",
                            props: {
                                type: "void",
                                "x-component": "ArrayTable.Index"
                            }
                        } ]
                    }), t = So(o, [ "ArrayTable", "*", "ArrayTable.Column", "ArrayTable.SortHandle" ]);
                    t ? t.parent.insertAfter(e) : No(o).prepend(e);
                }
            }
        }, {
            title: o.getMessage("addColumn"),
            icon: "AddColumn",
            onClick: function() {
                var e = So(o, [ "ArrayTable", "*", "ArrayTable.Column", function(e) {
                    return "ArrayTable.Remove" === e || "ArrayTable.MoveDown" === e || "ArrayTable.MoveUp" === e;
                } ]), t = new M({
                    componentName: "Field",
                    props: {
                        type: "void",
                        "x-component": "ArrayTable.Column",
                        "x-component-props": {
                            title: "Title"
                        }
                    }
                });
                e ? e.parent.insertBefore(t) : No(o).append(t);
            }
        }, {
            title: o.getMessage("addOperation"),
            icon: "AddOperation",
            onClick: function() {
                var e = So(o, [ "ArrayTable", "*", "ArrayTable.Column", function(e) {
                    return "ArrayTable.Remove" === e || "ArrayTable.MoveDown" === e || "ArrayTable.MoveUp" === e;
                } ]), t = So(o, [ "ArrayTable", "ArrayTable.Addition" ]);
                if (!e) {
                    var r = new M({
                        componentName: "Field",
                        props: {
                            type: "void",
                            "x-component": "ArrayTable.Column",
                            "x-component-props": {
                                title: "Title"
                            }
                        },
                        children: [ {
                            componentName: "Field",
                            props: {
                                type: "void",
                                "x-component": "ArrayTable.Remove"
                            }
                        }, {
                            componentName: "Field",
                            props: {
                                type: "void",
                                "x-component": "ArrayTable.MoveDown"
                            }
                        }, {
                            componentName: "Field",
                            props: {
                                type: "void",
                                "x-component": "ArrayTable.MoveUp"
                            }
                        } ]
                    });
                    No(o).append(r);
                }
                if (!t) {
                    var n = new M({
                        componentName: "Field",
                        props: {
                            type: "void",
                            title: "Addition",
                            "x-component": "ArrayTable.Addition"
                        }
                    });
                    No(o).insertAfter(n);
                }
            }
        } ]
    })));
}));

N.mixin(Lo), Lo.Behavior = V(wo("ArrayTable"), {
    name: "ArrayTable.Column",
    extends: [ "Field" ],
    selector: function(e) {
        return "ArrayTable.Column" === e.props["x-component"];
    },
    designerProps: {
        droppable: !0,
        allowDrop: function(e) {
            var t, o;
            return "object" === e.props["type"] && "ArrayTable" === (null === (o = null === (t = e.parent) || void 0 === t ? void 0 : t.props) || void 0 === o ? void 0 : o["x-component"]);
        },
        propsSchema: jt(zt.Column)
    },
    designerLocales: Ye
}), Lo.Resource = z({
    icon: "ArrayTableSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "array",
            "x-decorator": "FormItem",
            "x-component": "ArrayTable"
        }
    } ]
});

var Eo = function(e) {
    var t = [];
    return e.children.forEach((function(e) {
        ho(e, "FormTab.TabPane") && t.push(e);
    })), t;
}, Oo = function(e, t) {
    if (0 !== t.length) return t.some((function(t) {
        return t.id === e;
    })) ? e : t[t.length - 1].id;
}, Do = i((function(t) {
    var o = se(r(), 2), n = o[0], a = o[1], p = Y(), l = j(), i = Io("FormTab", (function(e) {
        return [ new M({
            componentName: "Field",
            props: {
                type: "void",
                "x-component": "FormTab.TabPane",
                "x-component-props": {
                    tab: "Unnamed Title"
                }
            },
            children: e
        }) ];
    })), c = Eo(l);
    return e.createElement("div", de({}, p), function() {
        var o;
        return (null === (o = l.children) || void 0 === o ? void 0 : o.length) ? e.createElement(le, de({}, t, {
            activeKey: Oo(n, c),
            onChange: function(e) {
                a(e);
            }
        }), c.map((function(t) {
            var o, r = t.props["x-component-props"] || {};
            return e.createElement(le.TabPane, de({}, r, {
                style: de({}, r.style),
                tab: e.createElement("span", {
                    "data-content-editable": "x-component-props.tab",
                    "data-content-editable-node-id": t.id
                }, r.tab),
                key: t.id
            }), e.createElement("div", (o = {}, o[i.props.nodeIdAttrName] = t.id, o.style = {
                padding: "20px 0"
            }, o), t.children.length ? e.createElement(q, {
                node: t
            }) : e.createElement(H, {
                node: t
            })));
        }))) : e.createElement(H, null);
    }(), e.createElement(xo, {
        actions: [ {
            title: l.getMessage("addTabPane"),
            icon: "AddPanel",
            onClick: function() {
                var e = new M({
                    componentName: "Field",
                    props: {
                        type: "void",
                        "x-component": "FormTab.TabPane",
                        "x-component-props": {
                            tab: "Unnamed Title"
                        }
                    }
                });
                l.append(e), a(e.id);
            }
        } ]
    }));
}));

Do.TabPane = function(t) {
    return e.createElement(o, null, t.children);
}, Do.Behavior = V({
    name: "FormTab",
    extends: [ "Field" ],
    selector: function(e) {
        return "FormTab" === e.props["x-component"];
    },
    designerProps: {
        droppable: !0,
        allowAppend: function(e, t) {
            return 0 === e.children.length || t.every((function(e) {
                return "FormTab.TabPane" === e.props["x-component"];
            }));
        },
        propsSchema: jt(Wt)
    },
    designerLocales: $e
}, {
    name: "FormTab.TabPane",
    extends: [ "Field" ],
    selector: function(e) {
        return "FormTab.TabPane" === e.props["x-component"];
    },
    designerProps: {
        droppable: !0,
        allowDrop: function(e) {
            return "FormTab" === e.props["x-component"];
        },
        propsSchema: jt(Wt.TabPane)
    },
    designerLocales: Qe
}), Do.Resource = z({
    icon: "TabSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "void",
            "x-component": "FormTab"
        }
    } ]
});

var Wo = i((function(t) {
    var o, n, a = se(r([]), 2), p = a[0], l = a[1], i = j(), c = Y(), d = Io("FormCollapse", (function(e) {
        var t = new M({
            componentName: "Field",
            props: {
                type: "void",
                "x-component": "FormCollapse.CollapsePanel",
                "x-component-props": {
                    header: "Unnamed Title"
                }
            },
            children: e
        });
        return l(O(p).concat(t.id)), [ t ];
    })), m = (o = i, n = [], o.children.forEach((function(e) {
        ho(e, "FormCollapse.CollapsePanel") && n.push(e);
    })), n);
    return e.createElement("div", de({}, c), function() {
        var o;
        return (null === (o = i.children) || void 0 === o ? void 0 : o.length) ? e.createElement(ie, de({}, t, {
            activeKey: m.map((function(e) {
                return e.id;
            }))
        }), m.map((function(t) {
            var o, r = t.props["x-component-props"] || {};
            return e.createElement(ie.Panel, de({}, r, {
                style: de({}, r.style),
                header: e.createElement("span", {
                    "data-content-editable": "x-component-props.header",
                    "data-content-editable-node-id": t.id
                }, r.header),
                key: t.id
            }), e.createElement("div", (o = {}, o[d.props.nodeIdAttrName] = t.id, o.style = {
                padding: "20px 0"
            }, o), t.children.length ? e.createElement(q, {
                node: t
            }) : e.createElement(H, null)));
        }))) : e.createElement(H, null);
    }(), e.createElement(xo, {
        actions: [ {
            title: i.getMessage("addCollapsePanel"),
            icon: "AddPanel",
            onClick: function() {
                var e = new M({
                    componentName: "Field",
                    props: {
                        type: "void",
                        "x-component": "FormCollapse.CollapsePanel",
                        "x-component-props": {
                            header: "Unnamed Title"
                        }
                    }
                });
                i.append(e);
                var t = O(p);
                l(t.concat(e.id));
            }
        } ]
    }));
}));

Wo.CollapsePanel = function(t) {
    return e.createElement(o, null, t.children);
}, Wo.Behavior = V({
    name: "FormCollapse",
    extends: [ "Field" ],
    selector: function(e) {
        return "FormCollapse" === e.props["x-component"];
    },
    designerProps: {
        droppable: !0,
        allowAppend: function(e, t) {
            return 0 === e.children.length || t.every((function(e) {
                return "FormCollapse.CollapsePanel" === e.props["x-component"];
            }));
        },
        propsSchema: jt(Vt)
    },
    designerLocales: Je
}, {
    name: "FormCollapse.CollapsePanel",
    extends: [ "Field" ],
    selector: function(e) {
        return "FormCollapse.CollapsePanel" === e.props["x-component"];
    },
    designerProps: {
        droppable: !0,
        allowDrop: function(e) {
            return "FormCollapse" === e.props["x-component"];
        },
        propsSchema: jt(Vt.CollapsePanel)
    },
    designerLocales: Ze
}), Wo.Resource = z({
    icon: "CollapseSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "void",
            "x-component": "FormCollapse"
        }
    } ]
});

var Vo = J((function(t) {
    var o = j(), r = Y();
    return 0 === o.children.length ? e.createElement(H, de({}, t)) : e.createElement("div", de({}, r, {
        className: "dn-grid"
    }), e.createElement(P, de({}, t), t.children), e.createElement(xo, {
        actions: [ {
            title: o.getMessage("addGridColumn"),
            icon: "AddColumn",
            onClick: function() {
                var e = new M({
                    componentName: "Field",
                    props: {
                        type: "void",
                        "x-component": "FormGrid.GridColumn"
                    }
                });
                o.append(e);
            }
        } ]
    }));
}));

Vo.GridColumn = J((function(t) {
    var o = t.gridSpan, r = me(t, [ "gridSpan" ]);
    return e.createElement(H, de({}, r, {
        "data-grid-span": o
    }), r.children);
})), Vo.Behavior = V({
    name: "FormGrid",
    extends: [ "Field" ],
    selector: function(e) {
        return "FormGrid" === e.props["x-component"];
    },
    designerProps: {
        droppable: !0,
        allowDrop: function(e) {
            return "FormGrid" !== e.props["x-component"];
        },
        propsSchema: Bt(Ot)
    },
    designerLocales: et
}, {
    name: "FormGrid.GridColumn",
    extends: [ "Field" ],
    selector: function(e) {
        return "FormGrid.GridColumn" === e.props["x-component"];
    },
    designerProps: {
        droppable: !0,
        resizable: {
            width: function(e) {
                var t, o, r = Number(null !== (o = null === (t = e.props["x-component-props"]) || void 0 === t ? void 0 : t.gridSpan) && void 0 !== o ? o : 1);
                return {
                    plus: function() {
                        r + 1 > 12 || (e.props["x-component-props"] = e.props["x-component-props"] || {}, 
                        e.props["x-component-props"].gridSpan = r + 1);
                    },
                    minus: function() {
                        r - 1 < 1 || (e.props["x-component-props"] = e.props["x-component-props"] || {}, 
                        e.props["x-component-props"].gridSpan = r - 1);
                    }
                };
            }
        },
        resizeXPath: "x-component-props.gridSpan",
        resizeStep: 1,
        resizeMin: 1,
        resizeMax: 12,
        allowDrop: function(e) {
            return "FormGrid" === e.props["x-component"];
        },
        propsSchema: Bt(Ot.GridColumn)
    },
    designerLocales: tt
}), Vo.Resource = z({
    icon: "GridSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "void",
            "x-component": "FormGrid"
        },
        children: [ {
            componentName: "Field",
            props: {
                type: "void",
                "x-component": "FormGrid.GridColumn"
            }
        }, {
            componentName: "Field",
            props: {
                type: "void",
                "x-component": "FormGrid.GridColumn"
            }
        }, {
            componentName: "Field",
            props: {
                type: "void",
                "x-component": "FormGrid.GridColumn"
            }
        } ]
    } ]
});

var zo = he(R);

zo.Behavior = V({
    name: "FormLayout",
    extends: [ "Field" ],
    selector: function(e) {
        return "FormLayout" === e.props["x-component"];
    },
    designerProps: {
        droppable: !0,
        propsSchema: jt(ut)
    },
    designerLocales: Me
}), zo.Resource = z({
    icon: "FormLayoutSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "void",
            "x-component": "FormLayout"
        }
    } ]
});

var Mo = function(e, t) {
    var o;
    return o = {}, o[".".concat(e)] = {}, o;
}, Uo = function(t) {
    var o, r, n, a, p = t.slotName, l = t.className, i = u(), c = "dn-slot", d = X({
        prefix: c,
        styleFun: Mo
    }), m = d.hashId, s = d.wrapSSR;
    return s(e.createElement("div", {
        className: ce(c, l, m)
    }, (null === (r = null === (o = i.extConfig) || void 0 === o ? void 0 : o.slots) || void 0 === r ? void 0 : r[p]) ? null === (a = null === (n = i.extConfig) || void 0 === n ? void 0 : n.slots) || void 0 === a ? void 0 : a[p](i) : e.createElement("div", {
        style: {
            backgroundColor: "#eee",
            padding: "4px"
        }
    }, "插槽占位 ", p)));
};

Uo.Behavior = V({
    name: "Slot",
    extends: [ "Field" ],
    selector: function(e) {
        return "Slot" === e.props["x-component"];
    },
    designerProps: {
        propsSchema: jt(Ut)
    },
    designerLocales: ot
}), Uo.Resource = z({
    icon: "SlotSource",
    elements: [ {
        componentName: "Field",
        props: {
            type: "string",
            "x-component": "Slot"
        }
    } ]
});

export { rt as AllLocales, Ht as AllSchemas, ko as ArrayCards, Lo as ArrayTable, mo as Card, $t as Cascader, Qt as Checkbox, no as DatePicker, ct as Field, Xt as Form, Wo as FormCollapse, Vo as FormGrid, zo as FormLayout, Do as FormTab, _t as Input, to as NumberPicker, uo as ObjectContainer, ro as Password, Jt as Radio, eo as Rate, Yt as Select, Zt as Slider, Uo as Slot, so as Space, lo as Switch, co as Text, ao as TimePicker, oo as Transfer, qt as TreeSelect, po as Upload, Gt as createComponentSchema, Bt as createFieldSchema, jt as createVoidFieldSchema };
