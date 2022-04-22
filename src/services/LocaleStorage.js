export function removeItem(item) {
  window.localStorage.removeItem(item)
}

export function getItem(item) {
  window.localStorage.getItem(item)
}

export function addItem(localeStorageName, item) {
  window.localStorage.setItem(localeStorageName, item)
}