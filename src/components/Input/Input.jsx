import React, { useState } from 'react';
import './Input.css';
import EyeIcon from '@assets/icons/EyeIcon';
import EyeSlashIcon from '@assets/icons/EyeSlashIcon';

const Input = ({ type, label, icon, value = '', onChange, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    if (type === 'checkbox') {
        return (
            <label className="input-checkbox-label">
                <input
                    type="checkbox"
                    className="input-checkbox"
                    // checked={value}
                    onChange={onChange}
                    {...props}
                />
                <span class="custom-checkbox"></span>
                {label}
            </label>
        );
    }

    return (
        <div className='input-wrapper'>
            {label && <label className='input-label'>{label}</label>}
            <div className='input-container'>
                {icon && <div className='input-icon'>{icon}</div>}
                <input
                    className={`input ${icon ? 'icon' : ''}`}
                    type={type === 'password' && showPassword ? 'text' : type}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
                {type === 'password' && value && (
                    <button
                        type='button'
                        className='input-toggle-btn'
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <EyeSlashIcon className={"login-icon-btn"} /> : <EyeIcon className={"login-icon-btn"} />}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Input;
