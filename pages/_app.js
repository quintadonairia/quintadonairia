import { useRouter } from 'next/router';
import Layout from '../components/layouts/Layout';
import { TranslationProvider } from '../contexts/TranslationContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <TranslationProvider locale={locale}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TranslationProvider>
  );
}
