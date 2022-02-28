import {Container} from "@mui/material";
import React from "react";
import {Footer} from "./Footer";
import Paper from "@material-ui/core/Paper";
import TextareaAutosize from "@mui/base/TextareaAutosize";

export const CompleteStory = (props) => {

    let lastDot= props.story.lastIndexOf('.');
    let completeStory = props.story.slice(0,lastDot+1);

    return (
        <Container sx={{
            display: 'flex',
            gap: 2,
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100vh',
        }}
        >
             <TextareaAutosize  value={completeStory}   readOnly={true}/>
            <Footer/>
        </Container>

    );
}
