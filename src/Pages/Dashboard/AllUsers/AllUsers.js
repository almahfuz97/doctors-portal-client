import { useQuery } from '@tanstack/react-query'
import React, { useReducer } from 'react'
import Spinner from '../../../Components/Spinner/Spinner';

export default function AllUsers() {

    const { data: users = [], isLoading, error, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_URL}/users`);
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = (id) => {
        fetch(`${process.env.REACT_APP_URL}/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
            })
            .catch(err => console.log(err))
    }

    if (isLoading) return <Spinner />
    return (
        <div>
            <h1 className=' text-3xl font-bold'>All Users</h1>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Admin</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                {!user.role
                                    ?
                                    <td onClick={() => handleMakeAdmin(user._id)}><button className='btn btn-sm'>{`Make Admin`}</button></td>
                                    :
                                    <td><button className=''></button></td>
                                }
                                <td><button className='btn btn-sm'>{`Delete`}</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
