// reference: https://typescript-eslint.io/getting-started

module.exports = {
  // this file is the root-level one used by the project and ESLint should not search beyond this directory for config files.
  root: true,
  // tells ESLint to use the @typescript-eslint/parser package you installed to parse your source files.
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // find the closest `tsconfig.json` for each source file
    project: true,
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    // ESLint's inbuilt "recommended" config, well-known best-practices.
    'eslint:recommended',
    'plugin:react/recommended',
    // turns on TypeScript-specific rules
    'plugin:@typescript-eslint/recommended',
    // recommended rules that additionally require type information
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    // disable `unbound-method` for jest test files
    {
      files: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
      plugins: ['jest'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],

  // additional rules
  rules: {
    // Vite automatically import React for us, so no need this rule
    'react/react-in-jsx-scope': 'off',

    // allow importing asset with Vite using '/'
    'import/no-absolute-path': 'off',

    // Disable the rule that require default exports in a module
    'import/prefer-default-export': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
    '@typescript-eslint/unbound-method': 'error',

    // allow import `devDependencies`
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // test files
          '**/*{.,_}{test,spec}.{ts,tsx}',

          // root js, ts files
          '*.{j,t}s',
        ],
      },
    ],
  },
};
