import { Schema as e } from "@formily/json-schema";

import { clone as r, uid as i } from "@form-created/shared";

var n = function() {
    return n = Object.assign || function(e) {
        for (var r, i = 1, n = arguments.length; i < n; i++) for (var o in r = arguments[i], 
        r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
        return e;
    }, n.apply(this, arguments);
};

"function" == typeof SuppressedError && SuppressedError;

var o = function(e) {
    return n({
        designableFieldName: "Field",
        designableFormName: "Form"
    }, e);
}, t = function(e, r) {
    if (e) {
        if (r(e)) return e;
        if (e.children) for (var i = 0; i < e.children.length; i++) if (t(e.children[i])) return e.children[i];
    }
}, a = function(e, i) {
    var n = o(i), a = t(e, (function(e) {
        return e.componentName === n.designableFormName;
    })), s = {
        type: "object",
        properties: {}
    };
    if (!a) return {
        schema: s
    };
    var d = function(e, i) {
        return void 0 === i && (i = {}), e !== a && Object.assign(i, r(e.props)), i["x-designable-id"] = e.id, 
        "array" === i.type ? (e.children[0] && e.children[0].componentName === n.designableFieldName && (i.items = d(e.children[0]), 
        i["x-index"] = 0), e.children.slice(1).forEach((function(e, r) {
            if (e.componentName === n.designableFieldName) {
                var o = e.props.name || e.id;
                i.properties = i.properties || {}, i.properties[o] = d(e), i.properties[o]["x-index"] = r;
            }
        }))) : e.children.forEach((function(e, r) {
            if (e.componentName === n.designableFieldName) {
                var o = e.props.name || e.id;
                i.properties = i.properties || {}, i.properties[o] = d(e), i.properties[o]["x-index"] = r;
            }
        })), i;
    };
    return {
        form: r(a.props),
        schema: d(a, s)
    };
}, s = function(r, n) {
    void 0 === r && (r = {});
    var t = o(n), a = {
        componentName: t.designableFormName,
        props: r.form,
        children: []
    }, s = new e(r.schema), d = function(e, r) {
        if (r) {
            var n, o = {
                id: r["x-designable-id"] || i(),
                componentName: t.designableFieldName,
                props: (n = r.toJSON(!1), n["name"] === n["x-designable-id"] && delete n.name, delete n["version"], 
                delete n["_isJSONSchemaObject"], n),
                children: []
            };
            e.children.push(o), r.items && !Array.isArray(r.items) && d(o, r.items), r.mapProperties((function(e) {
                e["x-designable-id"] = e["x-designable-id"] || i(), d(o, e);
            }));
        }
    };
    return s.mapProperties((function(e) {
        e["x-designable-id"] = e["x-designable-id"] || i(), d(a, e);
    })), a;
};

export { a as transformToSchema, s as transformToTreeNode };
