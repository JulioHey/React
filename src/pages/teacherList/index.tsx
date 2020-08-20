import React, { useCallback, useState, useMemo } from 'react';
import NumberFormat from 'react-number-format';

import emojiSmile from '../../assets/images/icons/smile.svg';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';

import { Section, HeaderSection } from './styles';
import InputClassForm from '../../components/InputClassForm';

    // Essas aqui são constante q n vao ser mudadas nunca fiquei em duvida se chamava elas aqui ou fora da função
const subjectArrray = [
        { value: 'Artes', label: 'Artes'},
        { value: 'Química', label: 'Química'},
        { value: 'Matemática', label: 'Matemática'},
        { value: 'Português', label: 'Português'},
        { value: 'Geografia', label: 'Geografia'},
        { value: 'História', label: 'História'},
        { value: 'Biologia', label: 'Biologia'},
        { value: 'Física', label: 'Física'},
        { value: 'Inglês', label: 'Inglês'}
    ]

const weekDayArray = [
        { value: '1', label: 'Domingo'},
        { value: '2', label: 'Segunda'},
        { value: '3', label: 'Terça'},
        { value: '4', label: 'Quarta'},
        { value: '5', label: 'Quinta'},
        { value: '6', label: 'Sexta'},
        { value: '7', label: 'Sábado'},
    ]

const TeacherList: React.FC = () => {
    const [scheduleItem, setScheduleItem ] = useState({weekDay: '', subject: '', time: ''});

    const handleChangeScheduleItem = useCallback((  field: string, value: string) => {
        const updatedScheduleItems = {...scheduleItem, [field]: value}

        setScheduleItem(updatedScheduleItems)
    }, [scheduleItem]);

    const WeekDayInput = useMemo(() => {
        return (<Select 
            width="300px" 
            label="Dia da semana" 
            isHeader="header"
            populatedOptions={weekDayArray} 
            placeholder="Selecione"
            value={weekDayArray.find(obj => obj.value === scheduleItem.weekDay)}
            onChangeFunction={(e: any) => handleChangeScheduleItem("weekDay", e.value)}
    />)
    }, [ weekDayArray, handleChangeScheduleItem]);

    const TimeInput = useMemo(() => {
        return (
            <NumberFormat
                customInput={InputClassForm} 
                label="Horário" 
                isHeader="header"
                name="time"
                width="100px"
                value={scheduleItem.time}
                onChange={(e) => handleChangeScheduleItem("time", e.target.value)}
                format="##:## horas"
            />
        )
    }, [ handleChangeScheduleItem ]);

    const SubjectInput = useMemo(() => {
        return (
            <Select 
                width="300px" 
                label="Matéria" 
                isHeader="header"
                populatedOptions={subjectArrray} 
                placeholder="Selecione"
                value={subjectArrray.find(obj => obj.value === scheduleItem.subject)}
                onChangeFunction={(e: any) => handleChangeScheduleItem("subject", e.value)}
            />
        )
    }, [ subjectArrray, handleChangeScheduleItem ]);

    return (
        <Section>
            <PageHeader  
                pagetitle="Estudar"
                title="Estes são os Proffys disponíveis."
                emojiText="Nós temos 32 professores."
                emoji={emojiSmile}
            >
                <HeaderSection>
                    {SubjectInput}
                    {WeekDayInput}
                    {TimeInput}
                </HeaderSection>
            </PageHeader>
            <TeacherItem />
        </Section>
    )
}

export default TeacherList;