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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { SpinalContext, SpinalGraphService, SpinalNode, SPINAL_RELATION_PTR_LST_TYPE } from "spinal-env-viewer-graph-service";
import { Model } from 'spinal-core-connectorjs_type';
import { STANDARD_EQUIPMENT_GRAPH } from "../conf";

class StandardEquipmentContext {

            static initialize() {
                if (StandardEquipmentContext.initialized !== null) {
                  return StandardEquipmentContext.initialized;
                }
                
                StandardEquipmentContext.initialized = new Promise(( resolve, reject ) => {
                  
                  StandardEquipmentContext.context = SpinalGraphService.getContext( StandardEquipmentContext.contextName );
                  if (typeof StandardEquipmentContext.context === "undefined") {
                    SpinalGraphService.addContext(StandardEquipmentContext.contextName, StandardEquipmentContext.type).then(context => {
                        StandardEquipmentContext.context = context;
                        StandardEquipmentContext.context.info.add_attr({
                          standard_name: "Standard Equipments Context"
                        });
                        StandardEquipmentContext.contextId = context.info.id.get();

                        console.log(StandardEquipmentContext);
                        console.log(StandardEquipmentContext.contextId);
                        resolve(true);
                    }).catch(reject);
                  }
                  else{
                      StandardEquipmentContext.contextId = StandardEquipmentContext.context.info.id.get();
                    console.log(StandardEquipmentContext.contextId);
                    resolve( true );
                  }
                });
                return StandardEquipmentContext.initialized;
              }
            
              static async generateStandardEquipmentsGraph(){
                console.log(STANDARD_EQUIPMENT_GRAPH);
                return this.initialize().then(async result => {
                  for(let category of STANDARD_EQUIPMENT_GRAPH){
  
                    const categoryId = SpinalGraphService.createNode({
                      name: category.name,
                      type: category.type,
                      standard_name: category.standard_name,
                      icon: category.icon,
                      color: category.color
                    }, new Model({
                      name : category.name
                    }));
                    await SpinalGraphService.addChildInContext(this.contextId, categoryId, this.contextId, "hasCategory", SPINAL_RELATION_PTR_LST_TYPE);
  
                    for(let group of category.groups){
                      const groupId = SpinalGraphService.createNode({
                        name: group.name,
                        type: group.type,
                        standard_name: group.standard_name,
                        color: group.color,
                      }, new Model({
                        name : group.name
                      }));
                      await SpinalGraphService.addChildInContext(categoryId, groupId, this.contextId, "hasGroup", SPINAL_RELATION_PTR_LST_TYPE);
                    }
                  }
                }).catch(err => console.log(err));
              }

}



  
  _defineProperty(StandardEquipmentContext, "initialized", null);
  
  _defineProperty(StandardEquipmentContext, "context", void 0);
  
  _defineProperty(StandardEquipmentContext, "contextName", void 0);
  
  _defineProperty(StandardEquipmentContext, "type", void 0);
  
  _defineProperty(StandardEquipmentContext, "contextId", void 0);

  StandardEquipmentContext.initialized = null;
  StandardEquipmentContext.contextName = "Contexte d'Equipements standardisé";
  StandardEquipmentContext.type = "BIMObjectGroupContext";
  
export {StandardEquipmentContext};