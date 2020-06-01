import React, { useState } from 'react';

import Header from './../../Header'
import Footer from './../../Footer'

import { FaTimes } from 'react-icons/fa'

import './styles.css'

import productList from './productList.json'

import image from './../../../Images/roupa1.png'


function Content() {
    window.scrollTo(0, 0)

    const [focusedItem, setFocusedItem] = useState('')

    const products = productList;

    const imagem = image

    function productStyle(productProp, propName) {

        if (propName === 'size' && productProp != "") {
            return (
                <div>
                    Tamanhos
                    <div className="productStyle">{productProp.id,productProp.map(prop => <div className="sizeStyle">{prop}</div>)}</div>
                </div>
            );
        }
        else if (propName === 'fabric' && productProp != "") {
            return (
                <div >
                    Tecidos
                    <div className="productStyle">{productProp.id,productProp.map(prop => <div className="fabricStyle">{prop}</div>)}</div>
                </div>
            );
        }

    }

    function gridItem(products) {

        return (
            <li key={products.id} className="gridItem" onClick={() => itemFocus(products)}>
                <h3>{products.name}</h3>

                <img id="productImage" src={imagem} alt=" " />

                <div>{products.description}</div>
              
            </li>
        );
    }

    function closeItemFocus() {
        document.getElementById('gridContainer').style.opacity = 1;
        document.getElementById('title').style.opacity = 1;
        setFocusedItem('')

    }

    function itemFocus(products) {
        if (focusedItem == '') {
            document.getElementById('gridContainer').style.opacity = 0.5;
            document.getElementById('title').style.opacity = 0.5;

            setFocusedItem(<div id="focusedItem">
                <FaTimes
                    className='FAicon CloseIcon'
                    fontSize="35px"
                    onClick={() => closeItemFocus()}
                />
                <h3>{products.name}</h3>

                <img id="productImage" src={imagem} alt=" " />

                <div>{products.description}</div>
                <br/>
                <br/>

                {productStyle(products.fabrics, 'fabric')}
                <br/>

                {productStyle(products.sizes, 'size')}</div>)
        }
    }

    return (
        <div>
            <h1 id="title" style={{ textAlign: 'center', color: '#148c8b', marginTop: '10%' }}>Produtos</h1>
            {focusedItem}
            <ul id="gridContainer">{products.map(products => gridItem(products))}</ul>
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


