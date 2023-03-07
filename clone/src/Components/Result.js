import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Videocard from './videocard/Videocard'
import { Box, styled } from '@mui/material'
const Result = ({selectitem}) => {
    const [getvalue,setGetvalue] = useState([[]])
    const base_Url ='https://api.themoviedb.org/3';
    useEffect( () =>{
       const fetchdata = async()=>{
        const request = await axios.get(`${base_Url}${selectitem}`)
        setGetvalue(request.data.results)
         }
         fetchdata();
    },[selectitem])
    console.log(getvalue)

    const Space = styled(Box)({
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center"
    })
  return (
    <div>
      <Space>
      {getvalue.map((movie) => (
          <Videocard movie={movie} key={movie.id}/>
        ))}
      </Space>
    </div>
  )
}

export default Result