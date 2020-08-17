import React, { InputHTMLAttributes } from 'react';

import { Section, InputFloat, FloatingLabel } from './styles';

interface InputFloatingLabelProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    position: string;
    className: string;
}

const InputFloatingLabel:React.FC<InputFloatingLabelProps> = ({label, name, className, position, children, ...rest }) =>  {
    return (
    <Section>
        <InputFloat className={position} type="text" id={name} {...rest} />
        <Section className={ children ? 'floating' : 'none'} id='float' >
            <FloatingLabel className={className}>{label}</FloatingLabel>
            {children}
        </Section>
    </Section>
    );
}

export default InputFloatingLabel;