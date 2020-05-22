import React from 'react';

import { FaWhatsapp,FaPhone,FaMapMarker } from 'react-icons/fa'

import { Container } from './styles';

export default function Footer(){
    return(
        <Container>
            <h2>Contato:</h2>
            <div><br/><FaWhatsapp font-size="32px"/> 41 99887-8745</div>
            <div><br/><FaPhone font-size="30px"/> 3582-1272</div>
            <div><br/><FaMapMarker font-size="30px"/> Rezala Simão, 997  Portão - Curitiba-Pr</div>
        </Container>
    )
}