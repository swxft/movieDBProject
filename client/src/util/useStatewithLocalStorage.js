import { useState } from 'react'

const useStateLS = (initialState, lsKey) => {
  const lsValue = JSON.parse(localStorage.getItem(lsKey) || null)
  
  const [state, setState] = useState(lsValue || initialState)

  const setLsState = (newState) => {
    setState(oldState => {
      localStorage.setItem(lsKey, JSON.stringify(newState));
      return newState;
    })
  }
  return [state, setLsState]
}

export default useStateLS
