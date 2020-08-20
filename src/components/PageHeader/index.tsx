import React from 'react';

import BackLink from '../../components/BackLink';

import logoImg from '../../assets/images/logo.svg';

import { Section, TopBarSection, TopBarSpan, LogoImage, HeaderContent, Title, SubTitle, EmojiSpan, Emoji} from './styles';

interface PageHeaderProps {
    pagetitle?: string;
    title?: string;
    subtitle?: string;
    emoji?: string;
    emojiText?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, subtitle, emoji, emojiText, pagetitle, ...props}) => {
    return (
        <Section>
            <TopBarSection>
                <BackLink link="/landing" />
                <TopBarSpan>{pagetitle}</TopBarSpan>
                <LogoImage src={logoImg} />
            </TopBarSection>
            <HeaderContent>
                <Section className="titleSubTitle">
                    <Title>{title}</Title>
                    <SubTitle>{subtitle}</SubTitle>
                </Section>
                <Section className="emoji">
                    <Emoji src={emoji} />
                    <EmojiSpan>{emojiText}</EmojiSpan>
                </Section>
            </HeaderContent>
            {props.children}
        </Section>
    )
}

export default PageHeader;