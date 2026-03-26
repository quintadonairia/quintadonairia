import { Layout } from '@/components/layouts/layout';
import { TranslationProvider } from '@/contexts/translation-context';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;

  return (
    <TranslationProvider locale={locale ?? 'pt'}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TranslationProvider>
  );
}
