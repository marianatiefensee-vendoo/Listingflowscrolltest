export interface MarketplaceTaxonomyOption {
  value: string;
  label: string;
  description?: string;
  detail?: string;
}

export const COMMON_MARKETPLACE_BRAND_OPTIONS: MarketplaceTaxonomyOption[] = [
  { value: 'Nike', label: 'Nike' },
  { value: 'Adidas', label: 'Adidas' },
  { value: 'Lululemon', label: 'Lululemon' },
  { value: 'Free People', label: 'Free People' },
  { value: "Levi's", label: "Levi's" },
  { value: 'Coach', label: 'Coach' },
  { value: 'Zara', label: 'Zara' },
  { value: 'Aritzia', label: 'Aritzia' },
  { value: 'Brandy Melville', label: 'Brandy Melville' },
  { value: 'Patagonia', label: 'Patagonia' },
  { value: 'Carhartt', label: 'Carhartt' },
  { value: 'Jordan', label: 'Jordan' },
  { value: 'Apple', label: 'Apple' },
  { value: 'Samsung', label: 'Samsung' },
  { value: 'Louis Vuitton', label: 'Louis Vuitton' },
  { value: 'Gucci', label: 'Gucci' },
  { value: 'UGG', label: 'UGG' },
  { value: 'Anthropologie', label: 'Anthropologie' },
  { value: 'Sony', label: 'Sony' },
  { value: 'Unbranded', label: 'Unbranded' },
];

export const COMMON_MARKETPLACE_CATEGORY_OPTIONS: MarketplaceTaxonomyOption[] = [
  { value: "Women's Fashion > Dresses > Maxi", label: 'Maxi Dresses' },
  { value: "Women's Fashion > Dresses > Mini", label: 'Mini Dresses' },
  { value: "Women's Fashion > Tops > Blouses", label: 'Blouses' },
  { value: "Women's Fashion > Tops > Graphic Tees", label: 'Graphic Tees' },
  { value: "Women's Fashion > Pants > Jeans", label: "Women's Jeans" },
  { value: "Women's Fashion > Skirts > Mini", label: 'Mini Skirts' },
  { value: "Women's Fashion > Shoes > Sneakers", label: "Women's Sneakers" },
  { value: "Women's Fashion > Bags > Crossbody Bags", label: 'Crossbody Bags' },
  { value: "Men's Fashion > Tops > T-Shirts", label: "Men's T-Shirts" },
  { value: "Men's Fashion > Outerwear > Jackets", label: "Men's Jackets" },
  { value: "Men's Fashion > Pants > Jeans", label: "Men's Jeans" },
  { value: "Men's Fashion > Shoes > Sneakers", label: "Men's Sneakers" },
  { value: 'Luxury > Handbags > Shoulder Bags', label: 'Shoulder Bags' },
  { value: 'Luxury > Accessories > Wallets', label: 'Wallets' },
  { value: 'Electronics > Phones > Smartphones', label: 'Smartphones' },
  { value: 'Electronics > Audio > Headphones', label: 'Headphones' },
  { value: 'Collectibles > Vintage > Sportswear', label: 'Vintage Sportswear' },
  { value: 'Home > Decor > Lamps', label: 'Lamps' },
  { value: 'Beauty > Makeup > Palettes', label: 'Makeup Palettes' },
  { value: 'Kids > Shoes > Sneakers', label: "Kids' Sneakers" },
];

export const MARKETPLACE_CATEGORY_API_SUPPORT = [
  {
    marketplace: 'eBay',
    status: 'Live taxonomy API available',
    notes: 'Supports category suggestions, full category trees, and required item specifics by leaf category.',
  },
  {
    marketplace: 'Depop',
    status: 'Partner taxonomy endpoint available',
    notes: 'Depop partner integrations can map department/group/product-type style taxonomies, but public access is limited.',
  },
  {
    marketplace: 'Mercari',
    status: 'No public listing taxonomy API found',
    notes: 'Prototype uses curated category paths until merchant-facing taxonomy endpoints are available.',
  },
  {
    marketplace: 'Poshmark',
    status: 'No public listing taxonomy API found',
    notes: 'Prototype uses curated category paths until partner taxonomy access is available.',
  },
] as const;
