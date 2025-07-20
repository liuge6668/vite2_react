// .stylelintrc.js
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-html/svelte', 'stylelint-config-recess-order'],
  rules: {
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*$',
      {
        message: 'Selector should be camelCase or PascalCase',
        severity: 'warning'
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'scss/at-rule-no-unknown': null
      }
    },
    {
      files: ['**/*.css'],
      customSyntax: 'postcss'
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less'
    },
    {
      files: ['**/*.module.css'],
      customSyntax: 'postcss',
      rules: {
        'selector-class-pattern': [
          '^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*$',
          {
            message: 'Selector should be camelCase or PascalCase',
            severity: 'warning'
          }
        ]
      }
    }
  ]
}
