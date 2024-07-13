import path from "node:path"
import { readFile } from "node:fs";


const getRandomChars = (t) => {
  return Math.random().toString(36).slice(-t);
}


/**
 * css注入方法的实现代码, 实现方法是在<head>标签下添加style标签并将css代码写入其中
 */
const cssInjectFuncCode = `function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

export { styleInject as default };
`;


/**
 * 
 * @param {string} css 
 * @param {string} jsPath 对应css文件生成的js文件的路径 
 * @returns 
 */
const css2Js = (css, jsPath) => {
  const randomChars = getRandomChars(4);

  return `import styleInject from './${path.basename(jsPath)}';

var css_${randomChars} = \`${css}\`;
styleInject(css_${randomChars});

export { css_${randomChars} as default };`
}





const getAbsolutePath = (absoluteFilePath, relativePath) => {
  // 获取文件所在的目录
  const dirPath = path.dirname(absoluteFilePath);
  // 解析相对路径为绝对路径
  const absolutePath = path.resolve(dirPath, relativePath);
  return absolutePath;
}

const readFileContent = (filePath) => {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}






export default function inject() {
  // emitFile返回一个referenceId, 通过该id可以访问到创建的文件的url
  let cssInjectJsReferenceId = null;

  // 该数组存放被动态添加的external路径项
  const additionalExternalItems = [];

  return {
    name: "css-inject",

    // 将css代码注入方法写入一个单独的js文件
    buildStart: function (options) {
      /**
       * 实现在任意钩子中向配置项external添加元素的思路:
       * options钩子执行后, external属性被转换为一个函数, 类型推测为: string => boolean
       * 1. 准备一个数组a存放被动态添加的外部路径,
       * 2. 用一个变量oriExternal保存原始external函数,
       * 3. 定义一个新函数, 类型同样为 (path:string) => boolean, 该函数逻辑为 return oriExternal(path) || a.include(path);
       * 4. 用新函数替换配置对象的external属性,
       * 5. 提供一个在整个插件对象中可访问的方法用来向数组a添加元素 
       */
      const originalExternalFunc = options.external;
      options.external = (item) => originalExternalFunc(item) || additionalExternalItems.includes(item);  //3

      // emitFile返回一个referenceId, 通过该id可以访问到创建的文件的url
      cssInjectJsReferenceId = this.emitFile({
        type: "prebuilt-chunk", // 预构建chunk, 不需要以某一个现有文件作为入口
        fileName: `stylejs/css-inject.js`,
        code: cssInjectFuncCode
      });
    },

    /**
     * transform hook
     * @param {string} code 
     * @param {string} id 
     */
    transform: async function (code, id) {
      const regex = /import\s+["']\.[\w/]+\.css["'];?/g;  //用以获取css导入语句的正则表达式
      let cssImports = code.match(regex);
      if (Array.isArray(cssImports)) {  // 若无css导入语句, 匹配结果为空, 遍历会报错
        for (let i of cssImports) {
          /**
           * 1. 通过当前代码文件的路径和导入css的文件名组合css文件绝对路径
           * 2. 读取css文件内容
           * 3. 将css内容嵌入到js代码中并生成一个chunk
           * 4. 将源代码中的css导入语句替换为导入生成的chunk
           */
          // 1
          const filename = i.split("\"")[1];
          const abPath = getAbsolutePath(id, filename);
          // 2
          await readFileContent(abPath).then(data => {
    // 3, 同时记录新生成chunk的id
            const curCSS2JsFileReferenceId = this.emitFile({
              type: "prebuilt-chunk",
              fileName: `stylejs/${path.basename(abPath)}.js`,
              code: css2Js(data, this.getFileName(cssInjectJsReferenceId))
            });
            //4
            const curCSS2JsFileImportPath = `../${this.getFileName(curCSS2JsFileReferenceId)}`
            code = code.replace(i, `import "${curCSS2JsFileImportPath}"`);
            // 将新生成的导入标记为external
            additionalExternalItems.push(curCSS2JsFileImportPath);
          }).catch(err => {
            throw new Error(err);
          });
        }
      }
      return {
        code
      }
    },
  }
}