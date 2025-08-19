// Email alert endpoint disabled per project configuration — no-op handler.
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(404).json({ error: 'Email alerts are disabled.' });
}
