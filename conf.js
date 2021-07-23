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
    },
    {
        name: "CFO Td & Divers",
        type: "groupingCategory",
        standard_name: "CFO Td & Divers",
        icon: "accessibility",
        color: "#17D240",
        groups: [
            {
                name: "Batterie de condensateur",
                standard_name: "Capacitor bank",
                type: "BIMObjectGroup",
                color: "#A467B6",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Batterie de condensateur",
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
                name: "Coffret ES1 / ES2",
                standard_name: "ES1 / ES2 box",
                type: "BIMObjectGroup",
                color: "#61EF51",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Coffret ES1 / ES2",
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
                name: "Coffret inverseur",
                standard_name: "Reverser box",
                type: "BIMObjectGroup",
                color: "#7489A8",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Coffret inverseur",
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
                name: "Coffrets switchs",
                standard_name: "Switch box",
                type: "BIMObjectGroup",
                color: "#793DBC",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Coffrets switchs",
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
                name: "Colonne montante 400A",
                standard_name: "Riser distribution 400A",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Colonne montante 400A",
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
                name: "Colonne montante 400A - 4 Niveaux",
                standard_name: "Riser distribution 400A - 4 levels",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Colonne montante 400A - 4 Niveaux",
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
                name: "Dry coolers",
                standard_name: "Dry coolers",
                type: "BIMObjectGroup",
                color: "#F6F6BA",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Dry coolers",
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
                name: "Onduleurs 10 kva",
                standard_name: "10 KVA Inverter",
                type: "BIMObjectGroup",
                color: "#B155ED",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Onduleurs 10 kva",
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
                name: "Onduleurs 10 kva pour sureté",
                standard_name: "10 KVA Inverter for safety",
                type: "BIMObjectGroup",
                color: "#0AD0F2",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Onduleurs 10 kva pour sureté",
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
                name: "Panneaux photovoltaiques en toiture m²",
                standard_name: "Rooftop solar panel m²",
                type: "BIMObjectGroup",
                color: "#6C00AF",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Panneaux photovoltaiques en toiture m²",
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
                name: "Paratonnerre et pattes d'oie",
                standard_name: "Lightning rod & ground connection",
                type: "BIMObjectGroup",
                color: "#E767FD",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Paratonnerre et pattes d'oie",
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
                name: "Source centrale de type SYRIUS de chez LEGRAND - 3kVA + coffret anti panique",
                standard_name: "3KVA - SYRIUS type central source from LEGRAND & anti-panic box",
                type: "BIMObjectGroup",
                color: "#1C253E",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Source centrale de type SYRIUS de chez LEGRAND - 3kVA + coffret anti panique",
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
                name: "Tableau distribution : Asian bar",
                standard_name: "Distribution board: Asian bar",
                type: "BIMObjectGroup",
                color: "#3BE726",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : Asian bar",
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
                name: "Tableau distribution : AUDITORIUM",
                standard_name: "Distribution board : AUDITORIUM",
                type: "BIMObjectGroup",
                color: "#3BE726",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : AUDITORIUM",
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
                name: "Tableau distribution : Bureaux",
                standard_name: "Distribution board : Offices",
                type: "BIMObjectGroup",
                color: "#43E39C",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : Bureaux",
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
                name: "Tableau distribution : Burger bar",
                standard_name: "Distribution board : Burger bar",
                type: "BIMObjectGroup",
                color: "#43E39C",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : Burger bar",
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
                name: "Tableau distribution : Cafétéria R+6",
                standard_name: "Distribution board : Cafeteria G+6",
                type: "BIMObjectGroup",
                color: "#1F0BB2",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : Cafétéria R+6",
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
                name: "Tableau distribution : Corner Bar",
                standard_name: "Distribution board : Corner Bar",
                type: "BIMObjectGroup",
                color: "#2B7B9D",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : Corner Bar",
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
                name: "Tableau distribution : CUISINE R02",
                standard_name: "Distribution board : Kitchen G+2",
                type: "BIMObjectGroup",
                color: "#D946CA",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : CUISINE R02",
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
                name: "Tableau distribution : CUISINE RDC",
                standard_name: "Distribution board : Kitchen GF",
                type: "BIMObjectGroup",
                color: "#A92B87",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : CUISINE RDC",
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
                name: "Tableau distribution : FISH BAR",
                standard_name: "Distribution board : FISH BAR",
                type: "BIMObjectGroup",
                color: "#A92B87",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : FISH BAR",
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
                name: "Tableau distribution : Hall RDC",
                standard_name: "Distribution board : Hall GF",
                type: "BIMObjectGroup",
                color: "#FE129F",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : Hall RDC",
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
                name: "Tableau distribution : Hall RDC",
                standard_name: "Distribution board : Hall GF",
                type: "BIMObjectGroup",
                color: "#FE129F",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : Hall RDC",
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
                name: "Tableau distribution : Hall + Sanitaire",
                standard_name: "Distribution board : hall + sanitary facilities ",
                type: "BIMObjectGroup",
                color: "#E3F2B7",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : Hall + Sanitaire",
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
                name: "Tableau distribution : HQ",
                standard_name: "Distribution board : HQ ",
                type: "BIMObjectGroup",
                color: "#54E603",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : HQ",
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
                name: "Tableau distribution : Laverie",
                standard_name: "Distribution board : Laundry ",
                type: "BIMObjectGroup",
                color: "#AC575B",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : Laverie",
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
                name: "Tableau distribution : MEDITERRANEEN BAR",
                standard_name: "Distribution board : MEDITERRANEAN BAR ",
                type: "BIMObjectGroup",
                color: "#893134",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : MEDITERRANEEN BAR",
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
                name: "Tableau distribution : NATURAL BAR",
                standard_name: "Distribution board : NATURAL BAR ",
                type: "BIMObjectGroup",
                color: "#893134",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : NATURAL BAR",
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
                name: "Tableau distribution : NATURAL BAR",
                standard_name: "Distribution board : NATURAL BAR ",
                type: "BIMObjectGroup",
                color: "#893134",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : NATURAL BAR",
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
                name: "Tableau distribution : Palier ASC et ESC + Terrasse",
                standard_name: "Distribution board : Elevator & Staircase level +  Terrace",
                type: "BIMObjectGroup",
                color: "#092FEB",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : Palier ASC et ESC + Terrasse",
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
                name: "Tableau distribution : RIE S2",
                standard_name: "Distribution board : RIE S2",
                type: "BIMObjectGroup",
                color: "#CF3A31",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : RIE S2",
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
                name: "Tableau distribution : SAM1-01 R+1",
                standard_name: "Distribution board : SAM1-01 G+1",
                type: "BIMObjectGroup",
                color: "#B470FC",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : SAM1-01 R+1",
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
                name: "Tableau distribution : SAM2-01 R+1",
                standard_name: "Distribution board : SAM2-01 G+1",
                type: "BIMObjectGroup",
                color: "#836A3D",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : SAM2-01 R+1",
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
                name: "Tableau distribution : Scramble",
                standard_name: "Distribution board : Scramble",
                type: "BIMObjectGroup",
                color: "#4F3256",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : Scramble",
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
                name: "Tableau distribution : Services généraux (Palier ASC et ESC)",
                standard_name: "Distribution board : General services (Elevator & Staircase  level)",
                type: "BIMObjectGroup",
                color: "#67D6D8",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : Services généraux (Palier ASC et ESC)",
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
                name: "Tableau distribution : SS1",
                standard_name: "Distribution board : SS1",
                type: "BIMObjectGroup",
                color: "#FB7E8A",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : SS1",
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
                name: "Tableau distribution : SS3 ( dont véhicules électriques)",
                standard_name: "Distribution board : SS3 ( included electric vehicle)",
                type: "BIMObjectGroup",
                color: "#9AD2AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : SS3 ( dont véhicules électriques)",
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
                name: "Tableau distribution : SS4 & SS5",
                standard_name: "Distribution board : SS4 & SS5",
                type: "BIMObjectGroup",
                color: "#04EFEF",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : SS4 & SS5",
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
                name: "Tableau distribution : SS3",
                standard_name: "Distribution board : SS3",
                type: "BIMObjectGroup",
                color: "#63CC06",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Tableau distribution : SS3",
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
                name: "TFP1",
                standard_name: "TFP1",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "TFP1",
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
                name: "TFP2",
                standard_name: "TFP2",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "TFP2",
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
                name: "TG GE",
                standard_name: "TG GE",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "TG GE",
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
                name: "TGBT",
                standard_name: "Main low voltage switchboard",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "TGBT",
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
                name: "TGBT N/R (IS 223 - Forme: 2B) ",
                standard_name: "Main low voltage switchboard N/R (IS 223 - Shape: 2B)",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "TGBT N/R (IS 223 - Forme: 2B)",
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
                name: "TGBT RIE ",
                standard_name: "Main low voltage switchboard RIE",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "TGBT RIE",
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
                name: "TGBT SGX B2 ",
                standard_name: "Main low voltage switchboard SGX B2",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "TGBT SGX B2",
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
                name: "TGS",
                standard_name: "TGS",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "TGS",
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
                name: "TGS1 (IS 223 - Forme: 2B)",
                standard_name: "TGS1 (IS 223 - Shape: 2B)",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "TGS1 (IS 223 - Forme: 2B)",
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
                name: "TGS2 (IS 223 - Forme: 2B)",
                standard_name: "TGS2 (IS 223 - Shape: 2B)",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "TGS2 (IS 223 - Forme: 2B)",
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
                name: "Détecteur de presence",
                standard_name: "Presence sensor",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Détecteur de presence",
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
                name: "Détecteur de mouvement",
                standard_name: "Motion detector",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Détecteur de mouvement",
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
                name: "PC 10/16A+T étanche",
                standard_name: "PC 10/16A+T sealed",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "PC 10/16A+T étanche",
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
                name: "PC auditorium",
                standard_name: "PC auditorium",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "PC auditorium",
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
                name: "Portatif",
                standard_name: "Portable",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Portatif",
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
                name: "Prise 10/16A+T",
                standard_name: "Plug 10/16A+T",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Prise 10/16A+T",
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
                name: "Bloc ambiance",
                standard_name: "Ambient block",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Bloc ambiance",
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
                name: "Bloc autonome étanche ambiance",
                standard_name: "Sealed autonomous block",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Bloc autonome étanche",
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
                name: "Bloc autonome standard - encastré",
                standard_name: "Standard autonomous block - embedded",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Bloc autonome standard - encastré",
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
                name: "Boite 1 réseau normal",
                standard_name: "normal 1-network box",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Boite 1 réseau normal",
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
                name: "Boite 1 réseau normal",
                standard_name: "normal 1-network box",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Boite 1 réseau normal",
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
                name: "Borne de recharge",
                standard_name: "Charging station",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Borne de recharge",
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
                name: "FEUX OBSTAFLASH HAUTE INTENSITE 120° (BALISE + ARMOIRE DE PUISSANCE INOX)",
                standard_name: "Obstaflash fire",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "FEUX OBSTAFLASH HAUTE INTENSITE 120° (BALISE + ARMOIRE DE PUISSANCE INOX)",
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
                name: "Hublot escalier",
                standard_name: "Porthole",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Hublot escalier",
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
                name: "Interrupteur simple allumage",
                standard_name: "Simple switch",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Interrupteur simple allumage",
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
                name: "Interrupteurs Etanches",
                standard_name: "Waterproof switch",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Interrupteurs Etanches",
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
                name: "Nourrice 3PCN + Cordon ",
                standard_name: "Multi-outlets with connection ",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Nourrice 3PCN + Cordon",
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
                name: "Détecteurs de luminosité",
                standard_name: "Brightness sensor",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Détecteurs de luminosité",
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
                name: "Spot Led circulation Sanitaire",
                standard_name: "Circular LED spotlight for sanitary facilities",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [ 
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Spot Led circulation Sanitaire",
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
                name: "Spot Led Lavabo",
                standard_name: "Sink LED spotlight",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Spot Led Lavabo",
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
                name: "Spot noyau central ( palier asc )",
                standard_name: "Central core spotlight",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Spot noyau central ( palier asc )",
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
                name: "Spots supplémentaires pour bureaux",
                standard_name: "Extra spotlight for offices",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Spots supplémentaires pour bureaux",
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
                name: "Luminaire Escalier",
                standard_name: "Staircase light",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Luminaire Escalier",
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
                name: "Luminaire Locaux techniques & circ technique",
                standard_name: "Technical room light",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Luminaire Locaux techniques & circ technique",
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
                name: "Luminaire parking",
                standard_name: "Parking light",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Luminaire parking",
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
                name: "Luminaire sur pieds - variante",
                standard_name: "Free standing light",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Luminaire sur pieds - variante",
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
                name: "Luminaire technique pour PCS, LT avec plafond, infirmerie de type 600x600",
                standard_name: "Technical light 600x600",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Luminaire technique pour PCS, LT avec plafond, infirmerie de type 600x600",
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
                name: "Luminaires avec détecteur intégrés",
                standard_name: "Light with embedded detector",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Luminaires avec détecteur intégrés",
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
                name: "Luminaires led bureaux",
                standard_name: "LED light for office",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Luminaires led bureaux",
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
                name: "Luminaires led circulations bureaux",
                standard_name: "Circular LED light for office",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Luminaires led circulations bureaux",
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
               name: "Luminaire : Type B39b- LICHTLAUF",
                standard_name: "Light Type B39b- LICHTLAUF",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type B39b- LICHTLAUF",
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
               name: "Luminaire : Type C32a - SELUX",
                standard_name: "Light Type C32a - SELUX",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type C32a - SELUX",
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
               name: "Luminaire : Type C32b - SELUX",
                standard_name: "Light Type C32b - SELUX",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type C32b - SELUX",
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
               name: "Luminaire : Type C33a - SELUX",
                standard_name: "Light Type C33a - SELUX",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type C33a - SELUX",
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
               name: "Luminaire : Type C34a - SELUX",
                standard_name: "Light Type C34a - SELUX",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type C34a - SELUX",
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
               name: "Luminaire : Type C35a - SELUX",
                standard_name: "Light Type C35a - SELUX",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type C35a - SELUX",
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
               name: "Luminaire : Type C35b - SELUX",
                standard_name: "Light Type C35b - SELUX",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type C35b - SELUX",
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
               name: "Luminaire : Type C40a - BOCCI",
                standard_name: "Light Type C40a - BOCCI",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type C40a - BOCCI",
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
               name: "Luminaire : Type C40B - BOCCI",
                standard_name: "Light Type C40B - BOCCI",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type C40B - BOCCI",
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
               name: "Luminaire : Type D12a - NON DALI - WALDMANN-SERRE- Lampe portative",
                standard_name: "Light Type D12a - NOT DALI - WALDMANN-SERRE- portable light",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type D12a - NON DALI - WALDMANN-SERRE- Lampe portative",
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
               name: "Luminaire : Type D24a - SAMMODE",
                standard_name: "Light Type D24a - SAMMODE",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type D24a - SAMMODE",
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
               name: "Luminaire : Type D25a - SAMMODE",
                standard_name: "Light Type D25a - SAMMODE",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type D25a - SAMMODE",
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
               name: "Luminaire : Type D26a - SAMMODE",
                standard_name: "Light Type D26a - SAMMODE",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type D26a - SAMMODE",
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
               name: "Luminaire : Type E40a - SIMES",
                standard_name: "Light Type E40a - SIMES",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type E40a - SIMES",
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
               name: "Luminaire : Type E41A- BEGA",
                standard_name: "Light Type E41A- BEGA",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type E41A- BEGA",
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
               name: "Luminaire : Type E42a - SIMES",
                standard_name: "Light Type E42a - SIMES",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type E42a - SIMES",
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
               name: "Luminaire : Type E43a - NON DALI - SIMES Auditorium - Encastré de sol pour balisage",
                standard_name: "Light Type E43a - NOT DALI - SIMES Auditorium - Floor recessed lighting",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type E43a - NON DALI - SIMES Auditorium - Encastré de sol pour balisage",
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
               name: "Luminaire : Type E45 - NON DALI - DGA Auditorium - Contre marche",
                standard_name: "Light Type E45 - NON DALI - DGA Auditorium - close step",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type E45 - NON DALI - DGA Auditorium - Contre marche",
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
               name: "Luminaire : Type M18a- LICHTLAUF",
                standard_name: "Light Type M18a- LICHTLAUF",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type M18a- LICHTLAUF",
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
               name: "Luminaire : Type M19a- SAMMODE",
                standard_name: "Light Type M19a- SAMMODE",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type M19a- SAMMODE",
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
               name: "Luminaire : Type M19a- SAMMODE",
                standard_name: "Light Type M19a- SAMMODE",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type M19a- SAMMODE",
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
               name: "Luminaire : Type N144a - DALI - ERCO Toutes zones - murs déco",
                standard_name: "Light Type N144a - DALI - ERCO - All zones - wall",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type N144a - DALI - ERCO Toutes zones - murs déco",
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
               name: "Luminaire : Type N146a- SAMMODE",
                standard_name: "Light Type N146a- SAMMODE",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type N146a- SAMMODE",
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
               name: "Luminaire : Type N151a - DALI - FLOS - SERRE-Plafonnier fixe linéaire 23W",
                standard_name: "Light Type N151a - DALI - FLOS - SERRE-  23 W Linear ceiling light ",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type N151a - DALI - FLOS - SERRE-Plafonnier fixe linéaire 23W",
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
               name: "Luminaire : Type N151B",
                standard_name: "Light Type N151B",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type N151B - DALI - FLOS - SERRE-Plafonnier fixe linéaire 28W",
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
               name: "Luminaire : Type N153a",
                standard_name: "Light Type N153a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type N153a - NON DALI - PROLICHT RIE - Plafonnier orientable pour 02 x lampes AR111",
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
               name: "Luminaire : Type N155a",
                standard_name: "Light Type N155a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type N155a - DALI - IGUZZINI HALL A & C - Plafonnier pour modules LED 29W PASSERELLE VERRIERE",
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
                name: "Luminaire : Type N156a ",
                standard_name: "Light Type N156a ",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type N156a - NON DALI - SAMMODE B1-N00 - GROTTE - tubulaire",
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
               name: "Luminaire : Type N157a",
                standard_name: "Light Type N157a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type N157a - NON DALI  -3F FILIPPI - Auditoirum annexe - Luminaire étanche",
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
               name: "Luminaire : Type N167a",
                standard_name: "Light Type N167a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type N167a - DALI  -IGUZZINI - Auditorium fond",
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
                name: "Luminaire : Type NE01",
                standard_name: "Light Type NE01",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type NE01 - DALI - FLOS Plafonnier linéaire de type Rail magnétique",
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
                name: "Luminaire : Type P31a",
                standard_name: "Light Type P31a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type P31a - DALI - SATTLER HALL BAT B1 - Spot sur bras",
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
                name: "Luminaire : Type P38a",
                standard_name: "Light Type P38a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type P38a DALI - IGUZZINI Auditorium - projecteur sur rail",
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
                name: "Luminaire : Type P40a",
                standard_name: "Light Type P40a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type P40a - DGA - Distributeur FLOS",
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
                name: "Luminaire : Type P40b",
                stbndard_name: "Light Type P40b",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type P40b - DGA - Distributeur FLOS",
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
                name: "Luminaire : Type P41",
                stbndard_name: "Light Type P41a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type P41a - DALI - FLOS SERRE - Projecteur orientable montage sur rail magnétique 24V pour lampe LED 12.5W",
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
                name: "Luminaire : Type Q101",
                stbndard_name: "Light Type Q101",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type Q101 - DALI - IGUZZINI auditorium - béton",
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
                name: "Luminaire : Type Q79",
                stbndard_name: "Light Type Q79",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type Q79 - NON DALI - IGUZZINI Food Court / RIE - Comptoirs- Projecteur orientable",
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
                name: "Luminaire : Type Q80a",
                stbndard_name: "Light Type Q80a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type Q80a - NON DALI - ERCO VERRIERE - Projecteur orientable extérieur pour 01 x lampe LED 36W",
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
                name: "Luminaire : Type Q80b",
                stbndard_name: "Light Type Q80b",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type Q80B - NON DALI - ERCO VERRIERE - Projecteur orientable extérieur pour 01 x lampe LED 36W",
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
                name: "Luminaire : Type R344b",
                stbndard_name: "Light Type R344b",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R344b - DALI - SATTLER Hall d’entrée B1-NO - encastré SATTLER",
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
                name: "Luminaire : Type R345a",
                stbndard_name: "Light Type R345a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R345a - DALI - FLOS SERRE - Encastré circulaire équipé d’un projecteur orientable",
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
                name: "Luminaire : Type R346a",
                stbndard_name: "Light Type R346a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R346a - DALI - XAL HALL D'ENTRE B1 ET FOOD COURT - MENO TRIANGLE",
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
                name: "Luminaire : Type R389a",
                stbndard_name: "Light Type R389a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R389a - NON DALI - LITED Palier ascenseur - encastré carré",
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
                name: "Luminaire : Type R390a",
                stbndard_name: "Light Type R390a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R390a - NON DALI - LITED Palier ascenseur plafond haut - encastré rectangulaire",
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
                name: "Luminaire : Type R391a",
                stbndard_name: "Light Type R391a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R391a - LITED Palier ascenseur - SPOT CARRE",
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
                name: "Luminaire : Type R392a",
                stbndard_name: "Light Type R392a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R392a - DALI - PROLICHT N00, N01 - Zones préparation, cuisine - spot LED",
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
                name: "Luminaire : Type R395a",
                stbndard_name: "Light Type R395a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R395a EQUIVALENT Type R392a - DALI - PROLICHT N00, N01 - Zones préparation, cuisine - spot LED",
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
                name: "Luminaire : Type R397a",
                stbndard_name: "Light Type R397a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R397a - DGA - Distributeur FLOS",
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
                name: "Luminaire : Type R398a",
                stbndard_name: "Light Type R398a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R398a - DALI - PROLICHT RIE Circulations - spot LED",
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
                name: "Luminaire : Type R400a",
                stbndard_name: "Light Type R400a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R400a - DALI - PROLICHT Foyer - encastré LED 24W",
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
                name: "Luminaire : Type R401a",
                stbndard_name: "Light Type R401a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R401a - DALI - PROLICHT Food Court - Plafond maille - spot LED",
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
                name: "Luminaire : Type R401b",
                stbndard_name: "Light Type R401b",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R401b - DALI - PROLICHT Food Court - Plafond maille - spot LED",
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
                name: "Luminaire : Type R401c",
                stbndard_name: "Light Type R401c",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R401c - DALI - PROLICHT Foyer - encastré orientable LED 24W",
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
                name: "Luminaire : Type R402a",
                stbndard_name: "Light Type R402a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R402a - DALI - IGUZZINI CLUB N02 - Encastré rectangulaire 6W",
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
                name: "Luminaire : Type R403a",
                stbndard_name: "Light Type R403a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R403a - DALI - IGUZZINI CLUB N02 et N22 / LOUNGE- Encastré rectangulaire 12W",
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
                name: "Luminaire : Type R408a",
                stbndard_name: "Light Type R408a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R408a - DGA - Distributeur FLOS",
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
                name: "Luminaire : Type R410a",
                stbndard_name: "Light Type R410a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R410a - NON DALI - DGA HALL B1 - Encastré fixe carré pour 01x lampe LED 2W",
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
                name: "Luminaire : Type R411a",
                stbndard_name: "Light Type R411a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R411a - NON DALI - DELTA LIGHT Foyer - encastré ampoule",
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
                name: "Luminaire : Type R412a",
                stbndard_name: "Light Type R412a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R412a  - DALI - PROLICHT Foyer - encastré fixe 14W",
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
                name: "Luminaire : Type R413a",
                stbndard_name: "Light Type R413a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R413a - DALI - PROLICHT RIE - Zone Self - spot LED",
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
                name: "Luminaire : Type R414a",
                stbndard_name: "Light Type R414a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R414a - DALI - SATTLER HALL A&C - SATTLER unitaire",
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
                name: "Luminaire : Type R417a",
                stbndard_name: "Light Type R417a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R417a - NON DALI - DGA HALL B1 - GROTTE - SPOT dans grotte",
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
                name: "Luminaire : Type R431",
                stbndard_name: "Light Type R431",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type R431 - NON DALI - IGUZZINI CLUB N02 RIDEAUX",
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
                name: "Luminaire : Type RE01",
                stbndard_name: "Light Type RE01",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type RE01 - DALI - XAL Composition : 03 x Projecteurs LED Just 45 10W 3 000K 23° 730lm pilotable par signal DALi 04 x Linéaires wallwasher Flush LED 11W 3 000K 605lm pilotable par signal DALi",
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
                name: "Luminaire : Type RE02",
                stbndard_name: "Light Type RE02",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type RE02 - DALI - XAL Composition : 04 x Projecteurs LED Just 45 10W 3 000K 23° 730lm pilotable par signal DALi 05 x Linéaires wallwasher Flush LED 11W 3 000K 605lm pilotable par signal DALi",
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
                name: "Luminaire : Type RE03",
                stbndard_name: "Light Type RE03",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type RE03 - DALI - XAL RUE VINCI BAT B2 Composition : 04 x Suspensions LED tula micro 9W 3 000K 325lm pilotable par signal DALi 05 x Linéaires wallwasher Flush LED 11W 3 000K 605lm pilotable par signal DALi",
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
                name: "Luminaire : Type RE04",
                stbndard_name: "Light Type RE04",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type RE04 - DALI - XAL RUE VINCI BAT B2 Composition : 05 x Projecteurs LED Just 45 10W 3 000K 23° 730lm pilotable par signal DALi 07 x Linéaires Opal LED 10W 3 000K 880lm pilotable par signal DALi",
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
                name: "Luminaire : Type RE06",
                stbndard_name: "Light Type RE06",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type RE06 - DALI - FLOS SERRE - Encastré linéaire de type Rail magnétique pour intégration de suspensions et profils linéaires LED Composition : 04 x Suspension linéaire 8W 3 000K 365lm pilotable par signal DALi 03 x Linéaires LED 10W 10° 3 000K 674lm pilotable par signal DALi",
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
                name: "Luminaire : Type Rlx",
                stbndard_name: "Light Type Rlx",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type RLx - RAIL",
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
                name: "Luminaire : Type S123a",
                stbndard_name: "Light Type S123a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S123a - DALI - SATTLER HALL D'ENTREE BAT B1 - SUSPENSION 3 SPOTS",
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
                name: "Luminaire : Type S124a",
                stbndard_name: "Light Type S124a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S124a - DALI - SATTLER HALL A - SUSPENSION 5 spots",
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
                name: "Luminaire : Type S125a",
                stbndard_name: "Light Type S125a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S125a - DALI - SATTLER HALL A - SUSPENSION 5 spots",
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
                name: "Luminaire : Type S126a",
                stbndard_name: "Light Type S126a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S126a - SATTLER HALL D'ENTREE BAT B1 - SUSPENTION 6 SPOTS",
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
                name: "Luminaire : Type S127a",
                stbndard_name: "Light Type S127a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S127a - SATTLER HALL D'ENTREE BAT B1 - SUSPENTION 6 SPOTS",
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
                name: "Luminaire : Type S128a",
                stbndard_name: "Light Type S128a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S128a - DALI - XAL HALL D'ENTREE ET FOOD COURT - TRIANGLE 600",
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
                name: "Luminaire : Type S129a",
                stbndard_name: "Light Type S129a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S129a - DALI - SATTLER FOOD COURT B2 - SUSPENSION VERTICALE 6 SPOTS",
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
                name: "Luminaire : Type S130a",
                stbndard_name: "Light Type S130a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S130a - DALI - SATTLER FOOD COURT B2 - SUSPENSION VERTICALE 4 SPOTS",
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
                name: "Luminaire : Type S134a",
                stbndard_name: "Light Type S134a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S134a - NON DALI - OTYLIGHT RIE - Suspension cylindrique pour lampe E27 - 20W max",
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
                name: "Luminaire : Type S160a",
                stbndard_name: "Light Type S160a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S160a - SELUX (y compris cablerie de suspension)",
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
                name: "Luminaire : Type S161a",
                stbndard_name: "Light Type S161a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S161a - NON DALI - VIABUZZINO Foyer comptoir - suspension longue ampoule",
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
                name: "Luminaire : Type S162a",
                stbndard_name: "Light Type S162a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S162a - DALI - VIABUZZINO CLUB N02 / LOUNGE- Luminaire suspendu annulaire pour lampe LED 87 W",
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
                name: "Luminaire : Type S163a",
                stbndard_name: "Light Type S163a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S163a - DALI - VIABUZZINO CLUB N02 / LOUNGE - Luminaire suspendu annulaire pour lampe LED 168 W",
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
                name: "Luminaire : Type S164a",
                stbndard_name: "Light Type S164a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S164a - NON DALI - FLOS CLUB N02 - APPLIQUE MURALE",
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
                name: "Luminaire : Type S165a",
                stbndard_name: "Light Type S165a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S165a - NON DALI - FLOS CLUB N02 et N22 - APPLIQUE MURALE",
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
                name: "Luminaire : Type S172a",
                stbndard_name: "Light Type S172a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S172a - NON DALI - OTYLIGHT",
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
                name: "Luminaire : Type S173",
                stbndard_name: "Light Type S173",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S173 - NON DALI - OTYLIGHT",
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
                name: "Luminaire : Type S174a",
                stbndard_name: "Light Type S174a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S174a - DALI - PROLICHT",
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
                name: "Luminaire : Type S175a",
                stbndard_name: "Light Type S175a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type S175a - DALI - PROLICHT",
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
                name: "Luminaire : Type SE01",
                stbndard_name: "Light Type SE01",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type SE01 - FLOS",
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
                name: "Luminaire : Type W41a",
                stbndard_name: "Light Type W41a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type W41a - DALI - IGUZZINI",
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
                name: "Luminaire : Type XL128b",
                stbndard_name: "Light Type XL128b",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XL128b - NON DALI - ZUMTOBEL Food Court N00 - Mobilier bois",
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
                name: "Luminaire : Type XL129a",
                stbndard_name: "Light Type XL129a",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XL129a - SIMES VERRIERE - Appareil d’éclairage mural et de plafond pour module LED 4.7W",
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
                name: "Luminaire : Type XL133",
                stbndard_name: "Light Type XL133",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XL133- DALI - IGUZZINI Auditorium - rideau béton",
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
                name: "Luminaire : Type XLE01",
                stbndard_name: "Light Type XLE01",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE01 - NON DALI - BILTON GARDE CORPS MEZZANINE - 43ml",
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
                name: "Luminaire : Type XLE02",
                stbndard_name: "Light Type XLE02",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE02 - NON DALI - BILTON GARDE CORPS MEZZANINE - 20ml",
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
                name: "Luminaire : Type XLE03",
                stbndard_name: "Light Type XLE03",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE03 - PROLUM",
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
                name: "Luminaire : Type XLE04",
                stbndard_name: "Light Type XLE04",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE04 - PROLUM",
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
                name: "Luminaire : Type XLE04",
                stbndard_name: "Light Type XLE04",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE04 - PROLUM",
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
                name: "Luminaire : Type XLE05",
                stbndard_name: "Light Type XLE05",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE05 - PROLUM",
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
                name: "Luminaire : Type XLE06",
                stbndard_name: "Light Type XLE06",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE06 - PROLUM",
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
                name: "Luminaire : Type XLE07",
                stbndard_name: "Light Type XLE07",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE07 - PROLUM",
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
                name: "Luminaire : Type XLE08",
                stbndard_name: "Light Type XLE08",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE08 - PROLUM",
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
                name: "Luminaire : Type XLE09",
                stbndard_name: "Light Type XLE09",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE09 - NON DALI - PROLUM",
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
                name: "Luminaire : Type XLE10",
                stbndard_name: "Light Type XLE10",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE10 - NON DALI - PROLUM",
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
                name: "Luminaire : Type XLE101",
                stbndard_name: "Light Type XLE101",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE101 - PROLUM BILTON",
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
                name: "Luminaire : Type XLE102",
                stbndard_name: "Light Type XLE102",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE102 - LED LINEAR",
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
                name: "Luminaire : Type XLE103",
                stbndard_name: "Light Type XLE103",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE103 - LED LINEAR",
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
                name: "Luminaire : Type XLE104",
                stbndard_name: "Light Type XLE104",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE104 - LED LINEAR",
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
                name: "Luminaire : Type XLE105",
                stbndard_name: "Light Type XLE105",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE105 - LED LINEAR",
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
                name: "Luminaire : Type XLE106",
                stbndard_name: "Light Type XLE106",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE106 - LED LINEAR",
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
                name: "Luminaire : Type XLE10A",
                stbndard_name: "Light Type XLE10A",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE10A - NON DALI - PROLUM Palier ascenseur - Ruban LED dans corniche",
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
                name: "Luminaire : Type XLE11A",
                stbndard_name: "Light Type XLE11A",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE11A - PROLUM",
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
                name: "Luminaire : Type XLE11B",
                stbndard_name: "Light Type XLE11B",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE11B - PROLUM",
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
                name: "Luminaire : Type XLE11C",
                stbndard_name: "Light Type XLE11C",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE11C - PROLUM",
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
                name: "Luminaire : Type XLE11D",
                stbndard_name: "Light Type XLE11D",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE11D - PROLUM",
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
                name: "Luminaire : Type XLE11F",
                stbndard_name: "Light Type XLE11F",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE11F - PROLUM",
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
                name: "Luminaire : Type XLE11G",
                stbndard_name: "Light Type XLE11G",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE11G - PROLUM",
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
                name: "Luminaire : Type XLE11H",
                stbndard_name: "Light Type XLE11H",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE11H - PROLUM",
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
                name: "Luminaire : Type XLE11IJ",
                stbndard_name: "Light Type XLE11IJ",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE11IJ - PROLUM",
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
                name: "Luminaire : Type XLE12A",
                stbndard_name: "Light Type XLE12A",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE12A - PROLUM",
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
                name: "Luminaire : Type XLE12B",
                stbndard_name: "Light Type XLE12B",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE12B - PROLUM",
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
                name: "Luminaire : Type XLE13A",
                stbndard_name: "Light Type XLE13A",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE13A - PROLUM",
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
                name: "Luminaire : Type XLE14A",
                stbndard_name: "Light Type XLE14A",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE14A - PROLUM",
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
                name: "Luminaire : Type XLE15A",
                stbndard_name: "Light Type XLE15A",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE15A - PROLUM",
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
                name: "Luminaire : Type XLE15B",
                stbndard_name: "Light Type XLE15B",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE15B - PROLUM",
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
                name: "Luminaire : Type XLE15C",
                stbndard_name: "Light Type XLE15C",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE15C - PROLUM",
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
                name: "Luminaire : Type XLE15D",
                stbndard_name: "Light Type XLE15D",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE15D - PROLUM",
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
                name: "Luminaire : Type XLE15E",
                stbndard_name: "Light Type XLE15E",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE15E - PROLUM",
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
                name: "Luminaire : Type XLE16A",
                stbndard_name: "Light Type XLE16A",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE16A - PROLUM",
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
                name: "Luminaire : Type XLE17A",
                stbndard_name: "Light Type XLE17A",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE17A - PROLUM",
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
                name: "Luminaire : Type XLE17B",
                stbndard_name: "Light Type XLE17B",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE17B - PROLUM",
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
                name: "Luminaire : Type XLE17C",
                stbndard_name: "Light Type XLE17C",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE17C - PROLUM",
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
                name: "Luminaire : Type XLE20",
                stbndard_name: "Light Type XLE20",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE20 - PROLUM",
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
                name: "Luminaire : Type XLE21",
                stbndard_name: "Light Type XLE21",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE21 - PROLUM",
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
                name: "Luminaire : Type XLE23",
                stbndard_name: "Light Type XLE23",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE23 - PROLUM",
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
                name: "Luminaire : Type XLE24",
                stbndard_name: "Light Type XLE24",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE24 - PROLUM",
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
                name: "Luminaire : Type XLE25",
                stbndard_name: "Light Type XLE25",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE25 - PROLUM",
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
                name: "Luminaire : Type XLE26",
                stbndard_name: "Light Type XLE26",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE26 - PROLUM",
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
                name: "Luminaire : Type XLE40",
                stbndard_name: "Light Type XLE40",
                type: "BIMObjectGroup",
                color: "#0ED6AE",
                categories: [
                    {
                        label: "GMAO",
                        attributes: [
                            {
                                label: "Designation",
                                value: "Type XLE40 - TYPE DALI - NEWMAT S.A.S.RUE VINCI",
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