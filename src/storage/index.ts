export async function getItem(value: string) {
  return await localStorage.getItem(value)
}

export async function setItem(key: string, value: string) {
  localStorage.setItem(key, JSON.stringify(value))
}
