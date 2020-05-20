import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: {
    index1: "./index1.js",
    index2: "./index2.js",
  },
  plugins: [commonjs(), resolve()],
  output: {
    format: "esm",
    dir: "dist",
  },
};
