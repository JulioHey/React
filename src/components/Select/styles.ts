import styled from 'styled-components';
import Select from 'react-select'; 
import { CSSProperties } from 'react';

export interface Props { [key: string]: any; }

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: ${ props => props.className};
`

export const StyledSelect = {
    control: (provided: CSSProperties,state: Props) => ({
        display: "flex",
        background: "#FAFAFC",
        width: state.selectProps.width,
        height: 58,
        border:  "1px solid #E6E6F0",
        borderRadius: 8,
    }),
    option: (provided: CSSProperties,state: Props) => ({
        padding: 15,
        background: state.isSelected || state.isFocused ? '#EBEBF5' : '#F8F8FC',
        borderLeft: state.isSelected || state.isFocused ? "solid 1px #8257E5" : "initial",
        color: '#6A6180',
      }),
    indicatorSeparator: () => ({
        display: "none",
    }),
}

export const StyledSelectDale = styled(Select)`
    font: 400 16px Poppins;
    line-height: 26px;
    margin-right: ${ props => props.width === "320px" ? "60px" : "initial"};
    align-self: flex-start;
`

export const TopLabel = styled.label`
    font: 400 14px Poppins;
    line-height: 24px;
    color: ${ props => props.className ? '#D4C2FF' : '#9C98A6' };


    justify-self: flex-start;
    align-self: flex-start;
    position: relative;
    margin-bottom: 7px;
    margin-top: 20px;   
`

export const PlaceHolderLabel = styled.label`
    position: relative;
    font: 400 16px Poppins;
    line-height: 26px;
    color:#9C98A6;

    align-self: flex-start;
`