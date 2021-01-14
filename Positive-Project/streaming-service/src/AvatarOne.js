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

class AvatarOne extends React.Component
{
    render()
    {
        return(
        <>
          <Avatar alt="Remy Sharp" src="https://www.regmovies.com/magnoliaPublic/dam/jcr:7372c5b5-e8bf-4169-ab11-1a91291e7d97/The-Suicide-Squad-Empire-Magazine-Cover.jpg" style={{width:"200px", height:"200px"}} onClick={handleClick}/>
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
                <Typography component="legend" style={{color: "white"}} >The Suicide Squad</Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>

            <Avatar alt="Travis Howard" src="https://upload.wikimedia.org/wikipedia/en/6/6a/In_The_Heights_teaser_poster.jpg" style={{width:"200px", height:"200px"}} onClick={handleClick}/>
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
                <Typography component="legend" style={{color: "white"}}>In the Heights</Typography>
                <Rating name="read-only" value={4} readOnly />
              </Box>

            <Avatar alt="Cindy Baker" src="https://www.filmstories.co.uk/wp-content/uploads/2020/02/spiral-poster.jpg" style={{width:"200px", height:"200px"}} onClick={handleClick}/>
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
                <Typography component="legend" style={{color: "white"}} >Spiral</Typography>
                <Rating name="read-only" value={3} readOnly />
              </Box>
            </>
        )
    }
}
export default AvatarOne;