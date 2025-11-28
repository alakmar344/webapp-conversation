import './styles/globals.css'
import './styles/markdown.scss'
import { getLocaleOnServer } from '@/i18n/server'

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
    description:
      "Esamz.ai is a strategic artificial mind engineered by King Alakmar.",
    url: "https://esamz.site",
    siteName: "esamz.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "esamz.ai",
    description:
      "Esamz.ai – Strategic Artificial Mind built by King Alakmar.",
  },
};

const LocaleLayout = async ({ children }: { children: React.ReactNode }) => {
  const locale = await getLocaleOnServer();
  
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="h-full">
        <div className="overflow-x-auto">
          <main className="w-screen h-screen min-w-[300px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default LocaleLayout;
