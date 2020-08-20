import React, { InputHTMLAttributes } from 'react';

import { Section, Input, PlaceHolderLabel, TopLabel, TextArea } from './styles';

interface InputClassFormProps extends InputHTMLAttributes<HTMLInputElement>{
    textarea?: string,
    naem?: string,
    label?: string,
    width?: string,
    type?: string,
    placeholder?: string,
    isHeader?: string
}

const InputClassForm: React.FC<InputClassFormProps> = ({textarea, name, label, width, type, placeholder, isHeader, ...rest}) => {
    return (
        <Section className={width}>
            <TopLabel className={isHeader} >{label}</TopLabel>
            { textarea ? 
            <TextArea />
            : 
            <Input className={name} type={type} {...rest} />}
            { placeholder ?
            <PlaceHolderLabel>{placeholder}</PlaceHolderLabel>
            : ""}
        </Section>
    )
}

export default InputClassForm;