import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  lessOpinionated: true,
}, {
  files: ['docs/.vitepress/theme/**/*.ts'],
  rules: {
    'ts/no-unsafe-assignment': 'off',
  },
})
