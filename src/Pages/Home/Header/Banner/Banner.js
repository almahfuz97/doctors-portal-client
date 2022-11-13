import React from 'react'
import chair from '../../../../assets/images/chair.png'
import PrimaryButton from '../../../../Components/Shared/Buttons/PrimaryButton'
import chairBg from '../../../../assets/images/bg.png'
import InfoCards from '../InfoCards/InfoCards'

export default function Banner() {
    return (
        <div style={{ background: `url(${chairBg})  no-repeat  left` }}>
            <div className='flex px-6 md:px-20 flex-col-reverse md:flex-row lg:pt-52 items-center'>
                <div className='mr-6 md:w-1/2  w-full  '>
                    <h2 className='mb-3 text-accent font-bold text-5xl'>Your New Smile Starts Here</h2>
                    <p className=' text-accent mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dignissimos voluptates molestiae enim numquam amet repudiandae, aperiam rerum laudantium nobis!</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
                <div className='w-full mb-14 md:w-1/2'>
                    <img src={chair} alt="" className='w-full' />
                </div>
            </div>
            <div>
                <InfoCards />
            </div>
        </div>
    )
}
