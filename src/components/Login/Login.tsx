import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials:unknown) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }: any) {
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    if (!token) return alert('Invalid username or password');
    setToken(token);
  }
  
  const showHidePassword = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const passwordInput = document.querySelector('#inputPassword');
    if (!passwordInput) return;
    if (passwordInput.getAttribute('type') === 'password') {
      passwordInput.setAttribute('type', 'text');
    } else {
      passwordInput.setAttribute('type', 'password');
    }
  }


  return(
    <div className="d-flex flex-column align-items-center">
      <h1>Please Log In</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label htmlFor="inputEmail" className="visually-hidden">Email</label>
          <input type="email" className="form-control" id="inputEmail" placeholder="email@example.com" onChange={e => setUserName(e.target.value)} />
        </div>
        <div className="col-auto">
          <div className="input-group">
            <label htmlFor="inputPassword" className="visually-hidden">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <div className="input-group-text">
              <input className="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input" onChange={showHidePassword}/>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Login</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}