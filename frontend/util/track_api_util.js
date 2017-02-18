export const fetchTracks = (specs) => {
  return $.ajax({
    method: 'GET',
    url: 'api/tracks',
    data: specs
  })
}

export const updateTrack = (track) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tracks/${track.id}`,
    data: { track }
  })
}
