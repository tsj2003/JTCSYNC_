import type { NextApiRequest, NextApiResponse } from 'next';

// Simple proxy to Judge0 (example). Set JUDGE0_URL and JUDGE0_KEY in env if using.
const JUDGE0_URL = process.env.JUDGE0_URL || 'https://judge0-ce.p.rapidapi.com';
const JUDGE0_KEY = process.env.JUDGE0_KEY || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { source_code, language_id, stdin } = req.body;
  if (!source_code || !language_id) {
    return res.status(400).json({ error: 'Missing source_code or language_id' });
  }

  try {
    // Create submission
    const createResp = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=false&wait=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(JUDGE0_KEY ? { 'X-RapidAPI-Key': JUDGE0_KEY } : {}),
      },
      body: JSON.stringify({ source_code, language_id, stdin }),
    });

    const data = await createResp.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error('Judge0 proxy error', err);
    return res.status(500).json({ error: 'Execution failed' });
  }
}
