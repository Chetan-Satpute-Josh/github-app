import globals from "globals";
import reactNative from "eslint-plugin-react-native";
import { fixupPluginRules } from "@eslint/compat";
import prittierplugin from "eslint-plugin-prettier";

/**
 * Pulled react native config from
 * https://github.com/facebook/react-native/blob/main/packages/eslint-config-react-native/index.js
 *
 * This can be extended directly from the react native package
 * once they converted it into flat config
 */
const reactNativeRecommended = {
  name: "react-native-recommended",
  plugins: {
    "react-native": fixupPluginRules(reactNative),
    prettier: prittierplugin,
  },
  rules: {
    // General
    "comma-dangle": ["error", "always-multiline"],
    "no-cond-assign": "warn",
    "no-console": "off",
    "no-const-assign": "error",
    "no-constant-condition": "warn",
    "no-control-regex": "warn",
    "no-debugger": "warn",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-empty": "off",
    "no-ex-assign": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-semi": "warn",
    "no-func-assign": "warn",
    "no-invalid-regexp": "warn",
    "no-sparse-arrays": "warn",
    "no-unreachable": "error",
    "use-isnan": "warn",
    "valid-typeof": "warn",

    // Best Practices
    curly: 1,
    "dot-notation": "warn",
    eqeqeq: ["warn", "allow-null"],
    "no-alert": "warn",
    "no-caller": "warn",
    "no-eval": "error",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-fallthrough": "warn",
    "no-implied-eval": "warn",
    "no-new-func": "error",
    "no-new-wrappers": "warn",
    "no-octal": "warn",
    "no-process-exit": "off",
    radix: "warn",

    // Variables
    "no-delete-var": "warn",
    "no-global-assign": "error",
    "no-shadow": "warn",
    "no-undef": "error",
    "no-undef-init": "warn",
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "none", ignoreRestSiblings: true },
    ],

    // Stylistic Issues
    "jsx-quotes": ["warn", "prefer-double"],
    "no-multi-spaces": "off",
    "brace-style": "off",
    "consistent-this": "warn",
    "eol-last": "warn",
    "func-names": "off",
    "new-parens": "warn",
    "no-trailing-spaces": "warn",
    semi: "warn",
    "space-infix-ops": "warn",
    "space-unary-ops": ["warn", { words: true, nonwords: false }],
    "prettier/prettier": "error",

    "react-native/no-unused-styles": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-color-literals": "error",
    "react-native/no-single-element-style-arrays": "error",
  },
};

export default [
  reactNativeRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["metro.config.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
