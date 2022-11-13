import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'

export default function Main() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
