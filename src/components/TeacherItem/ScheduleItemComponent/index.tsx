import React, { useMemo } from 'react';

import ScheduleWeekDay from '../ScheduleWeekDay';

import {Section } from './styles';

const ScheduleItemComponent: React.FC = () => {

    const scheduleItem = useMemo(() => {
        return [
            {weekDay: 'Segunda' ,to: '', from: ''},
            {weekDay: 'Terça' ,to: '', from: ''},
            {weekDay: 'Quarta' ,to: '12', from: '18'},
            {weekDay: 'Quinta' ,to: '', from: ''},
            {weekDay: 'Sexta' ,to: '12', from: '18'}
        ]
    }, [])

    const AllScheduleItems = useMemo(() => {
        var updated = scheduleItem.map((item, index) => {
            if ( scheduleItem[index].to && scheduleItem[index].from ) {
                return (<ScheduleWeekDay 
                        active="active" 
                        weekDay={scheduleItem[index].weekDay}
                        to={scheduleItem[index].to}
                        from={scheduleItem[index].from}
                        />)
            }
            return (<ScheduleWeekDay weekDay={scheduleItem[index].weekDay}/>)
        })

        return updated;
    }, [ scheduleItem])

    return (
        <Section>
            {AllScheduleItems}
        </Section>
    )
}

export default ScheduleItemComponent;