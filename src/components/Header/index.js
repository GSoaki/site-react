import React from 'react';

import { Container } from './styles';
import { TitleButton } from './../TitleButton/styles.js'

export default function Header() {
    function goDown() {
        window.scrollTo(0, window.innerHeight)
    }

    return (
        <Container>
            <h2>Abbatex Uniformes</h2> 
            <TitleButton id="btn1" style={{ backgroundColor: '#17a3a1',marginLeft:'10%'}}>Produtos</TitleButton>
            <TitleButton id="btn2" style={{ backgroundColor: '#17a3a1' }}>Parceiros</TitleButton>
            <TitleButton id="btn3" style={{ backgroundColor: '#17a3a1' }}>Sobre</TitleButton>
            <TitleButton id="btn4" style={{ backgroundColor: '#17a3a1' }} 
            onClick={() => goDown()}
            >Contato</TitleButton>
            
        </Container>
    )
}