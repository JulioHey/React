import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`

export const SideSection = styled(Section)`
    height: 100vh;
    width: 50vw;

    display: flex;
    flex-direction: column;
    background-color: #F0F0F7;
`
export const StyledLink = styled(Link)`
    align-self: flex-start;

    position: absolute;
    left: 150px;
    top: 10px;
`

export const BackImage = styled.img`
`
