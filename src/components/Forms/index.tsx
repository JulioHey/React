import React from 'react';

import { Section, Form, Title, SubTitle, EnterButton } from './styles'

interface FormsProps {
    title: string;
    subtitle?: string;
    chidren?: JSX.Element;
    submitButton: string;
}

const Forms: React.FC<FormsProps> = ({title, subtitle, children, submitButton}) => {
    return (
        <Section>
            <Form>
                <Title>{title}</Title>
                { subtitle ? <SubTitle>{subtitle}</SubTitle> : ""}
                {children}
                <EnterButton type="submit">{submitButton}</EnterButton>
            </Form>
        </Section>
    )
}

export default Forms;