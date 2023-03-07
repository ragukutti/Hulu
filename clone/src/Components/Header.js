import React from 'react';
import {CardMedia,Stack,styled,Box, Typography,} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const Space = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center", 
    
  });
  
  return (
    <div >
      <Space>
          <Stack direction="row" spacing={3} >
              <CardMedia
               component="img"
               image='https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png'
                sx={{maxWidth:"70px"}}
              />
          </Stack>
          <Stack direction="row" spacing={3} sx={{color:"white",fontWight:"800"}} >
            <Typography>Home</Typography>
            <Typography>Tv</Typography>
            <Typography>Movies</Typography>
            <Typography>Holidays</Typography>
            <Typography>My Stuff</Typography>
            <Typography>Hubs</Typography>
          </Stack>
          <Stack direction="row" spacing={3} sx={{color:"white"}}  >    
            <SearchIcon/>
            < AccountCircleIcon/>
          </Stack>
       </Space>
    </div>
  )
};

export default Header