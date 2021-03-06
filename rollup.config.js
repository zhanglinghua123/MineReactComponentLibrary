import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser"
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import svg from 'rollup-plugin-svg'
import image from '@rollup/plugin-image';
const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                // sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                // sourcemap: true,
            },
        ],
        plugins: [
            image(),
            // svg(),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                // sourceMap:true,
                tsconfig: "./tsconfig.json",
                exclude: [
                    // Exclude test files
                    /\.test.((js|jsx|ts|tsx))$/,
                    // Exclude story files
                    /\.stories.((js|jsx|ts|tsx|mdx))$/,
                ],
            }),
            postcss(),
            terser(),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];