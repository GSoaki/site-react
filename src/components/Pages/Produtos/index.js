import React from 'react';

import Header from './../../Header'
import Footer from './../../Footer'

import './styles.css'


function Content() {

    return (
        <div style={{ height: '200%',marginTop:'90px'}}>
            <div className="gridContainer">
                <div className="gridItem">1</div>
                <div className="gridItem">2</div>
                <div className="gridItem">3</div>
                <div className="gridItem">4</div>
                <div className="gridItem">5</div>
                <div className="gridItem">6</div>
                <div className="gridItem">7</div>
                <div className="gridItem">8</div>
                <div className="gridItem">9</div>
                <div className="gridItem">10</div> 
                <div className="gridItem">11</div> 
                <div className="gridItem">12</div> 
                <div className="gridItem">13</div>
                <div className="gridItem">14</div> 
                <div className="gridItem">15</div> 
                <div className="gridItem">16</div>
            </div>
        </div>
    );
}


export default function Sobre() {
    window.scrollTo(0, 0)
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
}


