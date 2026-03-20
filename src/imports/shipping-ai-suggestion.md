Update the Shipping step 

Important logic requirement:

The prototype already has Gemini API installed and being used in other parts of the flow.
I want Shipping to always use Gemini AI to suggest the best shipping option based on the uploaded item photos, even if the user does not generate the full listing with AI from the Photos step.

This means:

• If the user uploads photos, Gemini should always analyze the photos for shipping suggestion
• The Shipping section should always be able to show an AI-suggested shipping option derived from Gemini
• This should work independently from the rest of the AI listing generation flow
• If the user never uses AI for title, description, price, or any other section, Shipping should still be AI-assisted
• The “AI Suggested” state should only be automatically true for Shipping, not for all other sections
• Other sections should remain manual unless the user explicitly triggers AI there

UI requirements:

Keep the current Shipping UI pattern as a dropdown selector.

Show the “AI Suggested” tag on this field whenever Gemini has identified a recommended shipping option from the uploaded photos.

Dropdown options should be:

Shipping Default
Use your preset shipping policy from listing settings

Extra Small — Jewelry, accessories, phone cases
Under 4 oz

Small — T-shirts, swimwear, small gadgets
Around 4 to 8 oz

Medium — Jeans, books, sweaters
Around 1 lb

Large — Shoes, hoodies, small appliances
Around 2 lb

Extra Large — Bundles, coats, large items
Around 2 to 10 lb

Behavior requirements:

• As soon as item photos exist in the flow, Gemini should evaluate them for shipping size recommendation
• This should happen even if the user skips “Generate listing with AI” in earlier steps
• If Gemini is confident, preselect the recommended shipping option in the dropdown
• Show the “AI Suggested” tag next to Shipping Options
• In the open dropdown, visually highlight the recommended option
• The user can still manually change the option at any time
• If the user manually changes the shipping option, keep the Gemini recommendation available visually but respect the user’s choice
• Do not automatically mark other sections as AI-generated just because Shipping used Gemini
• Shipping AI suggestion is a standalone assistive feature

Fallback behavior:

• If no photos have been uploaded yet, do not show the AI Suggested badge
• If Gemini cannot determine a recommendation confidently, default to “Shipping Default”
• If Gemini fails, the dropdown should still work normally as a manual selector
• Show helper text that supports both AI and manual usage

Helper text:
Set shipping from your preset policy, or use the AI suggestion based on your item.


Important product rule:

Shipping is the only section that should automatically use Gemini suggestion from uploaded photos even when full listing AI generation is not used.
Do not apply this automatic AI state globally to the rest of the form.