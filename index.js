module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
    'stylelint-config-recess-order'
  ],
  syntax: 'scss',
  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-prettier'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'prettier/prettier': true, // Prettierのルールを読込
    'order/order': [
      // 変数の要素を優先的に先頭へ
      ['dollar-variables', 'declarations', 'rules']
    ],
    'color-hex-length': 'short' // HEXの色指定を3桁にできる場合は丸める
  }
}
