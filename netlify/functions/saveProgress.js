
import { blobs } from '@netlify/blobs';

export default async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const { userId, data } = JSON.parse(event.body);
  const key = `progress_${userId}`;
  await blobs.set(key, JSON.stringify(data));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Progress saved!' }),
  };
}
