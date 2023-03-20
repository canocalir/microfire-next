const path = require("path");

module.exports = {
  i18n: {
    locales: ["default", "en", "tr"],
    defaultLocale: "default",
    localeDetection: true,
  },
  localePath: path.resolve("./public/static/locales")
};