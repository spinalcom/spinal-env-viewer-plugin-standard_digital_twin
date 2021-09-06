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
import AttributeService from 'spinal-env-viewer-plugin-documentation-service';
import { CONTEXT_TO_CATEGORY_RELATION, CATEGORY_TO_GROUP_RELATION, EQUIPMENT_CATEGORY_TYPE, EQUIPMENT_GROUP_TYPE, EQUIPMENT_CATEGORY_ICON } from "../constants";

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

                        resolve(true);
                    }).catch(reject);
                  }
                  else{
                      StandardEquipmentContext.contextId = StandardEquipmentContext.context.info.id.get();
                    resolve( true );
                  }
                });
                return StandardEquipmentContext.initialized;
              }
            
              static async generateStandardEquipmentsGraph(){
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
                      let groupNode = await SpinalGraphService.addChildInContext(categoryId, groupId, this.contextId, "hasGroup", SPINAL_RELATION_PTR_LST_TYPE);
                      
                      if(group.categories != undefined){
                        for (let cat of group.categories){
                          let categoryAttribute = await AttributeService.addCategoryAttribute(groupNode, cat.label);
                          for (let attr of cat.attributes){
                            AttributeService.addAttributeByCategory(groupNode, categoryAttribute, attr.label, attr.value, attr.type, attr.unit);
                          }
                        }
                      }
                      
                    }
                  }
                }).catch(err => console.log(err));
              }

              static async generateFromExcel(dataJson){
                let jsonObject = dataJson["Equipment Context"];
                // initialisation du context
                return this.initialize().then(async result => {
                  //initialisation de l'algorithme
                  let category = undefined;
                  // préparation des clefs de valeur
                  let keyTab = Object.keys(jsonObject[0]);
                  let iNodeCat = keyTab.filter(elt => elt.includes("AttributeOfCat")).length;
                  let iNodeGrp = keyTab.filter(elt => elt.includes("AttributeOfGroup")).length;
                  //parcours du tableau
                  for(let elt of jsonObject){
                    // categories
                    if(elt.Category_name != ""){
                      let standardName = ( (elt.Category_standard_name == "") ? elt.Category_name : elt.Category_standard_name);
                      const catNodeId = SpinalGraphService.createNode({
                        name: elt.Category_name,
                        type: EQUIPMENT_CATEGORY_TYPE,
                        standard_name: standardName,
                        icon: EQUIPMENT_CATEGORY_ICON,
                        color: elt.Category_color
                      },
                      new Model({
                        name: elt.Category_name
                      }));
                      // changement de categorie
                      category = await SpinalGraphService.addChildInContext(this.contextId, catNodeId, this.contextId, CONTEXT_TO_CATEGORY_RELATION, SPINAL_RELATION_PTR_LST_TYPE);
                      //attributes of category
                      for(let iC=1 ; iC <= iNodeCat ; iC++){
                        // console.log(iC);
                      }
                    }
                    // groups
                    else if(elt.Group_name != ""){
                      let standardName = ( (elt.Group_standard_name == "") ? elt.Group_name : elt.Group_standard_name);
                      const grpNodeId = SpinalGraphService.createNode({
                        name: elt.Group_name,
                        type: EQUIPMENT_GROUP_TYPE,
                        standard_name: standardName,
                        color: elt.Group_color
                      },
                      new Model({
                        name: elt.Group_name
                      }));
                      let groupNode = await SpinalGraphService.addChildInContext(category.info.id.get(), grpNodeId, this.contextId, CATEGORY_TO_GROUP_RELATION, SPINAL_RELATION_PTR_LST_TYPE);
                      let tabCats = [];
                      for(let iG=1 ; iG <= iNodeGrp ; iG++){
                        if(elt["AttributeOfGroup"+iG] != ""){
                          let strAttr = elt["AttributeOfGroup"+iG].split(";");
                          // console.log(strAttr);
                          let categoryAttribute = await AttributeService.addCategoryAttribute(groupNode, strAttr[0]);
                          AttributeService.addAttributeByCategory(groupNode, categoryAttribute, strAttr[1], strAttr[4], strAttr[2], strAttr[3]);
                          
                        }
                      }
                    }
                    else{

                    }
                  }
                })
                .catch(err => console.log(err));
              }

              // addCategoryAttribute
              // addAttributeByCategory
              // addAttributeByCategoryName

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