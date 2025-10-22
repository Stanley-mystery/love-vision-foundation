import type { RouteObject } from "react-router-dom";
import { injectErrorBoundary } from "../shared/utils";

import ErrorBoundaryFallback from "@/components/error-boundary-fallback/ErrorBoundaryFallback";
import { Home, Gallery, Contact, Donate, Reports } from "@/pages";

const routesObject: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
];

const routes = injectErrorBoundary(routesObject, <ErrorBoundaryFallback />);

export default routes;
