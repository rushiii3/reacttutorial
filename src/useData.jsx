import  { useState } from 'react'
export const useData = () => {
    const [count, setcount] = useState(0);
  const handleCounteIncrease = () => {
    setcount(count+1);
  }
  const handleCounterDecrease = () => {
    setcount(count-1);
  }

  const handleCounterZero = () => {
    setcount(0);
  }
  return {handleCounteIncrease,handleCounterDecrease,handleCounterZero,count}
}
