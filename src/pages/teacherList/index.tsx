import React from 'react';

import emojiSmile from '../../assets/images/icons/smile.svg';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { Section } from './styles';

const TeacherList: React.FC = () => {
    return (
        <Section>
            <PageHeader  
                pagetitle="Estudar"
                title="Estes são os Proffys disponíveis."
                emojiText="Nós temos 32 professores."
                emoji={emojiSmile}
            />
            <TeacherItem />
        </Section>
    )
}

export default TeacherList;