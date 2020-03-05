// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Sora_Sompeng`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x0110D0, 0x0110E8],
    [0x0110F0, 0x0110F9]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Sora_Sompeng}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Sora_Sompeng}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Sora}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Sora}"
);
testPropertyEscapes(
  /^\p{scx=Sora_Sompeng}+$/u,
  matchSymbols,
  "\\p{scx=Sora_Sompeng}"
);
testPropertyEscapes(
  /^\p{scx=Sora}+$/u,
  matchSymbols,
  "\\p{scx=Sora}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0110CF],
    [0x0110E9, 0x0110EF],
    [0x0110FA, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Sora_Sompeng}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Sora_Sompeng}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Sora}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Sora}"
);
testPropertyEscapes(
  /^\P{scx=Sora_Sompeng}+$/u,
  nonMatchSymbols,
  "\\P{scx=Sora_Sompeng}"
);
testPropertyEscapes(
  /^\P{scx=Sora}+$/u,
  nonMatchSymbols,
  "\\P{scx=Sora}"
);

reportCompare(0, 0);
