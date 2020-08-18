import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`

export const HeaderSection = styled(Section)`
    width: 100vw;
    height: 64px;
    flex-direction: row;
    justify-content: space-between;
    background-color:#8257E5;
`

export const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;

    margin-left: 144px;
`

export const ProfileSpan = styled.span`
    font: 500 14px Poppins;
    line-height: 30px;
    color: #D4C2FF;

    margin-left: 16px;

`

export const Button = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: #774DD6;
    margin-right: 160px;

`

export const LogOutImage = styled.img`
    width: 25px;
    height: 25px;
`

export const ContentSection = styled.div`
    position: absolute;
    width: 100vw;
    height: 100%;

    top: 64px;
    display: grid;

    grid-template-areas: 
        "logo hero"
        "c d";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1.1fr;

`

export const LogoSection = styled(Section)`
    flex-direction: column;
    grid-area: logo;
    background-color:#8257E5;
`

export const Img = styled.img`
    width: 30rem;
    height: auto;
`

export const SpanLogo = styled.span`
    font: 400 2rem Archivo;
    color: #D4C2FF;
    line-height:28px;
    width: 290px;

    text-align: start;
`

export const HeroSection = styled(Section)`
    grid-area: hero;

    background-color:#8257E5;
`

export const BackgroundImage = styled.img`
    width: 600px;

    align-self: center;
    justify-self: center;
`
