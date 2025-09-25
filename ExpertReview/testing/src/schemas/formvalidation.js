import * as Yup from 'yup';

export const adminloginSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(5, "Username must be at least 5 characters")
        .required('Username is required'),
    password: Yup
        .string() 
        .min(5, "Password must be at least 5 characters")
        .required('Password is required'),
})