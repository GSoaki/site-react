import React from 'react';

import { FaWhatsapp, FaPhone, FaMapMarker, FaEnvelope } from 'react-icons/fa'

import { Container, Content } from './styles';

import './../Footer/style.css'

import Mapa from './../../Images/map.png'

export default function Footer() {
    return (

        <Container>
            <Content>
                <div style={{ marginRight: '10%'}}>
                    <h2>Contato:</h2>
                    <br/>
                    <FaWhatsapp fontSize="32px" className='footerIcon' /> 41 99887-8745<br />
                    <br />
                    <FaPhone fontSize="30px" className='footerIcon' /> 41 3582-1272<br />
                    <br />
                    <FaMapMarker fontSize="30px" className='footerIcon' />
                Rezala Simão, 997  Portão,Curitiba-PR<br />
                    <br />
                    <FaEnvelope fontSize="30px" className='footerIcon' />
                   {" "}abbatexuniformes@gmail.com
                    </div>

                <div >
                    <h2>Horário de Funcionamento:</h2><br />Segunda-feira a Quinta-feira:<br />
                    <br />08:00h - 12:00 e 13:30 - 18:00<br />
                    <br />Sexta-feira:
                        <br /><br />08:00h - 12:00 e 13:30 - 17:30
                        </div>

            </Content>
            <Content>
                <img className='footerImg' src={Mapa} alt="Localização"></img>
            </Content>

        </Container>

    )
}