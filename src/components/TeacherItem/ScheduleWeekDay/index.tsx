import React from 'react';

import { ScheduleWeekDaySection, WeekDayLabel, WeekDayName } from './styles';

interface ScheduleItemProps {
    active?: string,
    weekDay?: string,
    to?: string,
    from?: string
}

const ScheduleWeekDay: React.FC<ScheduleItemProps> = ({active, weekDay, to, from}) => {
    return (
        <ScheduleWeekDaySection className={active} >
            <WeekDayLabel>Dia</WeekDayLabel>
            <WeekDayName>{weekDay}</WeekDayName>
            <WeekDayLabel>Horário</WeekDayLabel>
            { to || from ? 
            <WeekDayName>{to}h - {from}h</WeekDayName>     
            : <WeekDayName>-</WeekDayName>}
        </ScheduleWeekDaySection>
    )
}

export default ScheduleWeekDay;