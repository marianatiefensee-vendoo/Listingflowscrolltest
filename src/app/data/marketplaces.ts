import imgEbay from "figma:asset/fc302d572214546f8204178ed8fb7d0af8c7506e.png";
import imgMercari from "figma:asset/818d7c9ebebd26d98ee60737907006a9b258dce3.png";
import imgDepop from "figma:asset/9fc19e9b972ada34a5069710f93ea92cd4258fea.png";
import imgFacebook from "figma:asset/55ad25062cf42038188e8437b6d83a149a822f83.png";

export interface MarketplaceDefinition {
  id: string;
  name: string;
  image: string;
  connected: boolean;
}

const imgEtsy =
  "https://www.figma.com/api/mcp/asset/50eb1277-b052-44b4-a334-275fbe3d34f9";
const imgShopify =
  "https://www.figma.com/api/mcp/asset/4020d956-7121-4173-9b31-fc8c8d235a99";
const imgGrailed =
  "https://www.figma.com/api/mcp/asset/1e05d074-989b-46c4-83a7-876a06c9d3ab";
const imgPoshmark =
  "https://www.figma.com/api/mcp/asset/a4829cc3-25e3-484d-84ea-9f504494e575";
const imgWhatnot =
  "https://www.figma.com/api/mcp/asset/2bf314d9-29dc-4066-a29e-2b9b626257d5";
const imgVestiaire =
  "https://www.figma.com/api/mcp/asset/a21be224-7773-4b13-9751-6e83b66cd949";

export const MARKETPLACES: MarketplaceDefinition[] = [
  { id: "ebay", name: "eBay", image: imgEbay, connected: true },
  { id: "mercari", name: "Mercari", image: imgMercari, connected: true },
  { id: "etsy", name: "Etsy", image: imgEtsy, connected: true },
  { id: "shopify", name: "Shopify", image: imgShopify, connected: true },
  { id: "grailed", name: "Grailed", image: imgGrailed, connected: true },
  { id: "depop", name: "Depop", image: imgDepop, connected: true },
  { id: "poshmark", name: "Poshmark", image: imgPoshmark, connected: true },
  { id: "whatnot", name: "Whatnot", image: imgWhatnot, connected: true },
  { id: "facebook", name: "Facebook", image: imgFacebook, connected: true },
  { id: "vestiaire", name: "Vestiaire", image: imgVestiaire, connected: true },
];

export const MARKETPLACE_NAME_BY_ID = Object.fromEntries(
  MARKETPLACES.map((marketplace) => [marketplace.id, marketplace.name]),
) as Record<string, string>;
