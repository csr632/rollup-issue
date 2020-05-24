import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: {
    // same issue happens when bundling react and react-dom
    // we should test with these after the issue is fixed
    // react: "react",
    // "react-dom": "react-dom",
    test1: "./test1.js",
    test2: "./test2.js",
  },
  plugins: [commonjs(), resolve()],
  output: {
    format: "esm",
    dir: "dist",
  },
};
