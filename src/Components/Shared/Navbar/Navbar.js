import React, { useContext } from 'react'
import { Link, NavL, NavLink, NavLinkink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider'

export default function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    const menuItems = <>
        <li>
            <NavLink className={({ isActive }) => isActive ? ' rounded-lg text-black' : ''} to='/'>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? ' rounded-lg text-black' : ''} to='/about'>
                About
            </NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? ' rounded-lg text-black' : ''} to='/appointment'>
                Appointment
            </NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? ' rounded-lg text-black' : ''} to='/reviews'>
                Reviews
            </NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? ' rounded-lg text-black' : ''} to='/contact'>
                Contact Us
            </NavLink>
        </li>
        <li>
            {
                !user?.uid ?
                    <NavLink className={({ isActive }) => isActive ? ' rounded-lg text-black' : ''} to='/login'>
                        Login
                    </NavLink>
                    :
                    <>
                        <NavLink className={({ isActive }) => isActive ? ' rounded-lg text-black' : ''} to='/dashboard'>

                            Dashboard
                        </NavLink>
                        <NavLink onClick={handleLogOut} className={({ isActive }) => isActive ? ' rounded-lg text-black' : ''} to='/login'>
                            Sign Out
                        </NavLink>
                    </>
            }
        </li>
    </>

    return (
        <div className="navbar py-5 pl-5 md:pl-24 pr-10">
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-0 md:p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>

                </div>
                <Link to='/' className=" text-[18px] w-full ">Doctors Portal</Link>
            </div>
            <label htmlFor='dashboard-drawer' tabIndex={2} className=" lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>

            </div>
        </div>
    )
}
{/* <div className="navbar py-4 pl-24 pr-10">
            <div className="flex-1">
                <a className=" normal-case text-[18px]">Doctors Portal</a>
            </div>
            <div className="flex-none">
               
            </div>
        </div>
<ul className="menu menu-horizontal p-0">
<li>
    <NavLink className={({ isActive }) => isActive ? ' rounded-lg text-black' : ''} to='/'>
        Home
    </NavLink>
</li>
<li>
    <NavLink className={({ isActive }) => isActive ? ' rounded-lg bg-accent text-white' : ''} to='/about'>
        About
    </NavLink>
</li>
<li>
    <NavLink className={({ isActive }) => isActive ? ' rounded-lg bg-accent text-white' : ''} to='/appointment'>
        Appointment
    </NavLink>
</li>
<li>
    <NavLink className={({ isActive }) => isActive ? ' rounded-lg bg-accent text-white' : ''} to='/reviews'>
        Reviews
    </NavLink>
</li>
<li>
    <NavLink className={({ isActive }) => isActive ? ' rounded-lg bg-accent text-white' : ''} to='/contact'>
        Contact Us
    </NavLink>
</li>
<li>
    <NavLink className={({ isActive }) => isActive ? ' rounded-lg bg-accent text-white' : ''} to='/login'>
        Login
    </NavLink>
</li>
</ul> */}