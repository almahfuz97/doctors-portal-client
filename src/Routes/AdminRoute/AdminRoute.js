import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'
import useAdmin from '../../hooks/useAdmin'

export default function AdminRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (loading) return <Spinner />
    if (isAdminLoading) return <Spinner />
    if (user?.uid && isAdmin) return children

    return <Navigate to='/'></Navigate>
}
