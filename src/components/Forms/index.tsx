import React from 'react';

import { Section, Form, Title, SubTitle, EnterButton } from './styles'

interface FormsProps {
    title: string;
    subtitle?: string;
    chidren?: JSX.Element;
    submitButton: string;
    onSubmitFunction?: any
}

const Forms: React.FC<FormsProps> = ({title, subtitle, children, submitButton, onSubmitFunction}) => {
    return (
        <Section>
            <Form onSubmit={onSubmitFunction}>
                <Title>{title}</Title>
                { subtitle ? <SubTitle>{subtitle}</SubTitle> : ""}
                {children}
                <EnterButton type="submit">{submitButton}</EnterButton>
            </Form>
        </Section>
    )
}

export default Forms;