import React from 'react';

import Header from '../../Header'
import Footer from '../../Footer'


function Content() {
    window.scrollTo(0, 0)
    return (

        <div class="container" style={{ marginTop: '90px', width: '100%', height: '100%' }}>
            <form style={{ marginLeft: '35%' }} action="action_page.php">
                <br />
                <label for="name">Nome:</label><br />
                <input type="text" style={{width: '400px'}} id="name" name="name" placeholder="Seu nome ou o nome da sua empresa.." />
                <br />
                <br />
                <label for="email">Email:</label><br />
                <input type="text" style={{width: '400px'}} id="email" name="email" placeholder="Seu Email.." /><br />

                <br />

                <label for="pNumber">Telefone:</label><br />
                <input type="text" style={{width: '400px'}} id="pNumber" name="phoneNumber" placeholder="Seu Telefone.." /><br />

                <br />

                <label for="subject">Comentários:</label><br />
                <textarea  id="subject" name="subject" placeholder="Escreva alguma coisa.." style={{ height: '200px',width: '500px' }}></textarea><br />

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
