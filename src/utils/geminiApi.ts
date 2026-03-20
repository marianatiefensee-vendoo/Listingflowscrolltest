// Gemini API Configuration
// Uses gemini-2.5-flash-lite on v1beta endpoint
const API_KEY = "AIzaSyDIdsVuyj6r7pODi68vH9Xc5qton86jbgo";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`;

export interface ProductAnalysis {
  title: string;
  description: string;
  brand: string;
  category: string;
  suggested_price: string;
  size: string;
  hashtags: string[];
}

/**
 * Converts a File object to base64 string
 */
export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to convert file to base64'));
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

/**
 * Analyzes a product image using Google Gemini 2.5 Flash Lite API
 * @param base64Data - Base64 encoded image (can include data URL prefix or not)
 * @returns ProductAnalysis object or null if analysis fails
 */
export async function analyzeProductImage(base64Data: string): Promise<ProductAnalysis | null> {
  try {
    // Clean the base64 string — remove data URL prefix if present
    const rawBase64 = base64Data.split(',')[1] || base64Data;

    // Detect mime type from data URL prefix, default to image/png
    let mimeType = "image/png";
    if (base64Data.startsWith('data:')) {
      const match = base64Data.match(/data:([^;]+);base64,/);
      if (match) {
        mimeType = match[1];
      }
    }

    console.log('🔍 Sending to Gemini API (gemini-2.5-flash-lite):', {
      mimeType,
      base64Length: rawBase64.length,
      base64Preview: rawBase64.substring(0, 50) + '...'
    });

    const payload = {
      contents: [
        {
          parts: [
            {
              text: `Analyze this product image carefully and create a professional marketplace listing.

Return a JSON object with these exact keys:
{
  "title": "concise product title (60-80 characters)",
  "description": "detailed product description (150-250 words) highlighting key features, condition, and benefits",
  "brand": "brand name if visible, otherwise 'Unbranded'",
  "category": "choose from: Women's Clothing, Men's Clothing, Women's Shoes, Men's Shoes, Electronics, Home & Garden, Collectibles & Art, Toys & Hobbies, Sporting Goods, Books & Media, Health & Beauty, Jewelry & Accessories, Baby & Kids, Pet Supplies, Automotive",
  "suggested_price": "estimated price in USD format XX.XX",
  "size": "size if applicable, otherwise 'N/A'",
  "hashtags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
}`
            },
            {
              inline_data: {
                mime_type: mimeType,
                data: rawBase64
              }
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        response_mime_type: "application/json"
      }
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Gemini API Error details:", errorText);
      throw new Error(`API Request Failed: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Gemini API Response:', result);

    // Extract the text content and parse it as JSON
    const contentText = result.candidates[0].content.parts[0].text;
    console.log('📝 Raw result text:', contentText);

    const analysis: ProductAnalysis = JSON.parse(contentText);

    // Validate required fields
    if (!analysis.title || !analysis.description) {
      console.error("❌ Invalid response - missing required fields:", analysis);
      return null;
    }

    console.log('✅ Successfully parsed product analysis:', analysis);
    return analysis;
  } catch (error) {
    console.error("❌ Error in analyzeProductImage:", error);
    return null;
  }
}

/**
 * Analyzes multiple product images and returns the best analysis
 */
export async function analyzeProductImages(base64Images: string[]): Promise<ProductAnalysis | null> {
  if (base64Images.length === 0) {
    return null;
  }
  return analyzeProductImage(base64Images[0]);
}

export interface ShippingSuggestion {
  tier: "default" | "xs" | "sm" | "md" | "lg" | "xl";
  confidence: "high" | "medium" | "low";
  reasoning: string;
}

/**
 * Analyzes a product image using Gemini specifically for shipping size recommendation.
 * This is a standalone assistive feature — it runs independently from the full listing AI generation.
 * @param base64Data - Base64 encoded image (can include data URL prefix or not)
 * @returns ShippingSuggestion object or null if analysis fails
 */
export async function analyzeShippingSize(base64Data: string): Promise<ShippingSuggestion | null> {
  try {
    const rawBase64 = base64Data.split(',')[1] || base64Data;

    let mimeType = "image/png";
    if (base64Data.startsWith('data:')) {
      const match = base64Data.match(/data:([^;]+);base64,/);
      if (match) {
        mimeType = match[1];
      }
    }

    console.log('📦 Shipping AI: Analyzing image for shipping size...');

    const payload = {
      contents: [
        {
          parts: [
            {
              text: `Look at this product image and determine the best shipping size tier for it.

Choose one of these tiers based on the item's likely weight and dimensions:

- "xs" — Extra Small: jewelry, accessories, phone cases (under 4 oz)
- "sm" — Small: t-shirts, swimwear, small gadgets (4 to 8 oz)
- "md" — Medium: jeans, books, sweaters (around 1 lb)
- "lg" — Large: shoes, hoodies, small appliances (around 2 lb)
- "xl" — Extra Large: bundles, coats, large items (2 to 10 lb)
- "default" — only if you truly cannot determine the item type

Return a JSON object with these exact keys:
{
  "tier": "one of: xs, sm, md, lg, xl, default",
  "confidence": "one of: high, medium, low",
  "reasoning": "brief explanation of why this tier was chosen"
}`
            },
            {
              inline_data: {
                mime_type: mimeType,
                data: rawBase64
              }
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.3,
        response_mime_type: "application/json"
      }
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Shipping AI Error:", errorText);
      throw new Error(`API Request Failed: ${response.status}`);
    }

    const result = await response.json();
    const contentText = result.candidates[0].content.parts[0].text;
    const suggestion: ShippingSuggestion = JSON.parse(contentText);

    // Validate the tier value
    const validTiers = ["default", "xs", "sm", "md", "lg", "xl"];
    if (!validTiers.includes(suggestion.tier)) {
      console.warn("📦 Shipping AI: Invalid tier returned, falling back to default");
      suggestion.tier = "default";
    }

    console.log('📦 Shipping AI Result:', suggestion);
    return suggestion;
  } catch (error) {
    console.error("❌ Shipping AI analysis failed:", error);
    return null;
  }
}