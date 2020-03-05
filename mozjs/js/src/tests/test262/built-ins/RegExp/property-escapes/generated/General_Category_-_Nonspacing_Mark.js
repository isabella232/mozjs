// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Nonspacing_Mark`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0005BF,
    0x0005C7,
    0x000670,
    0x000711,
    0x0007FD,
    0x00093A,
    0x00093C,
    0x00094D,
    0x000981,
    0x0009BC,
    0x0009CD,
    0x0009FE,
    0x000A3C,
    0x000A51,
    0x000A75,
    0x000ABC,
    0x000ACD,
    0x000B01,
    0x000B3C,
    0x000B3F,
    0x000B4D,
    0x000B56,
    0x000B82,
    0x000BC0,
    0x000BCD,
    0x000C00,
    0x000C04,
    0x000C81,
    0x000CBC,
    0x000CBF,
    0x000CC6,
    0x000D4D,
    0x000DCA,
    0x000DD6,
    0x000E31,
    0x000EB1,
    0x000F35,
    0x000F37,
    0x000F39,
    0x000FC6,
    0x001082,
    0x00108D,
    0x00109D,
    0x0017C6,
    0x0017DD,
    0x0018A9,
    0x001932,
    0x001A1B,
    0x001A56,
    0x001A60,
    0x001A62,
    0x001A7F,
    0x001B34,
    0x001B3C,
    0x001B42,
    0x001BE6,
    0x001BED,
    0x001CED,
    0x001CF4,
    0x0020E1,
    0x002D7F,
    0x00A66F,
    0x00A802,
    0x00A806,
    0x00A80B,
    0x00A8FF,
    0x00A9B3,
    0x00A9E5,
    0x00AA43,
    0x00AA4C,
    0x00AA7C,
    0x00AAB0,
    0x00AAC1,
    0x00AAF6,
    0x00ABE5,
    0x00ABE8,
    0x00ABED,
    0x00FB1E,
    0x0101FD,
    0x0102E0,
    0x010A3F,
    0x011001,
    0x011173,
    0x011234,
    0x01123E,
    0x0112DF,
    0x011340,
    0x011446,
    0x01145E,
    0x0114BA,
    0x01163D,
    0x0116AB,
    0x0116AD,
    0x0116B7,
    0x0119E0,
    0x011A47,
    0x011C3F,
    0x011D3A,
    0x011D47,
    0x011D95,
    0x011D97,
    0x016F4F,
    0x01DA75,
    0x01DA84
  ],
  ranges: [
    [0x000300, 0x00036F],
    [0x000483, 0x000487],
    [0x000591, 0x0005BD],
    [0x0005C1, 0x0005C2],
    [0x0005C4, 0x0005C5],
    [0x000610, 0x00061A],
    [0x00064B, 0x00065F],
    [0x0006D6, 0x0006DC],
    [0x0006DF, 0x0006E4],
    [0x0006E7, 0x0006E8],
    [0x0006EA, 0x0006ED],
    [0x000730, 0x00074A],
    [0x0007A6, 0x0007B0],
    [0x0007EB, 0x0007F3],
    [0x000816, 0x000819],
    [0x00081B, 0x000823],
    [0x000825, 0x000827],
    [0x000829, 0x00082D],
    [0x000859, 0x00085B],
    [0x0008D3, 0x0008E1],
    [0x0008E3, 0x000902],
    [0x000941, 0x000948],
    [0x000951, 0x000957],
    [0x000962, 0x000963],
    [0x0009C1, 0x0009C4],
    [0x0009E2, 0x0009E3],
    [0x000A01, 0x000A02],
    [0x000A41, 0x000A42],
    [0x000A47, 0x000A48],
    [0x000A4B, 0x000A4D],
    [0x000A70, 0x000A71],
    [0x000A81, 0x000A82],
    [0x000AC1, 0x000AC5],
    [0x000AC7, 0x000AC8],
    [0x000AE2, 0x000AE3],
    [0x000AFA, 0x000AFF],
    [0x000B41, 0x000B44],
    [0x000B62, 0x000B63],
    [0x000C3E, 0x000C40],
    [0x000C46, 0x000C48],
    [0x000C4A, 0x000C4D],
    [0x000C55, 0x000C56],
    [0x000C62, 0x000C63],
    [0x000CCC, 0x000CCD],
    [0x000CE2, 0x000CE3],
    [0x000D00, 0x000D01],
    [0x000D3B, 0x000D3C],
    [0x000D41, 0x000D44],
    [0x000D62, 0x000D63],
    [0x000DD2, 0x000DD4],
    [0x000E34, 0x000E3A],
    [0x000E47, 0x000E4E],
    [0x000EB4, 0x000EBC],
    [0x000EC8, 0x000ECD],
    [0x000F18, 0x000F19],
    [0x000F71, 0x000F7E],
    [0x000F80, 0x000F84],
    [0x000F86, 0x000F87],
    [0x000F8D, 0x000F97],
    [0x000F99, 0x000FBC],
    [0x00102D, 0x001030],
    [0x001032, 0x001037],
    [0x001039, 0x00103A],
    [0x00103D, 0x00103E],
    [0x001058, 0x001059],
    [0x00105E, 0x001060],
    [0x001071, 0x001074],
    [0x001085, 0x001086],
    [0x00135D, 0x00135F],
    [0x001712, 0x001714],
    [0x001732, 0x001734],
    [0x001752, 0x001753],
    [0x001772, 0x001773],
    [0x0017B4, 0x0017B5],
    [0x0017B7, 0x0017BD],
    [0x0017C9, 0x0017D3],
    [0x00180B, 0x00180D],
    [0x001885, 0x001886],
    [0x001920, 0x001922],
    [0x001927, 0x001928],
    [0x001939, 0x00193B],
    [0x001A17, 0x001A18],
    [0x001A58, 0x001A5E],
    [0x001A65, 0x001A6C],
    [0x001A73, 0x001A7C],
    [0x001AB0, 0x001ABD],
    [0x001B00, 0x001B03],
    [0x001B36, 0x001B3A],
    [0x001B6B, 0x001B73],
    [0x001B80, 0x001B81],
    [0x001BA2, 0x001BA5],
    [0x001BA8, 0x001BA9],
    [0x001BAB, 0x001BAD],
    [0x001BE8, 0x001BE9],
    [0x001BEF, 0x001BF1],
    [0x001C2C, 0x001C33],
    [0x001C36, 0x001C37],
    [0x001CD0, 0x001CD2],
    [0x001CD4, 0x001CE0],
    [0x001CE2, 0x001CE8],
    [0x001CF8, 0x001CF9],
    [0x001DC0, 0x001DF9],
    [0x001DFB, 0x001DFF],
    [0x0020D0, 0x0020DC],
    [0x0020E5, 0x0020F0],
    [0x002CEF, 0x002CF1],
    [0x002DE0, 0x002DFF],
    [0x00302A, 0x00302D],
    [0x003099, 0x00309A],
    [0x00A674, 0x00A67D],
    [0x00A69E, 0x00A69F],
    [0x00A6F0, 0x00A6F1],
    [0x00A825, 0x00A826],
    [0x00A8C4, 0x00A8C5],
    [0x00A8E0, 0x00A8F1],
    [0x00A926, 0x00A92D],
    [0x00A947, 0x00A951],
    [0x00A980, 0x00A982],
    [0x00A9B6, 0x00A9B9],
    [0x00A9BC, 0x00A9BD],
    [0x00AA29, 0x00AA2E],
    [0x00AA31, 0x00AA32],
    [0x00AA35, 0x00AA36],
    [0x00AAB2, 0x00AAB4],
    [0x00AAB7, 0x00AAB8],
    [0x00AABE, 0x00AABF],
    [0x00AAEC, 0x00AAED],
    [0x00FE00, 0x00FE0F],
    [0x00FE20, 0x00FE2F],
    [0x010376, 0x01037A],
    [0x010A01, 0x010A03],
    [0x010A05, 0x010A06],
    [0x010A0C, 0x010A0F],
    [0x010A38, 0x010A3A],
    [0x010AE5, 0x010AE6],
    [0x010D24, 0x010D27],
    [0x010F46, 0x010F50],
    [0x011038, 0x011046],
    [0x01107F, 0x011081],
    [0x0110B3, 0x0110B6],
    [0x0110B9, 0x0110BA],
    [0x011100, 0x011102],
    [0x011127, 0x01112B],
    [0x01112D, 0x011134],
    [0x011180, 0x011181],
    [0x0111B6, 0x0111BE],
    [0x0111C9, 0x0111CC],
    [0x01122F, 0x011231],
    [0x011236, 0x011237],
    [0x0112E3, 0x0112EA],
    [0x011300, 0x011301],
    [0x01133B, 0x01133C],
    [0x011366, 0x01136C],
    [0x011370, 0x011374],
    [0x011438, 0x01143F],
    [0x011442, 0x011444],
    [0x0114B3, 0x0114B8],
    [0x0114BF, 0x0114C0],
    [0x0114C2, 0x0114C3],
    [0x0115B2, 0x0115B5],
    [0x0115BC, 0x0115BD],
    [0x0115BF, 0x0115C0],
    [0x0115DC, 0x0115DD],
    [0x011633, 0x01163A],
    [0x01163F, 0x011640],
    [0x0116B0, 0x0116B5],
    [0x01171D, 0x01171F],
    [0x011722, 0x011725],
    [0x011727, 0x01172B],
    [0x01182F, 0x011837],
    [0x011839, 0x01183A],
    [0x0119D4, 0x0119D7],
    [0x0119DA, 0x0119DB],
    [0x011A01, 0x011A0A],
    [0x011A33, 0x011A38],
    [0x011A3B, 0x011A3E],
    [0x011A51, 0x011A56],
    [0x011A59, 0x011A5B],
    [0x011A8A, 0x011A96],
    [0x011A98, 0x011A99],
    [0x011C30, 0x011C36],
    [0x011C38, 0x011C3D],
    [0x011C92, 0x011CA7],
    [0x011CAA, 0x011CB0],
    [0x011CB2, 0x011CB3],
    [0x011CB5, 0x011CB6],
    [0x011D31, 0x011D36],
    [0x011D3C, 0x011D3D],
    [0x011D3F, 0x011D45],
    [0x011D90, 0x011D91],
    [0x011EF3, 0x011EF4],
    [0x016AF0, 0x016AF4],
    [0x016B30, 0x016B36],
    [0x016F8F, 0x016F92],
    [0x01BC9D, 0x01BC9E],
    [0x01D167, 0x01D169],
    [0x01D17B, 0x01D182],
    [0x01D185, 0x01D18B],
    [0x01D1AA, 0x01D1AD],
    [0x01D242, 0x01D244],
    [0x01DA00, 0x01DA36],
    [0x01DA3B, 0x01DA6C],
    [0x01DA9B, 0x01DA9F],
    [0x01DAA1, 0x01DAAF],
    [0x01E000, 0x01E006],
    [0x01E008, 0x01E018],
    [0x01E01B, 0x01E021],
    [0x01E023, 0x01E024],
    [0x01E026, 0x01E02A],
    [0x01E130, 0x01E136],
    [0x01E2EC, 0x01E2EF],
    [0x01E8D0, 0x01E8D6],
    [0x01E944, 0x01E94A],
    [0x0E0100, 0x0E01EF]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Nonspacing_Mark}+$/u,
  matchSymbols,
  "\\p{General_Category=Nonspacing_Mark}"
);
testPropertyEscapes(
  /^\p{General_Category=Mn}+$/u,
  matchSymbols,
  "\\p{General_Category=Mn}"
);
testPropertyEscapes(
  /^\p{gc=Nonspacing_Mark}+$/u,
  matchSymbols,
  "\\p{gc=Nonspacing_Mark}"
);
testPropertyEscapes(
  /^\p{gc=Mn}+$/u,
  matchSymbols,
  "\\p{gc=Mn}"
);
testPropertyEscapes(
  /^\p{Nonspacing_Mark}+$/u,
  matchSymbols,
  "\\p{Nonspacing_Mark}"
);
testPropertyEscapes(
  /^\p{Mn}+$/u,
  matchSymbols,
  "\\p{Mn}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0005BE,
    0x0005C0,
    0x0005C3,
    0x0005C6,
    0x0006E9,
    0x00081A,
    0x000824,
    0x000828,
    0x0008E2,
    0x00093B,
    0x000AC6,
    0x000B00,
    0x000B40,
    0x000C49,
    0x000DD5,
    0x000F36,
    0x000F38,
    0x000F7F,
    0x000F85,
    0x000F98,
    0x001031,
    0x001038,
    0x0017B6,
    0x001A57,
    0x001A5F,
    0x001A61,
    0x001B35,
    0x001B3B,
    0x001BAA,
    0x001BE7,
    0x001BEE,
    0x001CD3,
    0x001CE1,
    0x001DFA,
    0x00AAB1,
    0x00AAC0,
    0x010A04,
    0x01112C,
    0x011235,
    0x011445,
    0x0114B9,
    0x0114C1,
    0x0115BE,
    0x01163E,
    0x0116AC,
    0x0116B6,
    0x011726,
    0x011838,
    0x011A97,
    0x011C37,
    0x011C3E,
    0x011CB1,
    0x011CB4,
    0x011D3B,
    0x011D3E,
    0x011D46,
    0x011D96,
    0x01DAA0,
    0x01E007,
    0x01E022,
    0x01E025
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0002FF],
    [0x000370, 0x000482],
    [0x000488, 0x000590],
    [0x0005C8, 0x00060F],
    [0x00061B, 0x00064A],
    [0x000660, 0x00066F],
    [0x000671, 0x0006D5],
    [0x0006DD, 0x0006DE],
    [0x0006E5, 0x0006E6],
    [0x0006EE, 0x000710],
    [0x000712, 0x00072F],
    [0x00074B, 0x0007A5],
    [0x0007B1, 0x0007EA],
    [0x0007F4, 0x0007FC],
    [0x0007FE, 0x000815],
    [0x00082E, 0x000858],
    [0x00085C, 0x0008D2],
    [0x000903, 0x000939],
    [0x00093D, 0x000940],
    [0x000949, 0x00094C],
    [0x00094E, 0x000950],
    [0x000958, 0x000961],
    [0x000964, 0x000980],
    [0x000982, 0x0009BB],
    [0x0009BD, 0x0009C0],
    [0x0009C5, 0x0009CC],
    [0x0009CE, 0x0009E1],
    [0x0009E4, 0x0009FD],
    [0x0009FF, 0x000A00],
    [0x000A03, 0x000A3B],
    [0x000A3D, 0x000A40],
    [0x000A43, 0x000A46],
    [0x000A49, 0x000A4A],
    [0x000A4E, 0x000A50],
    [0x000A52, 0x000A6F],
    [0x000A72, 0x000A74],
    [0x000A76, 0x000A80],
    [0x000A83, 0x000ABB],
    [0x000ABD, 0x000AC0],
    [0x000AC9, 0x000ACC],
    [0x000ACE, 0x000AE1],
    [0x000AE4, 0x000AF9],
    [0x000B02, 0x000B3B],
    [0x000B3D, 0x000B3E],
    [0x000B45, 0x000B4C],
    [0x000B4E, 0x000B55],
    [0x000B57, 0x000B61],
    [0x000B64, 0x000B81],
    [0x000B83, 0x000BBF],
    [0x000BC1, 0x000BCC],
    [0x000BCE, 0x000BFF],
    [0x000C01, 0x000C03],
    [0x000C05, 0x000C3D],
    [0x000C41, 0x000C45],
    [0x000C4E, 0x000C54],
    [0x000C57, 0x000C61],
    [0x000C64, 0x000C80],
    [0x000C82, 0x000CBB],
    [0x000CBD, 0x000CBE],
    [0x000CC0, 0x000CC5],
    [0x000CC7, 0x000CCB],
    [0x000CCE, 0x000CE1],
    [0x000CE4, 0x000CFF],
    [0x000D02, 0x000D3A],
    [0x000D3D, 0x000D40],
    [0x000D45, 0x000D4C],
    [0x000D4E, 0x000D61],
    [0x000D64, 0x000DC9],
    [0x000DCB, 0x000DD1],
    [0x000DD7, 0x000E30],
    [0x000E32, 0x000E33],
    [0x000E3B, 0x000E46],
    [0x000E4F, 0x000EB0],
    [0x000EB2, 0x000EB3],
    [0x000EBD, 0x000EC7],
    [0x000ECE, 0x000F17],
    [0x000F1A, 0x000F34],
    [0x000F3A, 0x000F70],
    [0x000F88, 0x000F8C],
    [0x000FBD, 0x000FC5],
    [0x000FC7, 0x00102C],
    [0x00103B, 0x00103C],
    [0x00103F, 0x001057],
    [0x00105A, 0x00105D],
    [0x001061, 0x001070],
    [0x001075, 0x001081],
    [0x001083, 0x001084],
    [0x001087, 0x00108C],
    [0x00108E, 0x00109C],
    [0x00109E, 0x00135C],
    [0x001360, 0x001711],
    [0x001715, 0x001731],
    [0x001735, 0x001751],
    [0x001754, 0x001771],
    [0x001774, 0x0017B3],
    [0x0017BE, 0x0017C5],
    [0x0017C7, 0x0017C8],
    [0x0017D4, 0x0017DC],
    [0x0017DE, 0x00180A],
    [0x00180E, 0x001884],
    [0x001887, 0x0018A8],
    [0x0018AA, 0x00191F],
    [0x001923, 0x001926],
    [0x001929, 0x001931],
    [0x001933, 0x001938],
    [0x00193C, 0x001A16],
    [0x001A19, 0x001A1A],
    [0x001A1C, 0x001A55],
    [0x001A63, 0x001A64],
    [0x001A6D, 0x001A72],
    [0x001A7D, 0x001A7E],
    [0x001A80, 0x001AAF],
    [0x001ABE, 0x001AFF],
    [0x001B04, 0x001B33],
    [0x001B3D, 0x001B41],
    [0x001B43, 0x001B6A],
    [0x001B74, 0x001B7F],
    [0x001B82, 0x001BA1],
    [0x001BA6, 0x001BA7],
    [0x001BAE, 0x001BE5],
    [0x001BEA, 0x001BEC],
    [0x001BF2, 0x001C2B],
    [0x001C34, 0x001C35],
    [0x001C38, 0x001CCF],
    [0x001CE9, 0x001CEC],
    [0x001CEE, 0x001CF3],
    [0x001CF5, 0x001CF7],
    [0x001CFA, 0x001DBF],
    [0x001E00, 0x0020CF],
    [0x0020DD, 0x0020E0],
    [0x0020E2, 0x0020E4],
    [0x0020F1, 0x002CEE],
    [0x002CF2, 0x002D7E],
    [0x002D80, 0x002DDF],
    [0x002E00, 0x003029],
    [0x00302E, 0x003098],
    [0x00309B, 0x00A66E],
    [0x00A670, 0x00A673],
    [0x00A67E, 0x00A69D],
    [0x00A6A0, 0x00A6EF],
    [0x00A6F2, 0x00A801],
    [0x00A803, 0x00A805],
    [0x00A807, 0x00A80A],
    [0x00A80C, 0x00A824],
    [0x00A827, 0x00A8C3],
    [0x00A8C6, 0x00A8DF],
    [0x00A8F2, 0x00A8FE],
    [0x00A900, 0x00A925],
    [0x00A92E, 0x00A946],
    [0x00A952, 0x00A97F],
    [0x00A983, 0x00A9B2],
    [0x00A9B4, 0x00A9B5],
    [0x00A9BA, 0x00A9BB],
    [0x00A9BE, 0x00A9E4],
    [0x00A9E6, 0x00AA28],
    [0x00AA2F, 0x00AA30],
    [0x00AA33, 0x00AA34],
    [0x00AA37, 0x00AA42],
    [0x00AA44, 0x00AA4B],
    [0x00AA4D, 0x00AA7B],
    [0x00AA7D, 0x00AAAF],
    [0x00AAB5, 0x00AAB6],
    [0x00AAB9, 0x00AABD],
    [0x00AAC2, 0x00AAEB],
    [0x00AAEE, 0x00AAF5],
    [0x00AAF7, 0x00ABE4],
    [0x00ABE6, 0x00ABE7],
    [0x00ABE9, 0x00ABEC],
    [0x00ABEE, 0x00DBFF],
    [0x00E000, 0x00FB1D],
    [0x00FB1F, 0x00FDFF],
    [0x00FE10, 0x00FE1F],
    [0x00FE30, 0x0101FC],
    [0x0101FE, 0x0102DF],
    [0x0102E1, 0x010375],
    [0x01037B, 0x010A00],
    [0x010A07, 0x010A0B],
    [0x010A10, 0x010A37],
    [0x010A3B, 0x010A3E],
    [0x010A40, 0x010AE4],
    [0x010AE7, 0x010D23],
    [0x010D28, 0x010F45],
    [0x010F51, 0x011000],
    [0x011002, 0x011037],
    [0x011047, 0x01107E],
    [0x011082, 0x0110B2],
    [0x0110B7, 0x0110B8],
    [0x0110BB, 0x0110FF],
    [0x011103, 0x011126],
    [0x011135, 0x011172],
    [0x011174, 0x01117F],
    [0x011182, 0x0111B5],
    [0x0111BF, 0x0111C8],
    [0x0111CD, 0x01122E],
    [0x011232, 0x011233],
    [0x011238, 0x01123D],
    [0x01123F, 0x0112DE],
    [0x0112E0, 0x0112E2],
    [0x0112EB, 0x0112FF],
    [0x011302, 0x01133A],
    [0x01133D, 0x01133F],
    [0x011341, 0x011365],
    [0x01136D, 0x01136F],
    [0x011375, 0x011437],
    [0x011440, 0x011441],
    [0x011447, 0x01145D],
    [0x01145F, 0x0114B2],
    [0x0114BB, 0x0114BE],
    [0x0114C4, 0x0115B1],
    [0x0115B6, 0x0115BB],
    [0x0115C1, 0x0115DB],
    [0x0115DE, 0x011632],
    [0x01163B, 0x01163C],
    [0x011641, 0x0116AA],
    [0x0116AE, 0x0116AF],
    [0x0116B8, 0x01171C],
    [0x011720, 0x011721],
    [0x01172C, 0x01182E],
    [0x01183B, 0x0119D3],
    [0x0119D8, 0x0119D9],
    [0x0119DC, 0x0119DF],
    [0x0119E1, 0x011A00],
    [0x011A0B, 0x011A32],
    [0x011A39, 0x011A3A],
    [0x011A3F, 0x011A46],
    [0x011A48, 0x011A50],
    [0x011A57, 0x011A58],
    [0x011A5C, 0x011A89],
    [0x011A9A, 0x011C2F],
    [0x011C40, 0x011C91],
    [0x011CA8, 0x011CA9],
    [0x011CB7, 0x011D30],
    [0x011D37, 0x011D39],
    [0x011D48, 0x011D8F],
    [0x011D92, 0x011D94],
    [0x011D98, 0x011EF2],
    [0x011EF5, 0x016AEF],
    [0x016AF5, 0x016B2F],
    [0x016B37, 0x016F4E],
    [0x016F50, 0x016F8E],
    [0x016F93, 0x01BC9C],
    [0x01BC9F, 0x01D166],
    [0x01D16A, 0x01D17A],
    [0x01D183, 0x01D184],
    [0x01D18C, 0x01D1A9],
    [0x01D1AE, 0x01D241],
    [0x01D245, 0x01D9FF],
    [0x01DA37, 0x01DA3A],
    [0x01DA6D, 0x01DA74],
    [0x01DA76, 0x01DA83],
    [0x01DA85, 0x01DA9A],
    [0x01DAB0, 0x01DFFF],
    [0x01E019, 0x01E01A],
    [0x01E02B, 0x01E12F],
    [0x01E137, 0x01E2EB],
    [0x01E2F0, 0x01E8CF],
    [0x01E8D7, 0x01E943],
    [0x01E94B, 0x0E00FF],
    [0x0E01F0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Nonspacing_Mark}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Nonspacing_Mark}"
);
testPropertyEscapes(
  /^\P{General_Category=Mn}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Mn}"
);
testPropertyEscapes(
  /^\P{gc=Nonspacing_Mark}+$/u,
  nonMatchSymbols,
  "\\P{gc=Nonspacing_Mark}"
);
testPropertyEscapes(
  /^\P{gc=Mn}+$/u,
  nonMatchSymbols,
  "\\P{gc=Mn}"
);
testPropertyEscapes(
  /^\P{Nonspacing_Mark}+$/u,
  nonMatchSymbols,
  "\\P{Nonspacing_Mark}"
);
testPropertyEscapes(
  /^\P{Mn}+$/u,
  nonMatchSymbols,
  "\\P{Mn}"
);

reportCompare(0, 0);
