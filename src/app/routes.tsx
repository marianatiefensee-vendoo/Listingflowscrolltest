import { createBrowserRouter, Navigate } from "react-router";
import ListingFlow from "./components/ListingFlow";

// All routes are prefixed with /scroll/listing
// ListingFlow reads the URL path directly to determine the active step
export const router = createBrowserRouter([
  {
    path: "/scroll/listing/*",
    Component: ListingFlow,
  },
  // Redirect root and any unknown paths to the listing flow
  {
    path: "*",
    element: <Navigate to="/scroll/listing/photos" replace />,
  },
]);
