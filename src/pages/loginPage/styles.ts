import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;

    flex-direction: ${props => props.className === ("userPref" || "newUser") ? "row" : "initial"};
    margin-top: ${props => props.className === "userPref" ? "20px" : "0"};
    margin-right: ${props => props.className === "userPref" ? "100px" : "0"};

    position: ${props => props.className === "newUser" ? "absolute" : "initial"};
    bottom: ${props => props.className === "newUser" ? "48px" : "0"};
    .newUser {
        position: absolute;
        bottom: 48px;
        right: 250px;
    }
`

export const ColumnSection = styled(Section)`
    flex-direction: column;

    font: 600 16px Poppins;
    line-height: 26px;

    text-align: start;
`
export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
`

export const SideSection = styled(Section)`
    height: 100vh;
    width: 50vw;

    display: flex;
    flex-direction: column;
    background-color: #F0F0F7;
`

export const Button = styled.button`
    outline: none;
    border: none;

`

export const EyeButton = styled(Button)`
    position:absolute;
    background-color: rgba(0,0,0,0);

    right: 260px;
`

export const EyeImage = styled.img`
    width: 40px;
    height: 40px;
`

export const CheckButton= styled(Button)`
    background-color:#FAFAFC;
    width: 30px;
    height: 30px;
 
    border: 1px solid #E6E6F0;
    border-radius: 8px;
`

export const CheckImage = styled.img`
    width: 30px;
    height: 30px;
    position: relative;
    right: 6px;
    bottom: 1px;
    border-radius: 8px;
`

export const Span = styled.span`
    font: 400 14px Poppins;
    color: #9C98A6;

    margin-left: ${props => props.className === "free" ? "136px" : "10px"};
`

export const StyledLink = styled(Link)`
    font: 400 14px Poppins;
    color: #9C98A6;
    text-decoration: none;

    margin-left: 81px;
`

export const StyledH4 = styled.span`
    color: #6A6180;
`

export const StyledLinkRegister = styled(Link)`
    align-self: flex-start;
    color: #8257E5;
`

export const HeartImage = styled.img`
    margin-left: 10px;
`