import React from 'react'
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/Shared/Buttons/PrimaryButton'
export default function DentalCare() {
    return (
        <div className=' mt-40 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-40 '>
            <div className='w-full lg:w-1/2 lg:mr-24 flex justify-center mb-12 lg:mb-0  '>
                <img src={treatment} alt="" className='rounded-lg' />
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
                <div>
                    <h2 className=' text-5xl font-bold mb-6'>Exceptional Dental Care, on Your Terms</h2>
                    <p className='mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    )
}
