export const fetchSearchResults = (query) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: 'api/search_results',
    data: { query }
  });
}
