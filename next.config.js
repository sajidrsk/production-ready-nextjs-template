const path = require("path");
const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	serverRuntimeConfig: {},
	publicRuntimeConfig: {
		BASE_URL: process.env.BASE_URL,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "src", "styles")],
	},
	i18n,
};

module.exports = nextConfig;
