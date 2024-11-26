import { GlobalRegistry } from '@form-created/core';
import loader from '@monaco-editor/loader';
import React, { useRef, useState, useEffect, createContext, useContext, useLayoutEffect, Fragment, useMemo } from 'react';
import { Input, Popover, Upload, Button, InputNumber, Tooltip, Select, theme, Radio as Radio$1, Slider, Empty } from 'antd';
import { usePrefix, useCssInJs, IconWidget, useTheme, TextWidget, useTreeNode, useWorkbench, useOperation, useSelectedNode, useSelected, NodePathWidget } from '@form-created/react';
import { SketchPicker } from 'react-color';
import cls from 'classnames';
import Editor, { loader as loader$1 } from '@monaco-editor/react';
import { parse, parseExpression } from '@babel/parser';
import { uid, isStr, cancelIdle, requestIdle, globalThisPolyfill } from '@form-created/shared';
import { createPortal } from 'react-dom';
import { observer, useField, Field, createSchemaField } from '@formily/react';
import { FormLayout, FormItem, Select as Select$1, Input as Input$1, NumberPicker, Radio, DatePicker, TimePicker, Switch, Space, ArrayItems, ArrayTable, FormCollapse, FormGrid, FormTab, Form } from '@formily/antd-v5';
import { observable } from '@formily/reactive';
import { camelCase } from '@formily/shared';
import { onFieldReact, isVoidField, onFieldInputValueChange, createForm } from '@formily/core';
import { Keyframes } from '@ant-design/cssinjs';

var zhCN = {
    'zh-CN': {
        SettingComponents: {
            ValueInput: {
                expression: '表达式',
            },
            MonacoInput: {
                helpDocument: '帮助文档',
            },
        },
    },
};

var enUS = {
    'en-US': {
        SettingComponents: {
            ValueInput: {
                expression: 'Expression',
            },
            MonacoInput: {
                helpDocument: 'Help Documents',
            },
        },
    },
};

var koKR = {
    'ko-KR': {
        SettingComponents: {
            ValueInput: {
                expression: '표현식',
            },
            MonacoInput: {
                helpDocument: '도움말 문서',
            },
        },
    },
};

GlobalRegistry.registerDesignerLocales(zhCN, enUS, koKR);

var Registry = {
    cdn: '//cdn.jsdelivr.net/npm',
};
var setNpmCDNRegistry = function (registry) {
    Registry.cdn = registry;
    loader.config({
        paths: {
            vs: "".concat(registry, "/monaco-editor@0.30.1/min/vs"),
        },
    });
};
var getNpmCDNRegistry = function () { return String(Registry.cdn).replace(/\/$/, ''); };

var genColorInputStyle = function (prefixCls, token) {
    var _a, _b;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {
                    width: '100%'
                },
                _b[".ant-popover-inner-content"] = {
                    padding: '0 !important',
                    userSelect: 'none',
                },
                _b["&-color-tips"] = {
                    width: '20px',
                    height: '20px',
                    borderRadius: '2px',
                    border: "1px solid ".concat(token.colorBorder),
                    cursor: 'pointer',
                },
                _b),
            _a),
    ];
};

var ColorInput = function (props) {
    var container = useRef(null);
    var prefix = usePrefix('color-input');
    var color = props.value;
    var hashId = useCssInJs({ prefix: prefix, styleFun: genColorInputStyle }).hashId;
    return (React.createElement("div", { ref: container, className: cls(prefix, hashId) },
        React.createElement(Input, { value: props.value, onChange: function (e) {
                var _a;
                (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e.target.value);
            }, placeholder: "Color", prefix: React.createElement(Popover, { autoAdjustOverflow: true, trigger: "click", overlayInnerStyle: { padding: 0 }, getPopupContainer: function () { return container.current; }, content: React.createElement(SketchPicker, { color: color, onChange: function (_a) {
                        var _b;
                        var rgb = _a.rgb;
                        (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
                    } }) },
                React.createElement("div", { className: cls(prefix + '-color-tips', hashId), style: {
                        backgroundColor: color,
                    } })) })));
};

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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var genCornerInputStyle = function (prefixCls, token) {
    var _a, _b, _c;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {
                    display: 'flex'
                },
                _b["&-column"] = {
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                },
                _b["&-cell"] = (_c = {
                        width: '26px',
                        height: '26px',
                        boxSizing: 'border-box',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        borderRadius: '3px',
                        color: 'rgba(0, 0, 0, 0.6)',
                        margin: '5px'
                    },
                    _c["&.active"] = {
                        background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))",
                    },
                    _c),
                _b),
            _a),
    ];
};

var CornerInput = function (props) {
    var prefix = usePrefix('corner-input');
    var _a = useCssInJs({
        prefix: prefix,
        styleFun: genCornerInputStyle,
    }), hashId = _a.hashId, wrapSSR = _a.wrapSSR;
    var _b = __read(useState(props.value), 2), current = _b[0], setCurrent = _b[1];
    useEffect(function () {
        if (!props.value) {
            setCurrent('all');
        }
    }, [props.value]);
    var createCellProps = function (type) { return ({
        className: cls(prefix + '-cell', { active: current === type }),
        onClick: function () {
            var _a;
            setCurrent(type);
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, type);
        },
    }); };
    return wrapSSR(React.createElement("div", { className: cls(prefix, props.className, hashId), style: props.style },
        React.createElement("div", { className: cls(prefix + '-column', hashId) },
            React.createElement("div", __assign({}, createCellProps('topLeft')), "\u250F"),
            React.createElement("div", __assign({}, createCellProps('bottomLeft')), "\u2517")),
        React.createElement("div", { className: cls(prefix + '-column', hashId) },
            React.createElement("div", __assign({}, createCellProps('all')), "\u254B")),
        React.createElement("div", { className: cls(prefix + '-column', hashId) },
            React.createElement("div", __assign({}, createCellProps('topRight')), "\u2513"),
            React.createElement("div", __assign({}, createCellProps('bottomRight')), "\u251B"))));
};

var SettingsFormContext = createContext(null);

var genImageInputStyle = function (prefixCls, token) {
    var _a;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = {
                width: "100%",
            },
            _a),
    ];
};

var ImageInput = function (_a) {
    var className = _a.className, style = _a.style, props = __rest(_a, ["className", "style"]);
    var prefix = usePrefix('image-input');
    var _b = useCssInJs({
        prefix: prefix,
        styleFun: genImageInputStyle,
    }), hashId = _b.hashId, wrapSSR = _b.wrapSSR;
    var context = useContext(SettingsFormContext);
    return wrapSSR(React.createElement("div", { className: cls(prefix, className, hashId), style: style },
        React.createElement(Input, __assign({}, props, { onChange: function (e) {
                var _a, _b;
                (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, (_b = e === null || e === void 0 ? void 0 : e.target) === null || _b === void 0 ? void 0 : _b['value']);
            }, prefix: React.createElement(Upload, { action: context.uploadAction, itemRender: function () { return null; }, maxCount: 1, onChange: function (params) {
                    var _a, _b;
                    var response = (_a = params.file) === null || _a === void 0 ? void 0 : _a.response;
                    var url = (response === null || response === void 0 ? void 0 : response.url) ||
                        (response === null || response === void 0 ? void 0 : response.downloadURL) ||
                        (response === null || response === void 0 ? void 0 : response.imageURL) ||
                        (response === null || response === void 0 ? void 0 : response.thumbUrl);
                    if (!url)
                        return;
                    (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, url);
                } },
                React.createElement(IconWidget, { infer: "CloudUpload", style: { cursor: 'pointer' } })) }))));
};
var BackgroundImageInput = function (props) {
    var addBgValue = function (value) {
        if (/url\([^)]+\)/.test(value)) {
            return value;
        }
        return "url(".concat(value, ")");
    };
    var removeBgValue = function (value) {
        var matched = String(value).match(/url\(\s*([^)]+)\s*\)/);
        if (matched === null || matched === void 0 ? void 0 : matched[1]) {
            return matched === null || matched === void 0 ? void 0 : matched[1];
        }
        return value;
    };
    return (React.createElement(ImageInput, { value: removeBgValue(props.value), onChange: function (url) {
            var _a;
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, addBgValue(url));
        } }));
};

var genPositionInputStyle = function (prefixCls, token) {
    var _a, _b;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {
                    display: 'flex',
                    flexDirection: 'column'
                },
                _b["&-row"] = {
                    display: 'flex',
                    justifyContent: 'center',
                },
                _b["&-cell"] = {
                    width: '26px',
                    height: '26px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    borderRadius: '3px',
                    // color: 'rgba(0, 0, 0, 0.6)',
                    margin: '5px',
                    color: token.colorText,
                },
                _b),
            _a),
    ];
};

var PositionInput = function (props) {
    var prefix = usePrefix('position-input');
    var _a = __read(useState(props.value), 2), current = _a[0], setCurrent = _a[1];
    useEffect(function () {
        if (!props.value) {
            setCurrent('center');
        }
    }, [props.value]);
    var createCellProps = function (type) { return ({
        className: cls(prefix + '-cell', { active: current === type }, hashId),
        onClick: function () {
            var _a;
            setCurrent(type);
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, type);
        },
    }); };
    var hashId = useCssInJs({ prefix: prefix, styleFun: genPositionInputStyle }).hashId;
    return (React.createElement("div", { className: cls(prefix, props.className, hashId), style: props.style },
        React.createElement("div", { className: cls(prefix + '-row', hashId) },
            React.createElement("div", __assign({}, createCellProps('top')), "\u2533")),
        React.createElement("div", { className: cls(prefix + '-row', hashId) },
            React.createElement("div", __assign({}, createCellProps('left')), "\u2523"),
            React.createElement("div", __assign({}, createCellProps('center')), "\u254B"),
            React.createElement("div", __assign({}, createCellProps('right')), "\u252B")),
        React.createElement("div", { className: cls(prefix + '-row', hashId) },
            React.createElement("div", __assign({}, createCellProps('bottom')), "\u253B"))));
};

var genPolyInputStyle = function (prefixCls, token) {
    var _a, _b, _c;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center'
                },
                _b["&-content"] = (_c = {
                        flexGrow: 2,
                        marginRight: '2px',
                        display: 'flex'
                    },
                    _c[".ant-select"] = {
                        width: '100%',
                    },
                    _c[".ant-input-number"] = {
                        width: '100%',
                    },
                    _c),
                _b["&-controller"] = {
                    border: "1px solid ".concat(token.colorBorder),
                    // borderRadius: '2px',
                    cursor: 'pointer',
                    padding: '0 8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexGrow: 0,
                },
                _b),
            _a),
    ];
};

var isValid = function (val) { return val !== undefined && val !== null; };
var getEventValue = function (event) {
    if (event === null || event === void 0 ? void 0 : event.target) {
        if (isValid(event.target.value))
            return event.target.value;
        if (isValid(event.target.checked))
            return event.target.checked;
        return;
    }
    return event;
};
var createTypes = function (types, exclude, include) {
    return types.filter(function (_a) {
        var type = _a.type;
        if (Array.isArray(include) && include.length) {
            return include.includes(type);
        }
        if (Array.isArray(exclude) && exclude.length) {
            return !exclude.includes(type);
        }
        return true;
    });
};
function createPolyInput(polyTypes) {
    if (polyTypes === void 0) { polyTypes = []; }
    return function (_a) {
        var _b;
        var className = _a.className, style = _a.style, value = _a.value, onChange = _a.onChange, exclude = _a.exclude, include = _a.include, props = __rest(_a, ["className", "style", "value", "onChange", "exclude", "include"]);
        var prefix = usePrefix('poly-input');
        var types = createTypes(polyTypes, exclude, include);
        var _c = __read(useState((_b = types[0]) === null || _b === void 0 ? void 0 : _b.type), 2), current = _c[0], setCurrent = _c[1];
        var type = types === null || types === void 0 ? void 0 : types.find(function (_a) {
            var type = _a.type;
            return type === current;
        });
        var component = type === null || type === void 0 ? void 0 : type.component;
        var typesValue = useRef({});
        useEffect(function () {
            types === null || types === void 0 ? void 0 : types.forEach(function (_a) {
                var checker = _a.checker, type = _a.type;
                if (checker(value)) {
                    setCurrent(type);
                }
            });
        }, [value]);
        var getNextType = function () {
            var currentIndex = types === null || types === void 0 ? void 0 : types.findIndex(function (_a) {
                var type = _a.type;
                return type === current;
            });
            var nextIndex = currentIndex + 1 > (types === null || types === void 0 ? void 0 : types.length) - 1 ? 0 : currentIndex + 1;
            return types[nextIndex];
        };
        var transformOnChangeValue = function (value, type) {
            return (type === null || type === void 0 ? void 0 : type.toChangeValue) ? type === null || type === void 0 ? void 0 : type.toChangeValue(value) : value;
        };
        var hashId = useCssInJs({ prefix: prefix, styleFun: genPolyInputStyle }).hashId;
        return (React.createElement("div", { className: cls(prefix, className, hashId), style: style },
            component && (React.createElement("div", { className: cls(prefix + '-content', hashId) }, React.createElement(component, __assign(__assign({}, props), { value: (type === null || type === void 0 ? void 0 : type.toInputValue) ? type === null || type === void 0 ? void 0 : type.toInputValue(value) : value, onChange: function (event) {
                    var value = getEventValue(event);
                    typesValue.current[type === null || type === void 0 ? void 0 : type.type] = value;
                    onChange === null || onChange === void 0 ? void 0 : onChange(transformOnChangeValue(value, type));
                } })))),
            React.createElement(Button, { className: cls(prefix + '-controller', hashId), style: {
                    width: !component ? '100%' : 'auto',
                }, block: true, onClick: function () {
                    var nextType = getNextType();
                    if (nextType === type)
                        return;
                    setCurrent(nextType === null || nextType === void 0 ? void 0 : nextType.type);
                    onChange === null || onChange === void 0 ? void 0 : onChange(transformOnChangeValue(typesValue.current[nextType === null || nextType === void 0 ? void 0 : nextType.type], nextType));
                } }, (type === null || type === void 0 ? void 0 : type.icon) ? (React.createElement(IconWidget, { infer: type.icon })) : ((type === null || type === void 0 ? void 0 : type.title) || (type === null || type === void 0 ? void 0 : type.type)))));
    };
}

var takeNumber$1 = function (value) {
    var num = String(value)
        .trim()
        .replace(/[^\d\.]+/, '');
    if (num === '')
        return;
    return Number(num);
};
var createUnitType = function (type) {
    return {
        type: type,
        component: InputNumber,
        checker: function (value) {
            return String(value).includes(type);
        },
        toInputValue: function (value) {
            return takeNumber$1(value);
        },
        toChangeValue: function (value) {
            return "".concat(value || 0).concat(type);
        },
    };
};
var createSpecialSizeOption = function (type) { return ({
    type: type,
    checker: function (value) {
        if (value === type)
            return true;
        return false;
    },
    toChangeValue: function () {
        return type;
    },
}); };
var NormalSizeOptions = [
    createSpecialSizeOption('inherit'),
    createSpecialSizeOption('auto'),
    createUnitType('px'),
    createUnitType('%'),
    createUnitType('vh'),
    createUnitType('em'),
];
var SizeInput = createPolyInput(NormalSizeOptions);
var BackgroundSizeInput = createPolyInput([
    createSpecialSizeOption('cover'),
    createSpecialSizeOption('contain'),
    createUnitType('px'),
    createUnitType('%'),
    createUnitType('vh'),
    createUnitType('em'),
]);

var cache = {
    prettier: null,
};
var format = function (language, source) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        cache.prettier =
            cache.prettier ||
                new Function("return import(\"".concat(getNpmCDNRegistry(), "/prettier@2.x/esm/standalone.mjs\")"))();
        return [2 /*return*/, cache.prettier.then(function (module) {
                if (language === 'javascript.expression' ||
                    language === 'typescript.expression') {
                    return source;
                }
                if (/(?:javascript|typescript)/gi.test(language)) {
                    return module.default.format(source, {
                        semi: false,
                        parser: function (text) {
                            return parse(text, {
                                sourceType: 'module',
                                plugins: ['typescript', 'jsx'],
                            });
                        },
                    });
                }
                if (language === 'json') {
                    return JSON.stringify(JSON.parse(source), null, 2);
                }
                return source;
            })];
    });
}); };

var chromeTheme = {
    base: 'vs',
    inherit: true,
    rules: [
        {
            foreground: 'c41a16',
            token: 'string',
        },
        {
            foreground: '1c00cf',
            token: 'constant.numeric',
        },
        {
            foreground: 'aa0d91',
            token: 'keyword',
        },
        {
            foreground: '000000',
            token: 'keyword.operator',
        },
        {
            foreground: 'aa0d91',
            token: 'constant.language',
        },
        {
            foreground: '990000',
            token: 'support.class.exception',
        },
        {
            foreground: '000000',
            token: 'entity.name.function',
        },
        {
            fontStyle: 'bold underline',
            token: 'entity.name.type',
        },
        {
            fontStyle: 'italic',
            token: 'variable.parameter',
        },
        {
            foreground: '007400',
            token: 'comment',
        },
        {
            foreground: 'ff0000',
            token: 'invalid',
        },
        {
            background: 'e71a1100',
            token: 'invalid.deprecated.trailing-whitespace',
        },
        {
            foreground: '000000',
            background: 'fafafafc',
            token: 'text source',
        },
        {
            foreground: 'aa0d91',
            token: 'meta.tag',
        },
        {
            foreground: 'aa0d91',
            token: 'declaration.tag',
        },
        {
            foreground: '000000',
            fontStyle: 'bold',
            token: 'support',
        },
        {
            foreground: 'aa0d91',
            token: 'storage',
        },
        {
            fontStyle: 'bold underline',
            token: 'entity.name.section',
        },
        {
            foreground: '000000',
            fontStyle: 'bold',
            token: 'entity.name.function.frame',
        },
        {
            foreground: '333333',
            token: 'meta.tag.preprocessor.xml',
        },
        {
            foreground: '994500',
            fontStyle: 'italic',
            token: 'entity.other.attribute-name',
        },
        {
            foreground: '881280',
            token: 'entity.name.tag',
        },
    ],
    colors: {
        'editor.foreground': '#000000',
        'editor.background': '#FFFFFF',
        'editor.selectionBackground': '#BAD6FD',
        'editor.lineHighlightBackground': '#EFEFFF',
        'editorCursor.foreground': '#000000',
        'editorWhitespace.foreground': '#B3B3B3F4',
    },
};

var monokaiTheme = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        {
            foreground: '75715e',
            token: 'comment',
        },
        {
            foreground: 'e6db74',
            token: 'string',
        },
        {
            foreground: 'ae81ff',
            token: 'constant.numeric',
        },
        {
            foreground: 'ae81ff',
            token: 'constant.language',
        },
        {
            foreground: 'ae81ff',
            token: 'constant.character',
        },
        {
            foreground: 'ae81ff',
            token: 'constant.other',
        },
        {
            foreground: 'f92672',
            token: 'keyword',
        },
        {
            foreground: 'f92672',
            token: 'storage',
        },
        {
            foreground: '66d9ef',
            fontStyle: 'italic',
            token: 'storage.type',
        },
        {
            foreground: 'a6e22e',
            fontStyle: 'underline',
            token: 'entity.name.class',
        },
        {
            foreground: 'a6e22e',
            fontStyle: 'italic underline',
            token: 'entity.other.inherited-class',
        },
        {
            foreground: 'a6e22e',
            token: 'entity.name.function',
        },
        {
            foreground: 'fd971f',
            fontStyle: 'italic',
            token: 'variable.parameter',
        },
        {
            foreground: 'f92672',
            token: 'entity.name.tag',
        },
        {
            foreground: 'a6e22e',
            token: 'entity.other.attribute-name',
        },
        {
            foreground: '66d9ef',
            token: 'support.function',
        },
        {
            foreground: '66d9ef',
            token: 'support.constant',
        },
        {
            foreground: '66d9ef',
            fontStyle: 'italic',
            token: 'support.type',
        },
        {
            foreground: '66d9ef',
            fontStyle: 'italic',
            token: 'support.class',
        },
        {
            foreground: 'f8f8f0',
            background: 'f92672',
            token: 'invalid',
        },
        {
            foreground: 'f8f8f0',
            background: 'ae81ff',
            token: 'invalid.deprecated',
        },
        {
            foreground: 'cfcfc2',
            token: 'meta.structure.dictionary.json string.quoted.double.json',
        },
        {
            foreground: '75715e',
            token: 'meta.diff',
        },
        {
            foreground: '75715e',
            token: 'meta.diff.header',
        },
        {
            foreground: 'f92672',
            token: 'markup.deleted',
        },
        {
            foreground: 'a6e22e',
            token: 'markup.inserted',
        },
        {
            foreground: 'e6db74',
            token: 'markup.changed',
        },
        {
            foreground: 'ae81ffa0',
            token: 'constant.numeric.line-number.find-in-files - match',
        },
        {
            foreground: 'e6db74',
            token: 'entity.name.filename.find-in-files',
        },
    ],
    colors: {
        'editor.foreground': '#F8F8F2',
        'editor.background': '#222222',
        'editor.selectionBackground': '#49483E',
        'editor.lineHighlightBackground': '#3E3D32',
        'editorCursor.foreground': '#F8F8F0',
        'editorWhitespace.foreground': '#3B3A32',
        'editorIndentGuide.activeBackground': '#9D550FB0',
        'editor.selectionHighlightBorder': '#222218',
    },
};

var initialized = false;
var initMonaco = function () {
    if (initialized)
        return;
    loader$1.init().then(function (monaco) {
        monaco.editor.defineTheme('monokai', monokaiTheme);
        monaco.editor.defineTheme('chrome-devtools', chromeTheme);
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.Latest,
            allowNonTsExtensions: true,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            module: monaco.languages.typescript.ModuleKind.CommonJS,
            noEmit: true,
            esModuleInterop: true,
            jsx: monaco.languages.typescript.JsxEmit.React,
            reactNamespace: 'React',
            allowJs: true,
        });
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: true,
        });
        monaco.languages.registerDocumentFormattingEditProvider('typescript', {
            provideDocumentFormattingEdits: function (model) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    var _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _a = {};
                                return [4 /*yield*/, format(((_b = model['getDesignerLanguage']) === null || _b === void 0 ? void 0 : _b.call(model)) || 'typescript', model.getValue())];
                            case 1: return [2 /*return*/, [
                                    (_a.text = _c.sent(),
                                        _a.range = model.getFullModelRange(),
                                        _a)
                                ]];
                        }
                    });
                });
            },
        });
        initialized = true;
    });
};

var genMonacoInputStyle = function (prefixCls, token) {
    var _a, _b;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {
                    position: 'relative',
                    transition: 'all 0.15s ease-in-out',
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    display: 'flex'
                },
                _b["&.loaded"] = {
                    opacity: 1,
                },
                _b["&-view"] = {
                    flexGrow: 2,
                    height: '100%',
                },
                _b["&-helper"] = {
                    position: 'absolute',
                    bottom: '10px',
                    right: '5%',
                    zIndex: 2,
                },
                _b[".monaco-error-highline"] = {
                    left: '0px !important',
                    width: '5px !important',
                    height: '5px !important',
                    background: 'red !important',
                    borderRadius: '100% !important',
                    transform: 'translate(35px, 5px) !important',
                },
                _b),
            _a),
    ];
};

var MonacoInput = function (_a) {
    var className = _a.className, language = _a.language, defaultLanguage = _a.defaultLanguage, width = _a.width, helpLink = _a.helpLink, helpCode = _a.helpCode, helpCodeViewWidth = _a.helpCodeViewWidth, height = _a.height, onMount = _a.onMount, onChange = _a.onChange, props = __rest(_a, ["className", "language", "defaultLanguage", "width", "helpLink", "helpCode", "helpCodeViewWidth", "height", "onMount", "onChange"]);
    var _b = __read(useState(false), 2), loaded = _b[0], setLoaded = _b[1];
    var theme = useTheme();
    var valueRef = useRef('');
    var validateRef = useRef(null);
    var submitRef = useRef(null);
    var declarationRef = useRef([]);
    var extraLibRef = useRef(null);
    var monacoRef = useRef();
    var editorRef = useRef();
    var computedLanguage = useRef(language || defaultLanguage);
    var realLanguage = useRef('');
    var unmountedRef = useRef(false);
    var changedRef = useRef(false);
    var uidRef = useRef(uid());
    var prefix = usePrefix('monaco-input');
    var _c = useCssInJs({
        prefix: prefix,
        styleFun: genMonacoInputStyle,
    }), hashId = _c.hashId, wrapSSR = _c.wrapSSR;
    var input = props.value || props.defaultValue;
    useEffect(function () {
        unmountedRef.current = false;
        initMonaco();
        return function () {
            if (extraLibRef.current) {
                extraLibRef.current.dispose();
            }
            unmountedRef.current = true;
        };
    }, []);
    useEffect(function () {
        if (monacoRef.current && props.extraLib) {
            updateExtraLib();
        }
    }, [props.extraLib]);
    var updateExtraLib = function () {
        if (extraLibRef.current) {
            extraLibRef.current.dispose();
        }
        extraLibRef.current =
            monacoRef.current.languages.typescript.typescriptDefaults.addExtraLib(props.extraLib, "".concat(uidRef.current, ".d.ts"));
    };
    var isFileLanguage = function () {
        var lang = computedLanguage.current;
        return lang === 'javascript' || lang === 'typescript';
    };
    var isExpLanguage = function () {
        var lang = computedLanguage.current;
        return lang === 'javascript.expression' || lang === 'typescript.expression';
    };
    var renderHelper = function () {
        var getHref = function () {
            if (typeof helpLink === 'string')
                return helpLink;
            if (isFileLanguage()) {
                return 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript';
            }
            if (isExpLanguage()) {
                return 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators';
            }
        };
        if (helpLink === false)
            return null;
        var href = getHref();
        return (href && (React.createElement(Tooltip, { title: React.createElement(TextWidget, { token: "SettingComponents.MonacoInput.helpDocument" }) },
            React.createElement("div", { className: cls(prefix + '-helper', hashId) },
                React.createElement("a", { target: "_blank", href: href, rel: "noreferrer" },
                    React.createElement(IconWidget, { infer: "Help" }))))));
    };
    var onMountHandler = function (editor, monaco) {
        editorRef.current = editor;
        monacoRef.current = monaco;
        onMount === null || onMount === void 0 ? void 0 : onMount(editor, monaco);
        var model = editor.getModel();
        var currentValue = editor.getValue();
        model['getDesignerLanguage'] = function () { return computedLanguage.current; };
        if (currentValue) {
            format(computedLanguage.current, currentValue)
                .then(function (content) {
                editor.setValue(content);
                setLoaded(true);
            })
                .catch(function () {
                setLoaded(true);
            });
        }
        else {
            setLoaded(true);
        }
        if (props.extraLib) {
            updateExtraLib();
        }
        editor.onDidChangeModelContent(function () {
            onChangeHandler(editor.getValue());
        });
    };
    var submit = function () {
        clearTimeout(submitRef.current);
        submitRef.current = setTimeout(function () {
            onChange === null || onChange === void 0 ? void 0 : onChange(valueRef.current);
        }, 1000);
    };
    var validate = function () {
        if (realLanguage.current === 'typescript') {
            clearTimeout(validateRef.current);
            validateRef.current = setTimeout(function () {
                try {
                    if (valueRef.current) {
                        if (isFileLanguage()) {
                            parse(valueRef.current, {
                                sourceType: 'module',
                                plugins: ['typescript', 'jsx'],
                            });
                        }
                        else if (isExpLanguage()) {
                            parseExpression(valueRef.current, {
                                plugins: ['typescript', 'jsx'],
                            });
                        }
                    }
                    monacoRef.current.editor.setModelMarkers(editorRef.current.getModel(), computedLanguage.current, []);
                    declarationRef.current = editorRef.current.deltaDecorations(declarationRef.current, [
                        {
                            range: new monacoRef.current.Range(1, 1, 1, 1),
                            options: {},
                        },
                    ]);
                    submit();
                }
                catch (e) {
                    declarationRef.current = editorRef.current.deltaDecorations(declarationRef.current, [
                        {
                            range: new monacoRef.current.Range(e.loc.line, e.loc.column, e.loc.line, e.loc.column),
                            options: {
                                isWholeLine: true,
                                glyphMarginClassName: 'monaco-error-highline',
                            },
                        },
                    ]);
                    monacoRef.current.editor.setModelMarkers(editorRef.current.getModel(), computedLanguage.current, [
                        {
                            code: '1003',
                            severity: 8,
                            startLineNumber: e.loc.line,
                            startColumn: e.loc.column,
                            endLineNumber: e.loc.line,
                            endColumn: e.loc.column,
                            message: e.message,
                        },
                    ]);
                }
            }, 240);
        }
        else {
            submit();
            declarationRef.current = editorRef.current.deltaDecorations(declarationRef.current, [
                {
                    range: new monacoRef.current.Range(1, 1, 1, 1),
                    options: {},
                },
            ]);
        }
    };
    var onChangeHandler = function (value) {
        changedRef.current = true;
        valueRef.current = value;
        validate();
    };
    computedLanguage.current = language || defaultLanguage;
    realLanguage.current = /(?:javascript|typescript)/gi.test(computedLanguage.current)
        ? 'typescript'
        : computedLanguage.current;
    var renderHelpCode = function () {
        if (!helpCode)
            return null;
        return (React.createElement("div", { className: cls(prefix + '-view', hashId), style: { width: helpCodeViewWidth || '50%' } },
            React.createElement(Editor, { value: helpCode, theme: theme === 'dark' ? 'monokai' : 'chrome-devtools', defaultLanguage: realLanguage.current, language: realLanguage.current, options: __assign(__assign({}, props.options), { lineNumbers: 'off', readOnly: true, glyphMargin: false, folding: false, lineDecorationsWidth: 0, lineNumbersMinChars: 0, minimap: {
                        enabled: false,
                    }, tabSize: 2, smoothScrolling: true, scrollbar: {
                        verticalScrollbarSize: 5,
                        horizontalScrollbarSize: 5,
                        alwaysConsumeMouseWheel: false,
                    } }), width: "100%", height: "100%" })));
    };
    return wrapSSR(React.createElement("div", { className: cls(prefix, className, {
            loaded: loaded,
        }, hashId), style: { width: width, height: height } },
        renderHelper(),
        React.createElement("div", { className: cls(prefix + '-view', hashId) },
            React.createElement(Editor, __assign({}, props, { theme: theme === 'dark' ? 'monokai' : 'chrome-devtools', defaultLanguage: realLanguage.current, language: realLanguage.current, options: __assign(__assign({ glyphMargin: true }, props.options), { tabSize: 2, smoothScrolling: true, scrollbar: {
                        verticalScrollbarSize: 5,
                        horizontalScrollbarSize: 5,
                        alwaysConsumeMouseWheel: false,
                    } }), value: input, width: "100%", height: "100%", onMount: onMountHandler }))),
        renderHelpCode()));
};
MonacoInput.loader = loader$1;

var STARTTAG_REX = /<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var EXPRESSION_REX = /^\{\{([\s\S]*)\}\}$/;
var isNumber = function (value) { return typeof value === 'number'; };
var isBoolean = function (value) { return typeof value === 'boolean'; };
var isExpression = function (value) {
    return typeof value === 'string' && EXPRESSION_REX.test(value);
};
var isRichText = function (value) {
    return typeof value === 'string' && STARTTAG_REX.test(value);
};
var isNormalText = function (value) {
    return (typeof value === 'string' && !isExpression(value) && !isRichText(value));
};
var takeNumber = function (value) {
    var num = String(value).replace(/[^\d\.]+/, '');
    if (num === '')
        return;
    return Number(num);
};
var ValueInput = createPolyInput([
    {
        type: 'TEXT',
        icon: 'Text',
        component: Input,
        checker: isNormalText,
    },
    {
        type: 'EXPRESSION',
        icon: 'Expression',
        component: function (props) {
            return (React.createElement(Popover, { content: React.createElement("div", { style: {
                        width: 400,
                        height: 200,
                        marginLeft: -16,
                        marginRight: -16,
                        marginBottom: -12,
                    } },
                    React.createElement(MonacoInput, __assign({}, props, { language: "javascript.expression" }))), trigger: "click" },
                React.createElement(Button, { block: true },
                    React.createElement(TextWidget, { token: "SettingComponents.ValueInput.expression" }))));
        },
        checker: isExpression,
        toInputValue: function (value) {
            if (!value || value === '{{}}')
                return;
            var matched = String(value).match(EXPRESSION_REX);
            return (matched === null || matched === void 0 ? void 0 : matched[1]) || value || '';
        },
        toChangeValue: function (value) {
            if (!value || value === '{{}}')
                return;
            var matched = String(value).match(EXPRESSION_REX);
            return "{{".concat((matched === null || matched === void 0 ? void 0 : matched[1]) || value || '', "}}");
        },
    },
    {
        type: 'BOOLEAN',
        icon: 'Boolean',
        component: function (props) { return (React.createElement(Select, __assign({}, props, { options: [
                { label: 'True', value: true },
                { label: 'False', value: false },
            ] }))); },
        checker: isBoolean,
        toInputValue: function (value) {
            return !!value;
        },
        toChangeValue: function (value) {
            return !!value;
        },
    },
    {
        type: 'NUMBER',
        icon: 'Number',
        component: InputNumber,
        checker: isNumber,
        toInputValue: takeNumber,
        toChangeValue: takeNumber,
    },
]);

var DrawerSetter = observer(function (props) {
    var node = useTreeNode();
    var field = useField();
    var _a = __read(useState(false), 2), visible = _a[0], setVisible = _a[1];
    var _b = __read(useState(false), 2), remove = _b[0], setRemove = _b[1];
    var _c = __read(useState(), 2), root = _c[0], setRoot = _c[1];
    var prefix = usePrefix('drawer-setter');
    var formWrapperCls = usePrefix('settings-form-wrapper');
    useLayoutEffect(function () {
        var wrapper = document.querySelector('.' + formWrapperCls);
        if (wrapper) {
            setRoot(wrapper);
        }
    }, [node]);
    var renderDrawer = function () {
        if (root && visible) {
            return createPortal(React.createElement("div", { className: cls(prefix, 'animate__animated animate__slideInRight', {
                    animate__slideOutRight: remove,
                }) },
                React.createElement("div", { className: prefix + '-header', onClick: handleClose },
                    React.createElement(IconWidget, { infer: "Return", size: 18 }),
                    React.createElement("span", { className: prefix + '-header-text' }, props.text || field.title)),
                React.createElement("div", { className: prefix + '-body' },
                    React.createElement(FormLayout, { colon: false, labelWidth: 120, labelAlign: "left", wrapperAlign: "right", feedbackLayout: "none", tooltipLayout: "text" }, props.children))), root);
        }
        return null;
    };
    var handleOpen = function () {
        setVisible(true);
    };
    var handleClose = function () {
        setRemove(true);
        setTimeout(function () {
            setVisible(false);
            setRemove(false);
        }, 150);
    };
    return (React.createElement(Fragment, null,
        React.createElement(Button, __assign({ block: true, onClick: handleOpen }, props.triggerProps), props.text || field.title),
        renderDrawer()));
});

var genFoldItemStyle = function (prefixCls, token) {
    var _a, _b, _c, _d, _e;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {},
                _b[".ant-formily-item-label-content"] = {
                    overflow: 'visible',
                },
                _b["&-base"] = {
                    cursor: 'pointer',
                },
                _b["&-title"] = (_c = {
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '-10px',
                        cursor: 'pointer'
                    },
                    _c[".dn-icon"] = (_d = {
                            transform: 'translateX(-3px)'
                        },
                        _d["svg"] = {
                            transition: 'all 0.15s ease-in-out',
                            transform: 'rotate(-90deg)',
                        },
                        _d),
                    _c["&.expand"] = (_e = {},
                        _e[".dn-icon"] = {
                            svg: {
                                transform: 'rotate(0deg)',
                            },
                        },
                        _e),
                    _c),
                _b["&-extra"] = {
                    margin: '-10px -10px 10px',
                    padding: '10px 10px 0 10px',
                    backgroundColor: token.colorBgLayout,
                },
                _b),
            _a),
    ];
};

var ExpandedMap = new Map();
var FoldItem = observer(function (_a) {
    var className = _a.className; _a.style; var children = _a.children, props = __rest(_a, ["className", "style", "children"]);
    var prefix = usePrefix('fold-item');
    var field = useField();
    var expand = useMemo(function () { return observable.ref(ExpandedMap.get(field.address.toString())); }, []);
    var slots = useRef({ base: null, extra: null });
    React.Children.forEach(children, function (node) {
        var _a, _b;
        if (React.isValidElement(node)) {
            if (((_a = node === null || node === void 0 ? void 0 : node['type']) === null || _a === void 0 ? void 0 : _a['displayName']) === 'FoldItem.Base') {
                slots.current.base = node['props'].children;
            }
            if (((_b = node === null || node === void 0 ? void 0 : node['type']) === null || _b === void 0 ? void 0 : _b['displayName']) === 'FoldItem.Extra') {
                slots.current.extra = node['props'].children;
            }
        }
    });
    var _b = useCssInJs({
        prefix: prefix,
        styleFun: genFoldItemStyle,
    }), hashId = _b.hashId, wrapSSR = _b.wrapSSR;
    return wrapSSR(React.createElement("div", { className: cls(prefix, className, hashId) },
        React.createElement("div", { className: cls(prefix + '-base', hashId), onClick: function () {
                expand.value = !expand.value;
                ExpandedMap.set(field.address.toString(), expand.value);
            } },
            React.createElement(FormItem.BaseItem, __assign({}, props, { label: React.createElement("span", { className: cls(prefix + '-title', {
                        expand: expand.value,
                    }, hashId) },
                    slots.current.extra && React.createElement(IconWidget, { infer: "Expand", size: 10 }),
                    props.label) }),
                React.createElement("div", { style: { width: '100%' }, onClick: function (e) {
                        e.stopPropagation();
                    } }, slots.current.base))),
        expand.value && slots.current.extra && (React.createElement("div", { className: cls(prefix + '-extra', hashId) }, slots.current.extra))));
});
var Base = function () {
    return React.createElement(Fragment, null);
};
Base.displayName = 'FoldItem.Base';
var Extra = function () {
    return React.createElement(Fragment, null);
};
Extra.displayName = 'FoldItem.Extra';
FoldItem.Base = Base;
FoldItem.Extra = Extra;

var genInputItemsStyle = function (prefixCls, token) {
    var _a, _b, _c, _d, _e, _f;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {
                    display: 'flex',
                    flexWrap: 'wrap'
                },
                // marginLeft: '-8px',
                _b["&-item"] = (_c = {
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '10px',
                        color: token.colorText
                    },
                    _c["&-icon"] = {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 8px',
                        flexShrink: 0,
                        flexGrow: 0,
                        color: token.colorText,
                    },
                    _c["&-controller"] = (_d = {
                            minWidth: 0,
                            flexShrink: 1,
                            flexGrow: 1
                        },
                        _d[".ant-radio-group"] = (_e = {
                                display: 'flex'
                            },
                            _e[".ant-radio-button-wrapper"] = {
                                flexGrow: 1,
                                display: 'flex',
                                justifyContent: 'center',
                            },
                            _e),
                        _d),
                    _c["&.vertical"] = (_f = {
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        },
                        _f[".dn-input-items-item-controller"] = {
                            width: '100%',
                        },
                        _f),
                    _c),
                _b),
            _a),
    ];
};
var genInputItemsItemStyle = function (prefixCls, token) {
    var _a;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = {},
            _a),
    ];
};

var InputItemsContext = React.createContext(null);
var InputItems = function (props) {
    var prefix = usePrefix('input-items');
    var hashId = useCssInJs({ prefix: prefix, styleFun: genInputItemsStyle }).hashId;
    return (React.createElement(InputItemsContext.Provider, { value: props },
        React.createElement("div", { className: cls(prefix, props.className, hashId), style: props.style }, props.children)));
};
// InputItems.defaultProps = {
//   width: '100%',
// };
InputItems.Item = function (props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a;
    var prefix = usePrefix('input-items-item');
    var ctx = useContext(InputItemsContext);
    var _b = useCssInJs({
        prefix: prefix,
        styleFun: genInputItemsItemStyle,
    }), hashId = _b.hashId, wrapSSR = _b.wrapSSR;
    return wrapSSR(React.createElement("div", { className: cls(prefix, props.className, {
            vertical: props.vertical || ctx.vertical,
        }, hashId), style: __assign({ width: width || ctx.width }, props.style) },
        props.icon && (React.createElement("div", { className: cls(prefix + '-icon', hashId) },
            React.createElement(IconWidget, { infer: props.icon, size: 16 }))),
        props.title && (React.createElement("div", { className: cls(prefix + '-title', hashId) }, props.title)),
        React.createElement("div", { className: cls(prefix + '-controller', hashId) }, props.children)));
};

var PositionMap = {
    top: 1,
    right: 2,
    bottom: 3,
    left: 4,
    all: 1,
};
var BoxRex = /([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+))?)?)?/;
var BoxStyleSetter = observer(function (props) {
    var _a = props.labels, labels = _a === void 0 ? [
        React.createElement(IconWidget, { infer: "Top", size: 16, key: "1" }),
        React.createElement(IconWidget, { infer: "Right", size: 16, key: "2" }),
        React.createElement(IconWidget, { infer: "Bottom", size: 16, key: "3" }),
        React.createElement(IconWidget, { infer: "Left", size: 16, key: "4" }),
    ] : _a;
    var field = useField();
    var prefix = usePrefix('box-style-setter');
    var createPositionHandler = function (position, props) {
        var matched = String(props.value).match(BoxRex) || [];
        var value = matched[PositionMap[position]];
        var v1 = matched[1];
        var v2 = matched[2];
        var v3 = matched[3];
        var v4 = matched[4];
        var allEqualls = v1 === v2 && v2 === v3 && v3 === v4;
        return __assign(__assign({}, props), { value: position === 'all' ? (allEqualls ? v1 : undefined) : value, onChange: function (value) {
                var _a, _b;
                if (position === 'all') {
                    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, "".concat(value || '0px', " ").concat(value || '0px', " ").concat(value || '0px', " ").concat(value || '0px'));
                }
                else {
                    matched[PositionMap[position]] = value;
                    (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, "".concat(matched[1] || '0px', " ").concat(matched[2] || '0px', " ").concat(matched[3] || '0px', " ").concat(matched[4] || '0px'));
                }
            } });
    };
    return (React.createElement(FoldItem, { className: cls(prefix, props.className), label: field.title },
        React.createElement(FoldItem.Base, null,
            React.createElement(SizeInput, __assign({}, createPositionHandler('all', props), { exclude: ['inherit', 'auto'] }))),
        React.createElement(FoldItem.Extra, null,
            React.createElement(InputItems, { width: "50%" },
                React.createElement(InputItems.Item, { icon: labels[0] },
                    React.createElement(SizeInput, __assign({}, createPositionHandler('top', props), { exclude: ['inherit', 'auto'] }))),
                React.createElement(InputItems.Item, { icon: labels[1] },
                    React.createElement(SizeInput, __assign({}, createPositionHandler('right', props), { exclude: ['inherit', 'auto'] }))),
                React.createElement(InputItems.Item, { icon: labels[2] },
                    React.createElement(SizeInput, __assign({}, createPositionHandler('bottom', props), { exclude: ['inherit', 'auto'] }))),
                React.createElement(InputItems.Item, { icon: labels[3] },
                    React.createElement(SizeInput, __assign({}, createPositionHandler('left', props), { exclude: ['inherit', 'auto'] })))))));
});
// BoxStyleSetter.defaultProps = {
//   labels: [
//     <IconWidget infer="Top" size={16} key="1" />,
//     <IconWidget infer="Right" size={16} key="2" />,
//     <IconWidget infer="Bottom" size={16} key="3" />,
//     <IconWidget infer="Left" size={16} key="4" />,
//   ],
// };

var genBorderStyleSetterStyle = function (prefixCls, token) {
    var _a, _b, _c, _d, _e;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {
                    display: 'flex'
                },
                _b["&-position"] = {
                    marginLeft: '-10px',
                },
                _b["&-input"] = {
                    height: '110px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                },
                _b),
            _a[".border-style-solid-line"] = (_c = {
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'block'
                },
                _c["&::after"] = {
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    display: 'block',
                    content: "' '",
                    height: 0,
                    width: '100%',
                    borderTop: '2px solid currentColor',
                    transform: 'translateY(-50%)',
                },
                _c),
            _a[".border-style-dashed-line"] = (_d = {
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'block'
                },
                _d["&::after"] = {
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    display: 'block',
                    content: "' '",
                    height: 0,
                    width: '100%',
                    borderTop: '2px dashed currentColor',
                    transform: 'translateY(-50%)',
                },
                _d),
            _a[".border-style-dotted-line"] = (_e = {
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'block'
                },
                _e["&::after"] = {
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    display: 'block',
                    content: "''",
                    height: 0,
                    width: '100%',
                    borderTop: '2px dotted currentColor',
                    transform: 'translateY(-50%)',
                },
                _e),
            _a),
    ];
};

var Positions = ['center', 'top', 'right', 'bottom', 'left'];
var BorderStyleOptions = function (hashId) {
    return [
        {
            label: 'None',
            value: 'none',
        },
        {
            label: React.createElement("span", { className: cls('border-style-solid-line', hashId) }),
            value: 'solid',
        },
        {
            label: React.createElement("span", { className: cls('border-style-dashed-line', hashId) }),
            value: 'dashed',
        },
        {
            label: React.createElement("span", { className: cls('border-style-dotted-line', hashId) }),
            value: 'dotted',
        },
    ];
};
var createBorderProp = function (position, key) {
    var insert = position === 'center' ? '' : "-".concat(position);
    return camelCase("border".concat(insert, "-").concat(key));
};
var parseInitPosition = function (field) {
    var basePath = field.address.parent();
    for (var i = 0; i < Positions.length; i++) {
        var position = Positions[i];
        var stylePath = "".concat(basePath, ".").concat(createBorderProp(position, 'style'));
        var widthPath = "".concat(basePath, ".").concat(createBorderProp(position, 'width'));
        var colorPath = "".concat(basePath, ".").concat(createBorderProp(position, 'color'));
        if (field.query(stylePath).value() ||
            field.query(widthPath).value() ||
            field.query(colorPath).value()) {
            return position;
        }
    }
    return 'center';
};
var BorderStyleSetter = observer(function (_a) {
    var className = _a.className, style = _a.style;
    var field = useField();
    var currentPosition = useMemo(function () {
        return observable({
            value: parseInitPosition(field),
        });
    }, [field.value]);
    var prefix = usePrefix('border-style-setter');
    var createReaction = function (position) { return function (field) {
        field.display = currentPosition.value === position ? 'visible' : 'hidden';
        if (position !== 'center') {
            var borderStyle = field.query('.borderStyle').value();
            var borderWidth = field.query('.borderWidth').value();
            var borderColor = field.query('.borderColor').value();
            if (borderStyle || borderWidth || borderColor) {
                field.value = undefined;
            }
        }
    }; };
    var hashId = useCssInJs({
        prefix: prefix,
        styleFun: genBorderStyleSetterStyle,
    }).hashId;
    return (React.createElement(FoldItem, { label: field.title },
        React.createElement(FoldItem.Extra, null,
            React.createElement("div", { className: cls(prefix, className, hashId), style: style },
                React.createElement("div", { className: cls(prefix + '-position', hashId) },
                    React.createElement(PositionInput, { value: currentPosition.value, onChange: function (value) {
                            currentPosition.value = value;
                        } })),
                React.createElement("div", { className: cls(prefix + '-input', hashId) }, Positions.map(function (position, key) {
                    return (React.createElement(Fragment, { key: key },
                        React.createElement(Field, { name: createBorderProp(position, 'style'), basePath: field.address.parent(), dataSource: BorderStyleOptions(hashId), reactions: createReaction(position), component: [Select$1, { placeholder: 'Please Select' }] }),
                        React.createElement(Field, { name: createBorderProp(position, 'width'), basePath: field.address.parent(), reactions: createReaction(position), component: [SizeInput, { exclude: ['auto'] }] }),
                        React.createElement(Field, { name: createBorderProp(position, 'color'), basePath: field.address.parent(), reactions: createReaction(position), component: [ColorInput] })));
                }))))));
});

var BorderRadiusStyleSetter = function (props) {
    return (React.createElement(BoxStyleSetter, __assign({}, props, { labels: [
            React.createElement(IconWidget, { infer: "TopLeft", size: 16, key: "1" }),
            React.createElement(IconWidget, { infer: "TopRight", size: 16, key: "2" }),
            React.createElement(IconWidget, { infer: "BottomRight", size: 16, key: "3" }),
            React.createElement(IconWidget, { infer: "BottomLeft", size: 16, key: "4" }),
        ] })));
};

var useToken = theme.useToken;
var BackgroundStyleSetter = observer(function (props) {
    var field = useField();
    var prefix = usePrefix('background-style-setter');
    var hashId = useToken().hashId;
    return (React.createElement(FoldItem, { className: cls(prefix, props.className, hashId), label: field.title },
        React.createElement(FoldItem.Base, null,
            React.createElement(Field, { name: "backgroundColor", basePath: field.address.parent(), component: [ColorInput] })),
        React.createElement(FoldItem.Extra, null,
            React.createElement(InputItems, null,
                React.createElement(InputItems.Item, { icon: "Image" },
                    React.createElement(Field, { name: "backgroundImage", basePath: field.address.parent(), component: [BackgroundImageInput] })),
                React.createElement(InputItems.Item, { icon: "ImageSize", width: "50%" },
                    React.createElement(Field, { name: "backgroundSize", basePath: field.address.parent(), component: [BackgroundSizeInput] })),
                React.createElement(InputItems.Item, { icon: "Repeat", width: "50%" },
                    React.createElement(Field, { name: "backgroundRepeat", basePath: field.address.parent(), component: [
                            Select$1,
                            { style: { width: '100%' }, placeholder: 'Repeat' },
                        ], dataSource: [
                            {
                                label: 'No Repeat',
                                value: 'no-repeat',
                            },
                            {
                                label: 'Repeat',
                                value: 'repeat',
                            },
                            {
                                label: 'Repeat X',
                                value: 'repeat-x',
                            },
                            {
                                label: 'Repeat Y',
                                value: 'repeat-y',
                            },
                            {
                                label: 'Space',
                                value: 'space',
                            },
                            {
                                label: 'Round',
                                value: 'round',
                            },
                        ] })),
                React.createElement(InputItems.Item, { icon: "Position" },
                    React.createElement(Field, { name: "backgroundPosition", basePath: field.address.parent(), component: [Input$1, { placeholder: 'center center' }] }))))));
});

var BoxShadowStyleSetter = observer(function (props) {
    var field = useField();
    var prefix = usePrefix('shadow-style-setter');
    var createBoxShadowConnector = function (position) {
        var splited = String(props.value || '')
            .trim()
            .split(' ');
        return {
            value: splited[position],
            onChange: function (value) {
                var _a;
                splited[position] = value;
                (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, "".concat(splited[0] || '', " ").concat(splited[1] || '', " ").concat(splited[2] || '', " ").concat(splited[3] || '', " ").concat(splited[4] || ''));
            },
        };
    };
    return (React.createElement(FoldItem, { className: cls(prefix, props.className), style: props.style, label: field.title },
        React.createElement(FoldItem.Base, null,
            React.createElement(ColorInput, __assign({}, createBoxShadowConnector(4)))),
        React.createElement(FoldItem.Extra, null,
            React.createElement(InputItems, { width: "50%" },
                React.createElement(InputItems.Item, { icon: "AxisX" },
                    React.createElement(SizeInput, __assign({ exclude: ['inherit', 'auto'] }, createBoxShadowConnector(0)))),
                React.createElement(InputItems.Item, { icon: "AxisY" },
                    React.createElement(SizeInput, __assign({ exclude: ['inherit', 'auto'] }, createBoxShadowConnector(1)))),
                React.createElement(InputItems.Item, { icon: "Blur" },
                    React.createElement(SizeInput, __assign({ exclude: ['inherit', 'auto'] }, createBoxShadowConnector(2)))),
                React.createElement(InputItems.Item, { icon: "Shadow" },
                    React.createElement(SizeInput, __assign({ exclude: ['inherit', 'auto'] }, createBoxShadowConnector(3))))))));
});

var createFontFamilyOptions = function (fonts) {
    return fonts.map(function (font) {
        var splited = font.split('=');
        var label = splited === null || splited === void 0 ? void 0 : splited[0];
        var value = splited === null || splited === void 0 ? void 0 : splited[1];
        return {
            label: React.createElement("span", { style: { fontFamily: value } }, label),
            value: value,
        };
    });
};
var FontFamilyOptions = createFontFamilyOptions([
    '宋体=SimSun',
    '微软雅黑=Microsoft Yahei',
    '苹方=PingFang SC',
    'Andale Mono=andale mono,monospace',
    'Arial=arial,helvetica,sans-serif',
    'Arial Black=arial black,sans-serif',
    'Book Antiqua=book antiqua,palatino,serif',
    'Comic Sans MS=comic sans ms,sans-serif',
    'Courier New=courier new,courier,monospace',
    'Georgia=georgia,palatino,serif',
    'Helvetica Neue=Helvetica Neue',
    'Helvetica=helvetica,arial,sans-serif',
    'Impact=impact,sans-serif',
    'Symbol=symbol',
    'Tahoma=tahoma,arial,helvetica,sans-serif',
    'Terminal=terminal,monaco,monospace',
    'Times New Roman=times new roman,times,serif',
    'Trebuchet MS=trebuchet ms,geneva,sans-serif',
    'Verdana=verdana,geneva,sans-serif',
]);
var FontStyleSetter = observer(function (props) {
    var field = useField();
    var prefix = usePrefix('font-style-setter');
    return (React.createElement(FoldItem, { label: field.title, className: cls(prefix, props.className), style: props.style },
        React.createElement(FoldItem.Base, null,
            React.createElement(Field, { name: "fontFamily", basePath: field.address.parent(), component: [
                    Select$1,
                    { style: { width: '100%' }, placeholder: 'Helvetica Neue' },
                ], dataSource: FontFamilyOptions })),
        React.createElement(FoldItem.Extra, null,
            React.createElement(InputItems, null,
                React.createElement(InputItems.Item, { icon: "FontWeight", width: "50%" },
                    React.createElement(Field, { name: "fontWeight", basePath: field.address.parent(), component: [NumberPicker, { placeholder: '400' }] })),
                React.createElement(InputItems.Item, { icon: "FontStyle", width: "50%" },
                    React.createElement(Field, { name: "fontStyle", basePath: field.address.parent(), dataSource: [
                            {
                                label: React.createElement(IconWidget, { infer: "NormalFontStyle" }),
                                value: 'normal',
                            },
                            {
                                label: React.createElement(IconWidget, { infer: "ItalicFontStyle" }),
                                value: 'italic',
                            },
                        ], component: [Radio.Group, { optionType: 'button' }] })),
                React.createElement(InputItems.Item, { icon: "FontColor", width: "100%" },
                    React.createElement(Field, { name: "color", basePath: field.address.parent(), component: [ColorInput] })),
                React.createElement(InputItems.Item, { icon: "FontSize", width: "50%" },
                    React.createElement(Field, { name: "fontSize", basePath: field.address.parent(), component: [SizeInput, { exclude: ['auto'] }] })),
                React.createElement(InputItems.Item, { icon: "LineHeight", width: "50%" },
                    React.createElement(Field, { name: "lineHeight", basePath: field.address.parent(), component: [SizeInput, { exclude: ['auto'] }] })),
                React.createElement(InputItems.Item, { icon: "TextAlign" },
                    React.createElement(Field, { name: "textAlign", basePath: field.address.parent(), dataSource: [
                            {
                                label: React.createElement(IconWidget, { infer: "TextAlignLeft" }),
                                value: 'left',
                            },
                            {
                                label: React.createElement(IconWidget, { infer: "TextAlignCenter" }),
                                value: 'center',
                            },
                            {
                                label: React.createElement(IconWidget, { infer: "TextAlignRight" }),
                                value: 'right',
                            },
                            {
                                label: React.createElement(IconWidget, { infer: "TextAlignJustify" }),
                                value: 'justify',
                            },
                        ], component: [Radio.Group, { optionType: 'button' }] })),
                React.createElement(InputItems.Item, { icon: "TextDecoration" },
                    React.createElement(Field, { name: "textDecoration", basePath: field.address.parent(), dataSource: [
                            {
                                label: '--',
                                value: 'none',
                            },
                            {
                                label: React.createElement(IconWidget, { infer: "TextUnderline" }),
                                value: 'underline',
                            },
                            {
                                label: React.createElement(IconWidget, { infer: "TextLineThrough" }),
                                value: 'line-through',
                            },
                        ], component: [Radio.Group, { optionType: 'button' }] }))))));
});

var genFlexStyleSetterStyle = function (prefixCls, token) {
    var _a, _b;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {},
                _b[".dn-input-items"] = {
                // margin: `-10px -10px 10px`,
                // padding: '10px 10px 0 10px'
                },
                _b),
            _a),
    ];
};

var FlexStyleSetter = observer(function (props) {
    var field = useField();
    var prefix = usePrefix('flex-style-setter');
    var hashId = useCssInJs({
        prefix: prefix,
        styleFun: genFlexStyleSetterStyle,
    }).hashId;
    return (React.createElement("div", { className: cls(prefix, props.className, hashId), style: props.style },
        React.createElement(InputItems, { vertical: true },
            React.createElement(Field, { name: "flexDirection", basePath: field.address.parent(), dataSource: [
                    {
                        label: React.createElement(IconWidget, { infer: "FlexDirectionRow" }),
                        value: 'row',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexDirectionColumn" }),
                        value: 'column',
                    },
                ], reactions: function (field) {
                    field.decorator[1].title = "Flex Direction : ".concat(field.value || '');
                }, decorator: [InputItems.Item], component: [Radio.Group, { optionType: 'button' }] }),
            React.createElement(Field, { name: "flexWrap", basePath: field.address.parent(), dataSource: [
                    {
                        label: React.createElement(IconWidget, { infer: "FlexNoWrap" }),
                        value: 'nowrap',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexWrap" }),
                        value: 'wrap',
                    },
                ], reactions: function (field) {
                    field.decorator[1].title = "Flex Wrap : ".concat(field.value || '');
                }, decorator: [InputItems.Item], component: [Radio.Group, { optionType: 'button' }] }),
            React.createElement(Field, { name: "alignContent", basePath: field.address.parent(), dataSource: [
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignContentCenter" }),
                        value: 'center',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignContentStart" }),
                        value: 'flex-start',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignContentEnd" }),
                        value: 'flex-end',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignContentSpaceAround" }),
                        value: 'space-around',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignContentSpaceBetween" }),
                        value: 'space-between',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignContentStretch" }),
                        value: 'stretch',
                    },
                ], reactions: function (field) {
                    field.decorator[1].title = "Align Content : ".concat(field.value || '');
                }, decorator: [InputItems.Item], component: [Radio.Group, { optionType: 'button' }] }),
            React.createElement(Field, { name: "justifyContent", basePath: field.address.parent(), dataSource: [
                    {
                        label: React.createElement(IconWidget, { infer: "FlexJustifyCenter" }),
                        value: 'center',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexJustifyStart" }),
                        value: 'flex-start',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexJustifyEnd" }),
                        value: 'flex-end',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexJustifySpaceAround" }),
                        value: 'space-around',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexJustifySpaceBetween" }),
                        value: 'space-between',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexJustifySpaceEvenly" }),
                        value: 'space-evenly',
                    },
                ], reactions: function (field) {
                    field.decorator[1].title = "Justify Content : ".concat(field.value || '');
                }, decorator: [InputItems.Item], component: [Radio.Group, { optionType: 'button' }] }),
            React.createElement(Field, { name: "alignItems", basePath: field.address.parent(), dataSource: [
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignItemsCenter" }),
                        value: 'center',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignItemsStart" }),
                        value: 'flex-start',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignItemsEnd" }),
                        value: 'flex-end',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignItemsStretch" }),
                        value: 'stretch',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignItemsBaseline" }),
                        value: 'baseline',
                    },
                ], reactions: function (field) {
                    field.decorator[1].title = "Align Items : ".concat(field.value || '');
                }, decorator: [InputItems.Item], component: [Radio.Group, { optionType: 'button' }] }))));
});

var genDisplayStyleSetterStyle = function (prefixCls, token) {
    var _a, _b, _c;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {},
                _b["&-radio"] = (_c = {
                        display: "flex !important",
                        width: '100%'
                    },
                    _c[".ant-radio-button-wrapper"] = {
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 0,
                    },
                    _c),
                _b),
            _a),
    ];
};

var DisplayStyleSetter = observer(function (props) {
    var field = useField();
    var prefix = usePrefix('display-style-setter');
    var _a = useCssInJs({
        prefix: prefix,
        styleFun: genDisplayStyleSetterStyle,
    }), hashId = _a.hashId, wrapSSR = _a.wrapSSR;
    return wrapSSR(React.createElement(React.Fragment, null,
        React.createElement(FormItem.BaseItem, { label: field.title, className: cls(prefix, props.className, hashId), style: props.style },
            React.createElement(Radio$1.Group, { className: cls(prefix + '-radio', hashId), options: [
                    {
                        label: React.createElement(IconWidget, { infer: "DisplayBlock", size: 16 }),
                        value: 'block',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "DisplayInlineBlock", size: 16 }),
                        value: 'inline-block',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "DisplayInline", size: 16 }),
                        value: 'inline',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "DisplayFlex", size: 16 }),
                        value: 'flex',
                    },
                ], value: props.value, onChange: function (e) {
                    var _a;
                    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e.target.value);
                }, optionType: "button" })),
        React.createElement(Field, { name: "flex", basePath: field.address.parent(), visible: false, reactions: function (flexField) {
                flexField.visible = field.value === 'flex';
            }, component: [FlexStyleSetter] })));
});

var genCollapseItemStyle = function (prefixCls, token) {
    var _a, _b, _c, _d, _e;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {
                    flexWrap: 'wrap'
                },
                _b["&-header"] = (_c = {
                        display: 'flex',
                        alignItems: 'center',
                        padding: '5px 20px',
                        margin: '-1px -20px 0 -20px',
                        color: token.colorText,
                        borderTop: "1px solid ".concat(token.colorBorder),
                        borderBottom: "1px solid ".concat(token.colorBorder),
                        backgroundColor: '#eee',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease-in-out',
                        fontSize: '13px'
                    },
                    _c["&-expand"] = {
                        marginLeft: "-13px",
                        transform: "rotate(-90deg)",
                        fontSize: '12px',
                        transition: 'all 0.15s ease-in-out',
                        marginRight: '3px',
                    },
                    _c),
                _b["&-content"] = (_d = {
                        display: 'none',
                        width: '100%',
                        paddingTop: '4px'
                    },
                    _d["& > div:last-child"] = {
                        borderBottom: "none !important",
                    },
                    _d),
                _b["&.expand"] = (_e = {},
                    _e[".dn-collapse-item-content"] = {
                        display: "block",
                    },
                    _e[".dn-collapse-item-header-expand"] = {
                        transform: "rotate(0)",
                    },
                    _e),
                _b),
            _a),
    ];
};

var CollapseItem = observer(function (props) {
    var _a;
    var prefix = usePrefix('collapse-item');
    var _b = useCssInJs({
        prefix: prefix,
        styleFun: genCollapseItemStyle,
    }), hashId = _b.hashId, wrapSSR = _b.wrapSSR;
    var field = useField();
    var _c = __read(useState((_a = props.defaultExpand) !== null && _a !== void 0 ? _a : true), 2), expand = _c[0], setExpand = _c[1];
    return wrapSSR(React.createElement("div", { className: cls(prefix, props.className, { expand: expand }, hashId), style: props.style },
        React.createElement("div", { className: cls(prefix + '-header', hashId), onClick: function (e) {
                e.stopPropagation();
                e.preventDefault();
                setExpand(!expand);
            } },
            React.createElement("div", { className: cls(prefix + '-header-expand', hashId) },
                React.createElement(IconWidget, { infer: "Expand", size: 10 })),
            React.createElement("div", { className: cls(prefix + '-header-content', hashId) }, field.title)),
        React.createElement("div", { className: cls(prefix + '-content', hashId) }, props.children)));
});

var SchemaField = createSchemaField({
    components: {
        FormItem: FormItem,
        CollapseItem: CollapseItem,
        Input: Input$1,
        ValueInput: ValueInput,
        SizeInput: SizeInput,
        ColorInput: ColorInput,
        ImageInput: ImageInput,
        MonacoInput: MonacoInput,
        PositionInput: PositionInput,
        CornerInput: CornerInput,
        BackgroundImageInput: BackgroundImageInput,
        BackgroundStyleSetter: BackgroundStyleSetter,
        BoxStyleSetter: BoxStyleSetter,
        BorderStyleSetter: BorderStyleSetter,
        BorderRadiusStyleSetter: BorderRadiusStyleSetter,
        DisplayStyleSetter: DisplayStyleSetter,
        BoxShadowStyleSetter: BoxShadowStyleSetter,
        FlexStyleSetter: FlexStyleSetter,
        FontStyleSetter: FontStyleSetter,
        DrawerSetter: DrawerSetter,
        NumberPicker: NumberPicker,
        DatePicker: DatePicker,
        TimePicker: TimePicker,
        Select: Select$1,
        Radio: Radio,
        Slider: Slider,
        Switch: Switch,
        Space: Space,
        ArrayItems: ArrayItems,
        ArrayTable: ArrayTable,
        FormCollapse: FormCollapse,
        FormGrid: FormGrid,
        FormLayout: FormLayout,
        FormTab: FormTab,
    },
});

var takeIcon = function (message) {
    if (!isStr(message))
        return;
    var matched = message.match(/@([^:\s]+)(?:\s*\:\s*([\s\S]+))?/);
    if (matched)
        return [matched[1], matched[2]];
    return;
};
var mapEnum = function (dataSource) { return function (item, index) {
    var _a, _b, _c;
    var label = dataSource[index] || dataSource[item.value] || item.label;
    var icon = takeIcon(label);
    return __assign(__assign({}, item), { value: (_a = item === null || item === void 0 ? void 0 : item.value) !== null && _a !== void 0 ? _a : null, label: icon ? (React.createElement(IconWidget, { infer: icon[0], tooltip: icon[1] })) : ((_c = (_b = label === null || label === void 0 ? void 0 : label.label) !== null && _b !== void 0 ? _b : label) !== null && _c !== void 0 ? _c : 'Unknow') });
}; };
var effectLocales = function (node) {
    onFieldReact('*', function (field) {
        var _a, _b;
        var path = field.path.toString().replace(/\.[\d+]/g, '');
        var takeMessage = function (prop) {
            var token = "settings.".concat(path).concat(prop ? ".".concat(prop) : '');
            return node.getMessage(token) || GlobalRegistry.getDesignerMessage(token);
        };
        var title = takeMessage('title') || takeMessage();
        var description = takeMessage('description');
        var tooltip = takeMessage('tooltip');
        var dataSource = takeMessage('dataSource');
        var placeholder = takeMessage('placeholder');
        if (title) {
            field.title = title;
        }
        if (description) {
            field.description = description;
        }
        if (tooltip) {
            field.decorator[1] = field.decorator[1] || [];
            field.decorator[1].tooltip = tooltip;
        }
        if (placeholder) {
            field.component[1] = field.component[1] || [];
            field.component[1].placeholder = placeholder;
        }
        if (!isVoidField(field)) {
            if (dataSource === null || dataSource === void 0 ? void 0 : dataSource.length) {
                if ((_a = field.dataSource) === null || _a === void 0 ? void 0 : _a.length) {
                    field.dataSource = field.dataSource.map(mapEnum(dataSource));
                }
                else {
                    field.dataSource = dataSource.slice();
                }
            }
            else {
                field.dataSource = (_b = field.dataSource) === null || _b === void 0 ? void 0 : _b.filter(Boolean);
            }
        }
    });
};

var timeRequest = null;
var effectSnapshot = function (operation) {
    onFieldInputValueChange('*', function () {
        clearTimeout(timeRequest);
        timeRequest = setTimeout(function () {
            operation.snapshot('update:node:props');
        }, 1000);
    });
};

var fadeIn = new Keyframes('fadeIn', {
    '0%': {
        opacity: 0,
    },
    '100%': {
        opacity: 1,
    },
});
var slideInRight = new Keyframes('slideInRight', {
    '0%': {
        transform: 'translateX(100%)',
    },
    '100%': {
        transform: 'translateX(0)',
    },
});
var slideOutRight = new Keyframes('slideOutRight', {
    '0%': {
        transform: 'translateX(0)',
    },
    '100%': {
        transform: 'translateX(100%)',
    },
});
var genSettingsFormStyle = function (prefixCls, token) {
    var _a, _b, _c, _d, _e, _f, _g;
    return [
        (_a = {},
            _a[".".concat(prefixCls)] = (_b = {
                    padding: '0 20px'
                },
                _b["&-wrapper"] = (_c = {
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden'
                    },
                    _c[".dn-node-path"] = {
                        flexGrow: 0,
                    },
                    _c[".ant-formily-item"] = (_d = {
                            paddingBottom: '8px',
                            marginBottom: '8px',
                            marginTop: '8px',
                            borderBottom: "1px solid ".concat(token.colorBorder)
                        },
                        _d["*"] = {
                            fontSize: '13px',
                        },
                        _d[".ant-formily-item-control-content-component"] = (_e = {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            },
                            _e["& > .ant-radio-group"] = (_f = {
                                    display: 'flex !important',
                                    width: '100%'
                                },
                                _f[".ant-radio-button-wrapper"] = {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '0 6px !important',
                                    alignItems: 'center',
                                    flexGrow: 2,
                                },
                                _f),
                            _e["& > .ant-slider"] = {
                                flexShrink: 0,
                                minWidth: 0,
                                width: '100%',
                            },
                            _e["& > .ant-select"] = {
                                maxWidth: '140px',
                            },
                            _e),
                        _d),
                    _c),
                _b["&-content"] = {
                    flexGrow: 1,
                    overflow: 'overlay',
                },
                _b["&-empty"] = {
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    color: '#888',
                },
                _b),
            _a),
        (_g = {},
            _g[".animate__fadeInUp"] = {
                animationName: fadeIn,
            },
            _g[".animate__slideInRight"] = {
                animationName: slideInRight,
            },
            _g[".animate__slideOutRight"] = {
                animationName: slideOutRight,
            },
            _g[".animate__animated"] = {
                animationDelay: '0ms',
                animationDuration: '0.25s',
                animationFillMode: 'forwards',
            },
            _g),
        fadeIn,
        slideInRight,
        slideOutRight,
    ];
};

// import './styles.less'
var GlobalState = {
    idleRequest: null,
};
var SettingsForm = observer(function (props) {
    var _a, _b;
    var workbench = useWorkbench();
    var currentWorkspace = (workbench === null || workbench === void 0 ? void 0 : workbench.activeWorkspace) || (workbench === null || workbench === void 0 ? void 0 : workbench.currentWorkspace);
    var currentWorkspaceId = currentWorkspace === null || currentWorkspace === void 0 ? void 0 : currentWorkspace.id;
    var operation = useOperation(currentWorkspaceId);
    var node = useSelectedNode(currentWorkspaceId);
    var selected = useSelected(currentWorkspaceId);
    var prefix = usePrefix('settings-form');
    var schema = (_a = node === null || node === void 0 ? void 0 : node.designerProps) === null || _a === void 0 ? void 0 : _a.propsSchema;
    var isEmpty = !(node &&
        ((_b = node.designerProps) === null || _b === void 0 ? void 0 : _b.propsSchema) &&
        selected.length === 1);
    var form = useMemo(function () {
        var _a;
        debugger;
        return createForm({
            initialValues: (_a = node === null || node === void 0 ? void 0 : node.designerProps) === null || _a === void 0 ? void 0 : _a.defaultProps,
            values: node === null || node === void 0 ? void 0 : node.props,
            effects: function (form) {
                var _a;
                effectLocales(node);
                effectSnapshot(operation);
                (_a = props.effects) === null || _a === void 0 ? void 0 : _a.call(props, form);
            },
        });
    }, [node, node === null || node === void 0 ? void 0 : node.props, schema, operation, isEmpty]);
    var render = function () {
        if (!isEmpty) {
            return (React.createElement("div", { className: cls(prefix, props.className, hashId), style: props.style, key: node.id },
                React.createElement(SettingsFormContext.Provider, { value: props },
                    React.createElement(Form, { form: form, colon: false, labelWidth: 120, labelAlign: "left", wrapperAlign: "right", feedbackLayout: "none", tooltipLayout: "text" },
                        React.createElement(SchemaField, { schema: schema, components: props.components, scope: __assign({ $node: node }, props.scope) })))));
        }
        return (React.createElement("div", { className: prefix + '-empty' },
            React.createElement(Empty, null)));
    };
    var _c = useCssInJs({
        prefix: prefix,
        styleFun: genSettingsFormStyle,
    }), hashId = _c.hashId, wrapSSR = _c.wrapSSR;
    return wrapSSR(React.createElement(IconWidget.Provider, { tooltip: true },
        React.createElement("div", { className: cls(prefix + '-wrapper', hashId) },
            !isEmpty && React.createElement(NodePathWidget, { workspaceId: currentWorkspaceId }),
            React.createElement("div", { className: cls(prefix + '-content', hashId) }, render()))));
}, {
    scheduler: function (update) {
        cancelIdle(GlobalState.idleRequest);
        GlobalState.idleRequest = requestIdle(update, {
            timeout: 500,
        });
    },
});

var loadScript = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var options, path;
    return __generator(this, function (_a) {
        options = __assign({ base: getNpmCDNRegistry() }, props);
        if (globalThisPolyfill[props.root])
            return [2 /*return*/, globalThisPolyfill[options.root]];
        path = "".concat(options.base, "/").concat(options.package, "/").concat(options.entry);
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = false;
                script.src = path;
                script.onload = function () {
                    var module = globalThisPolyfill[options.root];
                    globalThisPolyfill['define'] = define;
                    resolve(module);
                    script.remove();
                };
                script.onerror = function (err) {
                    reject(err);
                };
                var define = globalThisPolyfill['define'];
                globalThisPolyfill['define'] = undefined;
                document.body.appendChild(script);
            })];
    });
}); };

export { BackgroundImageInput, BackgroundSizeInput, BackgroundStyleSetter, BorderRadiusStyleSetter, BorderStyleSetter, BoxShadowStyleSetter, BoxStyleSetter, CollapseItem, ColorInput, CornerInput, DisplayStyleSetter, DrawerSetter, FlexStyleSetter, FoldItem, FontStyleSetter, ImageInput, InputItems, MonacoInput, PositionInput, SchemaField, SettingsForm, SettingsFormContext, SizeInput, ValueInput, createPolyInput, effectLocales, effectSnapshot, getNpmCDNRegistry, loadScript, setNpmCDNRegistry };
