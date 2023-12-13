import React from 'react'

const SignUp = () => {
    return (
        <div className='h-full w-full flex flex-row'>
            <img
                src=""
                alt="logo"
                className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat'
            />
            <section className='flex flex-1 justify-center items-center flex-col py-10'>

                <div className="sm:w-420 flex-center flex-col ">
                    <form className="flex flex-col gap-5 w-full mt-4">
                        <h2 className="text-3xl font-bold mb-8">Sign Up</h2>
                        <p className="text-light-3 small-medium md:base-regular mt-2">
                            To create new account , please enter new details
                        </p>
                        <div className="mb-2">
                            <label
                                className="block text-start text-gray-700 text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Name"
                            />
                        </div>

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
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-start text-gray-700 text-sm font-bold mb-2"
                                htmlFor="confirmPassword"
                            >
                                Confirm Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <button
                            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default SignUp
