import React from 'react'
import PrimaryButton from '../../../Components/Shared/Buttons/PrimaryButton'
import BookingModal from './BookingModal'

export default function AppointmentCard({ option, selected, setBookOption }) {
    const { name, slots } = option
    return (
        <div className="card w-96 bg-base-100 shadow-xl justify-center">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold text-secondary">{name}</h2>
                <p className='text-center text-xs'>{slots[0]}</p>
                <p className='text-center text-xs'>{`${slots.length} ${slots.length > 1 ? 'spaces' : 'space'} available`}</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="my-modal-6"
                        className="btn btn-primary text-white"
                        onClick={() => { setBookOption(option) }}
                    >
                        Book Appointment
                    </label>

                </div>
            </div>
        </div>
    )
}
