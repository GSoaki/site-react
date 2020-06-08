import React, { useState } from 'react';

import {
    Link
} from "react-router-dom";

import { FaAngleLeft, FaAngleRight, FaStar, FaTimes, FaClock, FaUserCheck, FaMoneyCheckAlt } from 'react-icons/fa'

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Banner from '../../Images/BannerPrincipal.jpg'
import BannerMascara from '../../Images/bannerMascara2.jpg'

import roupa1 from '../../Images/roupa1.png'
import roupa2 from '../../Images/roupa2.png'
import roupa3 from '../../Images/roupa3.png'
import roupa4 from '../../Images/roupa4.png'
import roupa5 from '../../Images/roupa5.png'

import './styles.css'



function Content() {
    window.scrollTo(0, 0)

    const [firstSession, setFirstSession] = useState(localStorage.getItem('firstSession'));

    function closeDiv() {
        document.getElementById('extraDiv').style.display = 'none';
        document.getElementById('Container').style.opacity = 1;

        setFirstSession(false)
        localStorage.setItem('firstSession', firstSession);
    }

    function SampleNextArrow() {
        return (
            <FaAngleRight
                className='FAicon'
                id="Arrow-right"
                fontSize="35px"
            />
        );
    }
    function SamplePrevArrow() {
        return (
            <FaAngleLeft
                className='FAicon'
                id="Arrow-left"
                fontSize="35px"
            />
        );
    }
    return (
        <>
            <div style={firstSession ? { display: 'none' } : { display: 'inline' }} id="extraDiv">
                <FaTimes
                    className='FAicon CloseIcon'
                    fontSize="35px"
                    style={{ position: 'relative', left: '45%' }}
                    onClick={closeDiv}
                />
                <h1>Máscara de Tecido</h1>
            </div>
            <div style={firstSession ? { opacity: 1 } : { opacity: 0.5 }} id="Container" className="HomeContainer">
                <div className='salesContainer'>
                    <img style={{marginLeft:'20%',marginTop:'-5px',width: '70%',zIndex:-1 }} src={BannerMascara} alt="Mascara" />
                </div>
                <div className='entryContainer'>
                    <Link id="bannerLink" to="/contato" />
                    <img style={{ marginLeft: '-25%', width: '90%', position: 'relative' }} src={Banner} alt="Banner Avental" />
                    <h6 style={{color:'#ffffff',textAlign:'right'}}>"https://br.freepik.com/fotos-vetores-gratis/restaurante Restaurante foto criado por freepik - br.freepik.com"</h6>
                </div>

                <div className='ListDiv'>
                    <h2 className='listTitle'>Uniformes Escolares</h2>
                    <h3 className='listTitle'>Escolas Parceiras</h3>

                    <ul className="schoolList">
                        <li className="schoolItem">
                            Escola Paula Amaral
                        </li>
                        <li className="schoolItem">
                            Escola Cidadã
                        </li>
                        <li className="schoolItem">
                            Escola Francisco Klemtz
                        </li>
                        <li className="schoolItem">
                            Escola Papa João XXIII
                        </li>
                        <li className="schoolItem">
                            Escola Dom Orione
                        </li>
                        <li className="schoolItem">
                            Colégio Marechal Cândido Rondon
                        </li>
                        <li className="schoolItem">
                            Escola Profª Maria Nicolas
                        </li>
                        <li className="schoolItem">
                            Escola Pe. João Cruciani
                        </li>
                        <li className="schoolItem">
                            Colégio Paula Gomes
                        </li>
                    </ul>
                    <br />
                    <h4 className='listTitle' style={{ marginBottom: '5%', textDecoration: 'none' }}>Entre em contato para Consultar Modelos disponíveis.</h4>
                    <br />
                    <h1 className='listTitle'>Qualidade</h1>
                    <ul className='listContainer'>
                        <li className='listItem' >
                            <FaStar className='FAicon' fontSize="35px" />Qualidade do material ao produto final. Personalizado do seu jeito.
                            </li>
                        <li className='listItem'>
                            <FaClock className='FAicon' fontSize="35px" />Entrega rápida e sempre dentro do prazo.</li>
                        <li className='listItem'>
                            <FaUserCheck className='FAicon' fontSize="35px" />Atendimento rápido e de qualidade.</li>
                        <li className='listItem'>
                            <FaMoneyCheckAlt className='FAicon' fontSize="35px" />Ótimos preços e excelente custo-benefício.</li>
                    </ul>

                </div>

                <div className='lastContainer'>
                    <Link style={{ textDecoration: 'none' }} to="/produtos">
                        <h1 className='listTitle'>Produtos</h1>
                    </Link>
                    <Carousel
                        infinite
                        arrowLeft={SamplePrevArrow()}
                        arrowRight={SampleNextArrow()}
                        addArrowClickHandler
                        dots
                        autoPlay={4500}
                        animationSpeed={2000}
                        slidesPerPage={4}
                    >
                        <Link style={{ textDecoration: 'none' }} to="/produtos">
                            <img src={roupa1} alt="fotos de https://www.freepik.com/free-photos-vectors/icon Icon vector created by freepik - www.freepik.com" />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/produtos">
                            <img src={roupa2} alt="roupa2" />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/produtos">
                            <img src={roupa3} alt="roupa3" />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/produtos">
                            <img src={roupa4} alt="roupa4" />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/produtos">
                            <img src={roupa5} alt="roupa5" />
                        </Link>

                    </Carousel>
                    <br />

                </div>
            </div>
        </>
    );
}

export default function Home() {

    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    )


}


