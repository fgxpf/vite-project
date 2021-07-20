//declare 担保这些变量和模块存在，并声明了相应类型，编译的时候不需要提示错误
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
