import React from 'react'
import TestimonialCard from './TestimonialCard'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import quote from '../../../assets/icons/quote.svg'

export default function Testimonial() {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]

    return (
        <div className=' mt-20'>
            <div className=' px-14 flex justify-between'>
                <div className='w-3/5'>
                    <h3 className=' text-primary font-bold text-xl'>Testimonial</h3>
                    <h2 className=' text-4xl'>What Our Patients Say</h2>
                </div>
                <div className='w-2/5 flex justify-end'>
                    <img src={quote} alt="" className=' w-40' />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-20 mt-36'>
                {
                    reviews.map(testimony => <TestimonialCard key={testimony._id} testimony={testimony} />)
                }
            </div>
        </div>
    )
}
