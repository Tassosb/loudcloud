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

export const updateTrackPlays = (trackId) => {
  return $.ajax({
    method: 'POST',
    url: `api/tracks/${trackId}/play`
  })
}


export const updateTrack = (formData, trackId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tracks/${trackId}`,
    contentType: false,
    processData: false,
    data: formData
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

export const deleteTrack = (trackId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tracks/${trackId}`
  });
}

export const likeTrack = (trackId, userId) => {
  return $.ajax({
    method: 'POST',
    url: `api/tracks/${trackId}/like`,
    data: { user_id: userId }
  })
}

export const unlikeTrack = (trackId, userId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tracks/${trackId}/unlike`,
    data: { user_id: userId }
  })
}
