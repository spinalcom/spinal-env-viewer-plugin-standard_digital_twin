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


import { SpinalContext } from "spinal-model-graph";

 import { SpinalGraphService } from "spinal-env-viewer-graph-service";

import { SpinalContextApp } from 'spinal-env-viewer-context-menu-service';

// import { DeviceHelper } from "../build/DeviceHelper";
import { StandardRoomContext } from "../build/StandardRoomContext";
import { StandardEquipmentContext } from "../build/StandardEquipmentContext";
import { StandardControlEndpointContext } from "../build/StandardControlEndpointContext";
import{ StandardNomenclatureContext } from "../build/StandardNomenclatureContext";


/*
* 
* Le code ci-dessous crée un bouton dans la GraphManagerTopBar qui, lorsqu'on clique dessus, crée un nouveau contexte.
*
*/

export class ButtonInitializeAStandardDigitalTwin extends SpinalContextApp {
    constructor() {
  // 2
      super("Initalize a standard Digital twin", "description", {
        icon: "text_rotate_vertical",
        icon_type: "in",
        backgroundColor: "000000",
        fontColor: "FFFFFF"
      });
    }
  //3
    isShown(option) {
      if (option.testsFail === true) return Promise.resolve(-1);
      return Promise.resolve(true);
    }
  //4
    async action() {
    //   DeviceHelper.initialize ();
    // StandardRoomContext.initialize();
    // StandardEquipmentContext.initialize();

    // await StandardRoomContext.createStandardRoomsGraph();
    await StandardRoomContext.generateStandardRoomsGraph();
    await StandardEquipmentContext.generateStandardEquipmentsGraph();
    await StandardControlEndpointContext.generateStandardControlEndpointsGraph();
    await StandardNomenclatureContext.generateStandardNomenclatureGraph();
    // console.log(Date.now());
      
    }
  };
  
  