import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PageSection = styled(Section)`
    width: 100vh;
    height: 100%;

    background: #F0F0F7;
`

export const ColumnSection = styled(Section)`
    flex-direction: column;
`

export const ItemsSection = styled(Section)`
    border-top-left-radius: ${ props => props.className ? "8px" : "0"};
    border-top-right-radius: ${ props => props.className ? "8px" : "0"};

    justify-content: left;

    padding: 32px;
    width: 672px;
`
    
export const LastSection = styled(Section)`
    padding: 32px;
    width: 700px;
    background: #FAFAFC;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #E6E6F0;
`

export const TeacherItemSection = styled(ColumnSection)`
    align-items: flex-start;
    background: #FFF;
    border: 1px solid #E6E6F0;
    border-radius: 8px;
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

export const SubjectName = styled.strong`
    font: 400 16px Archivo;
    line-height: 26px;
    color: #6A6180;
    margin-left: 20px;
`

export const BioSpan = styled.span`
    margin-top: 30px;

    font: 400 16px Poppins;
    line-height: 26px;
    color: #6A6180;
`

export const PriceSpan = styled.span`
    font: 400 14px Poppins;
    line-height: 20px;
    color: #9C98A6;
`

export const PriceStrong = styled.strong`
    margin-left: 20px;
    font: 400 20px Archivo;
    line-height: 26px;
    color: #8257E5;
`

export const WhatsAppButton = styled.button`
    outline: none;
    border: none;
    border-radius: 8px;
    background-color: #04D361;
    padding: 15px 40px;
    font: 600 16px Archivo;
    line-height: 26px;
    color: #FFF;
`

export const WhatsImage = styled.img`
    margin-right: 20px;
`
