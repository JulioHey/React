import styled from 'styled-components';

export const  Section = styled.div`
`

export const Form = styled.form`
`

export const Title =  styled.h1`
    font: 600 36px Poppins;
    line-height: 36px;
    color: #32264D;

    margin-bottom: 40px;
    max-width: 266px;
`

export const SubTitle = styled.h2`
    font: 400 16px Poppins;
    line-height: 26px;

    width: 213px;
    color:  #6A6180;
    margin-bottom: 40px;
`

export const Button = styled.button`
    outline: none;
    border: none;
`

export const EnterButton = styled(Button)`
    margin-top: 40px;

    width: 362px;
    height: 56px;

    font: 600 16px Archivo;
    line-height: 26px;
    color: #9C98A6;

    background: #DCDCE6;
    border-radius: 8px;

    &:hover {
        background: #04D361;
        color: #FFF;
    }
`