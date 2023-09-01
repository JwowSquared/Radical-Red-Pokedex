let moves = {
    "MOVE_NONE": {
        "name": "MOVE_NONE",
        "changes": [],
        "description": [],
        "ingameName": "None",
        "effect": "EFFECT_HIT",
        "power": "40",
        "type": "TYPE_MYSTERY",
        "accuracy": "100",
        "PP": "35",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Randomizer Banned Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_POUND": {
        "name": "MOVE_POUND",
        "changes": [],
        "description": [
            "A physical attack delivered with a long tail or a foreleg, etc."
        ],
        "ingameName": "Pound",
        "effect": "EFFECT_HIT",
        "power": "40",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "35",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_KARATECHOP": {
        "name": "MOVE_KARATECHOP",
        "changes": [],
        "description": [
            "The foe is attacked with a sharp chop. It has a high critical-hit ratio."
        ],
        "ingameName": "Karate Chop",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "50",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "25",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "High Critical Chance Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "75",
        "Zeffect": ""
    },
    "MOVE_DOUBLESLAP": {
        "name": "MOVE_DOUBLESLAP",
        "changes": [],
        "description": [
            "The foe is slapped repeatedly, back and forth, two to five times."
        ],
        "ingameName": "Double Slap",
        "effect": "EFFECT_MULTI_HIT",
        "power": "15",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_COMETPUNCH": {
        "name": "MOVE_COMETPUNCH",
        "changes": [],
        "description": [
            "The foe is hit with a flurry of punches that strike two to five times."
        ],
        "ingameName": "Comet Punch",
        "effect": "EFFECT_MULTI_HIT",
        "power": "18",
        "type": "TYPE_NORMAL",
        "accuracy": "85",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Iron Fist Affected Moves",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_MEGAPUNCH": {
        "name": "MOVE_MEGAPUNCH",
        "changes": [],
        "description": [
            "The foe is slugged by a punch thrown with muscle-packed power."
        ],
        "ingameName": "Mega Punch",
        "effect": "EFFECT_HIT",
        "power": "80",
        "type": "TYPE_NORMAL",
        "accuracy": "85",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_PAYDAY": {
        "name": "MOVE_PAYDAY",
        "changes": [],
        "description": [
            "Numerous coins are hurled at the foe. Money is earned after battle."
        ],
        "ingameName": "Pay Day",
        "effect": "EFFECT_PAY_DAY",
        "power": "40",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_FIREPUNCH": {
        "name": "MOVE_FIREPUNCH",
        "changes": [],
        "description": [
            "The foe is punched with a fiery fist. It may leave the foe with a burn."
        ],
        "ingameName": "Fire Punch",
        "effect": "EFFECT_BURN_HIT",
        "power": "75",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ICEPUNCH": {
        "name": "MOVE_ICEPUNCH",
        "changes": [],
        "description": [
            "The foe is punched with an icy fist. It may leave the foe frozen."
        ],
        "ingameName": "Ice Punch",
        "effect": "EFFECT_FREEZE_HIT",
        "power": "75",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_THUNDERPUNCH": {
        "name": "MOVE_THUNDERPUNCH",
        "changes": [],
        "description": [
            "The foe is punched with an electrified fist. It may leave the foe paralyzed."
        ],
        "ingameName": "Thunder Punch",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "75",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SCRATCH": {
        "name": "MOVE_SCRATCH",
        "changes": [],
        "description": [
            "Hard, pointed, and sharp claws rake the foe."
        ],
        "ingameName": "Scratch",
        "effect": "EFFECT_HIT",
        "power": "40",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "35",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_VICEGRIP": {
        "name": "MOVE_VICEGRIP",
        "changes": [],
        "description": [
            "Huge, impressive pincers grip and squeeze the foe."
        ],
        "ingameName": "Vicegrip",
        "effect": "EFFECT_HIT",
        "power": "55",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_GUILLOTINE": {
        "name": "MOVE_GUILLOTINE",
        "changes": [],
        "description": [
            "A vicious tearing attack with pincers. The foe will faint if it hits."
        ],
        "ingameName": "Guillotine",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "30",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Randomizer Banned Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_RAZORWIND": {
        "name": "MOVE_RAZORWIND",
        "changes": [],
        "description": [
            "Blades of wind hit the foe on the 2nd turn. It has a high critical-hit ratio."
        ],
        "ingameName": "Razor Wind",
        "effect": "EFFECT_RAZOR_WIND",
        "power": "80",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Instruct Banned Moves",
            "Sleep Talk Banned Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SWORDSDANCE": {
        "name": "MOVE_SWORDSDANCE",
        "changes": [],
        "description": [
            "A frenetic dance of fighting. It sharply raises the Attack stat."
        ],
        "ingameName": "Swords Dance",
        "effect": "EFFECT_ATTACK_UP_2",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves",
            "Dance Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_CUT": {
        "name": "MOVE_CUT",
        "changes": [],
        "description": [
            "A basic attack. It can be used to cut down thin trees and grass."
        ],
        "ingameName": "Cut",
        "effect": "EFFECT_HIT",
        "power": "75",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "25",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_GUST": {
        "name": "MOVE_GUST",
        "changes": [],
        "description": [
            "Strikes the foe with a gust of wind whipped up by wings."
        ],
        "ingameName": "Gust",
        "effect": "EFFECT_GUST",
        "power": "40",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "35",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Wind Moves",
            "Ignore In Air Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_WINGATTACK": {
        "name": "MOVE_WINGATTACK",
        "changes": [],
        "description": [
            "The foe is struck with large, imposing wings spread wide."
        ],
        "ingameName": "Wing Attack",
        "effect": "EFFECT_HIT",
        "power": "60",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "35",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_WHIRLWIND": {
        "name": "MOVE_WHIRLWIND",
        "changes": [],
        "description": [
            "The foe is made to switch out with an ally. In the wild, the battle ends."
        ],
        "ingameName": "Whirlwind",
        "effect": "EFFECT_ROAR",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "-6",
        "flags": [
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Copycat Banned Moves",
            "Assist Banned Moves",
            "Dynamax Banned Moves",
            "Wind Moves",
            "Substitute Bypass Moves",
            "Prio Minus 6"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_FLY": {
        "name": "MOVE_FLY",
        "changes": [],
        "description": [
            "A 2-turn move that hits on the 2nd turn. Use it to fly to any known town."
        ],
        "ingameName": "Fly",
        "effect": "EFFECT_SEMI_INVULNERABLE",
        "power": "90",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Gravity Banned Moves",
            "Instruct Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_BIND": {
        "name": "MOVE_BIND",
        "changes": [],
        "description": [
            "A long body or tentacles are used to bind the foe for two to five turns."
        ],
        "ingameName": "Bind",
        "effect": "EFFECT_TRAP",
        "power": "15",
        "type": "TYPE_NORMAL",
        "accuracy": "85",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_SLAM": {
        "name": "MOVE_SLAM",
        "changes": [],
        "description": [
            "The foe is struck with a long tail, vines, etc."
        ],
        "ingameName": "Slam",
        "effect": "EFFECT_HIT",
        "power": "80",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_VINEWHIP": {
        "name": "MOVE_VINEWHIP",
        "changes": [],
        "description": [
            "The foe is struck with slender, whip- like vines."
        ],
        "ingameName": "Vine Whip",
        "effect": "EFFECT_HIT",
        "power": "45",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "25",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_STOMP": {
        "name": "MOVE_STOMP",
        "changes": [],
        "description": [
            "The foe is stomped with a big foot. It may make the foe flinch."
        ],
        "ingameName": "Stomp",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "65",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Sheer Force Affected Moves",
            "Striker Affected Moves",
            "Always Hit When Minimized Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_DOUBLEKICK": {
        "name": "MOVE_DOUBLEKICK",
        "changes": [],
        "description": [
            "Two legs are used to quickly kick the foe twice in one turn."
        ],
        "ingameName": "Double Kick",
        "effect": "EFFECT_DOUBLE_HIT",
        "power": "30",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Striker Affected Moves",
            "Two Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "80",
        "Zeffect": ""
    },
    "MOVE_MEGAKICK": {
        "name": "MOVE_MEGAKICK",
        "changes": [],
        "description": [
            "The foe is attacked by a kick fired with muscle-packed power."
        ],
        "ingameName": "Mega Kick",
        "effect": "EFFECT_HIT",
        "power": "120",
        "type": "TYPE_NORMAL",
        "accuracy": "75",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Striker Affected Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_JUMPKICK": {
        "name": "MOVE_JUMPKICK",
        "changes": [],
        "description": [
            "The user jumps up high, then kicks. If it misses, the user hurts itself."
        ],
        "ingameName": "Jump Kick",
        "effect": "EFFECT_RECOIL_IF_MISS",
        "power": "100",
        "type": "TYPE_FIGHTING",
        "accuracy": "95",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Gravity Banned Moves",
            "Reckless Boosted Moves",
            "Striker Affected Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_ROLLINGKICK": {
        "name": "MOVE_ROLLINGKICK",
        "changes": [],
        "description": [
            "A quick kick from a rolling spin. It may make the foe flinch."
        ],
        "ingameName": "Rolling Kick",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "60",
        "type": "TYPE_FIGHTING",
        "accuracy": "85",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Striker Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "80",
        "Zeffect": ""
    },
    "MOVE_SANDATTACK": {
        "name": "MOVE_SANDATTACK",
        "changes": [],
        "description": [
            "The user throw sand at the foe, lowering its Attack.\r"
        ],
        "ingameName": "Sand Attack",
        "effect": "EFFECT_ATTACK_DOWN",
        "power": "0",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Randomizer Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_EVSN_UP_1",
        "maxPower": ""
    },
    "MOVE_HEADBUTT": {
        "name": "MOVE_HEADBUTT",
        "changes": [],
        "description": [
            "The user sticks its head out and rams. It may make the foe flinch."
        ],
        "ingameName": "Headbutt",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "70",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_HORNATTACK": {
        "name": "MOVE_HORNATTACK",
        "changes": [],
        "description": [
            "The foe is jabbed with a sharply pointed horn to inflict damage."
        ],
        "ingameName": "Horn Attack",
        "effect": "EFFECT_HIT",
        "power": "65",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "25",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_FURYATTACK": {
        "name": "MOVE_FURYATTACK",
        "changes": [],
        "description": [
            "The foe is jabbed repeatedly with a horn or beak two to five times."
        ],
        "ingameName": "Fury Attack",
        "effect": "EFFECT_MULTI_HIT",
        "power": "20",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_HORNDRILL": {
        "name": "MOVE_HORNDRILL",
        "changes": [],
        "description": [
            "The horn is rotated like a drill to ram. The foe will faint if it hits."
        ],
        "ingameName": "Horn Drill",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "30",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Randomizer Banned Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_TACKLE": {
        "name": "MOVE_TACKLE",
        "changes": [],
        "description": [
            "A physical attack in which the user charges, full body, into the foe."
        ],
        "ingameName": "Tackle",
        "effect": "EFFECT_HIT",
        "power": "40",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "35",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_BODYSLAM": {
        "name": "MOVE_BODYSLAM",
        "changes": [],
        "description": [
            "The user drops its full body on the foe. It may leave the foe paralyzed."
        ],
        "ingameName": "Body Slam",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "85",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Sheer Force Affected Moves",
            "Always Hit When Minimized Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_WRAP": {
        "name": "MOVE_WRAP",
        "changes": [],
        "description": [
            "A long body or vines are used to wrap the foe for two to five turns."
        ],
        "ingameName": "Wrap",
        "effect": "EFFECT_TRAP",
        "power": "15",
        "type": "TYPE_NORMAL",
        "accuracy": "90",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_TAKEDOWN": {
        "name": "MOVE_TAKEDOWN",
        "changes": [],
        "description": [
            "A reckless, full- body charge attack that also hurts the user a little."
        ],
        "ingameName": "Take Down",
        "effect": "EFFECT_RECOIL",
        "power": "90",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Reckless Boosted Moves",
            "Recoil Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_THRASH": {
        "name": "MOVE_THRASH",
        "changes": [],
        "description": [
            "The user rampages about for two to three turns, then becomes confused."
        ],
        "ingameName": "Thrash",
        "effect": "EFFECT_RAMPAGE",
        "power": "120",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_RANDOM",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_DOUBLEEDGE": {
        "name": "MOVE_DOUBLEEDGE",
        "changes": [],
        "description": [
            "A reckless, life- risking tackle that also hurts the user a little."
        ],
        "ingameName": "Double-Edge",
        "effect": "EFFECT_RECOIL",
        "power": "120",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Reckless Boosted Moves",
            "Recoil Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_TAILWHIP": {
        "name": "MOVE_TAILWHIP",
        "changes": [],
        "description": [
            "The user wags its tail cutely, making the foe lower its Defense stat."
        ],
        "ingameName": "Tail Whip",
        "effect": "EFFECT_DEFENSE_DOWN",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_POISONSTING": {
        "name": "MOVE_POISONSTING",
        "changes": [],
        "description": [
            "The foe is stabbed with a toxic barb, etc. It may poison the foe."
        ],
        "ingameName": "Poison Sting",
        "effect": "EFFECT_POISON_HIT",
        "power": "15",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "35",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "70",
        "Zeffect": ""
    },
    "MOVE_TWINEEDLE": {
        "name": "MOVE_TWINEEDLE",
        "changes": [],
        "description": [
            "The foe is stabbed twice with foreleg stingers. It may poison the foe."
        ],
        "ingameName": "Twineedle",
        "effect": "EFFECT_POISON_HIT",
        "power": "25",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "20",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Two Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_PINMISSILE": {
        "name": "MOVE_PINMISSILE",
        "changes": [],
        "description": [
            "Sharp pins are shot at the foe and hit two to five times at once."
        ],
        "ingameName": "Pin Missile",
        "effect": "EFFECT_MULTI_HIT",
        "power": "25",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_LEER": {
        "name": "MOVE_LEER",
        "changes": [],
        "description": [
            "The foe is given an intimidating look that lowers its Defense stat."
        ],
        "ingameName": "Leer",
        "effect": "EFFECT_DEFENSE_DOWN",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_BITE": {
        "name": "MOVE_BITE",
        "changes": [],
        "description": [
            "The user bites with vicious fangs. It may make the foe flinch."
        ],
        "ingameName": "Bite",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "60",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "25",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Strong Jaw Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_GROWL": {
        "name": "MOVE_GROWL",
        "changes": [],
        "description": [
            "The user growls in a cute way, making the foe lower its Attack stat."
        ],
        "ingameName": "Growl",
        "effect": "EFFECT_ATTACK_DOWN",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_ROAR": {
        "name": "MOVE_ROAR",
        "changes": [],
        "description": [
            "The foe is made to switch out with an ally. In the wild, the battle ends."
        ],
        "ingameName": "Roar",
        "effect": "EFFECT_ROAR",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "-6",
        "flags": [
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Copycat Banned Moves",
            "Assist Banned Moves",
            "Dynamax Banned Moves",
            "Punk Rock Affected Moves",
            "Prio Minus 6"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_SING": {
        "name": "MOVE_SING",
        "changes": [],
        "description": [
            "A soothing song in a calming voice lulls the foe into a deep slumber."
        ],
        "ingameName": "Sing",
        "effect": "EFFECT_SLEEP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "55",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves",
            "Moves With Quiet B G M"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_SUPERSONIC": {
        "name": "MOVE_SUPERSONIC",
        "changes": [],
        "description": [
            "The user generates odd sound waves. It may confuse the foe."
        ],
        "ingameName": "Supersonic",
        "effect": "EFFECT_CONFUSE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "55",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_SONICBOOM": {
        "name": "MOVE_SONICBOOM",
        "changes": [],
        "description": [
            "The foe is hit with a shock wave that always inflicts 20- HP damage."
        ],
        "ingameName": "Sonic Boom",
        "effect": "EFFECT_SONICBOOM",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "90",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_DISABLE": {
        "name": "MOVE_DISABLE",
        "changes": [],
        "description": [
            "For a few turns, it prevents the foe from using the move it last used."
        ],
        "ingameName": "Disable",
        "effect": "EFFECT_DISABLE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves",
            "Aroma Veil Protected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_ACID": {
        "name": "MOVE_ACID",
        "changes": [],
        "description": [
            "The foe is sprayed with a harsh, hide- melting acid that may lower Defense."
        ],
        "ingameName": "Acid",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "40",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "30",
        "chance": "10",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "70",
        "Zeffect": ""
    },
    "MOVE_EMBER": {
        "name": "MOVE_EMBER",
        "changes": [],
        "description": [
            "The foe is attacked with small flames. The foe may suffer a burn."
        ],
        "ingameName": "Ember",
        "effect": "EFFECT_BURN_HIT",
        "power": "40",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "25",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_FLAMETHROWER": {
        "name": "MOVE_FLAMETHROWER",
        "changes": [
            [
                "power",
                "95"
            ]
        ],
        "description": [
            "The foe is scorched with intense flames. The foe may suffer a burn."
        ],
        "ingameName": "Flamethrower",
        "effect": "EFFECT_BURN_HIT",
        "power": "90",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_MIST": {
        "name": "MOVE_MIST",
        "changes": [],
        "description": [
            "The ally party is protected by a mist that prevents stat reductions."
        ],
        "ingameName": "Mist",
        "effect": "EFFECT_MIST",
        "power": "0",
        "type": "TYPE_ICE",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RECOVER_HP",
        "maxPower": ""
    },
    "MOVE_WATERGUN": {
        "name": "MOVE_WATERGUN",
        "changes": [],
        "description": [
            "The foe is struck with a lot of water expelled forcibly from the mouth."
        ],
        "ingameName": "Water Gun",
        "effect": "EFFECT_HIT",
        "power": "40",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "25",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_HYDROPUMP": {
        "name": "MOVE_HYDROPUMP",
        "changes": [
            [
                "power",
                "120"
            ]
        ],
        "description": [
            "A high volume of water is blasted at the foe under great pressure."
        ],
        "ingameName": "Hydro Pump",
        "effect": "EFFECT_HIT",
        "power": "110",
        "type": "TYPE_WATER",
        "accuracy": "80",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_SURF": {
        "name": "MOVE_SURF",
        "changes": [
            [
                "power",
                "95"
            ]
        ],
        "description": [
            "A big wave crashes down on the foe. Can also be used for crossing water."
        ],
        "ingameName": "Surf",
        "effect": "EFFECT_HIT",
        "power": "90",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Ignore Underwater Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ICEBEAM": {
        "name": "MOVE_ICEBEAM",
        "changes": [
            [
                "power",
                "95"
            ]
        ],
        "description": [
            "The foe is struck with an icy beam. It may leave the target frostbitten. \r"
        ],
        "ingameName": "Ice Beam",
        "effect": "EFFECT_FREEZE_HIT",
        "power": "90",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "10",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_BLIZZARD": {
        "name": "MOVE_BLIZZARD",
        "changes": [
            [
                "power",
                "120"
            ]
        ],
        "description": [
            "The foe is blasted with a blizzard. It may leave the target frostbitten.\r"
        ],
        "ingameName": "Blizzard",
        "effect": "EFFECT_FREEZE_HIT",
        "power": "110",
        "type": "TYPE_ICE",
        "accuracy": "70",
        "PP": "5",
        "chance": "10",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Wind Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_PSYBEAM": {
        "name": "MOVE_PSYBEAM",
        "changes": [],
        "description": [
            "A peculiar ray is shot at the foe. It may leave the foe confused."
        ],
        "ingameName": "Psybeam",
        "effect": "EFFECT_CONFUSE_HIT",
        "power": "65",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "20",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_BUBBLEBEAM": {
        "name": "MOVE_BUBBLEBEAM",
        "changes": [],
        "description": [
            "A spray of bubbles strikes the foe. It may lower the foe's Speed stat."
        ],
        "ingameName": "Bubble Beam",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "65",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "20",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_AURORABEAM": {
        "name": "MOVE_AURORABEAM",
        "changes": [],
        "description": [
            "A rainbow-colored attack beam. It may lower the foe's Attack stat."
        ],
        "ingameName": "Aurora Beam",
        "effect": "EFFECT_ATTACK_DOWN_HIT",
        "power": "65",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "20",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_HYPERBEAM": {
        "name": "MOVE_HYPERBEAM",
        "changes": [],
        "description": [
            "A severely damaging attack that makes the user rest on the next turn."
        ],
        "ingameName": "Hyper Beam",
        "effect": "EFFECT_RECHARGE",
        "power": "150",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Moves That Require Recharging"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_PECK": {
        "name": "MOVE_PECK",
        "changes": [],
        "description": [
            "The foe is jabbed with a sharply pointed beak or horn."
        ],
        "ingameName": "Peck",
        "effect": "EFFECT_HIT",
        "power": "35",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "35",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_DRILLPECK": {
        "name": "MOVE_DRILLPECK",
        "changes": [],
        "description": [
            "The beak acts as a drill, boasting high critical-hit ratio.\r"
        ],
        "ingameName": "Drill Peck",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "80",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "High Critical Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SUBMISSION": {
        "name": "MOVE_SUBMISSION",
        "changes": [],
        "description": [
            "A reckless, full- body throw attack that also hurts the user a little."
        ],
        "ingameName": "Submission",
        "effect": "EFFECT_RECOIL",
        "power": "80",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Reckless Boosted Moves",
            "Recoil Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_LOWKICK": {
        "name": "MOVE_LOWKICK",
        "changes": [],
        "description": [
            "A low, tripping kick that inflicts more damage on heavier foes.\r"
        ],
        "ingameName": "Low Kick",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Dynamax Banned Moves",
            "Striker Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_COUNTER": {
        "name": "MOVE_COUNTER",
        "changes": [],
        "description": [
            "A retaliation move that counters any physical hit with double the damage."
        ],
        "ingameName": "Counter",
        "effect": "EFFECT_COUNTER",
        "power": "1",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_DEPENDS",
        "priority": "-5",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Me First Banned Moves",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Prio Minus 5"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "75",
        "Zeffect": ""
    },
    "MOVE_SEISMICTOSS": {
        "name": "MOVE_SEISMICTOSS",
        "changes": [],
        "description": [
            "A gravity-fed throw that causes damage matching the user's level."
        ],
        "ingameName": "Seismic Toss",
        "effect": "EFFECT_LEVEL_DAMAGE",
        "power": "1",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "75",
        "Zeffect": ""
    },
    "MOVE_STRENGTH": {
        "name": "MOVE_STRENGTH",
        "changes": [],
        "description": [
            "The foe is slugged at maximum power. Can also be used to move boulders."
        ],
        "ingameName": "Strength",
        "effect": "EFFECT_HIT",
        "power": "80",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ABSORB": {
        "name": "MOVE_ABSORB",
        "changes": [],
        "description": [
            "An attack that absorbs half the damage it inflicted to restore HP."
        ],
        "ingameName": "Absorb",
        "effect": "EFFECT_ABSORB",
        "power": "25",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "25",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Triage Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_MEGADRAIN": {
        "name": "MOVE_MEGADRAIN",
        "changes": [],
        "description": [
            "A tough attack that drains half the damage it inflicted to restore HP."
        ],
        "ingameName": "Mega Drain",
        "effect": "EFFECT_ABSORB",
        "power": "60",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Triage Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_LEECHSEED": {
        "name": "MOVE_LEECHSEED",
        "changes": [],
        "description": [
            "A seed is planted on the foe to steal some HP for the  user on every turn."
        ],
        "ingameName": "Leech Seed",
        "effect": "EFFECT_LEECH_SEED",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "90",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Hardcore Half Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_GROWTH": {
        "name": "MOVE_GROWTH",
        "changes": [],
        "description": [
            "The user's body is forced to grow, raising the Sp. Atk stat."
        ],
        "ingameName": "Growth",
        "effect": "EFFECT_SPECIAL_ATTACK_UP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_RAZORLEAF": {
        "name": "MOVE_RAZORLEAF",
        "changes": [],
        "description": [
            "The foe is hit with a cutting leaf. It has a high critical-hit ratio."
        ],
        "ingameName": "Razor Leaf",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "55",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "25",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_SOLARBEAM": {
        "name": "MOVE_SOLARBEAM",
        "changes": [],
        "description": [
            "A 2-turn move that blasts the foe with absorbed energy in the 2nd turn."
        ],
        "ingameName": "Solar Beam",
        "effect": "EFFECT_SOLARBEAM",
        "power": "120",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Instruct Banned Moves",
            "Sleep Talk Banned Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_POISONPOWDER": {
        "name": "MOVE_POISONPOWDER",
        "changes": [],
        "description": [
            "A cloud of toxic dust is scattered. It may poison the foe."
        ],
        "ingameName": "Poison Powder",
        "effect": "EFFECT_POISON",
        "power": "0",
        "type": "TYPE_POISON",
        "accuracy": "75",
        "PP": "35",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Powder Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_STUNSPORE": {
        "name": "MOVE_STUNSPORE",
        "changes": [],
        "description": [
            "Paralyzing dust is scattered wildly. It may paralyze the foe."
        ],
        "ingameName": "Stun Spore",
        "effect": "EFFECT_PARALYZE",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "75",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Powder Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_SLEEPPOWDER": {
        "name": "MOVE_SLEEPPOWDER",
        "changes": [],
        "description": [
            "A sleep-inducing dust is scattered in high volume around a foe."
        ],
        "ingameName": "Sleep Powder",
        "effect": "EFFECT_SLEEP",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "75",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Powder Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_PETALDANCE": {
        "name": "MOVE_PETALDANCE",
        "changes": [],
        "description": [
            "The user attacks with petals for two to three turns, then gets confused."
        ],
        "ingameName": "Petal Dance",
        "effect": "EFFECT_RAMPAGE",
        "power": "120",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_RANDOM",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Dance Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_STRINGSHOT": {
        "name": "MOVE_STRINGSHOT",
        "changes": [],
        "description": [
            "The foe is bound with strings shot from the mouth to reduce its Speed."
        ],
        "ingameName": "String Shot",
        "effect": "EFFECT_SPEED_DOWN_2",
        "power": "0",
        "type": "TYPE_BUG",
        "accuracy": "95",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_DRAGONRAGE": {
        "name": "MOVE_DRAGONRAGE",
        "changes": [],
        "description": [
            "The foe is hit with a shock wave that always inflicts 40- HP damage."
        ],
        "ingameName": "Dragon Rage",
        "effect": "EFFECT_DRAGON_RAGE",
        "power": "1",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_FIRESPIN": {
        "name": "MOVE_FIRESPIN",
        "changes": [],
        "description": [
            "The foe is trapped in an intense spiral of fire that rages two to five turns."
        ],
        "ingameName": "Fire Spin",
        "effect": "EFFECT_TRAP",
        "power": "35",
        "type": "TYPE_FIRE",
        "accuracy": "85",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_THUNDERSHOCK": {
        "name": "MOVE_THUNDERSHOCK",
        "changes": [],
        "description": [
            "An electric shock attack that may also leave the foe paralyzed."
        ],
        "ingameName": "Thunder Shock",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "40",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "30",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_THUNDERBOLT": {
        "name": "MOVE_THUNDERBOLT",
        "changes": [
            [
                "power",
                "95"
            ]
        ],
        "description": [
            "A strong electrical attack that may also leave the foe paralyzed."
        ],
        "ingameName": "Thunderbolt",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "90",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_THUNDERWAVE": {
        "name": "MOVE_THUNDERWAVE",
        "changes": [],
        "description": [
            "An electric shock that causes paralysis. Can't miss if the user is Electric-type.\r"
        ],
        "ingameName": "Thunder Wave",
        "effect": "EFFECT_PARALYZE",
        "power": "0",
        "type": "TYPE_ELECTRIC",
        "accuracy": "90",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_THUNDER": {
        "name": "MOVE_THUNDER",
        "changes": [
            [
                "power",
                "120"
            ]
        ],
        "description": [
            "A brutal lightning attack that may also leave the foe paralyzed."
        ],
        "ingameName": "Thunder",
        "effect": "EFFECT_THUNDER",
        "power": "110",
        "type": "TYPE_ELECTRIC",
        "accuracy": "70",
        "PP": "10",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Ignore In Air Moves",
            "Always Hit In Rain Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_ROCKTHROW": {
        "name": "MOVE_ROCKTHROW",
        "changes": [],
        "description": [
            "The foe is attacked with a shower of small, easily thrown rocks."
        ],
        "ingameName": "Rock Throw",
        "effect": "EFFECT_HIT",
        "power": "50",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_EARTHQUAKE": {
        "name": "MOVE_EARTHQUAKE",
        "changes": [],
        "description": [
            "An earthquake that strikes all Pokémon in battle excluding the user."
        ],
        "ingameName": "Earthquake",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Ignore Undergound Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SOULSTRIKE": {
        "name": "MOVE_SOULSTRIKE",
        "changes": [],
        "description": [
            "The user consumes the target's soul, stealing the target's stat boosts, and then attacks.\r"
        ],
        "ingameName": "Soul Robbery",
        "effect": "EFFECT_PSYCH_UP",
        "power": "100",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Forbidden Spell Moves",
            "Substitute Bypass Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_DIG": {
        "name": "MOVE_DIG",
        "changes": [],
        "description": [
            "An attack that hits on the 2nd turn. Can also be used to exit dungeons."
        ],
        "ingameName": "Dig",
        "effect": "EFFECT_SEMI_INVULNERABLE",
        "power": "80",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Instruct Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Sky Battle Banned Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_TOXIC": {
        "name": "MOVE_TOXIC",
        "changes": [],
        "description": [
            "A move that badly poisons the foe. Can't miss if the user is Poison-type.\r"
        ],
        "ingameName": "Toxic",
        "effect": "EFFECT_TOXIC",
        "power": "0",
        "type": "TYPE_POISON",
        "accuracy": "90",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Hardcore Half Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_CONFUSION": {
        "name": "MOVE_CONFUSION",
        "changes": [],
        "description": [
            "A weak telekinetic attack that may also leave the foe confused."
        ],
        "ingameName": "Confusion",
        "effect": "EFFECT_CONFUSE_HIT",
        "power": "50",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "25",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_PSYCHIC": {
        "name": "MOVE_PSYCHIC",
        "changes": [],
        "description": [
            "A strong telekinetic attack. It may also lower the foe's Sp. Def stat."
        ],
        "ingameName": "Psychic",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "90",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_HYPNOSIS": {
        "name": "MOVE_HYPNOSIS",
        "changes": [],
        "description": [
            "Hypnotic suggestion is used to make the foe fall into a deep sleep."
        ],
        "ingameName": "Hypnosis",
        "effect": "EFFECT_SLEEP",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "60",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_MEDITATE": {
        "name": "MOVE_MEDITATE",
        "changes": [],
        "description": [
            "The user meditates to awaken its power and raise its Attack stat."
        ],
        "ingameName": "Meditate",
        "effect": "EFFECT_ATTACK_UP",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_AGILITY": {
        "name": "MOVE_AGILITY",
        "changes": [],
        "description": [
            "The user relaxes and lightens its body to sharply boost its Speed."
        ],
        "ingameName": "Agility",
        "effect": "EFFECT_SPEED_UP_2",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_QUICKATTACK": {
        "name": "MOVE_QUICKATTACK",
        "changes": [],
        "description": [
            "An almost invisibly fast attack that is certain to strike first."
        ],
        "ingameName": "Quick Attack",
        "effect": "EFFECT_QUICK_ATTACK",
        "power": "40",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Prio Plus 1"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_RAGE": {
        "name": "MOVE_RAGE",
        "changes": [],
        "description": [
            "An attack that becomes stronger each time the user is hit in battle."
        ],
        "ingameName": "Rage",
        "effect": "EFFECT_RAGE",
        "power": "20",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_TELEPORT": {
        "name": "MOVE_TELEPORT",
        "changes": [],
        "description": [
            "Use it to flee from any wild Pokémon. Also warps to the last Poké Center."
        ],
        "ingameName": "Teleport",
        "effect": "EFFECT_TELEPORT",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "-6",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RECOVER_HP",
        "flags": [
            "",
            "Prio Minus 6"
        ],
        "maxPower": ""
    },
    "MOVE_NIGHTSHADE": {
        "name": "MOVE_NIGHTSHADE",
        "changes": [],
        "description": [
            "An attack with a mirage that inflicts damage matching the user's level."
        ],
        "ingameName": "Night Shade",
        "effect": "EFFECT_LEVEL_DAMAGE",
        "power": "1",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_MIMIC": {
        "name": "MOVE_MIMIC",
        "changes": [],
        "description": [
            "The user copies the move last used by the foe for the rest of the battle."
        ],
        "ingameName": "Mimic",
        "effect": "EFFECT_MIMIC",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Copycat Banned Moves",
            "Instruct Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Mimic Banned Moves",
            "Sleep Talk Banned Moves",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ACC_UP_1",
        "maxPower": ""
    },
    "MOVE_SCREECH": {
        "name": "MOVE_SCREECH",
        "changes": [],
        "description": [
            "An ear-splitting screech is emitted to sharply reduce the foe's Defense."
        ],
        "ingameName": "Screech",
        "effect": "EFFECT_DEFENSE_DOWN_2",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "85",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_DOUBLETEAM": {
        "name": "MOVE_DOUBLETEAM",
        "changes": [],
        "description": [
            "The user creates illusory copies of itself to raise its evasiveness."
        ],
        "ingameName": "Double Team",
        "effect": "EFFECT_EVASION_UP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Randomizer Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_RECOVER": {
        "name": "MOVE_RECOVER",
        "changes": [],
        "description": [
            "A self-healing move that restores HP by up to half of the user's maximum HP."
        ],
        "ingameName": "Recover",
        "effect": "EFFECT_RESTORE_HP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_HARDEN": {
        "name": "MOVE_HARDEN",
        "changes": [],
        "description": [
            "The user stiffens all the muscles in its body to raise its Defense stat."
        ],
        "ingameName": "Harden",
        "effect": "EFFECT_DEFENSE_UP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_MINIMIZE": {
        "name": "MOVE_MINIMIZE",
        "changes": [],
        "description": [
            "The user compresses all the cells in its body to raise its evasiveness."
        ],
        "ingameName": "Minimize",
        "effect": "EFFECT_EVASION_UP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Randomizer Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_SMOKESCREEN": {
        "name": "MOVE_SMOKESCREEN",
        "changes": [],
        "description": [
            "The user throws smoke at the foe, lowering its Attack. \r"
        ],
        "ingameName": "Smokescreen",
        "effect": "EFFECT_ATTACK_DOWN",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Randomizer Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_EVSN_UP_1",
        "maxPower": ""
    },
    "MOVE_CONFUSERAY": {
        "name": "MOVE_CONFUSERAY",
        "changes": [],
        "description": [
            "The foe is exposed to a sinister ray that triggers confusion."
        ],
        "ingameName": "Confuse Ray",
        "effect": "EFFECT_CONFUSE",
        "power": "0",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_WITHDRAW": {
        "name": "MOVE_WITHDRAW",
        "changes": [],
        "description": [
            "The user withdraws its body in its hard shell, raising its Defense stat."
        ],
        "ingameName": "Withdraw",
        "effect": "EFFECT_DEFENSE_UP",
        "power": "0",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_DEFENSECURL": {
        "name": "MOVE_DEFENSECURL",
        "changes": [],
        "description": [
            "The user curls up to conceal weak spots and raise its Defense stat."
        ],
        "ingameName": "Defense Curl",
        "effect": "EFFECT_DEFENSE_CURL",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ACC_UP_1",
        "maxPower": ""
    },
    "MOVE_BARRIER": {
        "name": "MOVE_BARRIER",
        "changes": [],
        "description": [
            "The user creates a sturdy wall that sharply raises its Defense stat."
        ],
        "ingameName": "Barrier",
        "effect": "EFFECT_DEFENSE_UP_2",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_LIGHTSCREEN": {
        "name": "MOVE_LIGHTSCREEN",
        "changes": [],
        "description": [
            "A wall of light cuts damage from Sp. Atk attacks for five turns."
        ],
        "ingameName": "Light Screen",
        "effect": "EFFECT_LIGHT_SCREEN",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_HAZE": {
        "name": "MOVE_HAZE",
        "changes": [],
        "description": [
            "Eliminates all stat changes among all Pokémon engaged in battle."
        ],
        "ingameName": "Haze",
        "effect": "EFFECT_HAZE",
        "power": "0",
        "type": "TYPE_ICE",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RECOVER_HP",
        "flags": [
            "",
            "Substitute Bypass Moves"
        ],
        "maxPower": ""
    },
    "MOVE_REFLECT": {
        "name": "MOVE_REFLECT",
        "changes": [],
        "description": [
            "A wall of light cuts damage from physical attacks for five turns."
        ],
        "ingameName": "Reflect",
        "effect": "EFFECT_REFLECT",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_FOCUSENERGY": {
        "name": "MOVE_FOCUSENERGY",
        "changes": [],
        "description": [
            "The user takes a deep breath and focuses to raise its critical-hit ratio."
        ],
        "ingameName": "Focus Energy",
        "effect": "EFFECT_FOCUS_ENERGY",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ACC_UP_1",
        "maxPower": ""
    },
    "MOVE_BIDE": {
        "name": "MOVE_BIDE",
        "changes": [],
        "description": [
            "The user endures attacks for two turns, then strikes back double."
        ],
        "ingameName": "Bide",
        "effect": "EFFECT_BIDE",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "1",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Instruct Banned Moves",
            "Sleep Talk Banned Moves",
            "Prio Plus 1"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_METRONOME": {
        "name": "MOVE_METRONOME",
        "changes": [],
        "description": [
            "Waggles a finger and stimulates the brain into using any move at random."
        ],
        "ingameName": "Metronome",
        "effect": "EFFECT_METRONOME",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_DEPENDS",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Mimic Banned Moves",
            "Sleep Talk Banned Moves",
            "Moves That Call Other Moves"
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MIRRORMOVE": {
        "name": "MOVE_MIRRORMOVE",
        "changes": [],
        "description": [
            "The user counters the move last used by the foe with the same move."
        ],
        "ingameName": "Mirror Move",
        "effect": "EFFECT_MIRROR_MOVE",
        "power": "0",
        "type": "TYPE_FLYING",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_2",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Moves That Call Other Moves"
        ],
        "maxPower": ""
    },
    "MOVE_SELFDESTRUCT": {
        "name": "MOVE_SELFDESTRUCT",
        "changes": [],
        "description": [
            "The user blows up to inflict severe damage, even making itself faint."
        ],
        "ingameName": "Self-Destruct",
        "effect": "EFFECT_EXPLOSION",
        "power": "100",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Parental Bond Banned Moves",
            "Raid Battle Banned Moves",
            "Reckless Boosted Moves"
        ],
        "Zpower": "200",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_EGGBOMB": {
        "name": "MOVE_EGGBOMB",
        "changes": [],
        "description": [
            "A large egg is hurled with great force at the foe to inflict damage."
        ],
        "ingameName": "Egg Bomb",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_NORMAL",
        "accuracy": "75",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Ball Bomb Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_LICK": {
        "name": "MOVE_LICK",
        "changes": [],
        "description": [
            "The foe is licked and hit with a long tongue. It may also paralyze."
        ],
        "ingameName": "Lick",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "30",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "30",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_SMOG": {
        "name": "MOVE_SMOG",
        "changes": [],
        "description": [
            "The foe is attacked with exhaust gases. It may also poison the foe."
        ],
        "ingameName": "Smog",
        "effect": "EFFECT_POISON_HIT",
        "power": "30",
        "type": "TYPE_POISON",
        "accuracy": "70",
        "PP": "20",
        "chance": "40",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "70",
        "Zeffect": ""
    },
    "MOVE_SLUDGE": {
        "name": "MOVE_SLUDGE",
        "changes": [],
        "description": [
            "Toxic sludge is hurled at the foe. It may poison the target."
        ],
        "ingameName": "Sludge",
        "effect": "EFFECT_POISON_HIT",
        "power": "65",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "20",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "85",
        "Zeffect": ""
    },
    "MOVE_BONECLUB": {
        "name": "MOVE_BONECLUB",
        "changes": [],
        "description": [
            "The foe is clubbed with a bone held in hand. It may make the foe flinch."
        ],
        "ingameName": "Bone Club",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "65",
        "type": "TYPE_GROUND",
        "accuracy": "85",
        "PP": "20",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Bone Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_FIREBLAST": {
        "name": "MOVE_FIREBLAST",
        "changes": [
            [
                "power",
                "120"
            ]
        ],
        "description": [
            "The foe is hit with an intense flame. It may leave the target with a burn."
        ],
        "ingameName": "Fire Blast",
        "effect": "EFFECT_BURN_HIT",
        "power": "110",
        "type": "TYPE_FIRE",
        "accuracy": "85",
        "PP": "5",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_WATERFALL": {
        "name": "MOVE_WATERFALL",
        "changes": [],
        "description": [
            "A powerful charge attack. It can also be used to climb a waterfall."
        ],
        "ingameName": "Waterfall",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "80",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "15",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_CLAMP": {
        "name": "MOVE_CLAMP",
        "changes": [],
        "description": [
            "The foe is clamped and squeezed by the user's shell for two to five turns."
        ],
        "ingameName": "Clamp",
        "effect": "EFFECT_TRAP",
        "power": "35",
        "type": "TYPE_WATER",
        "accuracy": "85",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_SWIFT": {
        "name": "MOVE_SWIFT",
        "changes": [],
        "description": [
            "Star-shaped rays that never miss are fired at all foes in battle."
        ],
        "ingameName": "Swift",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "60",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_SKULLBASH": {
        "name": "MOVE_SKULLBASH",
        "changes": [],
        "description": [
            "The user raises its Defense and Attack in the 1st turn, then attacks in the 2nd turn. \r"
        ],
        "ingameName": "Skull Bash",
        "effect": "EFFECT_SKULL_BASH",
        "power": "130",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Instruct Banned Moves",
            "Hardcore Banned Moves",
            "Sleep Talk Banned Moves"
        ],
        "Zpower": "195",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_SPIKECANNON": {
        "name": "MOVE_SPIKECANNON",
        "changes": [],
        "description": [
            "Sharp spikes are fired at the foe to strike two to five times."
        ],
        "ingameName": "Spike Cannon",
        "effect": "EFFECT_MULTI_HIT",
        "power": "20",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Ball Bomb Moves",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_CONSTRICT": {
        "name": "MOVE_CONSTRICT",
        "changes": [],
        "description": [
            "The foe is attacked with long tentacles or vines. It may lower Speed."
        ],
        "ingameName": "Constrict",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "10",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "35",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_AMNESIA": {
        "name": "MOVE_AMNESIA",
        "changes": [],
        "description": [
            "Forgets about something and sharply raises Sp. Def."
        ],
        "ingameName": "Amnesia",
        "effect": "EFFECT_SPECIAL_DEFENSE_UP_2",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_KINESIS": {
        "name": "MOVE_KINESIS",
        "changes": [],
        "description": [
            "The user distracts the foe by bending a spoon. It may lower accuracy."
        ],
        "ingameName": "Kinesis",
        "effect": "EFFECT_ACCURACY_DOWN",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "80",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Randomizer Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_EVSN_UP_1",
        "maxPower": ""
    },
    "MOVE_SOFTBOILED": {
        "name": "MOVE_SOFTBOILED",
        "changes": [],
        "description": [
            "Heals the user by up to half its full HP. It can be used to heal an ally."
        ],
        "ingameName": "Soft-Boiled",
        "effect": "EFFECT_RESTORE_HP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_HIGHJUMPKICK": {
        "name": "MOVE_HIGHJUMPKICK",
        "changes": [],
        "description": [],
        "ingameName": "High Jump Kick",
        "effect": "EFFECT_RECOIL_IF_MISS",
        "power": "130",
        "type": "TYPE_FIGHTING",
        "accuracy": "90",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Gravity Banned Moves",
            "Reckless Boosted Moves",
            "Striker Affected Moves"
        ],
        "Zpower": "195",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "95",
        "Zeffect": ""
    },
    "MOVE_GLARE": {
        "name": "MOVE_GLARE",
        "changes": [],
        "description": [
            "The user intimidates the foe with the design on its belly to cause paralysis."
        ],
        "ingameName": "Glare",
        "effect": "EFFECT_PARALYZE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_DREAMEATER": {
        "name": "MOVE_DREAMEATER",
        "changes": [],
        "description": [
            "Absorbs half the damage it inflicted on a sleeping foe to restore HP."
        ],
        "ingameName": "Dream Eater",
        "effect": "EFFECT_DREAM_EATER",
        "power": "100",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Triage Affected"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_POISONGAS": {
        "name": "MOVE_POISONGAS",
        "changes": [],
        "description": [
            "The foe is sprayed with a cloud of toxic gas that may poison the foe."
        ],
        "ingameName": "Poison Gas",
        "effect": "EFFECT_POISON",
        "power": "0",
        "type": "TYPE_POISON",
        "accuracy": "90",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_BARRAGE": {
        "name": "MOVE_BARRAGE",
        "changes": [],
        "description": [
            "Round objects are hurled at the foe to strike two to five times."
        ],
        "ingameName": "Barrage",
        "effect": "EFFECT_MULTI_HIT",
        "power": "15",
        "type": "TYPE_NORMAL",
        "accuracy": "85",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Ball Bomb Moves",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_LEECHLIFE": {
        "name": "MOVE_LEECHLIFE",
        "changes": [
            [
                "power",
                "20"
            ],
            [
                "Zpower",
                "100"
            ],
            [
                "maxPower",
                "90"
            ]
        ],
        "description": [
            "An attack that absorbs half the damage it inflicted to restore HP."
        ],
        "ingameName": "Leech Life",
        "effect": "EFFECT_ABSORB",
        "power": "80",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Triage Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_LOVELYKISS": {
        "name": "MOVE_LOVELYKISS",
        "changes": [],
        "description": [
            "The user forces a kiss on the foe with a scary face that induces sleep."
        ],
        "ingameName": "Lovely Kiss",
        "effect": "EFFECT_SLEEP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "85",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_SKYATTACK": {
        "name": "MOVE_SKYATTACK",
        "changes": [],
        "description": [
            "A 2nd-turn attack move with a high critical-hit ratio. The foe may flinch."
        ],
        "ingameName": "Sky Attack",
        "effect": "EFFECT_SKY_ATTACK",
        "power": "140",
        "type": "TYPE_FLYING",
        "accuracy": "90",
        "PP": "5",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Instruct Banned Moves",
            "Sleep Talk Banned Moves",
            "Sheer Force Affected Moves",
            "High Critical Chance Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "200",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_TRANSFORM": {
        "name": "MOVE_TRANSFORM",
        "changes": [],
        "description": [
            "The user transforms into a copy of the foe with even the same move set."
        ],
        "ingameName": "Transform",
        "effect": "EFFECT_TRANSFORM",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RECOVER_HP",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Instruct Banned Moves",
            "Metronome Banned Moves",
            "Randomizer Banned Moves",
            "Assist Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_BUBBLE": {
        "name": "MOVE_BUBBLE",
        "changes": [],
        "description": [
            "A spray of bubbles hits the foe. It may lower the foe's Speed stat."
        ],
        "ingameName": "Bubble",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "40",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "30",
        "chance": "10",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_DIZZYPUNCH": {
        "name": "MOVE_DIZZYPUNCH",
        "changes": [],
        "description": [
            "The foe is hit with a rhythmic punch that may leave it confused."
        ],
        "ingameName": "Dizzy Punch",
        "effect": "EFFECT_CONFUSE_HIT",
        "power": "70",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SPORE": {
        "name": "MOVE_SPORE",
        "changes": [],
        "description": [
            "The user scatters bursts of fine spores that induce sleep."
        ],
        "ingameName": "Spore",
        "effect": "EFFECT_SLEEP",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Powder Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_FLASH": {
        "name": "MOVE_FLASH",
        "changes": [],
        "description": [
            "The user flashes a bright light, which lowers its Attack. \r"
        ],
        "ingameName": "Flash",
        "effect": "EFFECT_ATTACK_DOWN_HIT",
        "power": "60",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "50",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "Zeffect": "Z_EFFECT_EVSN_UP_1",
        "maxPower": "100"
    },
    "MOVE_PSYWAVE": {
        "name": "MOVE_PSYWAVE",
        "changes": [],
        "description": [
            "The foe is attacked with an odd, hot energy wave that varies in intensity."
        ],
        "ingameName": "Psywave",
        "effect": "EFFECT_PSYWAVE",
        "power": "1",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_SPLASH": {
        "name": "MOVE_SPLASH",
        "changes": [],
        "description": [
            "The user just flops and splashes around without having any effect."
        ],
        "ingameName": "Splash",
        "effect": "EFFECT_SPLASH",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_3",
        "flags": [
            "",
            "Gravity Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_ACIDARMOR": {
        "name": "MOVE_ACIDARMOR",
        "changes": [],
        "description": [
            "The user alters its cells to liquefy itself and sharply raise Defense."
        ],
        "ingameName": "Acid Armor",
        "effect": "EFFECT_DEFENSE_UP_2",
        "power": "0",
        "type": "TYPE_POISON",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_CRABHAMMER": {
        "name": "MOVE_CRABHAMMER",
        "changes": [],
        "description": [
            "A large pincer is used to hammer the foe. It has a high critical-hit ratio."
        ],
        "ingameName": "Crabhammer",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "100",
        "type": "TYPE_WATER",
        "accuracy": "90",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "High Critical Chance Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_EXPLOSION": {
        "name": "MOVE_EXPLOSION",
        "changes": [],
        "description": [
            "The user explodes to inflict terrible damage even while fainting itself."
        ],
        "ingameName": "Explosion",
        "effect": "EFFECT_EXPLOSION",
        "power": "150",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Parental Bond Banned Moves",
            "Raid Battle Banned Moves",
            "Reckless Boosted Moves"
        ],
        "Zpower": "200",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_FURYSWIPES": {
        "name": "MOVE_FURYSWIPES",
        "changes": [],
        "description": [
            "The foe is raked with sharp claws or scythes two to five times."
        ],
        "ingameName": "Fury Swipes",
        "effect": "EFFECT_MULTI_HIT",
        "power": "18",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_BONEMERANG": {
        "name": "MOVE_BONEMERANG",
        "changes": [],
        "description": [
            "The user throws a bone that hits the foe once, then once again on return."
        ],
        "ingameName": "Bonemerang",
        "effect": "EFFECT_DOUBLE_HIT",
        "power": "50",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Bone Moves",
            "Two Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_REST": {
        "name": "MOVE_REST",
        "changes": [],
        "description": [
            "The user sleeps for two turns to fully restore HP and heal any status problem."
        ],
        "ingameName": "Rest",
        "effect": "EFFECT_REST",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_ROCKSLIDE": {
        "name": "MOVE_ROCKSLIDE",
        "changes": [],
        "description": [
            "Large boulders are hurled at the foe. It may make the foe flinch."
        ],
        "ingameName": "Rock Slide",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "75",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "10",
        "chance": "20",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_HYPERFANG": {
        "name": "MOVE_HYPERFANG",
        "changes": [],
        "description": [
            "The foe is attacked with sharp fangs. It may make the foe flinch."
        ],
        "ingameName": "Hyper Fang",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "80",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Strong Jaw Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SHARPEN": {
        "name": "MOVE_SHARPEN",
        "changes": [],
        "description": [
            "The user reduces its polygon count to sharpen edges and raise Attack."
        ],
        "ingameName": "Sharpen",
        "effect": "EFFECT_ATTACK_UP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_DARKHOLE": {
        "name": "MOVE_DARKHOLE",
        "changes": [],
        "description": [
            "The user sends the foe to the shadow realm. It may cause sleep.\r"
        ],
        "ingameName": "Dark Hole",
        "effect": "EFFECT_BLANK_224",
        "power": "100",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "5",
        "chance": "40",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Forbidden Spell Moves",
            "Substitute Bypass Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_TRIATTACK": {
        "name": "MOVE_TRIATTACK",
        "changes": [],
        "description": [
            "A simultaneous 3-beam attack that may paralyze, burn, or freeze the foe."
        ],
        "ingameName": "Tri Attack",
        "effect": "EFFECT_TRI_ATTACK",
        "power": "90",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SUPERFANG": {
        "name": "MOVE_SUPERFANG",
        "changes": [],
        "description": [
            "The user attacks with sharp fangs and halves the foe's HP."
        ],
        "ingameName": "Super Fang",
        "effect": "EFFECT_SUPER_FANG",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "90",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Raid Battle Banned Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_SLASH": {
        "name": "MOVE_SLASH",
        "changes": [],
        "description": [
            "The foe is slashed with claws, etc. It has a high critical-hit ratio."
        ],
        "ingameName": "Slash",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "70",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SUBSTITUTE": {
        "name": "MOVE_SUBSTITUTE",
        "changes": [],
        "description": [
            "The user creates a decoy using one- quarter of its full HP."
        ],
        "ingameName": "Substitute",
        "effect": "EFFECT_SUBSTITUTE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves",
            "Sky Battle Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_STRUGGLE": {
        "name": "MOVE_STRUGGLE",
        "changes": [],
        "description": [
            "An attack that is used only if there is no PP. It also hurts the user."
        ],
        "ingameName": "Struggle",
        "effect": "EFFECT_RECOIL",
        "power": "50",
        "type": "TYPE_MYSTERY",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_RANDOM",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Me First Banned Moves",
            "Copycat Banned Moves",
            "Instruct Banned Moves",
            "Metronome Banned Moves",
            "Randomizer Banned Moves",
            "Assist Banned Moves",
            "Mimic Banned Moves",
            "Type Change Exception Moves"
        ],
        "Zpower": "1",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "1",
        "Zeffect": ""
    },
    "MOVE_SKETCH": {
        "name": "MOVE_SKETCH",
        "changes": [],
        "description": [
            "This move copies the move last used by the foe, then disappears."
        ],
        "ingameName": "Sketch",
        "effect": "EFFECT_SKETCH",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ALL_STATS_UP_1",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Instruct Banned Moves",
            "Metronome Banned Moves",
            "Randomizer Banned Moves",
            "Assist Banned Moves",
            "Mimic Banned Moves",
            "Sleep Talk Banned Moves",
            "Substitute Bypass Moves"
        ],
        "maxPower": ""
    },
    "MOVE_TRIPLEKICK": {
        "name": "MOVE_TRIPLEKICK",
        "changes": [],
        "description": [
            "A 3-kick attack that becomes more powerful with each successive hit."
        ],
        "ingameName": "Triple Kick",
        "effect": "EFFECT_TRIPLE_KICK",
        "power": "20",
        "type": "TYPE_FIGHTING",
        "accuracy": "90",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Striker Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "80",
        "Zeffect": ""
    },
    "MOVE_THIEF": {
        "name": "MOVE_THIEF",
        "changes": [],
        "description": [
            "An attack that may take the foe's held item if the user isn't holding one."
        ],
        "ingameName": "Thief",
        "effect": "EFFECT_THIEF",
        "power": "60",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "25",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Me First Banned Moves",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_SPIDERWEB": {
        "name": "MOVE_SPIDERWEB",
        "changes": [],
        "description": [
            "Ensnares the foe  with sticky string so it doesn't flee or switch out."
        ],
        "ingameName": "Spider Web",
        "effect": "EFFECT_MEAN_LOOK",
        "power": "0",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_MINDREADER": {
        "name": "MOVE_MINDREADER",
        "changes": [],
        "description": [
            "The user predicts the foe's action to ensure its next attack hits."
        ],
        "ingameName": "Mind Reader",
        "effect": "EFFECT_LOCK_ON",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_NIGHTMARE": {
        "name": "MOVE_NIGHTMARE",
        "changes": [],
        "description": [
            "A sleeping foe is shown a nightmare that inflicts some damage every turn."
        ],
        "ingameName": "Nightmare",
        "effect": "EFFECT_NIGHTMARE",
        "power": "0",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_FLAMEWHEEL": {
        "name": "MOVE_FLAMEWHEEL",
        "changes": [],
        "description": [
            "The user makes a fiery charge at the foe. It may cause a burn."
        ],
        "ingameName": "Flame Wheel",
        "effect": "EFFECT_BURN_HIT",
        "power": "60",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "25",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Moves Can Unfreeze Attacker"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_SNORE": {
        "name": "MOVE_SNORE",
        "changes": [],
        "description": [
            "An attack that can be used only while asleep. It may cause flinching."
        ],
        "ingameName": "Snore",
        "effect": "EFFECT_SNORE",
        "power": "50",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Sheer Force Affected Moves",
            "Punk Rock Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_CURSE": {
        "name": "MOVE_CURSE",
        "changes": [],
        "description": [
            "A move that works differently for the Ghost-type and all the other types."
        ],
        "ingameName": "Curse",
        "effect": "EFFECT_CURSE",
        "power": "0",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_CURSE",
        "flags": [
            "",
            "Hardcore Banned Moves",
            "Raid Battle Banned Moves",
            "Substitute Bypass Moves"
        ],
        "maxPower": ""
    },
    "MOVE_FLAIL": {
        "name": "MOVE_FLAIL",
        "changes": [],
        "description": [
            "A desperate attack that becomes more powerful the less HP the user has."
        ],
        "ingameName": "Flail",
        "effect": "EFFECT_FLAIL",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_CONVERSION2": {
        "name": "MOVE_CONVERSION2",
        "changes": [],
        "description": [
            "The user changes type to make itself resistant to the last attack it took."
        ],
        "ingameName": "Conversion 2",
        "effect": "EFFECT_CONVERSION_2",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ALL_STATS_UP_1",
        "flags": [
            "",
            "Substitute Bypass Moves"
        ],
        "maxPower": ""
    },
    "MOVE_AEROBLAST": {
        "name": "MOVE_AEROBLAST",
        "changes": [],
        "description": [
            "A vortex of air is shot at the foe. It has a high critical-hit ratio."
        ],
        "ingameName": "Aeroblast",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "100",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "High Critical Chance Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_COTTONSPORE": {
        "name": "MOVE_COTTONSPORE",
        "changes": [],
        "description": [
            "Cotton-like spores cling to the foe, sharply reducing its Speed stat."
        ],
        "ingameName": "Cotton Spore",
        "effect": "EFFECT_SPEED_DOWN_2",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Powder Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_REVERSAL": {
        "name": "MOVE_REVERSAL",
        "changes": [],
        "description": [
            "An all-out attack that becomes more powerful the less HP the user has."
        ],
        "ingameName": "Reversal",
        "effect": "EFFECT_FLAIL",
        "power": "1",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_SPITE": {
        "name": "MOVE_SPITE",
        "changes": [],
        "description": [
            "A move that cuts 2 to 5 PP from the move last used by the foe."
        ],
        "ingameName": "Spite",
        "effect": "EFFECT_SPITE",
        "power": "0",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RECOVER_HP",
        "maxPower": ""
    },
    "MOVE_POWDERSNOW": {
        "name": "MOVE_POWDERSNOW",
        "changes": [],
        "description": [
            "Blasts the foe with a snowy gust. It may cause freezing."
        ],
        "ingameName": "Powder Snow",
        "effect": "EFFECT_FREEZE_HIT",
        "power": "40",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "25",
        "chance": "10",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_PROTECT": {
        "name": "MOVE_PROTECT",
        "changes": [],
        "description": [
            "Enables the user to evade all attacks. It may fail if used in succession."
        ],
        "ingameName": "Protect",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "4",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Hardcore Banned Moves",
            "Assist Banned Moves",
            "Raid Battle Banned Raid Mon Moves",
            "Prio Plus 4"
        ],
        "maxPower": ""
    },
    "MOVE_MACHPUNCH": {
        "name": "MOVE_MACHPUNCH",
        "changes": [],
        "description": [
            "A punch thrown at blinding speed. It is certain to strike first."
        ],
        "ingameName": "Mach Punch",
        "effect": "EFFECT_QUICK_ATTACK",
        "power": "40",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Iron Fist Affected Moves",
            "Prio Plus 1"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "70",
        "Zeffect": ""
    },
    "MOVE_SCARYFACE": {
        "name": "MOVE_SCARYFACE",
        "changes": [],
        "description": [
            "Frightens the foe with a scary face to sharply reduce its Speed."
        ],
        "ingameName": "Scary Face",
        "effect": "EFFECT_SPEED_DOWN_2",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_FEINTATTACK": {
        "name": "MOVE_FEINTATTACK",
        "changes": [],
        "description": [],
        "ingameName": "Feint Attack",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "60",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_SWEETKISS": {
        "name": "MOVE_SWEETKISS",
        "changes": [],
        "description": [
            "The user kisses the foe with sweet cuteness that causes confusion."
        ],
        "ingameName": "Sweet Kiss",
        "effect": "EFFECT_CONFUSE",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "75",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_BELLYDRUM": {
        "name": "MOVE_BELLYDRUM",
        "changes": [],
        "description": [
            "The user maximizes its Attack stat at the cost of half its full HP."
        ],
        "ingameName": "Belly Drum",
        "effect": "EFFECT_BELLY_DRUM",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RECOVER_HP",
        "maxPower": ""
    },
    "MOVE_SLUDGEBOMB": {
        "name": "MOVE_SLUDGEBOMB",
        "changes": [],
        "description": [
            "Filthy sludge is hurled at the foe. It may poison the target."
        ],
        "ingameName": "Sludge Bomb",
        "effect": "EFFECT_POISON_HIT",
        "power": "90",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "10",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_MUDSLAP": {
        "name": "MOVE_MUDSLAP",
        "changes": [],
        "description": [
            "The user hurls mud at the foe, dealing minimal damage. \r"
        ],
        "ingameName": "Mud-Slap",
        "effect": "EFFECT_HIT",
        "power": "40",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_OCTAZOOKA": {
        "name": "MOVE_OCTAZOOKA",
        "changes": [],
        "description": [
            "Ink is blasted in the foe's face or eyes to deal damage.\r"
        ],
        "ingameName": "Octazooka",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "80",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Mega Launcher Affected Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SPIKES": {
        "name": "MOVE_SPIKES",
        "changes": [],
        "description": [
            "A trap of spikes is laid around the foe's party to hurt foes switching in."
        ],
        "ingameName": "Spikes",
        "effect": "EFFECT_SPIKES",
        "power": "0",
        "type": "TYPE_GROUND",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_OPPONENTS_FIELD",
        "priority": "0",
        "flags": [
            "Magic Coat Affected",
            "Hardcore Banned Moves",
            "Sky Battle Banned Moves",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_ZAPCANNON": {
        "name": "MOVE_ZAPCANNON",
        "changes": [],
        "description": [
            "An electric blast is fired like a cannon to inflict damage and paralyze."
        ],
        "ingameName": "Zap Cannon",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "120",
        "type": "TYPE_ELECTRIC",
        "accuracy": "50",
        "PP": "5",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_FORESIGHT": {
        "name": "MOVE_FORESIGHT",
        "changes": [],
        "description": [
            "Completely negates the foe's efforts to heighten its ability to evade."
        ],
        "ingameName": "Foresight",
        "effect": "EFFECT_FORESIGHT",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_BOOST_CRITS",
        "maxPower": ""
    },
    "MOVE_DESTINYBOND": {
        "name": "MOVE_DESTINYBOND",
        "changes": [],
        "description": [
            "If the user faints, the foe delivering the final hit also faints."
        ],
        "ingameName": "Destiny Bond",
        "effect": "EFFECT_DESTINY_BOND",
        "power": "0",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_FOLLOW_ME",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Hardcore Banned Moves",
            "Assist Banned Moves",
            "Raid Battle Banned Moves",
            "Substitute Bypass Moves"
        ],
        "maxPower": ""
    },
    "MOVE_PERISHSONG": {
        "name": "MOVE_PERISHSONG",
        "changes": [],
        "description": [
            "Any battler that hears this faints in three turns unless it switches."
        ],
        "ingameName": "Perish Song",
        "effect": "EFFECT_PERISH_SONG",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "flags": [
            "",
            "Hardcore Banned Moves",
            "Raid Battle Banned Moves",
            "Punk Rock Affected Moves",
            "Moves With Quiet B G M"
        ],
        "maxPower": ""
    },
    "MOVE_ICYWIND": {
        "name": "MOVE_ICYWIND",
        "changes": [],
        "description": [
            "A chilling wind is used to attack. It also lowers the Speed stat.\r"
        ],
        "ingameName": "Icy Wind",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "55",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Wind Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_DETECT": {
        "name": "MOVE_DETECT",
        "changes": [],
        "description": [
            "Enables the user to evade all attacks. It may fail if used in succession."
        ],
        "ingameName": "Detect",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "4",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_EVSN_UP_1",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Raid Battle Banned Raid Mon Moves",
            "Prio Plus 4"
        ],
        "maxPower": ""
    },
    "MOVE_BONERUSH": {
        "name": "MOVE_BONERUSH",
        "changes": [],
        "description": [
            "The user strikes the foe with a bone in hand two to five times."
        ],
        "ingameName": "Bone Rush",
        "effect": "EFFECT_MULTI_HIT",
        "power": "25",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Bone Moves",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_LOCKON": {
        "name": "MOVE_LOCKON",
        "changes": [],
        "description": [
            "The user locks on to the foe, making the next move sure to hit."
        ],
        "ingameName": "Lock-On",
        "effect": "EFFECT_LOCK_ON",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_OUTRAGE": {
        "name": "MOVE_OUTRAGE",
        "changes": [],
        "description": [
            "The user thrashes about for two to three turns, then becomes confused."
        ],
        "ingameName": "Outrage",
        "effect": "EFFECT_RAMPAGE",
        "power": "120",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_RANDOM",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_SANDSTORM": {
        "name": "MOVE_SANDSTORM",
        "changes": [],
        "description": [
            "A 5-turn sandstorm that damages all types except Rock, Ground, and Steel."
        ],
        "ingameName": "Sandstorm",
        "effect": "EFFECT_SANDSTORM",
        "power": "0",
        "type": "TYPE_ROCK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "flags": [
            "",
            "Hardcore Banned Moves",
            "Wind Moves"
        ],
        "maxPower": ""
    },
    "MOVE_GIGADRAIN": {
        "name": "MOVE_GIGADRAIN",
        "changes": [],
        "description": [
            "A harsh attack that absorbs half the damage it inflicted to restore HP."
        ],
        "ingameName": "Giga Drain",
        "effect": "EFFECT_ABSORB",
        "power": "75",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Triage Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ENDURE": {
        "name": "MOVE_ENDURE",
        "changes": [],
        "description": [
            "The user endures any hit with 1 HP left. It may fail if used in succession."
        ],
        "ingameName": "Endure",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "4",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Prio Plus 4"
        ],
        "maxPower": ""
    },
    "MOVE_CHARM": {
        "name": "MOVE_CHARM",
        "changes": [],
        "description": [
            "The foe is charmed by the user's cute appeals, sharply cutting its Attack."
        ],
        "ingameName": "Charm",
        "effect": "EFFECT_ATTACK_DOWN_2",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_ROLLOUT": {
        "name": "MOVE_ROLLOUT",
        "changes": [],
        "description": [
            "A 5-turn rolling attack that becomes stronger each time it hits."
        ],
        "ingameName": "Rollout",
        "effect": "EFFECT_ROLLOUT",
        "power": "30",
        "type": "TYPE_ROCK",
        "accuracy": "90",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Parental Bond Banned Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_FALSESWIPE": {
        "name": "MOVE_FALSESWIPE",
        "changes": [],
        "description": [
            "A restrained attack that always leaves the foe with at least 1 HP."
        ],
        "ingameName": "False Swipe",
        "effect": "EFFECT_FALSE_SWIPE",
        "power": "40",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_SWAGGER": {
        "name": "MOVE_SWAGGER",
        "changes": [],
        "description": [
            "A move that makes the foe confused, but also sharply raises its Attack."
        ],
        "ingameName": "Swagger",
        "effect": "EFFECT_SWAGGER",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "90",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_MILKDRINK": {
        "name": "MOVE_MILKDRINK",
        "changes": [],
        "description": [
            "Heals the user by up to half its full HP. It can be used to heal an ally."
        ],
        "ingameName": "Milk Drink",
        "effect": "EFFECT_RESTORE_HP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_SPARK": {
        "name": "MOVE_SPARK",
        "changes": [],
        "description": [
            "An electrically charged tackle that may also paralyze the foe."
        ],
        "ingameName": "Spark",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "65",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "20",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_FURYCUTTER": {
        "name": "MOVE_FURYCUTTER",
        "changes": [],
        "description": [
            "An attack that grows stronger on each successive hit."
        ],
        "ingameName": "Fury Cutter",
        "effect": "EFFECT_FURY_CUTTER",
        "power": "40",
        "type": "TYPE_BUG",
        "accuracy": "95",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_STEELWING": {
        "name": "MOVE_STEELWING",
        "changes": [],
        "description": [
            "The foe is hit with wings of steel. It may also raise the user's Defense."
        ],
        "ingameName": "Steel Wing",
        "effect": "EFFECT_DEFENSE_UP_HIT",
        "power": "70",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "25",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_MEANLOOK": {
        "name": "MOVE_MEANLOOK",
        "changes": [],
        "description": [
            "The foe is fixed with a mean look that prevents it from escaping."
        ],
        "ingameName": "Mean Look",
        "effect": "EFFECT_MEAN_LOOK",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_ATTRACT": {
        "name": "MOVE_ATTRACT",
        "changes": [],
        "description": [
            "If it is the other gender, the foe is made infatuated and unlikely to attack."
        ],
        "ingameName": "Attract",
        "effect": "EFFECT_ATTRACT",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves",
            "Aroma Veil Protected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_SLEEPTALK": {
        "name": "MOVE_SLEEPTALK",
        "changes": [],
        "description": [
            "While asleep, the user randomly uses one of the moves it knows."
        ],
        "ingameName": "Sleep Talk",
        "effect": "EFFECT_SLEEP_TALK",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_DEPENDS",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_BOOST_CRITS",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Moves That Call Other Moves"
        ],
        "maxPower": ""
    },
    "MOVE_HEALBELL": {
        "name": "MOVE_HEALBELL",
        "changes": [],
        "description": [
            "A soothing bell chimes to heal the status problems of all allies."
        ],
        "ingameName": "Heal Bell",
        "effect": "EFFECT_HEAL_BELL",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RECOVER_HP",
        "maxPower": ""
    },
    "MOVE_RETURN": {
        "name": "MOVE_RETURN",
        "changes": [],
        "description": [
            "This attack move grows more powerful the more the user likes its Trainer."
        ],
        "ingameName": "Return",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_PRESENT": {
        "name": "MOVE_PRESENT",
        "changes": [],
        "description": [
            "The foe is given a booby-trapped gift. It restores HP sometimes, however."
        ],
        "ingameName": "Present",
        "effect": "EFFECT_PRESENT",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "90",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_FRUSTRATION": {
        "name": "MOVE_FRUSTRATION",
        "changes": [],
        "description": [
            "This attack move grows more powerful the less the user likes its Trainer."
        ],
        "ingameName": "Frustration",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SAFEGUARD": {
        "name": "MOVE_SAFEGUARD",
        "changes": [],
        "description": [
            "It protects the user's party from all status problems for five turns."
        ],
        "ingameName": "Safeguard",
        "effect": "EFFECT_SAFEGUARD",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "25",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_PAINSPLIT": {
        "name": "MOVE_PAINSPLIT",
        "changes": [],
        "description": [
            "The user adds its HP to the foe's HP, then equally shares the total HP."
        ],
        "ingameName": "Pain Split",
        "effect": "EFFECT_PAIN_SPLIT",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Raid Battle Banned Raid Mon Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_SACREDFIRE": {
        "name": "MOVE_SACREDFIRE",
        "changes": [],
        "description": [
            "A mystical and powerful fire attack that may inflict a burn."
        ],
        "ingameName": "Sacred Fire",
        "effect": "EFFECT_BURN_HIT",
        "power": "100",
        "type": "TYPE_FIRE",
        "accuracy": "95",
        "PP": "5",
        "chance": "50",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Moves Can Unfreeze Attacker"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_MAGNITUDE": {
        "name": "MOVE_MAGNITUDE",
        "changes": [],
        "description": [
            "A ground-shaking attack against all standing Pokémon. Its power varies."
        ],
        "ingameName": "Magnitude",
        "effect": "EFFECT_MAGNITUDE",
        "power": "1",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Ignore Undergound Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_DYNAMICPUNCH": {
        "name": "MOVE_DYNAMICPUNCH",
        "changes": [],
        "description": [
            "The foe is punched with the user's full power. It confuses the foe if it hits."
        ],
        "ingameName": "Dynamic Punch",
        "effect": "EFFECT_CONFUSE_HIT",
        "power": "100",
        "type": "TYPE_FIGHTING",
        "accuracy": "50",
        "PP": "5",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_MEGAHORN": {
        "name": "MOVE_MEGAHORN",
        "changes": [],
        "description": [
            "A brutal ramming attack delivered with a tough and impressive horn."
        ],
        "ingameName": "Megahorn",
        "effect": "EFFECT_HIT",
        "power": "120",
        "type": "TYPE_BUG",
        "accuracy": "85",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_DRAGONBREATH": {
        "name": "MOVE_DRAGONBREATH",
        "changes": [],
        "description": [
            "The foe is hit with an incredible blast of breath that may also paralyze."
        ],
        "ingameName": "Dragon Breath",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "60",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "20",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_BATONPASS": {
        "name": "MOVE_BATONPASS",
        "changes": [],
        "description": [
            "The user switches out, passing along any stat changes to the new battler."
        ],
        "ingameName": "Baton Pass",
        "effect": "EFFECT_BATON_PASS",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "flags": [
            "",
            "Metronome Banned Moves",
            "Randomizer Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_ENCORE": {
        "name": "MOVE_ENCORE",
        "changes": [],
        "description": [
            "Makes the foe use the move it last used repeatedly for two to six turns."
        ],
        "ingameName": "Encore",
        "effect": "EFFECT_ENCORE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves",
            "Aroma Veil Protected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_PURSUIT": {
        "name": "MOVE_PURSUIT",
        "changes": [],
        "description": [
            "An attack move that works especially well on a foe that is switching out."
        ],
        "ingameName": "Pursuit",
        "effect": "EFFECT_PURSUIT",
        "power": "40",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_RAPIDSPIN": {
        "name": "MOVE_RAPIDSPIN",
        "changes": [],
        "description": [
            "An attack that frees the user from Bind, Wrap, Leech Seed, and Spikes."
        ],
        "ingameName": "Rapid Spin",
        "effect": "EFFECT_RAPID_SPIN",
        "power": "50",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_SWEETSCENT": {
        "name": "MOVE_SWEETSCENT",
        "changes": [],
        "description": [
            "Allures the foe to reduce evasiveness. It also attracts wild Pokémon."
        ],
        "ingameName": "Sweet Scent",
        "effect": "EFFECT_EVASION_DOWN_2",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ACC_UP_1",
        "maxPower": ""
    },
    "MOVE_IRONTAIL": {
        "name": "MOVE_IRONTAIL",
        "changes": [],
        "description": [
            "An attack with a steel-hard tail. It may lower the foe's Defense stat."
        ],
        "ingameName": "Iron Tail",
        "effect": "EFFECT_DEFENSE_DOWN_HIT",
        "power": "100",
        "type": "TYPE_STEEL",
        "accuracy": "75",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_METALCLAW": {
        "name": "MOVE_METALCLAW",
        "changes": [],
        "description": [
            "The foe is attacked with steel claws. It may also raise the user's Attack."
        ],
        "ingameName": "Metal Claw",
        "effect": "EFFECT_ATTACK_UP_HIT",
        "power": "50",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "35",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_VITALTHROW": {
        "name": "MOVE_VITALTHROW",
        "changes": [],
        "description": [
            "Makes the user attack after the foe. In return, it will not miss."
        ],
        "ingameName": "Vital Throw",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "70",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "-1",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Prio Minus 1"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "85",
        "Zeffect": ""
    },
    "MOVE_MORNINGSUN": {
        "name": "MOVE_MORNINGSUN",
        "changes": [],
        "description": [
            "Restores the user's HP. The amount of HP regained varies with the weather."
        ],
        "ingameName": "Morning Sun",
        "effect": "EFFECT_MORNING_SUN",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_SYNTHESIS": {
        "name": "MOVE_SYNTHESIS",
        "changes": [],
        "description": [
            "Restores the user's HP. The amount of HP regained varies with the weather."
        ],
        "ingameName": "Synthesis",
        "effect": "EFFECT_MORNING_SUN",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_MOONLIGHT": {
        "name": "MOVE_MOONLIGHT",
        "changes": [],
        "description": [
            "Restores the user's HP. The amount of HP regained varies with the weather."
        ],
        "ingameName": "Moonlight",
        "effect": "EFFECT_MORNING_SUN",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_HIDDENPOWER": {
        "name": "MOVE_HIDDENPOWER",
        "changes": [],
        "description": [
            "An attack that varies in type and intensity depending on the user."
        ],
        "ingameName": "Hidden Power",
        "effect": "EFFECT_HIT",
        "power": "60",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Type Change Exception Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_CROSSCHOP": {
        "name": "MOVE_CROSSCHOP",
        "changes": [],
        "description": [
            "The foe is hit with double chops. It has a high critical-hit ratio."
        ],
        "ingameName": "Cross Chop",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "100",
        "type": "TYPE_FIGHTING",
        "accuracy": "80",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "High Critical Chance Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_TWISTER": {
        "name": "MOVE_TWISTER",
        "changes": [],
        "description": [
            "A vicious twister attacks the foe. It may make the foe flinch."
        ],
        "ingameName": "Twister",
        "effect": "EFFECT_TWISTER",
        "power": "40",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "20",
        "chance": "20",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Wind Moves",
            "Flinch Chance Moves",
            "Ignore In Air Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_RAINDANCE": {
        "name": "MOVE_RAINDANCE",
        "changes": [],
        "description": [
            "A heavy rain falls for five turns, powering up Water- type moves."
        ],
        "ingameName": "Rain Dance",
        "effect": "EFFECT_RAIN_DANCE",
        "power": "0",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "flags": [
            "",
            "Hardcore Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_SUNNYDAY": {
        "name": "MOVE_SUNNYDAY",
        "changes": [],
        "description": [
            "The sun blazes for five turns, powering up Fire-type moves."
        ],
        "ingameName": "Sunny Day",
        "effect": "EFFECT_SUNNY_DAY",
        "power": "0",
        "type": "TYPE_FIRE",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "flags": [
            "",
            "Hardcore Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_CRUNCH": {
        "name": "MOVE_CRUNCH",
        "changes": [],
        "description": [
            "The foe is crunched with sharp fangs. It may lower the foe's Sp. Def."
        ],
        "ingameName": "Crunch",
        "effect": "EFFECT_DEFENSE_DOWN_HIT",
        "power": "80",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "15",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Strong Jaw Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_MIRRORCOAT": {
        "name": "MOVE_MIRRORCOAT",
        "changes": [],
        "description": [
            "A retaliation move that pays back the foe's special attack double."
        ],
        "ingameName": "Mirror Coat",
        "effect": "EFFECT_MIRROR_COAT",
        "power": "1",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_DEPENDS",
        "priority": "-5",
        "flags": [
            "Protect Affected",
            "Me First Banned Moves",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Prio Minus 5"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_PSYCHUP": {
        "name": "MOVE_PSYCHUP",
        "changes": [],
        "description": [
            "The user hypnotizes itself into copying any stat change made by the foe."
        ],
        "ingameName": "Psych Up",
        "effect": "EFFECT_PSYCH_UP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RECOVER_HP",
        "flags": [
            "",
            "Hardcore Banned Moves",
            "Substitute Bypass Moves"
        ],
        "maxPower": ""
    },
    "MOVE_EXTREMESPEED": {
        "name": "MOVE_EXTREMESPEED",
        "changes": [],
        "description": [
            "A blindingly speedy charge attack that always goes before any other."
        ],
        "ingameName": "Extreme Speed",
        "effect": "EFFECT_QUICK_ATTACK",
        "power": "80",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "2",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Prio Plus 2"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ANCIENTPOWER": {
        "name": "MOVE_ANCIENTPOWER",
        "changes": [],
        "description": [
            "An ancient power is used to attack. It may also raise all the user's stats."
        ],
        "ingameName": "Ancient Power",
        "effect": "EFFECT_ALL_STATS_UP_HIT",
        "power": "60",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "5",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_SHADOWBALL": {
        "name": "MOVE_SHADOWBALL",
        "changes": [],
        "description": [
            "A shadowy blob is hurled at the foe. May also lower the foe's Sp. Def."
        ],
        "ingameName": "Shadow Ball",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "80",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "15",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FUTURESIGHT": {
        "name": "MOVE_FUTURESIGHT",
        "changes": [],
        "description": [
            "Two turns after this move is used, the foe is attacked psychically."
        ],
        "ingameName": "Future Sight",
        "effect": "EFFECT_FUTURE_SIGHT",
        "power": "120",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "flags": [
            ""
        ],
        "Zeffect": ""
    },
    "MOVE_ROCKSMASH": {
        "name": "MOVE_ROCKSMASH",
        "changes": [],
        "description": [
            "An attack that may also cut Defense. It can also smash cracked boulders."
        ],
        "ingameName": "Rock Smash",
        "effect": "EFFECT_DEFENSE_DOWN_HIT",
        "power": "60",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "15",
        "chance": "50",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "70",
        "Zeffect": ""
    },
    "MOVE_WHIRLPOOL": {
        "name": "MOVE_WHIRLPOOL",
        "changes": [],
        "description": [
            "The foe is trapped in a fast, vicious whirlpool for two to five turns."
        ],
        "ingameName": "Whirlpool",
        "effect": "EFFECT_TRAP",
        "power": "35",
        "type": "TYPE_WATER",
        "accuracy": "85",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Ignore Underwater Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_BEATUP": {
        "name": "MOVE_BEATUP",
        "changes": [],
        "description": [
            "The use attacks by bullying the target. It hits two to five times in a row.\r"
        ],
        "ingameName": "Beat Up",
        "effect": "EFFECT_MULTI_HIT",
        "power": "25",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_FAKEOUT": {
        "name": "MOVE_FAKEOUT",
        "changes": [],
        "description": [
            "An attack that hits first and causes flinching. Usable only on 1st turn."
        ],
        "ingameName": "Fake Out",
        "effect": "EFFECT_FAKE_OUT",
        "power": "40",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "3",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves",
            "Prio Plus 3"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_UPROAR": {
        "name": "MOVE_UPROAR",
        "changes": [],
        "description": [
            "The user attacks in an uproar that prevents sleep for two to five turns."
        ],
        "ingameName": "Uproar",
        "effect": "EFFECT_UPROAR",
        "power": "90",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_RANDOM",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sleep Talk Banned Moves",
            "Parental Bond Banned Moves",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_STOCKPILE": {
        "name": "MOVE_STOCKPILE",
        "changes": [],
        "description": [
            "The user charges up power for use later. It can be used three times."
        ],
        "ingameName": "Stockpile",
        "effect": "EFFECT_STOCKPILE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RECOVER_HP",
        "maxPower": ""
    },
    "MOVE_SPITUP": {
        "name": "MOVE_SPITUP",
        "changes": [],
        "description": [
            "The power built using Stockpile is released at once for attack."
        ],
        "ingameName": "Spit Up",
        "effect": "EFFECT_SPIT_UP",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_SWALLOW": {
        "name": "MOVE_SWALLOW",
        "changes": [],
        "description": [
            "The energy it built using Stockpile is absorbed to restore HP."
        ],
        "ingameName": "Swallow",
        "effect": "EFFECT_SWALLOW",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_HEATWAVE": {
        "name": "MOVE_HEATWAVE",
        "changes": [
            [
                "power",
                "100"
            ]
        ],
        "description": [
            "The user exhales a heated breath to attack. It may also inflict a burn."
        ],
        "ingameName": "Heat Wave",
        "effect": "EFFECT_BURN_HIT",
        "power": "95",
        "type": "TYPE_FIRE",
        "accuracy": "90",
        "PP": "10",
        "chance": "10",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Wind Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_HAIL": {
        "name": "MOVE_HAIL",
        "changes": [],
        "description": [
            "A 5-turn snowstorm that boosts the Def of Ice-types.\r"
        ],
        "ingameName": "Hail",
        "effect": "EFFECT_HAIL",
        "power": "0",
        "type": "TYPE_ICE",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "flags": [
            "",
            "Hardcore Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_TORMENT": {
        "name": "MOVE_TORMENT",
        "changes": [],
        "description": [
            "It enrages the foe, making it incapable of using the same move successively."
        ],
        "ingameName": "Torment",
        "effect": "EFFECT_TORMENT",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves",
            "Aroma Veil Protected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_FLATTER": {
        "name": "MOVE_FLATTER",
        "changes": [],
        "description": [
            "Flattery is used to confuse the foe, but its Sp. Atk also rises."
        ],
        "ingameName": "Flatter",
        "effect": "EFFECT_FLATTER",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_WILLOWISP": {
        "name": "MOVE_WILLOWISP",
        "changes": [],
        "description": [
            "A sinister, bluish white flame is shot to inflict a burn. Can't miss if the user is Fire-type.\r"
        ],
        "ingameName": "Will-O-Wisp",
        "effect": "EFFECT_WILL_O_WISP",
        "power": "0",
        "type": "TYPE_FIRE",
        "accuracy": "85",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_MEMENTO": {
        "name": "MOVE_MEMENTO",
        "changes": [],
        "description": [
            "The user faints, but sharply lowers the foe's Attack and Sp. Atk."
        ],
        "ingameName": "Memento",
        "effect": "EFFECT_MEMENTO",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Raid Battle Banned Raid Mon Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESTORE_REPLACEMENT_HP",
        "maxPower": ""
    },
    "MOVE_FACADE": {
        "name": "MOVE_FACADE",
        "changes": [],
        "description": [
            "An attack that is boosted if user is burned, poisoned, or paralyzed."
        ],
        "ingameName": "Facade",
        "effect": "EFFECT_HIT",
        "power": "70",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_FOCUSPUNCH": {
        "name": "MOVE_FOCUSPUNCH",
        "changes": [],
        "description": [
            "An attack that is executed last. The user flinches if hit beforehand."
        ],
        "ingameName": "Focus Punch",
        "effect": "EFFECT_FOCUS_PUNCH",
        "power": "150",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "-3",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Me First Banned Moves",
            "Copycat Banned Moves",
            "Instruct Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Raid Battle Banned Raid Mon Moves",
            "Iron Fist Affected Moves",
            "Prio Minus 3"
        ],
        "Zpower": "200",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_SMELLINGSALTS": {
        "name": "MOVE_SMELLINGSALTS",
        "changes": [],
        "description": [],
        "ingameName": "Smelling Salts",
        "effect": "EFFECT_SMELLINGSALT",
        "power": "70",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_FOLLOWME": {
        "name": "MOVE_FOLLOWME",
        "changes": [],
        "description": [
            "The user draws attention to itself, making foes attack only the user."
        ],
        "ingameName": "Follow Me",
        "effect": "EFFECT_FOLLOW_ME",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "2",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Prio Plus 2"
        ],
        "maxPower": ""
    },
    "MOVE_NATUREPOWER": {
        "name": "MOVE_NATUREPOWER",
        "changes": [],
        "description": [
            "An attack that changes type depending on the user's location."
        ],
        "ingameName": "Nature Power",
        "effect": "EFFECT_NATURE_POWER",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "flags": [
            "",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Moves That Call Other Moves"
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_CHARGE": {
        "name": "MOVE_CHARGE",
        "changes": [],
        "description": [
            "The user charges power to boost the Electric move it uses next."
        ],
        "ingameName": "Charge",
        "effect": "EFFECT_CHARGE",
        "power": "0",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_TAUNT": {
        "name": "MOVE_TAUNT",
        "changes": [],
        "description": [
            "The foe is taunted into a rage that allows it to use only attack moves."
        ],
        "ingameName": "Taunt",
        "effect": "EFFECT_TAUNT",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves",
            "Substitute Bypass Moves",
            "Aroma Veil Protected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_HELPINGHAND": {
        "name": "MOVE_HELPINGHAND",
        "changes": [],
        "description": [
            "A move that boosts the power of the ally's attack in a battle."
        ],
        "ingameName": "Helping Hand",
        "effect": "EFFECT_HELPING_HAND",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "5",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Substitute Bypass Moves",
            "Prio Plus 5"
        ],
        "maxPower": ""
    },
    "MOVE_TRICK": {
        "name": "MOVE_TRICK",
        "changes": [],
        "description": [
            "A move that tricks the foe into trading held items with the user."
        ],
        "ingameName": "Trick",
        "effect": "EFFECT_TRICK",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_2",
        "maxPower": ""
    },
    "MOVE_ROLEPLAY": {
        "name": "MOVE_ROLEPLAY",
        "changes": [],
        "description": [
            "The user mimics the foe completely and copies the foe's ability."
        ],
        "ingameName": "Role Play",
        "effect": "EFFECT_ROLE_PLAY",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "flags": [
            "",
            "Substitute Bypass Moves"
        ],
        "maxPower": ""
    },
    "MOVE_WISH": {
        "name": "MOVE_WISH",
        "changes": [],
        "description": [
            "A self-healing move that restores half the full HP on the next turn."
        ],
        "ingameName": "Wish",
        "effect": "EFFECT_WISH",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_ASSIST": {
        "name": "MOVE_ASSIST",
        "changes": [],
        "description": [
            "The user randomly picks and uses a move of an allied Pokémon."
        ],
        "ingameName": "Assist",
        "effect": "EFFECT_ASSIST",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_DEPENDS",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Moves That Call Other Moves"
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_INGRAIN": {
        "name": "MOVE_INGRAIN",
        "changes": [],
        "description": [
            "The user lays roots that restore HP on every turn. It can't switch out."
        ],
        "ingameName": "Ingrain",
        "effect": "EFFECT_INGRAIN",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Sky Battle Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_SUPERPOWER": {
        "name": "MOVE_SUPERPOWER",
        "changes": [],
        "description": [
            "A powerful attack, but it also lowers the user's Attack and Defense stats."
        ],
        "ingameName": "Superpower",
        "effect": "EFFECT_SUPERPOWER",
        "power": "120",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "95",
        "Zeffect": ""
    },
    "MOVE_MAGICCOAT": {
        "name": "MOVE_MAGICCOAT",
        "changes": [],
        "description": [
            "Reflects back the foe's Leech Seed and any status- damaging move."
        ],
        "ingameName": "Magic Coat",
        "effect": "EFFECT_MAGIC_COAT",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_DEPENDS",
        "priority": "4",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_2",
        "flags": [
            "",
            "Hardcore Banned Moves",
            "Prio Plus 4"
        ],
        "maxPower": ""
    },
    "MOVE_RECYCLE": {
        "name": "MOVE_RECYCLE",
        "changes": [],
        "description": [
            "A move that recycles a used item for use once more."
        ],
        "ingameName": "Recycle",
        "effect": "EFFECT_RECYCLE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_2",
        "maxPower": ""
    },
    "MOVE_REVENGE": {
        "name": "MOVE_REVENGE",
        "changes": [],
        "description": [
            "An attack move that gains in intensity if the target has hurt the user."
        ],
        "ingameName": "Revenge",
        "effect": "EFFECT_HIT",
        "power": "60",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "-4",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Prio Minus 4"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "80",
        "Zeffect": ""
    },
    "MOVE_BRICKBREAK": {
        "name": "MOVE_BRICKBREAK",
        "changes": [],
        "description": [
            "An attack that also breaks any barrier like Light Screen and Reflect."
        ],
        "ingameName": "Brick Break",
        "effect": "EFFECT_BRICK_BREAK",
        "power": "75",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_YAWN": {
        "name": "MOVE_YAWN",
        "changes": [],
        "description": [
            "A huge yawn lulls the foe into falling asleep on the next turn."
        ],
        "ingameName": "Yawn",
        "effect": "EFFECT_YAWN",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_KNOCKOFF": {
        "name": "MOVE_KNOCKOFF",
        "changes": [],
        "description": [
            "Knocks down the foe's held item to prevent its use during the battle."
        ],
        "ingameName": "Knock Off",
        "effect": "EFFECT_KNOCK_OFF",
        "power": "65",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Raid Battle Banned Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_ENDEAVOR": {
        "name": "MOVE_ENDEAVOR",
        "changes": [],
        "description": [
            "Gains power the fewer HP the user has compared with the foe."
        ],
        "ingameName": "Endeavor",
        "effect": "EFFECT_ENDEAVOR",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Parental Bond Banned Moves",
            "Raid Battle Banned Raid Mon Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ERUPTION": {
        "name": "MOVE_ERUPTION",
        "changes": [],
        "description": [
            "The higher the user's HP, the more powerful this attack becomes."
        ],
        "ingameName": "Eruption",
        "effect": "EFFECT_HIT",
        "power": "150",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_SKILLSWAP": {
        "name": "MOVE_SKILLSWAP",
        "changes": [],
        "description": [
            "The user employs its psychic power to swap abilities with the foe."
        ],
        "ingameName": "Skill Swap",
        "effect": "EFFECT_SKILL_SWAP",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_IMPRISON": {
        "name": "MOVE_IMPRISON",
        "changes": [],
        "description": [
            "Prevents foes from using any move that is also known by the user."
        ],
        "ingameName": "Imprison",
        "effect": "EFFECT_IMPRISON",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_2",
        "maxPower": ""
    },
    "MOVE_REFRESH": {
        "name": "MOVE_REFRESH",
        "changes": [],
        "description": [
            "A self-healing move that cures the user of a poisoning, burn, or paralysis."
        ],
        "ingameName": "Refresh",
        "effect": "EFFECT_REFRESH",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RECOVER_HP",
        "maxPower": ""
    },
    "MOVE_GRUDGE": {
        "name": "MOVE_GRUDGE",
        "changes": [],
        "description": [
            "If the user faints, this move deletes the PP of the move that finished it."
        ],
        "ingameName": "Grudge",
        "effect": "EFFECT_GRUDGE",
        "power": "0",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_FOLLOW_ME",
        "flags": [
            "",
            "Substitute Bypass Moves"
        ],
        "maxPower": ""
    },
    "MOVE_SNATCH": {
        "name": "MOVE_SNATCH",
        "changes": [],
        "description": [
            "Steals the effects of the foe's healing or status- changing move."
        ],
        "ingameName": "Snatch",
        "effect": "EFFECT_SNATCH",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_DEPENDS",
        "priority": "4",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_2",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Hardcore Banned Moves",
            "Assist Banned Moves",
            "Substitute Bypass Moves",
            "Prio Plus 4"
        ],
        "maxPower": ""
    },
    "MOVE_SECRETPOWER": {
        "name": "MOVE_SECRETPOWER",
        "changes": [],
        "description": [
            "An attack that may have an additional effect that varies with the terrain."
        ],
        "ingameName": "Secret Power",
        "effect": "EFFECT_SECRET_POWER",
        "power": "70",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_DIVE": {
        "name": "MOVE_DIVE",
        "changes": [],
        "description": [
            "The user dives underwater on the first turn and strikes next turn."
        ],
        "ingameName": "Dive",
        "effect": "EFFECT_SEMI_INVULNERABLE",
        "power": "80",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Instruct Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Sky Battle Banned Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ARMTHRUST": {
        "name": "MOVE_ARMTHRUST",
        "changes": [],
        "description": [
            "A quick flurry of straight-arm punches that hit two to five times."
        ],
        "ingameName": "Arm Thrust",
        "effect": "EFFECT_MULTI_HIT",
        "power": "25",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "70",
        "Zeffect": ""
    },
    "MOVE_CAMOUFLAGE": {
        "name": "MOVE_CAMOUFLAGE",
        "changes": [],
        "description": [
            "Alters the user's type depending on the location's terrain."
        ],
        "ingameName": "Camouflage",
        "effect": "EFFECT_CAMOUFLAGE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_EVSN_UP_1",
        "maxPower": ""
    },
    "MOVE_TAILGLOW": {
        "name": "MOVE_TAILGLOW",
        "changes": [],
        "description": [
            "The user flashes a light that sharply raises its Sp. Atk stat."
        ],
        "ingameName": "Tail Glow",
        "effect": "EFFECT_SPECIAL_ATTACK_UP_2",
        "power": "0",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Forbidden Spell Moves",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_LUSTERPURGE": {
        "name": "MOVE_LUSTERPURGE",
        "changes": [],
        "description": [
            "A burst of light injures the foe. It may also lower the foe's Sp. Def."
        ],
        "ingameName": "Luster Purge",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "85",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "50",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_MISTBALL": {
        "name": "MOVE_MISTBALL",
        "changes": [],
        "description": [
            "A flurry of down hits the foe. It may also lower the foe's Sp. Atk."
        ],
        "ingameName": "Mist Ball",
        "effect": "EFFECT_SPECIAL_ATTACK_DOWN_HIT",
        "power": "85",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "50",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FEATHERDANCE": {
        "name": "MOVE_FEATHERDANCE",
        "changes": [],
        "description": [
            "The foe is covered with a mass of down that sharply cuts the Attack stat."
        ],
        "ingameName": "Feather Dance",
        "effect": "EFFECT_ATTACK_DOWN_2",
        "power": "0",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Dance Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_TEETERDANCE": {
        "name": "MOVE_TEETERDANCE",
        "changes": [],
        "description": [
            "A wobbly dance that confuses all the Pokémon in battle."
        ],
        "ingameName": "Teeter Dance",
        "effect": "EFFECT_CONFUSE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Dance Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_BLAZEKICK": {
        "name": "MOVE_BLAZEKICK",
        "changes": [],
        "description": [
            "A fiery kick with a high critical-hit ratio. It may also burn the foe."
        ],
        "ingameName": "Blaze Kick",
        "effect": "EFFECT_BURN_HIT",
        "power": "85",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "10",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Striker Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_MUDSPORT": {
        "name": "MOVE_MUDSPORT",
        "changes": [],
        "description": [
            "Weakens Electric- type attacks while the user is in the battle."
        ],
        "ingameName": "Mud Sport",
        "effect": "EFFECT_MUD_SPORT",
        "power": "0",
        "type": "TYPE_GROUND",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "flags": [
            "",
            "Sky Battle Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_ICEBALL": {
        "name": "MOVE_ICEBALL",
        "changes": [],
        "description": [
            "A 5-turn rolling attack that becomes stronger each time it rolls."
        ],
        "ingameName": "Ice Ball",
        "effect": "EFFECT_ROLLOUT",
        "power": "30",
        "type": "TYPE_ICE",
        "accuracy": "90",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Parental Bond Banned Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_NEEDLEARM": {
        "name": "MOVE_NEEDLEARM",
        "changes": [],
        "description": [
            "An attack using thorny arms. It may make the foe flinch."
        ],
        "ingameName": "Needle Arm",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "95",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_SLACKOFF": {
        "name": "MOVE_SLACKOFF",
        "changes": [],
        "description": [
            "The user slacks off and restores its HP by half its full HP."
        ],
        "ingameName": "Slack Off",
        "effect": "EFFECT_RESTORE_HP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_HYPERVOICE": {
        "name": "MOVE_HYPERVOICE",
        "changes": [],
        "description": [
            "The user lets loose a horribly loud shout with the power to damage."
        ],
        "ingameName": "Hyper Voice",
        "effect": "EFFECT_HIT",
        "power": "90",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_POISONFANG": {
        "name": "MOVE_POISONFANG",
        "changes": [],
        "description": [
            "The foe is bitten with toxic fangs. It may also badly poison the foe."
        ],
        "ingameName": "Poison Fang",
        "effect": "EFFECT_BAD_POISON_HIT",
        "power": "75",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "15",
        "chance": "50",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Strong Jaw Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_CRUSHCLAW": {
        "name": "MOVE_CRUSHCLAW",
        "changes": [],
        "description": [
            "The foe is attacked with sharp claws. It may also lower the foe's Defense."
        ],
        "ingameName": "Crush Claw",
        "effect": "EFFECT_DEFENSE_DOWN_HIT",
        "power": "75",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "50",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_BLASTBURN": {
        "name": "MOVE_BLASTBURN",
        "changes": [],
        "description": [
            "The foe is hit with an explosion that can burn. The user recharges unless it KOs the foe.\r"
        ],
        "ingameName": "Blast Burn",
        "effect": "EFFECT_RECHARGE",
        "power": "160",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "4",
        "chance": "60",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Moves That Require Recharging"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_HYDROCANNON": {
        "name": "MOVE_HYDROCANNON",
        "changes": [],
        "description": [
            "The foe is hit with a watery cannon that can frostbite. The user recharges unless it KOs the foe.\r"
        ],
        "ingameName": "Hydro Cannon",
        "effect": "EFFECT_RECHARGE",
        "power": "160",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "4",
        "chance": "60",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Moves That Require Recharging"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_METEORMASH": {
        "name": "MOVE_METEORMASH",
        "changes": [],
        "description": [
            "The foe is hit with a hard, fast punch. It may also raise the user's Attack."
        ],
        "ingameName": "Meteor Mash",
        "effect": "EFFECT_ATTACK_UP_HIT",
        "power": "90",
        "type": "TYPE_STEEL",
        "accuracy": "90",
        "PP": "10",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ASTONISH": {
        "name": "MOVE_ASTONISH",
        "changes": [],
        "description": [
            "An attack using a startling shout. It also may make the foe flinch."
        ],
        "ingameName": "Astonish",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "30",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_WEATHERBALL": {
        "name": "MOVE_WEATHERBALL",
        "changes": [],
        "description": [
            "An attack that varies in power and type depending on the weather."
        ],
        "ingameName": "Weather Ball",
        "effect": "EFFECT_HIT",
        "power": "50",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Ball Bomb Moves",
            "Type Change Exception Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_AROMATHERAPY": {
        "name": "MOVE_AROMATHERAPY",
        "changes": [],
        "description": [
            "A soothing scent is released to heal all status problems in the user's party."
        ],
        "ingameName": "Aromatherapy",
        "effect": "EFFECT_HEAL_BELL",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RECOVER_HP",
        "maxPower": ""
    },
    "MOVE_FAKETEARS": {
        "name": "MOVE_FAKETEARS",
        "changes": [],
        "description": [
            "The user feigns crying to sharply lower the foe's Sp. Def stat."
        ],
        "ingameName": "Fake Tears",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_2",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_AIRCUTTER": {
        "name": "MOVE_AIRCUTTER",
        "changes": [],
        "description": [
            "The foe is hit with razor-like wind. It has a high critical-hit ratio."
        ],
        "ingameName": "Air Cutter",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "60",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "25",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves",
            "Wind Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_OVERHEAT": {
        "name": "MOVE_OVERHEAT",
        "changes": [
            [
                "power",
                "140"
            ]
        ],
        "description": [
            "An intense attack that also sharply reduces the user's Sp. Atk stat."
        ],
        "ingameName": "Overheat",
        "effect": "EFFECT_OVERHEAT",
        "power": "130",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "5",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_ODORSLEUTH": {
        "name": "MOVE_ODORSLEUTH",
        "changes": [],
        "description": [
            "Completely negates the foe's efforts to heighten its ability to evade."
        ],
        "ingameName": "Odor Sleuth",
        "effect": "EFFECT_FORESIGHT",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_ROCKTOMB": {
        "name": "MOVE_ROCKTOMB",
        "changes": [],
        "description": [
            "Boulders are hurled at the foe. It also lowers the foe's Speed if it hits."
        ],
        "ingameName": "Rock Tomb",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "60",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_SILVERWIND": {
        "name": "MOVE_SILVERWIND",
        "changes": [],
        "description": [
            "The foe is attacked with a silver dust. It may raise all the user's stats."
        ],
        "ingameName": "Silver Wind",
        "effect": "EFFECT_ALL_STATS_UP_HIT",
        "power": "60",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "5",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_METALSOUND": {
        "name": "MOVE_METALSOUND",
        "changes": [],
        "description": [
            "A horrible metallic screech is used to sharply lower the foe's Sp. Def."
        ],
        "ingameName": "Metal Sound",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_2",
        "power": "0",
        "type": "TYPE_STEEL",
        "accuracy": "85",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_GRASSWHISTLE": {
        "name": "MOVE_GRASSWHISTLE",
        "changes": [],
        "description": [
            "A pleasant melody is played to lull the foe into a deep sleep."
        ],
        "ingameName": "Grass Whistle",
        "effect": "EFFECT_SLEEP",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "55",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves",
            "Moves With Quiet B G M"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_TICKLE": {
        "name": "MOVE_TICKLE",
        "changes": [],
        "description": [
            "The foe is made to laugh, reducing its Attack and Defense stats."
        ],
        "ingameName": "Tickle",
        "effect": "EFFECT_TICKLE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_COSMICPOWER": {
        "name": "MOVE_COSMICPOWER",
        "changes": [],
        "description": [
            "The user absorbs a mystic power to raise its Defense and Sp. Def."
        ],
        "ingameName": "Cosmic Power",
        "effect": "EFFECT_COSMIC_POWER",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_WATERSPOUT": {
        "name": "MOVE_WATERSPOUT",
        "changes": [],
        "description": [
            "The higher the user's HP, the more powerful this attack becomes."
        ],
        "ingameName": "Water Spout",
        "effect": "EFFECT_HIT",
        "power": "150",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_SIGNALBEAM": {
        "name": "MOVE_SIGNALBEAM",
        "changes": [],
        "description": [
            "The foe is hit with a flashing beam that may also cause confusion."
        ],
        "ingameName": "Signal Beam",
        "effect": "EFFECT_CONFUSE_HIT",
        "power": "75",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SHADOWPUNCH": {
        "name": "MOVE_SHADOWPUNCH",
        "changes": [],
        "description": [
            "The user throws a punch from the shadows. It cannot be evaded."
        ],
        "ingameName": "Shadow Punch",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "80",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_EXTRASENSORY": {
        "name": "MOVE_EXTRASENSORY",
        "changes": [],
        "description": [
            "The user attacks with an odd power that may make the foe flinch."
        ],
        "ingameName": "Extrasensory",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "80",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "20",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SKYUPPERCUT": {
        "name": "MOVE_SKYUPPERCUT",
        "changes": [],
        "description": [
            "The user attacks with an uppercut thrown skywards with force."
        ],
        "ingameName": "Sky Uppercut",
        "effect": "EFFECT_HIT",
        "power": "85",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Iron Fist Affected Moves",
            "Ignore In Air Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_SANDTOMB": {
        "name": "MOVE_SANDTOMB",
        "changes": [],
        "description": [
            "The foe is trapped inside a painful sandstorm for two to five turns."
        ],
        "ingameName": "Sand Tomb",
        "effect": "EFFECT_TRAP",
        "power": "35",
        "type": "TYPE_GROUND",
        "accuracy": "85",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_SHEERCOLD": {
        "name": "MOVE_SHEERCOLD",
        "changes": [],
        "description": [
            "The foe is attacked with ultimate cold that causes fainting if it hits."
        ],
        "ingameName": "Sheer Cold",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_ICE",
        "accuracy": "30",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Randomizer Banned Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_MUDDYWATER": {
        "name": "MOVE_MUDDYWATER",
        "changes": [],
        "description": [
            "Attacks with muddy water. \r"
        ],
        "ingameName": "Muddy Water",
        "effect": "EFFECT_ATTACK_DOWN_HIT",
        "power": "95",
        "type": "TYPE_WATER",
        "accuracy": "85",
        "PP": "10",
        "chance": "40",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_BULLETSEED": {
        "name": "MOVE_BULLETSEED",
        "changes": [],
        "description": [
            "The user shoots seeds at the foe. Two to five seeds are shot at once."
        ],
        "ingameName": "Bullet Seed",
        "effect": "EFFECT_MULTI_HIT",
        "power": "25",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Ball Bomb Moves",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_AERIALACE": {
        "name": "MOVE_AERIALACE",
        "changes": [],
        "description": [
            "An extremely fast attack against one target. It can't be evaded."
        ],
        "ingameName": "Aerial Ace",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "60",
        "type": "TYPE_FLYING",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_ICICLESPEAR": {
        "name": "MOVE_ICICLESPEAR",
        "changes": [],
        "description": [
            "Sharp icicles are fired at the foe. It strikes two to five times."
        ],
        "ingameName": "Icicle Spear",
        "effect": "EFFECT_MULTI_HIT",
        "power": "25",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_IRONDEFENSE": {
        "name": "MOVE_IRONDEFENSE",
        "changes": [],
        "description": [
            "The user hardens its body's surface to sharply raise its Defense stat."
        ],
        "ingameName": "Iron Defense",
        "effect": "EFFECT_DEFENSE_UP_2",
        "power": "0",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_BLOCK": {
        "name": "MOVE_BLOCK",
        "changes": [],
        "description": [
            "The user blocks the foe's way with arms spread wide to prevent escape."
        ],
        "ingameName": "Block",
        "effect": "EFFECT_MEAN_LOOK",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_HOWL": {
        "name": "MOVE_HOWL",
        "changes": [],
        "description": [
            "The user howls to raise its spirit and boost its Attack stat."
        ],
        "ingameName": "Howl",
        "effect": "EFFECT_ATTACK_UP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_DRAGONCLAW": {
        "name": "MOVE_DRAGONCLAW",
        "changes": [],
        "description": [
            "Sharp, huge claws hook and slash the foe quickly and with great power."
        ],
        "ingameName": "Dragon Claw",
        "effect": "EFFECT_HIT",
        "power": "80",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FRENZYPLANT": {
        "name": "MOVE_FRENZYPLANT",
        "changes": [],
        "description": [
            "The foe is hit with a giant branch that can badly poison. The user recharges unless it KOs.\r"
        ],
        "ingameName": "Frenzy Plant",
        "effect": "EFFECT_RECHARGE",
        "power": "160",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "4",
        "chance": "80",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Sheer Force Affected Moves",
            "Moves That Require Recharging"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_BULKUP": {
        "name": "MOVE_BULKUP",
        "changes": [],
        "description": [
            "The user bulks up its body to boost both its Attack and Defense stats."
        ],
        "ingameName": "Bulk Up",
        "effect": "EFFECT_BULK_UP",
        "power": "0",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_BOUNCE": {
        "name": "MOVE_BOUNCE",
        "changes": [],
        "description": [
            "The user bounces on the foe on the 2nd turn. It may paralyze the foe."
        ],
        "ingameName": "Bounce",
        "effect": "EFFECT_SEMI_INVULNERABLE",
        "power": "85",
        "type": "TYPE_FLYING",
        "accuracy": "85",
        "PP": "5",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Gravity Banned Moves",
            "Instruct Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_MUDSHOT": {
        "name": "MOVE_MUDSHOT",
        "changes": [],
        "description": [
            "The user attacks by hurling mud. It also reduces the foe's Speed."
        ],
        "ingameName": "Mud Shot",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "55",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_POISONTAIL": {
        "name": "MOVE_POISONTAIL",
        "changes": [],
        "description": [
            "An attack with a high critical-hit ratio. It may also poison the foe."
        ],
        "ingameName": "Poison Tail",
        "effect": "EFFECT_POISON_HIT",
        "power": "60",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "25",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "75",
        "Zeffect": ""
    },
    "MOVE_COVET": {
        "name": "MOVE_COVET",
        "changes": [],
        "description": [
            "A cutely executed attack that also steals the foe's hold item."
        ],
        "ingameName": "Covet",
        "effect": "EFFECT_THIEF",
        "power": "60",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "25",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Me First Banned Moves",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Raid Battle Banned Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_VOLTTACKLE": {
        "name": "MOVE_VOLTTACKLE",
        "changes": [],
        "description": [
            "The user throws an electrified tackle. It hurts the user a little."
        ],
        "ingameName": "Volt Tackle",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "120",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Reckless Boosted Moves",
            "Recoil Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_MAGICALLEAF": {
        "name": "MOVE_MAGICALLEAF",
        "changes": [],
        "description": [
            "The foe is attacked with a strange leaf that cannot be evaded."
        ],
        "ingameName": "Magical Leaf",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "60",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_WATERSPORT": {
        "name": "MOVE_WATERSPORT",
        "changes": [],
        "description": [
            "Weakens Fire-type attacks while the user is in the battle."
        ],
        "ingameName": "Water Sport",
        "effect": "EFFECT_WATER_SPORT",
        "power": "0",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "flags": [
            "",
            "Sky Battle Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_CALMMIND": {
        "name": "MOVE_CALMMIND",
        "changes": [],
        "description": [
            "The user focuses its mind to raise the Sp. Atk and Sp. Def stats."
        ],
        "ingameName": "Calm Mind",
        "effect": "EFFECT_CALM_MIND",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_LEAFBLADE": {
        "name": "MOVE_LEAFBLADE",
        "changes": [],
        "description": [
            "The foe is slashed with a sharp leaf. It has a high critical-hit ratio."
        ],
        "ingameName": "Leaf Blade",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "90",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_DRAGONDANCE": {
        "name": "MOVE_DRAGONDANCE",
        "changes": [],
        "description": [
            "A mystic, powerful dance that boosts the user's Attack and Speed stats."
        ],
        "ingameName": "Dragon Dance",
        "effect": "EFFECT_DRAGON_DANCE",
        "power": "0",
        "type": "TYPE_DRAGON",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves",
            "Dance Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_ROCKBLAST": {
        "name": "MOVE_ROCKBLAST",
        "changes": [],
        "description": [
            "The user hurls two to five hard rocks at the foe to attack."
        ],
        "ingameName": "Rock Blast",
        "effect": "EFFECT_MULTI_HIT",
        "power": "25",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Ball Bomb Moves",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SHOCKWAVE": {
        "name": "MOVE_SHOCKWAVE",
        "changes": [],
        "description": [
            "A rapid jolt of electricity strikes the foe. It can't be evaded."
        ],
        "ingameName": "Shock Wave",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "60",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_WATERPULSE": {
        "name": "MOVE_WATERPULSE",
        "changes": [],
        "description": [
            "An attack with a pulsing blast of water. It may also confuse the foe."
        ],
        "ingameName": "Water Pulse",
        "effect": "EFFECT_CONFUSE_HIT",
        "power": "60",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "20",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Mega Launcher Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_DOOMDESIRE": {
        "name": "MOVE_DOOMDESIRE",
        "changes": [],
        "description": [
            "A move that attacks the foe with a blast of light two turns after use."
        ],
        "ingameName": "Doom Desire",
        "effect": "EFFECT_FUTURE_SIGHT",
        "power": "140",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "flags": [
            ""
        ],
        "Zeffect": ""
    },
    "MOVE_PSYCHOBOOST": {
        "name": "MOVE_PSYCHOBOOST",
        "changes": [],
        "description": [
            "An intense attack that also sharply reduces the user's Sp. Atk stat."
        ],
        "ingameName": "Psycho Boost",
        "effect": "EFFECT_OVERHEAT",
        "power": "140",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "5",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_LEECHFANG": {
        "name": "MOVE_LEECHFANG",
        "changes": [],
        "description": [
            "An attack that absorbs half the damage it inflicted to restore HP.\r"
        ],
        "ingameName": "Leech Fang",
        "effect": "EFFECT_ABSORB",
        "power": "80",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Triage Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_AIRSLASH": {
        "name": "MOVE_AIRSLASH",
        "changes": [],
        "description": [
            "The foe is sliced by a blade of air. It may also make the foe flinch.\r"
        ],
        "ingameName": "Air Slash",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "75",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_AQUAJET": {
        "name": "MOVE_AQUAJET",
        "changes": [],
        "description": [
            "An almost invisibly fast attack that is certain to strike first.\r"
        ],
        "ingameName": "Aqua Jet",
        "effect": "EFFECT_QUICK_ATTACK",
        "power": "40",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Prio Plus 1"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_AQUATAIL": {
        "name": "MOVE_AQUATAIL",
        "changes": [],
        "description": [
            "The foe is attacked with a swinging tail as vicious as a wave in a storm.\r"
        ],
        "ingameName": "Aqua Tail",
        "effect": "EFFECT_HIT",
        "power": "90",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_AURASPHERE": {
        "name": "MOVE_AURASPHERE",
        "changes": [
            [
                "power",
                "90"
            ]
        ],
        "description": [
            "A blast of aura power is let loose at the foe. It is sure to hit.\r"
        ],
        "ingameName": "Aura Sphere",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "80",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Mega Launcher Affected Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_AVALANCHE": {
        "name": "MOVE_AVALANCHE",
        "changes": [],
        "description": [
            "An attack move that gains in intensity if the target has hurt the user.\r"
        ],
        "ingameName": "Avalanche",
        "effect": "EFFECT_HIT",
        "power": "60",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "-4",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Prio Minus 4"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_BRAVEBIRD": {
        "name": "MOVE_BRAVEBIRD",
        "changes": [],
        "description": [
            "The user tucks in its wings and charges. It also hurts the user.         \r"
        ],
        "ingameName": "Brave Bird",
        "effect": "EFFECT_RECOIL",
        "power": "120",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Reckless Boosted Moves",
            "Recoil Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_BUGBUZZ": {
        "name": "MOVE_BUGBUZZ",
        "changes": [],
        "description": [
            "The user creates a damaging sound wave that may lower the foe's Sp. Def.\r"
        ],
        "ingameName": "Bug Buzz",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "90",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "10",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_BULLETPUNCH": {
        "name": "MOVE_BULLETPUNCH",
        "changes": [],
        "description": [
            "The user strikes with a tough punch that is certain to strike first.\r"
        ],
        "ingameName": "Bullet Punch",
        "effect": "EFFECT_QUICK_ATTACK",
        "power": "40",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Iron Fist Affected Moves",
            "Prio Plus 1"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_CHARGEBEAM": {
        "name": "MOVE_CHARGEBEAM",
        "changes": [],
        "description": [
            "The user fires a load of electricity that may raise the user's Sp. Atk.  \r"
        ],
        "ingameName": "Charge Beam",
        "effect": "EFFECT_SPECIAL_ATTACK_UP_CHANCE",
        "power": "50",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_CLOSECOMBAT": {
        "name": "MOVE_CLOSECOMBAT",
        "changes": [],
        "description": [
            "The foe is fought up close. This cuts the user's Defense and Sp. Def.\r"
        ],
        "ingameName": "Close Combat",
        "effect": "EFFECT_SUPERPOWER",
        "power": "120",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "95",
        "Zeffect": ""
    },
    "MOVE_CROSSPOISON": {
        "name": "MOVE_CROSSPOISON",
        "changes": [],
        "description": [
            "An attack with a high critical-hit ratio. It may also poison the foe.\r"
        ],
        "ingameName": "Cross Poison",
        "effect": "EFFECT_BAD_POISON_HIT",
        "power": "70",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "20",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "85",
        "Zeffect": ""
    },
    "MOVE_DARKPULSE": {
        "name": "MOVE_DARKPULSE",
        "changes": [],
        "description": [
            "The user releases a horrible aura that may also make the foe flinch.\r"
        ],
        "ingameName": "Dark Pulse",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "80",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "15",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Mega Launcher Affected Moves",
            "Flinch Chance Moves",
            "Moves With Quiet B G M"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_DISCHARGE": {
        "name": "MOVE_DISCHARGE",
        "changes": [],
        "description": [
            "The user looses an electric flare that hits all Pokemon and may paralyze.         \r"
        ],
        "ingameName": "Discharge",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "80",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_DRACOMETEOR": {
        "name": "MOVE_DRACOMETEOR",
        "changes": [
            [
                "power",
                "140"
            ]
        ],
        "description": [
            "An intense attack that also sharply reduces the user's Sp. Atk stat.\r"
        ],
        "ingameName": "Draco Meteor",
        "effect": "EFFECT_OVERHEAT",
        "power": "130",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_DRAGONPULSE": {
        "name": "MOVE_DRAGONPULSE",
        "changes": [
            [
                "power",
                "90"
            ]
        ],
        "description": [
            "The foe is attacked with a shock wave generated by the user's gaping mouth.\r"
        ],
        "ingameName": "Dragon Pulse",
        "effect": "EFFECT_HIT",
        "power": "85",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Mega Launcher Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_DRAINPUNCH": {
        "name": "MOVE_DRAINPUNCH",
        "changes": [],
        "description": [
            "A harsh punch that absorbs half the damage it inflicted to restore HP.\r"
        ],
        "ingameName": "Drain Punch",
        "effect": "EFFECT_ABSORB",
        "power": "75",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Triage Affected",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_EARTHPOWER": {
        "name": "MOVE_EARTHPOWER",
        "changes": [],
        "description": [
            "The ground under the foe erupts. It may also lower the foe's Sp. Def.          \r"
        ],
        "ingameName": "Earth Power",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "90",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ENERGYBALL": {
        "name": "MOVE_ENERGYBALL",
        "changes": [],
        "description": [
            "The foe is blasted with natural energy. It may also lower the foe's Sp. Def.\r"
        ],
        "ingameName": "Energy Ball",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "90",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FOCUSBLAST": {
        "name": "MOVE_FOCUSBLAST",
        "changes": [],
        "description": [
            "The user unleashes its power. It may also lower the foe's Sp. Def.\r"
        ],
        "ingameName": "Focus Blast",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "120",
        "type": "TYPE_FIGHTING",
        "accuracy": "70",
        "PP": "5",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "95",
        "Zeffect": ""
    },
    "MOVE_FORCEPALM": {
        "name": "MOVE_FORCEPALM",
        "changes": [],
        "description": [
            "The foe is attacked with a shock wave that may also leave it paralyzed.\r"
        ],
        "ingameName": "Force Palm",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "60",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "10",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "80",
        "Zeffect": ""
    },
    "MOVE_GIGAIMPACT": {
        "name": "MOVE_GIGAIMPACT",
        "changes": [],
        "description": [
            "A severely damaging attack that makes the user rest on the next turn.\r"
        ],
        "ingameName": "Giga Impact",
        "effect": "EFFECT_RECHARGE",
        "power": "150",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Moves That Require Recharging"
        ],
        "Zpower": "200",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_GRASSKNOT": {
        "name": "MOVE_GRASSKNOT",
        "changes": [],
        "description": [
            "Grass snares and trips the foe. It does more damage to heavier foes.\r"
        ],
        "ingameName": "Grass Knot",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Dynamax Banned Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_GUNKSHOT": {
        "name": "MOVE_GUNKSHOT",
        "changes": [],
        "description": [
            "Filthy garbage is shot at the foe. It may also poison the target.\r"
        ],
        "ingameName": "Gunk Shot",
        "effect": "EFFECT_POISON_HIT",
        "power": "120",
        "type": "TYPE_POISON",
        "accuracy": "80",
        "PP": "5",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "95",
        "Zeffect": ""
    },
    "MOVE_HAMMERARM": {
        "name": "MOVE_HAMMERARM",
        "changes": [],
        "description": [
            "The user swings its heavy fist. It also lowers the user's Speed.\r"
        ],
        "ingameName": "Hammer Arm",
        "effect": "EFFECT_SUPERPOWER",
        "power": "100",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_HEADSMASH": {
        "name": "MOVE_HEADSMASH",
        "changes": [],
        "description": [
            "A reckless, life- risking tackle that also hurts the user terribly.\r"
        ],
        "ingameName": "Head Smash",
        "effect": "EFFECT_RECOIL",
        "power": "150",
        "type": "TYPE_ROCK",
        "accuracy": "85",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Reckless Boosted Moves",
            "Recoil Moves"
        ],
        "Zpower": "200",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_ICESHARD": {
        "name": "MOVE_ICESHARD",
        "changes": [],
        "description": [
            "The user hurls chunks of ice that are certain to strike first.\r"
        ],
        "ingameName": "Ice Shard",
        "effect": "EFFECT_QUICK_ATTACK",
        "power": "40",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Prio Plus 1"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_IRONHEAD": {
        "name": "MOVE_IRONHEAD",
        "changes": [],
        "description": [
            "The foe is slammed with its hard head. It may also make the foe flinch.\r"
        ],
        "ingameName": "Iron Head",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "80",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_LAVAPLUME": {
        "name": "MOVE_LAVAPLUME",
        "changes": [],
        "description": [
            "Scarlet flames wash over all Pokemon in battle. It may also inflict burns.\r"
        ],
        "ingameName": "Lava Plume",
        "effect": "EFFECT_BURN_HIT",
        "power": "80",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_MAGNETBOMB": {
        "name": "MOVE_MAGNETBOMB",
        "changes": [],
        "description": [
            "A steel bomb is stuck to the foe. It is sure to hit.\r"
        ],
        "ingameName": "Magnet Bomb",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "60",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Ball Bomb Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_MUDBOMB": {
        "name": "MOVE_MUDBOMB",
        "changes": [],
        "description": [
            "The foe is struck with a mud ball.\r"
        ],
        "ingameName": "Mud Bomb",
        "effect": "EFFECT_HIT",
        "power": "65",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_NASTYPLOT": {
        "name": "MOVE_NASTYPLOT",
        "changes": [],
        "description": [
            "The user thinks bad thoughts. It sharply raises the Sp. Atk stat.\r"
        ],
        "ingameName": "Nasty Plot",
        "effect": "EFFECT_SPECIAL_ATTACK_UP_2",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_NIGHTSLASH": {
        "name": "MOVE_NIGHTSLASH",
        "changes": [],
        "description": [
            "The user slashes the foe when it can. It has a high critical-hit ratio.\r"
        ],
        "ingameName": "Night Slash",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "70",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_OMINOUSWIND": {
        "name": "MOVE_OMINOUSWIND",
        "changes": [],
        "description": [
            "Repulsive wind is used to attack. It may also raise all the user's stats.\r"
        ],
        "ingameName": "Ominous Wind",
        "effect": "EFFECT_ALL_STATS_UP_HIT",
        "power": "60",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "5",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_POWERGEM": {
        "name": "MOVE_POWERGEM",
        "changes": [],
        "description": [
            "The user attacks with a ray of light that sparkles like gemstones.\r"
        ],
        "ingameName": "Power Gem",
        "effect": "EFFECT_HIT",
        "power": "80",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_POWERWHIP": {
        "name": "MOVE_POWERWHIP",
        "changes": [],
        "description": [
            "The user violently whirls its vines or tentacles to lash the foe.\r"
        ],
        "ingameName": "Power Whip",
        "effect": "EFFECT_HIT",
        "power": "120",
        "type": "TYPE_GRASS",
        "accuracy": "90",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_PSYCHOCUT": {
        "name": "MOVE_PSYCHOCUT",
        "changes": [],
        "description": [
            "The user tears the foe with psychic blades. It has a high crit ratio.        \r"
        ],
        "ingameName": "Psycho Cut",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "70",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_ROCKCLIMB": {
        "name": "MOVE_ROCKCLIMB",
        "changes": [],
        "description": [
            "A charging attack that may confuse the foe. Can also be used to scale walls.\r"
        ],
        "ingameName": "Rock Climb",
        "effect": "EFFECT_CONFUSE_HIT",
        "power": "90",
        "type": "TYPE_NORMAL",
        "accuracy": "85",
        "PP": "20",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ROCKPOLISH": {
        "name": "MOVE_ROCKPOLISH",
        "changes": [],
        "description": [
            "The user polishes its body to sharply boost its Speed.\r"
        ],
        "ingameName": "Rock Polish",
        "effect": "EFFECT_SPEED_UP_2",
        "power": "0",
        "type": "TYPE_ROCK",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_ROCKWRECKER": {
        "name": "MOVE_ROCKWRECKER",
        "changes": [],
        "description": [
            "The foe is hit with a huge boulder. The user can't move on the next turn.\r"
        ],
        "ingameName": "Rock Wrecker",
        "effect": "EFFECT_RECHARGE",
        "power": "150",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Ball Bomb Moves",
            "Moves That Require Recharging"
        ],
        "Zpower": "200",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_ROOST": {
        "name": "MOVE_ROOST",
        "changes": [],
        "description": [
            "A self-healing move that restores HP by up to half of the user's maximum HP.\r"
        ],
        "ingameName": "Roost",
        "effect": "EFFECT_RESTORE_HP",
        "power": "0",
        "type": "TYPE_FLYING",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_SEEDBOMB": {
        "name": "MOVE_SEEDBOMB",
        "changes": [],
        "description": [
            "The user shoots a barrage of hard seeds at the foe.\r"
        ],
        "ingameName": "Seed Bomb",
        "effect": "EFFECT_HIT",
        "power": "80",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Ball Bomb Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SHADOWCLAW": {
        "name": "MOVE_SHADOWCLAW",
        "changes": [],
        "description": [
            "Claws made of shadows rake the foe. It has a high critical-hit ratio.\r"
        ],
        "ingameName": "Shadow Claw",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "80",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SHADOWSNEAK": {
        "name": "MOVE_SHADOWSNEAK",
        "changes": [],
        "description": [
            "The user extends its shadow to attack. It will strike first.         \r"
        ],
        "ingameName": "Shadow Sneak",
        "effect": "EFFECT_QUICK_ATTACK",
        "power": "40",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Prio Plus 1"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_VACUUMWAVE": {
        "name": "MOVE_VACUUMWAVE",
        "changes": [],
        "description": [
            "The user sends a wave of vacuum at the foe. It will strike first.         \r"
        ],
        "ingameName": "Vacuum Wave",
        "effect": "EFFECT_QUICK_ATTACK",
        "power": "40",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Prio Plus 1"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "70",
        "Zeffect": ""
    },
    "MOVE_XSCISSOR": {
        "name": "MOVE_XSCISSOR",
        "changes": [],
        "description": [
            "The user slashes the foe with crossed claws as if they were scissors.\r"
        ],
        "ingameName": "X-Scissor",
        "effect": "EFFECT_HIT",
        "power": "80",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ZENHEADBUTT": {
        "name": "MOVE_ZENHEADBUTT",
        "changes": [],
        "description": [
            "The user focuses and rams the foe. It may also make the foe flinch.\r"
        ],
        "ingameName": "Zen Headbutt",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "80",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SWITCHEROO": {
        "name": "MOVE_SWITCHEROO",
        "changes": [],
        "description": [
            "The user trades held items with the foe faster than the eye can follow.\r"
        ],
        "ingameName": "Switcheroo",
        "effect": "EFFECT_TRICK",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_2",
        "maxPower": ""
    },
    "MOVE_DRILLRUN": {
        "name": "MOVE_DRILLRUN",
        "changes": [],
        "description": [
            "The user rotates its body like a drill. It has a high critical-hit ratio.\r"
        ],
        "ingameName": "Drill Run",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "80",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "High Critical Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_BULLDOZE": {
        "name": "MOVE_BULLDOZE",
        "changes": [],
        "description": [
            "The user hits all Pokemon in battle by stomping. Lowers Speed of those hit.     \r"
        ],
        "ingameName": "Bulldoze",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "60",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_ELECTROWEB": {
        "name": "MOVE_ELECTROWEB",
        "changes": [],
        "description": [
            "The user traps the foe in an electric net. It also lowers the foe's Speed.\r"
        ],
        "ingameName": "Electroweb",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "55",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_FLAMECHARGE": {
        "name": "MOVE_FLAMECHARGE",
        "changes": [],
        "description": [
            "The user cloaks itself in flames and attacks. It also ups the user's Speed.   \r"
        ],
        "ingameName": "Flame Charge",
        "effect": "EFFECT_SPEED_UP_1_HIT",
        "power": "50",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_FROSTBREATH": {
        "name": "MOVE_FROSTBREATH",
        "changes": [],
        "description": [
            "The user blows cold air that always lands a critical hit. It can cause frostbite.\r"
        ],
        "ingameName": "Frost Breath",
        "effect": "EFFECT_FREEZE_HIT",
        "power": "60",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "10",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Always Critical Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_HEARTSTAMP": {
        "name": "MOVE_HEARTSTAMP",
        "changes": [],
        "description": [
            "The foe is hit after a cute act. It may also make the foe flinch.\r"
        ],
        "ingameName": "Heart Stamp",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "60",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "25",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_HONECLAWS": {
        "name": "MOVE_HONECLAWS",
        "changes": [],
        "description": [
            "The user sharpens its claws to raise its Attack and accuracy.\r"
        ],
        "ingameName": "Hone Claws",
        "effect": "EFFECT_ATTACK_UP",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_HORNLEECH": {
        "name": "MOVE_HORNLEECH",
        "changes": [],
        "description": [
            "A harsh attack that absorbs half the damage it inflicted to restore HP.\r"
        ],
        "ingameName": "Horn Leech",
        "effect": "EFFECT_ABSORB",
        "power": "75",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Triage Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_COIL": {
        "name": "MOVE_COIL",
        "changes": [],
        "description": [
            "The user coils up, raising its Attack, Defense, and accuracy.\r"
        ],
        "ingameName": "Coil",
        "effect": "EFFECT_BULK_UP",
        "power": "0",
        "type": "TYPE_POISON",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_HURRICANE": {
        "name": "MOVE_HURRICANE",
        "changes": [
            [
                "power",
                "120"
            ]
        ],
        "description": [
            "The foe is caught in a fierce wind. It may also confuse the foe.\r"
        ],
        "ingameName": "Hurricane",
        "effect": "EFFECT_THUNDER",
        "power": "110",
        "type": "TYPE_FLYING",
        "accuracy": "70",
        "PP": "10",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Wind Moves",
            "Ignore In Air Moves",
            "Always Hit In Rain Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_ICICLECRASH": {
        "name": "MOVE_ICICLECRASH",
        "changes": [],
        "description": [
            "Icicles are dropped on the foe. It may also make the foe flinch.\r"
        ],
        "ingameName": "Icicle Crash",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "85",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "10",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_WORKUP": {
        "name": "MOVE_WORKUP",
        "changes": [],
        "description": [
            "The user rouses itself to raise its Attack and Sp. Atk stats.\r"
        ],
        "ingameName": "Work Up",
        "effect": "EFFECT_SPECIAL_ATTACK_UP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_QUIVERDANCE": {
        "name": "MOVE_QUIVERDANCE",
        "changes": [],
        "description": [
            "The user mystically dances, raising its Sp. Atk, Sp. Def, and Speed.\r"
        ],
        "ingameName": "Quiver Dance",
        "effect": "EFFECT_CALM_MIND",
        "power": "0",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Forbidden Spell Moves",
            "Hardcore Banned Moves",
            "Dance Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_LEAFTORNADO": {
        "name": "MOVE_LEAFTORNADO",
        "changes": [],
        "description": [
            "Sharp leaves circle the foe.\r"
        ],
        "ingameName": "Leaf Tornado",
        "effect": "EFFECT_HIT",
        "power": "65",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_LOWSWEEP": {
        "name": "MOVE_LOWSWEEP",
        "changes": [],
        "description": [
            "The user attacks the foe's legs, lowering its Speed stat.\r"
        ],
        "ingameName": "Low Sweep",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "60",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Striker Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "85",
        "Zeffect": ""
    },
    "MOVE_SNARL": {
        "name": "MOVE_SNARL",
        "changes": [],
        "description": [
            "The user barks menacingly. It also lowers the foe's Sp. Atk.\r"
        ],
        "ingameName": "Snarl",
        "effect": "EFFECT_SPECIAL_ATTACK_DOWN_HIT",
        "power": "55",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_STRUGGLEBUG": {
        "name": "MOVE_STRUGGLEBUG",
        "changes": [],
        "description": [
            "While resisting, the user attacks the foe, lowering its Sp. Atk stat.\r"
        ],
        "ingameName": "Struggle Bug",
        "effect": "EFFECT_SPECIAL_ATTACK_DOWN_HIT",
        "power": "50",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_STEAMROLLER": {
        "name": "MOVE_STEAMROLLER",
        "changes": [],
        "description": [
            "The user crushes the foe with its body. It may also make the foe flinch.\r"
        ],
        "ingameName": "Steamroller",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "65",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Always Hit When Minimized Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_STORMTHROW": {
        "name": "MOVE_STORMTHROW",
        "changes": [],
        "description": [
            "The user strikes the foe fiercely. It always results in a critical hit.\r"
        ],
        "ingameName": "Storm Throw",
        "effect": "EFFECT_HIT",
        "power": "60",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Always Critical Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "80",
        "Zeffect": ""
    },
    "MOVE_VENOSHOCK": {
        "name": "MOVE_VENOSHOCK",
        "changes": [],
        "description": [
            "The foe is soaked by a special acid. Its power doubles if the foe is poisoned.\r"
        ],
        "ingameName": "Venoshock",
        "effect": "EFFECT_HIT",
        "power": "65",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Double Damage On Status"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "85",
        "Zeffect": ""
    },
    "MOVE_WILDCHARGE": {
        "name": "MOVE_WILDCHARGE",
        "changes": [],
        "description": [
            "The user throws an electrified tackle. It hurts the user a little.\r"
        ],
        "ingameName": "Wild Charge",
        "effect": "EFFECT_RECOIL",
        "power": "90",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Reckless Boosted Moves",
            "Recoil Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_POISONJAB": {
        "name": "MOVE_POISONJAB",
        "changes": [],
        "description": [
            "The foe is stabbed by an arm steeped in poison. It may also poison the foe.\r"
        ],
        "ingameName": "Poison Jab",
        "effect": "EFFECT_POISON_HIT",
        "power": "80",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "20",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_ACIDSPRAY": {
        "name": "MOVE_ACIDSPRAY",
        "changes": [],
        "description": [
            "The user spits fluid that melts the foe. It harshly lowers the foe's Sp. Def.\r"
        ],
        "ingameName": "Acid Spray",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "40",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "70",
        "Zeffect": ""
    },
    "MOVE_FIERYDANCE": {
        "name": "MOVE_FIERYDANCE",
        "changes": [],
        "description": [
            "Cloaked in flames, the user dances. It may also raise the user's Sp. Atk.\r"
        ],
        "ingameName": "Fiery Dance",
        "effect": "EFFECT_SPECIAL_ATTACK_UP_CHANCE",
        "power": "80",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "10",
        "chance": "50",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves",
            "Sheer Force Affected Moves",
            "Dance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_CLEARSMOG": {
        "name": "MOVE_CLEARSMOG",
        "changes": [],
        "description": [
            "The user throws a clump of special mud that reverts all stat changes.\r"
        ],
        "ingameName": "Clear Smog",
        "effect": "EFFECT_REMOVE_TARGET_STAT_CHANGES",
        "power": "50",
        "type": "TYPE_POISON",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "75",
        "Zeffect": ""
    },
    "MOVE_LEAFSTORM": {
        "name": "MOVE_LEAFSTORM",
        "changes": [
            [
                "power",
                "140"
            ]
        ],
        "description": [
            "An intense attack that also sharply reduces the user's Sp. Atk stat.\r"
        ],
        "ingameName": "Leaf Storm",
        "effect": "EFFECT_OVERHEAT",
        "power": "130",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_STONEEDGE": {
        "name": "MOVE_STONEEDGE",
        "changes": [],
        "description": [
            "The foe is stabbed by sharpened stones. It has a high critical-hit ratio.\r"
        ],
        "ingameName": "Stone Edge",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "100",
        "type": "TYPE_ROCK",
        "accuracy": "90",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "High Critical Chance Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_PAYBACK": {
        "name": "MOVE_PAYBACK",
        "changes": [],
        "description": [
            "If the user moves after the target, this attack's power will be doubled.\r"
        ],
        "ingameName": "Payback",
        "effect": "EFFECT_HIT",
        "power": "50",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_FIREFANG": {
        "name": "MOVE_FIREFANG",
        "changes": [],
        "description": [
            "The user bites the foe. It may also make the foe flinch, or leave it burned.\r"
        ],
        "ingameName": "Fire Fang",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "65",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Strong Jaw Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_ICEFANG": {
        "name": "MOVE_ICEFANG",
        "changes": [],
        "description": [
            "The user bites the foe. It may also make the foe flinch, or leave it frozen.\r"
        ],
        "ingameName": "Ice Fang",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "65",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Strong Jaw Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_THUNDERFANG": {
        "name": "MOVE_THUNDERFANG",
        "changes": [],
        "description": [
            "The user bites the foe. It may also make the foe flinch, or paralyze it.     \r"
        ],
        "ingameName": "Thunder Fang",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "65",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Strong Jaw Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_FLAREBLITZ": {
        "name": "MOVE_FLAREBLITZ",
        "changes": [],
        "description": [
            "A fiery tackle that may leave the foe burned. It also hurts the user a little.\r"
        ],
        "ingameName": "Flare Blitz",
        "effect": "EFFECT_BURN_HIT",
        "power": "120",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Reckless Boosted Moves",
            "Moves Can Unfreeze Attacker",
            "Recoil Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_INFERNO": {
        "name": "MOVE_INFERNO",
        "changes": [],
        "description": [
            "The foe is engulfed by an intense fire that is sure to leave a burn.\r"
        ],
        "ingameName": "Inferno",
        "effect": "EFFECT_BURN_HIT",
        "power": "120",
        "type": "TYPE_FIRE",
        "accuracy": "50",
        "PP": "5",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_HEX": {
        "name": "MOVE_HEX",
        "changes": [],
        "description": [
            "This attack does double damage to a target affected by a status problem.\r"
        ],
        "ingameName": "Hex",
        "effect": "EFFECT_HIT",
        "power": "65",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Double Damage On Status"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_DUALCHOP": {
        "name": "MOVE_DUALCHOP",
        "changes": [],
        "description": [
            "The user hits the foe with two brutal strikes in one turn.\r"
        ],
        "ingameName": "Dual Chop",
        "effect": "EFFECT_DOUBLE_HIT",
        "power": "40",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Two Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_DOUBLEHIT": {
        "name": "MOVE_DOUBLEHIT",
        "changes": [],
        "description": [
            "The user slams the foe twice in a row with a long tail, vines, etc.\r"
        ],
        "ingameName": "Double Hit",
        "effect": "EFFECT_DOUBLE_HIT",
        "power": "35",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Two Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_COTTONGUARD": {
        "name": "MOVE_COTTONGUARD",
        "changes": [],
        "description": [
            "The user protects itself with cotton, drastically raising its Defense.\r"
        ],
        "ingameName": "Cotton Guard",
        "effect": "EFFECT_DEFENSE_UP_2",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_ACROBATICS": {
        "name": "MOVE_ACROBATICS",
        "changes": [],
        "description": [
            "A nimble attack that does double damage if the user has no held item.\r"
        ],
        "ingameName": "Acrobatics",
        "effect": "EFFECT_HIT",
        "power": "55",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_FLAMEBURST": {
        "name": "MOVE_FLAMEBURST",
        "changes": [],
        "description": [
            "The user attacks the foe with a bursting flame.\r"
        ],
        "ingameName": "Flame Burst",
        "effect": "EFFECT_FLAMEBURST",
        "power": "70",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_UTURN": {
        "name": "MOVE_UTURN",
        "changes": [],
        "description": [
            "After attacking, the user switches places with a party Pokemon.\r"
        ],
        "ingameName": "U-turn",
        "effect": "EFFECT_BATON_PASS",
        "power": "70",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_VOLTSWITCH": {
        "name": "MOVE_VOLTSWITCH",
        "changes": [],
        "description": [
            "After attacking, the user switches places with a party Pokemon.\r"
        ],
        "ingameName": "Volt Switch",
        "effect": "EFFECT_BATON_PASS",
        "power": "70",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_DRAGONTAIL": {
        "name": "MOVE_DRAGONTAIL",
        "changes": [],
        "description": [
            "The foe is made to switch out with an ally. In the wild, the battle ends.\r"
        ],
        "ingameName": "Dragon Tail",
        "effect": "EFFECT_ROAR",
        "power": "60",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "8",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "-6",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Copycat Banned Moves",
            "Assist Banned Moves",
            "Prio Minus 6"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_CIRCLETHROW": {
        "name": "MOVE_CIRCLETHROW",
        "changes": [],
        "description": [
            "The foe is made to switch out with an ally. In the wild, the battle ends.\r"
        ],
        "ingameName": "Circle Throw",
        "effect": "EFFECT_ROAR",
        "power": "60",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "-6",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Copycat Banned Moves",
            "Assist Banned Moves",
            "Prio Minus 6"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "80",
        "Zeffect": ""
    },
    "MOVE_MIRRORSHOT": {
        "name": "MOVE_MIRRORSHOT",
        "changes": [],
        "description": [
            "The user looses a flash of energy to damage.\r"
        ],
        "ingameName": "Mirror Shot",
        "effect": "EFFECT_HIT",
        "power": "65",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_WOODHAMMER": {
        "name": "MOVE_WOODHAMMER",
        "changes": [],
        "description": [
            "The user slams the foe with its hard body, also hurting itself a little.\r"
        ],
        "ingameName": "Wood Hammer",
        "effect": "EFFECT_RECOIL",
        "power": "120",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Reckless Boosted Moves",
            "Recoil Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_HEALPULSE": {
        "name": "MOVE_HEALPULSE",
        "changes": [],
        "description": [
            "The user emits a healing pulse that restores a target's HP by up to half.\r"
        ],
        "ingameName": "Heal Pulse",
        "effect": "EFFECT_HEAL_TARGET",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Triage Affected",
            "Mega Launcher Affected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_FLASHCANNON": {
        "name": "MOVE_FLASHCANNON",
        "changes": [],
        "description": [
            "Light energy is shot at the foe. It may also lower the foe's Sp. Def.\r"
        ],
        "ingameName": "Flash Cannon",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "80",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "10",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Mega Launcher Affected Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_BUGBITE": {
        "name": "MOVE_BUGBITE",
        "changes": [],
        "description": [
            "The user bites the foe, eating its berry if it is holding one.\r"
        ],
        "ingameName": "Bug Bite",
        "effect": "EFFECT_EAT_BERRY",
        "power": "60",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Raid Battle Banned Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_PLUCK": {
        "name": "MOVE_PLUCK",
        "changes": [],
        "description": [
            "The user pecks the foe, plucking its berry if it is holding one.\r"
        ],
        "ingameName": "Pluck",
        "effect": "EFFECT_EAT_BERRY",
        "power": "60",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Raid Battle Banned Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_SHELLSMASH": {
        "name": "MOVE_SHELLSMASH",
        "changes": [],
        "description": [
            "Sharply raises Attack, Sp. Atk, and Speed, but lowers Defense and Sp. Def.\r"
        ],
        "ingameName": "Shell Smash",
        "effect": "EFFECT_DRAGON_DANCE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Forbidden Spell Moves",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_RAGEPOWDER": {
        "name": "MOVE_RAGEPOWDER",
        "changes": [],
        "description": [
            "The user scatters a cloud of powder, making foes attack only the user.\r"
        ],
        "ingameName": "Rage Powder",
        "effect": "EFFECT_FOLLOW_ME",
        "power": "0",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "2",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Powder Moves",
            "Prio Plus 2"
        ],
        "maxPower": ""
    },
    "MOVE_WAKEUPSLAP": {
        "name": "MOVE_WAKEUPSLAP",
        "changes": [],
        "description": [
            "Does double damage to a sleeping foe. It also wakes the foe up, however.\r"
        ],
        "ingameName": "Wake-Up Slap",
        "effect": "EFFECT_SMELLINGSALT",
        "power": "70",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "85",
        "Zeffect": ""
    },
    "MOVE_RAZORSHELL": {
        "name": "MOVE_RAZORSHELL",
        "changes": [],
        "description": [
            "The foe is cut by sharp shells. It has a high critical-hit ratio.\r"
        ],
        "ingameName": "Razor Shell",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "75",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Sharpness Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_COPYCAT": {
        "name": "MOVE_COPYCAT",
        "changes": [],
        "description": [
            "The user mimics the last move used. Fails if no move has been used yet.\r"
        ],
        "ingameName": "Copycat",
        "effect": "EFFECT_MIRROR_MOVE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_DEPENDS",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ACC_UP_1",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Moves That Call Other Moves"
        ],
        "maxPower": ""
    },
    "MOVE_MIRACLEEYE": {
        "name": "MOVE_MIRACLEEYE",
        "changes": [],
        "description": [
            "Completely negates the foe's efforts to heighten its ability to evade.\r"
        ],
        "ingameName": "Miracle Eye",
        "effect": "EFFECT_FORESIGHT",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_SUCKERPUNCH": {
        "name": "MOVE_SUCKERPUNCH",
        "changes": [
            [
                "power",
                "80"
            ]
        ],
        "description": [
            "This move allows the user to strike first, if the foe is readying an attack.\r"
        ],
        "ingameName": "Sucker Punch",
        "effect": "EFFECT_SUCKER_PUNCH",
        "power": "70",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Prio Plus 1"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SCALD": {
        "name": "MOVE_SCALD",
        "changes": [],
        "description": [
            "Boiling water is shot at the foe. It may also cause a burn.\r"
        ],
        "ingameName": "Scald",
        "effect": "EFFECT_BURN_HIT",
        "power": "80",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Moves Can Unfreeze Attacker",
            "Moves Can Unfreeze Target"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_BRINE": {
        "name": "MOVE_BRINE",
        "changes": [],
        "description": [
            "If the foe's HP is down to half, this attack does double damage.\r"
        ],
        "ingameName": "Brine",
        "effect": "EFFECT_HIT",
        "power": "65",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_FAIRYWIND": {
        "name": "MOVE_FAIRYWIND",
        "changes": [],
        "description": [
            "The user stirs up a fairy wind and strikes the foe with it.\r"
        ],
        "ingameName": "Fairy Wind",
        "effect": "EFFECT_HIT",
        "power": "40",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "30",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Wind Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_BABYDOLLEYES": {
        "name": "MOVE_BABYDOLLEYES",
        "changes": [],
        "description": [
            "A cute stare that lowers the foe's Attack stat. It is sure to go first.\r"
        ],
        "ingameName": "Baby-Doll Eyes",
        "effect": "EFFECT_ATTACK_DOWN",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Prio Plus 1"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_PLAYROUGH": {
        "name": "MOVE_PLAYROUGH",
        "changes": [],
        "description": [
            "The foe is roughed up by the user. This may lower the foe's Attack.\r"
        ],
        "ingameName": "Play Rough",
        "effect": "EFFECT_ATTACK_DOWN_HIT",
        "power": "90",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "10",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_MOONBLAST": {
        "name": "MOVE_MOONBLAST",
        "changes": [],
        "description": [
            "The foe is attacked with the power of the moon. This may lower its Sp. Atk.\r"
        ],
        "ingameName": "Moonblast",
        "effect": "EFFECT_SPECIAL_ATTACK_DOWN_HIT",
        "power": "95",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_DRAININGKISS": {
        "name": "MOVE_DRAININGKISS",
        "changes": [],
        "description": [
            "A sweet kiss that absorbs over half the damage inflicted to restore HP.\r"
        ],
        "ingameName": "Drainingkiss",
        "effect": "EFFECT_ABSORB",
        "power": "50",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Triage Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_DAZZLINGGLEAM": {
        "name": "MOVE_DAZZLINGGLEAM",
        "changes": [],
        "description": [
            "The user damages opposing Pokemon by emitting a powerful flash.\r"
        ],
        "ingameName": "Dazzling Gleam",
        "effect": "EFFECT_HIT",
        "power": "80",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_DISARMINGVOICE": {
        "name": "MOVE_DISARMINGVOICE",
        "changes": [],
        "description": [
            "The user lets out a charming cry that cannot be evaded.\r"
        ],
        "ingameName": "Disarmingvoice",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "40",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_STEALTHROCK": {
        "name": "MOVE_STEALTHROCK",
        "changes": [],
        "description": [
            "Levitating rocks are laid around the foe's party to hurt foes switching in.\r"
        ],
        "ingameName": "Stealth Rock",
        "effect": "EFFECT_SPIKES",
        "power": "0",
        "type": "TYPE_ROCK",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_OPPONENTS_FIELD",
        "priority": "0",
        "flags": [
            "Magic Coat Affected",
            "Hardcore Banned Moves",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_TOXICSPIKES": {
        "name": "MOVE_TOXICSPIKES",
        "changes": [],
        "description": [
            "Poisoned spikes are laid around the foe's party to hurt foes switching in.\r"
        ],
        "ingameName": "Toxic Spikes",
        "effect": "EFFECT_SPIKES",
        "power": "0",
        "type": "TYPE_POISON",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_OPPONENTS_FIELD",
        "priority": "0",
        "flags": [
            "Magic Coat Affected",
            "Hardcore Banned Moves",
            "Sky Battle Banned Moves",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_HEALINGWISH": {
        "name": "MOVE_HEALINGWISH",
        "changes": [],
        "description": [
            "The user faints, but will fully heal the Pokemon taking its place.\r"
        ],
        "ingameName": "Healing Wish",
        "effect": "EFFECT_MEMENTO",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected",
            "Forbidden Spell Moves",
            "Raid Battle Banned Raid Mon Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_LUNARDANCE": {
        "name": "MOVE_LUNARDANCE",
        "changes": [],
        "description": [
            "The user faints, but will fully heal the Pokemon taking its place.\r"
        ],
        "ingameName": "Lunar Dance",
        "effect": "EFFECT_MEMENTO",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected",
            "Raid Battle Banned Raid Mon Moves",
            "Dance Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_TAILWIND": {
        "name": "MOVE_TAILWIND",
        "changes": [],
        "description": [
            "Whips up a tailwind that ups the Speed of all party Pokemon for four turns.\r"
        ],
        "ingameName": "Tailwind",
        "effect": "EFFECT_TEAM_EFFECTS",
        "power": "0",
        "type": "TYPE_FLYING",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves",
            "Wind Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_BOOST_CRITS",
        "maxPower": ""
    },
    "MOVE_BOOMBURST": {
        "name": "MOVE_BOOMBURST",
        "changes": [],
        "description": [
            "The user emits a terrible soundwave that hits everything around it.\r"
        ],
        "ingameName": "Boomburst",
        "effect": "EFFECT_HIT",
        "power": "140",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_INCINERATE": {
        "name": "MOVE_INCINERATE",
        "changes": [],
        "description": [
            "The user burns the foe completely, rendering a held Berry useless.\r"
        ],
        "ingameName": "Incinerate",
        "effect": "EFFECT_EAT_BERRY",
        "power": "60",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Raid Battle Banned Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_WORRYSEED": {
        "name": "MOVE_WORRYSEED",
        "changes": [],
        "description": [
            "A worrying seed is planted on the foe, making its ability Insomnia.\r"
        ],
        "ingameName": "Worry Seed",
        "effect": "EFFECT_SKILL_SWAP",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_GASTROACID": {
        "name": "MOVE_GASTROACID",
        "changes": [],
        "description": [
            "Stomach acid is hurled onto the foe, suppressing its ability.\r"
        ],
        "ingameName": "Gastro Acid",
        "effect": "EFFECT_SKILL_SWAP",
        "power": "0",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_GEOMANCY": {
        "name": "MOVE_GEOMANCY",
        "changes": [],
        "description": [
            "The user's Sp. Atk, Sp. Def, and Speed rise sharply on the second turn.\r"
        ],
        "ingameName": "Geomancy",
        "effect": "EFFECT_CALM_MIND",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ALL_STATS_UP_1",
        "flags": [
            "",
            "Instruct Banned Moves",
            "Hardcore Banned Moves",
            "Sleep Talk Banned Moves",
            "Sky Battle Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_FLOWERSHIELD": {
        "name": "MOVE_FLOWERSHIELD",
        "changes": [],
        "description": [
            "The Defense stat of all Grass-type Pokemon is raised by a strange power.\r"
        ],
        "ingameName": "Flowershield",
        "effect": "EFFECT_DEFENSE_UP",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "flags": [
            "",
            "Special Whole Field Moves"
        ],
        "maxPower": ""
    },
    "MOVE_ROTOTILLER": {
        "name": "MOVE_ROTOTILLER",
        "changes": [],
        "description": [
            "The Attack and Sp. Atk stats of all Grass-type Pokemon are raised.\r"
        ],
        "ingameName": "Rototiller",
        "effect": "EFFECT_SPECIAL_ATTACK_UP",
        "power": "0",
        "type": "TYPE_GROUND",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "flags": [
            "",
            "Sky Battle Banned Moves",
            "Special Whole Field Moves"
        ],
        "maxPower": ""
    },
    "MOVE_SHIFTGEAR": {
        "name": "MOVE_SHIFTGEAR",
        "changes": [],
        "description": [
            "Rotating its gears, the user raises its Attack and sharply raises its Speed.\r"
        ],
        "ingameName": "Shift Gear",
        "effect": "EFFECT_DRAGON_DANCE",
        "power": "0",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_STICKYWEB": {
        "name": "MOVE_STICKYWEB",
        "changes": [],
        "description": [
            "A sticky net is woven around the foe's party to slow foes switching in.\r"
        ],
        "ingameName": "Sticky Web",
        "effect": "EFFECT_SPIKES",
        "power": "0",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_OPPONENTS_FIELD",
        "priority": "0",
        "flags": [
            "Magic Coat Affected",
            "Hardcore Banned Moves",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_STOREDPOWER": {
        "name": "MOVE_STOREDPOWER",
        "changes": [],
        "description": [
            "The user attacks with a stored power that grows with each raised stat.\r"
        ],
        "ingameName": "Stored Power",
        "effect": "EFFECT_HIT",
        "power": "20",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ACUPRESSURE": {
        "name": "MOVE_ACUPRESSURE",
        "changes": [],
        "description": [
            "The user sharply raises one of its stats by pressing its stress points.\r"
        ],
        "ingameName": "Acupressure",
        "effect": "EFFECT_ATTACK_UP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_USER_OR_PARTNER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_BOOST_CRITS",
        "flags": [
            "",
            "Randomizer Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_PUNISHMENT": {
        "name": "MOVE_PUNISHMENT",
        "changes": [],
        "description": [
            "The more the foe has raised its stats, the greater the move's power.\r"
        ],
        "ingameName": "Punishment",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ASSURANCE": {
        "name": "MOVE_ASSURANCE",
        "changes": [],
        "description": [
            "Does double damage if the foe has already taken damage this turn.\r"
        ],
        "ingameName": "Assurance",
        "effect": "EFFECT_HIT",
        "power": "60",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_DRAGONRUSH": {
        "name": "MOVE_DRAGONRUSH",
        "changes": [],
        "description": [
            "A tackle exhibiting devastating menace. This may also make the target flinch.\r"
        ],
        "ingameName": "Dragon Rush",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "100",
        "type": "TYPE_DRAGON",
        "accuracy": "75",
        "PP": "10",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Always Hit When Minimized Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_DARKVOID": {
        "name": "MOVE_DARKVOID",
        "changes": [],
        "description": [
            "All foes are taken into a world of total darkness that makes them sleep.\r"
        ],
        "ingameName": "Dark Void",
        "effect": "EFFECT_SLEEP",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "80",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Randomizer Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_FEINT": {
        "name": "MOVE_FEINT",
        "changes": [],
        "description": [
            "An attack that hits a protected target. This also lifts the protection.\r"
        ],
        "ingameName": "Feint",
        "effect": "EFFECT_FEINT",
        "power": "30",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "2",
        "flags": [
            "Mirror Move Affected",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Moves That Lift Protect Table",
            "Prio Plus 2"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_PHANTOMFORCE": {
        "name": "MOVE_PHANTOMFORCE",
        "changes": [],
        "description": [
            "The user vanishes, then strikes on the next turn, hitting even protected foes.\r"
        ],
        "ingameName": "Phantom Force",
        "effect": "EFFECT_SEMI_INVULNERABLE",
        "power": "90",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Mirror Move Affected",
            "Instruct Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Moves That Lift Protect Table"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_PETALBLIZZARD": {
        "name": "MOVE_PETALBLIZZARD",
        "changes": [],
        "description": [
            "Stirs up a violent petal blizzard, hitting everything around it.\r"
        ],
        "ingameName": "Petal Blizzard",
        "effect": "EFFECT_HIT",
        "power": "90",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Wind Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_PLAYNICE": {
        "name": "MOVE_PLAYNICE",
        "changes": [],
        "description": [
            "The target loses its will to fight. This lowers its Attack.\r"
        ],
        "ingameName": "Play Nice",
        "effect": "EFFECT_ATTACK_DOWN",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_ROAROFTIME": {
        "name": "MOVE_ROAROFTIME",
        "changes": [],
        "description": [
            "An attack which distorts time. The foe is made to switch out with an ally.\r"
        ],
        "ingameName": "Roar of Time",
        "effect": "EFFECT_ROAR",
        "power": "80",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "-6",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Copycat Banned Moves",
            "Forbidden Spell Moves",
            "Assist Banned Moves",
            "Prio Minus 6"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_SPACIALREND": {
        "name": "MOVE_SPACIALREND",
        "changes": [],
        "description": [
            "An attack that tears the space around it. Critical hits land more easily.\r"
        ],
        "ingameName": "Spacial Rend",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "100",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "High Critical Chance Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_MAGMASTORM": {
        "name": "MOVE_MAGMASTORM",
        "changes": [
            [
                "power",
                "120"
            ]
        ],
        "description": [
            "A maelstrom of fire rages that traps the target for four to five turns.\r"
        ],
        "ingameName": "Magma Storm",
        "effect": "EFFECT_TRAP",
        "power": "100",
        "type": "TYPE_FIRE",
        "accuracy": "75",
        "PP": "5",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FINALGAMBIT": {
        "name": "MOVE_FINALGAMBIT",
        "changes": [],
        "description": [
            "The user risks all, dealing damage equal to its HP and then fainting from exhaustion.\r"
        ],
        "ingameName": "Final Gambit",
        "effect": "EFFECT_MEMENTO",
        "power": "1",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Parental Bond Banned Moves",
            "Raid Battle Banned Raid Mon Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_SHADOWFORCE": {
        "name": "MOVE_SHADOWFORCE",
        "changes": [],
        "description": [
            "The user vanishes, then strikes on the next turn, hitting even protected foes.\r"
        ],
        "ingameName": "Shadow Force",
        "effect": "EFFECT_SEMI_INVULNERABLE",
        "power": "120",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Mirror Move Affected",
            "Instruct Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Moves That Lift Protect Table"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_NUZZLE": {
        "name": "MOVE_NUZZLE",
        "changes": [],
        "description": [
            "The target is attacked with electrified cheeks that leave it paralyzed.\r"
        ],
        "ingameName": "Nuzzle",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "20",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_RETALIATE": {
        "name": "MOVE_RETALIATE",
        "changes": [],
        "description": [
            "If an ally fainted in the previous turn, this attack's damage increases.\r"
        ],
        "ingameName": "Retaliate",
        "effect": "EFFECT_HIT",
        "power": "70",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_STEELYHIT": {
        "name": "MOVE_STEELYHIT",
        "changes": [],
        "description": [
            "A physical attack in which the user charges, full body, into the foe.\r"
        ],
        "ingameName": "Steelyhit",
        "effect": "EFFECT_HIT",
        "power": "40",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "35",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_JUDGMENT": {
        "name": "MOVE_JUDGMENT",
        "changes": [],
        "description": [
            "An attack which changes type, depending on which kind of Plate the user is holding.\r"
        ],
        "ingameName": "Judgment",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Type Change Exception Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FREEZEDRY": {
        "name": "MOVE_FREEZEDRY",
        "changes": [],
        "description": [
            "An attack which may leave the target frostbitten. It is super effective on Water types.\r"
        ],
        "ingameName": "Freeze-Dry",
        "effect": "EFFECT_FREEZE_HIT",
        "power": "70",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "20",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_PSYSHOCK": {
        "name": "MOVE_PSYSHOCK",
        "changes": [],
        "description": [
            "An odd psychic wave attacks the target. This attack does physical damage.\r"
        ],
        "ingameName": "Psyshock",
        "effect": "EFFECT_HIT",
        "power": "80",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Special Attack Physical Damage Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ROUND": {
        "name": "MOVE_ROUND",
        "changes": [],
        "description": [
            "The user attacks with a song. Others can join in, doing more damage.\r"
        ],
        "ingameName": "Round",
        "effect": "EFFECT_FURY_CUTTER",
        "power": "60",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves",
            "Moves With Quiet B G M"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_TAILSLAP": {
        "name": "MOVE_TAILSLAP",
        "changes": [],
        "description": [
            "The use attacks by hitting the target with its hard tail. It hits two to five times in a row.\r"
        ],
        "ingameName": "Tail Slap",
        "effect": "EFFECT_MULTI_HIT",
        "power": "25",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_GEARGRIND": {
        "name": "MOVE_GEARGRIND",
        "changes": [],
        "description": [
            "The user attacks by throwing two steel gears at it target. This attack hits twice in a row.\r"
        ],
        "ingameName": "Gear Grind",
        "effect": "EFFECT_DOUBLE_HIT",
        "power": "50",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Two Strikes Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_NATURALGIFT": {
        "name": "MOVE_NATURALGIFT",
        "changes": [],
        "description": [
            "The type and base power of this move is determined by the user's Berry.\r"
        ],
        "ingameName": "Natural Gift",
        "effect": "EFFECT_NATURAL_GIFT",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Type Change Exception Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_CHIPAWAY": {
        "name": "MOVE_CHIPAWAY",
        "changes": [],
        "description": [
            "An attack which is not affected by the target's stat changes.\r"
        ],
        "ingameName": "Chip Away",
        "effect": "EFFECT_HIT",
        "power": "70",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Ignore Stat Changes Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SMACKDOWN": {
        "name": "MOVE_SMACKDOWN",
        "changes": [],
        "description": [
            "A projectile is thrown. A flying foe will fall to the ground.\r"
        ],
        "ingameName": "Smack Down",
        "effect": "EFFECT_SMACK_DOWN",
        "power": "50",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Ignore In Air Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_HYPERSPACEHOLE": {
        "name": "MOVE_HYPERSPACEHOLE",
        "changes": [],
        "description": [
            "The user attacks from a hyperspace hole, hitting even protected targets.\r"
        ],
        "ingameName": "Hyperspace Hole",
        "effect": "EFFECT_SUPERPOWER",
        "power": "80",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Mirror Move Affected",
            "Substitute Bypass Moves",
            "Moves That Lift Protect Table"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_GYROBALL": {
        "name": "MOVE_GYROBALL",
        "changes": [],
        "description": [
            "A high-speed spin. The slower the user is than the foe, the greater the damage.\r"
        ],
        "ingameName": "Gyro Ball",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Ball Bomb Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_HYPERSPACEFURY": {
        "name": "MOVE_HYPERSPACEFURY",
        "changes": [],
        "description": [
            "The target is hit with many arms. This hits protected foes, and lowers the user's Defense.\r"
        ],
        "ingameName": "Hyperspace Fury",
        "effect": "EFFECT_SUPERPOWER",
        "power": "100",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "5",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Mirror Move Affected",
            "Randomizer Banned Moves",
            "Substitute Bypass Moves",
            "Moves That Lift Protect Table"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ATTACKORDER": {
        "name": "MOVE_ATTACKORDER",
        "changes": [],
        "description": [
            "The user calls out its underlings to pummel the foe. It has a high critical-hit ratio.\r"
        ],
        "ingameName": "Attack Order",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "120",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "High Critical Chance Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_DEFENDORDER": {
        "name": "MOVE_DEFENDORDER",
        "changes": [],
        "description": [
            "The user calls out its underlings to shield its body, raising its Defense and Sp. Def stats.\r"
        ],
        "ingameName": "Defend Order",
        "effect": "EFFECT_COSMIC_POWER",
        "power": "0",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_HEALORDER": {
        "name": "MOVE_HEALORDER",
        "changes": [],
        "description": [
            "The user calls out its underlings to heal it. The user regains up to half of its max HP.\r"
        ],
        "ingameName": "Heal Order",
        "effect": "EFFECT_RESTORE_HP",
        "power": "0",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_CAPTIVATE": {
        "name": "MOVE_CAPTIVATE",
        "changes": [],
        "description": [
            "If the foe is the opposite gender of the user, the foe's Special Attack is harshly lowered.\r"
        ],
        "ingameName": "Captivate",
        "effect": "EFFECT_SPECIAL_ATTACK_DOWN_2",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_2",
        "maxPower": ""
    },
    "MOVE_DEFOG": {
        "name": "MOVE_DEFOG",
        "changes": [],
        "description": [
            "A strong wind blows away the target's obstacles. It also lowers the target's evasiveness.\r"
        ],
        "ingameName": "Defog",
        "effect": "EFFECT_RAPID_SPIN",
        "power": "0",
        "type": "TYPE_FLYING",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ACC_UP_1",
        "maxPower": ""
    },
    "MOVE_ORIGINPULSE": {
        "name": "MOVE_ORIGINPULSE",
        "changes": [
            [
                "power",
                "120"
            ]
        ],
        "description": [
            "The user attacks opposing Pokemon with countless beams of light that glow a deep blue.\r"
        ],
        "ingameName": "Origin Pulse",
        "effect": "EFFECT_HIT",
        "power": "110",
        "type": "TYPE_WATER",
        "accuracy": "85",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Mega Launcher Affected Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_PRECIPICEBLADES": {
        "name": "MOVE_PRECIPICEBLADES",
        "changes": [],
        "description": [
            "The user attacks opposing Pokemon by manifesting the power of the land in blades of stone.\r"
        ],
        "ingameName": "Precipice Blades",
        "effect": "EFFECT_HIT",
        "power": "120",
        "type": "TYPE_GROUND",
        "accuracy": "85",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_GUARDSWAP": {
        "name": "MOVE_GUARDSWAP",
        "changes": [],
        "description": [
            "The user uses its psychic power to switch changes to its Defense and Sp. Def with the foe.\r"
        ],
        "ingameName": "Guard Swap",
        "effect": "EFFECT_STAT_SWAP_SPLIT",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_STEAMERUPTION": {
        "name": "MOVE_STEAMERUPTION",
        "changes": [],
        "description": [
            "The user immerses the target in superheated steam. This may also burn the target.\r"
        ],
        "ingameName": "Steam Eruption",
        "effect": "EFFECT_BURN_HIT",
        "power": "120",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "5",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Moves Can Unfreeze Attacker",
            "Moves Can Unfreeze Target"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_METALBURST": {
        "name": "MOVE_METALBURST",
        "changes": [],
        "description": [
            "The user retaliates with much greater force against the opponent that last did damage to it.\r"
        ],
        "ingameName": "Metal Burst",
        "effect": "EFFECT_COUNTER",
        "power": "1",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_DEPENDS",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Me First Banned Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_MEFIRST": {
        "name": "MOVE_MEFIRST",
        "changes": [],
        "description": [
            "The user tries to cut ahead of the target to steal and use its intended move with more power.\r"
        ],
        "ingameName": "Me First",
        "effect": "EFFECT_ME_FIRST",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Substitute Bypass Moves",
            "Moves That Call Other Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_2",
        "maxPower": ""
    },
    "MOVE_POWERSWAP": {
        "name": "MOVE_POWERSWAP",
        "changes": [],
        "description": [
            "The user uses its psychic power to switch changes to its Attack and Sp. Attack with the foe.\r"
        ],
        "ingameName": "Power Swap",
        "effect": "EFFECT_STAT_SWAP_SPLIT",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_POWERTRICK": {
        "name": "MOVE_POWERTRICK",
        "changes": [],
        "description": [
            "The user employs its psychic power to switch its Attack stat with its Defense stat.\r"
        ],
        "ingameName": "Power Trick",
        "effect": "EFFECT_STAT_SWAP_SPLIT",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_PSYCHOSHIFT": {
        "name": "MOVE_PSYCHOSHIFT",
        "changes": [],
        "description": [
            "Using its psychic power of suggestion, the user transfers its status problems to the target.\r"
        ],
        "ingameName": "Psycho Shift",
        "effect": "EFFECT_REFRESH",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_2",
        "maxPower": ""
    },
    "MOVE_WRINGOUT": {
        "name": "MOVE_WRINGOUT",
        "changes": [],
        "description": [
            "The user powerfully wrings the target. The more HP the target has, the greater the power.\r"
        ],
        "ingameName": "Wring Out",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_KINGSSHIELD": {
        "name": "MOVE_KINGSSHIELD",
        "changes": [],
        "description": [
            "The user protects itself from damage, and changes the user's form if applicable.\r"
        ],
        "ingameName": "King's Shield",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "4",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Instruct Banned Moves",
            "Metronome Banned Moves",
            "Randomizer Banned Moves",
            "Assist Banned Moves",
            "Raid Battle Banned Raid Mon Moves",
            "Prio Plus 4"
        ],
        "maxPower": ""
    },
    "MOVE_PSYSTRIKE": {
        "name": "MOVE_PSYSTRIKE",
        "changes": [],
        "description": [
            "An odd psychic wave attacks the target. This attack does physical damage.\r"
        ],
        "ingameName": "Psystrike",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Special Attack Physical Damage Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_AUTOTOMIZE": {
        "name": "MOVE_AUTOTOMIZE",
        "changes": [],
        "description": [
            "The user sheds part of its body to make itself lighter and sharply raise its Speed stat.\r"
        ],
        "ingameName": "Autotomize",
        "effect": "EFFECT_SPEED_UP_2",
        "power": "0",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_DIAMONDSTORM": {
        "name": "MOVE_DIAMONDSTORM",
        "changes": [],
        "description": [
            "The user whips up a storm of diamonds to damage the foes. This may also raise the user's Defense. \r"
        ],
        "ingameName": "Diamond Storm",
        "effect": "EFFECT_DEFENSE_UP_2_HIT",
        "power": "100",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "5",
        "chance": "50",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SLUDGEWAVE": {
        "name": "MOVE_SLUDGEWAVE",
        "changes": [],
        "description": [
            "The area around the user is swamped by a giant sludge wave. It may also poison those hit.\r"
        ],
        "ingameName": "Sludge Wave",
        "effect": "EFFECT_POISON_HIT",
        "power": "95",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "10",
        "chance": "10",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_HEAVYSLAM": {
        "name": "MOVE_HEAVYSLAM",
        "changes": [],
        "description": [
            "The user slams into the target. The greater the weight difference, the greater the damage.\r"
        ],
        "ingameName": "Heavy Slam",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Dynamax Banned Moves",
            "Always Hit When Minimized Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SYNCHRONOISE": {
        "name": "MOVE_SYNCHRONOISE",
        "changes": [],
        "description": [
            "Using an odd shock wave, the user damages same-type Pokemon in the surrounding area.\r"
        ],
        "ingameName": "Synchronoise",
        "effect": "EFFECT_SYNCHRONOISE",
        "power": "120",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_ELECTROBALL": {
        "name": "MOVE_ELECTROBALL",
        "changes": [],
        "description": [
            "The user hurls an electric orb. The faster the user is than the foe, the greater the damage.\r"
        ],
        "ingameName": "Electro Ball",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Ball Bomb Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FOULPLAY": {
        "name": "MOVE_FOULPLAY",
        "changes": [],
        "description": [
            "The user turns the target's power against it. Power increases with the foe's Attack stat.\r"
        ],
        "ingameName": "Foul Play",
        "effect": "EFFECT_HIT",
        "power": "95",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ENTRAINMENT": {
        "name": "MOVE_ENTRAINMENT",
        "changes": [],
        "description": [
            "The user dances with an odd rhythm, making the target's Ability the same as the user's Ability.\r"
        ],
        "ingameName": "Entrainment",
        "effect": "EFFECT_SKILL_SWAP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_NIGHTDAZE": {
        "name": "MOVE_NIGHTDAZE",
        "changes": [],
        "description": [
            "The user releases a pitch-black blast at its target. \r"
        ],
        "ingameName": "Night Daze",
        "effect": "EFFECT_HIT",
        "power": "95",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ECHOEDVOICE": {
        "name": "MOVE_ECHOEDVOICE",
        "changes": [],
        "description": [
            "The user attacks the target with a harsh echo. If used every turn, power increases.\r"
        ],
        "ingameName": "Echoed Voice",
        "effect": "EFFECT_FURY_CUTTER",
        "power": "40",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_LANDSWRATH": {
        "name": "MOVE_LANDSWRATH",
        "changes": [],
        "description": [
            "The user gathers energy from the land and damages the opposing Pokemon with its power.\r"
        ],
        "ingameName": "Land's Wrath",
        "effect": "EFFECT_HIT",
        "power": "90",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_OBLIVIONWING": {
        "name": "MOVE_OBLIVIONWING",
        "changes": [],
        "description": [
            "The user absorbs its target's HP. The user's HP is restored by over half the damage.\r"
        ],
        "ingameName": "Oblivion Wing",
        "effect": "EFFECT_ABSORB",
        "power": "80",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Triage Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_HEARTSWAP": {
        "name": "MOVE_HEARTSWAP",
        "changes": [],
        "description": [
            "The user employs its psychic power to switch stat changes with the target.\r"
        ],
        "ingameName": "Heart Swap",
        "effect": "EFFECT_STAT_SWAP_SPLIT",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_BOOST_CRITS",
        "maxPower": ""
    },
    "MOVE_AQUAFANG": {
        "name": "MOVE_AQUAFANG",
        "changes": [],
        "description": [
            "The user bites the foe with aquatic force. \r"
        ],
        "ingameName": "Aqua Fang",
        "effect": "EFFECT_HIT",
        "power": "80",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Strong Jaw Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_SACREDSWORD": {
        "name": "MOVE_SACREDSWORD",
        "changes": [],
        "description": [
            "The user attacks by slicing with a long horn. The target's stat changes are ignored.\r"
        ],
        "ingameName": "Sacred Sword",
        "effect": "EFFECT_HIT",
        "power": "90",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves",
            "Ignore Stat Changes Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_HEATCRASH": {
        "name": "MOVE_HEATCRASH",
        "changes": [],
        "description": [
            "The user slams down with fire. The more the user outweighs the foe, the greater the damage.\r"
        ],
        "ingameName": "Heat Crash",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Dynamax Banned Moves",
            "Always Hit When Minimized Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_HEADCHARGE": {
        "name": "MOVE_HEADCHARGE",
        "changes": [],
        "description": [
            "The user charges its head into its foe. It slightly damages the user and can lower Defense. \r"
        ],
        "ingameName": "Head Charge",
        "effect": "EFFECT_DEFENSE_DOWN_HIT",
        "power": "120",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Reckless Boosted Moves",
            "Recoil Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_TECHNOBLAST": {
        "name": "MOVE_TECHNOBLAST",
        "changes": [],
        "description": [
            "The user fires a beam of light at its foe. The type changes depending on the Drive held.\r"
        ],
        "ingameName": "Techno Blast",
        "effect": "EFFECT_HIT",
        "power": "120",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Type Change Exception Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_RELICSONG": {
        "name": "MOVE_RELICSONG",
        "changes": [],
        "description": [
            "The user sings an ancient song and attacks the hearts of the listeners. It may induce sleep.\r"
        ],
        "ingameName": "Relic Song",
        "effect": "EFFECT_RELIC_SONG",
        "power": "75",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "10",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Sheer Force Affected Moves",
            "Punk Rock Affected Moves",
            "Moves With Quiet B G M"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SECRETSWORD": {
        "name": "MOVE_SECRETSWORD",
        "changes": [],
        "description": [
            "The user cuts with its long horn. The odd power in the horn does physical damage to the foe.\r"
        ],
        "ingameName": "Secret Sword",
        "effect": "EFFECT_HIT",
        "power": "85",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Sharpness Affected Moves",
            "Special Attack Physical Damage Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_GLACIATE": {
        "name": "MOVE_GLACIATE",
        "changes": [],
        "description": [
            "The user attacks by blowing freezing cold air at opposing Pokemon. This lowers their Speed.\r"
        ],
        "ingameName": "Glaciate",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "65",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_BOLTSTRIKE": {
        "name": "MOVE_BOLTSTRIKE",
        "changes": [],
        "description": [
            "The user surrounds itself with abundant electricity that can paralyze and charges its target.\r"
        ],
        "ingameName": "Bolt Strike",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "130",
        "type": "TYPE_ELECTRIC",
        "accuracy": "85",
        "PP": "5",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "195",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_BLUEFLARE": {
        "name": "MOVE_BLUEFLARE",
        "changes": [],
        "description": [
            "The user attacks by engulfing the foe in a severe, beautiful, blue flame. It may burn the foe.\r"
        ],
        "ingameName": "Blue Flare",
        "effect": "EFFECT_BURN_HIT",
        "power": "130",
        "type": "TYPE_FIRE",
        "accuracy": "85",
        "PP": "5",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "195",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_FREEZESHOCK": {
        "name": "MOVE_FREEZESHOCK",
        "changes": [],
        "description": [
            "A two-turn attack that hits the foe with electrically charged ice. It may paralyze the foe.\r"
        ],
        "ingameName": "Freeze Shock",
        "effect": "EFFECT_SKY_ATTACK",
        "power": "140",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "5",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Instruct Banned Moves",
            "Metronome Banned Moves",
            "Sleep Talk Banned Moves",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "200",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_ICEBURN": {
        "name": "MOVE_ICEBURN",
        "changes": [],
        "description": [
            "A two-turn attack that surrounds the foe with ultracold, freezing wind. It may burn the foe.\r"
        ],
        "ingameName": "Ice Burn",
        "effect": "EFFECT_SKY_ATTACK",
        "power": "140",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "5",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Instruct Banned Moves",
            "Metronome Banned Moves",
            "Sleep Talk Banned Moves",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_VCREATE": {
        "name": "MOVE_VCREATE",
        "changes": [],
        "description": [
            "The user hurls the hot flame on its forehead. It lowers the user's Def, Sp. Def, and Speed.\r"
        ],
        "ingameName": "V-create",
        "effect": "EFFECT_SUPERPOWER",
        "power": "180",
        "type": "TYPE_FIRE",
        "accuracy": "95",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "220",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_FUSIONFLARE": {
        "name": "MOVE_FUSIONFLARE",
        "changes": [],
        "description": [
            "The user brings down a huge flame. It does more damage when influenced by an enormous bolt.\r"
        ],
        "ingameName": "Fusion Flare",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Moves Can Unfreeze Attacker"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FUSIONBOLT": {
        "name": "MOVE_FUSIONBOLT",
        "changes": [],
        "description": [
            "The user throws down a giant bolt. It does more damage when influenced by an enormous flame.\r"
        ],
        "ingameName": "Fusion Bolt",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FELLSTINGER": {
        "name": "MOVE_FELLSTINGER",
        "changes": [],
        "description": [
            "When the user knocks out a target with this move, the user's Attack stat rises drastically.\r"
        ],
        "ingameName": "Fell Stinger",
        "effect": "EFFECT_ATTACK_UP_HIT",
        "power": "50",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "25",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_NOBLEROAR": {
        "name": "MOVE_NOBLEROAR",
        "changes": [],
        "description": [
            "Letting out a noble roar, the user intimidates the target and lowers its Attack and Sp. Atk.\r"
        ],
        "ingameName": "Noble Roar",
        "effect": "EFFECT_ATTACK_DOWN",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_DRAGONASCENT": {
        "name": "MOVE_DRAGONASCENT",
        "changes": [],
        "description": [
            "The user attacks by dropping off from the sky at high speed. This cuts the user's Defense and Sp. Def.\r"
        ],
        "ingameName": "Dragon Ascent",
        "effect": "EFFECT_SUPERPOWER",
        "power": "120",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_PARTINGSHOT": {
        "name": "MOVE_PARTINGSHOT",
        "changes": [],
        "description": [
            "With a parting threat, the user lowers the foe's Attack and Sp. Atk stats then switches out.\r"
        ],
        "ingameName": "Parting Shot",
        "effect": "EFFECT_BATON_PASS",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESTORE_REPLACEMENT_HP",
        "maxPower": ""
    },
    "MOVE_TOPSYTURVY": {
        "name": "MOVE_TOPSYTURVY",
        "changes": [],
        "description": [
            "All stat changes affecting the target turn topsy-turvy and become the opposite of them.\r"
        ],
        "ingameName": "Topsy-Turvy",
        "effect": "EFFECT_TOPSY_TURVY_ELECTRIFY",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_COREENFORCER": {
        "name": "MOVE_COREENFORCER",
        "changes": [],
        "description": [
            "If the target has already used its move this turn, it nullifies the effect of its Ability.\r"
        ],
        "ingameName": "Core Enforcer",
        "effect": "EFFECT_SKILL_SWAP",
        "power": "100",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_CHATTER": {
        "name": "MOVE_CHATTER",
        "changes": [],
        "description": [
            "The user attacks the target with sound waves of deafening chatter. This confuses the target.\r"
        ],
        "ingameName": "Chatter",
        "effect": "EFFECT_CONFUSE_HIT",
        "power": "80",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Me First Banned Moves",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Sheer Force Affected Moves",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_CONFIDE": {
        "name": "MOVE_CONFIDE",
        "changes": [],
        "description": [
            "The user tells the foe a secret, and it loses concentration. It lowers the foe's Sp.Atk stat.\r"
        ],
        "ingameName": "Confide",
        "effect": "EFFECT_SPECIAL_ATTACK_DOWN",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_WATERSHURIKEN": {
        "name": "MOVE_WATERSHURIKEN",
        "changes": [],
        "description": [
            "The user hits the foe with throwing stars two to five times in a row. This always goes first.\r"
        ],
        "ingameName": "Water Shuriken",
        "effect": "EFFECT_MULTI_HIT",
        "power": "15",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Two To Five Strikes Moves",
            "Prio Plus 1"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_MYSTICALFIRE": {
        "name": "MOVE_MYSTICALFIRE",
        "changes": [],
        "description": [
            "The user attacks by breathing a special, hot fire. This also lowers the target's Sp. Atk stat.\r"
        ],
        "ingameName": "Mystical Fire",
        "effect": "EFFECT_SPECIAL_ATTACK_DOWN_HIT",
        "power": "75",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SPIKYSHIELD": {
        "name": "MOVE_SPIKYSHIELD",
        "changes": [],
        "description": [
            "Aside from protecting the user from attacks, this also damages attackers who make contact.\r"
        ],
        "ingameName": "Spiky Shield",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "4",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Raid Battle Banned Raid Mon Moves",
            "Prio Plus 4"
        ],
        "maxPower": ""
    },
    "MOVE_EERIEIMPULSE": {
        "name": "MOVE_EERIEIMPULSE",
        "changes": [],
        "description": [
            "The user's body generates an impulse. Exposing the foe to it harshly lowers its Sp. Atk stat.\r"
        ],
        "ingameName": "Eerie Impulse",
        "effect": "EFFECT_SPECIAL_ATTACK_DOWN_2",
        "power": "0",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_HOLDBACK": {
        "name": "MOVE_HOLDBACK",
        "changes": [],
        "description": [
            "The user holds back when it attacks, and the target is left with at least 1 HP.\r"
        ],
        "ingameName": "Hold Back",
        "effect": "EFFECT_FALSE_SWIPE",
        "power": "40",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_INFESTATION": {
        "name": "MOVE_INFESTATION",
        "changes": [],
        "description": [
            "The foe is infested and attacked for four to five turns. The target can't flee during this.\r"
        ],
        "ingameName": "Infestation",
        "effect": "EFFECT_TRAP",
        "power": "20",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_POWERUPPUNCH": {
        "name": "MOVE_POWERUPPUNCH",
        "changes": [],
        "description": [
            "Striking over and over hardens the user's fists. Hitting a target raises Attack.\r"
        ],
        "ingameName": "Power-Up Punch",
        "effect": "EFFECT_ATTACK_UP_HIT",
        "power": "40",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves",
            "Sheer Force Affected Moves",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "70",
        "Zeffect": ""
    },
    "MOVE_THOUSANDARROWS": {
        "name": "MOVE_THOUSANDARROWS",
        "changes": [],
        "description": [
            "This move also hits opposing Pokemon in the air. They are knocked down to the ground.\r"
        ],
        "ingameName": "Thousand Arrows",
        "effect": "EFFECT_SMACK_DOWN",
        "power": "90",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves",
            "Ignore In Air Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_THOUSANDWAVES": {
        "name": "MOVE_THOUSANDWAVES",
        "changes": [],
        "description": [
            "The user attacks with a wave that crawls along the ground. Those hit can't flee from battle.\r"
        ],
        "ingameName": "Thousand Waves",
        "effect": "EFFECT_MEAN_LOOK",
        "power": "90",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_PARABOLICCHARGE": {
        "name": "MOVE_PARABOLICCHARGE",
        "changes": [],
        "description": [
            "The user attacks everything around it. The user's HP is restored by half the damage.\r"
        ],
        "ingameName": "Parabolic Charge",
        "effect": "EFFECT_ABSORB",
        "power": "75",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Triage Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SEARINGSHOT": {
        "name": "MOVE_SEARINGSHOT",
        "changes": [],
        "description": [
            "The user torches everything around it in an inferno of scarlet flames. It may burn the foes.\r"
        ],
        "ingameName": "Searing Shot",
        "effect": "EFFECT_BURN_HIT",
        "power": "100",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "5",
        "chance": "30",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Ball Bomb Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SEEDFLARE": {
        "name": "MOVE_SEEDFLARE",
        "changes": [],
        "description": [
            "The user emits a shock wave from its body. This may also harshly lower the target's Sp. Def.\r"
        ],
        "ingameName": "Seed Flare",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "120",
        "type": "TYPE_GRASS",
        "accuracy": "85",
        "PP": "5",
        "chance": "40",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_ACCELEROCK": {
        "name": "MOVE_ACCELEROCK",
        "changes": [],
        "description": [
            "The user smashes into the target at high speed. This move always goes first.\r"
        ],
        "ingameName": "Accelerock",
        "effect": "EFFECT_QUICK_ATTACK",
        "power": "40",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Prio Plus 1"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_ANCHORSHOT": {
        "name": "MOVE_ANCHORSHOT",
        "changes": [],
        "description": [
            "The user entangles the target with its anchor chain while attacking. The target cannot flee.\r"
        ],
        "ingameName": "Anchor Shot",
        "effect": "EFFECT_MEAN_LOOK",
        "power": "80",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_AURORAVEIL": {
        "name": "MOVE_AURORAVEIL",
        "changes": [],
        "description": [
            "This move reduces damage from physical and special moves for five turns during a snowstorm.\r"
        ],
        "ingameName": "Aurora Veil",
        "effect": "EFFECT_REFLECT",
        "power": "0",
        "type": "TYPE_ICE",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_BANEFULBUNKER": {
        "name": "MOVE_BANEFULBUNKER",
        "changes": [],
        "description": [
            "Aside from protecting the user from attacks, this also poisons attackers who make contact.\r"
        ],
        "ingameName": "Baneful Bunker",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_POISON",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "4",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Raid Battle Banned Raid Mon Moves",
            "Prio Plus 4"
        ],
        "maxPower": ""
    },
    "MOVE_BEAKBLAST": {
        "name": "MOVE_BEAKBLAST",
        "changes": [],
        "description": [
            "The user heats up its beak, and attacks. Making contact while heating up causes a burn.\r"
        ],
        "ingameName": "Beak Blast",
        "effect": "EFFECT_FOCUS_PUNCH",
        "power": "100",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "-3",
        "flags": [
            "Protect Affected",
            "Me First Banned Moves",
            "Copycat Banned Moves",
            "Instruct Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Raid Battle Banned Raid Mon Moves",
            "Ball Bomb Moves",
            "Prio Minus 3"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_BRUTALSWING": {
        "name": "MOVE_BRUTALSWING",
        "changes": [],
        "description": [
            "The user swings its body around violently to inflict damage on everything in its vicinity.\r"
        ],
        "ingameName": "Brutal Swing",
        "effect": "EFFECT_HIT",
        "power": "60",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_BURNUP": {
        "name": "MOVE_BURNUP",
        "changes": [
            [
                "power",
                "140"
            ]
        ],
        "description": [
            "The user burns itself out. After using this move, the user will no longer be Fire type.\r"
        ],
        "ingameName": "Burn Up",
        "effect": "EFFECT_BURN_UP",
        "power": "130",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Moves Can Unfreeze Attacker"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_CLANGINGSCALES": {
        "name": "MOVE_CLANGINGSCALES",
        "changes": [
            [
                "power",
                "120"
            ]
        ],
        "description": [
            "The user rubs its scales and makes a huge noise to attack. The user's Def stat goes down.\r"
        ],
        "ingameName": "Clanging Scales",
        "effect": "EFFECT_SUPERPOWER",
        "power": "110",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "5",
        "chance": "100",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_DARKESTLARIAT": {
        "name": "MOVE_DARKESTLARIAT",
        "changes": [],
        "description": [
            "The user swings both arms and hits the target. The target's stat changes are ignored.\r"
        ],
        "ingameName": "Darkest Lariat",
        "effect": "EFFECT_HIT",
        "power": "85",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Ignore Stat Changes Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_DRAGONHAMMER": {
        "name": "MOVE_DRAGONHAMMER",
        "changes": [],
        "description": [
            "The user uses its body like a hammer to attack the target and inflict damage.\r"
        ],
        "ingameName": "Dragon Hammer",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FIRELASH": {
        "name": "MOVE_FIRELASH",
        "changes": [],
        "description": [
            "The user strikes the target with a burning lash. This also lowers the target's Defense stat.\r"
        ],
        "ingameName": "Fire Lash",
        "effect": "EFFECT_DEFENSE_DOWN_HIT",
        "power": "80",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FIRSTIMPRESSION": {
        "name": "MOVE_FIRSTIMPRESSION",
        "changes": [],
        "description": [
            "Although this move has great power, it only works the first turn the user is in battle.\r"
        ],
        "ingameName": "First Impression",
        "effect": "EFFECT_FAKE_OUT",
        "power": "90",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "2",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Prio Plus 2"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FLEURCANNON": {
        "name": "MOVE_FLEURCANNON",
        "changes": [
            [
                "power",
                "140"
            ]
        ],
        "description": [
            "The user unleashes a strong beam. The attack's recoil harshly lowers the user's Sp. Atk stat.\r"
        ],
        "ingameName": "Fleur Cannon",
        "effect": "EFFECT_OVERHEAT",
        "power": "130",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_FLORALHEALING": {
        "name": "MOVE_FLORALHEALING",
        "changes": [],
        "description": [
            "The user restores up to half the max HP of the target. It restores more HP on Grassy Terrain.\r"
        ],
        "ingameName": "Floral Healing",
        "effect": "EFFECT_HEAL_TARGET",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_GEARUP": {
        "name": "MOVE_GEARUP",
        "changes": [],
        "description": [
            "The user engages its gears to raise the Attack and Sp. Atk of allies with the Plus or Minus Ability.\r"
        ],
        "ingameName": "Gear Up",
        "effect": "EFFECT_SPECIAL_ATTACK_UP",
        "power": "0",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Substitute Bypass Moves",
            "Special Whole Field Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_HIGHHORSEPOWER": {
        "name": "MOVE_HIGHHORSEPOWER",
        "changes": [],
        "description": [
            "The user fiercely attacks the target using its entire body.\r"
        ],
        "ingameName": "High Horsepower",
        "effect": "EFFECT_HIT",
        "power": "95",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Striker Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ICEHAMMER": {
        "name": "MOVE_ICEHAMMER",
        "changes": [],
        "description": [
            "The user swings with a heavy, icy fist to attack the target.\r"
        ],
        "ingameName": "Ice Hammer",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_LASERFOCUS": {
        "name": "MOVE_LASERFOCUS",
        "changes": [],
        "description": [
            "The user concentrates intensely. The attack on the next turn always results in a critical hit.\r"
        ],
        "ingameName": "Laser Focus",
        "effect": "EFFECT_LOCK_ON",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_LEAFAGE": {
        "name": "MOVE_LEAFAGE",
        "changes": [],
        "description": [
            "The user attacks by pelting the target with leaves.\r"
        ],
        "ingameName": "Leafage",
        "effect": "EFFECT_HIT",
        "power": "40",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_LIQUIDATION": {
        "name": "MOVE_LIQUIDATION",
        "changes": [],
        "description": [
            "The user slams into the foe using a full-force water blast. This may lower the foe's Defense.\r"
        ],
        "ingameName": "Liquidation",
        "effect": "EFFECT_DEFENSE_DOWN_HIT",
        "power": "85",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "10",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_LUNGE": {
        "name": "MOVE_LUNGE",
        "changes": [],
        "description": [
            "The user makes a lunge at the foe, attacking with full force. This lowers the foe's Attack.\r"
        ],
        "ingameName": "Lunge",
        "effect": "EFFECT_ATTACK_DOWN_HIT",
        "power": "80",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_MOONGEISTBEAM": {
        "name": "MOVE_MOONGEISTBEAM",
        "changes": [],
        "description": [
            "The user emits a sinister ray. This can be used on the target regardless of its Ability.\r"
        ],
        "ingameName": "Moongeist Beam",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Mold Breaker Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_MULTIATTACK": {
        "name": "MOVE_MULTIATTACK",
        "changes": [],
        "description": [
            "Cloaking itself in high energy, the user slams into the foe. Its type depends on the memory.\r"
        ],
        "ingameName": "Multi-Attack",
        "effect": "EFFECT_HIT",
        "power": "120",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Type Change Exception Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "95",
        "Zeffect": ""
    },
    "MOVE_NATURESMADNESS": {
        "name": "MOVE_NATURESMADNESS",
        "changes": [],
        "description": [
            "The user hits the target with the force of nature. It halves the target's HP.\r"
        ],
        "ingameName": "Nature's Madness",
        "effect": "EFFECT_SUPER_FANG",
        "power": "1",
        "type": "TYPE_FAIRY",
        "accuracy": "90",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_POLLENPUFF": {
        "name": "MOVE_POLLENPUFF",
        "changes": [],
        "description": [
            "The user attacks the foe with exploding pollen puff. If target is an ally, it heals instead.\r"
        ],
        "ingameName": "Pollen Puff",
        "effect": "EFFECT_HEAL_TARGET",
        "power": "90",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Ball Bomb Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_POWERTRIP": {
        "name": "MOVE_POWERTRIP",
        "changes": [],
        "description": [
            "The user boasts its strength. The more the user's stats are raised, the greater the power.\r"
        ],
        "ingameName": "Power Trip",
        "effect": "EFFECT_HIT",
        "power": "20",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_PRISMATICLASER": {
        "name": "MOVE_PRISMATICLASER",
        "changes": [],
        "description": [
            "The user shoots powerful lasers using prism power. The user can't move on the next turn.\r"
        ],
        "ingameName": "Prismaticlaser",
        "effect": "EFFECT_RECHARGE",
        "power": "160",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "1",
        "chance": "50",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Moves That Require Recharging"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_PSYCHICFANGS": {
        "name": "MOVE_PSYCHICFANGS",
        "changes": [],
        "description": [
            "The user bites the target with psychic capabilities. This destroys Light Screen and Reflect.\r"
        ],
        "ingameName": "Psychic Fangs",
        "effect": "EFFECT_BRICK_BREAK",
        "power": "85",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Strong Jaw Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_PURIFY": {
        "name": "MOVE_PURIFY",
        "changes": [],
        "description": [
            "The user heals the target's status condition. If the move succeeds, it also heals the user's HP.\r"
        ],
        "ingameName": "Purify",
        "effect": "EFFECT_RESTORE_HP",
        "power": "0",
        "type": "TYPE_POISON",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ALL_STATS_UP_1",
        "maxPower": ""
    },
    "MOVE_REVELATIONDANCE": {
        "name": "MOVE_REVELATIONDANCE",
        "changes": [],
        "description": [
            "The user attacks the target by dancing very hard. The user's type determines this move's type.\r"
        ],
        "ingameName": "Revelation Dance",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Dance Moves",
            "Type Change Exception Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SHADOWBONE": {
        "name": "MOVE_SHADOWBONE",
        "changes": [],
        "description": [
            "The user attacks by beating the foe with a bone that has a spirit. It may lower Defense.\r"
        ],
        "ingameName": "Shadow Bone",
        "effect": "EFFECT_DEFENSE_DOWN_HIT",
        "power": "85",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "10",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Bone Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SHELLTRAP": {
        "name": "MOVE_SHELLTRAP",
        "changes": [],
        "description": [
            "The user sets a shell trap. If the user is hit by a physical move, the trap will explode.\r"
        ],
        "ingameName": "Shell Trap",
        "effect": "EFFECT_FOCUS_PUNCH",
        "power": "150",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "-3",
        "flags": [
            "Protect Affected",
            "Me First Banned Moves",
            "Copycat Banned Moves",
            "Instruct Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Raid Battle Banned Raid Mon Moves",
            "Prio Minus 3"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_SHOREUP": {
        "name": "MOVE_SHOREUP",
        "changes": [],
        "description": [
            "The user regains up to half of its max HP. It restores more HP in a sandstorm.\r"
        ],
        "ingameName": "Shore Up",
        "effect": "EFFECT_MORNING_SUN",
        "power": "0",
        "type": "TYPE_GROUND",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_SMARTSTRIKE": {
        "name": "MOVE_SMARTSTRIKE",
        "changes": [],
        "description": [
            "The user stabs the target with a sharp horn. This attack never misses.\r"
        ],
        "ingameName": "Smart Strike",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "70",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SOLARBLADE": {
        "name": "MOVE_SOLARBLADE",
        "changes": [],
        "description": [
            "In this two-turn move, the user gathers light and fills a blade with light's energy to attack.\r"
        ],
        "ingameName": "Solar Blade",
        "effect": "EFFECT_SOLARBEAM",
        "power": "125",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Instruct Banned Moves",
            "Sleep Talk Banned Moves",
            "Sharpness Affected Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_SPARKLINGARIA": {
        "name": "MOVE_SPARKLINGARIA",
        "changes": [],
        "description": [
            "The user bursts into song, emitting bubbles. Any burnt Pokemon will be healed.\r"
        ],
        "ingameName": "Sparkling Aria",
        "effect": "EFFECT_SMELLINGSALT",
        "power": "90",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SPECTRALTHIEF": {
        "name": "MOVE_SPECTRALTHIEF",
        "changes": [],
        "description": [
            "The user hides in the target's shadow, steals the target's stat boosts,and then attacks.\r"
        ],
        "ingameName": "Spectral Thief",
        "effect": "EFFECT_PSYCH_UP",
        "power": "90",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SPEEDSWAP": {
        "name": "MOVE_SPEEDSWAP",
        "changes": [],
        "description": [
            "The user exchanges Speed stats with the target.\r"
        ],
        "ingameName": "Speed Swap",
        "effect": "EFFECT_STAT_SWAP_SPLIT",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_SPIRITSHACKLE": {
        "name": "MOVE_SPIRITSHACKLE",
        "changes": [],
        "description": [
            "The user attacks while stitching the target's shadow to the ground to prevent escape.\r"
        ],
        "ingameName": "Spirit Shackle",
        "effect": "EFFECT_MEAN_LOOK",
        "power": "80",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SPOTLIGHT": {
        "name": "MOVE_SPOTLIGHT",
        "changes": [],
        "description": [
            "The user shines a spotlight on the target so that only the target will be attacked.\r"
        ],
        "ingameName": "Spotlight",
        "effect": "EFFECT_FOLLOW_ME",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "3",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Prio Plus 3"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_STOMPINGTANTRUM": {
        "name": "MOVE_STOMPINGTANTRUM",
        "changes": [],
        "description": [
            "If the user's previous moves has failed, the power of this move doubles.\r"
        ],
        "ingameName": "Stomping Tantrum",
        "effect": "EFFECT_HIT",
        "power": "75",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_STRENGTHSAP": {
        "name": "MOVE_STRENGTHSAP",
        "changes": [],
        "description": [
            "The user drains HP equal to the foe's Attack and lowers it. \r"
        ],
        "ingameName": "Strength Sap",
        "effect": "EFFECT_ABSORB",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Triage Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_SUNSTEELSTRIKE": {
        "name": "MOVE_SUNSTEELSTRIKE",
        "changes": [],
        "description": [
            "The user slams the target with a meteor force. This move disregards the target's Ability.\r"
        ],
        "ingameName": "Sunsteel Strike",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Mold Breaker Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_TEARFULLOOK": {
        "name": "MOVE_TEARFULLOOK",
        "changes": [],
        "description": [
            "The user gets teary eyed to look pitiful. This lowers the target's Attack and Sp. Atk stats.\r"
        ],
        "ingameName": "Tearful Look",
        "effect": "EFFECT_ATTACK_DOWN",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_THROATCHOP": {
        "name": "MOVE_THROATCHOP",
        "changes": [],
        "description": [
            "The user attacks the foe's throat to prevent it from using moves that emit sound for two turns.\r"
        ],
        "ingameName": "Throat Chop",
        "effect": "EFFECT_ATTACK_BLOCKERS",
        "power": "80",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_TOXICTHREAD": {
        "name": "MOVE_TOXICTHREAD",
        "changes": [],
        "description": [
            "The user shoots poisonous threads to poison the target and lower the target's Speed stat.\r"
        ],
        "ingameName": "Toxic Thread",
        "effect": "EFFECT_POISON",
        "power": "0",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_TROPKICK": {
        "name": "MOVE_TROPKICK",
        "changes": [],
        "description": [
            "The user lands an intense kick of tropical origins on the target. It lowers Attack.\r"
        ],
        "ingameName": "Trop Kick",
        "effect": "EFFECT_ATTACK_DOWN_HIT",
        "power": "70",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Striker Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_ZINGZAP": {
        "name": "MOVE_ZINGZAP",
        "changes": [],
        "description": [
            "A strong electric blast crashes down on the target. This may make the target flinch.\r"
        ],
        "ingameName": "Zing Zap",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "80",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Flinch Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ELECTRICTERRAIN": {
        "name": "MOVE_ELECTRICTERRAIN",
        "changes": [],
        "description": [
            "The user electrifies the ground for five turns, powering up Electric moves and eluding sleep.\r"
        ],
        "ingameName": "Electric Terrain",
        "effect": "EFFECT_SET_TERRAIN",
        "power": "0",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "flags": [
            "",
            "Hardcore Banned Moves",
            "Sky Battle Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_GRASSYTERRAIN": {
        "name": "MOVE_GRASSYTERRAIN",
        "changes": [],
        "description": [
            "The user turns the ground to grass for five turns, powering up Grass moves and restoring HP.\r"
        ],
        "ingameName": "Grassy Terrain",
        "effect": "EFFECT_SET_TERRAIN",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "flags": [
            "",
            "Hardcore Banned Moves",
            "Sky Battle Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_MISTYTERRAIN": {
        "name": "MOVE_MISTYTERRAIN",
        "changes": [],
        "description": [
            "The user covers the ground in mist for five turns, halving Dragon moves and preventing status.\r"
        ],
        "ingameName": "Misty Terrain",
        "effect": "EFFECT_SET_TERRAIN",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "flags": [
            "",
            "Hardcore Banned Moves",
            "Sky Battle Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_PSYCHICTERRAIN": {
        "name": "MOVE_PSYCHICTERRAIN",
        "changes": [],
        "description": [
            "The user makes the ground weird for five turns, boosting Psychic moves and blocking priority.\r"
        ],
        "ingameName": "Psychic Terrain",
        "effect": "EFFECT_SET_TERRAIN",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "flags": [
            "",
            "Hardcore Banned Moves",
            "Sky Battle Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_GRASSPLEDGE": {
        "name": "MOVE_GRASSPLEDGE",
        "changes": [],
        "description": [
            "When used with its water equivalent, its power increases and a vast swamp appears.\r"
        ],
        "ingameName": "Grass Pledge",
        "effect": "EFFECT_PLEDGE",
        "power": "80",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FIREPLEDGE": {
        "name": "MOVE_FIREPLEDGE",
        "changes": [],
        "description": [
            "When used with its grass equivalent, its power increases and a vast sea of fire appears.\r"
        ],
        "ingameName": "Fire Pledge",
        "effect": "EFFECT_PLEDGE",
        "power": "80",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_WATERPLEDGE": {
        "name": "MOVE_WATERPLEDGE",
        "changes": [],
        "description": [
            "When combined with its fire equivalent, its power increases and a rainbow appears.\r"
        ],
        "ingameName": "Water Pledge",
        "effect": "EFFECT_PLEDGE",
        "power": "80",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sky Battle Banned Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_TRICKROOM": {
        "name": "MOVE_TRICKROOM",
        "changes": [],
        "description": [
            "The user creates a bizarre area in which slower Pokemon get to move first for five turns.\r"
        ],
        "ingameName": "Trick Room",
        "effect": "EFFECT_FIELD_EFFECTS",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "-7",
        "flags": [
            "Mirror Move Affected",
            "Hardcore Banned Moves",
            "Prio Minus 7"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ACC_UP_1",
        "maxPower": ""
    },
    "MOVE_MAGICROOM": {
        "name": "MOVE_MAGICROOM",
        "changes": [],
        "description": [
            "The user creates a bizarre area in which Pokemon's held items lose effect for five turns.\r"
        ],
        "ingameName": "Magic Room",
        "effect": "EFFECT_FIELD_EFFECTS",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_WONDERROOM": {
        "name": "MOVE_WONDERROOM",
        "changes": [],
        "description": [
            "The user creates a bizarre area where Pokemon's Defense and Sp. Def swap for five turns.\r"
        ],
        "ingameName": "Wonder Room",
        "effect": "EFFECT_FIELD_EFFECTS",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_CRAFTYSHIELD": {
        "name": "MOVE_CRAFTYSHIELD",
        "changes": [],
        "description": [
            "The user protects itself and its allies from status moves with a mysterious power.\r"
        ],
        "ingameName": "Craftyshield",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "3",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "flags": [
            "",
            "Metronome Banned Moves",
            "Prio Plus 3"
        ],
        "maxPower": ""
    },
    "MOVE_MATBLOCK": {
        "name": "MOVE_MATBLOCK",
        "changes": [],
        "description": [
            "Using a pulled-up mat as a shield, the user protects itself and its allies from damaging moves.\r"
        ],
        "ingameName": "Mat Block",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Sky Battle Banned Moves",
            "Raid Battle Banned Raid Mon Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_QUICKGUARD": {
        "name": "MOVE_QUICKGUARD",
        "changes": [],
        "description": [
            "The user protects itself and its allies from priority moves.\r"
        ],
        "ingameName": "Quick Guard",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "3",
        "flags": [
            "Snatch Affected",
            "Metronome Banned Moves",
            "Raid Battle Banned Raid Mon Moves",
            "Prio Plus 3"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_WIDEGUARD": {
        "name": "MOVE_WIDEGUARD",
        "changes": [],
        "description": [
            "The user protects itself and its allies from wide- ranged attacks. It may fail.\r"
        ],
        "ingameName": "Wide Guard",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_ROCK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "3",
        "flags": [
            "Snatch Affected",
            "Metronome Banned Moves",
            "Hardcore Banned Moves",
            "Raid Battle Banned Raid Mon Moves",
            "Prio Plus 3"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_AQUARING": {
        "name": "MOVE_AQUARING",
        "changes": [],
        "description": [
            "The user envelops itself in a veil made of water. It regains some HP every turn.\r"
        ],
        "ingameName": "Aqua Ring",
        "effect": "EFFECT_INGRAIN",
        "power": "0",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_AROMATICMIST": {
        "name": "MOVE_AROMATICMIST",
        "changes": [],
        "description": [
            "The user raises the Sp. Def stat of an ally Pokemon by using a mysterious aroma.\r"
        ],
        "ingameName": "Aromatic Mist",
        "effect": "EFFECT_DEFENSE_UP",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_2",
        "flags": [
            "",
            "Substitute Bypass Moves"
        ],
        "maxPower": ""
    },
    "MOVE_BELCH": {
        "name": "MOVE_BELCH",
        "changes": [],
        "description": [
            "The user lets out a damaging belch at the target. The user must eat a held Berry to use this.\r"
        ],
        "ingameName": "Belch",
        "effect": "EFFECT_RECYCLE",
        "power": "120",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Me First Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "95",
        "Zeffect": ""
    },
    "MOVE_BESTOW": {
        "name": "MOVE_BESTOW",
        "changes": [],
        "description": [
            "The user passes its held item to the target when the target isn't holding an item.\r"
        ],
        "ingameName": "Bestow",
        "effect": "EFFECT_TRICK",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Mirror Move Affected",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_2",
        "maxPower": ""
    },
    "MOVE_FLING": {
        "name": "MOVE_FLING",
        "changes": [],
        "description": [
            "The user flings its held item at the target to attack. Its power and effect depend on the item.\r"
        ],
        "ingameName": "Fling",
        "effect": "EFFECT_FLING",
        "power": "1",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Parental Bond Banned Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_FLYINGPRESS": {
        "name": "MOVE_FLYINGPRESS",
        "changes": [],
        "description": [
            "The user dives down onto the target from the sky. This move is both Fighting and Flying type.\r"
        ],
        "ingameName": "Flying Press",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Gravity Banned Moves",
            "Sky Battle Banned Moves",
            "Always Hit When Minimized Moves"
        ],
        "Zpower": "170",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_GRAVITY": {
        "name": "MOVE_GRAVITY",
        "changes": [],
        "description": [
            "Gravity intensifies for five turns, preventing moves that use flight and negating Levitate.\r"
        ],
        "ingameName": "Gravity",
        "effect": "EFFECT_FIELD_EFFECTS",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "flags": [
            "",
            "Sky Battle Banned Moves",
            "Special Whole Field Moves"
        ],
        "maxPower": ""
    },
    "MOVE_GUARDSPLIT": {
        "name": "MOVE_GUARDSPLIT",
        "changes": [],
        "description": [
            "The user employs its psychic power to average its Defense and Sp. Def stats with the target.\r"
        ],
        "ingameName": "Guard Split",
        "effect": "EFFECT_STAT_SWAP_SPLIT",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_HEALBLOCK": {
        "name": "MOVE_HEALBLOCK",
        "changes": [],
        "description": [
            "The user prevents the opposing team from using any HP recovery for five turns.\r"
        ],
        "ingameName": "Heal Block",
        "effect": "EFFECT_ATTACK_BLOCKERS",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Aroma Veil Protected Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_2",
        "maxPower": ""
    },
    "MOVE_IONDELUGE": {
        "name": "MOVE_IONDELUGE",
        "changes": [],
        "description": [
            "The user disperses electrically charged particles, changing Normal- to Electric- type moves.\r"
        ],
        "ingameName": "Ion Deluge",
        "effect": "EFFECT_FIELD_EFFECTS",
        "power": "0",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "25",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "1",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "flags": [
            "",
            "Prio Plus 1"
        ],
        "maxPower": ""
    },
    "MOVE_LUCKYCHANT": {
        "name": "MOVE_LUCKYCHANT",
        "changes": [],
        "description": [
            "The user chants an incantation that prevents foes from landing critical hits for five turns.\r"
        ],
        "ingameName": "Lucky Chant",
        "effect": "EFFECT_TEAM_EFFECTS",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_EVSN_UP_1",
        "maxPower": ""
    },
    "MOVE_MAGNETRISE": {
        "name": "MOVE_MAGNETRISE",
        "changes": [],
        "description": [
            "The user levitates using electrically generated magnetism for five turns.\r"
        ],
        "ingameName": "Magnet Rise",
        "effect": "EFFECT_TEAM_EFFECTS",
        "power": "0",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Gravity Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_EVSN_UP_1",
        "maxPower": ""
    },
    "MOVE_MAGNETICFLUX": {
        "name": "MOVE_MAGNETICFLUX",
        "changes": [],
        "description": [
            "The user manipulates magnets to up Def and Sp. Def stats of allies with Plus or Minus Ability.\r"
        ],
        "ingameName": "Magnetic Flux",
        "effect": "EFFECT_DEFENSE_UP",
        "power": "0",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Substitute Bypass Moves",
            "Special Whole Field Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_1",
        "maxPower": ""
    },
    "MOVE_POWDER": {
        "name": "MOVE_POWDER",
        "changes": [],
        "description": [
            "The user covers the target in a powder that explodes if it uses a Fire-type move.\r"
        ],
        "ingameName": "Powder",
        "effect": "EFFECT_ATTACK_BLOCKERS",
        "power": "0",
        "type": "TYPE_BUG",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves",
            "Powder Moves",
            "Substitute Bypass Moves",
            "Prio Plus 1"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPDEF_UP_2",
        "maxPower": ""
    },
    "MOVE_POWERSPLIT": {
        "name": "MOVE_POWERSPLIT",
        "changes": [],
        "description": [
            "The user employs its psychic power to average its Attack and Sp. Atk stats with the target.\r"
        ],
        "ingameName": "Power Split",
        "effect": "EFFECT_STAT_SWAP_SPLIT",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_REFLECTTYPE": {
        "name": "MOVE_REFLECTTYPE",
        "changes": [],
        "description": [
            "The user reflects the target's type, making it the same type as the target.\r"
        ],
        "ingameName": "Reflect Type",
        "effect": "EFFECT_CONVERSION",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_SIMPLEBEAM": {
        "name": "MOVE_SIMPLEBEAM",
        "changes": [],
        "description": [
            "The user's mysterious psychic wave changes the target's Ability to Simple.\r"
        ],
        "ingameName": "Simple Beam",
        "effect": "EFFECT_SKILL_SWAP",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_SOAK": {
        "name": "MOVE_SOAK",
        "changes": [],
        "description": [
            "The user shoots a torrent of water at the target and changes the target's type to Water.\r"
        ],
        "ingameName": "Soak",
        "effect": "EFFECT_TYPE_CHANGES",
        "power": "0",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_TELEKINESIS": {
        "name": "MOVE_TELEKINESIS",
        "changes": [],
        "description": [
            "The user makes the target float with psychic power. The target is easier to hit for three turns.\r"
        ],
        "ingameName": "Telekinesis",
        "effect": "EFFECT_ATTACK_BLOCKERS",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Gravity Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_TRICKORTREAT": {
        "name": "MOVE_TRICKORTREAT",
        "changes": [],
        "description": [
            "The foe is brought trick-or-treating. This adds Ghost type to the target's type.\r"
        ],
        "ingameName": "Trick-or-Treat",
        "effect": "EFFECT_TYPE_CHANGES",
        "power": "0",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ALL_STATS_UP_1",
        "maxPower": ""
    },
    "MOVE_VENOMDRENCH": {
        "name": "MOVE_VENOMDRENCH",
        "changes": [],
        "description": [
            "The user sprays a poisonous liquid that lowers Attack, Sp. Atk, and Speed of poisoned foes.\r"
        ],
        "ingameName": "Venom Drench",
        "effect": "EFFECT_ATTACK_DOWN",
        "power": "0",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_FORESTSCURSE": {
        "name": "MOVE_FORESTSCURSE",
        "changes": [],
        "description": [
            "The user puts a forest curse on the target. The target is now Grass type as well.\r"
        ],
        "ingameName": "Forest's Curse",
        "effect": "EFFECT_TYPE_CHANGES",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MINDBLOWN": {
        "name": "MOVE_MINDBLOWN",
        "changes": [],
        "description": [
            "The user attacks everything around it by making its head explode. This also damages the user.\r"
        ],
        "ingameName": "Mind Blown",
        "effect": "EFFECT_HIT",
        "power": "150",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Raid Battle Banned Raid Mon Moves",
            "Recoil Moves"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_PHOTONGEYSER": {
        "name": "MOVE_PHOTONGEYSER",
        "changes": [],
        "description": [
            "A pillar of light that deals physical or special damage based on the user's better stat.\r"
        ],
        "ingameName": "Photon Geyser",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Mold Breaker Moves",
            "Moves That Change Physicality"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_PLASMAFISTS": {
        "name": "MOVE_PLASMAFISTS",
        "changes": [],
        "description": [
            "The user attacks with electrically charged fists. This makes Normal-type moves Electric-type.\r"
        ],
        "ingameName": "Plasma Fists",
        "effect": "EFFECT_FIELD_EFFECTS",
        "power": "100",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ELECTRIFY": {
        "name": "MOVE_ELECTRIFY",
        "changes": [],
        "description": [
            "If the target is electrified before its move in the turn, the target's move becomes Electric.\r"
        ],
        "ingameName": "Electrify",
        "effect": "EFFECT_TOPSY_TURVY_ELECTRIFY",
        "power": "0",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_EMBARGO": {
        "name": "MOVE_EMBARGO",
        "changes": [],
        "description": [
            "It prevents the target from using items. Its Trainer also can't use items on it.\r"
        ],
        "ingameName": "Embargo",
        "effect": "EFFECT_ATTACK_BLOCKERS",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_FAIRYLOCK": {
        "name": "MOVE_FAIRYLOCK",
        "changes": [],
        "description": [
            "By locking down the battlefield, the user keeps all Pokemon from fleeing during the next turn.\r"
        ],
        "ingameName": "Fairy Lock",
        "effect": "EFFECT_FAIRY_LOCK_HAPPY_HOUR",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Mirror Move Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "maxPower": ""
    },
    "MOVE_LIGHTOFRUIN": {
        "name": "MOVE_LIGHTOFRUIN",
        "changes": [],
        "description": [
            "The user fires a powerful beam of light. This also damages the user.\r"
        ],
        "ingameName": "Light of Ruin",
        "effect": "EFFECT_RECOIL",
        "power": "140",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Reckless Boosted Moves",
            "Recoil Moves"
        ],
        "Zpower": "200",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_TRUMPCARD": {
        "name": "MOVE_TRUMPCARD",
        "changes": [],
        "description": [
            "The fewer PP this move has, the greater its power.\r"
        ],
        "ingameName": "Trump Card",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_AFTERYOU": {
        "name": "MOVE_AFTERYOU",
        "changes": [],
        "description": [
            "The user helps the target and makes it use its move right after the user.\r"
        ],
        "ingameName": "After You",
        "effect": "EFFECT_INSTRUCT_AFTER_YOU_QUASH",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "flags": [
            "",
            "Metronome Banned Moves",
            "Substitute Bypass Moves"
        ],
        "maxPower": ""
    },
    "MOVE_INSTRUCT": {
        "name": "MOVE_INSTRUCT",
        "changes": [],
        "description": [
            "The user instructs the target to use the target's last move again.\r"
        ],
        "ingameName": "Instruct",
        "effect": "EFFECT_INSTRUCT_AFTER_YOU_QUASH",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Instruct Banned Moves",
            "Metronome Banned Moves",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_QUASH": {
        "name": "MOVE_QUASH",
        "changes": [],
        "description": [
            "The user suppresses the target and makes its move go last.\r"
        ],
        "ingameName": "Quash",
        "effect": "EFFECT_INSTRUCT_AFTER_YOU_QUASH",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_HAPPYHOUR": {
        "name": "MOVE_HAPPYHOUR",
        "changes": [],
        "description": [
            "This move triples the amount of prize money won after battle.\r"
        ],
        "ingameName": "Happy Hour",
        "effect": "EFFECT_FAIRY_LOCK_HAPPY_HOUR",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "30",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ALL_STATS_UP_1",
        "flags": [
            ""
        ],
        "maxPower": ""
    },
    "MOVE_DOUBLEIRONBASH": {
        "name": "MOVE_DOUBLEIRONBASH",
        "changes": [],
        "description": [
            "The user centers its hex nut and strikes twice with its arms. It may cause flinching.\r"
        ],
        "ingameName": "Double Iron Bash",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "60",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "5",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Iron Fist Affected Moves",
            "Always Hit When Minimized Moves",
            "Flinch Chance Moves",
            "Two Strikes Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_LASTRESORT": {
        "name": "MOVE_LASTRESORT",
        "changes": [],
        "description": [
            "It can only be used after the user has exhausted all other moves it knows in battle.\r"
        ],
        "ingameName": "Last Resort",
        "effect": "EFFECT_LASTRESORT_SKYDROP",
        "power": "140",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "200",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_SKYDROP": {
        "name": "MOVE_SKYDROP",
        "changes": [],
        "description": [
            "It takes the enemy into the sky, where it can't attack. It is dropped next turn.\r"
        ],
        "ingameName": "Sky Drop",
        "effect": "EFFECT_LASTRESORT_SKYDROP",
        "power": "60",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Gravity Banned Moves",
            "Instruct Banned Moves",
            "Assist Banned Moves",
            "Sleep Talk Banned Moves",
            "Dynamax Banned Moves"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_CELEBRATE": {
        "name": "MOVE_CELEBRATE",
        "changes": [],
        "description": [
            "The Pokemon congratulates you on your special day!\r"
        ],
        "ingameName": "Celebrate",
        "effect": "EFFECT_FAIRY_LOCK_HAPPY_HOUR",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ALL_STATS_UP_1",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_HOLDHANDS": {
        "name": "MOVE_HOLDHANDS",
        "changes": [],
        "description": [
            "The user and an ally hold hands. This makes them very happy.\r"
        ],
        "ingameName": "Hold Hands",
        "effect": "EFFECT_FAIRY_LOCK_HAPPY_HOUR",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_ALL_STATS_UP_1",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Substitute Bypass Moves"
        ],
        "maxPower": ""
    },
    "MOVE_DYNAMAXCANNON": {
        "name": "MOVE_DYNAMAXCANNON",
        "changes": [],
        "description": [
            "The user unleashes a strong beam that deals double damage to Dynamaxed targets.\r"
        ],
        "ingameName": "Dynamax Cannon",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected"
        ],
        "split": "SPLIT_SPECIAL",
        "Zpower": "180",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_SNIPESHOT": {
        "name": "MOVE_SNIPESHOT",
        "changes": [],
        "description": [
            "The user ignores the effects of moves and Abilities that draw in moves.\r"
        ],
        "ingameName": "Snipe Shot",
        "effect": "EFFECT_IGNORE_REDIRECTION",
        "power": "70",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Mega Launcher Affected Moves",
            "Ball Bomb Moves",
            "High Critical Chance Moves"
        ],
        "split": "SPLIT_SPECIAL",
        "Zpower": "160",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_JAWLOCK": {
        "name": "MOVE_JAWLOCK",
        "changes": [],
        "description": [
            "The user bites down, preventing the tar- get from switching out.\r"
        ],
        "ingameName": "Jaw Lock",
        "effect": "EFFECT_MEAN_LOOK",
        "power": "90",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Strong Jaw Affected Moves"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "160",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_STUFFCHEEKS": {
        "name": "MOVE_STUFFCHEEKS",
        "changes": [],
        "description": [
            "The user consumes its held Berry, then raises its Defense sharply.\r"
        ],
        "ingameName": "Stuff Cheeks",
        "effect": "EFFECT_DEFENSE_UP_2",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected"
        ],
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_NORETREAT": {
        "name": "MOVE_NORETREAT",
        "changes": [],
        "description": [
            "All of the user's stats are raised, but it can no longer switch out or flee.\r"
        ],
        "ingameName": "No Retreat",
        "effect": "EFFECT_EXTREME_EVOBOOST",
        "power": "0",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Forbidden Spell Moves",
            "Hardcore Banned Moves"
        ],
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_TARSHOT": {
        "name": "MOVE_TARSHOT",
        "changes": [],
        "description": [
            "Sticky tar lowers the target's Speed, and makes it weaker to Fire-type moves.\r"
        ],
        "ingameName": "Tar Shot",
        "effect": "EFFECT_SPEED_DOWN",
        "power": "0",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected"
        ],
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_MAGICPOWDER": {
        "name": "MOVE_MAGICPOWDER",
        "changes": [],
        "description": [
            "The user scatters magic powder that changes the target into a Psychic-type.\r"
        ],
        "ingameName": "Magic Powder",
        "effect": "EFFECT_TYPE_CHANGES",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Magic Coat Affected",
            "Mirror Move Affected",
            "Powder Moves"
        ],
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "Zeffect": "Z_EFFECT_SPATK_UP_1",
        "maxPower": ""
    },
    "MOVE_DRAGONDARTS": {
        "name": "MOVE_DRAGONDARTS",
        "changes": [],
        "description": [
            "The user attacks twice. If there are two targets, each is hit once.\r"
        ],
        "ingameName": "Dragon Darts",
        "power": "50",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Two Strikes Moves"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "100",
        "maxPower": "130",
        "effect": "",
        "Zeffect": ""
    },
    "MOVE_TEATIME": {
        "name": "MOVE_TEATIME",
        "changes": [],
        "description": [
            "All Pokemon on the field have teatime. Each Pokemon eats its held Berry.\r"
        ],
        "ingameName": "Teatime",
        "effect": "EFFECT_TEATIME",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "Zeffect": "Z_EFFECT_ALL_STATS_UP_1",
        "flags": [
            "",
            "Randomizer Banned Moves",
            "Randomizer Banned Moves",
            "Substitute Bypass Moves"
        ],
        "maxPower": ""
    },
    "MOVE_OCTOLOCK": {
        "name": "MOVE_OCTOLOCK",
        "changes": [],
        "description": [
            "The user traps the foe and makes its Defense and Sp. Def fall each turn.\r"
        ],
        "ingameName": "Octolock",
        "effect": "EFFECT_MEAN_LOOK",
        "power": "0",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "Zeffect": "Z_EFFECT_ATK_UP_1",
        "maxPower": ""
    },
    "MOVE_BOLTBEAK": {
        "name": "MOVE_BOLTBEAK",
        "changes": [],
        "description": [
            "If the user moves before the target, the power of this move is doubled.\r"
        ],
        "ingameName": "Bolt Beak",
        "power": "85",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "160",
        "maxPower": "130",
        "effect": "",
        "Zeffect": ""
    },
    "MOVE_FISHIOUSREND": {
        "name": "MOVE_FISHIOUSREND",
        "changes": [],
        "description": [
            "If the user moves before the target, the power of this move is doubled.\r"
        ],
        "ingameName": "Fishious Rend",
        "power": "85",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Strong Jaw Affected Moves"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "160",
        "maxPower": "130",
        "effect": "",
        "Zeffect": ""
    },
    "MOVE_COURTCHANGE": {
        "name": "MOVE_COURTCHANGE",
        "changes": [],
        "description": [
            "The user swaps the effects on either side of the field.\r"
        ],
        "ingameName": "Court Change",
        "effect": "EFFECT_RAPID_SPIN",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Mirror Move Affected",
            "Hardcore Banned Moves"
        ],
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "maxPower": ""
    },
    "MOVE_CLANGOROUSSOUL": {
        "name": "MOVE_CLANGOROUSSOUL",
        "changes": [],
        "description": [
            "The user raises all of its stats by using some of its HP.\r"
        ],
        "ingameName": "Clangorous Soul",
        "effect": "EFFECT_EXTREME_EVOBOOST",
        "power": "0",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves",
            "Dance Moves",
            "Punk Rock Affected Moves"
        ],
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_BODYPRESS": {
        "name": "MOVE_BODYPRESS",
        "changes": [],
        "description": [
            "The higher the user's Defense, the more damage it will inflict.\r"
        ],
        "ingameName": "Body Press",
        "power": "80",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "160",
        "maxPower": "90",
        "effect": "",
        "Zeffect": ""
    },
    "MOVE_DECORATE": {
        "name": "MOVE_DECORATE",
        "changes": [],
        "description": [
            "The user sharply raises the target's Attack and Sp. Atk by decorating it.\r"
        ],
        "ingameName": "Decorate",
        "effect": "EFFECT_HELPING_HAND",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "flags": [
            "",
            "Metronome Banned Moves",
            "Hardcore Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_DRUMBEATING": {
        "name": "MOVE_DRUMBEATING",
        "changes": [],
        "description": [
            "The user plays its drum to attack. The target's Speed stat is lowered.\r"
        ],
        "ingameName": "Drum Beating",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "80",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Sheer Force Affected Moves"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "160",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SNAPTRAP": {
        "name": "MOVE_SNAPTRAP",
        "changes": [],
        "description": [
            "The user snares the target in a snap trap for four to five turns.\r"
        ],
        "ingameName": "Snap Trap",
        "effect": "EFFECT_TRAP",
        "power": "100",
        "type": "TYPE_STEEL",
        "accuracy": "85",
        "PP": "5",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "180",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_PYROBALL": {
        "name": "MOVE_PYROBALL",
        "changes": [],
        "description": [
            "The user launches a fiery ball at the target. It may also cause a burn.\r"
        ],
        "ingameName": "Pyro Ball",
        "effect": "EFFECT_BURN_HIT",
        "power": "120",
        "type": "TYPE_FIRE",
        "accuracy": "90",
        "PP": "5",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Striker Affected Moves",
            "Ball Bomb Moves",
            "Moves Can Unfreeze Attacker"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "190",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_BEHEMOTHBLADE": {
        "name": "MOVE_BEHEMOTHBLADE",
        "changes": [],
        "description": [
            "The user becomes a sword and strikes. Double damage on Dynamaxed targets.\r"
        ],
        "ingameName": "Behemoth Blade",
        "power": "100",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "180",
        "maxPower": "130",
        "effect": "",
        "Zeffect": ""
    },
    "MOVE_BEHEMOTHBASH": {
        "name": "MOVE_BEHEMOTHBASH",
        "changes": [],
        "description": [
            "The user becomes a shield and strikes. Double damage on Dynamaxed targets.\r"
        ],
        "ingameName": "Behemoth Bash",
        "power": "100",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "180",
        "maxPower": "130",
        "effect": "",
        "Zeffect": ""
    },
    "MOVE_AURAWHEEL": {
        "name": "MOVE_AURAWHEEL",
        "changes": [],
        "description": [
            "The user raises its Speed and attacks. The move's Type can change based on its form.\r"
        ],
        "ingameName": "Aura Wheel",
        "effect": "EFFECT_SPEED_UP_1_HIT",
        "power": "110",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Type Change Exception Moves"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "185",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_BREAKINGSWIPE": {
        "name": "MOVE_BREAKINGSWIPE",
        "changes": [],
        "description": [
            "The user attacks by swinging its tail, lowering both the targets' Attack.\r"
        ],
        "ingameName": "Breaking Swipe",
        "effect": "EFFECT_ATTACK_DOWN_HIT",
        "power": "60",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "120",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_BRANCHPOKE": {
        "name": "MOVE_BRANCHPOKE",
        "changes": [],
        "description": [
            "The user attacks the target by poking it with a pointed branch.\r"
        ],
        "ingameName": "Branch Poke",
        "power": "40",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "100",
        "maxPower": "90",
        "effect": "",
        "Zeffect": ""
    },
    "MOVE_OVERDRIVE": {
        "name": "MOVE_OVERDRIVE",
        "changes": [],
        "description": [
            "The user twangs its guitar, which causes an echo and strong vibrations.\r"
        ],
        "ingameName": "Overdrive",
        "power": "80",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Punk Rock Affected Moves"
        ],
        "split": "SPLIT_SPECIAL",
        "Zpower": "160",
        "maxPower": "130",
        "effect": "",
        "Zeffect": ""
    },
    "MOVE_APPLEACID": {
        "name": "MOVE_APPLEACID",
        "changes": [],
        "description": [
            "The user attacks with acid made from tart apples. Lowers the foe's Sp. Def.\r"
        ],
        "ingameName": "Apple Acid",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "80",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "split": "SPLIT_SPECIAL",
        "Zpower": "160",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_GRAVAPPLE": {
        "name": "MOVE_GRAVAPPLE",
        "changes": [],
        "description": [
            "The user attacks by dropping an apple from above. Lowers the foe's Defense.\r"
        ],
        "ingameName": "Grav Apple",
        "effect": "EFFECT_DEFENSE_DOWN_HIT",
        "power": "80",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "160",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SPIRITBREAK": {
        "name": "MOVE_SPIRITBREAK",
        "changes": [],
        "description": [
            "The user attacks with spirit-breaking force, lowering the target's Sp. Atk.\r"
        ],
        "ingameName": "Spirit Break",
        "effect": "EFFECT_SPECIAL_ATTACK_DOWN_HIT",
        "power": "75",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "140",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_STRANGESTEAM": {
        "name": "MOVE_STRANGESTEAM",
        "changes": [],
        "description": [
            "The user attacks by emitting steam. The steam may also confuse the target.\r"
        ],
        "ingameName": "Strange Steam",
        "effect": "EFFECT_CONFUSE_HIT",
        "power": "90",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "10",
        "chance": "20",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "split": "SPLIT_SPECIAL",
        "Zpower": "175",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_LIFEDEW": {
        "name": "MOVE_LIFEDEW",
        "changes": [],
        "description": [
            "The user scatters water that restores the HP of itself and its allies.\r"
        ],
        "ingameName": "Life Dew",
        "effect": "EFFECT_RESTORE_HP",
        "power": "0",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected",
            "Metronome Banned Moves",
            "Substitute Bypass Moves"
        ],
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_OBSTRUCT": {
        "name": "MOVE_OBSTRUCT",
        "changes": [],
        "description": [
            "The user protects itself, and harshly lowers the foe's Defense on contact.\r"
        ],
        "ingameName": "Obstruct",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "4",
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Raid Battle Banned Raid Mon Moves",
            "Prio Plus 4"
        ],
        "maxPower": ""
    },
    "MOVE_FALSESURRENDER": {
        "name": "MOVE_FALSESURRENDER",
        "changes": [],
        "description": [
            "The user bows, then uses its hair to stab the foe. It never misses.\r"
        ],
        "ingameName": "False Surrender",
        "power": "80",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "160",
        "maxPower": "130",
        "effect": "",
        "Zeffect": ""
    },
    "MOVE_METEORASSAULT": {
        "name": "MOVE_METEORASSAULT",
        "changes": [],
        "description": [
            "The foe is hit with a thick leek that can paralyze. The user recharges unless it KOs the foe.\r"
        ],
        "ingameName": "Meteor Assault",
        "effect": "EFFECT_RECHARGE",
        "power": "160",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "4",
        "chance": "60",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Moves That Require Recharging"
        ],
        "split": "SPLIT_PHYSICAL",
        "Zpower": "200",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_ETERNABEAM": {
        "name": "MOVE_ETERNABEAM",
        "changes": [],
        "description": [
            "Eternatus's most powerful attack. The user must rest on the next turn.\r"
        ],
        "ingameName": "Eternabeam",
        "effect": "EFFECT_RECHARGE",
        "power": "160",
        "type": "TYPE_DRAGON",
        "accuracy": "90",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Moves That Require Recharging"
        ],
        "split": "SPLIT_SPECIAL",
        "Zpower": "200",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_STEELBEAM": {
        "name": "MOVE_STEELBEAM",
        "changes": [],
        "description": [
            "It fires a beam of steel from its body, which also hurts the user.\r"
        ],
        "ingameName": "Steel Beam",
        "power": "140",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Raid Battle Banned Raid Mon Moves",
            "Recoil Moves"
        ],
        "split": "SPLIT_SPECIAL",
        "Zpower": "200",
        "maxPower": "140",
        "effect": "",
        "Zeffect": ""
    },
    "MOVE_EXPANDINGFORCE": {
        "name": "MOVE_EXPANDINGFORCE",
        "changes": [],
        "description": [
            "The move's power increases and damages all opposing targets in Psychic Terrain.\r"
        ],
        "ingameName": "Expanding Force",
        "effect": "EFFECT_TERRAIN_MOVE",
        "power": "80",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_STEELROLLER": {
        "name": "MOVE_STEELROLLER",
        "changes": [],
        "description": [
            "The user attacks while destroying terrain. The move fails if there's no terrain.\r"
        ],
        "ingameName": "Steel Roller",
        "effect": "EFFECT_DAMAGE_SET_TERRAIN",
        "power": "130",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "195",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_SCALESHOT": {
        "name": "MOVE_SCALESHOT",
        "changes": [],
        "description": [
            "It hits two to five times in a row. Raises Speed, but lowers Defense.\r"
        ],
        "ingameName": "Scale Shot",
        "effect": "EFFECT_MULTI_HIT",
        "power": "25",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "25",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves",
            "Sheer Force Affected Moves",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_METEORBEAM": {
        "name": "MOVE_METEORBEAM",
        "changes": [],
        "description": [
            "In this two-turn move, the user gathers space power and increases Sp. Atk.\r"
        ],
        "ingameName": "Meteor Beam",
        "effect": "EFFECT_SKULL_BASH",
        "power": "120",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Hardcore Banned Moves",
            "Sleep Talk Banned Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SHELLSIDEARM": {
        "name": "MOVE_SHELLSIDEARM",
        "changes": [],
        "description": [
            "Bypasses opponent's ability. May cause poison.\r"
        ],
        "ingameName": "Shell Side Arm",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "10",
        "chance": "10",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Mold Breaker Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_MISTYEXPLOSION": {
        "name": "MOVE_MISTYEXPLOSION",
        "changes": [],
        "description": [
            "The user explodes. It halves Sp. Def, and becomes stronger in Misty Terrain.\r"
        ],
        "ingameName": "Misty Explosion",
        "effect": "EFFECT_EXPLOSION",
        "power": "100",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_FOES_AND_ALLY",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Reckless Boosted Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_GRASSYGLIDE": {
        "name": "MOVE_GRASSYGLIDE",
        "changes": [],
        "description": [
            "The user glides on the ground to attack. Moves first on Grassy Terrain.\r"
        ],
        "ingameName": "Grassy Glide",
        "effect": "EFFECT_TERRAIN_MOVE",
        "power": "60",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_RISINGVOLTAGE": {
        "name": "MOVE_RISINGVOLTAGE",
        "changes": [],
        "description": [
            "The user attacks with voltage that doubles its power on Electric Terrain.\r"
        ],
        "ingameName": "Rising Voltage",
        "effect": "EFFECT_TERRAIN_MOVE",
        "power": "70",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_TERRAINPULSE": {
        "name": "MOVE_TERRAINPULSE",
        "changes": [],
        "description": [
            "The move's type and power depends on the terrain currently used in battle.\r"
        ],
        "ingameName": "Terrain Pulse",
        "effect": "EFFECT_HIT",
        "power": "50",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Mega Launcher Affected Moves",
            "Type Change Exception Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SKITTERSMACK": {
        "name": "MOVE_SKITTERSMACK",
        "changes": [],
        "description": [
            "The user skitters behind the target to attack. It lowers the foe's Sp.Atk stat.\r"
        ],
        "ingameName": "Skitter Smack",
        "effect": "EFFECT_SPECIAL_ATTACK_DOWN_HIT",
        "power": "70",
        "type": "TYPE_BUG",
        "accuracy": "90",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_BURNINGJEALOUSY": {
        "name": "MOVE_BURNINGJEALOUSY",
        "changes": [],
        "description": [
            "Inflicts a burn on targets who's stats were boosted during the turn when it is used.\r"
        ],
        "ingameName": "Burning Jealousy",
        "effect": "EFFECT_BURN_HIT",
        "power": "70",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Randomizer Banned Moves",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_LASHOUT": {
        "name": "MOVE_LASHOUT",
        "changes": [],
        "description": [
            "The move's power doubles if the user's stats have been lowered during the turn.\r"
        ],
        "ingameName": "Lash Out",
        "effect": "EFFECT_HIT",
        "power": "75",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_POLTERGEIST": {
        "name": "MOVE_POLTERGEIST",
        "changes": [],
        "description": [
            "The user controls the target's item to attack. Fails if the target has no item.\r"
        ],
        "ingameName": "Poltergeist",
        "effect": "EFFECT_POLTERGEIST",
        "power": "110",
        "type": "TYPE_GHOST",
        "accuracy": "90",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "185",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_CORROSIVEGAS": {
        "name": "MOVE_CORROSIVEGAS",
        "changes": [],
        "description": [
            "The user cloaks itself in acidic gas. It melts away the target's held item.\r"
        ],
        "ingameName": "Corrosive Gas",
        "effect": "EFFECT_KNOCK_OFF",
        "power": "0",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "40",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Randomizer Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_COACHING": {
        "name": "MOVE_COACHING",
        "changes": [],
        "description": [
            "The user coaches its ally, raising the ally's Attack and Defense stats.\r"
        ],
        "ingameName": "Coaching",
        "effect": "EFFECT_HELPING_HAND",
        "power": "0",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Mirror Move Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_FLIPTURN": {
        "name": "MOVE_FLIPTURN",
        "changes": [],
        "description": [
            "After attacking, the user switches places with a party Pokemon.\r"
        ],
        "ingameName": "Flip Turn",
        "effect": "EFFECT_BATON_PASS",
        "power": "60",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_TRIPLEAXEL": {
        "name": "MOVE_TRIPLEAXEL",
        "changes": [],
        "description": [
            "A 3-kick attack that becomes more powerful with each successive hit.\r"
        ],
        "ingameName": "Triple Axel",
        "effect": "EFFECT_TRIPLE_KICK",
        "power": "20",
        "type": "TYPE_ICE",
        "accuracy": "90",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Striker Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_DUALWINGBEAT": {
        "name": "MOVE_DUALWINGBEAT",
        "changes": [],
        "description": [
            "The user slams the target with its wings. The target is hit twice in a row.\r"
        ],
        "ingameName": "Dual Wingbeat",
        "effect": "EFFECT_DOUBLE_HIT",
        "power": "40",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Two Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SCORCHINGSANDS": {
        "name": "MOVE_SCORCHINGSANDS",
        "changes": [],
        "description": [
            "The user throws scorching sand at the target. It may also inflict burn.\r"
        ],
        "ingameName": "Scorching Sands",
        "effect": "EFFECT_BURN_HIT",
        "power": "70",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "10",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Moves Can Unfreeze Attacker",
            "Moves Can Unfreeze Target"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_JUNGLEHEALING": {
        "name": "MOVE_JUNGLEHEALING",
        "changes": [],
        "description": [
            "The user restores HP and the status of itself and its ally in battle.\r"
        ],
        "ingameName": "Jungle Healing",
        "effect": "EFFECT_RESTORE_HP",
        "power": "0",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected",
            "Substitute Bypass Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_WICKEDBLOW": {
        "name": "MOVE_WICKEDBLOW",
        "changes": [],
        "description": [
            "The user strikes the foe fiercely. It always results in a critical hit.\r"
        ],
        "ingameName": "Wicked Blow",
        "effect": "EFFECT_HIT",
        "power": "75",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Always Critical Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SURGINGSTRIKES": {
        "name": "MOVE_SURGINGSTRIKES",
        "changes": [],
        "description": [
            "The user strikes three consecutive times. It always results in a critical hit.\r"
        ],
        "ingameName": "Surging Strikes",
        "effect": "EFFECT_MULTI_HIT",
        "power": "25",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Always Critical Moves",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FREEZINGGLARE": {
        "name": "MOVE_FREEZINGGLARE",
        "changes": [],
        "description": [
            "The user attacks with psychic power. It may leave the target frozen.\r"
        ],
        "ingameName": "Freezing Glare",
        "effect": "EFFECT_FREEZE_HIT",
        "power": "90",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_THUNDEROUSKICK": {
        "name": "MOVE_THUNDEROUSKICK",
        "changes": [],
        "description": [
            "The user delivers a fierce kick that lower's the target's defense stat.\r"
        ],
        "ingameName": "Thunderous Kick",
        "effect": "EFFECT_DEFENSE_DOWN_HIT",
        "power": "90",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_FIERYWRATH": {
        "name": "MOVE_FIERYWRATH",
        "changes": [],
        "description": [
            "The user attacks with intense, dark flames. It may also make the foe flinch.\r"
        ],
        "ingameName": "Fiery Wrath",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "90",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "10",
        "chance": "20",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_THUNDERCAGE": {
        "name": "MOVE_THUNDERCAGE",
        "changes": [],
        "description": [
            "A cage made of elec- tricity that traps the target for four to five turns.\r"
        ],
        "ingameName": "Thunder Cage",
        "effect": "EFFECT_TRAP",
        "power": "80",
        "type": "TYPE_ELECTRIC",
        "accuracy": "90",
        "PP": "15",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_DRAGONENERGY": {
        "name": "MOVE_DRAGONENERGY",
        "changes": [],
        "description": [
            "The higher the user's HP, the more powerful this attack becomes.\r"
        ],
        "ingameName": "Dragon Energy",
        "effect": "EFFECT_HIT",
        "power": "150",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "150",
        "Zeffect": ""
    },
    "MOVE_ASTRALBARRAGE": {
        "name": "MOVE_ASTRALBARRAGE",
        "changes": [],
        "description": [
            "The user attacks by sending a fright- ful amount of small ghosts.\r"
        ],
        "ingameName": "Astral Barrage",
        "effect": "EFFECT_HIT",
        "power": "120",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_GLACIALLANCE": {
        "name": "MOVE_GLACIALLANCE",
        "changes": [],
        "description": [
            "The user attacks by hurling an ice- cloaked lance.\r"
        ],
        "ingameName": "Glacial Lance",
        "effect": "EFFECT_HIT",
        "power": "120",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "195",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FORBIDDENSPELL": {
        "name": "MOVE_FORBIDDENSPELL",
        "changes": [],
        "description": [
            "The user conjures an ancient, corrupt spell that brings unexpected power.\r"
        ],
        "ingameName": "Forbidden Spell",
        "effect": "EFFECT_METRONOME",
        "power": "0",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_DEPENDS",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_ZIPPYZAP": {
        "name": "MOVE_ZIPPYZAP",
        "changes": [],
        "description": [
            "The user bursts with electricity, going first and always resulting in a critical hit. \r"
        ],
        "ingameName": "Zippy Zap",
        "effect": "EFFECT_QUICK_ATTACK",
        "power": "50",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Always Critical Moves",
            "Prio Plus 1"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SAPPYSEED": {
        "name": "MOVE_SAPPYSEED",
        "changes": [],
        "description": [
            "The user scatters seeds to attack, draining the target's HP every turn.\r"
        ],
        "ingameName": "Sappy Seed",
        "effect": "EFFECT_SAPPY_SEED",
        "power": "95",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_FREEZYFROST": {
        "name": "MOVE_FREEZYFROST",
        "changes": [],
        "description": [
            "The user attacks with a large crystal that removes all stat changes on the field.\r"
        ],
        "ingameName": "Freezy Frost",
        "effect": "EFFECT_HAZE",
        "power": "95",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SPARKLYSWIRL": {
        "name": "MOVE_SPARKLYSWIRL",
        "changes": [],
        "description": [
            "The user attacks with a whirlwind that heals status problems on the user's party.\r"
        ],
        "ingameName": "Sparkly Swirl",
        "effect": "EFFECT_HEAL_BELL",
        "power": "95",
        "type": "TYPE_FAIRY",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_BOUNCYBUBBLE": {
        "name": "MOVE_BOUNCYBUBBLE",
        "changes": [],
        "description": [
            "The user attacks with water bubbles that drains half the damage it inflicted.\r"
        ],
        "ingameName": "Bouncy Bubble",
        "effect": "EFFECT_ABSORB",
        "power": "90",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Triage Affected"
        ],
        "Zpower": "175",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SONICSLASH": {
        "name": "MOVE_SONICSLASH",
        "changes": [],
        "description": [
            "The user attacks with a swift slash that becomes strong- er the faster the user is.\r"
        ],
        "ingameName": "Sonic Slash",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_FLYING",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves",
            "Wind Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_DRACOBARRAGE": {
        "name": "MOVE_DRACOBARRAGE",
        "changes": [],
        "description": [
            "This attack beats beats fairy immunities but hurts the user. Changes split based off which is stronger.\r"
        ],
        "ingameName": "Draco Barrage",
        "effect": "EFFECT_RECOIL",
        "power": "100",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Reckless Boosted Moves",
            "Moves That Change Physicality",
            "Recoil Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_STONEAXE": {
        "name": "MOVE_STONEAXE",
        "changes": [],
        "description": [
            "The user swings with an axe that has a high-crit ratio and sets Stealth Rocks.\r"
        ],
        "ingameName": "Stone Axe",
        "effect": "EFFECT_SPIKES",
        "power": "65",
        "type": "TYPE_ROCK",
        "accuracy": "90",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_HEADLONGRUSH": {
        "name": "MOVE_HEADLONGRUSH",
        "changes": [],
        "description": [
            "The user tackles the target, cutting  its own defenses as a result.\r"
        ],
        "ingameName": "Headlong Rush",
        "effect": "EFFECT_SUPERPOWER",
        "power": "120",
        "type": "TYPE_GROUND",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_VICTORYDANCE": {
        "name": "MOVE_VICTORYDANCE",
        "changes": [],
        "description": [
            "The user triumphantly dances, raising its Attack, Defense, and Speed.\r"
        ],
        "ingameName": "Victory Dance",
        "effect": "EFFECT_DRAGON_DANCE",
        "power": "0",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "20",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves",
            "Dance Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_INFERNALPARADE": {
        "name": "MOVE_INFERNALPARADE",
        "changes": [],
        "description": [
            "This attack deals double damage to a target with a status problem, and can inflict a burn.\r"
        ],
        "ingameName": "Infernalparade",
        "effect": "EFFECT_BURN_HIT",
        "power": "60",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Double Damage On Status"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_CEASELESSEDGE": {
        "name": "MOVE_CEASELESSEDGE",
        "changes": [],
        "description": [
            "This attack has a high crit rate and sets a layer of spikes.\r"
        ],
        "ingameName": "Ceaseless Edge",
        "effect": "EFFECT_SPIKES",
        "power": "65",
        "type": "TYPE_DARK",
        "accuracy": "90",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Sharpness Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_TRIPLEARROWS": {
        "name": "MOVE_TRIPLEARROWS",
        "changes": [],
        "description": [
            "This attack has a high chance of a critical hit, can lower Defense, and flinch.\r"
        ],
        "ingameName": "Triple Arrows",
        "effect": "EFFECT_DEFENSE_DOWN_HIT",
        "power": "90",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "15",
        "chance": "50",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Striker Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_BARBBARRAGE": {
        "name": "MOVE_BARBBARRAGE",
        "changes": [],
        "description": [
            "This attack deals double damage to a target with a status problem, and can in- flict poison.\r"
        ],
        "ingameName": "Barb Barrage",
        "effect": "EFFECT_POISON_HIT",
        "power": "60",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "15",
        "chance": "50",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_CHLOROBLAST": {
        "name": "MOVE_CHLOROBLAST",
        "changes": [],
        "description": [
            "The user launches its amassed chloro- phyll to inflict damage. It also hurts the user a little.\r"
        ],
        "ingameName": "Chloroblast",
        "effect": "EFFECT_RECOIL",
        "power": "120",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Reckless Boosted Moves",
            "Recoil Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_BITTERMALICE": {
        "name": "MOVE_BITTERMALICE",
        "changes": [],
        "description": [
            "This attack deals double damage to a target with a status problem, and can frostbite the foe.\r"
        ],
        "ingameName": "Bitter Malice",
        "effect": "EFFECT_FREEZE_HIT",
        "power": "60",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "15",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sheer Force Affected Moves",
            "Double Damage On Status"
        ],
        "Zpower": "120",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_ESPERWING": {
        "name": "MOVE_ESPERWING",
        "changes": [],
        "description": [
            "The user slashes the target with aura- enriched wings that raise Speed. It has a high crit ratio.\r"
        ],
        "ingameName": "Esper Wing",
        "effect": "EFFECT_SPEED_UP_1_HIT",
        "power": "80",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves",
            "Sheer Force Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_DIRECLAW": {
        "name": "MOVE_DIRECLAW",
        "changes": [],
        "description": [
            "A slash that may poison, paralyze, or sleep the foe. It has a high crit ratio.\r"
        ],
        "ingameName": "Dire Claw",
        "effect": "EFFECT_TRI_ATTACK",
        "power": "80",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "15",
        "chance": "50",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "High Critical Chance Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_PSYSHIELDBASH": {
        "name": "MOVE_PSYSHIELDBASH",
        "changes": [],
        "description": [
            "The user slams into the foe with psychic energy. It raises the user's Defense too.\r"
        ],
        "ingameName": "Psyshield Bash",
        "effect": "EFFECT_DEFENSE_UP_HIT",
        "power": "70",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_MYSTICALPOWER": {
        "name": "MOVE_MYSTICALPOWER",
        "changes": [],
        "description": [
            "After dealing damage, the user raises its Special Attack.\r"
        ],
        "ingameName": "Mystical Power",
        "effect": "EFFECT_SPECIAL_ATTACK_UP_CHANCE",
        "power": "70",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_MOUNTAINGALE": {
        "name": "MOVE_MOUNTAINGALE",
        "changes": [],
        "description": [
            "The user hurls giant chunks of ice at the foe that may cause it to flinch.\r"
        ],
        "ingameName": "Mountain Gale",
        "effect": "EFFECT_FLINCH_HIT",
        "power": "120",
        "Zpower": "195",
        "type": "TYPE_ICE",
        "accuracy": "90",
        "PP": "5",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_WAVECRASH": {
        "name": "MOVE_WAVECRASH",
        "changes": [],
        "description": [
            "The user is shrouded in water and slams the foe. It also hurts the user a little.\r"
        ],
        "ingameName": "Wave Crash",
        "effect": "EFFECT_RECOIL",
        "power": "120",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Reckless Boosted Moves",
            "Recoil Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_FLOWERTRICK": {
        "name": "MOVE_FLOWERTRICK",
        "changes": [],
        "description": [
            "The user throws flow- ers at the target. This move always results in a critical hit.\r"
        ],
        "ingameName": "Flower Trick",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "70",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Always Critical Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_TORCHSONG": {
        "name": "MOVE_TORCHSONG",
        "changes": [],
        "description": [
            "The user scorches the target, boosting the user's Sp. Atk.\r"
        ],
        "ingameName": "Torch Song",
        "effect": "EFFECT_SPECIAL_ATTACK_UP_CHANCE",
        "power": "80",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves",
            "Punk Rock Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_AQUASTEP": {
        "name": "MOVE_AQUASTEP",
        "changes": [],
        "description": [
            "The user toys with the target, boosting the user's Speed.\r"
        ],
        "ingameName": "Aqua Step",
        "effect": "EFFECT_SPEED_UP_1_HIT",
        "power": "80",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves",
            "Striker Affected Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_HYPERDRILL": {
        "name": "MOVE_HYPERDRILL",
        "changes": [],
        "description": [
            "The user drills the target quickly, hit- ting through pro- tection.\r"
        ],
        "ingameName": "Hyper Drill",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Moves That Lift Protect Table"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_ARMORCANNON": {
        "name": "MOVE_ARMORCANNON",
        "changes": [],
        "description": [
            "The user shoots fiery projectiles. This cuts the user's Defense and Sp. Def.\r"
        ],
        "ingameName": "Armor Cannon",
        "effect": "EFFECT_SUPERPOWER",
        "power": "120",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Mega Launcher Affected Moves"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_BITTERBLADE": {
        "name": "MOVE_BITTERBLADE",
        "changes": [],
        "description": [
            "The user bitterly slashes. This absorbs half the damage it inflicts.\r"
        ],
        "ingameName": "Bitter Blade",
        "effect": "EFFECT_ABSORB",
        "power": "90",
        "type": "TYPE_FIRE",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves"
        ],
        "Zpower": "175",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_AQUACUTTER": {
        "name": "MOVE_AQUACUTTER",
        "changes": [],
        "description": [
            "The foe is cut by sharp pressurized water. It has a high critical-hit ratio.\r"
        ],
        "ingameName": "Aqua Cutter",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "70",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves",
            "High Critical Chance Moves"
        ],
        "Zpower": "140",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_RAGEFIST": {
        "name": "MOVE_RAGEFIST",
        "changes": [],
        "description": [
            "The more times the user has been hit, the stronger this move becomes.\r"
        ],
        "ingameName": "Rage Fist",
        "effect": "EFFECT_HIT",
        "power": "50",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Iron Fist Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_LASTRESPECTS": {
        "name": "MOVE_LASTRESPECTS",
        "changes": [],
        "description": [
            "The more fallen allies on the user's party, the stronger this becomes.\r"
        ],
        "ingameName": "Last Respects",
        "effect": "EFFECT_HIT",
        "power": "50",
        "type": "TYPE_GHOST",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_SHEDTAIL": {
        "name": "MOVE_SHEDTAIL",
        "changes": [],
        "description": [
            "The user creates a half HP substitute and passes it to an ally.\r"
        ],
        "ingameName": "Shed Tail",
        "effect": "EFFECT_BATON_PASS",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "flags": [
            "",
            "Hardcore Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_GLAIVERUSH": {
        "name": "MOVE_GLAIVERUSH",
        "changes": [],
        "description": [
            "After this hits, the foe cannot miss the next turn, and deals double damage.\r"
        ],
        "ingameName": "Glaive Rush",
        "effect": "EFFECT_ATTACK_BLOCKERS",
        "power": "120",
        "type": "TYPE_DRAGON",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_JETPUNCH": {
        "name": "MOVE_JETPUNCH",
        "changes": [],
        "description": [
            "The user punches with a fast torrent that is certain to strike first.\r"
        ],
        "ingameName": "Jet Punch",
        "effect": "EFFECT_QUICK_ATTACK",
        "power": "60",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "1",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Iron Fist Affected Moves",
            "Prio Plus 1"
        ],
        "Zpower": "120",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SPINOUT": {
        "name": "MOVE_SPINOUT",
        "changes": [],
        "description": [
            "The user spins angrily, inflicting damage. This sharply lowers the user's Speed.\r"
        ],
        "ingameName": "Spin Out",
        "effect": "EFFECT_SUPERPOWER",
        "power": "110",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_COLLISIONCOURSE": {
        "name": "MOVE_COLLISIONCOURSE",
        "changes": [],
        "description": [
            "The user crashes, causing a huge explosion. Power is boosted if it's super-effective.\r"
        ],
        "ingameName": "Collision Course",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_FIGHTING",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "180",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "110",
        "Zeffect": ""
    },
    "MOVE_ELECTRODRIFT": {
        "name": "MOVE_ELECTRODRIFT",
        "changes": [],
        "description": [
            "The user races, piercing the foe with sharp electricity. Power is boosted if it's super-effective.\r"
        ],
        "ingameName": "Electro Drift",
        "effect": "EFFECT_HIT",
        "power": "100",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_REVIVALBLESSING": {
        "name": "MOVE_REVIVALBLESSING",
        "changes": [],
        "description": [
            "The user bestows a lovely blessing, reviving a fainted party Poke- mon for half health.\r"
        ],
        "ingameName": "Revival Blessing",
        "effect": "EFFECT_MEMENTO",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_GIGATONHAMMER": {
        "name": "MOVE_GIGATONHAMMER",
        "changes": [],
        "description": [
            "The user swings with a huge hammer. This move can't be used twice in a row.\r"
        ],
        "ingameName": "Gigaton Hammer",
        "effect": "EFFECT_HIT",
        "power": "160",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "200",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_RAGINGBULL": {
        "name": "MOVE_RAGINGBULL",
        "changes": [],
        "description": [
            "The user tackles like a raging bull. This move type depends on the user's form. Breaks screens.\r"
        ],
        "ingameName": "Raging Bull",
        "effect": "EFFECT_BRICK_BREAK",
        "power": "90",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Type Change Exception Moves"
        ],
        "Zpower": "170",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_TWINBEAM": {
        "name": "MOVE_TWINBEAM",
        "changes": [],
        "description": [
            "The user fires beams from its eyes at the target. This move hits twice.\r"
        ],
        "ingameName": "Twin Beam",
        "effect": "EFFECT_DOUBLE_HIT",
        "power": "50",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Two Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_KOWTOWCLEAVE": {
        "name": "MOVE_KOWTOWCLEAVE",
        "changes": [],
        "description": [
            "The user slashes at the target after kow- towing. This move never misses.\r"
        ],
        "ingameName": "Kowtow Cleave",
        "effect": "EFFECT_ALWAYS_HIT",
        "power": "85",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_DOUBLESHOCK": {
        "name": "MOVE_DOUBLESHOCK",
        "changes": [],
        "description": [
            "The user releases a lot of electricity. After using this move, the user will not be Electric type.\r"
        ],
        "ingameName": "Double Shock",
        "effect": "EFFECT_BURN_UP",
        "power": "120",
        "type": "TYPE_ELECTRIC",
        "accuracy": "100",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "200",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_TRAILBLAZE": {
        "name": "MOVE_TRAILBLAZE",
        "changes": [],
        "description": [
            "The user attacks suddenly, boost- ing its Speed.\r"
        ],
        "ingameName": "Trailblaze",
        "effect": "EFFECT_SPEED_UP_1_HIT",
        "power": "50",
        "type": "TYPE_GRASS",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_POUNCE": {
        "name": "MOVE_POUNCE",
        "changes": [],
        "description": [
            "The user pounces on the target, lowering its Speed stat.\r"
        ],
        "ingameName": "Pounce",
        "effect": "EFFECT_SPEED_DOWN_HIT",
        "power": "60",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_MAKEITRAIN": {
        "name": "MOVE_MAKEITRAIN",
        "changes": [],
        "description": [
            "The user attacks with a mass of coins, lowering its Sp. Atk.\r"
        ],
        "ingameName": "Make It Rain",
        "effect": "EFFECT_SUPERPOWER",
        "power": "120",
        "type": "TYPE_STEEL",
        "accuracy": "100",
        "PP": "5",
        "chance": "100",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_SPECIAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_POPULATIONBOMB": {
        "name": "MOVE_POPULATIONBOMB",
        "changes": [],
        "description": [
            "The user gathers in droves for an attack that hits one to ten times in a row.\r"
        ],
        "ingameName": "Population Bomb",
        "effect": "EFFECT_TRIPLE_KICK",
        "power": "20",
        "type": "TYPE_NORMAL",
        "accuracy": "90",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Sharpness Affected Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_LUNARBLESSING": {
        "name": "MOVE_LUNARBLESSING",
        "changes": [],
        "description": [
            "The user restores HP and the status of itself and its ally in battle.\r"
        ],
        "ingameName": "Lunar Blessing",
        "effect": "EFFECT_RESTORE_HP",
        "power": "0",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_TAKEHEART": {
        "name": "MOVE_TAKEHEART",
        "changes": [],
        "description": [
            "The user raises Sp. Atk and Sp. Def and also cures its status.\r"
        ],
        "ingameName": "Take Heart",
        "effect": "EFFECT_CALM_MIND",
        "power": "0",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Triage Affected"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SILKTRAP": {
        "name": "MOVE_SILKTRAP",
        "changes": [],
        "description": [
            "The user protects itself, and lowers the foe's Speed stat on contact.\r"
        ],
        "ingameName": "Silk Trap",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "5",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "4",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_DEF_UP_1",
        "flags": [
            "",
            "Copycat Banned Moves",
            "Instruct Banned Moves",
            "Metronome Banned Moves",
            "Assist Banned Moves",
            "Raid Battle Banned Raid Mon Moves",
            "Prio Plus 4"
        ],
        "maxPower": ""
    },
    "MOVE_AXEKICK": {
        "name": "MOVE_AXEKICK",
        "changes": [],
        "description": [
            "The user attack can confuse the target, and damages itself upon a miss.\r"
        ],
        "ingameName": "Axe Kick",
        "effect": "EFFECT_RECOIL_IF_MISS",
        "power": "120",
        "type": "TYPE_FIGHTING",
        "accuracy": "90",
        "PP": "10",
        "chance": "30",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "190",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "140",
        "Zeffect": ""
    },
    "MOVE_LUMINACRASH": {
        "name": "MOVE_LUMINACRASH",
        "changes": [],
        "description": [
            "The user attacks with a strange light. It harshly lowers the foe's Sp. Def.\r"
        ],
        "ingameName": "Lumina Crash",
        "effect": "EFFECT_SPECIAL_DEFENSE_DOWN_HIT",
        "power": "80",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_ICESPINNER": {
        "name": "MOVE_ICESPINNER",
        "changes": [],
        "description": [
            "The user spins with ice, dealing damage and destroying terrain.\r"
        ],
        "ingameName": "Ice Spinner",
        "effect": "EFFECT_DAMAGE_SET_TERRAIN",
        "power": "80",
        "type": "TYPE_ICE",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "130",
        "Zeffect": ""
    },
    "MOVE_SALTCURE": {
        "name": "MOVE_SALTCURE",
        "changes": [],
        "description": [
            "This move damages every turn. Steel and Water types are more affected.\r"
        ],
        "ingameName": "Salt Cure",
        "effect": "EFFECT_TRAP",
        "power": "40",
        "type": "TYPE_ROCK",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_TRIPLEDIVE": {
        "name": "MOVE_TRIPLEDIVE",
        "changes": [],
        "description": [
            "The user hits the target with three splashes of water in a row.\r"
        ],
        "ingameName": "Triple Dive",
        "effect": "EFFECT_MULTI_HIT",
        "power": "40",
        "type": "TYPE_WATER",
        "accuracy": "90",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Makes Contact",
            "Two To Five Strikes Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_MORTALSPIN": {
        "name": "MOVE_MORTALSPIN",
        "changes": [],
        "description": [
            "The user spins away hazards, and poisons opposing Pokemon.\r"
        ],
        "ingameName": "Mortal Spin",
        "effect": "EFFECT_RAPID_SPIN",
        "power": "30",
        "type": "TYPE_POISON",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "90",
        "Zeffect": ""
    },
    "MOVE_FILLETAWAY": {
        "name": "MOVE_FILLETAWAY",
        "changes": [],
        "description": [
            "The user sharply boosts its Attack, Sp. Atk, and Speed by using its own HP.\r"
        ],
        "ingameName": "Fillet Away",
        "effect": "EFFECT_BELLY_DRUM",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_CHILLYRECEPTION": {
        "name": "MOVE_CHILLYRECEPTION",
        "changes": [],
        "description": [
            "The user switches with a party Poke- mon and sets a snowstorm.\r"
        ],
        "ingameName": "Chilly Reception",
        "effect": "EFFECT_TELEPORT",
        "power": "0",
        "type": "TYPE_ICE",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_SPD_UP_1",
        "flags": [
            "",
            "Hardcore Banned Moves"
        ],
        "maxPower": ""
    },
    "MOVE_CHILLINGWATER": {
        "name": "MOVE_CHILLINGWATER",
        "changes": [],
        "description": [
            "The user attacks with cold water that lowers the target's Attack stat.\r"
        ],
        "ingameName": "Chilling Water",
        "effect": "EFFECT_ATTACK_DOWN_HIT",
        "power": "50",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "20",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_COMEUPPANCE": {
        "name": "MOVE_COMEUPPANCE",
        "changes": [],
        "description": [
            "The user retaliates with much greater force against the opponent that last did damage to it.\r"
        ],
        "ingameName": "Comeuppance",
        "effect": "EFFECT_COUNTER",
        "power": "1",
        "type": "TYPE_DARK",
        "accuracy": "100",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_DEPENDS",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Me First Banned Moves"
        ],
        "Zpower": "100",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_TIDYUP": {
        "name": "MOVE_TIDYUP",
        "changes": [],
        "description": [
            "The user raises its Attack and Speed stat, and removes hazards.\r"
        ],
        "ingameName": "Tidy Up",
        "effect": "EFFECT_DRAGON_DANCE",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "flags": [
            "Snatch Affected",
            "Hardcore Banned Moves"
        ],
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "Zeffect": "Z_EFFECT_RESET_STATS",
        "maxPower": ""
    },
    "MOVE_RUINATION": {
        "name": "MOVE_RUINATION",
        "changes": [],
        "description": [
            "The user summons a ruinous di- saster. It halves the target's HP.\r"
        ],
        "ingameName": "Ruination",
        "effect": "EFFECT_SUPER_FANG",
        "power": "1",
        "type": "TYPE_DARK",
        "accuracy": "90",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected"
        ],
        "Zpower": "100",
        "split": "SPLIT_SPECIAL",
        "maxPower": "100",
        "Zeffect": ""
    },
    "MOVE_PSYBLADE": {
        "name": "MOVE_PSYBLADE",
        "changes": [],
        "description": [
            "The user cuts with an ethereal blade. Has boosted power in Electric Terrain.\r"
        ],
        "ingameName": "Psyblade",
        "effect": "EFFECT_HIT",
        "power": "80",
        "type": "TYPE_PSYCHIC",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves",
            "Sharpness Affected Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_PHYSICAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_HYDROSTEAM": {
        "name": "MOVE_HYDROSTEAM",
        "changes": [],
        "description": [
            "The user blasts with hot water. Has boosted power in Sun.\r"
        ],
        "ingameName": "Hydro Steam",
        "effect": "EFFECT_HIT",
        "power": "80",
        "type": "TYPE_WATER",
        "accuracy": "100",
        "PP": "15",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "flags": [
            "Protect Affected",
            "Mirror Move Affected",
            "Metronome Banned Moves"
        ],
        "Zpower": "160",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SPRINGTIDESTORM": {
        "name": "MOVE_SPRINGTIDESTORM",
        "changes": [],
        "description": [
            "The foe is caught in a wind filled with love and hate. Can lower Atk.\r"
        ],
        "ingameName": "Springtide Storm",
        "effect": "EFFECT_ATTACK_DOWN_HIT",
        "power": "100",
        "type": "TYPE_FAIRY",
        "accuracy": "90",
        "PP": "10",
        "chance": "30",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Wind Moves",
            "Always Hit In Rain Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_BLEAKWINDSTORM": {
        "name": "MOVE_BLEAKWINDSTORM",
        "changes": [],
        "description": [
            "The foe is caught in a fierce cold wind that can cause frostbite.\r"
        ],
        "ingameName": "Bleakwind Storm",
        "effect": "EFFECT_FREEZE_HIT",
        "power": "100",
        "type": "TYPE_FLYING",
        "accuracy": "90",
        "PP": "10",
        "chance": "20",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Wind Moves",
            "Always Hit In Rain Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_WILDBOLTSTORM": {
        "name": "MOVE_WILDBOLTSTORM",
        "changes": [],
        "description": [
            "The foe is caught in a wind filled with lightning. Can paralyze.\r"
        ],
        "ingameName": "Wildbolt Storm",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "100",
        "type": "TYPE_ELECTRIC",
        "accuracy": "90",
        "PP": "10",
        "chance": "20",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Wind Moves",
            "Always Hit In Rain Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_SANDSEARSTORM": {
        "name": "MOVE_SANDSEARSTORM",
        "changes": [],
        "description": [
            "The foe is caught in a wind filled with hot sand. Can inflict burn.\r"
        ],
        "ingameName": "Sandsear Storm",
        "effect": "EFFECT_BURN_HIT",
        "power": "100",
        "type": "TYPE_GROUND",
        "accuracy": "90",
        "PP": "10",
        "chance": "20",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "flags": [
            "Makes Contact",
            "Protect Affected",
            "Mirror Move Affected",
            "Wind Moves",
            "Always Hit In Rain Moves"
        ],
        "Zpower": "180",
        "split": "SPLIT_SPECIAL",
        "maxPower": "120",
        "Zeffect": ""
    },
    "MOVE_BREAKNECK_BLITZ_P": {
        "name": "MOVE_BREAKNECK_BLITZ_P",
        "changes": [],
        "description": [],
        "ingameName": "Breakneck Blitz P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_BREAKNECK_BLITZ_S": {
        "name": "MOVE_BREAKNECK_BLITZ_S",
        "changes": [],
        "description": [],
        "ingameName": "Breakneck Blitz S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_ALL_OUT_PUMMELING_P": {
        "name": "MOVE_ALL_OUT_PUMMELING_P",
        "changes": [],
        "description": [],
        "ingameName": "All Out Pummeling P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_ALL_OUT_PUMMELING_S": {
        "name": "MOVE_ALL_OUT_PUMMELING_S",
        "changes": [],
        "description": [],
        "ingameName": "All Out Pummeling S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SUPERSONIC_SKYSTRIKE_P": {
        "name": "MOVE_SUPERSONIC_SKYSTRIKE_P",
        "changes": [],
        "description": [],
        "ingameName": "Supersonic Skystrike P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_FLYING",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SUPERSONIC_SKYSTRIKE_S": {
        "name": "MOVE_SUPERSONIC_SKYSTRIKE_S",
        "changes": [],
        "description": [],
        "ingameName": "Supersonic Skystrike S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_FLYING",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_ACID_DOWNPOUR_P": {
        "name": "MOVE_ACID_DOWNPOUR_P",
        "changes": [],
        "description": [],
        "ingameName": "Acid Downpour P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_POISON",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_ACID_DOWNPOUR_S": {
        "name": "MOVE_ACID_DOWNPOUR_S",
        "changes": [],
        "description": [],
        "ingameName": "Acid Downpour S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_POISON",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_TECTONIC_RAGE_P": {
        "name": "MOVE_TECTONIC_RAGE_P",
        "changes": [],
        "description": [],
        "ingameName": "Tectonic Rage P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_GROUND",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_TECTONIC_RAGE_S": {
        "name": "MOVE_TECTONIC_RAGE_S",
        "changes": [],
        "description": [],
        "ingameName": "Tectonic Rage S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_GROUND",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_CONTINENTAL_CRUSH_P": {
        "name": "MOVE_CONTINENTAL_CRUSH_P",
        "changes": [],
        "description": [],
        "ingameName": "Continental Crush P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_ROCK",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_CONTINENTAL_CRUSH_S": {
        "name": "MOVE_CONTINENTAL_CRUSH_S",
        "changes": [],
        "description": [],
        "ingameName": "Continental Crush S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_ROCK",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SAVAGE_SPIN_OUT_P": {
        "name": "MOVE_SAVAGE_SPIN_OUT_P",
        "changes": [],
        "description": [],
        "ingameName": "Savage Spin Out P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SAVAGE_SPIN_OUT_S": {
        "name": "MOVE_SAVAGE_SPIN_OUT_S",
        "changes": [],
        "description": [],
        "ingameName": "Savage Spin Out S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_NEVER_ENDING_NIGHTMARE_P": {
        "name": "MOVE_NEVER_ENDING_NIGHTMARE_P",
        "changes": [],
        "description": [],
        "ingameName": "Never Ending Nightmare P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_NEVER_ENDING_NIGHTMARE_S": {
        "name": "MOVE_NEVER_ENDING_NIGHTMARE_S",
        "changes": [],
        "description": [],
        "ingameName": "Never Ending Nightmare S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_CORKSCREW_CRASH_P": {
        "name": "MOVE_CORKSCREW_CRASH_P",
        "changes": [],
        "description": [],
        "ingameName": "Corkscrew Crash P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_CORKSCREW_CRASH_S": {
        "name": "MOVE_CORKSCREW_CRASH_S",
        "changes": [],
        "description": [],
        "ingameName": "Corkscrew Crash S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_INFERNO_OVERDRIVE_P": {
        "name": "MOVE_INFERNO_OVERDRIVE_P",
        "changes": [],
        "description": [],
        "ingameName": "Inferno Overdrive P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_FIRE",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_INFERNO_OVERDRIVE_S": {
        "name": "MOVE_INFERNO_OVERDRIVE_S",
        "changes": [],
        "description": [],
        "ingameName": "Inferno Overdrive S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_FIRE",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_HYDRO_VORTEX_P": {
        "name": "MOVE_HYDRO_VORTEX_P",
        "changes": [],
        "description": [],
        "ingameName": "Hydro Vortex P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_HYDRO_VORTEX_S": {
        "name": "MOVE_HYDRO_VORTEX_S",
        "changes": [],
        "description": [],
        "ingameName": "Hydro Vortex S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_BLOOM_DOOM_P": {
        "name": "MOVE_BLOOM_DOOM_P",
        "changes": [],
        "description": [],
        "ingameName": "Bloom Doom P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_BLOOM_DOOM_S": {
        "name": "MOVE_BLOOM_DOOM_S",
        "changes": [],
        "description": [],
        "ingameName": "Bloom Doom S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_GIGAVOLT_HAVOC_P": {
        "name": "MOVE_GIGAVOLT_HAVOC_P",
        "changes": [],
        "description": [],
        "ingameName": "Gigavolt Havoc P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_GIGAVOLT_HAVOC_S": {
        "name": "MOVE_GIGAVOLT_HAVOC_S",
        "changes": [],
        "description": [],
        "ingameName": "Gigavolt Havoc S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SHATTERED_PSYCHE_P": {
        "name": "MOVE_SHATTERED_PSYCHE_P",
        "changes": [],
        "description": [],
        "ingameName": "Shattered Psyche P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SHATTERED_PSYCHE_S": {
        "name": "MOVE_SHATTERED_PSYCHE_S",
        "changes": [],
        "description": [],
        "ingameName": "Shattered Psyche S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SUBZERO_SLAMMER_P": {
        "name": "MOVE_SUBZERO_SLAMMER_P",
        "changes": [],
        "description": [],
        "ingameName": "Subzero Slammer P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_ICE",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SUBZERO_SLAMMER_S": {
        "name": "MOVE_SUBZERO_SLAMMER_S",
        "changes": [],
        "description": [],
        "ingameName": "Subzero Slammer S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_ICE",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_DEVASTATING_DRAKE_P": {
        "name": "MOVE_DEVASTATING_DRAKE_P",
        "changes": [],
        "description": [],
        "ingameName": "Devastating Drake P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_DRAGON",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_DEVASTATING_DRAKE_S": {
        "name": "MOVE_DEVASTATING_DRAKE_S",
        "changes": [],
        "description": [],
        "ingameName": "Devastating Drake S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_DRAGON",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_BLACK_HOLE_ECLIPSE_P": {
        "name": "MOVE_BLACK_HOLE_ECLIPSE_P",
        "changes": [],
        "description": [],
        "ingameName": "Black Hole Eclipse P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_BLACK_HOLE_ECLIPSE_S": {
        "name": "MOVE_BLACK_HOLE_ECLIPSE_S",
        "changes": [],
        "description": [],
        "ingameName": "Black Hole Eclipse S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_TWINKLE_TACKLE_P": {
        "name": "MOVE_TWINKLE_TACKLE_P",
        "changes": [],
        "description": [],
        "ingameName": "Twinkle Tackle P",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_TWINKLE_TACKLE_S": {
        "name": "MOVE_TWINKLE_TACKLE_S",
        "changes": [],
        "description": [],
        "ingameName": "Twinkle Tackle S",
        "effect": "EFFECT_HIT",
        "power": "1",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_CATASTROPIKA": {
        "name": "MOVE_CATASTROPIKA",
        "changes": [],
        "description": [],
        "ingameName": "Catastropika",
        "effect": "EFFECT_HIT",
        "power": "210",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_10000000_VOLT_THUNDERBOLT": {
        "name": "MOVE_10000000_VOLT_THUNDERBOLT",
        "changes": [],
        "description": [],
        "ingameName": "10000000 Volt Thunderbolt",
        "effect": "EFFECT_HIGH_CRITICAL",
        "power": "195",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_STOKED_SPARKSURFER": {
        "name": "MOVE_STOKED_SPARKSURFER",
        "changes": [],
        "description": [],
        "ingameName": "Stoked Sparksurfer",
        "effect": "EFFECT_PARALYZE_HIT",
        "power": "175",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "1",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            "",
            "Sheer Force Affected Moves"
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_EXTREME_EVOBOOST": {
        "name": "MOVE_EXTREME_EVOBOOST",
        "changes": [],
        "description": [],
        "ingameName": "Extreme Evoboost",
        "effect": "EFFECT_EXTREME_EVOBOOST",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_STATUS",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_PULVERIZING_PANCAKE": {
        "name": "MOVE_PULVERIZING_PANCAKE",
        "changes": [],
        "description": [],
        "ingameName": "Pulverizing Pancake",
        "effect": "EFFECT_HIT",
        "power": "210",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_GENESIS_SUPERNOVA": {
        "name": "MOVE_GENESIS_SUPERNOVA",
        "changes": [],
        "description": [],
        "ingameName": "Genesis Supernova",
        "effect": "EFFECT_ALL_STATS_UP_HIT",
        "power": "185",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "1",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            "",
            "Sheer Force Affected Moves"
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SINISTER_ARROW_RAID": {
        "name": "MOVE_SINISTER_ARROW_RAID",
        "changes": [],
        "description": [],
        "ingameName": "Sinister Arrow Raid",
        "effect": "EFFECT_HIT",
        "power": "180",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MALICIOUS_MOONSAULT": {
        "name": "MOVE_MALICIOUS_MOONSAULT",
        "changes": [],
        "description": [],
        "ingameName": "Malicious Moonsault",
        "effect": "EFFECT_HIT",
        "power": "180",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            "",
            "Always Hit When Minimized Moves"
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_OCEANIC_OPERETTA": {
        "name": "MOVE_OCEANIC_OPERETTA",
        "changes": [],
        "description": [],
        "ingameName": "Oceanic Operetta",
        "effect": "EFFECT_HIT",
        "power": "195",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SPLINTERED_STORMSHARDS": {
        "name": "MOVE_SPLINTERED_STORMSHARDS",
        "changes": [],
        "description": [],
        "ingameName": "Splintered Stormshards",
        "effect": "EFFECT_DAMAGE_SET_TERRAIN",
        "power": "190",
        "type": "TYPE_ROCK",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_LETS_SNUGGLE_FOREVER": {
        "name": "MOVE_LETS_SNUGGLE_FOREVER",
        "changes": [],
        "description": [],
        "ingameName": "Lets Snuggle Forever",
        "effect": "EFFECT_HIT",
        "power": "190",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_CLANGOROUS_SOULBLAZE": {
        "name": "MOVE_CLANGOROUS_SOULBLAZE",
        "changes": [],
        "description": [],
        "ingameName": "Clangorous Soulblaze",
        "effect": "EFFECT_ALL_STATS_UP_HIT",
        "power": "185",
        "type": "TYPE_DRAGON",
        "accuracy": "0",
        "PP": "1",
        "chance": "100",
        "target": "MOVE_TARGET_BOTH",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            "",
            "Sheer Force Affected Moves",
            "Punk Rock Affected Moves"
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_GUARDIAN_OF_ALOLA": {
        "name": "MOVE_GUARDIAN_OF_ALOLA",
        "changes": [],
        "description": [],
        "ingameName": "Guardian Of Alola",
        "effect": "EFFECT_SUPER_FANG",
        "power": "1",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SEARING_SUNRAZE_SMASH": {
        "name": "MOVE_SEARING_SUNRAZE_SMASH",
        "changes": [],
        "description": [],
        "ingameName": "Searing Sunraze Smash",
        "effect": "EFFECT_HIT",
        "power": "200",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            "",
            "Mold Breaker Moves"
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MENACING_MOONRAZE_MAELSTROM": {
        "name": "MOVE_MENACING_MOONRAZE_MAELSTROM",
        "changes": [],
        "description": [],
        "ingameName": "Menacing Moonraze Maelstrom",
        "effect": "EFFECT_HIT",
        "power": "200",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            "",
            "Mold Breaker Moves"
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_LIGHT_THAT_BURNS_THE_SKY": {
        "name": "MOVE_LIGHT_THAT_BURNS_THE_SKY",
        "changes": [],
        "description": [],
        "ingameName": "Light That Burns The Sky",
        "effect": "EFFECT_HIT",
        "power": "200",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_SPECIAL",
        "flags": [
            "",
            "Mold Breaker Moves",
            "Moves That Change Physicality"
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_SOUL_STEALING_7_STAR_STRIKE": {
        "name": "MOVE_SOUL_STEALING_7_STAR_STRIKE",
        "changes": [],
        "description": [],
        "ingameName": "Soul Stealing 7 Star Strike",
        "effect": "EFFECT_HIT",
        "power": "195",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "1",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "Zpower": "0",
        "split": "SPLIT_PHYSICAL",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_GUARD": {
        "name": "MOVE_MAX_GUARD",
        "changes": [],
        "description": [
            "Enables the user to evade all attacks. It may fail if used in succession.\r"
        ],
        "ingameName": "Guard",
        "effect": "EFFECT_PROTECT",
        "power": "0",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_USER",
        "priority": "4",
        "split": "SPLIT_STATUS",
        "Zpower": "0",
        "flags": [
            "",
            "Prio Plus 4"
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_FLARE_P": {
        "name": "MOVE_MAX_FLARE_P",
        "changes": [],
        "description": [
            "Fire-Type Dynamax move. It causes the sun to intensify for five turns.\r"
        ],
        "ingameName": "Flare",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_FIRE",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_FLARE_S": {
        "name": "MOVE_MAX_FLARE_S",
        "changes": [],
        "description": [
            "Fire-Type Dynamax move. It causes the sun to intensify for five turns.\r"
        ],
        "ingameName": "Flare",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_FIRE",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_FLUTTERBY_P": {
        "name": "MOVE_MAX_FLUTTERBY_P",
        "changes": [],
        "description": [
            "Bug-Type Dynamax move. It lowers the target's Sp. Atk stat.\r"
        ],
        "ingameName": "Flutterby",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_FLUTTERBY_S": {
        "name": "MOVE_MAX_FLUTTERBY_S",
        "changes": [],
        "description": [
            "Bug-Type Dynamax move. It lowers the target's Sp. Atk stat.\r"
        ],
        "ingameName": "Flutterby",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_LIGHTNING_P": {
        "name": "MOVE_MAX_LIGHTNING_P",
        "changes": [],
        "description": [
            "Electric Dynamax move. It activates Electric Terrain for five turns.\r"
        ],
        "ingameName": "Lightning",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_LIGHTNING_S": {
        "name": "MOVE_MAX_LIGHTNING_S",
        "changes": [],
        "description": [
            "Electric Dynamax move. It activates Electric Terrain for five turns.\r"
        ],
        "ingameName": "Lightning",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_STRIKE_P": {
        "name": "MOVE_MAX_STRIKE_P",
        "changes": [],
        "description": [
            "Normal-Type Dynamax move. It lowers the target's Speed stat.\r"
        ],
        "ingameName": "Strike",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_STRIKE_S": {
        "name": "MOVE_MAX_STRIKE_S",
        "changes": [],
        "description": [
            "Normal-Type Dynamax move. It lowers the target's Speed stat.\r"
        ],
        "ingameName": "Strike",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_KNUCKLE_P": {
        "name": "MOVE_MAX_KNUCKLE_P",
        "changes": [],
        "description": [
            "Fighting Dynamax move. It raises ally Pokemon's Attack stats.\r"
        ],
        "ingameName": "Knuckle",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_KNUCKLE_S": {
        "name": "MOVE_MAX_KNUCKLE_S",
        "changes": [],
        "description": [
            "Fighting Dynamax move. It raises ally Pokemon's Attack stats.\r"
        ],
        "ingameName": "Knuckle",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_PHANTASM_P": {
        "name": "MOVE_MAX_PHANTASM_P",
        "changes": [],
        "description": [
            "Ghost-Type Dynamax move. It lowers the target's Defense stat.\r"
        ],
        "ingameName": "Phantasm",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_PHANTASM_S": {
        "name": "MOVE_MAX_PHANTASM_S",
        "changes": [],
        "description": [
            "Ghost-Type Dynamax move. It lowers the target's Defense stat.\r"
        ],
        "ingameName": "Phantasm",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_HAILSTORM_P": {
        "name": "MOVE_MAX_HAILSTORM_P",
        "changes": [],
        "description": [
            "Ice-Type Dynamax move. It summons a snowstorm for five turns.\r"
        ],
        "ingameName": "Hailstorm",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_ICE",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_HAILSTORM_S": {
        "name": "MOVE_MAX_HAILSTORM_S",
        "changes": [],
        "description": [
            "Ice-Type Dynamax move. It summons a snowstorm for five turns.\r"
        ],
        "ingameName": "Hailstorm",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_ICE",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_OOZE_P": {
        "name": "MOVE_MAX_OOZE_P",
        "changes": [],
        "description": [
            "Poison-Type Dynamax move. It raises ally Pokemon's Sp. Atk stats.\r"
        ],
        "ingameName": "Ooze",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_POISON",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_OOZE_S": {
        "name": "MOVE_MAX_OOZE_S",
        "changes": [],
        "description": [
            "Poison-Type Dynamax move. It raises ally Pokemon's Sp. Atk stats.\r"
        ],
        "ingameName": "Ooze",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_POISON",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_GEYSER_P": {
        "name": "MOVE_MAX_GEYSER_P",
        "changes": [],
        "description": [
            "Water-Type Dynamax move. It summons rain that falls for five turns.\r"
        ],
        "ingameName": "Geyser",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_GEYSER_S": {
        "name": "MOVE_MAX_GEYSER_S",
        "changes": [],
        "description": [
            "Water-Type Dynamax move. It summons rain that falls for five turns.\r"
        ],
        "ingameName": "Geyser",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_AIRSTREAM_P": {
        "name": "MOVE_MAX_AIRSTREAM_P",
        "changes": [],
        "description": [
            "Flying-Type Dynamax move. It raises ally Pokemon's Speed stats.\r"
        ],
        "ingameName": "Airstream",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_FLYING",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_AIRSTREAM_S": {
        "name": "MOVE_MAX_AIRSTREAM_S",
        "changes": [],
        "description": [
            "Flying-Type Dynamax move. It raises ally Pokemon's Speed stats.\r"
        ],
        "ingameName": "Airstream",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_FLYING",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_STARFALL_P": {
        "name": "MOVE_MAX_STARFALL_P",
        "changes": [],
        "description": [
            "Fairy-Type Dynamax move. It activates Misty Terrain for five turns.\r"
        ],
        "ingameName": "Starfall",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_STARFALL_S": {
        "name": "MOVE_MAX_STARFALL_S",
        "changes": [],
        "description": [
            "Fairy-Type Dynamax move. It activates Misty Terrain for five turns.\r"
        ],
        "ingameName": "Starfall",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_WYRMWIND_P": {
        "name": "MOVE_MAX_WYRMWIND_P",
        "changes": [],
        "description": [
            "Dragon-Type Dynamax move. It lowers the target's Attack stat.\r"
        ],
        "ingameName": "Wyrmwind",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_DRAGON",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_WYRMWIND_S": {
        "name": "MOVE_MAX_WYRMWIND_S",
        "changes": [],
        "description": [
            "Dragon-Type Dynamax move. It lowers the target's Attack stat.\r"
        ],
        "ingameName": "Wyrmwind",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_DRAGON",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_MINDSTORM_P": {
        "name": "MOVE_MAX_MINDSTORM_P",
        "changes": [],
        "description": [
            "Psychic Dynamax move. It activates Psychic Terrain for five turns.\r"
        ],
        "ingameName": "Mindstorm",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_MINDSTORM_S": {
        "name": "MOVE_MAX_MINDSTORM_S",
        "changes": [],
        "description": [
            "Psychic Dynamax move. It activates Psychic Terrain for five turns.\r"
        ],
        "ingameName": "Mindstorm",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_ROCKFALL_P": {
        "name": "MOVE_MAX_ROCKFALL_P",
        "changes": [],
        "description": [
            "Rock-Type Dynamax move. It summons a sandstorm that lasts five turns.\r"
        ],
        "ingameName": "Rockfall",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_ROCK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_ROCKFALL_S": {
        "name": "MOVE_MAX_ROCKFALL_S",
        "changes": [],
        "description": [
            "Rock-Type Dynamax move. It summons a sandstorm that lasts five turns.\r"
        ],
        "ingameName": "Rockfall",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_ROCK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_QUAKE_P": {
        "name": "MOVE_MAX_QUAKE_P",
        "changes": [],
        "description": [
            "Ground-Type Dynamax move. It raises ally Pokemon's Sp. Def stats.\r"
        ],
        "ingameName": "Quake",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_GROUND",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_QUAKE_S": {
        "name": "MOVE_MAX_QUAKE_S",
        "changes": [],
        "description": [
            "Ground-Type Dynamax move. It raises ally Pokemon's Sp. Def stats.\r"
        ],
        "ingameName": "Quake",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_GROUND",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_DARKNESS_P": {
        "name": "MOVE_MAX_DARKNESS_P",
        "changes": [],
        "description": [
            "Dark-Type Dynamax move. It lowers the target's Sp. Def stat.\r"
        ],
        "ingameName": "Darkness",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_DARKNESS_S": {
        "name": "MOVE_MAX_DARKNESS_S",
        "changes": [],
        "description": [
            "Dark-Type Dynamax move. It lowers the target's Sp. Def stat.\r"
        ],
        "ingameName": "Darkness",
        "effect": "EFFECT_MAX_MOVE",
        "power": "1",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "10",
        "chance": "100",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_OVERGROWTH_P": {
        "name": "MOVE_MAX_OVERGROWTH_P",
        "changes": [],
        "description": [
            "Grass-Type Dynamax move. It activates Grassy Terrain for five turns.\r"
        ],
        "ingameName": "Overgrowth",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_OVERGROWTH_S": {
        "name": "MOVE_MAX_OVERGROWTH_S",
        "changes": [],
        "description": [
            "Grass-Type Dynamax move. It activates Grassy Terrain for five turns.\r"
        ],
        "ingameName": "Overgrowth",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_STEELSPIKE_P": {
        "name": "MOVE_MAX_STEELSPIKE_P",
        "changes": [],
        "description": [
            "Steel-Type Dynamax move. It raises ally Pokemon's Defense stats.\r"
        ],
        "ingameName": "Steelspike",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_MAX_STEELSPIKE_S": {
        "name": "MOVE_MAX_STEELSPIKE_S",
        "changes": [],
        "description": [
            "Steel-Type Dynamax move. It raises ally Pokemon's Defense stats.\r"
        ],
        "ingameName": "Steelspike",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_VINE_LASH_P": {
        "name": "MOVE_G_MAX_VINE_LASH_P",
        "changes": [],
        "description": [
            "G-Max Venusaur's signature move. It deals damage for four turns.\r"
        ],
        "ingameName": "Vine Lash",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_VINE_LASH_S": {
        "name": "MOVE_G_MAX_VINE_LASH_S",
        "changes": [],
        "description": [
            "G-Max Venusaur's signature move. It deals damage for four turns.\r"
        ],
        "ingameName": "Vine Lash",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_WILDFIRE_P": {
        "name": "MOVE_G_MAX_WILDFIRE_P",
        "changes": [],
        "description": [
            "G-Max Charizard's signature move. It deals damage for four turns.\r"
        ],
        "ingameName": "Wildfire",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FIRE",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_WILDFIRE_S": {
        "name": "MOVE_G_MAX_WILDFIRE_S",
        "changes": [],
        "description": [
            "G-Max Charizard's signature move. It deals damage for four turns.\r"
        ],
        "ingameName": "Wildfire",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FIRE",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_CANNONADE_P": {
        "name": "MOVE_G_MAX_CANNONADE_P",
        "changes": [],
        "description": [
            "G-Max Blastoise's signature move. It deals damage for four turns.\r"
        ],
        "ingameName": "Cannonade",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_CANNONADE_S": {
        "name": "MOVE_G_MAX_CANNONADE_S",
        "changes": [],
        "description": [
            "G-Max Blastoise's signature move. It deals damage for four turns.\r"
        ],
        "ingameName": "Cannonade",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_BEFUDDLE_P": {
        "name": "MOVE_G_MAX_BEFUDDLE_P",
        "changes": [],
        "description": [
            "G-Max Butterfree's signature move. It causes paralysis, sleep, or poison.\r"
        ],
        "ingameName": "Befuddle",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_BEFUDDLE_S": {
        "name": "MOVE_G_MAX_BEFUDDLE_S",
        "changes": [],
        "description": [
            "G-Max Butterfree's signature move. It causes paralysis, sleep, or poison.\r"
        ],
        "ingameName": "Befuddle",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_BUG",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_VOLT_CRASH_P": {
        "name": "MOVE_G_MAX_VOLT_CRASH_P",
        "changes": [],
        "description": [],
        "ingameName": "G Max Volt Crash P",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_VOLT_CRASH_S": {
        "name": "MOVE_G_MAX_VOLT_CRASH_S",
        "changes": [],
        "description": [],
        "ingameName": "G Max Volt Crash S",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_GOLD_RUSH_P": {
        "name": "MOVE_G_MAX_GOLD_RUSH_P",
        "changes": [],
        "description": [],
        "ingameName": "G Max Gold Rush P",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_GOLD_RUSH_S": {
        "name": "MOVE_G_MAX_GOLD_RUSH_S",
        "changes": [],
        "description": [],
        "ingameName": "G Max Gold Rush S",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "100",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_CHI_STRIKE_P": {
        "name": "MOVE_G_MAX_CHI_STRIKE_P",
        "changes": [],
        "description": [],
        "ingameName": "G Max Chi Strike P",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_CHI_STRIKE_S": {
        "name": "MOVE_G_MAX_CHI_STRIKE_S",
        "changes": [],
        "description": [],
        "ingameName": "G Max Chi Strike S",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FIGHTING",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_TERROR_P": {
        "name": "MOVE_G_MAX_TERROR_P",
        "changes": [],
        "description": [
            "G-Max Gengar's signature move. It prevents the foe from escaping.\r"
        ],
        "ingameName": "Terror",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_TERROR_S": {
        "name": "MOVE_G_MAX_TERROR_S",
        "changes": [],
        "description": [
            "G-Max Gengar's signature move. It prevents the foe from escaping.\r"
        ],
        "ingameName": "Terror",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GHOST",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_FOAM_BURST_P": {
        "name": "MOVE_G_MAX_FOAM_BURST_P",
        "changes": [],
        "description": [],
        "ingameName": "G Max Foam Burst P",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_FOAM_BURST_S": {
        "name": "MOVE_G_MAX_FOAM_BURST_S",
        "changes": [],
        "description": [],
        "ingameName": "G Max Foam Burst S",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_RESONANCE_P": {
        "name": "MOVE_G_MAX_RESONANCE_P",
        "changes": [],
        "description": [
            "G-Max Lapras's signature move. It reduces damage for five turns.\r"
        ],
        "ingameName": "Resonance",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_ICE",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_RESONANCE_S": {
        "name": "MOVE_G_MAX_RESONANCE_S",
        "changes": [],
        "description": [
            "G-Max Lapras's signature move. It reduces damage for five turns.\r"
        ],
        "ingameName": "Resonance",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_ICE",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_CUDDLE_P": {
        "name": "MOVE_G_MAX_CUDDLE_P",
        "changes": [],
        "description": [
            "G-Max Eevee's signature move. It infatuates the target.\r"
        ],
        "ingameName": "Cuddle",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_CUDDLE_S": {
        "name": "MOVE_G_MAX_CUDDLE_S",
        "changes": [],
        "description": [
            "G-Max Eevee's signature move. It infatuates the target.\r"
        ],
        "ingameName": "Cuddle",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_REPLENISH_P": {
        "name": "MOVE_G_MAX_REPLENISH_P",
        "changes": [],
        "description": [
            "G-Max Snorlax's signature move. It restores Berries that were eaten.\r"
        ],
        "ingameName": "Replenish",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_REPLENISH_S": {
        "name": "MOVE_G_MAX_REPLENISH_S",
        "changes": [],
        "description": [
            "G-Max Snorlax's signature move. It restores Berries that were eaten.\r"
        ],
        "ingameName": "Replenish",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_NORMAL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_MALODOR_P": {
        "name": "MOVE_G_MAX_MALODOR_P",
        "changes": [],
        "description": [
            "G-Max Garbodor's signature move. It poisons the target.\r"
        ],
        "ingameName": "Malodor",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_POISON",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_MALODOR_S": {
        "name": "MOVE_G_MAX_MALODOR_S",
        "changes": [],
        "description": [
            "G-Max Garbodor's signature move. It poisons the target.\r"
        ],
        "ingameName": "Malodor",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_POISON",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_MELTDOWN_P": {
        "name": "MOVE_G_MAX_MELTDOWN_P",
        "changes": [],
        "description": [
            "G-Max Melmetal's signature move. It prevents the foe from repeating moves.\r"
        ],
        "ingameName": "Meltdown",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_MELTDOWN_S": {
        "name": "MOVE_G_MAX_MELTDOWN_S",
        "changes": [],
        "description": [
            "G-Max Melmetal's signature move. It prevents the foe from repeating moves.\r"
        ],
        "ingameName": "Meltdown",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_DRUM_SOLO_P": {
        "name": "MOVE_G_MAX_DRUM_SOLO_P",
        "changes": [],
        "description": [
            "G-Max Rillaboom's signature move. It strikes regardless of the target's ability.\r"
        ],
        "ingameName": "Drum Solo",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_DRUM_SOLO_S": {
        "name": "MOVE_G_MAX_DRUM_SOLO_S",
        "changes": [],
        "description": [
            "G-Max Rillaboom's signature move. It strikes regardless of the target's ability.\r"
        ],
        "ingameName": "Drum Solo",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_FIREBALL_P": {
        "name": "MOVE_G_MAX_FIREBALL_P",
        "changes": [],
        "description": [
            "G-Max Cinderace's signature move. It strikes regardless of the target's ability.\r"
        ],
        "ingameName": "Fireball",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FIRE",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_FIREBALL_S": {
        "name": "MOVE_G_MAX_FIREBALL_S",
        "changes": [],
        "description": [
            "G-Max Cinderace's signature move. It strikes regardless of the target's ability.\r"
        ],
        "ingameName": "Fireball",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FIRE",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_HYDROSNIPE_P": {
        "name": "MOVE_G_MAX_HYDROSNIPE_P",
        "changes": [],
        "description": [
            "G-Max Inteleon's signature move. It strikes regardless of the target's ability.\r"
        ],
        "ingameName": "Hydrosnipe",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_HYDROSNIPE_S": {
        "name": "MOVE_G_MAX_HYDROSNIPE_S",
        "changes": [],
        "description": [
            "G-Max Inteleon's signature move. It strikes regardless of the target's ability.\r"
        ],
        "ingameName": "Hydrosnipe",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_WIND_RAGE_P": {
        "name": "MOVE_G_MAX_WIND_RAGE_P",
        "changes": [],
        "description": [],
        "ingameName": "G Max Wind Rage P",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FLYING",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_WIND_RAGE_S": {
        "name": "MOVE_G_MAX_WIND_RAGE_S",
        "changes": [],
        "description": [],
        "ingameName": "G Max Wind Rage S",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FLYING",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_GRAVITAS_P": {
        "name": "MOVE_G_MAX_GRAVITAS_P",
        "changes": [],
        "description": [
            "G-Max Orbeetle's signature move. It changes gravity for five turns.\r"
        ],
        "ingameName": "Gravitas",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_GRAVITAS_S": {
        "name": "MOVE_G_MAX_GRAVITAS_S",
        "changes": [],
        "description": [
            "G-Max Orbeetle's signature move. It changes gravity for five turns.\r"
        ],
        "ingameName": "Gravitas",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_PSYCHIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_STONESURGE_P": {
        "name": "MOVE_G_MAX_STONESURGE_P",
        "changes": [],
        "description": [
            "G-Max Drednaw's signature move. It scatters rocks around the field.\r"
        ],
        "ingameName": "Stonesurge",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_STONESURGE_S": {
        "name": "MOVE_G_MAX_STONESURGE_S",
        "changes": [],
        "description": [
            "G-Max Drednaw's signature move. It scatters rocks around the field.\r"
        ],
        "ingameName": "Stonesurge",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_VOLCALITH_P": {
        "name": "MOVE_G_MAX_VOLCALITH_P",
        "changes": [],
        "description": [
            "G-Max Coalossal's signature move. It deals damage for four turns.\r"
        ],
        "ingameName": "Volcalith",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_ROCK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_VOLCALITH_S": {
        "name": "MOVE_G_MAX_VOLCALITH_S",
        "changes": [],
        "description": [
            "G-Max Coalossal's signature move. It deals damage for four turns.\r"
        ],
        "ingameName": "Volcalith",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_ROCK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_TARTNESS_P": {
        "name": "MOVE_G_MAX_TARTNESS_P",
        "changes": [],
        "description": [
            "G-Max Flapple's signature move. It reduces the foe's evasiveness.\r"
        ],
        "ingameName": "Tartness",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_TARTNESS_S": {
        "name": "MOVE_G_MAX_TARTNESS_S",
        "changes": [],
        "description": [
            "G-Max Flapple's signature move. It reduces the foe's evasiveness.\r"
        ],
        "ingameName": "Tartness",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_SWEETNESS_P": {
        "name": "MOVE_G_MAX_SWEETNESS_P",
        "changes": [],
        "description": [
            "G-Max Appletun's signature move. It heals the status of its allies.\r"
        ],
        "ingameName": "Sweetness",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_SWEETNESS_S": {
        "name": "MOVE_G_MAX_SWEETNESS_S",
        "changes": [],
        "description": [
            "G-Max Appletun's signature move. It heals the status of its allies.\r"
        ],
        "ingameName": "Sweetness",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GRASS",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_SANDBLAST_P": {
        "name": "MOVE_G_MAX_SANDBLAST_P",
        "changes": [],
        "description": [
            "G-Max Sandaconda's signature move. It traps the foe for four to five turns.\r"
        ],
        "ingameName": "Sandblast",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GROUND",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_SANDBLAST_S": {
        "name": "MOVE_G_MAX_SANDBLAST_S",
        "changes": [],
        "description": [
            "G-Max Sandaconda's signature move. It traps the foe for four to five turns.\r"
        ],
        "ingameName": "Sandblast",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_GROUND",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_STUN_SHOCK_P": {
        "name": "MOVE_G_MAX_STUN_SHOCK_P",
        "changes": [],
        "description": [],
        "ingameName": "G Max Stun Shock P",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_STUN_SHOCK_S": {
        "name": "MOVE_G_MAX_STUN_SHOCK_S",
        "changes": [],
        "description": [],
        "ingameName": "G Max Stun Shock S",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_ELECTRIC",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_CENTIFERNO_P": {
        "name": "MOVE_G_MAX_CENTIFERNO_P",
        "changes": [],
        "description": [
            "G-Max Centiskorch's signature move. It traps the foe for four to five turns.\r"
        ],
        "ingameName": "Centiferno",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FIRE",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_CENTIFERNO_S": {
        "name": "MOVE_G_MAX_CENTIFERNO_S",
        "changes": [],
        "description": [
            "G-Max Centiskorch's signature move. It traps the foe for four to five turns.\r"
        ],
        "ingameName": "Centiferno",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FIRE",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_SMITE_P": {
        "name": "MOVE_G_MAX_SMITE_P",
        "changes": [],
        "description": [
            "G-Max Hatterene's signature move. It confuses the target.\r"
        ],
        "ingameName": "Smite",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_SMITE_S": {
        "name": "MOVE_G_MAX_SMITE_S",
        "changes": [],
        "description": [
            "G-Max Hatterene's signature move. It confuses the target.\r"
        ],
        "ingameName": "Smite",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_SNOOZE_P": {
        "name": "MOVE_G_MAX_SNOOZE_P",
        "changes": [],
        "description": [
            "G-Max Grimmsnarl's signature move. It inflicts Yawn status on the foe.\r"
        ],
        "ingameName": "Snooze",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_SNOOZE_S": {
        "name": "MOVE_G_MAX_SNOOZE_S",
        "changes": [],
        "description": [
            "G-Max Grimmsnarl's signature move. It inflicts Yawn status on the foe.\r"
        ],
        "ingameName": "Snooze",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_FINALE_P": {
        "name": "MOVE_G_MAX_FINALE_P",
        "changes": [],
        "description": [
            "G-Max Alcremie's signature move. It heals the HP of its allies.\r"
        ],
        "ingameName": "Finale",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_FINALE_S": {
        "name": "MOVE_G_MAX_FINALE_S",
        "changes": [],
        "description": [
            "G-Max Alcremie's signature move. It heals the HP of its allies.\r"
        ],
        "ingameName": "Finale",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_FAIRY",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_STEELSURGE_P": {
        "name": "MOVE_G_MAX_STEELSURGE_P",
        "changes": [],
        "description": [
            "G-Max Copperajah's signature move. It scatters spikes around the field.\r"
        ],
        "ingameName": "Steelsurge",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_STEELSURGE_S": {
        "name": "MOVE_G_MAX_STEELSURGE_S",
        "changes": [],
        "description": [
            "G-Max Copperajah's signature move. It scatters spikes around the field.\r"
        ],
        "ingameName": "Steelsurge",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_STEEL",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_DEPLETION_P": {
        "name": "MOVE_G_MAX_DEPLETION_P",
        "changes": [],
        "description": [
            "G-Max Duraludon's signature move. It reduces the PP of the last move used.\r"
        ],
        "ingameName": "Depletion",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_DRAGON",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_DEPLETION_S": {
        "name": "MOVE_G_MAX_DEPLETION_S",
        "changes": [],
        "description": [
            "G-Max Duraludon's signature move. It reduces the PP of the last move used.\r"
        ],
        "ingameName": "Depletion",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_DRAGON",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_ONE_BLOW_P": {
        "name": "MOVE_G_MAX_ONE_BLOW_P",
        "changes": [],
        "description": [
            "G-Max Single Strike Urshifu's signature move. It bypasses the use of Max Guard.\r"
        ],
        "ingameName": "One Blow",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_ONE_BLOW_S": {
        "name": "MOVE_G_MAX_ONE_BLOW_S",
        "changes": [],
        "description": [
            "G-Max Single Strike Urshifu's signature move. It bypasses the use of Max Guard.\r"
        ],
        "ingameName": "One Blow",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_DARK",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_RAPID_FLOW_P": {
        "name": "MOVE_G_MAX_RAPID_FLOW_P",
        "changes": [],
        "description": [
            "G-Max Rapid Strike Urshifu's signature move. It bypasses the use of Max Guard.\r"
        ],
        "ingameName": "Rapid Flow",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_PHYSICAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    },
    "MOVE_G_MAX_RAPID_FLOW_S": {
        "name": "MOVE_G_MAX_RAPID_FLOW_S",
        "changes": [],
        "description": [
            "G-Max Rapid Strike Urshifu's signature move. It bypasses the use of Max Guard.\r"
        ],
        "ingameName": "Rapid Flow",
        "effect": "EFFECT_MAX_MOVE",
        "power": "10",
        "type": "TYPE_WATER",
        "accuracy": "0",
        "PP": "10",
        "chance": "0",
        "target": "MOVE_TARGET_SELECTED",
        "priority": "0",
        "split": "SPLIT_SPECIAL",
        "Zpower": "0",
        "flags": [
            ""
        ],
        "Zeffect": "",
        "maxPower": ""
    }
}