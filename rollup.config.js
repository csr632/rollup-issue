import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: {
    // doesn't work when have multiple inputs
    react: "react",
    "react-dom": "react-dom",
  },
  plugins: [
    commonjs({
      namedExports: {
        react: detectExports("react"),
        "react-dom": detectExports("react-dom"),
      },
    }),
    nodeResolve({
      mainFields: ["browser:module", "module", "browser", "main"],
      extensions: [".mjs", ".cjs", ".js", ".json"],
    }),
  ],
  output: {
    format: "esm",
    dir: "dist",
    exports: "named",
  },
};

function detectExports(filePath) {
  try {
    const fileLoc = require.resolve(filePath, { paths: [cwd] });
    if (fs.existsSync(fileLoc)) {
      return Object.keys(require(fileLoc)).filter((e) => e[0] !== "_");
    }
  } catch (err) {
    // ignore
  }
}
