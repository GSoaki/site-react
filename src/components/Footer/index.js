import React from 'react';

import { FaWhatsapp, FaPhone, FaMapMarker, FaEnvelope, FaArrowUp } from 'react-icons/fa'

import { TitleButton }  from './../TitleButton/styles.js'

import { Container, Content } from './styles';

import Mapa from './../../img/map.png'

export default function Footer() {
    function goUp(){
        window.scrollTo(0,0)
    }
    return (
        <Container>
            <TitleButton onClick={()=>goUp()} style={{position:'absolute',marginLeft:'45%',bottom:-80,backgroundColor:'#148c8b',fontSize:12}}><FaArrowUp font-size="32px"/></TitleButton>
            <Content>
                <h2>Contato:</h2>
                <div ><br />
                    <FaWhatsapp font-size="32px" style={{ verticalAlign: "middle", marginRight: 10 }} /> 41 99887-8745<br />
                    <br />
                    <FaPhone font-size="30px" style={{ verticalAlign: "middle", marginRight: 10 }} /> 3582-1272<br />
                    <br />
                    <FaMapMarker font-size="30px" style={{ verticalAlign: "middle", marginRight: 10 }} />
                Rezala Simão, 997  Portão,Curitiba-PR<br />
                    <br />
                    <FaEnvelope font-size="30px" style={{ verticalAlign: "middle", marginRight: 10 }} />
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
    )
}