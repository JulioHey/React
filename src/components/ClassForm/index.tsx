import React, { useMemo, useState, useCallback } from 'react';
import NumberFormat from 'react-number-format';

import profile from '../../assets/images/profile.jpg';

import InputClassForm from '../InputClassForm';
import Select from '../Select';

import {Section, FullSection, Title, FormSection, FirstSection, ProfileImage, ProfileName } from  './styles';

const ClassForm: React.FC  = () => {
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ bio, setBio ] = useState('');
    const [ price, setPrice] = useState('');
    const [ weekDay, setWeekDay ] = useState('');
    const [ from, setFrom ] = useState('');
    const [ to, setTo ] = useState('');

    const handleChangeSubject = useCallback((e) => {
        setSubject(e.value)
    }, [])

    const handleChangeWeekDay = useCallback((e) => {
        setWeekDay(e.value)
    }, [])

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

    const WhatsAppInput = useMemo(()=> {
        return (
            <NumberFormat 
                customInput={InputClassForm}
                label="WhatsApp" 
                width="282px" 
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                format="+55 (##) # #### ####"
                mask="_"
            />
        )
    }, [whatsapp])

    const BioInput = useMemo(() => {
        return (
            <InputClassForm 
                textarea="textarea" 
                label="Biografia " 
                width="700px"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            />
        )
    }, [bio])

    const SubjectInput = useMemo(() => {
        return (
            <Select 
                width="390px" 
                label="Matéria" 
                populatedOptions={subjectArrray} 
                placeholder="Selecione o que você quer ensinar"
                value={subjectArrray.find(obj => obj.value === subject)}
                onChangeFunction={(e: any) => handleChangeSubject(e)}
            />
        )
    }, [ subject, subjectArrray, handleChangeSubject ])

    const PriceInput = useMemo(() => {
        return (
            <NumberFormat
                customInput={InputClassForm}
                name="price"
                label="Custo da sua aula por hora" 
                width="192px"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="R$"
                thousandSeparator={true}
                allowedDecimalSeparators={[",", "."]}
            />
        )
    }, [price])

    const WeekDayInput = useMemo(() => {
        return (<Select 
        width="320px" 
        label="Dia da semana" 
        populatedOptions={weekDayArray} 
        placeholder="Selecione o dia"
        value={weekDayArray.find(obj => obj.value === weekDay)}
        onChangeFunction={(e: any) => handleChangeWeekDay(e)}
    />)
    }, [weekDay, weekDayArray, handleChangeWeekDay])

    const FromInput = useMemo(() => {
        return (
            <NumberFormat
                customInput={InputClassForm} 
                label="Das" 
                width="80px"
                tipe="time"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                format="## : ##"
            />
        )
    }, [ from ])

    const ToInput = useMemo(() => {
        return (
            <NumberFormat
                customInput={InputClassForm} 
                label="Até" 
                width="80px"
                tipe="time"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                format="## : ##"
            />
        )
    }, [ to ])

    return (
        <FormSection>
            <FullSection className="first">
                <Title>Seus dados</Title>
                <FirstSection>
                    <Section>
                        <ProfileImage src={profile} />
                        <ProfileName>Julio Hey</ProfileName>
                    </Section>
                    {WhatsAppInput}
                </FirstSection>
                <Section>
                    {BioInput}
                </Section>
            </FullSection>
            <FullSection>
            <Title>Sobre a aula</Title>
                <FirstSection>
                    {SubjectInput}
                    {PriceInput}
                </FirstSection>
            </FullSection>
            <FullSection>
                <Title>Horários disponíveis</Title>
                <FirstSection>
                    {WeekDayInput}
                    {FromInput}
                    {ToInput}
                </FirstSection>
            </FullSection>
        </FormSection>
    )
}

export default ClassForm;