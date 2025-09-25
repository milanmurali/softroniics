import axios from 'axios';
import { useFormik } from 'formik';
import React, { use, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminloginSchema } from '../schemas/formvalidation';

export const AdminLogin = () => {

    const navigate = useNavigate();
    const VITE_BACKEND_URL_BASE = import.meta.env.VITE_BACKEND_URL_BASE;

    // useEffect(() => {
    //     const userid = localStorage.getItem('userid');
    //     if (userid) {
    //         navigate('/dashboard');
    //     }
    // }, [navigate]);

    const [loginError, setLoginError] = useState(null);
    //actual submit function
    const actualSubmit = async (values, actions) => {
        try {
            console.table(values)
            const response = await axios.post(`${VITE_BACKEND_URL_BASE}/user/login`, values);
            console.log(response);

            if (response.status === 200) {
                // const userid = response.data._id;
                // localStorage.setItem('userid', userid);
                const username = response.data.username;
                localStorage.setItem('username', username);
                navigate('/dashboard');
            }
            actions.resetForm();

        }
        catch (error) {
            console.log("Error Occured", error);
            if (error.response && error.response.status === 401) {
                setLoginError(error.response.data.message || 'Invalid username or password');
            } else {
                setLoginError('An unexpected error occurred. Please try again.');
            }
        }
        finally {
            actions.setSubmitting(false);
        }
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: adminloginSchema,
        onSubmit: actualSubmit,
    });


    // console.log(formik.errors); 

    const baseInputClass = "bg-[#374151] placeholder-gray-400 text-white rounded-md p-3 focus:outline-none";
    const errorRing = "border-2 border-red-500 focus:ring focus:ring-red-500";
    const validRing = "border-2 border-transparent focus:ring focus:ring-[#3B82F6]";



    return (

        <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white font-sans px-4">
            <div className="w-full max-w-md bg-[#1F2937] rounded-lg shadow-lg p-8 space-y-6">
                <h1 className="text-4xl font-extrabold text-[#3B82F6] text-center mb-6">Admin Login</h1>

                <form className="flex flex-col space-y-4" onSubmit={formik.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        name='username'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.username && formik.touched.username ? `${baseInputClass} ${errorRing}` : `${baseInputClass} ${validRing}`}
                    />
                    {formik.errors.username && formik.touched.username && (
                        <p className="text-red-500 text-sm">{formik.errors.username}</p>
                    )}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.password && formik.touched.password ? `${baseInputClass} ${errorRing}` : `${baseInputClass} ${validRing}`}
                    />

                    {formik.errors.password && formik.touched.password && (
                        <p className="text-red-500 text-sm">{formik.errors.password}</p>
                    )}
                    <button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3 rounded-md transition-colors duration-300"
                    >
                        Login
                    </button>
                    {loginError && <p className="text-red-500 text-center">{loginError}</p>}

                </form>
            </div>
        </div>

    )
}
