import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import profile from '../../assets/images/profile.jpg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClasseIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import logOut from '../../assets/images/icons/log-out.svg';

import { Section, HeaderSection, ProfileImage, ProfileSpan, Button, LogOutImage, ContentSection, Img, SpanLogo, LogoSection, BackgroundImage, HeroSection } from './styles'

const LandingPage: React.FC = () => {
    return (
        <Section>
            <HeaderSection>
                <Section>
                    <ProfileImage src={profile} />
                    <ProfileSpan>Julio Hey</ProfileSpan>
                </Section>
                <Button>
                    <LogOutImage src={logOut} />
                </Button>
            </HeaderSection>
            <ContentSection>
                <LogoSection>
                    <Img src={logoImg}></Img>
                    <SpanLogo>Sua plataforma de estudos online</SpanLogo>
                </LogoSection>
                <HeroSection>
                    <BackgroundImage src={landingImg} />
                </HeroSection>
            </ContentSection>
        </Section>
    )
}

export default LandingPage;
