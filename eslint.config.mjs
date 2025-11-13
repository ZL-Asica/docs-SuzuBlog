import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  react: true,
  formatters: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
})
