import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

let anchorEl;
let open = false;
const handleClick = (event) => {
  anchorEl = event.currentTarget;
  open = true;
  console.log("testing");
}

class AvatarTwo extends React.Component
{
    render()
    {
        return(
            <>
                <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/en/c/c7/Nobody_2021_Film_Poster.jpeg" style={{width:"200px", height:"200px"}} onClick={handleClick}/>
            <Popover
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography>The content of the Popover.</Typography>
              </Popover>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" style={{color: "white"}} >Nobody</Typography>
                <Rating name="read-only" value={3} readOnly />
              </Box>
            <Avatar alt="Travis Howard" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/F9_poster.jpg/220px-F9_poster.jpg" style={{width:"200px", height:"200px"}} onClick={handleClick}/>
            <Popover
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography>The content of the Popover.</Typography>
              </Popover>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" style={{color: "white"}}>Fast and Furious 9</Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
            <Avatar alt="Cindy Baker" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwTLG9lhb7OYVU9SW9W465xpeA6aVAhY6ce3OgtfB3S6TwULWb" style={{width:"200px", height:"200px"}} onClick={handleClick}/>
            <Popover
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography>The content of the Popover.</Typography>
              </Popover>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" style={{color: "white"}} >The Conjuring 3</Typography>
                <Rating name="read-only" value={4} readOnly />
              </Box>
            </>
        )
    }
}

export default AvatarTwo;