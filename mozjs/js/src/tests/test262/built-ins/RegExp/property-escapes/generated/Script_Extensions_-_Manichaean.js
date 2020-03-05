// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Manichaean`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000640
  ],
  ranges: [
    [0x010AC0, 0x010AE6],
    [0x010AEB, 0x010AF6]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Manichaean}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Manichaean}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Mani}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Mani}"
);
testPropertyEscapes(
  /^\p{scx=Manichaean}+$/u,
  matchSymbols,
  "\\p{scx=Manichaean}"
);
testPropertyEscapes(
  /^\p{scx=Mani}+$/u,
  matchSymbols,
  "\\p{scx=Mani}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00063F],
    [0x000641, 0x00DBFF],
    [0x00E000, 0x010ABF],
    [0x010AE7, 0x010AEA],
    [0x010AF7, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Manichaean}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Manichaean}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Mani}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Mani}"
);
testPropertyEscapes(
  /^\P{scx=Manichaean}+$/u,
  nonMatchSymbols,
  "\\P{scx=Manichaean}"
);
testPropertyEscapes(
  /^\P{scx=Mani}+$/u,
  nonMatchSymbols,
  "\\P{scx=Mani}"
);

reportCompare(0, 0);
