import axios from 'axios'

axios.defaults.baseURL = 'https://members-ng.iracing.com'

export const authentication = async () => {
  const data = { 'email': 'kgergiii98@gmail.com', 'password': 'Szeolsc11' }

  return axios.post('/auth', data)
}

/* export const authentication = async () => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('mode', 'same-origin')

  const raw = JSON.stringify({
    email: 'kgergiii98@gmail.com',
    password: 'Szeolsc11'
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  fetch('https://members-ng.iracing.com/auth', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
} */
