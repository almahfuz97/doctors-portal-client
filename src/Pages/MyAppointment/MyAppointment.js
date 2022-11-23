import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'

export default function MyAppointment() {
    const { user, loading } = useContext(AuthContext);

    const { data: bookings = [], isLoading, error } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_URL}/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            });
            if (res.status === 403 || res.status === 401) return null
            const data = res.json();
            return data;
        }
    })

    console.log(bookings)
    if (!bookings) return <div> something wrong</div>
    return (
        <div>
            <h3 className="text-3xl">My Appointments</h3>

            {
                isLoading ?
                    <Spinner />
                    :
                    <div className="overflow-x-auto mt-4">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Treatment</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    bookings.map((booking, i) => <tr key={booking._id}>
                                        <th>{i + 1}</th>
                                        <td>{booking.appointmentDate}</td>
                                        <td>{booking.patientName}</td>
                                        <td>{booking.treatment}</td>
                                        <td>{booking.slot}</td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}
