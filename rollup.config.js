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
    commonjs({
      namedExports: {
        react: Object.keys(react),
        "react-dom": Object.keys(reactDom),
        "react-is": Object.keys(reactIs),
        "prop-types": Object.keys(propTypes),
      },
    }),
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
