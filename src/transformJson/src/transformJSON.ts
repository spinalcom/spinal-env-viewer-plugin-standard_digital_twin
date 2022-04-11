/*
 * Copyright 2022 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

interface IJSONEnter {
  [contextName: string]: IContextItem[];
}
interface IContextItem {
  Category_name: string;
  Category_standard_name: string;
  Category_color: string;
  Group_name: string;
  Group_standard_name: string;
  Group_color: string;
  /*  AttributeOfCat1?: string;
   AttributeOfCat2?: string;
   AttributeOfCat3?: string;
   AttributeOfGroup1?: string;
   AttributeOfGroup2?: string;
   AttributeOfGroup3?: string; */

  [Attributes: string]: string;
}

interface IContext {
  active: boolean;
  name: string;
  categories: ICategory[];
}

interface ICategory {
  active: boolean;
  name: string;
  standardName: string;
  color: string;
  attributes: string[];
  groups: IGroup[];
}

interface IGroup {
  active: boolean;
  name: string;
  standardName: string;
  color: string;
  attributes: string[];
}

function getStringByRegexp(item: IContextItem, test: RegExp): string[] {
  const res: string[] = [];

  for (const key in item) {
    if (Object.prototype.hasOwnProperty.call(item, key)) {
      if (test.test(key)) {
        res.push(item[key]);
      }
    }
  }
  return res;
}

function CreateCategoryOrGroup(arrayDataContext: IContextItem[]): ICategory[] {
  const result: ICategory[] = [];
  let cat: ICategory = null;

  for (const data of arrayDataContext) {
    if (typeof data.Category_name === "string" && data.Category_name.trim().length > 0) {
      if (cat !== null) result.push(cat);
      cat = {
        active: true,
        name: data.Category_name,
        standardName: data.Category_standard_name,
        color: data.Category_color,
        attributes: getStringByRegexp(data, /^Attribute/),
        groups: [],
      };
    } else if (typeof data.Group_name === "string" && data.Group_name.trim().length > 0) {
      const group: IGroup = {
        active: true,
        name: data.Group_name,
        standardName: data.Group_standard_name,
        color: data.Group_color,
        attributes: getStringByRegexp(data, /^Attribute/),
      };
      cat.groups.push(group);
    }
  }
  if (cat) result.push(cat);

  return result;
}

export function transformJSON(json: IJSONEnter): IContext[] {
  const result: IContext[] = [];

  for (const contextName in json) {
    if (Object.prototype.hasOwnProperty.call(json, contextName)) {
      const arrayDataContext = json[contextName];
      const context: IContext = {
        active: true,
        name: contextName,
        categories: CreateCategoryOrGroup(arrayDataContext),
      };

      result.push(context);
    }
  }

  return result;
}
