import React from 'react'

export default function PrimaryButton({ children }) {
    return (
        <button className="btn bg-gradient-to-r border-none  from-primary to-secondary font-bold text-white">{children}</button>
    )
}
