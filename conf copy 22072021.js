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
        name: "Toutes les salles",
        type: "groupingCategory",
        standard_name: "All rooms",
        icon: "accessibility",
        groups: [
            {
                name: "Toutes les salles",
                type: "geographicRoomGroup",
                standard_name: "All Rooms",
                color: "#A82727",
            }
        ]
    },
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
                color: "#D53434",
            },
            {
                name: "Espace de détente",
                type: "geographicRoomGroup",
                standard_name: "Relaxing Area",
                color: "#DB1398",
            },
            {
                name: "Open Space",
                type: "geographicRoomGroup",
                standard_name: "Open Space",
                color: "#3DE837",
            },
            {
                name: "Salle de restauration",
                type: "geographicRoomGroup",
                standard_name: "Dining Room",
                color: "#8470F2",
            },
            {
                name: "Espace fumeur",
                type: "geographicRoomGroup",
                standard_name: "Smoking Area",
                color: "#9E864E",
            },
            {
                name: "Rangement",
                type: "geographicRoomGroup",
                standard_name: "Storage",
                color: "#1FA86F",
            },
            {
                name: "Circulation",
                type: "geographicRoomGroup",
                standard_name: "Circulation",
                color: "#C9AA1A",
            },
            {
                name: "Accueil",
                type: "geographicRoomGroup",
                standard_name: "Halls",
                color: "#CD7E38",
            },
            {
                name: "Sanitaires",
                type: "geographicRoomGroup",
                standard_name: "Sanitary",
                color: "#1F85A2",
            },
            {
                name: "Extérieur",
                type: "geographicRoomGroup",
                standard_name: "Outside",
                color: "#9DAC18",
            }
        ]
    },
    {
        name: "Occupation",
        type: "groupingCategory",
        standard_name: "Occupation",
        icon: "accessibility",
        groups: [
        ]
    },
    {
        name: "Accès",
        type: "groupingCategory",
        standard_name: "Access",
        icon: "accessibility",
        groups: [
            {
                name: "Public",
                type: "geographicRoomGroup",
                standard_name: "Public",
                color: "#21D51A",
            },
            {
                name: "Privé",
                type: "geographicRoomGroup",
                standard_name: "Private",
                color: "#C91111",
            },
            {
                name: "Restreint",
                type: "geographicRoomGroup",
                standard_name: "Restricted",
                color: "#C78311",
            }
        ]
    },
    {
        name: "Affectation",
        type: "groupingCategory",
        standard_name: "Affectation",
        icon: "accessibility",
        groups: [
            {
                name: "Meeting Room",
                type: "geographicRoomGroup",
                standard_name: "Meeting Room",
                color: "#D53434",
            },
            {
                name: "Espace de détente",
                type: "geographicRoomGroup",
                standard_name: "Relaxing Area",
                color: "#DB1398",
            },
            {
                name: "Open Space",
                type: "geographicRoomGroup",
                standard_name: "Open Space",
                color: "#3DE837",
            },
            {
                name: "Salle de restauration",
                type: "geographicRoomGroup",
                standard_name: "Dining Room",
                color: "#8470F2",
            },
            {
                name: "Espace fumeur",
                type: "geographicRoomGroup",
                standard_name: "Smoking Area",
                color: "#9E864E",
            },
            {
                name: "Rangement",
                type: "geographicRoomGroup",
                standard_name: "Storage",
                color: "#1FA86F",
            },
            {
                name: "Circulation",
                type: "geographicRoomGroup",
                standard_name: "Circulation",
                color: "#C9AA1A",
            },
            {
                name: "Accueil",
                type: "geographicRoomGroup",
                standard_name: "Halls",
                color: "#CD7E38",
            },
            {
                name: "Sanitaires",
                type: "geographicRoomGroup",
                standard_name: "Sanitary",
                color: "#1F85A2",
            },
            {
                name: "Extérieur",
                type: "geographicRoomGroup",
                standard_name: "Outside",
                color: "#9DAC18",
            }
        ]
    }
    // {
    //     name: "Fonction",
    //     type: "groupingCategory",
    //     standard_name: "Fonction",
    //     icon: "accessibility",
    //     groups: [
    //         {
    //             name: "Meeting Room",
    //             type: "geographicRoomGroup",
    //             standard_name: "Meeting Room",
    //             color: "#A82727",
    //         },
    //         {
    //             name: "Open Space",
    //             type: "geographicRoomGroup",
    //             standard_name: "Open Space",
    //             color: "#3F5681",
    //         }
    //     ]
    // },
    // {
    //     name: "Affectation",
    //     standard_name: "Affectation",
    //     type: "groupingCategory",
    //     icon: "accessibility",
    //     groups: [
    //         {
    //             name: "Meeting Room",
    //             standard_name: "Meeting Room",
    //             type: "geographicRoomGroup",
    //             color: "#A82727",
    //         },
    //         {
    //             name: "Open Space",
    //             standard_name: "Open Space",
    //             type: "geographicRoomGroup",
    //             color: "#3F5681",
    //         }
    //     ]
    // }
];

// export const STANDARD_EQUIPMENT_GRAPH = [

//     {
//         name: "CFO",
//         type: "groupingCategory",
//         icon: "accessibility",
//         color: "#BD1E13",
//         groups: [
//             {
//                 name: "Luminaires",
//                 type: "BIMObjectGroup",
//                 color: "#A82727",
//             },
//             {
//                 name: "Tableaux Divisionnaires",
//                 type: "BIMObjectGroup",
//                 color: "#3F5681",
//             }
//         ]
//     },
//     {
//         name: "CFA",
//         type: "groupingCategory",
//         icon: "accessibility",
//         color: "#BD8913",
//         groups: [
//             {
//                 name: "Automates",
//                 type: "BIMObjectGroup",
//                 color: "#A82727",
//             },
//             {
//                 name: "Capteurs",
//                 type: "BIMObjectGroup",
//                 color: "#3F5681",
//             },
//             {
//                 name: "Contrôleurs",
//                 type: "BIMObjectGroup",
//                 color: "#671ACD",
//             }
//         ]
//     },
//     {
//         name: "CVC",
//         type: "groupingCategory",
//         icon: "accessibility",
//         color: "#13B0BD",
//         groups: [
//             {
//                 name: "Chauffage",
//                 type: "BIMObjectGroup",
//                 color: "#A82727",
//             },
//             {
//                 name: "Ventilation",
//                 type: "BIMObjectGroup",
//                 color: "#2BDB13",
//             },
//             {
//                 name: "Climatisation",
//                 type: "BIMObjectGroup",
//                 color: "#35C4C7",
//             }
//         ]
//     },
//     {
//         name: "Mobilier",
//         type: "groupingCategory",
//         icon: "accessibility",
//         color: "#9B13BD",
//         groups: [
//             {
//                 name: "Bureaux",
//                 type: "BIMObjectGroup",
//                 color: "#A82727",
//             },
//             {
//                 name: "Chaises",
//                 type: "BIMObjectGroup",
//                 color: "#BD7713",
//             },
//             {
//                 name: "Tables",
//                 type: "BIMObjectGroup",
//                 color: "#BD138C",
//             },
//             {
//                 name: "Rangement",
//                 type: "BIMObjectGroup",
//                 color: "#13BDB2",
//             },
//             {
//                 name: "Plantes",
//                 type: "BIMObjectGroup",
//                 color: "#61BD13",
//             }
//         ]
//     }
// ];

// export const STANDARD_EQUIPMENT_GRAPH = [
//     {
//         name: "Courant fort",
//         type: "groupingCategory",
//         standard_name: "CFO",
//         icon: "accessibility",
//         color: "#BD1E13",
//         groups: [
//             {
//                 name: "Luminaires",
//                 standard_name: "Lamps",
//                 type: "BIMObjectGroup",
//                 color: "#A82727",
//             },
//             {
//                 name: "Convertisseur de Puissance",
//                 standard_name: "Power Converters",
//                 type: "BIMObjectGroup",
//                 color: "#3ECBAC",
//             },
//             {
//                 name: "Batteries",
//                 standard_name: "Batteries",
//                 type: "BIMObjectGroup",
//                 color: "#228B3B",
//             },
//             {
//                 name: "Panneaux photovoltaïques",
//                 standard_name: "Solar Panels",
//                 type: "BIMObjectGroup",
//                 color: "#228B3B",
//             },
//             {
//                 name: "Transformateurs",
//                 standard_name: "Transformators",
//                 type: "BIMObjectGroup",
//                 color: "#372FE8",
//             },
//             {
//                 name: "Chargeurs électriques",
//                 standard_name: "Power Chargers",
//                 type: "BIMObjectGroup",
//                 color: "#A6BC55",
//             },
//             {
//                 name: "Armoire électrique",
//                 standard_name: "Control Cabinets",
//                 type: "BIMObjectGroup",
//                 color: "#1823A8",
//             }
//         ]
//     },
//     {
//         name: "Courant faible",
//         type: "groupingCategory",
//         standard_name: "CFA",
//         icon: "accessibility",
//         color: "#BD8913",
//         groups: [
//             {
//                 name: "Automates",
//                 standard_name: "Controllers",
//                 type: "BIMObjectGroup",
//                 color: "#3C8FD3",
//             },
//             {
//                 name: "Capteurs",
//                 standard_name: "Sensors",
//                 type: "BIMObjectGroup",
//                 color: "#E81C1C",
//             },
//             {
//                 name: "Contrôleurs",
//                 standard_name: "Controllers",
//                 type: "BIMObjectGroup",
//                 color: "#DF7979",
//             },
//             {
//                 name: "Contacts de fenêtres",
//                 standard_name: "Windows Contacts",
//                 type: "BIMObjectGroup",
//                 color: "#372E99",
//             },
//             {
//                 name: "Stores électriques",
//                 standard_name: "Electrical Blinds",
//                 type: "BIMObjectGroup",
//                 color: "#E31C1C",
//             },
//             {
//                 name: "Lecteurs d'accès",
//                 standard_name: "Access Readers",
//                 type: "BIMObjectGroup",
//                 color: "#DBC328",
//             }
//         ]
//     },
//     {
//         name: "Chauffage / Ventilation / Climatisation",
//         standard_name: "CVC",
//         type: "groupingCategory",
//         icon: "accessibility",
//         color: "#13B0BD",
//         groups: [
//             {
//                 name: "Ventilo-Convecteur",
//                 standard_name: "Fan Coil",
//                 type: "BIMObjectGroup",
//                 color: "#E32B2B",
//             },
//             {
//                 name: "Ballons d'eau",
//                 standard_name: "Water Tanks",
//                 type: "BIMObjectGroup",
//                 color: "#C31D71",
//             },
//             {
//                 name: "Centrales de traitement d'air",
//                 standard_name: "Central air units",
//                 type: "BIMObjectGroup",
//                 color: "#C48DDF",
//             },
//             {
//                 name: "Air conditionné",
//                 standard_name: "Air conditioners",
//                 type: "BIMObjectGroup",
//                 color: "#F47272",
//             },
//             {
//                 name: "Vannes 6 Voies",
//                 standard_name: "V6V",
//                 type: "BIMObjectGroup",
//                 color: "#6C7CF8",
//             },
//             {
//                 name: "Bouches d'aération",
//                 standard_name: "Air Vents",
//                 type: "BIMObjectGroup",
//                 color: "#7212B4",
//             },
//             {
//                 name: "Chaudières",
//                 standard_name: "Heaters",
//                 type: "BIMObjectGroup",
//                 color: "#E32B2B",
//             }
//         ]
//     },
//     {
//         name: "Mobilier",
//         type: "groupingCategory",
//         standard_name: "Furnitures",
//         icon: "accessibility",
//         color: "#9B13BD",
//         groups: [
//             {
//                 name: "Bureaux",
//                 standard_name: "Offices",
//                 type: "BIMObjectGroup",
//                 color: "#A82727",
//             },
//             {
//                 name: "Chaises",
//                 standard_name: "Chairs",
//                 type: "BIMObjectGroup",
//                 color: "#BD7713",
//             },
//             {
//                 name: "Tables",
//                 standard_name: "Desks",
//                 type: "BIMObjectGroup",
//                 color: "#BD138C",
//             },
//             {
//                 name: "Rangement",
//                 standard_name: "Storage",
//                 type: "BIMObjectGroup",
//                 color: "#13BDB2",
//             },
//             {
//                 name: "Plantes",
//                 standard_name: "Plants",
//                 type: "BIMObjectGroup",
//                 color: "#61BD13",
//             },
//             {
//                 name: "Poubelles",
//                 standard_name: "Trashs",
//                 type: "BIMObjectGroup",
//                 color: "#0DDF47",
//             },
//         ]
//     }
// ];

// export const STANDARD_CONTROL_ENDPOINT_GRAPH = [
//     {
//         name: "Standards",
//         type: "groupingCategory",
//         icon: "accessibility",
//         standard_name: "Standards",
//         elements: {
//             name: "Standards"
//         },
//         groups: [
//             {
//                 name: "Standard Profile",
//                 type: "SpinalControlPointGroup",
//                 color: "#BD1319",
//                 standard_name: "Standard Profile",
//                 elements: {
//                     name: "Standard Profile"
//                 },
//                 groups: [
//                     {
//                         name: "Building",
//                         type: "SpinalControlPoint",
//                         standard_name: "Building",
//                         elements: []
//                     },
//                     {
//                         name: "Floor",
//                         type: "SpinalControlPoint",
//                         standard_name: "Floor",
//                         elements: []
//                     },
//                     {
//                         name: "Room",
//                         type: "SpinalControlPoint",
//                         standard_name: "Room",
//                         elements: [
//                             {
//                                 name: "Consigne de température",
//                                 alias: "cons_temp",
//                                 path: "",
//                                 unit: "°C",
//                                 dataType: "Float",
//                                 type: "Consigne",
//                                 command: 0,
//                                 saveTimeSeries: 0,
//                                 config: {
//                                     min: { value: 10, color: "#00FCFF" },
//                                     average: { value: 25, color: "#30FF00" },
//                                     max: { value: 40, color: "#9A0808" },
//                                     calculation_rule: "Reference"
//                                 },
//                                 id: Date.now() + ++i
//                             },
//                             {
//                                 name: "Thermomètre",
//                                 alias: "Thermomètre",
//                                 path: "",
//                                 unit: "°C",
//                                 dataType: "Float",
//                                 type: "Temperature",
//                                 command: 0,
//                                 saveTimeSeries: 0,
//                                 config: {
//                                     min: { value: 10, color: "#00FCFF" },
//                                     average: { value: 25, color: "#00FF22" },
//                                     max: { value: 40, color: "#B60721" },
//                                     calculation_rule: "Reference"
//                                 },
//                                 id: Date.now() + ++i
//                             },
//                             {
//                                 name: "Nombre d occupants",
//                                 alias: "nb occupants",
//                                 path: "",
//                                 unit: "°C",
//                                 dataType: "Float",
//                                 type: "Occupation",
//                                 command: 0,
//                                 saveTimeSeries: 1,
//                                 config: {
//                                     min: { value: 0, color: "#08FF00" },
//                                     average: { value: 3, color: "#FFA200" },
//                                     max: { value: 6, color: "#800B00" },
//                                     calculation_rule: "Reference"
//                                 },
//                                 id: Date.now() + ++i
//                             },
//                             {
//                                 name: "CO2",
//                                 alias: "co2",
//                                 path: "",
//                                 unit: "ppm",
//                                 dataType: "Integer",
//                                 type: "co2",
//                                 command: 0,
//                                 saveTimeSeries: 0,
//                                 config: {
//                                     min: { value: 400, color: "#0BD52E" },
//                                     average: { value: 750, color: "#FFFF00" },
//                                     max: { value: 1100, color: "#E44907" },
//                                     calculation_rule: "Reference"
//                                 },
//                                 id: Date.now() + ++i
//                             },
//                             {
//                                 name: "Niveau sonore",
//                                 alias: "noise",
//                                 path: "",
//                                 unit: "dB",
//                                 dataType: "Integer",
//                                 type: "Other",
//                                 command: 0,
//                                 saveTimeSeries: 0,
//                                 config: {
//                                     min: { value: 0, color: "#07E126" },
//                                     average: { value: 55, color: "#FFFF00" },
//                                     max: { value: 110, color: "#F10505" },
//                                     calculation_rule: "Reference"
//                                 },
//                                 id: Date.now() + ++i
//                             },
//                             {
//                                 name: "Présence",
//                                 alias: "pres",
//                                 path: "",
//                                 unit: "",
//                                 dataType: "Enum",
//                                 type: "Occupation",
//                                 command: 0,
//                                 saveTimeSeries: 0,
//                                 config: {
//                                     enumeration: [
//                                         {
//                                             name: "Libre",
//                                             color: "#09E312",
//                                             id: Date.now() + ++i
//                                         },
//                                         {
//                                             name: "Occupée",
//                                             color: "#E0A105",
//                                             id: Date.now() + ++i
//                                         }
//                                     ],
//                                     calculation_rule: "Reference"
//                                 },
//                                 id: Date.now() + ++i
//                             },
//                             {
//                                 name: "Etat de réservation",
//                                 alias: "res",
//                                 path: "",
//                                 unit: "",
//                                 dataType: "Enum",
//                                 type: "Occupation",
//                                 command: 0,
//                                 saveTimeSeries: 0,
//                                 config: {
//                                     enumeration: [
//                                         {
//                                             name: "Disponible",
//                                             color: "#0CE810",
//                                             id: Date.now() + ++i
//                                         },
//                                         {
//                                             name: "Indisponible",
//                                             color: "#EA0A0A",
//                                             id: Date.now() + ++i
//                                         }
//                                     ],
//                                     calculation_rule: "Reference"
//                                 },
//                                 id: Date.now() + ++i
//                             },
//                             {
//                                 name: "Consigne de luminaire",
//                                 alias: "cons_lum",
//                                 path: "",
//                                 unit: "",
//                                 dataType: "Enum",
//                                 type: "Consigne",
//                                 command: 0,
//                                 saveTimeSeries: 0,
//                                 config: {
//                                     enumeration: [
//                                         {
//                                             name: "Allumée",
//                                             color: "#DDD72B",
//                                             id: Date.now() + ++i
//                                         },
//                                         {
//                                             name: "Eteinte",
//                                             color: "#120757",
//                                             id: Date.now() + ++i
//                                         }
//                                     ],
//                                     calculation_rule: "Reference"
//                                 },
//                                 id: Date.now() + ++i
//                             }
//                         ]
//                     },
//                     {
//                         name: "Equipment",
//                         type: "SpinalControlPoint",
//                         standard_name: "Equipment",
//                         elements: []
//                     }
//                 ]
//             }
//         ]
//     }
// ];

export const STANDARD_EQUIPMENT_GRAPH = [
    {
        name: "Plomberie",
        type: "groupingCategory",
        standard_name: "PLB",
        icon: "accessibility",
        color: "#17D240",
        groups: [
            {
                name: "Siphon téléscopique & Panneau de douche",
                standard_name: "Telescopic siphon & shower plate",
                type: "BIMObjectGroup",
                color: "#C4A32A",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Siphon téléscopique acier BLUCHER 350-320-050_x000D_ Panneau de douche marque PRESTO type ALPA ref 35816",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Relevage EU/EV Sanitaires",
                standard_name: "Telescopic siphon & shower plate",
                type: "BIMObjectGroup",
                color: "#C4A32A",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Relevage EU/EV Sanitaires",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Déversoir & mitigeur mural",
                standard_name: "Wall outlet & mixer",
                type: "BIMObjectGroup",
                color: "#C4A32A",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Déversoir mural ALLIA type PUBLICA réf. 047500 Mitigeur mural GROHE 31187001",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Lavel main d'angle avec mitigeur",
                standard_name: "Corner hand washer with mixer",
                type: "BIMObjectGroup",
                color: "#C4A32A",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Lave-mains d'angle VB réf. 533341 avec mitigeur temporisé marque DUTEN réf R4153",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "R.I.A. DN 25 équipé",
                standard_name: "Equiped R.I.A. DN 25",
                type: "BIMObjectGroup",
                color: "#C4A32A",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "R.I.A. DN 25 équipé comprenant dévidoir tournant, anneau de guidage, tuyau flexible 30 ml et lance multijets",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Colonne sèche",
                standard_name: "Dry standpipe",
                type: "BIMObjectGroup",
                color: "#C4A32A",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Colonne sèche",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Colonne humide",
                standard_name: "Wet standpipe",
                type: "BIMObjectGroup",
                color: "#C4A32A",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Colonne humide",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Cuvette WC suspendue + Bati-support",
                standard_name: "Suspended toilet bowl + support",
                type: "BIMObjectGroup",
                color: "#C4A32A",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Cuvette WC suspendue + Bati-support",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Mitigeur électronique mural",
                standard_name: "Wall mounted electronic mixer",
                type: "BIMObjectGroup",
                color: "#C4A32A",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Mitigeur électronique mural pour plans vasque",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "BECS individuels cellules satinaires + panoplis sanitaire et compteur",
                standard_name: "Wall mounted electronic mixer",
                type: "BIMObjectGroup",
                color: "#C4A32A",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "BECS individuels cellules satinaires + panoplis sanitaire et compteur",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "CFA",
        type: "groupingCategory",
        standard_name: "CFA",
        icon: "accessibility",
        color: "#17D240",
        groups: [
            {
                name: "Contrôle d'accès : PNG",
                standard_name: "Access control : PNG",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "PNG",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Contrôle d'accès : Barrières levantes",
                standard_name: "Access control : Lifting barriers",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Barrières levantes",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Contrôle d'accès : UTL",
                standard_name: "Access control : UTL",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "UTL",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Contrôle d'accès : LB",
                standard_name: "Access control : LB",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "LB",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Contrôle d'accès : SERVEUR",
                standard_name: "Access control : Server",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "SERVEUR",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Contrôle d'accès : Poste client",
                standard_name: "Access control : Client station",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Poste client",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Anti-intrustion : CP intrusion",
                standard_name: "Anti-intrustion : CP intrusion",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "CP intrusion",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Anti-intrustion : Bris vitres",
                standard_name: "Anti-intrustion : Glass breakage",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Bris vitres",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Anti-intrustion : Radar",
                standard_name: "Anti-intrustion : Radar",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Radar",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Anti-intrustion : centrale intrusion",
                standard_name: "Anti-intrustion : central intrusion",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "centrale intrusion",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Vidéosurveillance : Cam Int",
                standard_name: "Vidéosurveillance : Cam Int",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Cam Int",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Vidéosurveillance : Cam Ext",
                standard_name: "Vidéosurveillance : Cam Ext",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Cam Ext",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Vidéosurveillance : Cam 270°",
                standard_name: "Vidéosurveillance : Cam 270°",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Cam 270°",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Vidéosurveillance : SERVEUR",
                standard_name: "Vidéosurveillance : SERVER",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "SERVEUR",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Vidéosurveillance : Poste client",
                standard_name: "Vidéosurveillance : Client station",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Poste client",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Interphonie : PU vidéo portier",
                standard_name: "Intercom : PU video doorman",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "PU vidéo portier",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Interphonie : Poste maitre interphonie",
                standard_name: "Intercom : intercom master station",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Poste maitre interphonie",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Interphonie : Interphonie sécurité",
                standard_name: "Intercom : security intercom",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Interphonie sécurité",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "GTB : GTB multicapteur",
                standard_name: "GTB : GTB multisensor",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "GTB multicapteur",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "GTB : GTB télécommande",
                standard_name: "GTB : GTB remote control",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "GTB télécommande",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "GTB : Multimétiers",
                standard_name: "GTB : multi-tie",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Multimétiers",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "GTB : SERVEUR",
                standard_name: "GTB : SERVER",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "SERVEUR",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "GTB : Poste client",
                standard_name: "GTB : Client station",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Poste client",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Incendie : Baie",
                standard_name: "Fire : Baie",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Baie",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Incendie : Détecteur incendie",
                standard_name: "Fire : Fire sensor",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Détecteur incendie",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Incendie : Détecteur de flamme",
                standard_name: "Fire : Flame sensor",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Détecteur de flamme",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Incendie : Indicateur d'actions",
                standard_name: "Fire : Action indicator",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Indicateur d'actions",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Incendie : Déclencheur manuel",
                standard_name: "Fire : Manual release",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Déclencheur manuel",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Incendie : Module déporté",
                standard_name: "Fire : Remote module",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Module déporté",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Incendie : Sirène",
                standard_name: "Fire : Siren",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Sirène",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Incendie : Sirène flash",
                standard_name: "Fire : Flash siren",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Sirène flash",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Incendie : Flash",
                standard_name: "Fire : Flash",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Flash",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Incendie : Panneaux lumineux",
                standard_name: "Fire : Light panels",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Panneaux lumineux",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Incendie : TRE",
                standard_name: "Fire : TRE",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "TRE",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Incendie : Asservissements PCF",
                standard_name: "Fire : PCF drives",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Asservissements PCF",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "CVCD",
        type: "groupingCategory",
        standard_name: "CVCD",
        icon: "accessibility",
        color: "#17D240",
        groups: [
            {
                name: "Adoucisseurs",
                standard_name: "Softeners",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Adoucisseurs",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Armoire de climatisation",
                standard_name: "Air conditioning cabinet",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Armoire de climatisation",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Armoire électrique sous-stations",
                standard_name: "Substation Electrical Cabinet",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Armoire électrique sous-stations",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Armoires et raccordement electriques CTA",
                standard_name: "Electrical cabinets and connections CTA",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Armoires et raccordement electriques CTA",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "CCF Autocommandé",
                standard_name: "CCF self-directed",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "CCF Autocommandé",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Armoire de climatisation à détente directe",
                standard_name: "Direct Release Air Conditioning Cabinet",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Armoire de climatisation à détente directe",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Centrale de traitement d'air",
                standard_name: "Air handling unit",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Centrale de traitement d'air",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Pompe simple",
                standard_name: "Simple pump",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe simple",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Pompe double",
                standard_name: "Double pump",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe double",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Pompe doseuse",
                standard_name: "Dosing pump",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe doseuse",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Pompe secondaire et Plancher réversible",
                standard_name: "Secondary Pump and Reversible Floor",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe secondaire et Plancher réversible",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Echangeurs à plaques",
                standard_name: "Plate exchangers",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Echangeurs à plaques",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Compteurs",
                standard_name: "Counters",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Compteurs",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Disconnecteur",
                standard_name: "Disconnector",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Disconnecteur",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Extracteur",
                standard_name: "Extractor",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Extracteur",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Filtre à tamis",
                standard_name: "Mesh filter",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Filtre à tamis",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Filtre à tamis",
                standard_name: "Mesh filter",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Filtre à tamis",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Filtre magnétique",
                standard_name: "Magnetic filter",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Filtre magnétique",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Kit vannes à pression différentielle",
                standard_name: "kit differential pressure valves",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Kit vannes à pression différentielle",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Groupe de maintien de pression",
                standard_name: "Pressure Maintaining Group",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Groupe de maintien de pression",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "BDV soufflage / reprise",
                standard_name: "BDV blowing / recovery",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "BDV soufflage / reprise",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Parking Piège à sons rectangulaire",
                standard_name: "Parking Rectangular Sound Trap",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Parking Piège à sons rectangulaire",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Ventilateur d'amenée d'air Parking",
                standard_name: "Air supply fan Parking",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Ventilateur d'amenée d'air Parking",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Ventilateur d'extraction Parking",
                standard_name: "Exhaust fan Parking",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Ventilateur d'extraction Parking",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Compteurs locaux techniques ",
                standard_name: "Technical room counters",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Compteurs locaux techniques ",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Compteurs locaux techniques",
                standard_name: "Technical room counters",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Compteurs locaux techniques",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Thermofrigopompes EC 4 tubes",
                standard_name: "Heat pumps EC 4 tubes",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Thermofrigopompes EC 4 tubes",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Thermofrigopompes réversible 6 tubes",
                standard_name: "Reversible heat pumps 6 tubes",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Thermofrigopompes réversible 6 tubes",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Ventilo-convecteurs",
                standard_name: "Fan coil units",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Ventilo-convecteurs",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Bouteille EC/EG",
                standard_name: "LTD : EC/EG bottles",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Bouteille EC/EG",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Pompe simple eau ECS 6m3/h",
                standard_name: "LTD : Water simple pump ECS 6m3/h",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe simple eau chaude ECS Débit: 6 m3/h",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Pompe simple eau chaude Pompes secondaires 60m3/h",
                standard_name: "LTD : Water simple pump secondary pumps 60m3/h",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe simple eau chaude Pompes secondaires EC Boucle Débit: 60 m3/h",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Pompe simple eau chaude Primaire EC",
                standard_name: "LTD : Single hot water pump Primary EC",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe simple eau chaude Primaire EC",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Pompe simple eau chaude Secondaire echangeur EC Débit: 175 m3/h",
                standard_name: "LTD : Single pump hot water Secondary exchanger EC Flow: 175 m3/h",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe simple eau chaude Secondaire echangeur EC Débit: 175 m3/h",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Adoucisseur_x000D_ Marque : PERMO",
                standard_name: "LTD : Adoucisseur_x000D_ Marque : PERMO",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Adoucisseur_x000D_ Marque : PERMO",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Compresso (TECBOX COMPRESSO 15.2.6 + vase pilote)",
                standard_name: "LTD : Compresso (TECBOX COMPRESSO 15.2.6 + vase pilote)",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Compresso (TECBOX COMPRESSO 15.2.6 + vase pilote)",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Echangeur EC/ECS",
                standard_name: "LTD : EC/ECS Exchanger",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Echangeur EC/ECS",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Ensemble de disconnection WATTS",
                standard_name: "LTD : WATTS Disconnect Assembly",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Ensemble de disconnection WATTS",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Filtre à tamis",
                standard_name: "LTD : Mesh filter",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Filtre à tamis",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Filtre désemboueur sans pompe_x000D_",
                standard_name: "LTD : Overflow filter without pumpe_x000D_",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Filtre désemboueur sans pompe_x000D_",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Pompe doseuse",
                standard_name: "LTD : Dosing pump",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe doseuse",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Echangeur EG (4,5-14,5 / 16-7) - Puissance : 2000kw",
                standard_name: "LTD : Exchanger EG (4,5-14,5/ 16-7) - Power: 2000kw",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Echangeur EG (4,5-14,5 / 16-7) - Puissance : 2000kw",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Pompe simple eau glacée Primaire EG  Débit: 195 m3/h",
                standard_name: "LTD : Single pump ice water Primary EG Flow: 195 m3/h",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe simple eau glacée Primaire EG  Débit: 195 m3/h",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Pompe simple eau glacée Secondaire EG  Débit: 195 m3/h",
                standard_name: "LTD : Single pump ice water Secondary EG Flow: 195 m3/h",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe simple eau glacée Secondaire EG  Débit: 195 m3/h",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Pompe simple eau glacée Secondaire Locaux INFO  EG Débit: 35 m3/h",
                standard_name: "LTD : Single pump ice water Secondary Premises INFO EG Flow: 35 m3/h",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe simple eau glacée Secondaire Locaux INFO  EG Débit: 35 m3/h",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Centrale de détection",
                standard_name: "LTD : Central sensor",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Centrale de détection",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Extracteurs spécifique asservi à la centrale de détection",
                standard_name: "LTD : Specific extractors controlled by the detection plant",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Extracteurs spécifique asservi à la centrale de détection",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Pompe simple eau chaude Pompe primaire EC",
                standard_name: "LTD : Single Hot Water Pump Primary Pump EC",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe simple eau chaude Pompe primaire EC",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Pompe simple eau glacée Pompe primaire EG Débit: 65 m3/h",
                standard_name: "LTD : Single Ice Water Pump Primary Pump EG Flow: 65 m3/h",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe simple eau glacée Pompe primaire EG Débit: 65 m3/h",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "LTD : Pompe simple eau glacée Primaire Thermo",
                standard_name: "LTD : Single Pump Ice Water Primary Thermo",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe simple eau glacée Primaire Thermo",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            }  
        ]
    },
    {
        name: "SPK",
        type: "groupingCategory",
        standard_name: "SPK",
        icon: "accessibility",
        color: "#17D240",
        groups: [
            {
                name: "Vanne + IPE sur colonne humide",
                standard_name: "Valve + IPE on wet column",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Vanne + IPE sur chaque attente colonnes humides",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Groupe électropompe",
                standard_name: "Pump motor",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Groupe électropompe",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Nourrice pour 2 postes de contrôle",
                standard_name: "Nurse for 2 control stations",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Nourrice pour 2 postes de contrôle",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Nourrice pour 4 postes de contrôle",
                standard_name: "Nurse for 4 control stations",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Nourrice pour 4 postes de contrôle",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Pompe de brassage eau + glycol",
                standard_name: "Water mixing pump + glycol",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe de brassage eau + glycol",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Pompe jockey ",
                standard_name: "Jockey pump",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Pompe jockey ",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Poste de contrôle sous eau DN 100",
                standard_name: "DN 100 Underwater Control Station",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Poste de contrôle sous eau avec vannes d'isolement, d'essais et vidange DN 100 ",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Poste de contrôle sous glycol DN 150",
                standard_name: "Control post under glycol DN 150",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Poste de contrôle sous GLYCOL avec vannes d'isolement, d'essais et vidange DN 150 ",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Système antigel",
                standard_name: "Antifreeze system",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Système antigel y compris remplissage mélange (eau + glycol)",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Tableau d'alarmes sprinklage",
                standard_name: "Sprinklage Alarm Table",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau d'alarmes dans le local sprinklage, compris filerie et raccordement des alarmes",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Tête de sprinkler spray 68°C",
                standard_name: "68°C spray sprinkler head",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tête sprinkleur de type spray debout réponse rapide 68°C",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Tête de sprinkler spray 93°C",
                standard_name: "93°C spray sprinkler head",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tête sprinkleur de type spray debout réponse rapide 93°C",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Tête de sprinkler spray 141°C",
                standard_name: "141°C spray sprinkler head",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tête sprinkleur de type spray debout réponse rapide 141°C",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Tête de sprinkler spray 68°C",
                standard_name: "68°C spray sprinkler head",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tête sprinkleur de type spray debout réponse rapide 68°C",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: true,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Vanne + IPE",
                standard_name: "Valve + IPE",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Vanne + IPE",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            },
            {
                name: "Vanne + IPE + filerie",
                standard_name: "Valve + IPE + wiring",
                type: "BIMObjectGroup",
                color: "#E32B2B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Vanne + IPE + filerie",
                                type: "String",
                                unit: ""
                            },
                            {
                                label: "Regroupement",
                                value: false,
                                type: "bool",
                                unit: ""
                            }
                        ]
                    }
                ]
            }
        ]
    }
    // A TERMINER ICI

];

export const STANDARD_CONTROL_ENDPOINT_GRAPH = [
    {
        name: "Standards",
        type: "groupingCategory",
        icon: "accessibility",
        standard_name: "Standards",
        elements: {
            name: "Standards"
        },
        groups: [
            {
                name: "Bâtiment",
                type: "SpinalControlPointGroup",
                color: "#BD1319",
                standard_name: "Building",
                elements: {
                    name: "Building"
                },
                groups: [
                    {
                        name: "KPI",
                        type: "SpinalControlPoint",
                        standard_name: "KPI",
                        elements: [
                            {
                                name: "Energie globale",
                                alias: "global energy",
                                path: "",
                                unit: "kW",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Chauffage",
                                alias: "heating",
                                path: "",
                                unit: "kW",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Climatisation",
                                alias: "air conditionning",
                                path: "",
                                unit: "kW",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Eclairage",
                                alias: "illumination",
                                path: "",
                                unit: "kW",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Eau",
                                alias: "water",
                                path: "",
                                unit: "L",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Production d'énergie",
                                alias: "power generation",
                                path: "",
                                unit: "kW",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Ensoleillement",
                                alias: "sunlight",
                                path: "",
                                unit: "Wh/m²",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Efficacité de production d'énergie solaire",
                                alias: "solar power generation efficiency",
                                path: "",
                                unit: "kW",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Gain en émission de CO2",
                                alias: "CO2 emission gain",
                                path: "",
                                unit: "%",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50, color: "#30FF00" },
                                    max: { value: 100, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Taux d'autoconsommation énergétique",
                                alias: "ernergy self consumption rate",
                                path: "",
                                unit: "kW",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50, color: "#30FF00" },
                                    max: { value: 100, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Qualité de l'air",
                                alias: "air quality",
                                path: "",
                                unit: "ppm",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 5, color: "#30FF00" },
                                    max: { value: 10, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Luminosité",
                                alias: "luminosity",
                                path: "",
                                unit: "lum",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 150, color: "#30FF00" },
                                    max: { value: 300, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Temperature moyenne",
                                alias: "average temperature",
                                path: "",
                                unit: "°C",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 25, color: "#30FF00" },
                                    max: { value: 50, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Nombre d'espaces occupés",
                                alias: "number of occupied spaces",
                                path: "",
                                unit: "",
                                dataType: "Integer",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50, color: "#30FF00" },
                                    max: { value: 100, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Taux d'occupation",
                                alias: "occupation rate",
                                path: "",
                                unit: "%",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50, color: "#30FF00" },
                                    max: { value: 100, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            }
                        ]
                    }
                ]
            },
            {
                name: "Etage",
                type: "SpinalControlPointGroup",
                color: "#BD1319",
                standard_name: "Floor",
                elements: {
                    name: "Floor"
                },
                groups: [
                    {
                        name: "KPI",
                        type: "SpinalControlPoint",
                        standard_name: "KPI",
                        elements: [
                            {
                                name: "Energie globale",
                                alias: "global energy",
                                path: "",
                                unit: "kW",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Chauffage",
                                alias: "heating",
                                path: "",
                                unit: "kW",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Climatisation",
                                alias: "air conditionning",
                                path: "",
                                unit: "kW",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Eclairage",
                                alias: "illumination",
                                path: "",
                                unit: "kW",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Eau",
                                alias: "water",
                                path: "",
                                unit: "L",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50000, color: "#30FF00" },
                                    max: { value: 100000, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Qualité de l'air",
                                alias: "air quality",
                                path: "",
                                unit: "ppm",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 5, color: "#30FF00" },
                                    max: { value: 10, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Luminosité",
                                alias: "luminosity",
                                path: "",
                                unit: "lum",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 150, color: "#30FF00" },
                                    max: { value: 300, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Temperature moyenne",
                                alias: "average temperature",
                                path: "",
                                unit: "°C",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 25, color: "#30FF00" },
                                    max: { value: 50, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Nombre d'espaces occupés",
                                alias: "number of occupied spaces",
                                path: "",
                                unit: "",
                                dataType: "Integer",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50, color: "#30FF00" },
                                    max: { value: 100, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Taux d'occupation",
                                alias: "occupation rate",
                                path: "",
                                unit: "%",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50, color: "#30FF00" },
                                    max: { value: 100, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            }
                        ]
                    }
                ]
            },
            {
                name: "Pièce",
                type: "SpinalControlPointGroup",
                color: "#BD1319",
                standard_name: "Room",
                elements: {
                    name: "Room"
                },
                groups: [
                    // {
                    //     name: "Local spécifique",
                    //     type: "SpinalControlPoint",
                    //     standard_name: "specific room",
                    //     elements: [
                    //         {
                    //             name: "Qualité de l'air",
                    //             alias: "air quality",
                    //             path: "",
                    //             unit: "ppm",
                    //             dataType: "Float",
                    //             type: "Insight",
                    //             command: 0,
                    //             saveTimeSeries: 1,
                    //             config: {
                    //                 min: { value: 0, color: "#00FCFF" },
                    //                 average: { value: 5, color: "#30FF00" },
                    //                 max: { value: 10, color: "#9A0808" },
                    //                 calculation_rule: "Reference"
                    //             },
                    //             id: Date.now() + ++i
                    //         },
                    //         {
                    //             name: "Luminosité",
                    //             alias: "luminosity",
                    //             path: "",
                    //             unit: "lum",
                    //             dataType: "Float",
                    //             type: "Insight",
                    //             command: 0,
                    //             saveTimeSeries: 1,
                    //             config: {
                    //                 min: { value: 0, color: "#00FCFF" },
                    //                 average: { value: 150, color: "#30FF00" },
                    //                 max: { value: 300, color: "#9A0808" },
                    //                 calculation_rule: "Reference"
                    //             },
                    //             id: Date.now() + ++i
                    //         },
                    //         {
                    //             name: "Temperature moyenne",
                    //             alias: "average temperature",
                    //             path: "",
                    //             unit: "°C",
                    //             dataType: "Float",
                    //             type: "Insight",
                    //             command: 0,
                    //             saveTimeSeries: 1,
                    //             config: {
                    //                 min: { value: 0, color: "#00FCFF" },
                    //                 average: { value: 25, color: "#30FF00" },
                    //                 max: { value: 50, color: "#9A0808" },
                    //                 calculation_rule: "Reference"
                    //             },
                    //             id: Date.now() + ++i
                    //         }
                    //     ]
                    // },
                    {
                        name: "Local générique",
                        type: "SpinalControlPoint",
                        standard_name: "generic room",
                        elements: [
                            {
                                name: "Qualité de l'air",
                                alias: "air quality",
                                path: "",
                                unit: "ppm",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 5, color: "#30FF00" },
                                    max: { value: 10, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Luminosité",
                                alias: "luminosity",
                                path: "",
                                unit: "lum",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 150, color: "#30FF00" },
                                    max: { value: 300, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Temperature moyenne",
                                alias: "average temperature",
                                path: "",
                                unit: "°C",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 25, color: "#30FF00" },
                                    max: { value: 50, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Occupation",
                                alias: "occupation",
                                path: "",
                                unit: "",
                                dataType: "Enum",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    enumeration: [
                                        {
                                            name: "Libre",
                                            color: "#09E312",
                                        },
                                        {
                                            name: "Occupée",
                                            color: "#E0A105",
                                        }
                                    ],
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Taux d'occupation",
                                alias: "occupation rate",
                                path: "",
                                unit: "%",
                                dataType: "Float",
                                type: "Insight",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#00FCFF" },
                                    average: { value: 50, color: "#30FF00" },
                                    max: { value: 100, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            }
                        ]
                    },
                ]
            },            
            
        ]
    }
];

export const STANDARD_TICKET_GRAPH = [];

export const STANDARD_NOMENCLATURE_GRAPH = [
    {
       name: "Nomenclature Category",
       standard_name: "Nomenclature Category",
       type: "groupingCategory",
       icon: "add",
       groups: [
           {
               name: "Nomenclature Group",
               standard_name: "Nomenclature Group",
               type: "AttributeConfigurationGroup",
               color: "#000000",
               conf: [
                   {
                       name: "Building",
                       type: "AttributeConfiguration",
                       standard_name: "Building",
                       elements: {
                            name: "Nomenclature Configration",
                            categories: [
                                {
                                    // name: "Standard Category",
                                    // standard_name: "Standard Category",
                                    // id: Date.now() + ++i,
                                    // attributes: [
                                    //     {
                                    //         name: "Standard Attribute 1",
                                    //         standard_name: "Standard Attribute 1",
                                    //         id: Date.now() + ++i,
                                    //         show: "false"
                                    //     },
                                    //     {
                                    //     name: "Standard Attribute 2",
                                    //     standard_name: "Standard Attribute 2",
                                    //     id: Date.now() + ++i,
                                    //     show: "false"
                                    //     }
                                    // ]
                                }
                            ]
                       }
                   },
                   {
                        name: "Floor",
                        type: "AttributeConfiguration",
                        standard_name: "Floor",
                        elements: {
                            name: "Nomenclature Configration",
                            categories: []
                        }
                    },
                    {
                        name: "Room",
                        type: "AttributeConfiguration",
                        standard_name: "Room",
                        elements: {
                            name: "Nomenclature Configration",
                            categories: []
                        }
                    },
                    {
                        name: "Equipment",
                        type: "AttributeConfiguration",
                        standard_name: "Equipment",
                        elements: {
                            name: "Nomenclature Configration",
                            categories: []
                        }
                    }
               ]
           }
       ]
    }
];

// name: "Affectation",
//         type: "groupingCategory",
//         standard_name: "Affectation",
//         icon: "accessibility",
//         groups: [
//             {
//                 name: "Meeting Room",
//                 type: "geographicRoomGroup",
//                 standard_name: "Meeting Room",
//                 color: "#D53434",
//             },