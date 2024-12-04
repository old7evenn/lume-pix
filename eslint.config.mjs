import { eslint } from '@old7even/eslint';

export default eslint(
  {
    typescript: true,
    react: true,
    jsx: true,
  },
  {
    rules: {
      'unicorn/prefer-number-properties': 'off',
      'react/no-unstable-context-value': 'off',
      'old7even-react/function-component-definition': 'off',
      'ts/no-non-null-asserted-optional-chain': 'off',
    },
  }
);
