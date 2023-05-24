module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    es2021: true,
  },

  // ignore files in root directory
  ignorePatterns: ['/*.*'],

  // additional rules
  rules: {
    // Vite automatically import React for us, so no need this rule
    'react/react-in-jsx-scope': 'off',

    // allow importing asset with Vite using '/'
    'import/no-absolute-path': 'off',

    // Disable the rule that require default exports in a module
    'import/prefer-default-export': 'off',

    // allow import `devDependencies`
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
        ]
      }
    ]
  },
};
