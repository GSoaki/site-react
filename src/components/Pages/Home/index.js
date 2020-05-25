import React from 'react';

import Header from './../../Header'
import Footer from './../../Footer'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import styled from 'styled-components';

import clothes1 from '../../../img/clothes1.jpg'
import clothes2 from '../../../img/clothes2.jpg'
import clothes3 from '../../../img/clothes3.jpg'
import clothes4 from '../../../img/clothes4.jpg'
import clothes5 from '../../../img/clothes5.jpg'
import clothes6 from '../../../img/clothes6.jpg'


import './styles.css'

const Wrapper = styled.div`
    width:50%;
    height:50%;
    margin-left:auto;
    margin-right:auto;
    position: relative;
    top:10%;
    text-align:center;
`;

function Content() {
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
                        autoPlay={4500}
                        animationSpeed={2000}
                    >

                        <img src={clothes1} style={{ height: 450 }} alt="Foto de Andrea Piacquadio no Pexels" />
                        <img src={clothes2} style={{ height: 450 }} alt="Foto de Andrea Piacquadio no Pexels" />
                        <img src={clothes3} style={{ height: 450 }} alt="Foto de Andrea Piacquadio no Pexels" />
                        <img src={clothes4} style={{ height: 450 }} alt="Foto de Andrea Piacquadio no Pexels" />
                        <img src={clothes5} style={{ height: 450 }} alt="Foto de Andrea Piacquadio no Pexels" />
                        <img src={clothes6} style={{ height: 450 }} alt="Foto de Andrea Piacquadio no Pexels" />

                    </Carousel>

                </Wrapper>
            </div>
            <div className='lastContainer'>

            </div>
        </div>
    );
}

export default function Home() {

    return (
        <>
        <Header />
        <Content/>
        <Footer />
        </>
    )


}

