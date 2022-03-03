import FormLabel from "@mui/material/FormLabel";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";
import React, { useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";



async function query(text, loading) {
    if (text !== '' && loading) {
    const response = await fetch(
        "https://ewzpxm0hq4.execute-api.eu-west-1.amazonaws.com/staging/storytell",
        {
            method: "POST",
            body: JSON.stringify(text),
        }
    );
    const result = await response.json();
    return result;
    }

}


export const StartStoryForm = (props) => {

    const LABEL = '¿Cómo comienza tu historia?';
    const BUTTON_TEXT = 'Imagina el resto';
    const ERROR_TEXT = "El principio de la historia no puede ser vacío";
    const startStoryRef = useRef("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const get_story = () => {

        setLoading(true)

        const text = startStoryRef.current.value;
        setError(false);
        console.log(text);
        console.log(loading);

        if (text !== '' && loading) {

           query({"text": text, "max_length":250},loading).then((response) => {
               props.setText(text);
               let story = response[0].generated_text;
               props.setStory(story);
               setLoading(false);
               navigate('/subscribe');
            });

        }
        else {
            setLoading(false);
            setError(true);
        }
    }


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
            <FormLabel style={{fontFamily: 'fantasy', fontWeight: 'bold', fontSize: '30px', textAlign: 'center'}}>{LABEL}</FormLabel>
            <TextareaAutosize ref={startStoryRef}  style={{height: '60%'}}/>
            {error &&  <FormLabel style={{fontSize: '12px', color: '#c70039'}}>{ERROR_TEXT}</FormLabel>}
            {loading && <LinearProgress />}
            <Button color="primary" variant="contained" onClick={get_story}>{BUTTON_TEXT}</Button>
        </Container>
    );
}

