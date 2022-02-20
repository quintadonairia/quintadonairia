module.exports = {
  reactStrictMode: true,
  async redirects() {
    if (process.env.NODE_ENV === "production") {
      return [
        {
          source: "/lodging",
          destination: "/maintenance",
          permanent: false,
        },
        {
          source: "/experiences",
          destination: "/maintenance",
          permanent: false,
        },
        {
          source: "/restaurant",
          destination: "/maintenance",
          permanent: false,
        },
      ];
    } else {
      return [];
    }
  },
};
