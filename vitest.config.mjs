import { cwd } from 'node:process';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: [`${cwd()}/test/**/*.test.ts`],
    alias: {
      '$src/': `${cwd()}/src/`,
    },
    coverage: {
      provider: 'v8',
      reporter: ['json', 'lcov', 'text', 'clover', 'text-summary'],
    },
  },
});
