// eslint-disable-next-line no-undef
module.exports = {
	env: { browser: true, es2020: true },
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
	globals: {
		window: true,
		module: true
	},
	rules: {
		semi: [2, 'always'],
		indent: ['error', 'tab'],
		'no-console': 0
	}
};
