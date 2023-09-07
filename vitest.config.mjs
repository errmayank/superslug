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
      reporter: ['text', 'html', 'clover', 'json'],
    },
  },
});
