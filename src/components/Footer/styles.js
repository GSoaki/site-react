import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    color: #ffffff;
    background-color: #148c8b;
    padding:20px;
    padding-bottom: 45px;
    display:flex;
    flex-direction:row;
    @media(max-width:900px){
        flex-direction:column;
    }
`;

export const Content = styled.div`
    height: 50%;
    width: 100%;
    color: #ffffff;
    background-color: #148c8b;
    padding: 20px;
    display:flex;
`;