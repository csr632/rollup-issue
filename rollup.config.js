import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default {
  input: "index.js",
  plugins: [
    commonjs(),
    resolve(),
    replace({
      "window.process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
  output: {
    format: "iife",
    file: "dist/rollup-out.js",
  },
  // treeshake: false
};
