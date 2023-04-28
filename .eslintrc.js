module.exports = {
	extends: ["next/core-web-vitals", "next", "eslint:recommended", "prettier"],
	rules: {
		"no-console": "warn",
		"no-unused-vars": "warn",
	},
	env: {
		jest: true,
	},
};
