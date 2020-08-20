import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: ${ props => props.className };
`

export const FullSection = styled(Section)`
    position: relative;
    top: -40px;

    width: 726px;
    flex-direction:column;

    padding: 56px 64px 20px;
    background: ${ props => props.className === "last" ?  "#FAFAFC" : "#FFF"};
    border-top: ${ props => props.className === "last" ?  "1px solid #E6E6F0" : ""};
    
    border-top-right-radius: ${ props => props.className === "first" ?  "8px" : ""};
    border-top-left-radius: ${ props => props.className === "first" ?  "8px" : ""};
    border-bottom-left-radius: ${ props => props.className === "last" ?  "8px" : ""};
    border-bottom-right-radius: ${ props => props.className === "last" ?  "8px" : ""};
`

export const FormSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
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
    width: 700px;
    padding:0px 35px;

    justify-content: space-between;

    border-bottom: ${ props => props.className ? "1px solid #E6E6F0" : ""};
    padding-bottom: ${ props => props.className ? "24px" : ""};
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

const Button = styled.button`
    outline: none;
    border: none;
    background-color: #FFF;

`

export const AddNewScheduleItemButton = styled(Button)`
    font: 600 24px Archivo;
    line-height: 34px;
    color: #8257E5;
    width: 300px;

    padding-bottom: 16px;
    border-bottom: 1px solid #E6E6F0;
`

export const ExcludeScheduleItemButton = styled(Button)`
    position: absolute;
    font: 600 14px Archivo;
    line-height: 24px;

    width: 200px;
    margin-top: 170px;
    color: #F00;
`

export const AtentionLogo = styled.img`
    margin-right: 10px;
`

export const AtentionSpan = styled.span`
    align-self: flex-start;
    font: 400 12px Poppins;
    line-height: 20px;
`

export const SubmitButton = styled(Button)`
    width: 197px;
    height: 56px;
    font: 600 16px Archivo;
    color: #FFF;
    background-color: #04D361;
    border-radius: 8px;
`