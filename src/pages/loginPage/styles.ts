import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`

export const SideSection = styled(Section)`
    height: 100vh;
    width: 50vw;

    display: flex;
    flex-direction: column;
    background-color: ${props => props.className ? "#8257E5" : "#333"};
`
