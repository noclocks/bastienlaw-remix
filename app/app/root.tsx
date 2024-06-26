import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./styles/typography.css";
import './styles/global.css';
import ScrollToTopButton from "./components/ScrollToTopButton";
// import "./styles/dsethtml.css"
// import "./styles/dsethtml2.css"

// import ChatbotScript from "./components/ChatBot";

export const meta: MetaFunction = () => {
  return [
    {title: "Bastien Law"},
    {name: "description", content: "Law Offices of Villard Bastien"},
  ];
};

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
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
