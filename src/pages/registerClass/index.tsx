import React from 'react';

import PageHeader from '../../components/PageHeader';
import ClassForm from '../../components/ClassForm';

import emojiRocket from '../../assets/images/icons/rocket.svg';

import { Section } from './styles'

const RegisterClass: React.FC = () => {
    return (
        <Section>
            <PageHeader 
                title="Que incrível que você quer dar aula"
                subtitle="O primeiro passo é preencher esse formulário de inscrição."
                pagetitle="Dar aulas"
                emoji={emojiRocket}
                emojiText="Prepare-se! Vai ser o máximo."
            />
            <ClassForm />
        </Section>
    )
}

export default RegisterClass;