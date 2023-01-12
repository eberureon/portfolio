module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  // parserOptions: {
  //   parser: '@babel/eslint-parser',
  // },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:nuxt/recommended',
    'plugin:@intlify/eslint-plugin-vue-i18n/recommended'
  ],
  // add your custom rules here
  rules: {
    '@intlify/vue-i18n/no-raw-text': 'off'
  },
  settings: {
    'vue-i18n': {
      localeDir: './locales/*.json'
    }
  }
}
