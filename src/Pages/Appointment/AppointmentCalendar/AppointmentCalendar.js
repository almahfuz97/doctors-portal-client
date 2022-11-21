import React, { useState } from 'react'
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

export default function AppointmentCalendar({ selected, setSelected }) {
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-center items-center'>
                <div className=' lg:w-1/2 justify-center flex'>
                    <DayPicker
                        mode='single'
                        selected={selected}
                        onSelect={setSelected}
                    >

                    </DayPicker>
                </div>
                <div className='lg:w-1/2 flex justify-center'>
                    <img src={chair} alt="" className='w-full' />
                </div>
            </div>
        </div>


    )

}