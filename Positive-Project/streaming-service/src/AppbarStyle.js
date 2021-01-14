import "./App.css";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";


class AppbarStyle extends React.Component{
    render(){
        return(
            <>
            
<AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Welcome</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </>

        )
            








        

    }


}

    

    export default AppbarStyle;