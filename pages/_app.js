import "../styles/globals.css";
import Layout from "../components/layouts/Layout";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  if (pathname === "/home") {
    return <Component {...pageProps} />;
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
