import React from 'react';

import { TitleButton } from './../TitleButton/styles.js'
import styled from 'styled-components'
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import './style.css'
import logo from './../../img/AbbatexIcon2.jpg'


const Container = styled.div`
    height: 80px;
    width: 100%;
    padding: 0 30px;
    background: #17a3a1;
    color: #ffffff;
    z-Index:5;
    display: flex;
    align-items: center;
    position:fixed;
    top: 0;
    left:0;
`;



export default function Header() {
    function goDown() {
        window.scrollTo(0, window.innerHeight)

    }

    return (
        <Container>

            <img src={logo} style={{ height: 80, marginRight: '1%' }} />
            
            <div>
                <h1 style={{ color: 'yellow' }}>Abbatex</h1>
                <h2 style={{ color: 'black' }}>Uniformes</h2>
            </div>
            <div style={{ marginLeft: 30 }}>
                <h1 >Abbatex</h1>
                <h2 >Uniformes</h2>
            </div>

            <Link to="/"><TitleButton id="button" style={{ marginLeft: '7%' }} >Início</TitleButton></Link>
            <TitleButton id="button" >Produtos</TitleButton>
            <Link to="/sobre"><TitleButton id="button" >Sobre</TitleButton></Link>
            <TitleButton id="button"
                onClick={() => goDown()}
            >Contato</TitleButton>

            <div style={{ fontSize: 13, marginTop: '1.5%', marginLeft: '7%' }}>
                <FaWhatsapp fontSize="20px" className='FAicon' /> 41 99887-8745<br />
                <br />
                <FaPhone fontSize="20px" className='FAicon' /> 41 3582-1272<br /><br />
            </div>
            <div style={{ fontSize: 13, marginLeft: '2%' }}>
                <FaEnvelope fontSize="20px" className='FAicon' />
                 abbatexuniformes@gmail.com
            </div>


        </Container>

    )
}