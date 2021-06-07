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
import { STANDARD_CONTROL_ENDPOINT_GRAPH } from "../conf";



class StandardControlEndpointContext {

            static initialize() {
                if (StandardControlEndpointContext.initialized !== null) {
                  return StandardControlEndpointContext.initialized;
                }
                
                StandardControlEndpointContext.initialized = new Promise(( resolve, reject ) => {
                  
                  StandardControlEndpointContext.context = SpinalGraphService.getContext( StandardControlEndpointContext.contextName );
                  if (typeof StandardControlEndpointContext.context === "undefined") {
                    SpinalGraphService.addContext(StandardControlEndpointContext.contextName, StandardControlEndpointContext.type).then(context => {
                        StandardControlEndpointContext.context = context;
                        StandardControlEndpointContext.contextId = context.info.id.get();

                        console.log(StandardControlEndpointContext);
                        console.log(StandardControlEndpointContext.contextId);
                        resolve(true);
                    }).catch(reject);
                  }
                  else{
                      StandardControlEndpointContext.contextId = StandardControlEndpointContext.context.info.id.get();
                    console.log(StandardControlEndpointContext.contextId);
                    resolve( true );
                  }
                });
                return StandardControlEndpointContext.initialized;
              }

            static async generateStandardControlEndpointsGraph(){
              console.log(STANDARD_CONTROL_ENDPOINT_GRAPH);
              return this.initialize().then(async result => {
                for(let category of STANDARD_CONTROL_ENDPOINT_GRAPH){
                  console.log(category);

                  const categoryId = SpinalGraphService.createNode({
                    name: category.name,
                    type: category.type,
                    icon: category.icon
                  }, new Model({
                    name : category.elements.name
                  }));
                  await SpinalGraphService.addChildInContext(this.contextId, categoryId, this.contextId, "hasCategory", SPINAL_RELATION_PTR_LST_TYPE);

                  for(let group of category.groups){
                    const groupId = SpinalGraphService.createNode({
                      name: group.name,
                      type: group.type,
                      color: group.color,
                    }, new Model({
                      name : group.elements.name
                    }));
                    await SpinalGraphService.addChildInContext(categoryId, groupId, this.contextId, "hasGroup", SPINAL_RELATION_PTR_LST_TYPE);

                    for(let controlEndpoint of group.groups){

                      const controlEndpointId = SpinalGraphService.createNode({
                        name: controlEndpoint.name,
                        type: controlEndpoint.type,
                      }, new Lst(controlEndpoint.elements));
                      await SpinalGraphService.addChildInContext(groupId, controlEndpointId, this.contextId, "groupHasSpinalControlPoint", SPINAL_RELATION_LST_PTR_TYPE);
                      
                      }
                  }
                }
              }).catch(err => console.log(err));
            }
}



  
  _defineProperty(StandardControlEndpointContext, "initialized", null);
  
  _defineProperty(StandardControlEndpointContext, "context", void 0);
  
  _defineProperty(StandardControlEndpointContext, "contextName", void 0);
  
  _defineProperty(StandardControlEndpointContext, "type", void 0);
  
  _defineProperty(StandardControlEndpointContext, "contextId", void 0);

  StandardControlEndpointContext.initialized = null;
  StandardControlEndpointContext.contextName = "Contexte de Control Endpoint Standardisé";
  StandardControlEndpointContext.type = "SpinalControlPointGroupContext";
  
export {StandardControlEndpointContext};