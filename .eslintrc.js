module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'webextensions': true,
  },
  'extends': [
    'google',
    'eslint:recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
    'indent': ['error', 2],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'functions': 'never'
      }
    ],
    'no-cond-assign': ['error', 'always'],
    'max-len': ["error", {"code": 140}],
    'no-console': 2,
  },
};
