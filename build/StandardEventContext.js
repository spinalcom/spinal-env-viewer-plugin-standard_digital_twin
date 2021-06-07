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
import { STANDARD_TICKET_GRAPH } from "../conf";



class StandardEventContext {

            // static initialize() {
            //     if (StandardEventContext.initialized !== null) {
            //       return StandardEventContext.initialized;
            //     }
                
            //     StandardEventContext.initialized = new Promise(( resolve, reject ) => {
                  
            //       StandardEventContext.context = SpinalGraphService.getContext( StandardEventContext.contextName );
            //       if (typeof StandardEventContext.context === "undefined") {
            //         SpinalGraphService.addContext(StandardEventContext.contextName, StandardEventContext.type).then(context => {
            //             StandardEventContext.context = context;
            //             StandardEventContext.contextId = context.info.id.get();

            //             console.log(StandardEventContext);
            //             console.log(StandardEventContext.contextId);
            //             resolve(true);
            //         }).catch(reject);
            //       }
            //       else{
            //           StandardEventContext.contextId = StandardEventContext.context.info.id.get();
            //         console.log(StandardEventContext.contextId);
            //         resolve( true );
            //       }
            //     });
            //     return StandardEventContext.initialized;
            //   }

            // static async generateStandardControlEndpointsGraph(){
            //   console.log(STANDARD_TICKET_GRAPH);
            //   return this.initialize().then(async result => {
            //     for(let category of STANDARD_TICKET_GRAPH){
            //       console.log(category);

            //       const categoryId = SpinalGraphService.createNode({
            //         name: category.name,
            //         type: category.type,
            //         icon: category.icon
            //       }, new Model({
            //         name : category.elements.name
            //       }));
            //       await SpinalGraphService.addChildInContext(this.contextId, categoryId, this.contextId, "hasCategory", SPINAL_RELATION_PTR_LST_TYPE);

            //       for(let group of category.groups){
            //         const groupId = SpinalGraphService.createNode({
            //           name: group.name,
            //           type: group.type,
            //           color: group.color,
            //         }, new Model({
            //           name : group.elements.name
            //         }));
            //         await SpinalGraphService.addChildInContext(categoryId, groupId, this.contextId, "hasGroup", SPINAL_RELATION_PTR_LST_TYPE);

            //         for(let controlEndpoint of group.groups){

            //           const controlEndpointId = SpinalGraphService.createNode({
            //             name: controlEndpoint.name,
            //             type: controlEndpoint.type,
            //           }, new Lst(controlEndpoint.elements));
            //           await SpinalGraphService.addChildInContext(groupId, controlEndpointId, this.contextId, "groupHasSpinalControlPoint", SPINAL_RELATION_LST_PTR_TYPE);
                      
            //           }
            //       }
            //     }
            //   }).catch(err => console.log(err));
            // }
}



  
  _defineProperty(StandardEventContext, "initialized", null);
  
  _defineProperty(StandardEventContext, "context", void 0);
  
  _defineProperty(StandardEventContext, "contextName", void 0);
  
  _defineProperty(StandardEventContext, "type", void 0);
  
  _defineProperty(StandardEventContext, "contextId", void 0);

  StandardEventContext.initialized = null;
  StandardEventContext.contextName = "Contexte d'Evénements Standardisé";
  StandardEventContext.type = "SpinalEventGroupContext";
  
export {StandardEventContext};