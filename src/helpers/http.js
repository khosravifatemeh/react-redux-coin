

// const checkStatus = (response) => {
//   if (response.status >= 200 && response.status < 300) {
//     return response
//   } else {
//     const error = new Error(`HTTP Error ${response.statusText}`)
//     error.status = response.statusText
//     error.response = response
//     throw error
//   }
// }
export const handleResponse = (response) => {
    return response.json()
      .then(json => {
        if (response.ok) {
          return json
        } else {
          return Promise.reject(json)
        }
      })
  }

export const validateUser = (path,data) => {
  return fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      
    },
    body:JSON.stringify(data) 
  }).then(handleResponse)

}
export const getHttp = (path) => {
  return fetch(path, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(handleResponse)
 
}