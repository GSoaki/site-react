import React from 'react';

import {
    Link
} from "react-router-dom";

import { FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa'

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Header from './../../Header'
import Footer from './../../Footer'

import Banner from '../../../Images/BannerPrincipal.jpg'


import roupa1 from '../../../Images/roupa1.png'
import roupa2 from '../../../Images/roupa2.png'
import roupa3 from '../../../Images/roupa3.png'
import roupa4 from '../../../Images/roupa4.png'
import roupa5 from '../../../Images/roupa5.png'

import './styles.css'


function Content() {
    window.scrollTo(0, 0)

    function SampleNextArrow(props) {
        return (
            <FaAngleRight
            className='FAicon'
                id="Arrow-right"
                fontSize="35px"
            />
        );
    }
    function SamplePrevArrow(props) {
        return (
            <FaAngleLeft
            className='FAicon'
                id="Arrow-left"
                fontSize="35px"
            />
        );
    }
    return (
        <div className="ContainerContainer">
            <div className='entryContainer'>

                <img style={{marginLeft:'5%'}} src={Banner} alt="https://br.freepik.com/fotos-vetores-gratis/restaurante Restaurante foto criado por freepik - br.freepik.com"/>

            </div>
            <div className='ListDiv'>
                <h1 className='listTitle'>Qualidade</h1>
                <ul className='listContainer'>
                    <li className='listItem' >
                        <FaStar className='FAicon' fontSize="35px" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit vel pharetra ornare.</li>
                    <li className='listItem'>
                        <FaStar className='FAicon' fontSize="35px" />orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit vel pharetra ornare.</li>
                    <li className='listItem'>
                        <FaStar className='FAicon' fontSize="35px" />rem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit vel pharetra ornare.</li>
                    <li className='listItem'>
                        <FaStar className='FAicon' fontSize="35px" />em ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit vel pharetra ornare.</li>
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
                            <img src={roupa2} alt=" " />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/produtos">
                            <img src={roupa3} alt=" " />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/produtos">
                            <img src={roupa4} alt=" " />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/produtos">
                            <img src={roupa5} alt=" " />
                        </Link>

                    </Carousel>
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



