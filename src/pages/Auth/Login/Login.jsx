import React, { useState } from 'react';
import Input from '@components/Input/Input';
import UserIcon from '@assets/icons/UserIcon';
import KeyIcon from '@assets/icons/LockIcon';
import axios from 'axios';

import './Login.css';
import Button from '@components/Button/Button';
import GoogleColorIcon from '@assets/icons/GoogleColorIcon';
import FacebookColorIcon from '@assets/icons/FacebookColorIcon';
import LinkedinColorIcon from '@assets/icons/LinkedinColorIcon';
import Tooltip from '@components/Tooltip/Tooltip';

const Login = () => {
    const [dataLogin, setDataLogin] = useState({
        user: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataLogin(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     const { data } = await axios.post("", {
        //         username: dataLogin.user,
        //         password: dataLogin.password
        //     });

        //     if (data.token) {
        //         sessionStorage.setItem("token", data.token);
        //         window.location.href = "/dashboard";
        //     }
        // } catch (error) {
        //     console.error("Error al iniciar sesión:", error.response?.data?.message || error.message);
        // }

        dataLogin.user === 'admin' && dataLogin.password === 'admin' ? window.location.href = "/dashboard" : alert("Error")

    }


    return (
        <div className='login-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>


                <Input
                    type="text"
                    label="Usuario"
                    name="user"
                    icon={<UserIcon className="login-icon" />}
                    value={dataLogin.user}
                    onChange={handleChange}
                    required
                />

                <Input
                    type="password"
                    label="Contraseña"
                    name="password"
                    icon={<KeyIcon className="login-icon" />}
                    value={dataLogin.password}
                    onChange={handleChange}
                    required
                />

                <div className='login-options'>
                    <Input type="checkbox" label="Mantenerme conectado" />
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>

                <button type='submit' className='login-btn'>Iniciar Sesión</button>

                <div className='login-social-sign'>
                    <div className='login-divider-container'>

                        <span className='login-divider'></span><p >Iniciar Sesión con</p><span className='login-divider'></span>
                    </div>
                    <div className='login-social-btns'>
                        <Tooltip text="Iniciar sesión con Google">
                            <Button variant='circle'><GoogleColorIcon className="login-social-icon" /></Button>
                        </Tooltip>

                        <Tooltip text="Iniciar sesión con Facebook">
                            <Button variant='circle'><FacebookColorIcon className="login-social-icon" /></Button>
                        </Tooltip>

                        <Tooltip text="Iniciar sesión con Linkedin">
                            <Button variant='circle'><LinkedinColorIcon className="login-social-icon" /></Button>
                        </Tooltip>
                    </div>
                </div>
                <h4>¿No tienes una cuenta? <a href="/register"> Registrate</a></h4>
            </form>
        </div>
    );
};

export default Login;
