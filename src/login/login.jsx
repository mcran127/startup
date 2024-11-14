import React, { useState, useEffect } from 'react';
import { AuthState } from './authState';
import { useNavigate } from 'react-router-dom';


export function Login(props) {

    const [userName, setUserName] = React.useState(props.userName || '');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    

    async function createUser(event) {
        event.preventDefault();
        console.log('Creating user:', userName, password); // Check if username and password are correct
      
        const response = await fetch(`/api/auth/create`, {
          method: 'POST',
          body: JSON.stringify({ username: userName, password: password }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      
        if (response.status === 200) {
          const data = await response.json();
          console.log('User created successfully', data); 
          localStorage.setItem('userName', userName);
          localStorage.setItem('token', data.token);
          
          props.onLogin(userName);
          props.onAuthChange(userName, AuthState.Authenticated);
          
          console.log('Navigating to /main');
          navigate('/main');
        } else {
          console.error('Error creating user, response status:', response.status);
          alert('Error creating user');
        }
      }
      

      async function loginUser(event) {
        event.preventDefault();
        const response = await fetch(`/api/auth/login`, {
            method: 'POST',
            body: JSON.stringify({ username: userName, password: password }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        });
    
        if (response?.status === 200) {
            const data = await response.json();
            localStorage.setItem('userName', userName);
            localStorage.setItem('token', data.token);
            props.onLogin(userName);
            props.onAuthChange(userName, AuthState.Authenticated);
            navigate('/main')
        } else {
            console.error('Login failed');
            alert('Login failed: Invalid credentials');
        }
    }
    

  return (
    <main className='container-fluid bg-secondary text-center'>
        <h1>Welcome to Pokemon Team Builder</h1>
        <h2>Login Here</h2>
        <form>
            <div>
                <span>Username</span>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="John Smith"></input>
            </div>
            <div>
                <span>Password</span>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
            </div>
            <div>
                <button type="button" onClick={loginUser} disabled={!userName || !password}>Login</button>
            </div>
            <div>
                <button type="button" onClick={createUser} disabled={!userName || !password}>Create User</button>
            </div>
        </form>
    </main>
  );
}
