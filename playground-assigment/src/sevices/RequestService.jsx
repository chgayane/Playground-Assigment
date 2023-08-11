import { createUrl } from '../helpers/createUrl';

export const request = async (url, method, params = {}, token = '', body = null) => {
  const mainUrl = createUrl(url, params);
  try {
    const response = await fetch(mainUrl, {
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: body ? JSON.stringify(body) : null,
    });
    return response;
  } catch (error) {
    console.log('error', error);
  }
};
