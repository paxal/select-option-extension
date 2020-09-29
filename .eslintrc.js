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
    'no-alert': ['error'],
    'indent': ['error', 2],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        functions: 'never'
      }
    ],
    'no-cond-assign': ['error', 'always'],
    'max-len': ["error", {code: 140}],
    'no-console': 2,
    'arrow-spacing': ['error', { before: true, after: true }],
    'template-curly-spacing': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'key-spacing': ['error', {mode: 'strict'}],
    'spaced-comment': ['error', 'always'],
    'no-multiple-empty-lines': ['error', {max: 1,maxEOF: 0 }],
    'space-infix-ops': ['error'],
    'multiline-comment-style': ["error", "starred-block"],
    'block-spacing': ['error', 'always'],
    'prefer-const': ['error'],
    'no-const-assign': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
  },
};
