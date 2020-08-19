import React from 'react';

import { Section, Input, PlaceHolderLabel, TopLabel, TextArea } from './styles';

interface InputClassFormProps {
    type?: string,
    label?: string,
    width?: string
}

const InputClassForm: React.FC<InputClassFormProps> = ({type, label, width}) => {
    return (
        <Section className={width}>
            <TopLabel>{label}</TopLabel>
            { type ? 
            <TextArea />
            : 
            <Input />}
            
        </Section>
    )
}

export default InputClassForm;