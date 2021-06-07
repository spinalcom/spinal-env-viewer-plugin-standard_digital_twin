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

// hexa color hexa code generator : http://www.outils-web.com/page-generateur-code-couleur.asp

import { v1 as uuidv1 } from 'uuid';

var i = 0;


export const STANDARD_ROOMS_GRAPH = [
    {
        name: "Fonction",
        type: "groupingCategory",
        standard_name: "Fonction",
        icon: "accessibility",
        groups: [
            {
                name: "Meeting Room",
                type: "geographicRoomGroup",
                standard_name: "Meeting Room",
                color: "#A82727",
            },
            {
                name: "Open Space",
                type: "geographicRoomGroup",
                standard_name: "Open Space",
                color: "#3F5681",
            }
        ]
    },
    {
        name: "Affectation",
        standard_name: "Affectation",
        type: "groupingCategory",
        icon: "accessibility",
        groups: [
            {
                name: "Meeting Room",
                standard_name: "Meeting Room",
                type: "geographicRoomGroup",
                color: "#A82727",
            },
            {
                name: "Open Space",
                standard_name: "Open Space",
                type: "geographicRoomGroup",
                color: "#3F5681",
            }
        ]
    }
];

export const STANDARD_EQUIPMENT_GRAPH = [
    {
        name: "CFO",
        type: "groupingCategory",
        icon: "accessibility",
        color: "#BD1E13",
        groups: [
            {
                name: "Luminaires",
                type: "BIMObjectGroup",
                color: "#A82727",
            },
            {
                name: "Tableaux Divisionnaires",
                type: "BIMObjectGroup",
                color: "#3F5681",
            }
        ]
    },
    {
        name: "CFA",
        type: "groupingCategory",
        icon: "accessibility",
        color: "#BD8913",
        groups: [
            {
                name: "Automates",
                type: "BIMObjectGroup",
                color: "#A82727",
            },
            {
                name: "Capteurs",
                type: "BIMObjectGroup",
                color: "#3F5681",
            },
            {
                name: "Contrôleurs",
                type: "BIMObjectGroup",
                color: "#671ACD",
            }
        ]
    },
    {
        name: "CVC",
        type: "groupingCategory",
        icon: "accessibility",
        color: "#13B0BD",
        groups: [
            {
                name: "Chauffage",
                type: "BIMObjectGroup",
                color: "#A82727",
            },
            {
                name: "Ventilation",
                type: "BIMObjectGroup",
                color: "#2BDB13",
            },
            {
                name: "Climatisation",
                type: "BIMObjectGroup",
                color: "#35C4C7",
            }
        ]
    },
    {
        name: "Mobilier",
        type: "groupingCategory",
        icon: "accessibility",
        color: "#9B13BD",
        groups: [
            {
                name: "Bureaux",
                type: "BIMObjectGroup",
                color: "#A82727",
            },
            {
                name: "Chaises",
                type: "BIMObjectGroup",
                color: "#BD7713",
            },
            {
                name: "Tables",
                type: "BIMObjectGroup",
                color: "#BD138C",
            },
            {
                name: "Rangement",
                type: "BIMObjectGroup",
                color: "#13BDB2",
            },
            {
                name: "Plantes",
                type: "BIMObjectGroup",
                color: "#61BD13",
            }
        ]
    }
];


export const STANDARD_CONTROL_ENDPOINT_GRAPH = [
    {
        name: "Standard Profile",
        type: "groupingCategory",
        icon: "accessibility",
        elements: {
            name: "Standard Profile"
        },
        groups: [
            {
                name: "Building",
                type: "SpinalControlPointGroup",
                color: "BD1319",
                elements: {
                    name: "Building"
                },
                groups: [
                    {
                        name: "GTB",
                        type: "SpinalControlPoint",
                        elements: [
                            {
                                name: "endpoint1",
                                alias: "e1",
                                path: "",
                                unit: "",
                                dataType: "Float",
                                type: 0,
                                command: false,
                                saveTimeSeries: false,
                                config: {
                                    min: { value: 0, color: "#FF0000" },
                                    average: { value: 15, color: "#00FF00" },
                                    max: { value: 30, color: "#0000FF" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i

                            },
                            {
                                name: "endpoint2",
                                alias: "e2",
                                path: "",
                                unit: "",
                                dataType: "Float",
                                type: "Temperature",
                                command: 0,
                                saveTimeSeries: 0,
                                config: {
                                    min: { value: 0, color: "#FF0000" },
                                    average: { value: 15, color: "#00FF00" },
                                    max: { value: 30, color: "#0000FF" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "endpoint3",
                                alias: "e3",
                                path: "",
                                unit: "",
                                dataType: "Float",
                                type: "Temperature",
                                command: 0,
                                saveTimeSeries: 0,
                                config: {
                                    min: { value: 0, color: "#FF0000" },
                                    average: { value: 15, color: "#00FF00" },
                                    max: { value: 30, color: "#0000FF" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export const STANDARD_TICKET_GRAPH = [];