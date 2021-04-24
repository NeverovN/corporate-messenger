module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@': './src',
          root: './',
          app: ['./src/app'],
          auth: ['./src/auth'],
          chat: ['./src/chat'],
          common: ['./src/common'],
          settings: ['./src/settings'],
        },
      },
    ],
  ],
};
