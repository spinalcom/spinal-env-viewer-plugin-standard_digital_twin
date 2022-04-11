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
          <v-card-title class="headline"
            >Generate Standard Contexts From Excel</v-card-title
          >
          <form>
            <v-card-text>
              <md-field>
                <label>Import Excel</label>
                <md-file multiple @change="getFile" v-model="fselected" />
              </md-field>
            </v-card-text>
            <v-card-text>
              <!--  <label>Download a sample</label> -->
              <button type="button" class="download-btn" v-on:click="download">
                Download a sample
              </button>
              <!--   <v-icon>description</v-icon> -->
            </v-card-text>
            <v-card-text>
              <v-card-actions>
                <div class="vSelect">
                  <v-select
                    color="#FF00FF"
                    dark
                    required="required"
                    v-model="selected"
                    :items="items"
                    label="Context type"
                    solo
                  >
                  </v-select>
                </div>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" flat @click="onCancel">Cancel </v-btn>

              <v-btn
                color="green darken-1"
                flat
                @click="onSave"
                :disabled="!fselected || !selected"
                >Validate
              </v-btn>
            </v-card-actions>
          </form>
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
import XLSX from "xlsx";
import { EXCEL_SAMPLE } from "../../js/sample";
const {
  spinalPanelManagerService
} = require("spinal-env-viewer-panel-manager-service");

export default {
  name: "PanelGenerateContext",
  data: function() {
    return {
      selected: "",
      fselected: "",
      items: ["Equipment Context", "Rooms Context"],
      dialog: false,
      multiple: null,
      excelSample: EXCEL_SAMPLE
    };
  },
  methods: {
    initialize: function(option) {
      this.selected = "";
      this.fselected = "";
    },
    onSave: async function() {
      let selected = this.selected;
      const dataJson = await spinalExcelManager.convertExcelToJson(
        this.multiple[0]
      );

      spinalPanelManagerService.openPanel("panelSelectContextStandard", {
        dataJson,
        selected
      });

      this.dialog = false;
    },

    onCancel: function() {
      this.dialog = false;
      this.selected = "";
    },
    opened: function(option) {
      this.initialize(option);
      this.dialog = true;
    },
    removed: function() {},
    closeDialog() {
      this.dialog = false;
    },
    getFile(event) {
      this.multiple = event.target.files;
      console.log(event.target.files);
    },
    download: function() {
      const data = XLSX.utils.json_to_sheet(this.excelSample);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, data, "Context_Sample");
      XLSX.writeFile(wb, "sample.xlsx");
    }
  }
};
</script>

<style scoped>
.sc {
  background: transparent !important;
  color: white;
}
</style>

<style>
.theme--light.v-list {
  background: #424242;
}
</style>