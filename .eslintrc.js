const err = 'error'

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier/react'],

  plugins: ['react', 'react-native', 'react-hooks', 'better-styled-components'],

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  env: {
    es6: true,
    node: true,
    'react-native/react-native': true,
  },

  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    ErrorUtils: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    FormData: false,
    global: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    window: false,
    XMLHttpRequest: false,
  },

  rules: {
    strict: [err, 'never'],

    // eslint-plugin-react
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-undef': err,
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-typos': err,
    'react/react-in-jsx-scope': err,
    'react/require-render-return': err,
    'react/style-prop-object': 'warn',

    // eslint-plugin-react-native
    'react-native/no-unused-styles': err,
    'react-native/sort-styles': err,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-single-element-style-arrays': err,

    // eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': err,

    // styled-components
    'better-styled-components/sort-declarations-alphabetically': 2,
  },

  overrides: [
    {
      files: ['**/*.test.js', '__mocks__/**/*.js'],

      extends: ['plugin:jest/recommended', 'plugin:jest-formatting/strict'],

      plugins: ['jest', 'jest-formatting'],

      env: {
        jest: true,
        'jest/globals': true,
      },

      rules: {
        'prefer-expect-assertions': 'off',
      },
    },
  ],
}
