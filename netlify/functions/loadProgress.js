
import { blobs } from '@netlify/blobs';

export default async function handler(event, context) {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const userId = event.queryStringParameters.userId;
  const key = `progress_${userId}`;
  const data = await blobs.get(key);
  if (data === null) {
    return { statusCode: 404, body: 'No progress found.' };
  }
  return {
    statusCode: 200,
    body: data,
  };
}
