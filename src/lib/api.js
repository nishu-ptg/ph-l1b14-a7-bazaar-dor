const apiUrls = process.env.BAZAARDOR_PUBLIC_API_URLS.split(",");

// not taking chances with API endpoint failing
// so we will try other endpoint in case one is down
export async function fetchBazaarDorData(endpoint) {
  for (const baseUrl of apiUrls) {
    try {
      const res = await fetch(`${baseUrl}${endpoint}`);
      if (res.ok) {
        return await res.json();
      }
      console.error(`BazaarDor API ERROR`, res);
    } catch (error) {
      console.error(`BazaarDor API ERROR`, error);
    }
  }

  // not trowing error to show message in the UI
  //   throw new Error("All API endpoints failed");
}
