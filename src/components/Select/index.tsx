import React from 'react';
import Select from 'react-select'; 

import { Section, TopLabel, StyledSelect, StyledSelectDale } from './styles';

interface SelectProps {
    width: string,
    label: string,
    placeholder: string,
    populatedOptions: Array<{
        value: string;
        label: string;
    }>,
}

const Select2: React.FC<SelectProps> = ({populatedOptions, width, label, placeholder}) => {

    return (
        <Section className="382px">
            <TopLabel>{label}</TopLabel>
            <StyledSelectDale options={populatedOptions} styles={StyledSelect} placeholder={placeholder} width={width}/>
        </Section>
    )
}

export default Select2;