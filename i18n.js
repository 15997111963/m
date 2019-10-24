// import NextI18Next from 'next-i18next'
const NextI18Next = require('next-i18next').default

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  localePath: 'static/locales'
})
/**
 * appWithTranslation 初始化实例包裹
 * config
 * withTranslation    组件包裹 高阶函数
 * withNamespaces
 * i18n               可以拿到languagechange和当前语言
 * .........
 */
module.exports = { ...NextI18NextInstance }
