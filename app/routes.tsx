import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./root";
import Home from "./routes/home";
import Videos from "./routes/videos";
import About from "./routes/about";
import Contact from "./routes/contact";
import { Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "sitemap",
        element: <Navigate to="/sitemap.xml" replace />,
      },
      {
        path: "robots",
        element: <Navigate to="/robots.txt" replace />,
      }
    ],
  },
]);



