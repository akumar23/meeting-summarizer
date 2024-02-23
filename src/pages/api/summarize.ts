// pages/api/summarize.js
import openai from 'openai';
/*
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { transcribedText } = req.body;

  // Use your OpenAI API key
  openai.apiKey = 'YOUR_OPENAI_API_KEY';

  const prompt = `Summarize the following text:\n${transcribedText}`;

  try {
    const response = await openai.Completion.create({
      engine: 'text-davinci-003',
      prompt,
      max_tokens: 100,
    });

    const summary = response.choices[0].text.trim();
    res.status(200).json({ summary });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
*/
