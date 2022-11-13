import React from 'react'
import doctor from '../../../assets/images/doctor.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../Components/Shared/Buttons/PrimaryButton'

export default function MakeAppointment() {
    return (
        <div className=' mt-40 flex bg-accent items-center relative lg:px-16' >
            <div className='lg:w-1/2 lg:mr-6 hidden lg:flex  '>
                <img src={doctor} alt="" className='full absolute left-12 w-[600px] bottom-0' />
            </div>
            <div className='lg:w-1/2 text-white w-full px-7 py-16'>
                <h3 className=' text-xl text-primary font-bold mb-6'>Appointment</h3>
                <h2 className=' lg:text-4xl text-3xl mb-6'>Make an appointment Today</h2>
                <p className='mb-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Make Appointment</PrimaryButton>
            </div>
        </div>
    )
}
