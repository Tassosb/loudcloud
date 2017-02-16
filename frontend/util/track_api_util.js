export const fetchTracks = (specs) => {
  return $.ajax({
    method: 'GET',
    url: 'api/tracks',
    data: specs
  })
}
