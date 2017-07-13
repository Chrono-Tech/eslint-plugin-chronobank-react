module.exports = {
  'extends': ['eslint:recommended', 'plugin:chronobank/recommended', 'plugin:react/recommended'],
  plugins: [
      'react',
      'chronobank'
  ],
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'jsx-quotes': [2, 'prefer-single']
  }
}
