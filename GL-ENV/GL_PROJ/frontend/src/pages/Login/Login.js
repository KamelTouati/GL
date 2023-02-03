import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import axios from 'axios';
import './Login.css'
import images from '../../assets/Images/index'


const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    if (isAuthenticated) {
        return <Navigate  to='/' />
    }

    return (
        <div className='grid lg:grid-cols-[1fr_550px] relative h-screen'>
            <div className='container flex justify-center items-center'>
                <div>
                    <h1>Welcome Back !</h1>
                    <p>Connexion à votre compte</p>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="mb-6">
                            <input type="email" id="email" name='email' value={email} onChange={e => onChange(e)} className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" required />
                        </div>
                        <div className="mb-6">
                            <input type="password" name='password' value={password} onChange={e => onChange(e)} minLength='6' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mot de Passe" required />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Se Connecter</button>
                    </form>
                    <button onClick={continueWithGoogle} type="button" className="relative inline-flex items-center justify-center p-0.5 mt-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#F8F8F8] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            <svg className="w-4 h-4 mr-2 -ml-1 inline-block" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Continuer avec Google
                        </span>
                    </button>
                    <br /> 
                    <p className='mt-3'>
                    Vous n'avez pas de compte ? <Link to='/signup' className='text-blue-600'>S'inscrire</Link>
                    </p>
                    <p className='mt-3'>
                    Mot de passe oublié ? <Link to='/reset-password' className='text-blue-600'>Réinitialiser le mot de passe</Link>
                    </p>
                </div>
            </div>
            <div>
                <img className='absolute hidden lg:block lg:right-0 lg:h-screen' src={images[23]} />
            </div>
        </div>

    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);