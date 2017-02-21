export const fetchSearchResults = (query) => {
  return $.ajax({
    method: 'GET',
    url: 'api/search_results',
    data: { query }
  });
}
