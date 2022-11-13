import React from 'react'
import { NavL, NavLink, NavLinkink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar py-4 pl-24 pr-10">
            <div className="flex-1">
                <a className=" normal-case text-[18px]">Doctors Portal</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-ghost rounded-lg bg-accent text-white' : ''} to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-ghost rounded-lg bg-accent text-white' : ''} to='/about'>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-ghost rounded-lg bg-accent text-white' : ''} to='/appointment'>
                            Appointment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-ghost rounded-lg bg-accent text-white' : ''} to='/reviews'>
                            Reviews
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-ghost rounded-lg bg-accent text-white' : ''} to='/contact'>
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-ghost rounded-lg bg-accent text-white' : ''} to='/login'>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
