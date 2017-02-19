export const fetchTracks = (specs) => {
  return $.ajax({
    method: 'GET',
    url: 'api/tracks',
    data: specs
  })
}

export const fetchTrack = (trackId) => {
  return $.ajax({
    method: 'GET',
    url: `api/tracks/${trackId}`
  })
}

export const updateTrackPlays = (track) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tracks/${track.id}`,
    data: { track }
  })
}

export const createTrack = (formData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/tracks',
    contentType: false,
    processData: false,
    data: formData
  });
}
