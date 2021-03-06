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

import { SpinalContext, SpinalGraphService, SpinalNode, SPINAL_RELATION_PTR_LST_TYPE, SPINAL_RELATION_LST_PTR_TYPE } from "spinal-env-viewer-graph-service";
import { Model, Lst } from 'spinal-core-connectorjs_type';
import { STANDARD_NOMENCLATURE_GRAPH } from "../conf";



class StandardNomenclatureContext {

            static initialize() {
                if (StandardNomenclatureContext.initialized !== null) {
                  return StandardNomenclatureContext.initialized;
                }
                
                StandardNomenclatureContext.initialized = new Promise(( resolve, reject ) => {
                  
                  StandardNomenclatureContext.context = SpinalGraphService.getContext( StandardNomenclatureContext.contextName );
                  if (typeof StandardNomenclatureContext.context === "undefined") {
                    SpinalGraphService.addContext(StandardNomenclatureContext.contextName, StandardNomenclatureContext.type, new Model({
                      name: StandardNomenclatureContext.contextName,
                      childType: "AttributeConfiguration"
                    })).then(context => {
                        StandardNomenclatureContext.context = context;
                        StandardNomenclatureContext.context.info.add_attr({
                          standard_name: "Standard Nomenclature Context"
                        });
                        StandardNomenclatureContext.contextId = context.info.id.get();

                        resolve(true);
                    }).catch(reject);
                  }
                  else{
                      StandardNomenclatureContext.contextId = StandardNomenclatureContext.context.info.id.get();
                    resolve( true );
                  }
                });
                return StandardNomenclatureContext.initialized;
              }

              static async generateStandardNomenclatureGraph(){
                return this.initialize().then(async result => {
                  for(let category of STANDARD_NOMENCLATURE_GRAPH){
                    const categoryId = SpinalGraphService.createNode({
                    name: category.name,
                    standard_name: category.standard_name,
                    type: category.type,
                    icon: category.icon
                  }, new Model({
                    name : category.name
                  }));
                  await SpinalGraphService.addChildInContext(this.contextId, categoryId, this.contextId, "hasCategory", SPINAL_RELATION_PTR_LST_TYPE);
                  for(let group of category.groups){
                    const groupId = SpinalGraphService.createNode({
                      name: group.name,
                      type: group.type,
                      color: group.color,
                    }, new Model({
                      name : group.name
                    }));
                    await SpinalGraphService.addChildInContext(categoryId, groupId, this.contextId, "hasGroup", SPINAL_RELATION_PTR_LST_TYPE);
                    for(let config of group.conf){
                      let categoryGraph = [];
                      if(category != undefined){
                        for(let category of config.elements.categories){
                          categoryGraph.push({
                            id: category.id,
                            name: category.name,
                            standard_name: category.standard_name,
                            attributes: new Lst(category.attributes)
                          });
                        }
                      }
                      

                      const nomenclatureConfigurationId = SpinalGraphService.createNode({
                        name: config.name,
                        type: config.type,
                      }, new Model({
                        name : config.elements.name,
                        categories: new Lst(categoryGraph)
                      }));
                      SpinalGraphService.addChildInContext(groupId, nomenclatureConfigurationId, this.contextId, "groupHasAttributeConfiguration", SPINAL_RELATION_PTR_LST_TYPE)
                        .then(result =>{
                          let realNode = SpinalGraphService.getRealNode(nomenclatureConfigurationId);
                          realNode.getElement().then(el =>{
                            if(el.id){
                              el.mod_attr("id", realNode.info.id.get());
                            }
                            else{
                              el.add_attr({id: realNode.info.id.get()});
                            } 
                          });
                        });
                    }
                  }
                  }
                 }).catch(err => console.log(err));
              }

}



  
  _defineProperty(StandardNomenclatureContext, "initialized", null);
  
  _defineProperty(StandardNomenclatureContext, "context", void 0);
  
  _defineProperty(StandardNomenclatureContext, "contextName", void 0);
  
  _defineProperty(StandardNomenclatureContext, "type", void 0);
  
  _defineProperty(StandardNomenclatureContext, "contextId", void 0);

  StandardNomenclatureContext.initialized = null;
  StandardNomenclatureContext.contextName = "NomenclatureConfiguration";
  StandardNomenclatureContext.type = "AttributeConfigurationGroupContext";
  
export {StandardNomenclatureContext};