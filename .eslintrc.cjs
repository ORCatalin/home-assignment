const path = require("path");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: path.join(__dirname),
    project: ["./tsconfig.json"],
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "promise",
    "unused-imports",
    "simple-import-sort",
    "prettier"
  ],
  
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
  rules: {
    "unused-imports/no-unused-imports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages. `react` related packages come first
          ["^react", "^@?\\w"],
          // Internal packages
          ["^(assets|common|components)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$", "^.+\\.s?css$"],
        ],
      },
    ],
    "sort-imports": "off",
    "import/order": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/no-unused-prop-types": "off",
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": 2,
    "react/no-unstable-nested-components": "off",
    
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-throw-literal": "warn",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/default-param-last": "off",
    "@typescript-eslint/no-explicit-any": "error",
    
    "import/prefer-default-export": "off",
    "import/no-absolute-path": "off",
    
    "promise/no-nesting": "off",
    "promise/catch-or-return": "off",
    "promise/always-return": "off",
    "promise/catch-or-return": "warn",
    
    "jsx-a11y/anchor-is-valid": "off",
    
    "no-nested-ternary": "warn",
    "global-require": "warn",
    "consistent-return": "warn",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
    "no-unused-vars": "error",
    "no-console": "error",
    
    "react-hooks/exhaustive-deps": "warn"
  },
}
