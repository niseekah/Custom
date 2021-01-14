import "./App.css";

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Card from "@material-ui/core/Card";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";


class AccordionStyle extends React.Component{


    





    render(){
        return(
            <>
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
      </>

        )
    }
}


export default AccordionStyle;
