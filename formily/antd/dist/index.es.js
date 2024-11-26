import React, { useMemo, Fragment, useState } from 'react';
import { FormPath, createForm } from '@formily/core';
import { toJS } from '@formily/reactive';
import { Schema, observer as observer$1, ObjectField, ArrayField, VoidField, Field as Field$2, useForm } from '@formily/react';
import { FormItem as FormItem$1, Form as Form$3, Input as Input$3, Select as Select$3, TreeSelect as TreeSelect$3, Cascader as Cascader$3, Checkbox as Checkbox$2, Radio as Radio$2, NumberPicker as NumberPicker$3, Transfer as Transfer$3, Password as Password$3, DatePicker as DatePicker$3, TimePicker as TimePicker$3, Upload as Upload$3, Space as Space$3, ArrayBase, FormGrid as FormGrid$3, FormLayout as FormLayout$3 } from '@formily/antd-v5';
import { each, reduce, toArr } from '@formily/shared';
import { createLocales, GlobalRegistry, createBehavior, createResource, TreeNode, AppendNodeEvent } from '@form-created/core';
import { DroppableWidget, useDesigner, useComponents, useTreeNode, usePrefix, useCssInJs, NodeActionsWidget, useNodeIdProps, TreeNodeWidget } from '@form-created/react';
import { isStr, isArr } from '@form-created/shared';
import { observer } from '@formily/reactive-react';
import { DataSourceSetter, ReactionsSetter, ValidatorSetter } from '@form-created/formily-setters';
import { Switch as Switch$3, Slider as Slider$3, Rate as Rate$3, Card as Card$3, Table, Tabs, Collapse } from 'antd';
import cls from 'classnames';
import { Switch as Switch$4 } from '@fdesign/component';

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

var Container = observer(function (props) {
    return React.createElement(DroppableWidget, null, props.children);
});
var withContainer = function (Target) {
    return function (props) {
        return (React.createElement(DroppableWidget, null,
            React.createElement(Target, __assign({}, props))));
    };
};

var Component = {
    'zh-CN': {
        settings: {
            style: {
                width: '宽度',
                height: '高度',
                display: '展示',
                background: '背景',
                boxShadow: '阴影',
                font: '字体',
                margin: '外边距',
                padding: '内边距',
                borderRadius: '圆角',
                border: '边框',
                opacity: '透明度',
            },
        },
    },
    'en-US': {
        settings: {
            style: {
                width: 'Width',
                height: 'Height',
                display: 'Display',
                background: 'Background',
                boxShadow: 'Box Shadow',
                font: 'Font',
                margin: 'Margin',
                padding: 'Padding',
                borderRadius: 'Radius',
                border: 'Border',
                opacity: 'Opacity',
            },
        },
    },
    'ko-KR': {
        settings: {
            style: {
                width: '너비',
                height: '높이',
                display: '디스플레이',
                background: '배경',
                boxShadow: '쉐도우 박스',
                font: '폰트',
                margin: '마진',
                padding: '패딩',
                borderRadius: '테두리 굴곡',
                border: '테두리',
                opacity: '투명도',
            },
        },
    },
};

var Field$1 = {
    'zh-CN': {
        settings: {
            name: '字段标识',
            title: '标题',
            required: '必填',
            description: '描述',
            default: '默认值',
            enum: '可选项',
            'x-display': {
                title: '展示状态',
                tooltip: '半隐藏只会隐藏UI，全隐藏会删除数据',
                dataSource: ['显示', '半隐藏', '全隐藏', '继承'],
            },
            'x-pattern': {
                title: 'UI形态',
                dataSource: ['可编辑', '禁用', '只读', '阅读', '继承'],
            },
            'x-validator': '校验规则',
            'x-decorator': '容器组件',
            'x-reactions': '响应器规则',
            'field-group': '字段属性',
            'component-group': '组件属性',
            'decorator-group': '容器属性',
            'component-style-group': '组件样式',
            'decorator-style-group': '容器样式',
            'x-component-props': {
                size: { title: '尺寸', dataSource: ['大', '小', '默认', '继承'] },
                allowClear: '允许清除内容',
                autoFocus: '自动获取焦点',
                showSearch: '支持搜索',
                notFoundContent: '空状态内容',
                bordered: '是否有边框',
                placeholder: '占位提示',
                style: {
                    width: '宽度',
                    height: '高度',
                    display: '展示',
                    background: '背景',
                    boxShadow: '阴影',
                    font: '字体',
                    margin: '外边距',
                    padding: '内边距',
                    borderRadius: '圆角',
                    border: '边框',
                    opacity: '透明度',
                },
            },
            'x-decorator-props': {
                addonAfter: '后缀标签',
                addonBefore: '前缀标签',
                tooltip: '提示',
                asterisk: '星号',
                gridSpan: '网格跨列',
                labelCol: '标签网格宽度',
                wrapperCol: '组件网格宽度',
                colon: '是否有冒号',
                labelAlign: {
                    title: '标签对齐',
                    dataSource: ['左对齐', '右对齐', '继承'],
                },
                wrapperAlign: {
                    title: '组件对齐',
                    dataSource: ['左对齐', '右对齐', '继承'],
                },
                labelWrap: '标签换行',
                wrapperWrap: '组件换行',
                labelWidth: '标签宽度',
                wrapperWidth: '组件宽度',
                fullness: '组件占满',
                inset: '内联布局',
                shallow: '是否浅传递',
                bordered: '是否有边框',
                size: { title: '尺寸', dataSource: ['大', '小', '默认', '继承'] },
                layout: { title: '布局', dataSource: ['垂直', '水平', '内联', '继承'] },
                feedbackLayout: {
                    title: '反馈布局',
                    dataSource: ['宽松', '紧凑', '弹层', '无', '继承'],
                },
                tooltipLayout: {
                    title: '提示布局',
                    dataSource: ['图标', '文本', '继承'],
                },
                style: {
                    width: '宽度',
                    height: '高度',
                    display: '展示',
                    background: '背景',
                    boxShadow: '阴影',
                    font: '字体',
                    margin: '外边距',
                    padding: '内边距',
                    borderRadius: '圆角',
                    border: '边框',
                    opacity: '透明度',
                },
            },
        },
    },
    'en-US': {
        settings: {
            name: 'Name',
            title: 'Title',
            required: 'Required',
            description: 'Description',
            default: 'Default',
            enum: 'Options',
            'x-display': {
                title: 'Display State',
                tooltip: 'When the display value is "None", the data will be "Hidden" and deleted. When the display value is hidden, only the UI will be hidden',
                dataSource: ['Visible', 'Hidden', 'None', 'Inherit'],
            },
            'x-pattern': {
                title: 'UI Pattern',
                dataSource: [
                    'Editable',
                    'Disabled',
                    'ReadOnly',
                    'ReadPretty',
                    'Inherit',
                ],
            },
            'x-validator': 'Validator',
            'x-decorator': 'Decorator',
            'x-reactions': 'Reactions',
            'field-group': 'Field Properties',
            'component-group': 'Component Properties',
            'decorator-group': 'Decorator Properties',
            'component-style-group': 'Component Style',
            'decorator-style-group': 'Decorator Style',
            'x-component-props': {
                size: {
                    title: 'Size',
                    dataSource: ['Large', 'Small', 'Default', 'Inherit'],
                },
                allowClear: 'Allow Clear',
                autoFocus: 'Auto Focus',
                showSearch: 'Show Search',
                notFoundContent: 'Not Found Content',
                bordered: 'Bordered',
                placeholder: 'Placeholder',
                style: {
                    width: 'Width',
                    height: 'Height',
                    display: 'Display',
                    background: 'Background',
                    boxShadow: 'Box Shadow',
                    font: 'Font',
                    margin: 'Margin',
                    padding: 'Padding',
                    borderRadius: 'Radius',
                    border: 'Border',
                    opacity: 'Opacity',
                },
            },
            'x-decorator-props': {
                addonAfter: 'Addon After',
                addonBefore: 'Addon Before',
                tooltip: 'Tooltip',
                asterisk: 'Asterisk',
                gridSpan: 'Grid Span',
                labelCol: 'Label Col',
                wrapperCol: 'Wrapper Col',
                colon: 'Colon',
                labelAlign: {
                    title: 'Label Align',
                    dataSource: ['Left', 'Right', 'Inherit'],
                },
                wrapperAlign: {
                    title: 'Wrapper Align',
                    dataSource: ['Left', 'Right', 'Inherit'],
                },
                labelWrap: 'Label Wrap',
                wrapperWrap: 'Wrapper Wrap',
                labelWidth: 'Label Width',
                wrapperWidth: 'Wrapper Width',
                fullness: 'Fullness',
                inset: 'Inset',
                shallow: 'Shallow',
                bordered: 'Bordered',
                size: {
                    title: 'Size',
                    dataSource: ['Large', 'Small', 'Default', 'Inherit'],
                },
                layout: {
                    title: 'Layout',
                    dataSource: ['Vertical', 'Horizontal', 'Inline', 'Inherit'],
                },
                feedbackLayout: {
                    title: 'Feedback Layout',
                    dataSource: ['Loose', 'Terse', 'Popup', 'None', 'Inherit'],
                },
                tooltipLayout: {
                    title: 'Tooltip Layout',
                    dataSource: ['Icon', 'Text', 'Inherit'],
                },
                style: {
                    width: 'Width',
                    height: 'Height',
                    display: 'Display',
                    background: 'Background',
                    boxShadow: 'Box Shadow',
                    font: 'Font',
                    margin: 'Margin',
                    padding: 'Padding',
                    borderRadius: 'Radius',
                    border: 'Border',
                    opacity: 'Opacity',
                },
            },
        },
    },
    'ko-KR': {
        settings: {
            name: '이름',
            title: '제목',
            required: '필수항목',
            description: '설명',
            default: '기본 값',
            enum: 'Options',
            'x-display': {
                title: '디스플레이 상태',
                tooltip: '디스플레이 값이 "없음"이면 데이터가 "숨김"상태가 되고 삭제됩니다. 디스플레이 값이 숨김이면 UI만 숨겨집니다.',
                dataSource: ['보임', '숨김', '없음', '상속'],
            },
            'x-pattern': {
                title: 'UI 패턴',
                dataSource: ['수정 가능', '비활성화', 'ReadOnly', 'ReadPretty', '상속'],
            },
            'x-validator': '유효성 검사 도구',
            'x-decorator': '데코레이터',
            'x-reactions': 'Reactions',
            'field-group': '필드 속성',
            'component-group': '컴포넌트 속성',
            'decorator-group': '데코레이터 속성',
            'component-style-group': '컴포넌트 스타일',
            'decorator-style-group': '데코레이터 스타일',
            'x-component-props': {
                size: {
                    title: '크기',
                    dataSource: ['크게', '작게', '보통', '상속'],
                },
                allowClear: '삭제 허용',
                autoFocus: '오토 포커스',
                showSearch: '검색 보기',
                notFoundContent: '값을 찾을 수 없음',
                bordered: 'Bordered',
                placeholder: 'Placeholder',
                style: {
                    width: '너비',
                    height: '높이',
                    display: '디스플레이',
                    background: '배경',
                    boxShadow: '그림자 박스',
                    font: '폰트',
                    margin: '마진',
                    padding: '패딩',
                    borderRadius: '테두리 굴곡',
                    border: '테두리',
                    opacity: '투명도',
                },
            },
            'x-decorator-props': {
                addonAfter: '에드온 뒤',
                addonBefore: '에드온 전',
                tooltip: '툴팁',
                asterisk: '별표시',
                gridSpan: 'Grid Span',
                labelCol: 'Label Col',
                wrapperCol: 'Wrapper Col',
                colon: 'Colon',
                labelAlign: {
                    title: 'Label 정렬',
                    dataSource: ['왼쪽', '오른쪽', '상속'],
                },
                wrapperAlign: {
                    title: 'Wrapper 정렬',
                    dataSource: ['왼쪽', '오른쪽', '상속'],
                },
                labelWrap: 'Label Wrap',
                wrapperWrap: 'Wrapper Wrap',
                labelWidth: 'Label Width',
                wrapperWidth: 'Wrapper Width',
                fullness: 'Fullness',
                inset: 'Inset',
                shallow: '얇게',
                bordered: 'Bordered',
                size: {
                    title: '크기',
                    dataSource: ['크게', '작게', '보통', '상속'],
                },
                layout: {
                    title: '레이아웃',
                    dataSource: ['수직', '수평', '인라인', '상속'],
                },
                feedbackLayout: {
                    title: '피드백 레이아웃',
                    dataSource: ['느슨하게', 'Terse', '팝업', '없음', '상속'],
                },
                tooltipLayout: {
                    title: '툴팁 레이아웃',
                    dataSource: ['아이콘', '텍스트', '상속'],
                },
                style: {
                    width: '너비',
                    height: '높이',
                    display: '디스플레이',
                    background: '배경',
                    boxShadow: '그림자 박수',
                    font: '폰트',
                    margin: '마진',
                    padding: '패딩',
                    borderRadius: '테두리 굴곡',
                    border: '테두리',
                    opacity: '투명도',
                },
            },
        },
    },
};

var Input$2 = {
    'zh-CN': {
        title: '输入框',
        settings: {
            'x-component-props': {
                addonAfter: '后缀标签',
                addonBefore: '前缀标签',
                maxLength: '最大长度',
                prefix: '前缀',
                suffix: '后缀',
                autoSize: {
                    title: '自适应高度',
                    tooltip: '可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }',
                },
                showCount: '是否展示字数',
                checkStrength: '检测强度',
            },
        },
    },
    'en-US': {
        title: 'Input',
        settings: {
            'x-component-props': {
                addonAfter: 'Addon After',
                addonBefore: 'Addon Before',
                maxLength: 'Max Length',
                prefix: 'Prefix',
                suffix: 'Suffix',
                autoSize: 'Auto Size',
                showCount: 'Show Count',
                checkStrength: 'Check Strength',
            },
        },
    },
    'ko-KR': {
        title: '입력',
        settings: {
            'x-component-props': {
                addonAfter: '애드온 후',
                addonBefore: '애드온 전',
                maxLength: '최대 길이',
                prefix: '접두사',
                suffix: '접미사',
                autoSize: '자동 크기 맞춤',
                showCount: '개수 보여주기',
                checkStrength: '강도 체크',
            },
        },
    },
};

var Select$2 = {
    'zh-CN': {
        title: '选择框',
        settings: {
            'x-component-props': {
                mode: {
                    title: '模式',
                    dataSource: ['多选', '标签', '单选'],
                },
                autoClearSearchValue: {
                    title: '选中自动清除',
                    tooltip: '仅在多选或者标签模式下支持',
                },
                defaultActiveFirstOption: '默认高亮第一个选项',
                dropdownMatchSelectWidth: {
                    title: '下拉菜单和选择器同宽',
                    tooltip: '默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动',
                },
                defaultOpen: '默认展开',
                filterOption: '选项筛选器',
                filterSort: '选项排序器',
                labelInValue: {
                    title: '标签值',
                    tooltip: '是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式',
                },
                listHeight: '弹窗滚动高度',
                maxTagCount: {
                    title: '最多标签数量',
                    tooltip: '最多显示多少个 tag，响应式模式会对性能产生损耗',
                },
                maxTagPlaceholder: {
                    title: '最多标签占位',
                    tooltip: '隐藏 tag 时显示的内容',
                },
                maxTagTextLength: '最多标签文本长度',
                showArrow: '显示箭头',
                virtual: '开启虚拟滚动',
            },
        },
    },
    'en-US': {
        title: 'Select',
        settings: {
            'x-component-props': {
                mode: {
                    title: 'Mode',
                    dataSource: ['Multiple', 'Tags', 'Single'],
                },
                autoClearSearchValue: {
                    title: 'Auto Clear Search Value',
                    tooltip: 'Only used to multiple and tags mode',
                },
                defaultActiveFirstOption: 'Default Active First Option',
                dropdownMatchSelectWidth: 'Dropdown Match Select Width',
                defaultOpen: 'Default Open',
                filterOption: 'Filter Option',
                filterSort: 'Filter Sort',
                labelInValue: 'label InValue',
                listHeight: 'List Height',
                maxTagCount: 'Max Tag Count',
                maxTagPlaceholder: {
                    title: 'Max Tag Placeholder',
                    tooltip: 'Content displayed when tag is hidden',
                },
                maxTagTextLength: 'Max Tag Text Length',
                showArrow: 'Show Arrow',
                virtual: 'Use Virtual Scroll',
            },
        },
    },
    'ko-KR': {
        title: '선택',
        settings: {
            'x-component-props': {
                mode: {
                    title: '모드',
                    dataSource: ['다중', '태그', '단일'],
                },
                autoClearSearchValue: {
                    title: '자동 검색 값 삭제',
                    tooltip: '다중 모드와 태그 모드만 사용할 수 있습니다.',
                },
                defaultActiveFirstOption: '기본으로 첫번째 옵션을 선택함',
                dropdownMatchSelectWidth: '드롭다운 너비와 일치시킴',
                defaultOpen: '기본 오픈',
                filterOption: '옵션 필터',
                filterSort: '정렬 필터',
                labelInValue: '레이블 InValue',
                listHeight: '리스트 높이',
                maxTagCount: '최대 태그 개수',
                maxTagPlaceholder: {
                    title: '최대 태그 Placeholder',
                    tooltip: '태그가 숨겨질때 보입니다.',
                },
                maxTagTextLength: '최대 태그 텍스트 길이',
                showArrow: '화살표 보기',
                virtual: '수직 스크롤 사용',
            },
        },
    },
};

var TextArea = {
    'zh-CN': {
        title: '多行输入',
        settings: {
            'x-component-props': {
                maxLength: '最大长度',
                autoSize: {
                    title: '自适应高度',
                    tooltip: '可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }',
                },
                showCount: '是否展示字数',
            },
        },
    },
    'en-US': {
        title: 'TextArea',
        settings: {
            'x-component-props': {
                maxLength: 'Max Length',
                autoSize: 'Auto Size',
                showCount: 'Show Count',
            },
        },
    },
    'ko-KR': {
        title: '텍스트 상자',
        settings: {
            'x-component-props': {
                maxLength: '최대 길이',
                autoSize: '자동 길이 변환',
                showCount: '개수 보기',
            },
        },
    },
};

var TreeSelect$2 = {
    'zh-CN': {
        title: '树选择',
        settings: {
            'x-component-props': {
                mode: {
                    title: '模式',
                    dataSource: ['多选', '标签', '单选'],
                },
                autoClearSearchValue: {
                    title: '选中自动清除',
                    tooltip: '仅在多选或者标签模式下支持',
                },
                defaultActiveFirstOption: '默认高亮第一个选项',
                defaultOpen: '默认展开',
                filterOption: '选项筛选器',
                filterSort: '选项排序器',
                labelInValue: {
                    title: '标签值',
                    tooltip: '是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式',
                },
                listHeight: '弹窗滚动高度',
                maxTagCount: {
                    title: '最多标签数量',
                    tooltip: '最多显示多少个 tag，响应式模式会对性能产生损耗',
                },
                maxTagPlaceholder: {
                    title: '最多标签占位',
                    tooltip: '隐藏 tag 时显示的内容',
                },
                maxTagTextLength: '最多标签文本长度',
                showArrow: '显示箭头',
                virtual: '开启虚拟滚动',
                dropdownMatchSelectWidth: {
                    title: '下拉选择器同宽',
                    tooltip: '默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动',
                },
                showCheckedStrategy: {
                    title: '复选回显策略',
                    tooltip: '配置 treeCheckable 时，定义选中项回填的方式。TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点)。TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点',
                    dataSource: ['显示所有', '显示父节点', '显示子节点'],
                },
                treeCheckable: '开启复选',
                treeDefaultExpandAll: '默认展开所有',
                treeDefaultExpandedKeys: {
                    title: '默认展开选项',
                    tooltip: '格式：Array<string | number>',
                },
                treeNodeFilterProp: {
                    title: '节点过滤属性',
                    tooltip: '输入项过滤对应的 treeNode 属性',
                },
                treeDataSimpleMode: {
                    title: '使用简单数据结构',
                    tooltip: "\u4F7F\u7528\u7B80\u5355\u683C\u5F0F\u7684 treeData\uFF0C\u5177\u4F53\u8BBE\u7F6E\u53C2\u8003\u53EF\u8BBE\u7F6E\u7684\u7C7B\u578B (\u6B64\u65F6 treeData \u5E94\u53D8\u4E3A\u8FD9\u6837\u7684\u6570\u636E\u7ED3\u6784: [{id:1, pId:0, value:'1', title:\"test1\",...},...]\uFF0C pId \u662F\u7236\u8282\u70B9\u7684 id)",
                },
                treeNodeLabelProp: { title: '标签显示名称', tooltip: '默认为title' },
                filterTreeNode: '节点过滤器',
            },
        },
    },
    'en-US': {
        title: 'TreeSelect',
        settings: {
            'x-component-props': {
                mode: {
                    title: 'Mode',
                    dataSource: ['Multiple', 'Tags', 'Single'],
                },
                autoClearSearchValue: {
                    title: 'Auto Clear Search Value',
                    tooltip: 'Only used to multiple and tags mode',
                },
                defaultActiveFirstOption: 'Default Active First Option',
                defaultOpen: 'Default Open',
                filterOption: 'Filter Option',
                filterSort: 'Filter Sort',
                labelInValue: 'Label In Value',
                listHeight: 'List Height',
                maxTagCount: 'Max Tag Count',
                maxTagPlaceholder: {
                    title: 'Max Tag Placeholder',
                    tooltip: 'Content displayed when tag is hidden',
                },
                maxTagTextLength: 'Max Tag Text Length',
                notFoundContent: 'Not Found Content',
                showArrow: 'Show Arrow',
                virtual: 'Use Virtual Scroll',
                dropdownMatchSelectWidth: {
                    title: 'Dropdown Match Select Width',
                    tooltip: 'By default, min-width will be set, and it will be ignored when the value is less than the width of the selection box. false will turn off virtual scrolling',
                },
                showCheckedStrategy: {
                    title: 'Show Checked Strategy',
                    tooltip: 'When configuring treeCheckable, define how to backfill the selected item. TreeSelect.SHOW_ALL: Show all selected nodes (including parent nodes). TreeSelect.SHOW_PARENT: Only display the parent node (when all child nodes under the parent node are selected). Only show child nodes by default',
                    dataSource: ['Show All', 'Show Parent Node', 'Show Child Nodes'],
                },
                treeCheckable: 'Tree Checkable',
                treeDefaultExpandAll: 'Tree Default Expand All',
                treeDefaultExpandedKeys: {
                    title: 'Tree Default Expanded Keys',
                    tooltip: 'Format：Array<string | number>',
                },
                treeNodeFilterProp: {
                    title: 'Tree Node Filter Properties',
                    tooltip: 'The treeNode attribute corresponding to the input item filter',
                },
                treeDataSimpleMode: {
                    title: 'Tree Data Simple Mode',
                    tooltip: "Use treeData in a simple format. For specific settings, refer to the settable type (the treeData should be a data structure like this: [{id:1, pId:0, value:'1', title:\"test1\",...} ,...], pId is the id of the parent node)",
                },
                treeNodeLabelProp: {
                    title: 'Tree Node Label Properties',
                    tooltip: 'The default is title',
                },
                filterTreeNode: 'Filter Tree Node',
            },
        },
    },
    'ko-KR': {
        title: '트리 셀렉터',
        settings: {
            'x-component-props': {
                mode: {
                    title: '모드',
                    dataSource: ['다중', '태그', '단일'],
                },
                autoClearSearchValue: {
                    title: '검색값 자동 삭제',
                    tooltip: '다중 모드와 태그 모드에서만 사용 가능',
                },
                defaultActiveFirstOption: '기본 활성값으로 첫번째 옵션 사용',
                defaultOpen: '기본 오픈',
                filterOption: '옵션 필터',
                filterSort: '정렬 필터',
                labelInValue: '레이블 입력 값',
                listHeight: '리스트 높이',
                maxTagCount: '최대 태그 개수',
                maxTagPlaceholder: {
                    title: '최대 태그 Placeholder',
                    tooltip: '태그가 숨김일때 보여줍니다.',
                },
                maxTagTextLength: '최대 태그 문자 길이',
                notFoundContent: '내용 없음',
                showArrow: '화살표 보기',
                virtual: '수직 스크롤 사용',
                dropdownMatchSelectWidth: {
                    title: '드롭다운 너비 맞추기',
                    tooltip: '기본적으로 최소 너비가 설정되며 값이 선택 상자의 너비보다 작으면 무시됩니다.',
                },
                showCheckedStrategy: {
                    title: '선택한 전략 표시',
                    tooltip: 'treeCheckable을 구성할 때 선택한 항목을 다시 채우는 방법을 정의합니다. TreeSelect.SHOW_ALL: 선택한 모든 노드(상위 노드 포함)를 표시합니다. TreeSelect.SHOW_PARTE: 상위 노드 아래의 모든 하위 노드를 선택한 경우에만 상위 노드를 표시합니다. 기본적으로 하위 노드만 표시합니다',
                    dataSource: ['모두 보기', '부모 노드만 보기', '자식 노드만 보기'],
                },
                treeCheckable: '트리 체크 가능 여부',
                treeDefaultExpandAll: '트리 기본 모두 확장',
                treeDefaultExpandedKeys: {
                    title: '트리 기본 확장 키',
                    tooltip: '형식：Array<string | number>',
                },
                treeNodeFilterProp: {
                    title: '트리 노드 필터 속성',
                    tooltip: '입력 항목 필터에 해당하는 treeNode 속성',
                },
                treeDataSimpleMode: {
                    title: '트리 데이터 심플 모드',
                    tooltip: "treeData\uB97C \uAC04\uB2E8\uD55C \uD615\uC2DD\uC73C\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uD2B9\uC815 \uC124\uC815\uC740 \uC124\uC815\uAC00\uB2A5\uD55C \uC720\uD615\uC744 \uCC38\uC870\uD558\uC138\uC694 (\uD2B8\uB9AC\uB370\uC774\uD130\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB370\uC774\uD130 \uAD6C\uC870\uC5EC\uC57C \uD569\uB2C8\uB2E4: [{id:1, pId:0, value:'1', title:\"test1\",...} ,...], pId\uB294 id\uC758 \uC0C1\uC704 \uB178\uB4DC\uC785\uB2C8\uB2E4).",
                },
                treeNodeLabelProp: {
                    title: '트리 노드 레이블 속성',
                    tooltip: '기본 값은 제목',
                },
                filterTreeNode: '트리 노드 필터',
            },
        },
    },
};

var Cascader$2 = {
    'zh-CN': {
        title: '联级选择',
        settings: {
            'x-component-props': {
                changeOnSelect: {
                    title: '选择时触发',
                    tooltip: '点选每级菜单选项值都会发生变化',
                },
                displayRender: {
                    title: '渲染函数',
                    tooltip: '选择后展示的渲染函数，默认为label => label.join("/")	',
                },
                fieldNames: {
                    title: '自定义字段名',
                    tooltip: '默认值：{ label: "label", value: "value", children: "children" }',
                },
            },
        },
    },
    'en-US': {
        title: 'Cascader',
        settings: {
            'x-component-props': {
                changeOnSelect: {
                    title: 'Change On Select',
                    tooltip: 'Click on each level of menu option value will change',
                },
                displayRender: {
                    title: 'Display Render',
                    tooltip: 'The rendering function displayed after selection, the default is label => label.join("/")	',
                },
                fieldNames: {
                    title: 'Field Names',
                    tooltip: 'Defaults：{ label: "label", value: "value", children: "children" }',
                },
            },
        },
    },
    'ko-KR': {
        title: 'Cascader',
        settings: {
            'x-component-props': {
                changeOnSelect: {
                    title: '선택 시 변경',
                    tooltip: '메뉴 옵션 값의 레벨을 클릭하면 변경됩니다.',
                },
                displayRender: {
                    title: '디스플레이 렌더링',
                    tooltip: '선택 후 실행되는 렌더링 함수로 기본 값은 label => label.join("/")	',
                },
                fieldNames: {
                    title: '필드 이름',
                    tooltip: '기본 값：{ label: "label", value: "value", children: "children" }',
                },
            },
        },
    },
};

var RadioGroup = {
    'zh-CN': {
        title: '单选框组',
        settings: {
            'x-component-props': {
                buttonStyle: { title: '按钮风格', dataSource: ['空心', '实心'] },
                optionType: { title: '选项类型', dataSource: ['默认', '按钮'] },
            },
        },
    },
    'en-US': {
        title: 'Radio',
        settings: {
            'x-component-props': {
                buttonStyle: { title: 'Button style', dataSource: ['Hollow', 'Solid'] },
                optionType: { title: 'Option type', dataSource: ['Default', 'Button'] },
            },
        },
    },
    'ko-KR': {
        title: '라디오',
        settings: {
            'x-component-props': {
                buttonStyle: { title: '버튼 스타일', dataSource: ['Hollow', 'Solid'] },
                optionType: { title: '옵션 타입', dataSource: ['기본', '버튼'] },
            },
        },
    },
};

var CheckboxGroup = {
    'zh-CN': {
        title: '复选框组',
    },
    'en-US': {
        title: 'Checkbox',
    },
    'ko-KR': {
        title: '체크박스',
    },
};

var Slider$2 = {
    'zh-CN': {
        title: '滑动条',
        settings: {
            'x-component-props': {
                dots: '刻度固定',
                range: '双滑块',
                reverse: '反向坐标系',
                vertical: '垂直布局',
                tooltipPlacement: {
                    title: '提示位置',
                    tooltip: '设置 提示 展示位置。参考 Tooltip',
                },
                tooltipVisible: {
                    title: '提示显示',
                    tooltip: '开启时，提示 将会始终显示；否则始终不显示，哪怕在拖拽及移入时',
                },
                max: '最大值',
                min: '最小值',
                step: '步长',
                marks: '刻度标签',
            },
        },
    },
    'en-US': {
        title: 'Slider',
        settings: {
            'x-component-props': {
                dots: 'Fixed Scale',
                range: 'Double Slider',
                reverse: 'Reverse Coordinate System',
                vertical: 'Vertical',
                tooltipPlacement: {
                    title: 'Tooltip Placement',
                    tooltip: 'Set up prompt placement. Reference Tooltip',
                },
                tooltipVisible: {
                    title: 'Tooltip Visible',
                    tooltip: 'When turned on, the prompt will always be displayed; otherwise, it will always not be displayed, even when dragging and moving in',
                },
                max: 'Max',
                min: 'Min',
                step: 'Step',
                marks: 'Marks',
            },
        },
    },
    'ko-KR': {
        title: '슬라이더',
        settings: {
            'x-component-props': {
                dots: '고정된 크기',
                range: '더블 슬라이더',
                reverse: '뒤집어진 좌표 시스템',
                vertical: '수직',
                tooltipPlacement: {
                    title: '툴팁 배치',
                    tooltip: '툴팁이 나오는 위치를 설정',
                },
                tooltipVisible: {
                    title: '툴팁 보기',
                    tooltip: '이 옵션을 켜면 툴팁이 항상 표시됩니다. 그렇지 않으면 끌어서 이동할 때도 툴팁이 항상 표시되지 않습니다',
                },
                max: '최댓값',
                min: '최솟값',
                step: '스탭',
                marks: '마크',
            },
        },
    },
};

var Rate$2 = {
    'zh-CN': {
        title: '评分器',
        settings: {
            'x-component-props': {
                allowHalf: '允许半选',
                tooltips: { title: '提示信息', tooltip: '格式：string[]' },
                count: '总数',
            },
        },
    },
    'en-US': {
        title: 'Rate',
        settings: {
            'x-component-props': {
                allowHalf: 'Allow Half',
                tooltips: { title: 'Tooltips', tooltip: 'Format：string[]' },
                count: 'Count',
            },
        },
    },
    'ko-KR': {
        title: '비율',
        settings: {
            'x-component-props': {
                allowHalf: '절반 허용',
                tooltips: { title: '툴팁', tooltip: '형식：string[]' },
                count: '개수',
            },
        },
    },
};

var DatePicker$2 = {
    'zh-CN': {
        title: '日期选择',
        settings: {
            'x-component-props': {
                disabledDate: {
                    title: '不可选日期',
                    tooltip: '格式 (currentDate: moment) => boolean',
                },
                disabledTime: {
                    title: '不可选时间',
                    tooltip: '格式 (currentDate: moment) => boolean',
                },
                inputReadOnly: '输入框只读',
                format: '格式',
                picker: {
                    title: '选择器类型',
                    dataSource: ['时间', '日期', '月份', '年', '季度', '财年'],
                },
                showNow: '显示此刻',
                showTime: '时间选择',
                showToday: '显示今天',
            },
        },
    },
    'en-US': {
        title: 'DatePicker',
        settings: {
            'x-component-props': {
                disabledDate: {
                    title: 'Disabled Date',
                    tooltip: 'Format (currentDate: moment) => boolean',
                },
                disabledTime: {
                    title: 'Disabled Time',
                    tooltip: 'Format (currentDate: moment) => boolean',
                },
                inputReadOnly: 'Input ReadOnly',
                format: 'Format',
                picker: {
                    title: 'Picker Type',
                    dataSource: ['Time', 'Date', 'Month', 'Year', 'Quarter', 'Decade'],
                },
                showNow: 'Show Now',
                showTime: 'Show Time',
                showToday: 'Show Today',
            },
        },
    },
    'ko-KR': {
        title: '날짜 선택 상자',
        settings: {
            'x-component-props': {
                disabledDate: {
                    title: '비활성화 된 날짜',
                    tooltip: '형식 (currentDate: moment) => boolean',
                },
                disabledTime: {
                    title: '비활성화 된 시간',
                    tooltip: '형식 (currentDate: moment) => boolean',
                },
                inputReadOnly: 'ReadOnly',
                format: '포맷',
                picker: {
                    title: '타입',
                    dataSource: ['시간', '날짜', '월', '년', '분기', '십년 단위'],
                },
                showNow: '현재 시각 보기',
                showTime: '시간 보기',
                showToday: '오늘 보기',
            },
        },
    },
};
var DateRangePicker = createLocales(DatePicker$2, {
    'zh-CN': {
        title: '日期范围',
    },
    'en-US': {
        title: 'DateRange',
    },
    'ko-KR': {
        title: '날짜범위 선택 상자',
    },
});

var TimePicker$2 = createLocales(DatePicker$2, {
    'zh-CN': {
        title: '时间选择',
        settings: {
            'x-component-props': {
                clearText: '清除提示',
                disabledHours: '禁止小时',
                disabledMinutes: '禁止分钟',
                disabledSeconds: '禁止秒',
                hideDisabledOptions: '隐藏禁止选项',
                hourStep: '小时间隔',
                minuteStep: '分钟间隔',
                secondStep: '秒间隔',
                use12Hours: '12小时制',
                inputReadOnly: '输入框只读',
                showNow: '显示此刻',
                format: '格式',
            },
        },
    },
    'en-US': {
        title: 'Time Picker',
        settings: {
            'x-component-props': {
                clearText: 'Clear Text',
                disabledHours: 'Disbaled Hours',
                disabledMinutes: 'Disabled Minutes',
                disabledSeconds: 'Disabled Seconds',
                hideDisabledOptions: 'Hide Disabled Options',
                hourStep: 'Hour Step',
                minuteStep: 'Minute Step',
                secondStep: 'Second Step',
                use12Hours: 'Use 12-hour',
                inputReadOnly: 'Input ReadOnly',
                showNow: 'Show Now',
                format: 'Format',
            },
        },
    },
    'ko-KR': {
        title: '시간 선택',
        settings: {
            'x-component-props': {
                clearText: '텍스트 삭제',
                disabledHours: '시 비활성화',
                disabledMinutes: '분 비활성화',
                disabledSeconds: '초 비활성화',
                hideDisabledOptions: '비황성화 옵션 숨기기',
                hourStep: '시 스탭',
                minuteStep: '분 스탭',
                secondStep: '초 스탭',
                use12Hours: '12시간 단위 사용',
                inputReadOnly: 'ReadOnly',
                showNow: '현재 시각 보여주기',
                format: '포맷',
            },
        },
    },
});
var TimeRangePicker = createLocales(TimePicker$2, {
    'zh-CN': {
        title: '时间范围',
    },
    'en-US': {
        title: 'Time Range',
    },
    'ko-KR': {
        title: '시간 범위',
    },
});

var NumberPicker$2 = {
    'zh-CN': {
        title: '数字输入',
        settings: {
            'x-component-props': {
                formatter: {
                    title: '格式转换器',
                    tooltip: '格式：function(value: number | string): string',
                },
                keyboard: '启用快捷键',
                parser: {
                    title: '格式解析器',
                    tooltip: '指定从 格式转换器 里转换回数字的方式，和 格式转换器 搭配使用,格式：function(string): number',
                },
                decimalSeparator: '小数点',
                precision: '数字精度',
                max: '最大值',
                min: '最小值',
                step: '步长',
                stringMode: {
                    title: '字符串格式',
                    tooltip: '开启后支持高精度小数。同时 onChange 将返回 string 类型',
                },
            },
        },
    },
    'en-US': {
        title: 'NumberInput',
        settings: {
            'x-component-props': {
                formatter: {
                    title: 'Format Converter',
                    tooltip: 'Format：function(value: number | string): string',
                },
                keyboard: 'Enable Shortcut Keys',
                parser: {
                    title: 'Format Parser',
                    tooltip: 'Specify the method of converting back to numbers from the format converter, and use it with the format converter, the format:function(string): number',
                },
                decimalSeparator: 'Decimal Separator',
                precision: 'Precision',
                max: 'Max',
                min: 'Min',
                step: 'Step',
                stringMode: {
                    title: 'String Format',
                    tooltip: 'Support high-precision decimals after opening. At the same time onChange will return string type',
                },
            },
        },
    },
    'ko-KR': {
        title: '숫자 입력',
        settings: {
            'x-component-props': {
                formatter: {
                    title: '포맷 컨버터',
                    tooltip: '형식: function(value: number | string): string',
                },
                keyboard: '숏컷 키 활성화',
                parser: {
                    title: '포멧 파서',
                    tooltip: '문자열을 숫자로 변환하는 포맷 컨버터를 만들고 사용하세요, 형식 :function(string): number',
                },
                decimalSeparator: '소수 구분 기호',
                precision: '정밀도',
                max: '최대값',
                min: '최소값',
                step: '스탭',
                stringMode: {
                    title: '문자열 형식',
                    tooltip: '높은 정밀도 소수를 지원합니다. onChange에서 문자열 타입으로 반환됩니다.',
                },
            },
        },
    },
};

var Password$2 = createLocales(Input$2, {
    'zh-CN': {
        title: '密码输入',
    },
    'en-US': {
        title: 'Password',
    },
    'ko-KR': {
        title: '비밀번호',
    },
});

var Transfer$2 = {
    'zh-CN': {
        title: '穿梭框',
        settings: {
            'x-component-props': {
                oneWay: '单向展示',
                operations: { title: '操作文案集合', tooltip: '格式：string[]' },
                titles: { title: '标题集合', tooltip: '格式：string[]' },
                showSearchAll: '支持全选',
                filterOption: '选项筛选器',
            },
        },
    },
    'en-US': {
        title: 'Transfer',
        settings: {
            'x-component-props': {
                oneWay: 'One Way',
                operations: { title: 'Operations', tooltip: 'Format：string[]' },
                titles: { title: 'Titles', tooltip: 'Format：string[]' },
                showSearchAll: 'Show Search All',
                filterOption: 'Filter Option',
            },
        },
    },
    'ko-KR': {
        title: '전송',
        settings: {
            'x-component-props': {
                oneWay: '하나의 방법',
                operations: { title: '작업', tooltip: '형식：string[]' },
                titles: { title: '제목', tooltip: '형식：string[]' },
                showSearchAll: '모든 검색 결과 보여주기',
                filterOption: '필터 옵션',
            },
        },
    },
};

var Upload$2 = {
    'zh-CN': {
        title: '上传',
        settings: {
            'x-component-props': {
                accept: '可接受类型',
                action: '上传地址',
                data: '数据/参数',
                directory: '支持上传目录',
                headers: '请求头',
                listType: { title: '列表类型', dataSource: ['文本', '图片', '卡片'] },
                multiple: '多选模式',
                name: '字段标识',
                openFileDialogOnClick: {
                    title: '点击打开文件对话框',
                    tooltip: '点击打开文件对话框',
                },
                showUploadList: '是否展示文件列表',
                withCredentials: '携带Cookie',
                maxCount: '最大数量',
                method: '方法',
                textContent: '上传文案',
            },
        },
    },
    'en-US': {
        title: 'Upload',
        settings: {
            'x-component-props': {
                accept: 'Accept',
                action: 'Upload Address',
                data: 'Data',
                directory: 'Support Upload Directory',
                headers: 'Headers',
                listType: { title: 'List Type', dataSource: ['Text', 'Image', 'Card'] },
                multiple: 'Multiple',
                name: 'Name',
                openFileDialogOnClick: 'Open File Dialog On Click',
                showUploadList: 'Show Upload List',
                withCredentials: 'withCredentials',
                maxCount: 'Max Count',
                method: 'Method',
                textContent: 'Text Content',
            },
        },
    },
    'ko-KR': {
        title: '업로드',
        settings: {
            'x-component-props': {
                accept: '승인',
                action: '업로드 주소',
                data: '데이터',
                directory: '디렉터리 업로드 지원',
                headers: '헤더',
                listType: {
                    title: '리스트 타입',
                    dataSource: ['텍스트', '이미지', '카드'],
                },
                multiple: '여러개',
                name: '이름',
                openFileDialogOnClick: '눌러서 파일 다이얼로그 열기',
                showUploadList: '업로드 목록 표시',
                withCredentials: '자격 증명 포함',
                maxCount: '최대 개수',
                method: '메서드',
                textContent: '텍스트 내용',
            },
        },
    },
};
var UploadDragger = createLocales(Upload$2, {
    'zh-CN': {
        title: '拖拽上传',
        settings: {
            'x-component-props': {},
        },
    },
    'en-US': {
        title: 'UploadDragger',
        settings: {
            'x-component-props': {},
        },
    },
    'ko-KR': {
        title: '드래그로 업로드',
        settings: {
            'x-component-props': {},
        },
    },
});

var Switch$2 = {
    'zh-CN': {
        title: '开关',
    },
    'en-US': {
        title: 'Switch',
    },
    'ko-KR': {
        title: '스위치',
    },
};

var ObjectLocale = {
    'zh-CN': {
        title: '对象容器',
    },
    'en-US': {
        title: 'Object',
    },
    'ko-KR': {
        title: '오브젝트',
    },
};

var Form$2 = createLocales(Component, {
    'zh-CN': {
        title: '表单',
        settings: {
            labelCol: '标签网格宽度',
            wrapperCol: '组件网格宽度',
            colon: '是否有冒号',
            labelAlign: {
                title: '标签对齐',
                dataSource: ['左对齐', '右对齐', '继承'],
            },
            wrapperAlign: {
                title: '组件对齐',
                dataSource: ['左对齐', '右对齐', '继承'],
            },
            labelWrap: '标签换行',
            wrapperWrap: '组件换行',
            labelWidth: '标签宽度',
            wrapperWidth: '组件宽度',
            fullness: '组件占满',
            inset: '内联布局',
            shallow: '是否浅传递',
            bordered: '是否有边框',
            size: { title: '尺寸', dataSource: ['大', '小', '默认', '继承'] },
            layout: { title: '布局', dataSource: ['垂直', '水平', '内联', '继承'] },
            feedbackLayout: {
                title: '反馈布局',
                dataSource: ['宽松', '紧凑', '弹层', '无', '继承'],
            },
            tooltipLayout: {
                title: '提示布局',
                dataSource: ['图标', '文本', '继承'],
            },
        },
    },
    'en-US': {
        title: 'Form',
        settings: {
            labelCol: 'Label Col',
            wrapperCol: 'Wrapper Col',
            colon: 'Colon',
            labelAlign: {
                title: 'Label Align',
                dataSource: ['Left', 'Right', 'Inherit'],
            },
            wrapperAlign: {
                title: 'Wrapper Align',
                dataSource: ['Left', 'Right', 'Inherit'],
            },
            labelWrap: 'Label Wrap',
            wrapperWrap: 'Wrapper Wrap',
            labelWidth: 'Label Width',
            wrapperWidth: 'Wrapper Width',
            fullness: 'Fullness',
            inset: 'Inset',
            shallow: 'Shallow',
            bordered: 'Bordered',
            size: {
                title: 'Size',
                dataSource: ['Large', 'Small', 'Default', 'Inherit'],
            },
            layout: {
                title: 'Layout',
                dataSource: ['Vertical', 'Horizontal', 'Inline', 'Inherit'],
            },
            feedbackLayout: {
                title: 'Feedback Layout',
                dataSource: ['Loose', 'Terse', 'Popup', 'None', 'Inherit'],
            },
            tooltipLayout: {
                title: 'Tooltip Layout',
                dataSource: ['Icon', 'Text', 'Inherit'],
            },
        },
    },
    'ko-KR': {
        title: '폼',
        settings: {
            labelCol: 'Label Col',
            wrapperCol: 'Wrapper Col',
            colon: 'Colon',
            labelAlign: {
                title: 'Label 정렬',
                dataSource: ['왼쪽', '오른쪽', '상속'],
            },
            wrapperAlign: {
                title: 'Wrapper 정렬',
                dataSource: ['왼쪽', '오른쪽', '상속'],
            },
            labelWrap: 'Label Wrap',
            wrapperWrap: 'Wrapper Wrap',
            labelWidth: 'Label Width',
            wrapperWidth: 'Wrapper Width',
            fullness: 'Fullness',
            inset: 'Inset',
            shallow: 'Shallow',
            bordered: 'Bordered',
            size: {
                title: '크기',
                dataSource: ['크게', '작게', '보통', '상속'],
            },
            layout: {
                title: '레이아웃',
                dataSource: ['수직', '수평', '인라인', '상속'],
            },
            feedbackLayout: {
                title: '피드백 레이아웃',
                dataSource: ['Loose', 'Terse', '팝업', '없음', '상속'],
            },
            tooltipLayout: {
                title: '툴팁 레이아웃',
                dataSource: ['아이콘', '텍스트', '상속'],
            },
        },
    },
});

var FormLayout$2 = {
    'zh-CN': {
        title: '表单布局',
        settings: {
            'x-component-props': {
                labelCol: '标签网格宽度',
                wrapperCol: '组件网格宽度',
                colon: '是否有冒号',
                labelAlign: {
                    title: '标签对齐',
                    dataSource: ['左对齐', '右对齐', '继承'],
                },
                wrapperAlign: {
                    title: '组件对齐',
                    dataSource: ['左对齐', '右对齐', '继承'],
                },
                labelWrap: '标签换行',
                wrapperWrap: '组件换行',
                labelWidth: '标签宽度',
                wrapperWidth: '组件宽度',
                fullness: '组件占满',
                inset: '内联布局',
                shallow: '是否浅传递',
                bordered: '是否有边框',
                size: { title: '尺寸', dataSource: ['大', '小', '默认', '继承'] },
                layout: { title: '布局', dataSource: ['水平', '垂直', '内联', '继承'] },
                feedbackLayout: {
                    title: '反馈布局',
                    dataSource: ['宽松', '紧凑', '弹层', '无', '继承'],
                },
                tooltipLayout: {
                    title: '提示布局',
                    dataSource: ['图标', '文本', '继承'],
                },
            },
        },
    },
    'en-US': {
        title: 'Form Layout',
        settings: {
            'x-component-props': {
                labelCol: 'Label Col',
                wrapperCol: 'Wrapper Col',
                colon: 'Colon',
                labelAlign: {
                    title: 'Label Align',
                    dataSource: ['Left', 'Right', 'Inherit'],
                },
                wrapperAlign: {
                    title: 'Wrapper Align',
                    dataSource: ['Left', 'Right', 'Inherit'],
                },
                labelWrap: 'Label Wrap',
                wrapperWrap: 'Wrapper Wrap',
                labelWidth: 'Label Width',
                wrapperWidth: 'Wrapper Width',
                fullness: 'Fullness',
                inset: 'Inset',
                shallow: 'Shallow',
                bordered: 'Bordered',
                size: {
                    title: 'Size',
                    dataSource: ['Large', 'Small', 'Default', 'Inherit'],
                },
                layout: {
                    title: 'Layout',
                    dataSource: ['Horizontal', 'Vertical', 'Inline', 'Inherit'],
                },
                feedbackLayout: {
                    title: 'Feedback Layout',
                    dataSource: ['Loose', 'Terse', 'Popup', 'None', 'Inherit'],
                },
                tooltipLayout: {
                    title: 'Tooltip Layout',
                    dataSource: ['Icon', 'Text', 'Inherit'],
                },
            },
        },
    },
    'ko-KR': {
        title: '양식 레이아웃',
        settings: {
            'x-component-props': {
                labelCol: '레이블 열',
                wrapperCol: '래퍼 열',
                colon: '콜론',
                labelAlign: {
                    title: '레이블 정렬',
                    dataSource: ['왼쪽', '오른쪽', '상속'],
                },
                wrapperAlign: {
                    title: '래퍼 정렬',
                    dataSource: ['왼쪽', '오른쪽', '상속'],
                },
                labelWrap: '레이블 랩',
                wrapperWrap: '래퍼 랩',
                labelWidth: '레이블 너비',
                wrapperWidth: '래퍼 너비',
                fullness: '충만',
                inset: '삽입',
                shallow: '얕다',
                bordered: '경계',
                size: {
                    title: '크기',
                    dataSource: ['큰', '작은', '기본', '상속'],
                },
                layout: {
                    title: '레이아웃',
                    dataSource: ['가로', '세로', '인라인', '상속'],
                },
                feedbackLayout: {
                    title: '피드백 레이아웃',
                    dataSource: ['느슨한', '간단한', '팝업', '없음', '상속'],
                },
                tooltipLayout: {
                    title: '도구 설명 레이아웃',
                    dataSource: ['아이콘', '텍스트', '상속'],
                },
            },
        },
    },
};

var Text$2 = {
    'zh-CN': {
        title: '文本',
        settings: {
            'x-component-props': {
                content: '文本内容',
                mode: {
                    title: '文本类型',
                    dataSource: ['H1', 'H2', 'H3', 'Paragraph', 'Normal'],
                },
            },
        },
    },
    'en-US': {
        title: 'Text',
        settings: {
            'x-component-props': {
                content: 'Text Content',
                mode: {
                    title: 'Text Mode',
                    dataSource: ['H1', 'H2', 'H3', 'Paragraph', 'Normal'],
                },
            },
        },
    },
    'ko-KR': {
        title: '텍스트',
        settings: {
            'x-component-props': {
                content: '텍스트 내용',
                mode: {
                    title: '텍스트 모드',
                    dataSource: ['H1', 'H2', 'H3', 'Paragraph', 'Normal'],
                },
            },
        },
    },
};

var Card$2 = {
    'zh-CN': {
        title: '卡片',
        settings: {
            'x-component-props': {
                type: '类型',
                title: '标题',
                extra: '右侧扩展',
                cardTypes: [
                    { label: '内置', value: 'inner' },
                    { label: '默认', value: '' },
                ],
            },
        },
    },
    'en-US': {
        title: 'Card',
        settings: {
            'x-component-props': {
                type: 'Type',
                title: 'Title',
                extra: 'Extra',
                cardTypes: [
                    { label: 'Inner', value: 'inner' },
                    { label: 'Default', value: '' },
                ],
            },
        },
    },
    'ko-KR': {
        title: '카드',
        settings: {
            'x-component-props': {
                type: '타입',
                title: '제목',
                extra: '추가 항목',
                cardTypes: [
                    { label: '안쪽', value: 'inner' },
                    { label: '기본', value: '' },
                ],
            },
        },
    },
};

GlobalRegistry.registerDesignerLocales({
    'zh-CN': {
        Previews: {
            droppable: '可以拖入组件',
            addTabPane: '添加选项卡',
            addCollapsePanel: '添加手风琴卡片',
            addTableColumn: '添加表格列',
            addTableSortHandle: '添加排序',
            addIndex: '添加索引',
            addOperation: '添加操作',
        },
    },
});
var ArrayAddition = {
    'zh-CN': {
        title: '添加按钮',
        settings: {
            'x-component-props': {
                method: '方法',
                defaultValue: '默认值',
            },
        },
    },
};
var ArrayRemove = {
    'zh-CN': {
        title: '删除按钮',
    },
    'en-US': {
        title: 'Remove',
    },
    'ko-KR': {
        title: '삭제',
    },
};
var ArrayMoveUp = {
    'zh-CN': {
        title: '上移按钮',
    },
    'en-US': {
        title: 'Move Up',
    },
    'ko-KR': {
        title: '위로 옮기기',
    },
};
var ArrayMoveDown = {
    'zh-CN': {
        title: '下移按钮',
    },
    'en-US': {
        title: 'Move Down',
    },
    'ko-KR': {
        title: '아래로 옮기기',
    },
};
var ArrayIndex = {
    'zh-CN': {
        title: '索引标识',
    },
    'en-US': {
        title: 'Index',
    },
    'ko-KR': {
        title: '색인',
    },
};
var ArraySortHandle = {
    'zh-CN': {
        title: '排序标识',
    },
    'en-US': {
        title: 'Sort Handle',
    },
    'ko-KR': {
        title: '정렬 핸들',
    },
};

var ArrayCards$2 = createLocales(Card$2, {
    'zh-CN': {
        title: '自增卡片',
        addIndex: '添加索引',
        addOperation: '添加操作',
    },
    'en-US': {
        title: 'Array Cards',
        addIndex: 'Add Index',
        addOperation: 'Add Operations',
    },
    'ko-KR': {
        title: '배열 카드',
        addIndex: '색인 추가',
        addOperation: '작업 추가',
    },
});

var ArrayTable$2 = {
    'zh-CN': {
        title: '自增表格',
        addSortHandle: '添加排序',
        addColumn: '添加列',
        addIndex: '添加索引',
        addOperation: '添加操作',
        settings: {
            'x-component-props': {
                showHeader: '显示头部',
                sticky: '吸顶',
                align: {
                    title: '对齐',
                    dataSource: ['左', '右', '居中'],
                },
                colSpan: '跨列',
                fixed: { title: '固定列', dataSource: ['左', '右', '无'] },
                width: '宽度',
                defaultValue: '默认值',
                tableLayout: {
                    title: '表格布局',
                    dataSource: ['自动', '固定'],
                },
            },
        },
    },
    'en-US': {
        title: 'Array Table',
        addSortHandle: 'Add Sort Handle',
        addColumn: 'Add Column',
        addIndex: 'Add Index',
        addOperation: 'Add Operations',
        settings: {
            'x-component-props': {
                showHeader: 'Show Header',
                sticky: 'Sticky',
                align: {
                    title: 'Align',
                    dataSource: ['Left', 'Right', 'Center'],
                },
                colSpan: 'Col Span',
                fixed: { title: 'Fixed', dataSource: ['Left', 'Right', 'None'] },
                width: 'Width',
                defaultValue: 'Default Value',
                tableLayout: {
                    title: 'Table Layout',
                    dataSource: ['Auto', 'Fixed'],
                },
            },
        },
    },
    'ko-KR': {
        title: '배열 테이블',
        addSortHandle: '정렬 핸들 추가',
        addColumn: '열 추가',
        addIndex: '색인 추가',
        addOperation: '작업 추가',
        settings: {
            'x-component-props': {
                showHeader: '헤더 보여주기',
                sticky: '고정',
                align: {
                    title: '정렬',
                    dataSource: ['왼쪽', '오른쪽', '가운데'],
                },
                colSpan: 'colSpan',
                fixed: { title: '고정', dataSource: ['왼쪽', '오른쪽', '없음'] },
                width: '너비',
                defaultValue: '기본 값',
            },
        },
    },
};
var ArrayTableColumn = {
    'zh-CN': {
        title: '表格列',
        settings: {
            'x-component-props': {
                title: '标题',
                align: {
                    title: '内容对齐',
                    dataSource: ['左', '右', '居中'],
                },
                colSpan: '跨列',
                width: '宽度',
                fixed: {
                    title: '固定',
                    dataSource: ['左', '右', '无'],
                },
            },
        },
    },
    'en-US': {
        title: 'Column',
        settings: {
            'x-component-props': {
                title: 'Title',
                align: {
                    title: 'Align',
                    dataSource: ['Left', 'Right', 'Center'],
                },
                colSpan: 'Col Span',
                width: 'Width',
                fixed: {
                    title: 'Fixed',
                    dataSource: ['Left', 'Right', 'None'],
                },
            },
        },
    },
    'ko-KR': {
        title: '열',
        settings: {
            'x-component-props': {
                title: '제목',
                align: {
                    title: '정렬',
                    dataSource: ['왼쪽', '오른쪽', '가운데'],
                },
                colSpan: 'Col Span',
                width: '너비',
                fixed: {
                    title: '고정',
                    dataSource: ['왼쪽', '오른족', '없음'],
                },
            },
        },
    },
};

var Void = {
    'zh-CN': {
        title: '虚拟容器',
    },
    'en-US': {
        title: 'Void',
    },
    'ko-KR': {
        title: '비어있음',
    },
};

var Space$2 = {
    'zh-CN': {
        title: '弹性间距',
        settings: {
            'x-component-props': {
                direction: { title: '方向', dataSource: ['垂直', '水平'] },
                split: '分割内容',
                wrap: '自动换行',
                align: {
                    title: '对齐',
                    dataSource: ['头部', '尾部', '居中', '基准线'],
                },
            },
        },
    },
    'en-US': {
        title: 'Space',
        settings: {
            'x-component-props': {
                direction: {
                    title: 'Direction',
                    dataSource: ['Vertical', 'Horizontal'],
                },
                split: 'Split',
                wrap: 'Word Wrap',
                align: {
                    title: 'Align',
                    dataSource: ['Start', 'End', 'Center', 'Baseline'],
                },
            },
        },
    },
    'ko-KR': {
        title: '간격',
        settings: {
            'x-component-props': {
                direction: {
                    title: '방향',
                    dataSource: ['수직', '수평'],
                },
                split: '분할',
                wrap: '자동 줄 바꿈',
                align: {
                    title: '정렬',
                    dataSource: ['시작', '끝', '가운데', '기준선'],
                },
            },
        },
    },
};

var FormTab$2 = {
    'zh-CN': {
        title: '选项卡',
        addTabPane: '添加选项卡',
        settings: {
            'x-component-props': {
                animated: '启用动画过渡',
                centered: '标签居中',
                tab: '选项名称',
                type: {
                    title: '类型',
                    dataSource: [
                        { label: '线框', value: 'line' },
                        { label: '卡片', value: 'card' },
                    ],
                },
            },
        },
    },
    'en-US': {
        title: 'Tabs',
        addTabPane: 'Add Panel',
        settings: {
            'x-component-props': {
                animated: 'Enable Animated',
                centered: 'Label Centered',
                tab: 'Tab Title',
                type: {
                    title: 'Type',
                    dataSource: [
                        { label: 'Line', value: 'line' },
                        { label: 'Card', value: 'card' },
                    ],
                },
            },
        },
    },
    'ko-KR': {
        title: '탭',
        addTabPane: '패널 추가',
        settings: {
            'x-component-props': {
                animated: '애니메이션 활성화',
                centered: '레이블을 가운데로',
                tab: '텝 제목',
                type: {
                    title: '타입',
                    dataSource: [
                        { label: '라인', value: 'line' },
                        { label: '카드', value: 'card' },
                    ],
                },
            },
        },
    },
};
var FormTabPane = {
    'zh-CN': {
        title: '选项卡面板',
        settings: {
            'x-component-props': {
                tab: '面板标题',
            },
        },
    },
    'en-US': {
        title: 'Tab Panel',
        settings: {
            'x-component-props': {
                tab: 'Panel Title',
            },
        },
    },
    'ko-KR': {
        title: '탭 패널',
        settings: {
            'x-component-props': {
                tab: '패널 제목',
            },
        },
    },
};

var FormCollapse$2 = {
    'zh-CN': {
        title: '折叠面板',
        addCollapsePanel: '添加面板',
        settings: {
            'x-component-props': {
                accordion: '手风琴模式',
                collapsible: { title: '可折叠区域', dataSource: ['头部', '禁用'] },
                ghost: '幽灵模式',
                bordered: '是否有边框',
            },
        },
    },
    'en-US': {
        title: 'Collapse',
        addCollapsePanel: 'Add Panel',
        settings: {
            'x-component-props': {
                accordion: 'Accordion Mode',
                collapsible: {
                    title: 'Collapsible',
                    dataSource: ['Header', 'Disable'],
                },
                ghost: 'Ghost Mode',
                bordered: 'Bordered',
            },
        },
    },
    'ko-KR': {
        title: '드롭다운',
        addCollapsePanel: '패널 추가',
        settings: {
            'x-component-props': {
                accordion: 'Accordion 모드',
                collapsible: {
                    title: '드롭 여부',
                    dataSource: ['헤더', '비활성화'],
                },
                ghost: '고스트 모드',
                bordered: 'Bordered',
            },
        },
    },
};
var FormCollapsePanel = {
    'zh-CN': {
        title: '面板',
        settings: {
            'x-component-props': {
                collapsible: { title: '是否可折叠', dataSource: ['头部', '禁用'] },
                header: '标题',
                extra: '扩展内容',
            },
        },
    },
    'en-US': {
        title: 'Panel',
        settings: {
            'x-component-props': {
                collapsible: {
                    title: 'Collapsible',
                    dataSource: ['Header', 'Disable'],
                },
                header: 'Header Title',
                extra: 'Extra Content',
            },
        },
    },
    'ko-KR': {
        title: '패널',
        settings: {
            'x-component-props': {
                collapsible: {
                    title: '드롭 여부',
                    dataSource: ['해더', '비활성화'],
                },
                header: '헤더 제목',
                extra: '추가 내용',
            },
        },
    },
};

var FormGrid$2 = {
    'zh-CN': {
        title: '网格布局',
        addGridColumn: '添加网格列',
        settings: {
            'x-component-props': {
                minWidth: '最小宽度',
                minColumns: '最小列数',
                maxWidth: '最大宽度',
                maxColumns: '最大列数',
                breakpoints: '响应式断点',
                columnGap: '列间距',
                rowGap: '行间距',
                colWrap: '自动换行',
                strictAutoFit: '自动填充',
            },
        },
    },
    'en-US': {
        title: 'Grid',
        addGridColumn: 'Add Grid Column',
        settings: {
            'x-component-props': {
                minWidth: 'Min Width',
                minColumns: 'Min Columns',
                maxWidth: 'Max Width',
                maxColumns: 'Max Columns',
                breakpoints: 'Breakpoints',
                columnGap: 'Column Gap',
                rowGap: 'Row Gap',
                colWrap: 'Col Wrap',
                strictAutoFit: 'Strict Auto Fit',
            },
        },
    },
    'ko-KR': {
        title: '그리드 열',
        addGridColumn: '그리드 열 추가',
        settings: {
            'x-component-props': {
                minWidth: '최소 너비',
                minColumns: '최소 열 개수',
                maxWidth: '최대 너비',
                maxColumns: '최대 열 개수',
                breakpoints: '중단점',
                columnGap: '열 간격',
                rowGap: '행 간격',
                colWrap: '자동 줄바꿈',
            },
        },
    },
};
var FormGridColumn = {
    'zh-CN': {
        title: '网格列',
        settings: {
            'x-component-props': {
                gridSpan: '跨列栏数',
            },
        },
    },
    'en-US': {
        title: 'Grid Column',
        settings: {
            'x-component-props': {
                gridSpan: 'Grid Span',
            },
        },
    },
    'ko-KR': {
        title: '그리드 열',
        settings: {
            'x-component-props': {
                gridSpan: '그리드 스팬',
            },
        },
    },
};

var Slot$2 = {
    'zh-CN': {
        title: '插槽',
        settings: {
            'x-component-props': {
                slotName: {
                    title: '插槽名称',
                    tooltip: '需要在createExtForm.extConfig.slots配置对应的插槽信息',
                },
            }
        }
    },
    'en-US': {
        title: 'Slot',
        settings: {
            'x-component-props': {
                slotName: {
                    title: "slot's name",
                    tooltip: "The corresponding slot information needs to be passed into 'createExtForm.extConfig.slots'",
                },
            }
        }
    }
};

var AllLocales = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Component: Component,
  Field: Field$1,
  Input: Input$2,
  Select: Select$2,
  TextArea: TextArea,
  TreeSelect: TreeSelect$2,
  Cascader: Cascader$2,
  RadioGroup: RadioGroup,
  CheckboxGroup: CheckboxGroup,
  Slider: Slider$2,
  Rate: Rate$2,
  DatePicker: DatePicker$2,
  DateRangePicker: DateRangePicker,
  TimePicker: TimePicker$2,
  TimeRangePicker: TimeRangePicker,
  NumberPicker: NumberPicker$2,
  Password: Password$2,
  Transfer: Transfer$2,
  Upload: Upload$2,
  UploadDragger: UploadDragger,
  Switch: Switch$2,
  ObjectLocale: ObjectLocale,
  Form: Form$2,
  FormLayout: FormLayout$2,
  Text: Text$2,
  Card: Card$2,
  ArrayAddition: ArrayAddition,
  ArrayRemove: ArrayRemove,
  ArrayMoveUp: ArrayMoveUp,
  ArrayMoveDown: ArrayMoveDown,
  ArrayIndex: ArrayIndex,
  ArraySortHandle: ArraySortHandle,
  ArrayCards: ArrayCards$2,
  ArrayTable: ArrayTable$2,
  ArrayTableColumn: ArrayTableColumn,
  Void: Void,
  Space: Space$2,
  FormTab: FormTab$2,
  FormTabPane: FormTabPane,
  FormCollapse: FormCollapse$2,
  FormCollapsePanel: FormCollapsePanel,
  FormGrid: FormGrid$2,
  FormGridColumn: FormGridColumn,
  Slot: Slot$2
});

Schema.silent(true);
var SchemaStateMap = {
    title: 'title',
    description: 'description',
    default: 'value',
    enum: 'dataSource',
    readOnly: 'readOnly',
    writeOnly: 'editable',
    required: 'required',
    'x-content': 'content',
    'x-value': 'value',
    'x-editable': 'editable',
    'x-disabled': 'disabled',
    'x-read-pretty': 'readPretty',
    'x-read-only': 'readOnly',
    'x-visible': 'visible',
    'x-hidden': 'hidden',
    'x-display': 'display',
    'x-pattern': 'pattern',
};
var NeedShownExpression = {
    title: true,
    description: true,
    default: true,
    'x-content': true,
    'x-value': true,
};
var isExpression = function (val) { return isStr(val) && /^\{\{.*\}\}$/.test(val); };
var filterExpression = function (val) {
    if (typeof val === 'object') {
        var isArray_1 = isArr(val);
        var results = reduce(val, function (buf, value, key) {
            if (isExpression(value)) {
                return buf;
            }
            else {
                var results_1 = filterExpression(value);
                if (results_1 === undefined || results_1 === null)
                    return buf;
                if (isArray_1) {
                    return buf.concat([results_1]);
                }
                buf[key] = results_1;
                return buf;
            }
        }, isArray_1 ? [] : {});
        return results;
    }
    if (isExpression(val)) {
        return;
    }
    return val;
};
var toDesignableFieldProps = function (schema, components, nodeIdAttrName, id) {
    var results = {};
    each(SchemaStateMap, function (fieldKey, schemaKey) {
        var value = schema[schemaKey];
        if (isExpression(value)) {
            if (!NeedShownExpression[schemaKey])
                return;
            if (value) {
                results[fieldKey] = value;
                return;
            }
        }
        else if (value) {
            results[fieldKey] = filterExpression(value);
        }
    });
    if (!components['FormItem']) {
        components['FormItem'] = FormItem$1;
    }
    var decorator = schema['x-decorator'] && FormPath.getIn(components, schema['x-decorator']);
    var component = schema['x-component'] && FormPath.getIn(components, schema['x-component']);
    var decoratorProps = schema['x-decorator-props'] || {};
    var componentProps = schema['x-component-props'] || {};
    if (decorator) {
        results.decorator = [decorator, toJS(decoratorProps)];
    }
    if (component) {
        results.component = [component, toJS(componentProps)];
    }
    if (decorator) {
        FormPath.setIn(results['decorator'][1], nodeIdAttrName, id);
    }
    else if (component) {
        FormPath.setIn(results['component'][1], nodeIdAttrName, id);
    }
    results.title = results.title && (React.createElement("span", { "data-content-editable": "title" }, results.title));
    results.description = results.description && (React.createElement("span", { "data-content-editable": "description" }, results.description));
    return results;
};
var Field = observer$1(function (props) {
    var designer = useDesigner();
    var components = useComponents();
    var node = useTreeNode();
    if (!node)
        return null;
    var fieldProps = toDesignableFieldProps(props, components, designer.props.nodeIdAttrName, node.id);
    if (props.type === 'object') {
        return (React.createElement(Container, null,
            React.createElement(ObjectField, __assign({}, fieldProps, { name: node.id }), props.children)));
    }
    else if (props.type === 'array') {
        return React.createElement(ArrayField, __assign({}, fieldProps, { name: node.id }));
    }
    else if (node.props.type === 'void') {
        return (React.createElement(VoidField, __assign({}, fieldProps, { name: node.id }), props.children));
    }
    return React.createElement(Field$2, __assign({}, fieldProps, { name: node.id }));
});
Field.Behavior = createBehavior({
    name: 'Field',
    selector: 'Field',
    designerLocales: Field$1,
});

var FormItemSwitcher = function (props) {
    return (React.createElement(Switch$3, { checked: props.value === 'FormItem', onChange: function (value) {
            props.onChange(value ? 'FormItem' : undefined);
        } }));
};

var Input$1 = {
    type: 'object',
    properties: {
        addonBefore: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        addonAfter: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        prefix: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        suffix: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        allowClear: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        bordered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        maxLength: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        placeholder: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        size: {
            type: 'string',
            enum: ['large', 'small', 'middle', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'middle',
            },
        },
    },
};
Input$1.TextArea = {
    type: 'object',
    properties: {
        bordered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        maxLength: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        placeholder: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        autoSize: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        showCount: {
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
    },
};

var Text$1 = {
    type: 'object',
    properties: {
        content: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input.TextArea',
        },
        mode: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'normal',
            },
            enum: ['h1', 'h2', 'h3', 'p', 'normal'],
        },
    },
};

var FormLayout$1 = {
    type: 'object',
    properties: {
        labelCol: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        wrapperCol: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        labelWidth: {
            'x-decorator': 'FormItem',
            'x-component': 'SizeInput',
        },
        wrapperWidth: {
            'x-decorator': 'FormItem',
            'x-component': 'SizeInput',
        },
        colon: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        feedbackLayout: {
            type: 'string',
            enum: ['loose', 'terse', 'popover', 'none', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'loose',
            },
        },
        size: {
            type: 'string',
            enum: ['large', 'small', 'default', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'default',
            },
        },
        layout: {
            type: 'string',
            enum: ['vertical', 'horizontal', 'inline', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'horizontal',
            },
        },
        tooltipLayout: {
            type: 'string',
            enum: ['icon', 'text', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'icon',
            },
        },
        labelAlign: {
            type: 'string',
            enum: ['left', 'right', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'right',
            },
        },
        wrapperAlign: {
            type: 'string',
            enum: ['left', 'right', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'left',
            },
        },
        labelWrap: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        wrapperWrap: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        fullness: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        inset: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        shallow: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        bordered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
    },
};

var CSSStyle = {
    type: 'void',
    properties: {
        'style.width': {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'SizeInput',
        },
        'style.height': {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'SizeInput',
        },
        'style.display': {
            'x-component': 'DisplayStyleSetter',
        },
        'style.background': {
            'x-component': 'BackgroundStyleSetter',
        },
        'style.boxShadow': {
            'x-component': 'BoxShadowStyleSetter',
        },
        'style.font': {
            'x-component': 'FontStyleSetter',
        },
        'style.margin': {
            'x-component': 'BoxStyleSetter',
        },
        'style.padding': {
            'x-component': 'BoxStyleSetter',
        },
        'style.borderRadius': {
            'x-component': 'BorderRadiusStyleSetter',
        },
        'style.border': {
            'x-component': 'BorderStyleSetter',
        },
        'style.opacity': {
            'x-decorator': 'FormItem',
            'x-component': 'Slider',
            'x-component-props': {
                defaultValue: 1,
                min: 0,
                max: 1,
                step: 0.01,
            },
        },
    },
};

var Form$1 = {
    type: 'object',
    properties: __assign(__assign({}, FormLayout$1.properties), { style: CSSStyle }),
};

var FormItem = {
    type: 'object',
    properties: {
        tooltip: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        addonBefore: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        addonAfter: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        labelCol: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        wrapperCol: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        labelWidth: {
            'x-decorator': 'FormItem',
            'x-component': 'SizeInput',
        },
        wrapperWidth: {
            'x-decorator': 'FormItem',
            'x-component': 'SizeInput',
        },
        colon: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        asterisk: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        gridSpan: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        feedbackLayout: {
            type: 'string',
            enum: ['loose', 'terse', 'popover', 'none', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'loose',
            },
        },
        size: {
            type: 'string',
            enum: ['large', 'small', 'default', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'default',
            },
        },
        layout: {
            type: 'string',
            enum: ['vertical', 'horizontal', 'inline', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'horizontal',
            },
        },
        tooltipLayout: {
            type: 'string',
            enum: ['icon', 'text', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'icon',
            },
        },
        labelAlign: {
            type: 'string',
            enum: ['left', 'right', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'right',
            },
        },
        wrapperAlign: {
            type: 'string',
            enum: ['left', 'right', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'left',
            },
        },
        labelWrap: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        wrapperWrap: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        fullness: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        inset: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        bordered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
    },
};

var Select$1 = {
    type: 'object',
    properties: {
        mode: {
            type: 'string',
            enum: ['multiple', 'tags', null],
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: null,
                optionType: 'button',
            },
        },
        allowClear: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        autoClearSearchValue: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        dropdownMatchSelectWidth: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        autoFocus: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        bordered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        defaultActiveFirstOption: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        defaultOpen: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        labelInValue: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        showArrow: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        showSearch: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        virtual: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultValue: true,
            },
        },
        filterOption: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['BOOLEAN', 'EXPRESSION'],
            },
        },
        filterSort: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        listHeight: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            'x-component-props': {
                defaultValue: 256,
            },
        },
        maxTagCount: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        maxTagPlaceholder: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        maxTagTextLength: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        notFoundContent: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
                defaultValue: 'Not Found',
            },
        },
        placeholder: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        size: {
            type: 'string',
            enum: ['large', 'small', 'middle', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'middle',
            },
        },
    },
};

var Card$1 = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        extra: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        type: {
            type: 'boolean',
            enum: GlobalRegistry.getDesignerMessage('settings.cardTypes'),
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: '',
                optionType: 'button',
            },
        },
        bordered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
    },
};

var Cascader$1 = {
    type: 'object',
    properties: {
        allowClear: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        changeOnSelect: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        autoFocus: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        bordered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        displayRender: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        fieldNames: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        showSearch: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        notFoundContent: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
                defaultValue: 'Not Found',
            },
        },
        placeholder: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        size: {
            type: 'string',
            enum: ['large', 'small', 'middle', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'middle',
            },
        },
    },
};

var Checkbox$1 = {
    type: 'object',
    properties: {
        autoFocus: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
    },
};

var Radio$1 = {
    type: 'object',
    properties: {
        autoFocus: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
    },
};
Radio$1.Group = {
    type: 'object',
    properties: {
        optionType: {
            type: 'string',
            enum: ['default', 'button'],
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: 'default',
                optionType: 'button',
            },
        },
        buttonStyle: {
            type: 'string',
            enum: ['outline', 'solid'],
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: 'outline',
                optionType: 'button',
            },
        },
    },
};

var CommonDatePickerAPI = {
    allowClear: {
        type: 'boolean',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
        'x-component-props': {
            defaultChecked: true,
        },
    },
    autoFocus: {
        type: 'boolean',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
    },
    bordered: {
        type: 'boolean',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
        'x-component-props': {
            defaultChecked: true,
        },
    },
    disabledTime: {
        'x-decorator': 'FormItem',
        'x-component': 'ValueInput',
        'x-component-props': {
            include: ['EXPRESSION'],
        },
    },
    disabledDate: {
        'x-decorator': 'FormItem',
        'x-component': 'ValueInput',
        'x-component-props': {
            include: ['EXPRESSION'],
        },
    },
    inputReadOnly: {
        type: 'boolean',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
    },
    placeholder: {
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
    },
    size: {
        type: 'string',
        enum: ['large', 'small', 'middle', null],
        'x-decorator': 'FormItem',
        'x-component': 'Select',
        'x-component-props': {
            defaultValue: 'middle',
        },
    },
    format: {
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-component-props': {
            placeholder: 'YYYY-MM-DD',
        },
    },
};
var DatePicker$1 = {
    type: 'object',
    properties: __assign(__assign({ picker: {
            type: 'string',
            enum: ['time', 'date', 'month', 'year', 'quarter', 'decade'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'date',
            },
        } }, CommonDatePickerAPI), { showNow: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        }, showTime: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        }, showToday: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        } }),
};
DatePicker$1.RangePicker = {
    type: 'object',
    properties: __assign(__assign({ picker: {
            type: 'string',
            enum: ['time', 'date', 'month', 'year', 'decade'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'date',
            },
        } }, CommonDatePickerAPI), { showTime: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        } }),
};

var NumberPicker$1 = {
    type: 'object',
    properties: {
        decimalSeparator: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        precision: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        max: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        min: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        step: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        placeholder: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        size: {
            type: 'string',
            enum: ['large', 'small', 'middle', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'middle',
            },
        },
        formatter: {
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        parser: {
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        stringMode: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        bordered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        keyboard: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
    },
};

var Password$1 = {
    type: 'object',
    properties: __assign(__assign({}, Input$1.properties), { checkStrength: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        } }),
};

var Rate$1 = {
    type: 'object',
    properties: {
        allowClear: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        count: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            'x-component-props': {
                defaultValue: 5,
            },
        },
        allowHalf: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        tooltips: {
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        autoFocus: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
    },
};

var Slider$1 = {
    type: 'object',
    properties: {
        allowClear: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        dots: {
            title: GlobalRegistry.getDesignerMessage('settings.sliderDots'),
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        range: {
            title: GlobalRegistry.getDesignerMessage('settings.sliderRange'),
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        reverse: {
            title: GlobalRegistry.getDesignerMessage('settings.sliderReverse'),
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        vertical: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        tooltipVisible: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        tooltipPlacement: {
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        marks: {
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        max: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            'x-component-props': {
                defaultValue: 100,
            },
        },
        min: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            'x-component-props': {
                defaultValue: 0,
            },
        },
        step: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            'x-component-props': {
                defaultValue: 1,
            },
        },
    },
};

var CommonTimePickerAPI = {
    allowClear: {
        type: 'boolean',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
        'x-component-props': {
            defaultChecked: true,
        },
    },
    autoFocus: {
        type: 'boolean',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
    },
    bordered: {
        type: 'boolean',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
        'x-component-props': {
            defaultChecked: true,
        },
    },
    clearText: {
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
    },
    disabledHours: {
        'x-decorator': 'FormItem',
        'x-component': 'ValueInput',
        'x-component-props': {
            include: ['EXPRESSION'],
        },
    },
    disabledMinutes: {
        'x-decorator': 'FormItem',
        'x-component': 'ValueInput',
        'x-component-props': {
            include: ['EXPRESSION'],
        },
    },
    disabledSeconds: {
        'x-decorator': 'FormItem',
        'x-component': 'ValueInput',
        'x-component-props': {
            include: ['EXPRESSION'],
        },
    },
    hideDisabledOptions: {
        type: 'boolean',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
    },
    inputReadOnly: {
        type: 'boolean',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
    },
    showNow: {
        type: 'boolean',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
    },
    use12Hours: {
        type: 'boolean',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
    },
    hourStep: {
        type: 'number',
        'x-decorator': 'FormItem',
        'x-component': 'NumberPicker',
        'x-component-props': {
            defaultValue: 1,
        },
    },
    minuteStep: {
        type: 'number',
        'x-decorator': 'FormItem',
        'x-component': 'NumberPicker',
        'x-component-props': {
            defaultValue: 1,
        },
    },
    secondStep: {
        type: 'number',
        'x-decorator': 'FormItem',
        'x-component': 'NumberPicker',
        'x-component-props': {
            defaultValue: 1,
        },
    },
    placeholder: {
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
    },
    size: {
        type: 'string',
        enum: ['large', 'small', 'middle', null],
        'x-decorator': 'FormItem',
        'x-component': 'Select',
    },
    format: {
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-component-props': {
            placeholder: 'YYYY-MM-DD',
        },
    },
};
var TimePicker$1 = {
    type: 'object',
    properties: CommonTimePickerAPI,
};
TimePicker$1.RangePicker = {
    type: 'object',
    properties: CommonTimePickerAPI,
};

var TreeSelect$1 = {
    type: 'object',
    properties: {
        allowClear: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        autoClearSearchValue: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        autoFocus: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        bordered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        labelInValue: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        showArrow: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        showSearch: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        virtual: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        treeCheckable: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        treeDefaultExpandAll: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        dropdownMatchSelectWidth: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        showCheckedStrategy: {
            type: 'string',
            enum: ['SHOW_ALL', 'SHOW_PARENT', 'SHOW_CHILD'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'SHOW_CHILD',
            },
        },
        treeDefaultExpandedKeys: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        treeNodeFilterProp: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        treeNodeLabelProp: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        filterTreeNode: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['BOOLEAN', 'EXPRESSION'],
            },
        },
        treeDataSimpleMode: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['BOOLEAN', 'EXPRESSION'],
            },
        },
        listHeight: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            'x-component-props': {
                defaultValue: 256,
            },
        },
        placeholder: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        size: {
            type: 'string',
            enum: ['large', 'small', 'middle', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'middle',
            },
        },
    },
};

var Transfer$1 = {
    type: 'object',
    properties: {
        oneWay: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        showSearch: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        showSearchAll: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        filterOption: {
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        operations: {
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        titles: {
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
    },
};

var Upload$1 = {
    type: 'object',
    properties: {
        textContent: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        accept: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        action: {
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['TEXT', 'EXPRESSION'],
            },
        },
        name: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
                defaultValue: 'file',
            },
        },
        maxCount: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        method: {
            enum: ['POST', 'PUT', 'GET'],
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: 'POST',
                optionType: 'button',
            },
        },
        data: {
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        headers: {
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        listType: {
            enum: ['text', 'picture', 'picture-card'],
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: 'text',
                optionType: 'button',
            },
        },
        directory: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        multiple: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        openFileDialogOnClick: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        showUploadList: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        withCredentials: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
    },
};
Upload$1.Dragger = Upload$1;

var Switch$1 = {
    type: 'object',
    properties: {
        autoFocus: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        size: {
            type: 'string',
            enum: ['large', 'small', 'default', ''],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'default',
            },
        },
    },
};

var FormGrid$1 = {
    type: 'object',
    properties: {
        minWidth: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            'x-component-props': {
                defaultValue: 100,
            },
        },
        maxWidth: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        minColumns: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            'x-component-props': {
                defaultValue: 0,
            },
        },
        maxColumns: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        breakpoints: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
            'x-component-props': {
                include: ['EXPRESSION'],
            },
        },
        columnGap: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            'x-component-props': {
                defaultValue: 10,
            },
        },
        rowGap: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            'x-component-props': {
                defaultValue: 5,
            },
        },
        colWrap: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        strictAutoFit: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: false,
            },
        },
    },
};
FormGrid$1.GridColumn = {
    type: 'object',
    properties: {
        gridSpan: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            'x-component-props': {
                defaultValue: 1,
            },
        },
    },
};

var Space$1 = {
    type: 'object',
    properties: {
        align: {
            type: 'string',
            enum: ['start', 'end', 'center', 'baseline'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
        },
        direction: {
            type: 'string',
            enum: ['vertical', 'horizontal'],
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: 'horizontal',
                optionType: 'button',
            },
        },
        size: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            'x-component-props': {
                defaultValue: 8,
            },
        },
        split: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        wrap: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
    },
};

var FormTab$1 = {
    type: 'object',
    properties: {
        animated: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        centered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        size: {
            type: 'string',
            enum: ['large', 'small', 'default', null],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'default',
            },
        },
        type: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: 'line',
                optionType: 'button',
            },
        },
    },
};
FormTab$1.TabPane = {
    type: 'object',
    properties: {
        tab: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
    },
};

var FormCollapse$1 = {
    type: 'object',
    properties: {
        accordion: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        collapsible: {
            type: 'string',
            enum: ['header', 'disabled'],
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: 'header',
                optionType: 'button',
            },
        },
        ghost: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        bordered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
    },
};
FormCollapse$1.CollapsePanel = {
    type: 'object',
    properties: {
        collapsible: {
            type: 'string',
            enum: ['header', 'disabled'],
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: 'header',
                optionType: 'button',
            },
        },
        header: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        extra: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
    },
};

var ArrayTable$1 = {
    type: 'object',
    properties: {
        bordered: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        showHeader: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
            'x-component-props': {
                defaultChecked: true,
            },
        },
        sticky: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
        size: {
            type: 'string',
            enum: ['large', 'small', 'middle'],
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
                defaultValue: 'small',
            },
        },
        tableLayout: {
            type: 'string',
            enum: ['auto', 'fixed'],
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: 'auto',
                optionType: 'button',
            },
        },
    },
};
var Column = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        align: {
            type: 'string',
            enum: ['left', 'right', 'center'],
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: 'left',
                optionType: 'button',
            },
        },
        colSpan: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        width: {
            type: 'number',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
        },
        fixed: {
            type: 'string',
            enum: ['left', 'right', false],
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                optionType: 'button',
            },
        },
    },
};
var Addition = {
    type: 'object',
    properties: {
        method: {
            type: 'string',
            enum: ['push', 'unshift'],
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            'x-component-props': {
                defaultValue: 'push',
                optionType: 'button',
            },
        },
        defaultValue: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'ValueInput',
        },
    },
};
ArrayTable$1.Column = Column;
ArrayTable$1.Addition = Addition;

var ArrayCards$1 = Card$1;
ArrayCards$1.Addition = ArrayTable$1.Addition;

var Slot$1 = {
    type: 'object',
    properties: {
        slotName: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
    },
};

var AllSchemas = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Input: Input$1,
  Text: Text$1,
  FormLayout: FormLayout$1,
  CSSStyle: CSSStyle,
  Form: Form$1,
  FormItem: FormItem,
  Select: Select$1,
  Card: Card$1,
  Cascader: Cascader$1,
  Checkbox: Checkbox$1,
  Radio: Radio$1,
  DatePicker: DatePicker$1,
  NumberPicker: NumberPicker$1,
  Password: Password$1,
  Rate: Rate$1,
  Slider: Slider$1,
  CommonTimePickerAPI: CommonTimePickerAPI,
  TimePicker: TimePicker$1,
  TreeSelect: TreeSelect$1,
  Transfer: Transfer$1,
  Upload: Upload$1,
  Switch: Switch$1,
  FormGrid: FormGrid$1,
  Space: Space$1,
  FormTab: FormTab$1,
  FormCollapse: FormCollapse$1,
  ArrayTable: ArrayTable$1,
  ArrayCards: ArrayCards$1,
  Slot: Slot$1
});

var createComponentSchema = function (component, decorator) {
    return {
        'component-group': component && {
            type: 'void',
            'x-component': 'CollapseItem',
            'x-reactions': {
                fulfill: {
                    state: {
                        visible: '{{!!$form.values["x-component"]}}',
                    },
                },
            },
            properties: {
                'x-component-props': component,
            },
        },
        'decorator-group': decorator && {
            type: 'void',
            'x-component': 'CollapseItem',
            'x-component-props': { defaultExpand: false },
            'x-reactions': {
                fulfill: {
                    state: {
                        visible: '{{!!$form.values["x-decorator"]}}',
                    },
                },
            },
            properties: {
                'x-decorator-props': decorator,
            },
        },
        'component-style-group': {
            type: 'void',
            'x-component': 'CollapseItem',
            'x-component-props': { defaultExpand: false },
            'x-reactions': {
                fulfill: {
                    state: {
                        visible: '{{!!$form.values["x-component"]}}',
                    },
                },
            },
            properties: {
                'x-component-props.style': CSSStyle,
            },
        },
        'decorator-style-group': {
            type: 'void',
            'x-component': 'CollapseItem',
            'x-component-props': { defaultExpand: false },
            'x-reactions': {
                fulfill: {
                    state: {
                        visible: '{{!!$form.values["x-decorator"]}}',
                    },
                },
            },
            properties: {
                'x-decorator-props.style': CSSStyle,
            },
        },
    };
};
var createFieldSchema = function (component, decorator) {
    if (decorator === void 0) { decorator = FormItem; }
    return {
        type: 'object',
        properties: __assign({ 'field-group': {
                type: 'void',
                'x-component': 'CollapseItem',
                properties: {
                    name: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                    },
                    title: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                    },
                    description: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input.TextArea',
                    },
                    'x-display': {
                        type: 'string',
                        enum: ['visible', 'hidden', 'none', ''],
                        'x-decorator': 'FormItem',
                        'x-component': 'Select',
                        'x-component-props': {
                            defaultValue: 'visible',
                        },
                    },
                    'x-pattern': {
                        type: 'string',
                        enum: ['editable', 'disabled', 'readOnly', 'readPretty', ''],
                        'x-decorator': 'FormItem',
                        'x-component': 'Select',
                        'x-component-props': {
                            defaultValue: 'editable',
                        },
                    },
                    default: {
                        'x-decorator': 'FormItem',
                        'x-component': 'ValueInput',
                    },
                    enum: {
                        'x-decorator': 'FormItem',
                        'x-component': DataSourceSetter,
                    },
                    'x-reactions': {
                        'x-decorator': 'FormItem',
                        'x-component': ReactionsSetter,
                    },
                    'x-validator': {
                        type: 'array',
                        'x-component': ValidatorSetter,
                    },
                    required: {
                        type: 'boolean',
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                    },
                },
            } }, createComponentSchema(component, decorator)),
    };
};
var createVoidFieldSchema = function (component, decorator) {
    if (decorator === void 0) { decorator = FormItem; }
    return {
        type: 'object',
        properties: __assign({ 'field-group': {
                type: 'void',
                'x-component': 'CollapseItem',
                properties: {
                    name: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                    },
                    title: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-reactions': {
                            fulfill: {
                                state: {
                                    hidden: '{{$form.values["x-decorator"] !== "FormItem"}}',
                                },
                            },
                        },
                    },
                    description: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input.TextArea',
                        'x-reactions': {
                            fulfill: {
                                state: {
                                    hidden: '{{$form.values["x-decorator"] !== "FormItem"}}',
                                },
                            },
                        },
                    },
                    'x-display': {
                        type: 'string',
                        enum: ['visible', 'hidden', 'none', ''],
                        'x-decorator': 'FormItem',
                        'x-component': 'Select',
                        'x-component-props': {
                            defaultValue: 'visible',
                        },
                    },
                    'x-pattern': {
                        type: 'string',
                        enum: ['editable', 'disabled', 'readOnly', 'readPretty', ''],
                        'x-decorator': 'FormItem',
                        'x-component': 'Select',
                        'x-component-props': {
                            defaultValue: 'editable',
                        },
                    },
                    'x-reactions': {
                        'x-decorator': 'FormItem',
                        'x-component': ReactionsSetter,
                    },
                    'x-decorator': {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': FormItemSwitcher,
                    },
                },
            } }, createComponentSchema(component, decorator)),
    };
};

var genFormStyle = function (prefixCls, token) {
    var _a, _b, _c;
    var antPrefix = 'ant';
    return _a = {},
        _a[".".concat(prefixCls)] = (_b = {},
            _b["\n            .".concat(antPrefix, "-input,\n            .").concat(antPrefix, "-input-number,\n            .").concat(antPrefix, "-input-affix-wrapper,\n            .").concat(antPrefix, "-cascader-picker,\n            .").concat(antPrefix, "-picker-input,\n            .").concat(antPrefix, "-picker,\n            .").concat(antPrefix, "-cascader-picker-label,\n            .").concat(antPrefix, "-slider,\n            .").concat(antPrefix, "-checkbox,\n            .").concat(antPrefix, "-rate,\n            .").concat(antPrefix, "-switch,\n            .").concat(antPrefix, "-radio,\n            .").concat(antPrefix, "-radio-wrapper,\n            .").concat(antPrefix, "-checkbox-group,\n            .").concat(antPrefix, "-checkbox-wrapper,\n            .").concat(antPrefix, "-radio-group,\n            .").concat(antPrefix, "-upload,\n            .").concat(antPrefix, "-transfer,\n            .").concat(antPrefix, "-select,\n            .").concat(antPrefix, "-select-selector\n            ")] = (_c = {
                    pointerEvents: "none"
                },
                _c["input"] = {
                    pointerEvents: "none",
                },
                _c),
            _b[".anticon svg "] = {
                pointerEvents: 'none',
            },
            _b),
        _a;
};

// import './styles.less'
var Form = observer$1(function (props) {
    var prefix = usePrefix('designable-form');
    var _a = useCssInJs({ prefix: prefix, styleFun: genFormStyle }), hashId = _a.hashId, wrapSSR = _a.wrapSSR;
    var form = useMemo(function () {
        return createForm({
            designable: true,
        });
    }, []);
    return wrapSSR(React.createElement(Form$3, __assign({}, props, { style: __assign({}, props.style), className: cls(prefix, hashId), form: form }), props.children));
});
Form.Behavior = createBehavior({
    name: 'Form',
    selector: function (node) { return node.componentName === 'Form'; },
    designerProps: function (node) {
        return {
            draggable: !node.isRoot,
            cloneable: !node.isRoot,
            deletable: !node.isRoot,
            droppable: true,
            propsSchema: {
                type: 'object',
                properties: __assign(__assign({}, FormLayout$1.properties), { style: CSSStyle }),
            },
            defaultProps: {
                labelCol: 6,
                wrapperCol: 12,
            },
        };
    },
    designerLocales: Form$2,
});
Form.Resource = createResource({
    title: { 'zh-CN': '表单', 'en-US': 'Form' },
    icon: 'FormLayoutSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'object',
                'x-component': 'Form',
            },
        },
    ],
});

var Input = Input$3;
Input.Behavior = createBehavior({
    name: 'Input',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Input'; },
    designerProps: {
        propsSchema: createFieldSchema(Input$1),
    },
    designerLocales: Input$2,
}, {
    name: 'Input.TextArea',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Input.TextArea'; },
    designerProps: {
        propsSchema: createFieldSchema(Input$1.TextArea),
    },
    designerLocales: TextArea,
});
Input.Resource = createResource({
    icon: 'InputSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'string',
                title: 'Input',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
            },
        },
    ],
}, {
    icon: 'TextAreaSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'string',
                title: 'TextArea',
                'x-decorator': 'FormItem',
                'x-component': 'Input.TextArea',
            },
        },
    ],
});

var Select = Select$3;
Select.Behavior = createBehavior({
    name: 'Select',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Select'; },
    designerProps: {
        propsSchema: createFieldSchema(Select$1),
    },
    designerLocales: Select$2,
});
Select.Resource = createResource({
    icon: 'SelectSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                title: 'Select',
                'x-decorator': 'FormItem',
                'x-component': 'Select',
            },
        },
    ],
});

var TreeSelect = TreeSelect$3;
TreeSelect.Behavior = createBehavior({
    name: 'TreeSelect',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'TreeSelect'; },
    designerProps: {
        propsSchema: createFieldSchema(TreeSelect$1),
    },
    designerLocales: TreeSelect$2,
});
TreeSelect.Resource = createResource({
    icon: 'TreeSelectSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                title: 'TreeSelect',
                'x-decorator': 'FormItem',
                'x-component': 'TreeSelect',
            },
        },
    ],
});

var Cascader = Cascader$3;
Cascader.Behavior = createBehavior({
    name: 'Cascader',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Cascader'; },
    designerProps: {
        propsSchema: createFieldSchema(Cascader$1),
    },
    designerLocales: Cascader$2,
});
Cascader.Resource = createResource({
    icon: 'CascaderSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                title: 'Cascader',
                'x-decorator': 'FormItem',
                'x-component': 'Cascader',
            },
        },
    ],
});

var Checkbox = Checkbox$2;
Checkbox.Behavior = createBehavior({
    name: 'Checkbox.Group',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Checkbox.Group'; },
    designerProps: {
        propsSchema: createFieldSchema(Checkbox$1.Group),
    },
    designerLocales: CheckboxGroup,
});
Checkbox.Resource = createResource({
    icon: 'CheckboxGroupSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'Array<string | number>',
                title: 'Checkbox Group',
                'x-decorator': 'FormItem',
                'x-component': 'Checkbox.Group',
                enum: [
                    { label: '选项1', value: 1 },
                    { label: '选项2', value: 2 },
                ],
            },
        },
    ],
});

var Radio = Radio$2;
Radio.Behavior = createBehavior({
    name: 'Radio.Group',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Radio.Group'; },
    designerProps: {
        propsSchema: createFieldSchema(Radio$1.Group),
    },
    designerLocales: RadioGroup,
});
Radio.Resource = createResource({
    icon: 'RadioGroupSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'string | number',
                title: 'Radio Group',
                'x-decorator': 'FormItem',
                'x-component': 'Radio.Group',
                enum: [
                    { label: '选项1', value: 1 },
                    { label: '选项2', value: 2 },
                ],
            },
        },
    ],
});

var Slider = Slider$3;
Slider.Behavior = createBehavior({
    name: 'Slider',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Slider'; },
    designerProps: {
        propsSchema: createFieldSchema(Slider$1),
    },
    designerLocales: Slider$2,
});
Slider.Resource = createResource({
    icon: 'SliderSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'number',
                title: 'Slider',
                'x-decorator': 'FormItem',
                'x-component': 'Slider',
            },
        },
    ],
});

var Rate = Rate$3;
Rate.Behavior = createBehavior({
    name: 'Rate',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Rate'; },
    designerProps: {
        propsSchema: createFieldSchema(Rate$1),
    },
    designerLocales: Rate$2,
});
Rate.Resource = createResource({
    icon: 'RateSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'number',
                title: 'Rate',
                'x-decorator': 'FormItem',
                'x-component': 'Rate',
            },
        },
    ],
});

var NumberPicker = NumberPicker$3;
NumberPicker.Behavior = createBehavior({
    name: 'NumberPicker',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'NumberPicker'; },
    designerProps: {
        propsSchema: createFieldSchema(NumberPicker$1),
    },
    designerLocales: NumberPicker$2,
});
NumberPicker.Resource = createResource({
    icon: 'NumberPickerSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'number',
                title: 'NumberPicker',
                'x-decorator': 'FormItem',
                'x-component': 'NumberPicker',
            },
        },
    ],
});

var Transfer = Transfer$3;
Transfer.Behavior = createBehavior({
    name: 'Transfer',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Transfer'; },
    designerProps: {
        propsSchema: createFieldSchema(Transfer$1),
    },
    designerLocales: Transfer$2,
});
Transfer.Resource = createResource({
    icon: 'TransferSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                title: 'Transfer',
                'x-decorator': 'FormItem',
                'x-component': 'Transfer',
            },
        },
    ],
});

var Password = Password$3;
Password.Behavior = createBehavior({
    name: 'Password',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Password'; },
    designerProps: {
        propsSchema: createFieldSchema(Password$1),
    },
    designerLocales: Password$2,
});
Password.Resource = createResource({
    icon: 'PasswordSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                title: 'Password',
                'x-decorator': 'FormItem',
                'x-component': 'Password',
            },
        },
    ],
});

var DatePicker = DatePicker$3;
DatePicker.Behavior = createBehavior({
    name: 'DatePicker',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'DatePicker'; },
    designerProps: {
        propsSchema: createFieldSchema(DatePicker$1),
    },
    designerLocales: DatePicker$2,
}, {
    name: 'DatePicker.RangePicker',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'DatePicker.RangePicker'; },
    designerProps: {
        propsSchema: createFieldSchema(DatePicker$1.RangePicker),
    },
    designerLocales: DateRangePicker,
});
DatePicker.Resource = createResource({
    icon: 'DatePickerSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'string',
                title: 'DatePicker',
                'x-decorator': 'FormItem',
                'x-component': 'DatePicker',
            },
        },
    ],
}, {
    icon: 'DateRangePickerSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'string[]',
                title: 'DateRangePicker',
                'x-decorator': 'FormItem',
                'x-component': 'DatePicker.RangePicker',
            },
        },
    ],
});

var TimePicker = TimePicker$3;
TimePicker.Behavior = createBehavior({
    name: 'TimePicker',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'TimePicker'; },
    designerProps: {
        propsSchema: createFieldSchema(TimePicker$1),
    },
    designerLocales: TimePicker$2,
}, {
    name: 'TimePicker.RangePicker',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'TimePicker.RangePicker'; },
    designerProps: {
        propsSchema: createFieldSchema(TimePicker$1.RangePicker),
    },
    designerLocales: TimeRangePicker,
});
TimePicker.Resource = createResource({
    icon: 'TimePickerSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'string',
                title: 'TimePicker',
                'x-decorator': 'FormItem',
                'x-component': 'TimePicker',
            },
        },
    ],
}, {
    icon: 'TimeRangePickerSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'string[]',
                title: 'TimeRangePicker',
                'x-decorator': 'FormItem',
                'x-component': 'TimePicker.RangePicker',
            },
        },
    ],
});

var Upload = Upload$3;
Upload.Behavior = createBehavior({
    name: 'Upload',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Upload'; },
    designerProps: {
        propsSchema: createFieldSchema(Upload$1),
    },
    designerLocales: Upload$2,
}, {
    name: 'Upload.Dragger',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Upload.Dragger'; },
    designerProps: {
        propsSchema: createFieldSchema(Upload$1.Dragger),
    },
    designerLocales: UploadDragger,
});
Upload.Resource = createResource({
    icon: 'UploadSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'Array<object>',
                title: 'Upload',
                'x-decorator': 'FormItem',
                'x-component': 'Upload',
                'x-component-props': {
                    textContent: 'Upload',
                },
            },
        },
    ],
}, {
    icon: 'UploadDraggerSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'Array<object>',
                title: 'Drag Upload',
                'x-decorator': 'FormItem',
                'x-component': 'Upload.Dragger',
                'x-component-props': {
                    textContent: 'Click or drag file to this area to upload',
                },
            },
        },
    ],
});

//import { Switch as AntdSwitch } from 'antd';
var Switch = Switch$4;
Switch.Behavior = createBehavior({
    name: 'Switch',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Switch'; },
    designerProps: {
        propsSchema: createFieldSchema(Switch$1),
    },
    designerLocales: Switch$2,
});
Switch.Resource = createResource({
    icon: 'SwitchSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'boolean',
                title: 'Switch',
                'x-decorator': 'FormItem',
                'x-component': 'Switch',
            },
        },
    ],
});

var genTextStyle = function (prefixCls, token) {
    var _a, _b;
    return _a = {},
        _a[".".concat(prefixCls)] = (_b = {},
            _b["&:empty::before"] = {
                content: 'Please Input',
                display: 'block',
                opacity: 0.6,
            },
            _b["&:focus"] = {
                padding: "4px",
            },
            _b),
        _a;
};

var Text = function (props) {
    var tagName = props.mode === 'normal' || !props.mode ? 'div' : props.mode;
    var prefix = 'dn-text';
    var _a = useCssInJs({ prefix: prefix, styleFun: genTextStyle }), hashId = _a.hashId, wrapSSR = _a.wrapSSR;
    return wrapSSR(React.createElement(tagName, __assign(__assign({}, props), { className: cls(props.className, prefix, hashId), 'data-content-editable': 'x-component-props.content' }), props.content));
};
Text.Behavior = createBehavior({
    name: 'Text',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Text'; },
    designerProps: {
        propsSchema: createVoidFieldSchema(Text$1),
    },
    designerLocales: Text$2,
});
Text.Resource = createResource({
    icon: 'TextSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'string',
                'x-component': 'Text',
            },
        },
    ],
});

var Card = function (props) {
    return (React.createElement(Card$3, __assign({}, props, { title: React.createElement("span", { "data-content-editable": "x-component-props.title" }, props.title) }), props.children));
};
Card.Behavior = createBehavior({
    name: 'Card',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Card'; },
    designerProps: {
        droppable: true,
        propsSchema: createVoidFieldSchema(Card$1),
    },
    designerLocales: Card$2,
});
Card.Resource = createResource({
    icon: 'CardSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'Card',
                'x-component-props': {
                    title: 'Title',
                },
            },
        },
    ],
});

var Space = withContainer(Space$3);
Space.Behavior = createBehavior({
    name: 'Space',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Space'; },
    designerProps: {
        droppable: true,
        inlineChildrenLayout: true,
        propsSchema: createVoidFieldSchema(Space$1),
    },
    designerLocales: Space$2,
});
Space.Resource = createResource({
    icon: 'SpaceSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'Space',
            },
        },
    ],
});

var ObjectContainer = Container;
ObjectContainer.Behavior = createBehavior({
    name: 'Object',
    extends: ['Field'],
    selector: function (node) { return node.props.type === 'object'; },
    designerProps: {
        droppable: true,
        propsSchema: createFieldSchema(),
    },
    designerLocales: ObjectLocale,
});
ObjectContainer.Resource = createResource({
    icon: 'ObjectSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'object',
            },
        },
    ],
});

var LoadTemplate = function (props) {
    var _a;
    return (React.createElement(NodeActionsWidget, null, (_a = props.actions) === null || _a === void 0 ? void 0 : _a.map(function (action, key) {
        return React.createElement(NodeActionsWidget.Action, __assign({}, action, { key: key }));
    })));
};

var matchComponent = function (node, name, context) {
    var _a;
    if (name === '*')
        return true;
    var componentName = (_a = node === null || node === void 0 ? void 0 : node.props) === null || _a === void 0 ? void 0 : _a['x-component'];
    if (typeof name === 'function')
        return name(componentName || '', node, context);
    if (Array.isArray(name))
        return name.includes(componentName);
    return componentName === name;
};
var matchChildComponent = function (node, name, context) {
    var _a;
    if (name === '*')
        return true;
    var componentName = (_a = node === null || node === void 0 ? void 0 : node.props) === null || _a === void 0 ? void 0 : _a['x-component'];
    if (!componentName)
        return false;
    if (typeof name === 'function')
        return name(componentName || '', node, context);
    if (Array.isArray(name))
        return name.includes(componentName);
    return componentName.indexOf("".concat(name, ".")) > -1;
};
var queryNodesByComponentPath = function (node, path) {
    if ((path === null || path === void 0 ? void 0 : path.length) === 0)
        return [];
    if ((path === null || path === void 0 ? void 0 : path.length) === 1) {
        if (matchComponent(node, path[0])) {
            return [node];
        }
    }
    return matchComponent(node, path[0])
        ? node.children.reduce(function (buf, child) {
            return buf.concat(queryNodesByComponentPath(child, path.slice(1)));
        }, [])
        : [];
};
var findNodeByComponentPath = function (node, path) {
    if ((path === null || path === void 0 ? void 0 : path.length) === 0)
        return;
    if ((path === null || path === void 0 ? void 0 : path.length) === 1) {
        if (matchComponent(node, path[0])) {
            return node;
        }
    }
    if (matchComponent(node, path[0])) {
        for (var i = 0; i < node.children.length; i++) {
            var next = findNodeByComponentPath(node.children[i], path.slice(1));
            if (next) {
                return next;
            }
        }
    }
};
var hasNodeByComponentPath = function (node, path) { return !!findNodeByComponentPath(node, path); };
var createNodeId = function (designer, id) {
    var _a;
    return _a = {},
        _a[designer.props.nodeIdAttrName] = id,
        _a;
};
var createEnsureTypeItemsNode = function (type) { return function (node) {
    var objectNode = node.children.find(function (child) { return child.props['type'] === type; });
    if (objectNode) {
        return objectNode;
    }
    else {
        var newObjectNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: type,
            },
        });
        node.prepend(newObjectNode);
        return newObjectNode;
    }
}; };

var useDropTemplate = function (name, getChildren) {
    return useDesigner(function (designer) {
        return designer.subscribeTo(AppendNodeEvent, function (event) {
            var _a = event.data, source = _a.source, target = _a.target;
            if (Array.isArray(target))
                return;
            if (!Array.isArray(source))
                return;
            if (matchComponent(target, function (key) {
                return key === name &&
                    source.every(function (child) { return !matchChildComponent(child, name); });
            }) &&
                target.children.length === 0) {
                target.setChildren.apply(target, __spreadArray([], __read(getChildren(source)), false));
                return false;
            }
        });
    });
};

var createArrayBehavior = function (name) {
    return createBehavior({
        name: name,
        extends: ['Field'],
        selector: function (node) { return node.props['x-component'] === name; },
        designerProps: {
            droppable: true,
            propsSchema: createFieldSchema(AllSchemas[name]),
        },
        designerLocales: AllLocales[name],
    }, {
        name: "".concat(name, ".Addition"),
        extends: ['Field'],
        selector: function (node) { return node.props['x-component'] === "".concat(name, ".Addition"); },
        designerProps: {
            allowDrop: function (parent) {
                return parent.props['x-component'] === name;
            },
            propsSchema: createVoidFieldSchema(AllSchemas[name].Addition),
        },
        designerLocales: ArrayAddition,
    }, {
        name: "".concat(name, ".Remove"),
        extends: ['Field'],
        selector: function (node) { return node.props['x-component'] === "".concat(name, ".Remove"); },
        designerProps: {
            allowDrop: function (parent) {
                return parent.props['x-component'] === name;
            },
            propsSchema: createVoidFieldSchema(),
        },
        designerLocales: ArrayRemove,
    }, {
        name: "".concat(name, ".Index"),
        extends: ['Field'],
        selector: function (node) { return node.props['x-component'] === "".concat(name, ".Index"); },
        designerProps: {
            allowDrop: function (parent) {
                return parent.props['x-component'] === name;
            },
            propsSchema: createVoidFieldSchema(),
        },
        designerLocales: ArrayIndex,
    }, {
        name: "".concat(name, ".MoveUp"),
        extends: ['Field'],
        selector: function (node) { return node.props['x-component'] === "".concat(name, ".MoveUp"); },
        designerProps: {
            allowDrop: function (parent) {
                return parent.props['x-component'] === name;
            },
            propsSchema: createVoidFieldSchema(),
        },
        designerLocales: ArrayMoveUp,
    }, {
        name: "".concat(name, ".MoveDown"),
        extends: ['Field'],
        selector: function (node) { return node.props['x-component'] === "".concat(name, ".MoveDown"); },
        designerProps: {
            allowDrop: function (parent) {
                return parent.props['x-component'] === 'ArrayCards';
            },
            propsSchema: createVoidFieldSchema(),
        },
        designerLocales: ArrayMoveDown,
    });
};

var genArrayCardsStyle = function (prefixCls, token) {
    var _a;
    return _a = {},
        _a[".".concat(prefixCls)] = {
            backgroundColor: token.colorBgContainer,
        },
        _a;
};

// import './styles.less'
var ensureObjectItemsNode$1 = createEnsureTypeItemsNode('object');
var isArrayCardsOperation = function (name) {
    return name === 'ArrayCards.Remove' ||
        name === 'ArrayCards.MoveDown' ||
        name === 'ArrayCards.MoveUp';
};
var ArrayCards = observer$1(function (props) {
    var node = useTreeNode();
    var nodeId = useNodeIdProps();
    var designer = useDropTemplate('ArrayCards', function (source) {
        var indexNode = new TreeNode({
            componentName: node.componentName,
            props: {
                type: 'void',
                'x-component': 'ArrayCards.Index',
            },
        });
        var additionNode = new TreeNode({
            componentName: node.componentName,
            props: {
                type: 'void',
                title: 'Addition',
                'x-component': 'ArrayCards.Addition',
            },
        });
        var removeNode = new TreeNode({
            componentName: node.componentName,
            props: {
                type: 'void',
                title: 'Addition',
                'x-component': 'ArrayCards.Remove',
            },
        });
        var moveDownNode = new TreeNode({
            componentName: node.componentName,
            props: {
                type: 'void',
                title: 'Addition',
                'x-component': 'ArrayCards.MoveDown',
            },
        });
        var moveUpNode = new TreeNode({
            componentName: node.componentName,
            props: {
                type: 'void',
                title: 'Addition',
                'x-component': 'ArrayCards.MoveUp',
            },
        });
        var objectNode = new TreeNode({
            componentName: node.componentName,
            props: {
                type: 'object',
            },
            children: __spreadArray(__spreadArray([indexNode], __read(source), false), [removeNode, moveDownNode, moveUpNode], false),
        });
        return [objectNode, additionNode];
    });
    var _a = useCssInJs({
        prefix: 'dn-array-cards',
        styleFun: genArrayCardsStyle,
    }), hashId = _a.hashId, wrapSSR = _a.wrapSSR;
    var renderCard = function () {
        if (node.children.length === 0)
            return React.createElement(DroppableWidget, null);
        var additions = queryNodesByComponentPath(node, [
            'ArrayCards',
            'ArrayCards.Addition',
        ]);
        var indexes = queryNodesByComponentPath(node, [
            'ArrayCards',
            '*',
            'ArrayCards.Index',
        ]);
        var operations = queryNodesByComponentPath(node, [
            'ArrayCards',
            '*',
            isArrayCardsOperation,
        ]);
        var children = queryNodesByComponentPath(node, [
            'ArrayCards',
            '*',
            function (name) { return name.indexOf('ArrayCards.') === -1; },
        ]);
        return (React.createElement(ArrayBase, { disabled: true },
            React.createElement(ArrayBase.Item, { index: 0, record: null },
                React.createElement(Card$3, __assign({}, props, { title: React.createElement(Fragment, null,
                        indexes.map(function (node, key) { return (React.createElement(TreeNodeWidget, { key: key, node: node })); }),
                        React.createElement("span", { "data-content-editable": "x-component-props.title" }, props.title)), className: cls('ant-formily-array-cards-item', props.className), extra: React.createElement(Fragment, null,
                        operations.map(function (node) { return (React.createElement(TreeNodeWidget, { key: node.id, node: node })); }),
                        props.extra) }),
                    React.createElement("div", __assign({}, createNodeId(designer, ensureObjectItemsNode$1(node).id)), children.length ? (children.map(function (node) { return (React.createElement(TreeNodeWidget, { key: node.id, node: node })); })) : (React.createElement(DroppableWidget, { hasChildren: false }))))),
            additions.map(function (node) { return (React.createElement(TreeNodeWidget, { key: node.id, node: node })); })));
    };
    return wrapSSR(React.createElement("div", __assign({}, nodeId, { className: cls('dn-array-cards', hashId) }),
        renderCard(),
        React.createElement(LoadTemplate, { actions: [
                {
                    title: node.getMessage('addIndex'),
                    icon: 'AddIndex',
                    onClick: function () {
                        if (hasNodeByComponentPath(node, [
                            'ArrayCards',
                            '*',
                            'ArrayCards.Index',
                        ]))
                            return;
                        var indexNode = new TreeNode({
                            componentName: node.componentName,
                            props: {
                                type: 'void',
                                'x-component': 'ArrayCards.Index',
                            },
                        });
                        ensureObjectItemsNode$1(node).append(indexNode);
                    },
                },
                {
                    title: node.getMessage('addOperation'),
                    icon: 'AddOperation',
                    onClick: function () {
                        var oldAdditionNode = findNodeByComponentPath(node, [
                            'ArrayCards',
                            'ArrayCards.Addition',
                        ]);
                        if (!oldAdditionNode) {
                            var additionNode = new TreeNode({
                                componentName: node.componentName,
                                props: {
                                    type: 'void',
                                    title: 'Addition',
                                    'x-component': 'ArrayCards.Addition',
                                },
                            });
                            ensureObjectItemsNode$1(node).insertAfter(additionNode);
                        }
                        var oldRemoveNode = findNodeByComponentPath(node, [
                            'ArrayCards',
                            '*',
                            'ArrayCards.Remove',
                        ]);
                        var oldMoveDownNode = findNodeByComponentPath(node, [
                            'ArrayCards',
                            '*',
                            'ArrayCards.MoveDown',
                        ]);
                        var oldMoveUpNode = findNodeByComponentPath(node, [
                            'ArrayCards',
                            '*',
                            'ArrayCards.MoveUp',
                        ]);
                        if (!oldRemoveNode) {
                            ensureObjectItemsNode$1(node).append(new TreeNode({
                                componentName: node.componentName,
                                props: {
                                    type: 'void',
                                    'x-component': 'ArrayCards.Remove',
                                },
                            }));
                        }
                        if (!oldMoveDownNode) {
                            ensureObjectItemsNode$1(node).append(new TreeNode({
                                componentName: node.componentName,
                                props: {
                                    type: 'void',
                                    'x-component': 'ArrayCards.MoveDown',
                                },
                            }));
                        }
                        if (!oldMoveUpNode) {
                            ensureObjectItemsNode$1(node).append(new TreeNode({
                                componentName: node.componentName,
                                props: {
                                    type: 'void',
                                    'x-component': 'ArrayCards.MoveUp',
                                },
                            }));
                        }
                    },
                },
            ] })));
});
ArrayBase.mixin(ArrayCards);
ArrayCards.Behavior = createArrayBehavior('ArrayCards');
ArrayCards.Resource = createResource({
    icon: 'ArrayCardsSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'array',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayCards',
                'x-component-props': {
                    title: "Title",
                },
            },
        },
    ],
});

var genArrayTableStyle = function (prefixCls, token) {
    var _a;
    return _a = {},
        _a[".".concat(prefixCls)] = {
            backgroundColor: token.colorBgContainer,
        },
        _a;
};

var ensureObjectItemsNode = createEnsureTypeItemsNode('object');
var HeaderCell = function (props) {
    var _a;
    return (React.createElement("th", __assign({}, props, { "data-designer-node-id": (_a = props.className.match(/data-id\:([^\s]+)/)) === null || _a === void 0 ? void 0 : _a[1] }), props.children));
};
var BodyCell = function (props) {
    var _a;
    return (React.createElement("td", __assign({}, props, { "data-designer-node-id": (_a = props.className.match(/data-id\:([^\s]+)/)) === null || _a === void 0 ? void 0 : _a[1] }), props.children));
};
var ArrayTable = observer$1(function (props) {
    var node = useTreeNode();
    var nodeId = useNodeIdProps();
    var prefix = 'dn-array-table';
    var _a = useCssInJs({
        prefix: prefix,
        styleFun: genArrayTableStyle,
    }), hashId = _a.hashId, wrapSSR = _a.wrapSSR;
    useDropTemplate('ArrayTable', function (source) {
        var sortHandleNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                    title: "Title",
                },
            },
            children: [
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'ArrayTable.SortHandle',
                    },
                },
            ],
        });
        var indexNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                    title: "Title",
                },
            },
            children: [
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'ArrayTable.Index',
                    },
                },
            ],
        });
        var columnNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                    title: "Title",
                },
            },
            children: source.map(function (node) {
                node.props.title = undefined;
                return node;
            }),
        });
        var operationNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                    title: "Title",
                },
            },
            children: [
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'ArrayTable.Remove',
                    },
                },
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'ArrayTable.MoveDown',
                    },
                },
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'ArrayTable.MoveUp',
                    },
                },
            ],
        });
        var objectNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'object',
            },
            children: [sortHandleNode, indexNode, columnNode, operationNode],
        });
        var additionNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'void',
                title: 'Addition',
                'x-component': 'ArrayTable.Addition',
            },
        });
        return [objectNode, additionNode];
    });
    var columns = queryNodesByComponentPath(node, [
        'ArrayTable',
        '*',
        'ArrayTable.Column',
    ]);
    var additions = queryNodesByComponentPath(node, [
        'ArrayTable',
        'ArrayTable.Addition',
    ]);
    var defaultRowKey = function () {
        return node.id;
    };
    var renderTable = function () {
        if (node.children.length === 0)
            return React.createElement(DroppableWidget, null);
        return (React.createElement(ArrayBase, { disabled: true },
            React.createElement(Table, __assign({ size: "small", bordered: true }, props, { scroll: { x: '100%' }, className: cls('ant-formily-array-table', props.className), style: __assign({ marginBottom: 10 }, props.style), rowKey: defaultRowKey, dataSource: [{ id: '1' }], pagination: false, components: {
                    header: {
                        cell: HeaderCell,
                    },
                    body: {
                        cell: BodyCell,
                    },
                } }),
                columns.map(function (node) {
                    var children = node.children.map(function (child) {
                        return React.createElement(TreeNodeWidget, { node: child, key: child.id });
                    });
                    var props = node.props['x-component-props'];
                    return (React.createElement(Table.Column, __assign({}, props, { title: React.createElement("div", { "data-content-editable": "x-component-props.title" }, props.title), dataIndex: node.id, className: "data-id:".concat(node.id), key: node.id, render: function (value, record, key) {
                            return (React.createElement(ArrayBase.Item, { key: key, index: key, record: null }, children.length > 0 ? children : 'Droppable'));
                        } })));
                }),
                columns.length === 0 && (React.createElement(Table.Column, { render: function () { return React.createElement(DroppableWidget, null); } }))),
            additions.map(function (child) {
                return React.createElement(TreeNodeWidget, { node: child, key: child.id });
            })));
    };
    useDropTemplate('ArrayTable.Column', function (source) {
        return source.map(function (node) {
            node.props.title = undefined;
            return node;
        });
    });
    return wrapSSR(React.createElement("div", __assign({}, nodeId, { className: cls(prefix, hashId) }),
        renderTable(),
        React.createElement(LoadTemplate, { actions: [
                {
                    title: node.getMessage('addSortHandle'),
                    icon: 'AddSort',
                    onClick: function () {
                        if (hasNodeByComponentPath(node, [
                            'ArrayTable',
                            '*',
                            'ArrayTable.Column',
                            'ArrayTable.SortHandle',
                        ]))
                            return;
                        var tableColumn = new TreeNode({
                            componentName: 'Field',
                            props: {
                                type: 'void',
                                'x-component': 'ArrayTable.Column',
                                'x-component-props': {
                                    title: "Title",
                                },
                            },
                            children: [
                                {
                                    componentName: 'Field',
                                    props: {
                                        type: 'void',
                                        'x-component': 'ArrayTable.SortHandle',
                                    },
                                },
                            ],
                        });
                        ensureObjectItemsNode(node).prepend(tableColumn);
                    },
                },
                {
                    title: node.getMessage('addIndex'),
                    icon: 'AddIndex',
                    onClick: function () {
                        if (hasNodeByComponentPath(node, [
                            'ArrayTable',
                            '*',
                            'ArrayTable.Column',
                            'ArrayTable.Index',
                        ]))
                            return;
                        var tableColumn = new TreeNode({
                            componentName: 'Field',
                            props: {
                                type: 'void',
                                'x-component': 'ArrayTable.Column',
                                'x-component-props': {
                                    title: "Title",
                                },
                            },
                            children: [
                                {
                                    componentName: 'Field',
                                    props: {
                                        type: 'void',
                                        'x-component': 'ArrayTable.Index',
                                    },
                                },
                            ],
                        });
                        var sortNode = findNodeByComponentPath(node, [
                            'ArrayTable',
                            '*',
                            'ArrayTable.Column',
                            'ArrayTable.SortHandle',
                        ]);
                        if (sortNode) {
                            sortNode.parent.insertAfter(tableColumn);
                        }
                        else {
                            ensureObjectItemsNode(node).prepend(tableColumn);
                        }
                    },
                },
                {
                    title: node.getMessage('addColumn'),
                    icon: 'AddColumn',
                    onClick: function () {
                        var operationNode = findNodeByComponentPath(node, [
                            'ArrayTable',
                            '*',
                            'ArrayTable.Column',
                            function (name) {
                                return (name === 'ArrayTable.Remove' ||
                                    name === 'ArrayTable.MoveDown' ||
                                    name === 'ArrayTable.MoveUp');
                            },
                        ]);
                        var tableColumn = new TreeNode({
                            componentName: 'Field',
                            props: {
                                type: 'void',
                                'x-component': 'ArrayTable.Column',
                                'x-component-props': {
                                    title: "Title",
                                },
                            },
                        });
                        if (operationNode) {
                            operationNode.parent.insertBefore(tableColumn);
                        }
                        else {
                            ensureObjectItemsNode(node).append(tableColumn);
                        }
                    },
                },
                {
                    title: node.getMessage('addOperation'),
                    icon: 'AddOperation',
                    onClick: function () {
                        var oldOperationNode = findNodeByComponentPath(node, [
                            'ArrayTable',
                            '*',
                            'ArrayTable.Column',
                            function (name) {
                                return (name === 'ArrayTable.Remove' ||
                                    name === 'ArrayTable.MoveDown' ||
                                    name === 'ArrayTable.MoveUp');
                            },
                        ]);
                        var oldAdditionNode = findNodeByComponentPath(node, [
                            'ArrayTable',
                            'ArrayTable.Addition',
                        ]);
                        if (!oldOperationNode) {
                            var operationNode = new TreeNode({
                                componentName: 'Field',
                                props: {
                                    type: 'void',
                                    'x-component': 'ArrayTable.Column',
                                    'x-component-props': {
                                        title: "Title",
                                    },
                                },
                                children: [
                                    {
                                        componentName: 'Field',
                                        props: {
                                            type: 'void',
                                            'x-component': 'ArrayTable.Remove',
                                        },
                                    },
                                    {
                                        componentName: 'Field',
                                        props: {
                                            type: 'void',
                                            'x-component': 'ArrayTable.MoveDown',
                                        },
                                    },
                                    {
                                        componentName: 'Field',
                                        props: {
                                            type: 'void',
                                            'x-component': 'ArrayTable.MoveUp',
                                        },
                                    },
                                ],
                            });
                            ensureObjectItemsNode(node).append(operationNode);
                        }
                        if (!oldAdditionNode) {
                            var additionNode = new TreeNode({
                                componentName: 'Field',
                                props: {
                                    type: 'void',
                                    title: 'Addition',
                                    'x-component': 'ArrayTable.Addition',
                                },
                            });
                            ensureObjectItemsNode(node).insertAfter(additionNode);
                        }
                    },
                },
            ] })));
});
ArrayBase.mixin(ArrayTable);
ArrayTable.Behavior = createBehavior(createArrayBehavior('ArrayTable'), {
    name: 'ArrayTable.Column',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'ArrayTable.Column'; },
    designerProps: {
        droppable: true,
        allowDrop: function (node) {
            var _a, _b;
            return node.props['type'] === 'object' &&
                ((_b = (_a = node.parent) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b['x-component']) === 'ArrayTable';
        },
        propsSchema: createVoidFieldSchema(ArrayTable$1.Column),
    },
    designerLocales: ArrayTableColumn,
});
ArrayTable.Resource = createResource({
    icon: 'ArrayTableSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'array',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayTable',
            },
        },
    ],
});

var parseTabs = function (parent) {
    var tabs = [];
    parent.children.forEach(function (node) {
        if (matchComponent(node, 'FormTab.TabPane')) {
            tabs.push(node);
        }
    });
    return tabs;
};
var getCorrectActiveKey = function (activeKey, tabs) {
    if (tabs.length === 0)
        return;
    if (tabs.some(function (node) { return node.id === activeKey; }))
        return activeKey;
    return tabs[tabs.length - 1].id;
};
var FormTab = observer$1(function (props) {
    var _a = __read(useState(), 2), activeKey = _a[0], setActiveKey = _a[1];
    var nodeId = useNodeIdProps();
    var node = useTreeNode();
    var designer = useDropTemplate('FormTab', function (source) {
        return [
            new TreeNode({
                componentName: 'Field',
                props: {
                    type: 'void',
                    'x-component': 'FormTab.TabPane',
                    'x-component-props': {
                        tab: "Unnamed Title",
                    },
                },
                children: source,
            }),
        ];
    });
    var tabs = parseTabs(node);
    var renderTabs = function () {
        var _a;
        if (!((_a = node.children) === null || _a === void 0 ? void 0 : _a.length))
            return React.createElement(DroppableWidget, null);
        return (React.createElement(Tabs, __assign({}, props, { activeKey: getCorrectActiveKey(activeKey, tabs), onChange: function (id) {
                setActiveKey(id);
            } }), tabs.map(function (tab) {
            var _a;
            var props = tab.props['x-component-props'] || {};
            return (React.createElement(Tabs.TabPane, __assign({}, props, { style: __assign({}, props.style), tab: React.createElement("span", { "data-content-editable": "x-component-props.tab", "data-content-editable-node-id": tab.id }, props.tab), key: tab.id }), React.createElement('div', (_a = {},
                _a[designer.props.nodeIdAttrName] = tab.id,
                _a.style = {
                    padding: '20px 0',
                },
                _a), tab.children.length ? (React.createElement(TreeNodeWidget, { node: tab })) : (React.createElement(DroppableWidget, { node: tab })))));
        })));
    };
    return (React.createElement("div", __assign({}, nodeId),
        renderTabs(),
        React.createElement(LoadTemplate, { actions: [
                {
                    title: node.getMessage('addTabPane'),
                    icon: 'AddPanel',
                    onClick: function () {
                        var tabPane = new TreeNode({
                            componentName: 'Field',
                            props: {
                                type: 'void',
                                'x-component': 'FormTab.TabPane',
                                'x-component-props': {
                                    tab: "Unnamed Title",
                                },
                            },
                        });
                        node.append(tabPane);
                        setActiveKey(tabPane.id);
                    },
                },
            ] })));
});
FormTab.TabPane = function (props) {
    return React.createElement(Fragment, null, props.children);
};
FormTab.Behavior = createBehavior({
    name: 'FormTab',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'FormTab'; },
    designerProps: {
        droppable: true,
        allowAppend: function (target, source) {
            return target.children.length === 0 ||
                source.every(function (node) { return node.props['x-component'] === 'FormTab.TabPane'; });
        },
        propsSchema: createVoidFieldSchema(FormTab$1),
    },
    designerLocales: FormTab$2,
}, {
    name: 'FormTab.TabPane',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'FormTab.TabPane'; },
    designerProps: {
        droppable: true,
        allowDrop: function (node) { return node.props['x-component'] === 'FormTab'; },
        propsSchema: createVoidFieldSchema(FormTab$1.TabPane),
    },
    designerLocales: FormTabPane,
});
FormTab.Resource = createResource({
    icon: 'TabSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'FormTab',
            },
        },
    ],
});

var parseCollapse = function (parent) {
    var tabs = [];
    parent.children.forEach(function (node) {
        if (matchComponent(node, 'FormCollapse.CollapsePanel')) {
            tabs.push(node);
        }
    });
    return tabs;
};
var FormCollapse = observer$1(function (props) {
    var _a = __read(useState([]), 2), activeKey = _a[0], setActiveKey = _a[1];
    var node = useTreeNode();
    var nodeId = useNodeIdProps();
    var designer = useDropTemplate('FormCollapse', function (source) {
        var panelNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'FormCollapse.CollapsePanel',
                'x-component-props': {
                    header: "Unnamed Title",
                },
            },
            children: source,
        });
        setActiveKey(toArr(activeKey).concat(panelNode.id));
        return [panelNode];
    });
    var panels = parseCollapse(node);
    var renderCollapse = function () {
        var _a;
        if (!((_a = node.children) === null || _a === void 0 ? void 0 : _a.length))
            return React.createElement(DroppableWidget, null);
        return (React.createElement(Collapse, __assign({}, props, { activeKey: panels.map(function (tab) { return tab.id; }) }), panels.map(function (panel) {
            var _a;
            var props = panel.props['x-component-props'] || {};
            return (React.createElement(Collapse.Panel, __assign({}, props, { style: __assign({}, props.style), header: React.createElement("span", { "data-content-editable": "x-component-props.header", "data-content-editable-node-id": panel.id }, props.header), key: panel.id }), React.createElement('div', (_a = {},
                _a[designer.props.nodeIdAttrName] = panel.id,
                _a.style = {
                    padding: '20px 0',
                },
                _a), panel.children.length ? (React.createElement(TreeNodeWidget, { node: panel })) : (React.createElement(DroppableWidget, null)))));
        })));
    };
    return (React.createElement("div", __assign({}, nodeId),
        renderCollapse(),
        React.createElement(LoadTemplate, { actions: [
                {
                    title: node.getMessage('addCollapsePanel'),
                    icon: 'AddPanel',
                    onClick: function () {
                        var tabPane = new TreeNode({
                            componentName: 'Field',
                            props: {
                                type: 'void',
                                'x-component': 'FormCollapse.CollapsePanel',
                                'x-component-props': {
                                    header: "Unnamed Title",
                                },
                            },
                        });
                        node.append(tabPane);
                        var keys = toArr(activeKey);
                        setActiveKey(keys.concat(tabPane.id));
                    },
                },
            ] })));
});
FormCollapse.CollapsePanel = function (props) {
    return React.createElement(Fragment, null, props.children);
};
FormCollapse.Behavior = createBehavior({
    name: 'FormCollapse',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'FormCollapse'; },
    designerProps: {
        droppable: true,
        allowAppend: function (target, source) {
            return target.children.length === 0 ||
                source.every(function (node) { return node.props['x-component'] === 'FormCollapse.CollapsePanel'; });
        },
        propsSchema: createVoidFieldSchema(FormCollapse$1),
    },
    designerLocales: FormCollapse$2,
}, {
    name: 'FormCollapse.CollapsePanel',
    extends: ['Field'],
    selector: function (node) {
        return node.props['x-component'] === 'FormCollapse.CollapsePanel';
    },
    designerProps: {
        droppable: true,
        allowDrop: function (node) { return node.props['x-component'] === 'FormCollapse'; },
        propsSchema: createVoidFieldSchema(FormCollapse$1.CollapsePanel),
    },
    designerLocales: FormCollapsePanel,
});
FormCollapse.Resource = createResource({
    icon: 'CollapseSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'FormCollapse',
            },
        },
    ],
});

var FormGrid = observer(function (props) {
    var node = useTreeNode();
    var nodeId = useNodeIdProps();
    if (node.children.length === 0)
        return React.createElement(DroppableWidget, __assign({}, props));
    return (React.createElement("div", __assign({}, nodeId, { className: "dn-grid" }),
        React.createElement(FormGrid$3, __assign({}, props), props.children),
        React.createElement(LoadTemplate, { actions: [
                {
                    title: node.getMessage('addGridColumn'),
                    icon: 'AddColumn',
                    onClick: function () {
                        var column = new TreeNode({
                            componentName: 'Field',
                            props: {
                                type: 'void',
                                'x-component': 'FormGrid.GridColumn',
                            },
                        });
                        node.append(column);
                    },
                },
            ] })));
});
FormGrid.GridColumn = observer(function (_a) {
    var gridSpan = _a.gridSpan, props = __rest(_a, ["gridSpan"]);
    return (React.createElement(DroppableWidget, __assign({}, props, { "data-grid-span": gridSpan }), props.children));
});
FormGrid.Behavior = createBehavior({
    name: 'FormGrid',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'FormGrid'; },
    designerProps: {
        droppable: true,
        allowDrop: function (node) { return node.props['x-component'] !== 'FormGrid'; },
        propsSchema: createFieldSchema(FormGrid$1),
    },
    designerLocales: FormGrid$2,
}, {
    name: 'FormGrid.GridColumn',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'FormGrid.GridColumn'; },
    designerProps: {
        droppable: true,
        resizable: {
            width: function (node) {
                var _a, _b;
                var span = Number((_b = (_a = node.props['x-component-props']) === null || _a === void 0 ? void 0 : _a.gridSpan) !== null && _b !== void 0 ? _b : 1);
                return {
                    plus: function () {
                        if (span + 1 > 12)
                            return;
                        node.props['x-component-props'] =
                            node.props['x-component-props'] || {};
                        node.props['x-component-props'].gridSpan = span + 1;
                    },
                    minus: function () {
                        if (span - 1 < 1)
                            return;
                        node.props['x-component-props'] =
                            node.props['x-component-props'] || {};
                        node.props['x-component-props'].gridSpan = span - 1;
                    },
                };
            },
        },
        resizeXPath: 'x-component-props.gridSpan',
        resizeStep: 1,
        resizeMin: 1,
        resizeMax: 12,
        allowDrop: function (node) { return node.props['x-component'] === 'FormGrid'; },
        propsSchema: createFieldSchema(FormGrid$1.GridColumn),
    },
    designerLocales: FormGridColumn,
});
FormGrid.Resource = createResource({
    icon: 'GridSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'FormGrid',
            },
            children: [
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'FormGrid.GridColumn',
                    },
                },
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'FormGrid.GridColumn',
                    },
                },
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'FormGrid.GridColumn',
                    },
                },
            ],
        },
    ],
});

var FormLayout = withContainer(FormLayout$3);
FormLayout.Behavior = createBehavior({
    name: 'FormLayout',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'FormLayout'; },
    designerProps: {
        droppable: true,
        propsSchema: createVoidFieldSchema(FormLayout$1),
    },
    designerLocales: FormLayout$2,
});
FormLayout.Resource = createResource({
    icon: 'FormLayoutSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'FormLayout',
            },
        },
    ],
});

var genSlotStyle = function (prefixCls, token) {
    var _a;
    return _a = {},
        _a[".".concat(prefixCls)] = {},
        _a;
};

var Slot = function (_a) {
    var _b, _c, _d, _e;
    var slotName = _a.slotName, className = _a.className;
    var form = useForm();
    var prefix = 'dn-slot';
    var _f = useCssInJs({ prefix: prefix, styleFun: genSlotStyle }), hashId = _f.hashId, wrapSSR = _f.wrapSSR;
    return wrapSSR(React.createElement("div", { className: cls(prefix, className, hashId) }, ((_c = (_b = form.extConfig) === null || _b === void 0 ? void 0 : _b.slots) === null || _c === void 0 ? void 0 : _c[slotName]) ? ((_e = (_d = form.extConfig) === null || _d === void 0 ? void 0 : _d.slots) === null || _e === void 0 ? void 0 : _e[slotName](form)) : (React.createElement("div", { style: { backgroundColor: "#eee", padding: "4px" } },
        "\u63D2\u69FD\u5360\u4F4D ",
        slotName))));
};
Slot.Behavior = createBehavior({
    name: 'Slot',
    extends: ['Field'],
    selector: function (node) { return node.props['x-component'] === 'Slot'; },
    designerProps: {
        propsSchema: createVoidFieldSchema(Slot$1),
    },
    designerLocales: Slot$2,
});
Slot.Resource = createResource({
    icon: 'SlotSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'string',
                'x-component': 'Slot',
            },
        },
    ],
});

export { AllLocales, AllSchemas, ArrayCards, ArrayTable, Card, Cascader, Checkbox, DatePicker, Field, Form, FormCollapse, FormGrid, FormLayout, FormTab, Input, NumberPicker, ObjectContainer, Password, Radio, Rate, Select, Slider, Slot, Space, Switch, Text, TimePicker, Transfer, TreeSelect, Upload, createComponentSchema, createFieldSchema, createVoidFieldSchema };
