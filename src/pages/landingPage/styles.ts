import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;

    flex-direction: ${ props => props.className === "welcome" ? "column" : "initial"};
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

export const ProfileLink = styled(Link)`
    text-decoration: none;
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
    height: 91%;

    top: 64px;
    display: grid;

    grid-template-areas: 
        "logo hero"
        "welcome buttons";
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

export const WelcomeSection = styled(Section)`
    margin-left: 160px;

    grid-area: welcome;

    flex-direction: row;
    justify-content: space-between;
`

export const WelcomeStrong = styled.strong`
    font: 400 20px Poppins;
    line-height: 30px;
    color: #6A6180;

    align-self:flex-start;
`

export const WelcomeStrongDarker = styled(WelcomeStrong)`
    font-weight: 700;
`

export const WelcomeSpan = styled.span`
    font: 400 12px Poppins;
    line-height: 20px;
    color: #9C98A6;
    width: 134px;

    text-align: right;
`

export const PurpleHeart = styled.img`
    margin-left: 10px;

    width: 14px;
`

export const ButtonsSection = styled(Section)`
    justify-content: left;
    grid-area: buttons;
`

export const StyledLink = styled(Link)`

    font: 700 24px Archivo;
    color: #FFF;

    border-radius: 8px;
    width: 154px;
    line-height: 40px;
    text-decoration: none;

    padding: 32px 64px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: ${ props => props.className ===  "green" ? "#04D361" : "#8257E5"};
    margin-left: ${ props => props.className ===  "green" ? "16px" : "53px"};

    margin-bottom: 27px;
` 

export const ButtonLogoImage = styled.img`
    height: 35px;
    width: auto;

    margin-right: 10px;
`
