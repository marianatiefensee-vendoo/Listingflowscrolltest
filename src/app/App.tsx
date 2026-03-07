import { useState, useEffect } from "react";
import Header from "../imports/Header";
import NavigationRail from "./components/NavigationRail";
import CreateItemLayout from "./components/CreateItemLayout";
import PhotosStep from "./components/PhotosStep";
import ItemDetailsContent from "./components/ItemDetailsContent";
import MarketplacesContent from "./components/MarketplacesContent";
import PricingContent from "./components/PricingContent";
import ShippingContent from "./components/ShippingContent";
import ListingSummaryDynamic from "./components/ListingSummaryDynamic";
import MarketplaceSideSheet from "./components/MarketplaceSideSheet";
import ListingSuccessPage from "./components/ListingSuccessPage";
import imgEbay from "figma:asset/fc302d572214546f8204178ed8fb7d0af8c7506e.png";
import imgMercari from "figma:asset/818d7c9ebebd26d98ee60737907006a9b258dce3.png";
import imgDepop from "figma:asset/9fc19e9b972ada34a5069710f93ea92cd4258fea.png";
import imgFacebook from "figma:asset/55ad25062cf42038188e8437b6d83a149a822f83.png";

export interface ItemDetails {
  title: string;
  description: string;
  category: string;
  brand: string;
  condition: string;
}

export interface Marketplace {
  id: string;
  name: string;
  image: string;
  connected: boolean;
}

const allMarketplaces: Marketplace[] = [
  { id: "ebay", name: "eBay", image: imgEbay, connected: true },
  { id: "mercari", name: "Mercari", image: imgMercari, connected: true },
  { id: "depop", name: "Depop", image: imgDepop, connected: true },
  { id: "facebook", name: "Facebook", image: imgFacebook, connected: true },
];

export default function App() {
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [isRailExpanded, setIsRailExpanded] = useState(false);
  const [itemDetails, setItemDetails] = useState<ItemDetails | null>(null);
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<string[]>([]);
  const [shouldExpandItemDetails, setShouldExpandItemDetails] = useState(false);
  const [shouldExpandMarketplaces, setShouldExpandMarketplaces] = useState(false);
  const [shouldExpandPricing, setShouldExpandPricing] = useState(false);
  const [shouldExpandShipping, setShouldExpandShipping] = useState(false);
  const [isPhotosCollapsed, setIsPhotosCollapsed] = useState(false);
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);
  const [selectedMarketplaceForEdit, setSelectedMarketplaceForEdit] = useState<string | undefined>();
  const [listingPrice, setListingPrice] = useState<string>("");
  const [shippingCompleted, setShippingCompleted] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  // Install Maze snippet
  useEffect(() => {
    (function (m: Window, a: Document, z: string, e: string) {
      var s: HTMLScriptElement, t: string | null, u: HTMLScriptElement | undefined, v: string | null;
      try {
        t = m.sessionStorage.getItem('maze-us');
      } catch (err) {}

      if (!t) {
        t = new Date().getTime().toString();
        try {
          m.sessionStorage.setItem('maze-us', t);
        } catch (err) {}
      }

      u = document.currentScript as HTMLScriptElement || (function () {
        var w = document.getElementsByTagName('script');
        return w[w.length - 1];
      })();
      v = u && u.nonce;

      s = a.createElement('script');
      s.src = z + '?apiKey=' + e;
      s.async = true;
      if (v) s.setAttribute('nonce', v);
      a.getElementsByTagName('head')[0].appendChild(s);
      (m as any).mazeUniversalSnippetApiKey = e;
    })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', 'e35d45f9-20f1-4f2e-bdd5-74d55b9e1eab');
  }, []);

  const handleContinueFromPhotos = (photos: string[], generatedDetails?: ItemDetails) => {
    setUploadedPhotos(photos);
    if (generatedDetails) {
      setItemDetails(generatedDetails);
    }
    setShouldExpandItemDetails(true);
    setIsPhotosCollapsed(true);
  };

  const handleContinueFromItemDetails = () => {
    setShouldExpandMarketplaces(true);
    setIsPhotosCollapsed(true); // Keep photos collapsed
  };

  const handleContinueFromMarketplaces = () => {
    setShouldExpandPricing(true);
  };

  const handleContinueFromPricing = () => {
    setShouldExpandShipping(true);
    setShippingCompleted(true); // Mark shipping as complete when user reaches this section
  };

  const handleTogglePhotosExpand = () => {
    setIsPhotosCollapsed(!isPhotosCollapsed);
    // If expanding photos, don't collapse item details
  };

  const handleGoToMarketplaces = () => {
    // Expand the marketplaces section
    setShouldExpandMarketplaces(true);
    // Optionally scroll to it - the CreateItemLayout will handle the expansion
  };

  const handleEditMarketplace = (marketplaceId: string) => {
    setSelectedMarketplaceForEdit(marketplaceId);
    setIsSideSheetOpen(true);
  };

  const handleCloseSideSheet = () => {
    setIsSideSheetOpen(false);
    setSelectedMarketplaceForEdit(undefined);
  };

  const handlePublish = () => {
    setIsPublished(true);
  };

  const handleListAnother = () => {
    // Reset all state to start a new listing
    setIsPublished(false);
    setUploadedPhotos([]);
    setItemDetails(null);
    setSelectedMarketplaces([]);
    setListingPrice("");
    setShippingCompleted(false);
    setShouldExpandItemDetails(false);
    setShouldExpandMarketplaces(false);
    setShouldExpandPricing(false);
    setShouldExpandShipping(false);
    setIsPhotosCollapsed(false);
  };

  const handleGoToInventory = () => {
    // In a real app, this would navigate to the inventory page
    console.log("Navigate to inventory");
  };

  const selectedMarketplacesData = allMarketplaces.filter(m => selectedMarketplaces.includes(m.id));

  return (
    <div className="flex h-screen w-screen min-w-[1280px] flex-col bg-background">
      {/* Header */}
      <div className="h-[80px] shrink-0 px-[48px] py-[0px] mx-[0px] mt-[12px] mb-[0px]">
        <Header />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden m-[0px] px-[36px] py-[24px]">
        {/* Navigation Rail */}
        <div
          className={`shrink-0 transition-all duration-300 ${ isRailExpanded ? "w-[256px]" : "w-[96px]" } mx-[16px] my-[0px]`}
        >
          <NavigationRail
            isExpanded={isRailExpanded}
            onToggle={() => setIsRailExpanded(!isRailExpanded)}
          />
        </div>

        {/* Content Area - Conditionally render Create or Success */}
        {isPublished ? (
          <ListingSuccessPage
            photos={uploadedPhotos}
            itemDetails={itemDetails}
            price={listingPrice}
            selectedMarketplaceIds={selectedMarketplaces}
            onListAnother={handleListAnother}
            onGoToInventory={handleGoToInventory}
          />
        ) : (
          <>
            <div className="flex-1 overflow-hidden">
              <CreateItemLayout
                shouldExpandItemDetails={shouldExpandItemDetails}
                shouldExpandMarketplaces={shouldExpandMarketplaces}
                shouldExpandPricing={shouldExpandPricing}
                shouldExpandShipping={shouldExpandShipping}
                onItemDetailsSectionShown={() => setShouldExpandItemDetails(false)}
                onMarketplacesSectionShown={() => setShouldExpandMarketplaces(false)}
                onPricingSectionShown={() => setShouldExpandPricing(false)}
                onShippingSectionShown={() => setShouldExpandShipping(false)}
                children={{
                  photos: <PhotosStep onContinue={handleContinueFromPhotos} isCollapsed={isPhotosCollapsed} onToggleExpand={handleTogglePhotosExpand} />,
                  itemDetails: <ItemDetailsContent initialData={itemDetails} shouldExpand={shouldExpandItemDetails} onExpandChange={() => setShouldExpandItemDetails(false)} onContinue={handleContinueFromItemDetails} onDetailsChange={setItemDetails} />,
                  marketplaces: <MarketplacesContent shouldExpand={shouldExpandMarketplaces} onExpandChange={() => setShouldExpandMarketplaces(false)} onContinue={handleContinueFromMarketplaces} selectedMarketplaces={selectedMarketplaces} onMarketplacesChange={setSelectedMarketplaces} />,
                  pricing: <PricingContent isAIGenerated={!!(itemDetails?.title && itemDetails?.description)} shouldExpand={shouldExpandPricing} onExpandChange={() => setShouldExpandPricing(false)} onContinue={handleContinueFromPricing} onPriceChange={setListingPrice} />,
                  shipping: <ShippingContent shouldExpand={shouldExpandShipping} onExpandChange={() => setShouldExpandShipping(false)} />,
                }}
              />
            </div>

            {/* Right Panel - Listing Summary */}
            <div className="w-[320px] shrink-0 overflow-y-auto m-[0px] p-[0px]">
              <ListingSummaryDynamic 
                selectedMarketplaceIds={selectedMarketplaces} 
                onSelectMarketplaces={handleGoToMarketplaces}
                onEditMarketplace={handleEditMarketplace}
                photos={uploadedPhotos}
                itemDetails={itemDetails}
                price={listingPrice}
                shippingCompleted={shippingCompleted}
                onPublish={handlePublish}
              />
            </div>
          </>
        )}
      </div>

      {/* Marketplace Side Sheet */}
      <MarketplaceSideSheet
        isOpen={isSideSheetOpen}
        onClose={handleCloseSideSheet}
        marketplaces={selectedMarketplacesData}
        selectedMarketplaceId={selectedMarketplaceForEdit}
      />
    </div>
  );
}