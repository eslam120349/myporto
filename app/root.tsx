import {
  isRouteErrorResponse,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";

import type { Route } from "./_types/root";
import "./app.css";
import Nav from "./components/Nav";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout() {
  return (
    <>
      <Nav />
      <div className="pt-16">
        <Outlet />
      </div>
      <ScrollRestoration />
      <script type="module" src="/app/main.tsx"></script>
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "عذراً!";
  let details = "حدث خطأ غير متوقع.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "خطأ";
    details =
      error.status === 404
        ? "الصفحة المطلوبة غير موجودة."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

export default function App() {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>إسلام - معلم الرياضيات</title>
        
        <meta name="description" content="معلم رياضيات متميز مع خبرة في تبسيط المفاهيم الرياضية وتطوير مهارات الطلاب. متخصص في المناهج الحديثة وأساليب التدريس المبتكرة." />
        <meta name="keywords" content="معلم رياضيات, تدريس خصوصي, شرح الرياضيات, حل المسائل, تبسيط المفاهيم, تطوير المهارات" />
        <meta name="author" content="إسلام" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eslam-teacher.com/" />
        <meta property="og:title" content="إسلام - معلم الرياضيات المتميز" />
        <meta property="og:description" content="معلم رياضيات متميز مع خبرة في تبسيط المفاهيم الرياضية وتطوير مهارات الطلاب. متخصص في المناهج الحديثة وأساليب التدريس المبتكرة." />
        <meta property="og:image" content="https://eslam-teacher.com/images/og-image.jpg" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://eslam-teacher.com/" />
        <meta property="twitter:title" content="إسلام - معلم الرياضيات المتميز" />
        <meta property="twitter:description" content="معلم رياضيات متميز مع خبرة في تبسيط المفاهيم الرياضية وتطوير مهارات الطلاب. متخصص في المناهج الحديثة وأساليب التدريس المبتكرة." />
        <meta property="twitter:image" content="https://eslam-teacher.com/images/twitter-image.jpg" />
        
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        
        <meta name="google-site-verification" content="cs7QP49XCiezrOmjd-WHHQ7FMkGM5H7NoBwBmhJEKio" />
        
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}

