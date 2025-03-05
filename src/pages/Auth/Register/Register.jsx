import React from 'react'
import { useState } from 'react';
import Input from '@components/Input/Input';

import "./Register.css"
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }
        setError("");
        try {
            const { data } = axios.post('/', { username, password, role: "Admin" })
            console.log(data);
        } catch (error) {
            console.error(error);

        }

    };

    return (
        <div className="register-container">
            <form
                onSubmit={handleSubmit}
                className="register-form"
            >
                <h2 className="">Registro</h2>

                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    label="Usuario"
                />

                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Contraseña"
                    required
                />

                <Input
                    type="password"
                    label="Confirmar Contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                {error && <p className="register-error">{error}</p>}

                <button
                    type="submit"
                    className="register-btn"
                >
                    Registrarse
                </button>

                <h4>¿Ya tienes una cuenta? <a href="/login">Iniciar Sesión</a></h4>
            </form>
        </div>
    );
}

export default Register