"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformJSON = void 0;
function getStringByRegexp(item, test) {
    const res = [];
    for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
            if (test.test(key)) {
                res.push(item[key]);
            }
        }
    }
    return res;
}
function CreateCategoryOrGroup(arrayDataContext) {
    const result = [];
    let cat = null;
    for (const data of arrayDataContext) {
        if (typeof data.Category_name === "string" && data.Category_name.trim().length > 0) {
            if (cat !== null)
                result.push(cat);
            cat = {
                active: true,
                name: data.Category_name,
                standardName: data.Category_standard_name,
                color: data.Category_color,
                attributes: getStringByRegexp(data, /^Attribute/),
                groups: [],
            };
        }
        else if (typeof data.Group_name === "string" && data.Group_name.trim().length > 0) {
            const group = {
                active: true,
                name: data.Group_name,
                standardName: data.Group_standard_name,
                color: data.Group_color,
                attributes: getStringByRegexp(data, /^Attribute/),
            };
            cat.groups.push(group);
        }
    }
    if (cat)
        result.push(cat);
    return result;
}
function transformJSON(json) {
    const result = [];
    for (const contextName in json) {
        if (Object.prototype.hasOwnProperty.call(json, contextName)) {
            const arrayDataContext = json[contextName];
            const context = {
                active: true,
                name: contextName,
                categories: CreateCategoryOrGroup(arrayDataContext),
            };
            result.push(context);
        }
    }
    return result;
}
exports.transformJSON = transformJSON;
//# sourceMappingURL=transformJSON.js.map