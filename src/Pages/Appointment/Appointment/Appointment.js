import React, { useState } from 'react'
import AppointmentCalendar from '../AppointmentCalendar/AppointmentCalendar'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

export default function Appointment() {
    const [selected, setSelected] = useState(new Date());

    return (
        <div className='mt-12 px-7 lg:mt-24'>
            <AppointmentCalendar
                selected={selected}
                setSelected={setSelected} />

            <div className='flex justify-center text-2xl text-secondary mt-64'>
                <h2>Available Appointments on {format(selected, 'PP')}</h2>
            </div>
            <AvailableAppointments selected={selected} />
        </div>
    )
}
