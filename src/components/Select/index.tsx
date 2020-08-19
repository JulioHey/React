import React from 'react';

import { Section, TopLabel, StyledSelect, StyledSelectDale } from './styles';

interface SelectProps {
    width: string,
    label: string,
    placeholder: string,
    populatedOptions: Array<{
        value: string;
        label: string;
    }>,
    value?: any,
    onChangeFunction?: any
}

const Select2: React.FC<SelectProps> = ({populatedOptions, width, label, placeholder, value, onChangeFunction }) => {

    return (
        <Section className="382px">
            <TopLabel>{label}</TopLabel>
            <StyledSelectDale 
                options={populatedOptions} 
                styles={StyledSelect} 
                placeholder={placeholder} 
                width={width}
                value={value}
                onChange={onChangeFunction}
            />
        </Section>
    )
}

export default Select2;