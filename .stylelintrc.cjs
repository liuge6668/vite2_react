module.exports = {
  extends: [
    "stylelint-config-standard", // 配置stylelint拓展插件
    "stylelint-config-prettier", // 配置stylelint和prettier兼容
    "stylelint-config-scss", // 配置stylelint和scss兼容
    "stylelint-config-less", // 配置stylelint和less兼容
    "stylelint-config-recess-order" // 配置stylelint css属性书写顺序插件
  ],
  plugins: ["stylelint-order", "stylelint-prettier", "stylelint-less", "stylelint-scss"],
  rules: {
    "selector-class-pattern": null
  }
}
