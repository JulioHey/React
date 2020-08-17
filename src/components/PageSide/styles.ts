import styled from 'styled-components';

export const SideSection = styled.div`
    height: 100vh;
    width: 50vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.className ? "#8257E5" : "#333"};
`

export const Img = styled.img`
    width: 30rem;
    height: auto;
`

export const BackgroundImg = styled(Img)`
    position: absolute;
    left: auto;
    top: 5rem;

    height: 80vh;
    width: 50vw;

`

export const SpanLogo = styled.span`
    font: 400 2rem Archivo;
    color: #D4C2FF;
    line-height:28px;
    width: 290px;
`
