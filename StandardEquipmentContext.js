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

// import {
//     SpinalContext,
//     SpinalGraphService,
//     SpinalNode
//   } from "spinal-env-viewer-graph-service";

// import {
//     PART_RELATION_NAME,
//     PART_RELATION_TYPE,
//     DEVICE_RELATION_NAME,
//     DEVICE_RELATION_TYPE,
//     DEVICE_TYPE,
//     DEVICE_PROFILES_TYPE
//   } from "./constants";
  
  
// class StandardEquipmentContext {
//     static initialized = null;
//     static context;
//     static contextName;
//     static type;
//     static contextId;
    
    
//     static initialize() {
//     //   if (StandardEquipmentContext.initialized !== null) {
//     //     return StandardEquipmentContext.initialized;
//     //   }
      
//     //   StandardEquipmentContext.initialized = new Promise(( resolve, reject ) => {
        
//     //     StandardEquipmentContext.context = SpinalGraphService.getContext( StandardEquipmentContext.contextName );
//     //     if (typeof StandardEquipmentContext.context === "undefined") {
//     //       SpinalGraphService.addContext(StandardEquipmentContext.contextName, StandardEquipmentContext.type).then(context => {
//     //         StandardEquipmentContext.context = context;
      
//     //         StandardEquipmentContext.contextId = context.info.id.get();
        
//     //         resolve(true);
//     //       }).catch(reject);
//     //     }
//     //     else{
//     //         StandardEquipmentContext.contextId = StandardEquipmentContext.context.info.id.get();
//     //       console.log(StandardEquipmentContext.contextId);
//     //       resolve( true );
//     //     }
//     //   });
//     //   return StandardEquipmentContext.initialized;
//     }

// }
    
  
  
//   StandardEquipmentContext.initialized = null;
//   StandardEquipmentContext.contextName = "Contexte d'Equipements standardisé";
//   StandardEquipmentContext.type = "BIMObjectGroupContext";
  
// export {StandardEquipmentContext};