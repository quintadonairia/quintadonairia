module.exports = {
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  async redirects() {
    if (process.env.NODE_ENV === "production") {
      return [
        {
          source: "/lodging",
          destination: "/coming-soon",
          permanent: false,
        },
        {
          source: "/restaurant",
          destination: "/coming-soon",
          permanent: false,
        },
      ];
    } else {
      return [];
    }
  },
};
