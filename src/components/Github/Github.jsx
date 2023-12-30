// import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom"

const Github = () => {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/nekzadsultan')
    //     .then(resonse => resonse.json())
    //     .then(data =>setData(data))
    // },[])
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Name: {data.name}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/nekzadsultan')
    return response.json()
}
export default Github
