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

import {
    SpinalContext,
    SpinalGraphService,
    SpinalNode
  } from "spinal-env-viewer-graph-service";

import {
    PART_RELATION_NAME,
    PART_RELATION_TYPE,
    DEVICE_RELATION_NAME,
    DEVICE_RELATION_TYPE,
    DEVICE_TYPE,
    DEVICE_PROFILES_TYPE
  } from "./constants";
  
  
class StandardRoomContext {
    static initialized = null;
    static context;
    static contextName;
    static type;
    static contextId;
    
    
    static initialize() {
    //   if (StandardRoomContext.initialized !== null) {
    //     return StandardRoomContext.initialized;
    //   }
      
    //   StandardRoomContext.initialized = new Promise(( resolve, reject ) => {
        
    //     StandardRoomContext.context = SpinalGraphService.getContext( StandardRoomContext.contextName );
    //     if (typeof StandardRoomContext.context === "undefined") {
    //       SpinalGraphService.addContext(StandardRoomContext.contextName, StandardRoomContext.type).then(context => {
    //         StandardRoomContext.context = context;
      
    //         StandardRoomContext.contextId = context.info.id.get();
        
    //         resolve(true);
    //       }).catch(reject);
    //     }
    //     else{
    //         StandardRoomContext.contextId = StandardRoomContext.context.info.id.get();
    //       console.log(StandardRoomContext.contextId);
    //       resolve( true );
    //     }
    //   });
    //   return StandardRoomContext.initialized;
    }

}
    
  
  
  StandardRoomContext.initialized = null;
  StandardRoomContext.contextName = "Contexte de Salles standardisé";
  StandardRoomContext.type = "geographicRoomGroupContext";
  
export {StandardRoomContext};