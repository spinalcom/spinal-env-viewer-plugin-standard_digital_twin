/*
 * Copyright 2020 SpinalCom - www.spinalcom.com
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
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

import {
  SpinalContext,
  SpinalGraphService,
  SpinalNode,
  SPINAL_RELATION_PTR_LST_TYPE,
} from 'spinal-env-viewer-graph-service';
import { Model } from 'spinal-core-connectorjs_type';
import AttributeService from 'spinal-env-viewer-plugin-documentation-service';

class StandardEquipmentContextFromExcel {
  static async initialize(dataJson) {
    if (StandardEquipmentContextFromExcel.initialized !== null) {
      return StandardEquipmentContextFromExcel.initialized;
    }
    StandardEquipmentContextFromExcel.initialized = new Promise(
      async (resolve, reject) => {
        for (let contextItem of dataJson) {
          StandardEquipmentContextFromExcel.context = SpinalGraphService.getContext(
            contextItem.name
          );
          // create the context if not exsist
          if (
            typeof StandardEquipmentContextFromExcel.context === 'undefined'
          ) {
            if (contextItem.active == true) {
              SpinalGraphService.addContext(
                contextItem.name,
                StandardEquipmentContextFromExcel.type
              )
                .then(async (context) => {
                  StandardEquipmentContextFromExcel.context = context;
                  StandardEquipmentContextFromExcel.context.info.add_attr({
                    standard_name: 'Standard Equipment Context',
                  });
                  StandardEquipmentContextFromExcel.contextId = context.info.id.get();
                  console.log(
                    'this is StandardEquipmentContextFromExcel ID:\n'
                  );
                  console.log(StandardEquipmentContextFromExcel.contextId);

                  await StandardEquipmentContextFromExcel.createCategoryInGraph(
                    contextItem,
                    StandardEquipmentContextFromExcel.contextId
                  );

                  resolve(true);
                })
                .catch(reject);
            } else {
              console.log(contextItem.name + ' undefined and not selected \n');
            }
          } else {
            // remove the context with the same name, then create it
            StandardEquipmentContextFromExcel.context.removeFromGraph();
            if (contextItem.active == true) {
              SpinalGraphService.addContext(
                contextItem.name,
                StandardEquipmentContextFromExcel.type
              )
                .then(async (context) => {
                  StandardEquipmentContextFromExcel.context = context;
                  StandardEquipmentContextFromExcel.context.info.add_attr({
                    standard_name: 'Standard Equipment Context',
                  });
                  StandardEquipmentContextFromExcel.contextId = context.info.id.get();
                  await StandardEquipmentContextFromExcel.createCategoryInGraph(
                    contextItem,
                    StandardEquipmentContextFromExcel.contextId
                  );

                  resolve(true);
                })
                .catch(reject);
            }
            resolve(true);
          }
        }
      }
    );
    return StandardEquipmentContextFromExcel.initialized;
  }

  static async generateStandardEquipmentGraph(dataJson) {
    return await this.initialize(dataJson)
      .then((result) => {
        console.log('Success Equipment context creation !\n');
      })
      .catch((err) => console.log(err));
  }
  // create the categories, its realtions and its attributes in the graph
  static async createCategoryInGraph(contextCurrent, contextCurrentId) {
    for (let category of contextCurrent.categories) {
      if (category.active) {
        const categoryId = SpinalGraphService.createNode(
          {
            name: category.name,
            type: 'groupingCategory',
            standard_name: category.standard_name,
            icon: category.icon,
          },
          new Model({
            name: category.name,
          })
        );
        let categoryAttr = await SpinalGraphService.addChildInContext(
          contextCurrentId,
          categoryId,
          contextCurrentId,
          'hasCategory',
          SPINAL_RELATION_PTR_LST_TYPE
        );

        // using documentation service to create the category attributes
        let tabCats = [];
        for (let attr of category.attributes) {
          if (attr != '' && attr != undefined) {
            let strAttr = attr.split(';');
            if (tabCats.includes(strAttr[0]) == true) {
              let categoryAttribute = await AttributeService.getCategoryByName(
                categoryAttr,
                strAttr[0]
              );
              AttributeService.addAttributeByCategory(
                categoryAttr,
                categoryAttribute,
                strAttr[1],
                strAttr[4],
                strAttr[2],
                strAttr[3]
              );
            } else {
              let categoryAttribute = await AttributeService.addCategoryAttribute(
                categoryAttr,
                strAttr[0]
              );
              tabCats.push(strAttr[0]);
              AttributeService.addAttributeByCategory(
                categoryAttr,
                categoryAttribute,
                strAttr[1],
                strAttr[4],
                strAttr[2],
                strAttr[3]
              );
            }
          }
        }
        await StandardEquipmentContextFromExcel.createGroupInGraph(
          category,
          categoryId,
          contextCurrentId
        );
      }
    }
  }

  //create the groups and its attributes in the graph
  static async createGroupInGraph(category, categoryId, contextCurrentId) {
    for (let group of category.groups) {
      const groupId = SpinalGraphService.createNode(
        {
          name: group.name,
          standard_name: group.standard_name,
          type: 'BIMObjectGroup',
          color: group.color,
        },
        new Model({
          name: group.name,
        })
      );
      let groupNode = await SpinalGraphService.addChildInContext(
        categoryId,
        groupId,
        contextCurrentId,
        'hasGroup',
        SPINAL_RELATION_PTR_LST_TYPE
      );

      // using documentation service to create the category attributes
      let tabCats = [];
      for (let attr of group.attributes) {
        if (attr != '' && attr != undefined) {
          let strAttr = attr.split(';');
          if (tabCats.includes(strAttr[0]) == true) {
            let categoryAttribute = await AttributeService.getCategoryByName(
              groupNode,
              strAttr[0]
            );
            AttributeService.addAttributeByCategory(
              groupNode,
              categoryAttribute,
              strAttr[1],
              strAttr[4],
              strAttr[2],
              strAttr[3]
            );
          } else {
            let categoryAttribute = await AttributeService.addCategoryAttribute(
              groupNode,
              strAttr[0]
            );
            tabCats.push(strAttr[0]);
            AttributeService.addAttributeByCategory(
              groupNode,
              categoryAttribute,
              strAttr[1],
              strAttr[4],
              strAttr[2],
              strAttr[3]
            );
          }
        }
      }
    }
  }
}

_defineProperty(StandardEquipmentContextFromExcel, 'initialized', null);

_defineProperty(StandardEquipmentContextFromExcel, 'context', void 0);

_defineProperty(StandardEquipmentContextFromExcel, 'contextName', void 0);

_defineProperty(StandardEquipmentContextFromExcel, 'type', void 0);

_defineProperty(StandardEquipmentContextFromExcel, 'contextId', void 0);

StandardEquipmentContextFromExcel.initialized = null;
StandardEquipmentContextFromExcel.contextName = 'Equipment Context';
StandardEquipmentContextFromExcel.type = 'BIMObjectGroupContext';

export { StandardEquipmentContextFromExcel };
