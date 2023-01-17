module.exports = {
  'root': true,
  'env': {
    es6: true,
    node: true,
  },
  'extends': [
    'eslint:recommended',
    'google',
  ],
  'rules': {
    quotes: ['error', 'single'],
  },
  'parser': '@babel/eslint-parser',
  "indent": ["error", 2]
};
