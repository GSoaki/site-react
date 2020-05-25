import React from 'react';

import { FaWhatsapp, FaPhone, FaMapMarker, FaEnvelope, FaArrowUp } from 'react-icons/fa'

import { TitleButton } from './../TitleButton/styles.js'

import { Container, Content } from './styles';

import './../Footer/style.css'

import Mapa from './../../img/map.png'

export default function Footer() {
    function goUp() {
        window.scrollTo(0, 0)
    }
    return (
        <div style={{backgroundColor:'#f5f5f5'}}>
        <TitleButton id="bottomButton" onClick={() => goUp()}><FaArrowUp fontSize="32px" /></TitleButton>
        <Container>
            <Content>
                <h2>Contato:</h2>
                <div ><br />
                    <FaWhatsapp fontSize="32px" className='FAicon' /> 41 99887-8745<br />
                    <br />
                    <FaPhone fontSize="30px"  className='FAicon'/> 41 3582-1272<br />
                    <br />
                    <FaMapMarker fontSize="30px" className='FAicon' />
                Rezala Simão, 997  Portão,Curitiba-PR<br />
                    <br />
                    <FaEnvelope fontSize="30px" className='FAicon'/>
                 abbatexuniformes@gmail.com
                </div>
            </Content>
            <Content>
                <h2>Horário de Funcionamento:</h2>
                <div><br />Segunda-feira a Quinta-feira:<br />
                    <br />08:00h - 12:00 e 13:30 - 18:00<br />
                    <br />Sexta-feira:
                <br /><br />08:00h - 12:00 e 13:30 - 17:30<br />
                </div>
            </Content>
            <Content>
                <img src={Mapa} alt="Localização" height='300'></img>
            </Content>
        </Container>
        </div>
    )
}