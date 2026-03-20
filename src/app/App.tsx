import { RouterProvider } from "react-router";
import { router } from "./routes";

// Re-export types from ListingFlow for backward compatibility
export { type ItemDetails, type Marketplace, type MarketplaceCustomization } from "./components/ListingFlow";

export default function App() {
  return <RouterProvider router={router} />;
}