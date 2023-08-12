import axios from 'axios'
import { useState } from 'react'

export const Name = () => {
    const [Input, setInput] = useState("");
    const [Age, setAge] = useState("")
    const handleSubmit = () => {
        axios.get(`https://api.agify.io/?name=${Input}`).then(response => {
            setAge(response.data.age);
            console.log(response.data.age);
    })
    }
    
  return (
    <div>
        <input type='text' onChange={(e) => {setInput(e.target.value)}} value={Input} />
        <button onClick={handleSubmit}>Predit Age</button>
        <h1>Predited Age :{Age}</h1>
    </div>
  )
}
