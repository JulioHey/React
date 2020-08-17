import styled from 'styled-components';

export const Section = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputFloat = styled.input`
    width: 350px;
    height: 52px;
    position: relative;

    border-top-right-radius:${props => props.className === 'start' || props.className === 'only' ? "8px" : "0px"};
    border-top-left-radius: ${props => props.className === 'start' || props.className === 'only' ? "8px" : "0px"};
    border-bottom-left-radius:${props => props.className === 'finish' || props.className === 'only' ? "8px" : "0px"};
    border-bottom-right-radius:${props => props.className === 'finish' || props.className === 'only' ? "8px" : "0px"};
    outline: none;



    padding-left: 10px;
    padding-top: 20px;


    background: #FAFAFC;
    border: 1px solid #E6E6F0;

    font: 400 16px Poppins;
`;

export const FloatingLabel = styled.label`
    position: relative;
    right: 350px;
    width: 100px;

    padding: 0;
    margin: 0;

    text-align: start;
    line-height: 24px;

    color: #9C98A6;
    font: ${ props => props.className === "floating-label" ? "400 16px Poppins" : "400 12px Poppins"};
    bottom: ${ props => props.className === "floating-label" ? "0px" : "15px"};
`;


