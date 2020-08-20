import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ScheduleWeekDaySection = styled(Section)`
    flex-direction: column;
    width: 90px;
    height: 102px;
    padding: 16px;
    border:1px solid #E6E6F0;
    border-radius: 8px;
    background: #FAFAFC;
    opacity: ${props => props.className ? "100%" : "40%"};
    margin-right: 16px;
`

export const WeekDayLabel = styled.label`
    font: 400 12px Poppins;
    line-height: 20px;
    color: #9C98A6;
    align-self: flex-start;
`

export const WeekDayName = styled.strong`
    font: 400 16px Poppins;
    line-height: 26px;
    color: #6A6180;
    align-self: flex-start;
`