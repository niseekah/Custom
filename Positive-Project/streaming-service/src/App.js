import "./App.css";


import AvatarOne from "./AvatarOne";
import AvatarTwo from "./AvatarTwo";
import AccordionStyle from "./AccordionStyle";
import AppbarStyle from "./AppbarStyle";
import CustomCard from "./CustomCard";
import CustomFormGroup from "./CustomFormGroup";

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";

let anchorEl;
let open = false;
const handleClick = (event) => {
  anchorEl = event.currentTarget;
  open = true;
  console.log("testing");
};

const useStyles = makeStyles({
  
  list: {
    width: '100%',
    textAlign:'left'
  },
  fullList: {
    width: "auto",
  },
});

function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Action Movies", "Family Movies", "Comedy", "Actors & Actresses"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["TOP 10", "CLASSICS", "RECOMMENDED"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    

    <div>
      <AccordionStyle></AccordionStyle>

  {/*Rosanne ==============================================================================================================================*/}
      <AppbarStyle></AppbarStyle>

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
{/*Rosanne =========================================================================================================================================*/}



{/*Bijorn =================================================================================================================================================*/}
     <CustomCard></CustomCard>
     <CustomFormGroup></CustomFormGroup>
      <div>
        {["menu"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
 {/*Bijorn =================================================================================================================================================*/} 


{/*Niseekah  =====================================================================================================================================================================================*/}
    <div className = "App-background">
      <div className = "App-row">
          <div className = "App-column">
              <AvatarOne></AvatarOne>
          </div>
          
      </div>


      <div className = "App-row">
          <div className = "App-column">
            <AvatarTwo></AvatarTwo>
          </div>
      </div>
    </div> 
{/*Niseekah  ===============================================================================================================================*/}   
    </div>
  );
}

export default App;


 