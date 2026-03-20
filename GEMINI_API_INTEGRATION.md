# Google Gemini 1.5 Flash API Integration

This document explains how the Google Gemini 1.5 Flash API is integrated into the Vendoo listing creation flow.

## Overview

The app uses Google's Gemini 1.5 Flash model to analyze product images and automatically generate marketplace listing details.

## API Configuration

- **Model**: Gemini 1.5 Flash
- **Endpoint**: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`
- **API Key**: Configured in `/src/utils/geminiApi.ts`
- **Response Format**: JSON (using `response_mime_type: "application/json"`)

## Features

### 1. Product Image Analysis
When users upload photos and click "Generate Listing", the app:
1. Converts the first (cover) photo to base64
2. Sends it to Gemini API with analysis instructions
3. Receives structured JSON with product details
4. Populates the Item Details section automatically

### 2. Response Structure

The Gemini API returns a `ProductAnalysis` object with:

```typescript
interface ProductAnalysis {
  title: string;           // Concise product title (60-80 chars)
  description: string;     // Detailed description (150-250 words)
  brand: string;          // Brand name or "Unbranded"
  category: string;       // From predefined categories
  suggested_price: string; // Estimated price in USD
  size: string;           // Size if applicable, or "N/A"
  hashtags: string[];     // 5-8 relevant hashtags
}
```

### 3. Integration Points

#### PhotosStep Component
- **Location**: `/src/app/components/PhotosStep.tsx`
- **Function**: `handleGenerateListing()`
- **Trigger**: User clicks "Generate Listing" button
- **Action**: Calls `analyzeProductImages()` and converts response to `ItemDetails` format

#### Gemini API Utility
- **Location**: `/src/utils/geminiApi.ts`
- **Main Functions**:
  - `analyzeProductImage(base64Data)` - Analyzes single image
  - `analyzeProductImages(base64Images[])` - Analyzes multiple images (currently uses first image)
  - `fileToBase64(file)` - Converts File to base64 string

#### ItemDetailsContent Component
- **Location**: `/src/app/components/ItemDetailsContent.tsx`
- **Individual Generation**: Each "Generate with AI" button generates mock data
- **Future Enhancement**: Could integrate individual field generation with Gemini

## How It Works

### User Flow

1. User uploads 1-8 product photos in the Photos step
2. User clicks "Generate Listing" button
3. App shows loading state (`isGenerating: true`)
4. App sends cover photo (first image) to Gemini API
5. Gemini analyzes the image and returns structured JSON
6. App converts API response to internal format
7. App auto-fills Item Details section
8. Item Details section expands with all fields populated
9. Purple "AI generated" badges appear on generated fields

### Technical Flow

```
Photo Upload → Base64 Conversion → Gemini API Request
                                          ↓
Item Details Update ← Data Transformation ← JSON Response
```

## API Request Example

```javascript
const payload = {
  contents: [{
    parts: [
      { text: "Analyze this product image..." },
      {
        inline_data: {
          mime_type: "image/jpeg",
          data: base64Image
        }
      }
    ]
  }],
  generationConfig: {
    response_mime_type: "application/json",
    temperature: 0.4,
  }
};
```

## Error Handling

The integration includes comprehensive error handling:
- API request failures show user-friendly alert
- Invalid responses return null
- Missing required fields validated before use
- Loading state prevents duplicate requests
- Try-catch blocks prevent app crashes

## Category Mapping

Gemini is instructed to choose from these predefined categories:
- Women's Clothing
- Men's Clothing
- Women's Shoes
- Men's Shoes
- Electronics
- Home & Garden
- Collectibles & Art
- Toys & Hobbies
- Sporting Goods
- Books & Media
- Health & Beauty
- Jewelry & Accessories
- Baby & Kids
- Pet Supplies
- Automotive

## Future Enhancements

### Potential Improvements:
1. **Multi-image Analysis**: Analyze all uploaded images instead of just the cover photo
2. **Individual Field Generation**: Connect each "Generate with AI" button to make targeted API calls
3. **Condition Detection**: Use Gemini to automatically determine product condition
4. **Price Optimization**: Use suggested_price field to populate pricing section
5. **Hashtag Integration**: Use generated hashtags in the tags field
6. **Size Detection**: Automatically populate size from analysis
7. **Retry Logic**: Add automatic retry for failed API requests
8. **Caching**: Cache analysis results to avoid duplicate API calls
9. **Batch Processing**: Analyze multiple photos and combine insights

## Security Notes

- API key is currently hardcoded (suitable for development)
- For production: Use environment variables
- Consider implementing rate limiting
- Add request validation and sanitization
- Monitor API usage and costs

## Testing

To test the Gemini integration:
1. Upload a product image with visible details
2. Click "Generate Listing"
3. Wait for API response (typically 2-5 seconds)
4. Verify all fields are populated with relevant data
5. Check that AI badges appear on generated fields

## Troubleshoots

**Issue**: API returns null
- Check internet connection
- Verify API key is valid
- Ensure image is valid JPEG/PNG
- Check browser console for errors

**Issue**: Fields not populated
- Verify API response structure
- Check data transformation logic
- Ensure ItemDetails interface matches

**Issue**: Loading state stuck
- Check network tab for failed requests
- Verify error handling is triggering
- Look for try-catch issues
