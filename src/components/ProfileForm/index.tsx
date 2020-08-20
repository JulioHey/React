import React, { useMemo, useState, useCallback } from 'react';
import NumberFormat from 'react-number-format';

import profile from '../../assets/images/profile.jpg';

import InputClassForm from '../InputClassForm';
import Select from '../Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import {Section, FullSection, Title, FormSection, FirstSection, ProfileImage, ProfileName, AddNewScheduleItemButton,
 ExcludeScheduleItemButton, AtentionLogo, AtentionSpan , SubmitButton} from  './styles';

const ProfileForm: React.FC  = () => {
    const [ name, setName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ bio, setBio ] = useState('');
    const [ price, setPrice] = useState('');
    const [ scheduleItems, setScheduleItems ] = useState([
        {weekDay: '', to: '', from: '' },
    ]);

    // Essas aqui são constante q n vao ser mudadas nunca fiquei em duvida se chamava elas aqui ou fora da função
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

    const handleChangeSubject = useCallback((e) => {
        setSubject(e.value)
    }, []);

    const handleDeleteScheduleItem = useCallback((position) => {
        let updatedScheduleItems = scheduleItems.slice(0, position);

        const updated2 = scheduleItems.slice(position + 1, scheduleItems.length - position + 1);

        updatedScheduleItems = updatedScheduleItems.concat(updated2)

        setScheduleItems(updatedScheduleItems)
    }, [scheduleItems]);

    const handleChangeScheduleItem = useCallback(( position: number, field: string, value: string) => {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value}
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItems)
    }, [scheduleItems]);

    const handleAddNewScheduleItem = useCallback(() => {
        setScheduleItems([
            ...scheduleItems,
            {weekDay: '', to: '', from: ''}
        ]);
    }, [scheduleItems]);

    const ConstructWeekDayInput = useCallback((scheduleItem, index) => {
        return (<Select 
        width="400px" 
        label="Dia da semana" 
        populatedOptions={weekDayArray} 
        placeholder="Selecione o dia"
        value={weekDayArray.find(obj => obj.value === scheduleItem.weekDay)}
        onChangeFunction={(e: any) => handleChangeScheduleItem(index, "weekDay", e.value)}
    />)
    }, [ weekDayArray, handleChangeScheduleItem]);

    const ConstructFromInput = useCallback((scheduleItem, index) => {
        return (
            <NumberFormat
                customInput={InputClassForm} 
                label="Das" 
                name="from"
                width="100px"
                tipe="time"
                value={scheduleItem.from}
                onChange={(e) => handleChangeScheduleItem(index, "from", e.target.value)}
                format="##:## horas"
            />
        )
    }, [ handleChangeScheduleItem ]);

    const ConstructToInput = useCallback((scheduleItem, index) => {
        return (
            <NumberFormat
                customInput={InputClassForm} 
                label="Até"
                name="to"
                width="100px"
                tipe="time"
                value={scheduleItem.to}
                onChange={(e) => handleChangeScheduleItem(index, "to", e.target.value)}
                format="##:## horas"
            />
        )
    }, [  handleChangeScheduleItem ]);

    const handleScheduleItemsInput = useMemo(() => {
        return (scheduleItems.map((scheduleItem, index) => {
            return (
                <Section key={index}>
                    <FirstSection  className="scheduleItem">
                        {ConstructWeekDayInput(scheduleItem, index)}
                        {ConstructFromInput(scheduleItem, index)}
                        {ConstructToInput(scheduleItem, index)}
                    </FirstSection>
                    { scheduleItems.length > 1 ? 
                    <ExcludeScheduleItemButton onClick={(e) => handleDeleteScheduleItem(index)}>Excluir Horário</ExcludeScheduleItemButton>
                    : ""}
                </Section>
            )
        }))
    }, [ scheduleItems, ConstructWeekDayInput, ConstructFromInput, ConstructToInput, handleDeleteScheduleItem]);

    const NameInput = useMemo(() => {
        return (
        <InputClassForm 
            label="Nome " 
            width="300px"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    )
    }, [name]);

    const LastNameInput = useMemo(() => {
        return (
        <InputClassForm 
            label="Sobrenome" 
            width="280px"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
    )
    }, [lastName]);

    const EmailInput = useMemo(() => {
        return (
        <InputClassForm 
            label="E-mail" 
            width="400px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
    )
    }, [email])

    const WhatsAppInput = useMemo(()=> {
        return (
            <NumberFormat 
                customInput={InputClassForm}
                label="WhatsApp" 
                width="200px" 
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                format="+55 (##) # #### ####"
                mask="_"
            />
        )
    }, [whatsapp]);

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
    }, [bio]);

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
    }, [ subject, subjectArrray, handleChangeSubject ]);

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
    }, [price]);

    return (
        <FormSection>
            <FullSection className="first">
                <Title>Seus dados</Title>
                <FirstSection>
                    {NameInput}
                    {LastNameInput}
                </FirstSection>                
                <FirstSection>
                    {EmailInput}
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
                <FirstSection>
                    <Title>Horários disponíveis</Title>
                    <AddNewScheduleItemButton onClick={handleAddNewScheduleItem}>+ Novo Horário</AddNewScheduleItemButton>
                </FirstSection>
                {handleScheduleItemsInput}
            </FullSection>
            <FullSection className="last">
                <FirstSection>
                    <Section>
                        <AtentionLogo src={warningIcon} />
                        <Section className="column">
                            <AtentionSpan>Importante!</AtentionSpan>
                            <AtentionSpan>Preencha todos os dados corretamente.</AtentionSpan>
                        </Section>
                    </Section>
                    <SubmitButton>Salvar cadastro</SubmitButton>
                </FirstSection>
            </FullSection>
        </FormSection>
    )
}

export default ProfileForm;