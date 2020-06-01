import React from 'react';

import Header from './../../Header'

import Footer from './../../Footer'

import './styles.css'

function Content() {
    window.scrollTo(0, 0)
    return (
        <div className='Container'>

            <div className='LeftDiv'>
                <h1>Sobre</h1>
                <div>A Abbatex Uniformes Profissionais, com 20 anos de experiência no ramo de uniformes empresariais, é uma empresa especializada na confecção de uniformes personalizados para uso diário: transformamos suas idéias em uniformes inteligentes para o seu negocio.
                <br />
                Atendemos indústrias, metalúrgicas, farmacêuticas, hospitais, empresas de construção civil, hotéis, transportadoras, indústrias de alimentos, entre outros ramos, tanto na linha operacional, quanto social.
                <br />
                Desenvolvemos projetos exclusivos e personalizados de uniformes profissionais conforme a sua necessidade. Nosso objetivo é personalizar, adaptando os uniformes conforme o clima e o ambiente de trabalho e oferecendo propostas e estilos que seguem a programação visual, cores e padronagens da sua empresa.

Oferecemos a garantia de qualidade, preço competitivo e bom atendimento.</div>
            </div>
            <div className='RightDiv'>
                <h1>Uniformes Profissionais</h1>
                <div>Confeccionamos qualquer tipo de uniforme profissional, personalizados com o logotipo da empresa em bordado, platificado, sublimação ou silk-screen. Se você precisa de  Uniformes Para Empresas em Curitiba e Região, entre em contato, tire suas dúvidas e realize um orçamento sem compromisso!</div>
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


