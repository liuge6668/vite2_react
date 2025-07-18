module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'selector-class-pattern': null
  }
};