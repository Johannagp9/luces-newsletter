import FormLabel from "@mui/material/FormLabel";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";
import React, { useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";



async function query(text) {

    const response = await fetch(
        "https://api-inference.huggingface.co/models/DeepESP/gpt2-spanish",
        {
            headers: {Authorization: "Bearer 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"},
            method: "POST",
            body: JSON.stringify(text),
        }
    );
    return await response.json();

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

        if (text !== '') {

           query({"inputs": text, "parameters":{"max_new_tokens":250}}).then((response) => {
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
