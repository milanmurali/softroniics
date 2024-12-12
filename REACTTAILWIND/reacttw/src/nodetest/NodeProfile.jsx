import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const NodeProfile = () => {
    const nav = useNavigate()

    let id = localStorage.getItem('id')

    const [viewdata, setviewdata] = useState('');

    const fetchData = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:6969/api/user/viewid/${id}`);
            console.log(response.data);
            setviewdata(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    const signout = () => {
        localStorage.clear()
        nav('/login')

    }
    return (
        <div>
            <p>{viewdata.name}</p>
            <p>{viewdata.age}</p>
            <p>{viewdata.email}</p>
            <p>{viewdata.password}</p>

            <button
                onClick={signout}
            >
                Signout
            </button>
        </div>
    )
}
