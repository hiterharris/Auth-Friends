import React, {useState} from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({
            username: '',
            password: '',
    });
    
    const handleChange = e => {
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <div className="Login">
            <form className='login-form'>
                <h1>Login</h1>
                <input
                    type='text'
                    placeholder='Username'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    );
    }

export default Login;
