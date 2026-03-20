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
  { value: 'Unbranded', label: 'Unbranded', description: 'Boutique, vintage, and handmade items' },
  { value: 'Nike', label: 'Nike', description: 'Athletic footwear, streetwear, sportswear' },
  { value: 'Adidas', label: 'Adidas', description: 'Sneakers, trackwear, athletic apparel' },
  { value: 'Jordan', label: 'Jordan', description: 'Sneakers, basketball apparel' },
  { value: 'New Balance', label: 'New Balance', description: 'Running shoes, lifestyle sneakers, activewear' },
  { value: 'Converse', label: 'Converse', description: 'Canvas sneakers, streetwear staples' },
  { value: 'Vans', label: 'Vans', description: 'Skate shoes, casual sneakers, apparel' },
  { value: 'Lululemon', label: 'Lululemon', description: 'Activewear, athleisure, accessories' },
  { value: 'Athleta', label: 'Athleta', description: 'Women’s activewear, leggings, outer layers' },
  { value: 'Free People', label: 'Free People', description: 'Boho dresses, tops, knitwear' },
  { value: 'Aritzia', label: 'Aritzia', description: 'Contemporary womenswear, knits, trousers' },
  { value: 'Zara', label: 'Zara', description: 'Fast fashion, dresses, outerwear' },
  { value: 'H&M', label: 'H&M', description: 'Basics, trend pieces, wardrobe staples' },
  { value: 'Reformation', label: 'Reformation', description: 'Modern dresses, denim, sustainable fashion' },
  { value: 'Anthropologie', label: 'Anthropologie', description: 'Dresses, blouses, lifestyle pieces' },
  { value: 'Madewell', label: 'Madewell', description: 'Denim, leather goods, casual essentials' },
  { value: 'Brandy Melville', label: 'Brandy Melville', description: 'Trending tops, basics, skirts' },
  { value: 'Levi\'s', label: 'Levi\'s', description: 'Vintage denim, jackets, jeans' },
  { value: 'Carhartt', label: 'Carhartt', description: 'Workwear, jackets, double knees' },
  { value: 'Patagonia', label: 'Patagonia', description: 'Outdoor jackets, fleece, gear' },
  { value: 'The North Face', label: 'The North Face', description: 'Outerwear, puffers, outdoor gear' },
  { value: 'Gap', label: 'Gap', description: 'Denim, hoodies, logo basics' },
  { value: 'Abercrombie & Fitch', label: 'Abercrombie & Fitch', description: 'Denim, basics, elevated casualwear' },
  { value: 'Hollister', label: 'Hollister', description: 'Casual denim, tees, hoodies' },
  { value: 'American Eagle', label: 'American Eagle', description: 'Denim, tops, everyday casualwear' },
  { value: 'Ralph Lauren', label: 'Ralph Lauren', description: 'Polos, knitwear, classic Americana' },
  { value: 'Tommy Hilfiger', label: 'Tommy Hilfiger', description: 'Logo classics, denim, vintage Americana' },
  { value: 'DKNY', label: 'DKNY', description: '1990s and Y2K revival fashion' },
  { value: 'Coach', label: 'Coach', description: 'Handbags, wallets, accessories' },
  { value: 'Louis Vuitton', label: 'Louis Vuitton', description: 'Luxury handbags, SLGs, luggage' },
  { value: 'Gucci', label: 'Gucci', description: 'Luxury bags, shoes, accessories' },
  { value: 'UGG', label: 'UGG', description: 'Boots, slippers, shearling' },
  { value: 'Juicy Couture', label: 'Juicy Couture', description: 'Velour sets, Y2K bags, casualwear' },
  { value: 'Stüssy', label: 'Stüssy', description: 'Streetwear tees, hoodies, graphics' },
  { value: 'Supreme', label: 'Supreme', description: 'Hype streetwear, accessories, outerwear' },
  { value: 'Apple', label: 'Apple', description: 'Phones, tablets, accessories' },
  { value: 'Samsung', label: 'Samsung', description: 'Phones, tablets, wearables' },
  { value: 'Sony', label: 'Sony', description: 'Gaming, audio, cameras' },
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
