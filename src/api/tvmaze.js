const TVMAZE_ENDPOINT = "https://api.tvmaze.com";

async function apiGet(query) {
  const response = await fetch(`${TVMAZE_ENDPOINT}${query}`);
  const body = await response.json();
  return body;
}

export const searchForShows = (show) => apiGet(`/search/shows?q=${show}`);
export const searchForPeople = (people) => apiGet(`/search/people?q=${people}`);
