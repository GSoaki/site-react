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
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit vel pharetra ornare. Duis aliquam, lorem in sodales sodales, magna orci pellentesque erat, eget interdum nibh sem eu est. Nam suscipit pretium lectus, vitae ultricies nulla tempus quis. Etiam vulputate ligula non tortor tempus posuere. Nam sed urna nibh. Ut a libero tellus. Cras gravida tempor arcu, ut lobortis urna mollis non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</div>
            </div>
            <div className='RightDiv'>
                <h1>Comprometimento</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit vel pharetra ornare. Duis aliquam, lorem in sodales sodales, magna orci pellentesque erat, eget interdum nibh sem eu est. Nam suscipit pretium lectus, vitae ultricies nulla tempus quis. Etiam vulputate ligula non tortor tempus posuere. Nam sed urna nibh. Ut a libero tellus. Cras gravida tempor arcu, ut lobortis urna mollis non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</div>
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


