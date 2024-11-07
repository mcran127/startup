import React from 'react';

export function Login() {
  return (
    <main className='container-fluid bg-secondary text-center'>
        <h1>Welcome to Pokemon Team Builder</h1>
        <h2>Login Here</h2>
        <form method="get" action="main">
            <div>
                <span>Username</span>
                <input type="email" placeholder="John Smith"></input>
            </div>
            <div>
                <span>Password</span>
                <input type="password" placeholder="password"></input>
            </div>
            <div>
                <button type="submit" onClick={() => createUser()} disabled={!userName || !password}>Login</button>
            </div>
        </form>
    </main>
  );
}
