import { useRouter } from "next/router";
import Layout from "../components/layouts/Layout";
import "../styles/globals.css";

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
