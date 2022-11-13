import React from 'react'

export default function ServiceCard({ service }) {
    const { name, description, img } = service;
    return (
        <div className="card px-10 shadow-xl ">
            <figure>
                <img src={img} alt="" />
            </figure>
            <div className="card-body flex flex-col justify-center items-center">
                <h2 className="card-title">{name}</h2>
                <p className=' text-center'>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    )
}
