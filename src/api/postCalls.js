import axios from 'axios'

axios.defaults.baseURL = 'https://members-ng.iracing.com'

export const authentication = async () => {
  const data = {email: "kgergiii98@gmail.com",  password: "Szeolsc11"}

  return axios.post('/auth', data)
}
