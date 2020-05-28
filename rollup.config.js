import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

import * as react from "react";
import * as reactDom from "react-dom";
import * as reactIs from "react-is";
import * as propTypes from "prop-types";

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
