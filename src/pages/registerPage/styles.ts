import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
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

    right: 1030px;
`

export const EyeImage = styled.img`
    width: 40px;
    height: 40px;
`
