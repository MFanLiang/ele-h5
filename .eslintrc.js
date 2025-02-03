module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    parser: 'vue-eslint-parser',
    extends: [
      'plugin:prettier/recommended',
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
    },
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
  },
};
