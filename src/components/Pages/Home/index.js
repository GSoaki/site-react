import React from 'react';

import styled from 'styled-components';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
    padding:30px;
    position: relative;
    top:60px;
`;

export default function Content() {


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

                    <Carousel
                        infinite
                        arrowLeft={SamplePrevArrow()}
                        arrowRight={SampleNextArrow()}
                        addArrowClickHandler
                        dots
                        autoPlay={4500}
                        animationSpeed={2000}
                    >

                        <img src={clothes1} style={{height:450}} alt="Foto de Andrea Piacquadio no Pexels"></img>

                        <img src={clothes2} style={{height:450}} alt="Foto de Andrea Piacquadio no Pexels"></img>
                        <img src={clothes3} style={{height:450}} alt="Foto de Andrea Piacquadio no Pexels"></img>
                        <img src={clothes4} style={{height:450}} alt="Foto de Andrea Piacquadio no Pexels"></img>
                        <img src={clothes5} style={{height:450}} alt="Foto de Andrea Piacquadio no Pexels"></img>
                        <img src={clothes6} style={{height:450}} alt="Foto de Andrea Piacquadio no Pexels"></img>

                    </Carousel>
                    
                </Wrapper>
            </div>
            <div className='lastContainer'>
            </div>
        </div>
    )


}

