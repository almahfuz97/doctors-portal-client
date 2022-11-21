import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import Spinner from '../../../Components/Spinner/Spinner';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

export default function AvailableAppointments({ selected }) {
    // const [options, setOptions] = useState();
    const [bookOption, setBookOption] = useState(null)
    console.log(selected)

    const { isLoading, isError, data: options } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch(`${process.env.REACT_APP_URL}/appointmentOptions`)
            .then(res => res.json())
    })

    if (isLoading) return <Spinner />
    return (
        <div>
            <div className=' mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>
                {
                    options && options.map(option => <AppointmentCard
                        key={option._id}
                        option={option}
                        selected={selected}
                        setBookOption={setBookOption}
                    >
                    </AppointmentCard>)
                }
            </div>
            <div>
                {
                    bookOption && <BookingModal
                        bookOption={bookOption}
                        selected={selected}
                    >

                    </BookingModal>
                }
            </div>
        </div >
    )
}
