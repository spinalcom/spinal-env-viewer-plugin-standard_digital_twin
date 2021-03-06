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

export const STANDARD_EQUIPMENT_GRAPH = [
    {
        name: "Courant fort",
        type: "groupingCategory",
        standard_name: "CFO",
        icon: "accessibility",
        color: "#BD1E13",
        groups: [
            {
                name: "Luminaires",
                standard_name: "Lamps",
                type: "BIMObjectGroup",
                color: "#A82727",
            },
            {
                name: "Convertisseur de Puissance",
                standard_name: "Power Converters",
                type: "BIMObjectGroup",
                color: "#3ECBAC",
            },
            {
                name: "Batteries",
                standard_name: "Batteries",
                type: "BIMObjectGroup",
                color: "#228B3B",
            },
            {
                name: "Panneaux photovoltaïques",
                standard_name: "Solar Panels",
                type: "BIMObjectGroup",
                color: "#228B3B",
            },
            {
                name: "Transformateurs",
                standard_name: "Transformators",
                type: "BIMObjectGroup",
                color: "#372FE8",
            },
            {
                name: "Chargeurs électriques",
                standard_name: "Power Chargers",
                type: "BIMObjectGroup",
                color: "#A6BC55",
            },
            {
                name: "Armoire électrique",
                standard_name: "Control Cabinets",
                type: "BIMObjectGroup",
                color: "#1823A8",
            }
        ]
    },
    {
        name: "Courant faible",
        type: "groupingCategory",
        standard_name: "CFA",
        icon: "accessibility",
        color: "#BD8913",
        groups: [
            {
                name: "Automates",
                standard_name: "Controllers",
                type: "BIMObjectGroup",
                color: "#3C8FD3",
            },
            {
                name: "Capteurs",
                standard_name: "Sensors",
                type: "BIMObjectGroup",
                color: "#E81C1C",
            },
            {
                name: "Contrôleurs",
                standard_name: "Controllers",
                type: "BIMObjectGroup",
                color: "#DF7979",
            },
            {
                name: "Contacts de fenêtres",
                standard_name: "Windows Contacts",
                type: "BIMObjectGroup",
                color: "#372E99",
            },
            {
                name: "Stores électriques",
                standard_name: "Electrical Blinds",
                type: "BIMObjectGroup",
                color: "#E31C1C",
            },
            {
                name: "Lecteurs d'accès",
                standard_name: "Access Readers",
                type: "BIMObjectGroup",
                color: "#DBC328",
            }
        ]
    },
    {
        name: "Chauffage / Ventilation / Climatisation",
        standard_name: "CVC",
        type: "groupingCategory",
        icon: "accessibility",
        color: "#13B0BD",
        groups: [
            {
                name: "Ventilo-Convecteur",
                standard_name: "Fan Coil",
                type: "BIMObjectGroup",
                color: "#E32B2B",
            },
            {
                name: "Ballons d'eau",
                standard_name: "Water Tanks",
                type: "BIMObjectGroup",
                color: "#C31D71",
            },
            {
                name: "Centrales de traitement d'air",
                standard_name: "Central air units",
                type: "BIMObjectGroup",
                color: "#C48DDF",
            },
            {
                name: "Air conditionné",
                standard_name: "Air conditioners",
                type: "BIMObjectGroup",
                color: "#F47272",
            },
            {
                name: "Vannes 6 Voies",
                standard_name: "V6V",
                type: "BIMObjectGroup",
                color: "#6C7CF8",
            },
            {
                name: "Bouches d'aération",
                standard_name: "Air Vents",
                type: "BIMObjectGroup",
                color: "#7212B4",
            },
            {
                name: "Chaudières",
                standard_name: "Heaters",
                type: "BIMObjectGroup",
                color: "#E32B2B",
            }
        ]
    },
    {
        name: "Mobilier",
        type: "groupingCategory",
        standard_name: "Furnitures",
        icon: "accessibility",
        color: "#9B13BD",
        groups: [
            {
                name: "Bureaux",
                standard_name: "Offices",
                type: "BIMObjectGroup",
                color: "#A82727",
            },
            {
                name: "Chaises",
                standard_name: "Chairs",
                type: "BIMObjectGroup",
                color: "#BD7713",
            },
            {
                name: "Tables",
                standard_name: "Desks",
                type: "BIMObjectGroup",
                color: "#BD138C",
            },
            {
                name: "Rangement",
                standard_name: "Storage",
                type: "BIMObjectGroup",
                color: "#13BDB2",
            },
            {
                name: "Plantes",
                standard_name: "Plants",
                type: "BIMObjectGroup",
                color: "#61BD13",
            },
            {
                name: "Poubelles",
                standard_name: "Trashs",
                type: "BIMObjectGroup",
                color: "#0DDF47",
            },
        ]
    }
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
                name: "Standard Profile",
                type: "SpinalControlPointGroup",
                color: "#BD1319",
                standard_name: "Standard Profile",
                elements: {
                    name: "Standard Profile"
                },
                groups: [
                    {
                        name: "Building",
                        type: "SpinalControlPoint",
                        standard_name: "Building",
                        elements: []
                    },
                    {
                        name: "Floor",
                        type: "SpinalControlPoint",
                        standard_name: "Floor",
                        elements: []
                    },
                    {
                        name: "Room",
                        type: "SpinalControlPoint",
                        standard_name: "Room",
                        elements: [
                            {
                                name: "Consigne de température",
                                alias: "cons_temp",
                                path: "",
                                unit: "°C",
                                dataType: "Float",
                                type: "Consigne",
                                command: 0,
                                saveTimeSeries: 0,
                                config: {
                                    min: { value: 10, color: "#00FCFF" },
                                    average: { value: 25, color: "#30FF00" },
                                    max: { value: 40, color: "#9A0808" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Thermomètre",
                                alias: "Thermomètre",
                                path: "",
                                unit: "°C",
                                dataType: "Float",
                                type: "Temperature",
                                command: 0,
                                saveTimeSeries: 0,
                                config: {
                                    min: { value: 10, color: "#00FCFF" },
                                    average: { value: 25, color: "#00FF22" },
                                    max: { value: 40, color: "#B60721" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Nombre d occupants",
                                alias: "nb occupants",
                                path: "",
                                unit: "°C",
                                dataType: "Float",
                                type: "Occupation",
                                command: 0,
                                saveTimeSeries: 1,
                                config: {
                                    min: { value: 0, color: "#08FF00" },
                                    average: { value: 3, color: "#FFA200" },
                                    max: { value: 6, color: "#800B00" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "CO2",
                                alias: "co2",
                                path: "",
                                unit: "ppm",
                                dataType: "Integer",
                                type: "co2",
                                command: 0,
                                saveTimeSeries: 0,
                                config: {
                                    min: { value: 400, color: "#0BD52E" },
                                    average: { value: 750, color: "#FFFF00" },
                                    max: { value: 1100, color: "#E44907" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Niveau sonore",
                                alias: "noise",
                                path: "",
                                unit: "dB",
                                dataType: "Integer",
                                type: "Other",
                                command: 0,
                                saveTimeSeries: 0,
                                config: {
                                    min: { value: 0, color: "#07E126" },
                                    average: { value: 55, color: "#FFFF00" },
                                    max: { value: 110, color: "#F10505" },
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Présence",
                                alias: "pres",
                                path: "",
                                unit: "",
                                dataType: "Enum",
                                type: "Occupation",
                                command: 0,
                                saveTimeSeries: 0,
                                config: {
                                    enumeration: [
                                        {
                                            name: "Libre",
                                            color: "#09E312",
                                            id: Date.now() + ++i
                                        },
                                        {
                                            name: "Occupée",
                                            color: "#E0A105",
                                            id: Date.now() + ++i
                                        }
                                    ],
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Etat de réservation",
                                alias: "res",
                                path: "",
                                unit: "",
                                dataType: "Enum",
                                type: "Occupation",
                                command: 0,
                                saveTimeSeries: 0,
                                config: {
                                    enumeration: [
                                        {
                                            name: "Disponible",
                                            color: "#0CE810",
                                            id: Date.now() + ++i
                                        },
                                        {
                                            name: "Indisponible",
                                            color: "#EA0A0A",
                                            id: Date.now() + ++i
                                        }
                                    ],
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            },
                            {
                                name: "Consigne de luminaire",
                                alias: "cons_lum",
                                path: "",
                                unit: "",
                                dataType: "Enum",
                                type: "Consigne",
                                command: 0,
                                saveTimeSeries: 0,
                                config: {
                                    enumeration: [
                                        {
                                            name: "Allumée",
                                            color: "#DDD72B",
                                            id: Date.now() + ++i
                                        },
                                        {
                                            name: "Eteinte",
                                            color: "#120757",
                                            id: Date.now() + ++i
                                        }
                                    ],
                                    calculation_rule: "Reference"
                                },
                                id: Date.now() + ++i
                            }
                        ]
                    },
                    {
                        name: "Equipment",
                        type: "SpinalControlPoint",
                        standard_name: "Equipment",
                        elements: []
                    }
                ]
            }
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