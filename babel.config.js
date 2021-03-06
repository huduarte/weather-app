module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.json'
          ],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@services': './src/services',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@routes': './src/routes',
          }
        }
      ]
    ]
  }
}