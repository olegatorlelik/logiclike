module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@navigation': './src/navigation',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@screens': './src/screens',
          '@modals': './src/common/modals',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
