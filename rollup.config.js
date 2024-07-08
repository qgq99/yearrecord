import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import strip from "@rollup/plugin-strip";
import typescript from "rollup-plugin-typescript2";
import externals from "rollup-plugin-node-externals";
import postcss from "rollup-plugin-postcss";
import generatePackageJson from "rollup-plugin-generate-package-json";


const generatePackageJsonOptions = {
  baseContents: pkg => {
    return {
      name: "react-playground",
      dependencies: {}
    }
  }
};



export default {
  input: "src\\index.ts",
  output: {
    // 出口文件
    dir: "lib",
    format: "es", // es模块导出，支持按需加载
    name: "react-playground",
    exports: "named", // 指定导出模式（自动、默认、命名、无）
    preserveModules: true, // 保留模块结构
    preserveModulesRoot: "src", // 将保留的模块放在根级别的此路径下
  },
  plugins: [
    externals({
      devDeps: false,
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          jsx: "react-jsx",
          allowSyntheticDefaultImports: true,
          moduleResolution: "node",
        },
      }
    }),
    postcss(),
    generatePackageJson(generatePackageJsonOptions),
    strip()
  ],
}