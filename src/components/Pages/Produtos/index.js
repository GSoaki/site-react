import React from 'react';

import Header from './../../Header'
import Footer from './../../Footer'


function Content() {

    return(
        <div style={{height:'100%'}}>
            
        </div>
    );
}


export default function Sobre(){
    window.scrollTo(0, 0)
    return(
        <>
        <Header/>
            <Content/>
        <Footer/>
        </>
    );
}


