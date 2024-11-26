import { Schema } from '@formily/json-schema';
import { clone, uid } from '@form-created/shared';

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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var createOptions = function (options) {
    return __assign({ designableFieldName: 'Field', designableFormName: 'Form' }, options);
};
var findNode = function (node, finder) {
    if (!node)
        return;
    if (finder(node))
        return node;
    if (!node.children)
        return;
    for (var i = 0; i < node.children.length; i++) {
        if (findNode(node.children[i]))
            return node.children[i];
    }
    return;
};
var transformToSchema = function (node, options) {
    var realOptions = createOptions(options);
    var root = findNode(node, function (child) {
        return child.componentName === realOptions.designableFormName;
    });
    var schema = {
        type: 'object',
        properties: {},
    };
    if (!root)
        return { schema: schema };
    var createSchema = function (node, schema) {
        if (schema === void 0) { schema = {}; }
        if (node !== root) {
            Object.assign(schema, clone(node.props));
        }
        schema['x-designable-id'] = node.id;
        if (schema.type === 'array') {
            if (node.children[0]) {
                if (node.children[0].componentName === realOptions.designableFieldName) {
                    schema.items = createSchema(node.children[0]);
                    schema['x-index'] = 0;
                }
            }
            node.children.slice(1).forEach(function (child, index) {
                if (child.componentName !== realOptions.designableFieldName)
                    return;
                var key = child.props.name || child.id;
                schema.properties = schema.properties || {};
                schema.properties[key] = createSchema(child);
                schema.properties[key]['x-index'] = index;
            });
        }
        else {
            node.children.forEach(function (child, index) {
                if (child.componentName !== realOptions.designableFieldName)
                    return;
                var key = child.props.name || child.id;
                schema.properties = schema.properties || {};
                schema.properties[key] = createSchema(child);
                schema.properties[key]['x-index'] = index;
            });
        }
        return schema;
    };
    return { form: clone(root.props), schema: createSchema(root, schema) };
};
var transformToTreeNode = function (formily, options) {
    if (formily === void 0) { formily = {}; }
    var realOptions = createOptions(options);
    var root = {
        componentName: realOptions.designableFormName,
        props: formily.form,
        children: [],
    };
    var schema = new Schema(formily.schema);
    var cleanProps = function (props) {
        if (props['name'] === props['x-designable-id']) {
            delete props.name;
        }
        delete props['version'];
        delete props['_isJSONSchemaObject'];
        return props;
    };
    var appendTreeNode = function (parent, schema) {
        if (!schema)
            return;
        var current = {
            id: schema['x-designable-id'] || uid(),
            componentName: realOptions.designableFieldName,
            props: cleanProps(schema.toJSON(false)),
            children: [],
        };
        parent.children.push(current);
        if (schema.items && !Array.isArray(schema.items)) {
            appendTreeNode(current, schema.items);
        }
        schema.mapProperties(function (schema) {
            schema['x-designable-id'] = schema['x-designable-id'] || uid();
            appendTreeNode(current, schema);
        });
    };
    schema.mapProperties(function (schema) {
        schema['x-designable-id'] = schema['x-designable-id'] || uid();
        appendTreeNode(root, schema);
    });
    return root;
};

export { transformToSchema, transformToTreeNode };
