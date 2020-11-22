
export const SET_TOASTER = 'SET_TOASTER'
export const CLEAR_TOASTER = 'CLEAR_TOASTER'

export function setToaster (toaster) {
  return {
    type: SET_TOASTER,
    toaster: toaster,
  }
}

export function clearToaster () {
  return {
    type: CLEAR_TOASTER 
  }
}