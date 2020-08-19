import React, { useMemo } from 'react';

import profile from '../../assets/images/profile.jpg';

import InputClassForm from '../InputClassForm';
import Select from '../Select';

import {Section, FullSection, Title, FormSection, FirstSection, ProfileImage, ProfileName } from  './styles';

const ClassForm: React.FC  = () => {
    const subjectArrray = useMemo(() => {
        return ([
            { value: 'Artes', label: 'Artes'},
            { value: 'Química', label: 'Química'},
            { value: 'Matemática', label: 'Matemática'},
            { value: 'Português', label: 'Português'},
            { value: 'Geografia', label: 'Geografia'},
            { value: 'História', label: 'História'},
            { value: 'Biologia', label: 'Biologia'},
            { value: 'Física', label: 'Física'},
            { value: 'Inglês', label: 'Inglês'}
        ])
    }, []);

    const weekDayArray = useMemo(() => {
        return ([
            { value: '1', label: 'Domingo'},
            { value: '2', label: 'Segunda'},
            { value: '3', label: 'Terça'},
            { value: '4', label: 'Quarta'},
            { value: '5', label: 'Quinta'},
            { value: '6', label: 'Sexta'},
            { value: '7', label: 'Sábado'},
        ])
    }, []);

    return (
        <FormSection>
            <FullSection className="first">
                <Title>Seus dados</Title>
                <FirstSection>
                    <Section>
                        <ProfileImage src={profile} />
                        <ProfileName>Julio Hey</ProfileName>
                    </Section>
                    <InputClassForm label="WhatsApp" width="282px"/>
                </FirstSection>
                <Section>
                    <InputClassForm type="textarea" label="Biografia " width="700px"/>
                </Section>
            </FullSection>
            <FullSection>
            <Title>Sobre a aula</Title>
                <FirstSection>
                    <Select width="390px" label="Matéria" populatedOptions={subjectArrray} placeholder="Selecione o que você quer ensinar"/>
                    <InputClassForm type="" label="Custo da sua aula por hora " width="192px" />
                </FirstSection>
            </FullSection>
            <FullSection>
                <Title>Horários disponíveis</Title>
                <FirstSection>
                    <Select width="320px" label="Dia da semana" populatedOptions={weekDayArray} placeholder="Selecione o dia"/>
                    <InputClassForm type="" label="Das " width="100px" />
                    <InputClassForm type="" label="Até " width="100px" />
                </FirstSection>
            </FullSection>
        </FormSection>
    )
}

export default ClassForm;