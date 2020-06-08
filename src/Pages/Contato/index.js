import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'


function Content() {
    window.scrollTo(0, 0)
    return (
        <div className="container">
            <h1 style={{color:"#148c8b",textAlign:'center'}}>Contato:</h1>
            <form className="form" action="action_page.php">
                <br />
                <label className="labelText" for="name">Nome:</label><br />
                <input type="text" className="formItem" id="name" name="name" placeholder="Seu nome ou o nome da sua empresa.." />
                <br />
                <br />
                <label className="labelText" for="email">Email:</label><br />
                <input type="text" className="formItem" id="email" name="email" placeholder="Seu Email.." /><br />

                <br />

                <label className="labelText" for="pNumber">Telefone:</label><br />
                <input type="text" className="formItem" id="pNumber" name="phoneNumber" placeholder="Seu Telefone.." /><br />

                <br />

                <label className="labelText" for="subject">Mensagem:</label><br />
                <textarea  id="subject" name="subject" placeholder="Escreva sua mensagem.."></textarea><br />

                <input type="submit" value="Enviar" />

            </form>
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
