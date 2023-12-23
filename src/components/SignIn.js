import React, { useState } from 'react'
import axios from 'axios'

const SignIn = () => {

    const [values, setvalues] = useState({
        email: '',
        password: ''
    })

    const { email, password } = values

    const handleChange = (name) => (e) => {
        setvalues({ ...values, [name]: e.target.value })
    }

    const handleApi = async (event) => {
        event.preventDefault();
        const userData = {
            email: email,
            password: password
        };
        const apiUrl = process.env.REACT_APP_API_URL;
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userData);
            setvalues({ ...values, email: '', password: '' })
        } catch (error) {
            console.log('failed', error)
        }
    }

    return (
        <div className='h-full w-full flex flex-row'>
            <img
                src="assets/images/maxresdefault.svg"
                alt="logo"
                className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat'
            />
            <section className='flex flex-1 justify-center items-center flex-col py-10'>

                <div className="sm:w-420 flex-center flex-col ">
                    <form className="flex flex-col gap-5 w-full mt-4" onSubmit={handleApi}>
                        <h2 className="text-3xl font-bold mb-8">Sign In</h2>
                        <p className="text-light-3 small-medium md:base-regular mt-2">
                            To create new account , please enter new details
                        </p>
                        <div className="mb-2">
                            <label
                                className="block text-start text-gray-700 text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleChange('email')}
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                className="block text-start text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handleChange('password')}
                            />
                        </div>
                        <div className="flex flex-col gap-5 w-full mt-4">
                            ...
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>

                    </form>
                </div>
            </section>

        </div>
    );
};

export default SignIn;