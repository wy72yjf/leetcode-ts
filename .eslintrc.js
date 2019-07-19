module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/indent': [2, 2, {
      'SwitchCase': 1
    }],
    '@typescript-eslint/camelcase': [0, {
      'properties': 'always'
    }],
    '@typescript-eslint/no-array-constructor': 2,
    '@typescript-eslint/no-extra-parens': [2, 'functions'],
    '@typescript-eslint/no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/semi': [2, 'never']
  }
}
