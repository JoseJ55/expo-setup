module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        singleQuote: true,
        bracketSameLine: true,
        endOfLine: 'auto',
      },
    ],
  },
  env: {
    jest: true,
  },
};
