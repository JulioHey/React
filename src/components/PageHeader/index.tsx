import React from 'react';

import BackLink from '../../components/BackLink';

import logoImg from '../../assets/images/logo.svg';
import emojiRocket from '../../assets/images/icons/rocket.svg';

import { Section, TopBarSection, TopBarSpan, LogoImage, HeaderContent, Title, SubTitle, EmojiSpan, Emoji } from './styles';

interface PageHeaderProps {
    title?: string;
    subtitle?: string;
    emoji?: string;
    emojiText?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, subtitle, emoji, emojiText}) => {
    return (
        <Section>
            <TopBarSection>
                <BackLink link="/landing" />
                <TopBarSpan>Dar aulas</TopBarSpan>
                <LogoImage src={logoImg} />
            </TopBarSection>
            <HeaderContent>
                <Section className="titleSubTitle">
                    <Title>Que incrível que você quer dar aulas.</Title>
                    <SubTitle>O primeiro passo é preencher esse formulário de inscrição.</SubTitle>
                </Section>
                <Section className="emoji">
                    <Emoji src={emojiRocket} />
                    <EmojiSpan>Prepare-se! Vai ser o máximo.</EmojiSpan>
                </Section>
            </HeaderContent>
        </Section>
    )
}

export default PageHeader;