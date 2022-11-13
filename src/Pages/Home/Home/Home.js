import React from 'react'
import DentalCare from '../DentalCare/DentalCare'
import Banner from '../Header/Banner/Banner'
import MakeAppointment from '../MakeAppointment/MakeAppointment'
import Services from '../Services/Services'

export default function Home() {
    return (
        <div>
            <Banner />
            <Services />
            <DentalCare />
            <MakeAppointment />
        </div>
    )
}
