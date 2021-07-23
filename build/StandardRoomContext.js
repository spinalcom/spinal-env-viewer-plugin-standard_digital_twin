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
import { STANDARD_ROOMS_GRAPH } from "../conf";



class StandardRoomContext {

            static initialize() {
                if (StandardRoomContext.initialized !== null) {
                  return StandardRoomContext.initialized;
                }
                
                StandardRoomContext.initialized = new Promise(( resolve, reject ) => {
                  
                  StandardRoomContext.context = SpinalGraphService.getContext( StandardRoomContext.contextName );
                  if (typeof StandardRoomContext.context === "undefined") {
                    SpinalGraphService.addContext(StandardRoomContext.contextName, StandardRoomContext.type).then(context => {
                        StandardRoomContext.context = context;
                        StandardRoomContext.context.info.add_attr({
                          standard_name: "Standard Room Context"
                        });
                        StandardRoomContext.contextId = context.info.id.get();

                        // console.log(StandardRoomContext);
                        // console.log(StandardRoomContext.contextId);
                        resolve(true);
                    }).catch(reject);
                  }
                  else{
                      StandardRoomContext.contextId = StandardRoomContext.context.info.id.get();
                    // console.log(StandardRoomContext.contextId);
                    resolve( true );
                  }
                });
                return StandardRoomContext.initialized;
              }

            static async createStandardRoomsGraph(){
              return this.initialize().then(async result => {

                // category 1
                const fonctionCategoryId = SpinalGraphService.createNode({
                  name: "Fonction",
                  type: "groupingCategory",
                  icon: "accessibility"
                }, new Model({
                  name : "Fonction"
                }));
                await SpinalGraphService.addChildInContext(this.contextId, fonctionCategoryId, this.contextId, "hasCategory", SPINAL_RELATION_PTR_LST_TYPE);

                const meetingRoom1Id = SpinalGraphService.createNode({
                  name: "Meeting Room",
                  type: "geographicRoomGroup",
                  color: "#A82727",
                }, new Model({
                  name : "Meeting Room"
                }));
                await SpinalGraphService.addChildInContext(fonctionCategoryId, meetingRoom1Id, this.contextId, "hasGroup", SPINAL_RELATION_PTR_LST_TYPE);

                const openSpace1Id = SpinalGraphService.createNode({
                  name: "Open Space",
                  type: "geographicRoomGroup",
                  color: "#3F5681",
                }, new Model({
                  name : "Meeting Room"
                }));
                await SpinalGraphService.addChildInContext(fonctionCategoryId, openSpace1Id, this.contextId, "hasGroup", SPINAL_RELATION_PTR_LST_TYPE);

                // category 2
                const affectationCategoryId = SpinalGraphService.createNode({
                  name: "Affectation",
                  type: "groupingCategory",
                  icon: "accessibility"
                }, new Model({
                  name : "Affectation"
                }));
                await SpinalGraphService.addChildInContext(this.contextId, affectationCategoryId, this.contextId, "hasCategory", SPINAL_RELATION_PTR_LST_TYPE);

                const meetingRoom2Id = SpinalGraphService.createNode({
                  name: "Meeting Room",
                  type: "geographicRoomGroup",
                  color: "#A82727",
                }, new Model({
                  name : "Meeting Room"
                }));
                await SpinalGraphService.addChildInContext(affectationCategoryId, meetingRoom2Id, this.contextId, "hasGroup", SPINAL_RELATION_PTR_LST_TYPE);

                const openSpace2Id = SpinalGraphService.createNode({
                  name: "Open Space",
                  type: "geographicRoomGroup",
                  color: "#3F5681",
                }, new Model({
                  name : "Meeting Room"
                }));
                await SpinalGraphService.addChildInContext(affectationCategoryId, openSpace2Id, this.contextId, "hasGroup", SPINAL_RELATION_PTR_LST_TYPE);
              
              }).catch(err => console.log(err));
            }

            static async generateStandardRoomsGraph(){
              // console.log(STANDARD_ROOMS_GRAPH);
              return this.initialize().then(async result => {
                for(let category of STANDARD_ROOMS_GRAPH){
                  // console.log(category);

                  const categoryId = SpinalGraphService.createNode({
                    name: category.name,
                    type: category.type,
                    standard_name: category.standard_name,
                    icon: category.icon
                  }, new Model({
                    name : category.name
                  }));
                  await SpinalGraphService.addChildInContext(this.contextId, categoryId, this.contextId, "hasCategory", SPINAL_RELATION_PTR_LST_TYPE);

                  for(let group of category.groups){
                    const groupId = SpinalGraphService.createNode({
                      name: group.name,
                      standard_name: group.standard_name,
                      type: group.type,
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



  
  _defineProperty(StandardRoomContext, "initialized", null);
  
  _defineProperty(StandardRoomContext, "context", void 0);
  
  _defineProperty(StandardRoomContext, "contextName", void 0);
  
  _defineProperty(StandardRoomContext, "type", void 0);
  
  _defineProperty(StandardRoomContext, "contextId", void 0);

  StandardRoomContext.initialized = null;
  StandardRoomContext.contextName = "Contexte de Salles standardisé";
  StandardRoomContext.type = "geographicRoomGroupContext";
  
export {StandardRoomContext};