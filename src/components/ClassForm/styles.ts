import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FullSection = styled(Section)`
    position: relative;
    top: -100px;

    width: 726px;
    flex-direction:column;

    padding: 56px 64px;
    background: #FFF;
    border-radius: 8px;
`

export const FormSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 165vh;
    flex-direction: column;

    background-color:#F0F0F7;
`

export const Title = styled.strong`
    font: 600 24px Archivo;
    line-height: 34px;
    color: #32264D;
    width: 726px;

    justify-self: left;
    padding-bottom: 16px;
    border-bottom: 1px solid #E6E6F0;
`

export const FirstSection = styled(Section)`
    margin-top: 26px;
    flex-direction: row;
    width: 726px;

    justify-content: space-between;
`

export const ProfileImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`

export const ProfileName = styled.strong`
    font: 700 26px Archivo;
    color: #32264D;
    line-height: 36px;

    margin-left: 20px;
`