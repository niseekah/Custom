import "./App.css";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";


class CustomCard extends React.Component {

    render() {
        return (
            <>
                <div>
                    <br></br>
                    <br></br>
                </div>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Random movie of the day:
            </Typography>
                        <Typography variant="h5" component="h2">
                            Some movie
            </Typography>
                        <Typography color="textSecondary">Some year</Typography>
                        <Typography variant="body2" component="p">
                            Some brief description
            </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </>
        )

    }

}


export default CustomCard;