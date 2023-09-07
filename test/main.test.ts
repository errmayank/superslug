import { superslug } from '$src/main.js';
import { expect, expectTypeOf, it } from 'vitest';

it('test superslug() with custom separator', () => {
  const defaultResult = superslug();
  expectTypeOf(defaultResult).toBeString();
  expect(defaultResult).toMatch(/([a-z]+)-([a-z]+)-([a-z]+)/);

  const hyphenResult = superslug({ separator: '-' });
  expectTypeOf(hyphenResult).toBeString();
  expect(hyphenResult).toMatch(/([a-z]+)-([a-z]+)-([a-z]+)/);

  const underscoreResult = superslug({ separator: '_' });
  expectTypeOf(underscoreResult).toBeString();
  expect(underscoreResult).toMatch(/([a-z]+)_([a-z]+)_([a-z]+)/);

  const periodResult = superslug({ separator: '.' });
  expectTypeOf(periodResult).toBeString();
  expect(periodResult).toMatch(/([a-z]+)\.([a-z]+)\.([a-z]+)/);
});
