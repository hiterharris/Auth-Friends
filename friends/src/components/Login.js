import React from 'react';

const Login = () => {
  return (
      <div className="Login">
        <form className='login-form'>
            <input
                type='text'
                placeholder='Username'
                name='username'
            />
            <input
                type='text'
                placeholder='Password'
                name='password'
            />
            <button>Login</button>
        </form>
      </div>
  );
}

export default Login;
