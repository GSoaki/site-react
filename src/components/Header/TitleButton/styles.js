import styled from 'styled-components'

export const TitleButton = styled.button`
    outline: none;
    color: white;
    font-size: 20px;
    margin-right:30px;
    padding:15px;
    border-style: none none solid none;
    border-color:#ffffff;
    background-color: #17a3a1;

    @media(max-width:1076px){
        padding:11px;
        margin-right:9px;
    }
    @media(max-width:900px){
        font-size: 8px;
        padding:8px;
        margin-right:10px;
    }

`;