let rawCaps = [
	{
		"Name": "Pre-Brock",
		"ID": 0,
		"Normal": 15,
		"Hardcore": 16,
		"Locations": [
			"Pallet Town",
			"Route 1",
			"Viridian City",
			"Route 22",
			"Route 21 A",
			"Route 2",
			"Viridian Forest",
			"Viridian Forest 2",
			"Digletts Cave North Entrance",
			"Pewter City"
		],
		"Methods": [
			"Day",
			"Night",
			"Old Rod",
			"Gift",
			"Trade",
			"Special"
		],
		"Locked": {
			"Route 22": {
				"Special": 15
			},
			"Route 2": {
				"Trade": 3
			},
			"Viridian Forest": {
				"Special": 9,
				"Raid 3 Star": 9
			}
		},
		"Items": {
			"All": [],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Pre-Archer 1",
		"ID": 1,
		"Normal": 22,
		"Hardcore": 23,
		"Locations": [
			"Route 3",
			"Route 4",
			"Mt Moon",
			"Mt Moon 1 F",
			"Mt Moon B 1 F",
			"Mt Moon B 2 F"
		],
		"Methods": [
			"Raid 1 Star"
		],
		"Locked": {
			"Mt Moon": {
				"Special": 9
			}
		},
		"Items": {
			"All": [
				"ITEM_THUNDER_STONE",
				"ITEM_WATER_STONE",
				"ITEM_MOON_STONE"
			],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Pre-Misty",
		"ID": 2,
		"Normal": 27,
		"Hardcore": 28,
		"Locations": [
			"Cerulean City",
			"Route 24",
			"Route 25",
			"Route 5",
			"Route 6",
			"Vermilion City",
			"Route 11",
			"Digletts Cave",
			"Digletts Cave B 1 F",
			"S S Anne"
		],
		"Methods": [
			"Raid 2 Star",
			"Good Rod"
		],
		"Locked": {
			"Cerulean City": {
				"Gift": 8
			}
		},
		"Items": {
			"All": [
				"ITEM_SUN_STONE",
				"ITEM_LEAF_STONE",
				"ITEM_FIRE_STONE",
				"ITEM_SHINY_STONE"
			],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Pre-Lt Surge",
		"ID": 3,
		"Normal": 34,
		"Hardcore": 36,
		"Locations": [
			"Route 9",
			"Route 10",
			"Rock Tunnel",
			"Rock Tunnel 1 F",
			"Rock Tunnel B 1 F",
			"Lavender Town",
			"Route 12",
			"Route 8",
			"Route 7",
			"Celadon City",
			"Route 16",
			"Saffron City"
		],
		"Methods": [
			"Red Shard",
			"Green Shard",
			"Blue Shard",
			"Yellow Shard"
		],
		"Locked": {
			"Rock Tunnel": {
				"Day": 17,
				"Night": 17,
				"Special": 9
			},
			"Route 12": {
				"Day": 9,
				"Night": 9,
				"Special": 6
			},
			"Route 16": {
				"Special": 6
			}
		},
		"Items": {
			"All": [
				"ITEM_FIRE_STONE",
				"ITEM_THUNDER_STONE",
				"ITEM_LEAF_STONE",
				"ITEM_WATER_STONE",
				"ITEM_SUN_STONE",
				"ITEM_MOON_STONE",
				"ITEM_PRISM_SCALE",
				"ITEM_ICE_STONE",
				"ITEM_LINK_CABLE",
				"ITEM_DUSK_STONE",
				"ITEM_DAWN_STONE",
				"ITEM_SHINY_STONE",
				"ITEM_KINGS_ROCK",
				"ITEM_METAL_COAT",
				"ITEM_UP_GRADE"
			],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Pre-Erika",
		"ID": 4,
		"Normal": 44,
		"Hardcore": 44,
		"Locations": [],
		"Methods": [],
		"Locked": {},
		"Items": {
			"All": [],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Pre-Giovanni 1",
		"ID": 5,
		"Normal": 47,
		"Hardcore": 47,
		"Locations": [],
		"Methods": [
			"Raid 3 Star",
			"Game Corner"
		],
		"Locked": {},
		"Items": {
			"All": [],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Pre-Archer & Ariana 1",
		"ID": 6,
		"Normal": 56,
		"Hardcore": 56,
		"Locations": [
			"Silph Co",
			"Pokemon Tower",
			"Pokemon Tower 3 F",
			"Pokemon Tower 4 F",
			"Pokemon Tower 5 F",
			"Pokemon Tower 6 F",
			"Pokemon Tower 7 F"
		],
		"Methods": [],
		"Locked": {},
		"Items": {
			"All": [],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Pre-Giovanni 2",
		"ID": 7,
		"Normal": 57,
		"Hardcore": 57,
		"Locations": [],
		"Methods": [],
		"Locked": {},
		"Items": {
			"All": [],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Pre-Sabrina",
		"ID": 8,
		"Normal": 59,
		"Hardcore": 59,
		"Locations": [],
		"Methods": [],
		"Locked": {},
		"Items": {
			"All": [
				"ITEM_SABLENITE",
				"ITEM_GENGARITE",
				"ITEM_ALAKAZITE",
				"ITEM_VENUSAURITE",
				"ITEM_BLASTOISINITE",
				"ITEM_SWAMPERTITE",
				"ITEM_GALLADITE",
				"ITEM_ALCREMITE",
				"ITEM_KANGASKHANITE",
				"ITEM_AUDINITE",
				"ITEM_GARBODORITE",
				"ITEM_AERODACTYLITE",
				"ITEM_GYARADOSITE",
				"ITEM_MANECTITE",
				"ITEM_CENTISKITE",
				"ITEM_APPLITE"
			],
			"Normal": ["ITEM_CHARIZARDITE_X"],
			"Hardcore": ["ITEM_CHARIZARDITE_Y"]
		}
	},
	{
		"Name": "Pre-Koga",
		"ID": 9,
		"Normal": 68,
		"Hardcore": 68,
		"Locations": [
			"Route 13",
			"Route 14",
			"Route 15",
			"Route 16",
			"Route 17",
			"Route 18",
			"Route 19",
			"Safari Zone Center",
			"Safari Zone East",
			"Safari Zone North",
			"Safari Zone West"
		],
		"Methods": [
			"Super Rod"
		],
		"Locked": {},
		"Items": {
			"All": [
				"ITEM_SHARPEDONITE",
				"ITEM_ABSOLITE",
				"ITEM_ALTARIANITE",
				"ITEM_COALOSSITE",
				"ITEM_BUTTERFRITE",
				"ITEM_ORBEETLITE",
				"ITEM_HERACRONITE",
				"ITEM_LOPUNNITE",
				"ITEM_PIDGEOTITE",
				"ITEM_BEEDRILLITE",
				"ITEM_SANDACONDITE"
			],
			"Normal": ["ITEM_GARDEVOIRITE"],
			"Hardcore": ["ITEM_CAMERUPTITE"]
		}
	},
	{
		"Name": "Pre-May",
		"ID": 10,
		"Normal": 73,
		"Hardcore": 73,
		"Locations": [
			"Route 20",
			"Route 21 B",
			"Seafoam",
			"Seafoam Islands 1 F",
			"Seafoam Islands B 1 F",
			"Seafoam Islands B 2 F",
			"Seafoam Islands B 3 F",
			"Cinnabar Island",
			"Power Plant"
		],
		"Methods": [
			"Raid 4 Star",
			"Surfing"
		],
		"Locked": {},
		"Items": {
			"All": [
				"ITEM_TOXTRICITITE",
				"ITEM_LUCARIONITE",
				"ITEM_DREDNAWITE",
				"ITEM_TYRANITARITE",
				"ITEM_PINSIRITE",
				"ITEM_SLOWBRONITE",
				"ITEM_SCIZORITE",
				"ITEM_COPPERAJITE",
				"ITEM_GLALITITE",
				"ITEM_KINGLERITE",
				"ITEM_ABOMASITE",
				"ITEM_LAPRASITE",
				"ITEM_AMPHAROSITE",
				"ITEM_MACHAMPITE",
				"ITEM_MEDICHAMITE",
				"ITEM_AGGRONITE",
				"ITEM_STEELIXITE"
			],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Pre-Blaine",
		"ID": 11,
		"Normal": 76,
		"Hardcore": 76,
		"Locations": [
			"Pokemon Mansion",
			"Pokemon Mansion 1 F",
			"Pokemon Mansion 2 F",
			"Pokemon Mansion 3 F",
			"Pokemon Mansion B 1 F"
		],
		"Methods": [],
		"Locked": {},
		"Items": {
			"All": [
				"ITEM_BLAZIKENITE",
				"ITEM_BANETTITE"
			],
			"Normal": ["ITEM_CAMERUPTITE"],
			"Hardcore": ["ITEM_GARDEVOIRITE"]
		}
	},
	{
		"Name": "Pre-Archer & Ariana 2",
		"ID": 12,
		"Normal": 79,
		"Hardcore": 79,
		"Locations": [
			"Route 23",
			"Cerulean Cave",
			"Cerulean Cave 1 F",
			"Cerulean Cave 2 F",
			"Cerulean Cave B 1 F"
		],
		"Methods": [
			"Raid 5 Star"
		],
		"Locked": {
			"Cerulean Cave": {
				"Gift": 14
			}
		},
		"Items": {
			"All": [
				"ITEM_SNORLAXITE",
				"ITEM_DIANCITE",
				"ITEM_GARCHOMPITE"
			],
			"Normal": ["ITEM_CHARIZARDITE_Y"],
			"Hardcore": ["ITEM_CHARIZARDITE_X"]
		}
	},
	{
		"Name": "Pre-Giovanni 3",
		"ID": 13,
		"Normal": 80,
		"Hardcore": 80,
		"Locations": [],
		"Methods": [],
		"Locked": {},
		"Items": {
			"All": [
				"ITEM_MAWILITE",
				"ITEM_HOUNDOOMINITE"
			],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Pre-Clair",
		"ID": 14,
		"Normal": 81,
		"Hardcore": 81,
		"Locations": [],
		"Methods": [],
		"Locked": {},
		"Items": {
			"All": [
			"ITEM_MEWTWONITE_Y",
			"ITEM_SALAMENCITE"
			],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Pre-Brendan",
		"ID": 15,
		"Normal": 82,
		"Hardcore": 82,
		"Locations": [],
		"Methods": [],
		"Locked": {},
		"Items": {
			"All": [
				"ITEM_DURALUDONITE",
				"ITEM_LATIOSITE",
				"ITEM_LATIASITE"
			],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Pre-Elite 4",
		"ID": 16,
		"Normal": 85,
		"Hardcore": 85,
		"Locations": [
			"Victory Road",
			"Victory Road 1 F",
			"Victory Road 2 F",
			"Victory Road 3 F"
		],
		"Methods": [],
		"Locked": {},
		"Items": {
			"All": [
				"ITEM_SCEPTILITE",
				"ITEM_METAGROSSITE"
			],
			"Normal": [],
			"Hardcore": []
		}
	},
	{
		"Name": "Post Game",
		"ID": 17,
		"Normal": 100,
		"Hardcore": 100,
		"Locations": [
			"One Island",
			"Kindle Road",
			"Mt Ember",
			"Mt Ember Exterior",
			"Mt Ember 1 F",
			"Treasure Beach",
			"Cape Brink",
			"Bond Bridge",
			"Berry Forest",
			"Pokemon Tower 1 F",
			"Pokemon Tower 2 F",
			"Three Island Port"
		],
		"Methods": [
			"Raid 6 Star",
			"Secret"
		],
		"Locked": {},
		"Items": {
			"All": [
				"ITEM_MEWTWONITE_X",
				"ITEM_BLUE_ORB"
			],
			"Normal": [],
			"Hardcore": []
		}
	}
]