export const updateUser = (formData, userId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}`,
    contentType: false,
    processData: false,
    data: formData
  })
}

export const fetchUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  })
}
