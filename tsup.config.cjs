import { defineConfig } from 'tsup';
import pkg from './package.json';

const banner = `/*
 * ${pkg.name} v${pkg.version}
 * Copyright (c) 2023-present ${pkg.author}
 * Released under the ${pkg.license} License
 */`;

/** @type {import('tsup').Options} */
const tsupConfig = {
  banner: { js: banner },
  bundle: true,
  clean: false,
  keepNames: true,
  minify: true,
  minifyWhitespace: true,
  outExtension({ format }) {
    switch (format) {
      case 'cjs': {
        return { js: '.cjs' };
      }
      case 'esm': {
        return { js: '.mjs' };
      }
      default: {
        return { js: '.js' };
      }
    }
  },
  dts: true,
  format: ['cjs', 'esm'],
  shims: true,
  target: ['es6'],
  treeshake: true,
  entry: {
    main: './src/main.ts',
  },
  outDir: './build',
};

export default defineConfig(tsupConfig);
