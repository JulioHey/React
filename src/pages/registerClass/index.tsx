import React from 'react';

import PageHeader from '../../components/PageHeader';
import ClassForm from '../../components/ClassForm'

import { Section } from './styles'

const RegisterClass: React.FC = () => {
    return (
        <Section>
            <PageHeader />
            <ClassForm />
        </Section>
    )
}

export default RegisterClass;