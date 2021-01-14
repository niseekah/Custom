import "./App.css";
import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";


class CustomFormGroup extends React.Component {

    render() {
        return (
            <>
                <FormGroup row>
                    <FormControlLabel disabled control={<Switch />} label="Dark Mode" />
                </FormGroup>
            </>
        )

    }

}


export default CustomFormGroup;