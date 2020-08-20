import styled from 'styled-components';

export const Section = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: ${ props => props.className === "emoji" ? "row" : "column"};

    justify-content:center;
    align-items: center;

    margin-left: ${props => props.className === "titleSubTitle" ? "352px" : "initial"};
    margin-right: ${ props => props.className === "emoji" ? "130px" : "inital"};
`

export const TopBarSection = styled(Section)`
    height: 64px;
    flex-direction: row;

    background-color: #8257E5;
`

export const HeaderContent = styled(Section)`
    flex-direction: row;
    justify-content: space-between;

    height: 220px;
    padding-bottom: 50px;
    background-color: #8257E5;
`

export const TopBarSpan = styled.strong`
    font: 500 16px Archivo;
    line-height: 24px;
    color: #D4C2FF;
`

export const LogoImage = styled.img`
    position: absolute;
    width: 52;
    height: 14px;

    right: 160px;
`

export const Title = styled.strong`
    font: 700 36px Archivo;
    line-height: 42px;
    color: #FFF;

    align-self: flex-start;
    width: 380px;
`

export const SubTitle = styled.strong`
    margin-top: 24px;

    font: 400 16px Poppins;
    line-height: 26px;
    color: #D4C2FF;

    align-self: flex-start;
    width: 280px;
`

export const EmojiSpan = styled.span`
    font: 400 12px Poppins;
    line-height: 20px;
    color: #D4C2FF;

    width: 100px;
    justify-self: right;
`

export const Emoji = styled.img`
    height: 35px;
    width: auto;

    margin-right: 24px;
`
