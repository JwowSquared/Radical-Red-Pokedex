
// B - 0xCF - (byte *)0x09162e07
const ABILITIES_RESTRICTED = [
    0x01, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A,
    0x0B, 0x0C, 0x0D, 0x0E, 0x0F, 0x10, 0x11, 0x12,
    0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x1A, 0x1B,
    0x1C, 0x1D, 0x1E, 0x1F, 0x20, 0x21, 0x22, 0x25,
    0x26, 0x27, 0x28, 0x29, 0x2A, 0x2B, 0x2C, 0x2E,
    0x2F, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36,
    0x37, 0x38, 0x39, 0x3A, 0x3C, 0x3D, 0x3E, 0x3F,
    0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47,
    0x48, 0x49, 0x4B, 0x4D, 0x4E, 0x4F, 0x51, 0x52,
    0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5B,
    0x5C, 0x5D, 0x5E, 0x5F, 0x60, 0x61, 0x62, 0x63,
    0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6A, 0x6B,
    0x6C, 0x6D, 0x6E, 0x70, 0x71, 0x72, 0x73, 0x74,
    0x77, 0x79, 0x7A, 0x7B, 0x7C, 0x7D, 0x7E, 0x7F,
    0x80, 0x81, 0x82, 0x84, 0x85, 0x87, 0x88, 0x89,
    0x8A, 0x8B, 0x8C, 0x8D, 0x90, 0x91, 0x92, 0x93,
    0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9A, 0x9E,
    0xA0, 0xA1, 0xA2, 0xA3, 0xA6, 0xA7, 0xA9, 0xAB,
    0xAF, 0xB1, 0xB2, 0xB3, 0xB9, 0xBA, 0xBB, 0xBC,
    0xBD, 0xBE, 0xC0, 0xC1, 0xC2, 0xC3, 0xC4, 0xC6,
    0xC7, 0xC8, 0xC9, 0xCA, 0xCB, 0xCC, 0xCE, 0xD0,
    0xD1, 0xD2, 0xD7, 0xD8, 0xD9, 0xDA, 0xDC, 0xDD,
    0xDE, 0xDF, 0xE0, 0xE1, 0xE2, 0xE3, 0xE4, 0xE5,
    0xE6, 0xE7, 0xE9, 0xEA, 0xEB, 0xEC, 0xED, 0xEE,
    0xEF, 0xF0, 0xF1, 0xF2, 0xF3, 0xF4, 0xF5, 0xF6,
    0xF8, 0xF9, 0xFB, 0x4A, 0xFE, 0xFF, 0xFD,
];

// A - 0xEC - (byte *)0x09162ed7
const ABILITIES_NORMAL = [
    0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
    0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F, 0x10,
    0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18,
    0x1A, 0x1B, 0x1C, 0x1D, 0x1E, 0x1F, 0x20, 0x21,
    0x22, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2A,
    0x2B, 0x2C, 0x2D, 0x2E, 0x2F, 0x30, 0x31, 0x32,
    0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3A,
    0x3C, 0x3D, 0x3E, 0x3F, 0x40, 0x41, 0x42, 0x43,
    0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4B, 0x4D,
    0x4E, 0x4F, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55,
    0x56, 0x57, 0x58, 0x59, 0x5A, 0x5B, 0x5C, 0x5D,
    0x5E, 0x5F, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65,
    0x66, 0x67, 0x68, 0x69, 0x6A, 0x6B, 0x6C, 0x6D,
    0x6E, 0x6F, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75,
    0x76, 0x77, 0x79, 0x7A, 0x7B, 0x7C, 0x7D, 0x7E,
    0x7F, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86,
    0x87, 0x88, 0x89, 0x8A, 0x8B, 0x8C, 0x8D, 0x8E,
    0x8F, 0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96,
    0x97, 0x98, 0x99, 0x9A, 0x9D, 0x9E, 0xA0, 0xA1,
    0xA2, 0xA3, 0xA6, 0xA7, 0xA9, 0xAB, 0xAC, 0xAD,
    0xAF, 0xB0, 0xB1, 0xB2, 0xB3, 0xB5, 0xB6, 0xB7,
    0xB8, 0xB9, 0xBA, 0xBB, 0xBC, 0xBD, 0xBE, 0xBF,
    0xC0, 0xC1, 0xC2, 0xC3, 0xC4, 0xC5, 0xC6, 0xC7,
    0xC8, 0xC9, 0xCA, 0xCB, 0xCC, 0xCE, 0xCF, 0xD0,
    0xD1, 0xD2, 0xD4, 0xD5, 0xD6, 0xD7, 0xD8, 0xD9,
    0xDA, 0xDC, 0xDD, 0xDE, 0xDF, 0xE0, 0xE1, 0xE2,
    0xE3, 0xE4, 0xE5, 0xE6, 0xE7, 0xE9, 0xEA, 0xEB,
    0xEC, 0xED, 0xEE, 0xEF, 0xF0, 0xF1, 0xF2, 0xF3,
    0xF4, 0xF5, 0xF6, 0xF7, 0xF8, 0xF9, 0xFB, 0xFC,
    0x4A, 0xFE, 0xFF, 0xFD,
];

const MOVES_NORMAL = [
    0x0001, 0x0002, 0x0003, 0x0004, 0x0005, 0x0006, 0x0007, 0x0008,
    0x0009, 0x000A, 0x000B, 0x000D, 0x000E, 0x000F, 0x0010, 0x0011,
    0x0012, 0x0013, 0x0014, 0x0015, 0x0016, 0x0017, 0x0018, 0x0019,
    0x001A, 0x001B, 0x001D, 0x001E, 0x001F, 0x0021, 0x0022, 0x0023,
    0x0024, 0x0025, 0x0026, 0x0027, 0x0028, 0x0029, 0x002A, 0x002B,
    0x002C, 0x002D, 0x002E, 0x002F, 0x0030, 0x0031, 0x0032, 0x0033,
    0x0034, 0x0035, 0x0036, 0x0037, 0x0038, 0x0039, 0x003A, 0x003B,
    0x003C, 0x003D, 0x003E, 0x003F, 0x0040, 0x0041, 0x0042, 0x0043,
    0x0044, 0x0045, 0x0046, 0x0047, 0x0048, 0x0049, 0x004A, 0x004B,
    0x004C, 0x004D, 0x004E, 0x004F, 0x0050, 0x0051, 0x0052, 0x0053,
    0x0054, 0x0055, 0x0056, 0x0057, 0x0058, 0x0059, 0x005A, 0x005B,
    0x005C, 0x005D, 0x005E, 0x005F, 0x0060, 0x0061, 0x0062, 0x0063,
    0x0064, 0x0065, 0x0066, 0x0067, 0x0069, 0x006A, 0x006D, 0x006E,
    0x006F, 0x0070, 0x0071, 0x0072, 0x0073, 0x0074, 0x0075, 0x0076,
    0x0077, 0x0078, 0x0079, 0x007A, 0x007B, 0x007C, 0x007D, 0x007E,
    0x007F, 0x0080, 0x0081, 0x0082, 0x0083, 0x0084, 0x0085, 0x0087,
    0x0088, 0x0089, 0x008A, 0x008B, 0x008C, 0x008D, 0x008E, 0x008F,
    0x0090, 0x0091, 0x0092, 0x0093, 0x0094, 0x0095, 0x0096, 0x0097,
    0x0098, 0x0099, 0x009A, 0x009B, 0x009C, 0x009D, 0x009E, 0x009F,
    0x00A0, 0x00A1, 0x00A2, 0x00A3, 0x00A4, 0x00A7, 0x00A8, 0x00A9,
    0x00AA, 0x00AB, 0x00AC, 0x00AD, 0x00AE, 0x00AF, 0x00B0, 0x00B1,
    0x00B2, 0x00B3, 0x00B4, 0x00B5, 0x00B6, 0x00B7, 0x00B8, 0x00B9,
    0x00BA, 0x00BB, 0x00BC, 0x00BD, 0x00BE, 0x00BF, 0x00C0, 0x00C1,
    0x00C2, 0x00C3, 0x00C4, 0x00C5, 0x00C6, 0x00C7, 0x00C8, 0x00C9,
    0x00CA, 0x00CB, 0x00CC, 0x00CD, 0x00CE, 0x00CF, 0x00D0, 0x00D1,
    0x00D2, 0x00D3, 0x00D4, 0x00D5, 0x00D6, 0x00D7, 0x00D8, 0x00D9,
    0x00DA, 0x00DB, 0x00DC, 0x00DD, 0x00DE, 0x00DF, 0x00E0, 0x00E1,
    0x00E3, 0x00E4, 0x00E5, 0x00E6, 0x00E7, 0x00E8, 0x00E9, 0x00EA,
    0x00EB, 0x00EC, 0x00ED, 0x00EE, 0x00EF, 0x00F0, 0x00F1, 0x00F2,
    0x00F3, 0x00F4, 0x00F5, 0x00F6, 0x00F7, 0x00F8, 0x00F9, 0x00FA,
    0x00FB, 0x00FC, 0x00FD, 0x00FE, 0x00FF, 0x0100, 0x0101, 0x0102,
    0x0103, 0x0104, 0x0105, 0x0106, 0x0107, 0x0108, 0x0109, 0x010A,
    0x010B, 0x010C, 0x010D, 0x010E, 0x010F, 0x0110, 0x0111, 0x0112,
    0x0113, 0x0114, 0x0115, 0x0116, 0x0117, 0x0118, 0x0119, 0x011A,
    0x011B, 0x011C, 0x011D, 0x011E, 0x011F, 0x0120, 0x0121, 0x0122,
    0x0123, 0x0124, 0x0125, 0x0126, 0x0127, 0x0128, 0x0129, 0x012A,
    0x012B, 0x012C, 0x012D, 0x012E, 0x012F, 0x0130, 0x0131, 0x0132,
    0x0133, 0x0134, 0x0135, 0x0136, 0x0137, 0x0138, 0x0139, 0x013A,
    0x013B, 0x013C, 0x013D, 0x013E, 0x013F, 0x0140, 0x0141, 0x0142,
    0x0143, 0x0144, 0x0145, 0x0146, 0x0147, 0x0148, 0x014A, 0x014B,
    0x014C, 0x014D, 0x014E, 0x014F, 0x0150, 0x0151, 0x0152, 0x0153,
    0x0154, 0x0155, 0x0156, 0x0157, 0x0158, 0x0159, 0x015A, 0x015B,
    0x015C, 0x015D, 0x015E, 0x015F, 0x0160, 0x0161, 0x0162, 0x0163,
    0x0164, 0x0165, 0x0166, 0x0167, 0x0168, 0x0169, 0x016A, 0x016B,
    0x016C, 0x016D, 0x016E, 0x016F, 0x0170, 0x0171, 0x0172, 0x0173,
    0x0174, 0x0175, 0x0176, 0x0177, 0x0178, 0x0179, 0x017A, 0x017B,
    0x017C, 0x017D, 0x017E, 0x017F, 0x0180, 0x0181, 0x0182, 0x0183,
    0x0184, 0x0185, 0x0186, 0x0187, 0x0188, 0x0189, 0x018A, 0x018B,
    0x018C, 0x018D, 0x018E, 0x018F, 0x0190, 0x0191, 0x0192, 0x0193,
    0x0194, 0x0195, 0x0196, 0x0197, 0x0198, 0x0199, 0x019A, 0x019B,
    0x019C, 0x019D, 0x019E, 0x019F, 0x01A0, 0x01A1, 0x01A2, 0x01A3,
    0x01A4, 0x01A5, 0x01A6, 0x01A7, 0x01A8, 0x01A9, 0x01AA, 0x01AB,
    0x01AC, 0x01AD, 0x01AE, 0x01AF, 0x01B0, 0x01B1, 0x01B2, 0x01B3,
    0x01B4, 0x01B5, 0x01B6, 0x01B7, 0x01B8, 0x01B9, 0x01BA, 0x01BB,
    0x01BC, 0x01BD, 0x01BE, 0x01BF, 0x01C0, 0x01C1, 0x01C2, 0x01C3,
    0x01C4, 0x01C5, 0x01C6, 0x01C7, 0x01C8, 0x01C9, 0x01CA, 0x01CB,
    0x01CC, 0x01CD, 0x01CE, 0x01CF, 0x01D0, 0x01D1, 0x01D2, 0x01D3,
    0x01D4, 0x01D5, 0x01D6, 0x01D7, 0x01D8, 0x01D9, 0x01DA, 0x01DB,
    0x01DC, 0x01DD, 0x01DE, 0x01DF, 0x01E0, 0x01E1, 0x01E2, 0x01E4,
    0x01E5, 0x01E6, 0x01E8, 0x01E9, 0x01EA, 0x01EB, 0x01EC, 0x01ED,
    0x01EE, 0x01EF, 0x01F0, 0x01F1, 0x01F2, 0x01F3, 0x01F4, 0x01F5,
    0x01F6, 0x01F7, 0x01F8, 0x01F9, 0x01FA, 0x01FB, 0x01FC, 0x01FD,
    0x01FE, 0x0200, 0x0201, 0x0202, 0x0203, 0x0204, 0x0205, 0x0206,
    0x0207, 0x0208, 0x0209, 0x020A, 0x020B, 0x020C, 0x020D, 0x020E,
    0x0210, 0x0211, 0x0212, 0x0213, 0x0214, 0x0215, 0x0216, 0x0217,
    0x0218, 0x0219, 0x021A, 0x021B, 0x021C, 0x021D, 0x021E, 0x021F,
    0x0220, 0x0221, 0x0222, 0x0223, 0x0224, 0x0225, 0x0226, 0x0227,
    0x0228, 0x0229, 0x022A, 0x022B, 0x022C, 0x022D, 0x022E, 0x022F,
    0x0230, 0x0231, 0x0232, 0x0233, 0x0234, 0x0235, 0x0236, 0x0237,
    0x0238, 0x0239, 0x023A, 0x023B, 0x023C, 0x023D, 0x023E, 0x023F,
    0x0240, 0x0241, 0x0242, 0x0243, 0x0244, 0x0245, 0x0246, 0x0247,
    0x0248, 0x0249, 0x024A, 0x024B, 0x024C, 0x024D, 0x024E, 0x024F,
    0x0250, 0x0251, 0x0252, 0x0253, 0x0254, 0x0255, 0x0256, 0x0257,
    0x0258, 0x0259, 0x025A, 0x025B, 0x025C, 0x025D, 0x025E, 0x025F,
    0x0260, 0x0261, 0x0262, 0x0263, 0x0264, 0x0265, 0x0266, 0x0267,
    0x0268, 0x0269, 0x026A, 0x026B, 0x026C, 0x026D, 0x026E, 0x026F,
    0x0270, 0x0271, 0x0272, 0x0273, 0x0274, 0x0275, 0x0276, 0x0277,
    0x0278, 0x0279, 0x027A, 0x027B, 0x027C, 0x027D, 0x027E, 0x027F,
    0x0280, 0x0281, 0x0282, 0x0283, 0x0284, 0x0285, 0x0286, 0x0287,
    0x0288, 0x0289, 0x028A, 0x028B, 0x028C, 0x028D, 0x028E, 0x028F,
    0x0290, 0x0291, 0x0292, 0x0293, 0x0294, 0x0295, 0x0296, 0x0297,
    0x0298, 0x0299, 0x029A, 0x029B, 0x029C, 0x029D, 0x029E, 0x029F,
    0x02A0, 0x02A1, 0x02A2, 0x02A3, 0x02A4, 0x02A5, 0x02A6, 0x02A7,
    0x02A8, 0x02A9, 0x02AA, 0x02AB, 0x02AC, 0x02AD, 0x02AF, 0x02B0,
    0x02B1, 0x02B2, 0x02B3, 0x02B4, 0x02B6, 0x02B7, 0x02B8, 0x02B9,
    0x02BA, 0x02BB, 0x02BC, 0x02BD, 0x02BE, 0x02BF, 0x02C0, 0x02C1,
    0x02C2, 0x02C3, 0x02C4, 0x02C5, 0x02C6, 0x02C7, 0x02C8, 0x02C9,
    0x02CA, 0x02CB, 0x02CC, 0x02CD, 0x02CE, 0x02CF, 0x02D0, 0x02D1,
    0x02D2, 0x02D4, 0x02D5, 0x02D8, 0x02D9, 0x02DA, 0x02DB, 0x02DC,
    0x02DD, 0x02DE, 0x02DF, 0x02E0, 0x02E1, 0x02E2, 0x02E3, 0x02E4,
    0x02E5, 0x02E6, 0x02E7, 0x02E8, 0x02E9, 0x02EA, 0x02EB, 0x02EC,
    0x02ED, 0x02EE, 0x02EF, 0x02F0, 0x02F1, 0x02F2, 0x02F3, 0x02F4,
    0x02F5, 0x02F6, 0x02F7, 0x02D7, 0x02B5, 0x02F7, 0x02F8, 0x02F9,
    0x02FA, 0x02FB, 0x02FC, 0x02FD, 0x02FE, 0x02FF, 0x0300, 0x0301,
    0x0302, 0x0303, 0x0304, 0x0305, 0x0306, 0x0307, 0x0308, 0x0309,
    0x030A, 0x030B, 0x030D, 0x030E, 0x030F, 0x0310, 0x0311, 0x0312,
    0x0313, 0x0314, 0x0315, 0x0316, 0x0318, 0x0319, 0x031A, 0x031D,
    0x031E, 0x031F, 0x0321, 0x0322, 0x0324, 0x031C, 0x0320, 0x0325,
    0x0326, 0x0327, 0x0328, 0x0329, 0x032A, 0x032B, 0x032C, 0x032D,
    0x032E, 0x032F, 0x0330, 0x0331, 0x0332, 0x0323, 0x0333, 0x0334,
    0x0336, 0x0337, 0x0339, 0x033A, 0x033B, 0x033C,
];

const MOVES_RESTRICTED = [
    0x0001, 0x0002, 0x0003, 0x0004, 0x0005, 0x0006, 0x0007, 0x0008,
    0x0009, 0x000A, 0x000B, 0x000D, 0x000F, 0x0010, 0x0011, 0x0012,
    0x0013, 0x0014, 0x0015, 0x0016, 0x0017, 0x0018, 0x0019, 0x001A,
    0x001B, 0x001D, 0x001E, 0x001F, 0x0021, 0x0022, 0x0023, 0x0024,
    0x0025, 0x0026, 0x0027, 0x0028, 0x0029, 0x002A, 0x002B, 0x002C,
    0x002D, 0x002E, 0x002F, 0x0030, 0x0031, 0x0032, 0x0033, 0x0034,
    0x0035, 0x0036, 0x0037, 0x0038, 0x0039, 0x003A, 0x003B, 0x003C,
    0x003D, 0x003E, 0x003F, 0x0040, 0x0041, 0x0042, 0x0043, 0x0044,
    0x0045, 0x0046, 0x0047, 0x0048, 0x0049, 0x004B, 0x004C, 0x004D,
    0x004E, 0x004F, 0x0050, 0x0051, 0x0052, 0x0053, 0x0054, 0x0055,
    0x0056, 0x0057, 0x0058, 0x0059, 0x005B, 0x005C, 0x005D, 0x005E,
    0x005F, 0x0062, 0x0063, 0x0064, 0x0065, 0x0066, 0x0067, 0x0069,
    0x006D, 0x0071, 0x0072, 0x0073, 0x0074, 0x0075, 0x0076, 0x0077,
    0x0078, 0x0079, 0x007A, 0x007B, 0x007C, 0x007D, 0x007E, 0x007F,
    0x0080, 0x0081, 0x0083, 0x0084, 0x0087, 0x0088, 0x0089, 0x008A,
    0x008B, 0x008C, 0x008D, 0x008E, 0x008F, 0x0090, 0x0091, 0x0092,
    0x0093, 0x0094, 0x0095, 0x0096, 0x0098, 0x0099, 0x009A, 0x009B,
    0x009C, 0x009D, 0x009E, 0x009F, 0x00A0, 0x00A1, 0x00A2, 0x00A3,
    0x00A7, 0x00A8, 0x00A9, 0x00AA, 0x00AB, 0x00AC, 0x00AD, 0x00AF,
    0x00B0, 0x00B1, 0x00B2, 0x00B3, 0x00B4, 0x00B5, 0x00B7, 0x00B8,
    0x00B9, 0x00BA, 0x00BC, 0x00BD, 0x00BE, 0x00C0, 0x00C1, 0x00C4,
    0x00C5, 0x00C6, 0x00C7, 0x00C8, 0x00CA, 0x00CB, 0x00CD, 0x00CE,
    0x00CF, 0x00D0, 0x00D1, 0x00D2, 0x00D3, 0x00D4, 0x00D5, 0x00D6,
    0x00D7, 0x00D8, 0x00D9, 0x00DA, 0x00DB, 0x00DC, 0x00DD, 0x00DE,
    0x00DF, 0x00E0, 0x00E1, 0x00E3, 0x00E4, 0x00E5, 0x00E6, 0x00E7,
    0x00E8, 0x00E9, 0x00EA, 0x00EB, 0x00EC, 0x00ED, 0x00EE, 0x00EF,
    0x00F2, 0x00F3, 0x00F5, 0x00F6, 0x00F7, 0x00F8, 0x00F9, 0x00FA,
    0x00FB, 0x00FC, 0x00FD, 0x0101, 0x0103, 0x0104, 0x0105, 0x0106,
    0x0107, 0x0108, 0x0109, 0x010A, 0x010B, 0x010C, 0x010E, 0x010F,
    0x0110, 0x0111, 0x0112, 0x0113, 0x0114, 0x0116, 0x0117, 0x0118,
    0x0119, 0x011A, 0x011B, 0x011C, 0x011D, 0x011E, 0x011F, 0x0120,
    0x0122, 0x0123, 0x0124, 0x0125, 0x0127, 0x0128, 0x0129, 0x012A,
    0x012B, 0x012C, 0x012D, 0x012E, 0x012F, 0x0130, 0x0131, 0x0132,
    0x0133, 0x0134, 0x0135, 0x0136, 0x0137, 0x0138, 0x0139, 0x013A,
    0x013B, 0x013C, 0x013D, 0x013E, 0x013F, 0x0140, 0x0141, 0x0143,
    0x0144, 0x0145, 0x0146, 0x0147, 0x0148, 0x014A, 0x014B, 0x014C,
    0x014D, 0x014F, 0x0151, 0x0152, 0x0154, 0x0155, 0x0156, 0x0157,
    0x0158, 0x0159, 0x015A, 0x015C, 0x015E, 0x015F, 0x0160, 0x0161,
    0x0162, 0x0163, 0x0164, 0x0165, 0x0166, 0x0167, 0x0168, 0x0169,
    0x016A, 0x016B, 0x016D, 0x016E, 0x016F, 0x0170, 0x0171, 0x0172,
    0x0173, 0x0174, 0x0175, 0x0176, 0x0177, 0x0178, 0x0179, 0x017A,
    0x017B, 0x017C, 0x017D, 0x017E, 0x017F, 0x0180, 0x0181, 0x0183,
    0x0184, 0x0185, 0x0186, 0x0187, 0x0188, 0x018A, 0x018B, 0x018C,
    0x018D, 0x018E, 0x018F, 0x0190, 0x0191, 0x0192, 0x0193, 0x0194,
    0x0195, 0x0197, 0x0198, 0x019A, 0x019C, 0x019D, 0x01A0, 0x01A1,
    0x01A2, 0x01A3, 0x01A4, 0x01A5, 0x01A6, 0x01A7, 0x01A8, 0x01A9,
    0x01AB, 0x01AC, 0x01AD, 0x01AE, 0x01AF, 0x01B0, 0x01B1, 0x01B2,
    0x01B3, 0x01B4, 0x01B5, 0x01B6, 0x01B8, 0x01B9, 0x01BA, 0x01BB,
    0x01BC, 0x01BD, 0x01BE, 0x01BF, 0x01C0, 0x01C1, 0x01C2, 0x01C3,
    0x01C5, 0x01C6, 0x01C7, 0x01C8, 0x01C9, 0x01CA, 0x01CB, 0x01CC,
    0x01CD, 0x01CE, 0x01CF, 0x01D0, 0x01D1, 0x01D2, 0x01D3, 0x01D6,
    0x01D7, 0x01D9, 0x01DA, 0x01DB, 0x01DC, 0x01DE, 0x01DF, 0x01E2,
    0x01E4, 0x01E5, 0x01E6, 0x01E8, 0x01E9, 0x01EA, 0x01EB, 0x01EC,
    0x01ED, 0x01EE, 0x01EF, 0x01F0, 0x01F1, 0x01F2, 0x01F3, 0x01F4,
    0x01F5, 0x01F6, 0x01F7, 0x01F8, 0x01F9, 0x01FA, 0x01FB, 0x01FC,
    0x01FD, 0x01FE, 0x0200, 0x0202, 0x0203, 0x0204, 0x0205, 0x0206,
    0x0207, 0x0208, 0x0209, 0x020A, 0x020B, 0x020C, 0x020D, 0x020E,
    0x0210, 0x0212, 0x0213, 0x0214, 0x0215, 0x0216, 0x0217, 0x0218,
    0x0219, 0x021A, 0x021B, 0x021C, 0x021D, 0x021E, 0x021F, 0x0220,
    0x0221, 0x0222, 0x0223, 0x0224, 0x0225, 0x0226, 0x0227, 0x0228,
    0x0229, 0x022A, 0x022B, 0x022C, 0x022E, 0x022F, 0x0230, 0x0231,
    0x0232, 0x0233, 0x0234, 0x0235, 0x0236, 0x0237, 0x0238, 0x0239,
    0x023A, 0x023C, 0x023D, 0x023E, 0x023F, 0x0240, 0x0241, 0x0242,
    0x0243, 0x0244, 0x0245, 0x0246, 0x0247, 0x0248, 0x0249, 0x024A,
    0x024B, 0x024C, 0x024D, 0x024E, 0x024F, 0x0250, 0x0251, 0x0252,
    0x0253, 0x0254, 0x0255, 0x0256, 0x0257, 0x0258, 0x0259, 0x025A,
    0x025B, 0x025C, 0x025D, 0x025E, 0x025F, 0x0260, 0x0261, 0x0262,
    0x0263, 0x0264, 0x0265, 0x0266, 0x0267, 0x0268, 0x0269, 0x026B,
    0x026C, 0x026D, 0x026E, 0x026F, 0x0270, 0x0275, 0x0276, 0x0277,
    0x0279, 0x027A, 0x027B, 0x027C, 0x027D, 0x027F, 0x0280, 0x0281,
    0x0282, 0x0283, 0x0284, 0x0285, 0x0286, 0x0287, 0x0288, 0x0289,
    0x028A, 0x028B, 0x028D, 0x028E, 0x028F, 0x0290, 0x0291, 0x0292,
    0x0293, 0x0294, 0x0295, 0x0296, 0x0297, 0x0298, 0x0299, 0x029A,
    0x029B, 0x029C, 0x029D, 0x029E, 0x029F, 0x02A0, 0x02A1, 0x02A2,
    0x02A3, 0x02A4, 0x02A5, 0x02A6, 0x02A7, 0x02A8, 0x02A9, 0x02AB,
    0x02AC, 0x02AD, 0x02AF, 0x02B0, 0x02B1, 0x02B4, 0x02B6, 0x02B7,
    0x02B8, 0x02B9, 0x02BA, 0x02BB, 0x02BC, 0x02BD, 0x02BE, 0x02BF,
    0x02C0, 0x02C1, 0x02C2, 0x02C3, 0x02C4, 0x02C5, 0x02C6, 0x02C7,
    0x02C8, 0x02C9, 0x02CA, 0x02CD, 0x02CE, 0x02CF, 0x02D0, 0x02D1,
    0x02D2, 0x02D4, 0x02D5, 0x02D8, 0x02D9, 0x02DA, 0x02DB, 0x02DC,
    0x02DD, 0x02DE, 0x02DF, 0x02E0, 0x02E1, 0x02E2, 0x02E3, 0x02E4,
    0x02E5, 0x02E7, 0x02E8, 0x02E9, 0x02EA, 0x02EB, 0x02EC, 0x02ED,
    0x02EE, 0x02EF, 0x02F1, 0x02F2, 0x02F3, 0x02F4, 0x02F5, 0x02F6,
    0x02F7, 0x02F8, 0x02F9, 0x02FC, 0x0300, 0x0301, 0x0302, 0x0303,
    0x0304, 0x0305, 0x0306, 0x0308, 0x0309, 0x030A, 0x030B, 0x030D,
    0x030E, 0x030F, 0x0310, 0x0311, 0x0313, 0x0314, 0x0315, 0x0316,
    0x0318, 0x0319, 0x031A, 0x031D, 0x031E, 0x0321, 0x0322, 0x0324,
    0x0325, 0x0326, 0x0327, 0x0328, 0x0329, 0x032A, 0x032B, 0x032C,
    0x032D, 0x032E, 0x032F, 0x0330, 0x0331, 0x0332, 0x0333, 0x0334,
    0x0336, 0x0337, 0x0339, 0x033A, 0x033B, 0x033C,
];

const CHARACTER_ENCODINGS = [
    " ", "À", "Á", "Â", "Ç", "È", "É", "Ê", "Ë", "Ì", "", "Î", "Ï", "Ò", "Ó", "Ô",
    "Œ", "Ù", "Ú", "Û", "Ñ", "ß", "à", "á", "", "ç", "è", "é", "ê", "ë", "ì", "",
    "î", "ï", "ò", "ó", "ô", "œ", "ù", "ú", "û", "ñ", "º", "ª", "ᵉʳ", "&", "+", "",
    "", "", "", "", "Lv", "=", ";", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "▯", "¿", "¡", "PK", "MN", "PO", "Ké", "", "", "", "Í", "%", "(", ")", " ", " ",
    " ", " ", " ", " ", " ", "", "", "", "â", "", "", "", "", "", "", "í",
    "", "", "", "", "", "", "", "", "", "↑", "↓", "←", "→", "*", "*", "*",
    "*", "*", "*", "*", "ᵉ", "<", ">", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "ʳᵉ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "?", ".", "-", "･",
    "…", "“", "”", "‘", "’", "♂", "♀", "$", ",", "×", "/", "A", "B", "C", "D", "E",
    "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "►",
    ":", "Ä", "Ö", "Ü", "ä", "ö", "ü", "", "", "", "", "", "", "", "", ""
]

function tryRandomizeAbility(trainedId, restricted, ability, species) {
    if (ability === 0) {
        return 0;
    }
    trainedId = Math.max(1, trainedId);
    const abilitiesTable = restricted ? ABILITIES_RESTRICTED : ABILITIES_NORMAL;
    const abilitiesCount = abilitiesTable.length;
    const secretIdLowerByte = ((trainedId >> 0x10) & 0xFFFF) % 0xFF;
    let newAbilityIdx = (trainedId & 0xffff) % abilitiesCount;
    newAbilityIdx = (newAbilityIdx + species + ability) & 0xFFFF;
    if (newAbilityIdx > abilitiesCount) {
        newAbilityIdx = (newAbilityIdx - abilitiesCount + 2) & 0xFFFF;
    }
    newAbilityIdx = (newAbilityIdx ^ secretIdLowerByte & 0xFFFF) % abilitiesCount;
    return abilitiesTable[newAbilityIdx];
}

function getMappedAbility(ability, species) {
    if (!saveData || !saveData.random.abilities) {
        return ability;
    }

    const randomizedAbility = tryRandomizeAbility(saveData.trainedId, saveData.restricted, ability[0], species);
    return [randomizedAbility, 0];
}

function tryRandomizeMove(trainedId, restricted, move, species) {
    // 0xA5 = Struggle
    if (move == 0 || move == 0xa5) {
        return move;
    }

    trainedId = Math.max(1, trainedId);
    const movesTable = restricted ? MOVES_RESTRICTED : MOVES_NORMAL;
    const mul32Bit = (trainedId * species * move) % 0x100000000;
    const newMoveIdx = mul32Bit % movesTable.length;
    return movesTable[newMoveIdx];
}

function getMappedMove(move, species) {
    if (!saveData || !saveData.random.learnset) {
        return move;
    }

    return tryRandomizeMove(saveData.trainedId, saveData.restricted, move, species);
}

const NAME_OFFSET = 0x000;
const TRAINED_ID_OFFSET = 0x00A;
// RAM 0203B25A 0x10 = Hardmode
// RAM 0203B25A 0x04 = MGM
const HARDMODE_BITFLAG = 0xDB2;
// RAM 0203B26B 0x40 = Restricted
const RESTRICTED_BITFLAG = 0xDC3;
// RAM 0203B17B 0x04 = Scaled species
const SCALED_SPECIES_BITFLAG = 0xF2B;
// RAM 0203B17C 0x1 = Normal species
// RAM 0203B17C 0x2 = Learnset
// RAM 0203B17C 0x4 = Ability
const NORMAL_SPECIES_LEARNSET_ABILITY_BITFLAG = 0xF2C;

function findSector(file, id) {
    let latestOffset = -1;
    let latestSaveIndex = -1;
    for (let x = 0x0; x < 0x1C000; x += 0x1000) {
        const sectorId = file.getUint16(x + 0xFF4, true);
        const saveIndex = file.getUint32(x + 0xFFC, true);
        if (sectorId === id && saveIndex > latestSaveIndex) {
            latestOffset = x;
            latestSaveIndex = saveIndex;
        }
    }

    return latestOffset;
}

function readDataFromSaveFile(file) {
    for (let sectorId = 0; sectorId < 14; sectorId++) {
        if (findSector(file, sectorId) == -1) {
            return {
                valid: false,
                data: null,
            }
        }
    }

    const trainerInfo = findSector(file, 0x0);
    const trainedId = file.getUint32(trainerInfo + TRAINED_ID_OFFSET, true);
    let name = "";
    for (let idx = 0; idx < 8; idx++) {
        const char = file.getUint8(trainerInfo + NAME_OFFSET + idx);
        if (char == 0xFF) {
            break;
        }
        name += CHARACTER_ENCODINGS[char];
    }

    const scaledBitflag = file.getUint8(trainerInfo + SCALED_SPECIES_BITFLAG);
    const scaledSpecies = (scaledBitflag & 0x4) > 0;
    const randomBitFlag = file.getUint8(trainerInfo + NORMAL_SPECIES_LEARNSET_ABILITY_BITFLAG);
    const normalSpecies = (randomBitFlag & 0x1) > 0;
    const learnset = (randomBitFlag & 0x2) > 0;
    const abilities = (randomBitFlag & 0x4) > 0;

    const gameSpecificData = findSector(file, 0x4);
    const hardmodeBitflag = file.getUint8(gameSpecificData + HARDMODE_BITFLAG);
    const hardmode = (hardmodeBitflag & 0x10) > 0;
    const restrictedBitFlag = file.getUint8(gameSpecificData + RESTRICTED_BITFLAG);
    const restricted = (restrictedBitFlag & 0x40) > 0;

    return {
        valid: true,
        data: {
            name,
            trainedId,
            restricted,
            hardmode,
            random: {
                abilities,
                learnset,
                normalSpecies,
                scaledSpecies,
            }
        }
    }
}

function openSaveFileDialog() {
    document.getElementById("saveFileInput").click();
}

function clearCurrentSave() {
    processSaveData(undefined);
}

function processSaveData(data) {
    saveData = data;
    localStorage.setItem("saveData", JSON.stringify(saveData));

    if (data) {
        const flags = [];
        if (data.hardmode) {
            flags.push("Hardcore");
        } else if (data.restricted) {
            flags.push("Restricted");
        }
    
        if (data.random.abilities) {
            flags.push("Random Abilities");
        }
    
        if (data.random.learnset) {
            flags.push("Random Learnset");
        }

        if (flags.length == 0) {
            flags.push("No changes");
        }

        document.getElementById("currentSave").classList.remove("hide");
        document.getElementById("saveFileInputButton").classList.add("hide");
        document.getElementById("currentSaveName").innerText = data.name;
        document.getElementById("currentSaveFlags").innerText = flags.join(" / ");
    } else {
        document.getElementById("currentSave").classList.add("hide");
        document.getElementById("saveFileInputButton").classList.remove("hide");
    }

    if (!!species) {
        removeFilters();
        populateTable('speciesTable', Object.values(species));
    }
}

document.getElementById("saveFileInput").addEventListener("change", function() {
    const saveFileInput = document.getElementById("saveFileInput");
    var [file] = saveFileInput.files;
    if (file) {
        saveFileInput.value = null;
        file.arrayBuffer().then(buffer => {
            const view = new DataView(buffer);
            const {valid, data} = readDataFromSaveFile(view);
            if(!valid) {
                alert("Unable to read save data. Please ensure you've selected a save and not a save state (Most likely a .sav file)");
                return;
            }
            processSaveData(data);
        })
    }
});

const storedSaveData = localStorage.getItem("saveData");
if (storedSaveData) {
    processSaveData(JSON.parse(storedSaveData));
}