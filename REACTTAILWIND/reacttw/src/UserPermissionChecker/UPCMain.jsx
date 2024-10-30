import React, { useState } from 'react'
import { Admin } from './Admin'
import { User } from './User'
import { Guest } from './Guest'

export const UPCMain = () => {
    const [role, setRole] = useState('guest'); //

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };
    return (
        <div>
            <select
                value={role}
                onChange={handleRoleChange}

            >
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="guest">Guest</option>
            </select>

            {
                role === "admin" ? <Admin /> : role === "user" ? <User /> : <Guest />
            }
        </div>
    )
}
