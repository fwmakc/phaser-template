module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: [
    '*.js',
    '*.config.ts',
    'vite/*',
    'node_modules/*',
  ],
  overrides: [{
    files: [
      'src/**/*.{ts,mts,cts,tsx}',
    ],
    rules: {
      // 'linebreak-style': ['error', 'unix'],
      semi: ['error', 'always'],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    },
  }]
};
