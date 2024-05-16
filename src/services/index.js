// Model for fetch

export default async function fetchApi(url, method, headers, body) {
  const response = await fetch(url, {
    method,
    headers,
    body,
  });

  return response.json();
}
