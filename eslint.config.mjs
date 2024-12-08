import { eslint } from '@old7even/eslint';

export default eslint(
  {
    typescript: true,
    next: true,
  },
  {
    rules: {
      'node/prefer-global/process': ['warn', 'always'],
      'old7even-react/prop-types': 'off',
      'ts/no-non-null-asserted-optional-chain': 'off',
      'unicorn/prefer-number-properties': 'off',
    },
  }
);
