const withPlugins = require("next-compose-plugins");
/**
 *
 */
const nextConfig = {
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US",
    },
};

module.exports = withPlugins([], nextConfig);
