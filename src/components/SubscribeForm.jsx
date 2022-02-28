import React from "react";
import {Container} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function calculateStart(story, text) {
    const maxLen = Math.ceil(text.length + (story.length - text.length)*0.4);
    let pieceOfText = story.slice(0,maxLen);
    let lastSpace = pieceOfText.lastIndexOf(' ');
    pieceOfText = pieceOfText.slice(0,lastSpace);
    return pieceOfText + "...";
}



export const SubscribeForm = (props) => {

    const LABEL = 'Si quieres leer el resto y otras historias, suscríbete a nuestra newsletter.';
    const LABEL_NAME = 'Nombre';
    const LABEL_NAME_HELP_TEXT = 'Introduce tu nombre.';
    const LABEL_EMAIL = 'Email';
    const LABEL_EMAIL_HELP_TEXT = 'Introduce tu email.';
    const BUTTON_LABEL = 'Suscribirme';
    const pieceOfStory = calculateStart(props.story, props.text);
    const navigate = useNavigate();

    const subscribe = () => {
        navigate('/complete-story');
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
            <TextareaAutosize  value={pieceOfStory}   readOnly={true}/>
            <FormLabel style={{fontFamily: 'fantasy', fontWeight: 'bold', fontSize: '30px', textAlign:'center'}}>{LABEL}</FormLabel>
            <form onSubmit={subscribe}>
                <Container sx={{
            display: 'flex',
            gap: 2,
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
        }}>
            <FormControl>
                <InputLabel htmlFor="name">{LABEL_NAME}</InputLabel>
                <Input id="name" aria-describedby={LABEL_NAME_HELP_TEXT} required={true}/>
                <FormHelperText id="name">{LABEL_NAME_HELP_TEXT}</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="email">{LABEL_EMAIL}</InputLabel>
                <Input id="email" aria-describedby="email" required={true}/>
                <FormHelperText id="email">{LABEL_EMAIL_HELP_TEXT}</FormHelperText>
            </FormControl>
            <Button type={"submit"} color="primary" variant="contained">{BUTTON_LABEL}</Button>
                       </Container>
        </form>
        </Container>
    );
}
