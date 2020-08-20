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
    flex-direction: ${ props => props.className === "profile" ? "column" : "row"};

    justify-content: space-between;

    width: 100vw;
    height: ${ props => props.className === "isSmall" ? "170px" : "300px"};
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

    align-self: ${props => props.className ? "center" : "flex-start"};
    width: 380px;
    text-align: ${props => props.className ? "center" : "flex-start"};
`

export const SubTitle = styled.strong`
    margin-top: ${props => props.className ? "0" : "24px"};
    margin-bottom: ${props => props.className ? "30px" : "0"};

    font: 400 16px Poppins;
    line-height: 26px;
    color: #D4C2FF;

    align-self: ${props => props.className ? "center" : "flex-start"};
    width: 280px;
    text-align: ${props => props.className ? "center" : "flex-start"};
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

export const BackgroundProfile = styled.img`
    position: absolute;
    height: 330px;
    left: 300px;
`

export const ProfileImage = styled.img`
    width: 180px;
    border-radius: 50%;

`

export const ChangePictureButton = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #04D361;
    border: none;
    outline: none;
    position: relative;
    top: -30px;
    left: 50px;
`

export const ChangePictureImage = styled.img`
    width: 30px;
`