import React from 'react';

import {
    Link
} from "react-router-dom";

import { FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa'

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import styled from 'styled-components';

import Header from './../../Header'
import Footer from './../../Footer'

import clothes1 from '../../../img/clothes1.jpg'
import clothes2 from '../../../img/clothes2.jpg'
import clothes3 from '../../../img/clothes3.jpg'
import clothes4 from '../../../img/clothes4.jpg'
import clothes5 from '../../../img/clothes5.jpg'
import clothes6 from '../../../img/clothes6.jpg'

import roupa1 from '../../../Images/roupa1.png'
import roupa2 from '../../../Images/roupa2.png'
import roupa3 from '../../../Images/roupa3.png'
import roupa4 from '../../../Images/roupa4.png'
import roupa5 from '../../../Images/roupa5.png'



import './styles.css'

const Wrapper = styled.div`
    width:60%;
    margin-left:auto;
    margin-right:auto;
    position: relative;
    top:5%;
    text-align:center;
`;

function Content() {
    window.scrollTo(0, 0)
    
    function SampleNextArrow(props) {
        return (
            <FaAngleRight
                className="iconArrow"
                id="Arrow-right"
                fontSize="35px"
            />
        );
    }
    function SamplePrevArrow(props) {
        return (
            <FaAngleLeft
                className="iconArrow"
                id="Arrow-left"
                fontSize="35px"
            />
        );
    }
    return (
        <div className="ContainerContainer">
            <div className='entryContainer'>
                <Wrapper>
                    <h2 style={{ color: '#ffffff' }}>
                        Uniformes Escolares e Profissionais
                    </h2>
                    <br />
                    <Carousel
                        infinite
                        arrowLeft={SamplePrevArrow()}
                        arrowRight={SampleNextArrow()}
                        addArrowClickHandler
                        dots
                        autoPlay={6500}
                        animationSpeed={3000}
                    >
                        <img src={clothes1} style={{ height: 400 }} alt="Foto de Andrea Piacquadio no Pexels" />
                        <img src={clothes2} style={{ height: 400 }} alt="Foto de Andrea Piacquadio no Pexels" />
                        <img src={clothes3} style={{ height: 400 }} alt="Foto de Andrea Piacquadio no Pexels" />
                        <img src={clothes4} style={{ height: 400 }} alt="Foto de Andrea Piacquadio no Pexels" />
                        <img src={clothes5} style={{ height: 400 }} alt="Foto de Andrea Piacquadio no Pexels" />
                        <img src={clothes6} style={{ height: 400 }} alt="Foto de Andrea Piacquadio no Pexels" />
                    </Carousel>
                </Wrapper>
                <div className='TopDiv'>
                    <h1 className='listTitle'>Qualidade</h1>
                    <ul className='listContainer'>
                        <li className='listItem' >
                            <FaStar fontSize="35px" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit vel pharetra ornare.</li>
                        <li className='listItem'>
                            <FaStar fontSize="35px" />orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit vel pharetra ornare.</li>
                        <li className='listItem'>
                            <FaStar fontSize="35px" />rem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit vel pharetra ornare.</li>
                        <li className='listItem'>
                            <FaStar fontSize="35px" />em ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit vel pharetra ornare.</li>
                    </ul>

                </div>

            </div>
            <div className='lastContainer'>

                <Wrapper style={{ marginTop: '35%', width: ' 55%' }}>


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
                            <img src={roupa1} style={{ height: 150 }} alt="fotos de https://www.freepik.com/free-photos-vectors/icon Icon vector created by freepik - www.freepik.com" />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/produtos">
                            <img src={roupa2} style={{ height: 150 }} alt=" " />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/produtos">
                            <img src={roupa3} style={{ height: 150 }} alt=" " />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/produtos">
                            <img src={roupa4} style={{ height: 150 }} alt=" " />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/produtos">
                            <img src={roupa5} style={{ height: 150 }} alt=" " />
                        </Link>

                    </Carousel>

                </Wrapper>

            </div>
        </div>
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



