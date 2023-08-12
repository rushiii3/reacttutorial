import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import { Button } from '@nextui-org/button'
export const Home = () => {
    const {data,isLoading,refetch} = useQuery(["cat"], () => {
        return axios.get("https://catfact.ninja/fact").then(response => response.data)
    })
    if(isLoading){
        return <>Loadinggg...</>
    }
  return (
    <div>
        {data?.fact}
        <Button onClick={refetch} color="primary" className='p-4'>Update</Button>
    </div>
  )
}
