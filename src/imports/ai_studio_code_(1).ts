async function analyzeProductImage(base64Data: string) {
  const API_KEY = "AIzaSyDIdsVuyj6r7pODi68vH9Xc5qton86jbgo";
  // Crucial: Use v1beta for the 2.5-flash-lite model
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`;

  // Clean the base64 string
  const rawBase64 = base64Data.split(',')[1] || base64Data;

  const payload = {
    contents: [
      {
        parts: [
          {
            text: "Analyze this image and create a marketplace listing. Return a JSON object with: title, description, brand, category, pricing, size, and hashtags."
          },
          {
            inline_data: {
              mime_type: "image/png",
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

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API Error details:", errorText);
      throw new Error(`API Request Failed: ${response.status}`);
    }

    const result = await response.json();
    
    // Extract the text content and parse it as JSON
    const contentText = result.candidates[0].content.parts[0].text;
    return JSON.parse(contentText);

  } catch (error) {
    console.error("Error in analyzeProductImage:", error);
    throw error;
  }
}