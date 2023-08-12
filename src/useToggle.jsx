import  { useState } from 'react'

export const useToggle = (initalState = false) => {
    const [State, setState] = useState(initalState);
    const toggle = () => {
        setState((prev) => !prev);
    }
  return [State,toggle];
}
