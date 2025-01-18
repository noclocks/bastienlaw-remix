import React from "react";

import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import { useEffect } from "react";

import * as gtag from "./utils/gtags.client";

import "./styles/typography.css";
import './styles/global.css';

import ScrollToTopButton from "./components/ScrollToTopButton";
// import ChatbotScript from "./components/ChatBot";

export const meta: MetaFunction = () => {
  return [
    { title: "Bastien Law" },
    { name: "description", content: "Law Offices of Villard Bastien" },
  ];
};

function GoogleAnalytics() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BQBBSBFGZG"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BQBBSBFGZG');
          `,
        }}
      />
    </>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const gaTrackingId = "G-BQBBSBFGZG";

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          async
          id="gtm-init"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K6DB8PVD');
`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6DB8PVD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {process.env.NODE_ENV === "development" || !gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
        {[children, <ScrollToTopButton key={0} />]}
        <ScrollRestoration />
        <Scripts />
        {/* <ChatbotScript /> */}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <GoogleAnalytics /> {/* Include Google Analytics here */}
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
