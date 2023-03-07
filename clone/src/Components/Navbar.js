import { Stack,Typography } from '@mui/material'
import React from 'react'
import request from './Helper/Url'

const Navbar = ({setSelectitem}) => {
   
  return (
    <div>
    <Stack direction="row" spacing={4} sx={{color:"white",margin:"20px",cruser:"pointer"}}>
      <Typography  onClick={()=>setSelectitem(request.fetchTrending)}>Trending</Typography>
      <Typography  onClick={()=>setSelectitem(request.fetchActionMovies)}>Action</Typography>
      <Typography  onClick={()=>setSelectitem(request.fetchComedyMovies)}>Comedy</Typography>
      <Typography  onClick={()=>setSelectitem(request.fetchHorrorMovies)}>Horor</Typography>
      <Typography  onClick={()=>setSelectitem(request.fetchAnimationMovies)}>Animaton</Typography>
    </Stack>    
    </div>
  )
};

export default Navbar