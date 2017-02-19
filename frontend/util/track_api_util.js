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

export const createTrack = (formData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/tracks',
    contentType: false,
    processData: false,
    data: formData
  });
}
