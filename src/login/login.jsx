import React, { useState, useEffect } from 'react';
import { AuthState } from './authState';

export function Login(props) {

    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('userName');
            localStorage.removeItem('token');
            props.onAuthChange('', AuthState.Unauthenticated);
        };
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [props]);

    async function createUser() {
        const response = await fetch(`/api/auth/create`, {
            method: 'post',
            body: JSON.stringify({ username: userName, password: password }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
            props.onAuthChange(userName, AuthState.Authenticated);
          }
          else {
            console.error('Error creating user');
        }
      }

  return (
    <main className='container-fluid bg-secondary text-center'>
        <h1>Welcome to Pokemon Team Builder</h1>
        <h2>Login Here</h2>
        <form method="post" action="main" onSubmit={createUser}>
            <div>
                <span>Username</span>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="John Smith"></input>
            </div>
            <div>
                <span>Password</span>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
            </div>
            <div>
                <button type="submit" disabled={!userName || !password}>Login</button>
            </div>
        </form>
    </main>
  );
}
