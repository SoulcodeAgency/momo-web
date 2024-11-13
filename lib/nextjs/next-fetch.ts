/**
 * Fetches data from the specified URL using the provided options.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {RequestInit} [options] - Optional configuration for the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) request.
 * @returns {Promise<any>} - A promise that resolves to the fetched data.
 * @throws {Error} - Throws an error if the fetch request fails or the response is not ok.
 */
export async function fetchDataWithoutCache<ResponseType>(url: string, options?: RequestInit): Promise<ResponseType> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`[fetchData] Fetched data from ${url}`);
    return data;
  } catch (error) {
    console.error(`[fetchData] Failed to fetch data from ${url}:`, error);
    throw error;
  }
}

/**
 * Fetches data from the given URL with caching enabled.
 *
 * This function uses the 'force-cache' option to ensure that the response is
 * cached and revalidated every 60 seconds.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {RequestInit} [options] - Optional configuration for the fetch request.
 * @returns {Promise<Response>} - A promise that resolves to the response of the fetch request.
 */
export async function fetchDataWithCache<ResponseType>(url: string, options?: RequestInit): Promise<ResponseType> {
  const defaultOptions: RequestInit = {
    ...options,
    cache: 'force-cache',
    next: { revalidate: 60 },
  };

  return fetchDataWithoutCache(url, defaultOptions);
}

/**
 * Fetches product data for the given asset name.
 *
 * @param {string} url - The url to fetch data from.
 * @param {boolean} useCache - Whether to use the cache fetch method. Defaults to true.
 * @returns {Promise<any>} - A promise that resolves to the product data.
 * @throws {Error} - Throws an error if the fetch request fails or the response is not ok.
 */
export async function fetchData(url: string, useCache: boolean = true): Promise<any> {
  if (useCache) {
    return fetchDataWithCache<any>(url);
  } else {
    return fetchDataWithoutCache<any>(url);
  }
}
