/*
 * Copyright 2018 SpinalCom - www.spinalcom.com
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



import Vue from "vue";
import Vuetify from 'vuetify';
import 'spinal-env-viewer-plugin-forge';
import { SpinalMountExtention } from "spinal-env-viewer-panel-manager-service";
import { SpinalForgeExtention } from "spinal-env-viewer-panel-manager-service_spinalforgeextention";
import { spinalContextMenuService } from "spinal-env-viewer-context-menu-service";

// vue files
// import DialogAddDevices from "./vue/addDevices.vue";


// button files
// import { ButtonAddDeviceProfileContext } from "./buttons/ButtonAddDeviceProfileContext";
import { ButtonInitializeAStandardDigitalTwin } from "./buttons/ButtonInitializeAStandardDigitalTwin";




Vue.use( Vuetify );

                            /* ******* */
                            /* BUTTONS */
                            /* ******* */


spinalContextMenuService.registerApp("GraphManagerTopBar", new ButtonInitializeAStandardDigitalTwin(), [7]);
// spinalContextMenuService.registerApp("GraphManagerSideBar", new ButtonAddDeviceProfiles(), [7]);






                          /* ********** */
                          /* EXTENSIONS */
                          /* ********** */


// SpinalMountExtention.mount( {
//   // name registered.
//   name: "DialogAddDeviceProfiles",
//   // Vue.extend to create a Compoment constructor
//   vueMountComponent: Vue.extend( DialogAddDeviceProfiles ),
//   // where to  append the Compoment
//   parentContainer: document.body
// }
// );




