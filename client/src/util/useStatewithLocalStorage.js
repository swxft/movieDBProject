import { useState } from 'react'

const useStateLS = (initialState, lsKey) => {
  const lsValue = JSON.parse(localStorage.getItem(lsKey) || null)
  
  const [state, setState] = useState(lsValue || initialState)

  const setLsState = (param) => {
    if(typeof param === 'function') {
      setLsState(param(state));
    } else {
      setState(param);
      localStorage.setItem(lsKey, JSON.stringify(param));
    }
  }
  return [state, setLsState]
}

export default useStateLS
