import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

function Content() {
    window.scrollTo(0, 0)
    return (
        <div className='Container'>

            <div className='LeftDiv'>
                <h1>Sobre</h1>
                <div>A Abbatex Uniformes Profissionais, no ramo de uniformes há mais de 20 anos, atendendendo indústrias, universidades, empresas de construção civil, hotéis, transportadoras, indústrias de alimentos, entre outros ramos, tanto na linha operacional, quanto social. É uma empresa especializada na confecção de uniformes personalizados para você ou sua empresa.
                <br />
                Oferecemos a garantia de qualidade, preço competitivo e bom atendimento.</div>
            </div>
            <div className='RightDiv'>
                <h1>Uniformes Profissionais</h1>
                <div>Confeccionamos qualquer tipo de uniforme profissional, personalizados com o logotipo da empresa em bordado, plastificado, sublimação ou silk-screen. Se você precisa de  Uniformes Para Empresas em Curitiba e Região, entre em contato, tire suas dúvidas e realize um orçamento sem compromisso!</div>
            </div>
        </div>
    );
}


export default function Sobre() {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
}


