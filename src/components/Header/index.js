import React from 'react';

import { Container, SetContainer } from './styles';
import { TitleButton } from './../TitleButton/styles.js'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import './style.css'

import logo from './../../img/AbbatexIcon2.jpg'

export default function Header() {
    function goDown() {
        window.scrollTo(0, window.innerHeight)

    }

    return (
        <>
            <SetContainer>
                <img src={logo} height='60' style={{marginBottom:10}}></img>
                <div style={{position:'relative', left:'65%'}}>
                    <FaEnvelope fontSize="30px" style={{ verticalAlign: "middle", marginRight: 10 }} />
                    abbatexuniformes@gmail.com
                    <FaWhatsapp fontSize="32px" style={{ verticalAlign: "middle", marginLeft: 10 }} /> 41 99887-8745
                </div>

            </SetContainer>
            <Container>
                <h2>Abbatex Uniformes</h2>
                <TitleButton id="button" style={{ marginLeft: '10%' }}>Produtos</TitleButton>
                <TitleButton id="button" >Parceiros</TitleButton>
                <TitleButton id="button" >Sobre</TitleButton>
                <TitleButton id="button"
                    onClick={() => goDown()}
                >Contato</TitleButton>

            </Container>
        </>

    )
}