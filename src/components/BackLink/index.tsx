import React from 'react';

import back from '../../assets/images/icons/back.svg';

import { Section, StyledLink, BackImage } from './styles';

interface BackLinkProps {
    link: string;
}

const BackLink: React.FC<BackLinkProps> = ({link}) => {
    return (
        <Section>
            <StyledLink to={link}>
                <BackImage src={back}/>
            </StyledLink>
        </Section>
    )
}

export default BackLink;