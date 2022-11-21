import { format } from 'date-fns';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

export default function BookingModal({ bookOption, selected }) {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { name, slots } = bookOption;
    const { user, loading } = useContext(AuthContext);
    console.log(format(selected, 'PP'))

    const onSubmit = data => {

        console.log(data)

        const booking = {
            appointmentDate: format(selected, 'PP'),
            treatment: name,
            patientName: data.fullName,
            slot: data.slots,
            email: data.email,
            phone: data.phone

        }
        console.log(booking)
    }
    return (
        <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-ghost">X</label>
                    </div>
                    <h3 className="font-bold text-lg">{name}</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>

                        <input
                            className='input-bordered input rounded-lg w-full mb-4 mt-4  p-2 bg-slate-100'
                            disabled
                            type="text"
                            placeholder={format(selected, 'PP')}
                        /> <br />

                        <select
                            {...register('slots')}
                            className='p-2 select-bordered select  mb-4 rounded-lg w-full  '
                        >
                            {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>

                        <input
                            {...register('fullName', { required: 'Name is required' })}
                            type="text"
                            defaultValue={user?.displayName}
                            placeholder="Full Name"
                            className=" input input-bordered w-full "
                        />
                        {
                            errors?.fullName && <small className='text-red-500 block mb-4'>{errors.fullName.message}</small>
                        }
                        <input
                            {...register('phone', { required: 'Phone number is required' })}
                            type="number"
                            placeholder="Phone Number"
                            className=" input input-bordered w-full "
                        />
                        {
                            errors?.phone && <small className='text-red-500 block mb-4'>{errors.phone.message}</small>
                        }

                        <input
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            defaultValue={user?.email}
                            readOnly
                            placeholder="Email"
                            className="input input-bordered w-full " />
                        {
                            errors?.email && <small className='text-red-500 block mb-4'>{errors.email.message}</small>
                        }

                        <input className='btn btn-primary mt-4' type="submit" value="Submit"
                        />
                    </form>


                </div>
            </div>
        </div>
    )
}
