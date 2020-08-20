import React from 'react';

import BackLink from '../../components/BackLink';

import logoImg from '../../assets/images/logo.svg';
import backgroundSucess from '../../assets/images/profile-background.svg';
import profilePic from '../../assets/images/profile.jpg';
import camera from '../../assets/images/icons/camera.svg';

import { Section, TopBarSection, TopBarSpan, LogoImage, HeaderContent, Title, SubTitle, EmojiSpan, 
Emoji, BackgroundProfile, ProfileImage, ChangePictureButton,ChangePictureImage } from './styles';

interface PageHeaderProps {
    isSmall?: string;
    pagetitle?: string;
    title?: string;
    subtitle?: string;
    emoji?: string;
    emojiText?: string;
    profile?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, subtitle, emoji, emojiText, pagetitle, profile, isSmall, ...props}) => {
    return (
        <Section>
            <TopBarSection>
                <BackLink link="/landing" />
                <TopBarSpan>{pagetitle}</TopBarSpan>
                <LogoImage src={logoImg} />
            </TopBarSection>
            { profile ? 
            <HeaderContent className="profile">
                <BackgroundProfile src={backgroundSucess}/>
                <ProfileImage src={profilePic} />
                <ChangePictureButton>
                    <ChangePictureImage src={camera} />
                </ChangePictureButton>
                <Title className="profile">Julio</Title>
                <SubTitle className="profile">Matemática</SubTitle>
            </HeaderContent> 
            : 
            <HeaderContent className={isSmall}>
                <Section className="titleSubTitle">
                    <Title>{title}</Title>
                    <SubTitle>{subtitle}</SubTitle>
                </Section>
                <Section className="emoji">
                    <Emoji src={emoji} />
                    <EmojiSpan>{emojiText}</EmojiSpan>
                </Section>
            </HeaderContent>
            }
            {props.children}
        </Section>
    )
}

export default PageHeader;