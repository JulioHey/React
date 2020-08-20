import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: ${ props => props.className};
`

export const Input = styled.input`
    width: 100%;
    outline: none;
    border:  1px solid #E6E6F0;
    height: 26px;
    background-color: #FAFAFC;
    border-radius: 8px;

    padding: 15px 24px;
    font: 400 16px Poppins;
    line-height: 26px;
    color:#000;
    text-align: ${ props => props.className ? "right" : "inital"};
`

export const TopLabel = styled.label`
    font: 400 14px Poppins;
    line-height: 24px;
    color: ${ props => props.className ? '#D4C2FF' : '#9C98A6' };

    width: 200px;

    align-self: flex-start;
    right: 20px;
    position: relative;
    margin-bottom: 7px;
    margin-top: 20px;   
`

export const PlaceHolderLabel = styled.label`
    position: absolute;
    font: 400 16px Poppins;
    padding-top: 50px;
    line-height: 26px;
    color:#9C98A6;
    align-self: flex-start;
`

export const TextArea = styled.textarea`
    border-radius: 8px;

    width: 695px;
    height: 150px;
    max-height: 300px;

    resize: none;
    outline: none;
    border: 1px solid #E6E6F0;
    background: #FAFAFC;

    padding: 15px 24px;
    font: 400 16px Poppins;
    line-height: 26px;
`