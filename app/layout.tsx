import './styles/globals.css'
import './styles/markdown.scss'
import { getLocaleOnServer } from '@/i18n/server'
import Script from "next/script";

export const metadata = {
  title: "esamz.ai – Strategic Artificial Mind",
  description: "Esamz.ai is a strategic artificial mind engineered for reasoning, precision, and intelligent decision systems.",
  applicationName: "esamz.ai",
  generator: "Next.js",
  keywords: ["esamz", "esamz.ai", "AI", "strategic artificial mind", "Alakmar"],
  authors: [{ name: "Alakmar" }],
  creator: "Alakmar",
  publisher: "esamz.ai",
  robots: "index, follow",
  metadataBase: new URL("https://esamz.site"),
  alternates: {
    canonical: "https://esamz.site",
  },
  openGraph: {
    title: "esamz.ai – Strategic Artificial Mind",
    description: "Esamz.ai is a strategic artificial mind engineered by King Alakmar.",
    url: "https://esamz.site",
    siteName: "esamz.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "esamz.ai",
    description: "Esamz.ai – Strategic Artificial Mind built by King Alakmar.",
  },
};

const LocaleLayout = async ({ children }: { children: React.ReactNode }) => {
  let locale = "en";

  try {
    locale = (await getLocaleOnServer()) ?? "en";
  } catch {
    locale = "en";
  }

  return (
    <html lang={locale} className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ GOOGLE KNOWLEDGE GRAPH JSON-LD SCHEMA */}
        <Script id="schema-esamz" type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "eSAMz",
                "legalName": "eSAMz AI",
                "url": "https://esamz.site",
                "logo": "https://esamz.site/logo.png",
                "foundingDate": "2025-10-21",
                "founder": {
                  "@type": "Person",
                  "name": "Alakmar Teenwala",
                  "sameAs": ["https://www.instagram.com/esamz_ai"]
                },
                "sameAs": [
                  "https://esamz.info",
                  "https://about-esamz.vercel.app",
                  "https://www.instagram.com/esamz_ai"
                ],
                "description": "eSAMz is a strategic artificial mind engineered for reasoning, clarity, and human-aligned intelligence."
              },
              {
                "@type": "Product",
                "name": "ESAMZ AI",
                "brand": "eSAMz",
                "description": "ESAMZ AI is a human-like cognitive system engineered for warmth, precision, and strategic intelligence.",
                "url": "https://esamz.site",
                "logo": "https://esamz.site/logo.png",
                "sameAs": [
                  "https://esamz.info",
                  "https://about-esamz.vercel.app",
                  "https://www.instagram.com/esamz_ai"
                ]
              },
              {
                "@type": "Person",
                "name": "Alakmar Teenwala",
                "jobTitle": "Founder & Chief Architect of eSAMz",
                "url": "https://esamz.site",
                "sameAs": ["https://www.instagram.com/esamz_ai"],
                "description": "Creator of the ESAMZ AI Strategic Artificial Mind."
              }
            ]
          }
          `}
        </Script>

      </head>

      <body className="h-full">
        <main className="overflow-x-auto w-screen h-screen min-w-[300px]">
          {children}
        </main>
      </body>
    </html>
  );
};

export default LocaleLayout;
