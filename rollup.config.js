import commonjs from "@rollup/plugin-commonjs";

export default {
  input: {
    index1: "./index1.js",
    index2: "./index2.js",
  },
  plugins: [commonjs()],
  output: {
    format: "esm",
    dir: "dist",
  },
};
