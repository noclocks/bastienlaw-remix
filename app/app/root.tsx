import { json } from "@remix-run/node";

import {
  Link,
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation
} from "@remix-run/react";

import { useEffect } from "react";

import * as gtag from "./utils/gtags.client";

import "./styles/typography.css";
import './styles/global.css';

import ScrollToTopButton from "./components/ScrollToTopButton";
// import ChatbotScript from "./components/ChatBot";

// Load the GA tracking id from the .env
export const loader = async () => {
  return json({ gaTrackingId: "G-BQBBSBFGZG" });
};

export const meta: MetaFunction = () => {
  return [
    {title: "Bastien Law"},
    {name: "description", content: "Law Offices of Villard Bastien"},
  ];
};

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
      </head>
      <body>
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
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
