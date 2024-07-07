import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import strip from "@rollup/plugin-strip";
import typescript from "rollup-plugin-typescript2";
import externals from "rollup-plugin-node-externals";
import postcss from "rollup-plugin-postcss";


export default {
  input: "src\\stories\\index.ts",
  output: {
    // 出口文件
    dir: "lib",
    format: "es", // es模块导出，支持按需加载
    name: "react-playground",
    exports: "named", // 指定导出模式（自动、默认、命名、无）
    preserveModules: true, // 保留模块结构
    // preserveModulesRoot: "src", // 将保留的模块放在根级别的此路径下
  },
  plugins: [

    // 自动将dependencies依赖声明为 externals
    externals({
      devDeps: false,
    }),
    // // 处理外部依赖
    resolve(),
    // // 支持基于 CommonJS 模块引入
    commonjs(),
    // 支持 typescript，并导出声明文件
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          jsx: "react-jsx",
          allowSyntheticDefaultImports: true,
          moduleResolution: "node"
        },
      }
    }),
    postcss(),
    strip()
  ],
}