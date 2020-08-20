import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import profile from '../../assets/images/profile.jpg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClasseIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import logOut from '../../assets/images/icons/log-out.svg';

import { Section, HeaderSection, ProfileImage, ProfileSpan, Button, LogOutImage, ContentSection, Img, SpanLogo, LogoSection, BackgroundImage, 
    HeroSection, WelcomeSection, WelcomeStrong, WelcomeStrongDarker, WelcomeSpan, PurpleHeart, ButtonsSection, StyledLink, ButtonLogoImage} from './styles'

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
                <WelcomeSection>
                    <Section className="welcome">
                        <WelcomeStrong>Seja bem-vindo</WelcomeStrong>
                        <WelcomeStrongDarker>O que deseja fazer?</WelcomeStrongDarker>
                    </Section>
                    <WelcomeSpan>
                        Total de 285 conexões já realizadas
                        <PurpleHeart src={purpleHeartIcon}/>
                    </WelcomeSpan>
                </WelcomeSection>
                <ButtonsSection>
                    <StyledLink to="/teacherList">
                        <ButtonLogoImage src={studyIcon} />
                        Estudar
                    </StyledLink>
                    <StyledLink className="green" to="/registerClass">
                        <ButtonLogoImage src={giveClasseIcon} />
                        Dar aulas
                    </StyledLink>
                </ButtonsSection>
            </ContentSection>
        </Section>
    )
}

export default LandingPage;
