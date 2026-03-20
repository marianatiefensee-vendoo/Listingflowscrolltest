export interface MarketplaceTaxonomyOption {
  value: string;
  label: string;
  description: string;
  detail?: string;
}

const marketplaceLabel = (names: string[]) => names.join(' • ');

export const COMMON_MARKETPLACE_BRAND_OPTIONS: MarketplaceTaxonomyOption[] = [
  { value: 'Nike', label: 'Nike', description: marketplaceLabel(['eBay', 'Mercari', 'Depop', 'Poshmark']), detail: 'Athletic footwear, streetwear, sportswear' },
  { value: 'Adidas', label: 'Adidas', description: marketplaceLabel(['eBay', 'Mercari', 'Depop', 'Poshmark']), detail: 'Sneakers, trackwear, athletic apparel' },
  { value: 'Lululemon', label: 'Lululemon', description: marketplaceLabel(['Mercari', 'Poshmark', 'eBay']), detail: 'Activewear, athleisure, accessories' },
  { value: 'Free People', label: 'Free People', description: marketplaceLabel(['Poshmark', 'Depop', 'Mercari']), detail: 'Boho dresses, tops, knitwear' },
  { value: 'Levi\'s', label: 'Levi\'s', description: marketplaceLabel(['eBay', 'Depop', 'Mercari', 'Poshmark']), detail: 'Vintage denim, jackets, jeans' },
  { value: 'Coach', label: 'Coach', description: marketplaceLabel(['eBay', 'Mercari', 'Poshmark']), detail: 'Handbags, wallets, accessories' },
  { value: 'Zara', label: 'Zara', description: marketplaceLabel(['Depop', 'Mercari', 'Poshmark']), detail: 'Fast fashion, dresses, outerwear' },
  { value: 'Aritzia', label: 'Aritzia', description: marketplaceLabel(['Depop', 'Mercari', 'Poshmark']), detail: 'Contemporary womenswear, knitwear' },
  { value: 'Brandy Melville', label: 'Brandy Melville', description: marketplaceLabel(['Depop', 'Poshmark', 'Mercari']), detail: 'Trending tops, basics, skirts' },
  { value: 'Patagonia', label: 'Patagonia', description: marketplaceLabel(['eBay', 'Depop', 'Mercari', 'Poshmark']), detail: 'Outdoor jackets, fleece, gear' },
  { value: 'Carhartt', label: 'Carhartt', description: marketplaceLabel(['eBay', 'Depop', 'Mercari']), detail: 'Workwear, jackets, double knees' },
  { value: 'Jordan', label: 'Jordan', description: marketplaceLabel(['eBay', 'Mercari', 'Poshmark']), detail: 'Sneakers, basketball apparel' },
  { value: 'Apple', label: 'Apple', description: marketplaceLabel(['eBay', 'Mercari']), detail: 'Phones, tablets, accessories' },
  { value: 'Samsung', label: 'Samsung', description: marketplaceLabel(['eBay', 'Mercari']), detail: 'Phones, tablets, wearables' },
  { value: 'Louis Vuitton', label: 'Louis Vuitton', description: marketplaceLabel(['eBay', 'Poshmark', 'Mercari']), detail: 'Luxury handbags, SLGs, luggage' },
  { value: 'Gucci', label: 'Gucci', description: marketplaceLabel(['eBay', 'Poshmark', 'Mercari']), detail: 'Luxury bags, shoes, accessories' },
  { value: 'UGG', label: 'UGG', description: marketplaceLabel(['Poshmark', 'Mercari', 'eBay']), detail: 'Boots, slippers, shearling' },
  { value: 'Anthropologie', label: 'Anthropologie', description: marketplaceLabel(['Poshmark', 'Mercari', 'Depop']), detail: 'Dresses, blouses, lifestyle pieces' },
  { value: 'Sony', label: 'Sony', description: marketplaceLabel(['eBay', 'Mercari']), detail: 'Gaming, audio, cameras' },
  { value: 'Unbranded', label: 'Unbranded', description: marketplaceLabel(['eBay', 'Mercari', 'Depop', 'Poshmark']), detail: 'For boutique, vintage, and handmade items' },
];

export const COMMON_MARKETPLACE_CATEGORY_OPTIONS: MarketplaceTaxonomyOption[] = [
  {
    value: 'Women\'s Fashion > Dresses > Maxi',
    label: 'Maxi Dresses',
    description: marketplaceLabel(['eBay', 'Mercari', 'Depop', 'Poshmark']),
    detail: 'Women\'s Fashion > Dresses > Maxi',
  },
  {
    value: 'Women\'s Fashion > Dresses > Mini',
    label: 'Mini Dresses',
    description: marketplaceLabel(['eBay', 'Mercari', 'Depop', 'Poshmark']),
    detail: 'Women\'s Fashion > Dresses > Mini',
  },
  {
    value: 'Women\'s Fashion > Tops > Blouses',
    label: 'Blouses',
    description: marketplaceLabel(['eBay', 'Mercari', 'Depop', 'Poshmark']),
    detail: 'Women\'s Fashion > Tops > Blouses',
  },
  {
    value: 'Women\'s Fashion > Tops > Graphic Tees',
    label: 'Graphic Tees',
    description: marketplaceLabel(['Depop', 'Mercari', 'Poshmark']),
    detail: 'Women\'s Fashion > Tops > Graphic Tees',
  },
  {
    value: 'Women\'s Fashion > Pants > Jeans',
    label: 'Women\'s Jeans',
    description: marketplaceLabel(['eBay', 'Mercari', 'Depop', 'Poshmark']),
    detail: 'Women\'s Fashion > Pants > Jeans',
  },
  {
    value: 'Women\'s Fashion > Skirts > Mini',
    label: 'Mini Skirts',
    description: marketplaceLabel(['Depop', 'Mercari', 'Poshmark']),
    detail: 'Women\'s Fashion > Skirts > Mini',
  },
  {
    value: 'Women\'s Fashion > Shoes > Sneakers',
    label: 'Women\'s Sneakers',
    description: marketplaceLabel(['eBay', 'Mercari', 'Poshmark']),
    detail: 'Women\'s Fashion > Shoes > Sneakers',
  },
  {
    value: 'Women\'s Fashion > Bags > Crossbody Bags',
    label: 'Crossbody Bags',
    description: marketplaceLabel(['eBay', 'Mercari', 'Poshmark']),
    detail: 'Women\'s Fashion > Bags > Crossbody Bags',
  },
  {
    value: 'Men\'s Fashion > Tops > T-Shirts',
    label: 'Men\'s T-Shirts',
    description: marketplaceLabel(['eBay', 'Depop', 'Mercari', 'Poshmark']),
    detail: 'Men\'s Fashion > Tops > T-Shirts',
  },
  {
    value: 'Men\'s Fashion > Outerwear > Jackets',
    label: 'Men\'s Jackets',
    description: marketplaceLabel(['eBay', 'Depop', 'Mercari', 'Poshmark']),
    detail: 'Men\'s Fashion > Outerwear > Jackets',
  },
  {
    value: 'Men\'s Fashion > Pants > Jeans',
    label: 'Men\'s Jeans',
    description: marketplaceLabel(['eBay', 'Depop', 'Mercari', 'Poshmark']),
    detail: 'Men\'s Fashion > Pants > Jeans',
  },
  {
    value: 'Men\'s Fashion > Shoes > Sneakers',
    label: 'Men\'s Sneakers',
    description: marketplaceLabel(['eBay', 'Mercari', 'Poshmark']),
    detail: 'Men\'s Fashion > Shoes > Sneakers',
  },
  {
    value: 'Luxury > Handbags > Shoulder Bags',
    label: 'Shoulder Bags',
    description: marketplaceLabel(['eBay', 'Poshmark', 'Mercari']),
    detail: 'Luxury > Handbags > Shoulder Bags',
  },
  {
    value: 'Luxury > Accessories > Wallets',
    label: 'Wallets',
    description: marketplaceLabel(['eBay', 'Poshmark', 'Mercari']),
    detail: 'Luxury > Accessories > Wallets',
  },
  {
    value: 'Electronics > Phones > Smartphones',
    label: 'Smartphones',
    description: marketplaceLabel(['eBay', 'Mercari']),
    detail: 'Electronics > Phones > Smartphones',
  },
  {
    value: 'Electronics > Audio > Headphones',
    label: 'Headphones',
    description: marketplaceLabel(['eBay', 'Mercari']),
    detail: 'Electronics > Audio > Headphones',
  },
  {
    value: 'Collectibles > Vintage > Sportswear',
    label: 'Vintage Sportswear',
    description: marketplaceLabel(['eBay', 'Depop', 'Poshmark']),
    detail: 'Collectibles > Vintage > Sportswear',
  },
  {
    value: 'Home > Decor > Lamps',
    label: 'Lamps',
    description: marketplaceLabel(['eBay', 'Mercari']),
    detail: 'Home > Decor > Lamps',
  },
  {
    value: 'Beauty > Makeup > Palettes',
    label: 'Makeup Palettes',
    description: marketplaceLabel(['Mercari', 'Poshmark']),
    detail: 'Beauty > Makeup > Palettes',
  },
  {
    value: 'Kids > Shoes > Sneakers',
    label: 'Kids\' Sneakers',
    description: marketplaceLabel(['eBay', 'Mercari', 'Poshmark']),
    detail: 'Kids > Shoes > Sneakers',
  },
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
