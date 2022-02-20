module.exports = {
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
          source: "/experiences",
          destination: "/coming-soon",
          permanent: false,
        },
        {
          source: "/restaurant",
          destination: "/coming-soon",
          permanent: false,
        },
        {
          source: "/products",
          destination: "/coming-soon",
          permanent: false,
        },
        {
          source: "/story",
          destination: "/coming-soon",
          permanent: false,
        },
        {
          source: "/contacts",
          destination: "/coming-soon",
          permanent: false,
        },
      ];
    } else {
      return [];
    }
  },
};
