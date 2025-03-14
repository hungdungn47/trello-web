import { debounce } from "lodash"
import { useCallback } from "react"

export const useDebounce = (debounceFn, delay = 500) => {
  if (!debounceFn || (typeof debounce !== 'function')) {
    throw new Error('Debouncing function is not a function')
  }
  return useCallback(debounce(debounceFn, delay), [debounceFn, delay])
}