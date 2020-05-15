import commonjs from "@rollup/plugin-commonjs";

export default {
  input: {
    t1: "test1.js",
    t2: "test2.js",
  },
  plugins: [commonjs()],
  output: {
    format: "esm",
    dir: "dist",
    exports: "named",
  },
};
