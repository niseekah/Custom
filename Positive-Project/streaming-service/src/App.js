import logo from "./logo.svg";
import "./App.css";


import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Popover from '@material-ui/core/Popover';
let anchorEl;
let open = false;
const handleClick = (event) => {
  anchorEl = event.currentTarget
  open = true;
  console.log("testing");
};

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



function App() {
  return (
  
    <div>

    {/*Niseekah*/}
    <Avatar alt="Remy Sharp" src="https://www.regmovies.com/magnoliaPublic/dam/jcr:7372c5b5-e8bf-4169-ab11-1a91291e7d97/The-Suicide-Squad-Empire-Magazine-Cover.jpg" onClick={handleClick}/>
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
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={5} readOnly />
      </Box>


    <Avatar alt="Travis Howard" src="https://m.media-amazon.com/images/M/MV5BZGE2MmQ0ZTEtM2FjOC00OTE1LTlmYjMtYjlkMzllN2RlOTBiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" onClick={handleClick}/>
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
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={4} readOnly />
      </Box>


    <Avatar alt="Cindy Baker" src="https://www.filmstories.co.uk/wp-content/uploads/2020/02/spiral-poster.jpg" onClick={handleClick}/>
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
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={3} readOnly />
      </Box>
  

    {/*Rosanne*/}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Welcome</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></AccordionSummary>
        <AccordionDetails>
          <Typography>
            Welcome to our streaming service! We provide you the latest movies
            and tv shows at the comfort of your home!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>genres</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer all genres of movies and tv shows at an affordable price!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>MORE COMING SOON!</Typography>
        </AccordionSummary>
      </Accordion>
      
      <form noValidate>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2021-01-12 T 03:30PM"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    
  {/*Bijorn*/}
  <div><br></br><br></br></div>
      <Card variant="outlined">
        <CardContent>
          <Typography
            color="textSecondary"
            gutterBottom
          >
            Random movie of the day:
          </Typography>
          <Typography variant="h5" component="h2">
            Some movie
          </Typography>
          <Typography color="textSecondary">
            Some year
          </Typography>
          <Typography variant="body2" component="p">
            Some brief description
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>

  );
}

/*const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
*/

export default App;
