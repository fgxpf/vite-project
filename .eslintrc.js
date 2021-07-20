module.exports = {
  'root': true,
  'env': {
    'node': true,
    'browser': true,
    'es6': true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  'plugins': [
    'html', // 此插件用来识别.html 和 .vue文件中的js代码
  ],
  'rules': {
    // eslint校验不成功后，error或2则报错，warn或1则警告，off或0则无提示
    // 不要分号
    'semi': false,
    // 设置单引号
    'singleQuote': true,
    'camelcase': 0,
    'space-before-function-paren': 2
  },
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 6
  }
}