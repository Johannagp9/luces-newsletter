import './App.css';
import React, {useState} from "react";
import {ThemeProvider} from "@mui/material/styles"
import createPalette from '@material-ui/core/styles/createPalette';
import createTheme from "@material-ui/core/styles/createTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import {StartStoryForm} from "./components/StartStoryForm";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {SubscribeForm} from "./components/SubscribeForm";
import {CompleteStory} from "./components/CompleteStory";






const theme = createTheme({
        palette: createPalette({
            primary: {
                main: '#A69C0F',
                contrastText: '#FFFFFF',
            },
            secondary: {
                main: '#BFBA75',
            },
        }),
    }
);


function App() {

    const [text,setText] = useState("")
    const [story, setStory] = useState("");

    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <GlobalStyles
                    styles={{
                        body: {backgroundColor: "#D9D6B4"},
                    }}
                />
                <BrowserRouter>
                <Routes>
                <Route path="/" element={<StartStoryForm setText ={setText} setStory={setStory} /> }/>
                <Route path="/subscribe" element={<SubscribeForm text ={text} story={story} />}/>
                <Route path="/complete-story" element={<CompleteStory story={story}/>}/>
                </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
