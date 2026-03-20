export interface MarketplaceTaxonomyOption {
  value: string;
  label: string;
  description: string;
  detail?: string;
}

export interface MarketplaceCategoryNode {
  label: string;
  children?: MarketplaceCategoryNode[];
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

export const EBAY_LIKE_CATEGORY_TREE: MarketplaceCategoryNode[] = [
  {
    label: 'Clothing, Shoes & Accessories',
    children: [
      {
        label: 'Men',
        children: [
          {
            label: "Men's Shoes",
            children: [
              { label: 'Athletic Shoes' },
              { label: 'Casual Shoes' },
              { label: 'Boots' },
              { label: 'Dress Shoes' },
              { label: 'Sandals' },
            ],
          },
          {
            label: 'Shirts',
            children: [
              { label: 'T-Shirts' },
              { label: 'Button-Up Shirts' },
              { label: 'Polos' },
              { label: 'Dress Shirts' },
            ],
          },
          {
            label: 'Jeans',
            children: [
              { label: 'Straight' },
              { label: 'Slim' },
              { label: 'Relaxed' },
            ],
          },
        ],
      },
      {
        label: 'Women',
        children: [
          {
            label: "Women's Shoes",
            children: [
              { label: 'Sneakers' },
              { label: 'Boots' },
              { label: 'Heels' },
              { label: 'Sandals' },
            ],
          },
          {
            label: 'Dresses',
            children: [
              { label: 'Maxi' },
              { label: 'Mini' },
              { label: 'Midi' },
            ],
          },
          {
            label: 'Bags & Handbags',
            children: [
              { label: 'Crossbody Bags' },
              { label: 'Shoulder Bags' },
              { label: 'Totes' },
              { label: 'Wallets' },
            ],
          },
        ],
      },
      {
        label: 'Kids',
        children: [
          {
            label: 'Shoes',
            children: [{ label: 'Sneakers' }, { label: 'Boots' }],
          },
        ],
      },
    ],
  },
  {
    label: 'Electronics',
    children: [
      {
        label: 'Cell Phones & Smartphones',
        children: [{ label: 'Smartphones' }, { label: 'Unlocked Phones' }],
      },
      {
        label: 'Portable Audio & Headphones',
        children: [{ label: 'Headphones' }, { label: 'Earbuds' }, { label: 'Speakers' }],
      },
      {
        label: 'Cameras & Photo',
        children: [{ label: 'Digital Cameras' }, { label: 'Lenses' }],
      },
    ],
  },
  {
    label: 'Collectibles',
    children: [
      {
        label: 'Vintage, Retro & Mid-Century',
        children: [{ label: 'Vintage Sportswear' }, { label: 'Vintage Accessories' }],
      },
    ],
  },
  {
    label: 'Home & Garden',
    children: [
      {
        label: 'Home Décor',
        children: [{ label: 'Lamps' }, { label: 'Wall Décor' }],
      },
    ],
  },
  {
    label: 'Health & Beauty',
    children: [
      {
        label: 'Makeup',
        children: [{ label: 'Palettes' }, { label: 'Lip Color' }],
      },
    ],
  },
];

export const flattenCategoryTree = (
  nodes: MarketplaceCategoryNode[],
  parentPath: string[] = [],
): MarketplaceTaxonomyOption[] =>
  nodes.flatMap((node) => {
    const currentPath = [...parentPath, node.label];
    if (!node.children?.length) {
      return [
        {
          value: currentPath.join(' > '),
          label: node.label,
          description: marketplaceLabel(['eBay', 'Mercari', 'Depop', 'Poshmark']),
          detail: currentPath.join(' > '),
        },
      ];
    }

    return flattenCategoryTree(node.children, currentPath);
  });

const CATEGORY_KEYWORD_MAP: Record<string, string[]> = {
  sneaker: ['Clothing, Shoes & Accessories > Men > Men\'s Shoes > Athletic Shoes', 'Clothing, Shoes & Accessories > Women > Women\'s Shoes > Sneakers'],
  shoes: ['Clothing, Shoes & Accessories > Men > Men\'s Shoes > Casual Shoes', 'Clothing, Shoes & Accessories > Men > Men\'s Shoes > Athletic Shoes'],
  boot: ['Clothing, Shoes & Accessories > Men > Men\'s Shoes > Boots', 'Clothing, Shoes & Accessories > Women > Women\'s Shoes > Boots'],
  dress: ['Clothing, Shoes & Accessories > Women > Dresses > Maxi', 'Clothing, Shoes & Accessories > Women > Dresses > Mini'],
  bag: ['Clothing, Shoes & Accessories > Women > Bags & Handbags > Crossbody Bags', 'Clothing, Shoes & Accessories > Women > Bags & Handbags > Shoulder Bags'],
  wallet: ['Clothing, Shoes & Accessories > Women > Bags & Handbags > Wallets'],
  phone: ['Electronics > Cell Phones & Smartphones > Smartphones'],
  iphone: ['Electronics > Cell Phones & Smartphones > Smartphones'],
  headphones: ['Electronics > Portable Audio & Headphones > Headphones'],
  lamp: ['Home & Garden > Home Décor > Lamps'],
  vintage: ['Collectibles > Vintage, Retro & Mid-Century > Vintage Sportswear'],
};

const DEFAULT_CATEGORY_SUGGESTIONS = [
  'Clothing, Shoes & Accessories > Men > Men\'s Shoes > Athletic Shoes',
  'Clothing, Shoes & Accessories > Men > Men\'s Shoes > Casual Shoes',
  'Clothing, Shoes & Accessories > Men > Men\'s Shoes > Boots',
];

export const getSuggestedCategoryPaths = (query: string): string[] => {
  const normalized = query.toLowerCase();
  const matches = Object.entries(CATEGORY_KEYWORD_MAP)
    .filter(([keyword]) => normalized.includes(keyword))
    .flatMap(([, paths]) => paths);

  return [...new Set(matches.length ? matches : DEFAULT_CATEGORY_SUGGESTIONS)];
};
