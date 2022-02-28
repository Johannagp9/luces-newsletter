import React from "react";
import logo from './images/logo-white.png'
import FormLabel from "@mui/material/FormLabel";
import {Container} from "@mui/material";

export const Footer = () => {

    const LABEL = 'CONTACTO'
    const PHONE_NUMBER = '(+34) 952 122 100'
    const INFO_EMAIL = 'info@librerialuces.com'
    const WEB_PAGE_URL = 'https://www.librerialuces.com/es'
    return (
        <nav className="navbar">
            <hr/>
            <img src={logo}/>
            <Container sx={{
                display: 'flex',
                gap: 2,
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <FormLabel style={{fontWeight: 'bold', fontSize: '20px'}}>{LABEL}</FormLabel>
                <FormLabel style={{fontSize: '16px'}}>{PHONE_NUMBER}</FormLabel>
                <FormLabel style={{fontSize: '16px'}}>{INFO_EMAIL}</FormLabel>
                <FormLabel style={{fontWeight: 'bold', fontSize: '18px'}}>Para más info visite nuestra <a
                    href={WEB_PAGE_URL}> web </a> </FormLabel>
            </Container>
        </nav>
    );
}

