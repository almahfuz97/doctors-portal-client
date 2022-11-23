import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'
import useAdmin from '../../hooks/useAdmin';

export default function DashboardLayout() {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    if (loading) return <Spinner />
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctor'>Add Doctors</Link></li>

                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    )
}
