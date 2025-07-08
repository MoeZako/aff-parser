import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import node from "rollup-plugin-polyfill-node";

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "src/index.ts",
  plugins: [
    commonjs(),
    resolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    node(),
  ],
  output: [
    {
      format: "esm",
      file: "dist/index.browser.min.js",
      sourcemap: true,
      plugins: [terser()],
    },
    {
      format: "umd",
      name: "AffParser",
      file: "dist/aff-parser.umd.min.js",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
};
export default config;
