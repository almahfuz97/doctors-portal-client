import React from 'react'

export default function TestimonialCard({ testimony }) {
    const { name, img, review, location } = testimony;
    return (
        <div className='p-8 shadow rounded-lg drop-shadow'>
            <div>
                <p className='mb-9'>{review}</p>
            </div>
            <div className='flex'>
                <div className='mr-4'>
                    <img src={img} alt="" className='rounded-full w-12 h-12' />
                </div>
                <div>
                    <h3 className=' text-xl font-semibold'>{name}</h3>
                    <p className=''>{location}</p>
                </div>
            </div>
        </div>
    )
}
