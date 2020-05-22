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
    }

    body{
        font: 17px 'Roboto', sans-serif;
        background: #ffffff;
        color: #000000;
        -webkit-font-smoothing: antialiased !important;
        
    }

    ul{
        list-style: none;
    }

`;