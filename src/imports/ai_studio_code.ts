// Gemini API Configuration
const API_KEY = "AIzaSyDIdsVuyj6r7pODi68vH9Xc5qton86jbgo";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

async function analyzeProductImage(base64Data: string) {
  // The 'base64Data' should be the raw string without the "data:image/jpeg;base64," prefix
  const base64Image = base64Data.split(',')[1] || base64Data;

  const payload = {
    contents: [{
      parts: [
        { text: "Analyze this product image. Provide a professional marketplace listing. Return ONLY JSON with fields: title, description, brand, category, suggested_price, size, hashtags (array)." },
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

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    const resultText = data.candidates[0].content.parts[0].text;
    return JSON.parse(resultText);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
}