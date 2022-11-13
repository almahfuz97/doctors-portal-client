import React from 'react'

export default function InfoCard({ data }) {
    const { name, description, bgClass, icon } = data;

    return (
        <div className={`card shadow-xl ${bgClass}`}>
            <div className="card-body">
                <div className='flex flex-col md:flex-row'>
                    <div className='mr-0 lg:mr-6 mb-8 md:mb-0 flex justify-center'>
                        <img src={icon} alt="" className=' w-20 md:w-full' />
                    </div>
                    <div className=' text-white'>
                        <h2 className=" font-bold text-center md:text-start">{name}</h2>
                        <p className=' text-center md:text-start'>{description}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
