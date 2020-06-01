import React from 'react';

import { TitleButton } from './TitleButton/styles.js'
import styled from 'styled-components'
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'

import {
    Link
} from "react-router-dom";


import './style.css'
import logo from './../../Images/AbbatexIcon2.jpg'


const Container = styled.div`
    height: 10%;
    width: 100%;
    padding: 0 25px;
    background: #17a3a1;
    color: #ffffff;
    z-Index:5;
    display: flex;
    align-items: center;
    position:fixed;
    top: 0;
    left:0;

    @media(max-width:900px){
        height:5.5%;
    }

`;

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="logo" className='headerLogo' ></img>

            <div>
                <h2 style={{ color: 'yellow' }}>Abbatex</h2>
                <h3 style={{ color: 'black' }}>Uniformes</h3>
            </div>

            <Link style={{ marginLeft: '5%' }} to="/"><TitleButton id="button" >Início</TitleButton></Link>
            <Link to="/produtos"><TitleButton id="button" >Produtos</TitleButton></Link>
            <Link to="/sobre"><TitleButton id="button" >Sobre</TitleButton></Link>
            <Link to="/contato"><TitleButton id="button">Contato</TitleButton></Link>

            <div className='IconDiv'>
                <FaWhatsapp fontSize="20px" className='FAicon' /> 41 99887-8745
                <FaPhone fontSize="20px" className='FAicon' /> 41 3582-1272
                <FaEnvelope fontSize="20px" className='FAicon' />
                {" "}abbatexuniformes@gmail.com
            </div>

        </Container>

    )
}