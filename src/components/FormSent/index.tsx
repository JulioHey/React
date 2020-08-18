import React from 'react';

import successIcon from '../../assets/images/icons/success-check-icon.svg';
import backgroundSucess from '../../assets/images/success-background.svg';

import { Section, BackgroundImage, ContentSection, SuccessIcon, Strong, H3, StyledLink } from './styles';

interface FormSentProps {
    title: string;
    text: string;
    buttonText: string;
    link: string;
}

const FormSent: React.FC<FormSentProps> = ({title, text, buttonText, link}) => {
    return (
        <Section>
            <BackgroundImage className='background'src={backgroundSucess} alt=""/>
            <ContentSection>
                    <SuccessIcon src={successIcon} alt=""/>
                    <Strong>{title}</Strong>
                    <H3>{text}</H3>
                    <StyledLink to={link}>{buttonText}</StyledLink>
            </ContentSection>
        </Section>
    )
}

export default FormSent;