module.exports = function(api) {
  const isProd = api.env('production')

  const presets = ['module:metro-react-native-babel-preset']
  let plugins = [
    [
      'module-resolver',
      {
        alias: {
          actions: './src/actions',
          assets: './src/assets',
          components: './src/components',
          routes: './src/routes',
          theme: './src/theme',
          utils: './src/utils',
          reducers: './src/reducers',
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
