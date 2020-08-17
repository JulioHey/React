import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`

export const SideSection = styled(Section)`
    height: 100vh;
    width: 50vw;

    display: flex;
    flex-direction: column;
    background-color: #F0F0F7;
`

export const FormLogin = styled.form`
`

export const Title =  styled.h1`
    font: 600 36px Poppins;
    line-height: 36px;
    color: #32264D;
`

export const Button = styled.button`
    outline: none;
    border: none;

`

export const ButtonEye = styled(Button)`
    position:absolute;
    background-color: rgba(0,0,0,0);

    right: 220px;
`

export const EyeImage = styled.img`
    width: 40px;
    height: 40px;

`
