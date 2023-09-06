import { superslug } from '$src/main.js';
import { expect, it } from 'vitest';

it('superslug result', () => {
  const result = superslug();
  expect(result).toBe('helo-this-is-superslug');
});
