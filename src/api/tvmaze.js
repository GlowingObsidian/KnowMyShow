const TVMAZE_ENDPOINT = "https://api.tvmaze.com";

async function apiGet(query) {
  const response = await fetch(`${TVMAZE_ENDPOINT}${query}`);
  const body = await response.json();
  return body;
}

export const searchForShows = (show) => apiGet(`/searchcfqef/shows?q=${show}`);
