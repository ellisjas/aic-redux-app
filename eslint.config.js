// eslint.config.js
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
    },
  },
  prettier,
])
