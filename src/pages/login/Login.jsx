import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signInWithEmailAndPass, signInWithGoogle } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            await signInWithEmailAndPass(email, password);
            
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="max-w-4xl font-poppins p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 text-center capitalize dark:text-white">Login</h2>

            <form onSubmit={handleLogin}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                        <input
                            id="emailAddress"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Login</button>
                </div>
                <p className="mt-4 block text-center text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Don't Have An Account? <Link className='text-purple-500' to='/signup'>Sign Up</Link>
                </p>
            </form>

            
            <div className="flex justify-center mt-4">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-purple-500 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700" onClick={signInWithGoogle}>
                    Login with Google
                </button>
            </div>
        </section>
    );
};

export default Login;
