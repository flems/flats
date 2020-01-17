function httpRequest (url, formData = {}) {
  return fetch(url, {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      return data
    })
}

export default httpRequest
