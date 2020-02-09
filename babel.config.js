module.exports = function(api) {
  const isProd = api.env('production')

  const presets = ['module:metro-react-native-babel-preset']
  let plugins = [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          routes: './src/routes',
          theme: './src/theme',
          utils: './src/utils',
        },
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-styled-components',
    'lodash',
    ...(isProd ? ['transform-remove-console'] : []),
  ]

  return {
    presets,
    plugins,
  }
}
