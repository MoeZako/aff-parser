import pluginTypeScript from "@rollup/plugin-typescript";

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "./src/index.ts",
  plugins: [pluginTypeScript()],
  external: [/antlr4ts/],
  output: [
    {
      format: "esm",
      file: "dist/index.mjs",
      sourcemap: true,
      sourcemapExcludeSources: true,
    },
    {
      format: "cjs",
      file: "dist/index.cjs",
      sourcemap: true,
      sourcemapExcludeSources: true,
    },
  ],
};
export default config;
