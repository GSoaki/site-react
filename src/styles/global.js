import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

    }

    html, body, #root{
        height:100%;
    
    @media (max-width: 768px) {
        font-size: 10px;
    }

    @media (min-width: 768px) {
        font-size: 15px;
    }

    body{
        max-width:100% !important;
	    height:auto;
        background: #f5f5f5;
        color: #000000;
        -webkit-font-smoothing: antialiased !important;
    }

    ul{
        list-style: none;
    }

    img{
      
    max-width:100%;
            
    }

`;