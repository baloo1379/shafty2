export function debounce(func, wait, immediate) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
};

export function millisToMinutesAndSeconds(millis) {
  const hours = Math.floor(millis / 3600000)
  const minutes = Math.floor(millis / 60000) - (hours * 60)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return `${hours > 0 ? `${hours}:` : ''}${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
