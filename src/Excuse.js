import axios from 'axios'
import { useState } from 'react'

export const Excuse = () => {
    const [Excuse, setExcuse] = useState(null);
    const GenerateParty = () => {
        axios.get("https://excuser-three.vercel.app/v1/excuse/party/").then((response) => {
            setExcuse(response.data[0])
        });
    }
    const GenerateOffice = () => {
        axios.get("https://excuser-three.vercel.app/v1/excuse/office/").then((response) => {
            setExcuse(response.data[0])
        });
    }
    const GenerateFamily = () => {
        axios.get("https://excuser-three.vercel.app/v1/excuse/family/").then((response) => {
            setExcuse(response.data[0])
        });
    }
  return (
    <div>
        <h1>Genarate Excuse</h1>
        <button onClick={GenerateParty}>Party</button>
        <button onClick={GenerateOffice}>Office</button>
        <button onClick={GenerateFamily}>Family</button>
        <h3>Category : {Excuse?.category}</h3>
        <h3>Excuse : {Excuse?.excuse}</h3>
    </div>
  )
}

