module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier' // Add this
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier' // Add this
  ],
  rules: {
    // Existing rules...
    'react/function-component-definition': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    
    // Add these React-specific fixes:
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    
    // JSX formatting
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': ['error', { 'when': 'never', 'children': true }],
    'react/jsx-wrap-multilines': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    
    // Prettier integration
    'prettier/prettier': 'error',
    
    // Your existing rules...
    'no-tabs': 'error',
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'no-unused-vars': 'warn',
    // ... rest of your rules
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};