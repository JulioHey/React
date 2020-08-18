import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Section = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #8257E5;
`

export const BackgroundImage = styled.img`
    position: absolute;
    justify-self: center;

    height: 80vh;
    width: 80vw;

`

export const ContentSection = styled.div`
    display: grid;
    align-self: center;

    grid-template-rows: 1.5fr 1fr 1fr 1.5fr;

    grid-template-areas:
    'check'
    'title'
    'subtitle'
    'button';

    height: 500px;
`

export const SuccessIcon = styled.img`
    grid-area: check;
    height: 100px;
    
    justify-self: center;

`

export const Strong = styled.strong`
    grid-area: title;

    font: 700 60px Archivo;
    color: #FFFFFF;
    text-align: center;
    justify-self: center;
`

export const H3 = styled.h3`
    grid-area: subtitle;

    width: 500px;

    font: 400 18px Poppins;
    color: #CFBFF5;
    text-align: center;
    justify-self: center;
`

export const StyledLink = styled(Link)`
    grid-area: button;
    cursor: pointer;
    position: relative;


    font: 400 16px Poppins;
    color: #FFFFFF;
    background-color: #04D361;

    padding-top: 15px;
    line-height: 26px;

    justify-self: center;   
    text-align: center;
    text-decoration: none;
    justify-content: center;

    width: 200px;
    height: 41px;
    border-radius: 8px;
`