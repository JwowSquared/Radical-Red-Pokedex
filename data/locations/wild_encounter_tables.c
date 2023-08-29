#include "../config.h"
#include "../../include/global.h"
#include "../../include/constants/maps.h"
#include "../../include/wild_encounter.h"
#include "../../include/constants/region_map_sections.h"
#include "../../include/constants/species.h"

/*
wild_encounter_tables.c
	day/night and/or regular map wild encounter species

tables to edit:
	gWildMonMorningHeaders
	gWildMonEveningHeaders
	gWildMonNightHeaders
	gSwarmTable

*/

static const struct WildPokemon gPalletTown_SurfMons[] = 
{
  {56, 58, SPECIES_TENTACOOL},
  {56, 58, SPECIES_TENTACOOL},
  {56, 58, SPECIES_TENTACRUEL},
  {56, 58, SPECIES_TENTACRUEL},
  {56, 58, SPECIES_TENTACRUEL},
};

static const struct WildPokemonInfo gPalletTown_SurfMonsInfo = {5, gPalletTown_SurfMons};

static const struct WildPokemon gPalletTown_FishingMons[] = 
{
  {2, 4, SPECIES_TENTACOOL},
  {2, 4, SPECIES_BINACLE},
  {27, 29, SPECIES_BARBOACH},
  {27, 29, SPECIES_CARVANHA},
  {27, 29, SPECIES_QWILFISH},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_CLAMPERL},
  {53, 55, SPECIES_WHISCASH},
  {53, 55, SPECIES_WHISCASH},
};

static const struct WildPokemonInfo gPalletTown_FishingMonsInfo = {5, gPalletTown_FishingMons};

static const struct WildPokemon gRoute1_LandMonsDay[] = 
{
  {2, 4, SPECIES_BIDOOF},
  {2, 4, SPECIES_ZIGZAGOON},
  {2, 4, SPECIES_RATTATA},
  {2, 4, SPECIES_MIENFOO},
  {2, 4, SPECIES_MEOWTH},
  {2, 4, SPECIES_YUNGOOS},
  {3, 5, SPECIES_PIDGEY},
  {3, 5, SPECIES_PIDGEY},
  {2, 4, SPECIES_SMOLIV},
  {2, 4, SPECIES_SMOLIV},
  {2, 4, SPECIES_PANSEAR},
  {2, 4, SPECIES_PANSEAR},
};

static const struct WildPokemonInfo gRoute1_LandMonsInfoDay = {20, gRoute1_LandMonsDay};

static const struct WildPokemon gRoute1_LandMonsNight[] = 
{
  {2, 4, SPECIES_POOCHYENA},
  {2, 4, SPECIES_ZIGZAGOON_G},
  {2, 4, SPECIES_RATTATA_A},
  {2, 4, SPECIES_SCRAGGY},
  {2, 4, SPECIES_MEOWTH_G},
  {2, 4, SPECIES_HOOTHOOT},
  {3, 5, SPECIES_PIDGEY},
  {3, 5, SPECIES_PIDGEY},
  {2, 4, SPECIES_SEEDOT},
  {2, 4, SPECIES_SEEDOT},
  {2, 4, SPECIES_PANSEAR},
  {2, 4, SPECIES_PANSEAR},
};

static const struct WildPokemonInfo gRoute1_LandMonsInfoNight = {20, gRoute1_LandMonsNight};

static const struct WildPokemon gViridianCity_LandMonsDay[] = 
{
  {3, 5, SPECIES_SHINX},
  {3, 5, SPECIES_WOOLOO},
  {3, 5, SPECIES_POOCHYENA},
  {3, 5, SPECIES_SPEAROW},
  {3, 5, SPECIES_PATRAT},
  {4, 6, SPECIES_CUBCHOO},
  {3, 5, SPECIES_DEERLING_SUMMER},
  {3, 5, SPECIES_GREAVARD},
  {3, 5, SPECIES_PIKIPEK},
  {3, 5, SPECIES_PIKIPEK},
  {3, 5, SPECIES_SNOVER},
  {3, 5, SPECIES_SNOVER},
};

static const struct WildPokemonInfo gViridianCity_LandMonsInfoDay = {20, gViridianCity_LandMonsDay};

static const struct WildPokemon gViridianCity_LandMonsNight[] = 
{
  {3, 5, SPECIES_PAWMI},
  {3, 5, SPECIES_MAREEP},
  {3, 5, SPECIES_POOCHYENA},
  {3, 5, SPECIES_SPEAROW},
  {3, 5, SPECIES_PATRAT},
  {4, 6, SPECIES_CUBCHOO},
  {3, 5, SPECIES_DEERLING_AUTUMN},
  {3, 5, SPECIES_SHUPPET},
  {3, 5, SPECIES_WATTREL},
  {3, 5, SPECIES_WATTREL},
  {3, 5, SPECIES_SWINUB},
  {3, 5, SPECIES_SWINUB},
};

static const struct WildPokemonInfo gViridianCity_LandMonsInfoNight = {20, gViridianCity_LandMonsNight};

static const struct WildPokemon gViridianCity_SurfMons[] = 
{
  {56, 58, SPECIES_LANTURN},
  {56, 58, SPECIES_LANTURN},
  {56, 58, SPECIES_LANTURN},
  {56, 58, SPECIES_LANTURN},
  {56, 58, SPECIES_LANTURN},
};

static const struct WildPokemonInfo gViridianCity_SurfMonsInfo = {5, gViridianCity_SurfMons};

static const struct WildPokemon gViridianCity_FishingMons[] = 
{
  {3, 4, SPECIES_MARILL},
  {3, 4, SPECIES_CLAMPERL},
  {27, 29, SPECIES_CLAUNCHER},
  {27, 29, SPECIES_REMORAID},
  {27, 29, SPECIES_CORSOLA},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_BRUXISH},
  {53, 55, SPECIES_CLAWITZER},
  {53, 55, SPECIES_CLAWITZER},
};

static const struct WildPokemonInfo gViridianCity_FishingMonsInfo = {5, gViridianCity_FishingMons};

static const struct WildPokemon gRoute22_LandMonsDay[] = 
{
  {3, 5, SPECIES_STARLY},
  {3, 5, SPECIES_BUDEW},
  {3, 5, SPECIES_MANKEY},
  {3, 5, SPECIES_MORELULL},
  {3, 5, SPECIES_SNUBBULL},
  {3, 5, SPECIES_LILLIPUP},
  {3, 5, SPECIES_ODDISH},
  {3, 5, SPECIES_SANDYGAST},
  {3, 5, SPECIES_BELLSPROUT},
  {3, 5, SPECIES_ROCKRUFF},
  {3, 5, SPECIES_PANPOUR},
  {3, 5, SPECIES_PANPOUR},
};

static const struct WildPokemonInfo gRoute22_LandMonsInfoDay = {20, gRoute22_LandMonsDay};

static const struct WildPokemon gRoute22_LandMonsNight[] = 
{
  {3, 5, SPECIES_STARLY},
  {3, 5, SPECIES_SANDSHREW_A},
  {3, 5, SPECIES_MANKEY},
  {3, 5, SPECIES_MORELULL},
  {3, 5, SPECIES_FLABEBE},
  {3, 5, SPECIES_SKWOVET},
  {3, 5, SPECIES_APPLIN},
  {3, 5, SPECIES_SANDYGAST},
  {3, 5, SPECIES_PARAS},
  {3, 5, SPECIES_ROCKRUFF},
  {3, 5, SPECIES_PANPOUR},
  {3, 5, SPECIES_PANPOUR},
};

static const struct WildPokemonInfo gRoute22_LandMonsInfoNight = {20, gRoute22_LandMonsNight};

static const struct WildPokemon gRoute22_SurfMons[] = 
{
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_SLOWPOKE},
  {56, 58, SPECIES_POLIWHIRL},
  {56, 58, SPECIES_POLIWHIRL},
};

static const struct WildPokemonInfo gRoute22_SurfMonsInfo = {5, gRoute22_SurfMons};

static const struct WildPokemon gRoute22_FishingMons[] = 
{
  {2, 4, SPECIES_PSYDUCK},
  {2, 4, SPECIES_CORPHISH},
  {27, 29, SPECIES_CORPHISH},
  {27, 29, SPECIES_MANTYKE},
  {27, 29, SPECIES_MAREANIE},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_BASCULIN_BLUE},
  {53, 55, SPECIES_WAILORD},
  {53, 55, SPECIES_WAILORD},
};


static const struct WildPokemonInfo gRoute22_FishingMonsInfo = {5, gRoute22_FishingMons};

static const struct WildPokemon gRoute2_LandMonsDay[] = 
{
  {3, 5, SPECIES_BIDOOF},
  {3, 5, SPECIES_SENTRET},
  {3, 5, SPECIES_PONYTA},
  {3, 5, SPECIES_PHANPY},
  {3, 5, SPECIES_MEDITITE},
  {3, 5, SPECIES_SHINX},
  {3, 5, SPECIES_MAREEP},
  {4, 6, SPECIES_LITLEO},
  {3, 5, SPECIES_ZIGZAGOON},
  {3, 5, SPECIES_ABRA},
  {3, 5, SPECIES_PANSAGE},
  {3, 5, SPECIES_PANSAGE},
};

static const struct WildPokemonInfo gRoute2_LandMonsInfoDay = {20, gRoute2_LandMonsDay};

static const struct WildPokemon gRoute2_LandMonsNight[] = 
{
  {3, 5, SPECIES_POOCHYENA},
  {3, 5, SPECIES_SENTRET},
  {3, 5, SPECIES_PONYTA_G},
  {3, 5, SPECIES_PHANPY},
  {3, 5, SPECIES_MEDITITE},
  {3, 5, SPECIES_SHINX},
  {3, 5, SPECIES_MAREEP},
  {4, 6, SPECIES_HOUNDOUR},
  {3, 5, SPECIES_ZIGZAGOON_G},
  {3, 5, SPECIES_ABRA},
  {3, 5, SPECIES_PANSAGE},
  {3, 5, SPECIES_PANSAGE},
};

static const struct WildPokemonInfo gRoute2_LandMonsInfoNight = {20, gRoute2_LandMonsNight};

static const struct WildPokemon gViridianForest_LandMonsDay[] = 
{
  {4, 6, SPECIES_CATERPIE}, //1
  {4, 6, SPECIES_WEEDLE}, //2
  {4, 6, SPECIES_PIKACHU}, //3
  {4, 6, SPECIES_BURMY_SANDY}, //4
  {4, 6, SPECIES_SEWADDLE}, //5
  {4, 6, SPECIES_SCATTERBUG}, //6
  {4, 6, SPECIES_LEDYBA}, //7
  {4, 6, SPECIES_SURSKIT}, //8
  {4, 6, SPECIES_SHROOMISH}, //9
  {4, 6, SPECIES_SHROOMISH}, //10
  {5, 7, SPECIES_JOLTIK}, //11
  {4, 6, SPECIES_JOLTIK}, //12
};

static const struct WildPokemonInfo gViridianForest_LandMonsInfoDay = {12, gViridianForest_LandMonsDay};

static const struct WildPokemon gViridianForest_LandMonsNight[] = 
{
  {4, 6, SPECIES_SPINARAK}, //1
  {4, 6, SPECIES_WURMPLE}, //2
  {4, 6, SPECIES_PIKACHU}, //3
  {4, 6, SPECIES_BURMY_TRASH}, //4
  {4, 6, SPECIES_NINCADA}, //5
  {4, 6, SPECIES_KRICKETOT}, //6
  {4, 6, SPECIES_LEDYBA}, //7
  {4, 6, SPECIES_RELLOR}, //8
  {4, 6, SPECIES_TOEDSCOOL}, //9
  {4, 6, SPECIES_TOEDSCOOL}, //10
  {4, 6, SPECIES_SNOM}, //11
  {4, 6, SPECIES_SNOM}, //12
};

static const struct WildPokemonInfo gViridianForest_LandMonsInfoNight = {12, gViridianForest_LandMonsNight};

static const struct WildPokemon gViridianForest2_LandMonsDay[] = 
{
  {4, 6, SPECIES_CATERPIE},
  {4, 6, SPECIES_WEEDLE},
  {4, 6, SPECIES_PIKACHU},
  {4, 6, SPECIES_BURMY},
  {4, 6, SPECIES_COMBEE},
  {4, 6, SPECIES_KRICKETOT},
  {4, 6, SPECIES_SLAKOTH},
  {4, 6, SPECIES_GRUBBIN},
  {4, 6, SPECIES_BRAMBLIN},
  {4, 6, SPECIES_PUMPKABOO_XL},
  {5, 7, SPECIES_NYMBLE},
  {4, 6, SPECIES_NYMBLE},
};

static const struct WildPokemonInfo gViridianForest2_LandMonsInfoDay = {12, gViridianForest2_LandMonsDay};

static const struct WildPokemon gViridianForest2_LandMonsNight[] = 
{
  {4, 6, SPECIES_TAROUNTULA},
  {4, 6, SPECIES_BLIPBUG},
  {4, 6, SPECIES_PIKACHU},
  {4, 6, SPECIES_BURMY_TRASH},
  {4, 6, SPECIES_NINCADA},
  {4, 6, SPECIES_KRICKETOT},
  {4, 6, SPECIES_SLAKOTH},
  {4, 6, SPECIES_RELLOR},
  {4, 6, SPECIES_BRAMBLIN},
  {4, 6, SPECIES_PHANTUMP},
  {4, 6, SPECIES_NYMBLE},
  {4, 6, SPECIES_NYMBLE},
};

static const struct WildPokemonInfo gViridianForest2_LandMonsInfoNight = {12, gViridianForest2_LandMonsNight};

static const struct WildPokemon gDiglettsCaveNorthEntrance_LandMonsDay[] = 
{
  {7, 9, SPECIES_DIGLETT},
  {7, 9, SPECIES_NACLI},
  {7, 9, SPECIES_NUMEL},
  {7, 9, SPECIES_YAMASK},
  {7, 9, SPECIES_SANDSHREW},
  {7, 9, SPECIES_GEODUDE},
  {7, 9, SPECIES_TRAPINCH},
  {7, 9, SPECIES_SILICOBRA},
  {7, 9, SPECIES_BRONZOR},
  {7, 9, SPECIES_MACHOP},
  {7, 9, SPECIES_NOIBAT},
  {7, 9, SPECIES_NOIBAT},
};

static const struct WildPokemonInfo gDiglettsCaveNorthEntrance_LandMonsInfoDay = {4, gDiglettsCaveNorthEntrance_LandMonsDay};

static const struct WildPokemon gDiglettsCaveNorthEntrance_LandMonsNight[] = 
{
  {7, 9, SPECIES_DIGLETT_A},
  {7, 9, SPECIES_NACLI},
  {7, 9, SPECIES_NUMEL},
  {7, 9, SPECIES_YAMASK_G},
  {7, 9, SPECIES_SANDSHREW},
  {7, 9, SPECIES_GEODUDE_A},
  {7, 9, SPECIES_TRAPINCH},
  {7, 9, SPECIES_SANDILE},
  {7, 9, SPECIES_BRONZOR},
  {7, 9, SPECIES_PANCHAM},
  {7, 9, SPECIES_NOIBAT},
  {7, 9, SPECIES_NOIBAT},
};

static const struct WildPokemonInfo gDiglettsCaveNorthEntrance_LandMonsInfoNight = {4, gDiglettsCaveNorthEntrance_LandMonsNight};

static const struct WildPokemon gPewterCity_LandMonsDay[] = 
{
  {7, 9, SPECIES_GRIMER},
  {7, 9, SPECIES_STARLY},
  {7, 9, SPECIES_EXEGGCUTE},
  {7, 9, SPECIES_SPOINK},
  {7, 9, SPECIES_HOPPIP},
  {7, 9, SPECIES_NUMEL},
  {7, 9, SPECIES_CUTIEFLY},
  {7, 9, SPECIES_SINISTEA},
  {7, 9, SPECIES_EKANS},
  {7, 9, SPECIES_PHANPY},
  {7, 9, SPECIES_AXEW},
  {7, 9, SPECIES_BONSLY},
};

static const struct WildPokemonInfo gPewterCity_LandMonsInfoDay = {20, gPewterCity_LandMonsDay};

static const struct WildPokemon gPewterCity_LandMonsNight[] = 
{
  {7, 9, SPECIES_GRIMER_A},
  {7, 9, SPECIES_STARLY},
  {7, 9, SPECIES_EXEGGCUTE},
  {7, 9, SPECIES_ESPURR},
  {7, 9, SPECIES_SKIDDO},
  {7, 9, SPECIES_NUMEL},
  {7, 9, SPECIES_GASTLY},
  {7, 9, SPECIES_SINISTEA},
  {7, 9, SPECIES_EKANS},
  {7, 9, SPECIES_PHANPY},
  {7, 9, SPECIES_AXEW},
  {7, 9, SPECIES_BONSLY},
};

static const struct WildPokemonInfo gPewterCity_LandMonsInfoNight = {20, gPewterCity_LandMonsNight};


static const struct WildPokemon gRoute3_LandMonsDay[] = 
{
  {10, 12, SPECIES_FLETCHLING},
  {10, 12, SPECIES_EKANS},
  {10, 12, SPECIES_SPEAROW},
  {10, 12, SPECIES_NIDORAN_M},
  {10, 12, SPECIES_NICKIT},
  {10, 12, SPECIES_SHROOMISH},
  {10, 12, SPECIES_BUNEARY},
  {10, 12, SPECIES_BUNEARY},
  {10, 12, SPECIES_LITLEO},
  {10, 12, SPECIES_STUNKY},
  {10, 12, SPECIES_JIGGLYPUFF},
  {10, 12, SPECIES_MEOWTH_A},
};

static const struct WildPokemonInfo gRoute3_LandMonsInfoDay = {20, gRoute3_LandMonsDay};

static const struct WildPokemon gRoute3_LandMonsNight[] = 
{
  {10, 12, SPECIES_FLETCHLING},
  {10, 12, SPECIES_EKANS},
  {10, 12, SPECIES_SPEAROW},
  {10, 12, SPECIES_NIDORAN_F},
  {10, 12, SPECIES_NICKIT },
  {10, 12, SPECIES_SKIDDO},
  {10, 12, SPECIES_SHROODLE},
  {10, 12, SPECIES_SHROODLE},
  {10, 12, SPECIES_LITLEO},
  {10, 12, SPECIES_GLAMEOW},
  {10, 12, SPECIES_JIGGLYPUFF},
  {10, 12, SPECIES_MEOWTH_A},
};

static const struct WildPokemonInfo gRoute3_LandMonsInfoNight = {20, gRoute3_LandMonsNight};


static const struct WildPokemon gMtMoon1F_LandMonsDay[] = 
{
  {12, 14, SPECIES_GEODUDE},
  {12, 14, SPECIES_ZUBAT},
  {12, 14, SPECIES_ROCKRUFF},
  {12, 14, SPECIES_TIMBURR},
  {12, 14, SPECIES_WOOBAT},
  {12, 14, SPECIES_CHEWTLE},
  {12, 14, SPECIES_MAKUHITA},
  {12, 14, SPECIES_MAKUHITA},
  {12, 14, SPECIES_TYROGUE},
  {12, 14, SPECIES_CLEFAIRY},
  {12, 14, SPECIES_ELGYEM},
  {12, 14, SPECIES_THROH},
};

static const struct WildPokemonInfo gMtMoon1F_LandMonsInfoDay = {4, gMtMoon1F_LandMonsDay};

static const struct WildPokemon gMtMoon1F_LandMonsNight[] = 
{
  {12, 14, SPECIES_GEODUDE_A},
  {12, 14, SPECIES_ZUBAT},
  {12, 14, SPECIES_ROCKRUFF},
  {12, 14, SPECIES_MACHOP},
  {10, 11, SPECIES_NOIBAT},
  {12, 14, SPECIES_TYMPOLE},
  {12, 14, SPECIES_DUNSPARCE},
  {12, 14, SPECIES_DUNSPARCE},
  {12, 14, SPECIES_TYROGUE},
  {12, 14, SPECIES_CLEFAIRY},
  {12, 14, SPECIES_ELGYEM},
  {12, 14, SPECIES_SAWK},
};

static const struct WildPokemonInfo gMtMoon1F_LandMonsInfoNight = {4, gMtMoon1F_LandMonsNight};


static const struct WildPokemon gMtMoonB1F_LandMonsDay[] = 
{
  {12, 14, SPECIES_PARAS},
  {12, 14, SPECIES_NACLI},
  {12, 14, SPECIES_ROLYCOLY},
  {12, 14, SPECIES_SLUGMA},
  {12, 14, SPECIES_TORKOAL},
  {12, 14, SPECIES_TEDDIURSA},
  {12, 14, SPECIES_TINKATINK},
  {12, 14, SPECIES_BALTOY},
  {12, 14, SPECIES_SHUPPET},
  {12, 14, SPECIES_SHUPPET},
  {12, 14, SPECIES_TINKATINK},
  {12, 14, SPECIES_RIOLU},
};

static const struct WildPokemonInfo gMtMoonB1F_LandMonsInfoDay = {4, gMtMoonB1F_LandMonsDay};

static const struct WildPokemon gMtMoonB1F_LandMonsNight[] = 
{
  {12, 14, SPECIES_PARAS},
  {12, 14, SPECIES_NACLI},
  {12, 14, SPECIES_ROGGENROLA},
  {12, 14, SPECIES_SLUGMA},
  {12, 14, SPECIES_TORKOAL},
  {12, 14, SPECIES_TEDDIURSA},
  {12, 14, SPECIES_TINKATINK},
  {12, 14, SPECIES_SANDILE},
  {12, 14, SPECIES_MISDREAVUS},
  {12, 14, SPECIES_MISDREAVUS},
  {12, 14, SPECIES_TINKATINK},
  {12, 14, SPECIES_RIOLU},
};

static const struct WildPokemonInfo gMtMoonB1F_LandMonsInfoNight = {4, gMtMoonB1F_LandMonsNight};


static const struct WildPokemon gMtMoonB2F_LandMonsDay[] = 
{
  {12, 14, SPECIES_VAROOM},
  {12, 14, SPECIES_ZUBAT},
  {12, 14, SPECIES_PAWNIARD},
  {12, 14, SPECIES_NUMEL},
  {12, 14, SPECIES_CRANIDOS},
  {12, 14, SPECIES_DRILBUR},
  {12, 14, SPECIES_MUDBRAY},
  {12, 14, SPECIES_SMOOCHUM},
  {12, 14, SPECIES_SMOOCHUM},
  {12, 14, SPECIES_SOLROCK},
  {12, 14, SPECIES_ONIX},
  {12, 14, SPECIES_ONIX},
};

static const struct WildPokemonInfo gMtMoonB2F_LandMonsInfoDay = {4, gMtMoonB2F_LandMonsDay};

static const struct WildPokemon gMtMoonB2F_LandMonsNight[] = 
{
  {12, 14, SPECIES_MAWILE},
  {12, 14, SPECIES_ZUBAT},
  {12, 14, SPECIES_PAWNIARD},
  {12, 14, SPECIES_ROLYCOLY},
  {12, 14, SPECIES_SHIELDON},
  {12, 14, SPECIES_DRILBUR},
  {12, 14, SPECIES_MUDBRAY},
  {12, 14, SPECIES_MUNNA},
  {12, 14, SPECIES_MUNNA},
  {12, 14, SPECIES_LUNATONE},
  {12, 14, SPECIES_ONIX},
  {12, 14, SPECIES_ONIX},
};

static const struct WildPokemonInfo gMtMoonB2F_LandMonsInfoNight = {4, gMtMoonB2F_LandMonsNight};

static const struct WildPokemon gRoute4_LandMonsDay[] = 
{
  {13, 15, SPECIES_PIDOVE},
  {13, 15, SPECIES_BELLSPROUT},
  {13, 15, SPECIES_SHINX},
  {13, 15, SPECIES_PACHIRISU},
  {13, 15, SPECIES_GLAMEOW},
  {13, 15, SPECIES_TANDEMAUS},
  {13, 15, SPECIES_PUMPKABOO},
  {13, 15, SPECIES_FLABEBE},
  {13, 15, SPECIES_PUMPKABOO_M},
  {13, 15, SPECIES_PUMPKABOO_M},
  {13, 15, SPECIES_YANMA},
  {13, 15, SPECIES_ROOKIDEE},
};

static const struct WildPokemonInfo gRoute4_LandMonsInfoDay = {20, gRoute4_LandMonsDay};

static const struct WildPokemon gRoute4_LandMonsNight[] = 
{
  {13, 15, SPECIES_PIDOVE},
  {13, 15, SPECIES_ODDISH},
  {13, 15, SPECIES_MAREEP},
  {13, 15, SPECIES_PACHIRISU},
  {13, 15, SPECIES_STUNKY},
  {13, 15, SPECIES_TANDEMAUS},
  {13, 15, SPECIES_PHANTUMP},
  {13, 15, SPECIES_FLABEBE},
  {13, 15, SPECIES_PUMPKABOO_L},
  {13, 15, SPECIES_PUMPKABOO_L},
  {13, 15, SPECIES_YANMA},
  {13, 15, SPECIES_ROOKIDEE},
};

static const struct WildPokemonInfo gRoute4_LandMonsInfoNight = {20, gRoute4_LandMonsNight};

static const struct WildPokemon gCeruleanCity_SurfMons[] = 
{
  {56, 58, SPECIES_GOLDUCK},
  {56, 58, SPECIES_GOLDUCK},
  {56, 58, SPECIES_GOLDUCK},
  {56, 58, SPECIES_DONDOZO},
  {56, 58, SPECIES_DONDOZO},
};

static const struct WildPokemonInfo gCeruleanCity_SurfMonsInfo = {5, gCeruleanCity_SurfMons};

static const struct WildPokemon gCeruleanCity_FishingMons[] = 
{
  {2, 4, SPECIES_CHEWTLE},
  {2, 4, SPECIES_CLAUNCHER},
  {27, 29, SPECIES_WISHIWASHI},
  {27, 29, SPECIES_TATSUGIRI},
  {27, 29, SPECIES_REMORAID},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_SHARPEDO},
  {53, 55, SPECIES_OCTILLERY},
  {53, 55, SPECIES_OCTILLERY},
};

static const struct WildPokemonInfo gCeruleanCity_FishingMonsInfo = {5, gCeruleanCity_FishingMons};

static const struct WildPokemon gRoute24_LandMonsDay[] = 
{
  {14, 16, SPECIES_SNUBBULL},
  {14, 16, SPECIES_PETILIL},
  {14, 16, SPECIES_YAMPER},
  {14, 16, SPECIES_TADBULB},
  {14, 16, SPECIES_KARRABLAST},
  {14, 16, SPECIES_VOLBEAT},
  {14, 16, SPECIES_MARILL},
  {14, 16, SPECIES_FARFETCHD},
  {14, 16, SPECIES_RALTS},
  {14, 16, SPECIES_ABRA},
  {14, 16, SPECIES_KLAWF},
  {14, 16, SPECIES_KLAWF},
};

static const struct WildPokemonInfo gRoute24_LandMonsInfoDay = {20, gRoute24_LandMonsDay};

static const struct WildPokemon gRoute24_LandMonsNight[] = 
{
  {14, 16, SPECIES_SNUBBULL},
  {14, 16, SPECIES_COTTONEE},
  {14, 16, SPECIES_YAMPER},
  {14, 16, SPECIES_TADBULB},
  {14, 16, SPECIES_KARRABLAST},
  {14, 16, SPECIES_ILLUMISE},
  {14, 16, SPECIES_BUIZEL},
  {14, 16, SPECIES_MURKROW},
  {14, 16, SPECIES_RALTS},
  {14, 16, SPECIES_ABRA},
  {14, 16, SPECIES_KLAWF},
  {14, 16, SPECIES_KLAWF},
};

static const struct WildPokemonInfo gRoute24_LandMonsInfoNight = {20, gRoute24_LandMonsNight};

static const struct WildPokemon gRoute24_SurfMons[] = 
{
  {56, 58, SPECIES_GOLDUCK},
  {56, 58, SPECIES_GOLDUCK},
  {56, 58, SPECIES_GOLDUCK},
  {56, 58, SPECIES_GOLDUCK},
  {56, 58, SPECIES_GOLDUCK},
};

static const struct WildPokemonInfo gRoute24_SurfMonsInfo = {5, gRoute24_SurfMons};

static const struct WildPokemon gRoute24_FishingMons[] = 
{
  {2, 4, SPECIES_CARVANHA},
  {2, 4, SPECIES_LOTAD},
  {27, 29, SPECIES_WAILMER},
  {27, 29, SPECIES_WISHIWASHI},
  {27, 29, SPECIES_CARVANHA},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_SHARPEDO},
  {53, 55, SPECIES_OCTILLERY},
  {53, 55, SPECIES_OCTILLERY},
};

static const struct WildPokemonInfo gRoute24_FishingMonsInfo = {5, gRoute24_FishingMons};

static const struct WildPokemon gRoute25_LandMonsDay[] = 
{
  {16, 18, SPECIES_SWABLU},
  {16, 18, SPECIES_TAILLOW},
  {16, 18, SPECIES_PINECO},
  {16, 18, SPECIES_CHARCADET},
  {16, 18, SPECIES_ELEKID},
  {16, 18, SPECIES_DODUO},
  {16, 18, SPECIES_AIPOM},
  {16, 18, SPECIES_WHISMUR},
  {16, 18, SPECIES_SQUAWKABILLY},
  {16, 18, SPECIES_AUDINO},
  {16, 18, SPECIES_ZANGOOSE},
  {16, 18, SPECIES_ZANGOOSE},
};

static const struct WildPokemonInfo gRoute25_LandMonsInfoDay = {20, gRoute25_LandMonsDay};

static const struct WildPokemon gRoute25_LandMonsNight[] = 
{
  {16, 18, SPECIES_SWABLU},
  {16, 18, SPECIES_TAILLOW},
  {16, 18, SPECIES_VENONAT},
  {16, 18, SPECIES_CHARCADET},
  {16, 18, SPECIES_MAGBY},
  {16, 18, SPECIES_DODUO},
  {16, 18, SPECIES_AIPOM},
  {16, 18, SPECIES_PURRLOIN},
  {16, 18, SPECIES_SQUAWKABILLY_2},
  {16, 18, SPECIES_AUDINO},
  {16, 18, SPECIES_SEVIPER},
  {16, 18, SPECIES_SEVIPER},
};

static const struct WildPokemonInfo gRoute25_LandMonsInfoNight = {20, gRoute25_LandMonsNight};

static const struct WildPokemon gRoute25_SurfMons[] = 
{
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
};

static const struct WildPokemonInfo gRoute25_SurfMonsInfo = {5, gRoute25_SurfMons};

static const struct WildPokemon gRoute25_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_CHINCHOU},
  {27, 29, SPECIES_DEWPIDER},
  {27, 29, SPECIES_MANTYKE},
  {27, 29, SPECIES_GOLDEEN},
  {53, 55, SPECIES_POLIWAG},
  {53, 55, SPECIES_POLIWHIRL},
  {53, 55, SPECIES_GYARADOS},
  {53, 55, SPECIES_PSYDUCK},
  {53, 55, SPECIES_PSYDUCK},
};

static const struct WildPokemonInfo gRoute25_FishingMonsInfo = {5, gRoute25_FishingMons};

static const struct WildPokemon gRoute5_LandMonsDay[] = 
{
  {18, 20, SPECIES_MEOWTH},
  {18, 20, SPECIES_HATENNA},
  {18, 20, SPECIES_SOLOSIS},
  {18, 20, SPECIES_GROWLITHE},
  {18, 20, SPECIES_SWIRLIX},
  {18, 20, SPECIES_MORELULL},
  {18, 20, SPECIES_VULPIX},
  {18, 20, SPECIES_SOLOSIS},
  {18, 20, SPECIES_GRIMER},
  {18, 20, SPECIES_GRIMER},
  {18, 20, SPECIES_DRIFLOON},
  {18, 20, SPECIES_DRIFLOON},
};

static const struct WildPokemonInfo gRoute5_LandMonsInfoDay = {20, gRoute5_LandMonsDay};

static const struct WildPokemon gRoute5_LandMonsNight[] = 
{
  {18, 20, SPECIES_MEOWTH_G},
  {18, 20, SPECIES_HATENNA},
  {18, 20, SPECIES_GOTHITA},
  {18, 20, SPECIES_VULPIX_A},
  {18, 20, SPECIES_SPRITZEE},
  {18, 20, SPECIES_MORELULL},
  {18, 20, SPECIES_GROWLITHE_H},
  {18, 20, SPECIES_GOTHITA},
  {18, 20, SPECIES_GRIMER_A},
  {18, 20, SPECIES_GRIMER_A},
  {18, 20, SPECIES_DRIFLOON},
  {18, 20, SPECIES_DRIFLOON},
};

static const struct WildPokemonInfo gRoute5_LandMonsInfoNight = {20, gRoute5_LandMonsNight};

static const struct WildPokemon gRoute6_LandMonsDay[] = 
{
  {16, 18, SPECIES_SUNKERN},
  {16, 18, SPECIES_CHERUBI},
  {16, 18, SPECIES_GULPIN},
  {16, 18, SPECIES_FURFROU},
  {16, 18, SPECIES_SIZZLIPEDE},
  {16, 18, SPECIES_DEDENNE},
  {16, 18, SPECIES_LICKITUNG},
  {16, 18, SPECIES_LICKITUNG},
  {16, 18, SPECIES_FLITTLE},
  {16, 18, SPECIES_FLITTLE},
  {16, 18, SPECIES_TOGEPI},
  {16, 18, SPECIES_TOGEPI},
};

static const struct WildPokemonInfo gRoute6_LandMonsInfoDay = {20, gRoute6_LandMonsDay};

static const struct WildPokemon gRoute6_LandMonsNight[] = 
{
  {16, 18, SPECIES_BOUNSWEET},
  {16, 18, SPECIES_GOSSIFLEUR},
  {16, 18, SPECIES_TRUBBISH},
  {16, 18, SPECIES_FURFROU},
  {16, 18, SPECIES_SIZZLIPEDE},
  {16, 18, SPECIES_DEDENNE},
  {16, 18, SPECIES_KOMALA},
  {16, 18, SPECIES_KOMALA},
  {16, 18, SPECIES_MEDITITE},
  {16, 18, SPECIES_MEDITITE},
  {16, 18, SPECIES_TOGEPI},
  {16, 18, SPECIES_TOGEPI},
};

static const struct WildPokemonInfo gRoute6_LandMonsInfoNight = {20, gRoute6_LandMonsNight};

static const struct WildPokemon gRoute6_SurfMons[] = 
{
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
};

static const struct WildPokemonInfo gRoute6_SurfMonsInfo = {5, gRoute6_SurfMons};

static const struct WildPokemon gRoute6_FishingMons[] = 
{
  {2, 4, SPECIES_CHINCHOU},
  {2, 4, SPECIES_SHELLDER},
  {27, 29, SPECIES_SLOWPOKE_G},
  {27, 29, SPECIES_SKRELP},
  {27, 29, SPECIES_BASCULIN_RED},
  {53, 55, SPECIES_SLOWBRO_G},
  {53, 55, SPECIES_LANTURN},
  {53, 55, SPECIES_GYARADOS},
  {53, 55, SPECIES_PSYDUCK},
  {53, 55, SPECIES_GOLDUCK},
};

static const struct WildPokemonInfo gRoute6_FishingMonsInfo = {5, gRoute6_FishingMons};

static const struct WildPokemon gVermilionCity_SurfMons[] = 
{
  {56, 58, SPECIES_TENTACOOL},
  {56, 58, SPECIES_PELIPPER},
  {56, 58, SPECIES_CRAMORANT},
  {56, 58, SPECIES_CRAMORANT},
  {56, 58, SPECIES_CRAMORANT},
};

static const struct WildPokemonInfo gVermilionCity_SurfMonsInfo = {5, gVermilionCity_SurfMons};

static const struct WildPokemon gVermilionCity_FishingMons[] = 
{
  {2, 4, SPECIES_ARROKUDA},
  {2, 4, SPECIES_FINNEON},
  {27, 29, SPECIES_FRILLISH},
  {27, 29, SPECIES_SHELLDER},
  {27, 29, SPECIES_KRABBY},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_ALOMOMOLA},
  {53, 55, SPECIES_SEADRA},
  {53, 55, SPECIES_GYARADOS},
};

static const struct WildPokemonInfo gVermilionCity_FishingMonsInfo = {5, gVermilionCity_FishingMons};


static const struct WildPokemon gRoute11_FishingMons[] = 
{
  {2, 4, SPECIES_KRABBY},
  {2, 4, SPECIES_HORSEA},
  {27, 29, SPECIES_BRUXISH},
  {27, 29, SPECIES_FRILLISH},
  {27, 29, SPECIES_RELICANTH},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_ALOMOMOLA},
  {53, 55, SPECIES_SEADRA},
  {53, 55, SPECIES_GYARADOS},
};

static const struct WildPokemonInfo gRoute11_FishingMonsInfo = {5, gRoute11_FishingMons};


static const struct WildPokemon gRoute11_LandMonsDay[] = 
{
  {23, 25, SPECIES_STUFFUL},
  {23, 25, SPECIES_DUCKLETT},
  {23, 25, SPECIES_DROWZEE},
  {23, 25, SPECIES_BALTOY},
  {23, 25, SPECIES_MARACTUS},
  {23, 25, SPECIES_BUNNELBY},
  {23, 25, SPECIES_SCRAGGY},
  {23, 25, SPECIES_SCRAGGY},
  {23, 25, SPECIES_FLAMIGO},
  {23, 25, SPECIES_FLAMIGO},
  {23, 25, SPECIES_SIGILYPH},
  {23, 25, SPECIES_SIGILYPH},
};

static const struct WildPokemonInfo gRoute11_LandMonsInfoDay = {20, gRoute11_LandMonsDay};

static const struct WildPokemon gRoute11_LandMonsNight[] = 
{
  {23, 25, SPECIES_PANCHAM},
  {23, 25, SPECIES_DUCKLETT},
  {23, 25, SPECIES_DROWZEE},
  {23, 25, SPECIES_BALTOY},
  {23, 25, SPECIES_CACNEA},
  {23, 25, SPECIES_BUNNELBY},
  {23, 25, SPECIES_SCRAGGY},
  {23, 25, SPECIES_SCRAGGY},
  {23, 25, SPECIES_BOMBIRDIER},
  {23, 25, SPECIES_BOMBIRDIER},
  {23, 25, SPECIES_SIGILYPH},
  {23, 25, SPECIES_SIGILYPH},
};

static const struct WildPokemonInfo gRoute11_LandMonsInfoNight = {20, gRoute11_LandMonsNight};

static const struct WildPokemon gDiglettsCaveB1F_LandMonsDay[] = 
{
  {23, 25, SPECIES_DIGLETT},
  {23, 25, SPECIES_DIGLETT},
  {23, 25, SPECIES_STUNFISK},
  {23, 25, SPECIES_SILICOBRA},
  {23, 25, SPECIES_GOLETT},
  {23, 25, SPECIES_SANDILE},
  {23, 25, SPECIES_DRILBUR},
  {23, 25, SPECIES_GLIGAR},
  {23, 25, SPECIES_GOLETT},
  {23, 25, SPECIES_DUGTRIO},
  {23, 25, SPECIES_HIPPOPOTAS},
  {23, 25, SPECIES_HIPPOPOTAS},
};

static const struct WildPokemonInfo gDiglettsCaveB1F_LandMonsInfoDay = {4, gDiglettsCaveB1F_LandMonsDay};

static const struct WildPokemon gDiglettsCaveB1F_LandMonsNight[] = 
{
  {23, 25, SPECIES_DIGLETT_A},
  {23, 25, SPECIES_DIGLETT_A},
  {23, 25, SPECIES_STUNFISK_G},
  {23, 25, SPECIES_SILICOBRA},
  {23, 25, SPECIES_SHELLOS},
  {23, 25, SPECIES_SANDILE},
  {23, 25, SPECIES_DRILBUR},
  {23, 25, SPECIES_GLIGAR},
  {23, 25, SPECIES_SANDYGAST},
  {23, 25, SPECIES_DUGTRIO_A},
  {23, 25, SPECIES_HIPPOPOTAS},
  {23, 25, SPECIES_HIPPOPOTAS},
};

static const struct WildPokemonInfo gDiglettsCaveB1F_LandMonsInfoNight = {4, gDiglettsCaveB1F_LandMonsNight};

static const struct WildPokemon gSSAnne_SurfMons[] = 
{
  {56, 58, SPECIES_TENTACOOL},
  {56, 58, SPECIES_TENTACOOL},
  {56, 58, SPECIES_TENTACRUEL},
  {56, 58, SPECIES_BARRASKEWDA},
  {56, 58, SPECIES_BARRASKEWDA},
};

static const struct WildPokemonInfo gSSAnne_SurfMonsInfo = {4, gSSAnne_SurfMons};

static const struct WildPokemon gSSAnne_FishingMons[] = 
{
  {2, 4, SPECIES_WIMPOD},
  {2, 4, SPECIES_FINNEON},
  {27, 29, SPECIES_VELUZA},
  {27, 29, SPECIES_STARYU},
  {27, 29, SPECIES_KRABBY},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_LUVDISC},
  {53, 55, SPECIES_ALOMOMOLA},
  {53, 55, SPECIES_SEADRA},
  {53, 55, SPECIES_GYARADOS},
};

static const struct WildPokemonInfo gSSAnne_FishingMonsInfo = {5, gSSAnne_FishingMons};

static const struct WildPokemon gRoute9_LandMonsDay[] = 
{
  {25, 27, SPECIES_SHELMET},
  {25, 27, SPECIES_EXEGGCUTE},
  {25, 27, SPECIES_DARUMAKA},
  {25, 27, SPECIES_DEWPIDER},
  {25, 27, SPECIES_INDEEDEE},
  {25, 27, SPECIES_RUFFLET},
  {25, 27, SPECIES_MIME_JR},
  {25, 27, SPECIES_MIME_JR},
  {25, 27, SPECIES_TROPIUS},
  {25, 27, SPECIES_TROPIUS},
  {25, 27, SPECIES_SKORUPI},
  {25, 27, SPECIES_SKORUPI},
};

static const struct WildPokemonInfo gRoute9_LandMonsInfoDay = {20, gRoute9_LandMonsDay};

static const struct WildPokemon gRoute9_LandMonsNight[] = 
{
  {25, 27, SPECIES_SHELMET},
  {25, 27, SPECIES_EXEGGCUTE},
  {25, 27, SPECIES_SALANDIT},
  {25, 27, SPECIES_DEWPIDER},
  {25, 27, SPECIES_INDEEDEE_FEMALE},
  {25, 27, SPECIES_RUFFLET},
  {25, 27, SPECIES_ESPURR},
  {25, 27, SPECIES_ESPURR},
  {25, 27, SPECIES_TROPIUS},
  {25, 27, SPECIES_TROPIUS},
  {25, 27, SPECIES_SKORUPI},
  {25, 27, SPECIES_SKORUPI},
};

static const struct WildPokemonInfo gRoute9_LandMonsInfoNight = {20, gRoute9_LandMonsNight};

static const struct WildPokemon gRoute10_LandMonsDay[] = 
{
  {27, 29, SPECIES_VOLTORB},
  {27, 29, SPECIES_HELIOPTILE},
  {27, 29, SPECIES_BLITZLE},
  {27, 29, SPECIES_PINCURCHIN},
  {27, 29, SPECIES_PLUSLE},
  {27, 29, SPECIES_SKITTY},
  {27, 29, SPECIES_TADBULB},
  {27, 29, SPECIES_TADBULB},
  {27, 29, SPECIES_MAGNEMITE},
  {27, 29, SPECIES_MAGNEMITE},
  {27, 29, SPECIES_CROAGUNK},
  {27, 29, SPECIES_CROAGUNK},
};

static const struct WildPokemonInfo gRoute10_LandMonsInfoDay = {20, gRoute10_LandMonsDay};

static const struct WildPokemon gRoute10_LandMonsNight[] = 
{
  {27, 29, SPECIES_VOLTORB_H},
  {27, 29, SPECIES_ELECTRIKE},
  {27, 29, SPECIES_BLITZLE},
  {27, 29, SPECIES_PINCURCHIN},
  {27, 29, SPECIES_MINUN},
  {27, 29, SPECIES_SKITTY},
  {27, 29, SPECIES_EMOLGA},
  {27, 29, SPECIES_EMOLGA},
  {27, 29, SPECIES_MAGNEMITE},
  {27, 29, SPECIES_MAGNEMITE},
  {27, 29, SPECIES_SNEASEL_H},
  {27, 29, SPECIES_SNEASEL_H},
};

static const struct WildPokemonInfo gRoute10_LandMonsInfoNight = {20, gRoute10_LandMonsNight};

static const struct WildPokemon gRoute10_SurfMons[] = 
{
  {56, 58, SPECIES_TENTACOOL},
  {56, 58, SPECIES_TENTACOOL},
  {56, 58, SPECIES_TENTACOOL},
  {56, 58, SPECIES_WINGULL},
  {56, 58, SPECIES_WINGULL},
};

static const struct WildPokemonInfo gRoute10_SurfMonsInfo = {5, gRoute10_SurfMons};

static const struct WildPokemon gRoute10_FishingMons[] = 
{
  {2, 4, SPECIES_WOOPER},
  {2, 4, SPECIES_TYNAMO},
  {27, 29, SPECIES_BARBOACH},
  {27, 29, SPECIES_SHELLOS_EAST},
  {27, 29, SPECIES_CORSOLA_G},
  {53, 55, SPECIES_WHISCASH},
  {53, 55, SPECIES_WHISCASH},
  {53, 55, SPECIES_BASCULIN_BLUE},
  {53, 55, SPECIES_SEADRA},
  {53, 55, SPECIES_SEADRA},
};

static const struct WildPokemonInfo gRoute10_FishingMonsInfo = {5, gRoute10_FishingMons};

static const struct WildPokemon gRockTunnel1F_LandMonsDay[] = 
{
  {29, 31, SPECIES_GRAVELER},
  {29, 31, SPECIES_ARON},
  {29, 31, SPECIES_SHUCKLE},
  {29, 31, SPECIES_SOLROCK},
  {29, 31, SPECIES_CARKOL},
  {29, 31, SPECIES_CARBINK},
  {29, 31, SPECIES_MINIOR_SHIELD},
  {29, 31, SPECIES_FERROSEED},
  {29, 31, SPECIES_STONJOURNER},
  {29, 31, SPECIES_HEATMOR},
  {29, 31, SPECIES_DURANT},
  {29, 31, SPECIES_DURANT},
};

static const struct WildPokemonInfo gRockTunnel1F_LandMonsInfoDay = {4, gRockTunnel1F_LandMonsDay};

static const struct WildPokemon gRockTunnel1F_LandMonsNight[] = 
{
  {29, 31, SPECIES_GRAVELER_A},
  {29, 31, SPECIES_ARON},
  {29, 31, SPECIES_DWEBBLE},
  {29, 31, SPECIES_LUNATONE},
  {29, 31, SPECIES_ONIX},
  {29, 31, SPECIES_CARBINK},
  {29, 31, SPECIES_MINIOR_SHIELD},
  {29, 31, SPECIES_FERROSEED},
  {29, 31, SPECIES_STONJOURNER},
  {29, 31, SPECIES_HEATMOR},
  {29, 31, SPECIES_DURANT},
  {29, 31, SPECIES_DURANT},
};

static const struct WildPokemonInfo gRockTunnel1F_LandMonsInfoNight = {4, gRockTunnel1F_LandMonsNight};

static const struct WildPokemon gRockTunnelB1F_LandMonsDay[] = 
{
  {30, 32, SPECIES_SANDSLASH},
  {30, 32, SPECIES_BOLDORE},
  {30, 32, SPECIES_SWINUB},
  {30, 32, SPECIES_SNORUNT},
  {30, 32, SPECIES_BRONZOR},
  {30, 32, SPECIES_BONSLY},
  {30, 32, SPECIES_CETODDLE},
  {30, 32, SPECIES_CETODDLE},
  {30, 32, SPECIES_CUBCHOO},
  {30, 32, SPECIES_CUBCHOO},
  {30, 32, SPECIES_GLIMMET},
  {30, 32, SPECIES_GLIMMET},
};

static const struct WildPokemonInfo gRockTunnelB1F_LandMonsInfoDay = {4, gRockTunnelB1F_LandMonsDay};

static const struct WildPokemon gRockTunnelB1F_LandMonsNight[] = 
{
  {30, 32, SPECIES_SANDSLASH_A},
  {30, 32, SPECIES_RHYHORN},
  {30, 32, SPECIES_SWINUB},
  {30, 32, SPECIES_CUBONE},
  {30, 32, SPECIES_NOSEPASS},
  {30, 32, SPECIES_BONSLY},
  {30, 32, SPECIES_CETODDLE},
  {30, 32, SPECIES_CETODDLE},
  {30, 32, SPECIES_SNEASEL},
  {30, 32, SPECIES_SNEASEL},
  {30, 32, SPECIES_GLIMMET},
  {30, 32, SPECIES_GLIMMET},
};

static const struct WildPokemonInfo gRockTunnelB1F_LandMonsInfoNight = {4, gRockTunnelB1F_LandMonsNight};

static const struct WildPokemon gRoute7_LandMonsDay[] = 
{
  {36, 38, SPECIES_DEERLING},
  {36, 38, SPECIES_INKAY},
  {36, 38, SPECIES_RUFFLET},
  {36, 38, SPECIES_RUFFLET},
  {36, 38, SPECIES_CUTIEFLY},
  {36, 38, SPECIES_APPLIN},
  {36, 38, SPECIES_PASSIMIAN},
  {36, 38, SPECIES_PASSIMIAN},
  {36, 38, SPECIES_MIENFOO},
  {36, 38, SPECIES_MIENFOO},
  {36, 38, SPECIES_PORYGON},
  {36, 38, SPECIES_PORYGON},
};

static const struct WildPokemonInfo gRoute7_LandMonsInfoDay = {20, gRoute7_LandMonsDay};

static const struct WildPokemon gRoute7_LandMonsNight[] = 
{
  {36, 38, SPECIES_DEERLING_WINTER},
  {36, 38, SPECIES_INKAY},
  {36, 38, SPECIES_VULLABY},
  {36, 38, SPECIES_VULLABY},
  {36, 38, SPECIES_CUTIEFLY},
  {36, 38, SPECIES_APPLIN},
  {36, 38, SPECIES_ORANGURU},
  {36, 38, SPECIES_ORANGURU},
  {36, 38, SPECIES_MIENFOO},
  {36, 38, SPECIES_MIENFOO},
  {36, 38, SPECIES_PORYGON},
  {36, 38, SPECIES_PORYGON},
};

static const struct WildPokemonInfo gRoute7_LandMonsInfoNight = {20, gRoute7_LandMonsNight};



static const struct WildPokemon gRoute8_LandMonsDay[] = 
{
  {33, 35, SPECIES_LOMBRE},
  {33, 35, SPECIES_MINCCINO},
  {33, 35, SPECIES_VULPIX},
  {33, 35, SPECIES_BOUFFALANT},
  {33, 35, SPECIES_BOUFFALANT},
  {33, 35, SPECIES_VENIPEDE},
  {33, 35, SPECIES_COMFEY},
  {33, 35, SPECIES_COMFEY},
  {33, 35, SPECIES_GIRAFARIG},
  {33, 35, SPECIES_GIRAFARIG},
  {33, 35, SPECIES_MILTANK},
  {33, 35, SPECIES_MILTANK},
};

static const struct WildPokemonInfo gRoute8_LandMonsInfoDay = {20, gRoute8_LandMonsDay};

static const struct WildPokemon gRoute8_LandMonsNight[] = 
{
  {33, 35, SPECIES_LOMBRE},
  {33, 35, SPECIES_MINCCINO},
  {33, 35, SPECIES_GROWLITHE},
  {33, 35, SPECIES_ABSOL},
  {33, 35, SPECIES_ABSOL},
  {33, 35, SPECIES_VENIPEDE},
  {33, 35, SPECIES_MORGREM},
  {33, 35, SPECIES_MORGREM},
  {33, 35, SPECIES_STANTLER},
  {33, 35, SPECIES_STANTLER},
  {33, 35, SPECIES_DRAMPA},
  {33, 35, SPECIES_DRAMPA},
};

static const struct WildPokemonInfo gRoute8_LandMonsInfoNight = {20, gRoute8_LandMonsNight};

static const struct WildPokemon gPokemonTower3F_LandMonsDay[] = 
{
  {45, 47, SPECIES_HAUNTER},
  {45, 47, SPECIES_COFAGRIGUS},
  {45, 47, SPECIES_DUSCLOPS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_CUBONE},
  {45, 47, SPECIES_SPIRITOMB},
  {45, 47, SPECIES_SABLEYE},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_LAMPENT},
  {45, 47, SPECIES_LAMPENT},
};

static const struct WildPokemonInfo gPokemonTower3F_LandMonsInfoDay = {6, gPokemonTower3F_LandMonsDay};

static const struct WildPokemon gPokemonTower3F_LandMonsNight[] = 
{
  {45, 47, SPECIES_HAUNTER},
  {45, 47, SPECIES_RUNERIGUS},
  {45, 47, SPECIES_DUSCLOPS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_CUBONE},
  {45, 47, SPECIES_SPIRITOMB},
  {45, 47, SPECIES_SABLEYE},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_LAMPENT},
  {45, 47, SPECIES_LAMPENT},
};

static const struct WildPokemonInfo gPokemonTower3F_LandMonsInfoNight = {6, gPokemonTower3F_LandMonsNight};

static const struct WildPokemon gPokemonTower4F_LandMonsDay[] = 
{
  {45, 47, SPECIES_HAUNTER},
  {45, 47, SPECIES_COFAGRIGUS},
  {45, 47, SPECIES_DUSCLOPS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_CUBONE},
  {45, 47, SPECIES_SPIRITOMB},
  {45, 47, SPECIES_SABLEYE},
  {45, 47, SPECIES_HOUNDSTONE},
  {45, 47, SPECIES_HOUNDSTONE},
  {45, 47, SPECIES_LAMPENT},
  {45, 47, SPECIES_LAMPENT},
};

static const struct WildPokemonInfo gPokemonTower4F_LandMonsInfoDay = {6, gPokemonTower4F_LandMonsDay};

static const struct WildPokemon gPokemonTower4F_LandMonsNight[] = 
{
  {45, 47, SPECIES_HAUNTER},
  {45, 47, SPECIES_RUNERIGUS},
  {45, 47, SPECIES_DUSCLOPS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_CUBONE},
  {45, 47, SPECIES_SPIRITOMB},
  {45, 47, SPECIES_SABLEYE},
  {45, 47, SPECIES_HOUNDSTONE},
  {45, 47, SPECIES_HOUNDSTONE},
  {45, 47, SPECIES_LAMPENT},
  {45, 47, SPECIES_LAMPENT},
};

static const struct WildPokemonInfo gPokemonTower4F_LandMonsInfoNight = {6, gPokemonTower4F_LandMonsNight};

static const struct WildPokemon gPokemonTower5F_LandMonsDay[] = 
{
  {45, 47, SPECIES_HAUNTER},
  {45, 47, SPECIES_COFAGRIGUS},
  {45, 47, SPECIES_DUSCLOPS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_CUBONE},
  {45, 47, SPECIES_SPIRITOMB},
  {45, 47, SPECIES_SABLEYE},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_LAMPENT},
  {45, 47, SPECIES_LAMPENT},
};

static const struct WildPokemonInfo gPokemonTower5F_LandMonsInfoDay = {6, gPokemonTower5F_LandMonsDay};

static const struct WildPokemon gPokemonTower5F_LandMonsNight[] = 
{
  {45, 47, SPECIES_HAUNTER},
  {45, 47, SPECIES_RUNERIGUS},
  {45, 47, SPECIES_DUSCLOPS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_CUBONE},
  {45, 47, SPECIES_SPIRITOMB},
  {45, 47, SPECIES_SABLEYE},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_LAMPENT},
  {45, 47, SPECIES_LAMPENT},
};

static const struct WildPokemonInfo gPokemonTower5F_LandMonsInfoNight = {6, gPokemonTower5F_LandMonsNight};

static const struct WildPokemon gPokemonTower6F_LandMonsDay[] = 
{
  {45, 47, SPECIES_HAUNTER},
  {45, 47, SPECIES_COFAGRIGUS},
  {45, 47, SPECIES_DUSCLOPS},
  {45, 47, SPECIES_ANNIHILAPE},
  {45, 47, SPECIES_ANNIHILAPE},
  {45, 47, SPECIES_CUBONE},
  {45, 47, SPECIES_SPIRITOMB},
  {45, 47, SPECIES_SABLEYE},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_LAMPENT},
  {45, 47, SPECIES_LAMPENT},
};

static const struct WildPokemonInfo gPokemonTower6F_LandMonsInfoDay = {6, gPokemonTower6F_LandMonsDay};

static const struct WildPokemon gPokemonTower6F_LandMonsNight[] = 
{
  {45, 47, SPECIES_HAUNTER},
  {45, 47, SPECIES_RUNERIGUS},
  {45, 47, SPECIES_DUSCLOPS},
  {45, 47, SPECIES_ANNIHILAPE},
  {45, 47, SPECIES_ANNIHILAPE},
  {45, 47, SPECIES_CUBONE},
  {45, 47, SPECIES_SPIRITOMB},
  {45, 47, SPECIES_SABLEYE},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_LAMPENT},
  {45, 47, SPECIES_LAMPENT},
};

static const struct WildPokemonInfo gPokemonTower6F_LandMonsInfoNight = {6, gPokemonTower6F_LandMonsNight};

static const struct WildPokemon gPokemonTower7F_LandMonsDay[] = 
{
  {45, 47, SPECIES_HAUNTER},
  {45, 47, SPECIES_COFAGRIGUS},
  {45, 47, SPECIES_DUSCLOPS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_CUBONE},
  {45, 47, SPECIES_SPIRITOMB},
  {45, 47, SPECIES_SABLEYE},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_ROTOM},
  {45, 47, SPECIES_ROTOM},
};

static const struct WildPokemonInfo gPokemonTower7F_LandMonsInfoDay = {6, gPokemonTower7F_LandMonsDay};

static const struct WildPokemon gPokemonTower7F_LandMonsNight[] = 
{
  {45, 47, SPECIES_HAUNTER},
  {45, 47, SPECIES_RUNERIGUS},
  {45, 47, SPECIES_DUSCLOPS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_MISMAGIUS},
  {45, 47, SPECIES_CUBONE},
  {45, 47, SPECIES_SPIRITOMB},
  {45, 47, SPECIES_SABLEYE},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_POLTEAGEIST},
  {45, 47, SPECIES_ROTOM},
  {45, 47, SPECIES_ROTOM},
};

static const struct WildPokemonInfo gPokemonTower7F_LandMonsInfoNight = {6, gPokemonTower7F_LandMonsNight};

static const struct WildPokemon gRoute16_LandMonsDay[] = 
{
  {36, 38, SPECIES_HERACROSS},
  {36, 38, SPECIES_YANMA},
  {36, 38, SPECIES_RHYHORN},
  {36, 38, SPECIES_SKORUPI},
  {36, 38, SPECIES_CUFANT},
  {36, 38, SPECIES_DURANT},
  {36, 38, SPECIES_TOGEDEMARU},
  {36, 38, SPECIES_SKARMORY},
  {36, 38, SPECIES_ORTHWORM},
  {36, 38, SPECIES_ORTHWORM},
  {36, 38, SPECIES_ESCAVALIER},
  {36, 38, SPECIES_CUFANT},
};

static const struct WildPokemonInfo gRoute16_LandMonsInfoDay = {20, gRoute16_LandMonsDay};

static const struct WildPokemon gRoute16_LandMonsNight[] = 
{
  {36, 38, SPECIES_SCYTHER},
  {36, 38, SPECIES_FORRETRESS},
  {36, 38, SPECIES_RHYHORN},
  {36, 38, SPECIES_FALINKS},
  {36, 38, SPECIES_CUFANT},
  {36, 38, SPECIES_DURANT},
  {36, 38, SPECIES_TOGEDEMARU},
  {36, 38, SPECIES_SKARMORY},
  {36, 38, SPECIES_ORTHWORM},
  {36, 38, SPECIES_ORTHWORM},
  {36, 38, SPECIES_ESCAVALIER},
  {36, 38, SPECIES_CUFANT},
};

static const struct WildPokemonInfo gRoute16_LandMonsInfoNight = {20, gRoute16_LandMonsNight};


static const struct WildPokemon gRoute17_LandMonsDay[] = 
{
  {46, 48, SPECIES_WEEZING},
  {46, 48, SPECIES_CYCLIZAR},
  {46, 48, SPECIES_MUK},
  {46, 48, SPECIES_ZEBSTRIKA},
  {46, 48, SPECIES_GRUMPIG},
  {46, 48, SPECIES_TORKOAL},
  {46, 48, SPECIES_SKARMORY},
  {46, 48, SPECIES_SKARMORY},
  {46, 48, SPECIES_DRAMPA},
  {46, 48, SPECIES_DRAMPA},
  {46, 48, SPECIES_DRACOZOLT},
  {46, 48, SPECIES_DRACOZOLT},
};

static const struct WildPokemonInfo gRoute17_LandMonsInfoDay = {20, gRoute17_LandMonsDay};

static const struct WildPokemon gRoute17_LandMonsNight[] = 
{
  {46, 48, SPECIES_WEEZING_G},
  {46, 48, SPECIES_CYCLIZAR},
  {46, 48, SPECIES_MUK_A},
  {46, 48, SPECIES_ZEBSTRIKA},
  {46, 48, SPECIES_GRUMPIG},
  {46, 48, SPECIES_TORKOAL},
  {46, 48, SPECIES_SKARMORY},
  {46, 48, SPECIES_SKARMORY},
  {46, 48, SPECIES_TURTONATOR},
  {46, 48, SPECIES_TURTONATOR},
  {46, 48, SPECIES_DRACOZOLT},
  {46, 48, SPECIES_DRACOZOLT},
};

static const struct WildPokemonInfo gRoute17_LandMonsInfoNight = {20, gRoute17_LandMonsNight};

static const struct WildPokemon gRoute18_LandMonsDay[] = 
{
  {49, 51, SPECIES_XATU},
  {49, 51, SPECIES_VIKAVOLT},
  {49, 51, SPECIES_POLIWRATH},
  {49, 51, SPECIES_ABOMASNOW},
  {49, 51, SPECIES_ALTARIA},
  {49, 51, SPECIES_PARASECT},
  {49, 51, SPECIES_TOXICROAK},
  {49, 51, SPECIES_TOXICROAK},
  {49, 51, SPECIES_KABUTOPS},
  {49, 51, SPECIES_KABUTOPS},
  {49, 51, SPECIES_ARCTOVISH},
  {49, 51, SPECIES_DRACOVISH},
};

static const struct WildPokemonInfo gRoute18_LandMonsInfoDay = {20, gRoute18_LandMonsDay};

static const struct WildPokemon gRoute18_LandMonsNight[] = 
{
  {49, 51, SPECIES_XATU},
  {49, 51, SPECIES_VIKAVOLT},
  {49, 51, SPECIES_POLITOED},
  {49, 51, SPECIES_ABOMASNOW},
  {49, 51, SPECIES_ALTARIA},
  {49, 51, SPECIES_JYNX},
  {49, 51, SPECIES_HELIOLISK},
  {49, 51, SPECIES_HELIOLISK},
  {49, 51, SPECIES_OMASTAR},
  {49, 51, SPECIES_OMASTAR},
  {49, 51, SPECIES_ARCTOVISH},
  {49, 51, SPECIES_DRACOVISH},
};

static const struct WildPokemonInfo gRoute18_LandMonsInfoNight = {20, gRoute18_LandMonsNight};

static const struct WildPokemon gRoute12_LandMonsDay[] = 
{
  {50, 52, SPECIES_SNEASEL},
  {50, 52, SPECIES_DEWGONG},
  {50, 52, SPECIES_WALREIN},
  {50, 52, SPECIES_GLALIE},
  {50, 52, SPECIES_THROH},
  {50, 52, SPECIES_CETITAN},
  {50, 52, SPECIES_AVALUGG},
  {50, 52, SPECIES_AVALUGG},
  {50, 52, SPECIES_MR_MIME_G},
  {50, 52, SPECIES_MR_MIME_G},
  {50, 52, SPECIES_ARCTOVISH},
  {50, 52, SPECIES_ARCTOZOLT},
};

static const struct WildPokemonInfo gRoute12_LandMonsInfoDay = {20, gRoute12_LandMonsDay};

static const struct WildPokemon gRoute12_LandMonsNight[] = 
{
  {50, 52, SPECIES_SNEASEL},
  {50, 52, SPECIES_DEWGONG},
  {50, 52, SPECIES_WALREIN},
  {50, 52, SPECIES_FROSLASS},
  {50, 52, SPECIES_SAWK},
  {50, 52, SPECIES_CETITAN},
  {50, 52, SPECIES_AVALUGG_H},
  {50, 52, SPECIES_AVALUGG_H},
  {50, 52, SPECIES_MR_MIME_G},
  {50, 52, SPECIES_MR_MIME_G},
  {50, 52, SPECIES_ARCTOVISH},
  {50, 52, SPECIES_ARCTOZOLT},
};

static const struct WildPokemonInfo gRoute12_LandMonsInfoNight = {20, gRoute12_LandMonsNight};


static const struct WildPokemon gRoute12_SurfMons[] = 
{
  {56, 58, SPECIES_TENTACOOL},
  {56, 58, SPECIES_TENTACOOL},
  {56, 58, SPECIES_TENTACRUEL},
  {56, 58, SPECIES_FINNEON},
  {56, 58, SPECIES_FINNEON},
};

static const struct WildPokemonInfo gRoute12_SurfMonsInfo = {5, gRoute12_SurfMons};

static const struct WildPokemon gRoute12_FishingMons[] = 
{
  {2, 4, SPECIES_SPHEAL},
  {2, 4, SPECIES_SEEL},
  {27, 29, SPECIES_SHELLDER},
  {27, 29, SPECIES_SEALEO},
  {27, 29, SPECIES_VELUZA},
  {53, 55, SPECIES_DONDOZO},
  {53, 55, SPECIES_DONDOZO},
  {53, 55, SPECIES_DEWGONG},
  {53, 55, SPECIES_BRUXISH},
  {53, 55, SPECIES_DREDNAW},
};

static const struct WildPokemonInfo gRoute12_FishingMonsInfo = {5, gRoute12_FishingMons};

static const struct WildPokemon gCeladonCity_SurfMons[] = 
{
  {56, 58, SPECIES_POLIWHIRL},
  {56, 58, SPECIES_POLIWHIRL},
  {56, 58, SPECIES_POLIWHIRL},
  {56, 58, SPECIES_POLIWHIRL},
  {56, 58, SPECIES_POLIWHIRL},
};

static const struct WildPokemonInfo gCeladonCity_SurfMonsInfo = {5, gCeladonCity_SurfMons};

static const struct WildPokemon gCeladonCity_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_ARROKUDA},
  {27, 29, SPECIES_POLIWAG},
  {27, 29, SPECIES_SLOWPOKE_G},
  {27, 29, SPECIES_SLOWPOKE_G},
  {53, 55, SPECIES_PSYDUCK},
  {53, 55, SPECIES_MAREANIE},
  {53, 55, SPECIES_MAREANIE},
  {53, 55, SPECIES_MUK},
  {53, 55, SPECIES_MUK_A},
};

static const struct WildPokemonInfo gCeladonCity_FishingMonsInfo = {5, gCeladonCity_FishingMons};

static const struct WildPokemon gRoute13_LandMonsDay[] = 
{
  {48, 50, SPECIES_TANGROWTH},
  {48, 50, SPECIES_EXEGGUTOR},
  {48, 50, SPECIES_ROSELIA},
  {48, 50, SPECIES_LURANTIS},
  {48, 50, SPECIES_SIMISAGE},
  {48, 50, SPECIES_JUMPLUFF},
  {48, 50, SPECIES_BULBASAUR},
  {48, 50, SPECIES_BULBASAUR},
  {48, 50, SPECIES_EXEGGUTOR_A},
  {48, 50, SPECIES_DURALUDON},
  {48, 50, SPECIES_CHARMANDER},
  {48, 50, SPECIES_CHARMANDER},
};

static const struct WildPokemonInfo gRoute13_LandMonsInfoDay = {20, gRoute13_LandMonsDay};

static const struct WildPokemon gRoute13_LandMonsNight[] = 
{
  {48, 50, SPECIES_TALONFLAME},
  {48, 50, SPECIES_PYROAR},
  {48, 50, SPECIES_ARCANINE},
  {48, 50, SPECIES_MAGMAR},
  {48, 50, SPECIES_SIMISEAR},
  {48, 50, SPECIES_ORICORIO},
  {48, 50, SPECIES_CHARMANDER},
  {48, 50, SPECIES_CHARMANDER},
  {48, 50, SPECIES_TURTONATOR},
  {48, 50, SPECIES_DURALUDON},
  {48, 50, SPECIES_CENTISKORCH},
  {48, 50, SPECIES_CENTISKORCH},
};

static const struct WildPokemonInfo gRoute13_LandMonsInfoNight = {20, gRoute13_LandMonsNight};


static const struct WildPokemon gRoute13_SurfMons[] = 
{
  {56, 58, SPECIES_TENTACOOL},
  {56, 58, SPECIES_TENTACOOL},
  {56, 58, SPECIES_BUIZEL},
  {56, 58, SPECIES_BUIZEL},
  {56, 58, SPECIES_BUIZEL},
};

static const struct WildPokemonInfo gRoute13_SurfMonsInfo = {5, gRoute13_SurfMons};

static const struct WildPokemon gRoute13_FishingMons[] = 
{
  {2, 4, SPECIES_SKRELP},
  {2, 4, SPECIES_TATSUGIRI},
  {27, 29, SPECIES_MAREANIE},
  {27, 29, SPECIES_DEWPIDER},
  {27, 29, SPECIES_SKRELP},
  {53, 55, SPECIES_DRAGALGE},
  {53, 55, SPECIES_VELUZA},
  {53, 55, SPECIES_TOXAPEX},
  {53, 55, SPECIES_MANTINE},
  {53, 55, SPECIES_MANTINE},
};

static const struct WildPokemonInfo gRoute13_FishingMonsInfo = {5, gRoute13_FishingMons};

static const struct WildPokemon gRoute14_LandMonsDay[] = 
{
  {48, 50, SPECIES_PELIPPER},
  {48, 50, SPECIES_SWADLOON},
  {48, 50, SPECIES_TORKOAL},
  {48, 50, SPECIES_TORKOAL},
  {48, 50, SPECIES_WHIRLIPEDE},
  {48, 50, SPECIES_WHIRLIPEDE},
  {48, 50, SPECIES_CHARJABUG},
  {48, 50, SPECIES_CHARJABUG},
  {48, 50, SPECIES_DURANT},
  {48, 50, SPECIES_DURANT},
  {48, 50, SPECIES_GOLISOPOD},
  {48, 50, SPECIES_GOLISOPOD},
};

static const struct WildPokemonInfo gRoute14_LandMonsInfoDay = {20, gRoute14_LandMonsDay};

static const struct WildPokemon gRoute14_LandMonsNight[] = 
{
  {48, 50, SPECIES_PELIPPER},
  {48, 50, SPECIES_SWADLOON},
  {48, 50, SPECIES_TORKOAL},
  {48, 50, SPECIES_TORKOAL},
  {48, 50, SPECIES_PALOSSAND},
  {48, 50, SPECIES_PALOSSAND},
  {48, 50, SPECIES_CHARJABUG},
  {48, 50, SPECIES_CHARJABUG},
  {48, 50, SPECIES_DURANT},
  {48, 50, SPECIES_DURANT},
  {48, 50, SPECIES_GOLISOPOD},
  {48, 50, SPECIES_GOLISOPOD},
};

static const struct WildPokemonInfo gRoute14_LandMonsInfoNight = {20, gRoute14_LandMonsNight};

static const struct WildPokemon gRoute15_LandMonsDay[] = 
{
  {49, 51, SPECIES_AMOONGUSS},
  {49, 51, SPECIES_AMBIPOM},
  {49, 51, SPECIES_TSAREENA},
  {49, 51, SPECIES_GALVANTULA},
  {49, 51, SPECIES_SIMIPOUR},
  {49, 51, SPECIES_ORICORIO},
  {49, 51, SPECIES_SIGILYPH},
  {49, 51, SPECIES_SIGILYPH},
  {49, 51, SPECIES_FERROTHORN},
  {49, 51, SPECIES_FERROTHORN},
  {49, 51, SPECIES_DITTO},
  {49, 51, SPECIES_DITTO},
};

static const struct WildPokemonInfo gRoute15_LandMonsInfoDay = {20, gRoute15_LandMonsDay};

static const struct WildPokemon gRoute15_LandMonsNight[] = 
{
  {49, 51, SPECIES_AMOONGUSS},
  {49, 51, SPECIES_AMBIPOM},
  {49, 51, SPECIES_TSAREENA},
  {49, 51, SPECIES_GALVANTULA},
  {49, 51, SPECIES_SIMIPOUR},
  {49, 51, SPECIES_ORICORIO},
  {49, 51, SPECIES_SIGILYPH},
  {49, 51, SPECIES_SIGILYPH},
  {49, 51, SPECIES_FERROTHORN},
  {49, 51, SPECIES_FERROTHORN},
  {49, 51, SPECIES_DITTO},
  {49, 51, SPECIES_DITTO},
};

static const struct WildPokemonInfo gRoute15_LandMonsInfoNight = {20, gRoute15_LandMonsNight};

static const struct WildPokemon gSafariZoneCenter_LandMonsDay[] = 
{
  {50, 52, SPECIES_KECLEON},
  {50, 52, SPECIES_SPINDA},
  {50, 52, SPECIES_IRONHANDS},
  {50, 52, SPECIES_IRONHANDS},
  {50, 52, SPECIES_MELTAN},
  {50, 52, SPECIES_MELTAN},
  {50, 52, SPECIES_PORYGON},
  {50, 52, SPECIES_PORYGON},
  {50, 52, SPECIES_SCYTHER},
  {50, 52, SPECIES_SCYTHER},
  {50, 52, SPECIES_CHANSEY},
  {50, 52, SPECIES_CHANSEY},
};

static const struct WildPokemonInfo gSafariZoneCenter_LandMonsInfoDay = {20, gSafariZoneCenter_LandMonsDay};

static const struct WildPokemon gSafariZoneCenter_LandMonsNight[] = 
{
  {50, 52, SPECIES_KECLEON},
  {50, 52, SPECIES_SPINDA},
  {50, 52, SPECIES_IRONMOTH},
  {50, 52, SPECIES_IRONMOTH},
  {50, 52, SPECIES_MELTAN},
  {50, 52, SPECIES_MELTAN},
  {50, 52, SPECIES_PORYGON},
  {50, 52, SPECIES_PORYGON},
  {50, 52, SPECIES_HERACROSS},
  {50, 52, SPECIES_HERACROSS},
  {50, 52, SPECIES_CHANSEY},
  {50, 52, SPECIES_CHANSEY},
};

static const struct WildPokemonInfo gSafariZoneCenter_LandMonsInfoNight = {20, gSafariZoneCenter_LandMonsNight};

static const struct WildPokemon gSafariZoneCenter_SurfMons[] = 
{
  {56, 58, SPECIES_FRILLISH},
  {56, 58, SPECIES_GOLDUCK},
  {56, 58, SPECIES_JELLICENT},
  {56, 58, SPECIES_GOLDUCK},
  {56, 58, SPECIES_GOLDUCK},
};

static const struct WildPokemonInfo gSafariZoneCenter_SurfMonsInfo = {5, gSafariZoneCenter_SurfMons};

static const struct WildPokemon gSafariZoneCenter_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_KRABBY},
  {27, 29, SPECIES_QWILFISH},
  {27, 29, SPECIES_MAREANIE},
  {27, 29, SPECIES_MANTYKE},
  {53, 55, SPECIES_ALOMOMOLA},
  {53, 55, SPECIES_BASCULIN_RED},
  {53, 55, SPECIES_SHARPEDO},
  {53, 55, SPECIES_FEEBAS},
  {53, 55, SPECIES_FEEBAS},
};

static const struct WildPokemonInfo gSafariZoneCenter_FishingMonsInfo = {5, gSafariZoneCenter_FishingMons};

static const struct WildPokemon gSafariZoneEast_LandMonsDay[] = 
{
  {50, 52, SPECIES_HAWLUCHA},
  {50, 52, SPECIES_CASTFORM},
  {50, 52, SPECIES_TAUROS},
  {50, 52, SPECIES_TAUROS_P},
  {50, 52, SPECIES_WOBBUFFET},
  {50, 52, SPECIES_WOBBUFFET},
  {50, 52, SPECIES_ZORUA},
  {50, 52, SPECIES_ZORUA},
  {50, 52, SPECIES_PINSIR},
  {50, 52, SPECIES_PINSIR},
  {50, 52, SPECIES_KANGASKHAN},
  {50, 52, SPECIES_KANGASKHAN},
};

static const struct WildPokemonInfo gSafariZoneEast_LandMonsInfoDay = {20, gSafariZoneEast_LandMonsDay};

static const struct WildPokemon gSafariZoneEast_LandMonsNight[] = 
{
  {50, 52, SPECIES_HAWLUCHA},
  {50, 52, SPECIES_CASTFORM},
  {50, 52, SPECIES_TAUROS_P_FIRE},
  {50, 52, SPECIES_TAUROS_P_WATER},
  {50, 52, SPECIES_WOBBUFFET},
  {50, 52, SPECIES_WOBBUFFET},
  {50, 52, SPECIES_ZORUA_H},
  {50, 52, SPECIES_ZORUA_H},
  {50, 52, SPECIES_PINSIR},
  {50, 52, SPECIES_PINSIR},
  {50, 52, SPECIES_KANGASKHAN},
  {50, 52, SPECIES_KANGASKHAN},
};

static const struct WildPokemonInfo gSafariZoneEast_LandMonsInfoNight = {20, gSafariZoneEast_LandMonsNight};

static const struct WildPokemon gSafariZoneEast_SurfMons[] = 
{
  {56, 58, SPECIES_WIMPOD},
  {56, 58, SPECIES_LANTURN},
  {56, 58, SPECIES_ARAQUANID},
  {56, 58, SPECIES_SEISMITOAD},
  {56, 58, SPECIES_SEISMITOAD},
};

static const struct WildPokemonInfo gSafariZoneEast_SurfMonsInfo = {5, gSafariZoneEast_SurfMons};

static const struct WildPokemon gSafariZoneEast_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_ARROKUDA},
  {27, 29, SPECIES_CORSOLA},
  {27, 29, SPECIES_SEADRA},
  {27, 29, SPECIES_REMORAID},
  {53, 55, SPECIES_GOREBYSS},
  {53, 55, SPECIES_HUNTAIL},
  {53, 55, SPECIES_STARMIE},
  {53, 55, SPECIES_DHELMISE},
  {53, 55, SPECIES_DHELMISE},
};

static const struct WildPokemonInfo gSafariZoneEast_FishingMonsInfo = {5, gSafariZoneEast_FishingMons};

static const struct WildPokemon gSafariZoneNorth_LandMonsDay[] = 
{
  {50, 52, SPECIES_KLEFKI},
  {50, 52, SPECIES_SANDYSHOCKS},
  {50, 52, SPECIES_SCREAMTAIL},
  {50, 52, SPECIES_SCREAMTAIL},
  {50, 52, SPECIES_BISHARP},
  {50, 52, SPECIES_BISHARP},
  {50, 52, SPECIES_SKARMORY},
  {50, 52, SPECIES_SKARMORY},
  {50, 52, SPECIES_GIMMIGHOUL_CHEST},
  {50, 52, SPECIES_GIMMIGHOUL_CHEST},
  {50, 52, SPECIES_AXEW},
  {50, 52, SPECIES_AXEW},
};

static const struct WildPokemonInfo gSafariZoneNorth_LandMonsInfoDay = {20, gSafariZoneNorth_LandMonsDay};

static const struct WildPokemon gSafariZoneNorth_LandMonsNight[] = 
{
  {50, 52, SPECIES_KLEFKI},
  {50, 52, SPECIES_SANDYSHOCKS},
  {50, 52, SPECIES_BRUTEBONNET},
  {50, 52, SPECIES_BRUTEBONNET},
  {50, 52, SPECIES_BISHARP},
  {50, 52, SPECIES_BISHARP},
  {50, 52, SPECIES_CORVIKNIGHT},
  {50, 52, SPECIES_CORVIKNIGHT},
  {50, 52, SPECIES_GIMMIGHOUL_CHEST},
  {50, 52, SPECIES_GIMMIGHOUL_CHEST},
  {50, 52, SPECIES_AXEW},
  {50, 52, SPECIES_AXEW},
};

static const struct WildPokemonInfo gSafariZoneNorth_LandMonsInfoNight = {20, gSafariZoneNorth_LandMonsNight};

static const struct WildPokemon gSafariZoneNorth_SurfMons[] = 
{
  {56, 58, SPECIES_DEWPIDER},
  {56, 58, SPECIES_TOXAPEX},
  {56, 58, SPECIES_GOLISOPOD},
  {56, 58, SPECIES_GOLISOPOD},
  {56, 58, SPECIES_GOLISOPOD},
};

static const struct WildPokemonInfo gSafariZoneNorth_SurfMonsInfo = {5, gSafariZoneNorth_SurfMons};

static const struct WildPokemon gSafariZoneNorth_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_POLIWAG},
  {27, 29, SPECIES_PYUKUMUKU},
  {27, 29, SPECIES_KRABBY},
  {27, 29, SPECIES_WAILMER},
  {53, 55, SPECIES_KINGLER},
  {53, 55, SPECIES_BRUXISH},
  {53, 55, SPECIES_TATSUGIRI},
  {53, 55, SPECIES_SKRELP},
  {53, 55, SPECIES_SKRELP},
};

static const struct WildPokemonInfo gSafariZoneNorth_FishingMonsInfo = {5, gSafariZoneNorth_FishingMons};

static const struct WildPokemon gSafariZoneWest_LandMonsDay[] = 
{
  {50, 52, SPECIES_DRUDDIGON},
  {50, 52, SPECIES_DRUDDIGON},
  {50, 52, SPECIES_IRONTHORNS},
  {50, 52, SPECIES_IRONTHORNS},
  {50, 52, SPECIES_HIPPOWDON},
  {50, 52, SPECIES_HIPPOWDON},
  {50, 52, SPECIES_SLITHERWING},
  {50, 52, SPECIES_SLITHERWING},
  {50, 52, SPECIES_CRABOMINABLE},
  {50, 52, SPECIES_CRABOMINABLE},
  {50, 52, SPECIES_SMEARGLE},
  {50, 52, SPECIES_SMEARGLE},
};

static const struct WildPokemonInfo gSafariZoneWest_LandMonsInfoDay = {20, gSafariZoneWest_LandMonsDay};

static const struct WildPokemon gSafariZoneWest_LandMonsNight[] = 
{
  {50, 52, SPECIES_DRUDDIGON},
  {50, 52, SPECIES_DRUDDIGON},
  {50, 52, SPECIES_IRONJUGULIS},
  {50, 52, SPECIES_IRONJUGULIS},
  {50, 52, SPECIES_HIPPOWDON},
  {50, 52, SPECIES_HIPPOWDON},
  {50, 52, SPECIES_SLITHERWING},
  {50, 52, SPECIES_SLITHERWING},
  {50, 52, SPECIES_CRABOMINABLE},
  {50, 52, SPECIES_CRABOMINABLE},
  {50, 52, SPECIES_SMEARGLE},
  {50, 52, SPECIES_SMEARGLE},
};

static const struct WildPokemonInfo gSafariZoneWest_LandMonsInfoNight = {20, gSafariZoneWest_LandMonsNight};

static const struct WildPokemon gSafariZoneWest_SurfMons[] = 
{
  {56, 58, SPECIES_LUMINEON},
  {56, 58, SPECIES_FLOATZEL},
  {56, 58, SPECIES_RELICANTH},
  {56, 58, SPECIES_GOLDUCK},
  {56, 58, SPECIES_MILOTIC},
};

static const struct WildPokemonInfo gSafariZoneWest_SurfMonsInfo = {5, gSafariZoneWest_SurfMons};

static const struct WildPokemon gSafariZoneWest_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_HORSEA},
  {27, 29, SPECIES_QWILFISH},
  {27, 29, SPECIES_SEADRA},
  {27, 29, SPECIES_WAILMER},
  {53, 55, SPECIES_CRAWDAUNT},
  {53, 55, SPECIES_SEAKING},
  {53, 55, SPECIES_BASCULIN_RED},
  {53, 55, SPECIES_RELICANTH},
  {53, 55, SPECIES_RELICANTH},
};

static const struct WildPokemonInfo gSafariZoneWest_FishingMonsInfo = {5, gSafariZoneWest_FishingMons};

static const struct WildPokemon gRoute19_SurfMons[] = 
{
  {56, 58, SPECIES_LUMINEON},
  {56, 58, SPECIES_JELLICENT},
  {56, 58, SPECIES_BASCULIN_BLUE},
  {56, 58, SPECIES_CLAWITZER},
  {56, 58, SPECIES_CLAWITZER},
};

static const struct WildPokemonInfo gRoute19_SurfMonsInfo = {5, gRoute19_SurfMons};

static const struct WildPokemon gRoute19_FishingMons[] = 
{
  {2, 4, SPECIES_CLAMPERL},
  {2, 4, SPECIES_HORSEA},
  {27, 29, SPECIES_SHELLDER},
  {27, 29, SPECIES_SLOWPOKE},
  {27, 29, SPECIES_SLOWPOKE},
  {53, 55, SPECIES_SEADRA},
  {53, 55, SPECIES_HUNTAIL},
  {53, 55, SPECIES_GOREBYSS},
  {53, 55, SPECIES_MANTINE},
  {53, 55, SPECIES_MANTINE},
};

static const struct WildPokemonInfo gRoute19_FishingMonsInfo = {5, gRoute19_FishingMons};

static const struct WildPokemon gRoute20_SurfMons[] = 
{
  {56, 58, SPECIES_TENTACRUEL},
  {56, 58, SPECIES_SHARPEDO},
  {56, 58, SPECIES_WAILORD},
  {56, 58, SPECIES_LANTURN},
  {56, 58, SPECIES_LANTURN},
};

static const struct WildPokemonInfo gRoute20_SurfMonsInfo = {5, gRoute20_SurfMons};

static const struct WildPokemon gRoute20_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_CHINCHOU},
  {27, 29, SPECIES_WAILMER},
  {27, 29, SPECIES_CLAUNCHER},
  {27, 29, SPECIES_CORSOLA_G},
  {53, 55, SPECIES_SEADRA},
  {53, 55, SPECIES_BASCULIN_BLUE},
  {53, 55, SPECIES_CLAWITZER},
  {53, 55, SPECIES_BRUXISH},
  {53, 55, SPECIES_BRUXISH},
};

static const struct WildPokemonInfo gRoute20_FishingMonsInfo = {5, gRoute20_FishingMons};

static const struct WildPokemon gRoute21A_LandMonsDay[] = 
{
  {4, 6, SPECIES_WOOPER},
  {4, 6, SPECIES_LECHONK},
  {4, 6, SPECIES_WIGLETT},
  {4, 6, SPECIES_WIGLETT},
  {4, 6, SPECIES_DWEBBLE},
  {4, 6, SPECIES_SNUBBULL},
  {4, 6, SPECIES_WINGULL},
  {4, 6, SPECIES_WINGULL},
  {4, 6, SPECIES_FIDOUGH},
  {4, 6, SPECIES_FIDOUGH},
  {4, 6, SPECIES_CAPSAKID},
  {4, 6, SPECIES_CAPSAKID},
};

static const struct WildPokemonInfo gRoute21A_LandMonsInfoDay = {20, gRoute21A_LandMonsDay};

static const struct WildPokemon gRoute21A_LandMonsNight[] = 
{
  {4, 6, SPECIES_WOOPER_P},
  {4, 6, SPECIES_LECHONK},
  {4, 6, SPECIES_WIGLETT},
  {4, 6, SPECIES_WIGLETT},
  {4, 6, SPECIES_DWEBBLE},
  {4, 6, SPECIES_SNUBBULL},
  {4, 6, SPECIES_WINGULL},
  {4, 6, SPECIES_WINGULL},
  {4, 6, SPECIES_MASCHIFF},
  {4, 6, SPECIES_MASCHIFF},
  {4, 6, SPECIES_LOTAD},
  {4, 6, SPECIES_LOTAD},
};

static const struct WildPokemonInfo gRoute21A_LandMonsInfoNight = {20, gRoute21A_LandMonsNight};

static const struct WildPokemon gRoute21A_SurfMons[] = 
{
  {56, 58, SPECIES_TENTACRUEL},
  {56, 58, SPECIES_BARRASKEWDA},
  {56, 58, SPECIES_LUMINEON},
  {56, 58, SPECIES_CRAMORANT},
  {56, 58, SPECIES_CRAMORANT},
};

static const struct WildPokemonInfo gRoute21A_SurfMonsInfo = {5, gRoute21A_SurfMons};

static const struct WildPokemon gRoute21A_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_SHELLDER},
  {27, 29, SPECIES_KRABBY},
  {27, 29, SPECIES_QWILFISH},
  {27, 29, SPECIES_CORSOLA_G},
  {53, 55, SPECIES_OCTILLERY},
  {53, 55, SPECIES_LUMINEON},
  {53, 55, SPECIES_KINGLER},
  {53, 55, SPECIES_RELICANTH},
  {53, 55, SPECIES_RELICANTH},
};

static const struct WildPokemonInfo gRoute21A_FishingMonsInfo = {5, gRoute21A_FishingMons};

static const struct WildPokemon gRoute21B_SurfMons[] = 
{
  {56, 58, SPECIES_TENTACRUEL},
  {56, 58, SPECIES_MANTINE},
  {56, 58, SPECIES_MANTINE},
  {56, 58, SPECIES_JELLICENT},
  {56, 58, SPECIES_JELLICENT},
};

static const struct WildPokemonInfo gRoute21B_SurfMonsInfo = {5, gRoute21B_SurfMons};

static const struct WildPokemon gRoute21B_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_SHELLDER},
  {27, 29, SPECIES_KRABBY},
  {27, 29, SPECIES_QWILFISH},
  {27, 29, SPECIES_CORSOLA},
  {53, 55, SPECIES_OCTILLERY},
  {53, 55, SPECIES_LUMINEON},
  {53, 55, SPECIES_SHARPEDO},
  {53, 55, SPECIES_RELICANTH},
  {53, 55, SPECIES_RELICANTH},
};

static const struct WildPokemonInfo gRoute21B_FishingMonsInfo = {5, gRoute21B_FishingMons};

static const struct WildPokemon gSeafoamIslands1F_LandMonsDay[] = 
{
  {62, 64, SPECIES_PILOSWINE},
  {62, 64, SPECIES_SNORUNT},
  {62, 64, SPECIES_BEARTIC},
  {62, 64, SPECIES_BEARTIC},
  {62, 64, SPECIES_SLOWBRO},
  {62, 64, SPECIES_SLOWBRO},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_AVALUGG},
  {62, 64, SPECIES_AVALUGG},
  {62, 64, SPECIES_JYNX},
  {62, 64, SPECIES_JYNX},
};

static const struct WildPokemonInfo gSeafoamIslands1F_LandMonsInfoDay = {7, gSeafoamIslands1F_LandMonsDay};

static const struct WildPokemon gSeafoamIslands1F_LandMonsNight[] = 
{
  {62, 64, SPECIES_SANDSLASH_A},
  {62, 64, SPECIES_SNORUNT},
  {62, 64, SPECIES_BEARTIC},
  {62, 64, SPECIES_BEARTIC},
  {62, 64, SPECIES_WALREIN},
  {62, 64, SPECIES_WALREIN},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_AVALUGG},
  {62, 64, SPECIES_AVALUGG},
  {62, 64, SPECIES_JYNX},
  {62, 64, SPECIES_JYNX},
};

static const struct WildPokemonInfo gSeafoamIslands1F_LandMonsInfoNight = {7, gSeafoamIslands1F_LandMonsNight};

static const struct WildPokemon gSeafoamIslandsB1F_LandMonsDay[] = 
{
  {62, 64, SPECIES_PILOSWINE},
  {62, 64, SPECIES_DARMANITAN_G},
  {62, 64, SPECIES_VANILLUXE},
  {62, 64, SPECIES_VANILLUXE},
  {62, 64, SPECIES_SLOWKING},
  {62, 64, SPECIES_SLOWKING},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_CRYOGONAL},
  {62, 64, SPECIES_CRYOGONAL},
  {62, 64, SPECIES_DELIBIRD},
  {62, 64, SPECIES_DELIBIRD},
};

static const struct WildPokemonInfo gSeafoamIslandsB1F_LandMonsInfoDay = {7, gSeafoamIslandsB1F_LandMonsDay};

static const struct WildPokemon gSeafoamIslandsB1F_LandMonsNight[] = 
{
  {62, 64, SPECIES_SANDSLASH_A},
  {62, 64, SPECIES_DARMANITAN_G},
  {62, 64, SPECIES_VANILLUXE},
  {62, 64, SPECIES_VANILLUXE},
  {62, 64, SPECIES_GOLDUCK},
  {62, 64, SPECIES_GOLDUCK},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_CRYOGONAL},
  {62, 64, SPECIES_CRYOGONAL},
  {62, 64, SPECIES_DELIBIRD},
  {62, 64, SPECIES_DELIBIRD},
};

static const struct WildPokemonInfo gSeafoamIslandsB1F_LandMonsInfoNight = {7, gSeafoamIslandsB1F_LandMonsNight};

static const struct WildPokemon gSeafoamIslandsB2F_LandMonsDay[] = 
{
  {62, 64, SPECIES_ABOMASNOW},
  {62, 64, SPECIES_SNOVER},
  {62, 64, SPECIES_NINETALES_A},
  {62, 64, SPECIES_NINETALES_A},
  {62, 64, SPECIES_CRAWDAUNT},
  {62, 64, SPECIES_CRAWDAUNT},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_SNEASEL},
  {62, 64, SPECIES_SNEASEL},
  {62, 64, SPECIES_DELIBIRD},
  {62, 64, SPECIES_DELIBIRD},
};

static const struct WildPokemonInfo gSeafoamIslandsB2F_LandMonsInfoDay = {7, gSeafoamIslandsB2F_LandMonsDay};

static const struct WildPokemon gSeafoamIslandsB2F_LandMonsNight[] = 
{
  {62, 64, SPECIES_ABOMASNOW},
  {62, 64, SPECIES_SNORUNT},
  {62, 64, SPECIES_NINETALES_A},
  {62, 64, SPECIES_NINETALES_A},
  {62, 64, SPECIES_KINGLER},
  {62, 64, SPECIES_KINGLER},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_SNEASEL},
  {62, 64, SPECIES_SNEASEL},
  {62, 64, SPECIES_DELIBIRD},
  {62, 64, SPECIES_DELIBIRD},
};

static const struct WildPokemonInfo gSeafoamIslandsB2F_LandMonsInfoNight = {7, gSeafoamIslandsB2F_LandMonsNight};

static const struct WildPokemon gSeafoamIslandsB2F_SurfMons[] = 
{
  {56, 58, SPECIES_DEWGONG},
  {56, 58, SPECIES_WALREIN},
  {56, 58, SPECIES_CRAWDAUNT},
  {56, 58, SPECIES_CRAWDAUNT},
  {56, 58, SPECIES_CRAWDAUNT},
};

static const struct WildPokemonInfo gSeafoamIslandsB2F_SurfMonsInfo = {5, gSeafoamIslandsB2F_SurfMons};

static const struct WildPokemon gSeafoamIslandsB2F_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP}, //20 
  {2, 4, SPECIES_GOLDEEN}, //20 
  {27, 29, SPECIES_SPHEAL}, // 15
  {27, 29, SPECIES_MAREANIE}, //15 
  {27, 29, SPECIES_KRABBY}, // 8
  {53, 55, SPECIES_SEADRA}, // 8
  {53, 55, SPECIES_SEADRA}, // 5
  {53, 55, SPECIES_GYARADOS}, // 5
  {53, 55, SPECIES_CRAWDAUNT}, //2
  {53, 55, SPECIES_CRAWDAUNT}, //2
};

static const struct WildPokemonInfo gSeafoamIslandsB2F_FishingMonsInfo = {5, gSeafoamIslandsB2F_FishingMons};

static const struct WildPokemon gSeafoamIslandsB3F_LandMonsDay[] = 
{
  {62, 64, SPECIES_PILOSWINE},
  {62, 64, SPECIES_DARMANITAN_G},
  {62, 64, SPECIES_NINETALES_A},
  {62, 64, SPECIES_NINETALES_A},
  {62, 64, SPECIES_DEWGONG},
  {62, 64, SPECIES_DEWGONG},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_FROSMOTH},
  {62, 64, SPECIES_FROSMOTH},
  {62, 64, SPECIES_JYNX},
  {62, 64, SPECIES_JYNX},
};

static const struct WildPokemonInfo gSeafoamIslandsB3F_LandMonsInfoDay = {7, gSeafoamIslandsB3F_LandMonsDay};

static const struct WildPokemon gSeafoamIslandsB3F_LandMonsNight[] = 
{
  {62, 64, SPECIES_SANDSLASH_A},
  {62, 64, SPECIES_DARMANITAN_G},
  {62, 64, SPECIES_NINETALES_A},
  {62, 64, SPECIES_NINETALES_A},
  {62, 64, SPECIES_GOLDUCK},
  {62, 64, SPECIES_GOLDUCK},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_GOLBAT},
  {62, 64, SPECIES_FROSMOTH},
  {62, 64, SPECIES_FROSMOTH},
  {62, 64, SPECIES_JYNX},
  {62, 64, SPECIES_JYNX},
};

static const struct WildPokemonInfo gSeafoamIslandsB3F_LandMonsInfoNight = {7, gSeafoamIslandsB3F_LandMonsNight};

static const struct WildPokemon gSeafoamIslandsB3F_SurfMons[] = 
{
  {56, 58, SPECIES_GOLDUCK},
  {56, 58, SPECIES_SLOWBRO},
  {56, 58, SPECIES_SHARPEDO},
  {56, 58, SPECIES_SHARPEDO},
  {56, 58, SPECIES_SHARPEDO},
};

static const struct WildPokemonInfo gSeafoamIslandsB3F_SurfMonsInfo = {5, gSeafoamIslandsB3F_SurfMons};

static const struct WildPokemon gSeafoamIslandsB3F_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_REMORAID},
  {27, 29, SPECIES_SPHEAL},
  {27, 29, SPECIES_SHELLDER},
  {27, 29, SPECIES_CARVANHA},
  {53, 55, SPECIES_SEADRA},
  {53, 55, SPECIES_SEADRA},
  {53, 55, SPECIES_GYARADOS},
  {53, 55, SPECIES_GRAPPLOCT},
  {53, 55, SPECIES_GRAPPLOCT},
};

static const struct WildPokemonInfo gSeafoamIslandsB3F_FishingMonsInfo = {5, gSeafoamIslandsB3F_FishingMons};

static const struct WildPokemon gCinnabarIsland_SurfMons[] = 
{
  {56, 58, SPECIES_TENTACRUEL},
  {56, 58, SPECIES_MANTINE},
  {56, 58, SPECIES_MANTINE},
  {56, 58, SPECIES_CRAMORANT},
  {56, 58, SPECIES_CRAMORANT},
};

static const struct WildPokemonInfo gCinnabarIsland_SurfMonsInfo = {5, gCinnabarIsland_SurfMons};

static const struct WildPokemon gCinnabarIsland_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_CORSOLA},
  {27, 29, SPECIES_KRABBY},
  {27, 29, SPECIES_QWILFISH},
  {27, 29, SPECIES_FEEBAS},
  {53, 55, SPECIES_OCTILLERY},
  {53, 55, SPECIES_LUMINEON},
  {53, 55, SPECIES_SHARPEDO},
  {53, 55, SPECIES_DHELMISE},
  {53, 55, SPECIES_DHELMISE},
};

static const struct WildPokemonInfo gCinnabarIsland_FishingMonsInfo = {5, gCinnabarIsland_FishingMons};

static const struct WildPokemon gPokemonMansion1F_LandMonsDay[] = 
{
  {63, 65, SPECIES_RATICATE},
  {63, 65, SPECIES_AUDINO},
  {63, 65, SPECIES_MUK},
  {63, 65, SPECIES_MUK},
  {63, 65, SPECIES_WEEZING},
  {63, 65, SPECIES_LIEPARD},
  {63, 65, SPECIES_ARCANINE},
  {63, 65, SPECIES_ARCANINE},
  {63, 65, SPECIES_SABLEYE},
  {63, 65, SPECIES_SABLEYE},
  {63, 65, SPECIES_CHIMECHO},
  {63, 65, SPECIES_CHIMECHO},
};

static const struct WildPokemonInfo gPokemonMansion1F_LandMonsInfoDay = {7, gPokemonMansion1F_LandMonsDay};

static const struct WildPokemon gPokemonMansion1F_LandMonsNight[] = 
{
  {63, 65, SPECIES_RATICATE_A},
  {63, 65, SPECIES_AUDINO},
  {63, 65, SPECIES_MUK_A},
  {63, 65, SPECIES_MUK_A},
  {63, 65, SPECIES_WEEZING_G},
  {63, 65, SPECIES_LIEPARD},
  {63, 65, SPECIES_NINETALES},
  {63, 65, SPECIES_NINETALES},
  {63, 65, SPECIES_SABLEYE},
  {63, 65, SPECIES_SABLEYE},
  {63, 65, SPECIES_CHIMECHO},
  {63, 65, SPECIES_CHIMECHO},
};

static const struct WildPokemonInfo gPokemonMansion1F_LandMonsInfoNight = {7, gPokemonMansion1F_LandMonsNight};

static const struct WildPokemon gPokemonMansion2F_LandMonsDay[] = 
{
  {63, 65, SPECIES_GUMSHOOS},
  {63, 65, SPECIES_GARBODOR},
  {63, 65, SPECIES_WEEZING},
  {63, 65, SPECIES_SWALOT},
  {63, 65, SPECIES_HEATMOR},
  {63, 65, SPECIES_SALAZZLE},
  {63, 65, SPECIES_HOUNDOOM},
  {63, 65, SPECIES_HOUNDOOM},
  {63, 65, SPECIES_BANETTE},
  {63, 65, SPECIES_BANETTE},
  {63, 65, SPECIES_CHIMECHO},
  {63, 65, SPECIES_CHIMECHO},
};

static const struct WildPokemonInfo gPokemonMansion2F_LandMonsInfoDay = {7, gPokemonMansion2F_LandMonsDay};

static const struct WildPokemon gPokemonMansion2F_LandMonsNight[] = 
{
  {63, 65, SPECIES_OBSTAGOON},
  {63, 65, SPECIES_GARBODOR},
  {63, 65, SPECIES_WEEZING_G},
  {63, 65, SPECIES_SWALOT},
  {63, 65, SPECIES_HEATMOR},
  {63, 65, SPECIES_SALAZZLE},
  {63, 65, SPECIES_NINETALES},
  {63, 65, SPECIES_NINETALES},
  {63, 65, SPECIES_BANETTE},
  {63, 65, SPECIES_BANETTE},
  {63, 65, SPECIES_CHIMECHO},
  {63, 65, SPECIES_CHIMECHO},
};

static const struct WildPokemonInfo gPokemonMansion2F_LandMonsInfoNight = {7, gPokemonMansion2F_LandMonsNight};

static const struct WildPokemon gPokemonMansion3F_LandMonsDay[] = 
{
  {63, 65, SPECIES_BEWEAR},
  {63, 65, SPECIES_SEVIPER},
  {63, 65, SPECIES_ARIADOS},
  {63, 65, SPECIES_ARIADOS},
  {63, 65, SPECIES_RAPIDASH},
  {63, 65, SPECIES_SKUNTANK},
  {63, 65, SPECIES_ARMAROUGE},
  {63, 65, SPECIES_ARMAROUGE},
  {63, 65, SPECIES_KROOKODILE},
  {63, 65, SPECIES_KROOKODILE},
  {63, 65, SPECIES_CHIMECHO},
  {63, 65, SPECIES_CHIMECHO},
};

static const struct WildPokemonInfo gPokemonMansion3F_LandMonsInfoDay = {7, gPokemonMansion3F_LandMonsDay};

static const struct WildPokemon gPokemonMansion3F_LandMonsNight[] = 
{
  {63, 65, SPECIES_KOMALA},
  {63, 65, SPECIES_SEVIPER},
  {63, 65, SPECIES_ARIADOS},
  {63, 65, SPECIES_ARIADOS},
  {63, 65, SPECIES_RAPIDASH_G},
  {63, 65, SPECIES_SKUNTANK},
  {63, 65, SPECIES_CERULEDGE},
  {63, 65, SPECIES_CERULEDGE},
  {63, 65, SPECIES_KROOKODILE},
  {63, 65, SPECIES_KROOKODILE},
  {63, 65, SPECIES_CHIMECHO},
  {63, 65, SPECIES_CHIMECHO},
};

static const struct WildPokemonInfo gPokemonMansion3F_LandMonsInfoNight = {7, gPokemonMansion3F_LandMonsNight};

static const struct WildPokemon gPokemonMansionB1F_LandMonsDay[] = 
{
  {63, 65, SPECIES_RATICATE},
  {63, 65, SPECIES_GARBODOR},
  {63, 65, SPECIES_ARIADOS},
  {63, 65, SPECIES_ARIADOS},
  {63, 65, SPECIES_MAGMAR},
  {63, 65, SPECIES_MIGHTYENA},
  {63, 65, SPECIES_ARCANINE},
  {63, 65, SPECIES_ARCANINE},
  {63, 65, SPECIES_BANETTE},
  {63, 65, SPECIES_BANETTE},
  {63, 65, SPECIES_CHIMECHO},
  {63, 65, SPECIES_CHIMECHO},
};

static const struct WildPokemonInfo gPokemonMansionB1F_LandMonsInfoDay = {7, gPokemonMansionB1F_LandMonsDay};

static const struct WildPokemon gPokemonMansionB1F_LandMonsNight[] = 
{
  {63, 65, SPECIES_RATICATE_A},
  {63, 65, SPECIES_GARBODOR},
  {63, 65, SPECIES_ARIADOS},
  {63, 65, SPECIES_ARIADOS},
  {63, 65, SPECIES_MAGMAR},
  {63, 65, SPECIES_MIGHTYENA},
  {63, 65, SPECIES_NINETALES},
  {63, 65, SPECIES_NINETALES},
  {63, 65, SPECIES_BANETTE},
  {63, 65, SPECIES_BANETTE},
  {63, 65, SPECIES_CHIMECHO},
  {63, 65, SPECIES_CHIMECHO},
};

static const struct WildPokemonInfo gPokemonMansionB1F_LandMonsInfoNight = {7, gPokemonMansionB1F_LandMonsNight};

static const struct WildPokemon gPowerPlant_LandMonsDay[] = 
{
  {63, 65, SPECIES_MAGNETON},
  {63, 65, SPECIES_ELECTRODE},
  {63, 65, SPECIES_ZEBSTRIKA},
  {63, 65, SPECIES_EELEKTROSS},
  {63, 65, SPECIES_AMPHAROS},
  {63, 65, SPECIES_AMPHAROS},
  {63, 65, SPECIES_DEDENNE},
  {63, 65, SPECIES_DEDENNE},
  {63, 65, SPECIES_ELECTABUZZ},
  {63, 65, SPECIES_ELECTABUZZ},
  {63, 65, SPECIES_ELECTABUZZ},
  {63, 65, SPECIES_ELECTABUZZ},
};

static const struct WildPokemonInfo gPowerPlant_LandMonsInfoDay = {7, gPowerPlant_LandMonsDay};

static const struct WildPokemon gPowerPlant_LandMonsNight[] = 
{
  {63, 65, SPECIES_MAGNETON},
  {63, 65, SPECIES_ELECTRODE},
  {63, 65, SPECIES_MANECTRIC},
  {63, 65, SPECIES_VIKAVOLT},
  {63, 65, SPECIES_AMPHAROS},
  {63, 65, SPECIES_AMPHAROS},
  {63, 65, SPECIES_TOGEDEMARU},
  {63, 65, SPECIES_TOGEDEMARU},
  {63, 65, SPECIES_ELECTABUZZ},
  {63, 65, SPECIES_ELECTABUZZ},
  {63, 65, SPECIES_ELECTABUZZ},
  {63, 65, SPECIES_ELECTABUZZ},
};

static const struct WildPokemonInfo gPowerPlant_LandMonsInfoNight = {7, gPowerPlant_LandMonsNight};

static const struct WildPokemon gCeruleanCave1F_LandMonsDay[] = 
{
  {68, 70, SPECIES_PARASECT},
  {68, 70, SPECIES_GOLBAT},
  {68, 70, SPECIES_MACHAMP},
  {68, 70, SPECIES_MACHAMP},
  {68, 70, SPECIES_MAGNETON},
  {68, 70, SPECIES_MAGNETON},
  {68, 70, SPECIES_SEISMITOAD},
  {68, 70, SPECIES_SEISMITOAD},
  {68, 70, SPECIES_DURALUDON},
  {68, 70, SPECIES_DURALUDON},
  {68, 70, SPECIES_TYPE_NULL},
  {68, 70, SPECIES_TYPE_NULL},
};

static const struct WildPokemonInfo gCeruleanCave1F_LandMonsInfoDay = {7, gCeruleanCave1F_LandMonsDay};

static const struct WildPokemon gCeruleanCave1F_LandMonsNight[] = 
{
  {68, 70, SPECIES_PARASECT},
  {68, 70, SPECIES_GOLBAT},
  {68, 70, SPECIES_CONKELDURR},
  {68, 70, SPECIES_CONKELDURR},
  {68, 70, SPECIES_MAGNETON},
  {68, 70, SPECIES_MAGNETON},
  {68, 70, SPECIES_SEISMITOAD},
  {68, 70, SPECIES_SEISMITOAD},
  {68, 70, SPECIES_DURALUDON},
  {68, 70, SPECIES_DURALUDON},
  {68, 70, SPECIES_TYPE_NULL},
  {68, 70, SPECIES_TYPE_NULL},
};

static const struct WildPokemonInfo gCeruleanCave1F_LandMonsInfoNight = {7, gCeruleanCave1F_LandMonsNight};

static const struct WildPokemon gCeruleanCave1F_SurfMons[] = 
{
  {56, 58, SPECIES_SEISMITOAD},
  {56, 58, SPECIES_GOLDUCK},
  {56, 58, SPECIES_CRAWDAUNT},
  {56, 58, SPECIES_KINGLER},
  {56, 58, SPECIES_KINGLER},
};

static const struct WildPokemonInfo gCeruleanCave1F_SurfMonsInfo = {5, gCeruleanCave1F_SurfMons};

static const struct WildPokemon gCeruleanCave1F_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_STARYU},
  {27, 29, SPECIES_CARVANHA},
  {27, 29, SPECIES_PYUKUMUKU},
  {27, 29, SPECIES_KRABBY},
  {53, 55, SPECIES_SEISMITOAD},
  {53, 55, SPECIES_POLIWHIRL},
  {53, 55, SPECIES_CRAWDAUNT},
  {53, 55, SPECIES_CRAWDAUNT},
  {53, 55, SPECIES_CRAWDAUNT},
};

static const struct WildPokemonInfo gCeruleanCave1F_FishingMonsInfo = {5, gCeruleanCave1F_FishingMons};

static const struct WildPokemon gCeruleanCave2F_LandMonsDay[] = 
{
  {68, 70, SPECIES_BRUTEBONNET},
  {68, 70, SPECIES_GREATTUSK},
  {68, 70, SPECIES_PRIMEAPE},
  {68, 70, SPECIES_PRIMEAPE},
  {68, 70, SPECIES_GREATTUSK},
  {68, 70, SPECIES_AUDINO},
  {68, 70, SPECIES_ALAKAZAM},
  {68, 70, SPECIES_ALAKAZAM},
  {68, 70, SPECIES_DURALUDON},
  {68, 70, SPECIES_DURALUDON},
  {68, 70, SPECIES_TYPE_NULL},
  {68, 70, SPECIES_TYPE_NULL},
};

static const struct WildPokemonInfo gCeruleanCave2F_LandMonsInfoDay = {7, gCeruleanCave2F_LandMonsDay};

static const struct WildPokemon gCeruleanCave2F_LandMonsNight[] = 
{
  {68, 70, SPECIES_BRUTEBONNET},
  {68, 70, SPECIES_GREATTUSK},
  {68, 70, SPECIES_PANGORO},
  {68, 70, SPECIES_PANGORO},
  {68, 70, SPECIES_GREATTUSK},
  {68, 70, SPECIES_AUDINO},
  {68, 70, SPECIES_REUNICLUS},
  {68, 70, SPECIES_REUNICLUS},
  {68, 70, SPECIES_DURALUDON},
  {68, 70, SPECIES_DURALUDON},
  {68, 70, SPECIES_TYPE_NULL},
  {68, 70, SPECIES_TYPE_NULL},
};

static const struct WildPokemonInfo gCeruleanCave2F_LandMonsInfoNight = {7, gCeruleanCave2F_LandMonsNight};

static const struct WildPokemon gCeruleanCaveB1F_LandMonsDay[] = 
{
  {68, 70, SPECIES_IRONTREADS},
  {68, 70, SPECIES_NOIVERN},
  {68, 70, SPECIES_MEDICHAM},
  {68, 70, SPECIES_MEDICHAM},
  {68, 70, SPECIES_LOPUNNY},
  {68, 70, SPECIES_IRONTREADS},
  {68, 70, SPECIES_LOPUNNY},
  {68, 70, SPECIES_GARDEVOIR},
  {68, 70, SPECIES_EXCADRILL},
  {68, 70, SPECIES_EXCADRILL},
  {68, 70, SPECIES_TYPE_NULL},
  {68, 70, SPECIES_TYPE_NULL},
};

static const struct WildPokemonInfo gCeruleanCaveB1F_LandMonsInfoDay = {7, gCeruleanCaveB1F_LandMonsDay};

static const struct WildPokemon gCeruleanCaveB1F_LandMonsNight[] = 
{
  {68, 70, SPECIES_IRONTREADS},
  {68, 70, SPECIES_NOIVERN},
  {68, 70, SPECIES_TOXICROAK},
  {68, 70, SPECIES_TOXICROAK},
  {68, 70, SPECIES_LOPUNNY},
  {68, 70, SPECIES_IRONTREADS},
  {68, 70, SPECIES_LOPUNNY},
  {68, 70, SPECIES_GARDEVOIR},
  {68, 70, SPECIES_EXCADRILL},
  {68, 70, SPECIES_EXCADRILL},
  {68, 70, SPECIES_TYPE_NULL},
  {68, 70, SPECIES_TYPE_NULL},
};

static const struct WildPokemonInfo gCeruleanCaveB1F_LandMonsInfoNight = {7, gCeruleanCaveB1F_LandMonsNight};

static const struct WildPokemon gCeruleanCaveB1F_SurfMons[] = 
{
  {56, 58, SPECIES_SHARPEDO},
  {56, 58, SPECIES_SLOWBRO},
  {56, 58, SPECIES_TOXAPEX},
  {56, 58, SPECIES_TOXAPEX},
  {56, 58, SPECIES_MILOTIC},
};

static const struct WildPokemonInfo gCeruleanCaveB1F_SurfMonsInfo = {5, gCeruleanCaveB1F_SurfMons};

static const struct WildPokemon gCeruleanCaveB1F_FishingMons[] = 
{
  {2, 4, SPECIES_FEEBAS},
  {2, 4, SPECIES_MAREANIE},
  {27, 29, SPECIES_CORPHISH},
  {27, 29, SPECIES_KRABBY},
  {27, 29, SPECIES_MAREANIE},
  {53, 55, SPECIES_POLIWRATH},
  {53, 55, SPECIES_CRAWDAUNT},
  {53, 55, SPECIES_SHARPEDO},
  {53, 55, SPECIES_GYARADOS},
  {53, 55, SPECIES_GYARADOS},
};

static const struct WildPokemonInfo gCeruleanCaveB1F_FishingMonsInfo = {5, gCeruleanCaveB1F_FishingMons};

static const struct WildPokemon gRoute23_LandMonsDay[] = 
{
  {33, 35, SPECIES_PRIMEAPE},
  {33, 35, SPECIES_FEAROW},
  {33, 35, SPECIES_SIMISAGE},
  {33, 35, SPECIES_SIMISEAR},
  {33, 35, SPECIES_SIMIPOUR},
  {33, 35, SPECIES_SIMIPOUR},
  {33, 35, SPECIES_SEVIPER},
  {33, 35, SPECIES_SEVIPER},
  {33, 35, SPECIES_GOLBAT},
  {33, 35, SPECIES_GOLBAT},
  {33, 35, SPECIES_STARAPTOR},
  {33, 35, SPECIES_STARAPTOR},
};

static const struct WildPokemonInfo gRoute23_LandMonsInfoDay = {20, gRoute23_LandMonsDay};

static const struct WildPokemon gRoute23_LandMonsNight[] = 
{
  {33, 35, SPECIES_PRIMEAPE},
  {33, 35, SPECIES_FEAROW},
  {33, 35, SPECIES_SIMISAGE},
  {33, 35, SPECIES_SIMISEAR},
  {33, 35, SPECIES_SIMIPOUR},
  {33, 35, SPECIES_SIMIPOUR},
  {33, 35, SPECIES_SEVIPER},
  {33, 35, SPECIES_SEVIPER},
  {33, 35, SPECIES_GOLBAT},
  {33, 35, SPECIES_GOLBAT},
  {33, 35, SPECIES_STARAPTOR},
  {33, 35, SPECIES_STARAPTOR},
};

static const struct WildPokemonInfo gRoute23_LandMonsInfoNight = {20, gRoute23_LandMonsNight};

static const struct WildPokemon gRoute23_SurfMons[] = 
{
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
  {56, 58, SPECIES_PSYDUCK},
};

static const struct WildPokemonInfo gRoute23_SurfMonsInfo = {5, gRoute23_SurfMons};

static const struct WildPokemon gRoute23_FishingMons[] = 
{
  {2, 4, SPECIES_MAGIKARP},
  {2, 4, SPECIES_MAGIKARP},
  {27, 29, SPECIES_POLIWAG},
  {27, 29, SPECIES_GOLDEEN},
  {27, 29, SPECIES_MAGIKARP},
  {53, 55, SPECIES_POLIWAG},
  {53, 55, SPECIES_PSYDUCK},
  {53, 55, SPECIES_POLIWHIRL},
  {53, 55, SPECIES_GYARADOS},
  {53, 55, SPECIES_GYARADOS},
};

static const struct WildPokemonInfo gRoute23_FishingMonsInfo = {5, gRoute23_FishingMons};

static const struct WildPokemon gVictoryRoad1F_LandMonsDay[] = 
{
  {80, 82, SPECIES_IRONVALIANT},
  {80, 82, SPECIES_METAGROSS},
  {80, 82, SPECIES_GOODRA},
  {80, 82, SPECIES_STEELIX},
  {80, 82, SPECIES_AUDINO},
  {80, 82, SPECIES_SALAMENCE},
  {80, 82, SPECIES_VOLCARONA},
  {80, 82, SPECIES_AEGISLASH},
  {80, 82, SPECIES_MAROWAK},
  {80, 82, SPECIES_SALAMENCE},
  {80, 82, SPECIES_METAGROSS},
  {80, 82, SPECIES_SALAMENCE},
};

static const struct WildPokemonInfo gVictoryRoad1F_LandMonsInfoDay = {7, gVictoryRoad1F_LandMonsDay};

static const struct WildPokemon gVictoryRoad1F_LandMonsNight[] = 
{
  {80, 82, SPECIES_FLUTTERMANE},
  {80, 82, SPECIES_METAGROSS},
  {80, 82, SPECIES_GOODRA_H},
  {80, 82, SPECIES_STEELIX},
  {80, 82, SPECIES_AUDINO},
  {80, 82, SPECIES_SALAMENCE},
  {80, 82, SPECIES_VOLCARONA},
  {80, 82, SPECIES_AEGISLASH},
  {80, 82, SPECIES_MAROWAK_A},
  {80, 82, SPECIES_SALAMENCE},
  {80, 82, SPECIES_METAGROSS},
  {80, 82, SPECIES_SALAMENCE},
};

static const struct WildPokemonInfo gVictoryRoad1F_LandMonsInfoNight = {7, gVictoryRoad1F_LandMonsNight};

static const struct WildPokemon gVictoryRoad2F_LandMonsDay[] = 
{
  {80, 82, SPECIES_BAXCALIBUR},
  {80, 82, SPECIES_GARCHOMP},
  {80, 82, SPECIES_TYRANITAR},
  {80, 82, SPECIES_MACHAMP},
  {80, 82, SPECIES_MEDICHAM},
  {80, 82, SPECIES_LUCARIO},
  {80, 82, SPECIES_LUCARIO},
  {80, 82, SPECIES_MEDICHAM},
  {80, 82, SPECIES_KOMMO_O},
  {80, 82, SPECIES_KOMMO_O},
  {80, 82, SPECIES_BAXCALIBUR},
  {80, 82, SPECIES_TYRANITAR},
};

static const struct WildPokemonInfo gVictoryRoad2F_LandMonsInfoDay = {7, gVictoryRoad2F_LandMonsDay};

static const struct WildPokemon gVictoryRoad2F_LandMonsNight[] = 
{
  {80, 82, SPECIES_BAXCALIBUR},
  {80, 82, SPECIES_GARCHOMP},
  {80, 82, SPECIES_TYRANITAR},
  {80, 82, SPECIES_MACHAMP},
  {80, 82, SPECIES_MEDICHAM},
  {80, 82, SPECIES_LUCARIO},
  {80, 82, SPECIES_LUCARIO},
  {80, 82, SPECIES_MEDICHAM},
  {80, 82, SPECIES_KOMMO_O},
  {80, 82, SPECIES_KOMMO_O},
  {80, 82, SPECIES_BAXCALIBUR},
  {80, 82, SPECIES_TYRANITAR},
};

static const struct WildPokemonInfo gVictoryRoad2F_LandMonsInfoNight = {7, gVictoryRoad2F_LandMonsNight};

static const struct WildPokemon gVictoryRoad3F_LandMonsDay[] = 
{
  {80, 82, SPECIES_DRAGONITE},
  {80, 82, SPECIES_IRONBUNDLE},
  {80, 82, SPECIES_DRAGAPULT},
  {80, 82, SPECIES_MAWILE},
  {80, 82, SPECIES_MAWILE},
  {80, 82, SPECIES_TOXTRICITY},
  {80, 82, SPECIES_SCIZOR},
  {80, 82, SPECIES_AERODACTYL},
  {80, 82, SPECIES_AERODACTYL},
  {80, 82, SPECIES_DRAGAPULT},
  {80, 82, SPECIES_IRONBUNDLE},
  {80, 82, SPECIES_DRAGONITE},
};

static const struct WildPokemonInfo gVictoryRoad3F_LandMonsInfoDay = {7, gVictoryRoad3F_LandMonsDay};

static const struct WildPokemon gVictoryRoad3F_LandMonsNight[] = 
{
  {80, 82, SPECIES_DRAGONITE},
  {80, 82, SPECIES_ROARINGMOON},
  {80, 82, SPECIES_DRAGAPULT},
  {80, 82, SPECIES_MAWILE},
  {80, 82, SPECIES_MAWILE},
  {80, 82, SPECIES_TOXTRICITY},
  {80, 82, SPECIES_SCIZOR},
  {80, 82, SPECIES_AERODACTYL},
  {80, 82, SPECIES_AERODACTYL},
  {80, 82, SPECIES_DRAGAPULT},
  {80, 82, SPECIES_ROARINGMOON},
  {80, 82, SPECIES_DRAGONITE},
};

static const struct WildPokemonInfo gVictoryRoad3F_LandMonsInfoNight = {7, gVictoryRoad3F_LandMonsNight};

static const struct WildPokemon gKindleRoad_LandMons[] =
{
	{83, 85, SPECIES_ABSOL},
	{83, 85, SPECIES_SMEARGLE},
	{83, 85, SPECIES_ALCREMIE_STRAWBERRY},
	{83, 85, SPECIES_ALCREMIE_STRAWBERRY},
	{83, 85, SPECIES_CENTISKORCH},
	{83, 85, SPECIES_CENTISKORCH},
	{83, 85, SPECIES_GARDEVOIR}, //GRIMMSNARL FOR NIGHT
	{83, 85, SPECIES_GARDEVOIR},
	{83, 85, SPECIES_SEVIPER}, //EELEKTROSS AT NIGHT
	{83, 85, SPECIES_SEVIPER},
	{83, 85, SPECIES_SEVIPER},
	{83, 85, SPECIES_SEVIPER},
};

static const struct WildPokemonInfo gKindleRoad_LandMonsInfo = {18, gKindleRoad_LandMons};

static const struct WildPokemon gKindleRoad_LandMonsNight[] =
{
	{83, 85, SPECIES_ABSOL},
	{83, 85, SPECIES_SMEARGLE},
	{83, 85, SPECIES_ALCREMIE_STRAWBERRY},
	{83, 85, SPECIES_ALCREMIE_STRAWBERRY},
	{83, 85, SPECIES_CENTISKORCH_S},
	{83, 85, SPECIES_CENTISKORCH_S},
	{83, 85, SPECIES_GRIMMSNARL}, 
	{83, 85, SPECIES_GRIMMSNARL},
	{83, 85, SPECIES_EELEKTROSS}, 
	{83, 85, SPECIES_EELEKTROSS},
	{83, 85, SPECIES_EELEKTROSS},
	{83, 85, SPECIES_EELEKTROSS},
};

static const struct WildPokemonInfo gKindleRoad_LandMonsInfoNight = {18, gKindleRoad_LandMonsNight};


static const struct WildPokemon gKindleRoad_SurfMons[] = 
{
	{60, 65, SPECIES_MANTYKE_S},
	{83, 85, SPECIES_PYUKUMUKU},
	{83, 85, SPECIES_CRAMORANT},
	{83, 85, SPECIES_MANTINE_S},
	{83, 85, SPECIES_MANTINE_S},
};

static const struct WildPokemonInfo gKindleRoad_SurfMonsInfo = {5, gKindleRoad_SurfMons};

static const struct WildPokemon gKindleRoad_FishingMons[] =
{
	{83, 85, SPECIES_FEEBAS},
	{83, 85, SPECIES_REMORAID},
	{83, 85, SPECIES_CORSOLA_G},
	{83, 85, SPECIES_QWILFISH},
	{83, 85, SPECIES_QWILFISH},
	{83, 85, SPECIES_LUVDISC},
	{83, 85, SPECIES_LUVDISC},
	{83, 85, SPECIES_GOREBYSS},
	{83, 85, SPECIES_HUNTAIL},
	{83, 85, SPECIES_HUNTAIL},
};

static const struct WildPokemonInfo gKindleRoad_FishingMonsInfo = {5, gKindleRoad_FishingMons};

static const struct WildPokemon gTreasureBeach_SurfMons[] = 
{
	{60, 65, SPECIES_MANTYKE_S},
	{83, 85, SPECIES_BASCULEGION},
	{83, 85, SPECIES_BASCULEGION_F},
	{83, 85, SPECIES_MANTINE_S},
	{83, 85, SPECIES_MANTINE_S},
};

static const struct WildPokemonInfo gTreasureBeach_SurfMonsInfo = {5, gTreasureBeach_SurfMons};

static const struct WildPokemon gTreasureBeach_FishingMons[] =
{
	{60, 65, SPECIES_FEEBAS},
	{60, 65, SPECIES_REMORAID},
	{83, 85, SPECIES_CORSOLA_G},
	{60, 65, SPECIES_MANTYKE_S},
	{60, 65, SPECIES_MANTYKE_S},
	{83, 85, SPECIES_BASCULIN_RED},
	{83, 85, SPECIES_BASCULIN_RED},
	{83, 85, SPECIES_GOLISOPOD},
	{83, 85, SPECIES_ARAQUANID},
	{83, 85, SPECIES_ARAQUANID},
};

static const struct WildPokemonInfo gTreasureBeach_FishingMonsInfo = {5, gTreasureBeach_FishingMons};

static const struct WildPokemon MtEmberExterior_LandMonsNight[] =
{
	{60, 65, SPECIES_DODUO_S},
	{83, 85, SPECIES_COALOSSAL},
	{83, 85, SPECIES_DARMANITAN},
	{83, 85, SPECIES_DARMANITAN},
	{83, 85, SPECIES_HOUNDOOM},
	{83, 85, SPECIES_DODRIO_S},
	{83, 85, SPECIES_ARCANINE_H}, 
	{83, 85, SPECIES_ARCANINE_H},
	{83, 85, SPECIES_VOLCARONA}, 
	{83, 85, SPECIES_VOLCARONA},
	{83, 85, SPECIES_VOLCARONA},
	{83, 85, SPECIES_VOLCARONA},
};

static const struct WildPokemonInfo MtEmberExterior_LandMonsInfoNight = {15, MtEmberExterior_LandMonsNight};

static const struct WildPokemon MtEmberExterior_LandMonsDay[] =
{
	{60, 65, SPECIES_DODUO_S},
	{83, 85, SPECIES_COALOSSAL},
	{83, 85, SPECIES_DARMANITAN},
	{83, 85, SPECIES_DARMANITAN},
	{83, 85, SPECIES_PYROAR},
	{83, 85, SPECIES_DODRIO_S},
	{83, 85, SPECIES_ARCANINE}, 
	{83, 85, SPECIES_ARCANINE},
	{83, 85, SPECIES_VOLCARONA}, 
	{83, 85, SPECIES_VOLCARONA},
	{83, 85, SPECIES_VOLCARONA},
	{83, 85, SPECIES_VOLCARONA},
};

static const struct WildPokemonInfo MtEmberExterior_LandMonsInfoDay = {15, MtEmberExterior_LandMonsDay};

static const struct WildPokemon MtEmber1F_LandMonsNight[] =
{
	{85, 85, SPECIES_TORKOAL},
	{84, 85, SPECIES_MAGCARGO},
	{84, 85, SPECIES_NINETALES},
	{84, 85, SPECIES_NINETALES},
	{84, 85, SPECIES_PYROAR},
	{83, 85, SPECIES_PYROAR},
	{83, 85, SPECIES_DARMANITAN}, 
	{83, 85, SPECIES_DARMANITAN},
	{83, 85, SPECIES_ARCANINE_H}, 
	{83, 85, SPECIES_ARCANINE_H},
	{83, 85, SPECIES_ARCANINE_H},
	{83, 85, SPECIES_ARCANINE_H},
};

static const struct WildPokemonInfo MtEmber1F_LandMonsInfoNight = {5, MtEmber1F_LandMonsNight};

static const struct WildPokemon TreasureBeach_LandMonsNight[] =
{
	{85, 85, SPECIES_SIRFETCHD},
	{84, 85, SPECIES_SIRFETCHD},
	{84, 85, SPECIES_LILLIGANT_H},
	{84, 85, SPECIES_LILLIGANT_H},
	{84, 85, SPECIES_SANDACONDA},
	{83, 85, SPECIES_SANDACONDA},
	{83, 85, SPECIES_KLEFKI}, 
	{83, 85, SPECIES_KLEFKI},
	{83, 85, SPECIES_CRAWDAUNT}, 
	{83, 85, SPECIES_CRAWDAUNT},
	{83, 85, SPECIES_MELTAN},
	{83, 85, SPECIES_MELTAN},
};

static const struct WildPokemonInfo TreasureBeach_LandMonsInfoNight = {9, TreasureBeach_LandMonsNight};

static const struct WildPokemon TreasureBeach_LandMonsDay[] =
{
	{85, 85, SPECIES_SIRFETCHD},
	{84, 85, SPECIES_SIRFETCHD},
	{84, 85, SPECIES_LILLIGANT},
	{84, 85, SPECIES_LILLIGANT},
	{84, 85, SPECIES_FLYGON},
	{83, 85, SPECIES_FLYGON},
	{83, 85, SPECIES_KLEFKI}, 
	{83, 85, SPECIES_KLEFKI},
	{83, 85, SPECIES_KINGLER}, 
	{83, 85, SPECIES_KINGLER},
	{83, 85, SPECIES_MELTAN},
	{83, 85, SPECIES_MELTAN},
};

static const struct WildPokemonInfo TreasureBeach_LandMonsInfoDay = {9, TreasureBeach_LandMonsDay};

static const struct WildPokemon gRockTunnel_PostGameNight[] =
{
	{85, 85, SPECIES_URSALUNA},
	{84, 85, SPECIES_NOIBAT_S},
	{84, 85, SPECIES_AGGRON},
	{84, 85, SPECIES_AGGRON},
	{84, 85, SPECIES_STUNFISK},
	{83, 85, SPECIES_STUNFISK},
	{83, 85, SPECIES_ARCANINE_H}, 
	{83, 85, SPECIES_ARCANINE_H},
	{83, 85, SPECIES_IRONTREADS}, 
	{83, 85, SPECIES_IRONTREADS},
	{83, 85, SPECIES_MELTAN},
	{83, 85, SPECIES_MELTAN},
};

static const struct WildPokemonInfo gRockTunnel_PostGameInfoNight = {4, gRockTunnel_PostGameNight};

static const struct WildPokemon gRockTunnel_SmashDay[] =
{
	{85, 85, SPECIES_GOLEM},
	{84, 85, SPECIES_GOLEM_A},
	{84, 85, SPECIES_PROBOPASS},
	{84, 85, SPECIES_PROBOPASS},
	{84, 85, SPECIES_CARBINK},
};

static const struct WildPokemonInfo gRockTunnel_SmashInfoDay = {4, gRockTunnel_SmashDay};


static const struct WildPokemon gRockTunnel_PostGameDay[] =
{
	{85, 85, SPECIES_URSALUNA},
	{84, 85, SPECIES_NOIBAT_S},
	{84, 85, SPECIES_COPPERAJAH},
	{84, 85, SPECIES_COPPERAJAH},
	{84, 85, SPECIES_STUNFISK_G},
	{83, 85, SPECIES_STUNFISK_G},
	{83, 85, SPECIES_ARCANINE_H}, 
	{83, 85, SPECIES_ARCANINE_H},
	{83, 85, SPECIES_GREATTUSK}, 
	{83, 85, SPECIES_GREATTUSK},
	{83, 85, SPECIES_MELTAN},
	{83, 85, SPECIES_MELTAN},
};

static const struct WildPokemonInfo gRockTunnel_PostGameInfoDay = {4, gRockTunnel_PostGameDay};

static const struct WildPokemon gCapeBrink_Night[] =
{
	{85, 85, SPECIES_ELECTRODE_H},
	{84, 85, SPECIES_BLITZLE_S},
	{84, 85, SPECIES_SHIFTRY},
	{84, 85, SPECIES_SHIFTRY},
	{84, 85, SPECIES_SLOWBRO},
	{83, 85, SPECIES_SLOWBRO},
	{83, 85, SPECIES_GOLISOPOD}, 
	{83, 85, SPECIES_GOLISOPOD},
	{83, 85, SPECIES_GRAPPLOCT}, 
	{83, 85, SPECIES_GRAPPLOCT},
	{83, 85, SPECIES_SCYTHER},
	{83, 85, SPECIES_SCYTHER},
};

static const struct WildPokemonInfo gCapeBrink_InfoNight = {4, gCapeBrink_Night};

static const struct WildPokemon gCapeBrink_Day[] =
{
	{85, 85, SPECIES_ELECTRODE_H},
	{84, 85, SPECIES_BLITZLE_S},
	{84, 85, SPECIES_LILLIGANT_H},
	{84, 85, SPECIES_LILLIGANT_H},
	{84, 85, SPECIES_SLOWBRO_G},
	{83, 85, SPECIES_SLOWBRO_G},
	{83, 85, SPECIES_ARAQUANID}, 
	{83, 85, SPECIES_ARAQUANID},
	{83, 85, SPECIES_GRAPPLOCT}, 
	{83, 85, SPECIES_GRAPPLOCT},
	{83, 85, SPECIES_SCYTHER},
	{83, 85, SPECIES_SCYTHER},
};

static const struct WildPokemonInfo gCapeBrink_InfoDay = {4, gCapeBrink_Day};

static const struct WildPokemon gBondBridge_LandMonsNight[] =
{
	{85, 85, SPECIES_DECIDUEYE_H},
	{84, 85, SPECIES_SNEASEL_H},
	{84, 85, SPECIES_HATTERENE},
	{84, 85, SPECIES_HATTERENE},
	{84, 85, SPECIES_CRUSTLE},
	{83, 85, SPECIES_CRUSTLE},
	{83, 85, SPECIES_BRAVIARY_H}, 
	{83, 85, SPECIES_BRAVIARY_H},
	{83, 85, SPECIES_GLISCOR}, 
	{83, 85, SPECIES_GLISCOR},
	{83, 85, SPECIES_HAWLUCHA},
	{83, 85, SPECIES_HAWLUCHA},
};

static const struct WildPokemon gBondBridge_LandMonsDay[] =
{
	{85, 85, SPECIES_DECIDUEYE_H},
	{84, 85, SPECIES_SNEASEL_H},
	{84, 85, SPECIES_HATTERENE},
	{84, 85, SPECIES_HATTERENE},
	{84, 85, SPECIES_CRUSTLE},
	{83, 85, SPECIES_CRUSTLE},
	{83, 85, SPECIES_BRAVIARY_H}, 
	{83, 85, SPECIES_BRAVIARY_H},
	{83, 85, SPECIES_GLISCOR}, 
	{83, 85, SPECIES_GLISCOR},
	{83, 85, SPECIES_HAWLUCHA},
	{83, 85, SPECIES_HAWLUCHA},
};

static const struct WildPokemonInfo gBondBridge_LandMonsInfoNight = {4, gBondBridge_LandMonsNight};


static const struct WildPokemonInfo gBondBridge_LandMonsInfoDay = { 4, gBondBridge_LandMonsDay};

static const struct WildPokemon gBondBridge_SurfMons[] = 
{
	{60, 65, SPECIES_PELIPPER},
	{83, 85, SPECIES_SLOWKING},
	{83, 85, SPECIES_MANTINE_S},
	{83, 85, SPECIES_MILOTIC_S},
	{83, 85, SPECIES_MILOTIC_S},
};

static const struct WildPokemonInfo gBondBridge_SurfMonsInfo = {5, gBondBridge_SurfMons};

static const struct WildPokemon gBondBridge_FishingMons[] =
{
	{83, 85, SPECIES_FEEBAS},
	{83, 85, SPECIES_REMORAID},
	{83, 85, SPECIES_CLAWITZER},
	{83, 85, SPECIES_SHARPEDO},
	{83, 85, SPECIES_SHARPEDO},
	{83, 85, SPECIES_ALOMOMOLA},
	{83, 85, SPECIES_ALOMOMOLA},
	{83, 85, SPECIES_DHELMISE_S},
	{83, 85, SPECIES_DHELMISE_S},
	{83, 85, SPECIES_DHELMISE_S},
};

static const struct WildPokemonInfo gBondBridge_FishingMonsInfo = {5, gBondBridge_FishingMons};


static const struct WildPokemon gBerryForest_LandMonsDay[] =
{
	{85, 85, SPECIES_CARNIVINE_S},
	{84, 85, SPECIES_NYMBLE_S},
	{84, 85, SPECIES_DECIDUEYE_H},
	{84, 85, SPECIES_DECIDUEYE_H},
	{84, 85, SPECIES_PINSIR},
	{83, 85, SPECIES_PINSIR},
	{83, 85, SPECIES_INDEEDEE}, 
	{83, 85, SPECIES_INDEEDEE},
	{83, 85, SPECIES_ROSERADE}, 
	{83, 85, SPECIES_ROSERADE},
	{83, 85, SPECIES_DURANT},
	{83, 85, SPECIES_DURANT},
};


static const struct WildPokemonInfo gBerryForest_LandMonsInfoDay = {5, gBerryForest_LandMonsDay};

static const struct WildPokemon gBerryForest_LandMonsNight[] =
{
	{85, 85, SPECIES_CARNIVINE_S},
	{84, 85, SPECIES_NYMBLE_S},
	{84, 85, SPECIES_DECIDUEYE_H},
	{84, 85, SPECIES_DECIDUEYE_H},
	{84, 85, SPECIES_PINSIR},
	{83, 85, SPECIES_PINSIR},
	{83, 85, SPECIES_INDEEDEE_FEMALE}, 
	{83, 85, SPECIES_INDEEDEE_FEMALE},
	{83, 85, SPECIES_TSAREENA}, 
	{83, 85, SPECIES_TSAREENA},
	{83, 85, SPECIES_DURANT},
	{83, 85, SPECIES_DURANT},
};


static const struct WildPokemonInfo gBerryForest_LandMonsInfoNight = {5, gBerryForest_LandMonsNight};

static const struct WildPokemon gBerryForest_SurfMons[] = 
{
  {56, 58, SPECIES_ARAQUANID},
  {56, 58, SPECIES_GOLISOPOD},
  {56, 58, SPECIES_MASQUERAIN},
  {56, 58, SPECIES_MASQUERAIN},
  {56, 58, SPECIES_TENTACRUEL},
};

static const struct WildPokemonInfo gBerryForest_SurfMonsInfo = {5, gBerryForest_SurfMons};

static const struct WildPokemon gBerryForest_FishingMons[] =
{
	{83, 85, SPECIES_STARYU},
	{83, 85, SPECIES_CLAUNCHER_S},
	{83, 85, SPECIES_CORSOLA_G},
	{83, 85, SPECIES_FEEBAS_S},
	{83, 85, SPECIES_FEEBAS_S},
	{83, 85, SPECIES_SHARPEDO},
	{83, 85, SPECIES_SHARPEDO},
	{83, 85, SPECIES_LUVDISC},
	{83, 85, SPECIES_CRAWDAUNT},
	{83, 85, SPECIES_CRAWDAUNT},
};

static const struct WildPokemonInfo gBerryForest_FishingMonsInfo = {5, gBerryForest_FishingMons};

static const struct WildPokemon gCapeBrink_SurfMons[] = 
{
	{60, 65, SPECIES_ARAQUANID},
	{83, 85, SPECIES_SLOWBRO},
	{83, 85, SPECIES_CRAMORANT},
	{83, 85, SPECIES_BARBARACLE},
	{83, 85, SPECIES_BARBARACLE},
};

static const struct WildPokemonInfo gCapeBrink_SurfMonsInfo = {5, gCapeBrink_SurfMons};


static const struct WildPokemon gCapeBrink_FishingMons[] =
{
	{83, 85, SPECIES_FEEBAS},
	{83, 85, SPECIES_REMORAID},
	{83, 85, SPECIES_CORSOLA_G},
	{83, 85, SPECIES_BARRASKEWDA},
	{83, 85, SPECIES_BARRASKEWDA},
	{83, 85, SPECIES_LUVDISC},
	{83, 85, SPECIES_LUVDISC},
	{83, 85, SPECIES_WISHIWASHI},
	{83, 85, SPECIES_KINGLER},
	{83, 85, SPECIES_KINGLER},
};

static const struct WildPokemonInfo gCapeBrink_FishingMonsInfo = {5, gCapeBrink_FishingMons};


// static const struct WildPokemon gTwoIsland_SurfMons[] = 
// {
// 	{83, 85, SPECIES_MANTYKE_S},
// 	{83, 85, SPECIES_SLOWBRO_G},
// 	{83, 85, SPECIES_CRAMORANT},
// 	{83, 85, SPECIES_ALOMOMOLA},
// 	{83, 85, SPECIES_ALOMOMOLA},
// };

// static const struct WildPokemonInfo gTwoIsland_SurfMonsInfo = {5, gTwoIsland_SurfMons};


// static const struct WildPokemon gTwoIsland_FishingMons[] =
// {
// 	{83, 85, SPECIES_FEEBAS_S},
// 	{83, 85, SPECIES_CLAWITZER},
// 	{83, 85, SPECIES_CORSOLA_G},
// 	{83, 85, SPECIES_GOLISOPOD},
// 	{83, 85, SPECIES_GOLISOPOD},
// 	{83, 85, SPECIES_LUVDISC},
// 	{83, 85, SPECIES_LUVDISC},
// 	{83, 85, SPECIES_WISHIWASHI},
// 	{83, 85, SPECIES_KINGLER},
// 	{83, 85, SPECIES_KINGLER},
// };

// static const struct WildPokemonInfo gTwoIsland_FishingMonsInfo = {5, gTwoIsland_FishingMons};


static const struct WildPokemon gPkmnTower_PostGameLandMons[] =
{
	{85, 85, SPECIES_TEDDIURSA_S},
	{84, 85, SPECIES_ZOROARK_H},
	{84, 85, SPECIES_GENGAR},
	{84, 85, SPECIES_GENGAR},
	{84, 85, SPECIES_MIMIKYU},
	{83, 85, SPECIES_MIMIKYU},
	{83, 85, SPECIES_FLUTTERMANE}, 
	{83, 85, SPECIES_FLUTTERMANE},
	{83, 85, SPECIES_POLTEAGEIST}, 
	{83, 85, SPECIES_POLTEAGEIST},
	{83, 85, SPECIES_MIMIKYU},
	{83, 85, SPECIES_MIMIKYU},
};

static const struct WildPokemonInfo gPkmnTower_PostGameLandMonsInfo = {4, gPkmnTower_PostGameLandMons};

static const struct WildPokemon gPkmnTower_PostGameLandMons2[] =
{
	{85, 85, SPECIES_WISHIWASHI_SEVI},
	{84, 85, SPECIES_TYPHLOSION_H},
	{83, 85, SPECIES_FLUTTERMANE}, 
	{83, 85, SPECIES_FLUTTERMANE},
	{84, 85, SPECIES_SPIRITOMB},
	{83, 85, SPECIES_SPIRITOMB},
	{83, 85, SPECIES_DRAGAPULT}, 
	{83, 85, SPECIES_DRAGAPULT},
	{83, 85, SPECIES_CURSOLA}, 
	{83, 85, SPECIES_CURSOLA},
	{83, 85, SPECIES_SPIRITOMB},
	{83, 85, SPECIES_SPIRITOMB},
};

static const struct WildPokemonInfo gPkmnTower_PostGameLandMons2Info = {4, gPkmnTower_PostGameLandMons2};

// static const struct WildPokemon gNone_LandMons[] =
// {
// 	{85, 85, SPECIES_NONE},
// 	{84, 85, SPECIES_NONE},
// 	{84, 85, SPECIES_NONE},
// 	{84, 85, SPECIES_NONE},
// 	{84, 85, SPECIES_NONE},
// 	{83, 85, SPECIES_NONE},
// 	{83, 85, SPECIES_NONE}, 
// 	{83, 85, SPECIES_NONE},
// 	{83, 85, SPECIES_NONE}, 
// 	{83, 85, SPECIES_NONE},
// 	{83, 85, SPECIES_NONE},
// 	{83, 85, SPECIES_NONE},
// };

// static const struct WildPokemonInfo gNone_LandMonsInfo = {0, gNone_LandMons};

static const struct WildPokemon gNone_SurfMons[] = 
{
	{83, 85, SPECIES_NONE},
	{83, 85, SPECIES_NONE},
	{83, 85, SPECIES_NONE},
	{83, 85, SPECIES_NONE},
	{83, 85, SPECIES_NONE},
};
static const struct WildPokemonInfo gNone_SurfMonsInfo = {0, gNone_SurfMons};

static const struct WildPokemon gThreeIslandPort_Day[] =
{
	{85, 85, SPECIES_DUNSPARCE},
	{84, 85, SPECIES_CLAUNCHER_S},
	{84, 85, SPECIES_GOODRA_H},
	{84, 85, SPECIES_GOODRA_H},
	{84, 85, SPECIES_SAMUROTT_H},
	{83, 85, SPECIES_SAMUROTT_H},
	{83, 85, SPECIES_SANDACONDA}, 
	{83, 85, SPECIES_SANDACONDA},
	{83, 85, SPECIES_SMEARGLE}, 
	{83, 85, SPECIES_SMEARGLE},
	{83, 85, SPECIES_CORVIKNIGHT},
	{83, 85, SPECIES_CORVIKNIGHT},
};

static const struct WildPokemonInfo gThreeIslandPort_InfoDay = {4, gThreeIslandPort_Day};

const struct WildPokemonHeader gWildMonMorningHeaders[] =
{
	{
		.mapGroup = 0xFF,
		.mapNum = 0xFF,
		.landMonsInfo = NULL,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	}
};

const struct WildPokemonHeader gWildMonNewDaytimeHeaders[] =
{  {
    .mapGroup = MAP_GROUP(PALLET_TOWN),
    .mapNum = MAP_NUM(PALLET_TOWN),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gPalletTown_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gPalletTown_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_1),
    .mapNum = MAP_NUM(ROUTE_1),
    .landMonsInfo = &gRoute1_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(VIRIDIAN_CITY),
    .mapNum = MAP_NUM(VIRIDIAN_CITY),
    .landMonsInfo = &gViridianCity_LandMonsInfoDay,
    .waterMonsInfo = &gViridianCity_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gViridianCity_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_22),
    .mapNum = MAP_NUM(ROUTE_22),
    .landMonsInfo = &gRoute22_LandMonsInfoDay,
    .waterMonsInfo = &gRoute22_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute22_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_2),
    .mapNum = MAP_NUM(ROUTE_2),
    .landMonsInfo = &gRoute2_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(VIRIDIAN_FOREST),
    .mapNum = MAP_NUM(VIRIDIAN_FOREST),
    .landMonsInfo = &gViridianForest_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
    {
    .mapGroup = MAP_GROUP(VIRIDIAN_FOREST_2),
    .mapNum = MAP_NUM(VIRIDIAN_FOREST_2),
    .landMonsInfo = &gViridianForest2_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(DIGLETTS_CAVE_NORTH_ENTRANCE),
    .mapNum = MAP_NUM(DIGLETTS_CAVE_NORTH_ENTRANCE),
    .landMonsInfo = &gDiglettsCaveNorthEntrance_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(PEWTER_CITY),
    .mapNum = MAP_NUM(PEWTER_CITY),
    .landMonsInfo = &gPewterCity_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_3),
    .mapNum = MAP_NUM(ROUTE_3),
    .landMonsInfo = &gRoute3_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(MT_MOON_1F),
    .mapNum = MAP_NUM(MT_MOON_1F),
    .landMonsInfo = &gMtMoon1F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(MT_MOON_B1F),
    .mapNum = MAP_NUM(MT_MOON_B1F),
    .landMonsInfo = &gMtMoonB1F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(MT_MOON_B2F),
    .mapNum = MAP_NUM(MT_MOON_B2F),
    .landMonsInfo = &gMtMoonB2F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_4),
    .mapNum = MAP_NUM(ROUTE_4),
    .landMonsInfo = &gRoute4_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(CERULEAN_CITY),
    .mapNum = MAP_NUM(CERULEAN_CITY),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gCeruleanCity_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gCeruleanCity_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_24),
    .mapNum = MAP_NUM(ROUTE_24),
    .landMonsInfo = &gRoute24_LandMonsInfoDay,
    .waterMonsInfo = &gRoute24_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute24_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_25),
    .mapNum = MAP_NUM(ROUTE_25),
    .landMonsInfo = &gRoute25_LandMonsInfoDay,
    .waterMonsInfo = &gRoute25_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute25_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_5),
    .mapNum = MAP_NUM(ROUTE_5),
    .landMonsInfo = &gRoute5_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_6),
    .mapNum = MAP_NUM(ROUTE_6),
    .landMonsInfo = &gRoute6_LandMonsInfoDay,
    .waterMonsInfo = &gRoute6_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute6_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(VERMILION_CITY),
    .mapNum = MAP_NUM(VERMILION_CITY),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gVermilionCity_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gVermilionCity_FishingMonsInfo,
  },
    {
    .mapGroup = MAP_GROUP(SSANNE_EXTERIOR),
    .mapNum = MAP_NUM(SSANNE_EXTERIOR),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gSSAnne_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSSAnne_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_11),
    .mapNum = MAP_NUM(ROUTE_11),
    .landMonsInfo = &gRoute11_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute11_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(DIGLETTS_CAVE_B1F),
    .mapNum = MAP_NUM(DIGLETTS_CAVE_B1F),
    .landMonsInfo = &gDiglettsCaveB1F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_9),
    .mapNum = MAP_NUM(ROUTE_9),
    .landMonsInfo = &gRoute9_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_10),
    .mapNum = MAP_NUM(ROUTE_10),
    .landMonsInfo = &gRoute10_LandMonsInfoDay,
    .waterMonsInfo = &gRoute10_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute10_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROCK_TUNNEL_1F),
    .mapNum = MAP_NUM(ROCK_TUNNEL_1F),
    .landMonsInfo = &gRockTunnel1F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROCK_TUNNEL_B1F),
    .mapNum = MAP_NUM(ROCK_TUNNEL_B1F),
    .landMonsInfo = &gRockTunnelB1F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_7),
    .mapNum = MAP_NUM(ROUTE_7),
    .landMonsInfo = &gRoute7_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_8),
    .mapNum = MAP_NUM(ROUTE_8),
    .landMonsInfo = &gRoute8_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_TOWER_3F),
    .mapNum = MAP_NUM(POKEMON_TOWER_3F),
    .landMonsInfo = &gPokemonTower3F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_TOWER_4F),
    .mapNum = MAP_NUM(POKEMON_TOWER_4F),
    .landMonsInfo = &gPokemonTower4F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_TOWER_5F),
    .mapNum = MAP_NUM(POKEMON_TOWER_5F),
    .landMonsInfo = &gPokemonTower5F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_TOWER_6F),
    .mapNum = MAP_NUM(POKEMON_TOWER_6F),
    .landMonsInfo = &gPokemonTower6F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_TOWER_7F),
    .mapNum = MAP_NUM(POKEMON_TOWER_7F),
    .landMonsInfo = &gPokemonTower7F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_16),
    .mapNum = MAP_NUM(ROUTE_16),
    .landMonsInfo = &gRoute16_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_17),
    .mapNum = MAP_NUM(ROUTE_17),
    .landMonsInfo = &gRoute17_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_18),
    .mapNum = MAP_NUM(ROUTE_18),
    .landMonsInfo = &gRoute18_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_12),
    .mapNum = MAP_NUM(ROUTE_12),
    .landMonsInfo = &gRoute12_LandMonsInfoDay,
    .waterMonsInfo = &gRoute12_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute12_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(CELADON_CITY),
    .mapNum = MAP_NUM(CELADON_CITY),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gCeladonCity_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gCeladonCity_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_13),
    .mapNum = MAP_NUM(ROUTE_13),
    .landMonsInfo = &gRoute13_LandMonsInfoDay,
    .waterMonsInfo = &gRoute13_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute13_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_14),
    .mapNum = MAP_NUM(ROUTE_14),
    .landMonsInfo = &gRoute14_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_15),
    .mapNum = MAP_NUM(ROUTE_15),
    .landMonsInfo = &gRoute15_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(SAFARI_ZONE_CENTER),
    .mapNum = MAP_NUM(SAFARI_ZONE_CENTER),
    .landMonsInfo = &gSafariZoneCenter_LandMonsInfoDay,
    .waterMonsInfo = &gSafariZoneCenter_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSafariZoneCenter_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(SAFARI_ZONE_EAST),
    .mapNum = MAP_NUM(SAFARI_ZONE_EAST),
    .landMonsInfo = &gSafariZoneEast_LandMonsInfoDay,
    .waterMonsInfo = &gSafariZoneEast_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSafariZoneEast_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(SAFARI_ZONE_NORTH),
    .mapNum = MAP_NUM(SAFARI_ZONE_NORTH),
    .landMonsInfo = &gSafariZoneNorth_LandMonsInfoDay,
    .waterMonsInfo = &gSafariZoneNorth_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSafariZoneNorth_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(SAFARI_ZONE_WEST),
    .mapNum = MAP_NUM(SAFARI_ZONE_WEST),
    .landMonsInfo = &gSafariZoneWest_LandMonsInfoDay,
    .waterMonsInfo = &gSafariZoneWest_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSafariZoneWest_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_19),
    .mapNum = MAP_NUM(ROUTE_19),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gRoute19_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute19_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_20),
    .mapNum = MAP_NUM(ROUTE_20),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gRoute20_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute20_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_21_A),
    .mapNum = MAP_NUM(ROUTE_21_A),
    .landMonsInfo = &gRoute21A_LandMonsInfoDay,
    .waterMonsInfo = &gRoute21A_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute21A_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_21_B),
    .mapNum = MAP_NUM(ROUTE_21_B),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gRoute21B_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute21B_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(SEAFOAM_ISLANDS_1F),
    .mapNum = MAP_NUM(SEAFOAM_ISLANDS_1F),
    .landMonsInfo = &gSeafoamIslands1F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(SEAFOAM_ISLANDS_B1F),
    .mapNum = MAP_NUM(SEAFOAM_ISLANDS_B1F),
    .landMonsInfo = &gSeafoamIslandsB1F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(SEAFOAM_ISLANDS_B2F),
    .mapNum = MAP_NUM(SEAFOAM_ISLANDS_B2F),
    .landMonsInfo = &gSeafoamIslandsB2F_LandMonsInfoDay,
    .waterMonsInfo = &gSeafoamIslandsB2F_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSeafoamIslandsB2F_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(SEAFOAM_ISLANDS_B3F),
    .mapNum = MAP_NUM(SEAFOAM_ISLANDS_B3F),
    .landMonsInfo = &gSeafoamIslandsB3F_LandMonsInfoDay,
    .waterMonsInfo = &gSeafoamIslandsB3F_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSeafoamIslandsB3F_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(CINNABAR_ISLAND),
    .mapNum = MAP_NUM(CINNABAR_ISLAND),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gCinnabarIsland_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gCinnabarIsland_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_MANSION_1F),
    .mapNum = MAP_NUM(POKEMON_MANSION_1F),
    .landMonsInfo = &gPokemonMansion1F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_MANSION_2F),
    .mapNum = MAP_NUM(POKEMON_MANSION_2F),
    .landMonsInfo = &gPokemonMansion2F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_MANSION_3F),
    .mapNum = MAP_NUM(POKEMON_MANSION_3F),
    .landMonsInfo = &gPokemonMansion3F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_MANSION_B1F),
    .mapNum = MAP_NUM(POKEMON_MANSION_B1F),
    .landMonsInfo = &gPokemonMansionB1F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POWER_PLANT),
    .mapNum = MAP_NUM(POWER_PLANT),
    .landMonsInfo = &gPowerPlant_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(CERULEAN_CAVE_1F),
    .mapNum = MAP_NUM(CERULEAN_CAVE_1F),
    .landMonsInfo = &gCeruleanCave1F_LandMonsInfoDay,
    .waterMonsInfo = &gCeruleanCave1F_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gCeruleanCave1F_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(CERULEAN_CAVE_2F),
    .mapNum = MAP_NUM(CERULEAN_CAVE_2F),
    .landMonsInfo = &gCeruleanCave2F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(CERULEAN_CAVE_B1F),
    .mapNum = MAP_NUM(CERULEAN_CAVE_B1F),
    .landMonsInfo = &gCeruleanCaveB1F_LandMonsInfoDay,
    .waterMonsInfo = &gCeruleanCaveB1F_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gCeruleanCaveB1F_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_23),
    .mapNum = MAP_NUM(ROUTE_23),
    .landMonsInfo = &gRoute23_LandMonsInfoDay,
    .waterMonsInfo = &gRoute23_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute23_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(VICTORY_ROAD_1F),
    .mapNum = MAP_NUM(VICTORY_ROAD_1F),
    .landMonsInfo = &gVictoryRoad1F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(VICTORY_ROAD_2F),
    .mapNum = MAP_NUM(VICTORY_ROAD_2F),
    .landMonsInfo = &gVictoryRoad2F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(VICTORY_ROAD_3F),
    .mapNum = MAP_NUM(VICTORY_ROAD_3F),
    .landMonsInfo = &gVictoryRoad3F_LandMonsInfoDay,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  	{
		.mapGroup = MAP_GROUP(ONE_ISLAND_KINDLE_ROAD),
		.mapNum = MAP_NUM(ONE_ISLAND_KINDLE_ROAD),
		.landMonsInfo = &gKindleRoad_LandMonsInfo,
		.waterMonsInfo = &gKindleRoad_SurfMonsInfo,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = &gKindleRoad_FishingMonsInfo,
	},
	{
		.mapGroup = MAP_GROUP(MT_EMBER_EXTERIOR),
		.mapNum = MAP_NUM(MT_EMBER_EXTERIOR),
		.landMonsInfo = &MtEmberExterior_LandMonsInfoDay,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
	{
		.mapGroup = MAP_GROUP(MT_EMBER_SUMMIT_PATH_1F),
		.mapNum = MAP_NUM(MT_EMBER_SUMMIT_PATH_1F),
		.landMonsInfo = &MtEmber1F_LandMonsInfoNight,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
	{
		.mapGroup = MAP_GROUP(MT_EMBER_SUMMIT_PATH_2F),
		.mapNum = MAP_NUM(MT_EMBER_SUMMIT_PATH_2F),
		.landMonsInfo = &MtEmber1F_LandMonsInfoNight,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
	{
		.mapGroup = MAP_GROUP(MT_EMBER_SUMMIT_PATH_3F),
		.mapNum = MAP_NUM(MT_EMBER_SUMMIT_PATH_3F),
		.landMonsInfo = &MtEmber1F_LandMonsInfoNight,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
	{
		.mapGroup = MAP_GROUP(ONE_ISLAND_TREASURE_BEACH),
		.mapNum = MAP_NUM(ONE_ISLAND_TREASURE_BEACH),
		.landMonsInfo = &TreasureBeach_LandMonsInfoDay,
		.waterMonsInfo = &gKindleRoad_SurfMonsInfo,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
  {
		.mapGroup = MAP_GROUP(ROCK_TUNNEL_POSTGAME),
		.mapNum = MAP_NUM(ROCK_TUNNEL_POSTGAME),
		.landMonsInfo = &gRockTunnel_PostGameInfoDay,
		.waterMonsInfo = &gNone_SurfMonsInfo,
		.rockSmashMonsInfo = &gRockTunnel_SmashInfoDay,
		.fishingMonsInfo = NULL,
	},
  {
		.mapGroup = MAP_GROUP(TWO_ISLAND_CAPE_BRINK  ),
		.mapNum = MAP_NUM(TWO_ISLAND_CAPE_BRINK  ),
		.landMonsInfo = &gCapeBrink_InfoDay,
		.waterMonsInfo = &gCapeBrink_SurfMonsInfo,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = &gCapeBrink_FishingMonsInfo,
	},
  // {
	// 	.mapGroup = MAP_GROUP(TWO_ISLAND),
	// 	.mapNum = MAP_NUM(TWO_ISLAND),
	// 	.landMonsInfo = &gNone_LandMonsInfo,
	// 	.waterMonsInfo = &gNone_SurfMonsInfo,
	// 	.rockSmashMonsInfo = NULL,
	// 	.fishingMonsInfo = NULL,
	// },
    {
		.mapGroup = MAP_GROUP(POKEMON_TOWER_POST_GAME_F1),
		.mapNum = MAP_NUM(POKEMON_TOWER_POST_GAME_F1),
		.landMonsInfo = &gPkmnTower_PostGameLandMonsInfo,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
  {
		.mapGroup = MAP_GROUP(POKEMON_TOWER_POST_GAME_F2),
		.mapNum = MAP_NUM(POKEMON_TOWER_POST_GAME_F2),
		.landMonsInfo = &gPkmnTower_PostGameLandMons2Info,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
  {
		.mapGroup = MAP_GROUP(THREE_ISLAND_PORT),
		.mapNum = MAP_NUM(THREE_ISLAND_PORT),
		.landMonsInfo = &gThreeIslandPort_InfoDay,
		.waterMonsInfo = &gNone_SurfMonsInfo,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
    {
		.mapGroup = MAP_GROUP(THREE_ISLAND_BOND_BRIDGE ),
		.mapNum = MAP_NUM(THREE_ISLAND_BOND_BRIDGE ),
		.landMonsInfo = &gBondBridge_LandMonsInfoDay,
		.waterMonsInfo = &gBondBridge_SurfMonsInfo,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = &gBondBridge_FishingMonsInfo,
	},
  {
		.mapGroup = MAP_GROUP(THREE_ISLAND_BERRY_FOREST ),
		.mapNum = MAP_NUM(THREE_ISLAND_BERRY_FOREST ),
		.landMonsInfo = &gBerryForest_LandMonsInfoDay,
		.waterMonsInfo = &gBerryForest_SurfMonsInfo,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = &gBerryForest_FishingMonsInfo,
	},
};

const struct WildPokemonHeader gWildMonEveningHeaders[] =
{
	{
		.mapGroup = 0xFF,
		.mapNum = 0xFF,
		.landMonsInfo = NULL,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	}
};

const struct WildPokemonHeader gWildMonNightHeaders[] =
{  {
    .mapGroup = MAP_GROUP(PALLET_TOWN),
    .mapNum = MAP_NUM(PALLET_TOWN),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gPalletTown_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gPalletTown_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_1),
    .mapNum = MAP_NUM(ROUTE_1),
    .landMonsInfo = &gRoute1_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(VIRIDIAN_CITY),
    .mapNum = MAP_NUM(VIRIDIAN_CITY),
    .landMonsInfo = &gViridianCity_LandMonsInfoNight,
    .waterMonsInfo = &gViridianCity_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gViridianCity_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_22),
    .mapNum = MAP_NUM(ROUTE_22),
    .landMonsInfo = &gRoute22_LandMonsInfoNight,
    .waterMonsInfo = &gRoute22_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute22_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_2),
    .mapNum = MAP_NUM(ROUTE_2),
    .landMonsInfo = &gRoute2_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(VIRIDIAN_FOREST),
    .mapNum = MAP_NUM(VIRIDIAN_FOREST),
    .landMonsInfo = &gViridianForest_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
    {
    .mapGroup = MAP_GROUP(VIRIDIAN_FOREST_2),
    .mapNum = MAP_NUM(VIRIDIAN_FOREST_2),
    .landMonsInfo = &gViridianForest2_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(DIGLETTS_CAVE_NORTH_ENTRANCE),
    .mapNum = MAP_NUM(DIGLETTS_CAVE_NORTH_ENTRANCE),
    .landMonsInfo = &gDiglettsCaveNorthEntrance_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(PEWTER_CITY),
    .mapNum = MAP_NUM(PEWTER_CITY),
    .landMonsInfo = &gPewterCity_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_3),
    .mapNum = MAP_NUM(ROUTE_3),
    .landMonsInfo = &gRoute3_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(MT_MOON_1F),
    .mapNum = MAP_NUM(MT_MOON_1F),
    .landMonsInfo = &gMtMoon1F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(MT_MOON_B1F),
    .mapNum = MAP_NUM(MT_MOON_B1F),
    .landMonsInfo = &gMtMoonB1F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(MT_MOON_B2F),
    .mapNum = MAP_NUM(MT_MOON_B2F),
    .landMonsInfo = &gMtMoonB2F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_4),
    .mapNum = MAP_NUM(ROUTE_4),
    .landMonsInfo = &gRoute4_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(CERULEAN_CITY),
    .mapNum = MAP_NUM(CERULEAN_CITY),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gCeruleanCity_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gCeruleanCity_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_24),
    .mapNum = MAP_NUM(ROUTE_24),
    .landMonsInfo = &gRoute24_LandMonsInfoNight,
    .waterMonsInfo = &gRoute24_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute24_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_25),
    .mapNum = MAP_NUM(ROUTE_25),
    .landMonsInfo = &gRoute25_LandMonsInfoNight,
    .waterMonsInfo = &gRoute25_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute25_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_5),
    .mapNum = MAP_NUM(ROUTE_5),
    .landMonsInfo = &gRoute5_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_6),
    .mapNum = MAP_NUM(ROUTE_6),
    .landMonsInfo = &gRoute6_LandMonsInfoNight,
    .waterMonsInfo = &gRoute6_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute6_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(VERMILION_CITY),
    .mapNum = MAP_NUM(VERMILION_CITY),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gVermilionCity_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gVermilionCity_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(SSANNE_EXTERIOR),
    .mapNum = MAP_NUM(SSANNE_EXTERIOR),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gSSAnne_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSSAnne_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_11),
    .mapNum = MAP_NUM(ROUTE_11),
    .landMonsInfo = &gRoute11_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute11_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(DIGLETTS_CAVE_B1F),
    .mapNum = MAP_NUM(DIGLETTS_CAVE_B1F),
    .landMonsInfo = &gDiglettsCaveB1F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_9),
    .mapNum = MAP_NUM(ROUTE_9),
    .landMonsInfo = &gRoute9_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_10),
    .mapNum = MAP_NUM(ROUTE_10),
    .landMonsInfo = &gRoute10_LandMonsInfoNight,
    .waterMonsInfo = &gRoute10_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute10_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROCK_TUNNEL_1F),
    .mapNum = MAP_NUM(ROCK_TUNNEL_1F),
    .landMonsInfo = &gRockTunnel1F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROCK_TUNNEL_B1F),
    .mapNum = MAP_NUM(ROCK_TUNNEL_B1F),
    .landMonsInfo = &gRockTunnelB1F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_7),
    .mapNum = MAP_NUM(ROUTE_7),
    .landMonsInfo = &gRoute7_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_8),
    .mapNum = MAP_NUM(ROUTE_8),
    .landMonsInfo = &gRoute8_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_TOWER_3F),
    .mapNum = MAP_NUM(POKEMON_TOWER_3F),
    .landMonsInfo = &gPokemonTower3F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_TOWER_4F),
    .mapNum = MAP_NUM(POKEMON_TOWER_4F),
    .landMonsInfo = &gPokemonTower4F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_TOWER_5F),
    .mapNum = MAP_NUM(POKEMON_TOWER_5F),
    .landMonsInfo = &gPokemonTower5F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_TOWER_6F),
    .mapNum = MAP_NUM(POKEMON_TOWER_6F),
    .landMonsInfo = &gPokemonTower6F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_TOWER_7F),
    .mapNum = MAP_NUM(POKEMON_TOWER_7F),
    .landMonsInfo = &gPokemonTower7F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_16),
    .mapNum = MAP_NUM(ROUTE_16),
    .landMonsInfo = &gRoute16_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_17),
    .mapNum = MAP_NUM(ROUTE_17),
    .landMonsInfo = &gRoute17_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_18),
    .mapNum = MAP_NUM(ROUTE_18),
    .landMonsInfo = &gRoute18_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_12),
    .mapNum = MAP_NUM(ROUTE_12),
    .landMonsInfo = &gRoute12_LandMonsInfoNight,
    .waterMonsInfo = &gRoute12_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute12_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(CELADON_CITY),
    .mapNum = MAP_NUM(CELADON_CITY),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gCeladonCity_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gCeladonCity_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_13),
    .mapNum = MAP_NUM(ROUTE_13),
    .landMonsInfo = &gRoute13_LandMonsInfoNight,
    .waterMonsInfo = &gRoute13_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute13_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_14),
    .mapNum = MAP_NUM(ROUTE_14),
    .landMonsInfo = &gRoute14_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_15),
    .mapNum = MAP_NUM(ROUTE_15),
    .landMonsInfo = &gRoute15_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(SAFARI_ZONE_CENTER),
    .mapNum = MAP_NUM(SAFARI_ZONE_CENTER),
    .landMonsInfo = &gSafariZoneCenter_LandMonsInfoNight,
    .waterMonsInfo = &gSafariZoneCenter_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSafariZoneCenter_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(SAFARI_ZONE_EAST),
    .mapNum = MAP_NUM(SAFARI_ZONE_EAST),
    .landMonsInfo = &gSafariZoneEast_LandMonsInfoNight,
    .waterMonsInfo = &gSafariZoneEast_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSafariZoneEast_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(SAFARI_ZONE_NORTH),
    .mapNum = MAP_NUM(SAFARI_ZONE_NORTH),
    .landMonsInfo = &gSafariZoneNorth_LandMonsInfoNight,
    .waterMonsInfo = &gSafariZoneNorth_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSafariZoneNorth_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(SAFARI_ZONE_WEST),
    .mapNum = MAP_NUM(SAFARI_ZONE_WEST),
    .landMonsInfo = &gSafariZoneWest_LandMonsInfoNight,
    .waterMonsInfo = &gSafariZoneWest_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSafariZoneWest_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_19),
    .mapNum = MAP_NUM(ROUTE_19),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gRoute19_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute19_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_20),
    .mapNum = MAP_NUM(ROUTE_20),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gRoute20_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute20_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_21_A),
    .mapNum = MAP_NUM(ROUTE_21_A),
    .landMonsInfo = &gRoute21A_LandMonsInfoNight,
    .waterMonsInfo = &gRoute21A_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute21A_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_21_B),
    .mapNum = MAP_NUM(ROUTE_21_B),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gRoute21B_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute21B_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(SEAFOAM_ISLANDS_1F),
    .mapNum = MAP_NUM(SEAFOAM_ISLANDS_1F),
    .landMonsInfo = &gSeafoamIslands1F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(SEAFOAM_ISLANDS_B1F),
    .mapNum = MAP_NUM(SEAFOAM_ISLANDS_B1F),
    .landMonsInfo = &gSeafoamIslandsB1F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(SEAFOAM_ISLANDS_B2F),
    .mapNum = MAP_NUM(SEAFOAM_ISLANDS_B2F),
    .landMonsInfo = &gSeafoamIslandsB2F_LandMonsInfoNight,
    .waterMonsInfo = &gSeafoamIslandsB2F_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSeafoamIslandsB2F_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(SEAFOAM_ISLANDS_B3F),
    .mapNum = MAP_NUM(SEAFOAM_ISLANDS_B3F),
    .landMonsInfo = &gSeafoamIslandsB3F_LandMonsInfoNight,
    .waterMonsInfo = &gSeafoamIslandsB3F_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gSeafoamIslandsB3F_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(CINNABAR_ISLAND),
    .mapNum = MAP_NUM(CINNABAR_ISLAND),
    .landMonsInfo = NULL,
    .waterMonsInfo = &gCinnabarIsland_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gCinnabarIsland_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_MANSION_1F),
    .mapNum = MAP_NUM(POKEMON_MANSION_1F),
    .landMonsInfo = &gPokemonMansion1F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_MANSION_2F),
    .mapNum = MAP_NUM(POKEMON_MANSION_2F),
    .landMonsInfo = &gPokemonMansion2F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_MANSION_3F),
    .mapNum = MAP_NUM(POKEMON_MANSION_3F),
    .landMonsInfo = &gPokemonMansion3F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POKEMON_MANSION_B1F),
    .mapNum = MAP_NUM(POKEMON_MANSION_B1F),
    .landMonsInfo = &gPokemonMansionB1F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(POWER_PLANT),
    .mapNum = MAP_NUM(POWER_PLANT),
    .landMonsInfo = &gPowerPlant_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(CERULEAN_CAVE_1F),
    .mapNum = MAP_NUM(CERULEAN_CAVE_1F),
    .landMonsInfo = &gCeruleanCave1F_LandMonsInfoNight,
    .waterMonsInfo = &gCeruleanCave1F_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gCeruleanCave1F_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(CERULEAN_CAVE_2F),
    .mapNum = MAP_NUM(CERULEAN_CAVE_2F),
    .landMonsInfo = &gCeruleanCave2F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(CERULEAN_CAVE_B1F),
    .mapNum = MAP_NUM(CERULEAN_CAVE_B1F),
    .landMonsInfo = &gCeruleanCaveB1F_LandMonsInfoNight,
    .waterMonsInfo = &gCeruleanCaveB1F_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gCeruleanCaveB1F_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(ROUTE_23),
    .mapNum = MAP_NUM(ROUTE_23),
    .landMonsInfo = &gRoute23_LandMonsInfoNight,
    .waterMonsInfo = &gRoute23_SurfMonsInfo,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = &gRoute23_FishingMonsInfo,
  },
  {
    .mapGroup = MAP_GROUP(VICTORY_ROAD_1F),
    .mapNum = MAP_NUM(VICTORY_ROAD_1F),
    .landMonsInfo = &gVictoryRoad1F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(VICTORY_ROAD_2F),
    .mapNum = MAP_NUM(VICTORY_ROAD_2F),
    .landMonsInfo = &gVictoryRoad2F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
    .mapGroup = MAP_GROUP(VICTORY_ROAD_3F),
    .mapNum = MAP_NUM(VICTORY_ROAD_3F),
    .landMonsInfo = &gVictoryRoad3F_LandMonsInfoNight,
    .waterMonsInfo = NULL,
    .rockSmashMonsInfo = NULL,
    .fishingMonsInfo = NULL,
  },
  {
		.mapGroup = MAP_GROUP(ONE_ISLAND_KINDLE_ROAD),
		.mapNum = MAP_NUM(ONE_ISLAND_KINDLE_ROAD),
		.landMonsInfo = &gKindleRoad_LandMonsInfoNight,
		.waterMonsInfo = &gKindleRoad_SurfMonsInfo,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = &gKindleRoad_FishingMonsInfo,
	},
	{
		.mapGroup = MAP_GROUP(MT_EMBER_EXTERIOR),
		.mapNum = MAP_NUM(MT_EMBER_EXTERIOR),
		.landMonsInfo = &MtEmberExterior_LandMonsInfoNight,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
	{
		.mapGroup = MAP_GROUP(MT_EMBER_SUMMIT_PATH_1F),
		.mapNum = MAP_NUM(MT_EMBER_SUMMIT_PATH_1F),
		.landMonsInfo = &MtEmber1F_LandMonsInfoNight,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
	{
		.mapGroup = MAP_GROUP(MT_EMBER_SUMMIT_PATH_2F),
		.mapNum = MAP_NUM(MT_EMBER_SUMMIT_PATH_2F),
		.landMonsInfo = &MtEmber1F_LandMonsInfoNight,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
	{
		.mapGroup = MAP_GROUP(MT_EMBER_SUMMIT_PATH_3F),
		.mapNum = MAP_NUM(MT_EMBER_SUMMIT_PATH_3F),
		.landMonsInfo = &MtEmber1F_LandMonsInfoNight,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
	{
		.mapGroup = MAP_GROUP(ONE_ISLAND_TREASURE_BEACH),
		.mapNum = MAP_NUM(ONE_ISLAND_TREASURE_BEACH),
		.landMonsInfo = &TreasureBeach_LandMonsInfoNight,
		.waterMonsInfo = &gTreasureBeach_SurfMonsInfo,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = &gTreasureBeach_FishingMonsInfo,
	},
  {
		.mapGroup = MAP_GROUP(ROCK_TUNNEL_POSTGAME),
		.mapNum = MAP_NUM(ROCK_TUNNEL_POSTGAME),
		.landMonsInfo = &gRockTunnel_PostGameInfoNight,
		.waterMonsInfo = &gNone_SurfMonsInfo,
		.rockSmashMonsInfo = &gRockTunnel_SmashInfoDay,
		.fishingMonsInfo = NULL,
	},
  {
		.mapGroup = MAP_GROUP(TWO_ISLAND_CAPE_BRINK  ),
		.mapNum = MAP_NUM(TWO_ISLAND_CAPE_BRINK  ),
		.landMonsInfo = &gCapeBrink_InfoNight,
		.waterMonsInfo = &gCapeBrink_SurfMonsInfo,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = &gCapeBrink_FishingMonsInfo,
	},
  // {
	// 	.mapGroup = MAP_GROUP(TWO_ISLAND),
	// 	.mapNum = MAP_NUM(TWO_ISLAND),
	// 	.landMonsInfo = &gNone_LandMonsInfo,
	// 	.waterMonsInfo = &gNone_SurfMonsInfo,
	// 	.rockSmashMonsInfo = NULL,
	// 	.fishingMonsInfo = NULL,
	// },
  {
		.mapGroup = MAP_GROUP(POKEMON_TOWER_POST_GAME_F1),
		.mapNum = MAP_NUM(POKEMON_TOWER_POST_GAME_F1),
		.landMonsInfo = &gPkmnTower_PostGameLandMonsInfo,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
  {
		.mapGroup = MAP_GROUP(POKEMON_TOWER_POST_GAME_F2),
		.mapNum = MAP_NUM(POKEMON_TOWER_POST_GAME_F2),
		.landMonsInfo = &gPkmnTower_PostGameLandMons2Info,
		.waterMonsInfo = NULL,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
  {
		.mapGroup = MAP_GROUP(THREE_ISLAND_PORT),
		.mapNum = MAP_NUM(THREE_ISLAND_PORT),
		.landMonsInfo = &gThreeIslandPort_InfoDay,
		.waterMonsInfo = &gNone_SurfMonsInfo,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = NULL,
	},
  {
		.mapGroup = MAP_GROUP(THREE_ISLAND_BOND_BRIDGE ),
		.mapNum = MAP_NUM(THREE_ISLAND_BOND_BRIDGE ),
		.landMonsInfo = &gBondBridge_LandMonsInfoNight,
		.waterMonsInfo = &gBondBridge_SurfMonsInfo,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = &gBondBridge_FishingMonsInfo,
	},
  {
		.mapGroup = MAP_GROUP(THREE_ISLAND_BERRY_FOREST ),
		.mapNum = MAP_NUM(THREE_ISLAND_BERRY_FOREST ),
		.landMonsInfo = &gBerryForest_LandMonsInfoNight,
		.waterMonsInfo = &gBerryForest_SurfMonsInfo,
		.rockSmashMonsInfo = NULL,
		.fishingMonsInfo = &gBerryForest_FishingMonsInfo,
	},
};

const struct SwarmData gSwarmTable[] =
{
  /*{
    .mapName = 0xFF,
    .species = 0xFFFF,
  },*/
};

const u16 gSwarmTableLength = NELEMS(gSwarmTable);
