import { expect, expectTypeOf, it } from 'vitest';

import { adjectives } from '$src/lib/adjectives.js';
import { nouns } from '$src/lib/nouns.js';
import { verbs } from '$src/lib/verbs.js';
import { randomInteger, randomAdjective, randomNoun, randomVerb } from '$src/util/main.js';

it('stress test randomInteger()', () => {
  let min = 0;
  let max = 100_000_000;

  for (let i = 0; i < 10_000; i++) {
    const integer = randomInteger(min, max);

    expectTypeOf(integer).toBeNumber();
    expect(integer).toEqual(parseInt(String(integer)));

    min = randomInteger(min, max);
    max = randomInteger(min, max);

    if (max - min < 10) {
      min = 0;
      max = 100_000_000;
    }
  }
});

it('stress test randomAdjective()', () => {
  for (let i = 0; i < 10_000; i++) {
    const adjective = randomAdjective();

    expectTypeOf(adjective).toBeString();
    expect(adjectives).toContainEqual(adjective);
  }
});

it('stress test randomNoun()', () => {
  for (let i = 0; i < 10_000; i++) {
    const noun = randomNoun();

    expectTypeOf(noun).toBeString();
    expect(nouns).toContainEqual(noun);
  }
});

it('stress test randomVerb()', () => {
  for (let i = 0; i < 10_000; i++) {
    const verb = randomVerb();

    expectTypeOf(verb).toBeString();
    expect(verbs).toContainEqual(verb);
  }
});
