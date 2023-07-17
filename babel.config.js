module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['./src'],
        alias: {
          '@components': './components',
          '@actions': './actions',
          '@screens': './screens',
          '@reducers': './reducers',
          '@services': './services',
          '@store': './store',
          '@utils': './utils',
          '@res': './res',
        },
      },
    ],
    'jest-hoist',
  ],
};
