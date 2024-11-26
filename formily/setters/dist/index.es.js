import { GlobalRegistry } from '@form-created/core';
import React, { useMemo, Fragment, useState, useEffect } from 'react';
import cls from 'classnames';
import { Button, Tree, Modal, TreeSelect, Menu, Card, Tag, Tooltip, Select as Select$1 } from 'antd';
import { observable } from '@formily/reactive';
import { observer } from '@formily/reactive-react';
import { usePrefix, useToken, TextWidget, IconWidget, useTheme, useCssInJs, useSelectedNode } from '@form-created/react';
import { PlusOutlined } from '@ant-design/icons';
import { FormItem, Input, ArrayItems, Form, FormCollapse, Select, ArrayTable } from '@formily/antd-v5';
import { createForm, isVoidField } from '@formily/core';
import { createSchemaField, observer as observer$1, useField, SchemaContext, Schema } from '@formily/react';
import { ValueInput, MonacoInput, getNpmCDNRegistry, FoldItem } from '@form-created/react-settings-form';
import { clone, uid, toArr, isPlainObj, reduce } from '@formily/shared';
import { requestIdle } from '@form-created/shared';

var ValidatorFormats$2 = [
    { label: 'URL地址', value: 'url' },
    { label: '邮箱格式', value: 'email' },
    { label: '数字格式', value: 'number' },
    { label: '整数格式', value: 'integer' },
    { label: '身份证格式', value: 'idcard' },
    { label: '手机号格式', value: 'phone' },
    { label: '货币格式', value: 'money' },
    { label: '中文格式', value: 'zh' },
    { label: '日期格式', value: 'date' },
    { label: '邮编格式', value: 'zip' },
];
var zhCN = {
    'zh-CN': {
        settings: {
            'x-validator': {
                title: '校验规则',
                addValidatorRules: '添加校验规则',
                drawer: '配置规则',
                triggerType: {
                    title: '触发类型',
                    placeholder: '请选择',
                    dataSource: ['输入时', '聚焦时', '失焦时'],
                },
                format: {
                    title: '格式校验',
                    placeholder: '请选择',
                    dataSource: ValidatorFormats$2,
                },
                validator: {
                    title: '自定义校验器',
                    tooltip: '格式: function (value){ return "Error Message"}',
                },
                pattern: '正则表达式',
                len: '长度限制',
                max: '长度/数值小于',
                min: '长度/数值大于',
                exclusiveMaximum: '长度/数值小于等于',
                exclusiveMinimum: '长度/数值大于等于',
                whitespace: '不允许空白符',
                required: '是否必填',
                message: {
                    title: '错误消息',
                    tooltip: '错误消息只对当前规则集的一个内置规则生效，如果需要对不同内置规则定制错误消息，请拆分成多条规则',
                },
            },
        },
        SettingComponents: {
            DataSourceSetter: {
                nodeProperty: '节点属性',
                pleaseSelectNode: '请先选择左侧树节点',
                addKeyValuePair: '添加键值对',
                configureDataSource: '配置可选项',
                dataSource: '可选项',
                defaultTitle: '默认标题',
                dataSourceTree: '可选项节点树',
                addNode: '新增节点',
                label: '键名',
                value: '键值',
                item: '选项',
            },
            ReactionsSetter: {
                configureReactions: '配置响应器',
                relationsFields: '依赖字段',
                variableName: '变量名',
                variableNameValidateMessage: '不符合变量命名规则',
                pleaseInput: '请输入',
                sourceField: '来源字段',
                sourceProperty: '字段属性',
                variableType: '变量类型',
                operations: '操作',
                addRelationField: '添加依赖字段',
                propertyReactions: '属性响应(仅支持JS表达式)',
                actionReactions: '动作响应(高级，可选，支持JS语句)',
                visible: '显示/隐藏',
                hidden: 'UI隐藏',
                display: '展示状态',
                pattern: 'UI形态',
                title: '标题',
                description: '描述',
                value: '字段值',
                initialValue: '默认值',
                dataSource: '可选项',
                required: '是否必填',
                component: '组件',
                componentProps: '组件属性',
                decorator: '容器',
                decoratorProps: '容器属性',
                pleaseSelect: '请选择',
                expressionValueTypeIs: '表达式值类型为',
            },
            ValidatorSetter: {
                pleaseSelect: '请选择',
                formats: ValidatorFormats$2,
            },
        },
    },
};

var ValidatorFormats$1 = [
    { label: 'URL', value: 'url' },
    { label: 'Email', value: 'email' },
    { label: 'Number', value: 'number' },
    { label: 'Integer', value: 'integer' },
    { label: 'ID', value: 'idcard' },
    { label: 'Phone Number', value: 'phone' },
    { label: 'Currency', value: 'money' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Date', value: 'date' },
    { label: 'Zip', value: 'zip' },
];
var enUS = {
    'en-US': {
        settings: {
            'x-validator': {
                title: 'Validator',
                addValidatorRules: 'Add Validator Rules',
                drawer: 'Edit Rules',
                triggerType: {
                    title: 'Trigger Type',
                    placeholder: 'Please Select',
                    dataSource: ['onInput', 'onFocus', 'onBlur'],
                },
                format: {
                    title: 'Format',
                    placeholder: 'Please Select',
                    dataSource: ValidatorFormats$1,
                },
                validator: {
                    title: 'Custom Validator',
                    tooltip: 'Format: function (value){ return "Error Message"}',
                },
                pattern: 'RegExp',
                len: 'Length Limit',
                max: 'Length/Value Lt',
                min: 'Length/Value Gt',
                exclusiveMaximum: 'Length/Value Lte',
                exclusiveMinimum: 'Length/Value Gte',
                whitespace: 'No Whitespace',
                required: 'Required',
                message: {
                    title: 'Error Message',
                    tooltip: 'The error message is only effective for one built-in rule of the current rule set. If you need to customize the error message for different built-in rules, please split into multiple rules',
                },
            },
        },
        SettingComponents: {
            DataSourceSetter: {
                nodeProperty: 'Node Property',
                pleaseSelectNode: 'please select node from the tree on the left',
                addKeyValuePair: 'Add Key Value Pair',
                configureDataSource: 'Configure',
                dataSource: 'Options',
                defaultTitle: 'Default Title',
                dataSourceTree: 'Options Tree',
                addNode: 'Add Node',
                label: 'label',
                value: 'value',
                item: 'Item',
            },
            ReactionsSetter: {
                configureReactions: 'Configure',
                relationsFields: 'Associated Fields',
                variableName: 'Variable Name',
                variableNameValidateMessage: 'This is not a standard variable name',
                pleaseInput: 'Please Input',
                sourceField: 'Source Field',
                sourceProperty: 'Field Property',
                variableType: 'Variable Type',
                operations: 'Operations',
                addRelationField: 'Add Associated Field',
                propertyReactions: 'Property Reactions(Only Support Javascript Expression)',
                actionReactions: 'Action Reactions(Optional, Support Javascript Statement)',
                visible: 'Show/None',
                hidden: 'Show/UI Hidden',
                display: 'Display',
                pattern: 'Pattern',
                title: 'Title',
                description: 'Description',
                value: 'Value',
                initialValue: 'InitialValue',
                dataSource: 'Options',
                required: 'Required',
                component: 'Component',
                componentProps: 'Component Props',
                decorator: 'Decorator',
                decoratorProps: 'Decorator Props',
                pleaseSelect: 'Please Select',
                expressionValueTypeIs: 'Expression value type is',
            },
            ValidatorSetter: {
                pleaseSelect: 'Please Select',
                formats: ValidatorFormats$1,
            },
        },
    },
};

var ValidatorFormats = [
    { label: 'URL', value: 'url' },
    { label: '이메일', value: 'email' },
    { label: '숫자', value: 'number' },
    { label: '상수', value: 'integer' },
    { label: 'ID', value: 'idcard' },
    { label: '휴대폰 번호', value: 'phone' },
    { label: '통화', value: 'money' },
    { label: '중국', value: 'zh' },
    { label: '날짜', value: 'date' },
    { label: 'Zip', value: 'zip' },
];
var koKR = {
    'ko-KR': {
        settings: {
            'x-validator': {
                title: '유효성 검사 도구',
                addValidatorRules: '유효성 검사 규칙 추가',
                drawer: '규칙 수정',
                triggerType: {
                    title: '트리거 타입',
                    placeholder: '선택하세요',
                    dataSource: ['onInput', 'onFocus', 'onBlur'],
                },
                format: {
                    title: '포맷',
                    placeholder: '선택하세요',
                    dataSource: ValidatorFormats,
                },
                validator: {
                    title: '사용자 정의 유효성 검사 도구',
                    tooltip: '형식: function (value){ return "Error Message"}',
                },
                pattern: 'RegExp',
                len: '길이 제한',
                max: '길이/값 Lt',
                min: '길이/값 Gt',
                exclusiveMaximum: '길이/값 Lte',
                exclusiveMinimum: '길이/값 Gte',
                whitespace: '공백 없음',
                required: '필수 항목',
                message: {
                    title: '오류 메시지',
                    tooltip: '오류 메시지는 현재의 규칙 셋의 하나의 빌트인 규칙에 대해서만 적용됩니다. 여러 빌트인 규칙에 대한 오류 메시지를 사용자 정의해야 하는 경우 여러 규칙으로 분할하세요.',
                },
            },
        },
        SettingComponents: {
            DataSourceSetter: {
                nodeProperty: '노드 속성',
                pleaseSelectNode: '왼쪽에 있는 트리에서 노드를 선택하세요.',
                addKeyValuePair: '키/값 쌍 추가',
                configureDataSource: '구성',
                dataSource: 'Options',
                defaultTitle: '기본 제목',
                dataSourceTree: 'Options 트리',
                addNode: '노드 추가',
                label: '레이블',
                value: '값',
                item: '아이템',
            },
            ReactionsSetter: {
                configureReactions: '구성',
                relationsFields: '관련 필드',
                variableName: '변수 이름',
                variableNameValidateMessage: '표준 변수 이름이 아닙니다.',
                pleaseInput: '입력해주세요',
                sourceField: 'Source Field',
                sourceProperty: '필드 속성',
                variableType: '변수 타입',
                operations: '작업',
                addRelationField: '관련 필드 추가',
                propertyReactions: '구성 리엑션(자바스크립트 표현식만 지원함)',
                actionReactions: '액션 리엑션(선택사항, 자바스크립트 구문을 지원함)',
                visible: '보기/없음',
                hidden: '보기/UI 숨기기',
                display: '디스플레이',
                pattern: '패턴',
                title: '제목',
                description: '설명',
                value: '값',
                initialValue: '초기값',
                dataSource: 'Options',
                required: '필수 항목',
                component: '컴포넌트',
                componentProps: '컴포넌트 속성',
                decorator: '테코레이터',
                decoratorProps: '테코레이터 속성',
                pleaseSelect: '선택하세요',
                expressionValueTypeIs: '표현식 값 타입은',
            },
            ValidatorSetter: {
                pleaseSelect: '선택하세요',
                formats: ValidatorFormats,
            },
        },
    },
};

GlobalRegistry.registerDesignerLocales(zhCN, enUS, koKR);

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

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
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

var Header = observer(function (_a) {
    var extra = _a.extra, title = _a.title;
    var prefix = usePrefix('data-source-setter');
    var hashId = useToken().hashId;
    return (React.createElement("div", { className: cls("".concat(prefix + '-layout-item-header'), hashId) },
        React.createElement("div", { className: cls("".concat(prefix + '-layout-item-title'), hashId) }, title),
        extra));
});

var traverseTree = function (data, callback) {
    var _a, _b;
    for (var i = 0; i < data.length; i++) {
        callback(data[i], i, data);
        if ((_a = data[i]) === null || _a === void 0 ? void 0 : _a.children) {
            traverseTree((_b = data[i]) === null || _b === void 0 ? void 0 : _b.children, callback);
        }
    }
};
var transformValueToData = function (value) {
    var data = clone(value);
    traverseTree(data, function (item, i, dataSource) {
        var e_1, _a;
        var dataItem = {
            key: '',
            duplicateKey: '',
            map: [],
            children: [],
        };
        try {
            for (var _b = __values(Object.entries(dataSource[i] || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value_1 = _d[1];
                if (key !== 'children')
                    dataItem.map.push({ label: key, value: value_1 });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var uuid = uid();
        dataItem.key = uuid;
        dataItem.duplicateKey = uuid;
        dataItem.children = dataSource[i].children || [];
        dataSource[i] = dataItem;
    });
    return data;
};
var transformDataToValue = function (data) {
    var value = clone(data);
    traverseTree(value, function (item, i, dataSource) {
        var _a;
        var valueItem = {
            children: [],
        };
        toArr(dataSource[i].map).forEach(function (item) {
            if (item.label)
                valueItem[item.label] = item.value;
        });
        valueItem.children = ((_a = dataSource[i]) === null || _a === void 0 ? void 0 : _a.children) || [];
        dataSource[i] = valueItem;
    });
    return value;
};

// import './styles.less'
var SchemaField$1 = createSchemaField({
    components: {
        FormItem: FormItem,
        Input: Input,
        ArrayItems: ArrayItems,
        ValueInput: ValueInput,
    },
});
var DataSettingPanel = observer(function (props) {
    var allowExtendOption = props.allowExtendOption, effects = props.effects;
    var prefix = usePrefix('data-source-setter');
    var hashId = useToken().hashId;
    var form = useMemo(function () {
        var values;
        traverseTree(props.treeDataSource.dataSource, function (dataItem) {
            if (dataItem.key === props.treeDataSource.selectedKey) {
                values = dataItem;
            }
        });
        return createForm({
            values: values,
            effects: effects,
        });
    }, [
        props.treeDataSource.selectedKey,
        props.treeDataSource.dataSource.length,
    ]);
    if (!props.treeDataSource.selectedKey)
        return (React.createElement(Fragment, null,
            React.createElement(Header, { title: React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.nodeProperty" }), extra: null }),
            React.createElement("div", { className: "".concat(cls(prefix + '-layout-item-content', hashId)) },
                React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.pleaseSelectNode" }))));
    return (React.createElement(Fragment, null,
        React.createElement(Header, { title: React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.nodeProperty" }), extra: allowExtendOption ? (React.createElement(Button, { type: "text", onClick: function () {
                    form.setFieldState('map', function (state) {
                        state.value.push({});
                    });
                }, icon: React.createElement(PlusOutlined, null) },
                React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.addKeyValuePair" }))) : null }),
        React.createElement("div", { className: "".concat(cls(prefix + '-layout-item-content', hashId)) },
            React.createElement(Form, { form: form, labelWidth: 60, wrapperWidth: 160 },
                React.createElement(SchemaField$1, null,
                    React.createElement(SchemaField$1.Array, { name: "map", "x-component": "ArrayItems" },
                        React.createElement(SchemaField$1.Object, { "x-decorator": "ArrayItems.Item", "x-decorator-props": { type: 'divide' } },
                            React.createElement(SchemaField$1.String, { title: React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.label" }), "x-decorator": "FormItem", "x-disabled": !allowExtendOption, name: "label", "x-component": "Input" }),
                            React.createElement(SchemaField$1.String, { title: React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.value" }), "x-decorator": "FormItem", name: "value", "x-component": "ValueInput" }),
                            React.createElement(SchemaField$1.Void, { "x-component": "ArrayItems.Remove", "x-visible": allowExtendOption, "x-component-props": {
                                    style: {
                                        margin: 5,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                } }))))))));
});

var Title = observer(function (props) {
    var prefix = usePrefix('data-source-setter-node-title');
    var hashId = useToken().hashId;
    var getTitleValue = function (dataSource) {
        var optionalKeys = ['label', 'title', 'header'];
        var nodeTitle;
        optionalKeys.some(function (key) {
            var _a;
            var title = (_a = toArr(dataSource).find(function (item) { return item.label === key; })) === null || _a === void 0 ? void 0 : _a.value;
            if (title !== undefined) {
                nodeTitle = title;
                return true;
            }
            return false;
        });
        if (nodeTitle === undefined) {
            toArr(dataSource || []).some(function (item) {
                if (item.value && typeof item.value === 'string') {
                    nodeTitle = item.value;
                    return true;
                }
                return false;
            });
        }
        return nodeTitle;
    };
    var renderTitle = function (dataSource) {
        var nodeTitle = getTitleValue(dataSource);
        if (nodeTitle === undefined)
            return (React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.defaultTitle" }));
        else
            return nodeTitle + '';
    };
    return (React.createElement("div", { className: cls(prefix, hashId) },
        React.createElement("span", { style: { marginRight: '5px' } }, renderTitle((props === null || props === void 0 ? void 0 : props.map) || [])),
        React.createElement(IconWidget, { className: cls(prefix + '-icon', hashId), infer: "Remove", onClick: function () {
                var _a;
                var newDataSource = clone((_a = props === null || props === void 0 ? void 0 : props.treeDataSource) === null || _a === void 0 ? void 0 : _a.dataSource);
                traverseTree(newDataSource || [], function (dataItem, i, data) {
                    if (data[i].key === props.duplicateKey)
                        toArr(data).splice(i, 1);
                });
                props.treeDataSource.dataSource = newDataSource;
            } })));
});

var limitTreeDrag = function (_a) {
    var dropPosition = _a.dropPosition;
    if (dropPosition === 0) {
        return false;
    }
    return true;
};
var TreePanel = observer(function (props) {
    var prefix = usePrefix('data-source-setter');
    var hashId = useToken().hashId;
    var dropHandler = function (info) {
        var _a, _b;
        var dropKey = (_a = info.node) === null || _a === void 0 ? void 0 : _a.key;
        var dragKey = (_b = info.dragNode) === null || _b === void 0 ? void 0 : _b.key;
        var dropPos = info.node.pos.split('-');
        var dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
        var data = __spreadArray([], __read(props.treeDataSource.dataSource), false);
        // Find dragObject
        var dragObj;
        traverseTree(data, function (item, index, arr) {
            if (arr[index].key === dragKey) {
                arr.splice(index, 1);
                dragObj = item;
            }
        });
        if (!info.dropToGap) {
            traverseTree(data, function (item) {
                if (item.key === dropKey) {
                    item.children = item.children || [];
                    item.children.unshift(dragObj);
                }
            });
        }
        else if ((info.node.children || []).length > 0 &&
            info.node.expanded &&
            dropPosition === 1) {
            traverseTree(data, function (item) {
                if (item.key === dropKey) {
                    item.children = item.children || [];
                    item.children.unshift(dragObj);
                }
            });
        }
        else {
            var ar_1;
            var i_1;
            traverseTree(data, function (item, index, arr) {
                if (item.key === dropKey) {
                    ar_1 = arr;
                    i_1 = index;
                }
            });
            if (dropPosition === -1) {
                ar_1.splice(i_1, 0, dragObj);
            }
            else {
                ar_1.splice(i_1 + 1, 0, dragObj);
            }
        }
        props.treeDataSource.dataSource = data;
    };
    return (React.createElement(Fragment, null,
        React.createElement(Header, { title: React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.dataSourceTree" }), extra: React.createElement(Button, { type: "text", onClick: function () {
                    var _a;
                    var uuid = uid();
                    var dataSource = props.treeDataSource.dataSource;
                    var initialKeyValuePairs = ((_a = props.defaultOptionValue) === null || _a === void 0 ? void 0 : _a.map(function (item) { return (__assign({}, item)); })) || [
                        {
                            label: 'label',
                            value: "".concat(GlobalRegistry.getDesignerMessage("SettingComponents.DataSourceSetter.item"), " ").concat(dataSource.length + 1),
                        },
                        { label: 'value', value: uuid },
                    ];
                    props.treeDataSource.dataSource = dataSource.concat({
                        key: uuid,
                        duplicateKey: uuid,
                        map: initialKeyValuePairs,
                        children: [],
                    });
                }, icon: React.createElement(IconWidget, { infer: "Add" }) },
                React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.addNode" })) }),
        React.createElement("div", { className: cls("".concat(prefix + '-layout-item-content'), hashId) },
            React.createElement(Tree, { blockNode: true, draggable: true, allowDrop: props.allowTree ? function () { return true; } : limitTreeDrag, defaultExpandAll: true, defaultExpandParent: true, autoExpandParent: true, showLine: { showLeafIcon: false }, treeData: props.treeDataSource.dataSource, onDragEnter: function () { }, onDrop: dropHandler, titleRender: function (titleProps) {
                    return (React.createElement(Title, __assign({}, titleProps, { treeDataSource: props.treeDataSource })));
                }, onSelect: function (selectedKeys) {
                    if (selectedKeys[0]) {
                        props.treeDataSource.selectedKey = selectedKeys[0].toString();
                    }
                } }))));
});

var genDataSourceSetterStyle = function (prefixCls, token) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {},
                _b["::-webkit-scrollbar"] = {
                    width: '5px',
                    height: '5px',
                },
                _b["::-webkit-scrollbar-thumb"] = {
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    borderRadius: 0,
                    transition: 'all 0.25s ease-in-out',
                },
                _b["::-webkit-scrollbar-thumb:hover"] = {
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                },
                _b["&-node-title"] = (_c = {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    },
                    _c["&-icon"] = (_d = {
                            transition: "all 0.15s ease-in-out",
                            opacity: 0
                        },
                        _d["&:hover"] = {
                            color: token.colorPrimary,
                        },
                        _d),
                    _c),
                _b["&-layout"] = (_e = {
                        display: 'flex',
                        justifyContent: 'space-around',
                        border: "1px solid ".concat(token.colorBorder),
                        borderRadius: '3px'
                    },
                    _e[".ant-tree-treenode"] = (_f = {
                            paddingRight: '10px',
                            whiteSpace: 'nowrap'
                        },
                        _f["&:hover"] = (_g = {},
                            _g[".dn-data-source-setter-node-title-icon"] = {
                                opacity: 1,
                            },
                            _g),
                        _f),
                    _e["&-item"] = (_h = {
                            position: 'relative'
                        },
                        _h["&.left"] = {
                            width: "40%",
                            borderRight: "1px solid ".concat(token.colorBorder),
                        },
                        _h["&.right"] = {
                            width: '60%',
                        },
                        _h["&-header"] = {
                            display: 'flex',
                            flex: 'none',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: '40px',
                            padding: '8px 12px 9px',
                            borderBottom: "1px solid ".concat(token.colorBorder),
                            borderRadius: '2px 2px 0 0',
                        },
                        _h["&-content"] = {
                            padding: '2%',
                            height: '300px',
                            maxHeight: '300px',
                            overflow: 'scroll',
                        },
                        _h),
                    _e),
                _b),
            _a),
    ];
};

var DataSourceSetter = observer(function (props) {
    var className = props.className, _a = props.value, value = _a === void 0 ? [] : _a, onChange = props.onChange, _b = props.allowTree, allowTree = _b === void 0 ? true : _b, _c = props.allowExtendOption, allowExtendOption = _c === void 0 ? true : _c, defaultOptionValue = props.defaultOptionValue, _d = props.effects, effects = _d === void 0 ? function () { } : _d;
    var theme = useTheme();
    var prefix = usePrefix('data-source-setter');
    var _e = useCssInJs({
        prefix: prefix,
        styleFun: genDataSourceSetterStyle,
    }), hashId = _e.hashId, wrapSSR = _e.wrapSSR;
    var _f = __read(useState(false), 2), modalVisible = _f[0], setModalVisible = _f[1];
    var treeDataSource = useMemo(function () {
        return observable({
            dataSource: transformValueToData(value),
            selectedKey: '',
        });
    }, [value, modalVisible]);
    var openModal = function () { return setModalVisible(true); };
    var closeModal = function () { return setModalVisible(false); };
    return wrapSSR(React.createElement(Fragment, null,
        React.createElement(Button, { block: true, onClick: openModal },
            React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.configureDataSource" })),
        React.createElement(Modal, { title: React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.configureDataSource" }), width: "65%", bodyStyle: { padding: 10 }, transitionName: "", maskTransitionName: "", open: modalVisible, onCancel: closeModal, onOk: function () {
                onChange(transformDataToValue(treeDataSource.dataSource));
                closeModal();
            } },
            React.createElement("div", { className: "".concat(cls(prefix, className, hashId), " ").concat(cls(prefix + '-' + theme, hashId), " ").concat(cls(prefix + '-layout', hashId)) },
                React.createElement("div", { className: "".concat(cls(prefix + '-layout-item left', hashId)) },
                    React.createElement(TreePanel, { defaultOptionValue: defaultOptionValue, allowTree: allowTree, treeDataSource: treeDataSource })),
                React.createElement("div", { className: "".concat(cls(prefix + '-layout-item right', hashId)) },
                    React.createElement(DataSettingPanel, { allowExtendOption: allowExtendOption, treeDataSource: treeDataSource, effects: effects }))))));
});

var transformDataSource = function (node) {
    var currentNode = node;
    var dots = function (count) {
        var dots = '';
        for (var i = 0; i < count; i++) {
            dots += '.';
        }
        return dots;
    };
    var targetPath = function (parentNode, targetNode) {
        var path = [];
        var transform = function (node) {
            if (node && node !== parentNode) {
                path.push(node.props.name || node.id);
            }
            else {
                transform(node.parent);
            }
        };
        transform(targetNode);
        return path.reverse().join('.');
    };
    var hasNoVoidChildren = function (node) {
        var _a;
        return (_a = node.children) === null || _a === void 0 ? void 0 : _a.some(function (node) {
            if (node.props.type !== 'void' && node !== currentNode)
                return true;
            return hasNoVoidChildren(node);
        });
    };
    var findRoot = function (node) {
        var _a;
        if (!(node === null || node === void 0 ? void 0 : node.parent))
            return node;
        if (((_a = node === null || node === void 0 ? void 0 : node.parent) === null || _a === void 0 ? void 0 : _a.componentName) !== node.componentName)
            return node.parent;
        return findRoot(node.parent);
    };
    var findArrayParent = function (node) {
        if (!(node === null || node === void 0 ? void 0 : node.parent))
            return;
        if (node.parent.props.type === 'array')
            return node.parent;
        if (node.parent === root)
            return;
        return findArrayParent(node.parent);
    };
    var transformRelativePath = function (arrayNode, targetNode) {
        if (targetNode.depth === currentNode.depth)
            return ".".concat(targetNode.props.name || targetNode.id);
        return "".concat(dots(currentNode.depth - arrayNode.depth), "[].").concat(targetPath(arrayNode, targetNode));
    };
    var transformChildren = function (children, path) {
        if (path === void 0) { path = []; }
        return children.reduce(function (buf, node) {
            var _a;
            if (node === currentNode)
                return buf;
            if (node.props.type === 'array' && !node.contains(currentNode))
                return buf;
            if (node.props.type === 'void' && !hasNoVoidChildren(node))
                return buf;
            var currentPath = path.concat(node.props.name || node.id);
            var arrayNode = findArrayParent(node);
            var label = node.props.title ||
                ((_a = node.props['x-component-props']) === null || _a === void 0 ? void 0 : _a.title) ||
                node.props.name ||
                node.designerProps.title;
            var value = arrayNode
                ? transformRelativePath(arrayNode, node)
                : currentPath.join('.');
            return buf.concat({
                label: label,
                value: value,
                node: node,
                children: transformChildren(node.children, currentPath),
            });
        }, []);
    };
    var root = findRoot(node);
    if (root) {
        return transformChildren(root.children);
    }
    return [];
};
var PathSelector = function (props) {
    var baseNode = useSelectedNode();
    var dataSource = transformDataSource(baseNode);
    var findNode = function (dataSource, value) {
        var _a;
        for (var i = 0; i < dataSource.length; i++) {
            var item = dataSource[i];
            if (item.value === value)
                return item.node;
            if ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) {
                var fondedChild = findNode(item.children, value);
                if (fondedChild)
                    return fondedChild;
            }
        }
    };
    return (React.createElement(TreeSelect, __assign({}, props, { onChange: function (value) {
            props.onChange(value, findNode(dataSource, value));
        }, treeDefaultExpandAll: true, treeData: dataSource })));
};

var GlobalHelper = "\n/** \n * You can use the built-in context variables\n * \n * 1. `$self` is the current Field Model \n * \n * 2. `$form` is the current Form Model \n * \n * 3. `$deps` is the dependencies value\n * \n * 4. `$observable` function is used to create an persistent observable state object\n *\n * 5. `$memo` function is is used to create a persistent data\n * \n * 6. `$effect` function is used to handle side-effect logic\n * \n * 7. `$props` function is used to set component props to current field\n * \n * Document Links\n * \n * https://react.formilyjs.org/api/shared/schema#%E5%86%85%E7%BD%AE%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%BD%9C%E7%94%A8%E5%9F%9F\n **/\n";
var BooleanHelper = "\n/** \n * Example 1\n * Static Boolean\n **/\n\nfalse\n\n/** \n * Example 2\n * Equal Calculation\n **/\n\n$deps.VariableName === 'TARGET_VALUE'\n\n/** \n * Example 3\n * Not Equal Calculation\n **/\n\n$deps.VariableName !== 'TARGET_VALUE'\n\n/** \n * Example 4\n * And Logic Calculation\n **/\n\n$deps.VariableName1 && $deps.VariableName2\n\n/** \n * Example 5\n * Grater Logic Calculation\n **/\n\n$deps.VariableName > 100\n\n/** \n * Example 6\n * Not Logic Calculation\n **/\n\n!$deps.VariableName\n\n".concat(GlobalHelper, "\n");
var DisplayHelper = "\n/** \n * Example 1\n * Static Mode\n **/\n\n'none'\n\n/** \n * Example 2\n * Equal Condition Associated\n **/\n\n$deps.VariableName === 'TARGET_VALUE' ? 'visible' : 'none'\n\n/** \n * Example 3\n * Not Equal Condition Associated\n **/\n\n$deps.VariableName !== 'TARGET_VALUE' ? 'visible' : 'hidden'\n\n/** \n * Example 4\n * And Logic Condition Associated\n **/\n\n$deps.VariableName1 && $deps.VariableName2 ? 'visible' : 'none'\n\n/** \n * Example 5\n * Grater Logic Condition Associated\n **/\n\n$deps.VariableName > 100 ? 'visible' : 'hidden'\n\n/** \n * Example 6\n * Not Logic Condition Associated\n **/\n\n!$deps.VariableName ? 'visible' : 'none'\n\n".concat(GlobalHelper, "\n");
var PatternHelper = "\n/** \n * Example 1\n * Static Mode\n **/\n\n'readPretty'\n\n/** \n * Example 2\n * Equal Condition Associated\n **/\n\n$deps.VariableName === 'TARGET_VALUE' ? 'editable' : 'disabled'\n\n/** \n * Example 3\n * Not Equal Condition Associated\n **/\n\n$deps.VariableName !== 'TARGET_VALUE' ? 'editable' : 'readOnly'\n\n/** \n * Example 4\n * And Logic Condition Associated\n **/\n\n$deps.VariableName1 && $deps.VariableName2 ? 'editable' : 'readPretty'\n\n/** \n * Example 5\n * Grater Logic Condition Associated\n **/\n\n$deps.VariableName > 100 ? 'editable' : 'readOnly'\n\n/** \n * Example 6\n * Not Logic Condition Associated\n **/\n\n!$deps.VariableName ? 'editable' : 'disabled'\n\n".concat(GlobalHelper, "\n");
var StringHelper = "\n/** \n * Example 1\n * Static String\n **/\n\n'Normal String Text'\n\n/** \n * Example 2\n * Associated String\n **/\n\n$deps.VariableName === 'TARGET_VALUE' ? 'Associated String Text' : ''\n\n".concat(GlobalHelper, "\n");
var AnyHelper = "\n/** \n * Example 1\n * String Type\n **/\n\n'String'\n\n/** \n * Example 2\n * String Array\n **/\n\n['StringArray']\n\n/** \n * Example 3\n * Object Array\n **/\n\n[{ key: 'ObjectArray' }]\n\n/** \n * Example 4\n * Boolean\n **/\n\ntrue\n\n/** \n * Example 5\n * RegExp\n **/\n\n/d+/\n\n/** \n * Example 1\n * Associated String Value\n **/\n\n$deps.VariableName + 'Compose String'\n\n/** \n * Example 2\n * Associated Array Value\n **/\n\n[ $deps.VariableName ]\n\n/** \n * Example 3\n * Associated Object Value\n **/\n\n{\n  key : $deps.VariableName\n}\n\n/** \n * Example 4\n * Associated Boolean Value\n **/\n\n!$deps.VariableName\n\n".concat(GlobalHelper, "\n");
var DataSourceHelper = "\n/** \n * Example 1\n * Static DataSource\n **/\n\n[\n  { label : \"item1\", value: \"1\" },\n  { label : \"item2\", value: \"2\" }\n]\n\n/** \n * Example 2\n * Associated DataSource\n **/\n\n[\n  { label : \"item1\", value: \"1\" },\n  { label : \"item2\", value: \"2\" },\n  ...$deps.VariableName\n]\n\n".concat(GlobalHelper, "\n");
var ComponentPropsHelper = "\n/** \n * Example 1\n * Static Props\n **/\n\n{\n  placeholder: \"This is placeholder\"\n}\n\n/** \n * Example 2\n * Associated Props\n **/\n\n{\n  placeholder: $deps.VariableName\n}\n\n".concat(GlobalHelper, "\n");
var DecoratorPropsHelper = "\n/** \n * Example 1\n * Static Props\n **/\n\n{\n  labelCol:6\n}\n\n/** \n * Example 2\n * Associated Props\n **/\n\n{\n  labelCol: $deps.VariableName\n}\n\n".concat(GlobalHelper, "\n");
var FulfillRunHelper = "\n/** \n * Example 1\n * Async Select\n **/\n\n$effect(()=>{\n  $self.loading = true\n  fetch('//some.domain/getSomething')\n    .then(response=>response.json())\n    .then(({ data })=>{\n      $self.loading = false\n      $self.dataSource = data\n    },()=>{\n      $self.loading = false\n    })\n},[])\n  \n\n/** \n * Example 2\n * Async Search Select\n **/\n\nconst state = $observable({\n  keyword:''\n})\n\n$props({\n  onSearch(keyword){\n    state.keyword = keyword\n  }\n})\n\n$effect(()=>{\n  $self.loading = true\n  fetch(`//some.domain/getSomething?q=${state.keyword}`)\n    .then(response=>response.json())\n    .then(({ data })=>{\n      $self.loading = false\n      $self.dataSource = data\n    },()=>{\n      $self.loading = false\n    })\n},[ state.keyword ])\n\n/** \n * Example 3\n * Async Associated Select\n **/\n\nconst state = $observable({\n  keyword:''\n})\n\n$props({\n  onSearch(keyword){\n    state.keyword = keyword\n  }\n})\n\n$effect(()=>{\n  $self.loading = true\n  fetch(`//some.domain/getSomething?q=${state.keyword}&other=${$deps.VariableName}`)\n    .then(response=>response.json())\n    .then(({ data })=>{\n      $self.loading = false\n      $self.dataSource = data\n    },()=>{\n      $self.loading = false\n    })\n},[ state.keyword, $deps.VariableName ])\n\n".concat(GlobalHelper, "\n");

var FieldProperties = [
    {
        key: 'visible',
        type: 'boolean',
        helpCode: BooleanHelper,
    },
    { key: 'hidden', type: 'boolean', helpCode: BooleanHelper },
    {
        key: 'display',
        type: '"visible" | "hidden" | "none"',
        helpCode: DisplayHelper,
    },
    {
        key: 'pattern',
        type: '"editable" | "disabled" | "readOnly" | "readPretty"',
        helpCode: PatternHelper,
    },
    { key: 'title', type: 'string', helpCode: StringHelper },
    { key: 'description', type: 'string', helpCode: StringHelper },
    { key: 'value', type: 'any', helpCode: AnyHelper },
    { key: 'initialValue', type: 'any', helpCode: AnyHelper },
    { key: 'required', type: 'boolean', helpCode: BooleanHelper },
    {
        key: 'dataSource',
        type: 'Array<{label?:string,value?:any}>',
        helpCode: DataSourceHelper,
    },
    {
        key: 'componentProps',
        token: 'componentProps',
        type: 'object',
        helpCode: ComponentPropsHelper,
    },
    {
        key: 'decoratorProps',
        token: 'decoratorProps',
        type: 'object',
        helpCode: DecoratorPropsHelper,
    },
];

var template = function (code) {
    if (!code)
        return;
    return code.trim();
};
var FieldPropertySetter = function (props) {
    var _a = __read(useState(['visible']), 2), selectKeys = _a[0], setSelectKeys = _a[1];
    var prefix = usePrefix('field-property-setter');
    var hashId = useToken().hashId;
    var value = __assign({}, props.value);
    var parseExpression = function (expression) {
        var _a;
        if (!expression)
            return '';
        return ((_a = String(expression).match(/^\{\{([\s\S]*)\}\}$/)) === null || _a === void 0 ? void 0 : _a[1]) || '';
    };
    var filterEmpty = function (value) {
        return reduce(value, function (buf, value, key) {
            if (!value || value === '{{}}')
                return buf;
            buf[key] = value;
            return buf;
        }, {});
    };
    var currentProperty = FieldProperties.find(function (item) { return item.key === selectKeys[0]; });
    return (React.createElement("div", { className: cls(prefix, hashId) },
        React.createElement(Menu, { mode: "vertical", style: {
                width: 200,
                height: 300,
                paddingRight: 4,
                overflowY: 'auto',
                overflowX: 'hidden',
            }, defaultSelectedKeys: selectKeys, selectedKeys: selectKeys, onSelect: function (_a) {
                var selectedKeys = _a.selectedKeys;
                setSelectKeys(selectedKeys);
            } }, FieldProperties.map(function (key) {
            if (isPlainObj(key)) {
                return (React.createElement(Menu.Item, { key: key.key },
                    React.createElement(TextWidget, { token: "SettingComponents.ReactionsSetter.".concat(key.token || key.key) })));
            }
            return (React.createElement(Menu.Item, { key: key },
                React.createElement(TextWidget, { token: "SettingComponents.ReactionsSetter.".concat(key) })));
        })),
        React.createElement("div", { className: cls(prefix + '-coder-wrapper', hashId) },
            React.createElement("div", { className: prefix + '-coder-start' }, "$self.".concat(selectKeys[0], " = ("),
                React.createElement("span", { style: {
                        fontSize: 14,
                        marginLeft: 10,
                        color: '#888',
                        fontWeight: 'normal',
                    } },
                    '//',
                    ' ',
                    React.createElement(TextWidget, { token: "SettingComponents.ReactionsSetter.expressionValueTypeIs" }),
                    ' ',
                    '`', currentProperty === null || currentProperty === void 0 ? void 0 :
                    currentProperty.type,
                    '`')),
            React.createElement("div", { className: cls(prefix + '-coder', hashId) },
                React.createElement(MonacoInput, { key: selectKeys[0], language: "javascript.expression", extraLib: props.extraLib, helpCode: template(currentProperty === null || currentProperty === void 0 ? void 0 : currentProperty.helpCode), value: parseExpression(value[selectKeys[0]]), options: {
                        lineNumbers: 'off',
                        wordWrap: 'on',
                        glyphMargin: false,
                        folding: false,
                        lineDecorationsWidth: 0,
                        lineNumbersMinChars: 0,
                        minimap: {
                            enabled: false,
                        },
                    }, onChange: function (expression) {
                        var _a;
                        var _b;
                        (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, filterEmpty(__assign(__assign({}, value), (_a = {}, _a[selectKeys[0]] = "{{".concat(expression, "}}"), _a))));
                    } })),
            React.createElement("div", { className: cls(prefix + '-coder-end', hashId) }, ")"))));
};

var loadDependencies = function (deps) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Promise.all(deps.map(function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                var _c;
                var name = _b.name, path = _b.path;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _c = {
                                name: name,
                                path: path
                            };
                            return [4 /*yield*/, fetch("".concat(getNpmCDNRegistry(), "/").concat(name, "/").concat(path)).then(function (res) { return res.text(); })];
                        case 1: return [2 /*return*/, (_c.library = _d.sent(),
                                _c)];
                    }
                });
            }); }))];
    });
}); };
var initDeclaration = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, MonacoInput.loader.init().then(function (monaco) { return __awaiter(void 0, void 0, void 0, function () {
                var deps;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, loadDependencies([
                                { name: '@formily/core', path: 'dist/formily.core.all.d.ts' },
                            ])];
                        case 1:
                            deps = _a.sent();
                            deps === null || deps === void 0 ? void 0 : deps.forEach(function (_a) {
                                var name = _a.name, library = _a.library;
                                monaco.languages.typescript.typescriptDefaults.addExtraLib("declare module '".concat(name, "'{ ").concat(library, " }"), "file:///node_modules/".concat(name, "/index.d.ts"));
                            });
                            monaco.languages.typescript.typescriptDefaults.addExtraLib("\n    import { Form, Field } from '@formily/core'\n    declare global {\n      /*\n       * Form Model\n       **/\n      declare var $form: Form\n      /*\n       * Form Values\n       **/\n      declare var $values: any\n      /*\n       * Field Model\n       **/\n      declare var $self: Field\n      /*\n       * create an persistent observable state object\n       **/\n      declare var $observable: <T>(target: T, deps?: any[]) => T\n      /*\n       * create a persistent data\n       **/\n      declare var $memo: <T>(callback: () => T, deps?: any[]) => T\n      /*\n       * handle side-effect logic\n       **/\n      declare var $effect: (callback: () => void | (() => void), deps?: any[]) => void\n      /*\n       * set initial component props to current field\n       **/\n      declare var $props: (props: any) => void\n    }\n    ", "file:///node_modules/formily_global.d.ts");
                            return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };

var genReactionsSetterStyle = function (prefixCls, token) {
    var _a, _b, _c, _d, _e, _f, _g;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {
                    width: "100%",
                    minHeight: '623px',
                    overflow: 'hidden'
                },
                _b["::-webkit-scrollbar"] = {
                    width: '5px',
                    height: '5px',
                },
                _b["::-webkit-scrollbar-thumb"] = {
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    borderRadius: 0,
                    transition: 'all 0.25s ease-in-out',
                },
                _b["::-webkit-scrollbar-thumb:hover"] = {
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                },
                _b[".ant-collapse"] = (_c = {
                        border: "1px solid ".concat(token.colorBorder)
                    },
                    _c["&-header"] = (_d = {
                            padding: '8px 10px !important',
                            backgroundColor: "".concat(token.colorBgContainer, "!important"),
                            borderBottom: "1px solid ".concat(token.colorBorder, " !important"),
                            fontWeight: '500 !important'
                        },
                        _d[".ant-collapse-arrow"] = {
                            marginRight: '4px !important',
                        },
                        _d),
                    _c["&-item"] = {
                        border: "none !important",
                    },
                    _c["&-content"] = {
                        border: "none !important",
                        transition: "none !important",
                    },
                    _c["&-content-box"] = {
                        padding: "12px !important",
                    },
                    _c),
                _b[".reaction-runner"] = (_e = {},
                    _e[".ant-collapse-content-box"] = {
                        padding: "12px 0 !important",
                    },
                    _e),
                _b[".reaction-state"] = (_f = {},
                    _f[".ant-collapse-content-box"] = {
                        padding: "12px 0 !important",
                    },
                    _f),
                _b[".dn-field-property-setter"] = (_g = {
                        display: 'flex',
                        height: '300px'
                    },
                    _g["&-coder-wrapper"] = {
                        display: 'flex',
                        flexGrow: 2,
                        height: '100%',
                        paddingLeft: '10px',
                        position: 'relative',
                        flexDirection: 'column',
                    },
                    _g["&-coder-start"] = {
                        fontSize: '18px',
                        lineHeight: '30px',
                        marginBottom: '4px',
                        color: token.colorText,
                        fontWeight: 300,
                        flexGrow: 0,
                        opacity: 0.96,
                        height: '31px',
                    },
                    _g["&-coder-end"] = {
                        fontSize: '18px',
                        height: '31px',
                        color: token.colorText,
                        marginTop: '4px',
                        marginBottom: '4px',
                        lineHeight: '30px',
                        fontWeight: 300,
                        flexGrow: 0,
                        opacity: 0.96,
                    },
                    _g["&-coder"] = {
                        minWidth: 0,
                        flexGrow: 2,
                        paddingLeft: '10px',
                    },
                    _g),
                _b),
            _a),
    ];
};

var TypeView = function (_a) {
    var value = _a.value;
    var text = String(value);
    if (text.length <= 26)
        return React.createElement(Tag, null, text);
    return (React.createElement(Tag, null,
        React.createElement(Tooltip, { title: React.createElement("div", { style: { fontSize: 12 } },
                React.createElement("code", null,
                    React.createElement("pre", { style: { whiteSpace: 'pre-wrap', padding: 0, margin: 0 } }, text))) },
            text.substring(0, 24),
            "...")));
};
var SchemaField = createSchemaField({
    components: {
        Card: Card,
        FormCollapse: FormCollapse,
        Input: Input,
        TypeView: TypeView,
        Select: Select,
        FormItem: FormItem,
        PathSelector: PathSelector,
        FieldPropertySetter: FieldPropertySetter,
        ArrayTable: ArrayTable,
        MonacoInput: MonacoInput,
    },
});
var FieldStateProperties = [
    'value',
    'initialValue',
    'inputValue',
    'inputValues',
    'modified',
    'initialized',
    'title',
    'description',
    'mounted',
    'unmounted',
    'active',
    'visited',
    'loading',
    'errors',
    'warnings',
    'successes',
    'feedbacks',
    'valid',
    'invalid',
    'pattern',
    'display',
    'disabled',
    'readOnly',
    'readPretty',
    'visible',
    'hidden',
    'editable',
    'validateStatus',
    'validating',
];
var FieldStateValueTypes = {
    modified: 'boolean',
    initialized: 'boolean',
    title: 'string',
    description: 'string',
    mounted: 'boolean',
    unmounted: 'boolean',
    active: 'boolean',
    visited: 'boolean',
    loading: 'boolean',
    errors: 'string[]',
    warnings: 'string[]',
    successes: 'string[]',
    feedbacks: "Array<\n  triggerType?: 'onInput' | 'onFocus' | 'onBlur'\n  type?: 'error' | 'success' | 'warning'\n  code?:\n    | 'ValidateError'\n    | 'ValidateSuccess'\n    | 'ValidateWarning'\n    | 'EffectError'\n    | 'EffectSuccess'\n    | 'EffectWarning'\n  messages?: string[]\n>\n",
    valid: 'boolean',
    invalid: 'boolean',
    pattern: "'editable' | 'disabled' | 'readOnly' | 'readPretty'",
    display: "'visible' | 'hidden' | 'none'",
    disabled: 'boolean',
    readOnly: 'boolean',
    readPretty: 'boolean',
    visible: 'boolean',
    hidden: 'boolean',
    editable: 'boolean',
    validateStatus: "'error' | 'warning' | 'success' | 'validating'",
    validating: 'boolean',
};
var ReactionsSetter = function (props) {
    var _a = __read(useState(false), 2), modalVisible = _a[0], setModalVisible = _a[1];
    var _b = __read(useState(false), 2), innerVisible = _b[0], setInnerVisible = _b[1];
    var prefix = usePrefix('reactions-setter');
    var _c = useCssInJs({
        prefix: prefix,
        styleFun: genReactionsSetterStyle,
    }), hashId = _c.hashId, wrapSSR = _c.wrapSSR;
    var form = useMemo(function () {
        return createForm({
            values: clone(props.value),
        });
    }, [modalVisible, props.value]);
    var formCollapse = useMemo(function () { return FormCollapse.createFormCollapse(['deps', 'state']); }, [modalVisible]);
    var openModal = function () { return setModalVisible(true); };
    var closeModal = function () { return setModalVisible(false); };
    useEffect(function () {
        if (modalVisible) {
            requestIdle(function () {
                initDeclaration().then(function () {
                    setInnerVisible(true);
                });
            }, {
                timeout: 400,
            });
        }
        else {
            setInnerVisible(false);
        }
    }, [modalVisible]);
    return wrapSSR(React.createElement(React.Fragment, null,
        React.createElement(Button, { block: true, onClick: openModal },
            React.createElement(TextWidget, { token: "SettingComponents.ReactionsSetter.configureReactions" })),
        React.createElement(Modal, { title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.configureReactions'), width: "70%", centered: true, bodyStyle: { padding: 10 }, transitionName: "", maskTransitionName: "", open: modalVisible, onCancel: closeModal, destroyOnClose: true, onOk: function () {
                form.submit(function (values) {
                    var _a;
                    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, values);
                });
                closeModal();
            } },
            React.createElement("div", { className: cls(prefix, hashId) }, innerVisible && (React.createElement(Form, { form: form },
                React.createElement(SchemaField, null,
                    React.createElement(SchemaField.Void, { "x-component": "FormCollapse", "x-component-props": {
                            formCollapse: formCollapse,
                            defaultActiveKey: ['deps', 'state'],
                            style: { marginBottom: 10 },
                        } },
                        React.createElement(SchemaField.Void, { "x-component": "FormCollapse.CollapsePanel", "x-component-props": {
                                key: 'deps',
                                header: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.relationsFields'),
                            } },
                            React.createElement(SchemaField.Array, { name: "dependencies", default: [{}], "x-component": "ArrayTable" },
                                React.createElement(SchemaField.Object, null,
                                    React.createElement(SchemaField.Void, { "x-component": "ArrayTable.Column", "x-component-props": {
                                            title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.sourceField'),
                                            width: 240,
                                        } },
                                        React.createElement(SchemaField.String, { name: "source", "x-decorator": "FormItem", "x-component": "PathSelector", "x-component-props": {
                                                placeholder: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.pleaseSelect'),
                                            } })),
                                    React.createElement(SchemaField.Void, { "x-component": "ArrayTable.Column", "x-component-props": {
                                            title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.sourceProperty'),
                                            width: 200,
                                        } },
                                        React.createElement(SchemaField.String, { name: "property", default: "value", "x-decorator": "FormItem", "x-component": "Select", "x-component-props": { showSearch: true }, enum: FieldStateProperties })),
                                    React.createElement(SchemaField.Void, { "x-component": "ArrayTable.Column", "x-component-props": {
                                            title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.variableName'),
                                            width: 200,
                                        } },
                                        React.createElement(SchemaField.String, { name: "name", "x-decorator": "FormItem", "x-validator": {
                                                pattern: /^[$_a-zA-Z]+[$_a-zA-Z0-9]*$/,
                                                message: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.variableNameValidateMessage'),
                                            }, "x-component": "Input", "x-component-props": {
                                                addonBefore: '$deps.',
                                                placeholder: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.pleaseInput'),
                                            }, "x-reactions": function (field) {
                                                if (isVoidField(field))
                                                    return;
                                                field.query('.source').take(function (source) {
                                                    var _a, _b;
                                                    if (isVoidField(source))
                                                        return;
                                                    if (source.value &&
                                                        !field.value &&
                                                        !field.modified) {
                                                        field.setValue(((_b = (_a = source.inputValues[1]) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.name) ||
                                                            "v_".concat(uid()));
                                                        // field.value =
                                                        //   source.inputValues[1]?.props?.name ||
                                                        //   `v_${uid()}`
                                                    }
                                                });
                                            } })),
                                    React.createElement(SchemaField.Void, { "x-component": "ArrayTable.Column", "x-component-props": {
                                            title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.variableType'),
                                            ellipsis: {
                                                showTitle: false,
                                            },
                                            width: 200,
                                            align: 'center',
                                        } },
                                        React.createElement(SchemaField.String, { name: "type", default: "any", "x-decorator": "FormItem", "x-component": "TypeView", "x-reactions": function (field) {
                                                if (isVoidField(field))
                                                    return;
                                                var property = field
                                                    .query('.property')
                                                    .get('inputValues');
                                                if (!property)
                                                    return;
                                                property[0] = property[0] || 'value';
                                                field.query('.source').take(function (source) {
                                                    var _a, _b;
                                                    if (isVoidField(source))
                                                        return;
                                                    if (source.value) {
                                                        if (property[0] === 'value' ||
                                                            property[0] === 'initialValue' ||
                                                            property[0] === 'inputValue') {
                                                            field.setValue(((_b = (_a = source.inputValues[1]) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.type) ||
                                                                'any');
                                                            // field.value =
                                                            //   source.inputValues[1]?.props?.type ||
                                                            //   'any'
                                                        }
                                                        else if (property[0] === 'inputValues') {
                                                            // @ts-ignore
                                                            field.setValue("any[]");
                                                            // field.value = `any[]`
                                                        }
                                                        else if (property[0]) {
                                                            field.setValue(FieldStateValueTypes[property[0]]);
                                                            // field.value =
                                                            //   FieldStateValueTypes[property[0]]
                                                        }
                                                        else {
                                                            // @ts-ignore
                                                            field.setValue('any');
                                                            // field.value = 'any'
                                                        }
                                                    }
                                                });
                                            } })),
                                    React.createElement(SchemaField.Void, { "x-component": "ArrayTable.Column", "x-component-props": {
                                            title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.operations'),
                                            align: 'center',
                                            width: 80,
                                        } },
                                        React.createElement(SchemaField.Markup, { type: "void", "x-component": "ArrayTable.Remove" }))),
                                React.createElement(SchemaField.Void, { title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.addRelationField'), "x-component": "ArrayTable.Addition", "x-component-props": { style: { marginTop: 8 } } }))),
                        React.createElement(SchemaField.Void, { "x-component": "FormCollapse.CollapsePanel", "x-component-props": {
                                header: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.propertyReactions'),
                                key: 'state',
                                className: 'reaction-state',
                            } },
                            React.createElement(SchemaField.Markup, { name: "fulfill.state", "x-component": "FieldPropertySetter" })),
                        React.createElement(SchemaField.Void, { "x-component": "FormCollapse.CollapsePanel", "x-component-props": {
                                key: 'run',
                                header: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.actionReactions'),
                                className: 'reaction-runner',
                            } },
                            React.createElement(SchemaField.String, { name: "fulfill.run", "x-component": "MonacoInput", "x-component-props": {
                                    width: '100%',
                                    height: 400,
                                    language: 'typescript',
                                    helpCode: FulfillRunHelper,
                                    options: {
                                        minimap: {
                                            enabled: false,
                                        },
                                    },
                                }, "x-reactions": function (field) {
                                    var deps = field.query('dependencies').value();
                                    if (Array.isArray(deps)) {
                                        field.componentProps.extraLib = "\n                          declare var $deps : {\n                            ".concat(deps.map(function (_a) {
                                            var name = _a.name, type = _a.type;
                                            if (!name)
                                                return '';
                                            return "".concat(name, "?:").concat(type || 'any', ",");
                                        }), "\n                          }\n                          ");
                                    }
                                } }))))))))));
};

var ValidatorSchema = {
    type: 'array',
    items: {
        type: 'object',
        'x-decorator': 'ArrayItems.Item',
        'x-decorator-props': {
            style: {
                alignItems: 'center',
                borderRadius: 3,
                paddingTop: 6,
                paddingBottom: 6,
            },
        },
        properties: {
            sortable: {
                type: 'void',
                'x-component': 'ArrayItems.SortHandle',
                'x-component-props': { style: { marginRight: 10 } },
            },
            drawer: {
                type: 'void',
                'x-component': 'DrawerSetter',
                properties: {
                    triggerType: {
                        type: 'string',
                        enum: ['onInput', 'onFocus', 'onBlur'],
                        'x-decorator': 'FormItem',
                        'x-component': 'Select',
                    },
                    validator: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'ValueInput',
                        'x-component-props': {
                            include: ['EXPRESSION'],
                        },
                    },
                    message: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input.TextArea',
                    },
                    format: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Select',
                        'x-component-props': {
                            allowClear: true,
                        },
                    },
                    pattern: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-component-props': {
                            prefix: '/',
                            suffix: '/',
                        },
                    },
                    len: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'NumberPicker',
                    },
                    max: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'NumberPicker',
                    },
                    min: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'NumberPicker',
                    },
                    exclusiveMaximum: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'NumberPicker',
                    },
                    exclusiveMinimum: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'NumberPicker',
                    },
                    whitespace: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                    },
                    required: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                    },
                },
            },
            moveDown: {
                type: 'void',
                'x-component': 'ArrayItems.MoveDown',
                'x-component-props': { style: { marginLeft: 10 } },
            },
            moveUp: {
                type: 'void',
                'x-component': 'ArrayItems.MoveUp',
                'x-component-props': { style: { marginLeft: 5 } },
            },
            remove: {
                type: 'void',
                'x-component': 'ArrayItems.Remove',
                'x-component-props': { style: { marginLeft: 5 } },
            },
        },
    },
    properties: {
        addValidatorRules: {
            type: 'void',
            'x-component': 'ArrayItems.Addition',
            'x-component-props': {
                style: {
                    marginBottom: 10,
                },
            },
        },
    },
};
var ValidatorSetter = observer$1(function (props) {
    var field = useField();
    return (React.createElement(FoldItem, { label: field.title },
        React.createElement(FoldItem.Base, null,
            React.createElement(Select$1, { value: Array.isArray(props.value) ? undefined : props.value, onChange: props.onChange, allowClear: true, placeholder: GlobalRegistry.getDesignerMessage('SettingComponents.ValidatorSetter.pleaseSelect'), options: GlobalRegistry.getDesignerMessage('SettingComponents.ValidatorSetter.formats') })),
        React.createElement(FoldItem.Extra, null,
            React.createElement(SchemaContext.Provider, { value: new Schema(ValidatorSchema) },
                React.createElement(ArrayItems, null)))));
});

export { DataSourceSetter, ReactionsSetter, ValidatorSetter };
