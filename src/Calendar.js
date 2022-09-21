import React, {  useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';



export default function Calendar(props) {
    const {view, date, ...others} = props;

    const calendarRef = useRef();
    

    useEffect(() => {
        changeView(view);
    }, [view]);

    useEffect(() => {
        gotoDate(date)
    })


    const changeView = view => {
        const API = getApi();
        console.log('API here', API)
        return API && API.changeView(view);
    }

    const getApi = () => {
        const { current: calendarDom } = calendarRef;
        
        return calendarDom ? calendarDom.getApi() : null;
    }
    
    const gotoDate = date => {
        const API = getApi()
        API && API.gotoDate(date)
    }

    return (
        <FullCalendar
            {...others}
            ref={calendarRef}
            defaultView={view} 
            plugins={[timeGridPlugin, dayGridPlugin]} />
    );
}