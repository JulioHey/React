import React from 'react';
import { SideSection, Img, BackgroundImg, SpanLogo } from './styles'

import background from '../../assets/images/background.svg';
import logo from '../../assets/images/logo.svg';


const PageSide: React.FC = () => {
    return (
    <SideSection className="PageSide">
        <BackgroundImg src={background}></BackgroundImg>
        <Img src={logo}></Img>
        <SpanLogo>Sua plataforma de estudos online</SpanLogo>
    </SideSection>

    )
}

export default PageSide;