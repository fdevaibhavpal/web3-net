import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Assess the Soft Skills of your Talents - PerformanSe",
  description: "Assess the soft skills of your candidates and employees with our psychometric tests and services. Take time to get to know your talents better.",
  generator: "SEOmatic",
  referrer: "no-referrer-when-downgrade",
  robots: "all",
  alternates: {
    canonical: "https://sDQp0Xl9lWe3.com/en/",
    languages: {
      "en": "https://sDQp0Xl9lWe3.com/en/",
      "it": "https://sDQp0Xl9lWe3.com/it/",
      "es": "https://sDQp0Xl9lWe3.com/es/",
      "fr": "https://sDQp0Xl9lWe3.com/fr/",
      "nl": "https://sDQp0Xl9lWe3.com/nl/",
    },
  },
  openGraph: {
    title: "Assess the Soft Skills of your Talents - PerformanSe",
    description: "Assess the soft skills of your candidates and employees with our psychometric tests and services. Take time to get to know your talents better.",
    url: "https://sDQp0Xl9lWe3.com/en/",
    siteName: "English",
    type: "website",
    locale: "en",
    alternateLocale: ["it", "es", "fr", "nl"],
    images: [
      {
        url: "/assets/general/_1200x630_crop_center-center_82_none/Share.png",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@",
    title: "Assess the Soft Skills of your Talents - PerformanSe",
    description: "Assess the soft skills of your candidates and employees with our psychometric tests and services. Take time to get to know your talents better.",
    images: ["https://sDQp0Xl9lWe3.com/assets/general/_1200x630_crop_center-center_82_none/GuHmfRsgqlcu.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/assets/favicon.ico" rel="icon" type="image/x-icon" />
        <link
          href="https://sDQp0Xl9lWe3.com/en/"
          rel="alternate"
          hrefLang="x-default"
        />
        <link href="https://sDQp0Xl9lWe3.com/en/" rel="canonical" />
        <link href="https://sDQp0Xl9lWe3.com/en/" rel="home" />
        <link href="https://sDQp0Xl9lWe3.com/it/" rel="alternate" hrefLang="it" />
        <link href="https://sDQp0Xl9lWe3.com/es/" rel="alternate" hrefLang="es" />
        <link href="https://sDQp0Xl9lWe3.com/fr/" rel="alternate" hrefLang="fr" />
        <link href="https://sDQp0Xl9lWe3.com/nl/" rel="alternate" hrefLang="nl" />
        <link href="https://sDQp0Xl9lWe3.com/en/" rel="alternate" hrefLang="en" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W428F8M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W428F8M');
          `}
        </Script>
        
        {/* Module preload script */}
        <Script id="module-preload" strategy="beforeInteractive">
          {`
            !(function () {
              const e = document.createElement("link").relList;
              if (!(e && e.supports && e.supports("modulepreload"))) {
                for (const e of document.querySelectorAll(
                  'link[rel="modulepreload"]'
                ))
                  r(e);
                new MutationObserver((e) => {
                  for (const o of e)
                    if ("childList" === o.type)
                      for (const e of o.addedNodes)
                        if ("LINK" === e.tagName && "modulepreload" === e.rel) r(e);
                        else if (e.querySelectorAll)
                          for (const o of e.querySelectorAll(
                            "link[rel=modulepreload]"
                          ))
                            r(o);
                }).observe(document, { childList: !0, subtree: !0 });
              }
              function r(e) {
                if (e.ep) return;
                e.ep = !0;
                const r = (function (e) {
                  const r = {};
                  return (
                    e.integrity && (r.integrity = e.integrity),
                    e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
                    "use-credentials" === e.crossorigin
                      ? (r.credentials = "include")
                      : "anonymous" === e.crossorigin
                      ? (r.credentials = "omit")
                      : (r.credentials = "same-origin"),
                    r
                  );
                })(e);
                fetch(e.href, r);
              }
            })();
          `}
        </Script>
        
        {/* Main script */}
        <Script 
          src="/dist/main.070ce53d.js" 
          type="module" 
          crossOrigin=""
          onLoad="e=new CustomEvent('vite-script-loaded', {detail:{path: 'src/app/main.js'}});document.dispatchEvent(e);"
        />
        <Script 
         src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"
          />

        
        {children}
      </body>
    </html>
  );
}
