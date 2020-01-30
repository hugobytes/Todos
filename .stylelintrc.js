module.exports = {
  processors: [
    [
      'stylelint-processor-styled-components',
      {
        moduleName: 'styled-components',
        importName: 'default',
        strict: false,
      },
    ],
  ],

  extends: ['stylelint-config-recommended', 'stylelint-config-styled-components'],

  plugins: ['stylelint-react-native', 'stylelint-order'],

  rules: {
    'no-empty-source': null,
    'declaration-empty-line-before': null,
    'no-missing-end-of-source-newline': null,
    'font-family-no-missing-generic-family-keyword': null,

    'react-native/css-property-no-unknown': true,
    'react-native/font-weight-no-ignored-values': true,
    'react-native/style-property-no-unknown': true,

    'order/properties-alphabetical-order': true,
  },
}
