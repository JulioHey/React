import React from 'react';

import ScheduleItemComponent from './ScheduleItemComponent';

import profile from '../../assets/images/profile.jpg';
import whatsapp from '../../assets/images/icons/whatsapp.svg';

import { Section, TeacherItemSection, ColumnSection, ProfileImage, ProfileName, SubjectName, BioSpan,
PriceSpan, PriceStrong, LastSection, ItemsSection, WhatsAppButton, WhatsImage} from './styles';

const TeacherItem: React.FC = () => {

    return (
        <Section>
            <TeacherItemSection>
                <ItemsSection className="first">
                    <ProfileImage src={profile} />
                    <ColumnSection>
                        <ProfileName>Julio Hey</ProfileName>
                        <SubjectName>Matematica</SubjectName>
                    </ColumnSection>    
                </ItemsSection>
                <ItemsSection>
                    <BioSpan>Entusiasta de tudo blablalalbalbal. blablalalbalbal blablablalb albalb balbla balbla 
                    Entusiasta de tudo blablalalbalbal. blablalalbalbal blablablalb albalb balbla balbla
                    Entusiasta de tudo blablalalbalbal. blablalalbalbal blablablalb albalb balbla balbla
                    </BioSpan>
                </ItemsSection>
                <ScheduleItemComponent />
                <LastSection>
                    <Section>
                        <PriceSpan>Preço/ hora</PriceSpan>
                        <PriceStrong>R$ 80, 00</PriceStrong>
                    </Section>
                    <WhatsAppButton>
                        <WhatsImage src={whatsapp} />
                        Entrar em contato
                    </WhatsAppButton>
                </LastSection>
            </TeacherItemSection>
        </Section>
    )
}

export default TeacherItem;