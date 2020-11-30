export const REDIRECT_TO = 'REDIRECT_TO'
export const CLEAR_REDIRECT = 'CLEAR_REDIRECT'

export const doRedirect = (url) => {
  return {
    type: REDIRECT_TO,
    url: url
  }
}

export const clearRedirect = () => {
  return {
    type: CLEAR_REDIRECT
  }
}
