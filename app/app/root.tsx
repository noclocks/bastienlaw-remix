import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// import "./wp-content/index_files/cc40ba9a93e87e26f1018e89bcb01971f6d6ca0432cdb0afa00588fa621b5cb7.css"
// import "./wp-content/index_files/cc40ba9a93e87e26f1018e89bcb019711766ec8043887571a4c9e737f74cf36c.css"
// import "./google-fonts/google-fonts.css"
// import "./styles/mobilenav.css"
// import "./styles/dsethtml.css"
// import "./styles/dsethtml2.css"
// import "./styles/home.css";
// import "./styles/about.css"

import ChatbotScript from "./components/ChatBot";

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
        {children}
        <ScrollRestoration />
        <Scripts />
        <ChatbotScript />
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
