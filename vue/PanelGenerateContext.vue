<!--
Copyright 2020 SpinalCom - www.spinalcom.com
This file is part of SpinalCore.
Please read all of the following terms and conditions
of the Free Software license Agreement ("Agreement")
carefully.
This Agreement is a legally binding contract between
the Licensee (as defined below) and SpinalCom that
sets forth the terms and conditions that govern your
use of the Program. By installing and/or using the
Program, you agree to abide by all the terms and
conditions stated or referenced herein.
If you do not agree to abide by these terms and
conditions, do not demonstrate your acceptance and do
not install or use the Program.
You should have received a copy of the license along
with this file. If not, see
<http://resources.spinalcom.com/licenses.pdf>.
-->

<template>
  <v-app>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" max-width="290">
        <v-card :dark="true">
          <v-card-title class="headline">Generate Standard Contexts From Excel</v-card-title>
          <v-card-text>

            <md-field>
              <label>Import Excel</label>
              <md-file multiple @change="getFile" />
            </md-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" flat @click="onCancel">Annuler </v-btn>

            <v-btn color="green darken-1" flat @click="onSave">Valider </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-app>
</template>

<script>
import { SpinalNode } from "spinal-model-graph";
import { SpinalGraphService } from "spinal-env-viewer-graph-service";
import { SPINAL_RELATION_LST_PTR_TYPE } from "spinal-env-viewer-graph-service";

import spinalExcelManager from "spinal-env-viewer-plugin-excel-manager-service";
import { StandardRoomContext } from "../build/StandardRoomContext";
import { StandardEquipmentContext } from "../build/StandardEquipmentContext";
import { StandardControlEndpointContext } from "../build/StandardControlEndpointContext";
import{ StandardNomenclatureContext } from "../build/StandardNomenclatureContext";

// import { DeviceHelper } from "../build/DeviceHelper";
// import { FileExplorer } from "../FileExplorer";

// const xml2js = require("xml2js");
// const fs = require("fs");

export default {
  name: "PanelGenerateContext",
  data: function () {
    return {
      deviceProfile: null,
      parentId: null,
      dialog: false,
      multiple: null,
    };
  },
  methods: {
    initialize: function (option) {

    },
    onSave: async function () {
      const dataJson = await spinalExcelManager.convertExcelToJson(this.multiple[0]);
      await StandardEquipmentContext.generateFromExcel(dataJson);
      this.dialog = false;
    },
    addDevices: function (name) {
      
    },
    onCancel: function () {
      this.dialog = false;
    },
    opened: function (option) {
      this.initialize(option);
      this.dialog = true;
    },
    removed: function () {},
    closeDialog() {this.dialog = false},
    getFile(event) {
      this.multiple = event.target.files;
      console.log(event.target.files);
    },
  },
};
</script>

<style scoped>
</style>