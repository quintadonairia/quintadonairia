import { Metadata } from "next";
import Layout from "../components/layouts/Layout";
import { TranslationProvider } from "../contexts/TranslationContext";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Quintadonairia",
  description:
    "A wellness haven, combining wine and olive oil with the rich Portuguese cuisine",
  themeColor: "#faf6f0",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const locale = params.locale || "en";

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Playfair+Display:wght@400;600&display=swap&family=Fraunces:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TranslationProvider locale={locale}>
          <Layout>{children}</Layout>
        </TranslationProvider>
      </body>
    </html>
  );
}
