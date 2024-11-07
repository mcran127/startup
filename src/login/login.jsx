import React from 'react';
import { AuthState } from './authState';

export function Login(props) {

    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');

    async function createUser() {
        localStorage.setItem('userName', userName);
        props.onAuthChange(userName, AuthState.Authenticated);
      }

  return (
    <main className='container-fluid bg-secondary text-center'>
        <h1>Welcome to Pokemon Team Builder</h1>
        <h2>Login Here</h2>
        <form method="get" action="main" onSubmit={createUser}>
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
