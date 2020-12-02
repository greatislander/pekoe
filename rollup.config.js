import pkg from "./package.json";

export default [
    // browser-friendly UMD build
    {
        input: "src/scripts/index.js",
        output: {
            file: pkg.main,
            format: "iife"
        }
    }
];
