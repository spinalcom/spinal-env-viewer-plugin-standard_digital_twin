
<!--
Copyright 2021 SpinalCom - www.spinalcom.com

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
  <div class="full-control">
    <md-subheader>Contexts</md-subheader>
    <v-list class="vlistselect">
      <!--*********** contexts ***********-->
      <!-- v-model="item.active" -->
      <v-list-group v-for="(item, index1) in items" :key="index1" no-action>
        <v-icon slot="appendIcon" color="white">arrow_drop_down</v-icon>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-action @click.stop>
              <v-checkbox
                v-model="item.active"
                @change="changeChildCheckbox(item)"
              />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.name }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <!--*********** categories ***********-->
        <v-list-group
          v-for="(catItem, index2) in item.categories"
          :key="index2"
          :value="true"
          no-action
          sub-group
        >
          <!--           <v-icon slot="appendIcon" color="white">arrow_drop_down</v-icon> -->
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-action @click.stop>
                <v-checkbox
                  v-model="catItem.active"
                  @change="changeChildCheckbox(catItem)"
                />
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ catItem.name }}
                </v-list-tile-title>
              </v-list-tile-content>
              <div class="docIcon">
                <v-list-tile-action @click.stop>
                  <v-icon color="white" @click="openPanelCatAttributes(catItem)"
                    >folder</v-icon
                  >
                </v-list-tile-action>
              </div>
            </v-list-tile>
          </template>

          <!--*********** start groups ***********-->

          <div class="groups">
            <v-list-tile
              v-for="(grItem, index3) in catItem.groups"
              :key="index3"
              :value="true"
            >
              <v-list-tile-action @click.stop>
                <v-checkbox
                  v-model="grItem.active"
                  @change="changeChildCheckbox(grItem)"
                />
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ grItem.name }}
                </v-list-tile-title>
              </v-list-tile-content>
              <div class="docIcon">
                <v-list-tile-action @click.stop>
                  <v-icon color="white" @click="openPanelGrAttributes(grItem)"
                    >folder</v-icon
                  >
                </v-list-tile-action>
              </div>
            </v-list-tile>
          </div>
          <!--*********** end groups ***********-->
        </v-list-group>
      </v-list-group>
    </v-list>
    <div class="footer">
      <v-spacer></v-spacer>
      <v-btn color="red darken-1" flat @click="onCancel">Cancel </v-btn>

      <v-btn color="green darken-1" flat @click="onSave">Validate </v-btn>
      <v-spacer></v-spacer>
    </div>
  </div>
</template>

<script>
import { StandardRoomContextFromExcel } from "../../js/StandardRoomContextFromExcel";
import { StandardEquipmentContextFromExcel } from "../../js/StandardEquipmentContextFromExcel";
const {
  spinalPanelManagerService
} = require("spinal-env-viewer-panel-manager-service");
import { transformJSON } from "../../transformJson/dist/transformJSON";
export default {
  name: "DialogTest",

  data: function() {
    return {
      items: [],
      selectedOption: "",
      dialog: false
    };
  },
  methods: {
    initialize: function({ dataJson, selected }) {
      this.selectedOption = selected;
      this.items = transformJSON(dataJson);
    },
    onNameChange: function(value) {
      this.name = value;
    },
    onSave: async function() {
      if (this.selectedOption == "Rooms Context") {
        await StandardRoomContextFromExcel.generateStandardRoomsGraph(
          this.items
        );
      }
      if (this.selectedOption == "Equipment Context") {
        await StandardEquipmentContextFromExcel.generateStandardEquipmentGraph(
          this.items
        );
      }
      spinalPanelManagerService.panels.panelSelectContextStandard.closePanel();
    },
    onCancel: function() {
      spinalPanelManagerService.panels.panelSelectContextStandard.closePanel();
    },
    opened: function(option) {
      this.initialize(option);
      this.dialog = true;
    },
    removed: function() {},
    closeDialog(closeResult) {},

    changeChildCheckbox(item, newValue) {
      if (typeof newValue === "undefined") newValue = item.active;
      if (item.active !== newValue) item.active = newValue;
      if (item.categories) {
        item.categories.forEach(element => {
          this.changeChildCheckbox(element, newValue);
        });
      }

      if (item.groups) {
        item.groups.forEach(element => {
          this.changeChildCheckbox(element, newValue);
        });
      }
    },

    openPanelCatAttributes(catItem) {
      let categoryAtrributes = catItem;
      spinalPanelManagerService.openPanel(
        "panelCatAttributes",
        categoryAtrributes
      );
    },

    openPanelGrAttributes(grItem) {
      let groupItems = grItem;
      spinalPanelManagerService.openPanel("panelGrAttributes", groupItems);
    }
  }
};
</script>

<style>
</style>
<style scoped>
.full-control {
  width: 100%;
  height: 100%;
  margin: 5%;
}
.vlistselect {
  background: transparent !important;
  color: white;
  padding-right: 5%;
}
.footer {
  padding: 5%;
  text-align: center;
}
.groups {
  margin-left: 5%;
}
</style>
