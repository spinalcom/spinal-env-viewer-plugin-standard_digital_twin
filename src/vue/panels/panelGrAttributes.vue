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
          <v-card-title class="headline">Groupe attributes</v-card-title>
          <v-list>
            <v-list-group v-for="(item, index1) in itemsAttr" :key="index1">
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{ item.name }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
              <v-list-tile
                v-for="(attrItem, index2) in item.attr"
                :key="index2"
              >
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ attrItem.name + " : " + attrItem.value }}
                    <!--  <br />
                    {{ "Unit : " + attrItem.attrUnit }} -->
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
          </v-list>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" flat @click="onCancel">Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-app>
</template>

<script>
const {
  spinalPanelManagerService
} = require("spinal-env-viewer-panel-manager-service");

export default {
  name: "panelCatOrGrAttributes",
  props: ["onFinised"],
  data: function() {
    return {
      grItem: [],
      dialog: false,
      itemsAttr: [],
      multiple: null
    };
  },
  methods: {
    initialize: function(groupItems) {
      this.grItem = groupItems;
      this.itemsAttr = this.getGrAttributes();
    },
    onCancel: function() {
      this.dialog = false;
    },
    opened(option) {
      this.initialize(option);
      this.dialog = true;
    },

    getGrAttributes() {
      let grAttr = [];
      let attr = this.grItem.attributes;
      for (let element of attr) {
        if (element != undefined && element != "") {
          let arrayTest = element.split(";");
          const found = grAttr.find(el => el.name === arrayTest[0]);
          if (found) {
            found.attr.push({ name: arrayTest[1], value: arrayTest[4] });
          } else {
            let attrObject = { name: "", attr: [] };

            attrObject.name = arrayTest[0];
            attrObject.attr.push({ name: arrayTest[1], value: arrayTest[4] });
            grAttr.push(attrObject);
          }
        }
      }
      return grAttr;
    },

    removed: function() {},
    closeDialog() {
      this.dialog = false;
    }
  }
};
</script>

<style scoped>
</style>