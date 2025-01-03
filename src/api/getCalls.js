const BASE_URL = import.meta.env.VITE_API_URL

async function createChat() {
  const res = await fetch(BASE_URL + '/chats', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await res.json()
  if (!res.ok) {
    return Promise.reject({ status: res.status, data })
  }
  return data
}
